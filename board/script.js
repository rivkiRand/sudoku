let mat = [
    [3, 7, 4, 1, 6, 8, 2, 5, 9],
    [5, 1, 9, 4, 2, 7, 6, 8, 3],
    [2, 8, 6, 3, 9, 5, 7, 1, 4],
    [6, 9, 8, 5, 4, 1, 3, 7, 2],
    [1, 2, 3, 7, 8, 6, 9, 4, 5],
    [4, 5, 7, 9, 3, 2, 1, 6, 8],
    [9, 6, 2, 8, 7, 4, 5, 3, 1],
    [8, 3, 5, 6, 1, 9, 4, 2, 7],
    [7, 4, 1, 2, 5, 3, 8, 9, 6]];

let mat2 = [
    [1, 8, 7, 4, 9, 2, 5, 6, 3],
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [9, 6, 2, 1, 3, 5, 7, 8, 4],
    [4, 5, 8, 2, 1, 6, 3, 9, 7],
    [2, 7, 3, 8, 4, 9, 6, 5, 1],
    [6, 1, 9, 3, 5, 7, 4, 2, 8],
    [8, 4, 1, 9, 6, 3, 2, 7, 5],
    [7, 2, 6, 5, 8, 4, 1, 3, 9],
    [3, 9, 5, 7, 2, 1, 8, 4, 6]];

let mat3 = [
    [2, 4, 3, 7, 1, 6, 9, 5, 8],
    [9, 8, 5, 2, 3, 4, 7, 1, 6],
    [7, 1, 6, 8, 9, 5, 3, 4, 2],
    [6, 3, 9, 1, 2, 7, 5, 8, 4],
    [4, 5, 7, 9, 6, 8, 1, 2, 3],
    [8, 2, 1, 5, 4, 3, 6, 7, 9],
    [1, 6, 2, 4, 7, 9, 8, 3, 5],
    [3, 7, 8, 6, 5, 2, 4, 9, 1],
    [5, 9, 4, 3, 8, 1, 2, 6, 7]];

let mat4 = [
    [4, 3, 5, 2, 6, 9, 7, 8, 1],
    [6, 8, 2, 5, 7, 1, 4, 9, 3],
    [1, 9, 7, 8, 3, 4, 5, 6, 2],
    [8, 2, 6, 1, 9, 5, 3, 4, 7],
    [3, 7, 4, 6, 8, 2, 9, 1, 5],
    [9, 5, 1, 7, 4, 3, 6, 2, 8],
    [5, 1, 9, 3, 2, 6, 8, 7, 4],
    [2, 4, 8, 9, 5, 7, 1, 3, 6],
    [7, 6, 3, 4, 1, 8, 2, 5, 9]];

let mat5 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]

//The function builds the sudoku board 9 squares within which 9 inputs
function board() {
    let divsId = '-1'; //giving differnt id to the big squer
    let inputId = '1'; //giving differnt id to the inputs
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let squar = document.createElement('div'); //Creating a square
            squar.setAttribute('id', divsId);
            document.getElementById('main').appendChild(squar); //Inserting the square created into the board

            //style
            squar.style.border = '3px solid black';
            squar.style.width = '131px';
            squar.style.height = '130px';
            squar.style.margin = '1px';
            squar.style.flexWrap = 'wrap';
            inputId = inputs(divsId, inputId); //A call to a function that builds the inputs within each square
            divsId--;
        }
    }
    randMat();
}
board()

//The function builds 9 inputs within each square
function inputs(divsId, inputId) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let inpt = document.createElement('input');//Creating input
            inpt.setAttribute('id', inputId);
            inpt.setAttribute("type", "number");//Limiting the text to digits only
            inputId++;

            //Limiting the number in each cell to one digit only
            inpt.addEventListener('input', () => {
                if (inpt.value.length > 1) {
                    inpt.value = inpt.value.slice(0, 1);
                }
            })

            //style
            inpt.style.border = '1px solid black';
            inpt.style.width = '35px';
            inpt.style.height = '37px';
            inpt.style.margin = '1px';
            inpt.style.flexWrap = 'wrap';
            inpt.style.textAlign = 'center';

            document.getElementById(divsId).appendChild(inpt);//Inserting the input into a square
        }
    }
    return inputId; //Returns the ID of the input to preserve its value
}

//function that randomised a matrix and calls to the fillboard function
function randMat() {
    let mats = [mat, mat2, mat3, mat4, mat5]
    let numBoard = Math.floor(Math.random() * 5);
    fillBoard(mats[numBoard]);
}

//The function fills the inputs according to the matriculation of the sudoku
function fillBoard(mat) {
    let inputId1 = 1;
    for (let i = 0; i < mat.length; i = i + 3) {
        for (let j = 0; j < mat[i].length; j = j + 3) {

            //Filling by squares
            for (let rowSquare = i; rowSquare < i + 3; rowSquare++) {
                for (let columnSquare = j; columnSquare < j + 3; columnSquare++) {
                    let element = document.getElementById(inputId1);
                    element.value = mat[rowSquare][columnSquare];
                    element.setAttribute('result', element.value);
                    element.style.fontWeight = '800'; //making the permanent numbers bolder
                    element.style.pointerEvents = 'none'; //so the user will not be able to delete the permanent nubers
                    inputId1++;
                }
            }
        }
    }
    let difficulty = localStorage.getItem('value'); //getting the value from the previous page
    if (difficulty == '1') { //easy level
        deletingNum(20);
    }
    else if (difficulty == '2') { //medium level
        deletingNum(41);
    }
    else { //hard level
        deletingNum(60);
    }
}

//The function deletes numbers on the board in a lottery according to the selected difficulty level
function deletingNum(difficulty) {
    let counter = 0;
    while (counter < difficulty) {//The amount of numbers to delete
        let num = Math.floor(Math.random() * (81 - 1 + 1)) + 1;
        let temp = document.getElementById(num).value;
        if (temp != '') {//Check if we have not already deleted the input

            document.getElementById(num).value = '';
            document.getElementById(num).style.pointerEvents = 'visible';
            document.getElementById(num).style.fontWeight = 'normal';
        }
        else {
            counter--;//If we have already deleted the input, so that they actually delete the required number of inputs
        }
        counter++;
    }
}

//check the board to make sure if the numbers are currect
function sudokuValidation() {
    const matches = document.querySelectorAll("#main input");
    for (let i = 0; i < matches.length; i++) {
        let input = matches[i];
        let val = input.value;
        let result = input.getAttribute('result');
        if (val != result) {
            document.getElementById("false").style.display = 'inline';
            return false;
        }
    }
    document.getElementById("true").style.display = 'inline';
}

//return to level page buttons
function goBack() {
    document.location.href = "../level_selection/index.html";
}