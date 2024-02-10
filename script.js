let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')
console.log(buttons)
let string = ''
buttons.forEach(element => {

    element.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target.innerText)
        if (e.target.innerText == '=') {
            string = String(eval(string))
            inputBox.value = string;
        }
        else if (e.target.innerText == 'AC') {
            string = ''
            inputBox.value = string;
        }
        else if (e.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1)
            inputBox.value = string;
        }
        else if (e.target.id == 'plusMinus') {
            string = String(-eval(string))
        }
        else {
            string += e.target.innerText
            inputBox.value = string
        }
    })
})