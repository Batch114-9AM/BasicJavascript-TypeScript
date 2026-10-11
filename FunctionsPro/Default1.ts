function ticketBook(username : string , age : number , discount : string = "50% Concession", station : string)
{
	if(age < 60)
	{
		console.log("Pay Full amount as per ticket cost")
	}
	else
	{
		console.log("Fare amount should be " +discount)
	}
}

ticketBook("Raju", 63, '', "Hyd");




