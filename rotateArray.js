
// Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements.

const inputArr = [40, 13, 27, 87, 95, 40, 96, 71, 35, 79, 68, 2, 98, 3, 18, 93, 53, 57, 2, 81, 87, 42, 66, 90, 45, 20, 41, 30, 32, 18, 98, 72, 82, 76, 10, 28, 68, 57, 98, 54, 87, 66, 7, 84, 20, 25, 29, 72, 33, 30, 4, 20, 71, 69, 9, 16, 41, 50, 97, 24, 19, 46, 47, 52, 22, 56, 80, 89, 65, 29, 42, 51, 94, 1, 35, 65, 25];

Array.prototype.spliceArray = function (splice) {
    let arrayLength = this.length
    let tempArr = []
    if (this.length <= splice) return this;
    for (let i = 0; i < arrayLength; i++) {
        if (i === splice) break;
        tempArr.push(this.shift())
    }
    return tempArr;
}

function rotateArray(arr, d, n) {
    // cut the size of numbers from array;
    let size = arr.spliceArray(d);
    let elements = arr.spliceArray(n);
    let remainedArr = arr.spliceArray();
    return [...elements, ...size, ...remainedArr]
}

console.log(rotateArray(inputArr, 77, 69));

