(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4162],{20522:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm1-9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0V8.5Z",clipRule:"evenodd"}))},20928:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"m7.835 6 .76-2.027L9.336 2H5.5a.716.716 0 0 0-.664.45L2.513 8.257a.177.177 0 0 0 .164.243h4.965l-.732 2.013-1.082 2.975a.382.382 0 0 0 .637.392l6.956-7.391A.29.29 0 0 0 13.21 6H7.835Zm1.558-4.154ZM10.563 3l.235-.627A1.386 1.386 0 0 0 9.5.5h-4c-.906 0-1.72.552-2.057 1.393L1.12 7.7A1.677 1.677 0 0 0 2.677 10H5.5l-.545 1.5-.537 1.475a1.882 1.882 0 0 0 3.14 1.933l6.956-7.391A1.79 1.79 0 0 0 13.21 4.5H10l.563-1.5Z",clipRule:"evenodd"}))},69283:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});let r=n(67294).createContext(null);r.displayName="ToasterContext"},25803:function(e,t,n){"use strict";n.d(t,{N:function(){return u}});var r=n(67294);function i(e,t){return e.findIndex(e=>e.name===t)}function l(e,t){return -1!==i(e,t)}function a(e,t){return l(e,t)?e.filter(e=>e.name!==t):e}var o=n(69283),c=n(5082);let u=r.forwardRef(function({children:e},t){let[n,u]=r.useState([]),s=r.useCallback(e=>{let{name:t}=e;u(n=>{let i=n;return l(n,t)&&(i=a(n,t)),[...i,Object.assign(Object.assign({},e),{addedAt:Date.now(),ref:r.createRef()})]})},[]),d=r.useCallback(e=>{u(t=>a(t,e))},[]),f=r.useCallback(()=>{u(()=>[])},[]),m=r.useCallback((e,t)=>{u(n=>{if(!l(n,e))return n;let r=i(n,e);return[...n.slice(0,r),Object.assign(Object.assign({},n[r]),t),...n.slice(r+1)]})},[]),v=r.useRef(n);r.useEffect(()=>{v.current=n},[n]);let p=r.useCallback(e=>!!v.current&&l(v.current,e),[]),h=r.useMemo(()=>({add:s,remove:d,removeAll:f,update:m,has:p}),[s,d,f,m,p]);return r.useImperativeHandle(t,()=>({add:s,remove:d,removeAll:f,update:m,has:p})),r.createElement(o.R.Provider,{value:h},r.createElement(c.i.Provider,{value:n},e))});u.displayName="ToasterProvider"},5082:function(e,t,n){"use strict";n.d(t,{i:function(){return r}});let r=n(67294).createContext([]);r.displayName="ToastsContext"},82385:function(e,t,n){"use strict";n.d(t,{F:function(){return x}});var r=n(67294),i=n(20522),l=n(61191),a=n(81372),o=n(20928),c=n(58405),u=n(84912),s=n(97387),d=n(43671),f=n(32782),m=n(52619),v=JSON.parse('{"label_close-button":"Close"}'),p=JSON.parse('{"label_close-button":"Закрыть"}'),h=(0,m.e)({en:v,ru:p},"Toaster");n(48465);let E=(0,f.Ge)("toast"),b={normal:null,info:i.Z,success:l.Z,warning:a.Z,danger:a.Z,utility:o.Z},x=r.forwardRef(function(e,t){let{name:n,content:i,actions:l,title:a,className:o,theme:f="normal",renderIcon:m,autoHiding:v=5e3,isClosable:p=!0,mobile:x=!1,removeCallback:g}=e,C=r.useCallback(()=>g(n),[g,n]),y=function({onClose:e,timeout:t}){let[n,i,l]=function(){let[e,t]=r.useState(!1);return[r.useCallback(()=>{t(!0)},[]),r.useCallback(()=>{t(!1)},[]),e]}();return(0,u.K)(e,l?null:t),{onMouseOver:n,onMouseLeave:i}}({onClose:C,timeout:"number"==typeof v?v:void 0}),k=!!a,w=m?m(e):function({theme:e}){return e&&b[e]?r.createElement(d.J,{data:b[e],size:20,className:E("icon",{[e]:!0})}):null}({theme:f});return r.createElement("div",Object.assign({ref:t,className:E({mobile:x,theme:f},o)},y,{"data-toast":!0}),w&&r.createElement("div",{className:E("icon-container")},w),r.createElement("div",{className:E("container")},k&&r.createElement("h3",{className:E("title")},a),p&&r.createElement(s.z,{size:"s",view:"flat",className:E("btn-close"),onClick:C,extraProps:{"aria-label":h("label_close-button")}},r.createElement(d.J,{data:c.Z})),!!i&&r.createElement("div",{className:E("content",{"without-title":!k})},i),function({actions:e,onClose:t}){return e&&e.length?r.createElement("div",{className:E("actions")},e.map(({label:e,onClick:n,view:i="outlined",removeAfterClick:l=!0},a)=>r.createElement(s.z,{key:`${e}__${a}`,className:E("action"),onClick:()=>{n(),l&&t()},type:"button",size:"l",view:i,width:"auto"},e))):null}({actions:l,onClose:C})))})},48097:function(e,t,n){"use strict";n.d(t,{B:function(){return R}});var r=n(67294),i=n(53006),l=n(5082),a=n(63366),o=n(87462),c=n(97326),u=n(75068),s=n(220);function d(e,t){var n=Object.create(null);return e&&r.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=t&&(0,r.isValidElement)(e)?t(e):e}),n}function f(e,t,n){return null!=n[t]?n[t]:e.props[t]}var m=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},v=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,c.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,u.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,i,l=t.children,a=t.handleExited;return{children:t.firstRender?d(e.children,function(t){return(0,r.cloneElement)(t,{onExited:a.bind(null,t),in:!0,appear:f(t,"appear",e),enter:f(t,"enter",e),exit:f(t,"exit",e)})}):(Object.keys(i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),l=[];for(var a in e)a in t?l.length&&(i[a]=l,l=[]):l.push(a);var o={};for(var c in t){if(i[c])for(r=0;r<i[c].length;r++){var u=i[c][r];o[i[c][r]]=n(u)}o[c]=n(c)}for(r=0;r<l.length;r++)o[l[r]]=n(l[r]);return o}(l,n=d(e.children))).forEach(function(t){var o=i[t];if((0,r.isValidElement)(o)){var c=t in l,u=t in n,s=l[t],d=(0,r.isValidElement)(s)&&!s.props.in;u&&(!c||d)?i[t]=(0,r.cloneElement)(o,{onExited:a.bind(null,o),in:!0,exit:f(o,"exit",e),enter:f(o,"enter",e)}):u||!c||d?u&&c&&(0,r.isValidElement)(s)&&(i[t]=(0,r.cloneElement)(o,{onExited:a.bind(null,o),in:s.props.in,exit:f(o,"exit",e),enter:f(o,"enter",e)})):i[t]=(0,r.cloneElement)(o,{in:!1})}}),i),firstRender:!1}},n.handleExited=function(e,t){var n=d(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=(0,o.Z)({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,a.Z)(e,["component","childFactory"]),l=this.state.contextValue,o=m(this.state.children).map(n);return(delete i.appear,delete i.enter,delete i.exit,null===t)?r.createElement(s.Z.Provider,{value:l},o):r.createElement(s.Z.Provider,{value:l},r.createElement(t,i,o))},t}(r.Component);v.propTypes={},v.defaultProps={component:"div",childFactory:function(e){return e}};var p=n(5031),h=n(32782),E=n(35860),b=n(82385);n(17249),n(99724);let x=(0,E.Y)((0,h.Ge)("toast-animation-desktop")),g=(0,E.Y)((0,h.Ge)("toast-animation-mobile"));function C(e){let{toasts:t,mobile:n,removeCallback:i}=e;return r.createElement(v,{component:null},t.map(e=>r.createElement(p.Z,{key:`${e.name}_${e.addedAt}`,nodeRef:e.ref,classNames:n?g:x,addEndListener:t=>{var n,r;return null===(r=null===(n=e.ref)||void 0===n?void 0:n.current)||void 0===r?void 0:r.addEventListener("animationend",t)},onEnter:()=>y(e),onExit:()=>y(e)},r.createElement(b.F,Object.assign({},e,{mobile:n,removeCallback:i})))))}function y(e){var t;(null===(t=e.ref)||void 0===t?void 0:t.current)&&e.ref.current.style.setProperty("--_--item-height",`${e.ref.current.offsetHeight}px`)}var k=n(72246),w=n(87174);let N=(0,h.Ge)("toaster");function Z({children:e,className:t,mobile:n}){let i=r.useRef("undefined"==typeof document?void 0:document.createElement("div"));return r.useEffect(()=>{let e=i.current;if(e)return document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),r.useEffect(()=>{i.current&&(i.current.className=N({mobile:n},t))},[t,n]),r.createElement(w.h,{container:i.current},e)}function R({className:e,mobile:t,hasPortal:n=!0}){let a=(0,i.X)(),{remove:o}=(0,k.P)(),c=r.useContext(l.i),u=r.createElement(C,{toasts:c,removeCallback:o,mobile:null!=t?t:a});return n?r.createElement(Z,{className:e||"",mobile:null!=t?t:a},u):u}Z.displayName="ToasterPortal",R.displayName="ToasterComponent"},72246:function(e,t,n){"use strict";n.d(t,{P:function(){return l}});var r=n(67294),i=n(69283);function l(){let e=r.useContext(i.R);if(null===e)throw Error("Toaster: `useToaster` hook is used out of context");return r.useMemo(()=>e,[e])}},84912:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var r=n(67294);function i(e,t){r.useEffect(()=>{if("number"!=typeof t)return;let n=setTimeout(()=>{e()},t);return()=>{clearTimeout(n)}},[e,t])}},48465:function(){},17249:function(){},99724:function(){}}]);