function Point(x,y){
  this.x = x
  this.y = y
  this.toString = () => {
    return `(${x}, ${y})`
  }
  }

function Shape(){

  this.addToPlane = (x,y) => {
    this.position = Point.call(this,x,y)
  }

  this.move = (x,y)=>{
    this.x = x
    this.y = y
  }
}
}
