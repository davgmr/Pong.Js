# Pong Game - p5.js

Este projeto é um jogo simples de Pong, desenvolvido em JavaScript utilizando a biblioteca p5.js. Nele, o jogador enfrenta o computador, controlando uma raquete que deve impedir que a bolinha ultrapasse a borda do lado esquerdo da tela.

## Funcionalidades

- **Jogador controlado por teclas**: Utilize as teclas `W` (para cima) e `S` (para baixo) para controlar a raquete do jogador.
- **Inteligência Artificial do oponente**: O oponente segue a bolinha, tentando defender a sua borda.
- **Placar**: O placar é atualizado cada vez que um jogador marca um ponto.
- **Sons**: Efeitos sonoros são reproduzidos quando a bolinha colide com a raquete e quando um ponto é marcado.

## Como Jogar

1. **Movimentação**: 
   - Pressione `W` para mover a raquete para cima.
   - Pressione `S` para mover a raquete para baixo.

2. **Objetivo**:
   - O objetivo é rebater a bolinha com sua raquete, evitando que ela ultrapasse a borda esquerda.
   - O jogo continua até que um dos jogadores (você ou o oponente) alcance um número de pontos estipulado ou até você fechar o jogo.

## Estrutura do Código

- **Variáveis Globais**:
  - `xBolinha`, `yBolinha`, `diametro`, `raio`: Variáveis que controlam a posição e o tamanho da bolinha.
  - `xRaquete`, `yRaquete`, `wRaquete`, `hRaquete`: Variáveis da posição e dimensões da raquete do jogador.
  - `xRaqueteOponente`, `yRaqueteOponente`, `wRaqueteOponente`, `hRaqueteOponente`: Variáveis da raquete do oponente.
  - `velocidadeXBolinha`, `velocidadeYBolinha`: Velocidade da bolinha nos eixos X e Y.
  - `meusPontos`, `pontosDoOponente`: Armazenam a pontuação de cada jogador.
  - `raquetada`, `ponto`, `trilha`: Sons que são carregados no jogo.

- **Funções Principais**:
  - `preload()`: Carrega os sons utilizados no jogo.
  - `setup()`: Define o tamanho do canvas e inicia a trilha sonora.
  - `draw()`: Chama todas as funções responsáveis pela execução do jogo (desenho, movimento, colisões, placar, etc).

- **Funções Auxiliares**:
  - `mostraBolinha()`, `movimentaBolinha()`: Desenham e movimentam a bolinha.
  - `verificaColisaoBolinha()`: Verifica colisão da bolinha com as bordas da tela.
  - `mostraRaquete()`, `movimentaRaquete()`: Desenham e movimentam a raquete do jogador.
  - `mostraRaqueteOponente()`, `movimentaRaqueteOponente()`: Desenham e movimentam a raquete do oponente.
  - `verificaColisaoRaquete()`, `verificaColisaoRaqueteOponente()`: Verificam colisões da bolinha com as raquetes.
  - `incluiPlacar()`: Exibe o placar do jogo.
  - `marcaPonto()`: Adiciona pontos ao jogador ou ao oponente quando a bolinha ultrapassa as bordas laterais.
  - `calculaChanceDeErrar()`: Ajusta a chance de erro do oponente com base no placar.
  - `bolinhaNaoFicaPresa()`: Impede que a bolinha fique presa no canto da tela.

## Requisitos

- **Biblioteca p5.js**: O jogo foi desenvolvido utilizando a biblioteca p5.js, que precisa ser carregada no HTML da página.
- **Sons**: Três arquivos de áudio são utilizados (`trilha.mp3`, `ponto.mp3`, `raquetada.mp3`). Eles devem estar na mesma pasta do código.

## Como Rodar o Projeto

1. Certifique-se de que você tem a biblioteca p5.js instalada ou carregue-a via CDN no arquivo HTML.
2. Coloque os arquivos de som (`trilha.mp3`, `ponto.mp3`, `raquetada.mp3`) na mesma pasta do arquivo JavaScript.
3. Execute o arquivo HTML em um navegador moderno e comece a jogar!

## Controles

- **W**: Mover raquete para cima.
- **S**: Mover raquete para baixo.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ao código ou novas funcionalidades! Para isso, basta fazer um fork deste repositório e abrir um pull request com suas mudanças.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
