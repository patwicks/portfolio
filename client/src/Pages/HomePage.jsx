import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink } from "react-icons/fi";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
// components
import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
import Projects from "../components/projcets/Projects";
import Services from "../components/services/Services";
const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <div className="h-full w-full min-w-[280px] bg-white dark:bg-primary ">
      <Header />
      <Profile />
      <Services />
      <Projects />
      <div className="smooth--hover mx-5 flex items-center justify-start gap-x-2 text-primary hover:text-brand dark:text-brand dark:hover:text-white md:mx-20">
        <a
          className="decoration underline "
          href="https://github.com/patwicks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover more repository{" "}
        </a>
        <FiExternalLink />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
