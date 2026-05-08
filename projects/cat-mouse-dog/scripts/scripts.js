let results; 

let catButton; 
let dogButton; 
let mouseButton;

let userChoice; 
let neighborChoice;

let gamesPlayed = 0;
let gamesTied = 0;  
let gamesWon = 0; 
let gamesLost = 0; 

let centerText; 
let centerText2;


const choices = ["cat", "mouse", "dog"];

let answersArray = [
    "YOUR CATS TIE", //0
    "YOUR MOUSES TIE", 
    "YOUR DOGS TIE", 

    "YOUR CAT WINS ", //3
    "YOUR MOUSE WINS", 
    "YOUR DOG WINS ", 

    "YOUR NEIGHBOR'S DOG WINS", //6
    "YOUR NEIGHBOR'S CAT WINS", 
    "YOUR NEIGHBOR'S MOUSE WINS", 

    "Both of them are so nervous right now.", //9
    "Two mice sitting in the yard 5 feet apart. . .", 
    "The dog's trusting eyes, overwhelmed the mean cat.",

    "That cat is too fierce. Your sweet baby mouse stood no chance.", //12
    "They seem to get along just fine, suprisingly. ", 
    "Speed and stealth win against small size, ANY day.",

    "Mice are obviously the dog's natural predetors.",  //15
    "Size doesn't matter - that guy is scary.", 
    "That dog is a bully if you've ever seen one. Rude." 


]; 

const choice = (event) => {

    userChoice = event.target.value; 
    setTimeout(getResult, 200);
}

// display new results 
const getResult = () => {
    gamesPlayed++;
    console.log(gamesPlayed); 
    
    neighborChoice = rand(0,2);

    let resultsString = 
    "<div class='results'>" 
        + swapResultUser() + compareChoices(userChoice, neighborChoice) 
        + swapResultNeighbor() + 
    "</div>"; 
    results.innerHTML = resultsString; 

    let p1_scoreString = "<h3 id 1_score>" + "Your Pets" + "<br>" + gamesWon + "</h3>";
    p1score.innerHTML = p1_scoreString; 

    let c2_scoreString = "<h3 id 1_score>" + "Neighbor's Pets" + "<br>" + gamesLost + "</h3>";
    c2score.innerHTML = c2_scoreString; 

    let resetBtn = " <button onclick='window.location.reload();' id=resetbutton>" + gamesPlayed + " Days Passed | Reset Game?" + "</button>"; 
    reset.innerHTML = resetBtn; 

    let answersArrayString = "<p>" +  centerText + "<br>" + centerText2 + "</p>"; 
    center_text.innerHTML = answersArrayString;

}

// comparing choices here. 
const compareChoices = (userChoice, neighborChoice) => {

    // Tie 
    if (userChoice == neighborChoice){
        gamesTied++; 

        // addressing individual ties. 
        if (userChoice == 0 && neighborChoice == 0){
            centerText = answersArray[0]; 
            centerText2 = answersArray[13];

        } else if (userChoice == 1 && neighborChoice == 1){ 
            centerText = answersArray[1]; 
            centerText2 = answersArray[10];
        } else {
            centerText = answersArray[2];
            centerText2 = answersArray[9];
        }

        return "<img  src='images/=.png' alt='' height=20px  class='symbol2'>"

    // User Wins 
    } else if (userChoice == 0 && neighborChoice == 1 || 
        userChoice == 1 && neighborChoice == 2 ||
        userChoice == 2 && neighborChoice == 0){
            gamesWon++; 

            if(userChoice == 0 && neighborChoice == 1){
                centerText = answersArray[3];
                centerText2 = answersArray[14]; 

            } else if (userChoice == 1 && neighborChoice == 2){
                centerText = answersArray[4]; 
                centerText2 = answersArray[15]; 

            } else {
                centerText = answersArray[5]; 
                centerText2 = answersArray[11]; 
            }

            return "<img  src='images/>.png' alt='' height=30px class='symbol2'>"

    // Neighbor Wins 
    } else if (userChoice == 0 && neighborChoice == 2||
        userChoice == 1 && neighborChoice == 0 ||
        userChoice == 2 && neighborChoice == 1) {
            gamesLost++; 

            if ( userChoice == 0 && neighborChoice == 2){
                centerText = answersArray[6];
                centerText2 = answersArray[17]; 

            } else if (userChoice == 1 && neighborChoice == 0) {
                centerText = answersArray[7];
                centerText2 = answersArray[12]; 

            } else { 
                centerText = answersArray[8];
                centerText2 = answersArray[16]; 
            }
            return "<img  src='images/<.png' alt='' height=30px class='symbol2'>"

        }
    }

// random computer choice 
const rand = (min, max) => {
    return Math.round(Math.random() * (max - min) + min ); 
}

const swapResultUser = () => {
    if (userChoice == 0) { 
        return "<img  src='images/userCatBox.png' alt=''>"

    } else if (userChoice == 1) {
        return "<img  src='images/userMouseBox.png' alt=''>"
    } else {

        return "<img  src='images/userDogBox.png' alt=''>"
    }  
}

const swapResultNeighbor = () => {
    if (neighborChoice == 0) { 
        return "<img  src='images/neighborCatBox.png' alt=''>"

    } else if (neighborChoice == 1) {
        return "<img  src='images/neighborMouseBox.png' alt=''>"
    } else { 
        return "<img  src='images/neighborDogBox.png' alt=''>"
    }   
}

//initializer code
window.addEventListener("DOMContentLoaded", () => {
    results = document.querySelector(".results");

    catButton = document.querySelector(".cat");
    dogButton = document.querySelector(".dog");
    mouseButton = document.querySelector(".mouse");

    catButton.addEventListener("click", choice); 
    dogButton.addEventListener("click", choice); 
    mouseButton.addEventListener("click", choice); 
    
});