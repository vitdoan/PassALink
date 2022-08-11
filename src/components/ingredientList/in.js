import React from "react";
import './ingredient.css';

function Ingre({ingredient}){
    return <div className="items">
    <p>{ingredient.ingredient}</p>
    <p>{ingredient.percent}%</p>
    </div>
}

export default Ingre;