// function sumPositiveNumber([arr]) {
//     let sum = "0";
//     for(i= 1; i <= arr.length; i++) {
//         if(arr[i] >= 1){
//             sum += arr[i];
//             return sum;
//         }
//     }   
// }

// console.log(sumPositiveNumber([-1, 0, 1, 2]))

//cher answers
function sumPositiveNumber(arr) {
    sum = 0;
    for(i= 0; i <= arr.length; i++) {
        if(arr[i] > 0){
            sum += arr[i];
        }
    }   
    
    return sum;
}

// console.log(sumPositiveNumber([-1, 0, 1, 2]))
console.log(sumPositiveNumber([-1, 2, -3, 4, -5, 6]));