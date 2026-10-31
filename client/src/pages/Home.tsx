import { Banner } from "../home/Banner"
import { Proceso } from "../home/Proceso"
import { Empresa } from "../home/Empresa"
import { Promociones } from "../home/Promociones"
import { Eventos } from "../home/Eventos"
import { Fundadores } from "../home/Fundadores"
import { Nosotros } from "../home/Nosotros"
import { Servicios } from "../home/Servicios"


export const Home = () => {
  return (
    <>
        <Banner />
        <Nosotros />
        <Fundadores />
        <Empresa />
        <Proceso />
        <Servicios />
        <Eventos />
        <Promociones/>
    </>
  )
}
