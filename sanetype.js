/*
    Copyright 2013 Anubhav Chattoraj <anubhav.chattoraj@gmail.com>

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

function getInputSelection(el) {
    // from http://stackoverflow.com/a/4207763/1321855
    var start = 0, end = 0, normalizedValue, range,
        textInputRange, len, endRange;

    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
        start = el.selectionStart;
        end = el.selectionEnd;
    } else { // Internet Explorer
        el.focus();
        range = document.selection.createRange();

        if (range && range.parentElement() == el) {
            len = el.value.length;
            normalizedValue = el.value.replace(/\r\n/g, "\n");

            // Create a working TextRange that lives only in the input
            textInputRange = el.createTextRange();
            textInputRange.moveToBookmark(range.getBookmark());

            // Check if the start and end of the selection are at the very end
            // of the input, since moveStart/moveEnd doesn't return what we want
            // in those cases
            endRange = el.createTextRange();
            endRange.collapse(false);

            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                start = end = len;
            } else {
                start = -textInputRange.moveStart("character", -len);
                start += normalizedValue.slice(0, start).split("\n").length - 1;

                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
                    end = len;
                } else {
                    end = -textInputRange.moveEnd("character", -len);
                    end += normalizedValue.slice(0, end).split("\n").length - 1;
                }
            }
        }
    }

    return {
        start: start,
        end: end
    };
}

var sanetype = {
    scripts: {}, // should be populated by calling sanetype.registerScript()
    
    registerScript: function(scriptName, script) {
        sanetype.scripts[scriptName] = script;
    },
    
    init: function() {
        var initialized = [];

        var addToMap = function(map, key, value) {
            map.keys.push(key);
            map.values.push(value);
        }
        var getFromMap = function(map, key) {
            for(var i = 0; i < map.keys.length; i++) {
                if(map.keys[i] == key)  return map.values[i];
            }
            return null;
        }
        
        var initScript = function(script) {
            if (initialized.indexOf(script) === -1) {
                script.map = { keys: [], values: [] };
                script.get = function(key) { return getFromMap(script.map, key); };
                var a = function(key, value) { addToMap(script.map, key, value); };
                script.init(a); 
                // adds ASCII punctuation to the script's map
                // these will be overridden if script specifies alternate values for these keys
                a('!', '!'); a('@', '@'); a('#', '#'); a('$', '$'); a('%', '%'); a('^', '^'); a('&', '&'); 
                a('*', '*'); a('(', '('); a(')', ')'); a('-', '-'); a('_', '_'); a('=', '='); a('+', '+');
                a('[', '['); a(']', ']'); a('{', '{'); a('}', '}'); a('\\', '\\'); a('|', '|');
                a(';', ';'); a(':', ':'); a("'", "'"); a('"', '"'); 
                a(',', ','); a('.', '.'); a('<', '<'); a('>', '>'); a('/', '/'); a('?', '?');
                initialized.push(script);
            }
        }
        
        $("[data-sanetype]").each(function(index) {
            var scriptName = $(this).data("sanetype");
            var script = sanetype.scripts[scriptName];
            if (typeof script !== 'undefined') {
                initScript(script);
                $(this).on('keydown', sanetype.handleKeyDown);
                $(this).on('keypress', function(e) { sanetype.handleKeyPress(e, script) });
            }
        })
        sanetype.altCodes.init();
    },
    
    removeHere: function(target, numChars) { 
        var selection = getInputSelection(target);
        var start = selection.start;
        var end = selection.end;
        target.value = target.value.substring(0, start - numChars) + target.value.substring(end, target.value.length);
        target.selectionStart = start - numChars;
        target.selectionEnd = target.selectionStart;
    },
    
    insertHere: function(target, str) { 
        var selection = getInputSelection(target);
        var start = selection.start;
        var end = selection.end;
        target.value = target.value.substring(0, start) + str + target.value.substring(end, target.value.length);
        target.selectionStart = start + str.length;
        target.selectionEnd = target.selectionStart;
    },
  
    handleKeyPress: function(e, script) {
        if(e.altKey) return;    // already handled by handleKeyDown
        
        var t = e.target;
        var char = String.fromCharCode(e.charCode); 
        
        if(e.ctrlKey) {
            $(t).data('buffer', ''); $(t).data('prevMatch', '');
            return; 
        }
        
        if(typeof $(t).data('buffer') === 'undefined') $(t).data('buffer', '');
        if(typeof $(t).data('prevMatch') === 'undefined') $(t).data('prevMatch', '');
        if(typeof $(t).data('latin') === 'undefined') $(t).data('latin', 'false');
        
        if(char === 'q') {
            if($(t).data('buffer') === 'q') {
                e.preventDefault();
                $(t).data('buffer', '');
                if($(t).data('latin') === 'true') {
                    sanetype.removeHere(t, 1);
                    $(t).data('latin', 'false');
                } else {
                    $(t).data('latin', 'true');
                }
                return;
            } else if($(t).data('latin') === 'true') {
                $(t).data('buffer', 'q');
                return;
            }
        }
        if($(t).data('latin') === 'true') return;
        
        if(script.follow.indexOf($(t).data('buffer')) === -1) {
            $(t).data('buffer', '');
        }
        
        $(t).data('buffer', $(t).data('buffer')+char);
        var match = script.get($(t).data('buffer'));
        
        if(match === null && script.follow.indexOf($(t).data('buffer')) === -1) {
            // ignore the characters previously stored in the buffer
            $(t).data('prevMatch', ''); 
            $(t).data('buffer', char); match = script.get(char); 
        }
        var numCharsToDelete = $(t).data('prevMatch').length;
        
        if(match !== null || script.follow.indexOf($(t).data('buffer')) !== -1) {
            e.preventDefault();
            if(match !== null) {
                sanetype.removeHere(t, numCharsToDelete);
                sanetype.insertHere(t, match);
                if (script.follow.indexOf($(t).data('buffer')) === -1) {
                    $(t).data('buffer', '');
                    $(t).data('prevMatch', '');
                } else {
                    $(t).data('prevMatch', match);
                }
            }
        }
    },
  
    handleKeyDown: function(e) {
        // needed to handle alt; Chrome doesn't generate keypress for alt key
        if(e.altKey) {
            if(e.which == 8) {
                e.preventDefault();
                sanetype.removeHere(e.target, 1); // backspace
            } else {
                var char = sanetype.altCodes.get(e.keyCode, e.shiftKey);
                if(char !== null) { 
                    e.preventDefault(); 
                    sanetype.insertHere(e.target, char); 
                }
            }
        }
    },
  
    altCodes: {
        keyCodes: [], 
        unshifted: [],
        shifted: [],
        get: function(keyCode, shiftPressed) {
            var self = sanetype.altCodes;
            for(var i = 0; i < self.keyCodes.length; i++)
                if (self.keyCodes[i] == keyCode) {
                    if(shiftPressed) 
                        return self.shifted[i];
                    else 
                        return self.unshifted[i];
                }
            return null;
        },
        init: function() {
            var self = sanetype.altCodes;
            var a = function(k, u, s) {
                self.keyCodes.push(k);
                self.unshifted.push(u);
                self.shifted.push(s);
            }
            a(13,'\n','\n'); a(32,' ',' ');  a(48,'0',')'); a(49,'1','!'); a(50,'2','@'); a(51,'3','#'); 
            a(52,'4','$'); a(53,'5','%'); a(54,'6','^'); a(55,'7','&'); a(56,'8','*'); a(57,'9','('); 
            a(65,'a','A'); a(66,'b','B'); a(67,'c','C'); a(68,'d','D'); a(69,'e','E'); a(70,'f','F'); 
            a(71,'g','G'); a(72,'h','H'); a(73,'i','I'); a(74,'j','J'); a(75,'k','K'); a(76,'l','L'); 
            a(77,'m','M'); a(78,'n','N'); a(79,'o','O'); a(80,'p','P'); a(81,'q','Q'); a(82,'r','R'); 
            a(83,'s','S'); a(84,'t','T'); a(85,'u','U'); a(86,'v','V'); a(87,'w','W'); a(88,'x','X'); 
            a(89,'y','Y'); a(90,'z','Z'); 
            a(59, ';', ':'); a(61, '=', '+'); a(173, '-', '_'); 
            a(186,';',':'); a(187,'=','+'); a(188,',','<'); a(189,'-','_'); a(190,'.','>'); a(191,'/','?'); 
            a(192,'`','~'); a(219,'[','{'); a(220,'\\','|'); a(221,']','}'); a(222,'\'','"'); 
            a(96,'0','0'); a(97,'1','1'); a(98,'2','2'); a(99,'3','3'); a(100,'4','4'); 
            a(101,'5','5'); a(102,'6','6'); a(103,'7','7'); a(104,'8','8'); a(105,'9','9'); 
            a(106,'*','*'); a(107,'+','+'); a(109,'-','-'); a(110,'.','.'); a(111,'/','/'); 
        }
    }
}

$(document).ready(function() {
    sanetype.init();
});