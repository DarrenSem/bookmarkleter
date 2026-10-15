// BookmarkleterSizeWatcher.js


// 555 char  javascript:void function(){"use strict";function a(){let a,c,d=(a="\n",b=new Date)=>a+b.toLocaleTimeString().replace(/ /,"."+("00"+b.getMilliseconds()).slice(-3)+" "),e=document.querySelector("#InputLabel"),f=document.querySelector("#Output"),g=document.createElement("span");e.parentNode.insertBefore(g,e),clearInterval(b),b=setInterval(()=>{c=f.value.length,a!=c&&(a=c,g.innerText=a?"("+a+")":"")},20),Promise.resolve(d("// loaded BookmarkleterSizeWatcher.js @ ")).then(a=>(console.log("initSizeWatcher: clearInterval("+b+")"),console.log(a)))}var b;a()}();


//// /*


"use strict";


var timerSize;

function initSizeWatcher() {

  let now = (prefix = "\n", _dt = new Date) => {
    return (
      prefix +
      _dt.toLocaleTimeString().replace(
        / /,
        "."
        + ( "00" + _dt.getMilliseconds() ).slice(-3) + " "
      )
    );
  };

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

  // console.log(
  //   Promise.resolve( now("// BookmarkleterSizeWatcher.js @ ") )
  //   .then( logLine => (
  //     console.log( "clearInterval(" + timerSize + ")" )
  //     , logLine
  //   ) )
  // );
  Promise.resolve( now("// loaded BookmarkleterSizeWatcher.js @ ") )
  .then( logLine => (
    console.log( "initSizeWatcher: clearInterval(" + timerSize + ")" )
    , console.log( logLine )
  ) );

}; // end function initSizeWatcher() {

initSizeWatcher();

//// */


