// BookmarkleterCopyToClipboard.js


// 1613 char  javascript:void function(){(function(){let a=document.querySelector("#InputLabel"),b=document.querySelector("#Output"),c=document.createElement("button"),d=document.querySelector("#OutputLabel"),e=[...document.querySelectorAll("textarea")].find(a=>a.outerHTML.includes("updateBookmarklet")),f=a=>(a??"\n")+new Date().toLocaleTimeString(),g=(a,b,c)=>(setTimeout(()=>a?.focus(),b||0),c?.(),a),h=async(a,b,c,d)=>(b=b||(()=>{}),c=c||40,d=d||5e3,Promise.resolve().then(()=>navigator.clipboard.writeText(a).then(()=>b(a)).catch(c=>b(a,c))));(()=>{let a=(a,b)=>getComputedStyle(a)[b]?.match(/^([\d.]*)(.*)/),i=a(d,"paddingLeft")??["12px","12","px"],j=a(d,"paddingBottom")??["6px","6","px"],k=a(d,"lineHeight")??["36px","36","px"],{style:l}=c;d.insertBefore(c,d.firstChild),c.innerText="\uD83D\uDCCB",c.title="Click to copy to clipboard \nthe full contents of the Bookmarklet below \\/",l.marginRight=.75*i[1]+i[2],l.marginBottom=.75*j[1]+j[2],l.verticalAlign="middle",c.addEventListener("click",async()=>{let a=(a,b)=>{let c,d;b?(c="\u274CClipboard copy FAIL. "+b+"\n",console.error(f(),c,{["data("+a.length+")"]:a,err:b}),d=["FAILURE",a,b]):(c="\u2705Clipboard copy successful.\n",console.log(f(),c,{["data("+a.length+")"]:a}),d=["SUCCESS",a]);return d},c=b.value;if(!c.length)return e.value.trim()||(e.value="// "+e.placeholder+"\n"),g(e),a(c,e.placeholder);return(b.select(),document.execCommand("copy"))?(g(e),a(c)):(g(e),await h(c,a))})})(),console.log(Promise.resolve(f("// BookmarkleterCopyToClipboard.js @ ")).then(a=>(g(e),setTimeout(()=>document.querySelector("#ErrorOutput").style.display="",999),a)))})()}();


// TODO: add a wrapper loop to update failure logic, so instead of immediately calling fnAfter(text, err) it will now retry after msPolling interval (until msTimeout)


//// /*


function init() {


  let elInput = document.querySelector("#InputLabel");

  let elOutput = document.querySelector("#Output");

  let btnCopy = document.createElement("button");

  // let elOutputLabel = [...elInput.parentNode.querySelectorAll("label")].at(-1);
  let elOutputLabel = document.querySelector("#OutputLabel");

  let textareaFirstFocus = [...document.querySelectorAll("textarea")].find( el => el.outerHTML.includes("updateBookmarklet") );


  let now = (prefix) => (prefix ?? "\n") + new Date().toLocaleTimeString();

  // let clicker = new PointerEvent( "pointerdown",{ bubbles: true } );

  // let click = (el, useNormalClick) => ( ( useNormalClick ? el?.click() : el?.dispatchEvent?.(clicker) ), el );

  let focus = (el, msDelay, fnAfter) => ( setTimeout( () => el?.focus(), msDelay || 0 ), fnAfter?.(), el );


  let copyToClipboard = async (text, fnAfter, msPolling, msTimeout) => {

    // console.log( { text, fnAfter, msPolling, msTimeout } ); debugger;

    fnAfter = fnAfter || ( _ => {} );

    msPolling = msPolling || 40;

    msTimeout = msTimeout || 5000;

    // TODO: add a wrapper loop to update failure logic, so instead of immediately calling fnAfter(text, err) it will now retry after msPolling interval (until msTimeout)

    return Promise.resolve().then( _ => (

      navigator.clipboard.writeText(text)

      // .then(fnAfter)
      .then(_ => fnAfter(text))

      .catch(err => fnAfter(text, err))

    ) );

  };


  let createCopyButton = () => {


    let handleCopyClick = async (_evt) => { // based on https://beautifier.io/

      // console.log( { _evt } ); debugger;

      let fnAfterCopy = (data, err) => {

        // console.log( { data, err } ); debugger;

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

      };


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

      } else {

        // $('#source').select();
        elOutput.select();

        // console.log( { minifiedCode, fnAfterCopy } ); debugger;

        if (document.execCommand("copy") ) {

          return (

            // setTimeout( () => click(elOutput), 2000 )
            // setTimeout( () => click(elOutput, !!"useNormalClick"), 2000 )
            // setTimeout( () => click(textareaFirstFocus), 2000 )
            // setTimeout( () => click(textareaFirstFocus, !!"useNormalClick"), 2000 )
            focus(textareaFirstFocus)

            , fnAfterCopy(minifiedCode)
          );

        };

        return (
          // setTimeout( () => click(elOutput), 2000 )
          // setTimeout( () => click(elOutput, !!"useNormalClick"), 2000 )
          // setTimeout( () => click(textareaFirstFocus), 2000 )
          // setTimeout( () => click(textareaFirstFocus, !!"useNormalClick"), 2000 )
          focus(textareaFirstFocus)

          , await copyToClipboard(minifiedCode, fnAfterCopy)
        );

      };

    };


    let getFirstNumericStyle = (el, propName) => getComputedStyle(el)[propName]?.match(/^([\d.]*)(.*)/);


    let labelPaddingLeft = getFirstNumericStyle(elOutputLabel, "paddingLeft") ?? [ "12px", "12", "px" ];
    let labelPaddingBottom = getFirstNumericStyle(elOutputLabel, "paddingBottom") ?? [ "6px", "6", "px" ];
    let labelLineHeight = getFirstNumericStyle(elOutputLabel, "lineHeight") ?? [ "36px", "36", "px" ];

    let {style} = btnCopy;

    elOutputLabel.insertBefore( btnCopy, elOutputLabel.firstChild );

    btnCopy.innerText = "📋";
    btnCopy.title = "Click to copy to clipboard \nthe full contents of the Bookmarklet below \\/";

    //// style.marginRight = labelPaddingLeft[0];
    style.marginRight = ( labelPaddingLeft[1] * 0.75 ) + labelPaddingLeft[2];


    //// style.height = labelLineHeight[0];
    //// style.height = ( labelLineHeight[1] * 0.75 ) + labelLineHeight[2];
    style.marginBottom = ( labelPaddingBottom[1] * 0.75 ) + labelPaddingBottom[2];


    //// style.verticalAlign = "baseline"; // (default?) Aligns the baseline of the element with the baseline of its parent. The baseline of some replaced elements, like <textarea>, is not specified by the HTML specification, meaning that their behavior with this keyword may vary between browsers. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/vertical-align#baseline
    style.verticalAlign = "middle"; // Aligns the middle of the element with the baseline plus half the x-height of the parent. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/vertical-align#middle


    btnCopy.addEventListener("click", handleCopyClick);


  };


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


