
export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-700">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.
      </div>
    </footer>
  );
}
