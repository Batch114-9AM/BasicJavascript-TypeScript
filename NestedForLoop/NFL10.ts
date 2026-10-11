
  let A : string = "";
for(let r : number = 1 ; r <= 4 ; r++)  //rows
{
   
      for(let c : number = 1 ; c <= 15 ; c++)   //columns
        {
           A += r;
        }

        A += "\n"  //A moves to next line
}

 console.log(A)   