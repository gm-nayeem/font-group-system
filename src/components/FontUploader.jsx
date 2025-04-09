import { useRef } from "react";

import Title from './Title';
import uploadImg from '../assets/upload.png';

const FontUploader = ({ onUploadFont }) => {
    const dropRef = useRef(null);

    const onDragEnter = () => dropRef.current.classList.add('dragover');

    const onDragLeave = () => dropRef.current.classList.remove('dragover');

    const onDrop = () => dropRef.current.classList.remove('dragover');

    const onChange = (e) => {
        const file = e.target.files[0];

        if (!file || !file.name.endsWith(".ttf")) {
            alert("Only TTF File Allowed!");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const fontName = file.name.split(".")[0].replace(/\s+/g, "_");
            const style = document.createElement("style");
            style.innerHTML = `
        @font-face {
          font-family: '${fontName}';
          src: url(${reader.result});
        }
      `;
            document.head.appendChild(style);
            onUploadFont({ font: fontName });
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="container">
            <Title title="Upload a Font:" />

            <div
                ref={dropRef}
                className="dropInputFile"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="flex flex-col items-center justify-center gap-1.5">
                    <img src={uploadImg} alt="uploadLogo" className="w-[60px]" />
                    <p className="text-center text-sm"> <b>Click to upload</b> or drag and drop <br /> Only TTF File Allowed</p>

                </div>
                <input
                    type="file"
                    accept=".ttf"
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default FontUploader;
