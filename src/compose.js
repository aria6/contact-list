// @flow

// function prop<T>(key: string): (Object) => T {
//   return (object: {[key: string]: T}) => {
//     return object[key];
//   };
// }
//
// function map<T, U>(array: Array<T>): ((T) => U) => Array<U> {
//   return (fn) => array.map(fn);
// }
//
// function compose<One, Two, Three>(one: (Two) => One, two: (Three) => Two, three: () => Three): () => One {
//   return () => {
//     return one(two(three()));
//   };
// }
//
// let people = [
//   {name: 'simon'},
//   {name: 'juang'},
// ];
//
// let sayHi = compose(map((name) => `hello ${name}`), prop('name'));
// let result = sayHi(people);
//
// export {map, compose, prop};
