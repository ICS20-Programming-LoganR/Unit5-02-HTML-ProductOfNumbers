//created on May 2022
//created by Logan Rodriguez
//this file defines function for index.html

"use strict"

function answer () {
  //variables
  let sum = 0.00
  let counter = 1.00

  let firstNum = parseFloat(document.getElementById('first-num').value)
  let secondNum = parseFloat(document.getElementById('second-num').value) - 1

  //while loop
  for (counter = 0; counter <= secondNum; counter++){
    sum = sum + firstNum
  }

  //display the numbers
  document.getElementById('display-results').innerHTML = sum.toFixed(2)
}