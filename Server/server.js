const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('port is running', PORT)
});

let inputValues = []


app.get('/calculation', (req, res) => {
    res.send(inputValues)
});


app.post('/calculation', (req, res) => {
    // console.log('this is an array', response)
    total(req.body);
    // inputValues.push(response)
    res.sendStatus(201)
});

function total (response){
    // if ( response.operator === '+'){
    //     response.total = Number(response.num1) + Number(response.num2);
    // };

    switch (response.operator)
    case '+':
        

    
    
    
    inputValues.push(response)
    console.log('calculator', response);
}