// Global scope: The default scope for all code running in script mode. Any code that is not in any curly braces
// Module scope: The scope for code running in module mode.
//  Block Scope Example
// The scope created with a pair of curly braces (a block).

/*{
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  */
  {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }

  // JavaScript will traverse up the scope chain until it finds what it is looking for.
//   example beloww

  let x = 10;
  let y = 5;

{
	let z = x + y;
	console.log(z);
}

// A "truthy" value is any value that is considered true when it is encountered in a Boolean context




/*let num = 2;
if(num > 0){
    console.log('The number is positive.');
}
else{
    console.log('The number is negative.');



}*/
/*let userAge = prompt('Enter your age: ');

userAge = parseInt(userAge);// makes data to number type
console.log(typeof userAge);

if (userAge >= 18) {
    console.log('you can come in');
} else {
    console.log('get out!');
}

if (userAge >= 18) {
    console.log('you can come in');

} else if (userAge < 18 && userAge >= 15) {
    console.log('please call you mom');

} else {
    console.log('get out!');
}
*/

let num = 0;
if(num > 0 || num > 100){
    if (num > 0 && num < 100) {
        console.log('The number is positive.');
        console.log('The number is positive and less than 100.');
    } else {
        console.log('The number is positive.');
        console.log('The number is positive and greater than 100.');
        
    }

}else{
       console.log('The number is negative.');


    
}


let grade = prompt('Enter your grade:');
grade = parseInt(grade);
console.log(typeof grade);

if (grade >= 90) {

    console.log('You Ace the class your grade is A');  
}  
   else if(grade < 90 && grade >= 80){
        console.log('You did Great work your class grade is B');  
    }    
    else if (grade < 80 && grade >= 70) {
        console.log('You did the work your class grade is C');   
    }
    else if (grade < 70 && grade >= 60) {
        console.log('You did the bare minimum your grade is D');   
    }
 else {
    console.log('You did not even try your grade is F');
}