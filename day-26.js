//https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = (people) => people.sort((a, b) => a.age - b.age);

//https://www.codewars.com/kata/52597aa56021e91c93000cb0/


const moveZeros = (arr) => arr
    .filter((v) => v !== 0)
    .concat(arr.filter((v) => v === 0));
