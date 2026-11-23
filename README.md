# CoffeeOS – Coffee E-commerce Admin Portal

CoffeeOS is a React-based administration dashboard for managing a coffee e-commerce inventory. It allows administrators to view, search, add, edit, and delete coffee products through a responsive user interface.

## Features

- **Dashboard:** View inventory statistics and product information.
- **Product Management:** Add, edit, view, and delete coffee products.
- **Dynamic Search:** Search products by name, category, and origin.
- **Form Validation:** Validate product information before submission.
- **Responsive Design:** Access the dashboard on desktop and mobile devices.
- **Error Handling:** Display feedback when server requests fail.
- **Persistent Data:** Store product information using JSON Server.

## Technologies Used

- React
- JavaScript
- Vite
- Tailwind CSS
- React Router
- Context API
- JSON Server
- Vitest
- React Testing Library
- Git and GitHub

## Project Structure

```text
src/
├── components/
├── context/
├── hooks/
├── pages/
├── __tests__/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── setupTests.js

db.json
vite.config.js
package.json
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### 1. Clone the repository

```bash
git clone git@github.com:blairmacharia28-cpu/React-ecomerce-admin-portal.git
```

### 2. Navigate into the project

```bash
cd React-ecomerce-admin-portal
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the JSON Server

```bash
npm run server
```

The backend runs at:

`http://localhost:3000`

### 5. Start the development server

Open another terminal in the project folder and run:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run server` | Start JSON Server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint |
| `npm test -- --run` | Run automated tests |

## Testing

The project uses Vitest and React Testing Library to test application functionality, including:

- Dashboard rendering
- Product listing and search
- Product creation and editing
- Product deletion
- Form validation
- Error handling

Run the tests using:

```bash
npm test -- --run
```

## Git Workflow

The project uses feature branches and pull requests to organize development and merge changes into the main branch.

## Author

Developed as a React software engineering group project.