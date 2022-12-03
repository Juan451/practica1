// TODO: create an async function, fakeService, that returns an array of objects that include s1 and s2
// i.e. [ {s1: 'ab', s2: 'eidbaooo'} ... ]

const fakeService = null; // should return promise with the data

const fakeData = [
	{ s1: 'ab', s2: 'eidbaooo' }, // --> ba is a permutation of ab
	{ s1: 'ab', s2: 'eidboaoo' }, // --> none exists
	{ s1: 'abc', s2: 'eidcbacboabco' } // --> cba, acb and abc are valid permutations
]
