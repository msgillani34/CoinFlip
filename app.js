var usrInput = prompt("Enter Your Username");

var usrName = document.getElementById("userName1").innerHTML = usrInput; 




var userScore = 0;

function coinflip() {
    
    // var head = document.getElementById("head").value;
    // var tail = document.getElementById("tail").value;
    
    
    
    var toss = Math.random() * 2;
    var floor = Math.floor(toss);
    
    var result;
    
if(floor === 0){
    
    result = ("You Win") 
    userScore ++;
    document.getElementById("userScore").innerHTML= userScore;
        
        document.getElementById("result").innerHTML=result;

        console.log(result);
} else  {
    result = ("You Lose")
    
    userScore--;
    document.getElementById("userScore").innerHTML=userScore;
    document.getElementById("result").innerHTML=result;    
    
    console.log(result);
}


}