// Given an array of strings, use a function to reverse all the elements in the string in 
// ascending order and the specific elements in descending order
function reverse_elements(){
    

}
// Given an array of objects, each object representing a person with a name and age property, 
// write a function that returns the sum of all people who are less than 18 years.
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];
const people=[
    { name: 'Alice', age: 17 },
      { name: 'Eunice', age: 22 },
      { name: 'Charlie', age: 14 },
      { name: 'Max', age: 19 },               
];
 function arrayOfPeople(people){
    sum=0;
    for(let i=0;i<people.length;i++){ 
    if(people[i].age<18){
        sum+=people[i].age;
      }
    }
     return sum;
}

console.log(arrayOfPeople(people));

// Using JS functions and an array of numbers, 
// return positive if an element within the array
// is positive, negative if an element is negative, else zero
function negative_nums(array_nums){
    if(arrayOfPeople.nums>=0){
        return "positive"
    }
    else if(arrayOfPeople.nums<0){
        return "negative"
    }
    else{
        return "zero"
    }
}
let array_nums=[1,2,3,4,5]
console.log(negative_nums(array_nums))

// Given an array of objects, where each object represents an employee with an id, name, and salary 
// property, write a function that returns a new array of employee objects sorted by their 
// salary in ascending order.

