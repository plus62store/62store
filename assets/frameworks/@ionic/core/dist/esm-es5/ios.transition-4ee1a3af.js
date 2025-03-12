/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{c as createAnimation}from"./animation-eab5a4ca.js";import{g as getIonPageElement}from"./index-3ad7f18b.js";import"./index-a5d50daf.js";import"./ionic-global-c81d82ab.js";import"./index-28849c61.js";import"./index-9b0d46f4.js";import"./helpers-da915de8.js";var DURATION=540;var getClonedElement=function(a){return document.querySelector("".concat(a,".ion-cloned-element"))};var shadow=function(a){return a.shadowRoot||a};var getLargeTitle=function(a){var t=a.tagName==="ION-TABS"?a:a.querySelector("ion-tabs");var r="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(t!=null){var n=t.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return n!=null?n.querySelector(r):null}return a.querySelector(r)};var getBackButton=function(a,t){var r=a.tagName==="ION-TABS"?a:a.querySelector("ion-tabs");var n=[];if(r!=null){var o=r.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");if(o!=null){n=o.querySelectorAll("ion-buttons")}}else{n=a.querySelectorAll("ion-buttons")}for(var e=0,i=n;e<i.length;e++){var s=i[e];var l=s.closest("ion-header");var v=l&&!l.classList.contains("header-collapse-condense-inactive");var c=s.querySelector("ion-back-button");var f=s.classList.contains("buttons-collapse");var d=s.slot==="start"||s.slot==="";if(c!==null&&d&&(f&&v&&t||!f)){return c}}return null};var createLargeTitleTransition=function(a,t,r,n,o){var e=getBackButton(n,r);var i=getLargeTitle(o);var s=getLargeTitle(n);var l=getBackButton(o,r);var v=e!==null&&i!==null&&!r;var c=s!==null&&l!==null&&r;if(v){var f=i.getBoundingClientRect();var d=e.getBoundingClientRect();var p=shadow(e).querySelector(".button-text");var m=p===null||p===void 0?void 0:p.getBoundingClientRect();var u=shadow(i).querySelector(".toolbar-title");var b=u.getBoundingClientRect();animateLargeTitle(a,t,r,i,f,b,d,p,m);animateBackButton(a,t,r,e,d,p,m,i,b)}else if(c){var g=s.getBoundingClientRect();var h=l.getBoundingClientRect();var A=shadow(l).querySelector(".button-text");var y=A===null||A===void 0?void 0:A.getBoundingClientRect();var X=shadow(s).querySelector(".toolbar-title");var x=X.getBoundingClientRect();animateLargeTitle(a,t,r,s,g,x,h,A,y);animateBackButton(a,t,r,l,h,A,y,s,x)}return{forward:v,backward:c}};var animateBackButton=function(a,t,r,n,o,e,i,s,l){var v;var c,f;var d=t?"calc(100% - ".concat(o.right+4,"px)"):"".concat(o.left-4,"px");var p=t?"right":"left";var m=t?"left":"right";var u=t?"right":"left";var b=1;var g=1;var h="scale(".concat(g,")");var A="scale(1)";if(e&&i){var y=((c=e.textContent)===null||c===void 0?void 0:c.trim())===((f=s.textContent)===null||f===void 0?void 0:f.trim());b=l.width/i.width;g=(l.height-LARGE_TITLE_SIZE_OFFSET)/i.height;h=y?"scale(".concat(b,", ").concat(g,")"):"scale(".concat(g,")")}var X=shadow(n).querySelector("ion-icon");var x=X.getBoundingClientRect();var T=t?"".concat(x.width/2-(x.right-o.right),"px"):"".concat(o.left-x.width/2,"px");var w=t?"-".concat(window.innerWidth-o.right,"px"):"".concat(o.left,"px");var k="".concat(l.top,"px");var E="".concat(o.top,"px");var B=[{offset:0,transform:"translate3d(".concat(T,", ").concat(k,", 0)")},{offset:1,transform:"translate3d(".concat(w,", ").concat(E,", 0)")}];var L=[{offset:0,transform:"translate3d(".concat(w,", ").concat(E,", 0)")},{offset:1,transform:"translate3d(".concat(T,", ").concat(k,", 0)")}];var I=r?L:B;var _=[{offset:0,opacity:0,transform:h},{offset:1,opacity:1,transform:A}];var S=[{offset:0,opacity:1,transform:A},{offset:1,opacity:0,transform:h}];var j=r?S:_;var O=[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}];var F=[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}];var R=r?F:O;var N=createAnimation();var C=createAnimation();var G=createAnimation();var Z=getClonedElement("ion-back-button");var D=shadow(Z).querySelector(".button-text");var P=shadow(Z).querySelector("ion-icon");Z.text=n.text;Z.mode=n.mode;Z.icon=n.icon;Z.color=n.color;Z.disabled=n.disabled;Z.style.setProperty("display","block");Z.style.setProperty("position","fixed");C.addElement(P);N.addElement(D);G.addElement(Z);G.beforeStyles((v={position:"absolute",top:"0px"},v[u]="0px",v)).beforeAddWrite((function(){n.style.setProperty("display","none");Z.style.setProperty(p,d)})).afterAddWrite((function(){n.style.setProperty("display","");Z.style.setProperty("display","none");Z.style.removeProperty(p)})).keyframes(I);N.beforeStyles({"transform-origin":"".concat(p," top")}).keyframes(j);C.beforeStyles({"transform-origin":"".concat(m," center")}).keyframes(R);a.addAnimation([N,C,G])};var animateLargeTitle=function(a,t,r,n,o,e,i,s,l){var v;var c,f;var d=t?"right":"left";var p=t?"calc(100% - ".concat(o.right,"px)"):"".concat(o.left,"px");var m="0px";var u="".concat(o.top,"px");var b=8;var g=t?"-".concat(window.innerWidth-i.right-b,"px"):"".concat(i.x+b,"px");var h=.5;var A="scale(1)";var y="scale(".concat(h,")");if(s&&l){g=t?"-".concat(window.innerWidth-l.right-b,"px"):"".concat(l.x-b,"px");var X=((c=s.textContent)===null||c===void 0?void 0:c.trim())===((f=n.textContent)===null||f===void 0?void 0:f.trim());var x=l.width/e.width;h=l.height/(e.height-LARGE_TITLE_SIZE_OFFSET);y=X?"scale(".concat(x,", ").concat(h,")"):"scale(".concat(h,")")}var T=i.top+i.height/2;var w=o.height*h/2;var k="".concat(T-w,"px");var E=[{offset:0,opacity:0,transform:"translate3d(".concat(g,", ").concat(k,", 0) ").concat(y)},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(".concat(m,", ").concat(u,", 0) ").concat(A)}];var B=[{offset:0,opacity:.99,transform:"translate3d(".concat(m,", ").concat(u,", 0) ").concat(A)},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(g,", ").concat(k,", 0) ").concat(y)}];var L=r?E:B;var I=getClonedElement("ion-title");var _=createAnimation();I.innerText=n.innerText;I.size=n.size;I.color=n.color;_.addElement(I);_.beforeStyles((v={"transform-origin":"".concat(d," top"),height:"".concat(o.height,"px"),display:"",position:"relative"},v[d]=p,v)).beforeAddWrite((function(){n.style.setProperty("opacity","0")})).afterAddWrite((function(){n.style.setProperty("opacity","");I.style.setProperty("display","none")})).keyframes(L);a.addAnimation(_)};var iosTransitionAnimation=function(a,t){var r;try{var n="cubic-bezier(0.32,0.72,0,1)";var o="opacity";var e="transform";var i="0%";var s=.8;var l=a.ownerDocument.dir==="rtl";var v=l?"-99.5%":"99.5%";var c=l?"33%":"-33%";var f=t.enteringEl;var d=t.leavingEl;var p=t.direction==="back";var m=f.querySelector(":scope > ion-content");var u=f.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");var b=f.querySelectorAll(":scope > ion-header > ion-toolbar");var g=createAnimation();var h=createAnimation();g.addElement(f).duration(((r=t.duration)!==null&&r!==void 0?r:0)||DURATION).easing(t.easing||n).fill("both").beforeRemoveClass("ion-page-invisible");if(d&&a!==null&&a!==undefined){var A=createAnimation();A.addElement(a);g.addAnimation(A)}if(!m&&b.length===0&&u.length===0){h.addElement(f.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"))}else{h.addElement(m);h.addElement(u)}g.addAnimation(h);if(p){h.beforeClearStyles([o]).fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(i,")")).fromTo(o,s,1)}else{h.beforeClearStyles([o]).fromTo("transform","translateX(".concat(v,")"),"translateX(".concat(i,")"))}if(m){var y=shadow(m).querySelector(".transition-effect");if(y){var X=y.querySelector(".transition-cover");var x=y.querySelector(".transition-shadow");var T=createAnimation();var w=createAnimation();var k=createAnimation();T.addElement(y).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""});w.addElement(X).beforeClearStyles([o]).fromTo(o,0,.1);k.addElement(x).beforeClearStyles([o]).fromTo(o,.03,.7);T.addAnimation([w,k]);h.addAnimation([T])}}var E=f.querySelector("ion-header.header-collapse-condense");var B=createLargeTitleTransition(g,l,p,f,d),L=B.forward,I=B.backward;b.forEach((function(a){var t=createAnimation();t.addElement(a);g.addAnimation(t);var r=createAnimation();r.addElement(a.querySelector("ion-title"));var n=createAnimation();var e=Array.from(a.querySelectorAll("ion-buttons,[menuToggle]"));var s=a.closest("ion-header");var f=s===null||s===void 0?void 0:s.classList.contains("header-collapse-condense-inactive");var d;if(p){d=e.filter((function(a){var t=a.classList.contains("buttons-collapse");return t&&!f||!t}))}else{d=e.filter((function(a){return!a.classList.contains("buttons-collapse")}))}n.addElement(d);var m=createAnimation();m.addElement(a.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var u=createAnimation();u.addElement(shadow(a).querySelector(".toolbar-background"));var b=createAnimation();var h=a.querySelector("ion-back-button");if(h){b.addElement(h)}t.addAnimation([r,n,m,u,b]);n.fromTo(o,.01,1);m.fromTo(o,.01,1);if(p){if(!f){r.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(i,")")).fromTo(o,.01,1)}m.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(i,")"));b.fromTo(o,.01,1)}else{if(!E){r.fromTo("transform","translateX(".concat(v,")"),"translateX(".concat(i,")")).fromTo(o,.01,1)}m.fromTo("transform","translateX(".concat(v,")"),"translateX(".concat(i,")"));u.beforeClearStyles([o,"transform"]);var A=s===null||s===void 0?void 0:s.translucent;if(!A){u.fromTo(o,.01,"var(--opacity)")}else{u.fromTo("transform",l?"translateX(-100%)":"translateX(100%)","translateX(0px)")}if(!L){b.fromTo(o,.01,1)}if(h&&!L){var y=createAnimation();y.addElement(shadow(h).querySelector(".button-text")).fromTo("transform",l?"translateX(-100px)":"translateX(100px)","translateX(0px)");t.addAnimation(y)}}}));if(d){var _=createAnimation();var S=d.querySelector(":scope > ion-content");var j=d.querySelectorAll(":scope > ion-header > ion-toolbar");var O=d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(!S&&j.length===0&&O.length===0){_.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"))}else{_.addElement(S);_.addElement(O)}g.addAnimation(_);if(p){_.beforeClearStyles([o]).fromTo("transform","translateX(".concat(i,")"),l?"translateX(-100%)":"translateX(100%)");var F=getIonPageElement(d);g.afterAddWrite((function(){if(g.getDirection()==="normal"){F.style.setProperty("display","none")}}))}else{_.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat(c,")")).fromTo(o,1,s)}if(S){var R=shadow(S).querySelector(".transition-effect");if(R){var N=R.querySelector(".transition-cover");var C=R.querySelector(".transition-shadow");var G=createAnimation();var Z=createAnimation();var D=createAnimation();G.addElement(R).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""});Z.addElement(N).beforeClearStyles([o]).fromTo(o,.1,0);D.addElement(C).beforeClearStyles([o]).fromTo(o,.7,.03);G.addAnimation([Z,D]);_.addAnimation([G])}}j.forEach((function(a){var t=createAnimation();t.addElement(a);var r=createAnimation();r.addElement(a.querySelector("ion-title"));var n=createAnimation();var s=a.querySelectorAll("ion-buttons,[menuToggle]");var v=a.closest("ion-header");var f=v===null||v===void 0?void 0:v.classList.contains("header-collapse-condense-inactive");var d=Array.from(s).filter((function(a){var t=a.classList.contains("buttons-collapse");return t&&!f||!t}));n.addElement(d);var m=createAnimation();var u=a.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");if(u.length>0){m.addElement(u)}var b=createAnimation();b.addElement(shadow(a).querySelector(".toolbar-background"));var h=createAnimation();var A=a.querySelector("ion-back-button");if(A){h.addElement(A)}t.addAnimation([r,n,m,h,b]);g.addAnimation(t);h.fromTo(o,.99,0);n.fromTo(o,.99,0);m.fromTo(o,.99,0);if(p){if(!f){r.fromTo("transform","translateX(".concat(i,")"),l?"translateX(-100%)":"translateX(100%)").fromTo(o,.99,0)}m.fromTo("transform","translateX(".concat(i,")"),l?"translateX(-100%)":"translateX(100%)");b.beforeClearStyles([o,"transform"]);var y=v===null||v===void 0?void 0:v.translucent;if(!y){b.fromTo(o,"var(--opacity)",0)}else{b.fromTo("transform","translateX(0px)",l?"translateX(-100%)":"translateX(100%)")}if(A&&!I){var X=createAnimation();X.addElement(shadow(A).querySelector(".button-text")).fromTo("transform","translateX(".concat(i,")"),"translateX(".concat((l?-124:124)+"px",")"));t.addAnimation(X)}}else{if(!f){r.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat(c,")")).fromTo(o,.99,0).afterClearStyles([e,o])}m.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat(c,")")).afterClearStyles([e,o]);h.afterClearStyles([o]);r.afterClearStyles([o]);n.afterClearStyles([o])}}))}return g}catch(a){throw a}};var LARGE_TITLE_SIZE_OFFSET=10;export{iosTransitionAnimation,shadow};