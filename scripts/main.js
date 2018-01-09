 // Define a Function
 function sayHello() {
 	alert('Hello there, foxy person');
 }


 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('#foxlogo');

 // Assign the function to the onclick event on that element
 foxImage.onclick = sayHello;


 function sayMlem() {
 	alert('I lick u, hooman');
 }

 var foxGif = document.querySelector('#foxlick');

 foxGif.onclick = sayMlem;