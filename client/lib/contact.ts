export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export function formToPayload(form: HTMLFormElement): ContactPayload {
  const fd = new FormData(form);
  return {
    name: String(fd.get("name") ?? ""),
    email: String(fd.get("email") ?? ""),
    message: String(fd.get("message") ?? ""),
    createdAt: new Date().toISOString(),
  };
}

// Bandeja de salida (outbox) del localStorage
const KEY = "contact_outbox";

export function loadOutbox(): ContactPayload[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch (error) {
    return [];
  }
}

export function saveOutbox(items: ContactPayload[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function addToOutbox(payload: ContactPayload) {
  const q = loadOutbox();
  q.push(payload);
  saveOutbox(q);
}
