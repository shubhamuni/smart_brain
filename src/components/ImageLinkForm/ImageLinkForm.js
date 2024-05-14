import React from "react";
import "./imageLinkForm.css"
const ImageLinkForm = ({ onInputChange }) => {
    return (
    <div>
        <p className="f3">{"This magic brain will detect faces in your pictures. Give it a try."}</p>
        <div className="center">
            <div className="form center pa4 br3 shadow-5">
            <input type="text" className="f4 pa2 wd-70 center" onChange={onInputChange}/>
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
            </div>
        </div>
    </div>       
    )
}
export default ImageLinkForm;