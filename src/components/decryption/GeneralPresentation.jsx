import text from "../../data/decryption/GeneralPresentation.json"
import TextSection from "../shared/TextSection.jsx";

const GeneralPresentation = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto px-4 py-4">
                <TextSection title={text.brief.title} content={text.brief.content}/>
                <TextSection title={text.oneSentence.title} content={text.oneSentence.content}/>
            </div>
        </div>
    )
}

export default GeneralPresentation