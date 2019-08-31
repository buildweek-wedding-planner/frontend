import React from "react";

const WeddingPage = (props) => {

    console.log(props)

    return(
        <div>
            <h2>{props.wedding}</h2>
        </div>
    )
};

export default WeddingPage;