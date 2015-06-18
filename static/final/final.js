
//
// Final Exam layout
//
// I) Choose 8 x5 points = 40 points
//
// II) Essay: choose 4 x15 points = 60 points
//
//
// 60% after midterm
// 40% before midterm


//
//
//
// GAME CODE
//
//
//
var current;
var data = {
	title: "Greek Facts",
	facts: facts,
}

var source   = $("#list-template").html();
var template = Handlebars.compile(source);

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



function clear() {
	document.getElementById('question').innerHTML = "";
}


function make_base(data)
{
	var i = 0;
	document.getElementById('question').innerHTML = data.content[i];
}

Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>";
  for(var i=0; i<items.length; i++) {
    out = out + "<li><b>" + items[i].name + "</b></li>";
  }

  return out + "</ul>";
});

document.getElementById('content').innerHTML = template(data);

