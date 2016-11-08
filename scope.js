// Fill in the closeLid and openLid functionality to set the isCookieJarOpen to false or true respectively.
var isCookieJarOpen = false;

function closeLid() {
  /* answer here */
}

function openLid() {
  /* answer here */
}


// Fill in the return value for the inner function to return a string, 'Hello World' using only the variables provided.
function outerFunction() {
  var myOutterVar = 'Hello';

  function innerFunction() {
    var myInnerVar = 'World';
    return /* answer here */;
  }
  innerFunction();
}


// learning point: loops do not create their own scopes, very typical mistake for beginners using nested loops
// function takes in a 2d array (matrix) and returns sum of every element.
function addMatrixElements(matrix) {

  var result = 0;

  for(var i = 0; i < matrix.length; i++) {
    for(var i = 0; [i].length; i++) {
      result = result + matrix[i][i];
    }
  }
  return result;
}

// excercise to show variable not binding because its trying to access a subling


//excericse to show variable not binding because its trying to access a child


// Key Learning Point: functions create scopes, scopes can access outer scopes, not siblings and not children scopes