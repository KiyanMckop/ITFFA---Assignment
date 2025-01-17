document.getElementById('food-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const quantity = document.getElementById('quantity-select').value;
    const foodItem = document.getElementById('food-select').value;
    const query = `${quantity} ${foodItem}`;
    const appId = '63fcc3e2'; 
    const appKey = '83674bb4d6f5e806d5e3b4132685e11d'; 

    fetch(`https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            if (data.totalNutrients) {
                displayNutritionInfo(data);
            } else {
                document.getElementById('nutrition-info').innerHTML = '<p>No nutritional information found.</p>';
            }
        })
        .catch(error => console.error('Error:', error));
});

function displayNutritionInfo(data) {
    const nutrients = data.totalNutrients;

    const calories = data.calories ? data.calories : 'N/A';
    const fat = nutrients.FAT ? `${nutrients.FAT.quantity} ${nutrients.FAT.unit}` : 'N/A';
    const carbs = nutrients.CHOCDF ? `${nutrients.CHOCDF.quantity} ${nutrients.CHOCDF.unit}` : 'N/A';
    const protein = nutrients.PROCNT ? `${nutrients.PROCNT.quantity} ${nutrients.PROCNT.unit}` : 'N/A';

    const info = `
        <h2>Nutrition Information for ${data.ingredients[0].text}</h2>
        <p>Calories: ${calories}</p>
        <p>Fat: ${fat}</p>
        <p>Carbs: ${carbs}</p>
        <p>Protein: ${protein}</p>
    `;
    document.getElementById('nutrition-info').innerHTML = info;
}
