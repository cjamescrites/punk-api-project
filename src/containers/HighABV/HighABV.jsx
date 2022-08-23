import BeerCard from "../../components/BeerCard/BeerCard"

const HighABV = (props) => {
    const {beers} = props;
    
    const HighABVBeers = beers.filter((beer) => { 
        return beer.abv > 6
      });

    const mappedHighABVBeers = HighABVBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });

    return (
        <>
        {mappedHighABVBeers}
        </>
    );
};

export default HighABV;
