// BookmarkleterSizeWatcher.js


// 312 char
javascript:void function(){clearInterval(a);var a,b,c,d,e=a=>document.querySelector(a);c=document.createElement("span"),b=e("#InputLabel"),b.parentNode.insertBefore(c,e("#InputLabel")),console.log("clearInterval("+(a=setInterval(a=>{d!=(d=a.value.length)&&(c.innerText=d?"("+d+")":"")},20,e("#Output")))+")")}();



/*

clearInterval(timerSize);


var qs = (sel) => document.querySelector(sel);

var timerSize, elInput, elSize, lastSize;

elSize = document.createElement("span");

elInput = qs("#InputLabel");

elInput.parentNode.insertBefore( elSize, qs("#InputLabel") );

console.log( "clearInterval(" + (
  timerSize = setInterval( (elOutput) => {
    // console.log( "\n\n", lastSize, elOutput.value.length );
    if ( lastSize != ( lastSize = elOutput.value.length ) ) {
      elSize.innerText = (
        lastSize ? "(" + lastSize + ")" : ""
      );
    };
    // console.log( lastSize, elOutput.value.length );
  }, 20, qs("#Output") ) ) + ")"
);

*/


