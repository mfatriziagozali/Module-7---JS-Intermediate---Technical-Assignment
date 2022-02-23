// soal - 02
  
function getObjectValue(obj, path) {
    const isi  = path.split('.')
      if (obj[isi[0]][isi[1]][isi[2]] == undefined) {
        return null;
      } else {
        return obj[isi[0]][isi[1]][isi[2]]
      }
  
  }
  
  const milkBasedCoffee = {
    name: "latte",
    ingredients: {
      espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
      },
      milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
      }
    },
  }
  
  const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
  const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
  const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
  
  console.log(espresso);
  console.log(coffeeBrand);
  console.log(isMilkVegan)
  
  console.log("--------------------------------------------------------------------")