let inputVal=document.querySelector("#formInput");
let fromTemp=document.querySelector("#formunit");
let toTemp=document.querySelector("#tounit");
let convertor=document.querySelector("#submit");
let outputVal=document.querySelector(".temp");

convertor.addEventListener("click", () => {
    let input = parseFloat(inputVal.value);
    let from = fromTemp.value;
    let to = toTemp.value;
    let result;

    if (from === "Fahrenheit" && to === "celcius") {
        result = (input - 32) * 5 / 9;
    } else if (from === "Fahrenheit" && to === "Kelvin") {
        result = (input - 32) * 5 / 9 + 273.15;
    } else if (from === "celcius" && to === "Fahrenheit") {
        result = (input * 9 / 5) + 32;
    } else if (from === "celcius" && to === "Kelvin") {
        result = input + 273.15;
    } else if (from === "Kelvin" && to === "celcius") {
        result = input - 273.15;
    } else if (from === "Kelvin" && to === "Fahrenheit") {
        result = (input - 273.15) * 9 / 5 + 32;
    } else {
        result = input; // If from and to units are the same
    }

    outputVal.innerText = `Result: ${result.toFixed(2)} ${to}`;
});