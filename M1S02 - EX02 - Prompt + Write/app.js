const nome = window.prompt('Digite Seu nome: ');
const email = window.prompt('Digite seu e-mail:');
console.log(nome);

const exRes = document.querySelector('.ex-res');

exRes.innerHTML = `<h4>
    Nome: ${nome} <br />
    Email: ${email}
  </h4>`;
