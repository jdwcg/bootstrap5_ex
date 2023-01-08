const name = "june Lee";
const age = 35;
const weigth = 76.3;
const isMale = true;
const money = null;
const girlfriend = undefined;
let boyfriend;
const hobbies = "baseball, basketball"

console.log(`제이름은 ${name} 입니다. 나이는 ${age}`)

console.log(name.substring(0,4).toUpperCase())

console.log(name.split(""))
console.log(hobbies.split(","))

const animal = ["lion","bear","monkey"]
let animals = ["lion","bear","monkey"]
console.log(animal[1])

animal[3] = "deer";

console.log(animal)

animals.push("test");
animals.unshift("hippo");
animals.pop("hippo");
console.log(animals)

console.log(animals.indexOf('bear'));

const bearIndex = animals.indexOf('bear')

animals.splice(bearIndex, 1)

animals.splice(1,1)
console.log(animals);

//Object

const monkey = {
   name : 'ringo',
   face : 'funny',
   age : 11,
   food: ["banna", "apple", "strawberry"],
   tail :true,
   location: {
      country: "Conggo",
      place: "forest",
      isAfrica: true,
   }
}

console.log(monkey);
console.log(monkey.location.place);

monkey.name = "star";
console.log(monkey.name);
monkey.food[1] = "peanut"
console.log(monkey.food);

monkey.weight = 50;
console.log(monkey);

// 오브젝트를 제이슨형태로 바꿈
const monkeyJSON = JSON.stringify(monkey);

console.log(monkeyJSON);

// 제이슨 받아온걸 파싱하면 
const monkeyJSONParse = JSON.parse(monkeyJSON)

// 이렇게 가져올수있다
console.log(monkeyJSONParse.name);