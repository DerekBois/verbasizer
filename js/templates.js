// 0 - Noun
// 1 - Noun Phrase
// 2 - Noun Phrase Prep
// 3 - Verb Phrase
// 4 - Verb Phrase Prep
// 5 - Adverb
// 6 - Adjective
// 7 - Adjective Phrase
// 8 - Transitive Verb
// 9 - Intransitive verb
// 10 - Dialogue phrase

export const templates = [
  `<1> <1>
I know <3>, until I get back
So <3> babe and <3>
<1> <9> <1>
`,
  `"<10>"
You know  <3>
<3>
But <2>, <3>
<3>
`,
  `<3> on your <1>
If you <3> try and <3>
If I had <1> where <2>
Before <1> the <3>
`,
  `He <8> <8> he <3>
Then <8> where <2>
He <9> and <3>
As <1> <4>
`,
];

export const originals = [
  `<Noun Phrase> <Noun Phrase>
I know <Verb Phrase>, until I get back>
So <Verb Phrase> babe <and Verb Phrase>
<Noun Phrase> <Intransitive verb> <Noun Phrase>`,
  `<Dialogue Phrase>
You know  <Verb Phrase>
<Verb Phrase>
But <Noun Phrase prep>, <Verb Phrase>
<Verb Phrase>
`,
  `<Verb Phrase> on your <Noun Phrase>
If you <Verb Phrase> try and <and Verb Phrase>
If I had <Noun Phrase> where <Noun Phrase Prep>
Before <Noun Phrase> the <Verb Phrase>
`,
  `He <Transitive Verb> <Transitive Verb> he <Verb Phrase>
Then <Transitive Verb> where <Noun Phrase Prep>
He <Intransitive Verb> and <Verb Phrase>
As <Noun Phrase> <Verb Phrase Prep>`,
];
