export class State {
  constructor({ accepting = false }) {
    this.accepting = accepting;
    this._transition = new Map();
  }
  addTransitionForSymbol(symbol, state) {
    this.getTransitionForSymbol(symbol).add(state);
  }
  getTransitionForSymbol(symbol) {
    let tansition = this._transition.get(symbol);
    if (!tansition) {
      tansition = new Set();
      this._transition.set(symbol, tansition);
    }
    return tansition;
  }
}

