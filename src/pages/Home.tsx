import React from "react";
import Hero from "../components/Hero";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "./Gallery";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Gallery/>
      <Contact />
      
      {/* other home sections */}
    </div>
  );
}
