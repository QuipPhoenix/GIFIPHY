import React, { useState, useEffect } from 'react';
import './App.css';
import VideoInput from './components/VideoInput';
// starting point for working with ffmpeg library
import { createFFmpeg, fetchFile} from '@ffmpeg/ffmpeg';
// log is set true to see what is happening in background 
const ffmpeg = createFFmpeg({log : true});
function App() {

  const [ready, setReady]  = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();

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
    await ffmpeg.run("-i", 'test.mp4', '-t', '2.5', '-ss', '2.0', '-f', 'gif', 'out.gif')

    // Read the Result

    const data = ffmpeg.FS('readFile', 'out.gif');

    // create URL Blob is raw binary 
    const url = URL.createObjectURL(new Blob([data.buffer], {type: 'image/gif'}));
    setGif(url)

  }


  return ready ? (
    <div className="App">
      {video && <video 
                    controls
                    width = "250"
                    src = {URL.createObjectURL(video)} ></video>}
      <VideoInput setVideo = {setVideo} />
      <h3>Result</h3>
      <button onClick = {convertToGif}>Convert</button>
      {gif && <img src = {gif} width = "250"/>} 
      
    </div>
  ):
  (<h1>Loading</h1>)
}

export default App;
