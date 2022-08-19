import './App.css';
import { useState, useEffect } from "react";
import AllBeers from "./containers/AllBeers/AllBeers";
import SideBar from "./containers/SideBar/SideBar";
import ExploreBeers from "./containers/ExploreBeers/ExploreBeers";



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

    // const acidicBeers = beers.filter((beer) => {
    //   return beers.ph < 4
    // });

    // console.log(acidicBeers);
  
      return (
          <div>
              <div className="headerAndSearch">
              <h1>Punk API</h1>
              {beers && <ExploreBeers beers={beers}/>}
              </div>
              <div className="sideBarAndBeer">
                  <div className="sideBarContainer">
                      {beers && <SideBar beers={beers}/>}
                  </div>
                  <div className="exploreAndBeers">
                    <div className="beerContainer">     
                      {beers && <AllBeers beers={beers}/>}
                    </div>
                  </div>
              </div>
          </div>
  )};

export default App;
