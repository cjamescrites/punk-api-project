import BeerCard from "../../components/BeerCard/BeerCard"

const AllBeers = (props) => {
    const {filteredBeers} = props;
    
    const mappedBeers = filteredBeers.map((beer) => { 
        return <BeerCard key={beer.id} name={beer.name} image={beer.image_url} abv={beer.abv} ph={beer.ph} year={beer.first_brewed} tagline={beer.tagline} description={beer.description} />
      });

    return (
        <div className="beerContainer">
        {mappedBeers}
        </div>
    );
};

export default AllBeers;