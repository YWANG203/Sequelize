async function createTable(){
    const request = await fetch("/api/meals");
    const request = await fetch("/api/marcos");
    const data = await request.json();

    const rows = [diningData, marcosData];
    rows.forEach(() => {
        targetBox = document.querySelector('.tbl-body');
        const appendItem = document.createElement('tr');
        for (j = 0; j < diningData.length; j+= 1) {
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
    createNATable();
  }
    
  window.onload = windowOnload;