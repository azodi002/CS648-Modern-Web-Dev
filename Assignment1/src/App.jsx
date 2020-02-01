const message = "Omid Azodi"

const nameElement = (
  <div title="Outer div">
    <h1 class="name">{message}</h1>
  </div>
);

const button_element = (
      <form>
         <button class="repo" type="submit" formaction="https://github.com/azodi002/CS648-Modern-Web-Dev">View My GITHUB Repo</button>
      </form>
);

const introduction_element = (
	<p class="intro">
		I am in my last year of my Master's program here at SDSU, studying Computer Science. I currently work at BAE Systems as a Software Engineer.
		In my free time I enjoy playing my PS4 and watching Football & Basketball. 
	</p>);

const picture_element = (
	<picture>
		<img class="omid_pic" src="Omid.png"/>
	</picture>);

ReactDOM.render(nameElement, document.getElementById('content'));
ReactDOM.render(introduction_element, document.getElementById('introduction_content'));
ReactDOM.render(picture_element, document.getElementById('picture_content'));
ReactDOM.render(button_element, document.getElementById('button_content'));