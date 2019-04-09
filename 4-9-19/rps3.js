
function greetOnLoad () {
    var name = prompt("Hi! What's your name?");
    var myelement = document.getElementById("greeting");
    greeting.innerHTML= "Hello " + name + ". Lets play Rock, Paper, Scissors!";
}
greetOnLoad();


        const hands = ['rock', 'paper', 'scissors'];
        var cpuScore = 0;
        var playerScore = 0;
        
    function rock(){
        cpu = hands[parseInt(Math.random()*10)%3];
       if (cpu === "rock") 
            {text ="It's is a tie."}   
            
           else{
               if(cpu === "scissors")
               {text = "You lose this round.",
               cpuScore++
       }else {text = "You win this round!",
                playerScore++
            }  
           }
        document.getElementById("result").innerHTML = text;
        }    
        function paper(){
            cpu = hands[parseInt(Math.random()*10)%3];
           if (cpu === "paper") 
                {text ="It's is a tie."}   
               else{
                   if(cpu === "rock")
                   {text ="You lose this round.",
                   cpuScore++
           }else {text = "You win this round!",
                    playerScore++
                }  
               }
            document.getElementById("result").innerHTML = text;
            }    
            function scissors(){
                cpu = hands[parseInt(Math.random()*10)%3];
               if (cpu === "scissors") 
                    {text ="It's is a tie." }
                   else{
                       if(cpu === "paper")
                       {text ="You lose this round.",
                       cpuScore++
               }else {text = "You win this round",
                        playerScore++
                    }  
                   }
                document.getElementById("result").innerHTML = text;
                }    
        