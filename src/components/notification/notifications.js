import { faBell, faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Notifications(){
    return(
        <>
        <div className="container-fluid col-lg-6">
            <h1 className="container-fluid col-lg-4 text-center">Notifications</h1>
            <div className="bg-primary p-3 m-3 mt-5 text-white">
            <FontAwesomeIcon icon={faCheck}/>{'\n'}
                Information Messages</div>
            <div className="bg-success p-3 m-3 text-white">
                <FontAwesomeIcon icon={faCheck}/>{'\n'}
                Success Messages</div>
            <div className="bg-warning p-3 m-3 text-white">
                <FontAwesomeIcon icon={faBell}/>{'\n'}
                Warning Messages</div>
            <div className="bg-danger p-3 m-3 text-white">
                <FontAwesomeIcon icon={faExclamation}/>{'\n'}
                Error Messages</div>
        </div>
                               
        </>
    );
}