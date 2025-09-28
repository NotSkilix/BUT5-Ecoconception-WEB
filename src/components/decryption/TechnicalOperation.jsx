import text from "../../data/decryption/techincalOperation.json"
import TextSection from "../shared/TextSection.jsx";

const TechnicalOperation = () => {
    return (
        <div>
            <h3>{text.a.title}</h3>
            {text.a.datas.map((value,key) => (
                <TextSection key={key} title={value.title} titleSize={"h4"} content={value.content} images={value.images}/>
            ))}
        </div>
    )
}

export default TechnicalOperation