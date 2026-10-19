// BookmarkleterCopyToClipboard.js


// 2287 char  javascript:void function(){"use strict";var a=location.S||={},b=(a,b,c,d)=>{let{class:e,style:f,...g}=a||={},h=Object.assign(document.createElement(b||"button"),g),i=((e||"")+" "+(d||"")+" "+(b?"":" icon ")).split(" ").filter(a=>a);return i.length&&h.classList.add(...i),Object.entries({...f,...c}).forEach(([a,b])=>{h.style[a]=b}),h};(function(c){let d,e,f=document.querySelector("#InputLabel"),g=document.querySelector("#Output"),h=document.querySelector("#OutputLabel"),i=document.querySelector("textarea#pastebin"),j=(a="\n",b=new Date)=>a+b.toLocaleTimeString().replace(/ /,"."+("00"+b.getMilliseconds()).slice(-3)+" "),k=(a,b,c)=>(setTimeout(()=>a?.focus?.(),b||0),c?.(),a),l=(a,b)=>getComputedStyle(a)[b]?.match(/^([\d.]*)(.*)/),m=async(a,b,c,d)=>(b=b||(a=>{}),c=c??40,d=d||2e3,new Promise(e=>{let f,g,h,i=()=>{navigator.clipboard.writeText(a).then(c=>{j(),e(b(a))}).catch(a=>{f=a}).finally(()=>{h&&k()})},j=()=>{[g,h].forEach(clearTimeout),h=0},k=()=>g=setTimeout(i,c);h=setTimeout(c=>{j(),e(b(a,f||1))},d),"DEBUG_DELAY_INITIALLY_AKA_DO_NOT_INSTANTLY_DO_FIRST_TRY"?i():k()})),n=async b=>{let c=(a,b)=>{let c,d;b?(c="\u274CClipboard copy FAIL. "+b+"\n",console.error(j(),c,{["data("+a.length+")"]:a,err:b}),d=["FAILURE",a,b]):(c="\u2705Clipboard copy successful.\n",console.log(j(),c,{["data("+a.length+")"]:a}),d=["SUCCESS",a]);return d},d=a?.T||g.value;if(!d.length)return i.value.trim()||(i.value="// "+i.placeholder+"\n"),k(i),c(d,i.placeholder);g.select(),k(i);let e=await m(d,c);if(e&&!e[2])return e;let f=document.execCommand("copy")&&c(d);return f},o=a=>{d=b({id:"Copy",onclick:n,innerText:"\uD83D\uDCCB",title:"Click to copy to clipboard \nthe contents of the Bookmarklet below \\/"}),e=d.style;let c="middle";if(e.verticalAlign="middle",a){let a=l(h,"paddingLeft")??["12px","12","px"],b=l(h,"paddingBottom")??["6px","6","px"],c=.75*+a[1]+a[2];e.marginRight=c;let f=.75*+b[1]+b[2];e.marginBottom=f,h.prepend(d)}else{let a=l(f,"paddingLeft")??["12px","12","px"],b=l(f,"paddingBottom")??["6px","6","px"],c=.75*+a[1]+a[2];e.marginLeft=c;let g=.75*+b[1]+b[2];e.marginBottom=g,f.append(d)}};o(c),Promise.resolve(j("// loaded BookmarkleterCopyToClipboard.js @ ")).then(a=>(k(i),setTimeout(a=>document.querySelector("#ErrorOutput").style.display="",999),console.log(a)))})()}();


//// /*


"use strict";


var selected = ( location.S ||= {} );
// ^ selected = { a: elOutput.selectionStart, z: elOutput.selectionEnd, L: length of selected text, T: selected text };


