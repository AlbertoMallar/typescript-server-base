"use client";

import { createPortal } from "react-dom";
import { useEffect, useId, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<Element | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    //guardar foco previo y ocultar overflow
    previouslyFocusedRef.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const node = dialogRef.current;
    if (node) {
      node.tabIndex = -1;
      node.focus();
    }

    //manejo de Escape y Tab
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab") {
        const focusables = node?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey) {
          if (active === first || !node?.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last || !node?.contains(active)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      // Restaurar scroll y foco previo
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
      const prev = previouslyFocusedRef.current as HTMLElement | null;
      if (prev) prev.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mountedRef.current || typeof window === "undefined")
    return null;

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      {/* Panel del modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        ref={dialogRef}
        className="relative z-[61] w-full max-w-lg rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-2xl ring-1 ring-black/5 outline-none transition-all"
        onClick={(e) => e.stopPropagation()} // evita cerrar si haces click dentro
      >
        <div className="flex items-start justify-between gap-4">
          {title && (
            <h2 id={titleId} className="text-xl font-semibold">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="ml-auto inline-flex items-center justify-center rounded-md px-2 py-1 text-sm opacity-80 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
            aria-label="Cerrar"
            type="button"
          >
            ×
          </button>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>,
    document.body
  );
}
