import { addWorkoutInfo, addFoodIntake } from "../src/index.js"


document.addEventListener('DOMContentLoaded', () => {


    var submitWorkout = document.getElementById("submitWorkout");
    submitWorkout.onclick = function(event){
        event.preventDefault();
        var muscleGroupValue = document.getElementById("muscleGroup").value;
        var exerciseValue = document.getElementById("exercise").value;
        var setsValue = document.getElementById("sets").value;
        var repsValue = document.getElementById("reps").value;
        var workoutWeightValue = document.getElementById("weight").value;

        const workoutInfo = {
            exercise: exerciseValue,
            reps: repsValue,
            sets: setsValue,
            weight: workoutWeightValue,
        }
        addWorkoutInfo(muscleGroupValue, workoutInfo)
    }

    var sumbitFoodIntake = document.getElementById("sumbitFoodIntake");
    sumbitFoodIntake.onclick = function(event){
        event.preventDefault();

        var foodCategoryValue = document.getElementById("foodCategory").value;
        var foodNameValue = document.getElementById("foodName").value;
        var foodCaloriesValue = document.getElementById("foodCalories").value;
        var foodProteinValue = document.getElementById("foodProtein").value;
        var foodCarbsValue = document.getElementById("foodCarbs").value;
        var foodFatsValue = document.getElementById("foodFats").value;


        const foodIntakeInfo = {
            foodName: foodNameValue,
            calories: foodCaloriesValue,
            protein: foodProteinValue,
            carbs: foodCarbsValue,
            fats: foodFatsValue
        }
        addFoodIntake(foodCategoryValue, foodIntakeInfo)
    }

});


//addWorkoutInfo("Jimmy123", muscleGroup.value, workoutInfo)