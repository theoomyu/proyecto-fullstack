import { useState } from "react"
import { useNavigate, Link } from "react-router"

export const Registro = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch("http://localhost:3000/api/auth/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password })
      })
      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        setTimeout(() => navigate("/login"), 2000)
      } else {
        setError(data.error || "Error al registrar usuario")
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor")
    }
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-sky-50 py-20">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border-2 border-sky-100">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Crear Cuenta</h2>
        <p className="text-center text-slate-500 mb-8">Únete para acceder al panel</p>

        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}
        {success && <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-4 text-sm">¡Usuario creado! Redirigiendo...</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Nombre</label>
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required
              className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-fuchsia-400 focus:outline-none" />
          </div>
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
            Registrarme
          </button>
        </form>
        <p className="text-center text-sm text-slate-500 mt-6">
          ¿Ya tienes cuenta? <Link to="/login" className="text-fuchsia-500 font-bold hover:underline">Inicia sesión</Link>
        </p>
      </div>
    </section>
  )
}