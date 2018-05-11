function Point(x,y){
  this.x = x
  this.y = y
  this.toString = () => {
    return `(${x}, ${y})`
  }
  }

function Shape(){
  this.addToPlane = (x,y)=>{
      Point.call(this,x,y)
  }
}
