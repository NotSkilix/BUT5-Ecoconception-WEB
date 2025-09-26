import React from "react";
import TextSection from "../shared/TextSection.jsx";

const ToolsReport = ({ report }) => {
    return (
        <div className="space-y-6 text-center">
            <TextSection title="Introduction" content={report.introduction} />
            <p className="text-gray-700 leading-relaxed">

            </p>

            {report.tools.map((tool, key) => (
                <TextSection
                    key={key}
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
