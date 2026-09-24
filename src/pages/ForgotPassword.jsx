import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(event) {
    event.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("aiden_users") || "[]"
    );

    const exists = users.some(
      (user) => user.email === email
    );

    setMessage(
      exists
        ? "Solicitud registrada. La recuperación real se conectará al backend posteriormente."
        : "No encontramos una cuenta con ese correo."
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl space-y-5"
      >
        <a
          href="/login"
          className="text-sm text-slate-500"
        >
          ← Regresar
        </a>

        <header>
          <h1 className="text-3xl font-bold">
            ¿Olvidaste tu contraseña?
          </h1>
          <p className="mt-2 text-slate-500">
            Ingresa tu correo registrado para iniciar el proceso.
          </p>
        </header>

        {message && (
          <p className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700">
            {message}
          </p>
        )}

        <input
          className="w-full rounded-xl border p-3.5"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="nombre@vivero.com"
          required
        />

        <button className="w-full rounded-xl bg-emerald-700 p-3.5 font-semibold text-white">
          Enviar solicitud
        </button>
      </form>
    </main>
  );
}
