
let m : string = "hello";
switch(m)
{
    default : console.log("Invalid Month Code")
                break;

    case "Nov" : console.log("Month is November")
                //break;
    case "Jun" : console.log("Month is June")
                //break;
    case "Apr" : console.log("Month is April")
                //break;
    case "Aug" : console.log("Month is August")
                //break;
    case "Dec" : console.log("Month is December")
                //break;
    case "Feb" : console.log("Month is Febuary")
                //break;   --> fall through condition
    case "Sep" : console.log("Month is September")
               // break;
    case "My" : console.log("Month is May")
               // break;
    case "Mar" : console.log("Month is March")
               // break;
    case "Jul" : console.log("Month is July")
                break;
    case "Jan" : console.log("Month is January")
                break;
    case "Oct" : console.log("Month is October")
                break;  
   
           
}