// Define UI
var number = document.querySelector("#number");
var result = document.querySelector("#result");

// Define Function
function gpaCalculator() {
    const mark = number.value;
    if (mark < 0 || mark > 100) {
        result.innerText = "Invalid Number!";
    }

    else if (mark >= 0 && mark <= 32) {
        result.innerText = "F";
    }

    else if (mark >= 33 && mark <= 39) {
        result.innerText = "D";
    }

    else if (mark >= 40 && mark <= 49) {
        result.innerText = "C";
    }

    else if (mark >= 50 && mark <= 59) {
        result.innerText = "B";
    }

    else if (mark >= 60 && mark <= 69) {
        result.innerText = "A-";
    }

    else if (mark >= 70 && mark <= 79) {
        result.innerText = "A";
    }

    else {
        result.innerText = "A+";
    };
};

// Define Event Listener
number.addEventListener("keyup", gpaCalculator);

