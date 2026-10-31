import { useState } from "react"
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PageHeader } from "../components/PageHeader"

const queryClient = new QueryClient()

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  duracion_minutos: number;
  categoria: string;
  disponible: number;
}

const AdminServiciosContent = () => {
  const queryClient = useQueryClient()
  
  const [editando, setEditando] = useState<Servicio | null>(null)

  const { data: servicios = [], isPending } = useQuery<Servicio[]>({
    queryKey: ["ServiciosAdmin"],
    queryFn: async () => {
      const res = await fetch("http://tatialcantara.alwaysdata.net/api/servicios")
      const json = await res.json()
      return json.data
    }
  })
    //Actualizar
   const mutationUpdate = useMutation({
    mutationFn: async (servicioActualizado: Servicio) => {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:3000/api/servicios/${servicioActualizado.id}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify(servicioActualizado)
      })
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ServiciosAdmin"] })
      setEditando(null)
      alert("Servicio actualizado")
    }
  })
        //Borrar
    const mutationDelete = useMutation({
    mutationFn: async (id: number) => {
      const token = localStorage.getItem("token"); 
      const res = await fetch(`http://localhost:3000/api/servicios/${id}`, { 
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ServiciosAdmin"] })
      alert("Servicio eliminado")
    }
  })

  const handleEliminar = (id: number) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este servicio?")) {
      mutationDelete.mutate(id)
    }
  }

  const handleGuardarEdicion = (e: React.FormEvent) => {
    e.preventDefault()
    if (editando) {
      mutationUpdate.mutate(editando)
    }
  }

  if (isPending) return <p className="p-10 text-center">Cargando panel...</p>

  return (
    <>
      <PageHeader etiqueta="Administración" titulo="Gestionar Servicios" subtitulo="Panel de control para editar y eliminar servicios." />
      
      <section className="py-10 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-3">
          
          {editando && (
            <div className="mb-8 bg-white p-6 rounded-2xl shadow-lg border-2 border-fuchsia-200">
              <h2 className="text-xl font-bold mb-4">Editando: {editando.nombre}</h2>
              <form onSubmit={handleGuardarEdicion} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" value={editando.nombre} onChange={e => setEditando({...editando, nombre: e.target.value})} className="border p-2 rounded" placeholder="Nombre" />
                <input type="number" value={editando.precio} onChange={e => setEditando({...editando, precio: Number(e.target.value)})} className="border p-2 rounded" placeholder="Precio" />
                <input type="text" value={editando.categoria} onChange={e => setEditando({...editando, categoria: e.target.value})} className="border p-2 rounded" placeholder="Categoría" />
                <input type="number" value={editando.duracion_minutos} onChange={e => setEditando({...editando, duracion_minutos: Number(e.target.value)})} className="border p-2 rounded" placeholder="Duración" />
                <div className="col-span-2 flex gap-4">
                  <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded font-bold">Guardar Cambios</button>
                  <button type="button" onClick={() => setEditando(null)} className="bg-gray-400 text-white px-6 py-2 rounded font-bold">Cancelar</button>
                </div>
              </form>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Nombre</th>
                  <th className="p-4">Precio</th>
                  <th className="p-4">Categoría</th>
                  <th className="p-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {servicios.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-fuchsia-500">#{s.id}</td>
                    <td className="p-4 font-semibold">{s.nombre}</td>
                    <td className="p-4 text-green-600 font-bold">S/ {s.precio}</td>
                    <td className="p-4">{s.categoria}</td>
                    <td className="p-4 flex justify-center gap-2">
                      <button onClick={() => setEditando(s)} className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">Editar</button>
                      <button onClick={() => handleEliminar(s.id)} className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export const AdminServicios = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminServiciosContent />
    </QueryClientProvider>
  )
}