const Cars = ["Honda", "Toyota", "Ford", "Subaru"]
Cars[0] = "Hyundai";
/*we used [] "bracket notation" with the number of Honda(0) in the Array to change it to Hyundai*/
/*Next, we will use .splice.  .splice takes 3 parameters:
1. index (the position of the number in the array)
2. number of items to be removed
3. *optional* the new items to be added
*/
console.log(Cars);
Cars.splice(2,0,"Mercedes");
console.log(Cars);


