(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7615],{26486:function(e,s,t){"use strict";t.d(s,{y:function(){return d}});var n=t(85893),a=t(85956),c=t(48696),i=t(5233);t(67294);var o=t(7566),l=t(60948);t(63080);let r=(0,l.Ge)("clipboard-area"),d=e=>{let{textToCopy:s,tooltipContent:t,children:l,isNeedPopup:d=!0}=e,{t:u}=(0,i.$G)(),m=(0,o.d)();return d?(0,n.jsx)(a.J,{disabled:m,tooltipClassName:r("popup"),content:null!=t?t:u("actions_copyToClipboard"),placement:"top",hasArrow:!0,children:(0,n.jsx)(c.h,{text:s,timeout:1e3,children:e=>l(e)})}):(0,n.jsx)(c.h,{text:s,timeout:1e3,children:e=>l(e)})}},15128:function(e,s,t){"use strict";t.d(s,{K:function(){return r}});var n=t(85893),a=t(69178),c=t(37105),i=t(43671);t(67294);var o=t(60948);t(47664);let l=(0,o.Ge)("clipboard-icon"),r=e=>{let{status:s,className:t}=e,o="success"===s;return(0,n.jsx)("div",{className:l({copied:o},t),children:(0,n.jsx)(i.J,{data:o?a.Z:c.Z,size:16})})}},7566:function(e,s,t){"use strict";t.d(s,{d:function(){return c}});var n=t(85687),a=t(31080);let c=()=>(0,n.Z)()<=a.j.sm},70664:function(e,s,t){"use strict";t.d(s,{A:function(){return d}});var n=t(5233),a=t(11163),c=t(67294),i=t(35315),o=t.n(i),l=t(9663),r=t(60948);let d=()=>{let{i18n:e}=(0,n.$G)(),s=(0,a.useRouter)();c.useEffect(()=>{if("/404"===s.route)return;let t=e.language,n=localStorage.getItem(l.mZ)||(0,r.Nj)();if(t!==n){let e=s.asPath;if(n===o().i18n.defaultLocale){let n=e.replace("/".concat(t),"");""===n?s.replace("/"):s.replace(n)}else t===o().i18n.defaultLocale?s.replace("/".concat(n).concat("/"===e?"":e)):s.replace(e.replace("/".concat(t),"/".concat(n)));localStorage.setItem(l.mZ,n)}},[s.route,e.language,s.asPath])}},22663:function(e,s,t){"use strict";t.r(s),t.d(s,{IconsPage:function(){return et},__N_SSG:function(){return es},default:function(){return en}});var n=t(85893),a=t(11163),c=t(67294),i=t(1474),o=t(97319),l=t(91911),r=t(60938),d=t(81507),u=t(97387),m=t(43671),h=t(23825),x=t(5233),v=t(7566),j=t(60948);t(33204);let p=(0,j.Ge)("icon-button"),f=e=>{let{icon:s,onClick:t}=e,a=c.useCallback(()=>{null==t||t(s)},[s,t]);return(0,n.jsx)(u.z,{view:"flat",size:"xl",pin:"round-round",className:p(),onClick:a,children:(0,n.jsx)(m.J,{data:s.data,size:20})})};t(67174);let y=(0,j.Ge)("icon-collection"),N=e=>{let{icons:s,onSelectIcon:t}=e,a=c.useCallback(e=>null==t?void 0:t(e),[t]);return(0,n.jsx)("div",{className:y(),children:s.map(e=>(0,n.jsx)(f,{icon:e,onClick:a},e.name))})};var g=t(93298),w=t(78944),C=t(26486),b=t(15128);t(93892);let k=(0,j.Ge)("icon-content"),z=e=>{let{icon:s,onClickToKeyword:t}=e,{t:a}=(0,x.$G)(),i=c.useCallback(e=>()=>{null==t||t(e)},[t]);return(0,n.jsxs)("div",{className:k(),children:[(0,n.jsx)("div",{className:k("preview"),children:(0,n.jsx)(m.J,{data:s.data,size:40})}),(0,n.jsxs)("div",{className:k("info"),children:[(0,n.jsx)(C.y,{textToCopy:s.name,tooltipContent:a("icons:actions_copyIconName"),children:e=>(0,n.jsxs)("div",{className:k("title",{copied:"success"===e}),children:[(0,n.jsx)("span",{className:k("name"),children:s.name}),(0,n.jsx)(b.K,{status:e,className:k("copy-icon")})]})}),s.meta.keywords.length?(0,n.jsxs)("div",{className:k("keywords"),children:[(0,n.jsx)("div",{className:k("keywords-title"),children:a("icons:keywords")}),(0,n.jsx)("div",{className:k("keywords-items"),children:s.meta.keywords.map(e=>(0,n.jsx)("div",{className:k("keywords-item"),onClick:i(e),children:e},e))})]}):null]})]})};t(66312);let G=(e,s)=>"import ".concat(s,"Icon from '@gravity-ui/icons/svgs/").concat(e,".svg';"),_=e=>"import {".concat(e,"} from '@gravity-ui/icons';"),S=(0,j.Ge)("icon-usage-example"),I=e=>{let{icon:s,variant:t}=e,{t:a}=(0,x.$G)(),c="react"===t?_(s.meta.componentName):G(s.meta.svgName,s.meta.componentName);return(0,n.jsxs)("div",{className:S(),children:[(0,n.jsx)("div",{className:S("title"),children:a("react"===t?"icons:usage_reactComponent":"icons:usage_svg")}),(0,n.jsx)(C.y,{textToCopy:c,tooltipContent:a("react"===t?"icons:actions_copyReactComponent":"icons:actions_copySvgImport"),children:e=>(0,n.jsxs)("div",{className:S("wrapper"),children:[(0,n.jsx)("div",{className:S("code",{copied:"success"===e}),children:c}),(0,n.jsx)("div",{className:S("copy-button"),children:(0,n.jsx)(b.K,{status:e,className:S("copy-icon")})})]})})]})};t(50005);let J=(0,j.Ge)("icon-body"),T=e=>{let{icon:s,onClickToKeyword:t}=e;return(0,n.jsxs)("div",{className:J(),children:[(0,n.jsx)(z,{icon:s,onClickToKeyword:t}),(0,n.jsx)(I,{variant:"react",icon:s}),(0,n.jsx)(I,{variant:"svg",icon:s})]})};t(69325);var L=t(20087),Z=t(72801),R=t(92042),K=t(33550),$=t(48696);async function E(e,s){let t=await fetch(e),n=await t.blob(),a=e.split("/").pop()||"downloaded-file",c=s||document.body,i=document.createElement("a");i.style.opacity="0",i.style.width="0px",i.style.height="0px",i.href=window.URL.createObjectURL(n),i.download=a,c.appendChild(i),i.click(),i.remove()}t(63528);let M=(0,j.Ge)("icon-dialog-actions"),P=e=>"https://raw.githubusercontent.com/gravity-ui/icons/main/svgs/".concat(e,".svg"),U=e=>"".concat(window.location.origin,"/icons?icon=").concat(e),A=e=>{let{icon:s,mobile:t}=e,{t:a,i18n:i}=(0,x.$G)(),o=c.useRef(null),[l,r]=c.useState(!1),d=c.useMemo(()=>U(s.name),[s]),h=c.useMemo(()=>({url:d,title:"Gravity UI"}),[d]),v=c.useMemo(()=>{var e,s;return null===(e=(s=navigator).canShare)||void 0===e?void 0:e.call(s,h)},[h]),j=c.useCallback(async()=>{r(!0);try{await E(P(s.meta.svgName),o.current)}finally{r(!1)}},[s]),p=c.useCallback(async()=>{if(v)try{await navigator.share(h)}catch(e){}else await navigator.clipboard.writeText(d)},[v,h,d]),f=c.useMemo(()=>(0,n.jsx)($.h,{text:d,timeout:1e3,children:e=>{let s="success"===e;return(0,n.jsxs)(u.z,{view:s?"normal-contrast":"action",size:"xl",className:M("copy-action",{lg:"ru"===i.language}),children:[(0,n.jsx)(m.J,{data:s?L.Z:Z.Z,size:16}),s?a("icons:actions_copied"):a("icons:actions_copyLink")]})}}),[d]),y=c.useMemo(()=>v?(0,n.jsxs)(u.z,{view:"action",size:"xl",onClick:p,children:[(0,n.jsx)(m.J,{data:R.Z,size:16}),a("actions_share")]}):f,[v,f,p]);return(0,n.jsx)("div",{className:M(),ref:o,children:t?y:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.z,{view:"flat-contrast",size:"xl",onClick:j,loading:l,children:[(0,n.jsx)(m.J,{data:K.Z,size:20}),a("icons:actions_downloadSvg")]}),f]})})},F=(0,j.Ge)("icon-dialog"),O=e=>{let{isOpen:s,icon:t,onClose:a,onClickToKeyword:i}=e;return(0,v.d)()?(0,n.jsx)(g.y,{className:F(),contentClassName:F("sheet-content"),visible:s,onClose:a,children:t&&(0,n.jsxs)(c.Fragment,{children:[(0,n.jsx)(T,{icon:t,onClickToKeyword:i}),(0,n.jsx)(A,{icon:t,mobile:!0})]})}):(0,n.jsx)(w.V,{className:F(),size:"s",open:s,onClose:a,children:t&&(0,n.jsxs)(c.Fragment,{children:[(0,n.jsx)(T,{icon:t,onClickToKeyword:i}),(0,n.jsx)(A,{icon:t})]})})};t(28910),t(25972);let X=(0,j.Ge)("icons-not-found"),V=()=>{let{t:e}=(0,x.$G)();return(0,n.jsxs)("div",{className:X(),children:[(0,n.jsx)("div",{className:X("title"),children:e("icons:empty_title")}),(0,n.jsx)("div",{className:X("subtitle"),children:e("icons:empty_subTitle")})]})};var q=t(91304);let B=t(48553).c.reduce((e,s)=>({...e,[s.componentName]:s}),{}),D=Object.entries(q).map(e=>{let[s,t]=e;return{name:s,data:t,meta:B[s]}}).sort((e,s)=>e.name.localeCompare(s.name)),H=(0,j.Ge)("icons"),Q=e=>{let{currentIcon:s,onChangeCurrentIcon:t}=e,{t:a,i18n:p}=(0,x.$G)(),f=(0,v.d)(),[y,g]=c.useState(""),[w,C]=c.useState(!1),[b,k]=c.useState(),z=c.useRef(null),G=c.useRef(null);c.useEffect(()=>{if(!f){var e;null===(e=G.current)||void 0===e||e.focus()}},[f]),c.useEffect(()=>{if(s&&s!==(null==b?void 0:b.name)){let e=D.find(e=>e.name===s);e&&(C(!0),k(e))}},[s]);let _=c.useCallback(e=>{C(!0),k(e),null==t||t(null==e?void 0:e.name)},[t]),S=c.useCallback(()=>{C(!1),setTimeout(()=>{k(void 0),null==t||t(void 0)},500)},[t]),I=c.useCallback(e=>{g(e),S(),setTimeout(()=>{var e;null===(e=z.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},100)},[]),J=c.useMemo(()=>{if(!y)return D;let e=y.toLowerCase();return D.filter(s=>{let{meta:t}=s;return t.name.toLowerCase().includes(e)||t.componentName.toLowerCase().includes(e)||t.keywords.some(s=>s.toLowerCase().includes(e))})},[y]);return(0,n.jsxs)(l.r,{className:H(),children:[(0,n.jsx)(r.X,{children:(0,n.jsxs)(d.J,{sizes:12,className:H("heading"),children:[(0,n.jsx)("h1",{className:H("title"),ref:z,children:a("icons:title")}),(0,n.jsx)("div",{className:H("actions"),children:(0,n.jsxs)(u.z,{href:(0,j.n6)("/libraries/icons",p),target:"_blank",className:H("library-button"),size:"xl",view:"outlined-contrast",children:[a("icons:goToLibrary"),(0,n.jsx)(m.J,{data:i.Z,size:16})]})})]})}),(0,n.jsx)(r.X,{className:H("search"),children:(0,n.jsx)(d.J,{sizes:12,children:(0,n.jsx)(h.o,{controlRef:G,className:H("search-input"),value:y,onUpdate:g,size:"xl",placeholder:a("icons:filterPlaceholder"),leftContent:(0,n.jsx)("div",{className:H("search-icon"),children:(0,n.jsx)(m.J,{data:o.Z,size:20})}),autoFocus:!f,hasClear:!0})})}),(0,n.jsx)(r.X,{children:(0,n.jsx)(d.J,{sizes:12,children:J.length?(0,n.jsx)(N,{icons:J,onSelectIcon:_}):(0,n.jsx)(V,{})})}),(0,n.jsx)(O,{isOpen:w,icon:b,onClose:S,onClickToKeyword:I})]})};var W=t(7825),Y=t(70664);let ee="icon";var es=!0;let et=()=>{(0,Y.A)();let e=(0,a.useRouter)(),{[ee]:s}=e.query,t=c.useCallback(s=>{let t=new URLSearchParams(window.location.search);s?t.set(ee,s):t.delete(ee),e.push({pathname:e.asPath.split("?")[0],search:t.toString()})},[e]);return(0,n.jsx)(W.A,{title:"Icons",children:(0,n.jsx)(Q,{currentIcon:"string"==typeof s?s:void 0,onChangeCurrentIcon:t})})};var en=et},63080:function(){},47664:function(){},33204:function(){},67174:function(){},50005:function(){},93892:function(){},69325:function(){},63528:function(){},66312:function(){},28910:function(){},25972:function(){}}]);