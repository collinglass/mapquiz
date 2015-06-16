var canvas = document.getElementById('viewport'),
	context = canvas.getContext('2d');

// colors
var mountain = "rgba(255, 0, 0, 1)";
var city = "rgba(0, 255, 0, 1)";
var region = "rgba(0, 0, 255, 1)";

// regions
var macedonia = { name: "Macedonia", x: 55, y: 20, width: 25, height: 10, type: region },
	thrace = { name: "Thrace", x: 105, y: 7, width: 25, height: 10, type: region },
	chalcidice = { name: "Chalcidice", x: 85, y: 34, width: 12, height: 7, type: region },
	epirus = { name: "Epirus", x: 32, y: 55, width: 12, height: 7, type: region },
	thessaly = { name: "Thessaly", x: 65, y: 55, width: 12, height: 7, type: region },
	arcanania = { name: "Arcanania", x: 47, y: 71, width: 12, height: 3, type: region },
	aetolia = { name: "Aetolia", x: 59, y: 75, width: 12, height: 3, type: region },
	phocis = { name: "Phocis", x: 78, y: 73, width: 12, height: 3, type: region },
	boeotia = { name: "Boeotia", x: 92, y: 77, width: 12, height: 3, type: region },
	achaea = { name: "Achaea", x: 62, y: 84, width: 12, height: 3, type: region },
	elis = { name: "Elis", x: 57, y: 88, width: 3, height: 4, type: region },
	argolis = { name: "Argolis", x: 77, y: 88, width: 12, height: 3, type: region },
	messenia = { name: "Messenia", x: 65, y: 100, width: 12, height: 3, type: region },
	laconia = { name: "Laconia", x: 82, y: 102, width: 12, height: 3, type: region },
	crete = { name: "Crete", x: 140, y: 130, width: 12, height: 3, type: region },
	chersonese = { name: "Chersonese", x: 152, y: 35, width: 2, height: 4, type: region },
	mysia = { name: "Mysia", x: 160, y: 38, width: 20, height: 5, type: region },
	anatolia = { name: "Anatolia", x: 185, y: 45, width: 40, height: 10, type: region },
	lydia = { name: "Lydia", x: 185, y: 57, width: 20, height: 5, type: region },
	phrygia = { name: "Phrygia", x: 230, y: 50, width: 4, height: 10, type: region },
	caria = { name: "Caria", x: 195, y: 83, width: 20, height: 5, type: region },
	lycia = { name: "Lycia", x: 235, y: 90, width: 20, height: 5, type: region };

var regions = [macedonia, thrace, chalcidice, epirus, thessaly, arcanania, aetolia, phocis, boeotia, achaea, elis, argolis, messenia, laconia, crete, chersonese, mysia, anatolia, lydia, phrygia, caria, lycia];

// cities
var amphipolis = { name: "Amphipolis", x: 101, y: 30, width: 1, height: 1, type: city }

// mountains
var mount_pangaeus = { name: "Mt. Pangaeus", x: 105, y: 29, width: 1, height: 1, type: mountain }



//
//
//
// GAME CODE
//
//
//
var answerInput = document.getElementById('answer');
var submitButton = document.getElementById('submit');
var messageElem = document.getElementById('message');
var current;

function submitFunc(items, submit) {
	if (current.name.toLowerCase() === answerInput.value.toLowerCase()) {
		alert("Correct!");

		var elClone = submit.cloneNode(true);
		submit.parentNode.replaceChild(elClone, submit);

		game(items, elClone);
	} else {
		alert("Wrong!");
	}
}

function game(items, submit) {
	answerInput.value = "";
	clear();

	if (items.length == 0) {
		messageElem.innerHTML = "Game complete!";
		return true;
	}
	var done = false;
	current = items.pop();
	make_base(current);
	submit.addEventListener("click", function(e) {
		submitFunc(items, submit);
	}, false);
}

game(regions, submitButton);
// var i = 0;
// setInterval(function(){
// 	make_base(regions[i]);
// 	i++;
// }, 1000);

function clear() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}


function make_base(point)
{
	context.fillStyle = point.type;
	context.fillRect(point.x,point.y,point.width,point.height);
}

