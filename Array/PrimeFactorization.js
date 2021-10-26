//3.Prime factorization using array
var prompt = require("prompt-sync")();
var number=prompt("Enter a number : ");
//creating a array
var primeFactors = new Array();
for(let count=2; count<=number;count++)
{
    if(number % count == 0)
    {
        let isPrime=1;
        for(let j=2; j<=count/2 ; j++)
        {
            if( count % j == 0)
            {
                isPrime=0;
                break;
            }
        }
        if(isPrime==1)
        {
            primeFactors.push(count);
        }
    }
}

console.log("The prime factors of "+number+":\n"+primeFactors.join(" "));