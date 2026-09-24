import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("aiden_users") || "[]");
    const user = users.find((u) => u.email === form.email && u.password === form.password);
    if (!user) return setError("Correo o contraseña incorrectos.");
    localStorage.setItem("aiden_session", JSON.stringify({ ...user, password: undefined }));
    window.location.href = user.role === "operario" ? "/dashboard-operario" : "/";
  };

  return <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
    <form onSubmit={submit} className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl space-y-5">
      <header><p className="text-emerald-600 font-semibold">AiDEN</p><h1 className="text-3xl font-bold text-slate-900">Iniciar sesión</h1><p className="text-slate-500 mt-1">Acceso para Operarios</p></header>
      {error && <p className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">{error}</p>}
      <input className="w-full border rounded-lg p-3" type="email" placeholder="Correo electrónico" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      <input className="w-full border rounded-lg p-3" type="password" placeholder="Contraseña" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/>
      <button className="w-full bg-emerald-600 text-white rounded-lg p-3 font-semibold hover:bg-emerald-700">Entrar</button>
      <nav className="flex justify-between text-sm"><a className="text-emerald-700" href="/forgot-password">¿Olvidaste tu contraseña?</a><a className="text-emerald-700" href="/signup">Crear cuenta</a></nav>
    </form>
  </main>;
}
