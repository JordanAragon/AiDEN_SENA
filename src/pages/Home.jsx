import BarraNavegacion from "../components/comunes/BarraNavegacion";
import Footer from "../components/comunes/Footer";
import Hero from "../components/landing/Hero";
import Sistema from "../components/landing/Sistema";
import Modulos from "../components/landing/Modulos";
import Roles from "../components/landing/Roles";
import LlamadoAccion from "../components/landing/LlamadoAccion";

export default function Home() {
  return (
    <div className="aiden-redesign">
      <BarraNavegacion />
      <main>
        <Hero />
        <section className="aiden-problem" id="operacion">
          <div className="aiden-shell aiden-problem-grid">
            <header>
              <p className="aiden-index">LA OPERACIÓN</p>
              <h2>El problema no es tener datos. <em>Es tenerlos separados.</em></h2>
            </header>
            <div className="aiden-problem-copy">
              <p className="aiden-kicker">Lo que AiDEN intenta ordenar</p>
              <p>Un lote cambia de etapa, consume insumos, tiene condiciones ambientales y puede presentar incidencias.</p>
              <p>Esta versión reúne esas piezas para que el equipo pueda entender qué está pasando sin buscar la información en diferentes lugares.</p>
              <a href="#sistema" className="aiden-text-link"><span>02</span> Ver cómo se conecta</a>
            </div>
          </div>
          <div className="aiden-shell aiden-problem-strip">
            <article><span>01</span><strong>Registro</strong><p>Lo que sucede queda documentado.</p></article>
            <article><span>02</span><strong>Contexto</strong><p>Cada registro pertenece a una operación.</p></article>
            <article><span>03</span><strong>Seguimiento</strong><p>Las señales relevantes pueden revisarse.</p></article>
            <article><span>04</span><strong>Decisión</strong><p>La información llega con una historia detrás.</p></article>
          </div>
        </section>
        <Sistema />
        <Modulos />
        <Roles />
        <LlamadoAccion />
      </main>
      <Footer />
    </div>
  );
}
