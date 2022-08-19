import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import BeerCard from "../../components/BeerCard/BeerCard"

const ExploreBeers = (props) => {
  const { beers } = props;
  const [searchTerm, setSearchTerm] = useState("");

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
      <SearchBar
        label={"beers"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
    </>
  );
};

export default ExploreBeers;