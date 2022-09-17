var carta1 = {
  nome: "gon",
  imagem: "https://www.anime-internet.com/content/images/2021/10/WhatsApp-Image-2021-10-15-at-21.47.11--2--1.jpeg",
  atributos: {
  ataque:  10,
  defesa:  9,
  magia:  6
  }
};

var carta2 = {
  nome: "killua",
  imagem: "https://nerdhits.com.br/wp-content/uploads/2022/07/godspeed-killua-hunter-x-hunter-1200x675.jpg",
  atributos: {
  ataque:  6,
  defesa:  10,
  magia:  9
  }
};

var carta3 = {
  nome: "kurapika",
  imagem: "https://ovicio.com.br/wp-content/uploads/2022/07/20220725-ovicio-hunter-hunter-kurapika-555x555.jpg",
  atributos: {
  ataque:  9,
  defesa:  6,
  magia:  10
  }
};

var carta4 = {
  nome: "hisoka",
  imagem: "http://vignette2.wikia.nocookie.net/hunterxhunter/images/4/43/Hisoka_episode_16.PNG/revision/latest?cb=20130422161849",
  atributos: {
  ataque:  10,
  defesa:  8,
  magia:  9
  }
};

var cartas = [carta1, carta2, carta3, carta4];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 4);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 4);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 4);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador()
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  
  //  console.log(divResultado);
  //divResultado.innerHTML = htmlResultado;
  
  
  if (valorCartaJogador > valorCartaMaquina) {
   divResultado.innerHTML = "<p class='resultado-final'>Venceu</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
   divResultado.innerHTML = "<p class='resultado-final'>Empatou</p>";
  } else {
   divResultado.innerHTML = "<p class='resultado-final'>Perdeu</p>";
  }

  
  document.getElementById('btnJogar').disabled = true
  exibirCartaMaquina()
  //console.log(cartaMaquina);
}
  //var elementoResultado = document.getElementById("resultado")
  //var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  //var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  
  // if (cartaJogador > valorCartaMaquina){
  //   elementoResultado.innerHTML = "Você venceu"
  //   } else if (valorCartaMaquina > valorCartaJogador){
  //     elementoResultado.innerHTML = "Você perdeu, a carta da maquina é maior"
  //   } else { elementoResultado.innerHTML = "Empatou";
  //   }
 // console.log(cartaMaquina);
//}
  
//  console.log(atributoSelecionado);
  
  //console.log(cartaJogador.atributos[atributoSelecionado])

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHtml = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
  divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHtml = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
  divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";
}