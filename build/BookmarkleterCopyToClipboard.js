// BookmarkleterCopyToClipboard.js


// 1768 char  javascript:void function(){(function(){let a=document.querySelector("#InputLabel"),b=document.querySelector("#Output"),c=document.createElement("button"),d=document.querySelector("#OutputLabel"),e=document.querySelector("textarea#pastebin"),f=a=>(a??"\n")+new Date().toLocaleTimeString(),g=(a,b,c)=>(setTimeout(()=>a?.focus?.(),b||0),c?.(),a),h=async(a,b,c,d)=>(b=b||(()=>{}),c=c??40,d=d||2e3,new Promise(e=>{let f,g,h,i=()=>{navigator.clipboard.writeText(a).then(()=>{j(),e(b(a))}).catch(a=>{f=a}).finally(()=>{h&&k()})},j=()=>{[g,h].forEach(clearTimeout),h=0},k=()=>g=setTimeout(i,c);h=setTimeout(()=>{j(),e(b(a,f||1))},d),i()})),i=async()=>{let a=(a,b)=>{let c,d;b?(c="\u274CClipboard copy FAIL. "+b+"\n",console.error(f(),c,{["data("+a.length+")"]:a,err:b}),d=["FAILURE",a,b]):(c="\u2705Clipboard copy successful.\n",console.log(f(),c,{["data("+a.length+")"]:a}),d=["SUCCESS",a]);return d},c=b.value;if(!c.length)return e.value.trim()||(e.value="// "+e.placeholder+"\n"),g(e),a(c,e.placeholder);b.select(),g(e);let d=await h(c,a);if(d&&!d[2])return d;let i=document.execCommand("copy")&&a(c);return i};(()=>{let a=(a,b)=>getComputedStyle(a)[b]?.match(/^([\d.]*)(.*)/),{style:b}=c;c.innerText="\uD83D\uDCCB",c.title="Click to copy to clipboard \nthe full contents of the Bookmarklet below \\/",b.verticalAlign="middle",d.prepend(c);let e=a(d,"paddingLeft")??["12px","12","px"],f=a(d,"paddingBottom")??["6px","6","px"],g=a(d,"lineHeight")??["36px","36","px"];b.marginRight=.75*e[1]+e[2],b.marginBottom=.75*f[1]+f[2],c.addEventListener("click",i)})(),console.log(Promise.resolve(f("// BookmarkleterCopyToClipboard.js @ ")).then(a=>(g(e),setTimeout(()=>document.querySelector("#ErrorOutput").style.display="",999),a)))})(),document.title="Bookmarkleter (LCL, wip)"}();


//// /*


function init() {


  let elInputLabel = document.querySelector("#InputLabel");

  let elOutput = document.querySelector("#Output");

  let btnCopy = document.createElement("button");

  // let elOutputLabel = [...elInputLabel.parentNode.querySelectorAll("label")].at(-1);
  let elOutputLabel = document.querySelector("#OutputLabel"); // DEBUG_COPY_BUTTON_THE_RIGHT_SIDE

  // let textareaFirstFocus = [...document.querySelectorAll("textarea")].find( el => el.outerHTML.includes("updateBookmarklet") );
  let textareaFirstFocus = document.querySelector("textarea#pastebin");


  let now = (prefix) => (prefix ?? "\n") + new Date().toLocaleTimeString();

  // let clicker = new PointerEvent( "pointerdown",{ bubbles: true } );

  // let click = (el, useNormalClick) => ( ( useNormalClick ? el?.click() : el?.dispatchEvent?.(clicker) ), el );

  let focus = (el, msDelay, fnAfter) => { setTimeout( () => el?.focus?.(), msDelay || 0 ); fnAfter?.(); return el; };


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


    let minifiedCode = elOutput.value;


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


  let createCopyButton = () => {


    let getFirstNumericStyle = (el, propName) => getComputedStyle(el)[propName]?.match(/^([\d.]*)(.*)/);

    let {style} = btnCopy;

    btnCopy.innerText = "📋";
    btnCopy.title = "Click to copy to clipboard \nthe full contents of the Bookmarklet below \\/";


    //// style.verticalAlign = "baseline"; // (default?) Aligns the baseline of the element with the baseline of its parent. The baseline of some replaced elements, like <textarea>, is not specified by the HTML specification, meaning that their behavior with this keyword may vary between browsers. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/vertical-align#baseline
    style.verticalAlign = "middle"; // Aligns the middle of the element with the baseline plus half the x-height of the parent. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/vertical-align#middle


    // elOutputLabel.insertBefore( btnCopy, elOutputLabel.firstChild );
    // elOutputLabel.firstChild.before( btnCopy );
    elOutputLabel.prepend( btnCopy );

    let labelPaddingLeft = getFirstNumericStyle(elOutputLabel, "paddingLeft") ?? [ "12px", "12", "px" ];
    let labelPaddingBottom = getFirstNumericStyle(elOutputLabel, "paddingBottom") ?? [ "6px", "6", "px" ];
    let labelLineHeight = getFirstNumericStyle(elOutputLabel, "lineHeight") ?? [ "36px", "36", "px" ];

    //// style.marginRight = labelPaddingLeft[0];
    style.marginRight = ( labelPaddingLeft[1] * 0.75 ) + labelPaddingLeft[2];


    //// style.height = labelLineHeight[0];
    //// style.height = ( labelLineHeight[1] * 0.75 ) + labelLineHeight[2];
    style.marginBottom = ( labelPaddingBottom[1] * 0.75 ) + labelPaddingBottom[2];


    btnCopy.addEventListener("click", handleCopyClick);


  }; // end let createCopyButton = () => {


  createCopyButton();


  console.log(
    Promise.resolve( now("// BookmarkleterCopyToClipboard.js @ ") )
    .then( _ => (

      focus(textareaFirstFocus),

      setTimeout( _ => (
        //// document.querySelector("#ErrorOutput").style.display = "block"
        document.querySelector("#ErrorOutput").style.display = ""
      ), 999 ),

      _

    ) )
  );


};

init();


//// */


