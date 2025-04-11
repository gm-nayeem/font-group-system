import { useState } from "react";

import Title from "./Title";
import Button from "./Button";
import FontField from "./FontField";

const FontGroupForm = ({ fonts, onCreateFontGroups }) => {
    const [fontGroup, setFontGroup] = useState([{ name: "", font: "" }]);

    const onChange = (e, index) => {
        const { name, value } = e.target;

        const updated = [...fontGroup];
        updated[index][name] = value;
        setFontGroup(updated);
    };

    const onAddRow = () => {
        setFontGroup((prev) => [...prev, { name: "", font: "" }])
    };

    const onDeleteRow = (index) => {
        if (fontGroup.length <= 1) {
            alert("You must keep at least one field!");
            return;
        }
        setFontGroup((prev) => prev.filter((_, i) => i !== index));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // remove empty fonts
        const selectedFontGroup = fontGroup.filter((item) => item.font !== "");

        // check at least 2 fonts selected
        if (selectedFontGroup.length < 2) {
            alert("Please select at least 2 fonts to create a group!");
            return;
        }

        // check for duplicate fonts
        const fontValues = selectedFontGroup.map((item) => item.font);
        const uniqueFontValues = new Set(fontValues);

        if (uniqueFontValues.size !== fontValues.length) {
            alert("Each font in the group must be unique!");
            return;
        }

        const newFontGroup = {
            fonts: selectedFontGroup,
        };

        onCreateFontGroups(newFontGroup);
        setFontGroup([
            { name: "", font: "" },
        ]);
    };

    return (
        <div className="container">
            <Title title="Create a Font Group:" />

            <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
                {fontGroup.map((item, index) => (
                    <FontField
                        item={item}
                        index={index}
                        fonts={fonts}
                        onChange={onChange}
                        onDeleteRow={() => onDeleteRow(index)}
                    />
                ))}

                <div className="flex justify-between gap-4">
                    <Button
                        name="+ Add Row"
                        onClick={onAddRow}
                        className="border border-teal-600 py-1.5 px-6 "
                    />
                    <Button name="Create" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default FontGroupForm;
