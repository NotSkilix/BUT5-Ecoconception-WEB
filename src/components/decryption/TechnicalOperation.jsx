import text from "../../data/decryption/techincalOperation.json"
import TextSection from "../shared/TextSection.jsx";

const TechnicalOperation = () => {
    return (
        <div>
            {Object.entries(text).map(([key, section]) => (
                <div key={key}>
                    <h3>{section.title}</h3>
                    {section.data.map((item, index) => (
                        <div key={index}>
                            <TextSection title={item.title} content={item.content} images={item.images} titleSize={"h4"}/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default TechnicalOperation