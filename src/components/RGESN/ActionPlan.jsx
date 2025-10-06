import data from "../../data/rgesn/rgesn.json"
import TextSection from "../shared/TextSection.jsx";

const ActionPlan = () => {
    const analyse = data.action
    return (
        <div>
            {analyse.map((selection, selectionKey) => (
                <div key={selectionKey}>
                    <TextSection title={selection.title} subtitle={selection.subtitle} />
                    {selection.data.map((value, key) => (
                        <TextSection key={key} title={value.title} subtitle={value.subtitle} images={value.images}
                        content={value.content} titleSize={"h4"}/>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ActionPlan