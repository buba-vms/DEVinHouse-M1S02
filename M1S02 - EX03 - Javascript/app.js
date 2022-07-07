const num1 = Number(window.prompt('Digite o primeiro número'));
const num2 = Number(window.prompt('Digite o segundo número'));

const exRes = document.querySelector('.ex-res');

exRes.innerHTML = `<h4>
    Num 1: ${num1} <br />
    Num 2: ${num2} <br />
    Soma:  ${num1 + num2}
  </h4>`;
