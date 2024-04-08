const form = document.querySelector("form");
const BmiResult = document.querySelector("#BmiResult")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const result = document.querySelector('#results');

    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);

    result.innerHTML = ''; // Clear previous result
    BmiResult.innerHTML= "";
    if (height === "" || height < 0 || isNaN(height)) {
        let addResult = document.createTextNode("Please give a valid height");
        result.appendChild(addResult);
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        let addResult = document.createTextNode("Please give a valid weight");
        result.appendChild(addResult);
    } else {
        let calculation = (weight / ((height * height) / 10000)).toFixed(2);
        let addResult = document.createTextNode(`Your BMI is: ${calculation}`);
        result.appendChild(addResult);
        if(calculation < 18.6){
            let addBmiResult = document.createTextNode(`Under Weight ${calculation}`)
            BmiResult.appendChild(addBmiResult);
        }else if(calculation >18.6 && calculation < 24.9){
            let addBmiResult = document.createTextNode(`Normal Weight ${calculation}`)
            BmiResult.appendChild(addBmiResult);
        }else if(calculation > 24.9){
            let addBmiResult = document.createTextNode(`Over weight ${calculation}`)
            BmiResult.appendChild(addBmiResult);
        }
        BmiResult
        
    }

    // Clear input fields
    heightInput.value = '';
    weightInput.value = '';
});
