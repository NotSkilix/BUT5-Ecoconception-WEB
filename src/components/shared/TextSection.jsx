import React from "react";

const TextSection = ({ title, subtitle, content }) => {

    console.log(content)

    return (
        <div className="mb-8">
            {title && <h3>{title}</h3>}
            {subtitle && <h4>{subtitle}</h4>}

            {Array.isArray(content)
                ?
                    content.map((element) => (
                        <div className="text-gray-700 leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: element }}/>
                    ))
                :
                <div className="text-gray-700 leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: content }}/>
            }

        </div>
    );
};

export default TextSection;
