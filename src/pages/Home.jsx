import React from "react";
import Hero from "../sections/HeroSection";
import About from "../sections/AboutSection";
import WhyChoose from "../sections/WhyChooseSection";
import ServicesSection from "../sections/ServicesSection";
import TeachStack from "../sections/TechStackSection";
import WorkFlow from "../sections/WorkflowSection";
import ContactSection from "../sections/ContactSection";

function Home() {
    return (
        <div className="home-page overflow-x-hidden">
            <Hero />
            <About />
            <WhyChoose />
            <ServicesSection />
            <TeachStack />
            <WorkFlow />
            <ContactSection />
        </div>
    );
}

export default Home;
