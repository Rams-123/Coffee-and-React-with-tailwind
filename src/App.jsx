import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import Testimonials from "./components/testimonials/Testimonials";
import AppStore from "./components/appStore/AppStore";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 700,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
