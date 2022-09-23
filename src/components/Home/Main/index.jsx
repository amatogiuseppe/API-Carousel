import React, { useState } from "react";
import DynamicSelect from "../../DynamicSelect";
import Carousel from "../../Carousel";

function Main() {
  const [apiList, setApiList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <main>
      <DynamicSelect
        apiList={apiList}
        setApiList={setApiList}
        categoriesList={categoriesList}
        setCategoriesList={setCategoriesList}
        setSelectedOption={setSelectedOption}
      />
      <Carousel
        apiList={apiList}
        selectedOption={selectedOption}
      />
    </main>
  );
}

export default Main;
