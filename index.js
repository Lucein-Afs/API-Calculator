function calculate() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const operator = document.getElementById('operator').value;

    if (number1 === "" || number2 === "") {
        document.getElementById('result').innerText = "Result : ผมขอเลขได้ป่าวพี่บ่าว";
        return; 
    }

        fetch(`http://localhost:3000/calculate?number1=${number1}&number2=${number2}&operator=${encodeURIComponent(operator)}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = "Result : " + data.result;
        })
}