let ranNum1 = Math.floor(Math.random() * 6) +1;
let ranNum2 = Math.floor(Math.random() * 6) +1;

let ranImg1="./images/dice"+ranNum1+".png";
document.getElementById("img1").setAttribute("src",ranImg1);

let ranImg2="./images/dice"+ranNum2+".png";
document.getElementById("img2").setAttribute("src",ranImg2);


if(ranNum1 > ranNum2)
    document.querySelector("h1").innerHTML="🚩Player1 wins";
else if(ranNum1 < ranNum2)
    document.querySelector("h1").innerHTML="Player2 wins🚩";
else
    document.querySelector("h1").innerHTML="Draw, try again!";

document.querySelector("#btn").addEventListener("click",function() {
    // Reload the page
    location.reload();
  });