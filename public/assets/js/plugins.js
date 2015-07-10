/*!
 * Flickity PACKAGED v1.1.0
 * Touch, responsive, flickable galleries
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,l=this.length;l>a;a++){var c=this[a],h=t.data(c,e);if(h)if(t.isFunction(h[o])&&"_"!==o.charAt(0)){var d=h[o].apply(h,s);if(void 0!==d)return d}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i("object"==typeof exports?require("jquery"):t.jQuery)}(window),function(t){function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function i(t,e){var i=n(t,e)?r:o;i(t,e)}var n,o,r;"classList"in document.documentElement?(n=function(t,e){return t.classList.contains(e)},o=function(t,e){t.classList.add(e)},r=function(t,e){t.classList.remove(e)}):(n=function(t,i){return e(i).test(t.className)},o=function(t,e){n(t,e)||(t.className=t.className+" "+e)},r=function(t,i){t.className=t.className.replace(e(i)," ")});var s={hasClass:n,addClass:o,removeClass:r,toggleClass:i,has:n,add:o,remove:r,toggle:i};"function"==typeof define&&define.amd?define("classie/classie",s):"object"==typeof exports?module.exports=s:t.classie=s}(window),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,o=this,r=o.EventEmitter;n.getListeners=function(t){var e,i,n=this._getEvents();if(t instanceof RegExp){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:o.EventEmitter=t}.call(this),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var o=function(){};i.removeEventListener?o=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(o=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var r={bind:n,unbind:o};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(window),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){}function n(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var n=s[e];t[n]=0}return t}function o(i){function o(){if(!p){p=!0;var n=t.getComputedStyle;if(c=function(){var t=n?function(t){return n(t,null)}:function(t){return t.currentStyle};return function(e){var i=t(e);return i||r("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}}(),h=i("boxSizing")){var o=document.createElement("div");o.style.width="200px",o.style.padding="1px 2px 3px 4px",o.style.borderStyle="solid",o.style.borderWidth="1px 2px 3px 4px",o.style[h]="border-box";var s=document.body||document.documentElement;s.appendChild(o);var a=c(o);d=200===e(a.width),s.removeChild(o)}}}function a(t){if(o(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=c(t);if("none"===i.display)return n();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var a=r.isBorderBox=!(!h||!i[h]||"border-box"!==i[h]),p=0,u=s.length;u>p;p++){var f=s[p],v=i[f];v=l(t,v);var y=parseFloat(v);r[f]=isNaN(y)?0:y}var g=r.paddingLeft+r.paddingRight,m=r.paddingTop+r.paddingBottom,b=r.marginLeft+r.marginRight,x=r.marginTop+r.marginBottom,C=r.borderLeftWidth+r.borderRightWidth,S=r.borderTopWidth+r.borderBottomWidth,w=a&&d,E=e(i.width);E!==!1&&(r.width=E+(w?0:g+C));var P=e(i.height);return P!==!1&&(r.height=P+(w?0:m+S)),r.innerWidth=r.width-(g+C),r.innerHeight=r.height-(m+S),r.outerWidth=r.width+b,r.outerHeight=r.height+x,r}}function l(e,i){if(t.getComputedStyle||-1===i.indexOf("%"))return i;var n=e.style,o=n.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),n.left=i,i=n.pixelLeft,n.left=o,s&&(r.left=s),i}var c,h,d,p=!1;return a}var r="undefined"==typeof console?i:function(t){console.error(t)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("desandro-get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t){function e(t){"function"==typeof t&&(e.isReady?t():s.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||i||n()}function n(){e.isReady=!0;for(var t=0,i=s.length;i>t;t++){var n=s[t];n()}}function o(o){return"complete"===r.readyState?n():(o.bind(r,"DOMContentLoaded",i),o.bind(r,"readystatechange",i),o.bind(t,"load",i)),e}var r=t.document,s=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],o):"object"==typeof exports?module.exports=o(require("eventie")):t.docReady=o(t.eventie)}(window),function(t){function e(t,e){return t[s](e)}function i(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){i(t);for(var n=t.parentNode.querySelectorAll(e),o=0,r=n.length;r>o;o++)if(n[o]===t)return!0;return!1}function o(t,n){return i(t),e(t,n)}var r,s=function(){if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,n=e.length;n>i;i++){var o=e[i],r=o+"MatchesSelector";if(t[r])return r}}();if(s){var a=document.createElement("div"),l=e(a,"div");r=l?e:o}else r=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return r}):"object"==typeof exports?module.exports=r:window.matchesSelector=r}(Element.prototype),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("doc-ready"),require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.docReady,t.matchesSelector)}(window,function(t,e,i){var n={};n.extend=function(t,e){for(var i in e)t[i]=e[i];return t},n.modulo=function(t,e){return(t%e+e)%e};var o=Object.prototype.toString;n.isArray=function(t){return"[object Array]"==o.call(t)},n.makeArray=function(t){var e=[];if(n.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0,o=t.length;o>i;i++)e.push(t[i]);else e.push(t);return e},n.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1},n.removeFrom=function(t,e){var i=n.indexOf(t,e);-1!=i&&t.splice(i,1)},n.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1==t.nodeType&&"string"==typeof t.nodeName},n.setText=function(){function t(t,i){e=e||(void 0!==document.documentElement.textContent?"textContent":"innerText"),t[e]=i}var e;return t}(),n.getParent=function(t,e){for(;t!=document.body;)if(t=t.parentNode,i(t,e))return t},n.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},n.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.filterFindElements=function(t,e){t=n.makeArray(t);for(var o=[],r=0,s=t.length;s>r;r++){var a=t[r];if(n.isElement(a))if(e){i(a,e)&&o.push(a);for(var l=a.querySelectorAll(e),c=0,h=l.length;h>c;c++)o.push(l[c])}else o.push(a)}return o},n.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},n.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var r=t.console;return n.htmlInit=function(i,o){e(function(){for(var e=n.toDashed(o),s=document.querySelectorAll(".js-"+e),a="data-"+e+"-options",l=0,c=s.length;c>l;l++){var h,d=s[l],p=d.getAttribute(a);try{h=p&&JSON.parse(p)}catch(u){r&&r.error("Error parsing "+a+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+u);continue}var f=new i(d,h),v=t.jQuery;v&&v.data(d,o,f)}})},n}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(i){return e(t,i)}):"object"==typeof exports?module.exports=e(t,require("get-size")):(t.Flickity=t.Flickity||{},t.Flickity.Cell=e(t,t.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n="attachEvent"in t;return i.prototype.create=function(){this.element.style.position="absolute",n&&this.element.setAttribute("unselectable","on"),this.x=0,this.shift=0},i.prototype.destroy=function(){this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},i.prototype.getSize=function(){this.size=e(this.element)},i.prototype.setPosition=function(t){this.x=t,this.setDefaultTarget(),this.renderPosition(t)},i.prototype.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},i.prototype.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},i.prototype.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},i.prototype.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/animate",["get-style-property/get-style-property","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("desandro-get-style-property"),require("fizzy-ui-utils")):(t.Flickity=t.Flickity||{},t.Flickity.animatePrototype=e(t,t.getStyleProperty,t.fizzyUIUtils))}(window,function(t,e,i){for(var n,o=0,r="webkit moz ms o".split(" "),s=t.requestAnimationFrame,a=t.cancelAnimationFrame,l=0;l<r.length&&(!s||!a);l++)n=r[l],s=s||t[n+"RequestAnimationFrame"],a=a||t[n+"CancelAnimationFrame"]||t[n+"CancelRequestAnimationFrame"];s&&a||(s=function(e){var i=(new Date).getTime(),n=Math.max(0,16-(i-o)),r=t.setTimeout(function(){e(i+n)},n);return o=i+n,r},a=function(e){t.clearTimeout(e)});var c={};c.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},c.animate=function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;s(function(){e.animate()})}};var h=e("transform"),d=!!e("perspective");return c.positionSlider=function(){var t=this.x;this.options.wrapAround&&this.cells.length>1&&(t=i.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),t+=this.cursorPosition,t=this.options.rightToLeft&&h?-t:t;var e=this.getPositionValue(t);h?this.slider.style[h]=d&&this.isAnimating?"translate3d("+e+",0,0)":"translateX("+e+")":this.slider.style[this.originSide]=e},c.positionSliderAtSelected=function(){if(this.cells.length){var t=this.cells[this.selectedIndex];this.x=-t.target,this.positionSlider()}},c.getPositionValue=function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},c.settle=function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,d&&this.positionSlider(),this.dispatchEvent("settle"))},c.shiftWrapCells=function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},c._shiftCells=function(t,e,i){for(var n=0,o=t.length;o>n;n++){var r=t[n],s=e>0?i:0;r.wrapShift(s),e-=r.size.outerWidth}},c._unshiftCells=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++)t[e].wrapShift(0)},c.integratePhysics=function(){this.velocity+=this.accel,this.x+=this.velocity,this.velocity*=this.getFrictionFactor(),this.accel=0},c.applyForce=function(t){this.accel+=t},c.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},c.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},c.applyDragForce=function(){if(this.isPointerDown){var t=this.dragX-this.x,e=t-this.velocity;this.applyForce(e)}},c.applySelectedAttraction=function(){var t=this.cells.length;if(!this.isPointerDown&&!this.isFreeScrolling&&t){var e=this.cells[this.selectedIndex],i=this.options.wrapAround&&t>1?this.slideableWidth*Math.floor(this.selectedIndex/t):0,n=-1*(e.target+i)-this.x,o=n*this.options.selectedAttraction;this.applyForce(o)}},c}),function(t,e){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["classie/classie","eventEmitter/EventEmitter","eventie/eventie","get-size/get-size","fizzy-ui-utils/utils","./cell","./animate"],function(i,n,o,r,s,a,l){return e(t,i,n,o,r,s,a,l)});else if("object"==typeof exports)module.exports=e(t,require("desandro-classie"),require("wolfy87-eventemitter"),require("eventie"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./animate"));else{var i=t.Flickity;t.Flickity=e(t,t.classie,t.EventEmitter,t.eventie,t.getSize,t.fizzyUIUtils,i.Cell,i.animatePrototype)}}(window,function(t,e,i,n,o,r,s,a){function l(t,e){for(t=r.makeArray(t);t.length;)e.appendChild(t.shift())}function c(t,e){var i=r.getQueryElement(t);return i?(this.element=i,h&&(this.$element=h(this.element)),this.options=r.extend({},this.constructor.defaults),this.option(e),void this._create()):void(p&&p.error("Bad element for Flickity: "+(i||t)))}var h=t.jQuery,d=t.getComputedStyle,p=t.console,u=0,f={};c.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},c.createMethods=[],r.extend(c.prototype,i.prototype),c.prototype._create=function(){var e=this.guid=++u;this.element.flickityGUID=e,f[e]=this,this.selectedIndex=this.options.initialIndex||0,this.restingFrames=0,this.x=0,this.velocity=0,this.accel=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",c.setUnselectable(this.viewport),this._createSlider(),(this.options.resize||this.options.watchCSS)&&(n.bind(t,"resize",this),this.isResizeBound=!0);for(var i=0,o=c.createMethods.length;o>i;i++){var r=c.createMethods[i];this[r]()}this.options.watchCSS?this.watchCSS():this.activate()},c.prototype.option=function(t){r.extend(this.options,t)},c.prototype.activate=function(){if(!this.isActive){this.isActive=!0,e.add(this.element,"flickity-enabled"),this.options.rightToLeft&&e.add(this.element,"flickity-rtl"),this.getSize();var t=this._filterFindCellElements(this.element.children);l(t,this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,n.bind(this.element,"keydown",this)),this.emit("activate"),this.positionSliderAtSelected(),this.select(this.selectedIndex)}},c.prototype._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},c.prototype._filterFindCellElements=function(t){return r.filterFindElements(t,this.options.cellSelector)},c.prototype.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},c.prototype._makeCells=function(t){for(var e=this._filterFindCellElements(t),i=[],n=0,o=e.length;o>n;n++){var r=e[n],a=new s(r,this);i.push(a)}return i},c.prototype.getLastCell=function(){return this.cells[this.cells.length-1]},c.prototype.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},c.prototype._positionCells=function(t){t=t||0,this.maxCellHeight=t?this.maxCellHeight||0:0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n,o=this.cells.length,r=t;o>r;r++)n=this.cells[r],n.setPosition(e),e+=n.size.outerWidth,this.maxCellHeight=Math.max(n.size.outerHeight,this.maxCellHeight);this.slideableWidth=e,this._containCells()},c.prototype._sizeCells=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];n.getSize()}},c.prototype._init=c.prototype.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},c.prototype.getSize=function(){this.size=o(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var v={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};c.prototype.setCellAlign=function(){var t=v[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},c.prototype.setGallerySize=function(){this.options.setGallerySize&&(this.viewport.style.height=this.maxCellHeight+"px")},c.prototype._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},c.prototype._getGapCells=function(t,e,i){for(var n=[];t>0;){var o=this.cells[e];if(!o)break;n.push(o),e+=i,t-=o.size.outerWidth}return n},c.prototype._containCells=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length)for(var t=this.options.rightToLeft?"marginRight":"marginLeft",e=this.options.rightToLeft?"marginLeft":"marginRight",i=this.cells[0].size[t],n=this.getLastCell(),o=this.slideableWidth-n.size[e],r=o-this.size.innerWidth*(1-this.cellAlign),s=o<this.size.innerWidth,a=0,l=this.cells.length;l>a;a++){var c=this.cells[a];c.setDefaultTarget(),s?c.target=o*this.cellAlign:(c.target=Math.max(c.target,this.cursorPosition+i),c.target=Math.min(c.target,r))}},c.prototype.dispatchEvent=function(t,e,i){var n=[e].concat(i);if(this.emitEvent(t,n),h&&this.$element)if(e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},c.prototype.select=function(t,e){if(this.isActive){var i=this.cells.length;this.options.wrapAround&&i>1&&(0>t?this.x-=this.slideableWidth:t>=i&&(this.x+=this.slideableWidth)),(this.options.wrapAround||e)&&(t=r.modulo(t,i)),this.cells[t]&&(this.selectedIndex=t,this.setSelectedCell(),this.startAnimation(),this.dispatchEvent("cellSelect"))}},c.prototype.previous=function(t){this.select(this.selectedIndex-1,t)},c.prototype.next=function(t){this.select(this.selectedIndex+1,t)},c.prototype.setSelectedCell=function(){this._removeSelectedCellClass(),this.selectedCell=this.cells[this.selectedIndex],this.selectedElement=this.selectedCell.element,e.add(this.selectedElement,"is-selected")},c.prototype._removeSelectedCellClass=function(){this.selectedCell&&e.remove(this.selectedCell.element,"is-selected")},c.prototype.getCell=function(t){for(var e=0,i=this.cells.length;i>e;e++){var n=this.cells[e];if(n.element==t)return n}},c.prototype.getCells=function(t){t=r.makeArray(t);for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],s=this.getCell(o);s&&e.push(s)}return e},c.prototype.getCellElements=function(){for(var t=[],e=0,i=this.cells.length;i>e;e++)t.push(this.cells[e].element);return t},c.prototype.getParentCell=function(t){var e=this.getCell(t);return e?e:(t=r.getParent(t,".flickity-slider > *"),this.getCell(t))},c.prototype.getAdjacentCellElements=function(t,e){if(!t)return[this.selectedElement];e=void 0===e?this.selectedIndex:e;var i=this.cells.length;if(1+2*t>=i)return this.getCellElements();for(var n=[],o=e-t;e+t>=o;o++){var s=this.options.wrapAround?r.modulo(o,i):o,a=this.cells[s];a&&n.push(a.element)}return n},c.prototype.uiChange=function(){this.emit("uiChange")},c.prototype.childUIPointerDown=function(t){this.emitEvent("childUIPointerDown",[t])},c.prototype.onresize=function(){this.watchCSS(),this.resize()},r.debounceMethod(c,"onresize",150),c.prototype.resize=function(){this.isActive&&(this.getSize(),this.options.wrapAround&&(this.x=r.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.positionSliderAtSelected())};var y=c.supportsConditionalCSS=function(){var t;return function(){if(void 0!==t)return t;if(!d)return void(t=!1);var e=document.createElement("style"),i=document.createTextNode('body:after { content: "foo"; display: none; }');e.appendChild(i),document.head.appendChild(e);var n=d(document.body,":after").content;return t=-1!=n.indexOf("foo"),document.head.removeChild(e),t}}();c.prototype.watchCSS=function(){var t=this.options.watchCSS;if(t){var e=y();if(!e){var i="fallbackOn"==t?"activate":"deactivate";return void this[i]()}var n=d(this.element,":after").content;-1!=n.indexOf("flickity")?this.activate():this.deactivate()}},c.prototype.onkeydown=function(t){if(this.options.accessibility&&(!document.activeElement||document.activeElement==this.element))if(37==t.keyCode){var e=this.options.rightToLeft?"next":"previous";this.uiChange(),this[e]()}else if(39==t.keyCode){var i=this.options.rightToLeft?"previous":"next";this.uiChange(),this[i]()}},c.prototype.deactivate=function(){if(this.isActive){e.remove(this.element,"flickity-enabled"),e.remove(this.element,"flickity-rtl");for(var t=0,i=this.cells.length;i>t;t++){var o=this.cells[t];o.destroy()}this._removeSelectedCellClass(),this.element.removeChild(this.viewport),l(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),n.unbind(this.element,"keydown",this)),this.isActive=!1,this.emit("deactivate")}},c.prototype.destroy=function(){this.deactivate(),this.isResizeBound&&n.unbind(t,"resize",this),this.emit("destroy"),h&&this.$element&&h.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete f[this.guid]},r.extend(c.prototype,a);var g="attachEvent"in t;return c.setUnselectable=function(t){g&&t.setAttribute("unselectable","on")},c.data=function(t){t=r.getQueryElement(t);var e=t&&t.flickityGUID;return e&&f[e]},r.htmlInit(c,"flickity"),h&&h.bridget&&h.bridget("flickity",c),c.Cell=s,c}),function(t,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["eventEmitter/EventEmitter","eventie/eventie"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("eventie")):t.Unipointer=e(t,t.EventEmitter,t.eventie)}(window,function(t,e,i){function n(){}function o(){}o.prototype=new e,o.prototype.bindStartEvent=function(t){this._bindStartEvent(t,!0)},o.prototype.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},o.prototype._bindStartEvent=function(e,n){n=void 0===n?!0:!!n;var o=n?"bind":"unbind";t.navigator.pointerEnabled?i[o](e,"pointerdown",this):t.navigator.msPointerEnabled?i[o](e,"MSPointerDown",this):(i[o](e,"mousedown",this),i[o](e,"touchstart",this))},o.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.prototype.getTouch=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];if(n.identifier==this.pointerIdentifier)return n}},o.prototype.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},o.prototype.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},o.prototype.onMSPointerDown=o.prototype.onpointerdown=function(t){this._pointerDown(t,t)},o.prototype._pointerDown=function(t,e){this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},o.prototype.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var r={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]};return o.prototype._bindPostStartEvents=function(e){if(e){for(var n=r[e.type],o=e.preventDefault?t:document,s=0,a=n.length;a>s;s++){var l=n[s];i.bind(o,l,this)}this._boundPointerEvents={events:n,node:o}}},o.prototype._unbindPostStartEvents=function(){var t=this._boundPointerEvents;if(t&&t.events){for(var e=0,n=t.events.length;n>e;e++){var o=t.events[e];i.unbind(t.node,o,this)}delete this._boundPointerEvents}},o.prototype.onmousemove=function(t){this._pointerMove(t,t)},o.prototype.onMSPointerMove=o.prototype.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},o.prototype.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},o.prototype._pointerMove=function(t,e){this.pointerMove(t,e)},o.prototype.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},o.prototype.onmouseup=function(t){this._pointerUp(t,t)},o.prototype.onMSPointerUp=o.prototype.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},o.prototype.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},o.prototype._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},o.prototype.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},o.prototype._pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this._unbindPostStartEvents(),this.pointerDone()},o.prototype.pointerDone=n,o.prototype.onMSPointerCancel=o.prototype.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},o.prototype.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},o.prototype._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},o.prototype.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},o.getPointerPoint=function(t){return{x:void 0!==t.pageX?t.pageX:t.clientX,y:void 0!==t.pageY?t.pageY:t.clientY}},o}),function(t,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["eventie/eventie","unipointer/unipointer"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("unipointer")):t.Unidragger=e(t,t.eventie,t.Unipointer)}(window,function(t,e,i){function n(){}function o(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function r(){}function s(){return!1}r.prototype=new i,r.prototype.bindHandles=function(){this._bindHandles(!0)},r.prototype.unbindHandles=function(){this._bindHandles(!1)};var a=t.navigator;r.prototype._bindHandles=function(t){t=void 0===t?!0:!!t;var i;i=a.pointerEnabled?function(e){e.style.touchAction=t?"none":""}:a.msPointerEnabled?function(e){e.style.msTouchAction=t?"none":""}:function(){t&&c(s)};for(var n=t?"bind":"unbind",o=0,r=this.handles.length;r>o;o++){var s=this.handles[o];this._bindStartEvent(s,t),i(s),e[n](s,"click",this)}};var l="attachEvent"in document.documentElement,c=l?function(t){"IMG"==t.nodeName&&(t.ondragstart=s);for(var e=t.querySelectorAll("img"),i=0,n=e.length;n>i;i++){var o=e[i];o.ondragstart=s}}:n;return r.prototype.pointerDown=function(t,e){this._dragPointerDown(t,e);var i=document.activeElement;i&&i.blur&&i.blur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])},r.prototype._dragPointerDown=function(t,e){this.pointerDownPoint=i.getPointerPoint(e);var n="touchstart"==t.type,r=t.target.nodeName;n||"SELECT"==r||o(t)},r.prototype.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},r.prototype._dragPointerMove=function(t,e){var n=i.getPointerPoint(e),o={x:n.x-this.pointerDownPoint.x,y:n.y-this.pointerDownPoint.y};return!this.isDragging&&this.hasDragStarted(o)&&this._dragStart(t,e),o},r.prototype.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},r.prototype.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},r.prototype._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},r.prototype._dragStart=function(t,e){this.isDragging=!0,this.dragStartPoint=r.getPointerPoint(e),this.isPreventingClicks=!0,this.dragStart(t,e)},r.prototype.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},r.prototype._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},r.prototype.dragMove=function(t,e,i){o(t),this.emitEvent("dragMove",[t,e,i])},r.prototype._dragEnd=function(t,e){this.isDragging=!1;var i=this;setTimeout(function(){delete i.isPreventingClicks
}),this.dragEnd(t,e)},r.prototype.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},r.prototype.onclick=function(t){this.isPreventingClicks&&o(t)},r.prototype._staticClick=function(t,e){var i=t.target.nodeName;("INPUT"==i||"TEXTAREA"==i)&&t.target.focus(),this.staticClick(t,e)},r.prototype.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},r.getPointerPoint=function(t){return{x:void 0!==t.pageX?t.pageX:t.clientX,y:void 0!==t.pageY?t.pageY:t.clientY}},r.getPointerPoint=i.getPointerPoint,r}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/drag",["classie/classie","eventie/eventie","./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(i,n,o,r,s){return e(t,i,n,o,r,s)}):"object"==typeof exports?module.exports=e(t,require("desandro-classie"),require("eventie"),require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):t.Flickity=e(t,t.classie,t.eventie,t.Flickity,t.Unidragger,t.fizzyUIUtils)}(window,function(t,e,i,n,o,r){function s(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function a(e){var i=o.getPointerPoint(e);return i.y-t.pageYOffset}r.extend(n.defaults,{draggable:!0,touchVerticalScroll:!0}),n.createMethods.push("_createDrag"),r.extend(n.prototype,o.prototype),n.prototype._createDrag=function(){this.on("activate",this.bindDrag),this.on("uiChange",this._uiChangeDrag),this.on("childUIPointerDown",this._childUIPointerDownDrag),this.on("deactivate",this.unbindDrag)},n.prototype.bindDrag=function(){this.options.draggable&&!this.isDragBound&&(e.add(this.element,"is-draggable"),this.handles=[this.viewport],this.bindHandles(),this.isDragBound=!0)},n.prototype.unbindDrag=function(){this.isDragBound&&(e.remove(this.element,"is-draggable"),this.unbindHandles(),delete this.isDragBound)},n.prototype._uiChangeDrag=function(){delete this.isFreeScrolling},n.prototype._childUIPointerDownDrag=function(t){s(t),this.pointerDownFocus(t)},n.prototype.pointerDown=function(t,i){this._dragPointerDown(t,i);var n=document.activeElement;n&&n.blur&&n!=this.element&&n!=document.body&&n.blur(),this.pointerDownFocus(t),this.dragX=this.x,e.add(this.viewport,"is-pointer-down"),this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[i])};var l={touchstart:!0,MSPointerDown:!0},c={INPUT:!0,SELECT:!0};n.prototype.pointerDownFocus=function(t){!this.options.accessibility||l[t.type]||c[t.target.nodeName]||this.element.focus()},n.prototype.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.touchVerticalScrollMove(t,e,i),this._dragMove(t,e,i),this.dispatchEvent("pointerMove",t,[e,i])},n.prototype.hasDragStarted=function(t){return!this.isTouchScrolling&&Math.abs(t.x)>3},n.prototype.pointerUp=function(t,i){delete this.isTouchScrolling,e.remove(this.viewport,"is-pointer-down"),this.dispatchEvent("pointerUp",t,[i]),this._dragPointerUp(t,i)};var h={touchmove:!0,MSPointerMove:!0};return n.prototype.touchVerticalScrollMove=function(e,i,n){var o=this.options.touchVerticalScroll,r="withDrag"==o?!o:this.isDragging||!o;!r&&h[e.type]&&!this.isTouchScrolling&&Math.abs(n.y)>10&&(this.startScrollY=t.pageYOffset,this.pointerWindowStartY=a(i),this.isTouchScrolling=!0)},n.prototype.dragStart=function(t,e){this.dragStartPosition=this.x,this.startAnimation(),this.dispatchEvent("dragStart",t,[e])},n.prototype.dragMove=function(t,e,i){s(t),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1,o=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.cells.length){var r=Math.max(-this.cells[0].target,this.dragStartPosition);o=o>r?.5*(o+r):o;var a=Math.min(-this.getLastCell().target,this.dragStartPosition);o=a>o?.5*(o+a):o}this.dragX=o,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])},n.prototype.dragEnd=function(t,e){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingDragPosition();this.isFreeScrolling=-n>this.cells[0].target&&-n<this.getLastCell().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.select(i),this.dispatchEvent("dragEnd",t,[e])},n.prototype.dragEndRestingSelect=function(){var t=this.getRestingDragPosition(),e=Math.abs(this.getCellDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1),o=i.distance<n.distance?i.index:n.index;return o},n.prototype.getRestingDragPosition=function(){var t=this.dragX-this.x;return this.x+t/(1-this.getFrictionFactor())},n.prototype._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,o=1/0,r=this.options.contain&&!this.options.wrapAround?function(t,e){return e>=t}:function(t,e){return e>t};r(e,o)&&(n+=i,o=e,e=this.getCellDistance(-t,n),null!==e);)e=Math.abs(e);return{distance:o,index:n-i}},n.prototype.getCellDistance=function(t,e){var i=this.cells.length,n=this.options.wrapAround&&i>1,o=n?r.modulo(e,i):e,s=this.cells[o];if(!s)return null;var a=n?this.slideableWidth*Math.floor(e/i):0;return t-(s.target+a)},n.prototype.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var t=this.getCellDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return t>0&&e>0?1:0>t&&0>e?-1:0},n.prototype.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,o=i&&r.indexOf(this.cells,i);this.dispatchEvent("staticClick",t,[e,n,o])},n}),function(t,e){"function"==typeof define&&define.amd?define("tap-listener/tap-listener",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof exports?module.exports=e(t,require("unipointer")):t.TapListener=e(t,t.Unipointer)}(window,function(t,e){function i(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function n(t){this.bindTap(t)}n.prototype=new e,n.prototype.bindTap=function(t){t&&(this.unbindTap(),this.tapElement=t,this._bindStartEvent(t,!0))},n.prototype.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)};var o=n.prototype.pointerDown;n.prototype.pointerDown=function(t){"touchstart"==t.type&&i(t),o.apply(this,arguments)};var r=void 0!==t.pageYOffset;return n.prototype.pointerUp=function(i,n){var o=e.getPointerPoint(n),s=this.tapElement.getBoundingClientRect(),a=r?t.pageXOffset:document.body.scrollLeft,l=r?t.pageYOffset:document.body.scrollTop,c=o.x>=s.left+a&&o.x<=s.right+a&&o.y>=s.top+l&&o.y<=s.bottom+l;c&&this.emitEvent("tap",[i,n])},n.prototype.destroy=function(){this.pointerDone(),this.unbindTap()},n}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["eventie/eventie","./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.eventie,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n,o){function r(t,e){this.direction=t,this.parent=e,this._create()}function s(t){return"string"==typeof t?t:"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}var a="http://www.w3.org/2000/svg",l=function(){function t(){if(void 0!==e)return e;var t=document.createElement("div");return t.innerHTML="<svg/>",e=(t.firstChild&&t.firstChild.namespaceURI)==a}var e;return t}();return r.prototype=new n,r.prototype._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");if(e.className="flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),i.setUnselectable(e),l()){var n=this.createSVG();e.appendChild(n)}else this.setArrowText(),e.className+=" no-svg";var o=this;this.onCellSelect=function(){o.update()},this.parent.on("cellSelect",this.onCellSelect),this.on("tap",this.onTap),this.on("pointerDown",function(t,e){o.parent.childUIPointerDown(e)})},r.prototype.activate=function(){this.update(),this.bindTap(this.element),e.bind(this.element,"click",this),this.parent.element.appendChild(this.element)},r.prototype.deactivate=function(){this.parent.element.removeChild(this.element),n.prototype.destroy.call(this),e.unbind(this.element,"click",this)},r.prototype.createSVG=function(){var t=document.createElementNS(a,"svg");t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(a,"path"),i=s(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},r.prototype.setArrowText=function(){var t=this.parent.options,e=this.isLeft?t.leftArrowText:t.rightArrowText;o.setText(this.element,e)},r.prototype.onTap=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},r.prototype.handleEvent=o.handleEvent,r.prototype.onclick=function(){var t=document.activeElement;t&&t==this.element&&this.onTap()},r.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},r.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},r.prototype.update=function(){var t=this.parent.cells;if(this.parent.options.wrapAround&&t.length>1)return void this.enable();var e=t.length?t.length-1:0,i=this.isPrevious?0:e,n=this.parent.selectedIndex==i?"disable":"enable";this[n]()},r.prototype.destroy=function(){this.deactivate()},o.extend(i.defaults,{prevNextButtons:!0,leftArrowText:"â€¹",rightArrowText:"â€º",arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),i.createMethods.push("_createPrevNextButtons"),i.prototype._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new r(-1,this),this.nextButton=new r(1,this),this.on("activate",this.activatePrevNextButtons))},i.prototype.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},i.prototype.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},i.PrevNextButton=r,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["eventie/eventie","./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.eventie,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n,o){function r(t){this.parent=t,this._create()}return r.prototype=new n,r.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",i.setUnselectable(this.holder),this.dots=[];var t=this;this.onCellSelect=function(){t.updateSelected()},this.parent.on("cellSelect",this.onCellSelect),this.on("tap",this.onTap),this.on("pointerDown",function(e,i){t.parent.childUIPointerDown(i)})},r.prototype.activate=function(){this.setDots(),this.updateSelected(),this.bindTap(this.holder),this.parent.element.appendChild(this.holder)},r.prototype.deactivate=function(){this.parent.element.removeChild(this.holder),n.prototype.destroy.call(this)},r.prototype.setDots=function(){var t=this.parent.cells.length-this.dots.length;t>0?this.addDots(t):0>t&&this.removeDots(-t)},r.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[];t;){var n=document.createElement("li");n.className="dot",e.appendChild(n),i.push(n),t--}this.holder.appendChild(e),this.dots=this.dots.concat(i)},r.prototype.removeDots=function(t){for(var e=this.dots.splice(this.dots.length-t,t),i=0,n=e.length;n>i;i++){var o=e[i];this.holder.removeChild(o)}},r.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot"),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected")},r.prototype.onTap=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=o.indexOf(this.dots,e);this.parent.select(i)}},r.prototype.destroy=function(){this.deactivate()},i.PageDots=r,o.extend(i.defaults,{pageDots:!0}),i.createMethods.push("_createPageDots"),i.prototype._createPageDots=function(){this.options.pageDots&&(this.pageDots=new r(this),this.on("activate",this.activatePageDots),this.on("cellAddedRemoved",this.onCellAddedRemovedPageDots),this.on("deactivate",this.deactivatePageDots))},i.prototype.activatePageDots=function(){this.pageDots.activate()},i.prototype.onCellAddedRemovedPageDots=function(){this.pageDots.setDots()},i.prototype.deactivatePageDots=function(){this.pageDots.deactivate()},i.PageDots=r,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/player",["eventEmitter/EventEmitter","eventie/eventie","./flickity"],function(t,i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(require("wolfy87-eventemitter"),require("eventie"),require("./flickity")):e(t.EventEmitter,t.eventie,t.Flickity)}(window,function(t,e,i){function n(t){if(this.isPlaying=!1,this.parent=t,r){var e=this;this.onVisibilityChange=function(){e.visibilityChange()}}}var o,r;return"hidden"in document?(o="hidden",r="visibilitychange"):"webkitHidden"in document&&(o="webkitHidden",r="webkitvisibilitychange"),n.prototype=new t,n.prototype.play=function(){this.isPlaying=!0,delete this.isPaused,r&&document.addEventListener(r,this.onVisibilityChange,!1),this.tick()},n.prototype.tick=function(){if(this.isPlaying&&!this.isPaused){this.tickTime=new Date;var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.isPlaying=!1,delete this.isPaused,this.clear(),r&&document.removeEventListener(r,this.onVisibilityChange,!1)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){this.isPlaying&&(this.isPaused=!0,this.clear())},n.prototype.unpause=function(){this.isPaused&&this.play()},n.prototype.visibilityChange=function(){var t=document[o];this[t?"pause":"unpause"]()},i.createMethods.push("_createPlayer"),i.prototype._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},i.prototype.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),e.bind(this.element,"mouseenter",this),this.isMouseenterBound=!0)},i.prototype.stopPlayer=function(){this.player.stop()},i.prototype.deactivatePlayer=function(){this.player.stop(),this.isMouseenterBound&&(e.unbind(this.element,"mouseenter",this),delete this.isMouseenterBound)},i.prototype.onmouseenter=function(){this.player.pause(),e.bind(this.element,"mouseleave",this)},i.prototype.onmouseleave=function(){this.player.unpause(),e.unbind(this.element,"mouseleave",this)},i.Player=n,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){function n(t){for(var e=document.createDocumentFragment(),i=0,n=t.length;n>i;i++){var o=t[i];e.appendChild(o.element)}return e}return e.prototype.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var o=this.cells.length;e=void 0===e?o:e;var r=n(i),s=e==o;if(s)this.slider.appendChild(r);else{var a=this.cells[e].element;this.slider.insertBefore(r,a)}if(0===e)this.cells=i.concat(this.cells);else if(s)this.cells=this.cells.concat(i);else{var l=this.cells.splice(e,o-e);this.cells=this.cells.concat(i).concat(l)}this._sizeCells(i);var c=e>this.selectedIndex?0:i.length;this._cellAddedRemoved(e,c)}},e.prototype.append=function(t){this.insert(t,this.cells.length)},e.prototype.prepend=function(t){this.insert(t,0)},e.prototype.remove=function(t){var e,n,o,r=this.getCells(t),s=0;for(e=0,n=r.length;n>e;e++){o=r[e];var a=i.indexOf(this.cells,o)<this.selectedIndex;s-=a?1:0}for(e=0,n=r.length;n>e;e++)o=r[e],o.remove(),i.removeFrom(this.cells,o);r.length&&this._cellAddedRemoved(0,s)},e.prototype._cellAddedRemoved=function(t,e){e=e||0,this.selectedIndex+=e,this.selectedIndex=Math.max(0,Math.min(this.cells.length-1,this.selectedIndex)),this.emitEvent("cellAddedRemoved",[t,e]),this.cellChange(t)},e.prototype.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var n=i.indexOf(this.cells,e);this.cellChange(n)}},e.prototype.cellChange=function(t){this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize(),this.options.freeScroll?this.positionSlider():this.select(this.selectedIndex)},e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["classie/classie","eventie/eventie","./flickity","fizzy-ui-utils/utils"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof exports?module.exports=e(t,require("desandro-classie"),require("eventie"),require("./flickity"),require("fizzy-ui-utils")):e(t,t.classie,t.eventie,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i,n,o){function r(t){if("IMG"==t.nodeName&&t.getAttribute("data-flickity-lazyload"))return[t];var e=t.querySelectorAll("img[data-flickity-lazyload]");return o.makeArray(e)}function s(t,e){this.img=t,this.flickity=e,this.load()}return n.createMethods.push("_createLazyload"),n.prototype._createLazyload=function(){this.on("cellSelect",this.lazyLoad)},n.prototype.lazyLoad=function(){var t=this.options.lazyLoad;if(t){for(var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[],o=0,a=i.length;a>o;o++){var l=i[o],c=r(l);n=n.concat(c)}for(o=0,a=n.length;a>o;o++){var h=n[o];new s(h,this)}}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){i.bind(this.img,"load",this),i.bind(this.img,"error",this),this.img.src=this.img.getAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(){this.complete(event,"flickity-lazyerror")},s.prototype.complete=function(t,n){i.unbind(this.img,"load",this),i.unbind(this.img,"error",this);var o=this.flickity.getParentCell(this.img),r=o&&o.element;this.flickity.cellSizeChange(r),e.add(this.img,n),this.flickity.dispatchEvent("lazyLoad",t,r)},n.LazyLoader=s,n}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["classie/classie","flickity/js/index","fizzy-ui-utils/utils"],function(i,n,o){return e(t,i,n,o)}):"object"==typeof exports?module.exports=e(t,require("desandro-classie"),require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t,t.classie,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i,n){return i.createMethods.push("_createAsNavFor"),i.prototype._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},i.prototype.setNavCompanion=function(t){t=n.getQueryElement(t);var e=i.data(t);if(e&&e!=this){this.navCompanion=e;var o=this;this.onNavCompanionSelect=function(){o.navCompanionSelect()},e.on("cellSelect",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect()}},i.prototype.navCompanionSelect=function(){if(this.navCompanion){var t=this.navCompanion.selectedIndex;this.select(t),this.removeNavSelectedElement(),this.selectedIndex==t&&(this.navSelectedElement=this.cells[t].element,e.add(this.navSelectedElement,"is-nav-selected"))}},i.prototype.activateAsNavFor=function(){this.navCompanionSelect()},i.prototype.removeNavSelectedElement=function(){this.navSelectedElement&&(e.remove(this.navSelectedElement,"is-nav-selected"),delete this.navSelectedElement)},i.prototype.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.select(n)},i.prototype.deactivateAsNavFor=function(){this.removeNavSelectedElement()},i.prototype.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("cellSelect",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},i}),function(t,e){"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["eventEmitter/EventEmitter","eventie/eventie"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("eventie")):t.imagesLoaded=e(t,t.EventEmitter,t.eventie)}(window,function(t,e,i){function n(t,e){for(var i in e)t[i]=e[i];return t}function o(t){return"[object Array]"===p.call(t)}function r(t){var e=[];if(o(t))e=t;else if("number"==typeof t.length)for(var i=0,n=t.length;n>i;i++)e.push(t[i]);else e.push(t);return e}function s(t,e,i){if(!(this instanceof s))return new s(t,e);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=r(t),this.options=n({},this.options),"function"==typeof e?i=e:n(this.options,e),i&&this.on("always",i),this.getImages(),c&&(this.jqDeferred=new c.Deferred);var o=this;setTimeout(function(){o.check()})}function a(t){this.img=t}function l(t){this.src=t,u[t]=this}var c=t.jQuery,h=t.console,d="undefined"!=typeof h,p=Object.prototype.toString;s.prototype=new e,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var t=0,e=this.elements.length;e>t;t++){var i=this.elements[t];"IMG"===i.nodeName&&this.addImage(i);var n=i.nodeType;if(n&&(1===n||9===n||11===n))for(var o=i.querySelectorAll("img"),r=0,s=o.length;s>r;r++){var a=o[r];this.addImage(a)}}},s.prototype.addImage=function(t){var e=new a(t);this.images.push(e)},s.prototype.check=function(){function t(t,o){return e.options.debug&&d&&h.log("confirm",t,o),e.progress(t),i++,i===n&&e.complete(),!0}var e=this,i=0,n=this.images.length;if(this.hasAnyBroken=!1,!n)return void this.complete();for(var o=0;n>o;o++){var r=this.images[o];r.on("confirm",t),r.check()}},s.prototype.progress=function(t){this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;var e=this;setTimeout(function(){e.emit("progress",e,t),e.jqDeferred&&e.jqDeferred.notify&&e.jqDeferred.notify(e,t)})},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var e=this;setTimeout(function(){if(e.emit(t,e),e.emit("always",e),e.jqDeferred){var i=e.hasAnyBroken?"reject":"resolve";e.jqDeferred[i](e)}})},c&&(c.fn.imagesLoaded=function(t,e){var i=new s(this,t,e);return i.jqDeferred.promise(c(this))}),a.prototype=new e,a.prototype.check=function(){var t=u[this.img.src]||new l(this.img.src);if(t.isConfirmed)return void this.confirm(t.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var e=this;t.on("confirm",function(t,i){return e.confirm(t.isLoaded,i),!0}),t.check()},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("confirm",this,e)};var u={};return l.prototype=new e,l.prototype.check=function(){if(!this.isChecked){var t=new Image;i.bind(t,"load",this),i.bind(t,"error",this),t.src=this.src,this.isChecked=!0}},l.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},l.prototype.onload=function(t){this.confirm(!0,"onload"),this.unbindProxyEvents(t)},l.prototype.onerror=function(t){this.confirm(!1,"onerror"),this.unbindProxyEvents(t)},l.prototype.confirm=function(t,e){this.isConfirmed=!0,this.isLoaded=t,this.emit("confirm",this,e)},l.prototype.unbindProxyEvents=function(t){i.unbind(t.target,"load",this),i.unbind(t.target,"error",this)},s}),function(t,e){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("flickity"),require("imagesloaded")):t.Flickity=e(t,t.Flickity,t.imagesLoaded)}(window,function(t,e,i){return e.createMethods.push("_createImagesLoaded"),e.prototype._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},e.prototype.imagesLoaded=function(){function t(t,i){var n=e.getParentCell(i.img);e.cellSizeChange(n&&n.element)}if(this.options.imagesLoaded){var e=this;i(this.slider).on("progress",t)}},e});

/** smooth-scroll v6.0.0, by Chris Ferdinandi | http://github.com/cferdinandi/smooth-scroll | Licensed under MIT: http://gomakethings.com/mit/ */
!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.buoy=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";var e={};return e.ready=function(t){return"function"==typeof t?"complete"===document.readyState?t():void document.addEventListener("DOMContentLoaded",t,!1):void 0},e.forEach=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(n,t[r],r,t);else for(var o=0,s=t.length;s>o;o++)e.call(n,t[o],o,t)},e.extend=function(){var t={},n=!1,r=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],r++);for(var s=function(r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=n&&"[object Object]"===Object.prototype.toString.call(r[o])?e.extend(!0,t[o],r[o]):r[o])};o>r;r++){var i=arguments[r];s(i)}return t},e.getHeight=function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},e.getOffsetTop=function(t){var e=0;if(t.offsetParent)do e+=t.offsetTop,t=t.offsetParent;while(t);return e>=0?e:0},e.getClosest=function(t,e){var n,r,o=e.charAt(0),s="classList"in document.documentElement;for("["===o&&(e=e.substr(1,e.length-2),n=e.split("="),n.length>1&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));t&&t!==document;t=t.parentNode){if("."===o)if(s){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===o&&t.id===e.substr(1))return t;if("["===o&&t.hasAttribute(n[0])){if(!r)return t;if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null},e.getParents=function(t,e){var n,r,o,s=[],i="classList"in document.documentElement;for(e&&(n=e.charAt(0),"["===n&&(e=e.substr(1,e.length-2),r=e.split("="),r.length>1&&(o=!0,r[1]=r[1].replace(/"/g,"").replace(/'/g,""))));t&&t!==document;t=t.parentNode)e?("."===n&&(i?t.classList.contains(e.substr(1))&&s.push(t):new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className)&&s.push(t)),"#"===n&&t.id===e.substr(1)&&s.push(t),"["===n&&t.hasAttribute(r[0])&&(o?t.getAttribute(r[0])===r[1]&&s.push(t):s.push(t)),t.tagName.toLowerCase()===e&&s.push(t)):s.push(t);return 0===s.length?null:s},e.getSiblings=function(t){for(var e=[],n=t.parentNode.firstChild;n;n=n.nextSibling)1===n.nodeType&&n!==t&&e.push(n);return e},e.getQueryString=function(t,e){var n=e?e:window.location.href,r=new RegExp("[?&]"+t+"=([^&#]*)","i"),o=r.exec(n);return o?o[1]:null},e});

/** smooth-scroll v6.0.0, by Chris Ferdinandi | http://github.com/cferdinandi/smooth-scroll | Licensed under MIT: http://gomakethings.com/mit/ */
!function(e,t){"function"==typeof define&&define.amd?define(["buoy"],t(e)):"object"==typeof exports?module.exports=t(e,require("buoy")):e.smoothScroll=t(e,e.buoy)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,o,a,r={},u=!!e.document.querySelector&&!!e.addEventListener,c={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},i=function(e){for(var t,n=String(e),o=n.length,a=-1,r="",u=n.charCodeAt(0);++a<o;){if(t=n.charCodeAt(a),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=t>=1&&31>=t||127==t||0===a&&t>=48&&57>=t||1===a&&t>=48&&57>=t&&45===u?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(a):"\\"+n.charAt(a)}return r},l=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},s=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=o-t-n,o>=0?o:0},f=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},d=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},h=function(t,n){e.history.pushState&&(n||"true"===n)&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},m=function(e){return null===e?0:buoy.getHeight(e)+e.offsetTop};r.animateScroll=function(t,n,r){var u=d(t?t.getAttribute("data-options"):null),p=buoy.extend(p||c,r||{},u);n="#"+i(n.substr(1));var b="#"===n?e.document.documentElement:e.document.querySelector(n),g=e.pageYOffset;o||(o=e.document.querySelector("[data-scroll-header]")),a||(a=m(o));var v,y,I,O=s(b,a,parseInt(p.offset,10)),S=O-g,E=f(),C=0;h(n,p.updateURL);var Q=function(o,a,r){var u=e.pageYOffset;(o==a||u==a||e.innerHeight+u>=E)&&(clearInterval(r),b.focus(),p.callbackAfter(t,n))},H=function(){C+=16,y=C/parseInt(p.speed,10),y=y>1?1:y,I=g+S*l(p.easing,y),e.scrollTo(0,Math.floor(I)),Q(I,O,v)},L=function(){p.callbackBefore(t,n),v=setInterval(H,16)};0===e.pageYOffset&&e.scrollTo(0,0),L()};var p=function(e){var n=buoy.getClosest(e.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),r.animateScroll(n,n.hash,t))},b=function(e){n||(n=setTimeout(function(){n=null,a=m(o)},66))};return r.destroy=function(){t&&(e.document.removeEventListener("click",p,!1),e.removeEventListener("resize",b,!1),t=null,n=null,o=null,a=null)},r.init=function(n){u&&(r.destroy(),t=buoy.extend(c,n||{}),o=e.document.querySelector("[data-scroll-header]"),a=m(o),e.document.addEventListener("click",p,!1),o&&e.addEventListener("resize",b,!1))},r});

