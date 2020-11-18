import React from "../../web_modules/react.js";
const VideoInput = ({setVideo}) => {
  const onChangeHandler = (e) => {
    setVideo(e.target.files?.item(0));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "input-group mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group-prepend"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text",
    id: "inputGroupFileAddon01"
  }, "Upload")), /* @__PURE__ */ React.createElement("div", {
    className: "custom-file"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "file",
    className: "custom-file-input",
    id: "inputGroupFile01",
    "aria-describedby": "inputGroupFileAddon01",
    onChange: onChangeHandler
  }), /* @__PURE__ */ React.createElement("label", {
    className: "custom-file-label",
    htmlFor: "inputGroupFile01"
  }, "Choose file")));
};
export default VideoInput;
