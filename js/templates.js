export const lookup = {
  0: "Noun",
  1: "Noun Phrase",
  2: "Noun Phrase Prep",
  3: "Verb Phrase",
  4: "Verb Phrase Prep",
  5: "Adverb",
  6: "Adjective",
  7: "Adjective Phrase",
  8: "Transitive Verb",
  9: "Intransitive verb",
  10: "Dialogue phrase",
};

const barbaraAllen = [
  `<5> she <9>
To <0> where he <3>
And when she <8>
Said, <10>
`,
  `<10>
<9>
Without <2>
`,
  `<10>
The <0> <2>
You <8> there
`,
  `She <9>, she <9>
She saw <1> coming
<9>, <10>
<8>
`,
  `The more she <9>, the more <9>
Until she <9>
Sayin', <10>
<1>
`,
  `<8>
<7>
<0> <9>
I <9>
`,
  `<8> <0> in <1>
<8> <0> beside him,
And <2> <9>
And <2> <0>
`,
  `They <9>
Till they <7>
And was there they <3>
<1>
`,
];

const loneGreenValley = [
  `<4> <2>
<4>
There was <1>
<7> with <1>
`,
  `<1> I <3>
<1> you <3>
And  <2>
<1> <8>
`,
  `<10>
<2> are <6> <0>
While <9> <3>
<2>
`,
  `So <4> they <9>
<1> I <9>
<1> we <9>
With <1> he <8>
`,
  `<4> before  him
She <3>
But <2>
He <8> <1>
`,
  `<10>
You know I <3>
I <3>
But <2>, <3>
I <3>
`,
];

const omieWise = [
  `I <3>, I <3>
I <3> <1>
<8> <2>
<8> and <1>
`,
  `I <4> <2>
She <3> nor <1>
<10>
<10>
`,
  `I <8> and <3>
<2> where <1>
<10>
<10>
`,
  `<10>
<1> and I <3>
<10>
<10>
`,
  `I <8> he <3>
She <8> where he <2>
In<8> and <3>
As the <1> went <2>
`,
  `T'was <1> <3>
I <3> but she <1>
<1> <1>
And she <3>
`,
  `They <8> and <8>
Her <1> they <8>
Then <8> to <2>
And <8> <1>
`,
  `He <3> but they <8>
<1> they <3>
`,
];

const twentyOneYears = [
  `<0> said <10>
You <8> to <1>
I <3> and she <3>
<1> is <1>
`,
  `I <9> she'll <4>
To <3> <1>
<3> <7>
And I <3> <1>
`,
  `<1> <1>
I <3>,<4>
He <3> babe and <3>
<1> <9> <1>
`,
  `I <3> <1>
I <3> and <3>
If I had <1> where <2>
Before <1> <4>
`,
  `I <8> <1> I <8> <1>
I <8> <1> I <8> <1>
I  <8> <1> I <8> <1>
I <8> <1> of these <1>
`,
  `I <3> and <3>
She <3> I'm <1>
I <3> I <4> <3> but  <4>
`,
  `I <3> with <7>
Don't <3> <1> you <3>
Don't <3> <1> <1>
<1> is a <1>
`,
];
export const templates = [
  ...barbaraAllen,
  ...loneGreenValley,
  ...omieWise,
  ...twentyOneYears,
];
