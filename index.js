function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function(){
  return(`(${this.x}, ${this.y})`)
}


function Shape() {}

Shape.prototype.addToPlane = function(x,y){
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y){
  this.position = new Point(x,y)
}

function Side(sides){
  this.length = sides
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.diameter = function(){
  return this.radius*2
}
Circle.prototype.area = function(){
  return Math.PI * this.radius ** 2
}
Circle.prototype.circumference = function(){
  return Math.PI*this.radius*2
}

function Polygon(sides){
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}

Polygon.prototype.perimeter = function(){

  var p = 0
  for(var i = 0; i < this.numberOfSides(); i++){
    p += this.sides[i].length
  }
  return p
}

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  // call Shape constructor
  Polygon.call(this,[new Side(sideOneLength), new Side(sideTwoLength),new Side(sideThreeLength),new Side(sideFourLength)]);
  this.sideOneLength = sideOneLength;
  this.sideTwoLength = sideTwoLength;
  this.sideThreeLength = sideThreeLength;
  this.sideFourLength = sideFourLength;
  //this.length = 4
}

//inherit from Shape prototype
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, length){
  Quadrilateral.call(this, width, width, length, length)
  this.width = width
  this.length = length
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function(){
  return this.width * this.length
}
