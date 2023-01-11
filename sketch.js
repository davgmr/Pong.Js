//pong.js

//variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 17;
let raio = diametro /2;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;

//variaveis do oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let wRaqueteOponente = 10
let hRaqueteOponente = 90


//velocidade da Bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

//velocidade do oponente
let velocidadeYOponente;

let chanceDeErrar = 0;


//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;


//funcao config som
function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

// funçao de config da tela
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

//funçao de desenhos
function draw() {
  background(0);// 1 - Desenha o background 
  mostraBolinha();// 2 - Desenha a bolinha
  movimentaBolinha();// 3 - Movimenta a Bolinha
  verificaColisaoBolinha();// 4 - Verifica colisão na borda
  mostraRaquete(xRaquete, yRaquete, wRaquete, hRaquete);// 5 - desenha a raquete
  movimentaRaquete();// 6 - Movimenta a raquete
  verificaColisaoRaquete(xRaquete, yRaquete, wRaquete, hRaquete);// 7 - verifica colisão na raquete
  mostraRaquete(xRaqueteOponente, yRaqueteOponente, wRaqueteOponente, hRaqueteOponente);// 8 - desenha a raquete do oponente
  movimentaRaqueteOponente();// 9 - movimenta oponente
  verificaColisaoRaqueteOponente();// 10 - verifica colisão do oponente
  incluiPlacar();// 11 - mostra placar do jogo
  marcaPonto();// 12 - marca os pontos do jogo
  calculaChanceDeErrar()
  bolinhaNaoFicaPresa()
  }


//funçoes da draw

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBolinha(){
  if (xBolinha + raio > width || 
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1 
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1
  }
}

function mostraRaquete(x,y,w,h){
  rect(x,y,w,h);
}

function movimentaRaquete(){
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - hRaqueteOponente / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
  calculaChanceDeErrar()
}



function verificaColisaoRaquete(x,y,w,h){
  if (xBolinha - raio < x + w
  && yBolinha - raio < y + h
  && yBolinha + raio > y){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}


function verificaColisaoRaqueteOponente(){
  if (xBolinha + raio > xRaqueteOponente + wRaqueteOponente
  && yBolinha - raio < yRaqueteOponente + hRaqueteOponente
  && yBolinha - raio > yRaqueteOponente){
    velocidadeXBolinha *= -1;
    raquetada.play();
 }
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(0,100,0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(0,100,0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}
  
function marcaPonto(){
  
  if (xBolinha > 590) {
        meusPontos += 1;
    ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
      ponto.play();
    }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
  
 function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
