(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{156:function(e,t,r){"use strict";var n=r(8);t.__esModule=!0,t.default=void 0;var o,i=n(r(7)),a=n(r(35)),s=n(r(74)),c=n(r(76)),l=n(r(0)),u=n(r(4)),d=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=d(e),r=t.fluid?t.fluid.src:t.fixed.src;return f[r]||!1},h=new WeakMap;var g=function(e,t){var r=(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),o);return r&&(r.observe(e),h.set(e,t)),function(){r.unobserve(e),h.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+r+"/>":"",o=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+r+o+t+a+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=l.default.forwardRef(function(e,t){var r=e.sizes,n=e.srcSet,o=e.src,i=e.style,a=e.onLoad,u=e.onError,d=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,c.default)({sizes:r,srcSet:n,src:o},d,{onLoad:a,onError:u,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var m=function(e){function t(t){var r;r=e.call(this,t)||this;var n=!0,o=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,o=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,o=!1);var c=!(t.critical&&!t.fadeIn);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:o,fadeIn:i,hasNoScript:c,seenBefore:s},r.imageRef=l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)((0,a.default)(r))),r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:t.imageRef.current.currentSrc.length>0})})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=t.fluid?t.fluid.src:t.fixed.src,f[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,o=e.style,i=void 0===o?{}:o,a=e.imgStyle,s=void 0===a?{}:a,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,m=e.backgroundColor,v=e.Tag,w=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,O=!0===this.state.fadeIn&&!this.state.imgCached,E=(0,c.default)({opacity:S?1:0,transition:O?"opacity 0.5s":"none"},s),L="boolean"==typeof m?"lightgray":m,R={transitionDelay:"0.5s"},j=(0,c.default)({opacity:this.state.imgLoaded?0:1},O&&R,s,f),C={title:t,alt:this.state.isVisible?"":r,style:j,className:p};if(h){var _=h;return l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),L&&l.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&R)}),_.base64&&l.default.createElement(b,(0,c.default)({src:_.base64},C)),_.tracedSVG&&l.default.createElement(b,(0,c.default)({src:_.tracedSVG},C)),this.state.isVisible&&l.default.createElement("picture",null,_.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:_.srcSetWebp,sizes:_.sizes}),l.default.createElement(b,{alt:r,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,c.default)({alt:r,title:t},_))}}))}if(g){var V=g,M=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete M.display,l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},L&&l.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:L,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},O&&R)}),V.base64&&l.default.createElement(b,(0,c.default)({src:V.base64},C)),V.tracedSVG&&l.default.createElement(b,(0,c.default)({src:V.tracedSVG},C)),this.state.isVisible&&l.default.createElement("picture",null,V.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:V.srcSetWebp,sizes:V.sizes}),l.default.createElement(b,{alt:r,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,c.default)({alt:r,title:t},V))}}))}return null},t}(l.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),w=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});m.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var S=m;t.default=S},300:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",function(){return n})},301:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",function(){return n})},302:function(e,t,r){"use strict";function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}r.d(t,"a",function(){return n})},491:function(e,t,r){var n=r(25).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||r(18)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},502:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(503),a=r.n(i);function s(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var c=o.a.createContext();function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){return function(t){return o.a.createElement(c.Consumer,null,function(r){return o.a.createElement(e,Object.assign({__chunkExtractor:r},t))})}},f=function(e){return e};function p(e){var t=e.resolve,r=void 0===t?f:t,n=e.render,i=e.onLoad;function a(e,t){void 0===t&&(t={});var a=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),c={},f=function(e){var o,d;function f(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0},s(!r.__chunkExtractor||a.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?!1===t.ssr?u(n):(a.requireAsync(r).catch(function(){}),n.loadSync(),r.__chunkExtractor.addChunk(a.chunkName(r)),u(n)):(a.isReady&&a.isReady(r)&&n.loadSync(),n)}d=e,(o=f).prototype=Object.create(d.prototype),o.prototype.constructor=o,o.__proto__=d;var p=f.prototype;return p.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},p.componentWillUnmount=function(){this.mounted=!1},p.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},p.triggerOnLoad=function(){var e=this;i&&setTimeout(function(){i(e.state.result,e.props)})},p.loadSync=function(){if(this.state.loading)try{var e=a.requireSync(this.props),t=r(e,{Loadable:h});this.state.result=t,this.state.loading=!1}catch(n){this.state.error=n}},p.getCacheKey=function(){return JSON.stringify(this.props)},p.getCache=function(){return c[this.getCacheKey()]},p.setCache=function(e){c[this.getCacheKey()]=e},p.loadAsync=function(){var e=this;return this.promise=this.promise||a.requireAsync(this.props).then(function(n){var o=r(n,{Loadable:h});t.suspense&&e.setCache(o),e.safeSetState({result:r(n,{Loadable:h}),loading:!1},function(){return e.triggerOnLoad()})}).catch(function(t){e.safeSetState({error:t,loading:!1})}),this.promise},p.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,i=(e.__chunkExtractor,function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["forwardedRef","fallback","__chunkExtractor"])),a=this.state,s=a.error,c=a.loading,u=a.result;if(t.suspense){var d=this.getCache();if(!d)throw this.loadAsync();return n({loading:!1,fallback:null,result:d,options:t,props:l({},i,{ref:r})})}if(s)throw s;var f=o||t.fallback||null;return c?f:n({loading:c,fallback:f,result:u,options:t,props:l({},i,{ref:r})})},f}(o.a.Component),p=d(f),h=o.a.forwardRef(function(e,t){return o.a.createElement(p,Object.assign({forwardedRef:t},e))});return h.preload=function(e){if("undefined"==typeof window)throw new Error("`preload` cannot be called server-side");a.requireAsync(e)},h}return{loadable:a,lazy:function(e,t){return a(e,l({},t,{suspense:!0}))}}}var h=p({resolve:function(e,t){var r=t.Loadable,n=e.__esModule?e.default:e.default||e;return a()(r,n,{preload:!0}),n},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),g=h.loadable,y=h.lazy,b=p({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),m=b.loadable,v=b.lazy;var w=g;w.lib=m,y.lib=v;t.a=w},503:function(e,t,r){"use strict";var n=r(504),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?a:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=p(r);o&&o!==h&&e(t,o,n)}var a=u(r);d&&(a=a.concat(d(r)));for(var s=c(t),g=c(r),y=0;y<a.length;++y){var b=a[y];if(!(i[b]||n&&n[b]||g&&g[b]||s&&s[b])){var m=f(r,b);try{l(t,b,m)}catch(v){}}}return t}return t}},504:function(e,t,r){"use strict";e.exports=r(505)},505:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,g=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case d:case f:case a:case c:case s:case h:return e;default:switch(e=e&&e.$$typeof){case u:case p:case l:return e;default:return t}}case y:case g:case i:return t}}}function m(e){return b(e)===f}t.typeOf=b,t.AsyncMode=d,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=l,t.Element=o,t.ForwardRef=p,t.Fragment=a,t.Lazy=y,t.Memo=g,t.Portal=i,t.Profiler=c,t.StrictMode=s,t.Suspense=h,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===c||e===s||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===g||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return m(e)||b(e)===d},t.isConcurrentMode=m,t.isContextConsumer=function(e){return b(e)===u},t.isContextProvider=function(e){return b(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return b(e)===p},t.isFragment=function(e){return b(e)===a},t.isLazy=function(e){return b(e)===y},t.isMemo=function(e){return b(e)===g},t.isPortal=function(e){return b(e)===i},t.isProfiler=function(e){return b(e)===c},t.isStrictMode=function(e){return b(e)===s},t.isSuspense=function(e){return b(e)===h}},620:function(e,t,r){"use strict";var n=r(300),o=r(301);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=r(302);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=r(0),l=r(9),u=r.n(l);r.d(t,"a",function(){return v});var d=new Map,f=new Map,p=new Map,h=0;function g(e,t,r){void 0===r&&(r={}),r.threshold||(r.threshold=0);var n=r,o=n.root,i=n.rootMargin,a=n.threshold;if(u()(!d.has(e),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",e),e){var s=function(e){return e?p.has(e)?p.get(e):(h+=1,p.set(e,h.toString()),p.get(e)+"_"):""}(o)+(i?a.toString()+"_"+i:a.toString()),c=f.get(s);c||(c=new IntersectionObserver(b,r),s&&f.set(s,c));var l={callback:t,element:e,inView:!1,observerId:s,observer:c,thresholds:c.thresholds||(Array.isArray(a)?a:[a])};return d.set(e,l),c.observe(e),l}}function y(e){if(e){var t=d.get(e);if(t){var r=t.observerId,n=t.observer,o=n.root;n.unobserve(e);var i=!1,a=!1;r&&d.forEach(function(t,n){n!==e&&(t.observerId===r&&(i=!0,a=!0),t.observer.root===o&&(a=!0))}),!a&&o&&p.delete(o),n&&!i&&n.disconnect(),d.delete(e)}}}function b(e){e.forEach(function(e){var t=e.isIntersecting,r=e.intersectionRatio,n=e.target,o=d.get(n);if(o&&r>=0){var i=o.thresholds.some(function(e){return o.inView?r>e:r>=e});void 0!==t&&(i=i&&t),o.inView=i,o.callback(i,e)}})}var m=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return s(i(t=e.call.apply(e,[this].concat(n))||this),"state",{inView:!1,entry:void 0}),s(i(t),"node",null),s(i(t),"handleNode",function(e){t.node&&y(t.node),t.node=e||null,t.observeNode()}),s(i(t),"handleChange",function(e,r){(e!==t.state.inView||e)&&t.setState({inView:e,entry:r}),t.props.onChange&&t.props.onChange(e,r)}),t}Object(a.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){0},r.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(y(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(y(this.node),this.node=null)},r.componentWillUnmount=function(){this.node&&(y(this.node),this.node=null)},r.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin;g(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n})}},r.render=function(){var e=this.state,t=e.inView,r=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:r,ref:this.handleNode});var i=this.props,a=i.children,s=i.as,l=i.tag,u=(i.triggerOnce,i.threshold,i.root,i.rootMargin,Object(o.a)(i,["children","as","tag","triggerOnce","threshold","root","rootMargin"]));return Object(c.createElement)(s||l||"div",Object(n.a)({ref:this.handleNode},u),a)},t}(c.Component);function v(e){void 0===e&&(e={});var t=Object(c.useState)(null),r=t[0],n=t[1],o=Object(c.useState)({inView:!1,entry:void 0}),i=o[0],a=o[1];return Object(c.useEffect)(function(){if(r)return g(r,function(t,n){a({inView:t,entry:n}),t&&e.triggerOnce&&y(r)},e),function(){y(r)}},[r,e.threshold,e.root,e.rootMargin,e.triggerOnce]),Object(c.useDebugValue)(i.inView),[n,i.inView,i.entry]}s(m,"displayName","InView"),s(m,"defaultProps",{threshold:0,triggerOnce:!1})}}]);
//# sourceMappingURL=15-4a4b6f8a51de98acebb7.js.map