;var cities = function(){
	var city = "rgba(255, 0, 0, 1)";
	var island = "rgba(255, 0, 255, 1)";

	// cities
	var alexandria = { name: "alexandria", x: 80, y: 118, width: 1, height: 1, type: city },
		naucratis = { name: "naucratis", x: 85, y: 120, width: 1, height: 1, type: city },
		memphis = { name: "memphis", x: 88, y: 125, width: 1, height: 1, type: city },
		sparta = { name: "sparta", x: 27, y: 69, width: 1, height: 1, type: city },
		athens = { name: "athens", x: 38, y: 63, width: 1, height: 1, type: city },
		ephesus = { name: "ephesus", x: 65, y: 66, width: 1, height: 1, type: city },
		miletus = { name: "miletus", x: 65, y: 70, width: 1, height: 1, type: city },
	// 	sicily = { name: "sicily", x: 65, y: 70, width: 1, height: 1, type: island },
	// 	syracuse = { name: "syracuse", x: 65, y: 70, width: 1, height: 1, type: city },
		cyrene = { name: "cyrene", x: 15, y: 100, width: 1, height: 1, type: city },
		cyprus = { name: "cyprus", x: 105, y: 90, width: 4, height: 3, type: island },
		tyre = { name: "tyre", x: 127, y: 99, width: 1, height: 1, type: city },
		babylon = { name: "babylon", x: 199, y: 106, width: 1, height: 1, type: city },
		odessus = { name: "odessus", x: 75, y: 29, width: 1, height: 1, type: city },
		heraclea = { name: "heraclea", x: 99, y: 45, width: 1, height: 1, type: city };


	return shuffle([alexandria,naucratis,memphis,sparta,athens,ephesus,miletus,cyrene,cyprus,tyre,babylon,odessus,heraclea]);
}();