//check the repeated digit in the range between 0-100
let repeated=new Array();
for(let i=1; i<=100; i++ )
{
    if((i % 11) == 0)
    {
        repeated.push(i);
    }
}
console.log("The repeated numbers are:"+repeated.join(" ")); 