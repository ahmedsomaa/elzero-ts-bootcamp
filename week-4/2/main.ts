// Write Function Code Here
const showTypes = <T1 = void, T2 = void, T3 = void>(a?: T1, b?: T2, c?: T3): string =>
  `${a ? a : 'Nothing'} - ${b ? b : 'Nothing'} - ${c ? c : 'Nothing'}`;

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>('String')); // String - Nothing - Nothing
console.log(showTypes<string, number>('String', 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>('String', 100, true)); // String - 100 - true
