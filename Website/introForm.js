import { addUserInfo } from "../src/index.js"



document.addEventListener('DOMContentLoaded', (event) => {

    // Define sliders
    const sliderAge = document.getElementById("age");
    const sliderHeight = document.getElementById("height");
    const sliderWeight = document.getElementById("weight");
    const sliderBodyFat = document.getElementById("bodyFat");

    // Define value divs
    const ageValueDiv = document.getElementById("ageValue");
    const heightValueDiv = document.getElementById("heightValue");
    const weightValueDiv = document.getElementById("weightValue");
    const bodyFatValueDiv = document.getElementById("bodyFatValue");

    // Event listeners for sliders
    sliderAge.addEventListener('input', () => {
        ageValueDiv.textContent = `Age: ${sliderAge.value}`;
    });

    sliderHeight.addEventListener('input', () => {
        heightValueDiv.textContent = `Height: ${sliderHeight.value}`;
    });

    sliderWeight.addEventListener('input', () => {
        weightValueDiv.textContent = `Weight: ${sliderWeight.value}`;
    });

    sliderBodyFat.addEventListener('input', () => {
        bodyFatValueDiv.textContent = `Body Fat: ${sliderBodyFat.value}`;
    });



    document.getElementById("submitUserInfo").addEventListener('click', (event) =>{
        event.preventDefault();

        var userGender = document.getElementById("gender").value;
        var userAge = sliderAge.value;
        var userHeight = sliderHeight.value;
        var userBodyWeight = sliderWeight.value;
        var userBodyFat = sliderBodyFat.value;

        const userInfo = {
            gender: userGender,
            age: userAge,
            height: userHeight,
            weight: userBodyWeight,
            bodyFat: userBodyFat
        }

        addUserInfo(userInfo);
    })
});
