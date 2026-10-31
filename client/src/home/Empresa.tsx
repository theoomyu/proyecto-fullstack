import Heading from "../components/Headings"

export const Empresa = () => {
    return (
        <section className="py-20 bg-sky-300 text-white">   
            <div className="max-w-7xl mx-auto px-3">
                <Heading level={2}> Nuestra Historia</Heading>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <Heading level={3} className="border-s-2 border-accent ps-5 mt-1">Más de una década cuidando mascotas</Heading>
                        <p>VetCare nació del sueño compartido de un grupo de veterinarios apasionados por el bienestar animal. En nuestros inicios, identificamos que muchas clínicas ofrecían servicios fragmentados y fríos, donde las mascotas eran tratadas como números y no como miembros de la familia. Decidimos crear un espacio diferente, donde la medicina veterinaria de alta calidad se combinara con un trato cálido y personalizado.</p>
                        <p>Con el paso de los años y el avance de la tecnología médica, evolucionamos nuestra clínica para incorporar equipos de diagnóstico de última generación, quirófanos completamente equipados y un equipo de especialistas en diversas áreas. Pasamos de ser un pequeño consultorio de barrio a un centro veterinario integral, donde cada paciente recibe atención personalizada desde su primera visita hasta su vejez.</p>
                        <p>Hoy en día, nos enorgullece ser un referente en cuidado animal en nuestra comunidad. Hemos atendido a más de 5,000 mascotas y sus familias, y nuestro compromiso sigue siendo el mismo: brindar medicina veterinaria de excelencia con el corazón. Seguimos innovando, capacitándonos y creciendo para asegurar que cada perro, gato y mascota exótica reciba la mejor atención posible.</p>
                    </div>
                    <div className="border border-background/25 p-7 rounded-2xl
                        bg-linear-to-br from-background/14 via-background/7 to-accent/20
                        shadow-lg">
                        <Heading level={3} className="border-s-2 border-accent ps-5 mt-1">Misión</Heading>
                        <p> Brindar atención veterinaria integral de alta calidad, combinando medicina preventiva, diagnóstico avanzado y tratamientos personalizados, siempre con empatía y amor por los animales.</p>
                        <Heading level={3} className="border-s-2 border-accent ps-5 mt-1">Visión</Heading>
                        <p>Ser el centro veterinario de referencia en la región, reconocidos por nuestra excelencia médica, nuestro trato cercano y nuestro compromiso inquebrantable con el bienestar animal.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
