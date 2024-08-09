
 a=parseInt(prompt("enter numbers in first subject"));
 b=parseInt(prompt("enter numbers in second subject"));
 c=parseInt(prompt("enter numbers in three subject"));
 d=parseInt(prompt("enter numbers in fourth subject"));
 e=parseInt(prompt("enter numbers in fifth subject"));
totalmarks=a+b+c+d+e;
grade=totalmarks/5;
console.log(grade);
if(grade>=85 && grade<=100)
{
    console.log("A");
}
else if(grade>=50 && grade<=84)
    {
        console.log("B");
    }
    else if(grade >=33 && grade<=49)
    {
        console.log("C");
    }
    else{
        console.log("F");
    }
