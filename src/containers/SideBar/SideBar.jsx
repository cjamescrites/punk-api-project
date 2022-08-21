// put all filters here
// on click each filter in return
// potentially useRef
import BeerCard from "../../components/BeerCard/BeerCard";
import { useState, useEffect } from 'react';

const SideBar = (props) => {
    const {beers, handleAllClicked, handleAcidicClicked, handleClassicRangeClicked, handleHighABVClicked} = props;
    
    // All Beers
    const mappedBeers = beers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });


    // Acidic Beers 
    const acidicBeers = beers.filter((beer) => { 
        return beer.ph < 4
      });

    const mappedAcidicBeers = acidicBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });
    
    // const acidicState = () => {
    //     setBeer(mappedAcidicBeers)
    // };

    // const handleAcidicClicked = () => {
    //     mappedAcidicBeers()
    //     acidicState()
    // };

    // Classic Range Beers
    const classicRangeBeers = beers.filter((beer) => { 
        let firstBrewed = beer.first_brewed.slice(3)
        return Number(firstBrewed) < 2010
      });

    const mappedClassicRangeBeers = classicRangeBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });

    // const classicRangeState = () => {
    //     setBeer(mappedClassicRangeBeers)
    // };

    // const handleClassicRangeClicked = () => {
    //     classicRangeState();
    //     mappedClassicRangeBeers();
    // }

    // High ABV Beers
    const HighABVBeers = beers.filter((beer) => { 
        return beer.abv > 6
      });

    const mappedHighABVBeers = HighABVBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });

    // const HighABVState = () => {
    //     setBeer(mappedHighABVBeers)
    // };

    // const handleHighABVClicked = () => {
    //     HighABVState()
    //     mappedHighABVBeers();
    // }
    

      
    return(
        <div className="sideBarContent">
            <div>
                <label>All Beers</label>
                <input type="checkbox" onClick={handleAllClicked}></input>
            </div>
            <div>
                <label>Acidic</label>
            <input type="checkbox" onClick={handleAcidicClicked}></input>
            </div>
            <div>
                <label>Classic Range</label>
                <input type="checkbox" onClick={handleClassicRangeClicked}></input>
            </div>
            <div>
                <label>High ABV</label>
                <input type="checkbox" onClick={handleHighABVClicked}></input>
            </div>
        </div>
    )
}

export default SideBar;