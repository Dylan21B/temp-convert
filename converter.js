console.log("hello")

function calculator() {
    let currentTemp = document.getElementById("tempHere").value;

    if (document.getElementById("fh2c").checked) {    // links this if statement to the "fh2c" id in html
        let newCelcius = ((currentTemp - 32) * 0.5556);     //  converts currntTemp into newCelcius
        document.getElementById("newTemp").innerHTML = (newCelcius + "&#8451");
        if (newCelcius > 32) {            // if statment to apply appropriate colors
            document.getElementById("newTemp").style.color = "red";
        } else if (newCelcius < 0) {
            document.getElementById("newTemp").style.color = "blue";
        } else {
            document.getElementById("newTemp").style.color = "green";
        }
        console.log("the loop works!");
    }
    
    if (document.getElementById("c2fh").checked) {  // links if statment to the "c2fh" id in html
        let newFarenheit = ((currentTemp * 1.8) + 32);  // converts currentTemp to newFarenheit
        document.getElementById("newTemp").innerHTML = (newFarenheit + "&#8457");
        if (newFarenheit > 90) {           // if statment to apply appropriate colors
            document.getElementById("newTemp").style.color = "red";
        } else if (newFarenheit < 32) {
            document.getElementById("newTemp").style.color = "blue";
        } else {
            document.getElementById("newTemp").style.color = "green";
        }
        console.log("the loop works");
    }
}



function displayCalc() {
    if (event.which === 13 || event.keyCode == 13) {
        calculator();
    }
}

let tempBtn = document.getElementById("tempBtn").addEventListener("click", calculator);
addEventListener("keypress", displayCalc);

function clear() {
    document.getElementById("tempHere").value = "";
    document.getElementById("newTemp").innerHTML = "";
}
let clearBtn = document.getElementById("clearBtn").addEventListener("click", clear);