!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var o=document.querySelector(".description"),s=o.textContent.split(" ");o.textContent="";for(var a=6;a<s.length;a++)o.innerHTML+="<span>"+"".concat(s[a],"&nbsp")+"</span>";var u=0,l=setInterval((function(){if(o.querySelectorAll("span")[u].classList.add("fade"),++u===s.length-6)return clearInterval(l),void(l=null)}),100);var c=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;r(this,t),this.txtElement=e,this.words=n,this.txt="",this.wordIndex=0,this.wait=parseInt(i,10),this.type(),this.isDeleting=!1}var e,n,o;return e=t,(n=[{key:"type",value:function(){var t=this,e=this.wordIndex%this.words.length,n=this.words[e];this.isDeleting?this.txt=n.substring(0,this.txt.length-1):this.txt=n.substring(0,this.txt.length+1),this.txtElement.innerHTML='<span class="txt">'.concat(this.txt,"</span>");var r=300;this.isDeleting&&(r/=2),this.isDeleting||this.txt!==n?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,r=500):(r=this.wait,this.isDeleting=!0),setTimeout((function(){return t.type()}),r)}}])&&i(e.prototype,n),o&&i(e,o),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".txt-type"),e=JSON.parse(t.getAttribute("data-words")),n=t.getAttribute("data-wait");new c(t,e,n)}))}]);
//# sourceMappingURL=main.js.map