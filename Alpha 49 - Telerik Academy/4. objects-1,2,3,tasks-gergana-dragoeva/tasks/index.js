import { measure, takeMeasures } from '../src/utils/measure-utils.js';
import modifiers from '../src/utils/modifiers.js';
import { eq, haveSharedReferences } from '../src/utils/object-utils.js';
import { rules } from '../src/utils/rules.js';
import { RulesetError } from '../src/utils/ruleset-error.js';
import data1 from './data/task1.js';
import data2 from './data/task2.js';
import data3 from './data/task3.js';
import solution1 from './solutions/task1.js';
import solution2 from './solutions/task2.js';
import solution3 from './solutions/task3.js';

export default [
  // Task 1
  {
    name: 'Clone Objects',
    data: data1,
    solution: solution1,
    awardPartial: true,
    // full measurement score per case
    fullScore: 1,
    rules: [rules.immutableData, rules.noJSON],
    // measures taken
    measures: [takeMeasures.equal],
    // measure deep equal
    [takeMeasures.equal](measures, { input, output, test }, result) {

      return (eq(result, test) && !haveSharedReferences(result, test)) ? 1 : 0;
    },
  },

  // Task 2
  {
    name: 'Game of Key-owns',
    data: data2,
    solution: solution2,
    awardPartial: true,
    // full measurement score per case
    fullScore: 5,
    rules: [rules.immutableData],
    // measures taken
    measures: [takeMeasures.equal],
    // measure deep equal
    [takeMeasures.equal](measures, { input, output, test }, result) {
      let score = 0;

      try {
        if (Object.keys(result).length > 0 && Object.keys(result).every(key => key in test)) score += 1;
        if (eq(test, {}) && eq(result, {})) score += 1;
      } catch {
        // silently fail
      }

      if (eq(result, test)) score += 4;

      return score;
    },
  },

  // Task 3
  {
    name: 'Graduates',
    data: data3,
    solution: solution3,
    awardPartial: true,
    // full measurement score per case
    fullScore: 6,
    rules: [rules.immutableData],
    // measures taken
    measures: [takeMeasures.equal],
    // measure deep equal
    [takeMeasures.equal](measures, { input, output, test }, result) {
      let score = 0;

      if (result.graduates.length === test.graduates.length) score += 1;
      if (result.courseAverage === test.courseAverage) score += 1;

      if (eq(result, test)) {
        score = 6;
      }

      return score;
    },
  },

];
