**Disciplina:** **DS3**

***Nomes: Fernanda C. Rodrigues Ferreira e Isabelle Queiroz Rodrigues***

**O Projeto pedido pelo professor foi para montarmos uma API, onde nos criamos um cenario real de desenvolvimento onde o Front-end e O
Back-End são executados em maquinas diferentes e se comunicam pela rede. O professor deu a oportunidade de  tema livre, 
entao fizemos MARVEL UNIVERSE. Onde a nossa API mostrava as imagens de acordo com a pesquisa da pessoa.**

**🤗 GRUPOS DISPONIVEIS NA NOSSA API:**
**trio, guys, blondes, fantastic e evil**

## 📝 Descrição do Projeto
O projeto consiste em um ecossistema cliente-servidor:
* **Back-end:** Um servidor Node.js (Express) responsável por servir os arquivos da aplicação e gerenciar o tráfego de dados. Ele foi configurado para "escutar" conexões de qualquer dispositivo na rede local.
* **Front-end:** Uma interface moderna em Dark Mode que consome dados de forma assíncrona. O diferencial é que o Front-end é acessado por uma máquina diferente daquela que hospeda o servidor, simulando a arquitetura real da internet.
* **Funcionalidade:** A aplicação permite a busca em tempo real com autocomplete e a exibição de cards detalhados contendo a imagem oficial e a descrição do personagem escolhido de acordo com a pesquisa do usuário.

## 🛠️ Tecnologias Utilizadas
* **Node.js:** Ambiente de execução do servidor.
* **Express.js:** Framework para criação das rotas e servidor de arquivos estáticos.
* **JavaScript:** Lógica de consumo da API externa (Marvel Gateway) e manipulação do DOM.
* **CSS:** Estilização responsiva com uso de fontes externas (Poppins e Bebas Neue).
* **Fetch API:** Para comunicação assíncrona e requisições à API.
* **HTML**: Estruturação semântica da aplicação.*
* **JSON**: é um formato leve de troca de dados, baseado em texto, fácil para humanos lerem e máquinas processarem.

## 🚀 Instruções para Executar o Backend (Máquina 1)
1. No computador que servirá como servidor, abra o terminal na pasta do projeto.
2. Certifique-se de que o Node.js está instalado e execute:
   ```bash
   npm install express
**Bash**
node server.js

***Verificação de Rede: - O terminal entrará em estado de escuta (ficará parado).**

Descubra o IP local desta máquina (digite ipconfig no Windows e anote o campo Endereço IPv4).

**2**-Acesso e Execução do Frontend (Máquina Cliente)
Esta máquina acessará a aplicação de forma remota através da rede.

**1**-Conexão de Rede: Certifique-se de que este computador está conectado no mesmo Wi-Fi ou roteador que a Máquina Servidora.

**2**-Acesso via Navegador: Abra o Google Chrome ou Firefox e, na barra de endereços, digite o IP da Máquina Servidora seguido da porta 3000.

**3**-Formato: http://[IP-DA-MAQUINA-SERVIDORA]:3000

**4**-Exemplo Real: http://192.168.1.15:3000

**5**-Interação: O navegador carregará a interface Marvel Universe vinda do servidor remoto. Ao realizar uma busca, o Frontend processará a requisição e exibirá os dados e imagens em tempo real.***
