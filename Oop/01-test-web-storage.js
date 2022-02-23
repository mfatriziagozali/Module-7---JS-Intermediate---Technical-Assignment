const sessionKey = "todoSesion";
// ref:001
// Stardar Object yang kita simpan ke Storage:
// [
//   {
//     id: 1,
//     title: "todo 1 title",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "todo 2 title",
//     completed: false,
//   },
// ];

/**
 * Mengembalikan value dari session yang memiliki key 'todoSession'.
 * Value yang di peroleh dari session storage bertipe String. Sehingga
 * diperlukan sebuah konversi dari string menjadi object.
 * Pada kalus ini bentuk object yang kita inginkan adalah seperti ref:001.
 */

function getTodoSession(){
    sesion = sessionStorage.getItem(sessionKey);
    if ( sesion === null){
        sessionStorage.setItem(sessionKey, "[]");
        sesion = sessionStorage.getItem(sessionKey);
    }    
    // konversi string kedalam object ref:001.
    const sesionObjek = JSON.parse(sesion);
    return sesionObjek;
}
// untuk posisi lokas storage
// here

function replaceSession (updateArrayObjek){
        const str = JSON.stringify(updateArrayObjek);
        sessionStorage.setItem(sessionKey, str);
}

// untuk replace lokal
// here

/**
 * Membuat element <li> {Todo Name} </li>
 */

function createNewTodoListName(todo){
     // <li> Todo Name </li>
     const li = document.createElement("li");
     li.textContent= todo.title;

     if (todo.complaed){
         li.classList.add("complated");

     }
     return li;
}
/**
 * menampilkan todo dari session kedalam DOM element.
 */

function loadCurrentTodoToContainer(){
    const container = document.getElementById("todo-container");
     // Untuk mencegah penambahan child yang duplikasi,
  // solusi paling mudah adalah kita hapus dulu semua child
  // kemudian kita ulangi nemanbahkan dari awal degan todo yang terbaru.
    container.innerHTML ="";
    const todos = getTodoSession();


    todos.forEach(eachTodo => {
        const listItem = createNewTodoListName(eachTodo);
        container.appendChild(listItem);

        //    setTimeout(() => {
        //      todos.forEach((eachTodo) => {
        //      const listItem = createNewTodoListName(eachTodo);
        //     container.appendChild(listItem);
        
    });
            // }, 3 * 1000);

};
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // mengubah form entries menjadi object biasa.
    const fd = new FormData(form);
    const data = Object.fromEntries(fd);
    // mengambil todo saat ini dari session
    const todos = getTodoSession();
    form.reset();

    // membuat todo baru dengan id yang baru.
    const nextID = todos.length + 1;
    const newTodo = {
        id : nextID,
        title : data.todo,
        completed :false,
    };

    // menambahkan todo terbaru kedalam todo saat ini.
    todos.push(newTodo);
    // karna kita sudah memodifikasi todo, artinya todo yang kita miliki saat ini
    // dengan todo yang ada di session itu berbeda.
    // sehingga kita perlu mengupdatenya.
      replaceSession(todos);
      // karna ada update baru di todo, kita perlu juga mengupdate tampilan DOM
      loadCurrentTodoToContainer();

});
loadCurrentTodoToContainer();