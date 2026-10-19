// BookmarkleterSizeWatcher.js


// 1370 char  javascript:void function(){"use strict";function a(){let a,d,e,f,g=(a="\n",b=new Date)=>a+b.toLocaleTimeString().replace(/ /,"."+("00"+b.getMilliseconds()).slice(-3)+" "),h=document.querySelector("#InputLabel"),i=document.querySelector("#Output"),j=document.querySelector("#Labels"),k=document.createElement("span"),l=/(the ).+?( of the Bookmarklet below)/,m=(b,g)=>{b=c?.L<d&&c?.L,g=d?"("+d+(b?" total, "+b+" selected":"")+")":"",k.innerText=g,e==m._&&(f=[...document.querySelectorAll("button[title]")].find(a=>l.test(a.title))||{title:l+"",style:{}});e!=!!b&&(e=b?1:0,f.title=f.title.replace(l,"$1"+["full contents","selected characters ("+b+")"][e]+"$2"));j.title="Bookmarklet total characters = "+d+(d?"\n(Copy to clipboard or drag the link)":""),a=d},n=(a,b,d,e)=>{a&&(a?.type&&(d=c?.a,e=c?.z,c.a=i.selectionStart,c.z=i.selectionEnd,c.T=i.value.slice(c.a,c.z),c.L=c.z-c.a,b=d==c.a&&e==c.z||getSelection().rangeCount&&k.contains(getSelection().getRangeAt(0)?.commonAncestorContainer)),b||setTimeout(m,20))};clearInterval(b),h.parentNode.insertBefore(k,h),[,,"Selectionchange","touchend","pointerup","mouseup","keyup"].filter(a=>a).forEach(a=>{document.addEventListener(a.toLowerCase(),n)}),b=setInterval(()=>{d=i.value.length,d!=a&&m()},20),Promise.resolve(g("// loaded BookmarkleterSizeWatcher.js @ ")).then(a=>(n(1),console.log(a)))}var b,c=location.S||={};a()}();


//// /*


"use strict";


var selected = ( location.S ||= {} );
// ^ selected = { a: elOutput.selectionStart, z: elOutput.selectionEnd, L: length of selected text, T: selected text };

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

  let sizeNow;

  let elInput = document.querySelector("#InputLabel");

  let elOutput = document.querySelector("#Output");

  let elLabels = document.querySelector("#Labels");

  let elSize = document.createElement("span");

  let selectedPrev;

  let REGEX_BTNCOPY = /(the ).+?( of the Bookmarklet below)/;

  let btnCopy;


  let softenThingsUp = () => {

    let STYLE_ID = "button-softener";

    let elStyle = document.querySelector("style#" + STYLE_ID);

    if (!elStyle) {
      document.head.appendChild( Object.assign( document.createElement("style"), { textContent: (
      "button:active,input[type='checkbox']:active,img:hover { transform: scale(0.97); }" // based on https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md
      + "\n" + "button,input,textarea,fieldset,label { border-radius: 0.42em; transition: transform 160ms ease-out; }"
      + "\n" + "input[type='text']:active,textarea:active,#OutputLink:active { transform: scale(0.995); transition: transform 100ms ease-out; }"
      ), id: STYLE_ID } ) );
    };

  };


  let renderSize = (_length, _msg) => {

    _length = selected?.L < sizeNow && selected?.L;

    _msg = (

      sizeNow

      ? "(" + sizeNow + (

        _length ? ( " total, " + _length + " selected" ) :
        // ^ selected = { a: elOutput.selectionStart, z: elOutput.selectionEnd, L: length of selected text, T: selected text };

        ""
      ) + ")"

      : ""
    );

    elSize.innerText = _msg;


    // grab the first "copy to clipboard" button at the 1st render
    if (selectedPrev == renderSize._) {
      btnCopy = (
        [... document.querySelectorAll("button[title]") ]
        .find( el => REGEX_BTNCOPY.test(el.title) )
      ) || { title: String(REGEX_BTNCOPY), style: {} };

    };

    // update that button's title during toggle of selectedPrev (0 if none or entire output, 1 otherwise)
    if ( selectedPrev != !!_length ) {
      selectedPrev = _length ? 1 : 0;
      btnCopy.title = btnCopy.title.replace(
        REGEX_BTNCOPY,
        "$1" + ["full contents", "selected characters (" + _length + ")"][selectedPrev] + "$2"
      );
    };

    // elSize.title = _msg;
    // elLabels.title = _msg;
    elLabels.title = "Bookmarklet total characters = " + sizeNow + (
      sizeNow ? "\n(Copy to clipboard or drag the link)" : ""
    );


    sizePrev = sizeNow;

  }; // end let renderSize = () => {


  let updateSelected = (eventOrForceRender, _skipRender, _aPrev, _zPrev) => {

    if (eventOrForceRender) {

      if ( eventOrForceRender?.type ) {

        _aPrev = selected?.a;
        _zPrev = selected?.z;

        selected.a = elOutput.selectionStart;
        selected.z = elOutput.selectionEnd;
        selected.T = elOutput.value.slice( selected.a, selected.z );
        selected.L = selected.z - selected.a;
        // ^ selected = { a: elOutput.selectionStart, z: elOutput.selectionEnd, L: length of selected text, T: selected text };

        _skipRender = (
          _aPrev == selected.a
          && _zPrev == selected.z
        ) || (
          getSelection().rangeCount && elSize.contains(
            getSelection().getRangeAt(0)?.commonAncestorContainer
          )
        );

      };

      if ( !_skipRender ) {
        setTimeout(renderSize, 20);
      };

    };

  }; // end let updateSelected = (eventOrForceRender) => {

  clearInterval(timerSize);

  softenThingsUp();

  elInput.parentNode.insertBefore( elSize, elInput );


  [
    ,
    , "Selectionchange" // trigger might be any of [click, drag, keyboard selection, and even page load] (document is target [based on spec] instead of textarea element)
    , "touchend" // (_might be useless) mobile-friendly (hopefully?)
    , "pointerup" // (_might be useless)mobile-friendly (hopefully?)
    , "mouseup"
    , "keyup"
    // , "click" // temporary during testing (to see if this also fires after selectionchange)
    ,
  ]
  .filter(v => v)
  .forEach( eventName => {
    (
      // eventName[0] < "a"
      // ? document
      // // ^ special case if first letter is Uppercase 
      // : elOutput
      document
    )
    .addEventListener(eventName.toLowerCase(), updateSelected);
  } );


  timerSize = setInterval( () => {
    sizeNow = elOutput.value.length;
    if ( sizeNow != sizePrev ) {
      renderSize();
    };
  }, 20);


  Promise.resolve( now("// loaded BookmarkleterSizeWatcher.js @ ") )
  .then( logLine => (
    updateSelected(1),
    // console.log( "initSizeWatcher: cancel via clearInterval(" + timerSize + ")" ),
    console.log( logLine )
  ) );

}; // end function initSizeWatcher() {

initSizeWatcher();

//// */

