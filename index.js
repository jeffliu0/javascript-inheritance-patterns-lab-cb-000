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

  this.move = (x,y)=>{
    this.x = x
    this.y = y
  }

  this.position = function(){
    return(this.x + ", " + this.y); 
  }
}
