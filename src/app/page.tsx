import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TestArtifacts from "@/components/TestArtifacts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1" id="home">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <TestArtifacts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}