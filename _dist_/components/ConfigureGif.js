import React from "../../web_modules/react.js";
const ConfigureGif = ({setGifLength, setStartingTime}) => {
  const gifLenghtHandler = (e) => {
    e.preventDefault();
    setGifLength(e.target.value);
  };
  const startingTimeHandler = (e) => {
    e.preventDefault();
    setStartingTime(e.target.value);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "configurations"
  }, /* @__PURE__ */ React.createElement("form", {
    className: "form-inline justify-content-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "gif-length col-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    onChange: gifLenghtHandler,
    placeholder: "GIF length",
    type: "text",
    className: "form-control",
    "aria-label": "Amount (to the nearest dollar)"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "input-group-append"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text"
  }, "seconds")))), /* @__PURE__ */ React.createElement("div", {
    className: "gif-starting col-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    onChange: startingTimeHandler,
    placeholder: "start-time",
    type: "text",
    className: "form-control",
    "aria-label": "Amount (to the nearest dollar)"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "input-group-append"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text"
  }, "seconds"))))));
};
export default ConfigureGif;
