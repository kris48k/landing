(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7078],{20087:function(t,e,i){"use strict";var s=i(67294);e.Z=t=>s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},t),s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081Z",clipRule:"evenodd"}))},51693:function(t,e,i){"use strict";var s=i(67294);e.Z=t=>s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},t),s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))},51980:function(t,e,i){"use strict";var s=i(67294);e.Z=t=>s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},t),s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",clipRule:"evenodd"}))},93298:function(t,e,i){"use strict";i.d(e,{y:function(){return m}});var s=i(67294),n=i(42361),o=i(87174),h=i(97582),r=i(81387),a=i(25957);let l=(0,i(32782).Ge)("sheet");class c{constructor(t,e){this.x=t,this.y=e,this.timeStamp=Date.now()}}class u{constructor(t=5){this.points=[],this.pointsLen=t,this.clear()}clear(){this.points=Array(this.pointsLen)}addMovement({x:t,y:e}){this.points.pop(),this.points.unshift(new c(t,e))}getYAcceleration(t=1){let e=this.points[0],i=this.points[t];return e&&i?(e.y-i.y)/Math.pow(e.timeStamp-i.timeStamp,2):0}}i(51031);let d=[];class p extends s.Component{constructor(){super(...arguments),this.veilRef=s.createRef(),this.sheetRef=s.createRef(),this.sheetTopRef=s.createRef(),this.sheetContentRef=s.createRef(),this.sheetInnerContentRef=s.createRef(),this.sheetTitleRef=s.createRef(),this.velocityTracker=new u,this.observer=null,this.state={startScrollTop:0,startY:0,deltaY:0,prevSheetHeight:0,swipeAreaTouched:!1,contentTouched:!1,veilTouched:!1,isAnimating:!1,inWindowResizeScope:!1},this.setStyles=({status:t,deltaHeight:e=0})=>{if(!this.sheetRef.current||!this.veilRef.current)return;let i=this.sheetHeight-e,s="showing"===t?`translate3d(0, -${i}px, 0)`:"translate3d(0, 0, 0)",n=0;"showing"===t&&(n=0===e?1:i/this.sheetHeight),this.veilRef.current.style.opacity=String(n),this.sheetRef.current.style.transform=s},this.show=()=>{this.setState({isAnimating:!0},()=>{this.setStyles({status:"showing"}),this.setHash()})},this.hide=()=>{this.setState({isAnimating:!0},()=>{this.setStyles({status:"hiding"}),this.removeHash()})},this.onSwipeAreaTouchStart=t=>{this.velocityTracker.clear(),this.setState({startY:t.nativeEvent.touches[0].clientY,swipeAreaTouched:!0})},this.onContentTouchStart=t=>{this.props.allowHideOnContentScroll&&!this.state.swipeAreaTouched&&(this.velocityTracker.clear(),this.setState({startY:t.nativeEvent.touches[0].clientY,startScrollTop:this.sheetScrollTop,contentTouched:!0}))},this.onSwipeAriaTouchMove=t=>{let e=t.nativeEvent.touches[0].clientY-this.state.startY;this.velocityTracker.addMovement({x:t.nativeEvent.touches[0].clientX,y:t.nativeEvent.touches[0].clientY}),this.setState({deltaY:e}),e<=0||this.setStyles({status:"showing",deltaHeight:e})},this.onContentTouchMove=t=>{if(!this.props.allowHideOnContentScroll)return;let{startScrollTop:e,swipeAreaTouched:i}=this.state;if(i||this.sheetScrollTop>0||e>0&&e!==this.sheetScrollTop)return;let s=t.nativeEvent.touches[0].clientY-this.state.startY;this.velocityTracker.addMovement({x:t.nativeEvent.touches[0].clientX,y:t.nativeEvent.touches[0].clientY}),this.setState({deltaY:s}),s<=0||this.setStyles({status:"showing",deltaHeight:s})},this.onTouchEndAction=t=>{let e=this.velocityTracker.getYAcceleration();this.sheetHeight<=t?this.props.hideSheet():t>50&&e<=.08&&e>=-.02||e>.08?this.hide():0!==t&&this.show()},this.onSwipeAriaTouchEnd=()=>{let{deltaY:t}=this.state;this.onTouchEndAction(t),this.setState({startY:0,deltaY:0,swipeAreaTouched:!1})},this.onContentTouchEnd=()=>{let{deltaY:t,swipeAreaTouched:e}=this.state;this.props.allowHideOnContentScroll&&!e&&(this.onTouchEndAction(t),this.setState({startY:0,deltaY:0,contentTouched:!1}))},this.onVeilClick=()=>{this.setState({veilTouched:!0}),this.hide()},this.onVeilTransitionEnd=()=>{this.setState({isAnimating:!1}),"0"===this.veilOpacity&&this.props.hideSheet()},this.onContentTransitionEnd=t=>{"height"===t.propertyName&&this.sheetContentRef.current&&(this.sheetContentRef.current.style.transition="none")},this.onResizeWindow=()=>{this.setState({inWindowResizeScope:!0}),this.onResize(),setTimeout(()=>this.setState({inWindowResizeScope:!1}),0)},this.onResize=()=>{if(!this.sheetRef.current||!this.sheetContentRef.current)return;let t=this.sheetTitleHeight+this.innerContentHeight+this.sheetTopHeight,e=.9*window.innerHeight,i=t>=e?e:t;this.sheetContentRef.current.style.transition=this.state.prevSheetHeight>t?"height 0s ease 0.3s":"none",this.sheetContentRef.current.style.height=`${i-this.sheetTopHeight}px`,this.sheetRef.current.style.transform=`translate3d(0, -${i}px, 0)`,this.setState({prevSheetHeight:t})}}componentDidMount(){this.addListeners(),this.show(),this.setInitialStyles(),this.setState({prevSheetHeight:this.sheetTitleHeight+this.innerContentHeight+this.sheetTopHeight})}componentDidUpdate(t){let{visible:e,location:i}=this.props;!t.visible&&e&&this.show(),(t.visible&&!e||this.shouldClose(t))&&this.hide(),t.location.pathname!==i.pathname&&(d=[])}componentWillUnmount(){this.removeListeners()}render(){let{content:t,contentClassName:e,swipeAreaClassName:i,hideTopBar:n,title:o}=this.props,{deltaY:h,swipeAreaTouched:r,contentTouched:a,veilTouched:c,isAnimating:u,inWindowResizeScope:d}=this.state,p={"with-transition":!h||c},v={"with-transition":!d&&p["with-transition"]};return s.createElement(s.Fragment,null,s.createElement("div",{ref:this.veilRef,className:l("veil",p),onClick:u?void 0:this.onVeilClick,onTransitionEnd:this.onVeilTransitionEnd}),s.createElement("div",{ref:this.sheetRef,className:l("sheet",v)},!n&&s.createElement("div",{ref:this.sheetTopRef,className:l("sheet-top")},s.createElement("div",{className:l("sheet-top-resizer")})),s.createElement("div",{className:l("sheet-swipe-area",i),onTouchStart:this.onSwipeAreaTouchStart,onTouchMove:this.onSwipeAriaTouchMove,onTouchEnd:this.onSwipeAriaTouchEnd}),s.createElement("div",{ref:this.sheetContentRef,className:l("sheet-content",{"without-scroll":h>0&&a||r},e),onTouchStart:this.onContentTouchStart,onTouchMove:this.onContentTouchMove,onTouchEnd:this.onContentTouchEnd,onTransitionEnd:this.onContentTransitionEnd},o&&s.createElement("div",{ref:this.sheetTitleRef,className:l("sheet-content-title")},o),s.createElement("div",{ref:this.sheetInnerContentRef},t))))}get veilOpacity(){var t;return(null===(t=this.veilRef.current)||void 0===t?void 0:t.style.opacity)||0}get sheetTopHeight(){var t;return(null===(t=this.sheetTopRef.current)||void 0===t?void 0:t.getBoundingClientRect().height)||0}get sheetHeight(){var t;return(null===(t=this.sheetRef.current)||void 0===t?void 0:t.getBoundingClientRect().height)||0}get innerContentHeight(){var t;return(null===(t=this.sheetInnerContentRef.current)||void 0===t?void 0:t.getBoundingClientRect().height)||0}get sheetTitleHeight(){var t;return(null===(t=this.sheetTitleRef.current)||void 0===t?void 0:t.getBoundingClientRect().height)||0}get sheetScrollTop(){var t;return(null===(t=this.sheetContentRef.current)||void 0===t?void 0:t.scrollTop)||0}setInitialStyles(){if(this.sheetContentRef.current&&this.sheetInnerContentRef.current){let t=this.sheetHeight-this.sheetTopHeight;this.sheetContentRef.current.style.height=`${t}px`}}addListeners(){window.addEventListener("resize",this.onResizeWindow),this.sheetRef.current&&(this.observer=new MutationObserver(this.onResize),this.observer.observe(this.sheetRef.current,{subtree:!0,childList:!0}))}removeListeners(){window.removeEventListener("resize",this.onResizeWindow),this.observer&&this.observer.disconnect()}setHash(){let{id:t,platform:e,location:i,history:s}=this.props;if(e===r.t.BROWSER)return;let n=Object.assign(Object.assign({},i),{hash:t});switch(e){case r.t.IOS:i.hash&&d.push(i.hash),s.replace(n);break;case r.t.ANDROID:s.push(n)}}removeHash(){var t;let{id:e,platform:i,location:s,history:n}=this.props;if(i!==r.t.BROWSER&&s.hash===`#${e}`)switch(i){case r.t.IOS:n.replace(Object.assign(Object.assign({},s),{hash:null!==(t=d.pop())&&void 0!==t?t:""}));break;case r.t.ANDROID:n.goBack()}}shouldClose(t){let{id:e,platform:i,location:s,history:n}=this.props;return i!==r.t.BROWSER&&"POP"===n.action&&t.location.hash!==s.hash&&s.hash!==`#${e}`}}p.defaultProps={id:"sheet",allowHideOnContentScroll:!0};let v=(0,a.z)(function(t){let e=e=>{let{useHistory:i,useLocation:n}=e,o=(0,h._T)(e,["useHistory","useLocation"]);return s.createElement(t,Object.assign({},o,{history:i(),location:n()}))},i=t.displayName||t.name||"Component";return e.displayName=`withRouterWrapper(${i})`,e}(p)),m=({children:t,onClose:e,visible:i,id:h,title:r,className:a,contentClassName:c,swipeAreaClassName:u,allowHideOnContentScroll:d,hideTopBar:p,qa:m})=>{let[f,g]=s.useState(i),[w,R]=s.useState(i);return((0,n.y)({enabled:f}),!w&&i&&g(!0),i!==w&&R(i),f)?s.createElement(o.h,null,s.createElement("div",{"data-qa":m,className:l(null,a)},s.createElement(v,{id:h,content:t,contentClassName:c,swipeAreaClassName:u,title:r,visible:i,allowHideOnContentScroll:d,hideTopBar:p,hideSheet:()=>{e&&e(),g(!1)}}))):null}},42646:function(t,e,i){"use strict";i.d(e,{z:function(){return o}});var s=i(67294);let n={mobile:!1,platform:i(81387).t.BROWSER,useHistory:()=>({action:"",replace(){},push(){},goBack(){}}),useLocation:()=>({pathname:"",search:"",hash:""})},o=s.createContext(n)},81387:function(t,e,i){"use strict";i.d(e,{P:function(){return h},t:function(){return n}});var s,n,o=i(32782);(s=n||(n={})).IOS="ios",s.ANDROID="android",s.BROWSER="browser";let h=(0,o.Ge)("root")({mobile:!0}).split(/\s+/)[1]},25957:function(t,e,i){"use strict";i.d(e,{z:function(){return h}});var s=i(67294),n=i(73809),o=i(42646);function h(t){var e;let i=(0,n.i)(t);return(e=class extends s.Component{render(){return s.createElement(t,Object.assign({},this.props,{mobile:this.context.mobile,platform:this.context.platform,useHistory:this.context.useHistory,useLocation:this.context.useLocation}))}}).displayName=`withMobile(${i})`,e.contextType=o.z,e}},73809:function(t,e,i){"use strict";function s(t){return t.displayName||t.name||"Component"}i.d(e,{i:function(){return s}})},42361:function(t,e,i){"use strict";let s;i.d(e,{y:function(){return h}});var n=i(67294);let o=0;function h({enabled:t}){n.useLayoutEffect(()=>{if(t)return 1==++o&&function(){let t=window.innerWidth-document.documentElement.clientWidth,e=window.innerHeight-document.documentElement.clientHeight,i=function(){let t=window.getComputedStyle(document.body);return{top:Number.parseFloat(t.paddingTop),right:Number.parseFloat(t.paddingRight),bottom:Number.parseFloat(t.paddingBottom),left:Number.parseFloat(t.paddingLeft)}}();s=document.body.style.cssText,document.body.style.overflow="hidden",t&&(document.body.style.paddingRight=`${i.right+t}px`),e&&(document.body.style.paddingBottom=`${i.bottom+e}px`)}(),()=>{0==--o&&(s?document.body.style.cssText=s:document.body.removeAttribute("style"))}},[t])}},51031:function(){}}]);