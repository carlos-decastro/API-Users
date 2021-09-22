# API de Usuários

API de usuários utilizando as seguintes tecnologias e extensões: **NodeJS, PostgreSQL, Docker, Yarn, ESLint**.

 - [Sobre](#sobre)
 - [Pré Requisitos](#pré-requisitos)
 - [Como Usar](#como-usar)
 - [Testes](#testes)
 - [Tecnologias](#tecnologias)	

## Sobre

Projeto realizado afim de demonstrar meus conhecimentos sobre a criação de API Restful utilizando Node.js e SQL.

Foi utilizado o UUID para os IDs no banco de dados em vez de numerais expostos.

## Pré-requisitos

É necessário instalar ou possuir instalado o [Node.js](https://nodejs.org/en/) e para facilitar o [Docker](https://www.docker.com/) e [Insomnia](https://insomnia.rest/), porém ambos podem ser trocados por softwares de suas preferencias.

## Como Usar

- Para iniciar, realize o download do repositório ou clone o mesmo.
- Caso não tenha, instale o **Node.js versão LTS**.
- Após realize a instalação do yarn utilizando o comando **npm install -g yarn**
- Caso não tenha instalado, instale o Docker e após instalado, abra o **CMD** e execute o seguinte comando para baixar e criar um container do PostgreSQL.
	- **docker run -–name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5422:5432 -d postgres**
- Terminada a instalação digite o seguinte comando: 
	- **docker exec -it pg bash**
- Este comando irá entrar no terminal do PostgreSQL para que possamos executar os comandos SQL e criar o nosso banco de dados.
- Execute o comando **psql -U root** para autenticação. 
- Realize os comandos SQL que estão no arquivo **schema.sql** dentro da pasta **database** do projeto.
	- OBS: Executar primeiro o comando da linha 1, depois seguir as informações que constam nos comentários do arquivo.
- Abra o cmd na pasta do projeto utilizando o VSCode e execute o comando **yarn dev** para iniciar o servidor do projeto.
- Com o servidor online é possível iniciar os testes de rotas e funcionamento da API.

## Testes

- Para realizar os testes é recomendado o uso do **Insomnia** ou algum software semelhante.
- Após realizar os passos de [como usar](#como-usar), basta realizar o cadastro das seguintes rotas no **Insomnia** para testes: 

		CREATE USER: Rota POST http://localhost:3000/users - Formato JSON
				{
					"first_name": "",
					"last_name": "",
					"email": "",
					"phone": "",
					"address": ""
				}
				
		LIST USERS: Rota GET http://localhost:3000/users - Formato NO BODY
				Foi implementado a ordenação crescente e decrescente, 
				por padrão ele sempre vem em formato crescente, 
				caso queira mudar para decrescente utilizar ?orderBy=desc após o /users
				
		GET USER: Rota GET http://localhost:3000/users/"Inserir o ID desejado" - Formato NO BODY	
		
		DELETE USER: Rota DELETE http://localhost:3000/users/"Inserir o ID desejado" - Formato NO BODY
			
		UPDATE USER: Rota PUT http://localhost:3000/users/"Inserir o ID desejado" - Formato JSON
				{
					"first_name": "",
					"last_name": "",
					"email": "",
					"phone": "",
					"address": ""
				}
		
## Tecnologias

As seguintes tecnologias foram utilizadas nesse projeto: 

 - [Node.js](https://nodejs.org/en/)
 -	[PostgreSQL](https://www.postgresql.org/)
 -	[Docker](https://www.docker.com/)
 -	[Insomnia](https://insomnia.rest/)
 
Também foram utilizadas às seguintes extensões neste projeto:
 - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
 - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
