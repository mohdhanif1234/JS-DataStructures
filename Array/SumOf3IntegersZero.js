//From the array of numbers, find three numbers add to zero
var prompt = require("prompt-sync")();
var num = prompt("Enter number of elements in the array:");
var number = new Array();
let found = false;
for (let i = 0; i < num; i++)
{
   var element= prompt("Enter the elements : ");
   number.push(element);
}
console.log("The array is :"+number);

for (let i = 0; i < number.length - 2; i++) 
{
    for (let j = i + 1; j < number.length - 1; j++) 
    {
        for (let k = j + 1; k < number.length; k++) 
        {
            if ((number[i] + number[j] + number[k]) == 0) 
            {
                console.log("The elements whose sum is zero are:"+number[i]+","+number[j]+","+number[k]);
                found = true;
            }
        }
    }
}

if (found == false) 
{
    console.log("Not exist");
}