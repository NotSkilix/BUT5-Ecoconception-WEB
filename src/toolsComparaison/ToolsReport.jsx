import React from "react";
import TextSection from "./TextSection.jsx";

const ToolsReport = ({ report }) => {
    return (
        <div className="space-y-6">
            <TextSection title="Introduction" content={report.introduction} />
            <p className="text-gray-700 leading-relaxed">
                Le site utilisé pour réaliser les tests est celui de la maire dans laquelle j'ai vécu:<br/>
                <a href="https://www.mairie-braud.fr/">
                    Mairie de Braud et Saint Louis
                </a>
            </p>

            {report.tools.map((tool) => (
                <TextSection
                    title={tool.name}
                    content={[
                        tool.description,
                        tool.score !== null && `Note globale : ${tool.score} / 5`,
                        tool.siteScore && `Note sur le site de ma mairie : ${tool.siteScore}`
                    ].filter(Boolean)}
                />
            ))}

            <TextSection title="Conclusion" content={report.conclusion} />
        </div>
    );
};

export default ToolsReport;
