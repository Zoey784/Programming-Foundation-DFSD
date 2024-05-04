// function mean([arr]){
//     let sum = 0;
//     for(i=0; i<arr.length;i++) {
//         sum++;
//     }
//     return sum;
// }



function mean(arr){
    var sum = 0;
    if(arr.length === 0) {
        return NaN;
    }
    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(mean([4,2,8,6]));//5
console.log(mean([1,2,3,4]));//2.5
console.log(mean([1,2,2]));//1.66666