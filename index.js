function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = (x,y)=>{
  return(`${x}, ${y}`)
}


function Shape() {}

function Side(sides){
  this.length = sides
}

function Circle(radius){
  Shape.call(this)
  this.radius = radius
  this.area = () => { return 3.14*(this.radius * this.radius)}
  this.circumference = () => { return 2*3.14*this.radius}
}
