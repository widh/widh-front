(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"6CzD":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},D4Fy:function(e,t){const n=[{en:{"\ubc18\uac00\uc6cc\uc694!":"Annyeong!","[[]] \u114d":"[[]] \uff5e wldh.","\ubc18\uac00\uc6cc\uc694! - \u3148\u3147":"Annyeong! - wldh","\uc81c\ubaa9 \uc5c6\uc74c":"Untitled","\uae40\uc9c0\uc624\uc758 \ud648\ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.":"Jio Gim's homepage."}}];e.exports=n.length<=1?n[0]:n},MANR:function(e,t){const n=[{en:{"\uc9c0\uc624":"wldh","\ubc1d\uac8c \ubcf4\uae30":"Bright Mode","\uc5b4\ub461\uac8c \ubcf4\uae30":"Dark Mode"}}];e.exports=n.length<=1?n[0]:n},Mxm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return d}));var r=n("mXGw"),o=n.n(r).a.createElement,c=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=t.match(/\[\[[0-9a-zA-Z_:.]*\]\]/gm),c=0,a=String(t);if(o){for(var i=0;i<o.length;i+=1)if("[[]]"===o[i])a=a.replace(o[i],n[c]),c+=1;else{var l=o[i].substring(2,o[i].length-2),u=Number(l),s=Number.isNaN(u)?l:u;"undefined"!==typeof n[s]&&(a=a.replace(o[i],n[s]))}return r>10?a:e(a,n,r+1)}return a},a={locale:"ko"},i=Object(r.createContext)(a),l=function(e,t){switch(t.type){case"SET_LOCALE":return{locale:t.locale};default:return e}},u=Object(r.createContext)(void 0),s=function(e){var t=e.children,n=Object(r.useReducer)(l,a),c=n[0],s=n[1];return o(u.Provider,{value:s},o(i.Provider,{value:c},t))},d=function(e){var t=Object(r.useContext)(i),n=Object(r.useContext)(u),o=function(e){document.documentElement.lang=e,n({type:"SET_LOCALE",locale:e})},a=function(){return t.locale};return{t:function(n,r){var o=n;return null!==e&&Object.prototype.hasOwnProperty.call(e,t.locale)?Object.prototype.hasOwnProperty.call(e[t.locale],n)?(o=e[t.locale][n],r&&(o=c(o,r))):console.warn('No appropriate translation for "'.concat(n,'"!')):r&&(o=c(o,r)),o},setLocale:o,getLocale:a,toggleLocale:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t="en"===a()?"ko":"en",n="ko"===t,r=navigator.language.indexOf("ko")>-1;r===n?window.localStorage.removeItem("ssualassuala"):window.localStorage.setItem("ssualassuala",t),o(t),e&&document.activeElement.blur()}}};t.b=d},OyIl:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n("mK0O"),o=n("mXGw"),c=n.n(o).a.createElement;function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={theme:"light",locked:!1},u=Object(o.createContext)(l),s=function(e,t){switch(t.type){case"SET_THEME":return i(i({},e),{},{theme:t.theme});case"SET_LOCK_STATE":return i(i({},e),{},{locked:t.locked});default:return e}},d=Object(o.createContext)(void 0),f=function(e){var t=e.children,n=Object(o.useReducer)(s,l),r=n[0],a=n[1];return c(d.Provider,{value:a},c(u.Provider,{value:r},t))},m=function(){var e=Object(o.useContext)(u),t=Object(o.useContext)(d),n=function(n){e.locked||(document.documentElement.dataset.theme="dark"===n?"dark":"light",document.documentElement.style.setProperty("background-color","dark"===n?"#000000":"#ffffff"),document.documentElement.style.setProperty("color","dark"===n?"#ffffff":"#000000"),t({type:"SET_THEME",theme:n}))},r=function(){return e.theme};return{getTheme:r,setTheme:n,lockTheme:function(){t({type:"SET_LOCK_STATE",locked:!0})},unlockTheme:function(){t({type:"SET_LOCK_STATE",locked:!1})},isThemeLocked:function(){return e.locked},toggleTheme:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t="dark"===r()?"light":"dark",o="dark"===t;o&&window.matchMedia("(prefers-color-scheme: dark)").matches||!o&&window.matchMedia("(prefers-color-scheme: light)").matches?window.localStorage.removeItem("modarkbul"):window.localStorage.setItem("modarkbul",t),n(t),e&&document.activeElement.blur()}}}},YWm1:function(e,t,n){},mK0O:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},nnCw:function(e,t,n){e.exports={footerContainer:"_3R0KCl3",copyrightSection:"xmWGI25",copyrightText:"lVLkPG7",brightnessSection:"P5lQ3V9",localeSection:"_1oMLFO7",controlButton:"AYCPvVg"}},oCSd:function(e,t,n){"use strict";var r=n("6CzD"),o=n("mXGw"),c=n.n(o),a=n("9fEB"),i=n.n(a),l=n("bBV7"),u=n("Mxm4"),s=n("OyIl"),d=n("wGhr"),f={name:"Intenet Explorer Check",checker:function(){return{pass:!window.isIE,fn:f,importance:2e3,infoEn:"Internet Explorer is an old browser, does not support modern web technologies. This page will not be rendered as intended or workproperly.",infoKo:"Internet Explorer\ub294 \ud604\ub300 \uc6f9 \uae30\uc220\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ub0a1\uc740 \ube0c\ub77c\uc6b0\uc800\uc785\ub2c8\ub2e4. \uc774 \ud398\uc774\uc9c0\ub294 Internet Explorer\uc5d0\uc11c \uc628\uc804\ud558\uac8c \ubcf4\uc774\uac70\ub098 \uc791\ub3d9\ud558\uc9c0\uc54a\uc2b5\ub2c8\ub2e4.",linkEn:"https://techcommunity.microsoft.com/t5/windows-it-pro-blog/the-perils-of-using-internet-explorer-as-your-default-browser/ba-p/331732",linkKo:"http://newslabit.hankyung.com/article/201902192484G"}}},m=f,p={name:"CSS.variable",checker:function(){return!(!CSS||!CSS.supports("color","var(--a)"))}},h=(n("YWm1"),n("D4Fy")),b=n.n(h),g=c.a.createElement,v=function(e){var t=e.children,n=e.title,a=e.isMain,f=e.description,h=e.thumbnailURL,v=e.useFavicoff,y=e.classList,w=e.requiredFeatures,O=e.allowCrawling,k=Object(l.useRouter)().pathname,E=Object(u.c)(b.a),j=E.t,C=E.setLocale,S=Object(s.b)(),x=S.getTheme,P=S.setTheme,T=w instanceof Array?Object(r.a)(new Set([m,p].concat(Object(r.a)(w)))):Object(r.a)(new Set([m,p,w]));Object(d.b)(T),Object(o.useEffect)((function(){C("ko"===document.documentElement.lang?"ko":"en"),P("dark"===document.documentElement.dataset.theme?"dark":"light")}),[]);var L=n||j("\uc81c\ubaa9 \uc5c6\uc74c"),A=f||j("\uae40\uc9c0\uc624\uc758 \ud648\ud398\uc774\uc9c0\uc785\ub2c8\ub2e4."),N="dark"===x()?"#2b2b2b":"#ffffff",I=a?j("\ubc18\uac00\uc6cc\uc694!"):j("[[]] \u114d",[L]),M=a?j("\ubc18\uac00\uc6cc\uc694! - \u3148\u3147"):L,_=A,D="".concat("https://www.wldh.org").concat(k),K=h,F=y instanceof Array?y.join(" "):y,B=O?"noimageindex":"noindex,nofollow";return g(c.a.Fragment,null,g(i.a,null,g("meta",{name:"theme-color",content:N}),g("meta",{name:"robots",content:B}),g("meta",{name:"description",content:_}),g("meta",{property:"og:title",content:M}),g("meta",{property:"og:url",content:D}),g("meta",{property:"og:image",content:K}),g("meta",{property:"og:description",content:_}),g("title",null,I),g("link",{href:v?"/favicoff.ico":"/favicon.ico",rel:"shortcut icon"})),g("div",{className:F},t))};v.defaultProps={title:void 0,description:void 0,isMain:!1,thumbnailURL:"/images/banner-index.png",useFavicoff:!1,classList:void 0,requiredFeatures:void 0,allowCrawling:!0,children:void 0};t.a=v},w0O1:function(e,t,n){"use strict";var r=n("mXGw"),o=n.n(r),c=n("Mxm4"),a=n("OyIl"),i=n("MANR"),l=n.n(i),u=n("nnCw"),s=n.n(u),d=o.a.createElement,f=function(e){var t=e.useBrightnessModeControl,n=e.useLocaleControl,r=e.children,o=e.className,i=Object(c.c)(l.a),u=i.t,f=i.getLocale,m=i.toggleLocale,p=Object(a.b)(),h=p.getTheme,b=p.toggleTheme,g=[s.a.footerContainer];return o&&(o instanceof Array?g=g.concat(o):g.push(o)),d("footer",{className:g.join(" ")},d("section",{className:s.a.copyrightSection},d("span",{className:s.a.copyrightText},"\xa9 2020 ".concat(u("\uc9c0\uc624"),"."))),t&&d("section",{className:s.a.brightnessSection},d("button",{className:s.a.controlButton,type:"button",onClick:function(){b()}},d("span",null,u("dark"===h()?"\ubc1d\uac8c \ubcf4\uae30":"\uc5b4\ub461\uac8c \ubcf4\uae30")))),n&&d("section",{className:s.a.localeSection},d("button",{className:s.a.controlButton,type:"button",onClick:function(){m()}},d("span",null,"en"===f()?"\ud55c\uad6d\uc5b4":"English"))),r)};f.defaultProps={useBrightnessModeControl:!1,useLocaleControl:!0,children:void 0,className:void 0},t.a=f},wGhr:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var r=n("6CzD"),o=n("mK0O"),c=n("mXGw"),a=n.n(c).a.createElement;function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={checked:[]},s=Object(c.createContext)(u),d=function(e,t){switch(t.type){case"CHECK_FEATURE":return l(l({},e),{},{checked:e.checked.concat(t.checkedFn)});default:return e}},f=Object(c.createContext)(void 0),m=function(e){var t=e.children,n=Object(c.useReducer)(d,u),r=n[0],o=n[1];return a(f.Provider,{value:o},a(s.Provider,{value:r},t))},p={checked:[]},h=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[],o=!0;if(e){var c=function(e){for(var t=!1,n=0;n<p.checked.length;n+=1)p.checked[n].fn.name===e&&(t=!0);return t},a=[];if(e instanceof Array)for(var i=0;i<e.length;i+=1)c(e[i].name)||a.push(e[i]);else c(e.name)||a.push(e);for(var l=0,u="\uc774 \uc6f9 \ube0c\ub77c\uc6b0\uc800\ub294 \uc6f9 \ud45c\uc900\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0, \uc774 \ud398\uc774\uc9c0\ub294 \uc774 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc628\uc804\ud558\uac8c \ubcf4\uc774\uac70\ub098 \uc791\ub3d9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",s="This browser does not support the web standard, so this page will not be rendered or not work properly on this browser.",d="https://browser-update.org/update.html",f="https://browser-update.org/update.html",m=0;m<a.length;m+=1){var h=null;try{h=a[m].checker()}catch(T){h=!1}"object"===typeof h?(n.push(h),o=o&&h.pass,h.importance>l&&(u=h.infoKo,s=h.infoEn,d=h.linkKo,f=h.linkEn,l=h.importance)):n.push({pass:h,importance:0,fn:a[m],infoEn:"A test(".concat(m,": ").concat(a[m].name,") failed."),infoKo:"\ud14c\uc2a4\ud2b8(".concat(m,": ").concat(a[m].name,")\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),linkEn:null,linkKo:null})}if(p.checked=[].concat(n,Object(r.a)(p.checked)),a.length>0){console.groupCollapsed("Feature Check Log (".concat(o?"passed":"failed",")"));for(var b=0;b<n.length;b+=1)console.log(n[b]);console.groupEnd()}if(!o&&t){var g=document.getElementById("feature-alert-form"),v=document.getElementById("feature-alert-style");if(null===g){var y=document.createElement("em");y.classList.add("i18n-ko"),y.textContent=u;var w=document.createElement("em");w.classList.add("i18n-en"),w.textContent=s;var O=document.createElement("div");O.className="feature-alert-text",O.appendChild(y),O.appendChild(w);var k=document.createElement("div");if(k.appendChild(O),null!==d||null!==f){var E=document.createElement("button");E.classList.add("i18n-ko"),E.textContent="\ub354 \uc54c\uc544\ubcf4\uae30",E.onclick=function(){window.location.href=d};var j=document.createElement("button");j.classList.add("i18n-en"),j.textContent="Learn More",j.onclick=function(){window.location.href=f};var C=document.createElement("div");C.className="feature-alert-buttons",C.appendChild(E),C.appendChild(j),k.appendChild(C)}var S=document.createElement("div");S.id="feature-alert-form",S.appendChild(k),document.body.insertBefore(S,document.body.firstChild)}if(null===v){var x=document.createElement("link");x.id="feature-alert-style",x.href="/styles/feature-alert.min.css",x.rel="stylesheet",document.head.appendChild(x)}}}var P=function(){};return{isPassed:o,results:n,saveFCResult:P}}}}]);