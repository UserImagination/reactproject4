const express = require('express');
const cors = require('cors')
const app = express();
const { v4: uuidv4 } = require('uuid');


const random_uuid = uuidv4();
app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: random_uuid,
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));