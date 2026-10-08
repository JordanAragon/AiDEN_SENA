export default function Footer() {
  return (
    <footer className="aiden-footer">
      <div className="aiden-shell aiden-footer-inner">
        <a href="/" className="aiden-brand">
          <span className="aiden-brand-mark" aria-hidden="true">A</span>
          <span>AiDEN</span>
        </a>
        <span>Gestión operativa para viveros</span>
        <nav aria-label="Enlaces del sitio">
          <a href="/admin">Administración</a>
          <a href="/supervisor">Supervisión</a>
        </nav>
      </div>
    </footer>
  );
}
