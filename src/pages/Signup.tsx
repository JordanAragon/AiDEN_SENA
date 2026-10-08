import { useState } from "react"
import { Leaf, Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { register as registrar, actualizarUsuario } from "../utilidades/autenticacion"

export default function Signup() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [role, setRole] = useState("operario")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [error, setError] = useState("")

  const handleRegister = () => {
    setError("")
    if (!accepted) {
      setError("Debes aceptar los términos de uso y la política de privacidad.")
      return
    }
    if (password !== confirm) {
      setError("Las contraseñas no coinciden.")
      return
    }

    const result = registrar({ name, email, password })
    if (!result.ok) {
      setError(result.message)
      return
    }

    if (role !== "operario" && result.user?.id) {
      actualizarUsuario(result.user.id, { role })
    }

    navigate("/login", { state: { registered: true }, replace: true })
  }

  return (
    <div className="min-h-full flex bg-white">
      <div className="hidden lg:flex flex-col flex-1 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=1000&fit=crop&auto=format"
          alt="Invernadero agrícola"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-aiden-secondary/85 via-aiden-primary/80 to-aiden-primary/90" />
        <div className="relative z-10 flex flex-col h-full p-12">
          <div className="flex items-center gap-2 mb-auto">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
              <Leaf size={18} className="text-white" />
            </div>
            <span className="font-bold text-white text-2xl" style={{ fontFamily: "DM Sans, sans-serif" }}>AiDEN</span>
          </div>
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Empieza a gestionar tu vivero hoy
            </h2>
            <p className="text-white/75 text-lg leading-relaxed max-w-sm">
              Crea tu cuenta y accede a todas las herramientas operativas de AiDEN.
            </p>
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
          Crear cuenta
        </h1>
        <p className="text-aiden-muted mb-8 text-sm">
          Completa el formulario para unirte a AiDEN.
        </p>

        {error && (
          <p role="alert" className="mb-5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="space-y-4">
          <div>
            <label className="aiden-label">Nombre Completo</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="aiden-input" placeholder="María González Torres" />
          </div>

          <div>
            <label className="aiden-label">Correo Electrónico</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="aiden-input" placeholder="maria@vivero.com" />
          </div>

          <div>
            <label className="aiden-label">Rol</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="aiden-input">
              <option value="supervisor">Supervisor</option>
              <option value="operario">Operario</option>
            </select>
          </div>

          <div>
            <label className="aiden-label">Contraseña</label>
            <div className="relative">
              <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPass ? "text" : "password"} className="aiden-input pr-10" placeholder="Mínimo 8 caracteres" />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-aiden-muted hover:text-aiden-primary transition-colors">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div>
            <label className="aiden-label">Confirmar Contraseña</label>
            <div className="relative">
              <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type={showConfirm ? "text" : "password"} className="aiden-input pr-10" placeholder="Repite tu contraseña" />
              <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-aiden-muted hover:text-aiden-primary transition-colors">
                {showConfirm ? <EyeOff size={16} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input checked={accepted} onChange={(e) => setAccepted(e.target.checked)} type="checkbox" className="mt-0.5 w-4 h-4 accent-aiden-primary rounded" />
            <span className="text-xs text-aiden-muted leading-relaxed">
              Acepto los <button type="button" onClick={() => navigate("/terminos")} className="text-aiden-secondary hover:underline">Términos de Uso</button> y la <button type="button" onClick={() => navigate("/privacidad")} className="text-aiden-secondary hover:underline">Política de Privacidad</button> de AiDEN.
            </span>
          </div>

          <button onClick={handleRegister} className="aiden-btn-primary w-full justify-center py-3">
            Crear Cuenta
          </button>
        </div>

        <p className="text-center mt-6 text-sm text-aiden-muted">
          {"¿Ya tienes cuenta? "}
          <button onClick={() => navigate("/login")} className="text-aiden-secondary hover:text-aiden-primary font-medium transition-colors">
            Iniciar Sesión
          </button>
        </p>

        <button onClick={() => navigate("/")} className="text-center mt-4 text-xs text-aiden-muted hover:text-aiden-primary transition-colors">
          ← Volver al inicio
        </button>
      </div>
    </div>
  )
}
