const data = [
  {
    name: 'Jane',
    age: 30,
  },
  { a: 1, b: 2, c: 3, d: 4, e: '5', f: null },
  {
    studentId: 1,
    school: {
      name: 'Telerik Academy School',
    },
  },
  {
    studentId: 1,
    school: {
      name: 'Telerik Academy School',
    },
    grades: ['Excellent', 'Excellent', 'Good'],
  },
  {
    a: null,
    b: undefined,
    c: false,
    d: -0,
    e: [],
  },
  {
    [1]: {},
    [2]: { [3]: 4 },
    [5]: 6
  },
]

export default [
  // case 1
  {
    input: data[0],
    output: {},
    test: data[0],
  },

  // case 2
  {
    input: data[1],
    output: {},
    test: data[1],
  },

  // case 3
  {
    input: data[2],
    output: {},
    test: data[2],
  },

  // case 4
  {
    input: data[3],
    output: {},
    test: data[3],
  },

  // case 5
  {
    input: data[4],
    output: {},
    test: data[4],
  },

  // case 6
  {
    input: data[5],
    output: {},
    test: data[5],
  },

];
