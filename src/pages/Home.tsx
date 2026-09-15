import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { useScrollToHash } from "@/hooks/useScrollToHash";

export default function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
