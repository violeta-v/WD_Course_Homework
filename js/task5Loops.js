function calculate() {
let sum=0 
for(x=0;x<=20;x++)
{
  if(x%2==0 && x%3==0)
  {
    sum=sum+x
  }
}
console.log(sum)
}