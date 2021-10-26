//Roll dice and store maximum and minimum count
var diceRoll=new Map();
let value=0
let maxcount=0;
while(maxcount<10)
{
    //Roll a dice
    let dice=Math.floor(Math.random()*6)+1;
    console.log("Dice value: "+dice);
    value=1;
    //Check whether dict has dice
    if(diceRoll.has(dice))
    {
        value=diceRoll.get(dice)+1;
    }
    //Set value to dictionary
    diceRoll.set(dice,value);
    if(value > maxcount)
    {
    maxcount=value;
    }
}

let max=0
let min=10;
let minDice,maxDice=0;
//Displaying map elements
for(let [key,value] of diceRoll)
{
    console.log("Key: "+key+" Value= "+value);
    if(value>max)
    {
        max=value;
        maxDice=key;
    }
    if(value<=min)
    {
        min=value;
        minDice=key;
    }
}
console.log("Key with Max Value: "+maxDice);
console.log("Key with minimum value: "+minDice);