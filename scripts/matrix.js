var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = screen.availHeight;
c.width = screen.availWidth;

//binary characters - translated from ascii
var binary = "01010100011010000110010100100000010000100110110001100001011000110110101100100000010000100110111101111000001000000111011101100101011000100111001101101001011101000110010100100000011010010111001100100000011000110110111101101101011010010110111001100111001000000111001101101111011011110110111000101110";
//converting the string into an array of single characters
binary = binary.split("");

var font_size = 13;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#ccc"; //white text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random binary character to print
		var text = binary[Math.floor(Math.random()*binary.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 50);