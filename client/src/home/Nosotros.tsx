import Heading from "../components/Headings"

export const Nosotros = () => {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-3 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-8">
          <div>
            <div className="mb-4 text-sm font-medium uppercase text-primary">
            ¿Quiénes somos?
            </div>
            <Heading level={2}>Nosotros</Heading>
            <p className="text-sm">
             Medicina veterinaria, amor y tecnología para cuidar a tus mascotas.
            </p>
          </div>
          <div>
            <p className="text-lg text-foreground/60 leading-7">Somos una clínica veterinaria apasionada por el bienestar animal, dedicada a brindar atención médica integral a perros, gatos y otras mascotas. Creemos que cada animal merece una vida plena y saludable, por lo que combinamos medicina preventiva, diagnóstico avanzado y tratamientos personalizados para garantizar su cuidado. Nuestro equipo de veterinarios y especialistas trabaja con empatía, tecnología de última generación y un profundo amor por los animales. Desde consultas generales y vacunación hasta cirugías y urgencias 24/7, ofrecemos un servicio completo que acompaña a las familias en cada etapa de la vida de sus compañeros peludos. Nos caracteriza nuestra cercanía, profesionalismo y compromiso con el bienestar de cada paciente que llega a nuestra clínica.</p>
          </div>
        </div>
      </div>

    </section>
  )
}
