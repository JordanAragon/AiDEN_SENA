import BarraNavegacion from "../components/comunes/BarraNavegacion";
import Footer from "../components/comunes/Footer";
import Hero from "../components/landing/Hero";
import Sistema from "../components/landing/Sistema";
import Modulos from "../components/landing/Modulos";
import Roles from "../components/landing/Roles";
import LlamadoAccion from "../components/landing/LlamadoAccion";

export default function Home() {
  return (
    <main className="landing">
      <BarraNavegacion />
      <Hero />
      <Sistema />
      <Modulos />
      <Roles />
      <LlamadoAccion />
      <Footer />
    </main>
  );
}
