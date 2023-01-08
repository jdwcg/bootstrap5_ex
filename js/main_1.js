const animals = [
   {name:'lion', size: 'big', isAggerssive: true, weight: 200},
   {name:'monkey', size: 'medium', isAggerssive: true, weight: 30},
   {name:'cat', size: 'small', isAggerssive: true, weight: 10},
   {name:'rat', size: 'small', isAggerssive: true, weight: 2},
]
// 조건문
// const x = 10;

// if(x == 10) {
//    console.log(`x is 10`);
// }
// if(x === 10) {
//    console.log(`x is 10`);
// } else {
//    console.log(`x is not 10`);
// }

const animal = "lione";
// const food = animal === 'lion' ? 'meat' :'appe';

// console.log(food);

switch(animal) {
   case 'lion':
      console.log('animal is lione');
      break;
      case 'monkey':
         console.log();
}

// 반복문
// for(let i = 0; i < animals.length; i++) {
//    console.log(animals[i].name);
// }

// for(let animal of animals) {
//    console.log(animals);
// }

// forEach, map, filter, reduce
// animals.forEach(function(animal,index) {
//    console.log(animal.weight);
//    console.log(index);
// });

// map
// const animalsNames = animals.map(function(animal){
//    // return animals.name;
//    return `Animal's name is ${animal.name} and size is ${animal.size}`;
// })

// console.log(animalsNames);

// 필터

// const smallAnimals = animals.filter(function(item){
//    return item.size === 'medium';
// })

// console.log(smallAnimals);

// 리듀스

// const numbers = [1,10,11,23,444];

// const total = numbers.reduce(function(acc, cur){
//    console.log(acc, cur);
//    return acc+cur;
// })

// console.log(total);

// const totalWeight = animals.reduce(function(acc,cur){
//    return acc + cur.weight;
// }, 0)
// console.log(totalWeight);