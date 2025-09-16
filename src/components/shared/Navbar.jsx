import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const currentPath = useLocation().pathname

    function getStyle(path){
        switch (path){
            case currentPath: return "text-white font-bold underline"
            default: return "text-white hover:text-gray-300"
        }
    }

    return (
        <div>
            <nav className="bg-green-800 p-4 flex justify-center space-x-8">
                <div className="container mx-auto flex justify-between">
                    <Link to="/"
                          className={getStyle("/")}>
                        Accueil
                    </Link>
                    <Link to="/comparaison-outils" className={getStyle("/comparaison-outils")}>
                        Comparaison des outils
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

// import { Link } from "react-router-dom";
//
// function Navbar() {
//     return (
//         <nav className="bg-green-800 p-4">
//             <div className="container mx-auto flex justify-between">
//                 <Link to="/" className="text-white font-bold">Accueil</Link>
//             </div>
//         </nav>
//     );
// }
//
// export default Navbar;
