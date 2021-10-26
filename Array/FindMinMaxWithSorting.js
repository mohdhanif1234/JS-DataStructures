//Generate 10 three digit random number and find second largest and second smallest number in array using sorting
var randomNumbers = new Array();
for (let i = 1; i <=10; i++) 
{
  var ran = Math.floor(Math.random()*(999-100+1)+100); //*(final-initial+1)+initial
  //push the random number in array
  randomNumbers.push(ran);
}
//displaying the element in the array
console.log("Before sorting the element in array ");
console.log(randomNumbers);
//Sorting the array elements
randomNumbers.sort();
console.log("After sorting the element in array");
console.log(randomNumbers);
console.log("The second smallest number:"+randomNumbers[1]);
console.log("The second largest number:"+randomNumbers[randomNumbers.length-2]);