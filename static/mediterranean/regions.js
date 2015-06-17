;var regions = function() {
	var region = "rgba(0, 0, 255, 1)";

	// regions
	var macedonia = { name: "Macedonia", x: 13, y: 40, width: 20, height: 7, type: region },
		getae = { name: "Getae", x: 63 , y: 14, width: 10, height: 5, type: region },
		thrace = { name: "Thrace", x: 60 , y: 39, width: 10, height: 5, type: region },
		mysia = { name: "Mysia", x: 64 , y: 53, width: 10, height: 3, type: region },
		lydia = { name: "Lydia", x: 66 , y: 61, width: 10, height: 3, type: region },
		caria = { name: "Caria", x: 75 , y: 72, width: 10, height: 3, type: region },
		phrygia = { name: "Phrygia", x: 82 , y: 58, width: 10, height: 5, type: region },
		bithynia = { name: "Bithynia", x: 89 , y: 48, width: 10, height: 5, type: region },
		galatia = { name: "Galatia", x: 102 , y: 54, width: 10, height: 5, type: region },
		paphlagonia = { name: "Paphlagonia", x: 111 , y: 44, width: 10, height: 5, type: region },
		cappadocia = { name: "Cappadocia", x: 126 , y: 55, width: 10, height: 5, type: region },
		pisidia = { name: "Pisidia", x: 92 , y: 72, width: 10, height: 5, type: region },
		lycaonia = { name: "Lycaonia", x: 100 , y: 67, width: 10, height: 5, type: region },
		cilicia = { name: "Cilicia", x: 122 , y: 75, width: 10, height: 5, type: region },
		syria = { name: "Syria", x: 134 , y: 86, width: 10, height: 10, type: region },
		phoenicia = { name: "Phoenicia", x: 120 , y: 105, width: 10, height: 10, type: region },
		egypt = { name: "Egypt", x: 85 , y: 126, width: 10, height: 10, type: region },
		cyrenaica = { name: "Cyrenaica", x: 9 , y: 107, width: 10, height: 10, type: region },
		armenia = { name: "Armenia", x: 160 , y: 59, width: 10, height: 5, type: region },
		colchis = { name: "Colchis", x: 173 , y: 33, width: 10, height: 10, type: region },
		media = { name: "Media", x: 235 , y: 76, width: 10, height: 10, type: region },
		chorasmia = { name: "Chorasmia", x: 270 , y: 45, width: 20, height: 10, type: region },
		parthia = { name: "Parthia", x: 282 , y: 74, width: 10, height: 10, type: region },
		mesopotamia = { name: "Mesopotamia", x: 173 , y: 86, width: 20, height: 10, type: region },
		hyrcania = { name: "Hyrcania", x: 260 , y: 70, width: 20, height: 5, type: region };


	return shuffle([macedonia,getae,thrace,mysia,lydia,caria,phrygia,bithynia,galatia,paphlagonia,cappadocia,pisidia,lycaonia,cilicia,syria,phoenicia,egypt,cyrenaica,armenia,colchis,media,chorasmia,parthia,mesopotamia,hyrcania]);
}();
