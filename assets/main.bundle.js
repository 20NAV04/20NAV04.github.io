!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["h5p-standalone"]=n():e.H5PStandalone=n()}(self,(()=>(()=>{var e={633:e=>{function n(e,n){var t=e.length,r=new Array(t),o={},i=t,a=function(e){for(var n=new Map,t=0,r=e.length;t<r;t++){var o=e[t];n.has(o[0])||n.set(o[0],new Set),n.has(o[1])||n.set(o[1],new Set),n.get(o[0]).add(o[1])}return n}(n),s=function(e){for(var n=new Map,t=0,r=e.length;t<r;t++)n.set(e[t],t);return n}(e);for(n.forEach((function(e){if(!s.has(e[0])||!s.has(e[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")}));i--;)o[i]||c(e[i],i,new Set);return r;function c(e,n,i){if(i.has(e)){var l;try{l=", node was:"+JSON.stringify(e)}catch(e){l=""}throw new Error("Cyclic dependency"+l)}if(!s.has(e))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(e));if(!o[n]){o[n]=!0;var u=a.get(e)||new Set;if(n=(u=Array.from(u)).length){i.add(e);do{var d=u[--n];c(d,s.get(d),i)}while(n);i.delete(e)}r[--t]=e}}}e.exports=function(e){return n(function(e){for(var n=new Set,t=0,r=e.length;t<r;t++){var o=e[t];n.add(o[0]),n.add(o[1])}return Array.from(n)}(e),e)},e.exports.array=n}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var r={};return(()=>{"use strict";t.d(r,{default:()=>m});var e=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},n=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};function o(e){if((e=e.trim()).match(/^([a-z0-9]+:\/\/|www.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i))return e;if(e.startsWith("//"))return window.location.protocol+e;if(e.startsWith("/"))return window.location.origin+e;var n="".concat(window.location.protocol,"//").concat(window.location.host);return window.location.pathname.indexOf("/")>-1?n+=window.location.pathname.split("/").slice(0,-1).join("/"):n+=window.location.pathname,"".concat(n,"/").concat(e)}function i(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return r||(r={credentials:"include"}),[4,fetch(t,r)];case 1:return[2,e.sent().json()]}}))}))}function a(t,r){return e(this,void 0,void 0,(function(){var e,o,i,a;return n(this,(function(n){switch(n.label){case 0:for(e=t.getElementsByTagName("script"),o=[],i=0;i<e.length;i++)e[i].dataset.h5p&&o.push(e[i]);return a=[],r.forEach((function(e){if(!o.some((function(n){return n.dataset.h5p===e}))){var n=document.createElement("script");n.src=e,n.async=!1,n.defer=!1,n.dataset.h5p=e;var r=new Promise((function(e){n.onload=e}));t.append(n),a.push(r)}})),[4,Promise.all(a)];case 1:return n.sent(),[2]}}))}))}function s(e,n){for(var t=e.getElementsByTagName("link"),r=[],o=0;o<t.length;o++)t[o].dataset.h5p&&r.push(t[o]);n.forEach((function(n){if(!r.some((function(e){return e.dataset.h5p===n}))){var t=document.createElement("link");t.href=n,t.dataset.h5p=n,t.rel="stylesheet",t.type="text/css",e.append(t)}}))}function c(e){return e instanceof Object&&!Array.isArray(e)}function l(e){for(var n,t,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(!r.length)return e;var i=r.shift();if(c(e)&&c(i))for(var a in i)c(i[a])?(e[a]||Object.assign(e,((n={})[a]={},n)),l(e[a],i[a])):Object.assign(e,((t={})[a]=i[a],t));return l.apply(void 0,function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}([e],r,!1))}function u(e,n){return n.filter((function(n){return e.indexOf(n)<0})).concat(e)}var d=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},p=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},f=t(633),h=function(){function e(e,n){var t=this;this.libraryFolderContainsVersion=!0;var r=n.id||Math.random().toString(36).substr(2,9);return this.prepareH5PEnvironment(r,n).then((function(o){window.H5P||(window.H5P={}),window.H5P.preventInit=!0;var i=n.embedType?n.embedType:"iframe";return t.renderPlayerFrame({anchorElement:e,contentId:r,embedType:i,H5PIntegration:o}).then((function(){return(void 0===n.preventH5PInit||n.preventH5PInit)&&("function"==typeof window.H5P.init&&window.H5P.init(),window.H5P.preventInit=!1),r}))}))}return e.prototype.renderPlayerFrame=function(e){return d(this,void 0,void 0,(function(){var n,t,r,o,i,c;return p(this,(function(l){switch(l.label){case 0:if(!(e.anchorElement instanceof HTMLElement))throw new Error("createH5P must be passed an element");return"iframe"!==e.embedType?[3,2]:((t=document.createElement("div")).classList.add("h5p-iframe-wrapper"),t.style.backgroundColor="#DDD;",(n=document.createElement("iframe")).id="h5p-iframe-".concat(e.contentId),n.src="about:blank",n.classList.add("h5p-iframe"),n.setAttribute("scrolling","no"),n.setAttribute("data-content-id",e.contentId),n.setAttribute("frameBorder","0"),n.style.width="100%",n.style.height="100%",n.style.border="none",n.style.display="block",t.append(n),e.anchorElement.append(t),s(document.head||document.body||e.anchorElement,e.H5PIntegration.core.styles),[4,a(n,e.H5PIntegration.core.scripts)]);case 1:return l.sent(),[3,4];case 2:return(t=document.createElement("div")).classList.add("h5p-iframe"),(r=document.createElement("div")).classList.add("h5p-content"),r.setAttribute("data-content-id",e.contentId),t.append(r),e.anchorElement.append(t),o=document.head||document.body||e.anchorElement,i=(e.H5PIntegration.core.styles||[]).concat(e.H5PIntegration.contents["cid-".concat(e.contentId)].styles),s(o,i),c=(e.H5PIntegration.core.scripts||[]).concat(e.H5PIntegration.contents["cid-".concat(e.contentId)].scripts),[4,a(o,c)];case 3:l.sent(),l.label=4;case 4:return[2]}}))}))},e.prototype.prepareH5PEnvironment=function(e,n){var t,r;return d(this,void 0,void 0,(function(){var a,s,c,d,f,h,m,y,b,v,w,g,C,P,D,F,N;return p(this,(function(p){switch(p.label){case 0:return a=this.getH5PPaths(n),s=a.h5pJsonPath,c=a.contentJsonPath,d=a.librariesPath,[4,i("".concat(s,"/h5p.json"),null==n?void 0:n.assetsRequestFetchOptions)];case 1:return f=p.sent(),h=this,[4,this.libraryFolderNameIncludesVersion(d,f.preloadedDependencies[0],null==n?void 0:n.assetsRequestFetchOptions)];case 2:return h.libraryFolderContainsVersion=p.sent(),[4,i("".concat(c,"/content.json"),null==n?void 0:n.assetsRequestFetchOptions)];case 3:return m=p.sent(),[4,this.findMainLibrary(f,d)];case 4:return y=p.sent(),[4,this.findAllDependencies(f,d)];case 5:return b=p.sent(),v=this.sortDependencies(b,d),w=v.styles,g=v.scripts,C={baseUrl:window.location.origin,url:"",contents:{},saveFreq:!1,postUserStatistics:!1,ajax:{},l10n:{H5P:{fullscreen:"Fullscreen",disableFullscreen:"Disable fullscreen",download:"Download",copyrights:"Rights of use",embed:"Embed",size:"Size",showAdvanced:"Show advanced",hideAdvanced:"Hide advanced",advancedHelp:"Include this script on your website if you want dynamic sizing of the embedded content:",copyrightInformation:"Rights of use",close:"Close",title:"Title",author:"Author",year:"Year",source:"Source",license:"License",thumbnail:"Thumbnail",noCopyrights:"No copyright information available for this content.",reuse:"Reuse",reuseContent:"Reuse Content",reuseDescription:"Reuse this content.",downloadDescription:"Download this content as a H5P file.",copyrightsDescription:"View copyright information for this content.",embedDescription:"View the embed code for this content.",h5pDescription:"Visit H5P.org to check out more cool content.",contentChanged:"This content has changed since you last used it.",startingOver:"You'll be starting over.",by:"by",showMore:"Show more",showLess:"Show less",subLevel:"Sublevel",confirmDialogHeader:"Confirm action",confirmDialogBody:"Please confirm that you wish to proceed. This action is not reversible.",cancelLabel:"Cancel",confirmLabel:"Confirm",licenseU:"Undisclosed",licenseCCBY:"Attribution",licenseCCBYSA:"Attribution-ShareAlike",licenseCCBYND:"Attribution-NoDerivs",licenseCCBYNC:"Attribution-NonCommercial",licenseCCBYNCSA:"Attribution-NonCommercial-ShareAlike",licenseCCBYNCND:"Attribution-NonCommercial-NoDerivs",licenseCC40:"4.0 International",licenseCC30:"3.0 Unported",licenseCC25:"2.5 Generic",licenseCC20:"2.0 Generic",licenseCC10:"1.0 Generic",licenseGPL:"General Public License",licenseV3:"Version 3",licenseV2:"Version 2",licenseV1:"Version 1",licensePD:"Public Domain",licenseCC010:"CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",licensePDM:"Public Domain Mark",licenseC:"Copyright",contentType:"Content Type",licenseExtras:"License Extras",changes:"Changelog",contentCopied:"Content is copied to the clipboard",connectionLost:"Connection lost. Results will be stored and sent when you regain connection.",connectionReestablished:"Connection reestablished.",resubmitScores:"Attempting to submit stored results.",offlineDialogHeader:"Your connection to the server was lost",offlineDialogBody:"We were unable to send information about your completion of this task. Please check your internet connection.",offlineDialogRetryMessage:"Retrying in :num....",offlineDialogRetryButtonLabel:"Retry now",offlineSuccessfulSubmit:"Successfully submitted results."}}},window&&window.H5PIntegration&&(C=l(C,window.H5PIntegration)),P=[o("./frame.bundle.js")],D=[o("./styles/h5p.css")],n.frameJs&&(P=[o(n.frameJs)]),n.frameCss&&(D=[o(n.frameCss)]),C.core?(C.core.styles=u(C.core.styles,D),C.core.scripts=u(C.core.scripts,P)):C.core={styles:D,scripts:P},C.url=e,C.urlLibraries=d,C.postUserStatistics=!!n.postUserStatistics,n.saveFreq&&"number"==typeof n.saveFreq&&(C.saveFreq=n.saveFreq),n.user&&(C.user=n.user),(null===(t=n.ajax)||void 0===t?void 0:t.contentUserDataUrl)&&(C.ajax.contentUserData=n.ajax.contentUserDataUrl),(null===(r=n.ajax)||void 0===r?void 0:r.setFinishedUrl)&&(C.ajax.setFinished=n.ajax.setFinishedUrl),n.translations&&(C.l10n=l(C.l10n,n.translations)),n.customCss&&"string"==typeof n.customCss&&(n.customCss=[n.customCss]),n.customJs&&"string"==typeof n.customJs&&(n.customJs=[n.customJs]),w=w.concat((n.customCss||[]).map((function(e){return o(e)}))),g=g.concat((n.customJs||[]).map((function(e){return o(e)}))),F={copyright:!!n.copyright,embed:!!n.embed,export:!!n.export,frame:!!n.frame,icon:!!n.icon,copy:!!n.copy},N="".concat(y.machineName," "),y.majorVersion&&(N+=y.majorVersion),y.minorVersion&&(N+=".".concat(y.minorVersion)),C.contents||(C.contents={}),(null==n?void 0:n.metadata)||(n.metadata={title:n.title?n.title:"",license:"U"}),C.contents["cid-".concat(e)]={library:N,title:n.title?n.title:"",url:s,contentUrl:c,jsonContent:JSON.stringify(m),styles:w,scripts:g,fullScreen:!!n.fullScreen,exportUrl:n.downloadUrl?o(n.downloadUrl):void 0,embedCode:n.embedCode?n.embedCode:"",resizeCode:n.resizeCode?n.resizeCode:"",displayOptions:F,contentUserData:n.contentUserData,metadata:n.metadata},n.xAPIObjectIRI&&(C.contents["cid-".concat(e)].url=n.xAPIObjectIRI),window.H5PIntegration=C,[2,C]}}))}))},e.prototype.getH5PPaths=function(e){var n=o("workspace");e.h5pJsonPath&&(n=o(e.h5pJsonPath));var t="".concat(n,"/content");e.contentJsonPath&&(t=o(e.contentJsonPath));var r=n;return e.librariesPath&&(r=o(e.librariesPath)),{h5pJsonPath:n,contentJsonPath:t,librariesPath:r}},e.prototype.libraryFolderNameIncludesVersion=function(e,n,t){return d(this,void 0,void 0,(function(){var r,o;return p(this,(function(a){switch(a.label){case 0:r=this.libraryToFolderName(n),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i("".concat(e,"/").concat(r,"/library.json"),t)];case 2:return a.sent(),o=!0,[3,4];case 3:return a.sent(),o=!1,[3,4];case 4:return[2,o]}}))}))},e.prototype.libraryToFolderName=function(e){var n=e.machineName;return this.libraryFolderContainsVersion&&(void 0!==e.majorVersion&&(n+="-".concat(e.majorVersion)),void 0!==e.minorVersion&&(n+=".".concat(e.minorVersion))),n},e.prototype.findMainLibrary=function(e,n){return d(this,void 0,void 0,(function(){var t,r;return p(this,(function(o){return t=e.preloadedDependencies.find((function(n){return n.machineName===e.mainLibrary})),r=this.libraryToFolderName(t),[2,i("".concat(n,"/").concat(r,"/library.json"))]}))}))},e.prototype.findAllDependencies=function(e,n){return d(this,void 0,void 0,(function(){var t,r=this;return p(this,(function(o){return t=e.preloadedDependencies.map((function(e){return r.libraryToFolderName(e)})),[2,this.loadDependencies(t,[],n)]}))}))},e.prototype.loadDependencies=function(e,n,t){return d(this,void 0,void 0,(function(){var r,o,i,a,s=this;return p(this,(function(c){switch(c.label){case 0:return r=n,o=[],i=e.map((function(e){return s.findLibraryDependencies(e,t)})),[4,Promise.all(i)];case 1:return(a=c.sent()).forEach((function(e){r.push(e),e.dependencies.forEach((function(e){var n=r.find((function(n){return n.libraryFolderName===e})),t=a.find((function(n){return n.libraryFolderName===e}));n||t||o.push(e)}))})),o.length>0?[2,this.loadDependencies(o,r,t)]:[2,r]}}))}))},e.prototype.findLibraryDependencies=function(e,n){return d(this,void 0,void 0,(function(){var t,r,o=this;return p(this,(function(a){switch(a.label){case 0:return[4,i("".concat(n,"/").concat(e,"/library.json"))];case 1:return t=a.sent(),r=[],t.preloadedDependencies&&(r=t.preloadedDependencies.map((function(e){return o.libraryToFolderName(e)}))),[2,{libraryFolderName:e,dependencies:r,preloadedCss:t.preloadedCss,preloadedJs:t.preloadedJs}]}}))}))},e.prototype.sortDependencies=function(e,n){var t=[],r={},o={};e.forEach((function(e){0===e.dependencies.length&&t.push([e.libraryFolderName]),e.dependencies.forEach((function(n){t.push([e.libraryFolderName,n])})),e.preloadedCss&&(r[e.libraryFolderName]=[],r[e.libraryFolderName]&&(r[e.libraryFolderName]=r[e.libraryFolderName]),e.preloadedCss.forEach((function(t){var o="".concat(n,"/").concat(e.libraryFolderName,"/").concat(t.path);r[e.libraryFolderName].push(o)}))),e.preloadedJs&&(o[e.libraryFolderName]=[],o[e.libraryFolderName]&&(o[e.libraryFolderName]=o[e.libraryFolderName]),e.preloadedJs.forEach((function(t){var r="".concat(n,"/").concat(e.libraryFolderName,"/").concat(t.path);o[e.libraryFolderName].push(r)})))}));var i=[],a=[];return f(t).reverse().forEach((function(e){Array.prototype.push.apply(i,r[e]),Array.prototype.push.apply(a,o[e])})),{styles:i,scripts:a}},e}();h.EventDispatcher=function(){};const m={H5P:h}})(),r.default})()));
