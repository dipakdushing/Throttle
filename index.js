
//Write a program for toggling.....

function toggler(a,b,c){
    console.log(a);
    
    return function (){
        console.log(b);
        return function (){
            console.log(c);
        }
    }
}

var toggle = toggler(1,2,3);
var x=toggle();
x()