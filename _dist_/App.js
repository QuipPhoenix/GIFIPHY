import React, {useState, useEffect} from "../web_modules/react.js";
import "./App.css.proxy.js";
import VideoInput2 from "./components/VideoInput.js";
import ConfigureGif2 from "./components/ConfigureGif.js";
import {createFFmpeg, fetchFile} from "../web_modules/@ffmpeg/ffmpeg.js";
const ffmpeg2 = createFFmpeg({log: true});
function App2() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();
  const [gifLength, setGifLength] = useState("");
  const [startingTime, setStartingTime] = useState("");
  const l = "disabled";
  const load = async () => {
    await ffmpeg2.load();
    setReady(true);
  };
  useEffect(() => {
    load();
  }, []);
  const convertToGif = async () => {
    ffmpeg2.FS("writeFile", "test.mp4", await fetchFile(video));
    await ffmpeg2.run("-i", "test.mp4", "-t", gifLength, "-ss", startingTime, "-f", "gif", "out.gif");
    const data = ffmpeg2.FS("readFile", "out.gif");
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "image/gif"}));
    setGif(url);
  };
  return ready ? /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "jumbotron jumbotron-fluid"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "display-1 text-center"
  }, "GIFIPHY"), /* @__PURE__ */ React.createElement("img", {
    src: "https://static.motionelements.com/img/video-converter/convert-video-to-gif-images.png"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-field text-center"
  }, /* @__PURE__ */ React.createElement(VideoInput2, {
    setVideo
  }), video && /* @__PURE__ */ React.createElement("video", {
    controls: true,
    width: "50%",
    src: URL.createObjectURL(video)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "output-field text-center"
  }, video && /* @__PURE__ */ React.createElement(ConfigureGif2, {
    setGifLength,
    setStartingTime
  }), video && /* @__PURE__ */ React.createElement("button", {
    onClick: convertToGif,
    type: "button",
    class: "btn btn-lg btn-primary"
  }, "Convert"), gif && /* @__PURE__ */ React.createElement("h3", {
    className: "display-3 text-center"
  }, /* @__PURE__ */ React.createElement("br", null), "Result"), gif && /* @__PURE__ */ React.createElement("img", {
    src: gif,
    className: "img-fluid"
  }))) : /* @__PURE__ */ React.createElement("h1", {
    className: "display-1 text-center"
  }, "Loading..........");
}
export default App2;
