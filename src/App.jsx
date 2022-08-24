import './App.css';
import { useState, useEffect } from "react";
import AllBeers from "./containers/AllBeers/AllBeers";
import SideBar from "./containers/SideBar/SideBar";
import ExploreBeers from "./containers/ExploreBeers/ExploreBeers";
import HighABV from "./containers/HighABV/HighABV";
import ClassicRange from "./containers/ClassicRange/ClassicRange";
import Acidic from "./containers/Acidic/Acidic";
import Results from "./containers/Results/Results"
import background from "./background.png"
import AllCustomBeers from "./containers/AllCustomBeers/AllCustomBeers"



function App() {
  
  const [beers, setBeer] = useState([]);
  const [customBeers, setCustomBeers] = useState([]);
  const [showCustomBeers, setShowCustomBeers] = useState(false);
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
      })};

      const getCustomBeerAPI = () => {
        fetch ("http://192.168.1.74:3020/")
        .then((response) => {
          return response.json()
        })
        .then((data => {
          const customDataObj = data.customBeer;
          setCustomBeers(customDataObj);
          console.log(customDataObj)
        }))
      }

    console.log(showCustomBeers);

    useEffect(getBeers, []);
    useEffect(getCustomBeerAPI, []);

    const filteredBeers = beers.filter((beer) => {
      const beerTitleLower = beer.name.toLowerCase();
  
      return beerTitleLower.includes(searchTerm);
    });

  
  
      return (
          <div style={{ backgroundImage:`url(${background})` }}>
              <div className="headerAndSearch">
              <h1>Punk API</h1>
              {beers && <ExploreBeers searchTerm={searchTerm} beers={beers} setSearchTerm={setSearchTerm} />}
              </div>
              <div className="sideBarAndBeer">
                  <div className="sideBarContainer">
                      {beers && <SideBar pH={pH} setPH={setPH} setABV={setABV} aBV={aBV} beers={beers} firstBrewed={firstBrewed} setFirstBrewed={setFirstBrewed} setShowCustomBeers={setShowCustomBeers} showCustomBeers={showCustomBeers}/>}
                  </div>
                  <div className="exploreAndBeers">
                    <div className="beerContainer">     
                      {beers && aBV ? <HighABV beers={beers} /> : beers && searchTerm ? <Results beers={filteredBeers} /> : beers && pH ? <Acidic beers={beers}/> : beers && firstBrewed ? <ClassicRange beers={beers}/> : beers ? <AllBeers beers={beers}/> : customBeers && showCustomBeers ? <AllCustomBeers customBeers={customBeers} /> : ""}
                    </div>
                  </div>
              </div>
          </div>
  )};

export default App;
