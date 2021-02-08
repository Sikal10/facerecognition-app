import React from 'react';
import Tilt from "react-tilt";
import brain from "./icons8-brain-50.png";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{max: 85}} style={{height: 120, width: 120, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div className="Tilt-inner">
                    <img src={brain} alt=""/>
                </div>
            </Tilt>
        </div>
);
};

export default Logo;