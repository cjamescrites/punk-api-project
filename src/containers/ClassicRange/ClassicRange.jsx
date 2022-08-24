import BeerCard from "../../components/BeerCard/BeerCard"

const ClassicRange = (props) => {
    const {filteredBeers} = props;
    
    const classicRangeBeers = filteredBeers.filter((beer) => { 
        let firstBrewed = beer.first_brewed.slice(3)
        return Number(firstBrewed) < 2010
      });

    const mappedClassicRangeBeers = classicRangeBeers.map((beer, id) => { 
        return <BeerCard key={id} name={beer.name} image={beer.image_url} abv={beer.abv} tagline={beer.tagline} />
      });

    return (
        <div className="beerContainer">
        {mappedClassicRangeBeers}
        </div>
    );
};

export default ClassicRange;
