a=parseInt(prompt("ENTER YOUR VALUE:"))
choice=parseInt(prompt("ENTER YOUR choice:"))
switch(choice)
{
    case 1: 
    case 8:
    c=a*1000;
    alert(c.valueOf());
    break;
    case 2:
        c=a*100;
        alert(c.valueOf());
        break;
        case 3:
            case 7:
            c=a/1000;
            alert(c.valueOf());
            break;
            case 4:
                c=a/100;
                alert(c.valueOf());
                break;
                case 5:
                    c=(1.8*a)+32;
                    alert(c.valueOf());
                    break;
                    case 6:
                        c=(a-32)/1.8;
                        alert(c.valueOf());
                        break;
                        default:
                            alert("WRONG CHOICE........TRYAGAIN");
}