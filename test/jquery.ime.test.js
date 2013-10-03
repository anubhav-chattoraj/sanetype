( function ( $ ) {
	'use strict';

	var $textarea, textareaIME, imeTest, typeChars,
		caretTests, clusterCaretTests;

	QUnit.module( 'jquery.ime - $.fn.ime tests', {
		setup: function () {
			$textarea = $( '<textarea>' );
			$textarea.ime();
			textareaIME = $textarea.data( 'ime' );
		},
		teardown: function () {
		}
	} );

	QUnit.test( 'Initialization tests', 11, function ( assert ) {
		var inputIME,
			$readonlyTextarea = $( '<textarea readonly>' ),
			$disabledTextarea = $( '<textarea disabled>' ),
			$noimeTextarea = $( '<textarea class="noime">' ),
			$input = $( '<input>' ),
			$specialPath = $( '<textarea>' ),
			specialPath = '../test';

		assert.strictEqual( typeof $input.ime, 'function', 'ime function exists' );
		assert.strictEqual( typeof $input.data( 'ime' ), 'undefined', 'ime not initialized before calling ime()' );

		$input.ime();
		inputIME = $input.data( 'ime' );
		assert.strictEqual( typeof inputIME, 'object', 'ime is defined for a regular <input>' );
		assert.strictEqual( inputIME.isActive(), false, 'ime is initially inactive' );
		assert.strictEqual( inputIME.context, '', 'context is initially empty' );
		assert.strictEqual( inputIME.getIM(), null, 'inputmethod is initially null' );
		assert.strictEqual( inputIME.options.imePath, '../', 'imePath is "../" by default' );

		$specialPath.ime( { imePath: specialPath } );
		assert.strictEqual( $specialPath.data( 'ime' ).options.imePath, specialPath,
							'imePath is defined correctly using options in the constructor' );

		$readonlyTextarea.ime();
		$disabledTextarea.ime();
		$noimeTextarea.ime();

		assert.strictEqual( $readonlyTextarea.data( 'ime' ), undefined, 'ime is not defined for a readonly <textarea>' );
		assert.strictEqual( $disabledTextarea.data( 'ime' ), undefined, 'ime is not defined for a disabled <textarea>' );
		assert.strictEqual( $noimeTextarea.data( 'ime' ), undefined, 'ime is not defined for a <textarea> with class "noime"' );
	} );

	QUnit.test( 'Utility functions tests', 12, function ( assert ) {
		var setLanguageResult;

		assert.strictEqual( textareaIME.lastNChars( 'foobarbaz', 5, 2 ), 'ba', 'lastNChars works with short buffer.' );
		assert.strictEqual( textareaIME.lastNChars( 'foobarbaz', 2, 5 ), 'fo', 'lastNChars works with long buffer.' );

		assert.strictEqual( textareaIME.firstDivergence( 'abc', 'abc' ), -1, 'firstDivergence - equal strings' );
		assert.strictEqual( textareaIME.firstDivergence( 'a', 'b' ), 0, 'firstDivergence - different one-letter strings' );
		assert.strictEqual( textareaIME.firstDivergence( 'a', 'bb' ), 0, 'firstDivergence - different strings, different lengths' );
		assert.strictEqual( textareaIME.firstDivergence( 'abc', 'abd' ), 2, 'firstDivergence - different strings with equal beginnings' );
		assert.strictEqual( textareaIME.firstDivergence( 'abcd', 'abd' ), 2, 'firstDivergence - different strings, equal beginnings, different lengths' );

		assert.strictEqual( textareaIME.getLanguage(), null, 'ime language is initially null' );
		setLanguageResult = textareaIME.setLanguage( 'noSuchLanguage' );
		assert.strictEqual( setLanguageResult, false, 'Setting an invalid language returns false' );
		assert.strictEqual( textareaIME.getLanguage(), null, 'Language does not change after an invalid setting' );
		setLanguageResult = textareaIME.setLanguage( 'hi' );
		assert.strictEqual( setLanguageResult, true, 'Setting a valid language returns true' );
		assert.strictEqual( textareaIME.getLanguage(), 'hi', 'Language changed after setting a valid value' );
	} );

	function caretTest( text, start, end ) {
		QUnit.test( 'Cursor positioning tests -' + text + '(' + start + ',' + end + ')' , 1, function ( assert ) {
			var $ced = $( '<div contenteditable="true">' ),
				correction,
				position,
				ime;

			$( '#qunit-fixture' ).append( $ced );
			$ced.ime();
			ime = $ced.data( 'ime' );

			$ced.html( text );
			correction = ime.setCaretPosition( $ced, { start: start, end: end } );
			position = ime.getCaretPosition( $ced );
			assert.deepEqual( position, [start - correction[0], end + correction[1] ], 'Caret is at ' + ( start - correction[0] ) + ', ' + ( end + correction[1] ) );
		} );
	}

	caretTests = [
		['ക്', 0, 0],
		['ക്', 1, 1],
		['ന്ത്', 1, 3],
		['ന്ത്', 1, 4],
		['ക്ത്ര', 1, 4]
	];

	$.each( caretTests, function( i, test ) {
		caretTest( test[0], test[1], test[2] );
	} );

	QUnit.module( 'jquery.ime - input method rule files test', {
		setup: function () {
		},

		teardown: function () {
		}
	} );

	$.each( $.ime.sources, function( inputmethodId ) {
		var testDescription;

		// The internal input method name helps find it in the source,
		// and since it's always in Latin, it helps isolate RTL names
		// from the subsequent numbers
		testDescription = 'Input method rules file test for input method ' +
			$.ime.sources[inputmethodId].name + ' - ' + inputmethodId;

		QUnit.test( testDescription, function () {
			var ime,
				$input = $( '<input>' );

			$input.attr( { id: inputmethodId, type: 'text' } );
			$input.appendTo( '#qunit-fixture' );
			$input.ime();
			$input.focus();
			ime = $input.data( 'ime' );
			QUnit.expect( 1 );
			QUnit.stop();
			ime.load( inputmethodId ).done( function () {
				QUnit.ok( true, !!$.ime.inputmethods[inputmethodId], 'Rules file for ' + inputmethodId + ' exist and loaded correctly.' );
				QUnit.start();
			} );
		} );
	} );

	$.each( $.ime.languages, function ( languageCode ) {
		var language = $.ime.languages[languageCode];

		QUnit.test( 'Input method rules test for language ' + language.autonym, function () {
			var i, inputmethod,
				inputmethods = language.inputmethods;

			QUnit.expect( inputmethods.length );

			for ( i = 0; i < inputmethods.length; i++ ) {
				inputmethod = $.ime.sources[inputmethods[i]];
				QUnit.ok( true, !!inputmethod, 'Definition for ' + inputmethods[i] + ' exist.' );
			}
		} );
	} );

	function clusterCaretTest( text, start, end ) {
		QUnit.test( 'Cursor positioning tests -' + text + '(' + start + ',' + end + ')' , 1, function ( assert ) {
			var $ced = $( '<div contenteditable="true">' ),
				correction,
				position,
				ime;

			$( '#qunit-fixture' ).append( $ced );
			$ced.ime();
			ime = $ced.data( 'ime' );

			$ced.html( text );
			correction = ime.setCaretPosition( $ced, { start: start, end: end } );
			position = ime.getCaretPosition( $ced );
			assert.deepEqual( position, [start - correction[0], end + correction[1] ], 'Caret is at ' + ( start - correction[0] ) + ', ' + ( end + correction[1] ) );
		} );
	}

	clusterCaretTests = [
		['ക്', 0, 0],
		['ക്', 1, 1],
		['ന്ത്', 1, 3],
		['ന്ത്', 1, 4],
		['ക്ത്ര', 1, 4]
	];

	$.each( caretTests, function( i, test ) {
		clusterCaretTest( test[0], test[1], test[2] );
	} );

	QUnit.module( 'jquery.ime - input method rules tests', {
		setup: function () {
		},

		teardown: function () {
		}
	} );

	/**
	 * A general framework for testing a keyboard layout.
	 */
	imeTest = function ( options ) {
		var opt = $.extend( {
			description: '', // Test description
			inputType: 'input', // input, textarea, or contenteditable
			tests: [],
			inputmethod: '' // The input method name.
		}, options );

		QUnit.test( opt.description, function () {
			var ime, $input;

			QUnit.expect( opt.tests.length + 1 );
			if ( opt.inputType === 'textarea' ) {
				$input = $( '<textarea>' );
				opt.inputType = 'textarea';
			} else if ( opt.inputType === 'contenteditable' ) {
				$input = $( '<div contenteditable="true">' );
			} else {
				$input = $( '<input>' );
			}

			$input.attr( { id: opt.inputmethod, type: 'text' } );
			QUnit.stop();

			$input.appendTo( '#qunit-fixture' );
			$input.ime();
			$input.focus();

			ime = $input.data( 'ime' );

			ime.load( opt.inputmethod ).done( function () {
				var i, imeSelector, imesettingLabel;

				imeSelector = $input.data( 'imeselector' );
				imeSelector.selectIM( opt.inputmethod );
				ime.enable();

				imesettingLabel = imeSelector.$imeSetting.find( 'a.ime-name' ).text();
				QUnit.strictEqual( imesettingLabel, $.ime.sources[opt.inputmethod].name,
					'IME selector shows ' + $.ime.sources[opt.inputmethod].name );
				for ( i = 0; i < opt.tests.length; i++ ) {
					// Simulate pressing keys for each of the sample characters
					typeChars( $input, opt.tests[i].input );

					// The actual check
					QUnit.strictEqual(
						$input.val() || $input.text(),
						opt.tests[i].output,
						opt.tests[i].description + ' - ' + opt.inputType
					);

					$input.val( '' );
					$input.text( '' );
					$input.html( '' );
				}

				QUnit.start();
			} );
		} );
	};

	/*global testFixtures */
	// testFixtures is defined in jquery.ime.test.fixtures.js
	$.each( testFixtures, function ( i, fixture ) {
		imeTest( fixture );
		if ( fixture.inputType === undefined ) {
			// Run tests for content editable divs too
			fixture.inputType = 'contenteditable';
			imeTest( fixture );
		}
	} );

	/**
	 * Basic sendkey-implementation. Type some characters into an input.
	 *
	 * @param $input jQuery input element.
	 * @param characters Either a string or an array of pairs of character
	 * and boolean altKey value
	 */
	typeChars = function ( $input, characters ) {
		var i, character, altKeyValue, code, event, replacementSkipped, textEnd,
			ime = $input.data( 'ime' ),
			contentEditable = $input.is( '[contenteditable]' ),
			len = characters.length;

		for ( i = 0; i < len; i++ ) {
			// For tests of non-extended keypresses, this is just a string.
			// for tests of extended keypresses, this is an array of arrays,
			// where each member is a pair consisting of a character to type
			// and the boolean value for altKey, saying whether Alt was
			// depressed or not.
			if ( typeof( characters ) === 'string' ) {
				character = characters[i];
				altKeyValue = false;
			} else {
				character = characters[i][0];
				altKeyValue = characters[i][1];
			}

			// Get the key code. Events use codes and not chars.
			code = character.charCodeAt(0);

			// Trigger event and undo if prevented
			event = new jQuery.Event( 'keypress', {
				keyCode: code,
				which: code,
				charCode: code,
				altKey: altKeyValue
			} );

			replacementSkipped = $input.triggerHandler( event );

			if ( replacementSkipped ) {
				if ( contentEditable ) {
					$input.text( $input.text() + character );
					textEnd = $input.text().length;
					ime.setCaretPosition( $input, {
						start: textEnd,
						end: textEnd
					} );
				} else {
					$input.val( $input.val() + character );
				}
			}
		}
	};
}( jQuery ) );
