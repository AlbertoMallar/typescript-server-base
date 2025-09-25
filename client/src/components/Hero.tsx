"use client";
import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <button
          onClick={openModal}
          className="border border-white px-6 py-2 text-sm uppercase hover:bg-white hover:text-black transition"
        >
          Solicitar presupuesto
        </button>
        {isModalOpen && <div> Modal abierto</div>}
      </div>
    </section>
  );
}
