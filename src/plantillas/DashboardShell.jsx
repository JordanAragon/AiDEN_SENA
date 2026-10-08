import { useState } from "react";
import BarraLateral from "../components/dashboard/BarraLateral";
import BarraSuperior from "../components/dashboard/BarraSuperior";

export default function DashboardShell({ role, title, description, children }) {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <main className="dashboard-app" id="resumen">
      <BarraLateral role={role} mobileNav={mobileNav} />

      <section className="dashboard-main">
        <BarraSuperior
          mobileNav={mobileNav}
          onToggle={() => setMobileNav((open) => !open)}
        />

        <section className="dashboard-content">
          <header className="dashboard-title">
            <p className="section-index">AIDEN / {role.toUpperCase()}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </header>
          {children}
        </section>
      </section>
    </main>
  );
}
