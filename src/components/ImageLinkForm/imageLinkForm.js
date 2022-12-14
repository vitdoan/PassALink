import React from "react";
import './linkForm.css'

function ImageLinkForm ({onInputChange, onSubmit}){
    return <div className="imgForm">
        <p className="center">
            {'Pass in a link of a picture and this magic bulb will list out the possible ingredients!'}
        </p>
        <div className="pa3 br3 shadow-6 center inputField">
            <input onChange={onInputChange} className="f4 pa2 w-70" type="text"></input>
            <button onClick={onSubmit} className="f4 pa2 w-15 bg-light-green" type="">detect</button>
        </div>
    </div>;
}

export default ImageLinkForm;