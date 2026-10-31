import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  duracion_minutos: number;
  categoria: string;
  disponible: number;
}

export interface RespuestaServicios {
  success: boolean;
  data: Servicio[];
}

const queryClient = new QueryClient()

const ServiciosContent = () => {
  const { data = [], isPending, isError, error, refetch } = useQuery<Servicio[]>({
    queryKey: ["Servicios"],
    queryFn: async () => {
      const response = await fetch("http://tatialcantara.alwaysdata.net/api/servicios")
      const jsonData: RespuestaServicios = await response.json()
      return jsonData.data
    }
  })

  return (
    <section className="bg-sky-300 py-20">
      <div className="max-w-7xl mx-auto px-3">
        
        {/* Encabezado de la sección */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400 mb-2">
            Lo que ofrecemos
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white border-s-4 border-fuchsia-500 ps-6">
            Servicios
          </h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-slate-300">
            Ofrecemos una amplia gama de servicios veterinarios para el cuidado integral de tu mascota.
          </p>
        </div>

        {/* Tabla de servicios */}
        {isPending ? (
          <p className="text-center text-slate-300">Cargando servicios...</p>
        ) : isError ? (
          <div className="rounded-2xl bg-red-500/20 p-5 text-red-200">
            <p className="font-semibold">Ocurrió un error</p>
            <p className="text-sm">{error.message}</p>
            <button
              onClick={() => refetch()}
              className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm text-white">
              Reintentar
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-sky-500/20 bg-slate-800/50">
            <table className="w-full text-left text-sm">
              <thead className="bg-sky-500/10 text-xs font-bold uppercase tracking-wider text-sky-300">
                <tr>
                  <th className="px-5 py-4">Nombre</th>
                  <th className="px-5 py-4">Descripción</th>
                  <th className="px-5 py-4">Categoría</th>
                  <th className="px-5 py-4">Duración</th>
                  <th className="px-5 py-4">Precio</th>
                  <th className="px-5 py-4">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-500/10">
                {data.map((servicio) => (
                  <tr key={servicio.id} className="hover:bg-sky-500/5 transition-colors">
                    <td className="px-5 py-4 font-semibold text-white">{servicio.nombre}</td>
                    <td className="px-5 py-4 text-slate-300">{servicio.descripcion}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-fuchsia-500/20 text-fuchsia-300 px-3 py-1 text-xs font-semibold">
                        {servicio.categoria}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-300">
                      ⏱ {servicio.duracion_minutos} min
                    </td>
                    <td className="px-5 py-4 font-bold text-amber-400">
                      S/ {servicio.precio}
                    </td>
                    <td className="px-5 py-4">
                      {servicio.disponible ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          Disponible
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-400">
                          <span className="w-2 h-2 rounded-full bg-red-400"></span>
                          No disponible
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  )
}

export const Servicios = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ServiciosContent />
    </QueryClientProvider>
  )
}