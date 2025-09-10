import React from "react";

import "../App.css"
import toolsComparison from "../TP01/data/toolsComparaison.json";

const Table = () => {
    const [tools, setTools] = React.useState({})
    

    React.useEffect(() => {
        setTools(toolsComparison.tools);
        console.log(tools);
    }, [tools])

    const getRatingColor = (note) => {
        if (note >= 8.5) return 'text-green-600 font-semibold';
        if (note >= 7) return 'text-yellow-600 font-semibold';
        return 'text-red-600 font-semibold';
    };

    const getRatingBg = (note) => {
        if (note >= 8.5) return 'bg-green-50';
        if (note >= 7) return 'bg-yellow-50';
        return 'bg-red-50';
    };

    return (
        <>
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Tableau de Comparaison
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {tools.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                        <tr className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider sticky left-0 bg-slate-800 z-10 shadow-lg">
                                Nom
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider min-w-48">URL</th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">Gratuit</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider min-w-32">Usage</th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">Précision</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider min-w-40">Critères</th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">Exportable</th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">Documentation</th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">Intégration</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider min-w-48">Points forts</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider min-w-48">Points faibles</th>
                            <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">Note</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                        {tools.map((tool) => (
                            <tr
                                key={tool.name}>
                                <td className="px-6 py-4 font-semibold text-slate-900 sticky left-0 bg-inherit z-10 shadow-lg">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mr-3"></div>
                                        {tool.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 break-all"
                                    >
                                        {tool.url}
                                    </a>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        tool.free
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                      {tool.free ? "Oui" : "Non"}
                                    </span>
                                            </td>
                                            <td className="px-6 py-4 text-slate-700">
                                    <span className="inline-flex px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded-full">
                                      {tool.usage}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        tool.precision === 'Très élevée' ? 'bg-green-100 text-green-800' :
                                            tool.precision === 'Élevée' ? 'bg-blue-100 text-blue-800' :
                                                tool.precision === 'Moyenne' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                    }`}>
                                      {tool.precision}
                                    </span>
                                            </td>
                                            <td className="px-6 py-4 text-slate-700 text-sm">
                                                {tool.criterias}
                                            </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        tool.exportable
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                      {tool.exportable ? "Oui" : "Non"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        tool.documentation
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                      {tool.documentation ? "Oui" : "Non"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        tool.integration
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                      {tool.integration ? "Oui" : "Non"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-700">
                                    <div className="flex flex-wrap gap-1">
                                        {tool.strongPoints.map((point, idx) => (
                                            <span key={idx} className="inline-flex px-2 py-1 text-xs bg-green-50 text-green-700 rounded-full">
                                                {point}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-700">
                                    <div className="flex flex-wrap gap-1">
                                        {tool.weakPoints.map((point, idx) => (
                                            <span key={idx} className="inline-flex px-2 py-1 text-xs bg-red-50 text-red-700 rounded-full">
                                              {point}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className={`px-6 py-4 text-center ${getRatingBg(tool.note)} rounded-lg mx-2`}>
                                    <span className={`text-lg font-bold ${getRatingColor(tool.note)}`}>
                                      {tool.note}
                                    </span>
                                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                                        <div
                                            className={`h-1.5 rounded-full ${
                                                tool.note >= 4 ? 'bg-green-500' :
                                                    tool.note >= 3 ? 'bg-yellow-500' :
                                                        'bg-red-500'
                                            }`}
                                            style={{ width: `${(tool.note / 5) * 100}%` }}
                                        ></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Impossible de trouver le tableau de comparaison...</p>
                )}
        </>
    )
};


export default Table;