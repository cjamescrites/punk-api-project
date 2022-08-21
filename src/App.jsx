import './App.css';
import { useState, useEffect } from "react";
import AllBeers from "./containers/AllBeers/AllBeers";
import SideBar from "./containers/SideBar/SideBar";
import ExploreBeers from "./containers/ExploreBeers/ExploreBeers";



function App() {
  
  const [beers, setBeer] = useState([]);

  const [aBV, setABV] = useState(false);
  const [pH, setPH] = useState(false);
  const [firstBrewed, setFirstBrewed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getBeers = () => {
    fetch ("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const dataObj = data;
      setBeer(dataObj);
      })
      console.log(beers);
    }

    useEffect(getBeers, []);


    const handleHighABVClicked = () => {
      setABV(!aBV)
    };

    const handleAcidicClicked = () => {
      setPH(!pH)  
    };

    const handleClassicRangeClicked = () => {
      setFirstBrewed(!firstBrewed)
    };

    const filteredBeer = beers.filter((beer) => {
      let beerMatched = true;
      if (beer.aBV) {
        beerMatched = beerMatched && beer.aBV > 6;
      }
      if (beer.ph) {
        beerMatched = beerMatched && beer.ph < 4;
      }
      // if (beer.firstBrewed) {
      //   beerMatched = beerMatched && beer.firstBrewed
      // }

        return beerMatched;
    })

    


      return (
          <div>
              <div className="headerAndSearch">
              <h1>Punk API</h1>
              {beers && <ExploreBeers beers={beers}/>}
              </div>
              <div className="sideBarAndBeer">
                  <div className="sideBarContainer">
                      {beers && <SideBar pH={handleAcidicClicked} aBV={handleHighABVClicked} beers={beers} firstBrewed={handleClassicRangeClicked}/>}
                  </div>
                  <div className="exploreAndBeers">
                    <div className="beerContainer">     
                      {beers && <AllBeers beers={filteredBeer}/>}
                    </div>
                  </div>
              </div>
          </div>
  )};

export default App;
