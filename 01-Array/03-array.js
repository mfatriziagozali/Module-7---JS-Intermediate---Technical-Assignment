// soal - 03

const arr34 = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  // function searchInArray(arr, num) {
  //   const newArray = [];

    // cara 1
    // 1.buat array baru yang nanti satu baris
    // expected nya [10, 9, 7, 1, 2, 8] dan masukin ke variabel newArray

//   function gabunganArr (arrAwal, arrAkhir){

//     for (let i = 0; i <= arrAkhir.length; i++){
//         arrAwal.push(arrAkhir[i]);
//         const isIn = (element) => element === num;
//         console.log(newArray.findIndex(isIn));
//         const result = newArray.findIndex(isIn);
//       if (result === -1){
//         return null;
//       }
//       else{
//         return result;
//       }
   
//     }return arrAwal;
//   }
// }

// cara - 2

function searchInArray(arr, num) {
var newArray = arr.reduce(function(sebelum, sesudah) {
    return sebelum.concat(sesudah);
});
let hasil = newArray.indexOf(num);
if (hasil == -1) {
    return null;
} else {
    return hasil;
}
}
  

  
  console.log(searchInArray(arr34, 3));
  console.log(searchInArray(arr34, 2));
  console.log(searchInArray(arr34, 4));
  console.log(searchInArray(arr34, 8));