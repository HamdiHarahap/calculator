const values = document.querySelectorAll('.value')
const result = document.querySelector('.result')
let currentNumber = ''

values.forEach((value) => {
    value.addEventListener('click', function() {
        if (value.innerText == '=') {
            result.innerText = eval(currentNumber)
            currentNumber = ''
        } else {
            currentNumber += value.innerText
            result.innerText = currentNumber;
        }
    })
})

const reset = document.querySelector('section article .reset')

reset.addEventListener('click', function() {
    result.innerText = '0'
    currentNumber = ''
})