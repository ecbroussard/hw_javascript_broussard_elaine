function howdy() {
	console.log( 'Elaine Broussard says hi!' );
}
howdy();

var numba = function( string ) {
	if ( string.length < 7 ) {
		console.log( 'What a short little word!' );
	} else if ( string.length > 7 ) {
		console.log( 'I\'m sorry, but that\'s too many to count.' );
	} else {
		console.log( '7, what a perfect choice!' );
	}
};

numba( '7' );
numba( 'seventy' );
numba( 'university' );

function inception( callback, value ) {
	callback( value );
}
var faveMovie = function( movieTitle ) {
	console.log( movieTitle + ' is a fantastic movie!' );
};
inception( faveMovie, 'Independence Day' );
