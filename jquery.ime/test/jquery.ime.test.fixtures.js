/*jshint unused:false */
var testFixtures = [
	{
		description: 'Devanagari Sanetype test',
		tests: [
			{ input: 'AAa', output: 'अआ', description: 'Devanagari Sanetype a and ā' },
			{ input: 'kakaa', output: 'काका', description: 'Devanagari Sanetype mātrā of ā' },
			{ input: 'kikiikIi', output: 'किकीकई', description: 'Devanagari Sanetype svara-mātrā difference' },
			{ input: 'bhshShS', output: 'भशषष', description: 'Devanagari Sanetype multi-key consonants' },
			{ input: 'kqkMk:kC', output: 'क़कंकःकँ', description: 'Devanagari Sanetype diacritics' },
			{ input: 'kwWk<y', output: 'क्रर्कऱ्य', description: 'Devanagari Sanetype half-forms of ra' },
			{ input: ',g,j,D,b,h', output: 'ॻॼॾॿॽ', description: 'Devanagari Sanetype ejectives & glottal stop' },
			{ input: 'd;md;y', output: 'द्मद्य', description: 'Devanagari Sanetype halant' },
			{ input: '\\\\\\n\\\\n\\\\', output: '\\n\\न\\', description: 'Devanagari Sanetype backslash escape' },
			{ input: 'AiAQi', output: 'ऐअि', description: 'Devanagari Sanetype Q ignores surrounding letters' },
			{ input: 'k,rrk,llkuuekooe', output: 'कॄकॣकॗकऻ', description: 'Devanagari Sanetype triple-key mātrās' },
		], 
		inputmethod: 'devanagari-sanetype'
	}
];
