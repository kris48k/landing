(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2083],{43671:function(e,t,n){"use strict";n.d(t,{J:function(){return l}});var r=n(67294),i=n(32782);let s={"aria-hidden":!0};function o(e){return"object"==typeof e}function u(e){return"string"==typeof e}n(4399);let c=(0,i.Ge)("icon"),l=r.forwardRef(({data:e,width:t,height:n,size:i,className:f,fill:p="currentColor",stroke:a="none",qa:h},d)=>{let b,g,y;if(i&&(b=i,g=i),t&&(b=t),n&&(g=n),o(e))({viewBox:y}=e);else if(u(e))y=function(e){let t=e.match(/viewBox=(["']?)([\d\s,-]+)\1/);return t?t[2]:void 0}(e);else if("object"==typeof e&&"defaultProps"in e)({viewBox:y}=e.defaultProps);else if("function"==typeof e&&(!e.prototype||!e.prototype.render)){let t=e({});t&&({viewBox:y}=t.props)}if(y&&(!b||!g)){let e=y.split(/\s+|\s*,\s*/);b||(b=e[2]),g||(g=e[3])}let m=Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:b,height:g,className:c(null,f),fill:p,stroke:a,"data-qa":h},s);if(u(e)){let t=e.replace(/<svg[^>]*>/,e=>e.replace(/(width|height)=(["']?)\d+\2/g,"").replace(/(\s){2,}\b/g,"$1").replace(/(\s)+>/g,">"));return r.createElement("svg",Object.assign({},m,{ref:d,dangerouslySetInnerHTML:{__html:t}}))}if(o(e)){let t=l.prefix+(e.url||`#${e.id}`);return r.createElement("svg",Object.assign({},m,{viewBox:y,ref:d}),r.createElement("use",{href:t,xlinkHref:t}))}return e.defaultProps&&(e.defaultProps.width=e.defaultProps.height=void 0),r.createElement("svg",Object.assign({},m,{ref:d}),r.createElement(e,{width:void 0,height:void 0}))});l.displayName="Icon",l.prefix=""},69110:function(e,t,n){"use strict";n.d(t,{x:function(){return u},y:function(){return c}});var r=n(43671),i=n(32782),s=n(96639);let o=1;function u(){return`${i.A7}uniq-${o++}`}let c=(0,s.s)(r.J)},42087:function(e,t,n){"use strict";n.d(t,{P:function(){return o},g:function(){return s}});var r=n(97582),i=n(32782);class s{constructor(e){this.subscriptions=[],this.componentPrefix=e}subscribe(e){this.subscriptions.push(e)}unsubscribe(e){let t=this.subscriptions.indexOf(e);t>-1&&this.subscriptions.splice(t,1)}publish(e){var{componentId:t}=e,n=(0,r._T)(e,["componentId"]);this.subscriptions.forEach(e=>e(Object.assign(Object.assign({},n),{componentId:this.componentPrefix?`${this.componentPrefix}${t}`:t})))}withEventPublisher(e,t){return n=>{this.publish(Object.assign(Object.assign({},n),{componentId:e,qa:t}))}}}let o=new s(i.A7)},96639:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var r=n(67294);function i(e){return function(t){if(!r.isValidElement(t))return!1;let{type:n}=t;return n===r.Component||n.displayName===e.displayName}}},4399:function(){},97582:function(e,t,n){"use strict";n.d(t,{_T:function(){return i},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}"function"==typeof SuppressedError&&SuppressedError}}]);