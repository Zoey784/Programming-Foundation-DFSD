var arr = [1,2,3,4,5,6];
// var arr2 = [];

// for (i = arr.length -1; i >= 0; i--){
//     arr2.push(arr[i]);
// }
// console.log(arr2);

function reverseArray(arr){
    let newArr = [];
    for(let i = arr.length -1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
    // return newArr;
}

function reverseArray(arr){
    let newArr = [];
    for(let i = 0; i = arr.length; i--) {
        newArr.unshift(arr[i]);
    }
    console.log(newArr);
    // return newArr;
}