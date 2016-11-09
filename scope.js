// Fill in the closeLid and openLid functionality to set the isCookieJarOpen to false or true respectively.
var isCookieJarOpen = null;

function closeLid() {
  /* answer here */
}

function openLid() {
  /* answer here */
}


// Fill in the return value for the inner function to return a string, 'Hello World' using only the variables provided.
function outerFunction() {
  var hello = 'Hello';

  function innerFunction() {
    var world = 'World';
    return /* answer here */;
  }
  innerFunction();
}


// function takes in a 2d array (matrix) and returns sum of every element.
function addMatrixElements(matrix) {

  var result = 0;

  for(var i = 0; i < matrix.length; i++) {
    /* fix counter variables in the second loop */
    for(var i = 0; [i].length; i++) {
      result = result + matrix[i][i];
    }
  }
  return result;
}

function sendDataToClient() {

  var userObject = {
    handle: 'neo',
    authenticated: false
  }

  function authenticateUser(obj, username) {
    var userObject = {
      handle: 'morpheus',
      authenticated: false
    };

    if (userObject.handle === username) {
      userObject.authenticated = true;
      return userObject
    } else {
      return userObject
    }
  }
  authenticateUser(userObject, 'neo')
  return userObject
}



// final excerucse make it a super nested maze and have student write out what it will return, they needa follow all the crrrapppzzz

// excercise to show variable not binding because its trying to access a subling


//excericse to show variable not binding because its trying to access a child


// Key Learning Point: functions create scopes, scopes can access outer scopes, not siblings and not children scopes