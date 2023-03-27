const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
server.use((req, res, next) => {
  if (req.method === 'POST' && req.url === '/list') {
    const db = router.db;
    const users = db.get('list').value();
    const { personalNumber } = req.body;
    const existingUser = users.find(user => user.personalNumber === personalNumber);
    if (existingUser) {
      return res.status(409).json({ error: 'User with this personal number already exists' });
    }
  }
  next();
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});