const Table = ({ columns = [], rows = [], renderRow }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.length && columns.map((col, index) => (
                        <th key={index} className="uppercase">
                            {col}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {rows.length && rows.map((row, index) => (
                    <tr key={index}>
                        {renderRow(row, index)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
