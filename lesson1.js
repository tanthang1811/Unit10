{
  function person(name, age, favDrink) {
    this.name = name;
    this.age = age;
    this.favDrink = favDrink;
    this.changeName = function (name) {
      this.name = name;
    }
    this.changeAge = ageChanging;
  }
  function ageChanging() {
    return 2018 - this.age;
  }
  var p1 = new person("Alex", 30, "Apple Juice");
  var p2 = new person("Hagi", 23, "Pineapple Juice");
  var Max = { name: "Max", age: 18, favDrink: "Beer" };
  console.log(Max);
  console.log(p1.name);
  p1.changeName("Christian");
  console.log(p1.changeAge());
  var people = new Array[p1,p2,Max];
  people.forEach(element => {
    alert(element);
  });

}
