function print(num1, num2, num3){
    let a = Number.MIN_SAFE_INTEGER
if(num1 > a){
    a = num1
}
if(num2 > a){
    a = num2
}
if(num3 > a){
    a = num3
}
console.log('The largest number is',a+'.');
}