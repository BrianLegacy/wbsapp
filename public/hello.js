/* When the user clicks submit the greetings change to include the user's name*/

// Get access to the button and set up a click event handler

var button=document.getElementById("submit");
button.onclick = changeGreeting;

function changeGreeting(){
    var greeting = document.getElementsByTagName("h1")[0];
    var input = document.getElementById("name").value;
    greeting.innerHTML = "Hello," + input;
}