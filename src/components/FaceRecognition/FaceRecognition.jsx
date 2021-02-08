import React from 'react';
import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl, boxes}) => {
    return (
        <div className={"center ma"}>
            <div className="absolute mt-2">
                <img id={"inputimage"} src={imageUrl} alt="" width={"500px"} height={"auto"}/>
                {boxes.map((box, index) => {
                    console.log(box, index)
                    return <div key={index} className="bounding-box" style={{top: box.topRow, right:box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                } )}
            </div>
        </div>
    );
};

export default FaceRecognition;