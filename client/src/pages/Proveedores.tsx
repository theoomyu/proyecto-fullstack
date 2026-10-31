import { PageHeader } from "../components/PageHeader"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"

export interface Proveedor {
  idproveedor: number;
  nombreempresa: string;
  nombrecontacto: string;
  cargocontacto: string;
  ciudad: string;
  pais: string;
}

export interface RespuestaProveedores {
  success: boolean;
  data: Proveedor[];
}

const queryClient = new QueryClient()

const ProveedoresContent = () => {
  const { data = [], isPending, isError, error, refetch } = useQuery<Proveedor[]>({
    queryKey: ["Proveedores"],
    queryFn: async () => {
  const response = await fetch("http://tatialcantara.alwaysdata.net/proveedores")
  const jsonData = await response.json()
      return jsonData.data
    }
  })

  return (
    <>
      <PageHeader 
        etiqueta="Nuestros aliados" 
        titulo="Proveedores" 
        subtitulo="Conoce a los proveedores y socios que respaldan nuestras operaciones y servicios." 
      />
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-3">
          {isPending ? (
            <p className="text-center text-slate-600">Cargando proveedores...</p>
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
            <div className="overflow-x-auto rounded-2xl border-2 border-sky-100 bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    {["Código", "Empresa", "Contacto", "Cargo", "Ciudad", "País"].map(h => (
                      <th 
                        key={h} 
                        className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-sky-300"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100">
                  {data.map(({ idproveedor, nombreempresa, nombrecontacto, cargocontacto, ciudad, pais }) => (
                    <tr 
                      key={idproveedor}
                      className="hover:bg-fuchsia-50/50 transition-colors"
                    >
                      <td className="px-5 py-4 font-bold text-fuchsia-500">#{idproveedor}</td>
                      <td className="px-5 py-4 font-semibold text-slate-800">{nombreempresa}</td>
                      <td className="px-5 py-4 text-slate-600">{nombrecontacto}</td>
                      <td className="px-5 py-4 text-slate-600">
                        <span className="rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-xs font-medium">
                          {cargocontacto}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-600">{ciudad}</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
                          {pais}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export const Proveedores = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProveedoresContent />
    </QueryClientProvider>
  )
}