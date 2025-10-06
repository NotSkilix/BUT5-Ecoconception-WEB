import data from "../../data/rgesn/rgesn.json"
import TextSection from "../shared/TextSection.jsx";

const Conclusion = () => {
    const analyse = data.conclusion
    return (
        <div>
            {analyse.map((selection, selectionKey) => (
                <div key={selectionKey}>
                    <TextSection title={selection.title} subtitle={selection.subtitle} />
                    {selection.data.map((value, vKey) => (
                        <div>
                            <TextSection key={vKey} title={value.title} subtitle={value.subtitle} images={value.images}
                            content={value.content} titleSize={"h4"}/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Conclusion