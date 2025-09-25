
export default function Header() {
  return (
    <header className="bg-white dark:bg-zinc-900 text-black dark:text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo o nombre */}
        <div className="text-xl font-bold">Mi Proyecto</div>

        {/* Navegación */}
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Nosotros</a>
          <a href="#" className="hover:underline">Servicios</a>
          <a href="#" className="hover:underline">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
