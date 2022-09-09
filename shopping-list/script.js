var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li')

button.addEventListener('click', Onclick);
input.addEventListener('keypress', addElement);



function checkInputlength(){
	return input.value.length;
}


function createListElement(){

		var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "delete";
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);
		ul.appendChild(li);


		input.value = "";

	liEvent();
	deleteButtonEvent()
}



function Onclick(){

	if(checkInputlength() > 0){
		createListElement();
	}

}


function addElement(){

	if(checkInputlength() > 0 && event.keyCode === 13){
		createListElement();
	}
}



function liEvent() {
	for (let i = 0; i < li.length; i++) {
		const element = li[i];
		element.addEventListener("click", toggleItem)
	}
}
function toggleItem() {
	this.classList.toggle("done");
}

liEvent();

function deleteButtonEvent() {
	var deleteButton = document.querySelectorAll('li button');
	for (let i = 0; i < deleteButton.length; i++) {
		const element = deleteButton[i];
		element.addEventListener("click", deleteItem);
	}
}
function deleteItem () {
	this.parentNode.remove()
}
deleteButtonEvent();