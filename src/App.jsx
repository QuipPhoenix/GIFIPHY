import React, { useState, useEffect } from 'react';
import './App.css';
// starting point for working with ffmpeg library
import { createFFmpeg, fetchFile} from '@ffmpeg/ffmpeg';
import { use } from 'chai';
// log is set true to see what is happening in background 
const ffmpeg = createFFmpeg({log : true});
function App() {

  const [ready, setReady]  = useState(false);

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  }

  useEffect(() => {
    load();
  }, [])
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
