function Point(x,y){
  this.x = x
  this.y = y
  this.toString = () => {
    return `(${x}, ${y})`
  }
  }

function Shape(){

  this.addToPlane = (x,y) => {
    return "hi"
  }

  this.move = (x,y)=>{
    this.x = x
    this.y = y
  }
}
