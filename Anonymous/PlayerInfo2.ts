
function playerName() : void
{
   let name = "nandu";
   console.log(name);
}

function malecount() : void
{
   let name = "Two hundred";
   console.log(name);
}

//playerName();

function playerPlay(game : () => void): void  //(name : string) => void) --> anonymous function
{
    game()
}

let H : any = 

playerPlay(playerName)
playerPlay(malecount)   //playerName --> dravid and playerPlay --> cricket

