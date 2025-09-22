const { createElement } = require("react");

const title = document.querySelector("h1");
console.log(title);

this.onload = () => {
  //   const titleloaded = document.querySelector("h1");
  //   console.log(titleloaded, titleloaded.innerHTML);

  //   const titleloaded2 = document.querySelector("h2");
  //   console.log(titleloaded2, titleloaded2.outerText);

  const paragraphText = document.qc("#myParagraph");
  console.log(paragraphText.innerHTML);

  const anchor = document.createElement("a");

  paragraphText.innerHTML = "My new text";
  console.log(paragraphText.innerHTML);

  const elem = document.createElement("h2");

  elem.textContent("Apple");

  document.querySelector("#app").appendChild(elem);
};
