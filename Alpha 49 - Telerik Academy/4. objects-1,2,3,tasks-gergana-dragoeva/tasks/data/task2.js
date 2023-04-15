export default [
  // case 1
  {
    input: {
      keys: ['a', 'b', 'c'],
      first: {
        a: 1,
      },
      second: {
        a: 2,
        b: 3,
      }
    },
    output: {},
    test: {
      a: [1, 2],
      b: 3,
      c: null,
    },
  },

  // case 2
  {
    input: {
      keys: [],
      first: {
        a: 1,
        b: 2,
      },
      second: {
        a: 2,
        b: 1,
      },
    },
    output: {},
    test: {},
  },

  // case 3
  {
    input: {
      keys: [0, 1, 2, 3, 'length'],
      first: [1, 2, 3],
      second: [3, 2, 1, 0],
    },
    output: {},
    test: {
      [0]: [1, 3],
      [1]: [2, 2],
      [2]: [3, 1],
      [3]: 0,
      length: [3, 4],
    },
  },

  // case 4
  {
    input: {
      keys: ['a', 'b', 'c', 'd'],
      first: {
        name: 'John',
        age: 20,
      },
      second: {
        name: 'Lisa',
        age: 23,
      },
    },
    output: {},
    test: {
      a: null,
      b: null,
      c: null,
      d: null,
    },
  },

  // case 5
  {
    input: {
      keys: ['toString', 'h', 'c-3po'],
      first: {
        h: 'c-3po',
      },
      second: {
        h: 'r2-d2',
        ['c-3po']: 'null',
      },
    },
    output: {},
    test: {
      h: ['c-3po', 'r2-d2'],
      'c-3po': 'null',
      toString: [Object.prototype.toString, Object.prototype.toString],
    },
  },

];
