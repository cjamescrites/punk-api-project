import './App.css';
import { useState, useEffect } from "react";
import AllBeers from "./containers/AllBeers/AllBeers";
import SideBar from "./containers/SideBar/SideBar";
import ExploreBeers from "./containers/ExploreBeers/ExploreBeers";
import HighABV from "./containers/HighABV/HighABV";
import ClassicRange from "./containers/ClassicRange/ClassicRange";
import Acidic from "./containers/Acidic/Acidic";
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
    console.log(customBeers);

    useEffect(getBeers, []);
    useEffect(getCustomBeerAPI, []);


  
  
      return (
          <div style={{ backgroundImage:`url(${background})` }}>
              <div className="headerAndSearch">
                <div className="searchBar">
                  {beers && <ExploreBeers searchTerm={searchTerm} beers={beers} setSearchTerm={setSearchTerm} pH={pH} setPH={setPH} aBV={aBV} setABV={setABV} setFirstBrewed={setFirstBrewed} firstBrewed={firstBrewed} setShowCustomBeers={setShowCustomBeers} showCustomBeers={showCustomBeers}/>}
                </div>
              </div>
          </div>
  )};

export default App;
