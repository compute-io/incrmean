/**
*
*	COMPUTE: incrmean
*
*
*	DESCRIPTION:
*		- Provides a method to compute an arithmetic mean incrementally.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// INCREMENTAL MEAN //

	/**
	* FUNCTION: incrmean()
	*	Returns a method to compute an arithmetic mean incrementally.
	*
	* @returns {Function} method to compute an arithmetic mean incrementally
	*/
	function incrmean() {
		var mu = 0,
			N = 0,
			delta;
		/**
		* FUNCTION: incrmean( [value] )
		*	If a `value` is provided, updates and returns the updated mean. If no `value` is provided, returns the current mean.
		*
		* @param {Number} [value] - value used to update the mean
		* @returns {Number} mean value
		*/
		return function incrmean( x ) {
			if ( !arguments.length ) {
				return mu;
			}
			N += 1;
			delta = x - mu;
			mu += delta / N;
			return mu;
		};
	} // end FUNCTION incrmean()


	// EXPORTS //

	module.exports = incrmean;

})();