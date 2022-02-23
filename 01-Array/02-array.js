// soal - 02

const arr1 = [1, 3, 4, 1, 2, 8];
const arr3 = [5, 6, 7, 8, 1, 3];

// function getAverage( ) { 

//  }

// console.log(getAverage(arr1))
// console.log(getAverage(arr3))

function getAverage(arr1){
  let total = 0;
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i]
  }
  let avg = sum / arr1.length
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > avg) {
          total++
      }
  }
  return total;
}
console.log(getAverage(arr1))
console.log("Ada 2 bilangan yang melebihi nilai rata-rata yaitu 4 & 8")
console.log(getAverage(arr3))
console.log("Ada 3 bilangan yang melebihi nilai rata-rata yaitu 6, 7, dan 8")


    console.log("---------------------------------------------------------------------------")