// BookmarkleterSizeWatcher.js


// 5986 char  javascript:void function(){"use strict";function a(){let h,i,j,k,l,m,n=document.querySelector("textarea[ng-model=\"input\"]"),o=document.querySelector("#Output"),p=document.querySelector("#InputLabel"),q=document.querySelector("#OutputLabel"),r=document.querySelector("#Labels"),s=document.querySelector("input[ng-model=\"name\"]"),t="Size",u=document.querySelector("#"+t),v=/(the ).+?( of the Bookmarklet below)/,w=()=>[...document.querySelectorAll("button[title]")].find(a=>v.test(a.title))||{title:v+"",style:{}},x=w(),y="Export",z=document.querySelector("#"+y),A=(...a)=>a.forEach(a=>a.dispatchEvent(new Event("input"))),B=a=>{confirm("Blank out the current JavaScript source? (CAN'T be undone!)")&&(n.value="",A(n));n.focus()},C=async a=>{let b=!o.value.length||!n.value.trim(),c=async a=>{let b,c=a.target,d=c?.files?.[0],e=d&&(await new Promise(a=>{b=new FileReader,b.onload=b.onerror=b.onabort=(b,c)=>(c=[b.target.result,d?.name,d?.size,b.loaded,d,b.type,b],a(c)),b.readAsText(d,"UTF-8")}));return e||[]};if(b||confirm("Select file to replace the current JavaScript source? (CAN'T be undone!)")){let a=await f(c),b=a[1];a[0]?(console.log("File loaded:","\""+b+"\"",a),n.value=a[0],s.value=b.split(".")[0],A(n,s)):console.warn("File not imported/uploaded.",a)}n.focus()},D=".min.js.txt",E=(a,b,c)=>(b||=(a&&"My Bookmarklet"!=a&&a||"BM").replace(/^\.+|\.+$/g,""),c=/\./.test(b)&&b.split(".").at(-1),[b,c]),F=a=>{let b=c?.T||o.value,[d,e]=I(!0),[f,h]=E(s.value.trim(),"","BM"),i=b.length&&prompt(" Save As... "+e+"\n",f+(h?"":D))?.trim(),k=/[*:"<>\/?\\|]/g;i&&g(b,i);console[i?"log":"warn"](["Contents","Selected contents"][j]+(i?" saved as \""+i.replace(k,"_")+"\" ":" were not exported/downloaded ")+e.replace(/only the selected /,"")+"."),n.focus()},G=a=>{let b=a?.type,c=s.value.trim(),d=z.title,[e,f]=E(c,!b&&a,"BM"),g=d.replace(/\n.*/,"\n(\u27A1Save As \""+e+(f?"":D)+"\")");clearTimeout(m),m=setTimeout(()=>{l.ariaDisabled=l.disabled=!n.value.length,z.ariaDisabled=x.araiDisabled=z.disabled=x.disabled=!o.value.length,z.ariaDescription=z.title=g,b&&(s.value=c)},20)},H=a=>{if(!z){if(!x?.id)return console.warn("// FAIL: createExportImportResetButtons(rightSide = "+!!a+") -- You should first load BookmarkleterCopyToClipboard.js"),[];p.htmlFor="pastebin",z=d({id:y,title:"Click to export/download bookmarklet contents (below)\n",innerText:"\uD83D\uDCBE"}),k=d({id:"Import",title:"Click to import/upload a JavaScript source file (replacing the above)",innerText:"\uD83D\uDCE5"}),l=d({id:"Clear",title:"Click to clear/reset the JavaScript source (blanking the above)",innerText:"\uD83E\uDDF9"}),l.addEventListener("click",B),k.addEventListener("click",C),z.addEventListener("click",F),s.addEventListener("input",G),n.addEventListener("input",G),G(),a?(q.prepend(l),q.prepend(k),q.prepend(z)):(x.parentNode.insertBefore(l,x),x.parentNode.insertBefore(k,x),x.parentNode.insertBefore(z,x));let b=e(z,"borderWidth");x.style.borderWidth=+b[1]+1.8+b[2]}return[z,k,l]},I=(a,b,d)=>(b=c?.L<i&&c?.L,d=a?b?"(only the selected "+b+" char, out of "+i+" total)":"("+i+" char)":i?"("+i+(b?" total, "+b+" selected":"")+")":"",[b,d]),J=a=>{let[b,c]=I();u.innerText=c,j==J._&&(x=w(),H(!1));j!=!!b&&(j=b?1:0,x.ariaDescription=x.title=x.title.replace(v,"$1"+["full contents","selected characters"][j]+"$2"));r.ariaDescription=r.title="Bookmarklet total characters = "+i+(i?"\n(Copy to clipboard or drag the link)":""),h=i},K=(a,b,d,e)=>{a&&(a?.type&&(d=c?.a,e=c?.z,c.a=o.selectionStart,c.z=o.selectionEnd,c.T=o.value.slice(c.a,c.z),c.L=c.z-c.a,b=d==c.a&&e==c.z||getSelection().rangeCount&&u.contains(getSelection().getRangeAt(0)?.commonAncestorContainer)),b||setTimeout(J,20))};(a=>{let b,c="button-softener",f=document.querySelector("style#button-softener"),g="middle";if(a){let a=e(q,"paddingLeft")??["12px","12","px"],c=e(q,"paddingBottom")??["6px","6","px"],d=.75*+a[1]+a[2],f=.75*+c[1]+c[2];b="margin-right: "+d+"; margin-bottom: "+f+"; "}else{let a=e(p,"paddingLeft")??["12px","12","px"],c=e(p,"paddingBottom")??["6px","6","px"],d=.75*+a[1]+a[2],f=.75*+c[1]+c[2];b="margin-left: "+d+"; margin-bottom: "+f+"; "}f||document.head.appendChild(d({id:"button-softener",textContent:"button:active,input[type='checkbox']:active,img:hover { transform: scale(0.97); }\nbutton,input,textarea,fieldset,label { border-radius: 0.42em; transition: transform 160ms ease-out; }\ninput[type='text']:active,textarea:active,#OutputLink:active { transform: scale(0.995); transition: transform 100ms ease-out; }\n.icon {cursor: pointer; vertical-align: "+g+"; "+b+"}"},"style"))})(),clearInterval(b),document.querySelectorAll("span").forEach(a=>{a.id&&a.id!=t||a.remove()}),u=d({id:t},"span"),p.parentNode.insertBefore(u,p),Object.keys(c=location.S={}).forEach(a=>{delete c[a]}),h=i=j=a._,[,,"Selectionchange","touchend","pointerup","mouseup","keyup"].filter(a=>a).forEach(a=>{document.addEventListener(a.toLowerCase(),K)}),b=setInterval(()=>{i=o.value.length,i!=h&&J()},20),H(!1),Promise.resolve(((a="\n",b=new Date)=>a+b.toLocaleTimeString().replace(/ /,"."+("00"+b.getMilliseconds()).slice(-3)+" "))("// loaded BookmarkleterSizeWatcher.js @ ")).then(a=>(K(1),console.log(a)))}var b,c=location.S={},d=(a,b,c,d)=>{let e=" icon ",{class:f,style:g,...h}=a||={},i=Object.assign(document.createElement(b||"button"),h),j=((f||"")+" "+(d||"")+" "+(b?"":" icon ")).split(" ").filter(a=>a);return j.length&&i.classList.add(...j),Object.entries({...g,...c}).forEach(([a,b])=>{i.style[a]=b}),i},e=(a,b)=>getComputedStyle(a)[b]?.match(/^([\d.]*)(.*)/),f=async(a,b,c,e="file")=>new Promise(f=>{let g="FileInput",h=(document.querySelectorAll("#FileInput").forEach(a=>a.remove()),d({id:"FileInput",accept:b||".txt,.js,text/plain,*/*",multiple:c,type:e},"input"));h.onchange=h.oncancel=h.onerror=async b=>f(await a(b)),h.click()}),g=(a,b,c="text/plain;charset=utf-8",e,f)=>{e=URL.createObjectURL(new Blob([a],{type:c})),document.body.append(f=d({href:e,download:b},"a")),f.click(),setTimeout(URL.revokeObjectURL,20,e)};a()}();


