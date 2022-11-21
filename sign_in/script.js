//The function checks if the username entered is correct
// and if not throws error messages and if so moves to the next page
function checkDetails() {
    let userName = document.getElementById('userName').value;
    let flag = true;
    try {
        if (userName.length < 1) {//Checking the correctness of the username
            throw ('Username is invalid');
        }
    }
    catch (errorM) {
        document.getElementById('errorUserName').innerHTML = errorM;
        flag = false;
    }
    if (flag) {
        localStorage.setItem('userName',userName)
        document.location.href = "../level_selection/index.html";//Go to the next page
    }
}

//The function resets the error messages
function restErrorMsg() {
    document.getElementById('errorUserName').innerHTML = '';
}
