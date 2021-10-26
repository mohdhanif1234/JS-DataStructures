//Birth month generation of 50, between (92 -93)

let monthMap = new Map();
let res;
for(let i =1;i<=50;i++)
{
    //Generate the random number between 1-12 as birth month
    var randomVal = Math.floor(Math.random()*12)+1;
    //checking the month is already present or not
    if(monthMap.has(randomVal))
    {
        res =monthMap.get(randomVal);
        res+=(i+ " ");
    }
    else
    {
        res=(i+ " ");
    }
    //set the unique month value in map
    monthMap.set(randomVal,res);
}
//print the map with key and value
for(let [key,value] of monthMap)
{
    console.log("Month-" +key+ " is the "+value+ " individual's birth month" );
} 