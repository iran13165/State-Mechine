// import {State} from "./state.js";

// const s1 = new State({accepting : false});
// const s2 = new State({accepting: true});
// const s3 = new State({accepting: true});
// s1.addTransitionForSymbol('a', s2);
// s1.addTransitionForSymbol('a', s3);
// let p = s1.getTransitionForSymbol('a');
// console.log(p);

import { char } from "./char.js";

const a = char('a');
console.log(a.test('a'));
console.log(a);
