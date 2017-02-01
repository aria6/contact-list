// @flow

type DataStore<State> = {
  getState: () => State;
  setState: ($Shape<State>) => void;
};

function createDataStore<State>(initialState: State, onChange: () => void) {
  let state;
  return {
    // TODO;
  };
}
