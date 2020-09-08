import React from "react";
import "./info-bar.css";
import onlineIcon  from "../../icons/onlineIcon.png";
import closeIcon  from "../../icons/closeIcon.png";


const InfoBar = ({room}) => {
    return (
        <div className="info-bar">
            <div className="left-inner-container">
               <img alt="online icon" className="online-icon" src={onlineIcon}/>
               <h3>{room}</h3>
            </div>
            <div className="right-inner-container">
                <a href="/"><img alt="close icon" src={closeIcon} /></a>
            </div>
        </div>
    )
}

export default InfoBar;
