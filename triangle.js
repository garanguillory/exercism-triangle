// equilateral triangles have equal sides
// isosceles triangles have exactly two sides equal
// scalene triangles have no equal sides
// triangle inequality: 
	// The sum of the lengths of any two sides of a triangle
	// must be greater than the third side.

var Triangle = function(a,b,c){

	this.sortArgs = function() {
	    var args = [];
	    for (var i = 0; i < arguments.length; i++)
	        args[i] = arguments[i];
	    return args.sort().reverse();
	};

	this.unique = function(collection){
    return collection.filter(function(el, pos){
        return collection.indexOf(el) === pos;
    });
	};

	this.kind = function(){
		var array = this.sortArgs(a,b,c);
		var sides = this.unique(array);

		if( (array[1]+array[2] < array[0]) ){
				throw "Pythagorean no-no";
		} else if(!(array[2] > 0)){
				throw "Pythagorean no-no";
		}

			if(sides.length == 1){
				return 'equilateral';
			} else if(sides.length == 2){
				return 'isosceles';
			} else if(sides.length == 3){
				return 'scalene';
			}
		
	}; // end of this.kind function

};




module.exports = Triangle;

