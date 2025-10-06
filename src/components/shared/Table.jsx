
const Table = ({document}) => {
    const tableHead = document.fields
    const tableData = document.data

    return (
        <div>
            <table className={"w-full rounded-xl overflow-hidden shadow-lg border border-green-200"}>
                <thead className={"bg-gradient-to-r from-green-800 to-green-700 text-white"}>
                <tr>
                    {tableHead.map((value) => (
                        <th key={value.field_name} className={"px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider"}>
                               {value.display_name}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className={"divide-y divide-green-200 bg-white"}>
                {tableData.map((row, rKey) => (
                    <tr key={rKey}>
                        {tableHead.map((element, key) => (
                            <td key={key} className={"px-6 py-4 text-center"} dangerouslySetInnerHTML={{ __html: row[element.field_name] }}></td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;