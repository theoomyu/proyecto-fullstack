import Heading from "../components/Headings"
import fundador1 from "../assets/fundadores/veterinaria01.jpg"
import fundador2 from "../assets/fundadores/veterinaria02.jpg"
import fundador3 from "../assets/fundadores/veterinaria03.jpg"

interface MiembroEquipo {
    id: string;
    foto: string;
    nombre: string;
    cargo: string;
    descripcion1: string;
    descripcion2: string;
}

const EQUIPO: MiembroEquipo[] = [
    {
        id: "m1",
        foto: fundador1,
        nombre: "Dra. Clara Torres",
        cargo: "Medicina General",
        descripcion1: "Más de 10 años de experiencia en consultas generales, vacunación y medicina preventiva para perros y gatos.",
        descripcion2: "Su enfoque se centra en la detección temprana de enfermedades y en educar a las familias sobre el cuidado responsable de sus mascotas."
    },
    {
        id: "m2",
        foto: fundador2,
        nombre: "Dr. Carlos Ruíz",
        cargo: "Especialista en Caninos",
        descripcion1: "Especialista en medicina interna y cirugía de perros, con un enfoque en el manejo de enfermedades crónicas y procedimientos quirúrgicos avanzados.",
        descripcion2: "Su experiencia incluye la atención de casos complejos y la implementación de protocolos de tratamiento innovadores."
    },
    {
        id: "m3",
        foto: fundador3,
        nombre: "Dra. María López",
        cargo: "Cirugía y Traumatología",
        descripcion1: "Especialista en procedimientos quirúrgicos, ortopedia y recuperación post-operatoria de pacientes caninos y felinos.",
        descripcion2: "Utiliza técnicas mínimamente invasivas para reducir el tiempo de recuperación y mejorar la calidad de vida de las mascotas."
    }
]

export const Fundadores = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3">
                
                {/* Encabezado de la sección */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-500 mb-2">
                        Conoce al equipo
                    </p>
                    <Heading level={2} className="text-slate-800">
                        Nuestro Equipo Médico
                    </Heading>
                    <p className="mt-3 text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
                        Profesionales apasionados por el bienestar animal, listos para cuidar a tu mascota.
                    </p>
                </div>

                {/* Grid de tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {EQUIPO.map((miembro) => (
                        <article 
                            key={miembro.id} 
                            className="group bg-white rounded-2xl overflow-hidden border-2 border-sky-100 hover:border-fuchsia-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <figure className="overflow-hidden aspect-[4/3]">
                                <img 
                                    src={miembro.foto} 
                                    alt={miembro.nombre}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </figure>
                            <div className="p-6">
                                <Heading level={3} className="text-slate-800 text-lg mb-1">
                                    {miembro.nombre}
                                </Heading>
                                <p className="text-sm font-semibold text-fuchsia-500 mb-4">
                                    {miembro.cargo}
                                </p>
                                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                    {miembro.descripcion1}
                                </p>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {miembro.descripcion2}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
