import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "operario",
  });

  const [message, setMessage] = useState("");

  function change(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function submit(event) {
    event.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("aiden_users") || "[]"
    );

    if (users.some((user) => user.email === form.email)) {
      setMessage("Este correo ya está registrado.");
      return;
    }

    users.push(form);

    localStorage.setItem(
      "aiden_users",
      JSON.stringify(users)
    );

    setMessage(
      "Cuenta creada correctamente. Ya puedes iniciar sesión."
    );
  }

  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
      <section className="flex items-center justify-center p-6 sm:p-10">
        <form
          onSubmit={submit}
          className="w-full max-w-md space-y-4"
        >
          <a
            href="/login"
            className="text-sm text-slate-500"
          >
            ← Regresar
          </a>

          <h1 className="text-3xl font-bold">
            ¡Empecemos!
          </h1>

          <p className="text-slate-500">
            Crea tu cuenta para acceder a AiDEN.
          </p>

          {message && (
            <p className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">
              {message}
            </p>
          )}

          <input
            name="name"
            value={form.name}
            onChange={change}
            className="w-full rounded-xl border p-3.5"
            placeholder="Nombre completo"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={change}
            className="w-full rounded-xl border p-3.5"
            type="email"
            placeholder="Correo electrónico"
            required
          />

          <input
            name="password"
            value={form.password}
            onChange={change}
            className="w-full rounded-xl border p-3.5"
            type="password"
            minLength="6"
            placeholder="Contraseña"
            required
          />

          <select
            name="role"
            value={form.role}
            onChange={change}
            className="w-full rounded-xl border p-3.5"
          >
            <option value="operario">
              Operario
            </option>
          </select>

          <label className="flex gap-2 text-sm">
            <input
              type="checkbox"
              required
            />
            Acepto los términos y condiciones
          </label>

          <button className="w-full rounded-xl bg-emerald-700 p-3.5 font-semibold text-white">
            Registrarme
          </button>

          <p className="text-center text-sm">
            ¿Tienes una cuenta?{" "}
            <a
              className="text-emerald-700 font-semibold"
              href="/login"
            >
              Inicia sesión
            </a>
          </p>
        </form>
      </section>

      <aside className="hidden lg:flex items-end bg-emerald-950 p-12 text-white">
        <div>
          <p className="text-emerald-300 font-semibold">
            AiDEN
          </p>
          <h2 className="mt-3 text-5xl font-bold">
            Operación inteligente para tu vivero.
          </h2>
        </div>
      </aside>
    </main>
  );
}
