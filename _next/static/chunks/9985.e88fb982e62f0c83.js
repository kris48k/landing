(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9985],{51693:function(t,n,e){"use strict";var r=e(67294);n.Z=t=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},t),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))},48323:function(t,n,e){"use strict";e.d(n,{x:function(){return c}});var r=e(97582),o=e(67294),i=e(35930),a=e(74200);let c=o.forwardRef(function(t,n){var{as:e,children:c,variant:u,className:f,ellipsis:s,color:l,whiteSpace:p,wordBreak:v,ellipsisLines:d,style:y,qa:h}=t,b=(0,r._T)(t,["as","children","variant","className","ellipsis","color","whiteSpace","wordBreak","ellipsisLines","style","qa"]);let w=Object.assign({},y);return"number"==typeof d&&(w.WebkitLineClamp=d),o.createElement(e||"span",Object.assign({ref:n,className:(0,a.f)({variant:u,ellipsis:s,whiteSpace:p,wordBreak:v,ellipsisLines:"number"==typeof d},l?(0,i.V)({color:l},f):f),style:w,"data-qa":h},b),c)});c.displayName="Text"},35930:function(t,n,e){"use strict";e.d(n,{V:function(){return a},b:function(){return i}});var r=e(32782);e(30178);let o=(0,r.Ge)("color-text"),i=["primary","complementary","secondary","hint","info","info-heavy","positive","positive-heavy","warning","warning-heavy","danger","danger-heavy","utility","utility-heavy","misc","misc-heavy","brand","link","link-hover","link-visited","link-visited-hover","dark-primary","dark-complementary","dark-secondary","light-primary","light-complementary","light-secondary","light-hint","inverted-primary","inverted-complementary","inverted-secondary","inverted-hint"],a=({color:t},n)=>o({color:t},n)},74200:function(t,n,e){"use strict";e.d(n,{S:function(){return i},f:function(){return a}});var r=e(32782);e(99125);let o=(0,r.Ge)("text"),i=["display-4","display-3","display-2","display-1","header-2","header-1","subheader-3","subheader-2","subheader-1","body-3","body-2","body-1","body-short","caption-2","caption-1","code-3","code-inline-3","code-2","code-inline-2","code-1","code-inline-1"],a=({variant:t="body-1",ellipsis:n,ellipsisLines:e,whiteSpace:r,wordBreak:i},a)=>o({variant:t,ellipsis:n,ws:r,wb:i,"ellipsis-lines":e},a)},3528:function(t,n,e){"use strict";var r,o;e.d(n,{Pe:function(){return u},Uo:function(){return r},iE:function(){return f},jQ:function(){return c}}),(o=r||(r={})).Ru="ru",o.En="en";let i=[],a={lang:r.En,fallbackLang:r.En},c=t=>{Object.assign(a,t),i.forEach(t=>{t(a)})},u=t=>(i.push(t),()=>{i=i.filter(n=>n!==t)}),f=()=>a},86556:function(t,n,e){var r=e(89465),o=e(77813);t.exports=function(t,n,e){(void 0===e||o(t[n],e))&&(void 0!==e||n in t)||r(t,n,e)}},34865:function(t,n,e){var r=e(89465),o=e(77813),i=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var a=t[n];i.call(t,n)&&o(a,e)&&(void 0!==e||n in t)||r(t,n,e)}},89465:function(t,n,e){var r=e(38777);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},3118:function(t,n,e){var r=e(13218),o=Object.create,i=function(){function t(){}return function(n){if(!r(n))return{};if(o)return o(n);t.prototype=n;var e=new t;return t.prototype=void 0,e}}();t.exports=i},10313:function(t,n,e){var r=e(13218),o=e(25726),i=e(33498),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var n=o(t),e=[];for(var c in t)"constructor"==c&&(n||!a.call(t,c))||e.push(c);return e}},42980:function(t,n,e){var r=e(46384),o=e(86556),i=e(28483),a=e(59783),c=e(13218),u=e(81704),f=e(36390);t.exports=function t(n,e,s,l,p){n!==e&&i(e,function(i,u){if(p||(p=new r),c(i))a(n,e,u,s,t,l,p);else{var v=l?l(f(n,u),i,u+"",n,e,p):void 0;void 0===v&&(v=i),o(n,u,v)}},u)}},59783:function(t,n,e){var r=e(86556),o=e(64626),i=e(77133),a=e(278),c=e(38517),u=e(35694),f=e(1469),s=e(29246),l=e(44144),p=e(23560),v=e(13218),d=e(68630),y=e(36719),h=e(36390),b=e(59881);t.exports=function(t,n,e,w,m,g,x){var O=h(t,e),j=h(n,e),_=x.get(j);if(_){r(t,e,_);return}var E=g?g(O,j,e+"",t,n,x):void 0,P=void 0===E;if(P){var k=f(j),T=!k&&l(j),S=!k&&!T&&y(j);E=j,k||T||S?f(O)?E=O:s(O)?E=a(O):T?(P=!1,E=o(j,!0)):S?(P=!1,E=i(j,!0)):E=[]:d(j)||u(j)?(E=O,u(O)?E=b(O):(!v(O)||p(O))&&(E=c(j))):P=!1}P&&(x.set(j,E),m(E,j,w,g,x),x.delete(j)),r(t,e,E)}},74318:function(t,n,e){var r=e(11149);t.exports=function(t){var n=new t.constructor(t.byteLength);return new r(n).set(new r(t)),n}},64626:function(t,n,e){t=e.nmd(t);var r=e(55639),o=n&&!n.nodeType&&n,i=o&&t&&!t.nodeType&&t,a=i&&i.exports===o?r.Buffer:void 0,c=a?a.allocUnsafe:void 0;t.exports=function(t,n){if(n)return t.slice();var e=t.length,r=c?c(e):new t.constructor(e);return t.copy(r),r}},77133:function(t,n,e){var r=e(74318);t.exports=function(t,n){var e=n?r(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}},278:function(t){t.exports=function(t,n){var e=-1,r=t.length;for(n||(n=Array(r));++e<r;)n[e]=t[e];return n}},98363:function(t,n,e){var r=e(34865),o=e(89465);t.exports=function(t,n,e,i){var a=!e;e||(e={});for(var c=-1,u=n.length;++c<u;){var f=n[c],s=i?i(e[f],t[f],f,e,t):void 0;void 0===s&&(s=t[f]),a?o(e,f,s):r(e,f,s)}return e}},21463:function(t,n,e){var r=e(5976),o=e(16612);t.exports=function(t){return r(function(n,e){var r=-1,i=e.length,a=i>1?e[i-1]:void 0,c=i>2?e[2]:void 0;for(a=t.length>3&&"function"==typeof a?(i--,a):void 0,c&&o(e[0],e[1],c)&&(a=i<3?void 0:a,i=1),n=Object(n);++r<i;){var u=e[r];u&&t(n,u,r,a)}return n})}},85924:function(t,n,e){var r=e(5569)(Object.getPrototypeOf,Object);t.exports=r},38517:function(t,n,e){var r=e(3118),o=e(85924),i=e(25726);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:r(o(t))}},33498:function(t){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},36390:function(t){t.exports=function(t,n){if(("constructor"!==n||"function"!=typeof t[n])&&"__proto__"!=n)return t[n]}},29246:function(t,n,e){var r=e(98612),o=e(37005);t.exports=function(t){return o(t)&&r(t)}},68630:function(t,n,e){var r=e(44239),o=e(85924),i=e(37005),a=Object.prototype,c=Function.prototype.toString,u=a.hasOwnProperty,f=c.call(Object);t.exports=function(t){if(!i(t)||"[object Object]"!=r(t))return!1;var n=o(t);if(null===n)return!0;var e=u.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&c.call(e)==f}},81704:function(t,n,e){var r=e(14636),o=e(10313),i=e(98612);t.exports=function(t){return i(t)?r(t,!0):o(t)}},82492:function(t,n,e){var r=e(42980),o=e(21463)(function(t,n,e){r(t,n,e)});t.exports=o},59881:function(t,n,e){var r=e(98363),o=e(81704);t.exports=function(t){return r(t,o(t))}},52811:function(t,n,e){"use strict";e.r(n),e.d(n,{SelectComponent:function(){return i}});var r=e(85893),o=e(19639);e(67294);let i=t=>(0,r.jsxs)(o.P,{...t,children:[(0,r.jsx)(o.P.Option,{value:"val_1",children:"Value 1"}),(0,r.jsx)(o.P.Option,{value:"val_2",children:"Value 2"}),(0,r.jsx)(o.P.Option,{value:"val_3",children:"Value 3"}),(0,r.jsx)(o.P.Option,{value:"val_4",children:"Value 4"})]})},30178:function(){},99125:function(){},97582:function(t,n,e){"use strict";e.d(n,{Q_:function(){return i},YH:function(){return a},_T:function(){return o},pi:function(){return r}});var r=function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function o(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>n.indexOf(r)&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)0>n.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]]);return e}function i(t,n,e,r){if("a"===e&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof n?t!==n||!r:!n.has(t))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===e?r:"a"===e?r.call(t):r?r.value:n.get(t)}function a(t,n,e,r,o){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof n?t!==n||!o:!n.has(t))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(t,e):o?o.value=e:n.set(t,e),e}"function"==typeof SuppressedError&&SuppressedError}}]);