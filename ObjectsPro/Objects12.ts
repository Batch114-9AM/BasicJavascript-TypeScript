interface king     
{
    kname : string,
    kstate : string,
    kage : number
}

interface queen     
{
    qname : string,
    qstate : string,
    qage : number
}

let kingdata : king = 
{
    kname : "Romoe",
    kstate : "Andhra",
    kage : 32
}

let queendata : queen =
{
    qname : "Julie",
    qstate : "Telangana",
    qage : 30
}

let kingqueen = {...kingdata , ...queendata}

console.log(kingqueen)
