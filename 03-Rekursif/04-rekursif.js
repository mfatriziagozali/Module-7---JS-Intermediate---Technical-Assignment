// soal - 04

function trianglePattern(x, y) {
    if ( x === 0){
        return;
    }
    let tampungan = "";
    for ( let i = 0; i < y; i++){
        if (i < x - 1){
            tampungan += " "
        }
        else{
            tampungan += String.fromCharCode(64 + (y - x +(i - x) + 2));
        }
    }
    console.log(tampungan);
    trianglePattern (x - 1, y);
 }

const first = 5;
const second = 3;
const third = 2;

console.log("FIRST >>>>>>>>>>>>>>>>>>>>>>>>>>")
trianglePattern(first, first);
console.log("SECOND >>>>>>>>>>>>>>>>>>>>>>>>>>")
trianglePattern(second, second);
console.log("THRID >>>>>>>>>>>>>>>>>>>>>>>>>>")
trianglePattern(third, third);