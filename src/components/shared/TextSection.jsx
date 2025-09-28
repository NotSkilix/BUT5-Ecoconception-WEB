import React from "react";
import ImageGallery from "./ImageGallery.jsx";

const TextSection = ({ title, subtitle, content, images, titleSize="h3" }) => {
    const TITLE_TAG = titleSize;
    const SUBTITLE_TAG = "h"+(parseInt(titleSize.substring(1))+1) // Make subtitle smaller by 1

    return (
        <div className="mb-8">
            {title && <TITLE_TAG dangerouslySetInnerHTML={{ __html: title }}/>}
            {subtitle && <SUBTITLE_TAG dangerouslySetInnerHTML={{ __html: subtitle }}/>}

            {Array.isArray(content)
                ?
                    content.map((element, key) => (
                        <div key={key} className="text-gray-700 leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: element }}/>
                    ))
                :
                <div className="text-gray-700 leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: content }}/>
            }

            {Array.isArray(images)
                ? <ImageGallery images={images} />
                : images && <ImageGallery images={[images]} />
            }
        </div>
    );
};

export default TextSection;
