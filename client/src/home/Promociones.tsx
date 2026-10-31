import { PageHeader } from "../components/PageHeader"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"

export interface Promocion {
  idpromocion: number;
  titulo: string;
  descripcion: string;
  descuento_porcentaje: number;
  fecha_inicio: string;
  fecha_fin: string;
  activa: number;
}

export interface RespuestaPromociones {
  success: boolean;
  data: Promocion[];
}

const queryClient = new QueryClient()

const PromocionesContent = () => {
  const { data = [], isPending, isError, error, refetch } = useQuery<Promocion[]>({
    queryKey: ["Promociones"],
    queryFn: async () => {
  const response = await fetch("http://tatialcantara.alwaysdata.net/promociones")
  const jsonData = await response.json()
      return jsonData.data
    }
  })

  return (
    <>
      <PageHeader
        etiqueta="Ofertas Especiales"
        titulo="Promociones"
        subtitulo="Aprovecha nuestros descuentos y cuida a tu mascota sin gastar de más."
      />
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-3">
          {isPending ? (
            <p className="text-center text-slate-600">Cargando promociones...</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((promo) => (
                <div 
                  key={promo.idpromocion} 
                  className="rounded-2xl bg-white p-6 shadow-sm border-2 border-sky-100 hover:border-fuchsia-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-800">{promo.titulo}</h3>
                    <span className="rounded-full bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 whitespace-nowrap">
                      -{promo.descuento_porcentaje}%
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{promo.descripcion}</p>
                  <div className="text-xs border-t border-sky-100 pt-3 flex justify-between items-center">
                    <span className="text-sky-600 font-medium">
                      Válido hasta: {promo.fecha_fin}
                    </span>
                    <span className="text-amber-500 font-bold">
                      ¡Aprovecha!
                    </span>
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

export const Promociones = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PromocionesContent />
    </QueryClientProvider>
  )
}