// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "video {\r\n  margin-top: 100px;\r\n  margin-bottom: 100px;\r\n  margin-right: 150px;\r\n  margin-left: 80px;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}