import React from "react";
import Tilty from 'react-tilty';
// import bulb from './bulb.png'
import idea from "./idea.gif"

function Logo(){
    return <Tilty className="Tilty" options={{ max : 25 }} style={{ height: 100, width: 100,}} >
    <img src={idea} alt="loading..." />
   </Tilty>;
}

export default Logo;