//// /*


"use strict";


var selected = ( location.S = {} );
// ^ selected = { a: elOutput.selectionStart, z: elOutput.selectionEnd, L: length of selected text, T: selected text };

var timerSize;


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


var getFirstNumericStyle = (el, propName) => getComputedStyle(el)[propName]?.match(/^([\d.]*)(.*)/);


var importUploadData = async (fnChange, accept, multiple, _type = "file") => {

  return new Promise( resolve => {

    let INPUT_FILE_ID = "FileInput";

    let fileInput = (
      document.querySelectorAll("#" + INPUT_FILE_ID).forEach( el => el.remove() ),
      createButton( { id: INPUT_FILE_ID, accept: accept || ".txt,.js,text/plain,*/*", multiple, type: _type }, "input" )
    );

    fileInput.onchange = fileInput.oncancel = fileInput.onerror = async (evt) => resolve( await fnChange(evt) );

    fileInput.click();

  } );

};


var exportDownloadData = (data, download, type = "text/plain;charset=utf-8", _href, _anchor) => {
  _href = URL.createObjectURL( new Blob( [ data ], { type } ) );
  document.body.append( _anchor = createButton( { href: _href, download }, "a" ) );
  _anchor.click();
  setTimeout( URL.revokeObjectURL, 20, _href );
};
// ^ 188 char  b=(b,c,d="text/plain;charset=utf-8",e,f)=>{e=URL.createObjectURL(new Blob([b],{type:d})),document.body.append(f=a({href:e,download:c},"a")),f.click(),setTimeout(URL.revokeObjectURL,20,e)};


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

  let elInput = document.querySelector('textarea[ng-model="input"]'); // "#pastebin"

  let elOutput = document.querySelector("#Output");


  let elInputLabel = document.querySelector("#InputLabel");

  // let elOutputLabel = [...elInputLabel.parentNode.querySelectorAll("label")].at(-1);
  let elOutputLabel = document.querySelector("#OutputLabel"); // DEBUG_COPY_BUTTON_THE_RIGHT_SIDE

  let elLabels = document.querySelector("#Labels");


  let whoami = document.querySelector('input[ng-model="name"]'); // 'input[aria-label="Bookmarklet name"]'

  let SIZE_SPAN_ID = "Size";

  let elSize = document.querySelector("#" + SIZE_SPAN_ID);


  let selectedPrev;

  let REGEX_BTNCOPY = /(the ).+?( of the Bookmarklet below)/;


  let getCopyButton = () => (
    [... document.querySelectorAll("button[title]") ]
    .find( el => REGEX_BTNCOPY.test(el.title) )
  ) || { title: String(REGEX_BTNCOPY), style: {} };

  // debugger;
  let btnCopy = getCopyButton();


  let EXPORT_BUTTON_ID = "Export";

  let btnExportDownload = document.querySelector("#" + EXPORT_BUTTON_ID)

  let btnImportUpload;

  let btnResetClear;

  let DISPATCH_INPUT_EVENT = (...elements) => elements.forEach( el => el.dispatchEvent( new Event( "input" ) ) ); // no need for new Event( "input", { bubbles: true } )


  let handleResetClear = (_) => {

    if ( confirm( "Blank out the current JavaScript source? (CAN'T be undone!)" ) ) {
      elInput.value = "";
      DISPATCH_INPUT_EVENT(elInput);
    };

    elInput.focus();

  }; // end let handleResetClear = (_) => {


  let handleImportUpload = async (_) => {

    // debugger;

    let nothingInterestingIsHappeningRightNow = !elOutput.value.length || !elInput.value.trim();

    let handleFileChange = async (evt) => {

      let reader;

      let target = evt.target;

      let file = target?.files?.[0];

      let fileToImport = file && ( await new Promise( resolve => {
        reader = new FileReader();
        reader.onload = reader.onerror = reader.onabort = (event, _fileInfo) => {

          // _fileInfo = event.target.result;
          _fileInfo = [ event.target.result, file?.name, file?.size, event.loaded, file, event.type, event ];
          //// ^ _fileInfo = [ event.target.result, file?.name, file?.size, event.loaded, file, event.type, event ];

          // debugger;
          return resolve( _fileInfo );
        };
        reader.readAsText(file, "UTF-8");

      } ) );

      // return fileToImport;
      return fileToImport || [];

    };

    if ( nothingInterestingIsHappeningRightNow || confirm( "Select file to replace the current JavaScript source? (CAN'T be undone!)" ) ) {

      let _fileInfo = await importUploadData(handleFileChange);
      //// ^ _fileInfo = [ event.target.result, file?.name, file?.size, event.loaded, file, event.type, event ];

      let loadedFilename = _fileInfo[1];

      // debugger;
      if (!_fileInfo[0]) {
        console.warn( "File not imported/uploaded.", _fileInfo );
      } else {
        console.log( "File loaded:", '"' + loadedFilename + '"', _fileInfo );
        elInput.value = _fileInfo[0];
        whoami.value = loadedFilename.split(".")[0];
        DISPATCH_INPUT_EVENT(elInput, whoami);
      };

    };

    elInput.focus();

  }; // end let handleImportUpload = async (_) => {


  let EXT_DEFAULT = ".min.js.txt";

  let getFilenameAndExt = (whoamiValueIfNoFilename, filename, _ext) => {

    filename ||= (
      (
        whoamiValueIfNoFilename && whoamiValueIfNoFilename != "My Bookmarklet"
        && whoamiValueIfNoFilename
      ) || "BM"
    ).replace(/^\.+|\.+$/g, "");

    _ext = /\./.test(filename) && filename.split(".").at(-1);

    return [filename, _ext];
  };


  let handleExportDownload = (_) => {

    let data = (

      selected?.T ||
      // ^ selected = { a: elOutput.selectionStart, z: elOutput.selectionEnd, L: length of selected text, T: selected text };

      elOutput.value

    );

    let [_selectedLength, message] = getSelectedLengthMessage(!!"isExporting");

    let [filename, ext] = getFilenameAndExt( whoami.value.trim(), "", "BM" );

    let download = (
      data.length && prompt(
        " Save As... " + message + "\n"
        , filename + ( ext ? "" : EXT_DEFAULT )
      )?.trim()
    );

    let regexFilenameInvalid = /[*:"<>\/?\\|]/g;

    if (download) { exportDownloadData(data, download); };

    console[download ? "log" : "warn"](
      ["Contents", "Selected contents"][selectedPrev]
      + (
        download
        ? ' saved as "' + download.replace(regexFilenameInvalid, "_") + '" '
        : " were not exported/downloaded "
      )
      + message.replace(/only the selected /, "")
      + "."
    );

    elInput.focus();

  }; // end let handleExportDownload = (_) => {


  let buttonTimeout;

  let updateButtons = (filenameOrEvent) => {

    // console.warn("TOP:", btnExportDownload.title, "[" + whoami.value + "]");

    let isEvent = filenameOrEvent?.type;

    let whoamiValue = whoami.value.trim();

    let titleExportDownload = btnExportDownload.title;
 
    let [filename, ext] = getFilenameAndExt(whoamiValue, !isEvent && filenameOrEvent, "BM");

    let titleNew = titleExportDownload.replace(/\n.*/, '\n(➡Save As "' + filename + ( ext ? "" : EXT_DEFAULT ) + '")');

    clearTimeout(buttonTimeout);
    buttonTimeout = setTimeout( () => {
      btnResetClear.ariaDisabled = btnResetClear.disabled = !elInput.value.length;
      btnExportDownload.ariaDisabled = btnCopy.araiDisabled = btnExportDownload.disabled = btnCopy.disabled = !elOutput.value.length;
      btnExportDownload.ariaDescription = btnExportDownload.title = titleNew;
      if (isEvent) {
        whoami.value = whoamiValue;
      };
      // console.warn("BTM:", btnExportDownload.title, "[" + whoami.value + "]");
    }, 20);

  }; // end let updateButtons = (filenameOrEvent) => {


  let createExportImportResetButtons = (rightSide) => {

    if (!btnExportDownload) {

      if (!btnCopy?.id) {
        console.warn( "// FAIL: createExportImportResetButtons(rightSide = " + !!rightSide + ") -- You should first load BookmarkleterCopyToClipboard.js" );
        return [];
      };

      elInputLabel.htmlFor = "pastebin"

      btnExportDownload = createButton( { id: EXPORT_BUTTON_ID, title: "Click to export/download bookmarklet contents (below)\n", innerText: "💾" } );
      btnImportUpload = createButton( { id: "Import", title: "Click to import/upload a JavaScript source file (replacing the above)", innerText: "📥" || "📁" || "📥📤" } );
      btnResetClear = createButton( { id: "Clear", title: "Click to clear/reset the JavaScript source (blanking the above)", innerText: "🧹" || "🚮" || "🗑" } );

      btnResetClear.addEventListener("click", handleResetClear);
      btnImportUpload.addEventListener("click", handleImportUpload);
      btnExportDownload.addEventListener("click", handleExportDownload);

      // whoami.addEventListener("change", updateButtons);
      // elInput.addEventListener("change", updateButtons);
      whoami.addEventListener("input", updateButtons);
      elInput.addEventListener("input", updateButtons);
      // ^ TODO: confirm no need for both events?

      // debugger;
      updateButtons();

      if (rightSide) {
        elOutputLabel.prepend( btnResetClear );
        elOutputLabel.prepend( btnImportUpload );
        elOutputLabel.prepend( btnExportDownload );
      } else {
        btnCopy.parentNode.insertBefore( btnResetClear, btnCopy );
        btnCopy.parentNode.insertBefore( btnImportUpload, btnCopy );
        btnCopy.parentNode.insertBefore( btnExportDownload, btnCopy );
        // elInputLabel.prepend( btnResetClear );
        // elInputLabel.prepend( btnImportUpload );
        // elInputLabel.prepend( btnExportDownload );
      };

      // debugger;
      let exportBorderWidth = getFirstNumericStyle(btnExportDownload, "borderWidth");
      btnCopy.style.borderWidth = ( +exportBorderWidth[1] + 1.8 ) + exportBorderWidth[2];

    };

    return [ btnExportDownload, btnImportUpload, btnResetClear ];

  }; // end let createExportImportResetButtons = (rightSide) => {


  let softenThingsUp = (rightSide) => {

    let STYLE_ID = "button-softener";

    let elStyle = document.querySelector("style#" + STYLE_ID);

    let textContent;

    //// let verticalAlign = "baseline"; // (default?) Aligns the baseline of the element with the baseline of its parent. The baseline of some replaced elements, like <textarea>, is not specified by the HTML specification, meaning that their behavior with this keyword may vary between browsers. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/vertical-align#baseline
    let verticalAlign = "middle"; // Aligns the middle of the element with the baseline plus half the x-height of the parent. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/vertical-align#middle
    // style.verticalAlign = verticalAlign;


    if (rightSide) {

      let labelPaddingLeft = getFirstNumericStyle(elOutputLabel, "paddingLeft") ?? [ "12px", "12", "px" ];
      let labelPaddingBottom = getFirstNumericStyle(elOutputLabel, "paddingBottom") ?? [ "6px", "6", "px" ];
      // let labelLineHeight = getFirstNumericStyle(elOutputLabel, "lineHeight") ?? [ "36px", "36", "px" ];

      // let marginRight = labelPaddingLeft[0];
      let marginRight = ( +labelPaddingLeft[1] * 0.75 ) + labelPaddingLeft[2];
      // style.marginRight = marginRight;

      let marginBottom = ( +labelPaddingBottom[1] * 0.75 ) + labelPaddingBottom[2];
      // style.marginBottom = marginBottom;

      textContent = ( ""
        + "margin-right: " + marginRight + "; "
        + "margin-bottom: " + marginBottom + "; "
      );

    } else {

      let labelPaddingLeft = getFirstNumericStyle(elInputLabel, "paddingLeft") ?? [ "12px", "12", "px" ];
      let labelPaddingBottom = getFirstNumericStyle(elInputLabel, "paddingBottom") ?? [ "6px", "6", "px" ];
      // let labelLineHeight = getFirstNumericStyle(elInputLabel, "lineHeight") ?? [ "36px", "36", "px" ];

      // let marginLeft = labelPaddingLeft[0]
      let marginLeft = ( +labelPaddingLeft[1] * 0.75 ) + labelPaddingLeft[2];
      // style.marginLeft = marginLeft;

      let marginBottom = ( +labelPaddingBottom[1] * 0.75 ) + labelPaddingBottom[2];
      // style.marginBottom = marginBottom;

      textContent = ( ""
        + "margin-left: " + marginLeft + "; "
        + "margin-bottom: " + marginBottom + "; "
      );

    };

    if (!elStyle) {
      document.head.appendChild( createButton( {
        id: STYLE_ID
        , textContent: (
          "button:active,input[type='checkbox']:active,img:hover { transform: scale(0.97); }" // based on https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md
          + "\n" + "button,input,textarea,fieldset,label { border-radius: 0.42em; transition: transform 160ms ease-out; }"
          + "\n" + "input[type='text']:active,textarea:active,#OutputLink:active { transform: scale(0.995); transition: transform 100ms ease-out; }"
        )
        + "\n" + ".icon {"
        + "cursor: pointer; "
        + "vertical-align: " + verticalAlign + "; "
        + textContent + "}"
      }, "style" ) );
    };

  }; // end let softenThingsUp = (rightSide) => {


  let getSelectedLengthMessage = (isExporting, _length, _msg) => {

    _length = selected?.L < sizeNow && selected?.L;

    _msg = (

      isExporting

      ? (
        _length
        ? "(only the selected " + _length + " char, out of " + sizeNow + " total)"
        : "(" + sizeNow + " char)"
      )

      : (

        sizeNow

        ? "(" + sizeNow + (

          _length ? ( " total, " + _length + " selected" ) :
          // ^ selected = { a: elOutput.selectionStart, z: elOutput.selectionEnd, L: length of selected text, T: selected text };

          ""
        ) + ")"

        : ""
      )

    );

    return [_length, _msg];

  };


  let renderSize = (_) => {

    let [_length, _msg] = getSelectedLengthMessage();

    elSize.innerText = _msg;


    // grab the first "copy to clipboard" button at the 1st render
    if (selectedPrev == renderSize._) {
      btnCopy = getCopyButton();

      // createExportImportResetButtons(!!"rightSide");
      createExportImportResetButtons(!"rightSide");
    };

    // update that button's title during toggle of selectedPrev (0 if none or entire output, 1 otherwise)
    if ( selectedPrev != !!_length ) {
      selectedPrev = _length ? 1 : 0;
      btnCopy.ariaDescription = btnCopy.title = btnCopy.title.replace(
        REGEX_BTNCOPY,
        "$1" + ["full contents", "selected characters"][selectedPrev] + "$2"
      );
    };

    // elSize.title = _msg;
    // elLabels.title = _msg;
    elLabels.ariaDescription = elLabels.title = "Bookmarklet total characters = " + sizeNow + (
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

        // console.warn( "\n", ":updateSelected() -- _skipRender:", !!_skipRender, ", selected:", selected );
        // debugger;

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
      } else {
        // console.warn( "\n", ":updateSelected() -- _skipRender:", true, ", selected:", selected );
      };

    };

  }; // end let updateSelected = (eventOrForceRender) => {


  softenThingsUp();


  // if (!elSize) {

  clearInterval(timerSize);


  document.querySelectorAll("span").forEach( el => { if (!el.id || el.id == SIZE_SPAN_ID) { el.remove(); }; } );

  elSize = createButton( { id: SIZE_SPAN_ID }, "span" );

  elInputLabel.parentNode.insertBefore( elSize, elInputLabel );


  Object.keys( selected = ( location.S = {} ) ).forEach( key => { delete selected[key]; } );

  sizePrev = sizeNow = selectedPrev = initSizeWatcher._;


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

  // }; // end if (!elSize) {


  // createExportImportResetButtons(!!"rightSide");
  createExportImportResetButtons(!"rightSide");


  Promise.resolve( now("// loaded BookmarkleterSizeWatcher.js @ ") )
  .then( logLine => (
    updateSelected(1),
    // console.log( "initSizeWatcher: cancel via clearInterval(" + timerSize + ")" ),
    console.log( logLine )
  ) );

}; // end function initSizeWatcher() {

initSizeWatcher();

//// */

