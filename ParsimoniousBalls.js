// "Parsimonious Vigorously Apprehensive Spirit of Verbrosity Compendium" by Kaneo

var spirits=[];
// let spirits; // Declare object

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Create object

 for(var i=0; i < 20; i++){ //loop 5 times
    //put an object in the array for each loop
    // var d=random(100,200);
    // pulse[i] = new Pulser(width/2, height/2, d,d); 
  // spirits = new ghost();
  spirits[i] = new ghost();
  }

  colorMode(HSB, 360, 100, 100);
}

function draw() {
  //background(50, 89, 100);
  background(50);
  
  let camX = map(mouseX, 0, width, -200, 200);
  camera(camX, 0, (height/2)/ tan(PI / 6), 0, 0, 0, 0, 1, 0)
  for(var i=0; i < 20; i++){
  spirits[i].move();
  spirits[i].display();
  spirits[i].rotation();
}
}

// My class
class ghost {
	constructor() {
    this.x = random(width);
    this.y = random(height);
    this.z = random(-500,500);
    this.diameter = random(10, 100);
    this.speed = 1;
    this.dim = width*.5;
    this.rX= width*.5;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    // push();
      // 
      // 
    // pop();
  }

  rotation() {

// push();
    // translate(this.x, this.y, this.z);
    this.rX = map(mouseX, 0, width, -5, 5);
    
    // pop();

  }


  display() {
    
    
  	// ellipseMode( RADIUS );
    ellipseMode( CENTER );
    
	// noFill();
	// noStroke();

	// blendMode( BLEND ); //Not working?
 
  push();
  
      // translate(0-width*.5,0-height*.5, this.z);
      translate(this.x-width*.5,this.y-height*.5, this.z);
      
      // translate(this.x,this.y, this.z);
  		
      for ( var i = 1; i <= this.diameter; i++ )
		{
			let f = random(-1,1);
			let ls = random(-10, 10);
			var c = int( map( i, 1, this.diameter, 0, 360 ) );
			let b = c+= random(0,10);
			let h = random(0,100);
			stroke( c+ls, c*f, c*h );
			h++;
			
			noFill();
			//fill(h,90,90);
			// h = (h + 1) % 360;
      rotateY(this.rX);
			ellipse(0, 0, i, i );
      // ellipse(0, 0, i, i );
		}
    //ellipse(this.x, this.y, this.diameter, this.diameter);
    pop();
  }
}
