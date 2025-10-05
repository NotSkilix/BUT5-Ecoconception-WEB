import Navbar from "../shared/Navbar.jsx";
import Introduction from "./Introduction.jsx";
import ButtonTopPage from "../shared/ButtonTopPage.jsx";
import Audit from "./Audit.jsx";
import Analyse from "./Analyse.jsx";
import ActionPlan from "./ActionPlan.jsx";

const RGESNPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="max-w-7xl mx-auto px-4 py-8 text-center ">
                <h1>Application du RGESN</h1>
                <h2>Audit et amélioration d’un service numérique</h2>

                <div className="mt-4 py-5 px-5 rounded-lg border border-green-200 inline-block">
                    <h2>Sommaire</h2>
                    <p>Cette page est séparée en 6 parties:</p>
                    <ul>
                        <li><a href={"#introduction"}>Introduction</a></li>
                        <li><a href={"#audit"}>Audit selon le RGESN</a></li>
                        <li><a href={"#analyse"}>Analyse et recommendations</a></li>
                        <li><a href={"#action"}>Plan d'action priorisé</a></li>
                    </ul>
                </div>

                <div className="mt-8">
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id={"introduction"}>Introduction</h2>
                        <Introduction />
                    </div>
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id={"audit"}>Audit selon le RGESN</h2>
                        <Audit />
                    </div>
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id={"analyse"}>Analyse et recommendations</h2>
                        <Analyse />
                    </div>
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id={"action"}>Plan d'action priorisé</h2>
                        <ActionPlan />
                    </div>
                </div>
            </div>

            <ButtonTopPage />
        </div>
    )
}

export default RGESNPage