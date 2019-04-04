/*Let's revisit Rock Paper Scissors...
    Define a hands array with the values 'rock', 'paper', and 'scissors';
    Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
    Define two objects for two players. Each player has name and getHand() properties.
    Define a function called playRound() that
        Takes two player objects as arguments
        Gets hands from each
        Determines the winner
        Logs the hands played and name of the winner.
        If its a tie, log the hands played and "it's a tie".
        Returns the winner object (null if no winner)
    Define a function called playGame() that takes arguments player1, player2, and playUntil.
        Play rounds until one of the players wins playUntil hands
        When one player has won enough games, return the winning player object
    Play a game to 5 wins
!!!!Bonus!!!!!
    Define a function caled playTournament()
        Take 4 players and playUntil as arguments
        Play a game between the first two players, and the second two players
        Play a game between the winners of the first round.
        Announce the tournament winner's name "[name] is the world champion";
*/
        const hands = ['rock', 'paper', 'scissors'];
        function getHand(){
             return hands[parseInt(Math.random()*10)%3];
        }
        
       /* var players = {name: {player1: 'p',
                                     getHand(), score}
                            {player2: 'p2', 
                                    getHand()}
         };*/

        var player1={name: 'p1', getHands : getHand, hands: null, score: 0,};
        var player2={name: 'p2', getHands : getHand, hands: null, score: 0,};
        var player3={name: 'p3', getHands : getHand, hands: null, score: 0,};
        var player4={name: 'p4', getHands : getHand, hands: null, score: 0,};

const winsC = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};

function playRound(player1, player2, hands, winsC){
              player1.hands = player1.getHands(hands);
              player2.hands = player2.getHands(hands);
console.log(`${player1.name} plays ${player1.hands}, and ${player2.name} plays ${player2.hands}`);
         
         if (player1.hands == player2.hands) 
         {console.log("This is a tie."   return null;
    }
        else{
            if(winsC[player1.hands]== player2.hands)
            {console.log(`${player1.name} wins this round.`);
        return player1;
    }else {console.log(`${player2.name} wins this round.`);
return player2;}
        }
    }

 function playRound2(player3, player4, hands, winsC){
            player3.hands = player3.getHands(hands);
            player4.hands = player4.getHands(hands);
console.log(`${player3.name} plays ${player3.hands}, and ${player4.name} plays ${player4.hands}`);

if (player3.hands == player4.hands) 
{console.log("This is a tie")
return null;
}
else{
    if(winsC[player3.hands]== player4.hands)
    {console.log(`${player3.name} wins this round.`);
return player3;

}else {console.log(`${player4.name} wins this round.`);
return player4;
}
}
       };
function addWins(player){
    if (player !==  null){
        player.score ++;
    }
}
/*function addWins(player){
    if (player !== null){
        player.score++;
    }
}*/
 function playGame(player1, player2, hands, winsC, playUntil){
     console.log(`Play until ${playUntil} games won. Start!!!`);
     while (player1.score < playUntil && player2.score < playUntil) {
         addWins (playRound(player1, player2, hands, winsC));
         console.log(`${player1.name} Score: ${player1.score} ${player2.name} Score: ${player2.score}`);
     }
 }  
 /*function playGame2(player3, player4, hands, winsC, playUntil){
    console.log(`Play until ${playUntil} games won. Start!!!`);
    while (player3.score < playUntil && player4.score <playUntil) {
        addWins (playRound2(player3, player4, hands, winsC));
        console.log(`${player3.name} Score: ${player3.score} ${player4.name} Score: ${player4.score}`);
    }
}   */
playGame(player1,player2, hands, winsC, 5);
if(player1.score>player2.score){
    console.log(`${player1.name}, with a score of ${player1.score} is the winner of game 1`);}
else{console.log(`${player2.name}, with a score of ${player2.score} is the winner of game 1`);};

playGame(player3,player4, hands, winsC, 5);
if(player3.score>player4.score){
    console.log(`${player3.name}, with a score of ${player3.score} is the winner of game 1`);}
else{console.log(`${player4.name}, with a score of ${player4.score} is the winner of game 1`);};

console.log(player1.name +" : "+ player1.score);
console.log(player2.name +" : "+ player2.score);
console.log(player3.name +" : "+ player3.score);
console.log(player4.name +" : "+ player4.score);


if (player1.score> player2.score){
var winner1 =player1;} else {var winner1= player2};
if(player3.score> player4.score){
    var winner2=player3;} else{var winner2=player4};

function playTourney( winner1, winner2, hands, winsC, playUntil){
    console.log(`Play until ${playUntil} championship is won. Start!!!`);
playGame(winner1,winner2, hands, winsC, 5);
if (winner1>winner2){
    console.log(`${winner1.name}`);} else{console.log(`${winner2.name}`);}
}

playTourney(winner1, winner2, hands, winsC, 5);

  /*  while (winner1.score < playUntil && winner2.score < playUntil) {
        addWins (playRound(winner1, winner2, hands, winsC));
        console.log(`${winner1.name} Score: ${winner1.score} ${winner2.name} Score: ${winner2.score}`);
        if (winner1>winner2){
            console.log(`${winner1.name}`);}
            else{console.log(`${winner2.name}`);};
        }
    }
     
*/
    
    





/*console.log(gameWinner1);

var gameWinner2 = playGame(player.name + ":" + player.score === 5);
console.log(gameWinner2);*/