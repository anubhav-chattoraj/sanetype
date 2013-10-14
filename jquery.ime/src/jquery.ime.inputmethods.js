( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		'hi-sanetype': {
			name: 'सेनटाइप',
			source: 'rules/hi/hi-sanetype.js'
		},
		'bn-sanetype': {
			name: 'সেনটাইপ',
			source: 'rules/bn/bn-sanetype.js'
		},
	} );

	$.extend( $.ime.languages, {
		'hi': {
			autonym: 'हिन्दी',
			inputmethods: [ 'hi-sanetype' ]
		},
		'bn': {
			autonym: 'বাংলা',
			inputmethods: [ 'bn-sanetype' ]
		},
	} );

}( jQuery ) );
