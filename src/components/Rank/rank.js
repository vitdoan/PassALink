import React from "react";

function Rank({name,entries}){
    return <div className="">
        <div className="gray f3 center">
            {`${name}, your current entry count is ${entries}`}
        </div>
    </div>
}

export default Rank;