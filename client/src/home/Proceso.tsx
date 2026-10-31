import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarCheck, 
  faStethoscope, 
  faMicroscope, 
  faHeartPulse 
} from "@fortawesome/free-solid-svg-icons";

interface PasoProceso {
  numero: string;
  icono: any;
  titulo: string;
  descripcion: string;
}

const PASOS: PasoProceso[] = [
  {
    numero: "01",
    icono: faCalendarCheck,
    titulo: "Agenda tu cita",
    descripcion: "Reserva online o por teléfono. Elige el día y la hora que mejor te convenga para traer a tu mascota."
  },
  {
    numero: "02",
    icono: faStethoscope,
    titulo: "Consulta inicial",
    descripcion: "Nuestro veterinario revisa a tu mascota, escucha tus inquietudes y realiza un examen físico completo."
  },
  {
    numero: "03",
    icono: faMicroscope,
    titulo: "Diagnóstico",
    descripcion: "Si es necesario, realizamos exámenes de laboratorio, radiografías o ecografías para un diagnóstico preciso."
  },
  {
    numero: "04",
    icono: faHeartPulse,
    titulo: "Tratamiento y seguimiento",
    descripcion: "Diseñamos un plan de tratamiento personalizado y te acompañamos en cada etapa de la recuperación."
  }
];

export const Proceso = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
            Nuestro Proceso
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            ¿Cómo trabajamos?
          </h2>
          <p className="mt-3 text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            Un proceso claro y cercano para garantizar la mejor atención a tu mascota.
          </p>
        </div>

        {/* Tarjetas del proceso */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PASOS.map((paso) => (
            <div
              key={paso.numero}
              className="relative rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-6 overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow"
            >
              {/* Número grande de fondo */}
              <span className="absolute top-4 right-6 text-7xl font-extrabold text-blue-100 select-none pointer-events-none">
                {paso.numero}
              </span>

              {/* Icono circular usando FontAwesome */}
              <div className="relative w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={paso.icono} className="text-blue-500 text-xl" />
              </div>

              {/* Título y descripción */}
              <h3 className="relative text-lg font-bold text-primary mb-3">
                {paso.titulo}
              </h3>
              <p className="relative text-sm text-text-muted leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};