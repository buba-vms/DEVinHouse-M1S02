const imc = document.querySelector('#imc');

const conferir = document.querySelector('.conferir');

const resposta = document.querySelector('.resposta');

// console.log(conferir, imc, resposta);

conferir.addEventListener('click', function () {
  let peso = Number(imc.value);
  const enfase = document.querySelector('.enfase');
  if (peso >= 25) {
    console.log('Você está acima do peso, procure um médico');
    console.log(enfase);
    resposta.innerHTML = `
      <h3>
              Você esta acima do peso ideal,
              <span class="enfase">Procure um médico</span>
      </h3>`;
    document.querySelector('.enfase ').style.color = 'red';
  } else if (peso >= 18.5) {
    console.log('Parabéns você está no peso ideal');

    resposta.innerHTML = `            
      <h3>
              <span class="enfase">PARÁBENS!!</span> você está no peso ideal.
      </h3>`;
    document.querySelector('.enfase ').style.color = 'green';
  } else {
    console.log('Você está abaixo do peso ideal, procure um médico');

    resposta.innerHTML = `
      <h3>
              Você esta abaixo do peso ideal,
              <span class="enfase">Procure um médico</span>
      </h3>`;
    document.querySelector('.enfase ').style.color = 'blue';
  }
});
