import "./BeerCard.scss"

const BeerCard = ({ name, image, abv, tagline, ph}) => {
    return (
      <div className="beer-card">
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
  
  export default BeerCard;