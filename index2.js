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
    })

    app.get("/calculate/api/plus", (req, res)=>{
        const number1 = parseFloat(req.query.number1);
        const number2 = parseFloat(req.query.number2);

        if (isNaN(number1) || isNaN(number2)) {
        return res.json({ "result": "Error : ขอเลขตะพี่" });
    }
        res.json({"result": number1 + number2})
    })

    app.get("/calculate/api/minus", (req, res)=>{
        const number1 = parseFloat(req.query.number1);
        const number2 = parseFloat(req.query.number2);

        if (isNaN(number1) || isNaN(number2)) {
        return res.json({ "result": "ขอเลขตะพี่" });
    }
        res.json({"result": number1 - number2})
    })

    app.get("/calculate/api/times", (req, res)=>{
        const number1 = parseFloat(req.query.number1);
        const number2 = parseFloat(req.query.number2);

        if (isNaN(number1) || isNaN(number2)) {
        return res.json({ "result": " ขอเลขตะพี่" });
    }
        res.json({"result": number1 * number2})
    })

    app.get("/calculate/api/divine", (req, res)=>{
        const number1 = parseFloat(req.query.number1);
        const number2 = parseFloat(req.query.number2);

        if (isNaN(number1) || isNaN(number2)) {
        return res.json({ "result": " ขอเลขตะพี่" });
    }
        if (number2 === 0) {
            return res.json({ "result": "หาค่าไม่ได้" })
        }    
        res.json({ "result": number1 / number2 })
    })

app.listen(3000, () => { 
    console.log("Server starts successfully"); 
})