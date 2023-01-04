const express = require('express');
const server = express();
const flowerRouter = express.Router();
const port = process.env.PORT || 4242;
const flowers = require('./src/flowers');

flowerRouter.route('/flowers').get((req, res) => {
  flowers.getFlowers(req, res);
});

server.use('/api', flowerRouter);

server.get('/', (req, res) => {
  res.send('Hello Express!');
});

server.listen(port, () => {
  console.log(`Express Server is running in ${port}`);
});
