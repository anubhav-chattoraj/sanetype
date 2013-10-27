( function ( $ ) {
	'use strict';
	var dontIgnore, devanagariSanetype;
	
	dontIgnore = '[^Q]|^$'; // if last character was Q, surrounding text is ignored
	devanagariSanetype = {
		id: 'hi-sanetype',
		name: 'सेनटाइप',
		author: 'Anubhav Chattoraj',
		URL: 'http://anubhav-chattoraj.github.io/sanetype/devanagari/',
		license: 'Apache 2.0',
		maxKeyLength: 3,
		contextLength: 1,
		patterns: [
			['\\\\([\\u0021-\\u007E])', '\\\\', true, '$1'], // escape ASCII characters and clear context
			['Q', ''], // used to ignore surrounding letters & context
			['`', '\u200D'], // ZWJ
			['~', '\u200C'], // zWNJ
			[',M', dontIgnore, 'ॐ'],
			[',,', dontIgnore, '॰'],
			['ऄu', 'A', 'ॵ'], ['ॆu', 'a', 'ॏ'],
			[',A', dontIgnore, 'ऄ'], [',a', dontIgnore, 'ॆ'],
			[',E', dontIgnore, 'ऎ'], [',e', dontIgnore, 'ॆ'],
			[',O', dontIgnore, 'ऒ'], [',o', dontIgnore, 'ॊ'],
			['उe', dontIgnore, 'ॶ'], ['ुe', dontIgnore, 'ॖ'],
			['ऊe', dontIgnore, 'ॷ'], ['ूe', dontIgnore, 'ॗ'],
			['ओोe', dontIgnore, 'ॴ'], ['ोोe', dontIgnore, 'ऻ'],
			['ओe', dontIgnore, 'ॳ'], ['ोe', dontIgnore, 'ऺ'],
			['अa', dontIgnore, 'आ'], ['ाa', dontIgnore, 'ा'],
			['अi', dontIgnore, 'ऐ'], ['ाi', dontIgnore, 'ै'],
			['अu', dontIgnore, 'औ'], ['ाu', dontIgnore, 'ौ'],
			['अe', dontIgnore, 'ॲ'], ['ाe', dontIgnore, 'ॅ'],
			['एe', dontIgnore, 'ऍ'], ['ेe', dontIgnore, 'ॅ'],
			['अo', dontIgnore, 'ऑ'], ['ाo', dontIgnore, 'ॉ'],
			['A', 'अ'], ['a', 'ा'],
			['इi', dontIgnore, 'ई'], ['िi', dontIgnore, 'ी'],
			['I', 'इ'], ['i', 'ि'],
			['उu', dontIgnore, 'ऊ'], ['ुu', dontIgnore, 'ू'],
			['U', 'उ'], ['u', 'ु'],
			[',R', dontIgnore, 'ऋ'], [',r', dontIgnore, 'ृ'],
			['ऋr', dontIgnore, 'ॠ'], ['ृr', dontIgnore, 'ॄ'],
			[',L', dontIgnore, 'ऌ'], [',l', dontIgnore, 'ॢ'],
			['ऌl', dontIgnore, 'ॡ'], ['ॢl', dontIgnore, 'ॣ'],
			['E', 'ए'], ['e', 'े'],
			['O', 'ओ'], ['o', 'ो'],
			['k', 'क'],
			['कh', dontIgnore, 'ख'], ['x', 'ख़'],
			[',g', dontIgnore, 'ॻ'], ['g', 'ग'],
			['गh', dontIgnore, 'घ'],
			['G', 'ङ'],
			['c', 'च'],
			['चh', dontIgnore, 'छ'],
			[',j', dontIgnore, 'ॼ'], ['j', 'ज'], ['z', 'ज़'],
			['जh', dontIgnore, 'झ'],
			['Y', 'ञ'],
			['T', 'ट'],
			['टh', dontIgnore, 'ठ'],
			[',D', dontIgnore, 'ॾ'], ['D', 'ड'], ['R', 'ड़'],
			['डh', dontIgnore, 'ढ'], ['ड़h', dontIgnore, 'ढ़'],
			['N', 'ण'],
			['t', 'त'],
			['तh', dontIgnore, 'थ'],
			['d', 'द'],
			['दh', dontIgnore, 'ध'],
			['n', 'न'],
			['p', 'प'],
			['पh', dontIgnore, 'फ'], ['f', 'फ़'],
			[',b', dontIgnore, 'ॿ'],['b', 'ब'],
			['बh', dontIgnore, 'भ'],
			['m', 'म'],
			['y', 'य'],
			['r', 'र'],
			['l', 'ल'],
			['L', 'ळ'],
			['v', 'व'],
			['सh', dontIgnore, 'श'],
			['S', 'ष'], ['षh', dontIgnore, 'ष'],
			['s', 'स'],
			[',h', dontIgnore, 'ॽ'], ['H', 'ह'],
			['K', 'क्ष'],
			['J', 'ज्ञ'],
			['w', '्र'],
			['W', 'र्'],
			['<', 'ऱ्'],
			['h', '्ह'],
			['।>', dontIgnore, '॥'],
			['>', '।'],
			[';', '्'],
			[':', 'ः'],
			['नq', 'ऩ'], ['रq', 'ऱ'], ['ळq', 'ऴ'], // precomposed characters -- for NFC compliance
			['q', '़'],
			['M', 'ं'],
			['C', 'ँ'],
			['\'', 'ʼ'],
			['\\*', 'ॱ'],
			['\\$', '₹'],
			['@', 'ऽ'],
			['1', '१'],
			['2', '२'],
			['3', '३'],
			['4', '४'],
			['5', '५'],
			['6', '६'],
			['7', '७'],
			['8', '८'],
			['9', '९'],
			['0', '०'],
		]
	};

	$.ime.register( devanagariSanetype );
}) (jQuery);
