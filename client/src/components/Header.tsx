export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 text-black dark:text-white shadow-md backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo o nombre */}
        <div className="text-xl font-bold">Mi Proyecto</div>

        <nav className="space-x-4">
          <a href="#hero" className="hover:underline">
            Inicio
          </a>
          <a href="#nosotros" className="hover:underline">
            Nosotros
          </a>
          <a href="#servicios" className="hover:underline">
            Servicios
          </a>
          <a href="#contacto" className="hover:underline">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
