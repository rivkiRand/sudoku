let userName = localStorage.getItem('userName')
document.getElementById('welcome').innerHTML = `Welcome ${userName}`;
// saving the level dificulty of the game, and moving to next page 
function difficulty(num){
    localStorage.setItem('value',num);
    document.location.href ='../board/index.html';
}