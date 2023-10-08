
import React from "react";
import './locicaldesign.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export function Logicaldesign() {
    return (
        <>
            <div className="container-fluid p-5 " id="one">
                <div className=" container p-5 bg-white" id="two">
                    <div className="d-grid">
                        <div className="row">
                            <div className="col-6 mt-5">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskiZgnM4JEmoAag1Hbnq2KR-bnW5BpSwUVw&usqp=CAU" className=" rounded-circle w-50 pt-6 ms-5" />
                            </div>
                            <div className="col-6">
                                <div className="row">

                                    <div className=" m-5">
                                        <h1>Member Login</h1>
                                    <FontAwesomeIcon icon={faUser}/>
                                        <input type="text" placeholder="email" className="m-4" id="inputid"></input>
                                        <div className="col-12" >
                                        <FontAwesomeIcon icon={faLock}/>
                                        <input type="password" placeholder="password" className="m-3 col-6" id="pwdid"></input>
                                  
                            
                                        </div>
                                        <button type="button" className="btn btn-success text-center p-2 mt-2" id="buttondiv">login</button>
                                    
                                        <p className="mt-4">Forget <a href="#">Username</a> / <a href="#">password</a></p>
                                       <p  className="mt-4"><a href="#">Create your Account</a></p>

                                        
                                    </div>   
                               </div>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div >
        
        </>
    );
}


