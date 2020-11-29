var button = document.getElementById('submitinput');
var input = document.getElementById('textinput');
var table = document.querySelector('table');

function inputValueLength() {
	return input.value.length;
}


function inputItemsName(){
	tr = document.createElement('tr');
	td = document.createElement('td');
	td1 = document.createElement('td');
	li = document.createElement('li');

	innerbutton = document.createElement('button');
	buttontext = document.createTextNode('Delete');
	innerbutton.appendChild(buttontext);

	newtext = document.createTextNode(input.value);
	li.appendChild(newtext);
	td.appendChild(li);
	tr.appendChild(td);
	input.value="";
	
	td1.appendChild(innerbutton);
	innerbutton.setAttribute('class','delete');
	tr.appendChild(td1);
	table.appendChild(tr);
	
}

// Adds the items on clicking
function addByClick(){
	if (inputValueLength())
	{
	inputItemsName()
	}
};

// Adds the items on pressing enter
function addbyEnter(event) {
	if (inputValueLength() && event.keyCode === 13) 
	{
	inputItemsName()
	}
}

// Strikesthrough the element and deletes the element
function clickInline(event) {
	
	if (event.path[1].className === '')
	{
		event.path[1].classList.add('done');		
	} 
	else if (event.path[1].className === 'done') 
	{
		event.path[1].classList.remove('done');
	}

	var element = event.target.localName
	if (element === 'button'){
		event.path[2].innerHTML=""	
	}
	console.log(event);
}
	
	

button.addEventListener('click', addByClick)
input.addEventListener('keypress', addbyEnter)
table.addEventListener('click', clickInline)
