
  let A : string = "";
for(let r : number = 1 ; r <= 7 ; r++)  //rows
{
   
      for(let c : number = 1 ; c <= r ; c++)   //columns
        {
           A += c;
        }

        A += "\n"  //A moves to next line
}

 console.log(A)   