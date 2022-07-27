var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var le=document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}



function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function editList(event,i) {
	
	le[i].classList.add("done");

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


for(var i=0;i<le.length;i++)
{
	
	le[i].addEventListener("click", editList(event,i));

}
 

