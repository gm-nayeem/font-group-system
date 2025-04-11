import Title from './Title';
import Table from "./Table";
import Button from './Button';
import { fontListColumns } from '../constants';

const FontList = ({ fonts, onDeleteFont }) => {

    const renderRow = (row, index) => (
        <>
            <td>{row.font}</td>
            <td
                style={{ fontFamily: row.font }}
            >
                Example Style
            </td>
            <td className='action'>
                <Button name="Delete" onClick={() => onDeleteFont(index)} className='text-red-600 hover:underline' />
            </td>
        </>
    );

    return (
        <div className="container">
            <Title title="Uploaded Fonts:" />

            {fonts.length === 0 ? (
                <p className="text-red-500 text-lg font-medium italic">No fonts uploaded yet.</p>
            ) : (
                <Table columns={fontListColumns} rows={fonts} renderRow={renderRow} />
            )}
        </div>
    );
};

export default FontList;
