import React, { useState, useEffect } from 'react';
import './App.css';
import VideoInput from './components/VideoInput';
import ConfigureGif from './components/ConfigureGif';
// starting point for working with ffmpeg library
import { createFFmpeg, fetchFile} from '@ffmpeg/ffmpeg';
// log is set true to see what is happening in background 
const ffmpeg = createFFmpeg({log : true});
function App() {

  const [ready, setReady]  = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();
  const [gifLength, setGifLength] = useState('');
  const [startingTime, setStartingTime] = useState('');

  const l = 'disabled';
  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  }

  useEffect(() => {
    load();
  }, [])
  

    const convertToGif = async () => {
    //write video file to memory remains still before is refresh
    ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video));

    //ffmpeg command
    // i for input t for lenght ss for starting point f for format 
    await ffmpeg.run("-i", 'test.mp4', '-t', gifLength, '-ss', startingTime, '-f', 'gif', 'out.gif')

    // Read the Result

    const data = ffmpeg.FS('readFile', 'out.gif');

    // create URL Blob is raw binary 
    const url = URL.createObjectURL(new Blob([data.buffer], {type: 'image/gif'}));
    setGif(url)

  }


  return ready ? (
    <div className="container-fluid">
      <header className = "jumbotron jumbotron-fluid">
        <h1 className = "display-1 text-center">GIFIPHY</h1>
        <img src = 'https://static.motionelements.com/img/video-converter/convert-video-to-gif-images.png'/>
      </header>

      <div className = "input-field text-center">
      <VideoInput setVideo = {setVideo} />
      {video && <video 
                    controls
                    width = "50%"
                    src = {URL.createObjectURL(video)} ></video>}
      </div>
      
      <div className = "output-field text-center">
        {video && <ConfigureGif setGifLength = {setGifLength} setStartingTime = {setStartingTime}/>}
        {video && <button onClick = {convertToGif} type="button" class="btn btn-lg btn-primary">Convert</button>}
        {gif && <h3 className = "display-3 text-center"><br/>Result</h3>}
       
        {gif && <img src = {gif} className = "img-fluid"/>} 
      </div>
    </div>
  ):
  (<h1 className = "display-1 text-center">Loading..........</h1>)
}

export default App;
