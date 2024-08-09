alert("Welcome");
var random = 0;

var run =Number(1);
var counter =0;
var guess =-1;
var attempt =0;

do{
    random = Math.floor(Math.random()*100);
    console.log(random);
    while(guess!=random)
    {
        guess=parseInt(prompt("enter your guess"));
        attempt++;
        if(guess==random)
        {
            alert(`woohoo ${guess} in ${attempt}`)
        }
        else if( Math.abs(guess-random)<25)
        {
            alert(" too near")
        }
        else if(Math.abs(guess-random)<50)
        {
            alert(" near")
        }
        else if(Math.abs(guess-random)<75)
            {
                alert(" far")
            }
            else
            {
                alert("too far")
            }
            

    }
    attempt=0;
    run=0;
    run = parseInt(prompt("Enter 1 to play again"))

}while(run===1);