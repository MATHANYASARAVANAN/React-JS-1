import React from "react";

export function Card(){
    return(
        <>
          <div className="background"> 
            <h1 className="text-center">Congratulations</h1>
            <div className="bg-info text-center col-lg-4 mx-auto">
                <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"/>
                <h1>Kiran V</h1>
                <p>vishnu institute of computer education and Technology.coimbatore </p>
                <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"/>
            </div>
        </div> 
        
        </>
    );
}