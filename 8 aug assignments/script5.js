var a,b,c;
a=parseInt(prompt("ENTER NUMBER one: "));
b=parseInt(prompt("ENTER NUMBER two:"));
alert("Menu\n 1. Add \n 2. Sub \n 3. Mult \n 4. Div\n 5. Rema \n")
choice=parseInt(prompt("ENTER YOUR CHOICE"));
switch(choice)

{
    case 1:
        c=a + b;
        alert(c.valueOf());
        break;
        case 2:
            c=a - b;
            alert(c.valueOf());
            break;
            case 3:
                c=a * b;
                alert(c.valueOf());  break;
                case 4:
                    c=a / b;
                    alert(c.valueOf());
                    break;
                    case 5:
                        c=a % b;
                        alert(c.valueOf());
                        break;
                        default:
                            alert("WRONG");
                  
}