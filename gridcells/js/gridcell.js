var elements = document.getElementsByClassName("cell");
var colors = ["blue", "orange", "red", "yellow"]; //array for the colors
var count = '1';  //counter for colors and to reset.


//set to wait for click on the window 
window.addEventListener('click', myFunction);
function myFunction() {
 for (var i = 0; i < elements.length; i++) {    
	elements[i].style.backgroundColor = colors[count];
	}
    if(count==3)
	{
	   count=0;
	}
    else{	
       count++;
    }	
}



//set up for for all circles with random colors
//elements[i].style.backgroundColor = setRandomColor()
/* function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
} */