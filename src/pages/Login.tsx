import { useState } from "react"
import { Leaf, Eye, EyeOff } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import { login as iniciarSesion, getDashboardPath } from "../utilidades/autenticacion"
import { destinoTrasLogin } from "../routes/permisos"

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [role, setRole] = useState("supervisor")
  const [error, setError] = useState("")

  const handleLogin = () => {
    const demoEmail =
      email.trim() ||
      (role === "admin"
        ? "jordanaragon@aiden.com"
        : role === "supervisor"
          ? "supervisor@aiden.com"
          : "operario@aiden.com")
    const demoPassword = password || "aiden123"
    const result = iniciarSesion(demoEmail, demoPassword, remember)

    if (!result.ok) {
      setError(result.message)
      return
    }

    navigate(
      destinoTrasLogin(
        location.state?.from,
        result.user.role,
        getDashboardPath(result.user.role),
      ),
      { replace: true },
    )
  }

  return (
    <div className="min-h-full flex bg-white">
      <div className="hidden lg:flex flex-col flex-1 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&h=1000&fit=crop&auto=format"
          alt="Vivero agrícola"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-aiden-primary/90 via-aiden-secondary/80 to-aiden-primary/70" />
        <div className="relative z-10 flex flex-col h-full p-12">
          <div className="flex items-center gap-2 mb-auto">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
              <Leaf size={18} className="text-white" />
            </div>
            <span className="font-bold text-white text-2xl" style={{ fontFamily: "DM Sans, sans-serif" }}>
              AiDEN
            </span>
          </div>
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Inteligencia artificial para la gestión de viveros
            </h2>
            <p className="text-white/75 text-lg leading-relaxed max-w-sm">
              Control total de tu operación agrícola: lotes, inventario, personal, costos y trazabilidad.
            </p>
            <div className="flex gap-6 mt-8">
              {[["9", "Módulos"], ["48+", "Lotes"], ["3", "Roles"]].map(([v, l]) => (
                <div key={l}>
                  <p className="text-3xl font-bold text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>{v}</p>
                  <p className="text-white/60 text-sm">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center flex-1 max-w-md w-full mx-auto px-8 py-12">
        <div className="mb-8 lg:hidden flex items-center gap-2">
          <div className="w-8 h-8 bg-aiden-primary rounded-lg flex items-center justify-center">
            <Leaf size={15} className="text-white" />
          </div>
          <span className="font-bold text-aiden-primary text-lg" style={{ fontFamily: "DM Sans, sans-serif" }}>AiDEN</span>
        </div>

        <h1 className="text-3xl font-bold text-aiden-text mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
          Bienvenido
        </h1>
        <p className="text-aiden-muted mb-8 text-sm">
          Ingresa tus credenciales para acceder a tu panel.
        </p>

        {error && (
          <p role="alert" className="mb-5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="space-y-5">
          <div>
            <label className="aiden-label">Correo Electrónico</label>
            <input
              type="email"
              className="aiden-input"
              placeholder="carlos@vivero.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="aiden-label">Contraseña</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                className="aiden-input pr-10"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-aiden-muted hover:text-aiden-primary transition-colors"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div>
            <label className="aiden-label">Rol (demo)</label>
            <select className="aiden-input" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Administrador</option>
              <option value="supervisor">Supervisor</option>
              <option value="operario">Operario</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 accent-aiden-primary rounded"
              />
              <span className="text-sm text-aiden-muted">Recordarme</span>
            </label>
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-aiden-secondary hover:text-aiden-primary font-medium transition-colors"
            >
              Olvidé mi contraseña
            </button>
          </div>

          <button onClick={handleLogin} className="aiden-btn-primary w-full justify-center py-3">
            Iniciar Sesión
          </button>
        </div>

        <p className="text-center mt-6 text-sm text-aiden-muted">
          {"¿No tienes cuenta? "}
          <button
            onClick={() => navigate("/signup")}
            className="text-aiden-secondary hover:text-aiden-primary font-medium transition-colors"
          >
            Crear cuenta
          </button>
        </p>

        <button
          onClick={() => navigate("/")}
          className="text-center mt-4 text-xs text-aiden-muted hover:text-aiden-primary transition-colors"
        >
          ← Volver al inicio
        </button>
      </div>
    </div>
  )
}
