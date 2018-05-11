function Point(x,y){
  this.x = x
  this.y = y
  this.toString = () => {
    return `(${x}, ${y})`
  }
  }

function Shape(){

  this.move = (x,y)=>{
    this.x = x
    this.y = y
  }

  this.addToPlane = (x,y) => {
    this.position = Point.call(this,x,y)
  }
