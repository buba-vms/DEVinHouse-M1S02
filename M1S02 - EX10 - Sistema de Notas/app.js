const nome = window.prompt('Digite seu nome');
const notas = [];
let trimestre = 1;
const exRes = document.querySelector('.ex-res');

function anotarNota() {
  let nota = Number(
    window.prompt(`Digite sua nota ${trimestre}
`)
  );
  if (isNaN(nota)) {
    window.alert('So serão aceitos valores númericos');
    anotarNota();
  } else {
    notas.push(nota);
  }
}

while (notas.length < 4) {
  anotarNota();
  trimestre++;
}

media =
  notas.reduce(function (acc, curr) {
    acc += curr;
    return acc;
  }, 0) / 4;

// console.log(media);

function createNomeMedia() {
  let h3 = document.createElement('h3');
  h3.textContent = `A média de ${nome} é   ${media}`;
  return h3;
}

function createApvRpv() {
  let h2 = document.createElement('h2');
  if (media > 7) {
    h2.textContent = 'Aprovado';
    h2.style.color = 'Green';
    return h2;
  } else {
    h2.textContent = 'Reprovado';
    h2.style.color = 'Red';
    return h2;
  }
}

exRes.append(createNomeMedia());
exRes.append(createApvRpv());
