// soal - 03

const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, nilai) {
    if (arr[arr.length - 1] === nilai) {
        return "angka ditemukan pada index: " + (arr.length - 1);
    }
    if (arr.length === 1) {
        return "angka tidak ditemukan";
    }
    return searchInArray(arr.slice(0, -1), nilai);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

console.log("---------------------------------------------------------")