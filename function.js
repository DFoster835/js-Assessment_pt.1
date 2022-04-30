exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj, arguments);
  },

  functionFunction: function(str) {
    return function(argument) {
      return `${str}, ${argument}`;
    }
  },

  makeClosures: function(arr, fn) {
    let closures = [];

    var makeClosure = function(input) {
      return function() {
        return fn(input);
      };
    };

    for (let i = 0; i < arr.length; i++) {
      closures.push(makeClosure(arr[i]));
    }

    return closures;
  },

  partial: function(fn, str1, str2) {
    return function(newArgument) {
      return fn(str1, str2, newArgument);
    };
  },

  useArguments: function() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function(fn) {
    let args = [].slice.call(arguments, 1, arguments.length);
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    let args = [].slice.call(arguments, 1, arguments.length);
    return function() {
      let moreArgs = args.concat([].slice.call(arguments));
      return fn.apply(this, moreArgs);
    };
  },

  curryIt: function(fn) {
    let args = [];

    let curried = function(x) {
      args.push(x);

      let result = curried;

      if (args.length === fn.length) {
        result = fn.apply(this, args);
        args = [];
      }

      return result;
    };

    return currier;
  }
};
