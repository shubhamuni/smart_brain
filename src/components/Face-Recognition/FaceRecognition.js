import React from "react";

const FaceRecognition = ({ clarifaiData }) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
            <img id="inputImage" alt="face-recognition" src={clarifaiData} width="500px" height="auto"/>
            </div>
        </div>
    )
}
export default FaceRecognition;