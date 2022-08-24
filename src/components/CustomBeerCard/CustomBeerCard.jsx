import cardBackground from "../../hops.jpg"
import "./CustomBeerCard.scss"

const CustomBeerCard = ({ name, image, abv, tagline, ph}) => {

    return (
      <div className="beer-card" style={{ backgroundImage:`url(${cardBackground})` }}>
        <img className="beer-card__image" src={image} alt={name} />
        <div className="beer-card__content">
          <h2 className="beer-card__heading">{name}</h2>
          <p>ABV: {abv}</p>
          <p>pH: {ph}</p>
          <p>{tagline}</p>
        </div>
      </div>
    );
  };
  
  export default CustomBeerCard;