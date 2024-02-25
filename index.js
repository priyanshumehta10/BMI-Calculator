const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results');
    result.innerHTML = ''; // Clear previous content

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
    }
});
    