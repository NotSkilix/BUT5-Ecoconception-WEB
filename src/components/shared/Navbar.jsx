import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const CURRENT_PATH = useLocation().pathname
    const BASE_URL = import.meta.env.BASE_URL;

    function getStyle(path){
        path = BASE_URL+path
        path = path.replace("//", "/")
        switch (path){
            case CURRENT_PATH: return "text-white font-bold underline"
            default: return "text-white hover:text-gray-300"
        }
    }

    return (
        <div>
            <nav className="bg-green-800 p-4 flex justify-center space-x-8">
                <div className="container mx-auto flex justify-between">
                    <Link to={BASE_URL}
                          className={getStyle("/")}>
                        Accueil
                    </Link>
                    <Link to={BASE_URL+"comparaison-outils"} className={getStyle("/comparaison-outils")}>
                        Comparaison des outils
                    </Link>
                    <Link to={BASE_URL+"decryptage"} className={getStyle("/decryptage")}>
                        Décryptage
                    </Link>
                    <Link to={BASE_URL+"rgesn"} className={getStyle("/rgesn")}>
                        RGESN
                    </Link>
                    <Link to={BASE_URL+"accessibilite"} className={getStyle("/accessibilite")}>
                        Accessibilité
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
