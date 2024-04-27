//q4
//1D array
let d_array = [0,3,4,5];
let sum =0;

for (let i = 0; i <  d_array.length; i++) {
    sum += d_array[i]; //sum = sum + d_array[i]
}

//2d array
let d_array2 = [
    [3,4,5,6],
    [5,1,3,6]
];
let totalsum = 0;
// i = row
// j = col
for (let i = 0; i<d_array2.length; i++) {
    console.log(`Current Row: ${i} | Current Col: ${j}`)
    for (let j = 0; j <d_array2[i].length; i++){
        totalsum += d_array2[i][j];
    }
}