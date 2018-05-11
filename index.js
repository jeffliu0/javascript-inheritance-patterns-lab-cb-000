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

function Circle(radius){
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.area = function(){
  return 3.14*(this.radius * this.radius)
}
Circle.prototype.perimeter = function(){
  return 3.14*2*this.radius)
}
