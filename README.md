# challenger

Este repositório armazena os códigos do desafio de conexão do front-end com o back-end.

## Começando do zero

Basta clonar o repositório

```
git clone git@github.com:ricand7/challenger.git


### Estrutura
### Dependencias
### Ordem de instalação Back-End- Siga os passos 

1 - npm init -y

Na chave scripts adicione a seguinte linha:
"start": "node index.js"

Ficara assim:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },

## Preparando o Banco


2 - npm i express mongodb

3 - npm i nodemon -D

4 -  No Vs code Abra um novo Playground , cole estes comandos abaixo e clique para executar:

const database = 'challenger';
const collection = 'tasks';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);


5 - Abra outro Playground cole e execute estes comandos. 

const database = 'challenger';

use(database);

db.tasks.insertOne([
    { "task": "ler livro", "status": "pending" },
  ])

6 -  No terminal execute npm start


7 - Testes 
npm install -D mocha chai chai-http sinon mongodb-memory-server@6