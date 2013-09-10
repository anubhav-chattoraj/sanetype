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

var sanetype = (function($) {
    function addToMap(map, key, value) {
        map.keys.push(key);
        map.values.push(value);
    }
    
    function getFromMap(map, key) {
        for(var i = 0; i < map.keys.length; i++) {
            if(map.keys[i] === key) { return map.values[i]; }
        }
        return null;
    }
    
    function getInputSelection(el) {
        // from http://stackoverflow.com/a/4207763/1321855
        var start = 0, end = 0, normalizedValue, range,
            textInputRange, len, endRange;

        if (typeof el.selectionStart === "number" && typeof el.selectionEnd === "number") {
            start = el.selectionStart;
            end = el.selectionEnd;
        } else { // Internet Explorer
            el.focus();
            range = document.selection.createRange();

            if (range && range.parentElement() === el) {
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
    
    function removeHere(target, numChars) { 
        var selection = getInputSelection(target);
        var start = selection.start;
        var end = selection.end;
        target.value = target.value.substring(0, start - numChars) + target.value.substring(end, target.value.length);
        target.selectionStart = start - numChars;
        target.selectionEnd = target.selectionStart;
    }
    
    function insertHere(target, str) { 
        var selection = getInputSelection(target);
        var start = selection.start;
        var end = selection.end;
        target.value = target.value.substring(0, start) + str + target.value.substring(end, target.value.length);
        target.selectionStart = start + str.length;
        target.selectionEnd = target.selectionStart;
    }

    function handleKeyPress(e, script) {        
        var t = e.target;
        var thisChar = String.fromCharCode(e.charCode); 
        
        if(e.ctrlKey) {
            $(t).data('buffer', ''); $(t).data('prevMatch', '');
            return; 
        }
        
        if(typeof $(t).data('buffer') === 'undefined') { $(t).data('buffer', ''); }
        if(typeof $(t).data('prevMatch') === 'undefined') { $(t).data('prevMatch', ''); }
        if(typeof $(t).data('latin') === 'undefined') { $(t).data('latin', 'false'); }
        
        if(thisChar === 'q') {
            if($(t).data('buffer') === 'q') {
                e.preventDefault();
                $(t).data('buffer', '');
                if($(t).data('latin') === 'true') {
                    removeHere(t, 1);
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
        if($(t).data('latin') === 'true') { return; }
        
        if(!($(t).data('buffer') in script.follow)) {
            $(t).data('buffer', '');
        }
        
        $(t).data('buffer', $(t).data('buffer')+thisChar);
        var match = script.get($(t).data('buffer'));
        
        if(match === null && !($(t).data('buffer') in script.follow)) {
            // ignore the characters previously stored in the buffer
            $(t).data('prevMatch', ''); 
            $(t).data('buffer', thisChar); match = script.get(thisChar); 
        }
        var numCharsToDelete = $(t).data('prevMatch').length;
        
        if(match !== null || $(t).data('buffer') in script.follow) {
            e.preventDefault();
            if(match !== null) {
                removeHere(t, numCharsToDelete);
                insertHere(t, match);
                if (!($(t).data('buffer') in script.follow)) {
                    $(t).data('buffer', '');
                    $(t).data('prevMatch', '');
                } else {
                    $(t).data('prevMatch', match);
                }
            }
        }
    }
    
    var initialized = {};
    $(document).ready( function() {
        function initScript(script) {
            script.follow = {};
            if (!(script in initialized)) {
                script.map = { keys: [], values: [] };
                script.get = function(key) { return getFromMap(script.map, key); };
                var a = function(key, value) { 
                    if(key.length > 1) {
                        script.follow[key.substring(0, key.length-1)] = true;
                    }
                    addToMap(script.map, key, value); 
                };
                script.init(a); 
                // adds ASCII punctuation to the script's map
                // these will be overridden if script specifies alternate values for these keys
                a('!', '!'); a('@', '@'); a('#', '#'); a('$', '$'); a('%', '%'); a('^', '^'); a('&', '&'); 
                a('*', '*'); a('(', '('); a(')', ')'); a('-', '-'); a('_', '_'); a('=', '='); a('+', '+');
                a('[', '['); a(']', ']'); a('{', '{'); a('}', '}'); a('\\', '\\'); a('|', '|');
                a(';', ';'); a(':', ':'); a("'", "'"); a('"', '"'); 
                a(',', ','); a('.', '.'); a('<', '<'); a('>', '>'); a('/', '/'); a('?', '?');
                // adds ASCII characters to backslash sequences
                a('\\a', 'a');  a('\\b', 'b');  a('\\c', 'c');  a('\\d', 'd');  
                a('\\e', 'e');  a('\\f', 'f');  a('\\g', 'g');  a('\\h', 'h');  
                a('\\i', 'i');  a('\\j', 'j');  a('\\k', 'k');  a('\\l', 'l');  
                a('\\m', 'm');  a('\\n', 'n');  a('\\o', 'o');  a('\\p', 'p');  
                a('\\q', 'q');  a('\\r', 'r');  a('\\s', 's');  a('\\t', 't');  
                a('\\u', 'u');  a('\\v', 'v');  a('\\w', 'w');  a('\\x', 'x');  
                a('\\y', 'y');  a('\\z', 'z');  
                a('\\A', 'A');  a('\\B', 'B');  a('\\C', 'C');  a('\\D', 'D');  
                a('\\E', 'E');  a('\\F', 'F');  a('\\G', 'G');  a('\\H', 'H');  
                a('\\I', 'I');  a('\\J', 'J');  a('\\K', 'K');  a('\\L', 'L');  
                a('\\M', 'M');  a('\\N', 'N');  a('\\O', 'O');  a('\\P', 'P');  
                a('\\Q', 'Q');  a('\\R', 'R');  a('\\S', 'S');  a('\\T', 'T');  
                a('\\U', 'U');  a('\\V', 'V');  a('\\W', 'W');  a('\\X', 'X');  
                a('\\Y', 'Y');  a('\\Z', 'Z'); 
                a('\\[', '['); a('\\]', ']'); a('\\{', '{'); a('\\}', '}'); a('\\\\', '\\'); a('\\|', '|');
                a('\\;', ';'); a('\\:', ':'); a("\\'", "'"); a('\\"', '"'); 
                a('\\,', ','); a('\\.', '.'); a('\\<', '<'); a('\\>', '>'); a('\\/', '/'); a('\\?', '?');
                a('\\0', '0');  a('\\1', '1');  a('\\2', '2');  a('\\3', '3');  a('\\4', '4');  
                a('\\5', '5');  a('\\6', '6');  a('\\7', '7');  a('\\8', '8');  a('\\9', '9');  
                a('\\!', '!');  a('\\@', '@');  a('\\#', '#');  a('\\$', '$');  a('\\%', '%');  
                a('\\^', '^');  a('\\&', '&');  a('\\*', '*');  a('\\(', '(');  a('\\)', ')'); 
                a('\\-', '-'); a('\\_', '_');  a('\\=', '='); a('\\+', '+'); 
                a('\\`', '`');  a('\\~', '~');
                initialized[script] = true;
            }
        }
        
        $("[data-sanetype]").each(function(index) {
            var scriptName = $(this).data("sanetype");
            var script = scripts[scriptName];
            if (typeof script !== 'undefined') {
                initScript(script);
                $(this).on('keypress', function(e) { handleKeyPress(e, script); });
            }
        });
    });
    
    var scripts = {};
    return {
        registerScript: function(scriptName, script) {
            scripts[scriptName] = script;
        }
    };
})(jQuery);