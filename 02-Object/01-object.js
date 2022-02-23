// soal - 01
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "Coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(str) {
      return "Hello, John Watson";
      console.log("hello world")
  
    }
  };
  
  /// EDIT HERE
  person.name = "Rizi";
  person.favDrinks.splice(1, 2, "tap water", "tea");
  
  
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));
  
  console.log("--------------------------------------------------------------------")