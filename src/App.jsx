import './App.css';
import { useState, useEffect } from "react";
import AllBeers from "./containers/AllBeers/AllBeers"


function App() {
  
  const [beers, setBeer] = useState();

  const getBeers = () => {
    fetch ("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setBeer(data);
      })
      console.log(setBeer);
    }

    useEffect(getBeers, []);
  
  return (
    <div>
      <h1>test</h1>
      <div className="beersContainer">
        {beers && <AllBeers beers={beers}/>}
      </div>
    </div>
  );
};

export default App;
