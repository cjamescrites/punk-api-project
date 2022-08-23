import { useState } from 'react'
import cardBackground from "../../hops.jpg"
import "./BeerCard.scss"

const BeerCard = ({ name, image, abv, tagline, ph, description}) => {

  const [moreInfo, setMoreInfo] = useState(false)

  const handleClick = () => {
    setMoreInfo(!moreInfo)
  }

  const info = (
    <p>{description}</p>
  )

    return (
      <div className="beer-card" style={{ backgroundImage:`url(${cardBackground})` }}>
        <img className="beer-card__image" src={image} alt={name} />
        <div className="beer-card__content">
          <h2 className="beer-card__heading">{name}</h2>
          <p>ABV: {abv}</p>
          <p>pH: {ph}</p>
          <p>{tagline}</p>
          <h3 onClick={handleClick}>MORE INFO</h3>
          {moreInfo ? info : null}
        </div>
      </div>
    );
  };
  
  export default BeerCard;