// Brand convention & Nominal typing

// Branded interfaces
export interface MajorCredits {
  credits: number;
  readonly __brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
  readonly __brand: 'MinorCredits';
}

// Constructors/helpers to create branded values
function makeMajorCredits(credits: number): MajorCredits {
  return { credits, __brand: 'MajorCredits' };
}

function makeMinorCredits(credits: number): MinorCredits {
  return { credits, __brand: 'MinorCredits' };
}

// Sum functions
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return makeMajorCredits(subject1.credits + subject2.credits);
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return makeMinorCredits(subject1.credits + subject2.credits);
}

// Optional demo
// const m1 = makeMajorCredits(3), m2 = makeMajorCredits(4);
// const totalMajor = sumMajorCredits(m1, m2);
// const n1 = makeMinorCredits(1), n2 = makeMinorCredits(2);
// const totalMinor = sumMinorCredits(n1, n2);
