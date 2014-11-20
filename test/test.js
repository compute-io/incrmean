'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	incrmean = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-incrmean', function tests() {

	it( 'should export a function', function test() {
		expect( incrmean ).to.be.a( 'function' );
	});

	it( 'should return a function', function test() {
		expect( incrmean() ).to.be.a( 'function' );
	});

	it( 'should compute an arithmetic mean incrementally', function test() {
		var data,
			N,
			sum,
			d,
			expected,
			actual,
			mean;

		data = [ 2, 3, 2, 4, 3, 4 ];
		N = data.length;

		expected = new Array( N );
		actual = new Array( N );

		mean = incrmean();

		sum = 0;
		for ( var i = 0; i < N; i++ ) {
			d = data[ i ];
			sum += d;
			expected[ i ] = sum / (i+1);
			actual[ i ] = mean( d );
		}

		assert.deepEqual( actual, expected );
	});

	it( 'should return the current mean if provided no arguments', function test() {
		var data = [ 2, 3, 1 ],
			mean = incrmean();
		for ( var i = 0; i < data.length; i++ ) {
			mean( data[ i ] );
		}
		assert.strictEqual( mean(), 2 );
	});

});
