import React from "react";
import './faceRec.css'

function FaceRec({imageURL,box}) {
    let {leftCol,topRow,rightCol,bottomRow} = box;
    return <div className="center displayImg">
        <div className="absolute mt2">
            <img id="inputImage" src={imageURL} alt="" />
            <div className="boundingBox" style={{top:topRow,right:rightCol,bottom:bottomRow,left:leftCol}} ></div>
        </div>
    </div>
}

export default FaceRec;