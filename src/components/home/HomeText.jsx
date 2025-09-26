import React from "react";
import TextSection from "../shared/TextSection.jsx";

const HomeText = ({ texts }) => {
    return (
        <div className="mb-4 space-y-6 py-8 px-8 bg-white rounded-lg shadow-md">
            {texts.map((text, index) => (
                <TextSection key={index} title={text.title} content={text.content} subtitle={text.subtitle} />
            ))}
        </div>
    );
};

export default HomeText;
