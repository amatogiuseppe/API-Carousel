import React, { useEffect, useState } from 'react'

function Main() {

  const [apiList, setApiList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect( () => {
    async function fetchData() {
      try {
        // Fetching data from the main API
        const response = await fetch("https://api.publicapis.org/entries");
        const responseJson = await response.json();
        // Creating the list of all APIs
        setApiList([...responseJson.entries]);
      }
      catch(error) {
        console.log("Oh no! Fetch error: ", error);
        alert("Oups ! Un problème est survenu ! ");
      }
    }
    fetchData()
  }, []);

  useEffect( () => {
    async function createCategoriesList() {
      // Creating the list of all categories
      for (let i in apiList) {
        if (!categoriesList.includes(apiList[i].Category)) {
          setCategoriesList([...categoriesList, apiList[i].Category].sort());
        }
      }
    }
    createCategoriesList()
  }, [apiList, categoriesList]);

  return (
    <main>
      <select name="category">
        {categoriesList.map((el, idx) => (
          <option key={`category-${idx}`} >{el}</option>
        ))}
      </select>
    </main>
  )
}

export default Main