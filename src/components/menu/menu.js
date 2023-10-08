import React from "react";
import { Link } from 'react-router-dom'
export function Menu() {
    return (
        <>
            <Link to="/"></Link>
            <nav class="navbar navbar-expand-lg navbar-warning bg-info">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Madhu</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#"><Link to="/About"><li>About</li></Link></a>
                            <a class="nav-link active" aria-current="page" href="#"> <Link to="/Card"><li>Card</li></Link></a>
                            <a class="nav-link active" aria-current="page" href="#"><Link to="/Notifications"><li>Notifications</li></Link></a>
                            <a class="nav-link active" aria-current="page" href="#"> <Link to="/Socialbutton"><li>Socialbutton</li></Link></a>
                            <a class="nav-link active" aria-current="page" href="#">  <Link to="/Superover"><li>Superover</li></Link></a>
                        </div>
                    </div>
                </div>
              
           </nav >

                        
        </>
    );
}



