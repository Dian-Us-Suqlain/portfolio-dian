import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
