import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SideBar from "../SideBar/SideBar"
import BeerCard from "../../components/BeerCard/BeerCard"
import AllBeers from "../AllBeers/AllBeers"
import HighABV from "../HighABV/HighABV"
import ClassicRange from "../ClassicRange/ClassicRange"
import Acidic from "../Acidic/Acidic"
import AllCustomBeers from "../AllCustomBeers/AllCustomBeers"

const ExploreBeers = (props) => {
  const {beers, searchTerm, setSearchTerm, aBV, pH, firstBrewed, customBeers, setPH, setABV, setFirstBrewed, setShowCustomBeers, showCustomBeers} = props;


  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beers.filter((beer) => {
    const beerTitleLower = beer.name.toLowerCase();

    return beerTitleLower.includes(searchTerm);
  });


  return (
    <>
        <h1>Punk API</h1>
        <SearchBar className="button" handleInput={handleInput} />
        {beers && <SideBar pH={pH} setPH={setPH} setABV={setABV} aBV={aBV} beers={beers} firstBrewed={firstBrewed} setFirstBrewed={setFirstBrewed} customBeers={customBeers} setShowCustomBeers={setShowCustomBeers} showCustomBeers={showCustomBeers}/>}
        {customBeers && showCustomBeers ? <AllCustomBeers customBeers={customBeers} /> 
        : beers && aBV ? <HighABV filteredBeers={filteredBeers} /> 
        : beers && pH ? <Acidic filteredBeers={filteredBeers}/> 
        : beers && firstBrewed ? <ClassicRange filteredBeers={filteredBeers}/> 
        : beers && beers ? <AllBeers filteredBeers={filteredBeers}/> 
        : ""}
    </>
  );
};

export default ExploreBeers;