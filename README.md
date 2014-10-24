incrmean
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Provides a method to compute an arithmetic mean incrementally.


## Installation

``` bash
$ npm install compute-incrmean
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var incrmean = require( 'compute-incrmean' );
```

#### incrmean()

Returns an initialized method to compute an arithmetic mean incrementally.

``` javascript
var mean = incrmean();
```

#### mean( [value] )

If provided a `value`, updates and returns the updated mean value. If no `value` is provided, returns the current mean value.

``` javascript
mean( 2 );

console.log( mean( 1 ) );
// returns 1.5

mean( 3 );

console.log( mean() );
// returns 2
```


## Examples

``` javascript
var incrmean = require( 'compute-incrmean' );

// Initialize a method to calculate the mean incrementally:
var mean = incrmean();

// Simulate some data...
for ( var i = 0; i < 1000; i++ ) {
	mean( Math.random() * 100 );
}

console.log( mean() );
// ~ 0.5
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

The use case for this module differs from the conventional [vector](https://github.com/compute-io/mean) implementation and the [stream](https://github.com/flow-io/?query=mean) implementation.

The use case for the vector implementation is where you have a known dataset and want to calculate a summary statistic (i.e., a single number characterizing the central tendency).

The use case for the stream implementation is where you have either (1) a stream source, which may or may not be definite, or (2) a desire to continually stream each updated value.

The incremental implementation overlaps both use cases, but also provides an additional benefit. Namely, this module decouples the acct of updating the mean from the act of consuming the mean.

For example, suppose every 2 seconds your application receives a new value from a remote data source and you want to continuously update the data's mean value.

In a streaming implementation, the updated mean value is either pooled (chunked) or automatically pipe to a new destination. The consumer is ultimately responsible for discarding incoming observations.

In contrast to the streaming (push) model, an incremental implementation provides a pull model in which consumers can choose when to probe for new values. Instead of observing on a regular interval (streaming), observations may be random.

To this end, this module is more amenable to such observation indeterminacy.


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-incrmean.svg
[npm-url]: https://npmjs.org/package/compute-incrmean

[travis-image]: http://img.shields.io/travis/compute-io/incrmean/master.svg
[travis-url]: https://travis-ci.org/compute-io/incrmean

[coveralls-image]: https://img.shields.io/coveralls/compute-io/incrmean/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/incrmean?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/incrmean.svg
[dependencies-url]: https://david-dm.org/compute-io/incrmean

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/incrmean.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/incrmean

[github-issues-image]: http://img.shields.io/github/issues/compute-io/incrmean.svg
[github-issues-url]: https://github.com/compute-io/incrmean/issues