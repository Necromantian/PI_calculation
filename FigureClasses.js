class Figure {
    constructor(canvasContext) {
        if (this.constructor === Figure) {
            throw new AbstractClassException("Figure is an abstract class and there cannot be an instance of it.");
        }
        this.canvasContext = canvasContext;
    }

    draw() { };
}

class Circle extends Figure {
    // constructor() { }
    constructor(canvasContext, sideLength) {
        super(canvasContext);

        let halfSideLength = Math.floor(sideLength / 2);
        this.sx = halfSideLength;
        this.sy = halfSideLength;
        this.r = halfSideLength;
    }

    draw() {
        this.canvasContext.beginPath();
        this.canvasContext.arc(this.sx, this.sy, this.r, 0, 2 * Math.PI);
        this.canvasContext.stroke();
    }
}

class Point extends Figure {
    // constructor() { }
    constructor(canvasContext, sideLength) {
        super(canvasContext);

        this.x = Math.floor(Math.random() * sideLength);
        this.y = Math.floor(Math.random() * sideLength);
    }

    draw(color, size) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(this.x, this.y, size, size);
    }
    
    checkIfInCircle(circle){
        return Math.pow((this.x - circle.sx), 2) + Math.pow((this.y - circle.sy), 2) <= Math.pow(circle.r, 2);
     }
}

class AbstractClassException extends Error {
    constructor(message) {
      super(message);
      this.name = "AbstractClassException";
    }
  }