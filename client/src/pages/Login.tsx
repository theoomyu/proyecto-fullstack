import { useState } from "react"
import { useNavigate, Link } from "react-router"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()

      if (data.success) {
        // Guardamos el token en localStorage
        localStorage.setItem("token", data.token)
        localStorage.setItem("usuario", JSON.stringify(data.usuario))
        navigate("/admin-servicios") // Redirigimos al panel
      } else {
        setError(data.error || "Error al iniciar sesión")
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor")
    }
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-sky-50 py-20">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border-2 border-sky-100">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Iniciar Sesión</h2>
        <p className="text-center text-slate-500 mb-8">Accede para gestionar tus servicios</p>

        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Correo</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-fuchsia-400 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Contraseña</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-fuchsia-400 focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-fuchsia-500 text-white font-bold py-3 rounded-xl hover:bg-fuchsia-600 transition-colors">
            Entrar
          </button>
        </form>
        <p className="text-center text-sm text-slate-500 mt-6">
          ¿No tienes cuenta? <Link to="/registro" className="text-fuchsia-500 font-bold hover:underline">Regístrate aquí</Link>
        </p>
      </div>
    </section>
  )
}