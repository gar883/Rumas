const express = require('express');
const app = express();


app.use(express.json());

const hamburguesas = [
    {id:1, nombre: 'Clasica', ingredientes: [ 'Pan de papa', 'Doble carne de 100g c/u', 'Doble chedar', 'Cebolla' ,'Tomate', 'Salsa rumas']},
    {id:2, nombre: 'Triple Qué', ingredientes:[ 'Pan de papa', 'Tres carnes de 70g c/u', 'Triple Chedar', 'Ketchup', 'Mostaza', 'Cebolla']},
    {id:3, nombre: 'Fried Onion', ingredientes:[ 'Pan de papa', 'doble carne de 100g c/u', 'doble chedar', 'Salsa Rumas' ], bacon: false}, 
    {id:4, nombre: 'Cheese Burguer', ingredientes:['Pan de papa', 'Doble carne de 100g c/u', 'Doble chedar', 'Salsa Rumas' ], bacon: false}
]

app.get('/', (req, res) => {
    res.send('NODE JS API');
});

app.get('/api/hamburguesas', (req, res) => {
    res.send(hamburguesas);
});

app.get('/api/hamburguesas/:id', (req, res) => {
    const hamburguesa = hamburguesas.find(c => c.id === parseInt(req.params.id));
    res.send(hamburguesa);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));