//Examp

// radial sketch

var greys = [];

function setup()
{
	createCanvas( windowWidth, windowHeight );
	background( 255 );

	ellipseMode( RADIUS );
	noFill();
	noStroke();
	blendMode( BLEND );
}

function draw()
{
	for ( var i = 0; i < greys.length; i++ )
	{
		greys[i].display();
	}
}

function Grey( _x, _y )
{
	this.radius = int( random( 10, 200 ) );
	this.x = _x;
	this.y = _y;

	this.display = function()
	{
		push();
		for ( var i = 1; i <= this.radius; i++ )
		{
			var c = int( map( i, 1, this.radius, 0, 255 ) );
			stroke( c );

			ellipse( this.x, this.y, i, i );
		}

		pop();
	};
}

function mouseClicked()
{
	greys.push( new Grey( mouseX, mouseY ) );
}