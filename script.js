const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');


// this event listener watches for when we click on a number, and updates the display
keys.addEventListener('click', event => {
    if(event.target.matches('button')){
        const key = event.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType  
        Array.from(key.parentNode.children)
        .forEach( key => key.classList.remove('is-depressed')) 

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
              display.textContent = keyContent
              console.log('line 20', display.textContent)
            } else {
              display.textContent = displayedNum + keyContent
              console.log('line 22', display.textContent)
            }
          }

           if(action === "add" ||action === 'subtract' || action === 'multiply' || action === 'divide')
           {
            console.log('hit operator')
            key.classList.add('is-depressed')
            // create custom attributes
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            
           } 

            if(action === 'decimal') {
                console.log('decimal')
                display.textContent = displayedNum + "."
            }

            if(action === 'clear') {
                console.log('clear key');
            }

            if(action  === 'calculate'){
                console.log('equal key')
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const secondValue = displayedNum;

                display.textContent = calculate(firstValue, operator, secondValue)
            } 

        }
    }
)

 