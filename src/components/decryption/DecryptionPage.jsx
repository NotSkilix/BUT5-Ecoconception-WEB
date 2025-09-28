import usePageTitle from "../../hooks/usePageTitle.js";
import Navbar from "../shared/Navbar.jsx";
import GeneralPresentation from "./GeneralPresentation.jsx";
import TechnicalOperation from "./TechnicalOperation.jsx";
import PracticalExample from "./PracticalExample.jsx";

const DecryptionPage = () => {
    usePageTitle("Decryption");

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <h1>🔍 Décryptage technique et pédagogique de Website Carbon Calculator </h1>
                <h2>Sommaire</h2>
                <p>Cette page est séparée en 6 étapes que vous pouvez trouver juste ici suivant votre besoin:</p>
                <ul>
                    <li><a href={"#general-presentation"}>Présentation Générale</a></li>
                    <li><a href={"#technical-operation"}>Présentation Technique</a></li>
                    <li><a href={"#practical-example"}>Exemple Pratique</a></li>
                </ul>

                <div className="mt-8">
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md">
                        <h2 id="general-presentation">Présentation générale</h2>
                        <GeneralPresentation />
                    </div>
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md">
                        <h2 id="technical-operation">Présentation technique</h2>
                        <TechnicalOperation />
                    </div>
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md">
                        <h2 id="practical-example">Exemple pratique</h2>
                        <PracticalExample />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DecryptionPage