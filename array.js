exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === item) {
        return index;
      }
    }

    return -1;
  },

  sum: function(arr) {
    return arr.reduce((sum, value) => sum + value);
  },

  remove: function(arr, item) {
    let newArray = [];

    for(let index = 0; index < arr.length; index++) {
      if (arr[index] !== item) {
        newArray.push(arr[index]);
      }
    }

    return newArray;
  },

  removeWithoutCopy: function(arr, item) {
    let numberOfItemsToDelete = 0;

    arr.forEach(element => {
      if (element === item) {
        numberOfItemsToDelete++
      }
    });

    for (let itemsDeleted = 0; itemsDeleted < numberOfItemsToDelete; itemsDeleted++) {
      arr.splice(arr.indexOf(item), 1);
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;

    arr.forEach(element => {
      if (element === item) {
        count++;
      }
    });

    return count;
  },

  duplicates: function(arr) {
    let sortedArray = [...arr].sort();
    let duplicates = [];

    for (let index = 0; index < sortedArray.length; index++) {
      if (sortedArray[index] === sortedArray[index + 1] && !duplicates.includes(sortedArray[index])) {
        duplicates.push(sortedArray[index]);
      }
    }

    return duplicates;
  },

  square: function(arr) {
    return arr.map(element => element ** 2);
  },

  findAllOccurrences: function(arr, target) {
    let sortedArray = [...arr].sort();
    let occurrences = [];

    arr.forEach((element, index) => {
      if (element === target) {
        occurrences.push(index);
      }
    })

    return occurrences;
  }
};
