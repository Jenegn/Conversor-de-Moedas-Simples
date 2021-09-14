function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmEuroNumerico * 6;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function Resultado() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);
  
    var valorEmDolar = valorEmEuroNumerico * 1.18;
    console.log(valorEmDolar);
  
    var elementoValorResultado = document.getElementById("valorResultado");
    var valorResultado = "O resultado em Dolar é $ " + valorEmDolar;
    elementoValorResultado.innerHTML = valorResultado;
  }
  