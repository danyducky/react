import loading from "../allUsers/img/load.gif";
import React from "react";


const Loader = () => {
    return (
        <div>
            <img className="loadingImage" src={loading} alt="" style={ { margin: "0 auto"} }/>
        </div>
    )
}

export default Loader;