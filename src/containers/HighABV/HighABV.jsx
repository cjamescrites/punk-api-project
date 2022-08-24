import BeerCard from "../../components/BeerCard/BeerCard"

const HighABV = (props) => {
    const {filteredBeers} = props;
    
    const HighABVBeers = filteredBeers.filter((beer) => { 
        return beer.abv > 6
      });

    const mappedHighABVBeers = HighABVBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });

    return (
        <div className="beerContainer">
        {mappedHighABVBeers}
        </div>
    );
};

export default HighABV;
