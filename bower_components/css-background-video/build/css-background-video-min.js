!function(e,t){"use strict";var n=n||!1,s=s||!1;"function"==typeof n&&n.amd?n("background-video",[],t):"object"==typeof s&&s&&"object"==typeof s.exports?s.exports=t:t(e)}(this,function(e){var t=function(t){e.document=e.document||{},t=t||{},this.options=d.extend({},n,t),this.styles(),this.options.autoparse&&this.parse()},n={autoparse:!0,position:"absolute",attribute:"background",className:"css-background-video",dataClass:!1},s=function(e){e.addEventListener("error",function(){this.load()},!1),e.addEventListener("canplaythrough",function(){this.parentNode.style.background="none"},!1),e.addEventListener("play",function(){this.setAttribute("data-state","play")},!1),e.addEventListener("pause",function(){this.setAttribute("data-state","pause")},!1),e.addEventListener("ended",function(){this.setAttribute("data-state","ended")},!1)},o=function(){if(e.document.styleSheets){var t=e.document.styleSheets,n=a.bind(this)(t);for(var s in n){var o=e.document.querySelectorAll(s);this.render(o,n[s])}}},a=function(e,t){t=t||{};for(var n in e){var s=e[n].rules||e[n].cssRules;for(var o in s)if(s[o].cssText&&-1!=s[o].cssText.search(this.options.attribute)&&-1!=s[o].cssText.search(/mp4|webm|ogv/g))if(s[o].media){var r=s[o].media[0],i=d.mq(r);if(!i)continue;t=a.bind(this)([s[o]],t)}else{var c=s[o].selectorText,u=s[o].cssText.match(/url\((.*?)\)/g);for(var l in u)u[l]=u[l].replace(/url\(|\)|'|"/g,"");t[c]=u}}return t},r=function(e,t){var n='<video autoplay muted loop class="'+this.options.className+'">';for(var s in t){var o=t[s],a=d.getType(o);n+='<source src="'+o+'" type="video/'+a+'">'}n+="</video>";var r=new DOMParser;n=r.parseFromString(n,"text/html"),n=n.getElementsByTagName("video")[0],this.events(n);for(var i=0;i<e.length;i++){for(var c=e[i],u=c.getElementsByClassName(this.options.className),l=0;l<u.length;l++)c.removeChild(u[l]);c.children?c.insertBefore(n,c.children[0]):c.appendChild(n)}},i=function(){var e="",t=document.getElementById("css-background-video");if(t){if(e=t.innerHTML,e.search(this.options.className)>-1)return;t.parentNode.removeChild(t)}e+="."+this.options.className+" { position: "+this.options.position+"; top: 50%; left: 50%; -webkit-transform: translateX(-50%) translateY(-50%); transform: translateX(-50%) translateY(-50%); min-width: 100%; min-height: 100%; width: 100%; height: auto; z-index: -1000; overflow: hidden; }",d.injectStyles(e)},d={getType:function(e){var t=e.substr(e.lastIndexOf(".")+1);return t.toLowerCase()},injectStyles:function(e){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.id="css-background-video",n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)},extend:function(){var e=Array.prototype.slice.call(arguments),t=e.shift();for(var n in e){var s=e[n];for(var o in s)s[o]&&s[o].constructor&&s[o].constructor===Object?(t[o]=t[o]||{},arguments.callee(t[o],s[o])):t[o]=s[o]}return t},mq:function(e,t,n){t=t||function(){};var s={},o=!(!window||!window.matchMedia||n);if(o){var a=window.matchMedia(e);return t.apply(s,[a.matches,a.media]),a.addListener(function(e){t.apply(s,[e.matches,e.media])}),a.matches}}};t.prototype.events=s,t.prototype.parse=o,t.prototype.render=r,t.prototype.styles=i;var c=e.css||{};if(c["background-video"]){var u="object"==typeof c["background-video"]?c["background-video"]:{};e.onload=function(){new t(u)}}return c["background-video"]=t,e.css=c,t});