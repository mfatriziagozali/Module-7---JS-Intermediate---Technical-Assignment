// 1. Apa itu synchronous?
console.log( 'nomor 1')
console.log("synchronous merupakan salah satu jenis operasi javascript yang mana operasi akan dijalankan secara berurutan, jadi sebuah operasi akan dijalankan setelah operasi sebelumnya selesai.")
// 2. Apa itu asynchronous?
console.log('nomor 2')
console.log("sebuah operasi akan dijalankan tanpa perlu menunggu operasi sebelumnya selesai. asynchronous merupakan kebalikan dari synchronous");
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
console.log('nomor 3')
console.log("asynchronous dapat diterapkan di browser");
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
console.log('nomor 4')
console.log("console.log pertama mencetak angka 1, 2, 3, 4, 5. sedangkan console.log kedua mencetak angka 6.");
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
console.log('nomor 5')
console.log("ketidak samaan terjadi karena pada console.log pertama terjadi proses looping pada nilai variabel i yang bersifat global dimulai dari 0 sampai 5. sementara pada console.log kedua akan terjadi proses pemanggilan setelah proses looping pada console.log pertama selesai")

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
}

    for (let j = 1; j <= 5; j++)
    setTimeout(() => console.log("second log: ", j), 2000); // 02 - Kedua