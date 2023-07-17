var randomno_1=(Math.floor(Math.random()*6))+1;
var rand_dice="dice"+randomno_1+".png";
rand_img="./images/"+rand_dice;
document.querySelector(".img1").setAttribute("src",rand_img);


var randomno_2=(Math.floor(Math.random()*6))+1;
var rand_dice2="dice"+randomno_2+".png";
rand_img2="./images/"+rand_dice2;
document.querySelector(".img2").setAttribute("src",rand_img2);


 if(randomno_1>randomno_2){
    document.querySelector("h1").textContent="Player 1 won the game"
 }
 else if(randomno_1<randomno_2){
    document.querySelector("h1").textContent="Player 2 won the game"
 }
 else{
    document.querySelector("h1").textContent="Its a tie"
 }