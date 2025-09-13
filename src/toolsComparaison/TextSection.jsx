import React from "react";

const TextSection = ({ title, subtitle, content }) => {
    return (
        <div className="mb-8">
            {title && <h2 className="text-2xl font-bold text-green-800 mb-2">{title}</h2>}
            {subtitle && <h3 className="text-lg font-semibold text-green-700 mb-4">{subtitle}</h3>}
            {Array.isArray(content) ? (
                content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 mb-3 leading-relaxed">
                        {paragraph}
                    </p>
                ))
            ) : (
                <p className="text-gray-700 leading-relaxed">{content}</p>
            )}
        </div>
    );
};

export default TextSection;
