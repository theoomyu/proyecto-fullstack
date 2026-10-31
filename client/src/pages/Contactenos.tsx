import React, { useState } from "react"
import { PageHeader } from "../components/PageHeader"

export const Contactenos = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [mensaje, setMensaje] = useState("")
  
  const [enviado, setEnviado] = useState(false)

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    // Validación básica
    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa los campos obligatorios (nombre, email y mensaje).")
      return
    }
    try {
      // Hacemos la petición POST al backend
      const response = await fetch("http://tatialcantara.alwaysdata.net/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, telefono, mensaje })
      })
      const data = await response.json()

      if (data.success) {
        // Simulamos el envío exitoso
        setEnviado(true)

        setNombre("")
        setEmail("")
        setTelefono("")
        setMensaje("")

        setTimeout(() => setEnviado(false), 4000)
      } else {
        alert("Hubo un error al enviar el mensaje. Intenta de nuevo.")
      }

    } catch (error) {
      console.error("Error de conexión:", error)
      alert("No se pudo conectar con el servidor. Verifica que el backend esté corriendo.")
    }
  }

  return (
    <>
      <PageHeader
        etiqueta="Hablemos"
        titulo="Contáctenos"
        subtitulo="Estamos aquí para ayudarte. Ponte en contacto con nosotros."
      />

      <section className="py-20 bg-sky-50">
        <div className="max-w-3xl mx-auto px-3">
          <div className="bg-white rounded-3xl shadow-xl border-2 border-sky-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Envíanos un mensaje</h2>
            <p className="text-slate-500 mb-8">Completa el formulario y te responderemos pronto.</p>

            {enviado && (
              <div className="mb-6 rounded-xl bg-green-50 border border-green-200 p-4 text-green-700">
                <p className="font-semibold">¡Mensaje enviado con éxito!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo: Nombre */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Nombre completo <span className="text-fuchsia-500">*</span>
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej. Juan Pérez"
                  className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
                />
              </div>

              {/* Fila: Email y Teléfono */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Correo electrónico <span className="text-fuchsia-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+51 999 999 999"
                    className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
                  />
                </div>
              </div>

              {/* Campo: Mensaje */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Mensaje <span className="text-fuchsia-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-100 resize-none"
                />
              </div>

              {/* Botón de enviar */}
              <button
                type="submit"
                className="w-full rounded-xl bg-fuchsia-500 px-6 py-4 font-bold text-white shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-600 hover:-translate-y-0.5 transition-all"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}


