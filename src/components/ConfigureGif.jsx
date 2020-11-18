import React from 'react'

const ConfigureGif = ({setGifLength, setStartingTime}) => {
    const gifLenghtHandler = (e) => {
        e.preventDefault();
        setGifLength(e.target.value);
        //console.log(e.target.value);
    }

    const startingTimeHandler = (e) => {
        e.preventDefault();
        setStartingTime(e.target.value);
        //console.log(e.target.value);
    } 
    return(
        <div className = "configurations">
            <form className = "form-inline justify-content-center">
                <div className = "gif-length col-2">
                    <div className="input-group mb-3">
                        <input onChange = {gifLenghtHandler} placeholder = "GIF length" type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <div className="input-group-append">
                            <span className="input-group-text">seconds</span>
                        </div>
                    </div>
                </div>
                <div className = "gif-starting col-2">
                    <div className="input-group mb-3">
                        <input onChange = {startingTimeHandler} placeholder = "start-time" type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <div className="input-group-append">
                            <span className="input-group-text">seconds</span>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
export default ConfigureGif;