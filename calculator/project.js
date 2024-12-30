// let display = document.getElementById('dispaly');
// let clear = document.getElementById('clear');
// let del = document.getElementById('del');
// let equal = document.getElementById('btn-equal');
// let number = document.querySelectorAll('')
// let operation = document.querySelectorAll('')

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    display.value = " ";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }
    catch (e) {
         alert("you have enter a wrong ");
         display.value = " ";
    }
}