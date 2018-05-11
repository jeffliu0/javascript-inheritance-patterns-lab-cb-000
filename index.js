function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return(`(${this.x}, ${this.y})`)
}


function Shape() {}

Shape.prototype.addToPlane = (x,y)=>{
  this.position = Point(this,x,y)
}

function Side(sides){
  this.length = sides
}

function Circle(radius){
  Shape.call(this)
  this.radius = radius
  this.area = () => { return 3.14*(this.radius * this.radius)}
  this.circumference = () => { return 2*3.14*this.radius}
}
