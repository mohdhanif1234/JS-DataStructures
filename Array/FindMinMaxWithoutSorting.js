//Generate 10 three digit random number and find second largest and second smallest number in array withour sorting
var randomNumbers = new Array();
for (let i = 1; i <=10; i++) 
{
  var ran = Math.floor(Math.random()*(999-100+1)+100); //*(final-initial+1)+initial
  //push the random number in array
  randomNumbers.push(ran);
}
//displaying the element in the array
console.log("The element in array:"+randomNumbers);
//console.log(randomNumbers.sort());

var min=randomNumbers[0];
var secondmin=randomNumbers[0];
var max = randomNumbers[0];
var secondmax = randomNumbers[0];

for(var i=0;i<randomNumbers.length;i++)
{
    if(randomNumbers[i]>max)
    {
        secondmax = max;
        max = randomNumbers[i];
    }
    else if(randomNumbers[i]>secondmax && randomNumbers[i]!=max)
    {
        secondmax = randomNumbers[i];
    }
}
for(var i=0;i<randomNumbers.length;i++)
{
    if(randomNumbers[i]<min)
    {
        secondmin = min;
        min = randomNumbers[i];
    }
    else if(randomNumbers[i]<secondmin && randomNumbers[i]!=min)
    {
        secondmin = randomNumbers[i];
    }
}

console.log("second largest is-"+secondmax);
console.log("second smallest is-"+secondmin);