About [<img src="https://travis-ci.org/markandrus/aljebra.png">](http://travis-ci.org/#!/markandrus/aljebra)
=====

_Note: this package is unstable!_

Aljebra provides toy implementations of the algebraic structures defined in the [Fantasy Land specification](https://github.com/pufuwozu/fantasy-land), mostly borrowed from [Haskell libraries](http://hackage.haskell.org/package/base).

![https://github.com/pufuwozu/fantasy-land](https://raw.github.com/pufuwozu/fantasy-land/master/logo.png)

Semigroup
=========

Constructor
-----------

* `Semigroup(concat)`

Instances
---------

* Min
* Max

This module re-exports all Monoid instances.

Monoid
======

Constructors
------------

* `Monoid(zero, concat)`
* `MonoidFromSemigroup(semigroup, zero)`

Instances
---------

* All
* Any
* Array
* Dual
* Endo
* Product
* Sum

Testing
=======

About
-----

The test suite attempts to verify that the instances of algebraic structures defined in this library satisfy the laws defined in the [Fantasy Land specification](https://github.com/pufuwozu/fantasy-land).

Before running, make sure you have installed the package (`npm install`), as the test suite relies on [Mocha](http://visionmedia.github.io/mocha/).

Running
-------

To run the tests, issue the following:

~~~
$ npm test
~~~

For more information about testing, issue the following:

~~~
$ make about-testing
~~~
