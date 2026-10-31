import slide1 from "../assets/banner/slide1.jpg"
import slide2 from "../assets/banner/slide2.jpg"
import slide3 from "../assets/banner/slide3.jpg"

import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { Link } from "react-router"

const SLIDES = [
  [
    slide1,
    "Cuidado animal",
    "Cuidamos a tu ",
    "mejor amigo.",
    "Brindamos atención veterinaria integral con amor y profesionalismo. Desde consultas de rutina hasta tratamientos especializados, tu mascota está en las mejores manos.",
    "Agendar cita"
  ],
  [
    slide2,
    "Urgencias 24/7",
    "Estamos aquí",
    "cuando nos necesites",
    "Servicios de urgencias disponibles las 24 horas del día de la semana. Equipo médico listo para atender cualquier emergencia con rapidez y eficacia.",
    "Llamar ahora"
  ],
  [
    slide3,
    "Especialistas",
    "Expertos en la",
    "salud Felina y Canina.",
    "Contamos con especialistas en medicina interna, dermatología, cardiología y nutrición para que tus compañeros peludos vivan una vida plena y saludable.",
    "Ver especialidades"
  ]
]

const Flechas = () => {
  const swiper = useSwiper()
  const clase = "absolute z-30 top-1/2 flex size-12 -translate-y-1/2 cursor-pointer justify-center items-center rounded-full border border-sky-400/40 bg-sky-400/ text-xl text-white hover:bg-fuchsia-500/40 transition-colors"
  return (
    <>
      <button className={`${clase} left-6`} onClick={() => swiper.slidePrev()}>
         ◀
      </button>
      <button className={`${clase} right-6`} onClick={() => swiper.slideNext()}>
        ▶
      </button>
    </>
  )
}


export const Banner = () => {
  return (
    <figure className="w-full h-64 md:h-144 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={900}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="relative h-125 md:h-140 lg:h-155">

        {SLIDES.map(([imagen, etiqueta, titulo, destacado, descripcion, boton]) => (
          <SwiperSlide key={titulo}>
            <div className="relative h-full">
              <img src={imagen} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-12">
                <div className="bg-sky-400/30 text-white border border-sky-400/30 max-w-lg rounded-3xl shadow-2xl backdrop-blur-md p-10">
                  <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-fuchsia-400">
                    <span className="h-px w-8 bg-fuchsia-400" />{etiqueta}
                  </div>
                  <h2 className="text-3xl font-bold md:text-4xl">
                    {titulo} <span className="block text-amber-400">{destacado}</span>
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-slate-200">{descripcion}</p>
                  <div className="mt-8 flex gap-4">
                    <a href="#" className="bg-fuchsia-500 rounded-full px-5 py-3 font-semibold text-white hover:bg-fuchsia-600 hover:-translate-y-0.5 transition-all shadow-lg shadow-fuchsia-500/30">
                      {boton}
                    </a>
                    <Link to="/contactenos" className="border border-sky-600/20 rounded-full px-6 py-3 hover:bg-sky-800/10 transition-colors">
                      Contáctenos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <Flechas />
      </Swiper>
    </figure>
  )
}