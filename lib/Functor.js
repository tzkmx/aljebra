'use strict';

var req = require('./common.js').req,
    constructors = require('./constructors.js'),
    Id = constructors.Id,
    Optional = constructors.Optional,
    Either = constructors.Either,
    Cont = constructors.Cont;

Id.prototype.map = function(f) {
  req.exactly(1, arguments)
     .type('function', f);
  return new Id(f(this.value));
};

Optional.prototype.map = function(f) {
  req.exactly(1, arguments)
     .type('function', f);
  if ('value' in this)
    return new Optional(f(this.value));
  else
    return new Optional();
};

Either.prototype.map = function(f) {
  req.exactly(1, arguments)
     .type('function', f);
  if ('left' in this)
    return new Either('left', this.left);
  else
    return Either.of(f(this.right));
};

Cont.prototype.map = function(f) {
  req.exactly(1, arguments)
     .type('function', f);
  var self = this;
  return new Cont(function(next) {
    return self.next(function(a) {
      return next(f(a));
    });
  });
};

module.exports = {
  instances: {
    Id: Id,
    Optional: Optional,
    Either: Either,
    Cont: Cont
  }
};
