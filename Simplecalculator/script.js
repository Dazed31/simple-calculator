let displayValue = "0";
let waitingForNewNumber = false;
const display = document.getElementById('display');

function updateDisplay(){
    display.textContent = displayValue;
};

function appendToDisplay(value) {
    if (waitingForNewNumber) {
        displayValue = '';
        waitingForNewNumber = false;
    }

    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }

    updateDisplay();
};

function clearDisplay(){
    displayValue = '0';
    waitingForNewNumber = false;

    updateDisplay();
};

function deleteLast(){
      if(displayValue.length > 1){
        displayValue = displayValue.slice(0, -1);
    }

    else {
        displayValue = '0';
    }

    updateDisplay();
}

function calculate(){
    try {
        let result = eval(displayValue);
        displayValue = result.toString();
        waitingForNewNumber = true;
        updateDisplay();
        
    } catch (error) {
        displayValue = 'Error';
        waitingForNewNumber = true;
        updateDisplay();
    }
}



 