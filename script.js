var string = '';
let calculationComplete = false;
const buttons = document.querySelectorAll('.button');   
const inputBox = document.querySelector('#inputbox');
const operators = ['+', '-', '*', '/'];

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = eval(string);
                inputBox.value = string;
                calculationComplete = true;
            } catch (error) {
                inputBox.value = 'Error';
                calculationComplete = false;
            }
        } 
        else if (value == 'AC') {
            string = '';
            inputBox.value = string;
            calculationComplete = false;
        } 
        else if (value == 'DEL') {
            removeLastDigit();  
            calculationComplete = false;
        } 
        else if (operators.includes(value)) {
            if (calculationComplete) {
                calculationComplete = false;  // Reset the flag when a new operation starts
            };

            if (string.length > 0 && !operators.includes(string[string.length - 1])) {
                string += value;
                inputBox.value = string;
            }
        } 
        else if (value == '.' && !string.includes('.')) {
            if (calculationComplete) {
                string = '';  
                calculationComplete = false;
            };
            string += value;
            inputBox.value = string;
        } 
        else if (value !== '.' && value !== 'DEL' && value !== 'AC' && value !== '=') {
            if (calculationComplete) {
                string = '';  
                calculationComplete = false;
            };
            string += value;
            inputBox.value = string;
        }
    });
});

function removeLastDigit() {
    let display = document.querySelector('#inputbox');
    let currentValue = display.value;

    if (currentValue.length > 0) {
        let newValue = currentValue.slice(0, -1); 
        display.value = newValue;
    }

    console.log("After:", display.value);
}
