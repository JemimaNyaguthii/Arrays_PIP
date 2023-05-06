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

 function arrayOfPeople(people){
    return people.filter(people=>people.age>=18,
    people=>people.name)
 }
 const people=[
    { name: 'Alice', age: 17 },
      { name: 'Eunice', age: 22 },
      { name: 'Charlie', age: 14 },
      { name: 'Max', age: 19 },               
];
console.log(arrayOfPeople(people))

// Using JS functions and an array of numbers, 
// return positive if an element within the array
// is positive, negative if an element is negative, else zero
function negative_nums(array_nums){
    for (leti= 0;i < array_nums.length;i++) {
        if (i<0) {
            return positive
            
        }
        else{
            return positive
        }
    
        
    }
    
}
let array_nums=[1,4,5,6,7,8,9];
console.log(negative_nums(array_nums))

