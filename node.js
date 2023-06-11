// 1. Write a function that takes an array of numbers and returns the sum of the array.

    let nums = [2,2,3,2,10];

    function findSum(nums){
    let sum = 0;
    for( let i = 0; i < nums.length; i++){
	sum += nums[i];
}
    
    return sum;
}
  findSum(nums);


//   2. Write a function that takes an array of strings and returns the longest string in the array.


let names = ["Connie", "Yarpawolo", "Leelos", "Ben"];
function arrayOfStrings(names){

let longestString = [""];
for( let i = 0; i < names.length; i++){

    if( names[i].length > longestString.length){

        longestString = names[i];
    }
}
        return longestString;
}
    arrayOfStrings( names);

    
    // Write a function that takes an array of numbers and returns an array 
    // of the even numbers in the array. 

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
    function findEvenNumbers( numbers){
  
          let evenNums = [];
          for ( let i = 0; i < numbers.length; i++){
  
              if( numbers[i] % 2 === 0){
  
                  evenNums[evenNums.length] = numbers[i];
              }
          }
  
              return evenNums;
         } 
         
            findEvenNumbers(numbers);


// Write a function that takes an array of numbers and returns an array of the 
// numbers in reverse order.

         let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 34];
         function listReverseNumber(arr){

         let reverseNums = [];
         for( let i = arr.length - 1; i >= 0; i--){

         reverseNums[reverseNums.length] = arr[i];
           }
       
           return reverseNums;

      }      
        listReverseNumber(arr);

        //    5. A word is given write a punction to tell if the word is a Palindrome.

            
          
        //  6. create a person object and create a method on the 
       //  person object to update the name on the person object

        
