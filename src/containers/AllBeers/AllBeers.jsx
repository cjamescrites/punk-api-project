import BeerCard from "../../components/BeerCard/BeerCard"

const AllBeers = (props) => {
    const {beers} = props;
    
    const mappedBeers = beers.map((beer) => { 
        return <BeerCard key={beer.id} name={beer.name} image={beer.image_url} abv={beer.abv} ph={beer.ph} year={beer.first_brewed} tagline={beer.tagline} description={beer.description} />
      });

    return (
        <>
        {mappedBeers}
        </>
    );
};

export default AllBeers;