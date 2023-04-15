import { RulesetError } from './ruleset-error.js';

export const defaultCompare = {
  string: (a, b) => typeof a === 'string' && a === b,
  number: (a, b) => typeof a === 'number' && a === b,
  bigint: (a, b) => typeof a === 'bigint' && a === b,
  boolean: (a, b) => typeof a === 'boolean' && a === b,
  undefined: (a, b) => typeof a === 'undefined' && a === b,
  symbol: (a, b) => typeof a === 'symbol' && a === b,
  function: (a, b) => typeof a === 'function' && a === b,
};

export function clone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    let _clone = [];

    for (const el of obj) {
      _clone = [..._clone, el];
    }

    return _clone;
  }

  const o = {};

  for (let key in obj) {
    o[key] = clone(obj[key]);
  }

  return o;
}

export function eq(result, test, compare = defaultCompare) {
  compare = {
    ...defaultCompare,
    ...compare,
  };

  if (typeof test !== typeof result) return false;

  // compare as primitives
  if (result === null && test === null) return true;

  if (Number.isNaN(result) && Number.isNaN(test)) return true;

  if (typeof test !== 'object') return compare[typeof test](test, result);

  // compare as arrays
  if (Array.isArray(test)) {
    if (!Array.isArray(result)) return false;

    if (test.length !== result.length) return false;

    return test.every((el, index) => eq(result[index], el, compare));
  }

  // compare as objects
  if (typeof result !== 'object' || result === null) return false;

  if (Array.isArray(result)) return false;

  if (Object.keys(test).length !== Object.keys(result).length) return false;

  return Object
    .keys(test)
    .every(key => eq(result[key], test[key], compare));

}

export function haveSharedReferences(o1, o2) {
  if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;

  if (o1 === null || o2 === null) return false;

  if (o1 === o2) return true;

  return Object
    .keys(o1)
    .filter(key => typeof o1[key] === 'object' && o1[key] !== null)
    .some(key => haveSharedReferences(o1[key], o2[key]));
}

const freezeHandler = {
  set() {
    throw new RulesetError('You are now allowed to modify passed objects!');
  },
};

export function freezeObject(o) {
  if (Array.isArray(o)) {
    return new Proxy(o.map(x => freezeObject(x)), freezeHandler);
  }
  if (o && typeof o === 'object') {
    Object.keys(o).every(key => o[key] = freezeObject(o[key]))

    return new Proxy(o, freezeHandler);
  }

  return o;
}
