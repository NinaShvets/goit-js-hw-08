var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,i,o,a,f,u,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function h(e){return c=e,f=setTimeout(w,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=o}function w(){var e=g();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return v?d(n,o-(e-c)):n}(e))}function O(e){return f=void 0,b&&r?y(e):(r=i=void 0,a)}function T(){var e=g(),n=j(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return h(u);if(v)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=p(t)||0,m(n)&&(l=!!n.leading,o=(v="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},T.flush=function(){return void 0===f?a:O(g())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");let y={};const h=t((e=>{y[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500,{leading:!0,trailing:!0});b.addEventListener("input",h);window.addEventListener("load",(()=>{try{const e=localStorage.getItem("feedback-form-state");if(!e)return;y=JSON.parse(e),Object.entries(y).forEach((([e,t])=>{b.elements[e].value=t}))}catch(e){console.log(e.message)}})),b.addEventListener("submit",(e=>{e.preventDefault(),console.log(y),y={},localStorage.removeItem("feedback-form-state"),e.target.reset()}));
//# sourceMappingURL=03-feedback.39dd8219.js.map