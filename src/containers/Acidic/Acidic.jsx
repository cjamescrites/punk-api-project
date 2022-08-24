import BeerCard from "../../components/BeerCard/BeerCard"

const Acidic = (props) => {
    const {filteredBeers} = props;
    
    const acidicBeers = filteredBeers.filter((beer) => { 
        return beer.ph < 4
      });

    const mappedAcidicBeers = acidicBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });

    return (
        <div className="beerContainer">
        {mappedAcidicBeers}
        </div>
    );
};

export default Acidic;
