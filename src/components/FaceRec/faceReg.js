import React from "react";

function FaceRec(props) {
    return <div className="center displayImg">
        <img src={props.imageURL} alt="" />
    </div>
}

export default FaceRec;