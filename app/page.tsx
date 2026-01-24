import { Header, Footer } from "@/components/layout";
import {
  Hero,
  LeadershipSnapshot,
  About,
  Experience,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LeadershipSnapshot />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
