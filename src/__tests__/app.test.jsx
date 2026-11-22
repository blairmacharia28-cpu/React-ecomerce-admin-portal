
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { ProductProvider } from "../context/ProductContext";

const mockProducts = [
  {
    id: "1",
    name: "Ethiopian Coffee",
    category: "Arabica",
    origin: "Ethiopia",
    price: 15,
    stock: 20,
    image: "https://example.com/coffee.jpg",
  },
  {
    id: "2",
    name: "Kenyan Coffee",
    category: "Robusta",
    origin: "Kenya",
    price: 12,
    stock: 5,
    image: "https://example.com/kenya.jpg",
  },
];

function renderApp() {
  return render(
    <ProductProvider>
      <App />
    </ProductProvider>
  );
}

describe("CoffeeOS Application Tests", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/");

    globalThis.fetch  = vi.fn((url, options = {}) => {
      const method = options.method || "GET";

      if (method === "GET") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([...mockProducts]),
        });
      }

      if (method === "POST") {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              id: "3",
              ...JSON.parse(options.body),
            }),
        });
      }

      if (method === "PATCH") {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              ...JSON.parse(options.body),
              id: "1",
            }),
        });
      }

      if (method === "DELETE") {
        return Promise.resolve({ ok: true });
      }
    });
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("displays the dashboard statistics", async () => {
    renderApp();

    expect(
      await screen.findByText("Welcome to CoffeeOS")
    ).toBeInTheDocument();

    expect(screen.getByText("Total Products")).toBeInTheDocument();
    expect(screen.getByText("Total Stock")).toBeInTheDocument();
    expect(screen.getByText("Low Stock Products")).toBeInTheDocument();

    expect(screen.getByText("2", { selector: "p" })).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("1", { selector: "p" })).toBeInTheDocument();
  });

  it("displays products on the Products page", async () => {
    renderApp();

    await screen.findByText("Welcome to CoffeeOS");

    await userEvent.click(
      screen.getByRole("link", { name: "Products" })
    );

    expect(
      await screen.findByText("Ethiopian Coffee")
    ).toBeInTheDocument();

    expect(screen.getByText("Kenyan Coffee")).toBeInTheDocument();
  });

  it("searches products dynamically", async () => {
    renderApp();

    await userEvent.click(
      await screen.findByRole("link", { name: "Products" })
    );

    const searchInput = screen.getByPlaceholderText(
      "Search by name, category, or origin..."
    );

    await userEvent.type(searchInput, "Kenya");

    expect(screen.getByText("Kenyan Coffee")).toBeInTheDocument();
    expect(screen.queryByText("Ethiopian Coffee")).not.toBeInTheDocument();
  });

  it("shows validation errors when adding an empty product", async () => {
    renderApp();

    await userEvent.click(
      await screen.findByRole("link", { name: "Add Product" })
    );

    await userEvent.click(
      screen.getByRole("button", { name: "Add Product" })
    );

    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(screen.getByText("Category is required")).toBeInTheDocument();
    expect(screen.getByText("Origin is required")).toBeInTheDocument();

    expect(globalThis.fetch ).toHaveBeenCalledTimes(1);
  });

  it("adds a new product successfully", async () => {
    renderApp();

    await userEvent.click(
      await screen.findByRole("link", { name: "Add Product" })
    );

    await userEvent.type(
      screen.getByPlaceholderText("e.g. Ethiopian Yirgacheffe"),
      "Ugandan Coffee"
    );

    await userEvent.type(
      screen.getByPlaceholderText("e.g. Arabica"),
      "Arabica"
    );

    await userEvent.type(
      screen.getByPlaceholderText("e.g. Ethiopia"),
      "Uganda"
    );

    await userEvent.type(
      screen.getByPlaceholderText("12.99"),
      "18"
    );

    await userEvent.type(
      screen.getByPlaceholderText("50"),
      "30"
    );

    await userEvent.type(
      screen.getByPlaceholderText("https://..."),
      "https://example.com/uganda.jpg"
    );

    await userEvent.click(
      screen.getByRole("button", { name: "Add Product" })
    );

    await waitFor(() => {
      expect(globalThis.fetch ).toHaveBeenCalledWith(
        "http://localhost:3000/products",
        expect.objectContaining({ method: "POST" })
      );
    });

    expect(
      await screen.findByText("Welcome to CoffeeOS")
    ).toBeInTheDocument();
  });

  it("loads and updates an existing product", async () => {
    window.history.replaceState({}, "", "/products/1/edit");

    renderApp();

    const nameInput = await screen.findByDisplayValue("Ethiopian Coffee");

    fireEvent.change(nameInput, {
      target: { name: "name", value: "Updated Coffee" },
    });

    await userEvent.click(
      screen.getByRole("button", { name: "Save Changes" })
    );

    await waitFor(() => {
      expect(globalThis.fetch ).toHaveBeenCalledWith(
        "http://localhost:3000/products/1",
        expect.objectContaining({ method: "PATCH" })
      );
    });

    expect(
      await screen.findByText("Our Coffee Products")
    ).toBeInTheDocument();
  });

  it("deletes a product after confirmation", async () => {
    vi.spyOn(window, "confirm").mockReturnValue(true);

    renderApp();

    await userEvent.click(
      await screen.findByRole("link", { name: "Products" })
    );

    await screen.findByText("Ethiopian Coffee");

    const deleteButtons = screen.getAllByRole("button", {
      name: "Delete",
    });

    await userEvent.click(deleteButtons[0]);

    await waitFor(() => {
      expect(globalThis.fetch ).toHaveBeenCalledWith(
        "http://localhost:3000/products/1",
        expect.objectContaining({ method: "DELETE" })
      );
    });

    await waitFor(() => {
      expect(screen.queryByText("Ethiopian Coffee")).not.toBeInTheDocument();
    });
  });

  it("does not delete a product when confirmation is cancelled", async () => {
    vi.spyOn(window, "confirm").mockReturnValue(false);

    renderApp();

    await userEvent.click(
      await screen.findByRole("link", { name: "Products" })
    );

    await screen.findByText("Ethiopian Coffee");

    await userEvent.click(
      screen.getAllByRole("button", { name: "Delete" })[0]
    );

    expect(screen.getByText("Ethiopian Coffee")).toBeInTheDocument();
  });
   it("displays an error when products fail to load", async () => {
  globalThis.fetch  = vi.fn().mockRejectedValue(
    new Error("Network error")
  );

  renderApp();

  expect(
    await screen.findByText("Network error")
  ).toBeInTheDocument();
}); 
  it("displays an error when adding a product fails", async () => {
    globalThis.fetch  = vi.fn((url, options = {}) => {
      const method = options.method || "GET";

      if (method === "GET") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([...mockProducts]),
        });
      }

      if (method === "POST") {
        return Promise.resolve({
          ok: false,
        });
      }
    });

    renderApp();

    await userEvent.click(
      await screen.findByRole("link", { name: "Add Product" })
    );

    await userEvent.type(
      screen.getByPlaceholderText("e.g. Ethiopian Yirgacheffe"),
      "Ugandan Coffee"
    );

    await userEvent.type(
      screen.getByPlaceholderText("e.g. Arabica"),
      "Arabica"
    );

    await userEvent.type(
      screen.getByPlaceholderText("e.g. Ethiopia"),
      "Uganda"
    );

    await userEvent.type(
      screen.getByPlaceholderText("12.99"),
      "18"
    );

    await userEvent.type(
      screen.getByPlaceholderText("50"),
      "30"
    );

    await userEvent.type(
      screen.getByPlaceholderText("https://..."),
      "https://example.com/uganda.jpg"
    );

    await userEvent.click(
      screen.getByRole("button", { name: "Add Product" })
    );

    expect(
      await screen.findByText(
        "Failed to add product. Please try again."
      )
    ).toBeInTheDocument();
  });

  it("displays an error when updating a product fails", async () => {
    globalThis.fetch  = vi.fn((url, options = {}) => {
      const method = options.method || "GET";

      if (method === "GET") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([...mockProducts]),
        });
      }

      if (method === "PATCH") {
        return Promise.resolve({
          ok: false,
        });
      }
    });

    window.history.replaceState({}, "", "/products/1/edit");

    renderApp();

    const nameInput = await screen.findByDisplayValue("Ethiopian Coffee");

    fireEvent.change(nameInput, {
      target: { name: "name", value: "Updated Coffee" },
    });

    await userEvent.click(
      screen.getByRole("button", { name: "Save Changes" })
    );

    expect(
      await screen.findByText(
        "Failed to update product. Please try again."
      )
    ).toBeInTheDocument();
  });

});