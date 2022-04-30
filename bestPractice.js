exports = typeof window === 'undefined' ? global : window;

exports.bestPracticesAnswers = {
  globals: function() {
    let myObject = {
      name: 'Jory'
    };

    return myObject;
  },

  parseInt: function(num) {
    return parseInt(num, 10);
  },

  identity: function(val1, val2) {
    return val1 === val2;
  }
};
