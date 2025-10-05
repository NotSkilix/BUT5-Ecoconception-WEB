import data from "../../data/rgesn/rgesn.json"
import Table from "../shared/Table.jsx"
import TextSection from "../shared/TextSection.jsx";
const Audit = () => {
    const audit = data.audit
    return (
        <div>
            <TextSection
                title={audit.title} />
            <Table document={audit}/>
        </div>
    )
}

export default Audit