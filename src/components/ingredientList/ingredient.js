import React from "react";
import Ingre from "./in";
import './ingredient.css';

function Ingrdient({listIngredients}){
    return <div className="list">
        <h1>Ingredients</h1>
        <div>
        {listIngredients.map(x=><Ingre ingredient={x}/>)}
        </div>
    </div>
}

export default Ingrdient;