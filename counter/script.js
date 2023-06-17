let number = 0; //initialize the counter

function increment() { //function to increment the counter
    number++; //increment the counter
    document.getElementById("counter").innerHTML = number; //display the counter
}

function decrement() { //function to decrement the counter
    number--; //decrement the counter
    document.getElementById("counter").innerHTML = number; //display the counter
}