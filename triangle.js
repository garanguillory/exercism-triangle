// equilateral triangles have equal sides
// isosceles triangles have exactly two sides equal
// scalene triangles have no equal sides
// triangle inequality: 
	// The sum of the lengths of any two sides of a triangle
	// must be greater than the third side.

var Triangle = function(input){

	// var array = [];
	// array.push(agruments);
	// return array;

	this.kind = function(){
		var array = [];
			this.agruments.map(function(element){
				array.push(element);
			});
		return array;
	};

};




module.exports = Triangle;