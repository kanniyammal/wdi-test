// solution 1 - The Age Calculator

function caculateAge(birthyear, currentyear) {
 if (birthyear !== "" && currentyear !== "") {
  if (isValid(birthyear) !== false && isValid(currentyear) !== false) {
   if (currentyear > birthyear) {
    var result = Math.abs(currentyear) - Math.abs(birthyear);
    alert("You are either " + (result - 1) + " or " + result);
   } else alert("Your are wrong since birth year is not greater than current year");
  } else alert("the information is not valid");
 } else alert("field is empty");
}






// solution 2 - The Lifetime Supply Calculator

function calculateSupply(age, amount) {
 if (age !== "" && amount !== "") {
  if (isValid(age) !== false && isValid(amount) !== false) {
   if (age <= 70) {
    var maxYear = 70;
    var totalSupplyAge = maxYear - age;
    var result = totalSupplyAge * amount;

    alert("You will need " + result + " to last you until the ripe old age of " + maxYear);
   } else alert("Sorry you are dead with respect to database");
  } else alert("information not valid ");
 } else alert("field is empty");
}








// solution 3 - The Geometrizer

function calcCircumfrence(radius) {
 if (radius !== "") {
  if (isValid(radius) !== false) {
   var pi = 3.142;
   var circumference = 2 * pi * radius;
   alert("The circumference is " + circumference.toFixed(2));
  } else alert("Please enter valid information");
 } else alert("field is empty !!");
}

function calcArea(radius) {
 if (radius !== "") {
  if (isValid(radius) !== false) {
   var pi = 3.142;
   var area = pi * radius * radius;
   alert("The area is " + area.toFixed(2));
  } else alert("please enter valid information");
 } else alert("fields are empty!!");
}






// solution 4 - The Temperature Converter

function celsiusToFahrenheit(temp) {
 if (temp !== "") {
  if (isValid(temp) !== false) {
   var celsius = temp;
   var fahrenheit = (((celsius * 9) / 5) + 32);
   alert(celsius + " Celsius to  is Fahrenheit " + fahrenheit.toFixed(2) + "Fahrenheit");
  } else alert("Please provide valid information ");
 } else alert("Please fill in the fields !!");
}

function fahrenheitToCelsius(temp) {
 if (temp !== "") {
  if (isValid(temp) !== false) {
   var fahrenheit = temp;
   var celsius = (((fahrenheit - 32) * 5) / 9);
   alert(fahrenheit + "Fahrenheit to Celsius " + celsius.toFixed(2) + "Celsius");
  } else alert("Plese enter the valid information");
 } else alert("field is empty!!");
}


function isValid(val) {
 return !/[~`!#$%\^&()*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(val);
} 
