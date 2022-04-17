////reduceMethod
const products = [
  { name: 'Shampoo', price: 4.99 },
  { name: 'Donuts', price: 7.99 },
  { name: 'Cookies', price: 6.49 },
  { name: 'Bath Gel', price: 13.99 }
];
/*We're going to reduce the array 
of products to a single value: the total price. 
To do this, we'll create a 
getTotalAmountForProducts() function: */
function getTotalAmountForProducts(products) {
  let totalPrice = 0;/*We first declare a 
  totalPrice variable and set its initial value to 0.*/
  for (const product of products) {
    totalPrice += product.price;
  };

  return totalPrice;
}
/*We then iterate through the products in the basket
 and add the price of each to the total. 
 When the loop has finished, we return the totalPrice. */
console.log(getTotalAmountForProducts(products)); // LOG: 33.46

////count the number of coupons we have lying around the house:
const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];

function ourReduce(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
        accum = reducer(accum, element);
    };
    return accum;
}

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}

console.log(ourReduce(couponLocations, couponCounter, 6)); // LOG: 15
/*ourReduce() accepts three arguments:
 the array we want to reduce, the callback 
 function or reducer, and the initial value 
 for our accumulator variable. It then 
 iterates over the array, calling the 
 reducer function each time, which returns 
 the updated value of the accumulator. 
 The final value of the accumulator is returned at the end. */


 /*Demonstrate using reduce() with a Primitive Return Value */
 const doubledAndSummed = 
 [1, 2, 3].reduce(function(accumulator, element){ 
     return element * 2 + accumulator
    }, 0)
// => 12
console.log(doubledAndSummed);

/*Demonstrate using reduce() with an Object as the Return Value
The output of the reduce() method does not need to be a 
primitive value like a Number or String. Let's consider an 
example that accumulates array values into an Object.
    Say we want to create a roster of student wizards assigned 
to each Hogwarts house. Our start value might look like this:*/
const hogwartsHouses = {
  "Slytherin": [],
  "Gryffindor": [],
  "Hufflepuff": [],
  "Ravenclaw": []
}

incomingStudents.reduce(function(houses, student) { houses[sortingHat.assign(student)].push(student)}, hogwartsHouses)
hogwartsHouses["Gryffindor"]