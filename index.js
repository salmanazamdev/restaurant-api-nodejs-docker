const express = require('express');
const welcome = require('./functions/welcome');
const signup = require('./functions/signup');
const login = require('./functions/login');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/', welcome);
app.post('/signup', signup);
app.post('/login', login);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
