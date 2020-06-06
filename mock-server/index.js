const jsonServer = require('json-server');

// ...

const MAX_TODOS = 200;
let nextTodoId = MAX_TODOS + 1;;

// ...

const server        = jsonServer.create();
const router        = jsonServer.router('db.json');
const middlewares   = jsonServer.defaults();

server.use(middlewares);

// ...

server.use(jsonServer.bodyParser)

server.post('/todos', (req, res, next) => {
    if (!req.body.title) {
        return res.status(400).json({ reason: 'Cannot create todo with empty title' });
    }

    return res.json({
        id: nextTodoId++,
        title: req.body.title
    });
});

server.delete('/todos/:id', (req, res, next) => {
    return res.status(req.params.id <= 200 ? MAX_TODOS : 404).json({});
});

// ...

server.use(router);
server.listen(3000, () => console.log('Mock JSON server is running @ localhost:3000'));