function print(input){
    let isSame = true
   let number = input.split("");
    for (let index = 1; index <= number.length; index++) {
        if(number[index-1] !== number[index]){
            isSame = false
            break;
        }
    }
    let sum = 0;

    let array = [1,2,3];
array.forEach(element => {
    
});
    console.log(isSame);
    console.log(sum);
}
print(22222)