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
        a('k', 'क'); a('kh', 'ख'); a('g', 'ग'); a('gh', 'घ'); a('G', 'ङ'); a('x', 'ख़');
        a('c', 'च'); a('ch', 'छ'); a('j', 'ज'); a('jh', 'झ'); a('Y', 'ञ'); a('z', 'ज़'); a('zh', 'झ़');
        a('T', 'ट'); a('Th', 'ठ'); a('D', 'ड'); a('Dh', 'ढ'); a('N', 'ण'); a('R', 'ड़'); a('Rh', 'ढ़');
        a('t', 'त'); a('th', 'थ'); a('d', 'द'); a('dh', 'ध'); a('n', 'न');
        a('p', 'प'); a('ph', 'फ'); a('b', 'ब'); a('bh', 'भ'); a('m', 'म'); a('f', 'फ़');
        a('y', 'य'); a('r', 'र'); a('l', 'ल'); a('v', 'व'); a('<', 'ऱ्'); a('L', 'ळ');
        a('sh', 'श'); a('S', 'ष'); a('Sh', 'ष'); a('s', 'स'); a('H', 'ह');
        a('K', 'क्ष'); a('J', 'ज्ञ');
        a('w', '्र'); a('W', 'र्'); a('h', '्ह');
        a(',g', 'ॻ'); a(',j', 'ॼ'); a(',D', 'ॾ'); a(',b', 'ॿ'); a(',h', 'ॽ');
        // diacritics
        a('C', 'ँ'); a('M', 'ं'); a(':', 'ः'); a('Q', '़'); a(';', '्'); a('\'', 'ʼ');
        // digits
        a('1', '१'); a('2', '२'); a('3', '३'); a('4', '४'); a('5', '५'); 
        a('6', '६'); a('7', '७'); a('8', '८'); a('9', '९'); a('0', '०');
        // other symbols
        a('>', '।'); a('>>', '॥'); a('$', '₹'); a('*', 'ॱ'); a('@', 'ऽ'); a(',M', 'ॐ'); a(',,', '॰');
        // geminates
        a('qk', 'क्क'); a('qkh', 'क्ख'); a('qg', 'ग्ग'); a('qgh', 'ग्घ'); a('qG', 'ङ्ङ'); a('qx', 'ख़्ख़');
        a('qc', 'च्च'); a('qch', 'च्छ'); a('qj', 'ज्ज'); a('qjh', 'ज्झ'); a('qY', 'ञ्ञ'); a('qz', 'ज़्ज़'); a('qzh', 'झ़्झ़');
        a('qT', 'ट्ट'); a('qTh', 'ट्ठ'); a('qD', 'ड्ड'); a('qDh', 'ड्ढ'); a('qN', 'ण्ण'); a('qR', 'ड़्ड़'); a('qRh', 'ड़्ढ़');
        a('qt', 'त्त'); a('qth', 'त्थ'); a('qd', 'द्द'); a('qdh', 'द्ध'); a('qn', 'न्न');
        a('qp', 'प्प'); a('qph', 'प्फ'); a('qb', 'ब्ब'); a('qbh', 'ब्भ'); a('qm', 'म्म'); a('qf', 'फ़्फ़');
        a('qy', 'य्य'); a('qr', 'र्र'); a('ql', 'ल्ल'); a('qv', 'व्व'); a('q<', 'ऱ्ऱ्'); a('qL', 'ळ्ळ');
        a('qsh', 'श्श'); a('qS', 'ष्ष'); a('qSh', 'ष्ष'); a('qs', 'स्स'); a('qH', 'ह्ह');
        a('q,g', 'ॻ्ॻ'); a('q,j', 'ॼ्ॼ'); a('q,D', 'ॾ्ॾ'); a('q,b', 'ॿ्ॿ'); a('qhh', 'ॽ्ॽ');
        a('`', '\u200D'); a('~', '\u200C'); // ZWJ, ZWNJ
    }
};

sanetype.registerScript('dev', devnagri);
