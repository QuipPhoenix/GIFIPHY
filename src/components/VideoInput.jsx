import React from 'react';

const VideoInput = ({setVideo}) => {
    const onChangeHandler = (e) => {
        setVideo(e.target.files?.item(0));
    }

    return(
        <div className = "input-video">
            <input type = "file" onChange = {onChangeHandler} /> 
        </div>
    );
}
export default VideoInput;