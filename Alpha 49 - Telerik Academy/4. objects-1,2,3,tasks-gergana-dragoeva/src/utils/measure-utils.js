// measures for read-write property access

import { clone } from './object-utils.js';

export const measure = {
  inputReads: 'input-reads',
  inputWrites: 'input-writes',
  outputReads: 'output-reads',
  outputWrites: 'output-writes',
  arrayMap: 'array.map',
  arrayFilter: 'array.filter',
  arrayReduce: 'array.reduce',
  arrayForEach: 'array.forEach',
};

export const takeMeasures = {
  io: 'input-output',
  arrayMethods: 'array-methods',
  equal: 'equal',
};

export const createObjectIOObserver = (input, output) => {

  const result = {
    [measure.inputReads]: 0,
    [measure.inputWrites]: 0,
    [measure.outputReads]: 0,
    [measure.outputWrites]: 0,
  };

  const inputReadHandler = function (object, prop) {
    result[measure.inputReads]++;

    return object[prop];
  };

  const inputWriteHandler = function (object, prop, value) {
    result[measure.inputWrites]++;

    if (typeof value === 'object' && value) {
      object[prop] = createInputIOProxy(value);
      return true;
    }

    object[prop] = value;

    return true;
  };

  const outputReadHandler = function (object, prop) {
    result[measure.outputReads]++;

    return object[prop];
  };

  const outputWriteHandler = function (object, prop, value) {
    result[measure.outputWrites]++;

    if (typeof value === 'object' && value) {
      object[prop] = createOutputIOProxy(value);
      return true;
    }

    object[prop] = value;

    return true;
  };

  const createInputIOProxy = (target) => new Proxy(target, { set: inputWriteHandler, get: inputReadHandler });
  const createOutputIOProxy = (target) => new Proxy(target, { set: outputWriteHandler, get: outputReadHandler });

  return [
    input && typeof input === 'object' ? createInputIOProxy(input) : input,
    output && typeof output === 'object' ? createOutputIOProxy(output) : output,
    () => result,
  ];
};

export const createArrayMethodsObserver = () => {
  const result = {
    [measure.arrayMap]: 0,
    [measure.arrayFilter]: 0,
    [measure.arrayReduce]: 0,
    [measure.arrayForEach]: 0,
    order: [],
  };

  const _map = Array.prototype.map;
  const _filter = Array.prototype.filter;
  const _reduce = Array.prototype.reduce;
  const _forEach = Array.prototype.forEach;

  // patch Array methods API

  Array.prototype.map = function (...params) {
    result[measure.arrayMap]++;
    result.order.push({
      type: measure.arrayMap,
      value: clone(params),
    });

    return _map.apply(this, params);
  };

  Array.prototype.filter = function (...params) {
    result[measure.arrayFilter]++;
    result.order.push({
      type: measure.arrayFilter,
      value: clone(params),
    });

    return _filter.apply(this, params);
  };

  Array.prototype.reduce = function (...params) {
    result[measure.arrayReduce]++;
    result.order.push({
      type: measure.arrayReduce,
      value: clone(params),
    });

    return _reduce.apply(this, params);
  };

  Array.prototype.forEach = function (...params) {
    result[measure.arrayForEach]++;
    result.order.push({
      type: measure.arrayForEach,
      value: clone(params),
    });

    return _forEach.apply(this, params);
  };

  return () => {
    // patch original Array methods back
    Array.prototype.map = _map;
    Array.prototype.filter = _filter;
    Array.prototype.reduce = _reduce;
    Array.prototype.forEach = _forEach;

    return result;
  };
};
