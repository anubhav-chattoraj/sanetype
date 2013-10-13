( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		'devanagari-sanetype': {
			name: 'सेनटाइप',
			source: 'rules/hi/hi-sanetype.js'
		},
		'bengali-sanetype': {
			name: 'সেনটাইপ',
			source: 'rules/bn/bn-sanetype.js'
		},
	} );

	$.extend( $.ime.languages, {
		'hi': {
			autonym: 'हिन्दी',
			inputmethods: [ 'devanagari-sanetype' ]
		},
		'bn': {
			autonym: 'বাংলা',
			inputmethods: [ 'bengali-sanetype' ]
		},
	} );

}( jQuery ) );
