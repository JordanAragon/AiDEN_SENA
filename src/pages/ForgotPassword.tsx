import { Leaf, Mail, ArrowLeft, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ForgotPassword() {
  const navigate = useNavigate()
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-full bg-aiden-bg flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-aiden-primary rounded-2xl flex items-center justify-center shadow-lg">
              <Leaf size={22} className="text-white" />
            </div>
            <span className="font-bold text-aiden-primary text-xl" style={{ fontFamily: "DM Sans, sans-serif" }}>
              AiDEN
            </span>
          </div>
        </div>

        <div className="aiden-card p-8">
          {!sent ? (
            <>
              <div className="w-12 h-12 bg-aiden-light rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Mail size={22} className="text-aiden-primary" />
              </div>

              <h1 className="text-2xl font-bold text-aiden-text mb-2 text-center" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Recuperar Contraseña
              </h1>
              <p className="text-sm text-aiden-muted text-center mb-8 leading-relaxed">
                Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="aiden-label">Correo Electrónico</label>
                  <input
                    type="email"
                    className="aiden-input"
                    placeholder="tu@vivero.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button onClick={() => setSent(true)} className="aiden-btn-primary w-full justify-center py-3">
                  Enviar Enlace de Recuperación
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="w-12 h-12 bg-aiden-success-bg rounded-xl flex items-center justify-center mb-6 mx-auto">
                <CheckCircle2 size={22} className="text-aiden-success" />
              </div>
              <h2 className="text-xl font-bold text-aiden-text mb-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Enlace enviado
              </h2>
              <p className="text-sm text-aiden-muted leading-relaxed mb-6">
                Hemos enviado un correo a <strong>{email || "tu@vivero.com"}</strong> con las instrucciones para restablecer tu contraseña.
              </p>
              <button onClick={() => setSent(false)} className="aiden-btn-secondary justify-center w-full">
                Enviar de nuevo
              </button>
            </div>
          )}
        </div>

        <button onClick={() => navigate("/login")} className="flex items-center gap-2 mx-auto mt-6 text-sm text-aiden-muted hover:text-aiden-primary transition-colors">
          <ArrowLeft size={15} />
          Volver al inicio de sesión
        </button>
      </div>
    </div>
  )
}
