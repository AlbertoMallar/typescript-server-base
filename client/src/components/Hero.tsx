'use client';

export default function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/Bear.png')",
      }}
    >
      <div className="text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          PROYECTO NUEVO <br /> ROBUSTO Y ESCALABLE
        </h1>
        <button className="border border-white px-6 py-2 text-sm uppercase hover:bg-white hover:text-black transition">
          Solicitar presupuesto
        </button>
      </div>
    </section>
  );
}