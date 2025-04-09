import Title from './Title';
import Table from './Table';
import Button from './Button';
import { fontGroupListColumns } from '../constants';

const FontGroupList = ({ fontGroups, onEditFontGroups, onDeleteFontGroups }) => {

    const renderRow = (row, index) => (
        <>
            <td>
                {row.fonts.reduce((acc, item) => `${acc}${acc && ', '}${item.name}`, "")}
            </td>
            <td>
                {row.fonts.reduce((acc, item) => `${acc}${acc && ', '}${item.font}`, "")}
            </td>
            <td>{row.fonts.length}</td>
            <td className='action'>
                <div className="w-full flex justify-end gap-4">
                    <Button name="Edit" onClick={() => onEditFontGroups(index)} className='text-blue-600 hover:underline' style={{}} />
                    <Button name="Delete" onClick={() => onDeleteFontGroups(index)} className='text-red-600 hover:underline' style={{}} />
                </div>
            </td>
        </>
    );

    return (
        <div className="container">
            <Title title="Created Font Groups: " />

            {fontGroups.length === 0 ? (
                <p className="text-red-500 text-lg font-medium italic">No font groups created yet.</p>
            ) : (
                <Table columns={fontGroupListColumns} rows={fontGroups} renderRow={renderRow} />
            )}
        </div>
    );
};

export default FontGroupList;
