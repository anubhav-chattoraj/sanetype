( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		'devanagari-sanetype': {
			name: 'सेनटाइप',
			source: 'rules/devanagari-sanetype.js'
		},
		'bengali-sanetype': {
			name: 'সেনটাইপ',
			source: 'rules/bengali-sanetype.js'
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
