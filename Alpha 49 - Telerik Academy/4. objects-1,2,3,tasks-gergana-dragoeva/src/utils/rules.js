import { freezeObject } from './object-utils.js';
import { RulesetError } from './ruleset-error.js';

// set of rules that can be applied for each task
export const rules = {
  banForEach: 'no-forEach',
  banMap: 'no-map',
  banFilter: 'no-filter',
  banReduce: 'no-reduce',
  immutableData: 'immutable-data',
  noJSON: 'no-JSON-methods',
};

// temp placeholder for banned and patched APIs
let forEach;
let map;
let filter;
let reduce;
let stringify;

// apply rules by patching APIs and test data
export const applyRules = (rulesArray, [input, output]) => {
  let inputData = input;
  let outputData = output;

  for (const rule of rulesArray) {
    switch (rule) {

      case rules.banForEach: {
        forEach = Array.prototype.forEach;
        Array.prototype.forEach = function () {
          throw new RulesetError('You are not allowed to use Array.forEach!');
        };

        break;
      }

      case rules.banMap: {
        map = Array.prototype.map;
        Array.prototype.map = function () {
          throw new RulesetError('You are not allowed to use Array.map');
        }

        break;
      }

      case rules.banFilter: {
        filter = Array.prototype.filter;
        Array.prototype.filter = function () {
          throw new RulesetError('You are not allowed to use Array.filter');
        }

        break;
      }

      case rules.banReduce: {
        reduce = Array.prototype.reduce;
        Array.prototype.reduce = function () {
          throw new RulesetError('You are not allowed to use Array.reduce');
        }

        break;
      }

      case rules.immutableData: {
        inputData = freezeObject(inputData);
        outputData = freezeObject(outputData);

        break;
      }

      case rules.noJSON: {
        stringify = JSON.stringify;
        JSON.stringify = () => {
          throw new RulesetError('Not trying to cheat, are you?!');
        };

        break;
      }

    }
  }

  return [inputData, outputData];
};

// lift rules by patching back APIs
export const liftRules = (rulesArray) => {
  for (const rule of rulesArray) {
    switch (rule) {

      case rules.banForEach: {
        Array.prototype.forEach = forEach;

        break;
      }

      case rules.banMap: {
        Array.prototype.map = map;

        break;
      }

      case rules.banFilter: {
        Array.prototype.filter = filter;

        break;
      }

      case rules.banReduce: {
        Array.prototype.reduce = reduce;

        break;
      }

      case rules.noJSON: {
        JSON.stringify = stringify;

        break;
      }

    }
  }
};
