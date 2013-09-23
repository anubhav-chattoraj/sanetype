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

var devnagri = {
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
        a('k', 'क'); a('kh', 'ख'); a('g', 'ग'); a('gh', 'घ'); a('G', 'ङ'); a('x', 'ख़');
        a('c', 'च'); a('ch', 'छ'); a('j', 'ज'); a('jh', 'झ'); a('Y', 'ञ'); a('z', 'ज़');
        a('T', 'ट'); a('Th', 'ठ'); a('D', 'ड'); a('Dh', 'ढ'); a('N', 'ण'); a('R', 'ड़'); a('Rh', 'ढ़');
        a('t', 'त'); a('th', 'थ'); a('d', 'द'); a('dh', 'ध'); a('n', 'न');
        a('p', 'प'); a('ph', 'फ'); a('b', 'ब'); a('bh', 'भ'); a('m', 'म'); a('f', 'फ़');
        a('y', 'य'); a('r', 'र'); a('l', 'ल'); a('v', 'व'); a('<', 'ऱ्'); a('L', 'ळ');
        a('sh', 'श'); a('S', 'ष'); a('Sh', 'ष'); a('s', 'स'); a('H', 'ह');
        a('K', 'क्ष'); a('J', 'ज्ञ');
        a('w', '्र'); a('W', 'र्'); a('h', '्ह');
        a(',g', 'ॻ'); a(',j', 'ॼ'); a(',D', 'ॾ'); a(',b', 'ॿ'); a(',h', 'ॽ');
        // precomposed characters with nuqta (NFC forms)
        a('nq', 'ऩ'); a('rq', 'ऱ'); a('Lq', 'ऴ');
        // diacritics
        a('C', 'ँ'); a('M', 'ं'); a(':', 'ः'); a('q', '़'); a(';', '्'); a('\'', 'ʼ');
        // digits
        a('1', '१'); a('2', '२'); a('3', '३'); a('4', '४'); a('5', '५'); 
        a('6', '६'); a('7', '७'); a('8', '८'); a('9', '९'); a('0', '०');
        // other symbols
        a('>', '।'); a('>>', '॥'); a('$', '₹'); a('*', 'ॱ'); a('@', 'ऽ'); a(',M', 'ॐ'); a(',,', '॰');
        a('`', '\u200D'); a('~', '\u200C'); // ZWJ, ZWNJ
    }
};

sanetype.registerScript('dev', devnagri);
