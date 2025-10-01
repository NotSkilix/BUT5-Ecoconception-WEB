import data from "../../data/rgesn/rgesn.json"
import TextSection from "../shared/TextSection.jsx";

const Introduction = () => {
    const introduction = data.introduction
    return (
        <div>
            {/*<TextSection title={introduction.title} subtitle={introduction.subtitle} />*/}
            {/*{introduction.data.map((value, key) => (*/}
            {/*    <div key={key}>*/}
            {/*        <TextSection*/}
            {/*            title={value.title} subtitle={value.subtitle} titleSize={"h4"}*/}
            {/*            content={value.content} images={value.images} />*/}
            {/*    </div>*/}
            {/*))}*/}
            {introduction.map((selection, selectionKey) => (
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

export default Introduction