// BookmarkleterSizeWatcher.js


// 334 char
javascript:void function(){function a(){let a,c,d=document.querySelector("#InputLabel"),e=document.querySelector("#Output"),f=document.createElement("span");d.parentNode.insertBefore(f,d),clearInterval(b),b=setInterval(()=>{c=e.value.length,a!=c&&(a=c,f.innerText=a?"("+a+")":"")},20),console.log("clearInterval("+b+")")}var b;a()}();



/*

var timerSize;

function init() {

  let sizePrev;

  let sizeNext;

  let elInput = document.querySelector("#InputLabel");

  let elOutput = document.querySelector("#Output");

  let elSize = document.createElement("span");

  elInput.parentNode.insertBefore( elSize, elInput );

  clearInterval(timerSize);

  timerSize = setInterval( () => {

    sizeNext = elOutput.value.length;

    // console.log( "\n\n", elSize.innerText, sizePrev, sizeNext );
    if (sizePrev != sizeNext) {
      sizePrev = sizeNext;
      elSize.innerText = (
        sizePrev ? "(" + sizePrev + ")" : ""
      );
    };
    // console.log( elSize.innerText, sizePrev, sizeNext );

  }, 20 ) ;

  console.log( "clearInterval(" + timerSize + ")" );

};

init();

*/


