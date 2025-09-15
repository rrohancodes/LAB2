
const display = document.querySelector('.display');


const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        
        const result = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-'));
        display.value = result;
      } catch {
        display.value = 'Error';
      }
    } else if (value === 'C') {
      display.value = '';
    } else {
      display.value += value;
    }
  });
});