;(function () {
  'use strict';

  /**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */

  /*jslint browser:true, node:true*/
  /*global define, Event, Node*/


  /**
   * Instantiate fast-clicking listeners on the specified layer.
   *
   * @constructor
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */
  function FastClick(layer, options) {
    var oldOnClick;

    options = options || {};

    /**
     * Whether a click is currently being tracked.
     *
     * @type boolean
     */
    this.trackingClick = false;


    /**
     * Timestamp for when click tracking started.
     *
     * @type number
     */
    this.trackingClickStart = 0;


    /**
     * The element being tracked for a click.
     *
     * @type EventTarget
     */
    this.targetElement = null;


    /**
     * X-coordinate of touch start event.
     *
     * @type number
     */
    this.touchStartX = 0;


    /**
     * Y-coordinate of touch start event.
     *
     * @type number
     */
    this.touchStartY = 0;


    /**
     * ID of the last touch, retrieved from Touch.identifier.
     *
     * @type number
     */
    this.lastTouchIdentifier = 0;


    /**
     * Touchmove boundary, beyond which a click will be cancelled.
     *
     * @type number
     */
    this.touchBoundary = options.touchBoundary || 10;


    /**
     * The FastClick layer.
     *
     * @type Element
     */
    this.layer = layer;

    /**
     * The minimum time between tap(touchstart and touchend) events
     *
     * @type number
     */
    this.tapDelay = options.tapDelay || 200;

    /**
     * The maximum time for a tap
     *
     * @type number
     */
    this.tapTimeout = options.tapTimeout || 700;

    if (FastClick.notNeeded(layer)) {
      return;
    }

    // Some old versions of Android don't have Function.prototype.bind
    function bind(method, context) {
      return function() { return method.apply(context, arguments); };
    }


    var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
    var context = this;
    for (var i = 0, l = methods.length; i < l; i++) {
      context[methods[i]] = bind(context[methods[i]], context);
    }

    // Set up event handlers as required
    if (deviceIsAndroid) {
      layer.addEventListener('mouseover', this.onMouse, true);
      layer.addEventListener('mousedown', this.onMouse, true);
      layer.addEventListener('mouseup', this.onMouse, true);
    }

    layer.addEventListener('click', this.onClick, true);
    layer.addEventListener('touchstart', this.onTouchStart, false);
    layer.addEventListener('touchmove', this.onTouchMove, false);
    layer.addEventListener('touchend', this.onTouchEnd, false);
    layer.addEventListener('touchcancel', this.onTouchCancel, false);

    // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
    // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
    // layer when they are cancelled.
    if (!Event.prototype.stopImmediatePropagation) {
      layer.removeEventListener = function(type, callback, capture) {
        var rmv = Node.prototype.removeEventListener;
        if (type === 'click') {
          rmv.call(layer, type, callback.hijacked || callback, capture);
        } else {
          rmv.call(layer, type, callback, capture);
        }
      };

      layer.addEventListener = function(type, callback, capture) {
        var adv = Node.prototype.addEventListener;
        if (type === 'click') {
          adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
            if (!event.propagationStopped) {
              callback(event);
            }
          }), capture);
        } else {
          adv.call(layer, type, callback, capture);
        }
      };
    }

    // If a handler is already declared in the element's onclick attribute, it will be fired before
    // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
    // adding it as listener.
    if (typeof layer.onclick === 'function') {

      // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
      // - the old one won't work if passed to addEventListener directly.
      oldOnClick = layer.onclick;
      layer.addEventListener('click', function(event) {
        oldOnClick(event);
      }, false);
      layer.onclick = null;
    }
  }

  /**
  * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
  *
  * @type boolean
  */
  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

  /**
   * Android requires exceptions.
   *
   * @type boolean
   */
  var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


  /**
   * iOS requires exceptions.
   *
   * @type boolean
   */
  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


  /**
   * iOS 4 requires an exception for select elements.
   *
   * @type boolean
   */
  var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


  /**
   * iOS 6.0-7.* requires the target element to be manually derived
   *
   * @type boolean
   */
  var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

  /**
   * BlackBerry requires exceptions.
   *
   * @type boolean
   */
  var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

  /**
   * Determine whether a given element requires a native click.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element needs a native click
   */
  FastClick.prototype.needsClick = function(target) {
    switch (target.nodeName.toLowerCase()) {

    // Don't send a synthetic click to disabled inputs (issue #62)
    case 'button':
    case 'select':
    case 'textarea':
      if (target.disabled) {
        return true;
      }

      break;
    case 'input':

      // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
      if ((deviceIsIOS && target.type === 'file') || target.disabled) {
        return true;
      }

      break;
    case 'label':
    case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
    case 'video':
      return true;
    }

    return (/\bneedsclick\b/).test(target.className);
  };


  /**
   * Determine whether a given element requires a call to focus to simulate click into element.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
   */
  FastClick.prototype.needsFocus = function(target) {
    switch (target.nodeName.toLowerCase()) {
    case 'textarea':
      return true;
    case 'select':
      return !deviceIsAndroid;
    case 'input':
      switch (target.type) {
      case 'button':
      case 'checkbox':
      case 'file':
      case 'image':
      case 'radio':
      case 'submit':
        return false;
      }

      // No point in attempting to focus disabled inputs
      return !target.disabled && !target.readOnly;
    default:
      return (/\bneedsfocus\b/).test(target.className);
    }
  };


  /**
   * Send a click event to the specified element.
   *
   * @param {EventTarget|Element} targetElement
   * @param {Event} event
   */
  FastClick.prototype.sendClick = function(targetElement, event) {
    var clickEvent, touch;

    // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
    if (document.activeElement && document.activeElement !== targetElement) {
      document.activeElement.blur();
    }

    touch = event.changedTouches[0];

    // Synthesise a click event, with an extra attribute so it can be tracked
    clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent);
  };

  FastClick.prototype.determineEventType = function(targetElement) {

    //Issue #159: Android Chrome Select Box does not open with a synthetic click event
    if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
      return 'mousedown';
    }

    return 'click';
  };


  /**
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.focus = function(targetElement) {
    var length;

    // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
    if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
      length = targetElement.value.length;
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };


  /**
   * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
   *
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.updateScrollParent = function(targetElement) {
    var scrollParent, parentElement;

    scrollParent = targetElement.fastClickScrollParent;

    // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
    // target element was moved to another parent.
    if (!scrollParent || !scrollParent.contains(targetElement)) {
      parentElement = targetElement;
      do {
        if (parentElement.scrollHeight > parentElement.offsetHeight) {
          scrollParent = parentElement;
          targetElement.fastClickScrollParent = parentElement;
          break;
        }

        parentElement = parentElement.parentElement;
      } while (parentElement);
    }

    // Always update the scroll top tracker if possible.
    if (scrollParent) {
      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
    }
  };


  /**
   * @param {EventTarget} targetElement
   * @returns {Element|EventTarget}
   */
  FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

    // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
    if (eventTarget.nodeType === Node.TEXT_NODE) {
      return eventTarget.parentNode;
    }

    return eventTarget;
  };


  /**
   * On touch start, record the position and scroll offset.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchStart = function(event) {
    var targetElement, touch, selection;

    // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
    if (event.targetTouches.length > 1) {
      return true;
    }

    targetElement = this.getTargetElementFromEventTarget(event.target);
    touch = event.targetTouches[0];

    if (deviceIsIOS) {

      // Only trusted events will deselect text on iOS (issue #49)
      selection = window.getSelection();
      if (selection.rangeCount && !selection.isCollapsed) {
        return true;
      }

      if (!deviceIsIOS4) {

        // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
        // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
        // with the same identifier as the touch event that previously triggered the click that triggered the alert.
        // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
        // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
        // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
        // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
        // random integers, it's safe to to continue if the identifier is 0 here.
        if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
          event.preventDefault();
          return false;
        }

        this.lastTouchIdentifier = touch.identifier;

        // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
        // 1) the user does a fling scroll on the scrollable layer
        // 2) the user stops the fling scroll with another tap
        // then the event.target of the last 'touchend' event will be the element that was under the user's finger
        // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
        // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
        this.updateScrollParent(targetElement);
      }
    }

    this.trackingClick = true;
    this.trackingClickStart = event.timeStamp;
    this.targetElement = targetElement;

    this.touchStartX = touch.pageX;
    this.touchStartY = touch.pageY;

    // Prevent phantom clicks on fast double-tap (issue #36)
    if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
      event.preventDefault();
    }

    return true;
  };


  /**
   * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.touchHasMoved = function(event) {
    var touch = event.changedTouches[0], boundary = this.touchBoundary;

    if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
      return true;
    }

    return false;
  };


  /**
   * Update the last position.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchMove = function(event) {
    if (!this.trackingClick) {
      return true;
    }

    // If the touch has moved, cancel the click tracking
    if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
      this.trackingClick = false;
      this.targetElement = null;
    }

    return true;
  };


  /**
   * Attempt to find the labelled control for the given label element.
   *
   * @param {EventTarget|HTMLLabelElement} labelElement
   * @returns {Element|null}
   */
  FastClick.prototype.findControl = function(labelElement) {

    // Fast path for newer browsers supporting the HTML5 control attribute
    if (labelElement.control !== undefined) {
      return labelElement.control;
    }

    // All browsers under test that support touch events also support the HTML5 htmlFor attribute
    if (labelElement.htmlFor) {
      return document.getElementById(labelElement.htmlFor);
    }

    // If no for attribute exists, attempt to retrieve the first labellable descendant element
    // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
    return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
  };


  /**
   * On touch end, determine whether to send a click event at once.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchEnd = function(event) {
    var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

    if (!this.trackingClick) {
      return true;
    }

    // Prevent phantom clicks on fast double-tap (issue #36)
    if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }

    if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
      return true;
    }

    // Reset to prevent wrong click cancel on input (issue #156).
    this.cancelNextClick = false;

    this.lastClickTime = event.timeStamp;

    trackingClickStart = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0;

    // On some iOS devices, the targetElement supplied with the event is invalid if the layer
    // is performing a transition or scroll, and has to be re-detected manually. Note that
    // for this to function correctly, it must be called *after* the event target is checked!
    // See issue #57; also filed as rdar://13048589 .
    if (deviceIsIOSWithBadTarget) {
      touch = event.changedTouches[0];

      // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
      targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
      targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
    }

    targetTagName = targetElement.tagName.toLowerCase();
    if (targetTagName === 'label') {
      forElement = this.findControl(targetElement);
      if (forElement) {
        this.focus(targetElement);
        if (deviceIsAndroid) {
          return false;
        }

        targetElement = forElement;
      }
    } else if (this.needsFocus(targetElement)) {

      // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
      // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
      if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
        this.targetElement = null;
        return false;
      }

      this.focus(targetElement);
      this.sendClick(targetElement, event);

      // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
      // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
      if (!deviceIsIOS || targetTagName !== 'select') {
        this.targetElement = null;
        event.preventDefault();
      }

      return false;
    }

    if (deviceIsIOS && !deviceIsIOS4) {

      // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
      // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
      scrollParent = targetElement.fastClickScrollParent;
      if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
        return true;
      }
    }

    // Prevent the actual click from going though - unless the target node is marked as requiring
    // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
    if (!this.needsClick(targetElement)) {
      event.preventDefault();
      this.sendClick(targetElement, event);
    }

    return false;
  };


  /**
   * On touch cancel, stop tracking the click.
   *
   * @returns {void}
   */
  FastClick.prototype.onTouchCancel = function() {
    this.trackingClick = false;
    this.targetElement = null;
  };


  /**
   * Determine mouse events which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onMouse = function(event) {

    // If a target element was never set (because a touch event was never fired) allow the event
    if (!this.targetElement) {
      return true;
    }

    if (event.forwardedTouchEvent) {
      return true;
    }

    // Programmatically generated events targeting a specific element should be permitted
    if (!event.cancelable) {
      return true;
    }

    // Derive and check the target element to see whether the mouse event needs to be permitted;
    // unless explicitly enabled, prevent non-touch click events from triggering actions,
    // to prevent ghost/doubleclicks.
    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

      // Prevent any user-added listeners declared on FastClick element from being fired.
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {

        // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        event.propagationStopped = true;
      }

      // Cancel the event
      event.stopPropagation();
      event.preventDefault();

      return false;
    }

    // If the mouse event is permitted, return true for the action to go through.
    return true;
  };


  /**
   * On actual clicks, determine whether this is a touch-generated click, a click action occurring
   * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
   * an actual click which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onClick = function(event) {
    var permitted;

    // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    }

    // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
    if (event.target.type === 'submit' && event.detail === 0) {
      return true;
    }

    permitted = this.onMouse(event);

    // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
    if (!permitted) {
      this.targetElement = null;
    }

    // If clicks are permitted, return true for the action to go through.
    return permitted;
  };


  /**
   * Remove all FastClick's event listeners.
   *
   * @returns {void}
   */
  FastClick.prototype.destroy = function() {
    var layer = this.layer;

    if (deviceIsAndroid) {
      layer.removeEventListener('mouseover', this.onMouse, true);
      layer.removeEventListener('mousedown', this.onMouse, true);
      layer.removeEventListener('mouseup', this.onMouse, true);
    }

    layer.removeEventListener('click', this.onClick, true);
    layer.removeEventListener('touchstart', this.onTouchStart, false);
    layer.removeEventListener('touchmove', this.onTouchMove, false);
    layer.removeEventListener('touchend', this.onTouchEnd, false);
    layer.removeEventListener('touchcancel', this.onTouchCancel, false);
  };


  /**
   * Check whether FastClick is needed.
   *
   * @param {Element} layer The layer to listen on
   */
  FastClick.notNeeded = function(layer) {
    var metaViewport;
    var chromeVersion;
    var blackberryVersion;
    var firefoxVersion;

    // Devices that don't support touch don't need FastClick
    if (typeof window.ontouchstart === 'undefined') {
      return true;
    }

    // Chrome version - zero for other browsers
    chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

    if (chromeVersion) {

      if (deviceIsAndroid) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          }
          // Chrome 32 and above with width=device-width or less don't need FastClick
          if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }

      // Chrome desktop doesn't need FastClick (issue #15)
      } else {
        return true;
      }
    }

    if (deviceIsBlackBerry10) {
      blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

      // BlackBerry 10.3+ does not require Fastclick library.
      // https://github.com/ftlabs/fastclick/issues/251
      if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // user-scalable=no eliminates click delay.
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          }
          // width=device-width (or less than device-width) eliminates click delay.
          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    }

    // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
    if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    // Firefox version - zero for other browsers
    firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

    if (firefoxVersion >= 27) {
      // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

      metaViewport = document.querySelector('meta[name=viewport]');
      if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
        return true;
      }
    }

    // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
    // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
    if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    return false;
  };


  /**
   * Factory method for creating a FastClick object
   *
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */
  FastClick.attach = function(layer, options) {
    return new FastClick(layer, options);
  };


  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

    // AMD. Register as an anonymous module.
    define(function() {
      return FastClick;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;
  } else {
    window.FastClick = FastClick;
  }
}());