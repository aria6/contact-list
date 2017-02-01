// @flow

export type DataStore<State> = {
  getState: () => State;
  setState: ($Shape<State>) => void;
};

function createDataStore<State: Object>(initialState: State, onChange: () => void): DataStore<State> {
  let state = initialState;
  return {
    getState() {
      return state;
    },
    setState(newState: $Shape<State>) {
      let oldState = state;
      state = {
        ...oldState,
        ...newState,
      };
      onChange();
    },
  };
}

export default createDataStore;
