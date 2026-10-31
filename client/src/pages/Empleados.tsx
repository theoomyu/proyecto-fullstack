import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { PageHeader } from "../components/PageHeader"

export interface Empleado {
  idempleado: number;
  nombre: string;
  cargo: string;
  ciudad: string;
  pais: string;
  especialidad: string | null;
  activo: number;
}

export interface RespuestaEmpleados {
  success: boolean;
  data: Empleado[];
}

const queryClient = new QueryClient()

// Función auxiliar para generar las iniciales del nombre
const getIniciales = (nombre: string) => {
  return nombre
    .replace(/^(Dra?\.|Sr\.|Sra\.)\s+/i, '')
    .split(' ')
    .map(p => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};

const EmpleadosContent = () => {
  const { data = [], isPending, isError, error, refetch } = useQuery<Empleado[]>({
    queryKey: ["Empleados"],
    queryFn: async () => {
  const response = await fetch("http://tatialcantara.alwaysdata.net/empleados")
  const jsonData = await response.json()
      return jsonData.data
    }
  })

  return (
    <>
      <PageHeader
        etiqueta="Nuestro Equipo"
        titulo="Empleados"
        subtitulo="Conoce a las personas que forman parte de nuestro equipo y hacen posible cada proyecto."
      />
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-3">
          {isPending ? (
            <p className="text-center text-slate-600">Cargando empleados...</p>
          ) : isError ? (
            <div className="rounded-2xl bg-red-50 p-5 text-red-700">
              <p className="font-semibold">Ocurrió un error</p>
              <p className="text-sm">{error.message}</p>
              <button
                onClick={() => refetch()}
                className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm text-white">
                Reintentar
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.map((emp) => (
                <div key={emp.idempleado} className="flex flex-col group">
                  {/* Tarjeta oscura con iniciales */}
                  <div className="relative aspect-[3/4] rounded-2xl bg-slate-900 overflow-hidden border-2 border-sky-100 group-hover:border-fuchsia-200 transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1">
                    
                    {/* Círculo con iniciales en el centro */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border-2 border-amber-400/60 flex items-center justify-center bg-slate-800/50">
                        <span className="text-3xl font-bold text-amber-400">
                          {getIniciales(emp.nombre)}
                        </span>
                      </div>
                    </div>

                    {/* Ubicación en la parte inferior */}
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
                      <span className="text-amber-400 text-sm">📍</span>
                      <span className="text-xs text-white/90">{emp.ciudad}, {emp.pais}</span>
                    </div>
                  </div>

                  {/* Nombre y cargo debajo de la tarjeta */}
                  <div className="mt-4">
                    <h3 className="text-base font-bold text-slate-800 group-hover:text-fuchsia-500 transition-colors">
                      {emp.nombre}
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5">{emp.cargo}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export const Empleados = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <EmpleadosContent />
    </QueryClientProvider>
  )
}