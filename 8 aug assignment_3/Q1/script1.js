

function addition(a,b)
{
 console.log(a+b);
}
function subtraction(a,b)
{
 console.log(Math.abs(a-b));
}
function multiplication(a,b)
{
 console.log(a*b);
}
function division(a,b)
{
 console.log(a/b);
}

let num1=parseInt(prompt("Enter first number"))
let num2=parseInt(prompt("enter Second number"))
let choice= parseInt(prompt("Enter your choice from  1-4"))
switch(choice) 
{
    case 1:
        addition(num1,num2);
        break;
        case 2:
            subtraction(num1,num2);
            break;
            case 3:
                multiplication(num1,num2);
                break;
                case 1:
                    division(num1,num2);
                    break;
                    default:
                        console.log("wrong choice");
}