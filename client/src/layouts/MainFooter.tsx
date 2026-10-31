import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebookF, faInstagram, faLinkedin, faXTwitter, faYoutube, faTiktok
} from "@fortawesome/free-brands-svg-icons"



export const MainFooter = () => {

    const redesSociales = [
        { nombre: "X", vinculo: "https://x.com", icono: faXTwitter },
        { nombre: "Instagram", vinculo: "https://instagram.com", icono: faInstagram },
        { nombre: "Facebook", vinculo: "https://facebook.com", icono: faFacebookF },
        { nombre: "LinkedIn", vinculo: "https://linkedin.com", icono: faLinkedin },
        { nombre: "YouTube", vinculo: "https://youtube.com", icono: faYoutube },
        { nombre: "TikTok", vinculo: "https://tiktok.com", icono: faTiktok }
    ]

    return (
        <footer className="bg-gray-800 text-amber-50 py-4">
            <div className="max-w-7xl mx-auto px-3 flex flex-col sm:flex-row items-center justify-between gap-5">

                <div>2026 todos los derechos reservados</div>
                <div className="flex items-center gap-2.5">
                    {redesSociales.map(iSocial => (
                        <a key={iSocial.nombre} href={iSocial.vinculo} aria-label={iSocial.nombre} target="_blank"
                            className="size-10 flex items-center justify-center rounded-full border border-background/30
                            text-background/70 
                            transition-all duration-300
                            hover:border-accent hover:bg-accent hover:text-foreground hover:-translate-y-0.5"
                        >
                            <FontAwesomeIcon icon={iSocial.icono} className="text-sm"/>
                        </a>
                    ))}
                </div>


            </div>
        </footer>
    )
}
