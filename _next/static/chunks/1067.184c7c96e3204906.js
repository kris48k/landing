(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1067],{51693:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))},26595:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.53 2.97a.75.75 0 0 1 0 1.06L6.56 8l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))},42646:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(67294);let u={mobile:!1,platform:n(81387).t.BROWSER,useHistory:()=>({action:"",replace(){},push(){},goBack(){}}),useLocation:()=>({pathname:"",search:"",hash:""})},a=r.createContext(u)},81387:function(e,t,n){"use strict";n.d(t,{P:function(){return l},t:function(){return u}});var r,u,a=n(32782);(r=u||(u={})).IOS="ios",r.ANDROID="android",r.BROWSER="browser";let l=(0,a.Ge)("root")({mobile:!0}).split(/\s+/)[1]},53006:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var r=n(67294),u=n(42646);function a(){return r.useContext(u.z).mobile}},3528:function(e,t,n){"use strict";var r,u;n.d(t,{Pe:function(){return i},Uo:function(){return r},iE:function(){return o},jQ:function(){return s}}),(u=r||(r={})).Ru="ru",u.En="en";let a=[],l={lang:r.En},s=e=>{Object.assign(l,e),a.forEach(e=>{e(l)})},i=e=>(a.push(e),()=>{a=a.filter(t=>t!==e)}),o=()=>l},59003:function(e,t,n){"use strict";n.d(t,{L:function(){return a}});var r=n(67294);class u{constructor(e,t,n={}){var r,u;this.nativeEvent=t,this.target=null!==(r=n.target)&&void 0!==r?r:t.target,this.currentTarget=null!==(u=n.currentTarget)&&void 0!==u?u:t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}}function a(e){let{onFocusWithin:t,onBlurWithin:n,onFocusWithinChange:a,isDisabled:l}=e,s=r.useRef(!1),{onBlur:i,onFocus:o}=function({onFocus:e,onBlur:t,isDisabled:n}){let a=r.useRef(!1),l=r.useRef(null);r.useEffect(()=>{if(n)return;let e=function(){a.current=!1},r=function(e){!a.current&&l.current&&(t(new u("blur",new FocusEvent("blur",Object.assign(Object.assign({},e),{relatedTarget:e.target,bubbles:!1,cancelable:!1})),{target:l.current,currentTarget:l.current})),l.current=null)};return window.addEventListener("focus",e,{capture:!0}),window.addEventListener("focusin",r),()=>{window.removeEventListener("focus",e,{capture:!0}),window.removeEventListener("focusin",r)}},[n,t]);let s=r.useCallback(e=>{(null===e.relatedTarget||e.relatedTarget===document.body||e.relatedTarget===document)&&(t(e),l.current=null)},[t]),i=function(e){let t=r.useRef({isFocused:!1,observer:null});return r.useEffect(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]),r.useCallback(n=>{let r=n.target;if(r instanceof HTMLButtonElement||r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement){t.current.isFocused=!0,r.addEventListener("focusout",n=>{t.current.isFocused=!1,r.disabled&&(null==e||e(new u("blur",n))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0});let n=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){n.disconnect(),t.current.observer=null;let e=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:e})),r.dispatchEvent(new FocusEvent("focusout",{relatedTarget:e,bubbles:!0}))}});n.observe(r,{attributes:!0,attributeFilter:["disabled"]}),t.current.observer=n}},[e])}(t);return{onBlur:s,onFocus:r.useCallback(t=>{a.current=!0,l.current=t.target,i(t),e(t)},[i,e])}}({onFocus:r.useCallback(e=>{!s.current&&document.activeElement===e.target&&(s.current=!0,t&&t(e),a&&a(!0))},[t,a]),onBlur:r.useCallback(e=>{s.current&&(s.current=!1,n&&n(e),a&&a(!1))},[n,a]),isDisabled:l});return l?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:o,onBlur:i}}}},41848:function(e){e.exports=function(e,t,n,r){for(var u=e.length,a=n+(r?1:-1);r?a--:++a<u;)if(t(e[a],a,e))return a;return -1}},42118:function(e,t,n){var r=n(41848),u=n(62722),a=n(42351);e.exports=function(e,t,n){return t==t?a(e,t,n):r(e,u,n)}},62722:function(e){e.exports=function(e){return e!=e}},42351:function(e){e.exports=function(e,t,n){for(var r=n-1,u=e.length;++r<u;)if(e[r]===t)return r;return -1}},81763:function(e,t,n){var r=n(44239),u=n(37005);e.exports=function(e){return"number"==typeof e||u(e)&&"[object Number]"==r(e)}},31805:function(e,t,n){"use strict";n.r(t),n.d(t,{CalendarExample:function(){return l},DateFieldExample:function(){return v},DatePickerExample:function(){return p},DatePickerSandboxExample:function(){return m},RangeCalendarExample:function(){return c},RangeCalendarWithDefaultValueExample:function(){return d},RelativeDatePickerExample:function(){return g},RelativeDatePickerSandboxExample:function(){return x}});var r=n(85893),u=n(16460),a=n(13283);let l=e=>{let{focusedValue:t,defaultFocusedValue:n,defaultValue:l,maxValue:s,minValue:i,...o}=e;return(0,r.jsx)(u.f,{...o,defaultFocusedValue:(0,a.J)(n),defaultValue:(0,a.J)(l),minValue:(0,a.J)(i),maxValue:(0,a.J)(s),focusedValue:(0,a.J)(t),modes:{days:!0,months:!0,quarters:!0,years:!0}})};var s=n(14402),i=n(67294);let o=e=>{var t,n;let{value:u}=e;return(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("div",{children:"Selected range:"}),(0,r.jsx)("div",{children:u?"".concat(null===(t=u.start)||void 0===t?void 0:t.format("L")," - ").concat(null===(n=u.end)||void 0===n?void 0:n.format("L")):"\xa0"})]})},c=e=>{let{focusedValue:t,defaultFocusedValue:n,defaultValue:u,maxValue:l,minValue:c,...d}=e,f=u?{start:(0,a.J)(u.start),end:(0,a.J)(u.end)}:void 0,[v,b]=i.useState(f);return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.V,{...d,defaultFocusedValue:(0,a.J)(n),defaultValue:f,minValue:(0,a.J)(c),maxValue:(0,a.J)(l),focusedValue:(0,a.J)(t),onUpdate:b,modes:{days:!0,months:!0,quarters:!0,years:!0}}),(0,r.jsx)(o,{value:v})]})},d=e=>{let t=(0,a.CQ)(),n={start:t.subtract({days:2}).toString(),end:t.add({days:2}).toString()};return(0,r.jsx)(c,{...e,defaultValue:n})};var f=n(56432);let v=e=>{let{defaultValue:t,maxValue:n,minValue:u,...l}=e;return(0,r.jsx)(f.N,{...l,defaultValue:(0,a.J)(t),maxValue:(0,a.J)(n),minValue:(0,a.J)(u)})};var b=n(97081);let p=e=>{let{defaultValue:t,maxValue:n,minValue:u,...l}=e;return(0,r.jsx)(b.M,{...l,defaultValue:(0,a.J)(t),maxValue:(0,a.J)(n),minValue:(0,a.J)(u)})},m=e=>(0,r.jsx)(p,{...e,style:{alignSelf:"flex-start"}});var h=n(78513);let g=e=>{let t,{defaultValue:n,isRelative:u,maxValue:l,minValue:s,...i}=e;return n&&(t=u?{type:"relative",value:n}:{type:"absolute",value:(0,a.J)(n)}),(0,r.jsx)(h.i,{...i,defaultValue:t,maxValue:(0,a.J)(l),minValue:(0,a.J)(s)})},x=e=>{let[t,n]=i.useState(null);return(0,r.jsxs)("div",{style:{alignSelf:"flex-start",width:"100%",justifyContent:"center",display:"flex",flexDirection:"column",textAlign:"center",gap:"20px"},children:[(0,r.jsx)("div",{children:(0,r.jsx)(g,{...e,onUpdate:n})}),(0,r.jsxs)("div",{children:["value: ",t?JSON.stringify(t,null,2):"null"]})]})}}}]);