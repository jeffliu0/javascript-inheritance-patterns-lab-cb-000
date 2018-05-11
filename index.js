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
  return Math.Pi*(this.radius * this.radius)
}
Circle.prototype.circumference = function(){
  return Math.Pi*this.diameter()
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
