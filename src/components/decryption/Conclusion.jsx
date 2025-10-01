import data from "../../data/decryption/conclusion.json"

const Conclusion = () => {
    return(
        <div>
            {Object.entries(data).map((element, key) => (
                <div key={key} className={"mb-6"}>
                    <h3 key={key}>{element[1].title}</h3>
                    <ul>
                        {element[1].data.map((text, keyText) =>
                            <li key={keyText}>{text}</li>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Conclusion