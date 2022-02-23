// soal - 01

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverseArr(arr) {
  const duplicateArr =  [...arr]
    const result = duplicateArr.reverse();
    return result;
  }
// reverse();


const newArr =reverseArr(arr);
const newArr2 =reverseArr(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

console.log("---------------------------------------------------------------------------------------")