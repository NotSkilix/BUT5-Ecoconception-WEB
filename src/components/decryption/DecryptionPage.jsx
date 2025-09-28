import usePageTitle from "../../hooks/usePageTitle.js";
import Navbar from "../shared/Navbar.jsx";
import GeneralPresentation from "./GeneralPresentation.jsx";
import TechnicalOperation from "./TechnicalOperation.jsx";

const DecryptionPage = () => {
    usePageTitle("Decryption");
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <h1>🔍 Décryptage technique et pédagogique de Website Carbon Calculator </h1>

                <div className="mt-8">
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md">
                        <h2>Présentation générale</h2>
                        <GeneralPresentation />
                    </div>
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md">
                        <h2>Présentation technique</h2>
                        <TechnicalOperation />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DecryptionPage