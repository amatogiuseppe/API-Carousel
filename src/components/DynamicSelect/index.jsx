import React, { useState, useEffect } from "react";

function DynamicSelect({
  apiList,
  setApiList,
  categoriesList,
  setCategoriesList,
  setSelectedOption,
}) {

  // A loader during the request on the API
  const [isLoading, setIsLoading] = useState(true);

  // Fetching data from the main API and creating the list of all APIs
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.publicapis.org/entries");
        const responseJson = await response.json();
        setApiList([...responseJson.entries]);
        setIsLoading(false);
      } catch (error) {
        console.log("Oh no! Fetch error: ", error);
        alert("Oups ! Un problème est survenu ! ");
      }
    }
    fetchData();
  }, [setApiList]);

  // Creating the list of all categories
  useEffect(() => {
    async function createCategoriesList() {
      for (let i in apiList) {
        if (!categoriesList.includes(apiList[i].Category)) {
          setCategoriesList([...categoriesList, apiList[i].Category].sort());
        }
      }
    }
    createCategoriesList();
  }, [apiList, categoriesList, setCategoriesList]);

  // Function that allows the selected category to be saved
  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  return (
    <>
      {isLoading ? (
        <div className="spinner-box">
          <i className="fa fa-spinner"></i>
        </div>
      ) : (
        <select name="category" onChange={(e) => handleOptionChange(e)}>
          <option selected> - - - </option>
          {categoriesList.map((category, idx) => (
            <option key={`category-${idx}`}>{category}</option>
          ))}
        </select>
      )}
    </>
  );
}

export default DynamicSelect;
