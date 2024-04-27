// let array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let element = array[1][2];
// console.log("Element at the second row and third column:", element);

// array[1][2] = 10;

// console.log("Updated array:");
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

let matrix = [
    [1, 2, 3],
    [4,5,6,],
    [7,8,9,]
];

for(let row=0; row< matrix.length;row++){
    for(let col =0;col<matrix[row].length; col++){
        console.log(matrix[row][col]);
        console.log(`Element at [${row}][${col}]: matrix[${row}][${row}]`);
    }
}

