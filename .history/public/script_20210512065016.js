async function createTable(){
    const mealTable = await fetch("/api/meals");
    const marcosTable = await fetch("/api/macros");
    const mealData = await mealTable.json();
    const marcosData = await marcosTable.json();

    const info = [];
    info.push(mealData);
    info.push(marcosData);
    console.log(info);

    const rows = [mealData, marcosData];
    rows.forEach(() => {
        targetBox = document.querySelector('.tbl-body');
        const appendItem = document.createElement('tr');
        for (j = 0; j < mealData.length; j+= 1) {
            for (i = 0; i < marcosData.length; i += 1) {
                appendItem.innerHTML = `
                <td>$d{diningData[j].meal_id}</td>
                <td>$d{diningData[j].meal_name}</td>
                <td>$d{marcosData[i].calories}</td>
                <td>$d{marcosData[i].carbs}</td>
                <td>$d{marcosData[i].sodium}</td>
                <td>$d{marcosData[i].portein}</td>
                <td>$d{marcosData[i].fat}</td>
                <td>$d{marcosData[i].cholesterol}</td>
                `;
                targetBox.append(appendItem);
            }
        }
    });

}
async function windowOnload() {
    createTable();
  }
    
window.onload = windowOnload;