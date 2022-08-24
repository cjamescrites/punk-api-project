import CustomBeerCard from "../../components/CustomBeerCard/CustomBeerCard"

const AllCustomBeers = (props) => {
    const {customBeers} = props;
    
    const mappedCustomBeers = customBeers.map((customBeer) => { 
        return <CustomBeerCard name={customBeer.name} image={customBeer.image_url} abv={customBeer.abv} ph={customBeer.ph} year={customBeer.first_brewed} tagline={customBeer.tagline} description={customBeer.description} />
      });

    return (
        <>
        {mappedCustomBeers}
        </>
    );
};

export default AllCustomBeers;

//style={{ backgroundImage:`url(${cardBackground})` }}>