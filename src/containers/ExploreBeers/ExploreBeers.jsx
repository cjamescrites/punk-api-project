import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import BeerCard from "../../components/BeerCard/BeerCard"

const ExploreBeers = (props) => {
  const {beers, searchTerm, setSearchTerm} = props;


  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };


  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
    </>
  );
};

export default ExploreBeers;