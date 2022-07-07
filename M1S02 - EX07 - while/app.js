const votos = [];

function pushVoto(voto) {
  voto = window
    .prompt(
      'Qual sua avaliação da série Stranger Things. Responda com ruim, bom ou excelente'
    )
    .toUpperCase();
  if (voto !== 'BOM' && voto !== 'RUIM' && voto !== 'EXCELENTE') {
    window.alert('Só são aceitos os valores bom, ruim, excelente');
    return pushVoto();
  } else {
    return votos.push(voto);
  }
}

while (votos.length < 4) {
  pushVoto();
}
let ruim = [];
ruim = votos.filter(function (ruim) {
  return ruim === 'RUIM';
});
window.alert(
  `O total de entrevistados que achou Stranger Things ruim é de: ${ruim.length} pessoa(s)`
);

// console.log(votos);
