var __awaiter=this&&this.__awaiter||function(i,n,t,e){function o(i){return i instanceof t?i:new t((function(n){n(i)}))}return new(t||(t=Promise))((function(t,a){function r(i){try{c(e.next(i))}catch(i){a(i)}}function s(i){try{c(e["throw"](i))}catch(i){a(i)}}function c(i){i.done?t(i.value):o(i.value).then(r,s)}c((e=e.apply(i,n||[])).next())}))};var __generator=this&&this.__generator||function(i,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},e,o,a,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(i){return function(n){return c([i,n])}}function c(s){if(e)throw new TypeError("Generator is already executing.");while(r&&(r=0,s[0]&&(t=0)),t)try{if(e=1,o&&(a=s[0]&2?o["return"]:s[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,s[1])).done)return a;if(o=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;o=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){t.label=s[1];break}if(s[0]===6&&t.label<a[1]){t.label=a[1];a=s;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(s);break}if(a[2])t.ops.pop();t.trys.pop();continue}s=n.call(i,t)}catch(i){s=[6,i];o=0}finally{e=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-25180df3.system.js","./p-f233f1e0.system.js","./p-3ad285e3.system.js","./p-4f255d5a.system.js","./p-0aa833fb.system.js","./p-4609d030.system.js","./p-a69b9fc5.system.js","./p-9146695e.system.js","./p-792919fd.system.js","./p-9f3008d4.system.js","./p-8635f5e6.system.js","./p-20d469d0.system.js","./p-ff4b7e40.system.js"],(function(i){"use strict";var n,t,e,o,a,r,s,c,d,l,f,h,u,p,g,m,b,v,y,x,w;return{setters:[function(i){n=i.r;t=i.d;e=i.h;o=i.f;a=i.i},function(i){r=i.E;s=i.a},function(i){c=i.r},function(i){d=i.c},function(i){l=i.d;f=i.e;h=i.B;u=i.j;p=i.k;g=i.f;m=i.g;b=i.h},function(i){v=i.g},function(i){y=i.c;x=i.b},function(i){w=i.c},function(){},function(){},function(){},function(){},function(){}],execute:function(){var k=function(i){var n=w();var t=w();var e=w();t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])};var j=function(i){var n=w();var t=w();var e=w();t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])};var _=function(i){var n=w();var t=w();var e=w();t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])};var z=function(i){var n=w();var t=w();var e=w();t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])};var D=".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}";var L=D;var O=".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #0054e9);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}";var T=O;var P=i("ion_loading",function(){function i(i){var e=this;n(this,i);this.didPresent=t(this,"ionLoadingDidPresent",7);this.willPresent=t(this,"ionLoadingWillPresent",7);this.willDismiss=t(this,"ionLoadingWillDismiss",7);this.didDismiss=t(this,"ionLoadingDidDismiss",7);this.didPresentShorthand=t(this,"didPresent",7);this.willPresentShorthand=t(this,"willPresent",7);this.willDismissShorthand=t(this,"willDismiss",7);this.didDismissShorthand=t(this,"didDismiss",7);this.delegateController=l(this);this.lockController=d();this.triggerController=f();this.customHTMLEnabled=y.get("innerHTMLTemplatesEnabled",r);this.presented=false;this.onBackdropTap=function(){e.dismiss(undefined,h)};this.overlayIndex=undefined;this.delegate=undefined;this.hasController=false;this.keyboardClose=true;this.enterAnimation=undefined;this.leaveAnimation=undefined;this.message=undefined;this.cssClass=undefined;this.duration=0;this.backdropDismiss=false;this.showBackdrop=true;this.spinner=undefined;this.translucent=false;this.animated=true;this.htmlAttributes=undefined;this.isOpen=false;this.trigger=undefined}i.prototype.onIsOpenChange=function(i,n){if(i===true&&n===false){this.present()}else if(i===false&&n===true){this.dismiss()}};i.prototype.triggerChanged=function(){var i=this,n=i.trigger,t=i.el,e=i.triggerController;if(n){e.addClickListener(t,n)}};i.prototype.connectedCallback=function(){u(this.el);this.triggerChanged()};i.prototype.componentWillLoad=function(){var i;if(this.spinner===undefined){var n=x(this);this.spinner=y.get("loadingSpinner",y.get("spinner",n==="ios"?"lines":"crescent"))}if(!((i=this.htmlAttributes)===null||i===void 0?void 0:i.id)){p(this.el)}};i.prototype.componentDidLoad=function(){var i=this;if(this.isOpen===true){c((function(){return i.present()}))}this.triggerChanged()};i.prototype.disconnectedCallback=function(){this.triggerController.removeClickListener()};i.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var i;var n=this;return __generator(this,(function(t){switch(t.label){case 0:return[4,this.lockController.lock()];case 1:i=t.sent();return[4,this.delegateController.attachViewToDom()];case 2:t.sent();return[4,g(this,"loadingEnter",k,_)];case 3:t.sent();if(this.duration>0){this.durationTimeout=setTimeout((function(){return n.dismiss()}),this.duration+10)}i();return[2]}}))}))};i.prototype.dismiss=function(i,n){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(o){switch(o.label){case 0:return[4,this.lockController.lock()];case 1:t=o.sent();if(this.durationTimeout){clearTimeout(this.durationTimeout)}return[4,m(this,i,n,"loadingLeave",j,z)];case 2:e=o.sent();if(e){this.delegateController.removeViewFromDom()}t();return[2,e]}}))}))};i.prototype.onDidDismiss=function(){return b(this.el,"ionLoadingDidDismiss")};i.prototype.onWillDismiss=function(){return b(this.el,"ionLoadingWillDismiss")};i.prototype.renderLoadingMessage=function(i){var n=this,t=n.customHTMLEnabled,o=n.message;if(t){return e("div",{class:"loading-content",id:i,innerHTML:s(o)})}return e("div",{class:"loading-content",id:i},o)};i.prototype.render=function(){var i;var n=this,t=n.message,a=n.spinner,r=n.htmlAttributes,s=n.overlayIndex;var c=x(this);var d="loading-".concat(s,"-msg");var l=t!==undefined?d:null;return e(o,Object.assign({key:"d97f536b7f443ea19a2bbf2dcbc7f546b8e0a092",role:"dialog","aria-modal":"true","aria-labelledby":l,tabindex:"-1"},r,{style:{zIndex:"".concat(4e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},v(this.cssClass)),(i={},i[c]=true,i["overlay-hidden"]=true,i["loading-translucent"]=this.translucent,i))}),e("ion-backdrop",{key:"6cd39bd7912fd080ab59d041644054c96d238ea9",visible:this.showBackdrop,tappable:this.backdropDismiss}),e("div",{key:"c14ca5a9308844f11bcb010257e15208a75b39bc",tabindex:"0","aria-hidden":"true"}),e("div",{key:"118bceefa8e1cf8b225a858f224e6d919cf03c26",class:"loading-wrapper ion-overlay-wrapper"},a&&e("div",{key:"490d6e8ae4433835fe273162d7b90deab944fb39",class:"loading-spinner"},e("ion-spinner",{key:"c5cf6549c43df4cb23814b3e62ec4d9e7ea2b64f",name:a,"aria-hidden":"true"})),t!==undefined&&this.renderLoadingMessage(d)),e("div",{key:"2b888362122d3b66b0492d53b0c21bd6a2a97501",tabindex:"0","aria-hidden":"true"}))};Object.defineProperty(i.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(i,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}},enumerable:false,configurable:true});return i}());P.style={ios:L,md:T}}}}));