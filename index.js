function calculate() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const operator = document.getElementById('operator').value;

    if (number1 === "" || number2 === "") {
        document.getElementById('result').innerText = "Result : ผมขอเลขได้ป่าวพี่บ่าว";
        return; 
    }
    if (operator === '+' ){
        fetch(`http://localhost:3000/calculate/api/plus?number1=${number1}&number2=${number2}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('result').innerText = "Result :" + data.result; });
    } else if (operator === '-' ){
        fetch(`http://localhost:3000/calculate/api/minus?number1=${number1}&number2=${number2}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('result').innerText = "Result :" + data.result; });
    } else if (operator === '*' ){
        fetch(`http://localhost:3000/calculate/api/times?number1=${number1}&number2=${number2}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('result').innerText = "Result :" + data.result; });
    } else if (operator === '/' ){
        fetch(`http://localhost:3000/calculate/api/divine?number1=${number1}&number2=${number2}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('result').innerText = "Result :" + data.result; });    
    }    
}        
  