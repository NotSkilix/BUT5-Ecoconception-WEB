import Navbar from "../shared/Navbar.jsx";
import ButtonTopPage from "../shared/ButtonTopPage.jsx";
import TextReader from "../shared/TextReader.jsx";
import data from "../../data/rgaa/rgaa.json";

const RGAAPage = () => {
    return(
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-8 text-center ">
                <h1>📝 Audit et conformité au RGAA</h1>
                <h2>Référentiel Général d’Amélioration de l’Accessibilité</h2>

                <div className="mt-4 py-5 px-5 rounded-lg border border-green-200 inline-block">
                    <h2>Sommaire</h2>
                    <p>Cette page est séparée en 5 parties:</p>
                    <ul>
                        <li><a href={"#introduction"}>Découverte du RGAA</a></li>
                    </ul>
                </div>

                <div className="mt-8">
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id={"introduction"}>Découverte du RGAA</h2>
                        <TextReader jsonObject={data.introduction} />
                    </div>
                </div>
            </div>
            <ButtonTopPage />
        </div>
    )
}

export default RGAAPage