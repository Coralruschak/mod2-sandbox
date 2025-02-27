/* To run the code in this file, run the command:
      node js_party/type_coercion_concatenation_interpolation_playground.js
*/

console.log("type_coercion_concatenation_interpolation_playground.js is running")

// PART 1: Type Coercion - The automatic implicit conversion of values from one data type to another
      // Type conversion is can be either implicit or explicit
// 1a. Look at the variable declarations and assignments below.  Guess what will log for creatureCount.  Uncomment and run it.
        var quantity = 3;
        console.log('quantity: ', quantity)
        var mythicalCreature = " unicorns";
        console.log('mythicalCreature: ', mythicalCreature)
        var creatureCount = quantity + mythicalCreature;
        console.log(creatureCount)

// 1b. In the example above, what is the data type of the quantity variable?
      // Integer
// 1c. In the example above, what is the data type of the mythicalCreature variable?
      // String
// 1d. In the example above, what is the data type of the creatureCount variable?  
//     How can a number plus a string equal a string?
      // JavaScript coered the 3 from an integer to a string and then concatenated the two strings together
      // If it a number as a string with and integer, you would have to explicitly convert the number string using the Number() method to get it to return a sum
      //     Take a few minutes to look up and read about Type Coercion in the MDN docs.




// PART 2: Concatenation
  // var brag = "I have " + quantity + " fancy" + mythicalCreature +"!"

// 2a. Ensure the quantity, mythicalCreature, and brag variables above are not commented out.  Click Run.

// 2b. The value of brag above is being created using concatenation. A way to link multiple values (strings, numbers, variables, etc) together into one string using the + operator.  Let's try it!
   // Declare a variable and assign it a string value of a friend's name.
   // Declare a variable and assign it a string value of a nice gesture.
   // Declare a variable "gratitude" and assign it a statement of thanks that uses concatenation and your other 2 variables.  For example:  "Thank you Kayla for pointing out the food in my teeth."

// 2c. Use the variables below to make a concatenated string.
      // var activity = 'talk'
      // var estrangedUncle = 'Bruno'




// PART 3: Interpolation
  // var bigBrag = `I have ${quantity} VERY fancy and sophisticated${mythicalCreature}!`  
        //Note the weird spacing between sophisticated and mythicalCreature above due to how we already included a space in the mythicalCreature value previously.

// 3a. Ensure the quantity, mythicalCreature, and bigBrag variables above are not commented out. Click Run.

// 3b. The bigBrag variable above uses a different way of combining values called interpolation. It accomplishes the same goal as concatenation but uses different syntax - backticks instead of quotes(``) and these guys ${}.  Let's try it!
     // Declare a variable and assign it a string value of a name.
     // Declare a variable and assign it a string value of a celebratory exclamation ("congrats", "woohoo", etc)
     // Declare a variable and assign it to a string value of a nice characteristic ("cute", "nice", etc)
     // Declare a variable "babyNote" and assign it a statement of new baby congratulations that uses interpolation and your other 3 variables.  For example: "Congratulations Trisha! I heard your new baby is adorable!"

// 3c. Use the variables below to make an interpolated string.
      // var celebration = 'birthday'
      // var age = 25

