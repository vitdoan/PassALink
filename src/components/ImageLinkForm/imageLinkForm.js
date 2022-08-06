import React from "react";
import './linkForm.css'

function ImageLinkForm (props){
    return <div className="imgForm">
        <p className="center">
            {'Pass in a link of a picture and this magic bulb will detect faces!'}
        </p>
        <div className="pa4 br3 shadow-5 center inputField">
            <input onChange={props.onInputChange} className="f4 pa2 w-70" type="text"></input>
            <button onClick={props.onSubmit} className="f4 pa2 w-15 bg-light-green" type="">detect</button>
        </div>
    </div>;
}

export default ImageLinkForm;