import BeerCard from "../../components/BeerCard/BeerCard";
import ExploreBeers from "../ExploreBeers/ExploreBeers"

const Return = (props) => {
    
    const { filteredBeers } = props;

    return (
        {filteredBeers}
    )
}

export default Return;