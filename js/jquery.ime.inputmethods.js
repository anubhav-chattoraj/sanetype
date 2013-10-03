( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		'devanagari-sanetype': {
			name: "सेनटाइप",
			source: 'rules/devanagari-sanetype.js'
		},
	} );

	$.extend( $.ime.languages, {
		'hi': {
			autonym: 'हिन्दी',
			inputmethods: [ 'devanagari-sanetype' ]
		},
	} );

}( jQuery ) );
