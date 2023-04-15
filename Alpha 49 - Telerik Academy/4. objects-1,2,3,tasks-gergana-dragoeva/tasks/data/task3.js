export default [
  // case 1
  {
    input: {
      course: 'Maths',
      minPassingGrade: 3.5,
      students: [
        {
          name: 'Mark',
          grades: [4, 3, 4, 5, 5],
        },
        {
          name: 'John',
          grades: [4, 3, 3],
        },
      ],
    },
    output: {},
    test: {
      course: 'Maths',
      minPassingGrade: 3.5,
      courseAverage: 4.2,
      graduates: [
        {
          name: 'Mark',
          score: 4.2,
        },
      ],
    },
  },

  // case 2
  {
    input: {
      course: 'Geography',
      minPassingGrade: 3.1,
      students: [
        {
          name: 'Layla',
          grades: [3],
        },
        {
          name: 'Jane',
          grades: [4, 3, 5],
        },
      ],
    },
    output: {},
    test: {
      course: 'Geography',
      minPassingGrade: 3.1,
      courseAverage: 4,
      graduates: [
        {
          name: 'Jane',
          score: 4,
        },
      ],
    },
  },

  // case 3
  {
    input: {
      course: 'English',
      minPassingGrade: 4.3,
      students: [
        {
          name: 'Prashant',
          grades: [4, 4],
        },
        {
          name: 'Niklaus',
          grades: [5, 5, 5, 6],
        },
        {
          name: 'Derick',
          grades: [6],
        },
        {
          name: 'Ivan',
          grades: [],
        },
      ],
    },
    output: {},
    test: {
      course: 'English',
      minPassingGrade: 4.3,
      courseAverage: 5.7,
      graduates: [
        {
          name: 'Niklaus',
          score: 5.3,
        },
        {
          name: 'Derick',
          score: 6,
        },
      ],
    },
  },

  // case 4
  {
    input: {
      course: 'Alien Studies',
      minPassingGrade: 9000,
      students: [],
    },
    output: {},
    test: {
      course: 'Alien Studies',
      minPassingGrade: 9000,
      courseAverage: 0,
      graduates: [],
    },
  },

  // case 5
  {
    input: {
      course: 'Developing Eye-Crossing Applications With Delphi',
      minPassingGrade: 5.3,
      students: [
        {
          name: 'Igor',
          grades: [6, 6],
        },
        {
          name: 'Helga',
          grades: [5, 5, 5, 6],
        },
        {
          name: 'Hvorta',
          grades: [6, 3, 6, 6, 6, 6, 6, 6, 6],
        },
        {
          name: 'Penka',
          grades: [6, 6, 6, 5, 6, 6],
        },
      ],
    },
    output: {},
    test: {
      course: 'Developing Eye-Crossing Applications With Delphi',
      minPassingGrade: 5.3,
      courseAverage: 5.7,
      graduates: [
        {
          name: 'Igor',
          score: 6,
        },
        {
          name: 'Helga',
          score: 5.3,
        },
        {
          name: 'Hvorta',
          score: 5.7,
        },
        {
          name: 'Penka',
          score: 5.8,
        },
      ],
    },
  },

];
