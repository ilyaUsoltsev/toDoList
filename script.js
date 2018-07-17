var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var toDoItems = document.getElementById("ul");
var myNodelist = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("close");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	li.className = 'toDoItem';
	ul.appendChild(li);
	input.value = "";

	var span = document.createElement("button");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[myNodelist.length-1].appendChild(span);

	for (i = 0; i < close.length; i++) {
  	close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}

button.addEventListener('click',function(){
	if (inputLength() > 0) { createListElement();
	}
})

input.addEventListener('keypress',function(event){
	if (inputLength() > 0 && event.which ===13) {
	createListElement();}
})

toDoItems.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}











