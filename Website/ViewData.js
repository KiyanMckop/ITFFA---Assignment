import { getAllItems } from "../src/index.js"

document.addEventListener('DOMContentLoaded', async () => {
    const mainContainer = document.getElementById("workoutInfoContainer");
    try {
      const items = await getAllItems("workoutInfo");
      console.log(items[0])

      var dateRow = null;
      var contentRow = null;

      for (let i = 0; i < items.length; i++) {
        dateRow = document.createElement("div");
        dateRow.className = 'row'

        const dateLable = document.createElement('p');
        dateLable.innerText = items[i].id;
        dateRow.appendChild(dateLable)
      

      mainContainer.appendChild(dateRow)


      const category = Object.keys(items[i])
      for (let a = 1; a < category.length; a++){
        contentRow = document.createElement('div');
        contentRow.className = "row"

        const id = Object.keys(items[i][category[a]])
        const group = document.createElement('p');
        group.className= "categoryLable";
        group.innerHTML = category[a]
        contentRow.appendChild(group);
        for (const [key, value] of Object.entries(items[i][category[a]][id])){
            const label = document.createElement('p')
            label.className= "categoryLable";
            label.innerText = value;
            contentRow.appendChild(label);
        }
        mainContainer.appendChild(contentRow)
      }
      }  

    } catch (error) {
      console.error('Error getting items:', error);
    }


    ///food content ////

    const foodContainer = document.getElementById("foodInfoContainer");
    try {
      const items = await getAllItems("foodInfo");
      console.log(items)

      var dateRow = null;
      var contentRow = null;

      for (let i = 0; i < items.length; i++) {
        console.log("Dates: " + items[i].id)
        dateRow = document.createElement("div");
        dateRow.className = 'row'

        const dateLable = document.createElement('p');
        dateLable.innerText = items[i].id;
        dateRow.appendChild(dateLable)

      foodContainer.appendChild(dateRow)


      const category = Object.keys(items[i])
      console.log(category.length)
      for (let a = 1; a < category.length; a++){
        contentRow = document.createElement('div');
        
        contentRow.className = "row"

        const id = Object.keys(items[i][category[a]])
        const group = document.createElement('p');
        group.className= "categoryLable";
        group.innerHTML = category[a]
        contentRow.appendChild(group);
        for (const [key, value] of Object.entries(items[i][category[a]][id])){
            const label = document.createElement('p')
            label.className= "categoryLable";
            label.innerText = value;
            contentRow.appendChild(label);
        }
        foodContainer.appendChild(contentRow)
      }

      }  

    } catch (error) {
      console.error('Error getting items:', error);
    }

  });










