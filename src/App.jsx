import { useState } from "react";

import FontList from "./components/FontList";
import FontUploader from "./components/FontUploader";
import FontGroupForm from "./components/FontGroupForm";
import FontGroupList from "./components/FontGroupList";

const App = () => {
  const [fonts, setFonts] = useState([]);
  const [fontGroups, setFontGroups] = useState([]);

  const onUploadFont = (newFont) => {
    setFonts((prev) => [...prev, newFont]);
  };

  const onDeleteFont = (index) => {
    setFonts((prev) => prev.filter((_, i) => i !== index));
  };

  const onCreateFontGroups = (newFontGroup) => {
    setFontGroups((prev) => [...prev, newFontGroup]);
  };

  const onDeleteFontGroups = (index) => {
    setFontGroups((prev) => prev.filter((_, i) => i !== index));
  };

  const onEditFontGroups = (index) => {
    console.log(index);
  };

  return (
    <div className="w-full h-full p-8 flex flex-col items-center gap-8">
      <FontUploader onUploadFont={onUploadFont} />
      <FontList fonts={fonts} onDeleteFont={onDeleteFont} />

      <FontGroupForm fonts={fonts} onCreateFontGroups={onCreateFontGroups} />
      <FontGroupList
        fontGroups={fontGroups}
        onDeleteFontGroups={onDeleteFontGroups}
        onEditFontGroups={onEditFontGroups}
      />
    </div>
  );
}

export default App;
