var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		deleteListItem(li);
		ul.appendChild(li);
		input.value = "";
}

function deleteListItem(li) {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode(" x"))	
	deleteButton.setAttribute("me", "deletebutton");
	li.appendChild(deleteButton);
}


function addListAfterClick() {
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}


function toggleListItem(event) {
	event.target.classList.toggle("done");
	if (event.target && event.target.matches("button")) {
		event.target.parentNode.parentNode.removeChild(event.target.parentNode)
	}
}

function buttonShows(){
	var b = document.getElementsByTagName("button");
	b.classList.toggle(deletebutton);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleListItem);
button.addEventListener("mouseover", buttonShows); 


