/*jshint unused:false */
var testFixtures = [
	{
		description: 'Devanagari Sanetype test',
		tests: [
			{
				input: 'AAaIIiUUuEAiOAu,R,Rr,L,Ll,A,E,O,AuAeEeAoOeOoeUeUue',
				output: 'अआइईउऊएऐओऔऋॠऌॡऄऎऒॵॲऍऑॳॴॶॷ',
				description: 'vowels'
			}, {
				input: 'kakaakikiikukuukekaikokauk,rk,rrk,lk,llk,ak,ek,ok,aukaekeekaokoekooekuekuue',
				output: 'काकाकिकीकुकूकेकैकोकौकृकॄकॢकॣकॆकॆकॊकॏकॅकॅकॉकऺकऻकॖकॗ',
				description: 'vowel signs'
			}, {
				input: 'kkhgghGcchjjhYTThDDhNtthddhnpphbbhmyrlvshSShsHL,g,j,D,b,h h',
				output: 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषषसहळॻॼॾॿॽ ह',
				description: 'plain consonants'
			}, {
				input: 'nqrqLqkqkhqgqjqDqDhqphqyq',
				output: '\u0929\u0931\u0934क\u093Cख\u093Cग\u093Cज\u093Cड\u093Cढ\u093Cफ\u093Cय\u093C',
				description: 'consonants with nuqta (using q)'
			}, {
				input: 'zfRRh',
				output: 'ज\u093Cफ\u093Cड\u093Cढ\u093C',
				description: 'consonants with nuqta (without using q)'
			}, {
				input: 'KJvkwWk<y',
				output: 'क्षज्ञवक्रर्कऱ्य',
				description: 'conjuncts and half-consonants'
			}, { 
				input: 'kqkMkCk:', 
				output: 'क़कंकँकः', 
				description: 'diacritics' 
			}, { 
				input: 'd;md;y', 
				output: 'द्मद्य', 
				description: 'halant'
			}, {
				input: '@,M,,> >>$-><-`~',
				output: 'ऽॐ॰। ॥₹→←\u200D\u200C',
				description: 'other symbols'
			}, {
				input: '0123456789',
				output: '०१२३४५६७८९', 
				description: 'digits'
			}, { 
				input: '\\\\\\n\\\\n\\\\', 
				output: '\\n\\न\\', 
				description: 'backslash escape' 
			}, { 
				input: 'AQi', 
				output: 'अि', 
				description: 'Q ignores surrounding letters' 
			},
		], 
		inputmethod: 'hi-sanetype'
	}, {
		description: 'Bengali Sanetype test',
		tests: [
			{
				input: 'AAaIIiUUu,R,Rr,L,LlEAiOAu',
				output: 'অআইঈউঊঋৠঌৡএঐওঔ',
				description: 'vowels',
			}, {
				input: 'kakaakikiikukuuk,rk,rrk,lk,llkekaikokau',
				output: 'কাকাকিকীকুকূকৃকৢকৄকৣকেকৈকোকৌ',
				description: 'vowel signs',
			}, {
				input: 'kkhgghxcchjjhXTThDDhNtthddhnpphbbhmJrlvshSShsHzv h',
				output: 'কখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলৱশষষসহৰৱ হ',
				description: 'plain consonants',
			}, {
				input: 'RRhy',
				output: 'ড\u09BCঢ\u09BCয\u09BC',
				description: 'consonants with nuqta',
			}, {
				input: 'KGkYrYzYkwWkmf',
				output: 'ক্ষজ্ঞক্যর‍্যৰ‍্যক্রর্কমৎ',
				description: 'conjuncts and half-consonants',
			}, {
				input: 'kqkMkCk:',
				output: 'ক়কংকঁকঃ',
				description: 'diacritics',
			}, {
				input: 's;thd;m',
				output: 'স্থদ্ম',
				description: 'hosont',
			}, {
				input: '@,M,S^> >>$<-->`~',
				output: 'ঽওঁ৺৳। ॥₹←→\u200D\u200C',
				description: 'other symbols',
			}, { 
				input: '\\\\\\n\\\\n\\\\', 
				output: '\\n\\ন\\', 
				description: 'backslash escape' 
			}, { 
				input: 'AQi', 
				output: 'অি', 
				description: 'Q ignores surrounding letters' 
			},
		], 
		inputmethod: 'bn-sanetype'
	}
];
