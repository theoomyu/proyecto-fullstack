import Heading from "../components/Headings"

export interface EventoItem {
    id: string;
    foto: string;
    titulo: string;
    descripcion: string;
}

export const DATA_EVENTOS: EventoItem[] = [
    {
        id: "e1",
        foto: "/eventos/antirrabia.png",
        titulo: "Campaña de Vacunación Antirrábica",
        descripcion: "Jornada especial de vacunación a bajo costo para perros y gatos. Protege a tu mascota contra la rabia y otras enfermedades prevenibles."
    },
    {
        id: "e2",
        foto: "/eventos/adoptar.png",
        titulo: "Feria de Adopción Responsable",
        descripcion: "Ven y conoce a los peluditos que buscan un hogar. Todos nuestros animales rescatados están vacunados, esterilizados y listos para una nueva familia."
    },
    {
        id: "e3",
        foto: "/eventos/charla.png",
        titulo: "Charla: Cuidado del Adulto Mayor",
        descripcion: "Aprende de nuestros especialistas cómo cuidar la salud de las mascotas geriátricas: nutrición, artrosis, cuidados dentales y calidad de vida."
    },
    {
        id: "e4",
        foto: "/eventos/operar.png",
        titulo: "Jornada de Esterilización Gratuita",
        descripcion: "Campaña comunitaria para el control de la natalidad canina y felina. Cupos limitados, inscripciones previas en nuestra recepción."
    }
]

export const Eventos = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3">
                
                {/* Encabezado de la sección */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-500 mb-2">
                        Próximas Actividades
                    </p>
                    <Heading level={2} className="text-slate-800">
                        Eventos y Campañas
                    </Heading>
                    <p className="mt-3 text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
                        Participa en nuestras actividades para el cuidado y bienestar de tu mascota.
                    </p>
                </div>

                {/* Grid de eventos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DATA_EVENTOS.map(evento => (
                        <article 
                            key={evento.id} 
                            className="group bg-white rounded-2xl overflow-hidden border-2 border-sky-100 hover:border-fuchsia-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <figure className="overflow-hidden aspect-[4/3]">
                                <img 
                                    src={evento.foto} 
                                    alt={evento.titulo} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                />
                            </figure>
                            <div className="p-6">
                                <Heading level={3} className="text-slate-800 text-base mb-2">
                                    {evento.titulo}
                                </Heading>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {evento.descripcion}
                                </p>
                                <button className="mt-4 text-fuchsia-500 text-xs font-bold uppercase tracking-wider hover:text-fuchsia-600 transition-colors">
                                    Más información →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
