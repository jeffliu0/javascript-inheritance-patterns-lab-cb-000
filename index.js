function Point(x,y){
  this.x = x
  this.y = y
  this.toString = () => {
    return `(${x}, ${y})`
  }
  }

function Shape(){
  this.addToPlane = function(x,y){
    this.position = Point.call(this,x,y)
  }

  this.move = (x,y)=>{
    this.x = x
    this.y = y
  }
}

function Circle(radius){
  Shape.call()
  this.radius = radius
  this.area = () => { return 3.14*(this.radius * this.radius)}
  this.circumference = () => { return 2*3.14*this.radius}
}
