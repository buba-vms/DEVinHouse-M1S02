let chosenProduct;
let productQuantity = 0;
let product;
function selectProduct() {
  product = Number(
    window.prompt(
      'Selecione as opções: 1-Hortifruti, 2-Laticínios, 3-Carnes, 4-Peixes, 5-Aves, 6-Fechar pedido'
    )
  );

  switch (product) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log(product);
      qtdProduct();
      selectProduct();
    case 6:
      break;
    default:
      window.alert(
        'Só serão aceitos as opções: 1-Hortifruti, 2-Laticínios, 3-Carnes, 4-Peixes, 5-Aves, 6-Fechar pedido '
      );
      selectProduct();
  }
}

function qtdProduct() {
  let quantity = Number(
    window.prompt('Digite a quantidade de produto desejado;')
  );
  if (quantity > productQuantity) {
    productQuantity = quantity;
    choseProduct();
  } else if (isNaN(quantity)) {
    // tirar duvida
    window.alert('Só são aceitos valores númericos');
    qtdProduct();
  }
}

function choseProduct() {
  switch (product) {
    case 1:
      chosenProduct = 'Hortifruti';
      break;
    case 2:
      chosenProduct = 'Laticínios';
      break;
    case 3:
      chosenProduct = 'Carnes';
      break;
    case 4:
      chosenProduct = 'Peixes';
      break;
    case 5:
      chosenProduct = 'Aves';
      break;
  }
}

selectProduct();
console.log(chosenProduct);
window.alert(
  `O produto selecionado com maior quantidade foi ${chosenProduct}: ${productQuantity}`
);
