// put all filters here
// on click each filter in return
// potentially useRef
import BeerCard from "../../components/BeerCard/BeerCard";
import { useState, useEffect } from 'react';

const SideBar = (props) => {
    const {pH, setPH, firstBrewed, setFirstBrewed , setABV, aBV, showCustomBeers, setShowCustomBeers} = props;


    const handleAcidicClicked = () => {
        setPH(!pH)
    };

    const handleClassicRangeClicked = () => {
        setFirstBrewed(!firstBrewed)
    };

    const handleHighABVClicked = () => {
        setABV(!aBV)  
    };

    const handleCustomBeerClicked = () => {
        setShowCustomBeers(!showCustomBeers);
      }
    


      
    return(
        <div className="sideBarContent">
            <div className="label">
                <label>Acidic</label>
            <input type="checkbox" onChange={handleAcidicClicked}></input>
            </div>
            <div className="label">
                <label>Classic Range</label>
                <input type="checkbox" onChange={handleClassicRangeClicked}></input>
            </div>
            <div className="label">
                <label>High ABV</label>
                <input type="checkbox" onChange={handleHighABVClicked}></input>
            </div>
            <div className="label">
                <label>Custom Beer of the Week!</label>
                <input type="checkbox" onChange={handleCustomBeerClicked}></input>
            </div>
        </div>
    )
}

export default SideBar;