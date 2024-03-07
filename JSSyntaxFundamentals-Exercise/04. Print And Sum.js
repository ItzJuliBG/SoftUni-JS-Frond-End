function print(num1, num2){
    let array = [];
    for (let index = num1; index <= num2; index++) {
        
        array.push(index)
    }
    console.log(array.join(' ', array));
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    console.log(`Sum: ${sum}`);
}