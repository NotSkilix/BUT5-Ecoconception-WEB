import React from "react";

import toolsComparison from "../TP01/data/toolsComparaison.json";

const Table = () => {
    const [tools, setTools] = React.useState({})
    

    React.useEffect(() => {
        setTools(toolsComparison.tools);
        console.log(tools);
    }, [tools])

    return (
        <>
            <h2>Tableau de comparaison</h2>
            {tools.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>URL</th>
                        <th>Gratuit</th>
                        <th>Usage</th>
                        <th>Précision</th>
                        <th>Critères</th>
                        <th>Exportable</th>
                        <th>Documentation</th>
                        <th>Intégration</th>
                        <th>Points forts</th>
                        <th>Points faibles</th>
                        <th>Note</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tools.map((tool) => (
                        <tr key={tool.name}>
                            <td>{tool.name}</td>
                            <td><a href={tool.url}>{tool.url}</a></td>
                            <td>{tool.free ? "Oui" : "Non"}</td>
                            <td>{tool.usage}</td>
                            <td>{tool.precision}</td>
                            <td>{tool.criterias}</td>
                            <td>{tool.exportable ? "Oui" : "Non"}</td>
                            <td>{tool.documentation ? "Oui" : "Non"}</td>
                            <td>{tool.integration ? "Oui" : "Non"}</td>
                            <td>{tool.strongPoints}</td>
                            <td>{tool.weakPoints}</td>
                            <td>{tool.note}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>Chargement...</p>
                )}
        </>
    )
};


export default Table;