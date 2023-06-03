function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    if (b == 0){
        alert("Error")
        return
    }
    return a/b;
}

function mod(a,b){
    if (b == 0){
        alert("Error")
        return
    }
    return a%b;
}

function operate(a,b,c){
    if (b == '+'){
        return Number(add(a, c).toFixed(2))
    }

    else if(b == '-'){
        return Number(sub(a, c).toFixed(2))
    }

    else if(b == '*'){
        return Number(mul(a, c).toFixed(2))
    }

    else if(b == '/'){
        return Number(div(a, c).toFixed(2))
    }

    else if(b == '%'){
        return Number(mod(a, c).toFixed(2))
    }

    else{
        alert("Enter valid operation")
        return null
    }
}

let answer = document.querySelector('.screen');
const btn = document.querySelectorAll('.ind-buttons button');
btn.forEach(element => {
    element.addEventListener('click', () => {
        const buttonText = element.textContent
        if (buttonText === '='){
            evaluateExpression();
        }
        else if (buttonText === '⌫'){
            deleteLastCharacter();
        }
        else{
            appendToScreen(buttonText)
        }
})
});

function isOperator(x){
    return x == '+' || x == '-' || x == '*' || x == '/' || x == '%'
}

function deleteLastCharacter(){
    answer.textContent = answer.textContent.slice(0,-1)
}

function appendToScreen(text){
    answer.textContent += text
}

function evaluateExpression() {
    const expression = answer.textContent;
    let numbers = [];
    let operators = [];
    let currentNumber = '';
  
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      if (isOperator(char)) {
        if (currentNumber !== '') {
          numbers.push(parseFloat(currentNumber));
          currentNumber = '';
        }
        operators.push(char);
      } else {
        currentNumber += char;
      }
    }
    if (currentNumber !== '') {
      numbers.push(parseFloat(currentNumber));
    }
  
    if (numbers.length - 1 !== operators.length) {
        answer.textContent = ''
      alert('Invalid expression');
      return;
    }
  
    while (operators.length > 0) {
      const operator = operators.shift();
      const num1 = numbers.shift();
      const num2 = numbers.shift();
      const result = operate(num1, operator, num2);
      if (result === null || Number.isNaN(result)) {
        alert('Invalid operation');
        return;
      }
      numbers.unshift(result);
    }
  
    if (numbers.length === 1) {
      answer.textContent = numbers[0];
    } else {
      alert('Invalid expression');
    }
  }
  
  

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    answer.textContent = ''
})

