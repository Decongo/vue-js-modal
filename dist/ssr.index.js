!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-js-modal"]=t():e["vue-js-modal"]=t()}(global,function(){return i={},o.m=n=[function(e,t,n){var i=n(6);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n(4).default;e.exports.__inject__=function(e){o("27d83796",i,!1,e)}},function(e,t,n){var i=n(8);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n(4).default;e.exports.__inject__=function(e){o("0e783494",i,!1,e)}},function(e,t,n){var i=n(10);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n(4).default;e.exports.__inject__=function(e){o("17757f60",i,!1,e)}},function(e,t){e.exports=function(n){var a=[];return a.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),r=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(r).concat([o]).join("\n")}return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},a.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&n[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),a.push(r))}},a}},function(e,t,n){"use strict";function i(e,t,n,i){if(i||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),i){i.hasOwnProperty("styles")||(Object.defineProperty(i,"styles",{enumerable:!0,get:function(){return r(i._styles)}}),i._renderStyles=r);var o=i._styles||(i._styles={});t=function(e,t){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],a=r[0],s={id:e+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}(e,t),n?function(e,t){for(var n=0;n<t.length;n++)for(var i=t[n].parts,o=0;o<i.length;o++){var r=i[o],a=r.media||"default",s=e[a];s?s.ids.indexOf(r.id)<0&&(s.ids.push(r.id),s.css+="\n"+r.css):e[a]={ids:[r.id],css:r.css,media:r.media}}}(o,t):function(e,t){for(var n=0;n<t.length;n++)for(var i=t[n].parts,o=0;o<i.length;o++){var r=i[o];e[r.id]={ids:[r.id],css:r.css,media:r.media}}}(o,t)}}function r(e){var t="";for(var n in e){var i=e[n];t+='<style data-vue-ssr-id="'+i.ids.join(" ")+'"'+(i.media?' media="'+i.media+'"':"")+">"+i.css+"</style>"}return t}n.r(t),n.d(t,"default",function(){return i})},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=o.a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.vue-modal-resizer {\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  right: 0;\n  bottom: 0;\n  z-index: 9999999;\n  background: transparent;\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\n  display: block;\n  position: absolute;\n  content: '';\n  background: transparent;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid #ddd;\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\n  border-bottom: 10px solid #369be9;\n}\n",""])},function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=o.a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.v--modal-block-scroll {\n  overflow: hidden;\n  width: 100vw;\n}\n.v--modal-overlay {\n  position: fixed;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  /* background: rgba(0, 0, 0, 0.2); */\n  z-index: 999;\n  opacity: 1;\n}\n.v--modal-overlay.scrollable {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.v--modal-overlay .v--modal-background-click {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n}\n.v--modal-overlay .v--modal-box {\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.v--modal-overlay.scrollable .v--modal-box {\n  margin-bottom: 2px;\n}\n.v--modal {\n  background-color: white;\n  text-align: left;\n  border-radius: 3px;\n  /* box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4); */\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  left: 0;\n  top: 0;\n}\n.v--modal-top-right {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.overlay-fade-enter-active,\n.overlay-fade-leave-active {\n  transition: all 0.2s;\n}\n.overlay-fade-enter,\n.overlay-fade-leave-active {\n  opacity: 0;\n}\n.nice-modal-fade-enter-active,\n.nice-modal-fade-leave-active {\n  transition: all 0.4s;\n}\n.nice-modal-fade-enter,\n.nice-modal-fade-leave-active {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n",""])},function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=o.a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.vue-dialog div {\n  box-sizing: border-box;\n}\n.vue-dialog .dialog-flex {\n  width: 100%;\n  height: 100%;\n}\n.vue-dialog .dialog-content {\n  flex: 1 0 auto;\n  width: 100%;\n  padding: 15px;\n  font-size: 14px;\n}\n.vue-dialog .dialog-c-title {\n  font-weight: 600;\n  padding-bottom: 15px;\n}\n.vue-dialog .dialog-c-text {\n}\n.vue-dialog .vue-dialog-buttons {\n  display: flex;\n  flex: 0 1 auto;\n  width: 100%;\n  border-top: 1px solid #eee;\n}\n.vue-dialog .vue-dialog-buttons-none {\n  width: 100%;\n  padding-bottom: 15px;\n}\n.vue-dialog-button {\n  font-size: 12px !important;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n  line-height: 40px;\n  height: 40px;\n  color: inherit;\n  font: inherit;\n  outline: none;\n}\n.vue-dialog-button:hover {\n  background: rgba(0, 0, 0, 0.01);\n}\n.vue-dialog-button:active {\n  background: rgba(0, 0, 0, 0.025);\n}\n.vue-dialog-button:not(:first-of-type) {\n  border-left: 1px solid #eee;\n}\n",""])},function(e,t,n){"use strict";n.r(t);function i(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.overlayTransition}},[t.visibility.overlay?n("div",{ref:"overlay",class:t.overlayClass,attrs:{"aria-expanded":t.visibility.overlay.toString(),"data-modal":t.name}},[n("div",{staticClass:"v--modal-background-click",on:{mousedown:function(e){return e.target!==e.currentTarget?null:t.handleBackgroundClick(e)},touchstart:function(e){return e.target!==e.currentTarget?null:t.handleBackgroundClick(e)}}},[n("div",{staticClass:"v--modal-top-right"},[t._t("top-right")],2),t._v(" "),n("transition",{attrs:{name:t.transition},on:{"before-enter":t.beforeTransitionEnter,"after-enter":t.afterTransitionEnter,"after-leave":t.afterTransitionLeave}},[t.visibility.modal?n("div",{ref:"modal",class:t.modalClass,style:t.modalStyle},[t._t("default"),t._v(" "),t.resizable&&!t.isAutoHeight?n("resizer",{attrs:{"min-width":t.minWidth,"min-height":t.minHeight},on:{resize:t.handleModalResize}}):t._e()],2):t._e()])],1)]):t._e()])}function o(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.className},[])}function r(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o._withStripped=i._withStripped=!0;function d(e,t,n){return n<e?e:t<n?t:n}function s(e){var t=0<arguments.length&&void 0!==e?e:{};return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({id:c(),timestamp:Date.now(),canceled:!1},t)}var c=function(e){var t=0<arguments.length&&void 0!==e?e:0;return function(){return(t++).toString()}}();function l(e,t,n,i,o,r,a,s){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(e,t){return l.call(t),d(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:u}}var u=l({name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0}},data:function(){return{clicked:!1,size:{}}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){return{"vue-modal-resizer":!0,clicked:this.clicked}}},methods:{start:function(e){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),e.stopPropagation(),e.preventDefault()},stop:function(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(e){this.resize(e)},resize:function(e){var t=this.$el.parentElement;if(t){var n=e.clientX-t.offsetLeft,i=e.clientY-t.offsetTop;n=d(this.minWidth,window.innerWidth,n),i=d(this.minHeight,window.innerHeight,i),this.size={width:n,height:i},t.style.width=n+"px",t.style.height=i+"px",this.$emit("resize",{element:t,size:this.size})}}}},o,[],!1,function(e){var t=n(5);t.__inject__&&t.__inject__(e)},null,"7b4935aa");u.options.__file="src/Resizer.vue";var f=u.exports;function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){switch(h(e)){case"number":return{type:"px",value:e};case"string":return function(e){if("auto"===e)return{type:e,value:0};for(var t=0;t<g.length;t++){var n=g[t];if(n.regexp.test(e))return{type:n.name,value:parseFloat(e)}}return{type:"",value:e}}(e);default:return{type:"",value:e}}}function v(e){if("string"!=typeof e)return 0<=e;var t=p(e);return("%"===t.type||"px"===t.type)&&0<t.value}var m="[-+]?[0-9]*.?[0-9]+",g=[{name:"px",regexp:new RegExp("^".concat(m,"px$"))},{name:"%",regexp:new RegExp("^".concat(m,"%$"))},{name:"px",regexp:new RegExp("^".concat(m,"$"))}];function b(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=l({name:"VueJsModal",props:{name:{required:!0,type:String},delay:{type:Number,default:0},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"overlay-fade"},transition:{type:String},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:"v--modal"},minWidth:{type:Number,default:0,validator:function(e){return 0<=e}},minHeight:{type:Number,default:0,validator:function(e){return 0<=e}},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0},width:{type:[Number,String],default:600,validator:v},height:{type:[Number,String],default:300,validator:function(e){return"auto"===e||v(e)}},pivotX:{type:Number,default:.5,validator:function(e){return 0<=e&&e<=1}},pivotY:{type:Number,default:.5,validator:function(e){return 0<=e&&e<=1}}},components:{Resizer:f},data:function(){return{visible:!1,visibility:{modal:!1,overlay:!1},shift:{left:0,top:0},modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},window:{width:0,height:0},mutationObserver:null}},created:function(){this.setInitialSize()},beforeMount:function(){var t=this;if(D.event.$on("toggle",this.handleToggleEvent),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.isAutoHeight){var e=function(){if("undefined"!=typeof window)for(var e=["","WebKit","Moz","O","Ms"],t=0;t<e.length;t++){var n=e[t]+"MutationObserver";if(n in window)return window[n]}return!1}();e&&(this.mutationObserver=new e(function(e){t.updateRenderedHeight()}))}this.clickToClose&&window.addEventListener("keyup",this.handleEscapeKeyUp)},beforeDestroy:function(){D.event.$off("toggle",this.handleToggleEvent),window.removeEventListener("resize",this.handleWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.handleEscapeKeyUp),this.scrollable&&document.body.classList.remove("v--modal-block-scroll")},computed:{isAutoHeight:function(){return"auto"===this.modal.heightType},position:function(){var e=this.window,t=this.shift,n=this.pivotX,i=this.pivotY,o=this.trueModalWidth,r=this.trueModalHeight,a=e.width-o,s=e.height-r,l=t.left+n*a,u=t.top+i*s;return{left:parseInt(d(0,a,l)),top:parseInt(d(0,s,u))}},trueModalWidth:function(){var e=this.window,t=this.modal,n=this.adaptive,i=this.minWidth,o=this.maxWidth,r="%"===t.widthType?e.width/100*t.width:t.width,a=Math.min(e.width,o);return n?d(i,a,r):r},trueModalHeight:function(){var e=this.window,t=this.modal,n=this.isAutoHeight,i=this.adaptive,o=this.maxHeight,r="%"===t.heightType?e.height/100*t.height:t.height;if(n)return this.modal.renderedHeight;var a=Math.min(e.height,o);return i?d(this.minHeight,a,r):r},overlayClass:function(){return{"v--modal-overlay":!0,scrollable:this.scrollable&&this.isAutoHeight}},modalClass:function(){return["v--modal-box",this.classes]},modalStyle:function(){return{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?"auto":this.trueModalHeight+"px"}}},watch:{visible:function(e){var t=this;e?(this.visibility.overlay=!0,setTimeout(function(){t.visibility.modal=!0,t.$nextTick(function(){t.addDraggableListeners(),t.callAfterEvent(!0)})},this.delay)):(this.visibility.modal=!1,setTimeout(function(){t.visibility.overlay=!1,t.$nextTick(function(){t.removeDraggableListeners(),t.callAfterEvent(!1)})},this.delay))}},methods:{handleToggleEvent:function(e,t,n){if(this.name===e){var i=void 0===t?!this.visible:t;this.toggle(i,n)}},setInitialSize:function(){var e=this.modal,t=p(this.width),n=p(this.height);e.width=t.value,e.widthType=t.type,e.height=n.value,e.heightType=n.type},handleEscapeKeyUp:function(e){27===e.which&&this.visible&&this.$modal.hide(this.name)},handleWindowResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent:function(e){var t=0<arguments.length&&void 0!==e?e:{};return s(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({name:this.name,ref:this.$refs.modal},t))},handleModalResize:function(e){this.modal.widthType="px",this.modal.width=e.size.width,this.modal.heightType="px",this.modal.height=e.size.height;var t=this.modal.size;this.$emit("resize",this.createModalEvent({size:t}))},toggle:function(e,t){var n=this.reset,i=this.scrollable,o=this.visible;if(o!==e){var r=o?"before-close":"before-open";"before-open"==r?("undefined"!=typeof document&&document.activeElement&&"BODY"!==document.activeElement.tagName&&document.activeElement.blur&&document.activeElement.blur(),n&&(this.setInitialSize(),this.shift.left=0,this.shift.top=0),i&&document.body.classList.add("v--modal-block-scroll")):i&&document.body.classList.remove("v--modal-block-scroll");var a=!1,s=this.createModalEvent({stop:function(){a=!0},state:e,params:t});this.$emit(r,s),a||(this.visible=e)}},getDraggableElement:function(){var e="string"!=typeof this.draggable?".v--modal-box":this.draggable;return e?this.$refs.overlay.querySelector(e):null},handleBackgroundClick:function(){this.clickToClose&&this.toggle(!1)},callAfterEvent:function(e){e?this.connectObserver():this.disconnectObserver();var t=e?"opened":"closed",n=this.createModalEvent({state:e});this.$emit(t,n)},addDraggableListeners:function(){var r=this;if(this.draggable){var e=this.getDraggableElement();if(e){var a=0,s=0,l=0,u=0,d=function(e){return e.touches&&0<e.touches.length?e.touches[0]:e},t=function(e){var t=e.target;if(!t||"INPUT"!==t.nodeName){var n=d(e),i=n.clientX,o=n.clientY;document.addEventListener("mousemove",c),document.addEventListener("touchmove",c),document.addEventListener("mouseup",f),document.addEventListener("touchend",f),a=i,s=o,l=r.shift.left,u=r.shift.top}},c=function(e){var t=d(e),n=t.clientX,i=t.clientY;r.shift.left=l+n-a,r.shift.top=u+i-s,e.preventDefault()},f=function e(t){r.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",c),document.removeEventListener("touchmove",c),document.removeEventListener("mouseup",e),document.removeEventListener("touchend",e),t.preventDefault()};e.addEventListener("mousedown",t),e.addEventListener("touchstart",t)}}},removeDraggableListeners:function(){},updateRenderedHeight:function(){this.$refs.modal&&(this.modal.renderedHeight=this.$refs.modal.getBoundingClientRect().height)},connectObserver:function(){this.mutationObserver&&this.mutationObserver.observe(this.$refs.overlay,{childList:!0,attributes:!0,subtree:!0})},disconnectObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},beforeTransitionEnter:function(){this.connectObserver()},afterTransitionEnter:function(){},afterTransitionLeave:function(){},ensureShiftInWindowBounds:function(){var e=this.window,t=this.shift,n=this.pivotX,i=this.pivotY,o=this.trueModalWidth,r=this.trueModalHeight,a=e.width-o,s=e.height-r,l=t.left+n*a,u=t.top+i*s;this.shift.left-=l-d(0,a,l),this.shift.top-=u-d(0,s,u)}}},i,[],!1,function(e){var t=n(7);t.__inject__&&t.__inject__(e)},null,"09a168ce");w.options.__file="src/Modal.vue";function _(){var n=this,e=n.$createElement,i=n._self._c||e;return i("modal",{attrs:{name:"dialog",height:"auto",classes:["v--modal","vue-dialog",this.params.class],width:n.width,"pivot-y":.3,adaptive:!0,clickToClose:n.clickToClose,transition:n.transition},on:{"before-open":n.beforeOpened,"before-close":n.beforeClosed,opened:function(e){return n.$emit("opened",e)},closed:function(e){return n.$emit("closed",e)}}},[i("div",{staticClass:"dialog-content"},[n.params.title?i("div",{staticClass:"dialog-c-title",domProps:{innerHTML:n._s(n.params.title||"")}}):n._e(),n._v(" "),n.params.component?i(n.params.component,n._b({tag:"component"},"component",n.params.props,!1)):i("div",{staticClass:"dialog-c-text",domProps:{innerHTML:n._s(n.params.text||"")}})],1),n._v(" "),n.buttons?i("div",{staticClass:"vue-dialog-buttons"},n._l(n.buttons,function(e,t){return i("button",{key:t,class:e.class||"vue-dialog-button",style:n.buttonStyle,attrs:{type:"button"},domProps:{innerHTML:n._s(e.title)},on:{click:function(e){return e.stopPropagation(),n.click(t,e)}}},[n._v("\n      "+n._s(e.title)+"\n    ")])}),0):i("div",{staticClass:"vue-dialog-buttons-none"})])}var x=w.exports;_._withStripped=!0;var O=l({name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},data:function(){return{params:{},defaultButtons:[{title:"CLOSE"}]}},computed:{buttons:function(){return this.params.buttons||this.defaultButtons},buttonStyle:function(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")}}},methods:{beforeOpened:function(e){window.addEventListener("keyup",this.onKeyUp),this.params=e.params||{},this.$emit("before-opened",e)},beforeClosed:function(e){window.removeEventListener("keyup",this.onKeyUp),this.params={},this.$emit("before-closed",e)},click:function(e,t,n){var i=2<arguments.length&&void 0!==n?n:"click",o=this.buttons[e];o&&"function"==typeof o.handler?o.handler(e,t,{source:i}):this.$modal.hide("dialog")},onKeyUp:function(e){if(13===e.which&&0<this.buttons.length){var t=1===this.buttons.length?0:this.buttons.findIndex(function(e){return e.default});-1!==t&&this.click(t,e,"keypress")}}}},_,[],!1,function(e){var t=n(9);t.__inject__&&t.__inject__(e)},null,"70eca98c");O.options.__file="src/Dialog.vue";function j(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{attrs:{id:"modals-container"}},n._l(n.modals,function(t){return i("modal",n._g(n._b({key:t.id,on:{closed:function(e){return n.remove(t.id)}}},"modal",t.modalAttrs,!1),t.modalListeners),[i(t.component,n._g(n._b({tag:"component",on:{close:function(e){return n.$modal.hide(t.modalAttrs.name)}}},"component",t.componentAttrs,!1),n.$listeners))],1)}),1)}var E=O.exports;function S(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}j._withStripped=!0;var P=l({data:function(){return{modals:[]}},created:function(){this.$root._dynamicContainer=this},methods:{add:function(e,t,n,i){var o=this,r=1<arguments.length&&void 0!==t?t:{},a=2<arguments.length&&void 0!==n?n:{},s=3<arguments.length&&void 0!==i?i:{},l=c(),u=a.name||"_dynamic_modal_"+l;this.modals.push({id:l,modalAttrs:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(n,!0).forEach(function(e){k(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},a,{name:u}),modalListeners:s,component:e,componentAttrs:r}),this.$nextTick(function(){o.$modal.show(u)})},remove:function(t){var e=this.modals.findIndex(function(e){return e.id===t});-1!==e&&this.modals.splice(e,1)}}},j,[],!1,null,null,"5c3ea4a7");P.options.__file="src/ModalsContainer.vue";var T=P.exports;function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"getModalsContainer",function(){return L});var L=function(e,t,n){if(!n._dynamicContainer&&t.injectModalsContainer){var i=function(){var e=document.createElement("div");return document.body.appendChild(e),e}();new e({parent:n,render:function(e){return e(T)}}).$mount(i)}return n._dynamicContainer},M={install:function(a,e){var s=1<arguments.length&&void 0!==e?e:{};if(!this.installed){this.installed=!0,this.event=new a,this.rootInstance=null;var t=s.componentName||"Modal",l=s.dynamicDefaults||{},o=function(e,t,n,i){var o=n&&n.root?n.root:M.rootInstance,r=L(a,s,o);r?r.add(e,t,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(n,!0).forEach(function(e){C(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},l,{},n),i):console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page.")};a.prototype.$modal={show:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];switch($(e)){case"string":return function(e,t){M.event.$emit("toggle",e,!0,t)}.apply(void 0,[e].concat(n));case"object":case"function":return s.dynamic?o.apply(void 0,[e].concat(n)):console.warn("[vue-js-modal] $modal() received object as a first argument, but dynamic modals are switched off. https://github.com/euvl/vue-js-modal/#dynamic-modals");default:console.warn("[vue-js-modal] $modal() received an unsupported argument as a first argument.",e)}},hide:function(e,t){M.event.$emit("toggle",e,!1,t)},toggle:function(e,t){M.event.$emit("toggle",e,void 0,t)}},a.component(t,x),s.dialog&&a.component("VDialog",E),s.dynamic&&(a.component("ModalsContainer",T),a.mixin({beforeMount:function(){null===M.rootInstance&&(M.rootInstance=this.$root)}}))}}},D=t.default=M}],o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=11);function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,i});