function convert(age){
    switch(true){
        case age < 0:
            console.log('out of bounds');
            break;
            case age >= 0 && age <= 2:
                console.log('baby');
                break;
                case age >= 3 && age <= 13:
                console.log('child');
                break;
                case age >= 14 && age <= 19:
                console.log('teenager');
                break;
                case age >= 20 && age <= 65:
                console.log('adult');
                break;
                case age >= 66:
                console.log('elder');
                break;
    }
}