import BeerCard from "../../components/BeerCard/BeerCard"

const AllBeers = (props) => {
    const {beers} = props;
    
    const mappedBeers = beers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });

    return (
        <>
        {mappedBeers}
        </>
    );
};

export default AllBeers;