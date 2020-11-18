import React from 'react';

const VideoInput = ({setVideo}) => {
    const onChangeHandler = (e) => {
        setVideo(e.target.files?.item(0));
    }

    return(
        <div className= "input-group mb-3">
            <div className ="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div className = "custom-file">
                <input type = "file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" onChange = {onChangeHandler} />
                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
            </div>
        </div>
    );
}
export default VideoInput;