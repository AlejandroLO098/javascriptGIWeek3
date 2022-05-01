// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

var exercise = function(activity) {
    var exercise2 = function(){
        return `Today's exercise: ${activity}`
    }
    return exercise2
}

var run = exercise('running');
console.log(run())

var swim = exercise('swimming');
console.log(swim())





















