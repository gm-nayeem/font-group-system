import { RxCross2 } from "react-icons/rx";
import { FaArrowsUpDown } from "react-icons/fa6";

const FontField = ({ item, index, fonts, onChange, onDeleteRow }) => {
    return (
        <div
            className="w-ful bg-white py-2.5 px-4 border border-black/5 shadow-lg rounded flex gap-3 transition-all duration-300 ease-in-out "
        >
            <div className="flex items-center cursor-pointer">
                <FaArrowsUpDown size={15} />
            </div>

            <input
                type="text"
                name="name"
                value={item.name}
                placeholder="Font Name"
                onChange={(e) => onChange(e, index)}
                className="w-full py-1 px-3 text-sm border border-black/20 rounded outline-none"
            />

            <select
                name="font"
                value={item.font}
                onChange={(e) => onChange(e, index)}
                className="w-full px-3 border border-black/20 rounded text-sm text-black/60"
            >
                <option value="">Select a Font</option>
                {fonts.map((item, index) => (
                    <option key={index} value={item.font}>
                        {item.font}
                    </option>
                ))}
            </select>

            <div
                className="flex items-center cursor-pointer"
                onClick={onDeleteRow}
            >
                <RxCross2 className="text-red-600 font-bold" />
            </div>
        </div>
    );
};

export default FontField;
