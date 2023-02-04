import { State } from "./state.js";
import { NFA } from "./nfa.js";

export function char(symbol){
     const inState = new State({accepting: false});
     const outState = new State({accepting: true});
     

     inState.addTransitionForSymbol(symbol, outState);

     return new NFA(inState, outState);
}