// soal - 02

const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg(arr, avg ) {
    if (arr.length === 0){
        return 0;
    }
    let i = 0;
    if (arr[0] > avg){
        i = 1;
    }
    return i + countAboveAvg(arr.slice(1), avg);
  }

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

console.log("---------------------------------------------------------------------")