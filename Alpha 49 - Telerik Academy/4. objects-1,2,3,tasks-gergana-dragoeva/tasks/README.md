# Objects and Destructuring

## How to run tasks

You are provided with a Node.js client application which will run and test your solutions. You don't need to install any packages. The project has been set up to work with ES modules and you have one built-in command: `npm start` which will execute and test your code (provided you don't have any syntax errors).

Important: You don't need to get familiar with the project code, you will work exclusively in the `tasks/solutions` folder. You are not allowed to modify any code outside that folder.

The project structure:

- `index.js` - the code execution starts from here
- `src` - includes the core logic of the application that will run and test your code
- `tasks/data` - includes the test data for each tasks, you might refer to the test cases, but keep in mind:
  - some of the test data might confuse you more than help you - if you nail the task logic, the data complexity is not important
  - you are **not allowed** to hardcode solutions to specific cases (except for boundary conditions: zero, one or more input elements)
- `tasks/solutions` - includes the solution files you will be working with

<br>

## How to solve tasks

You can find each task in its file, i.e. task #1 is in `tasks/solutions/task1.js`, etc.

You will see one default function export. You are not allowed to change anything outside the function or even its parameter. You can write the solution inside the function's body:

```js
export default function (data) {
  // your code starts here
  // your code ends here
}
```

Each function solution except only one parameter `data` which will be in specific format described below for each task. The function should return the calculated value following the task's description.

<br>

### Task 1: Clone objects

The function will receive the `data` value which will **always** be an object. You must return a new object that is a copy of the original object. Every property can be copied by value, except for properties which are arrays. Array values must be copied as new arrays (same elements, different reference).

```js
export default function (data /* always an object */) {
  // your code starts here
  // your code ends here
}
```

Example `data` value:

```js
{
  id: 1,
  name: 'John',
}
```

<br>

### Task 2: Game of Key-owns

The function will receive the `data` value which will **always** be an object, and the function will **always** return an _object_.

Your task is to create and return a new object following a few simple rules:

- the returned object must have all keys specified in the `keys` property of the `data` object
- if the key exist both in the `first` object and in the `second` object the value of the same key of the return object will be an array of two elements - the value of the key in the `first` object followed by the value of the key in the second object
- if the key exist in only on of the `first` and `second` object, the value of the key in the returned object will be the existing value of the same key in either of those objects
- if the key doesn't not exist in any of the two object, the value of the key in the returned object should be `null`

```js
export default function (data /* always an object */) {
  // your code starts here
  // your code ends here
}
```

Example `data` value and function return:

```js
// data value
{
  keys: ['a', 'b', 'c'],
  first: {
    a: 1,
  },
  second: {
    a: 2,
    b: 3,
  }
}

// function return
{
  a: [1, 2],
  b: 3,
  c: null,
}
```

<br>

### Task 3: Graduates

The function will always receive an object with the structure specified before:

```js
{
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
}
```

The object will always have the `course` property which is the name of the course, the `minPassingGrade` which is the minimal average grade for each student in order to graduate the course and an array of 0, 1 or more students. Each student is an object with the two properties `name` which is the name of the student and the `grades` arrays which is an array of 0, 1 or more numbers.

This object will be passed to the `data` parameter of the function.

You need to create, calculate and return a new object based on the following criteria.

- the returned object must have a `course` property which is the name of the course
- the returned object must have a `minPassingGrade` property which is the same as the `minPassingGrade` property of the passed to `data` object
- the returned object must have an array of all graduates, where each graduate is an object with the `name` of the student and the `score` property which is the average of their grades rounded to the first digit after the decimal point (you can use the `toFixed` method of number variables, but keep in mind it doesn't **exactly** return a number, so you will need to put some extra work)
- the returned object must have the `courseAverage` property which is the average of all student `score` numbers rounded again to the fist digit after the decimal point.

Example `data` value and function return:

```js
// data value
{
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
}

// function return
{
  course: 'Maths',
  minPassingGrade: 3.5,
  courseAverage: 4.2,
  graduates: [
    {
      name: 'Mark',
      score: 4.2,
    },
  ],
}
```

Explanation: the returned object has the `course` and `minPassingGrade` properties copied from the input. The only graduate is Mark, because his average score (4.2, rounded to the first digit after the decimal point) is greater (or equal) to the `minPassingGrade` (3.5). The course average is equal to the score of its only graduate.

If there are more than one graduate, the graduates (as object) must be added in the same order as they come in the `data` input.

If there are 0 graduates, the `courseAverage` is 0.
