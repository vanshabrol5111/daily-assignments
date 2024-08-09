
let choice=prompt("enter your  choice from\n 1.string \n 2.no ");

 if (choice==1)
 {
    let v=prompt("enter string ");
    if(Boolean(v))
    {
        
        console.log("truthy");
    }
    else 
    {
        console.log("falsy");
    }
 }
 else if (choice==2)
 {
let a=parseInt(prompt("Enter any number"));
if(Boolean(a))
    {
      
        console.log("truthy");
    }
    else 
    {
        console.log("falsy");
    }
 }
 else
 console.log("you have made no choice between 1 and 2 ");

