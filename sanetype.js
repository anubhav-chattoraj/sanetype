var dev = {
  follow: [',', 'A', 'I', 'U', ',R', ',L', 'O', 'Oo', 'Uu', 
    'a', 'i', 'u',  ',r', ',l', 'o', 'oo', 'uu',
    'k', 'g', 'c', 'j', 'z', 'T', 'D', 'R', 't', 'd', 'p', 'b', 's', 'h', '>',
    'q', 'qk', 'qg', 'qc', 'qj', 'qT', 'qD', 'qR', 'qt', 'qd', 'qp', 'qb', 'qs', 'qz', 'qh', 'q,'],
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
    a('sh', 'श'); a('S', 'ष'); a('s', 'स'); a('H', 'ह');
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
    a('qsh', 'श्श'); a('qS', 'ष्ष'); a('qs', 'स्स'); a('qH', 'ह्ह');
    a('q,g', 'ॻ्ॻ'); a('q,j', 'ॼ्ॼ'); a('q,D', 'ॾ्ॾ'); a('q,b', 'ॿ्ॿ'); a('qhh', 'ॽ्ॽ');
  }
}

var sanetype_handle = function(e, script) {
  var t = e.target;
  
  var removeHere = function(numChars) { 
    var start = t.selectionStart;
    var end = t.selectionEnd;
    t.value = t.value.substring(0, start - numChars) + t.value.substring(end, t.value.length);
    t.selectionStart = start - numChars;
    t.selectionEnd = t.selectionStart;
  }
  
  var insertHere = function(str) { 
    var start = t.selectionStart;
    var end = t.selectionEnd;
    t.value = t.value.substring(0, start) + str + t.value.substring(end, t.value.length);
    t.selectionStart = start + str.length;
    t.selectionEnd = t.selectionStart;
  }
  
  var char = String.fromCharCode(e.charCode); 
  
  if(e.ctrlKey || e.altKey) {
    t.dataset.buffer = ''; t.dataset.prevMatch = '';
    return; 
  }
  
  if(typeof t.dataset.buffer === 'undefined') t.dataset.buffer = '';
  if(typeof t.dataset.prevMatch === 'undefined') t.dataset.prevMatch = '';
  if(typeof t.dataset.latin === 'undefined') t.dataset.latin = 'false';
  
  if(char === 'q') {
    if(t.dataset.buffer === 'q') {
      e.preventDefault();
      t.dataset.buffer = '';
      if(t.dataset.latin === 'true') {
        removeHere(1);
        t.dataset.latin = 'false';
      } else {
        t.dataset.latin = 'true';
      }
      return;
    } else if(t.dataset.latin === 'true') {
      t.dataset.buffer = 'q';
      return;
    }
  }
  if(t.dataset.latin === 'true') return;
  
  if(script.follow.indexOf(t.dataset.buffer) === -1) {
    t.dataset.buffer = '';
  }
  
  t.dataset.buffer += char;
  var match = script.get(t.dataset.buffer);
  
  if(match === null && script.follow.indexOf(t.dataset.buffer) === -1) {
    // ignore the characters previously stored in the buffer
    t.dataset.prevMatch = ''; 
    t.dataset.buffer = char; match = script.get(char); 
  }
  var numCharsToDelete = t.dataset.prevMatch.length;
    
  if(match !== null || script.follow.indexOf(t.dataset.buffer) !== -1) {
    e.preventDefault();
    if(match !== null) {
      removeHere(numCharsToDelete);
      insertHere(match);
      if (script.follow.indexOf(t.dataset.buffer) === -1) {
        t.dataset.buffer = '';
        t.dataset.prevMatch = '';
      } else
        t.dataset.prevMatch = match;
    }
  }
}

var init_sanetype = function(script) {
  if(typeof init_sanetype.initialized === 'undefined') {
    init_sanetype.initialized = [];
  }
  
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
  
  if (init_sanetype.initialized.indexOf(script) === -1) {
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
    init_sanetype.initialized.push(script);
  }
}

var elements = document.querySelectorAll("[data-sanetype]");
for (var i = 0; i < elements.length; i++) {
  if (elements[i].dataset.sanetype === 'dev') {
    init_sanetype(dev);
    elements[i].addEventListener('keypress', function(e) { sanetype_handle(e, dev) }, false);
  }
}