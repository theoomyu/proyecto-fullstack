import { Link } from "react-router"
import Heading from "../components/Headings"

export const MainHeader = () => {
    return (
        <header className="py-6 bg-surface/60 backdrop-blur-xl sticky top-0 z-1000 border-b-2 border-border">
            <div className="max-w-7xl mx-auto px-3">
                <Heading level={1} className="mb-0!"><Link to="/">Vet<span className="text-accent">Care🐾</span></Link></Heading>
                <p>Cuidamos a tu mejor amigo con amor y profesionalismo</p>
            </div>
        </header>
    )
}
