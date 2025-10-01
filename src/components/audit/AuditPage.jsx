import Navbar from "../shared/Navbar.jsx";

const AuditPage = () => {
    return (
        <div>
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <h1> 🧐 Audit environnemental d’un site web </h1>
                <p>
                    Le site choisie reste celui de la Mairie de la ville dans laquelle j'ai vécu: <br/>
                    <a href="https://www.mairie-braud.fr" target="_blank">Mairie de Braud et Saint Louis</a>
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <p>
                    J'ai choisis 3 outils afin de comparer ce site web:
                </p>
                <ul>
                    <li><a href="https://www.websitecarbon.com" target="_blank">Website Carbon Calculator</a></li>
                    <li><a href="https://www.ecoindex.fr" target="_blank">Eco Index</a></li>
                    <li><a href="https://pagespeed.web.dev/?hl=fr" target="_blank">LightHouse</a></li>
                </ul>
            </div>
        </div>
    )
}

export default AuditPage