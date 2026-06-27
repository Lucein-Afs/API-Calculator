const express = require('express')
const cors = require('cors')

const app = express()  
app.use(express.json());
app.use(cors())

app.get("/calculate", (req, res) => {
    const number1 = parseFloat(req.query.number1);
    const number2 = parseFloat(req.query.number2);
    const operator = req.query.operator;
    let finalResult = "";

    if (operator === '+') {finalResult = number1 + number2;
    }else if (operator === '-') {
        finalResult = number1 - number2;
    }else if (operator === '*') {
        finalResult = number1 * number2;
    }else if (operator === '/') {
        if (number2 === 0) {
            finalResult = "หาค่าไม่ได้";
        }else finalResult = number1 / number2;
    }

    res.json({ "result": finalResult })
})

app.listen(3000, () => { 
    console.log("Server starts successfully"); 
})