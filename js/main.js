
function farmaciaUno() {
  id = 1;
  cajas1 = 100;
  jarabe1 = 100;
  expectorante1 = 150;
  var subTotal = ((cajas1 * 2) + jarabe1 + expectorante1);
  var retencionIva = subTotal * 0.1;
  return subTotal + retencionIva;
}

function farmaciaDos() {
  id = 2;
  cajas2 = 90;
  jarabe2 = 140;
  expectorante2 = 100;
  colectivo = 5;
  var subTotal = ((cajas2 * 2) + jarabe2 + expectorante2 + colectivo);
  var retencionIva = subTotal * 0.15;
  return subTotal + retencionIva;
}

function compare() {
  dinero = 500
  if (farmaciaDos() < farmaciaUno()) {
    minimo = farmaciaDos();
  } else {
    minimo = farmaciaUno();
  }
  total = dinero - minimo;
  return total;
}

compare();
console.log('En la farmacia ' + id + ' Pablo se ahorra  $' + total);
$("#validate").text('En la farmacia ' + id + ' Pablo se ahorra  $' + total);

farmaciaUno();
$("#farmacia1_titulo").text('Farmacia ' + id);
$("#farmacia1_caja").text('Pastillas contra malestar general ' + cajas1 + '$ c/u');
$("#farmacia1_jarabe").text('Jarabe para la tos ' + jarabe1 + '$ c/u');
$("#farmacia1_expecto").text('Expectorante para la flema ' + expectorante1 + '$ c/u');
$("#farmacia1_total").text('El total de la compra es de: ' + farmaciaUno() + '$');

farmaciaDos();
$("#farmacia2_titulo").text('Farmacia ' + id);
$("#farmacia2_caja").text('Pastillas contra malestar general ' + cajas2 + '$ c/u');
$("#farmacia2_jarabe").text('Jarabe para la tos ' + jarabe2 + '$ c/u');
$("#farmacia2_expecto").text('Expectorante para la flema ' + expectorante2 + '$ c/u');
$("#farmacia2_colectivo").text('Precio de boleto del colectivo ' + colectivo + '$');
$("#farmacia2_total").text('El total de la compra es de: ' + farmaciaDos() + '$');
