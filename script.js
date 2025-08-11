//window.alert("we are learning JavaScript");

document.write(5 + 6);

document.write("this my new code in JavaScript");

let a, b, c;  // Declare 3 variables

a = 5;        // Assign the value 5 to a

b = 6;        // Assign the value 6 to b

c = a + b;

document.getElementById('demo').innerText="the result of C is " + 	c 	+ ".";
 
 
function btnFunction(){

	alert("hi you just clicked me!")

}
 
document.getElementById("hoverButton").onmouseover = function() {

    document.getElementById("hoverButton").style.background = '#FF0000'; // Correct 6-digit hex for white

}
 
/*let count = 0;

document.getElementById('buttonCounter').onclick = function() {

    count = count + 1;

    document.getElementById('lb1').innerHTML = 'this ' + count + ' is new number';

}*/
 
let count = 0;
 
function add() {

    count = count + 1;

    document.getElementById('lb1').innerHTML = 'this ' + count + ' is new number';
 
    if (count % 2 === 0) {

        lb1.style.color = 'blue'; // Even number - Blue text

    } else {

        lb1.style.color = 'red'; // Odd number - Red text

    }

}

 