"use strict";

var message = "Omid Azodi";
var nameElement = React.createElement("div", {
  title: "Outer div"
}, React.createElement("h1", {
  class: "name"
}, message));
var button_element = React.createElement("form", null, React.createElement("button", {
  class: "repo",
  type: "submit",
  formaction: "https://github.com/azodi002/CS648-Modern-Web-Dev"
}, "View My GITHUB Repo"));
var introduction_element = React.createElement("p", {
  class: "intro"
}, "I am in my last year of my Master's program here at SDSU, studying Computer Science. I currently work at BAE Systems as a Software Engineer. In my free time I enjoy playing my PS4 and watching Football & Basketball.");
var picture_element = React.createElement("picture", null, React.createElement("img", {
  class: "omid_pic",
  src: "Omid.png"
}));
ReactDOM.render(nameElement, document.getElementById('content'));
ReactDOM.render(introduction_element, document.getElementById('introduction_content'));
ReactDOM.render(picture_element, document.getElementById('picture_content'));
ReactDOM.render(button_element, document.getElementById('button_content'));