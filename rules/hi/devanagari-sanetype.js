( function ( $ ) {
	"use strict";
	
	var devanagariSanetype = {
		id: 'devanagari-sanetype',
		name: 'सेनटाइप',
		author: 'Anubhav Chattoraj',
		URL: 'https://github.com/anubhav-chattoraj/sanetype',
		license: 'Apache 2.0',
		maxKeyLength: 3, 
		contextLength: 1,
		patterns: [
			["\\\\\\\\", "\\\\", "", "\\"], // two backslashes in a row should clear the context
			["\\\\([\\u0021-\\u007E])", "\\\\", "$1"], // escape ASCII characters
			[",M", "ॐ"], 
			[",,", "॰"],
			[",A", "ऄ"], [",a", "ॆ"],
			[",E", "ऎ"], [",e", "ॆ"],
			[",O", "ऒ"], [",o", "ॊ"],
			["उe", "ॶ"], ["ुe", "ॖ"],
			["ऊe", "ॷ"], ["ूe", "ॗ"],
			["अw", "ॵ"], ["ाw", "ॏ"],
			["ओोe", "ॴ"], ["ोोe", "ऻ"],
			["ओe", "ॳ"], ["ोe", "ऺ"],
			["अa", "आ"], ["ाa", "ा"],
			["अi", "ऐ"], ["ाi", "ै"],
			["अu", "औ"], ["ाu", "ौ"],
			["अe", "ॲ"], ["ाe", "ॅ"],
			["एe", "ऍ"], ["ेe", "ॅ"],
			["अo", "ऑ"], ["ाo", "ॉ"],
			["A", "अ"], ["a", "ा"],
			["इi", "ई"], ["िi", "ी"],
			["I", "इ"], ["i", "ि"],
			["उu", "ऊ"], ["ुu", "ू"],
			["U", "उ"], ["u", "ु"],
			[",R", "ऋ"], [",r", "ृ"],
			["ऋr", "ॠ"], ["ृr", "ॄ"],
			[",L", "ऌ"], [",l", "ॢ"],
			["ऌl", "ॡ"], ["ॢl", "ॣ"],
			["E", "ए"], ["e", "े"],
			["O", "ओ"], ["o", "ो"],
			["k", "क"], 
			["कh", "ख"], ["x", "ख़"],
			[",g", "ॻ"], ["g", "ग"], 
			["गh", "घ"], 
			["G", "ङ"], 
			["c", "च"], 
			["चh", "छ"], 
			[",j", "ॼ"], ["j", "ज"], ["z", "ज़"], 
			["जh", "झ"], 
			["Y", "ञ"], 
			["T", "ट"], 
			["टh", "ठ"], 
			[",D", "ॾ"], ["D", "ड"], ["R", "ड़"], 
			["डh", "ढ"], ["ड़h", "ढ़"],
			["N", "ण"], 
			["t", "त"], 
			["तh", "थ"], 
			["d", "द"], 
			["दh", "ध"], 
			["n", "न"],
			["p", "प"], 
			["पh", "फ"], ["f", "फ़"], 
			[",b", "ॿ"],["b", "ब"], 
			["बh", "भ"], 
			["m", "म"], 
			["y", "य"], 
			["r", "र"], 
			["l", "ल"],
			["L", "ळ"],
			["v", "व"],
			["सh", "श"],
			["S", "ष"], ["षh", "ष"],
			["s", "स"],
			[",h", "ॽ"], ["H", "ह"],
			["K", "क्ष"],
			["J", "ज्ञ"],
			["w", "्र"],
			["W", "र्"], 
			["<", "ऱ्"],
			["h", "्ह"],
			[">", "।"],
			["।>", "॥"],
			[";", "्"],
			[":", "ः"],
			["q", "़"],
			["M", "ं"],
			["C", "ँ"],
			["'", "ʼ"],
			["\\*", "ॱ"],
			["\\$", "₹"], 
			["@", "ऽ"], 
		]
	};
	
	$.ime.register( devanagariSanetype );
}) (jQuery); 