import BeerCard from "../../components/BeerCard/BeerCard"

const ClassicRange = (props) => {
    const {beers} = props;
    
    const classicRangeBeers = beers.filter((beer) => { 
        let firstBrewed = beer.first_brewed.slice(3)
        return Number(firstBrewed) < 2010
      });

    const mappedClassicRangeBeers = classicRangeBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });

    return (
        <>
        {mappedClassicRangeBeers}
        </>
    );
};

export default ClassicRange;
