import express from 'express';

const app = express();

app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vêm na própria rota que identifica um recurso 
// Query Param: Parâmetros que vêm na própria rota geralmente opcionais para filtros, paginação...
// Request Body: Parâmetros para criação/atualização de informações

app.get('/', (request, response) => {
    return response.json({message: 'Hello world'});
});

app.listen(3333);