let arr=[1,4,5, 'vansh', 'kunal',10]
let ans=arr.filter((value)=>
{
    if(typeof(value) == "number")
    {
        return true ;
    }

});
console.log(ans);
const a = ans.reduce((acc,cur)=>
{
  return acc+cur;

},0)
console.log(a);


