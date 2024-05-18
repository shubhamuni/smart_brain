import React from "react";
import classes from "./FaceRecognition.module.css"
const FaceRecognition = ({ clarifaiData, box}) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
            <img id="inputImage" alt="face-recognition" src={clarifaiData} width="500px" height="auto"/>
            <div className={classes.bounding} style={{top:box.topRow,right:box.rightCol,left:box.leftCol,bottom:box.bottomRow}}></div>
            </div>
        </div>
    )
}
export default FaceRecognition;