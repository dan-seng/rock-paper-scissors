   

let scores =JSON.parse(localStorage.getItem('score')) ||{ wins: 0,losses: 0, ties:0};
// the code  ||{ wins: 0,losses: 0, ties:0} is called a default operator.

updateScore();
let isAutoPlaying = false;
let setIntervalId;
function autoPlay(){
   if(!isAutoPlaying){
      setIntervalId = setInterval(function() {
   let playerMove = pickComputerMove();
   playGame(playerMove);
   }, 1000);
   isAutoPlaying = true;
   document.querySelector('.auto').innerHTML = 'Stop Play';
  
   } else{
       clearInterval(setIntervalId);
       isAutoPlaying = false;
       document.querySelector('.auto').innerHTML = 'Auto Play';
   }
 
  
}

function playGame(playerMove){
   const computerMove = pickComputerMove();
   let result = '';
   if (playerMove === 'Rock'){
      if(computerMove === 'Rock'){
           result = 'You have Tied Up';
       } else if (computerMove === 'Paper'){
           result = 'You have Lost';
       } else if (computerMove === 'Scissors'){
           result = 'You have Won';
       }
} else if (playerMove === 'Paper'){
       if(computerMove === 'Rock'){
           result = 'You have Won';
       } else if (computerMove === 'Paper'){
           result = 'You have Tied Up';
       } else if (computerMove === 'Scissors'){
           result = 'You have Lost';
       }
} else if (playerMove === 'Scissors'){
       if(computerMove === 'Rock'){
           result = 'You have Lost';
       } else if (computerMove === 'Paper'){
           result = 'You have Lost';
       } else if (computerMove === 'Scissors'){
           result = 'You have Tied Up';
       }
}
 if (result === 'You have Lost'){
       scores.losses+=1;
 } else if (result === 'You have Won'){
       scores.wins+=1;
 } else if (result === 'You have Tied Up'){
       scores.ties+=1;
 }

if (playerMove === 'Rock') {
       playerMove = '&#9994';
 } else if (playerMove === 'Paper'){
       playerMove = '&#9995';
 }else if (playerMove === 'Scissors'){
       playerMove = '&#9996';
 } 
var cmove = computerMove;
if (cmove === 'Rock') {
    cmove = '&#9994';
  } else if (cmove === 'Paper'){
       cmove = '&#9995';
  } else if (cmove === 'Scissors'){
       cmove = '&#9996';
 }
localStorage.setItem('score', JSON.stringify(scores));
updateScore();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-choice').innerHTML = `You ${playerMove}  = Computer ${cmove}`;     
}
function updateScore(){
document.querySelector('.Js-score').innerHTML =
`Wins: ${scores.wins}, Loses: ${scores.losses}, Ties: ${scores.ties}`;
   }
function pickComputerMove(){    
  const randomNumber=Math.random();
   let computerMove='';
   if (randomNumber >= 0 && randomNumber<1/3){
        computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
           computerMove = 'Paper';
    } else if (randomNumber > 2/3 && randomNumber < 1){
           computerMove = 'Scissors';
    }
       return computerMove;
   }

   function instruction(){
       const instruction = document.querySelector('.instruction');
       let name = document.querySelector('.buttonistic').innerHTML;
       if (name === 'How to Play'){
          
           instruction.innerHTML = `
       <div class="container">
       <h1>Rock, Paper, Scissors Game Rules</h1>
       <div class="emoji">
           ✊️ <span>Rock</span>, ✋️ <span>Paper</span>, ✌️ <span>Scissors</span>
       </div>
       <div class="rule">
           <p><span class="rock">Rock ✊️</span> beats <span class="scissors"> Scissors ✌️</span>.</p>
           <p><span class="scissors">Scissors ✌️</span> beats <span class="paper"> Paper ✋️</span>.</p>
           <p><span class="paper">Paper ✋️</span> beats <span class="rock"> Rock ✊️</span>.</p>
       </div>
   </div>
       `;
       document.querySelector('.buttonistic').innerHTML = 'Remove Instruction';
       } else{
           instruction.innerHTML = '';
           document.querySelector('.buttonistic').innerHTML = 'How to Play';
       }
       
   }
   function changeTheme(){
       const color = document.getElementById('bg-color').value;
       document.body.style.backgroundColor = color;
   }

const button = document.getElementById('addClassButton');
const body = document.body;
const whole = document.getElementById('whole');
button.addEventListener('click', () => {
body.classList.toggle('highlight');
whole.classList.toggle('highlight');
});
   
 

