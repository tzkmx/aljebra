'use strict';

module.exports = {
  'Associativity (Semigroup)': {
    types: ['m a', 'm a', 'm a'],
    equivalences: [
      function(a, b, c) {
        return a.concat(b).concat(c);
      },
      function(a, b, c) {
        return a.concat(b.concat(c));
      }
    ]
  }
};
