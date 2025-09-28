import text from "../../data/decryption/practicalExample.json"
import TextSection from "../shared/TextSection.jsx";

const PracticalExample = () => {
    return (
        <div>
            {Object.entries(text).map(([key, section]) => (
                <div key={key}>
                    <TextSection title={section.title} subtitle={section.subtitle}/>
                    {section.data.map((item, index) => (
                        <div key={index}>
                            <TextSection title={item.title} content={item.content} images={item.images} titleSize={"h4"} subtitle={item.subtitle}/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default PracticalExample