
import CustomerNavbar from "../components/CustomerNavbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

function CustomerHome() {
  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <CustomerNavbar />
      <Hero />
      <FeaturedProducts />
      <About />
      <WhyChooseUs />
      <Footer customer={true} />
    </div>
  );
}

export default CustomerHome;
