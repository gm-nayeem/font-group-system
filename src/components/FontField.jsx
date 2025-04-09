import { RxCross2 } from "react-icons/rx";
import { FaArrowsUpDown } from "react-icons/fa6";

const FontField = ({ item, index, fonts, onChange, onDeleteRow }) => {
    return (
        <div
            className="w-ful bg-white border border-black/5 shadow-lg rounded flex gap-3 transition-all duration-300 ease-in-out "
            style={{ padding: "10px 16px" }}
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
                className="w-full text-sm border border-black/20 rounded outline-none"
                style={{ padding: "4px 12px" }}
            />

            <select
                name="font"
                value={item.font}
                onChange={(e) => onChange(e, index)}
                className="w-full border border-black/20 rounded text-sm text-black/60"
                style={{ padding: "0 12px" }}
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
