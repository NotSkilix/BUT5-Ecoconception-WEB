import React from "react";
import Table from "./Table.jsx";
import RadarChart from "./RadarChart.jsx";
import toolsComparison from "./data/toolsComparaison.json";
import toolsReportData from "./data/toolsReport.json";
import ToolsReport from "./ToolsReport.jsx";

const ToolsComparaisonPage = () => {
    const [tools, setTools] = React.useState({});

    // Load tools data once on mount
    React.useEffect(() => {
        setTools(toolsComparison);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Main page heading */}
            <h1 className="text-4xl font-bold text-green-900 text-center mb-4">
                🌱 Comparaison des Outils Écologiques
            </h1>
            <p className="text-center text-gray-600 mb-12">
                Découvrez les caractéristiques et performances des principaux outils pour vous aider à faire le meilleur choix.
            </p>

            {Object.keys(tools).length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Chargement des données...</p>
            ) : (
                <div className="space-y-12">
                    {/* Table section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-green-800 mb-4">
                            📊 Tableau de comparaison
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Cette table présente les différentes caractéristiques des outils écologiques.
                        </p>
                        <div className="mb-4 space-y-2 px-4 py-3 bg-orange-50 border-l-4 border-orange-400">
                            <h4 className="text-lg font-semibold text-orange-800">
                                Note sur les scores
                            </h4>
                            <p className="text-gray-600 italic">
                                Les scores sont sur une échelle de 1 à 5, où 5 est le meilleur.
                            </p>
                            <p className="text-gray-600 italic">
                                L'outil Scaphandre n'a pas pu être noté car je n'ai pas pu le mettre en place sur mes deux machines.
                            </p>
                        </div>
                        <div className="shadow-lg rounded-xl overflow-hidden border border-green-200">
                            <Table tools={tools.tools} />
                        </div>
                    </div>

                    {/* Radar chart section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-green-800 mb-4">
                            📈 Visualisation Radar
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Ce graphique radar met en évidence les performances clés de chaque outil sur différents critères (précision, facilité d'usage et sa note).
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
                            <RadarChart tools={tools} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-green-800 mb-4">
                            📝 Synthèse écrite
                        </h2>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
                            <ToolsReport report={toolsReportData} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ToolsComparaisonPage;
