
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function(newWidth) {
  this.width = newWidth;    
};
rectangle.setHeight(6)
rectangle.setWidth(8)

// calculates useful information about an object
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function () {
    return this.sideLength * this.sideLength;
};
