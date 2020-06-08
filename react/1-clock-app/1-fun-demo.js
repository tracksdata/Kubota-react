// js: every function name itself its scope. 
// scope of 1-fun-demo.js is window
// parent scope of f1 is 1-fundemo.js
//var a = 10;
//var name='n1'
function f1() { // <<- f1
    //var a = 20;
    //var name='n2';
    function f2() { // <-- f2
        //var a = 30;
        //var name='n3'
        console.log('name is '+name); // local variable priority
    }
    f2();
}
f1();