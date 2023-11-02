let myExercises = []
const url = 'https://localhost:7263/api/Exercise';

function handleOnLoad(){
    apiCall();
    myExercises=JSON.parse(localStorage.getItem(`myExercises`));
    console.log(myExercises);
    let html = `<div class="jumbotron">
                    <h1 class="text-center">TIDE FIT</h1>
                </div>
                <br>
                <div id="tableBody"></div>
        
                <form class = "container" onsubmit="return false">
                  <label for="exerciseType">Exercise Type:</label>
                  <label for="distance">Distance (m):</label>
                  <label for="date">Date (MM/DD/YYYY):</label><br>
                  <input type="text" id="exerciseType" name="exerciseType">
                  <input type="text" id="distance" name="distance">
                  <input type="text" id="date" name="date">
                  <button class="btn btn-light" onclick="handleExerciseAdd(), SaveExercise()">Submit</button>
                  <br>
                  <br>
              </form>`
    
    document.getElementById('app').innerHTML = html;
    populateTable();
    localStorage.setItem('myExercises', JSON.stringify(myExercises));
}

async function apiCall(){
    let response = await fetch('https://localhost:7263/api/Exercise');
    let data = await response.json();
    console.log(data);
}

function getNewID(){
    let maxID = 0;

    myExercises.forEach(function(exercise) {
        if(exercise.eID > maxID){
             maxID = exercise.eID;
        }
    })
    return maxID + 1;
}

function populateTable(){
    
    let html =`
    <table class="container">
    <tr>
        <th class="col-md-3">Activity Type</th>
        <th class="col-md-3">Distance (m)</th>
        <th class="col-md-3">Date Completed</th>
        <th class="col-md-3">Pinned Status</th>
    </tr>`;
    if(myExercises === null){
        console.log('no exercises');
    }
 
    else{
        myExercises.sort((a, b) => new Date(b.Date) - new Date(a.Date));
        console.log(myExercises)

            myExercises.forEach(function(exercise) {
                
                html += `
                <tr>
                <td>${exercise.ExerciseType}</td>
                <td>${exercise.Distance}</td>
                <td>${exercise.Date}</td>
                <td>${exercise.Pin}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-light" onclick="handleExercisePin('${exercise.Pin}', '${exercise.eID}')">Pin</button>
                        <button type="button" class="btn btn-dark" onclick="handleExerciseDelete('${exercise.eID}'), DeleteExercise()">Delete</button>
                    </div>
                </td>
                </tr>`;
            })
        }
  html += `</table>`
  document.getElementById(`tableBody`).innerHTML = html;
}

function handleExerciseAdd(){
    let exercise = {ExerciseType: document.getElementById('exerciseType').value, Distance: document.getElementById('distance').value, Date: new Date(document.getElementById('date').value).toLocaleDateString("en-US"), Pin: 'No', eID: getNewID()};
    if(myExercises === null){
        myExercises = [];
    }
    myExercises.push(exercise);
    localStorage.setItem('myExercises', JSON.stringify(myExercises));
    populateTable();
    document.getElementById(`exerciseType`).value = ' ';
    document.getElementById(`distance`).value = ' ';
    document.getElementById(`date`).value = ' ';

}

function handleExerciseDelete(eID){
    console.log('you called me?', eID);
    myExercises = myExercises.filter(exercise => exercise.eID != eID);
    localStorage.setItem(`myExercises`, JSON.stringify(myExercises));
    populateTable();
}


function handleExercisePin(pin, eID){
    if(pin == "No"){
        myExercises.forEach(function(exercise) {
            if(eID == exercise.eID){
                 exercise.Pin = "Yes";
            }
        })
    }

    if(pin == "Yes"){
        myExercises.forEach(function(exercise) {
            if(eID == exercise.eID){
                 exercise.Pin = "No";
            }
        })
    }
    populateTable();
}



async function SaveExercise(){
    let exercise = {Distance: 1, eType: "Running", Date: "11-01-2023", ID: "1", PinStatus: true};
    console.log("I am saving", exercise);
    await fetch(url, {
        method: "POST",
        body: json.stringify(exercise),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

async function DeleteExercise(){
    await fetch(url, {
        method: "POST",
        body: json.stringify(exercise),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

}
