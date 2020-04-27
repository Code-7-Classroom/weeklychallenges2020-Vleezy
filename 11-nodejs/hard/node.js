const express = require('express');
const app = express();

const employees = [
    {id: 1, name: 'Bob', salary: 5000, building: "A"},
    {id: 2, name: 'Bill', salary: 5000, building: "A"},
    {id: 3, name: 'Ben', salary: 5000, building: "A"},
    {id: 4, name: 'Beth', salary: 5000, building: "A"},
    {id: 5, name: 'Betty', salary: 5000, building: "A"},
    {id: 6, name: 'Boe', salary: 5000, building: "A"},
    {id: 7, name: 'Blake', salary: 5000, building: "A"},
    {id: 8, name: 'Brook', salary: 5000, building: "A"},
    {id: 9, name: 'Beatrice', salary: 5000, building: "A"},
    {id: 10, name: 'Bella', salary: 5000, building: "A"}
];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/employees', (req, res) => {
    res.send(employees);
});

app.get('/employees/:id', (req, res) => {
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if (!employee) res.status(404).send('Employee not found');//404 ObJ NOT Found
    res.send(employee);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


//## Section 4 videos to complete Hard Challenge