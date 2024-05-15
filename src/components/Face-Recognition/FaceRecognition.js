import React from "react";

const FaceRecognition = ({ clarifaiData }) => {
    return(
        <div className="center">
        <img alt="face-recognition" src={clarifaiData}/>
        </div>
    )
}
export default FaceRecognition;