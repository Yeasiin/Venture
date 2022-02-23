import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import Features from "../components/Features";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
