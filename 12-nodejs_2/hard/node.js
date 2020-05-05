let Joi = require('joi');
let express = require('express')
let app = express()
let data = require('../hard/employees.json')
app.use(express.json());

app.get('/hello', function (req, res) {
    res.send("Hello World")
})
app.get('/employees', (req, res) => {
    if (!data) {
        res.status(404).send(`EMPLOYEE NOT FOUND`)
    }
    res.send(data)
})
app.get('/employees/:id', function (req, res) {
    const sData = data.employees.find(function (employees) {
        return parseInt(req.params.id) === employees.id
    })
    if (!sData) {
        res.status(404).send(`INVALID EMPLOYEE ID`)
    }
    res.send(sData)
})
app.post('/employees', (req, res) => {
    const { error } = validateEmployees(req.body);
if(error){
    res.status(400).send(error.detail[0].message);
    return;
}
    
    const employees = {
        id: employees.length + 1,
        name: req.body.name
    };
    employees.push(employees);
    res.send(employees);
});
app.put('/employees/:id', (req, res) => {
const employees = employees.find(c => c.id === parseInt(req.params.id));
if (!employees) res.status(404).send('EMPLOYEE WITH ID NOT FOUND')


const { error } = validateEmployees(req.body);
if(error){
    res.status(400).send(error.detail[0].message);
    return;
}

employees.name = req.body.name
res.send(employees)

});

function validateEmployees(employees)
let schema = {
    name: Joi.string().min(3).required()
};

return Joi.validate(employees, schema);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})