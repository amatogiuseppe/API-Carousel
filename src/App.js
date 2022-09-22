import Home from './pages/Home'

function App() {

  let apiList = [];
  let categoriesList = [];

  async function init() {
    try {
      // Fetching data from the main API
      const response = await fetch("https://api.publicapis.org/entries");
      const responseJson = await response.json();
      // Creating the list of all APIs
      apiList = [...responseJson.entries];
      // Creating the list of all categories
      for (let i in apiList) {
        if (!categoriesList.includes(apiList[i].Category)) {
          categoriesList = [...categoriesList, apiList[i].Category].sort();
        }
      }
    }
    catch(error) {
      console.log("Oh no! Fetch error: ", error);
      alert("Oups ! Un problème est survenu ! ");
    }
  }
  init();

  return (
    <Home />
  );
}

export default App;
