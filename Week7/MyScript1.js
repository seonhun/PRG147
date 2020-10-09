// MyScript1 displays the current date

var scriptDate = Date(); 

(function (dispDate) {

    function display(dispDate)
    {
        alert("The current date is: " + dispDate);
    }

    display(dispDate);
})(scriptDate); 


// var course = {
//     title: "JavaScript Essential Training",
//     instructor: "Morten Rand-Hendriksen",
//     level: 1,
//     published: true,
//     views: 0,
//     updateViews: function() {
//         return ++course["views"];
//     }
// }

// console.log(course);
// const newcourse = "permanent unchangeable variable"
// var currentDate = new Date();
// var course02 = new Course();

// function Course(title,instructor,level,published,views) {
//     this.title = title;
//     this.instructor = instructor;
//     this.leel = level;
//     this.published = published;
//     this.views = views;
//     this.updateViews = function() {
//         return ++this.views
//     };
// }

// var course01 = new Course("JavaScript Essential Training","Morten Rand-Hendriksen",1,true, 0)
//  console.log(course01);

//  var courses = [
//      new Course("JavaScript Essential Training","Morten Rand-Hendriksen",1,true, 0)
//  ]
//  console.log(courses[1].updateViews());

//  function doSomeMath() {
//      var a = 5;
//      var b = 4; // local variable that is not valid outside of function
//     //  var sum = a + b;
//     //  return sum;

//      function multiply() {
//          var result = a*b;
//          return result;

//      }
//      return multiply;
//  }

//  var theResult = doSomeMath();

//  console.log("Theresult: ", theResult());

//  function giveMeEms(pixels) {
//      var baseValue = 16;
//      function doTheMath() {
//          return pixels/baseValue;
//      }
//      return doTheMath;
//  }

//  var smallSize = giveMeEms(12);
//  var mediumSize = giveMeEms(18);
//  var largeSize = giveMeEms(24);
//  var xlargeSize = giveMeEms(32);