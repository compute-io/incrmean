var incrmean = require( './../lib' );

// Initialize a method to calculate the mean incrementally:
var mean = incrmean();

// Simulate some data...
var value, mu;

console.log( '\nValue\tMean\n' );

for ( var i = 0; i < 100; i++ ) {

	value = Math.random() * 100;
	mu = mean( value );

	console.log( '%d\t%d', value.toFixed( 4 ), mu.toFixed( 4 ) );
}

// Final mean value:
console.log( '\nFinal mean is %d...\n', mean() );
