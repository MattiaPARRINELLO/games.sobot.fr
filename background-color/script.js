document.onkeydown = function (e) { //when the user press a key
    if (e.keyCode == 13) { //if the key is enter
        let color = document.getElementById('input').value //get the value of the input
        document.body.style.backgroundColor = color; //change the background color with the value of the input
    }
}