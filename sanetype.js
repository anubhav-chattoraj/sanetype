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

var dev = {
    follow: [',', 'A', 'I', 'U', ',R', ',L', 'E', 'O', 'Oo', 'Uu', 
        'a', 'i', 'u',  ',r', ',l', 'e', 'o', 'oo', 'uu',
        'k', 'g', 'c', 'j', 'z', 'T', 'D', 'R', 't', 'd', 'p', 'b', 'S', 's', 'h', '>',
        'q', 'qk', 'qg', 'qc', 'qj', 'qT', 'qD', 'qR', 'qt', 'qd', 'qp', 'qb', 'qS', 'qs', 'qz', 'qh', 'q,'],
    init: function(add) {
        var a = add; 
        // vowels
        a('A', 'अ'); a('a', 'ा'); a('Aa', 'आ'); a('aa', 'ा');
        a('I', 'इ'); a('i', 'ि'); a('Ii', 'ई'); a('ii', 'ी');
        a('U', 'उ'); a('u', 'ु'); a('Uu', 'ऊ'); a('uu', 'ू');
        a(',R', 'ऋ'); a(',r', 'ृ'); a(',Rr', 'ॠ'); a(',rr', 'ॄ');
        a(',L', 'ऌ'); a(',l', 'ॢ'); a(',Ll', 'ॡ'); a(',ll', 'ॣ');
        a('E', 'ए'); a('e', 'े'); a('Ai', 'ऐ'); a('ai', 'ै'); a('Ae', 'ॲ'); a('ae', 'ॅ');
        a('O', 'ओ'); a('o', 'ो'); a('Au', 'औ'); a('au', 'ौ'); a('Ao', 'ऑ'); a('ao', 'ॉ');
        a('Ue', 'ॶ'); a('ue', 'ॖ'); a('Uue', 'ॷ'); a('uue', 'ॗ');
        a('Oe', 'ॳ'); a('oe', 'ऺ'); a('Ooe', 'ॴ'); a('ooe', 'ऻ');
        a('Aw', 'ॵ'); a('aw', 'ॏ'); a('Ee', 'ऍ'); a('ee', 'ॅ');
        a(',A', 'ऄ'); a(',a', 'ॆ'); a(',E', 'ऎ'); a(',e', 'ॆ'); a(',O', 'ऒ'); a(',o', 'ॊ');
        a('Ee', 'ऍ'); a('ee', 'ॅ');
        // consonants
        a('k', 'क'); a('kh', 'ख'); a('g', 'ग'); a('gh', 'घ'); a('G', 'ङ'); a('x', 'ख़');
        a('c', 'च'); a('ch', 'छ'); a('j', 'ज'); a('jh', 'झ'); a(',n', 'ञ'); a('z', 'ज़'); a('zh', 'झ़');
        a('T', 'ट'); a('Th', 'ठ'); a('D', 'ड'); a('Dh', 'ढ'); a('N', 'ण'); a('R', 'ड़'); a('Rh', 'ढ़');
        a('t', 'त'); a('th', 'थ'); a('d', 'द'); a('dh', 'ध'); a('n', 'न');
        a('p', 'प'); a('ph', 'फ'); a('b', 'ब'); a('bh', 'भ'); a('m', 'म'); a('f', 'फ़');
        a('y', 'य'); a('r', 'र'); a('l', 'ल'); a('v', 'व'); a('<', 'ऱ्'); a('L', 'ळ');
        a('sh', 'श'); a('S', 'ष'); a('Sh', 'ष'); a('s', 'स'); a('H', 'ह');
        a('K', 'क्ष'); a('J', 'ज्ञ');
        a('w', '्र'); a('W', 'र्'); ; a('Y', '्य'); a('V', '्व'); a('h', '्ह');
        a(',g', 'ॻ'); a(',j', 'ॼ'); a(',D', 'ॾ'); a(',b', 'ॿ'); a('hh', 'ॽ');
        // diacritics
        a('C', 'ँ'); a('M', 'ं'); a(':', 'ः'); a('Q', '़'); a(';', '्'); a('\'', 'ʼ');
        // digits
        a('1', '१'); a('2', '२'); a('3', '३'); a('4', '४'); a('5', '५'); 
        a('6', '६'); a('7', '७'); a('8', '८'); a('9', '९'); a('0', '०');
        // other symbols
        a('>', '।'); a('>>', '॥'); a('$', '₹'); a('*', 'ॱ'); a('@', 'ऽ'); a(',M', 'ॐ'); a(',,', '॰');
        // geminates
        a('qk', 'क्क'); a('qkh', 'क्ख'); a('qg', 'ग्ग'); a('qgh', 'ग्घ'); a('qG', 'ङ्ङ'); a('qx', 'ख़्ख़');
        a('qc', 'च्च'); a('qch', 'च्छ'); a('qj', 'ज्ज'); a('qjh', 'ज्झ'); a('q,n', 'ञ्ञ'); a('qz', 'ज़्ज़'); a('qzh', 'झ़्झ़');
        a('qT', 'ट्ट'); a('qTh', 'ट्ठ'); a('qD', 'ड्ड'); a('qDh', 'ड्ढ'); a('qN', 'ण्ण'); a('qR', 'ड़्ड़'); a('qRh', 'ड़्ढ़');
        a('qt', 'त्त'); a('qth', 'त्थ'); a('qd', 'द्द'); a('qdh', 'द्ध'); a('qn', 'न्न');
        a('qp', 'प्प'); a('qph', 'प्फ'); a('qb', 'ब्ब'); a('qbh', 'ब्भ'); a('qm', 'म्म'); a('qf', 'फ़्फ़');
        a('qy', 'य्य'); a('qr', 'र्र'); a('ql', 'ल्ल'); a('qv', 'व्व'); a('q<', 'ऱ्ऱ्'); a('qL', 'ळ्ळ');
        a('qsh', 'श्श'); a('qS', 'ष्ष'); a('qSh', 'ष्ष'); a('qs', 'स्स'); a('qH', 'ह्ह');
        a('q,g', 'ॻ्ॻ'); a('q,j', 'ॼ्ॼ'); a('q,D', 'ॾ्ॾ'); a('q,b', 'ॿ्ॿ'); a('qhh', 'ॽ्ॽ');
        a('`', '\u200D'); a('~', '\u200C') // ZWJ, ZWNJ
    }
}

var sanetype = {
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
    },
  
    init: function(e, script) {
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
            if ($(this).data("sanetype") === 'dev') {
                initScript(dev);
                $(this).on('keydown', sanetype.handleKeyDown);
                $(this).on('keypress', function(e) { sanetype.handleKeyPress(e, dev) });
            }
        })
        sanetype.altCodes.init();
    }       
}

$(document).ready(function() {
    sanetype.init();
});
