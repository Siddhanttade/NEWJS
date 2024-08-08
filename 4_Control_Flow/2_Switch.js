const month=3  //value can also be taken as string  like const month="jan"

switch (month) {
        case 1: //for the above case we need to write "jan" in place of 1 and so on
        console.log("jan");
        break;
        case 2:
        console.log("feb");
        break;
        case 3:
        console.log("mar");
        break;     //if the key is matched then the whole code after it is executed so therefore it is necessary to put break statement
        case 4:
        console.log("apr");
        break;

    default:
        console.log("default case")
        break;
}