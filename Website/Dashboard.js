import { getAllItems } from "../src/index.js"

document.addEventListener('DOMContentLoaded', async () => {
    try {
      const items = await getAllItems("foodInfo");

        var dates = [];
        var group = [];
        var allCalories = [];

      for (let i = 0; i < items.length; i++){
        var date = new Date(items[i].id).getDate()
        dates.push(date);
      

        const category = Object.keys(items[i]);
        var totalCalories = 0;
        for (let a = 1; a < category.length; a++){
            const id = Object.keys(items[i][category[a]])
            group.push(category[a]);
            totalCalories = totalCalories + Number(items[i][category[a]][id].calories)
        }
        allCalories.push(totalCalories)
    }

    } catch (error) {
      console.error('Error getting items:', error);
    }

    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Sales',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    data: allCalories
                }]
            },
            options: {}
    });
    // Chart 1: Line Chart
   

    try {
        const items = await getAllItems("workoutInfo");
        console.log(items)
  
          var dates = [];
          var group = [];
          var allWeight = [];
  
        for (let i = 0; i < items.length; i++){
          var date = new Date(items[i].id).getDate()
          dates.push(date);
        
  
          const category = Object.keys(items[i]);
          var totalWeight = 0;
          for (let a = 1; a < category.length; a++){
              const id = Object.keys(items[i][category[a]])
              group.push(category[a]);
              totalWeight = totalWeight + Number(items[i][category[a]][id].weight) / category.length;
          }
          
          allWeight.push(totalWeight)
          console.log(allWeight)
      }
  
      } catch (error) {
        console.error('Error getting items:', error);
      }

    // Chart 2: Bar Chart
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: dates,
            datasets: [{
                label: '# of Votes',
                data: allWeight,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {}
    });

    try {
        const items = await getAllItems("foodInfo");        
        const lastDate = items.length - 1
  
          const category = Object.keys(items[lastDate]);
          var totalCarbs = 0;
          var totalFats = 0;
          var totalProtein = 0;
          for (let a = 1; a < category.length; a++){
              const id = Object.keys(items[lastDate][category[a]])
              group.push(category[a]);
              totalCarbs = totalCarbs + Number(items[lastDate][category[a]][id].carbs)
              totalFats = totalFats + Number(items[lastDate][category[a]][id].fats)
              totalProtein = totalProtein + Number(items[lastDate][category[a]][id].protein)
          }

  
      } catch (error) {
        console.error('Error getting items:', error);
      }

    // Chart 3: Doughnut Chart
    var ctx3 = document.getElementById('chart3').getContext('2d');
    var chart3 = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['Carbs', 'Fats', 'Protein'],
            datasets: [{
                data: [totalCarbs, totalFats, totalProtein],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {}
    });
});
