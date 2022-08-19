// put all filters here
// on click each filter in return
// potentially useRef
import BeerCard from "../../components/BeerCard/BeerCard";
import { useState, useEffect } from 'react';

const SideBar = (props) => {
    const [beer, setBeer] = useState([]);
    
    const {beers} = props;
    
    // All Beers
    const mappedBeers = beers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });
    
    const allState = () => {
        setBeer(mappedBeers);
    }

    const handleAllClicked = () => {
        mappedBeers();
        allState();
    }

    // Acidic Beers 
    const acidicBeers = beers.filter((beer) => { 
        return beer.ph < 4
      });

    const mappedAcidicBeers = acidicBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });
    
    const acidicState = () => {
        setBeer(mappedAcidicBeers)
    };

    const handleAcidicClicked = () => {
        mappedAcidicBeers()
        acidicState()
    };

    // Classic Range Beers
    const classicRangeBeers = beers.filter((beer) => { 
        let firstBrewed = beer.first_brewed.slice(3)
        return Number(firstBrewed) < 2010
      });

    const mappedClassicRangeBeers = classicRangeBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });

    const classicRangeState = () => {
        setBeer(mappedClassicRangeBeers)
    };

    const handleClassicRangeClicked = () => {
        classicRangeState();
        mappedClassicRangeBeers();
    }

    // High ABV Beers
    const HighABVBeers = beers.filter((beer) => { 
        return beer.abv > 6
      });

    const mappedHighABVBeers = HighABVBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });

    const HighABVState = () => {
        setBeer(mappedHighABVBeers)
    };

    const handleHighABVClicked = () => {
        HighABVState()
        mappedHighABVBeers();
    }
    
    
  
    useEffect(setBeer)
      
    return(
        <div className="sideBarContent">
            <h2 onClick={handleAllClicked}>All Beers</h2>
            <h2 onClick={handleAcidicClicked}>Acidic</h2>
            <h2 onClick={handleClassicRangeClicked}>Classic Range</h2>
            <h2 onClick={handleHighABVClicked}>High ABV</h2>
        </div>
    )
}

export default SideBar;