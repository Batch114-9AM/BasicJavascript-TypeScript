
function playerName(name : string) : void
{
    console.log(name);
}

playerName("Dravid");

function playerPlay(game : (name : string) => void): void  //(name : string) => void) --> anonymous function
{
    game("Criket")
}

playerPlay(playerName)   //playerName --> dravid and playerPlay --> cricket