var createButton = (attributesObject, tagNameString, styleObject, classNameString) => {

  let DEFAULT_BUTTON_CLASSNAME = " icon "; // added to end of classes if !tagNameString

  let { class: _class, style: _style, ...restivus } = ( attributesObject ||= {} );

  let el = Object.assign( document.createElement(tagNameString || "button"), restivus );

  let classes = (
    ( _class || "" )
    + " " + ( classNameString || "" )
    + " " + ( !tagNameString ? DEFAULT_BUTTON_CLASSNAME : "" )
  ).split(" ").filter(v => v);

  if ( classes.length ) { el.classList.add(...classes); };

  Object.entries( { ..._style, ...styleObject } )
  .forEach( ( [ key, value ] ) => { el.style[ key ] = value; } );

  return el;

};


function initClipboard(rightSide) {


  let elInputLabel = document.querySelector("#InputLabel");

  let elOutput = document.querySelector("#Output");

  let btnCopy;

  // let elOutputLabel = [...elInputLabel.parentNode.querySelectorAll("label")].at(-1);
  let elOutputLabel = document.querySelector("#OutputLabel"); // DEBUG_COPY_BUTTON_THE_RIGHT_SIDE

  // let textareaFirstFocus = [...document.querySelectorAll("textarea")].find( el => el.outerHTML.includes("updateBookmarklet") );
  let textareaFirstFocus = document.querySelector("textarea#pastebin");


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

  // let clicker = new PointerEvent( "pointerdown",{ bubbles: true } );

  // let click = (el, useNormalClick) => ( ( useNormalClick ? el?.click() : el?.dispatchEvent?.(clicker) ), el );

  let focus = (el, msDelay, fnAfter) => { setTimeout( () => el?.focus?.(), msDelay || 0 ); fnAfter?.(); return el; };

  let getFirstNumericStyle = (el, propName) => getComputedStyle(el)[propName]?.match(/^([\d.]*)(.*)/);


  let copyToClipboard = async (text, fnAfter, msPolling, msTimeout) => {

    // console.log( { text, fnAfter, msPolling, msTimeout } ); debugger;

    fnAfter = fnAfter || ( _ => {} );

    // debugger;
    msPolling = msPolling ?? 40;

    msTimeout = msTimeout || 2000;

    // debugger;
    return new Promise( (resolve) => {

      let lastError;

      // let isRunning; // used for preventing DUPLICATE CALLS of writeText() while the first attempt is not finished yet (e.g. if msPolling is very low like 40)

      let clipboardWriteText = () => {

        // if (!isRunning) {
        if (true || !isRunning) {

          // isRunning = 1; // comment out to confirm DUPLICATE CALLS of writeText() while the first attempt is not finished yet (e.g. if msPolling is very low like 40)
          // ^ DONE: confirmed, no longer NEED this because switched to timerPolling = setTimeout() instead of setInterval()

          navigator.clipboard.writeText(text)
          .then( _ => {

            clearTimers();

            resolve( fnAfter(text) );  // Success: resolve with fnAfter result

          })
          .catch(err => {

            lastError = err;  // Save last error (used for Timeout) then retry on next interval (comment out to verify " || 1" works)

          })
          .finally( () => {

            // console.log("_finally_"); debugger; // for testing esp. during DUPLICATE CALLS

            if (timerTimeout) {
              // isRunning = 0; // required if switched back to timerPolling = setInterval() instead of setTimeout()
              startPolling();
            };

          } );

        }; // end if (true || !isRunning) {

      };

      let timerPolling;

      let timerTimeout;

      let clearTimers = () => {
        [ timerPolling, timerTimeout ].forEach(clearTimeout);
        timerTimeout = 0;
      };

      let startPolling = () => timerPolling = setTimeout( clipboardWriteText, msPolling );

      timerTimeout = setTimeout( _ => {

        clearTimers();

        resolve( fnAfter(text, lastError || 1) );  // Timeout: resolve with fnAfter and last error (or 1, to make sure 2nd arg is truthy)

      }, msTimeout );

      if (!"DEBUG_DELAY_INITIALLY_AKA_DO_NOT_INSTANTLY_DO_FIRST_TRY") {
        startPolling();
      } else {
        clipboardWriteText(); // instantly do first try
      };

    } ); // end return new Promise( (resolve) => {

  };


  let handleCopyClick = async (_evt) => { // based on https://beautifier.io/

    // console.log( { _evt } ); debugger;


    let fnAfterCopy = (data, err) => {

      // console.log( { data, err } );
      // debugger; // temp for testing why DUPLICATE CALLS when writeText() was successful

      let message;

      let returned;

      if (err) {

        message = "❌Clipboard copy FAIL. " + err + "\n";

        console.error( now(), message, { ["data(" + data.length + ")"]: data, err } );

        returned = ["FAILURE", data, err];

      } else {

        message = "✅Clipboard copy successful.\n";

        console.log( now(), message, { ["data(" + data.length + ")"]: data } );

        returned = ["SUCCESS", data];

      };

      if (!"DEBUG_ALERT_TOO") {
        // alert( message + "\n\ndata:" + JSON.stringify( data, 0, 2 ) );
        alert( message + "\ndata(" + data.length + ")=" + data );
      } else { ; };

      return returned;

    }; // end let fnAfterCopy = (data, err) => {


    let minifiedCode = (

      selected?.T ||
      // ^ selected = { a: elOutput.selectionStart, z: elOutput.selectionEnd, L: length of selected text, T: selected text };

      elOutput.value

    );


    if ( !minifiedCode.length  ) {

      if ( !textareaFirstFocus.value.trim() ) {
        // textareaFirstFocus.value = '"' + textareaFirstFocus.placeholder + '"\n';
        textareaFirstFocus.value = "// " + textareaFirstFocus.placeholder + "\n";
      };

      focus(textareaFirstFocus);

      return fnAfterCopy(minifiedCode, textareaFirstFocus.placeholder);

    };


    if (!"DEBUG_USE_THE_EDITOR_FROM_BEAUTIFIER_IO" && the.editor) {

      the.editor.execCommand('selectAll');

      let currentText = the.editor.getValue();

      let copyArea = $('<textarea />')
        .text(currentText)
        .attr('readonly', '')
        .css({ 'position': 'absolute', 'left': '-9999px' });

      $('body').append(copyArea);

      copyArea.select();

      document.execCommand('copy');

      copyArea.remove();

      return minifiedCode;

    };
    

    // $('#source').select();
    elOutput.select();

    // console.log( { minifiedCode, fnAfterCopy } ); debugger;


    // setTimeout( () => click(elOutput), 2000 )
    // setTimeout( () => click(elOutput, !!"useNormalClick"), 2000 )
    // setTimeout( () => click(textareaFirstFocus), 2000 )
    // setTimeout( () => click(textareaFirstFocus, !!"useNormalClick"), 2000 )
    focus(textareaFirstFocus);

    let clipboardCopyModernBrowsers = (

      // await copyToClipboard(minifiedCode, fnAfterCopy, 0) // temp for confirming msPolling can be 0 instead of its default 40
      // await copyToClipboard(minifiedCode, fnAfterCopy, 499) // temp for testing "no focus" failure or "DELAY_INITIALLY", OR for confirming no longer DUPLICATE CALLS of writeText() while the first attempt is not finished yet (e.g. if msPolling is very low like 40)
      await copyToClipboard(minifiedCode, fnAfterCopy) // defaults: msPolling = 40 [0 is permitted], msTimeout = 2000 [0 is NOT permitted]

    );


    // debugger;
    if (clipboardCopyModernBrowsers && !clipboardCopyModernBrowsers[2] ) {
      // ^ returned = ["FAILURE", data, err];
      // versus returned = ["SUCCESS", data];
      return clipboardCopyModernBrowsers;
    };

    // debugger;
    let clipboardCopyLegacyBrowsers = (
      document.execCommand("copy")
      && fnAfterCopy(minifiedCode)
    );
    return clipboardCopyLegacyBrowsers;

  }; // end let handleCopyClick = async (_evt) => { // based on https://beautifier.io/


  let style;

  let createCopyButton = (rightSide) => {

    btnCopy = createButton( {
      id: "Copy",
      onclick: handleCopyClick, // btnCopy.addEventListener("click", handleCopyClick);
      innerText: "📋",
      title: "Click to copy to clipboard \nthe contents of the Bookmarklet below \\/",
    } );

    style = btnCopy.style;

    //// let verticalAlign = "baseline"; // (default?) Aligns the baseline of the element with the baseline of its parent. The baseline of some replaced elements, like <textarea>, is not specified by the HTML specification, meaning that their behavior with this keyword may vary between browsers. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/vertical-align#baseline
    let verticalAlign = "middle"; // Aligns the middle of the element with the baseline plus half the x-height of the parent. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/vertical-align#middle
    style.verticalAlign = verticalAlign;


    if (rightSide) {

      let labelPaddingLeft = getFirstNumericStyle(elOutputLabel, "paddingLeft") ?? [ "12px", "12", "px" ];
      let labelPaddingBottom = getFirstNumericStyle(elOutputLabel, "paddingBottom") ?? [ "6px", "6", "px" ];
      // let labelLineHeight = getFirstNumericStyle(elOutputLabel, "lineHeight") ?? [ "36px", "36", "px" ];

      // let marginRight = labelPaddingLeft[0];
      let marginRight = ( +labelPaddingLeft[1] * 0.75 ) + labelPaddingLeft[2];
      style.marginRight = marginRight;

      let marginBottom = ( +labelPaddingBottom[1] * 0.75 ) + labelPaddingBottom[2];
      style.marginBottom = marginBottom;


      //// style.height = labelLineHeight[0];
      //// style.height = ( labelLineHeight[1] * 0.75 ) + labelLineHeight[2];

      // elOutputLabel.insertBefore( btnCopy, elOutputLabel.firstChild );
      // elOutputLabel.firstChild.before( btnCopy );
      elOutputLabel.prepend( btnCopy );

    } else {

      let labelPaddingLeft = getFirstNumericStyle(elInputLabel, "paddingLeft") ?? [ "12px", "12", "px" ];
      let labelPaddingBottom = getFirstNumericStyle(elInputLabel, "paddingBottom") ?? [ "6px", "6", "px" ];
      // let labelLineHeight = getFirstNumericStyle(elInputLabel, "lineHeight") ?? [ "36px", "36", "px" ];

      // let marginLeft = labelPaddingLeft[0]
      let marginLeft = ( +labelPaddingLeft[1] * 0.75 ) + labelPaddingLeft[2];
      style.marginLeft = marginLeft;

      let marginBottom = ( +labelPaddingBottom[1] * 0.75 ) + labelPaddingBottom[2];
      style.marginBottom = marginBottom;


      //// style.height = labelLineHeight[0];
      //// style.height = ( labelLineHeight[1] * 0.75 ) + labelLineHeight[2];

      // elInputLabel.insertAdjacentElement( "beforeend", btnCopy );
      // elInputLabel.appendChild( btnCopy );
      elInputLabel.append( btnCopy );

    };


  }; // end let createCopyButton = () => {


  //// createCopyButton();
  createCopyButton(rightSide);


  Promise.resolve( now("// loaded BookmarkleterCopyToClipboard.js @ ") )
  .then( logLine => (
    focus(textareaFirstFocus),
    setTimeout( _ => (
      //// document.querySelector("#ErrorOutput").style.display = "block"
      document.querySelector("#ErrorOutput").style.display = ""
    ), 999 )
    , console.log( logLine )
  ) );


}; // end function initClipboard(rightSide) {

initClipboard();
// initClipboard(!!"DEBUG_COPY_BUTTON_THE_RIGHT_SIDE");

//// */


