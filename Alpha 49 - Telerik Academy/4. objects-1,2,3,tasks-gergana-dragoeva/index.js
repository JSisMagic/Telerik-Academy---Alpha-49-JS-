import colors from './src/utils/colors.js';
import { createArrayMethodsObserver, createObjectIOObserver, takeMeasures } from './src/utils/measure-utils.js';
import { applyRules, liftRules } from './src/utils/rules.js';
import { RulesetError } from './src/utils/ruleset-error.js';
import tasks from './tasks/index.js';

(async () => {

  for (const task of tasks) {
    const maxCases = task.data.length;
    let cases = 0;

    console.log(`\n\n${colors.taskTitle}> ${task.name}:${colors.reset}`);

    for (const { input, output, test } of task.data) {
      let [inputData, outputData] = applyRules(task.rules, [input, output]);

      try {
        // define listener functions
        let getIOResults;
        let getArrayMethodCalls;

        // apply listeners
        if (task.measures.includes(takeMeasures.io)) {
          [inputData, outputData, getIOResults] = createObjectIOObserver(inputData, outputData);
        }

        if (task.measures.includes(takeMeasures.arrayMethods)) {
          getArrayMethodCalls = createArrayMethodsObserver();
        }

        const result = await task.solution(inputData, outputData);

        let score = 0;

        if (task.measures.includes(takeMeasures.equal)) {
          score += task[takeMeasures.equal](null, { input, output, test }, result);
        }

        if (task.measures.includes(takeMeasures.io)) {
          score += task[takeMeasures.io](getIOResults(), { input: inputData, output: outputData, test }, result);
        }

        if (task.measures.includes(takeMeasures.arrayMethods)) {
          score += task[takeMeasures.arrayMethods](getArrayMethodCalls(), { input: inputData, output: outputData, test }, result);
        }

        // Test is full or partial score is achieved
        if (score === task.fullScore) {
          cases += 1;
          console.log(`${colors.green}  ✔ Success!${colors.reset}`);
        } else if (score > 0 && task.awardPartial) {
          cases += + (score / task.fullScore).toFixed(2);
          console.log(`${colors.yellow}  - Partial!${colors.reset}`);
        } else {
          console.log(`${colors.red}  ✘ Wrong answer!${colors.reset}`);
        }

      } catch (e) {
        if (e instanceof RulesetError) {
          console.log(`${colors.red}  ✘ ${colors.reset}${e.message}`);
        } else {
          console.log(e);
          console.log(`${colors.red}  ✘ Runtime error!${colors.reset}`);
        }
      }

      liftRules(task.rules);
    }

    const points = Math.ceil(100 * cases / maxCases);

    if (points === 100) {
      console.log(`${colors.green}100 points ${cases} / ${maxCases} cases${colors.reset}`);
    } else {
      console.log(`${colors.yellow}${points} points ${cases} / ${maxCases} cases${colors.reset}`);
    }
  }

})()
  .catch((e) => console.error(`Something went wrong...${e.message}`));
