//Create login Function here.
function login(){
    player_name=document.getElementById("playername").Value;
    localStorage.setItem("player_name", playername);

    window.location="game.html";
}