webpackJsonp([0x67ef26645b2a,60335399758886],{64:function(t,e){t.exports={data:{allMarkdownRemark:{totalCount:3,edges:[{node:{id:"/Users/zachkrall/Dev/krall-gatsby/src/pages/art/voice/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Untitled Sound Piece (First Draft)",date:"2017"},fields:{slug:"/art/voice/"},excerpt:""}},{node:{id:"/Users/zachkrall/Dev/krall-gatsby/src/pages/art/bandwidth/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Bandwidth (Unique Forms of Continuity)",date:"2016"},fields:{slug:"/art/bandwidth/"},excerpt:""}},{node:{id:"/Users/zachkrall/Dev/krall-gatsby/src/pages/art/none-all-of-these-people-are-me/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"None/All of these People are Me",date:"2013"},fields:{slug:"/art/none-all-of-these-people-are-me/"},excerpt:""}}]}},layoutContext:{}}},112:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(1),i=r(a),u=n(115),c=r(u),l=n(64),f=r(l);e.default=function(t){return i.default.createElement(c.default,o({},t,f.default))},t.exports=e.default},189:function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function a(t,e,n){var a,f;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(c(t))return!!c(e)&&(t=i.call(t),e=i.call(e),l(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(a=0;a<t.length;a++)if(t[a]!==e[a])return!1;return!0}try{var s=u(t),p=u(e)}catch(t){return!1}if(s.length!=p.length)return!1;for(s.sort(),p.sort(),a=s.length-1;a>=0;a--)if(s[a]!=p[a])return!1;for(a=s.length-1;a>=0;a--)if(f=s[a],!l(t[f],e[f],n))return!1;return typeof t==typeof e}var i=Array.prototype.slice,u=n(191),c=n(190),l=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:a(t,e,n))}},190:function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},191:function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},198:function(t,e,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}()},236:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(249),a=n(250),i=n(251),u=n(252),c=n(253);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,t.exports=r},237:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(257),a=n(258),i=n(259),u=n(260),c=n(261);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,t.exports=r},238:function(t,e,n){var r=n(101),o=n(66),a=r(o,"Map");t.exports=a},239:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(262),a=n(263),i=n(264),u=n(265),c=n(266);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=c,t.exports=r},65:function(t,e,n){var r=n(66),o=r.Symbol;t.exports=o},240:function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}t.exports=n},36:function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(272);t.exports=r},241:function(t,e,n){function r(t,e){e=o(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[a(e[n++])];return n&&n==r?t:void 0}var o=n(244),a=n(270);t.exports=r},100:function(t,e,n){function r(t){return null==t?void 0===t?c:u:l&&l in Object(t)?a(t):i(t)}var o=n(65),a=n(247),i=n(268),u="[object Null]",c="[object Undefined]",l=o?o.toStringTag:void 0;t.exports=r},242:function(t,e,n){function r(t){if(!i(t)||a(t))return!1;var e=o(t)?T:l;return e.test(u(t))}var o=n(274),a=n(256),i=n(102),u=n(271),c=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,f=Function.prototype,s=Object.prototype,p=f.toString,d=s.hasOwnProperty,T=RegExp("^"+p.call(d).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},243:function(t,e,n){function r(t){if("string"==typeof t)return t;if(i(t))return a(t,r)+"";if(u(t))return f?f.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}var o=n(65),a=n(240),i=n(67),u=n(68),c=1/0,l=o?o.prototype:void 0,f=l?l.toString:void 0;t.exports=r},244:function(t,e,n){function r(t,e){return o(t)?t:a(t,e)?[t]:i(u(t))}var o=n(67),a=n(254),i=n(269),u=n(277);t.exports=r},245:function(t,e,n){var r=n(66),o=r["__core-js_shared__"];t.exports=o},246:function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},37:function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(255);t.exports=r},101:function(t,e,n){function r(t,e){var n=a(t,e);return o(n)?n:void 0}var o=n(242),a=n(248);t.exports=r},247:function(t,e,n){function r(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}var o=n(65),a=Object.prototype,i=a.hasOwnProperty,u=a.toString,c=o?o.toStringTag:void 0;t.exports=r},248:function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},249:function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(38);t.exports=r},250:function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},251:function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===a?void 0:n}return u.call(e,t)?e[t]:void 0}var o=n(38),a="__lodash_hash_undefined__",i=Object.prototype,u=i.hasOwnProperty;t.exports=r},252:function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:i.call(e,t)}var o=n(38),a=Object.prototype,i=a.hasOwnProperty;t.exports=r},253:function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?a:e,this}var o=n(38),a="__lodash_hash_undefined__";t.exports=r},254:function(t,e,n){function r(t,e){if(o(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!a(t))||(u.test(t)||!i.test(t)||null!=e&&t in Object(e))}var o=n(67),a=n(68),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=r},255:function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},256:function(t,e,n){function r(t){return!!a&&a in t}var o=n(245),a=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},257:function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},258:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():i.call(e,n,1),--this.size,!0}var o=n(36),a=Array.prototype,i=a.splice;t.exports=r},259:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(36);t.exports=r},260:function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(36);t.exports=r},261:function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(36);t.exports=r},262:function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(i||a),string:new o}}var o=n(236),a=n(237),i=n(238);t.exports=r},263:function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(37);t.exports=r},264:function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(37);t.exports=r},265:function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(37);t.exports=r},266:function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(37);t.exports=r},267:function(t,e,n){function r(t){var e=o(t,function(t){return n.size===a&&n.clear(),t}),n=e.cache;return e}var o=n(276),a=500;t.exports=r},38:function(t,e,n){var r=n(101),o=r(Object,"create");t.exports=o},268:function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},66:function(t,e,n){var r=n(246),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},269:function(t,e,n){var r=n(267),o=/^\./,a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,u=r(function(t){var e=[];return o.test(t)&&e.push(""),t.replace(a,function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)}),e});t.exports=u},270:function(t,e,n){function r(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}var o=n(68),a=1/0;t.exports=r},271:function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},272:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},273:function(t,e,n){function r(t,e,n){var r=null==t?void 0:o(t,e);return void 0===r?n:r}var o=n(241);t.exports=r},67:function(t,e){var n=Array.isArray;t.exports=n},274:function(t,e,n){function r(t){if(!a(t))return!1;var e=o(t);return e==u||e==c||e==i||e==l}var o=n(100),a=n(102),i="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",l="[object Proxy]";t.exports=r},102:function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},275:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},68:function(t,e,n){function r(t){return"symbol"==typeof t||a(t)&&o(t)==i}var o=n(100),a=n(275),i="[object Symbol]";t.exports=r},276:function(t,e,n){function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(a);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(r.Cache||o),n}var o=n(239),a="Expected a function";r.Cache=o,t.exports=r},277:function(t,e,n){function r(t){return null==t?"":o(t)}var o=n(243);t.exports=r},283:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.Helmet=void 0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(1),s=r(f),p=n(2),d=r(p),T=n(302),E=r(T),h=n(189),y=r(h),v=n(284),A=n(104),_=function(t){var e,n;return n=e=function(e){function n(){return a(this,n),i(this,e.apply(this,arguments))}return u(n,e),n.prototype.shouldComponentUpdate=function(t){return!(0,y.default)(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case A.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return c({},r,(e={},e[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,a))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,a=t.newChildProps,i=t.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return c({},o,(e={},e[r.type]=i,e.titleAttributes=c({},a),e));case A.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},a)});case A.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},a)})}return c({},o,(n={},n[r.type]=c({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=c({},e);return Object.keys(t).forEach(function(e){var r;n=c({},n,(r={},r[e]=t[e],r))}),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return s.default.Children.forEach(t,function(t){if(t&&t.props){var a=t.props,i=a.children,u=o(a,["children"]),c=(0,v.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(t,i),t.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:i})}}}),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=o(e,["children"]),a=c({},r);return n&&(a=this.mapChildrenToProps(n,a)),s.default.createElement(t,a)},l(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(s.default.Component),e.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=(0,v.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n},m=function(){return null},b=(0,E.default)(v.reducePropsToState,v.handleClientStateChange,v.mapStateOnServer)(m),S=_(b);S.renderStatic=S.rewind,e.Helmet=S,e.default=S},104:function(t,e){e.__esModule=!0;var n=(e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(e.VALID_TAG_NAMES=Object.keys(n).map(function(t){return n[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce(function(t,e){return t[r[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},284:function(t,e,n){(function(t){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(1),u=r(i),c=n(69),l=r(c),f=n(104),s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(t){var e=y(t,f.TAG_NAMES.TITLE),n=y(t,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,function(){return e});var r=y(t,f.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},d=function(t){return y(t,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(t,e){return e.filter(function(e){return"undefined"!=typeof e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return a({},t,e)},{})},E=function(t,e){return e.filter(function(t){return"undefined"!=typeof t[f.TAG_NAMES.BASE]}).map(function(t){return t[f.TAG_NAMES.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(t.indexOf(i)!==-1&&n[i])return e.concat(n)}return e},[])},h=function(t,e,n){var r={};return n.filter(function(e){return!!Array.isArray(e[t])||("undefined"!=typeof e[t]&&S("Helmet: "+t+' should be of type "Array". Instead found type "'+o(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,n){var o={};n.filter(function(t){for(var n=void 0,a=Object.keys(t),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();e.indexOf(c)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||c===f.TAG_PROPERTIES.REL&&"stylesheet"===t[c].toLowerCase()||(n=c),e.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,l.default)({},r[u],o[u]);r[u]=c}return t},[]).reverse()},y=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},v=function(t){return{baseTag:E([f.TAG_PROPERTIES.HREF],t),bodyAttributes:T(f.ATTRIBUTE_NAMES.BODY,t),defer:y(t,f.HELMET_PROPS.DEFER),encode:y(t,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(f.ATTRIBUTE_NAMES.HTML,t),linkTags:h(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],t),metaTags:h(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:h(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:d(t),scriptTags:h(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],t),styleTags:h(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],t),title:p(t),titleAttributes:T(f.ATTRIBUTE_NAMES.TITLE,t)}},A=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){A(e)},0)}}(),_=function(t){return clearTimeout(t)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:t.requestAnimationFrame||A,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_:t.cancelAnimationFrame||_,S=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},g=null,O=function(t){g&&b(g),t.defer?g=m(function(){P(t,function(){g=null})}):(P(t),g=null)},P=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,s=t.styleTags,p=t.title,d=t.titleAttributes;w(f.TAG_NAMES.BODY,r),w(f.TAG_NAMES.HTML,o),M(p,d);var T={baseTag:C(f.TAG_NAMES.BASE,n),linkTags:C(f.TAG_NAMES.LINK,a),metaTags:C(f.TAG_NAMES.META,i),noscriptTags:C(f.TAG_NAMES.NOSCRIPT,u),scriptTags:C(f.TAG_NAMES.SCRIPT,l),styleTags:C(f.TAG_NAMES.STYLE,s)},E={},h={};Object.keys(T).forEach(function(t){var e=T[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(h[t]=T[t].oldTags)}),e&&e(),c(t,E,h)},R=function(t){return Array.isArray(t)?t.join(""):t},M=function(t,e){"undefined"!=typeof t&&document.title!==t&&(document.title=R(t)),w(f.TAG_NAMES.TITLE,e)},w=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(e),u=0;u<i.length;u++){var c=i[u],l=e[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var s=a.indexOf(c);s!==-1&&a.splice(s,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,i.join(","))}},C=function(t,e){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u="undefined"==typeof e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return i=e,n.isEqualNode(t)})?o.splice(i,1):a.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),a.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:a}},x=function(t){return Object.keys(t).reduce(function(e,n){var r="undefined"!=typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},I=function(t,e,n,r){var o=x(n),a=R(e);return o?"<"+t+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+t+">":"<"+t+" "+f.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+t+">"},N=function(t,e,n){return e.reduce(function(e,r){var o=Object.keys(r).filter(function(t){return!(t===f.TAG_PROPERTIES.INNER_HTML||t===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o="undefined"==typeof r[e]?e:e+'="'+s(r[e],n)+'"';return t?t+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=f.SELF_CLOSING_TAGS.indexOf(t)===-1;return e+"<"+t+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+t+">")},"")},L=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[f.REACT_TAG_MAP[n]||n]=t[n],e},e)},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[f.HTML_TAG_MAP[n]||n]=t[n],e},e)},G=function(t,e,n){var r,o=(r={key:e},r[f.HELMET_ATTRIBUTE]=!0,r),a=L(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,a,e)]},k=function(t,e){return e.map(function(e,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach(function(t){var n=f.REACT_TAG_MAP[t]||t;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]}),u.default.createElement(t,o)})},H=function(t,e,n){switch(t){case f.TAG_NAMES.TITLE:return{toComponent:function(){return G(t,e.title,e.titleAttributes,n)},toString:function(){return I(t,e.title,e.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(e)},toString:function(){return x(e)}};default:return{toComponent:function(){return k(t,e)},toString:function(){return N(t,e,n)}}}},U=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,u=t.noscriptTags,c=t.scriptTags,l=t.styleTags,s=t.title,p=void 0===s?"":s,d=t.titleAttributes;return{base:H(f.TAG_NAMES.BASE,e,r),bodyAttributes:H(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(f.ATTRIBUTE_NAMES.HTML,o,r),link:H(f.TAG_NAMES.LINK,a,r),meta:H(f.TAG_NAMES.META,i,r),noscript:H(f.TAG_NAMES.NOSCRIPT,u,r),script:H(f.TAG_NAMES.SCRIPT,c,r),style:H(f.TAG_NAMES.STYLE,l,r),title:H(f.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};e.convertReactPropstoHtmlAttributes=j,e.handleClientStateChange=O,e.mapStateOnServer=U,e.reducePropsToState=v,e.requestAnimationFrame=m,e.warn=S}).call(e,function(){return this}())},302:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(1),c=r(u),l=n(198),f=r(l),s=n(306),p=r(s);t.exports=function(t,e,n){function r(t){return t.displayName||t.name||"Component"}if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function s(){T=t(d.map(function(t){return t.props})),E.canUseDOM?e(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,E=function(t){function e(){return o(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.peek=function(){return T},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=T;return T=void 0,d=[],t},e.prototype.shouldComponentUpdate=function(t){return!(0,p.default)(t,this.props)},e.prototype.componentWillMount=function(){d.push(this),s()},e.prototype.componentDidUpdate=function(){s()},e.prototype.componentWillUnmount=function(){var t=d.indexOf(this);d.splice(t,1),s()},e.prototype.render=function(){return c.default.createElement(l,this.props)},e}(u.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=f.default.canUseDOM,E}}},306:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var f=t[l],s=e[l];if(o=n?n.call(r,f,s,l):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},199:function(t,e){},115:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.query=void 0;var o=n(1),a=r(o),i=n(2),u=r(i),c=n(60),l=r(c),f=n(283),s=r(f),p=n(273);r(p);n(199);var d=function(t){var e=t.children,n=t.data;return a.default.createElement("div",{id:"container"},a.default.createElement(s.default,{title:"Zach Krall",meta:[{name:"description",content:"Zach Krall is a visual artist and creative technologist based in New York City."},{name:"msapplication-config",content:"/assets/browserconfig.xml"},{name:"theme-color",content:"#ffffff"}],link:[{rel:"apple-touch-icon",size:"180x180",href:"/assets/apple-touch-icon.png"},{rel:"icon",type:"image/png",size:"32x32",href:"/assets/favicon-32x32.png"},{rel:"icon",type:"image/png",size:"16x16",href:"/assets/favicon-16x16.png"},{rel:"manifest",href:"/assets/manifest.json"},{rel:"mask-icon",href:"/assets/safari-pinned-tab.svg",color:"#444444"},{rel:"shortcut icon",href:"/assets/favicon.ico"}]}),a.default.createElement("header",null,a.default.createElement("div",{className:"headerWrapper"},a.default.createElement("h1",{itemprop:"name"},a.default.createElement(l.default,{to:"/",style:{border:0}},"Zach Krall")),a.default.createElement("div",null,a.default.createElement(l.default,{to:"/info"},"Information")))),a.default.createElement("div",{id:"content",style:{margin:"0 auto 6rem auto"}},e()),a.default.createElement("div",{id:"navigation"},n.allMarkdownRemark.totalCount," Projects",n.allMarkdownRemark.edges.map(function(t){var e=t.node;return a.default.createElement(l.default,{to:e.fields.slug},"  ",a.default.createElement("div",{key:e.id},e.frontmatter.title,", ",e.frontmatter.date))})),a.default.createElement("footer",null,a.default.createElement("ul",{className:"inline"},a.default.createElement("li",null,a.default.createElement("a",{href:"mailto:zach@zachkrall.com"},"zach@zachkrall.com"))),a.default.createElement("ul",{className:"inline"},a.default.createElement("li",null,a.default.createElement("a",{href:"https://twitter.com/zachkrall"},"Twitter")),a.default.createElement("li",null,a.default.createElement("a",{href:"https://instagram.com/zachkrall"},"Instagram")),a.default.createElement("li",null,a.default.createElement("a",{href:"https://github.com/zachkrall"},"GitHub")),a.default.createElement("li",null,a.default.createElement("a",{href:"https://are.na/zach-krall"},"Are.na")),a.default.createElement("li",null,a.default.createElement("a",{href:"https://keybase.io/zachkrall/"},"Keybase")))))};d.propTypes={children:u.default.func},e.default=d;e.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-a4d34b80796a4fb087ac.js.map