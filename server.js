const app = require('./app');

const PORT = 9000;

// listen is a method from express
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));