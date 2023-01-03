const app = require('./app');

const PORT = 9000;

// listen is a method from express
app.listen(9000, () => console.log(`app listening on port ${PORT}`));