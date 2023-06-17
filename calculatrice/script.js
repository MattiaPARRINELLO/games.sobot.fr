function forNumber(number) { //forNumber function
    var result = document.getElementById("result"); //get the result element
    result.value += number; //add the number to the result
}

function forOperator(operator) { //forOperator function
    var result = document.getElementById("result"); //get the result element
    if (result.value.slice(-1) == "+" || result.value.slice(-1) == "-" || result.value.slice(-1) == "*" || result.value.slice(-1) == "/") { //if the last character is an operator
        result.value = result.value.slice(0, -1) + operator; //remove the operator and add the new operator
    } else if (result.value == "" || result.value.slice(-1) == ".") { //if the last character is a dot or nothing do nothing
    } else { //if the last character is a number
        result.value += operator; //add the operator to the result
    }
}

function forClear() { //forClear function
    var result = document.getElementById("result"); //get the result element
    result.value = ""; //clear the result
}

function forEqual() { //forEqual function
    var result = document.getElementById("result"); //get the result element
    if (result.value.slice(-1) == "+" || result.value.slice(-1) == "-" || result.value.slice(-1) == "*" || result.value.slice(-1) == "/" || result.value == "" || result.value.slice(-1) == ".") { //if the last character is an operator or nothing or a dot do nothing
    } else { //if the last character is a number
        result.value = eval(result.value); //evaluate the result
    }
}