const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');

const server = require('../index');
const { getConnection } = require('./connectionMock');

const { expect } = chai;

chai.use(chaiHttp);

describe('GET /tasks', () => {
 let connectionMock;
 before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock)
 })
  
 describe('Quando e fita a requisição get as tarefas sao renderizadas', () => {
  let response;
  before(async () => {
    response = await chai.request(server)
    .get('/tasks')
 
  })

  it('retorna as tarefas que estão no banco',() => {
    expect(response).to.have.status(200);
  })

  let obj = {
    "nametask": "varrer a sala ",
    "status": "pending"
  }

  it('Checa se um objeto é enviado ', () => {
    expect(JSON.stringify(obj)).to.include(`"status"`)
}); 
})
})
