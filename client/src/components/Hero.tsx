"use client";
import { useState, useCallback } from "react";
import Modal from "./modal/Modal";
import { formToPayload, addToOutbox } from "../../lib/contact";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const payload = formToPayload(form);
      addToOutbox(payload);
      form.reset();
      closeModal();
    },
    [closeModal]
  );

  return (
    <section
      id="hero"
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
          type="button"
          onClick={openModal}
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
          className="border border-white px-6 py-2 text-sm uppercase hover:bg-white hover:text-black transition"
        >
          Solicitar presupuesto
        </button>
        <div>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Solicitar presupuesto"
          >
            <form className="grid gap-3" onSubmit={handleSubmit}>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre"
                required
                className="w-full rounded-md border border-zinc-300 px-3 py-2"
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-md border border-zinc-300 px-3 py-2"
              />
              <textarea
                id="message"
                name="message"
                required
                placeholder="Contanos sobre tu proyecto"
                className="min-h-[100px] w-full rounded-md border border-zinc-300 px-3 py-2"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-md px-4 py-2 border border-zinc-300"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-md px-4 py-2 bg-black text-white"
                >
                  Enviar
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </section>
  );
}
