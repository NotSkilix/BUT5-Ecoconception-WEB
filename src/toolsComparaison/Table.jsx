import React from "react";

import "../App.css";
import toolsComparison from ".//data/toolsComparaison.json";

const Table = () => {
    const [tools, setTools] = React.useState({});

    React.useEffect(() => {
        setTools(toolsComparison.tools);
        console.log(tools);
    }, [tools]);

    const getRatingColor = (note) => {
        if (note >= 8.5) return "text-green-700 font-semibold";
        if (note >= 7) return "text-lime-700 font-semibold";
        return "text-red-700 font-semibold";
    };

    const getRatingBg = (note) => {
        if (note >= 8.5) return "bg-green-50";
        if (note >= 7) return "bg-lime-50";
        return "bg-red-50";
    };

    return (
        <>
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-green-900 mb-4 bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
                    🌱 Tableau de Comparaison Écologique
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-lime-400 mx-auto rounded-full"></div>
            </div>

            {tools.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full rounded-xl overflow-hidden shadow-lg border border-green-200">
                        <thead>
                        <tr className="bg-gradient-to-r from-green-800 to-green-700 text-white">
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider sticky left-0 bg-green-800 z-10 shadow-lg">
                                Nom
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider min-w-48">
                                URL
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                                Gratuit
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider min-w-32">
                                Usage
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                                Précision
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider min-w-40">
                                Critères
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                                Exportable
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                                Documentation
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                                Intégration
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider min-w-48">
                                Points forts
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider min-w-48">
                                Points faibles
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                                Note
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                                Note donnée à mon site
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-green-200 bg-white">
                        {tools.map((tool) => (
                            <tr key={tool.name} className="hover:bg-green-50 transition">
                                <td className="px-6 py-4 font-semibold text-green-900 sticky left-0 bg-inherit z-10 shadow-lg">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-lime-500 rounded-full mr-3"></div>
                                        {tool.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-700 hover:text-green-900 hover:underline transition-colors duration-200 break-all"
                                    >
                                        {tool.url}
                                    </a>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span
                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                            tool.free
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}>
                                      {tool.free ? "Oui" : "Non"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-green-800">
                                    <span className="inline-flex px-2 py-1 text-xs bg-lime-100 text-green-800 rounded-full">
                                      {tool.usage}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span
                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                            tool.precision === "Très élevée"
                                                ? "bg-green-100 text-green-800"
                                                : tool.precision === "Élevée"
                                                    ? "bg-lime-100 text-lime-800"
                                                    : tool.precision === "Moyenne"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                      {tool.precision === -1 ? "Erreur" : tool.precision}
                                    </span>
                                </td>
                                <td className="px-2 py-4 text-green-900 text-sm">
                                    {tool.criterias.map((criteria) => (
                                        <span>{criteria}<br/></span>
                                        )
                                    )}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span
                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                            tool.exportable
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                      {tool.exportable === undefined ? "Erreur" : tool.exportable ? "Oui" : "Non"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span
                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                            tool.documentation
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                      {tool.documentation === undefined ? "Erreur" : tool.documentation ? "Oui" : "Non"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span
                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                            tool.integration
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                      {tool.integration === undefined ? "Erreur" : tool.integration ? "Oui" : "Non"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-green-900">
                                    <div className="flex flex-wrap gap-1">
                                        {tool.strongPoints.map((point, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-flex px-2 py-1 text-xs bg-green-50 text-green-700 rounded-full"
                                            >
                                              {point}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-green-900">
                                    <div className="flex flex-wrap gap-1">
                                        {tool.weakPoints.map((point, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-flex px-2 py-1 text-xs bg-red-50 text-red-700 rounded-full"
                                            >
                                              {point}
                                            </span>
                                        ))}

                                    </div>
                                </td>
                                <td
                                    className={`px-6 py-4 text-center ${getRatingBg(
                                        tool.note
                                    )} rounded-lg mx-2`}
                                >
                                    <span
                                        className={`text-lg font-bold ${getRatingColor(
                                            tool.note
                                        )}`}
                                    >
                                      {tool.note === -1 ? "Erreur" : tool.note}
                                    </span>
                                    <div className="w-full bg-green-200 rounded-full h-1.5 mt-1">
                                        <div
                                            className={`h-1.5 rounded-full ${
                                                tool.note >= 4
                                                    ? "bg-green-500"
                                                    : tool.note >= 3
                                                        ? "bg-yellow-500"
                                                        : "bg-red-500"
                                            }`}
                                            style={{ width: `${(tool.note / 5) * 100}%` }}
                                        ></div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-green-900">
                                    <div className="flex flex-wrap gap-1">
                                          {tool.noteWebsite }
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>🌍 Impossible de trouver le tableau de comparaison...</p>
            )}
        </>
    );
};

export default Table;
