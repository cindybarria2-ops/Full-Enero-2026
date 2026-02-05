const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;
app.use(cors());

app.use(express.json());

app.get('/mensajes', (req, res) => {
    res.json("Hola desde Express");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`); 
});