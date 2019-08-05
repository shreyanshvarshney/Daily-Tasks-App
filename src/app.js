
var items=document.getElementsByClassName('collection-item');
const text_input=document.getElementsByClassName('input-field');
const collection=document.getElementsByClassName('collection')[0];
var submit=document.getElementById('btn');
var clear=document.getElementById('clr-btn');
clear.addEventListener("click",otherfun);
submit.addEventListener("click",myfun);
document.addEventListener('DOMContentLoaded',getalltaks);

function myfun(e) 
{
	const text_data=text_input[0].children[0].value;
	if(text_data!='')
	{
		text_input[0].children[0].value='';
		settols(text_data);
		var li=document.createElement('a');
		li.className='collection-item';
		li.appendChild(document.createTextNode(text_data));
		li.href="#!";
		collection.appendChild(li);
		e.preventDefault();
	}
	else
	{
		alert("FILL this bad boi");
		e.preventDefault();
	}
}
function otherfun(e)
{
	collection.innerHTML='';
	localStorage.removeItem('tasks');
	e.preventDefault();
}

function settols(text) {
	let tasks;
	console.log("All good here");
	if (localStorage.getItem('tasks')!=null)
	{
		tasks=JSON.parse(localStorage.getItem('tasks'));
	}
	else{
		tasks=[];
	}
	tasks.push(text);
	localStorage.setItem('tasks',JSON.stringify(tasks));
}

function getalltaks() {
	let tasks;
	if (localStorage.getItem('tasks')!=null)
	{
		tasks=JSON.parse(localStorage.getItem('tasks'));
	}
	else{
		tasks=[];
	}
	tasks.forEach(function(task) {
		var li=document.createElement('a');
		li.className='collection-item';
		li.appendChild(document.createTextNode(task));
		li.href="#!";
		collection.appendChild(li);
		})
}