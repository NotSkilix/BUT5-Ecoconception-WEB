import Navbar from "../shared/Navbar.jsx";
import Introduction from "./Introduction.jsx";
import ButtonTopPage from "../shared/ButtonTopPage.jsx";
import Audit from "./Audit.jsx";

const RGESNPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="max-w-7xl mx-auto px-4 py-8 text-center ">
                <h1>Application du RGESN</h1>
                <h2>Audit et amélioration d’un service numérique</h2>

                <div className="mt-8">
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2>Introduction</h2>
                        <Introduction />
                    </div>
                    <div className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2>Audit</h2>
                        <Audit />
                    </div>
                </div>
            </div>

            <ButtonTopPage />
        </div>
    )
}

export default RGESNPage