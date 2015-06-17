var canvas = document.getElementById('viewport'),
	context = canvas.getContext('2d');

var rect = canvas.getBoundingClientRect();
canvas.addEventListener('click', function(e){
	var x = Math.round((e.clientX-rect.left)/(rect.right-rect.left)*canvas.width);
	var y = Math.round((e.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height);
	var region = prompt("Please enter the region name");
	console.log(region, ':', x, ',', y);
});

// colors
var mountain = "rgba(0, 255, 0, 1)";

// mountains
var mount_pangaeus = { name: "Mt. Pangaeus", x: 105, y: 29, width: 1, height: 1, type: mountain }

// make_base(isthmus);


//
//
//
// GAME CODE
//
//
//
var current;

function submitFunc(items, inputElem, submitButton) {
	if (current.name.toLowerCase() === inputElem.value.toLowerCase()) {
		alert("Correct!");

		var elClone = submitButton.cloneNode(true);
		submitButton.parentNode.replaceChild(elClone, submitButton);

		game(items, inputElem, elClone, messageElem);
	} else {
		alert("Wrong!");
	}
}

function game(items, inputElem, submitButton, messageElem) {
	inputElem.value = "";
	clear();

	if (items.length == 0) {
		messageElem.innerHTML = "Game complete!";
		return true;
	}
	var done = false;
	current = items.pop();
	make_base(current);
	submitButton.addEventListener("click", function(e) {
		submitFunc(items, inputElem, submitButton);
	}, false);
}

// game(cities, submitButton);

function clear() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}


function make_base(point)
{
	context.fillStyle = point.type;
	context.fillRect(point.x,point.y,point.width,point.height);
}

