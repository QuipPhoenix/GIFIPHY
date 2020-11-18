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

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  }

  useEffect(() => {
    load();
  }, [])
  
  return ready ? (
    <div className="App">
      {video && <video 
                    controls
                    width = "250"
                    src = {URL.createObjectURL()} ></video>}
      <VideoInput setVideo = {setVideo} />
      
    </div>
  ):
  (<h1>Loading</h1>)
}

export default App;
