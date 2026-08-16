import{u as yt,r as A,R as mx,a as xa,L as Ip,b as Gp,c as Ie,N as ca,B as Hp}from"./router-vendor-Cki1dBcJ.js";import{r as Yp,a as Qp}from"./react-vendor-DJG_os-6.js";import{a as Vp,c as Dn,V as xe,O as Zp}from"./utils-vendor-CI3JS23F.js";import{X as Ft,M as ux,L as hc,H as Bi,S as dc,a as Zi,P as Rt,A as Fe,b as da,F as at,c as Sx,U as qe,C as rs,d as Kp,e as bt,f as Tt,g as Rs,K as Jp,h as os,i as za,j as Gi,k as Fp,l as ma,m as yc,n as wl,o as Nl,E as Hi,p as jt,q as Sl,r as Wp,Z as Dx,s as Yi,t as dt,B as Xi,u as e0,v as kt,R as Dl,D as cs,w as ks,x as Ma,y as fc,z as Ax,W as t0,G as Qi,I as Vi,T as ua,J as a0,N as xx,O as Bt,Q as vc,V as Ts,Y as bc,_ as gx,$ as Et,a0 as s0,a1 as Cx,a2 as An,a3 as mc,a4 as Ii,a5 as Tx,a6 as Rx,a7 as px,a8 as l0,a9 as n0,aa as hx,ab as i0,ac as r0,ad as o0}from"./ui-vendor-Bbnh8w1n.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))u(j);new MutationObserver(j=>{for(const N of j)if(N.type==="childList")for(const W of N.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&u(W)}).observe(document,{childList:!0,subtree:!0});function p(j){const N={};return j.integrity&&(N.integrity=j.integrity),j.referrerPolicy&&(N.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?N.credentials="include":j.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function u(j){if(j.ep)return;j.ep=!0;const N=p(j);fetch(j.href,N)}})();var uc={exports:{}},wn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function c0(){if(fx)return wn;fx=1;var d=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function p(u,j,N){var W=null;if(N!==void 0&&(W=""+N),j.key!==void 0&&(W=""+j.key),"key"in j){N={};for(var B in j)B!=="key"&&(N[B]=j[B])}else N=j;return j=N.ref,{$$typeof:d,type:u,key:W,ref:j!==void 0?j:null,props:N}}return wn.Fragment=o,wn.jsx=p,wn.jsxs=p,wn}var bx;function d0(){return bx||(bx=1,uc.exports=c0()),uc.exports}var e=d0(),xc={exports:{}},Sn={},gc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx;function m0(){return yx||(yx=1,function(d){function o(x,h){var Y=x.length;x.push(h);e:for(;0<Y;){var S=Y-1>>>1,f=x[S];if(0<j(f,h))x[S]=h,x[Y]=f,Y=S;else break e}}function p(x){return x.length===0?null:x[0]}function u(x){if(x.length===0)return null;var h=x[0],Y=x.pop();if(Y!==h){x[0]=Y;e:for(var S=0,f=x.length,G=f>>>1;S<G;){var K=2*(S+1)-1,re=x[K],me=K+1,oe=x[me];if(0>j(re,Y))me<f&&0>j(oe,re)?(x[S]=oe,x[me]=Y,S=me):(x[S]=re,x[K]=Y,S=K);else if(me<f&&0>j(oe,Y))x[S]=oe,x[me]=Y,S=me;else break e}}return h}function j(x,h){var Y=x.sortIndex-h.sortIndex;return Y!==0?Y:x.id-h.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var N=performance;d.unstable_now=function(){return N.now()}}else{var W=Date,B=W.now();d.unstable_now=function(){return W.now()-B}}var H=[],R=[],V=1,b=null,E=3,v=!1,ne=!1,w=!1,ae=!1,Q=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function Z(x){for(var h=p(R);h!==null;){if(h.callback===null)u(R);else if(h.startTime<=x)u(R),h.sortIndex=h.expirationTime,o(H,h);else break;h=p(R)}}function L(x){if(w=!1,Z(x),!ne)if(p(H)!==null)ne=!0,U||(U=!0,k());else{var h=p(R);h!==null&&I(L,h.startTime-x)}}var U=!1,$=-1,J=5,m=-1;function _(){return ae?!0:!(d.unstable_now()-m<J)}function C(){if(ae=!1,U){var x=d.unstable_now();m=x;var h=!0;try{e:{ne=!1,w&&(w=!1,M($),$=-1),v=!0;var Y=E;try{t:{for(Z(x),b=p(H);b!==null&&!(b.expirationTime>x&&_());){var S=b.callback;if(typeof S=="function"){b.callback=null,E=b.priorityLevel;var f=S(b.expirationTime<=x);if(x=d.unstable_now(),typeof f=="function"){b.callback=f,Z(x),h=!0;break t}b===p(H)&&u(H),Z(x)}else u(H);b=p(H)}if(b!==null)h=!0;else{var G=p(R);G!==null&&I(L,G.startTime-x),h=!1}}break e}finally{b=null,E=Y,v=!1}h=void 0}}finally{h?k():U=!1}}}var k;if(typeof z=="function")k=function(){z(C)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,de=F.port2;F.port1.onmessage=C,k=function(){de.postMessage(null)}}else k=function(){Q(C,0)};function I(x,h){$=Q(function(){x(d.unstable_now())},h)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(x){x.callback=null},d.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<x?Math.floor(1e3/x):5},d.unstable_getCurrentPriorityLevel=function(){return E},d.unstable_next=function(x){switch(E){case 1:case 2:case 3:var h=3;break;default:h=E}var Y=E;E=h;try{return x()}finally{E=Y}},d.unstable_requestPaint=function(){ae=!0},d.unstable_runWithPriority=function(x,h){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var Y=E;E=x;try{return h()}finally{E=Y}},d.unstable_scheduleCallback=function(x,h,Y){var S=d.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?S+Y:S):Y=S,x){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return f=Y+f,x={id:V++,callback:h,priorityLevel:x,startTime:Y,expirationTime:f,sortIndex:-1},Y>S?(x.sortIndex=Y,o(R,x),p(H)===null&&x===p(R)&&(w?(M($),$=-1):w=!0,I(L,Y-S))):(x.sortIndex=f,o(H,x),ne||v||(ne=!0,U||(U=!0,k()))),x},d.unstable_shouldYield=_,d.unstable_wrapCallback=function(x){var h=E;return function(){var Y=E;E=h;try{return x.apply(this,arguments)}finally{E=Y}}}}(pc)),pc}var vx;function u0(){return vx||(vx=1,gc.exports=m0()),gc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jx;function x0(){if(jx)return Sn;jx=1;var d=u0(),o=Yp(),p=Qp();function u(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function N(t){var a=t,s=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(s=a.return),t=a.return;while(t)}return a.tag===3?s:null}function W(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function B(t){if(N(t)!==t)throw Error(u(188))}function H(t){var a=t.alternate;if(!a){if(a=N(t),a===null)throw Error(u(188));return a!==t?null:t}for(var s=t,l=a;;){var n=s.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){s=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===s)return B(n),t;if(i===l)return B(n),a;i=i.sibling}throw Error(u(188))}if(s.return!==l.return)s=n,l=i;else{for(var r=!1,c=n.child;c;){if(c===s){r=!0,s=n,l=i;break}if(c===l){r=!0,l=n,s=i;break}c=c.sibling}if(!r){for(c=i.child;c;){if(c===s){r=!0,s=i,l=n;break}if(c===l){r=!0,l=i,s=n;break}c=c.sibling}if(!r)throw Error(u(189))}}if(s.alternate!==l)throw Error(u(190))}if(s.tag!==3)throw Error(u(188));return s.stateNode.current===s?t:a}function R(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=R(t),a!==null)return a;t=t.sibling}return null}var V=Object.assign,b=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),z=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),_=Symbol.for("react.memo_cache_sentinel"),C=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=C&&t[C]||t["@@iterator"],typeof t=="function"?t:null)}var F=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===F?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ne:return"Fragment";case ae:return"Profiler";case w:return"StrictMode";case L:return"Suspense";case U:return"SuspenseList";case m:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case v:return"Portal";case z:return(t.displayName||"Context")+".Provider";case M:return(t._context.displayName||"Context")+".Consumer";case Z:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return a=t.displayName||null,a!==null?a:de(t.type)||"Memo";case J:a=t._payload,t=t._init;try{return de(t(a))}catch{}}return null}var I=Array.isArray,x=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,h=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},S=[],f=-1;function G(t){return{current:t}}function K(t){0>f||(t.current=S[f],S[f]=null,f--)}function re(t,a){f++,S[f]=t.current,t.current=a}var me=G(null),oe=G(null),fe=G(null),te=G(null);function g(t,a){switch(re(fe,a),re(oe,t),re(me,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?Lu(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=Lu(a),t=Ou(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(me),re(me,t)}function ce(){K(me),K(oe),K(fe)}function ue(t){t.memoizedState!==null&&re(te,t);var a=me.current,s=Ou(a,t.type);a!==s&&(re(oe,t),re(me,s))}function De(t){oe.current===t&&(K(me),K(oe)),te.current===t&&(K(te),bn._currentValue=Y)}var we=Object.prototype.hasOwnProperty,_e=d.unstable_scheduleCallback,Se=d.unstable_cancelCallback,je=d.unstable_shouldYield,Ms=d.unstable_requestPaint,Xt=d.unstable_now,Ki=d.unstable_getCurrentPriorityLevel,Tn=d.unstable_ImmediatePriority,Rn=d.unstable_UserBlockingPriority,ga=d.unstable_NormalPriority,Ps=d.unstable_LowPriority,kn=d.unstable_IdlePriority,se=d.log,pe=d.unstable_setDisableYieldValue,be=null,Re=null;function He(t){if(typeof se=="function"&&pe(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(be,t)}catch{}}var We=Math.clz32?Math.clz32:Ji,aa=Math.log,Us=Math.LN2;function Ji(t){return t>>>=0,t===0?32:31-(aa(t)/Us|0)|0}var zt=256,ds=4194304;function sa(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $s(t,a,s){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=sa(l):(r&=c,r!==0?n=sa(r):s||(s=c&~t,s!==0&&(n=sa(s))))):(c=l&~i,c!==0?n=sa(c):r!==0?n=sa(r):s||(s=l&~t,s!==0&&(n=sa(s)))),n===0?0:a!==0&&a!==n&&(a&i)===0&&(i=n&-n,s=a&-a,i>=s||i===32&&(s&4194048)!==0)?a:n}function Al(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function kx(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nc(){var t=zt;return zt<<=1,(zt&4194048)===0&&(zt=256),t}function wc(){var t=ds;return ds<<=1,(ds&62914560)===0&&(ds=4194304),t}function Fi(t){for(var a=[],s=0;31>s;s++)a.push(t);return a}function Cl(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ex(t,a,s,l,n,i){var r=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var c=t.entanglements,y=t.expirationTimes,q=t.hiddenUpdates;for(s=r&~s;0<s;){var ee=31-We(s),ie=1<<ee;c[ee]=0,y[ee]=-1;var O=q[ee];if(O!==null)for(q[ee]=null,ee=0;ee<O.length;ee++){var X=O[ee];X!==null&&(X.lane&=-536870913)}s&=~ie}l!==0&&Sc(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(r&~a))}function Sc(t,a,s){t.pendingLanes|=a,t.suspendedLanes&=~a;var l=31-We(a);t.entangledLanes|=a,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function Dc(t,a){var s=t.entangledLanes|=a;for(t=t.entanglements;s;){var l=31-We(s),n=1<<l;n&a|t[l]&a&&(t[l]|=a),s&=~n}}function Wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function er(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ac(){var t=h.p;return t!==0?t:(t=window.event,t===void 0?32:nx(t.type))}function zx(t,a){var s=h.p;try{return h.p=t,a()}finally{h.p=s}}var Pa=Math.random().toString(36).slice(2),pt="__reactFiber$"+Pa,Nt="__reactProps$"+Pa,qs="__reactContainer$"+Pa,tr="__reactEvents$"+Pa,Mx="__reactListeners$"+Pa,Px="__reactHandles$"+Pa,Cc="__reactResources$"+Pa,Tl="__reactMarker$"+Pa;function ar(t){delete t[pt],delete t[Nt],delete t[tr],delete t[Mx],delete t[Px]}function _s(t){var a=t[pt];if(a)return a;for(var s=t.parentNode;s;){if(a=s[qs]||s[pt]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(t=Gu(t);t!==null;){if(s=t[pt])return s;t=Gu(t)}return a}t=s,s=t.parentNode}return null}function Ls(t){if(t=t[pt]||t[qs]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function Rl(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(u(33))}function Os(t){var a=t[Cc];return a||(a=t[Cc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function nt(t){t[Tl]=!0}var Tc=new Set,Rc={};function ms(t,a){Bs(t,a),Bs(t+"Capture",a)}function Bs(t,a){for(Rc[t]=a,t=0;t<a.length;t++)Tc.add(a[t])}var Ux=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kc={},Ec={};function $x(t){return we.call(Ec,t)?!0:we.call(kc,t)?!1:Ux.test(t)?Ec[t]=!0:(kc[t]=!0,!1)}function En(t,a,s){if($x(a))if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+s)}}function zn(t,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+s)}}function pa(t,a,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(a,s,""+l)}}var sr,zc;function Xs(t){if(sr===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);sr=a&&a[1]||"",zc=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sr+t+zc}var lr=!1;function nr(t,a){if(!t||lr)return"";lr=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(X){var O=X}Reflect.construct(t,[],ie)}else{try{ie.call()}catch(X){O=X}t.call(ie.prototype)}}else{try{throw Error()}catch(X){O=X}(ie=t())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(X){if(X&&O&&typeof X.stack=="string")return[X.stack,O.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],c=i[1];if(r&&c){var y=r.split(`
`),q=c.split(`
`);for(n=l=0;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;for(;n<q.length&&!q[n].includes("DetermineComponentFrameRoot");)n++;if(l===y.length||n===q.length)for(l=y.length-1,n=q.length-1;1<=l&&0<=n&&y[l]!==q[n];)n--;for(;1<=l&&0<=n;l--,n--)if(y[l]!==q[n]){if(l!==1||n!==1)do if(l--,n--,0>n||y[l]!==q[n]){var ee=`
`+y[l].replace(" at new "," at ");return t.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",t.displayName)),ee}while(1<=l&&0<=n);break}}}finally{lr=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Xs(s):""}function qx(t){switch(t.tag){case 26:case 27:case 5:return Xs(t.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 15:return nr(t.type,!1);case 11:return nr(t.type.render,!1);case 1:return nr(t.type,!0);case 31:return Xs("Activity");default:return""}}function Mc(t){try{var a="";do a+=qx(t),t=t.return;while(t);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function It(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pc(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function _x(t){var a=Pc(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),l=""+t[a];if(!t.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var n=s.get,i=s.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return n.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(t,a,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Mn(t){t._valueTracker||(t._valueTracker=_x(t))}function Uc(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var s=a.getValue(),l="";return t&&(l=Pc(t)?t.checked?"true":"false":t.value),t=l,t!==s?(a.setValue(t),!0):!1}function Pn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lx=/[\n"\\]/g;function Gt(t){return t.replace(Lx,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ir(t,a,s,l,n,i,r,c){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),a!=null?r==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+It(a)):t.value!==""+It(a)&&(t.value=""+It(a)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),a!=null?rr(t,r,It(a)):s!=null?rr(t,r,It(s)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+It(c):t.removeAttribute("name")}function $c(t,a,s,l,n,i,r,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),a!=null||s!=null){if(!(i!=="submit"&&i!=="reset"||a!=null))return;s=s!=null?""+It(s):"",a=a!=null?""+It(a):s,c||a===t.value||(t.value=a),t.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function rr(t,a,s){a==="number"&&Pn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Is(t,a,s,l){if(t=t.options,a){a={};for(var n=0;n<s.length;n++)a["$"+s[n]]=!0;for(s=0;s<t.length;s++)n=a.hasOwnProperty("$"+t[s].value),t[s].selected!==n&&(t[s].selected=n),n&&l&&(t[s].defaultSelected=!0)}else{for(s=""+It(s),a=null,n=0;n<t.length;n++){if(t[n].value===s){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}a!==null||t[n].disabled||(a=t[n])}a!==null&&(a.selected=!0)}}function qc(t,a,s){if(a!=null&&(a=""+It(a),a!==t.value&&(t.value=a),s==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=s!=null?""+It(s):""}function _c(t,a,s,l){if(a==null){if(l!=null){if(s!=null)throw Error(u(92));if(I(l)){if(1<l.length)throw Error(u(93));l=l[0]}s=l}s==null&&(s=""),a=s}s=It(a),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function Gs(t,a){if(a){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=a;return}}t.textContent=a}var Ox=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lc(t,a,s){var l=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":l?t.setProperty(a,s):typeof s!="number"||s===0||Ox.has(a)?a==="float"?t.cssFloat=s:t[a]=(""+s).trim():t[a]=s+"px"}function Oc(t,a,s){if(a!=null&&typeof a!="object")throw Error(u(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&s[n]!==l&&Lc(t,n,l)}else for(var i in a)a.hasOwnProperty(i)&&Lc(t,i,a[i])}function or(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Un(t){return Xx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var cr=null;function dr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Ys=null;function Bc(t){var a=Ls(t);if(a&&(t=a.stateNode)){var s=t[Nt]||null;e:switch(t=a.stateNode,a.type){case"input":if(ir(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Gt(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var l=s[a];if(l!==t&&l.form===t.form){var n=l[Nt]||null;if(!n)throw Error(u(90));ir(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<s.length;a++)l=s[a],l.form===t.form&&Uc(l)}break e;case"textarea":qc(t,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&Is(t,!!s.multiple,a,!1)}}}var mr=!1;function Xc(t,a,s){if(mr)return t(a,s);mr=!0;try{var l=t(a);return l}finally{if(mr=!1,(Hs!==null||Ys!==null)&&(vi(),Hs&&(a=Hs,t=Ys,Ys=Hs=null,Bc(a),t)))for(a=0;a<t.length;a++)Bc(t[a])}}function kl(t,a){var s=t.stateNode;if(s===null)return null;var l=s[Nt]||null;if(l===null)return null;s=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(u(231,a,typeof s));return s}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ur=!1;if(ha)try{var El={};Object.defineProperty(El,"passive",{get:function(){ur=!0}}),window.addEventListener("test",El,El),window.removeEventListener("test",El,El)}catch{ur=!1}var Ua=null,xr=null,$n=null;function Ic(){if($n)return $n;var t,a=xr,s=a.length,l,n="value"in Ua?Ua.value:Ua.textContent,i=n.length;for(t=0;t<s&&a[t]===n[t];t++);var r=s-t;for(l=1;l<=r&&a[s-l]===n[i-l];l++);return $n=n.slice(t,1<l?1-l:void 0)}function qn(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function _n(){return!0}function Gc(){return!1}function wt(t){function a(s,l,n,i,r){this._reactName=s,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(s=t[c],this[c]=s?s(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_n:Gc,this.isPropagationStopped=Gc,this}return V(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),a}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=wt(us),zl=V({},us,{view:0,detail:0}),Ix=wt(zl),gr,pr,Ml,On=V({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ml&&(Ml&&t.type==="mousemove"?(gr=t.screenX-Ml.screenX,pr=t.screenY-Ml.screenY):pr=gr=0,Ml=t),gr)},movementY:function(t){return"movementY"in t?t.movementY:pr}}),Hc=wt(On),Gx=V({},On,{dataTransfer:0}),Hx=wt(Gx),Yx=V({},zl,{relatedTarget:0}),hr=wt(Yx),Qx=V({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=wt(Qx),Zx=V({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kx=wt(Zx),Jx=V({},us,{data:0}),Yc=wt(Jx),Fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tg(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=eg[t])?!!a[t]:!1}function fr(){return tg}var ag=V({},zl,{key:function(t){if(t.key){var a=Fx[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=qn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(t){return t.type==="keypress"?qn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sg=wt(ag),lg=V({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qc=wt(lg),ng=V({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr}),ig=wt(ng),rg=V({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),og=wt(rg),cg=V({},On,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dg=wt(cg),mg=V({},us,{newState:0,oldState:0}),ug=wt(mg),xg=[9,13,27,32],br=ha&&"CompositionEvent"in window,Pl=null;ha&&"documentMode"in document&&(Pl=document.documentMode);var gg=ha&&"TextEvent"in window&&!Pl,Vc=ha&&(!br||Pl&&8<Pl&&11>=Pl),Zc=" ",Kc=!1;function Jc(t,a){switch(t){case"keyup":return xg.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function pg(t,a){switch(t){case"compositionend":return Fc(a);case"keypress":return a.which!==32?null:(Kc=!0,Zc);case"textInput":return t=a.data,t===Zc&&Kc?null:t;default:return null}}function hg(t,a){if(Qs)return t==="compositionend"||!br&&Jc(t,a)?(t=Ic(),$n=xr=Ua=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Vc&&a.locale!=="ko"?null:a.data;default:return null}}var fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!fg[t.type]:a==="textarea"}function ed(t,a,s,l){Hs?Ys?Ys.push(l):Ys=[l]:Hs=l,a=Ai(a,"onChange"),0<a.length&&(s=new Ln("onChange","change",null,s,l),t.push({event:s,listeners:a}))}var Ul=null,$l=null;function bg(t){Pu(t,0)}function Bn(t){var a=Rl(t);if(Uc(a))return t}function td(t,a){if(t==="change")return a}var ad=!1;if(ha){var yr;if(ha){var vr="oninput"in document;if(!vr){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),vr=typeof sd.oninput=="function"}yr=vr}else yr=!1;ad=yr&&(!document.documentMode||9<document.documentMode)}function ld(){Ul&&(Ul.detachEvent("onpropertychange",nd),$l=Ul=null)}function nd(t){if(t.propertyName==="value"&&Bn($l)){var a=[];ed(a,$l,t,dr(t)),Xc(bg,a)}}function yg(t,a,s){t==="focusin"?(ld(),Ul=a,$l=s,Ul.attachEvent("onpropertychange",nd)):t==="focusout"&&ld()}function vg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bn($l)}function jg(t,a){if(t==="click")return Bn(a)}function Ng(t,a){if(t==="input"||t==="change")return Bn(a)}function wg(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Mt=typeof Object.is=="function"?Object.is:wg;function ql(t,a){if(Mt(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var s=Object.keys(t),l=Object.keys(a);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var n=s[l];if(!we.call(a,n)||!Mt(t[n],a[n]))return!1}return!0}function id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rd(t,a){var s=id(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=a&&l>=a)return{node:s,offset:a-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=id(s)}}function od(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?od(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function cd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Pn(t.document);a instanceof t.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)t=a.contentWindow;else break;a=Pn(t.document)}return a}function jr(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Sg=ha&&"documentMode"in document&&11>=document.documentMode,Vs=null,Nr=null,_l=null,wr=!1;function dd(t,a,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;wr||Vs==null||Vs!==Pn(l)||(l=Vs,"selectionStart"in l&&jr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_l&&ql(_l,l)||(_l=l,l=Ai(Nr,"onSelect"),0<l.length&&(a=new Ln("onSelect","select",null,a,s),t.push({event:a,listeners:l}),a.target=Vs)))}function xs(t,a){var s={};return s[t.toLowerCase()]=a.toLowerCase(),s["Webkit"+t]="webkit"+a,s["Moz"+t]="moz"+a,s}var Zs={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},Sr={},md={};ha&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function gs(t){if(Sr[t])return Sr[t];if(!Zs[t])return t;var a=Zs[t],s;for(s in a)if(a.hasOwnProperty(s)&&s in md)return Sr[t]=a[s];return t}var ud=gs("animationend"),xd=gs("animationiteration"),gd=gs("animationstart"),Dg=gs("transitionrun"),Ag=gs("transitionstart"),Cg=gs("transitioncancel"),pd=gs("transitionend"),hd=new Map,Dr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dr.push("scrollEnd");function Wt(t,a){hd.set(t,a),ms(a,[t])}var fd=new WeakMap;function Ht(t,a){if(typeof t=="object"&&t!==null){var s=fd.get(t);return s!==void 0?s:(a={value:t,source:a,stack:Mc(a)},fd.set(t,a),a)}return{value:t,source:a,stack:Mc(a)}}var Yt=[],Ks=0,Ar=0;function Xn(){for(var t=Ks,a=Ar=Ks=0;a<t;){var s=Yt[a];Yt[a++]=null;var l=Yt[a];Yt[a++]=null;var n=Yt[a];Yt[a++]=null;var i=Yt[a];if(Yt[a++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&bd(s,n,i)}}function In(t,a,s,l){Yt[Ks++]=t,Yt[Ks++]=a,Yt[Ks++]=s,Yt[Ks++]=l,Ar|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Cr(t,a,s,l){return In(t,a,s,l),Gn(t)}function Js(t,a){return In(t,null,null,a),Gn(t)}function bd(t,a,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var n=!1,i=t.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&a!==null&&(n=31-We(s),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[a]:l.push(a),a.lane=s|536870912),i):null}function Gn(t){if(50<dn)throw dn=0,Po=null,Error(u(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Fs={};function Tg(t,a,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,a,s,l){return new Tg(t,a,s,l)}function Tr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,a){var s=t.alternate;return s===null?(s=Pt(t.tag,a,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=a,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,a=t.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function yd(t,a){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,a=s.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Hn(t,a,s,l,n,i){var r=0;if(l=t,typeof t=="function")Tr(t)&&(r=1);else if(typeof t=="string")r=kp(t,s,me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case m:return t=Pt(31,s,a,n),t.elementType=m,t.lanes=i,t;case ne:return ps(s.children,n,i,a);case w:r=8,n|=24;break;case ae:return t=Pt(12,s,a,n|2),t.elementType=ae,t.lanes=i,t;case L:return t=Pt(13,s,a,n),t.elementType=L,t.lanes=i,t;case U:return t=Pt(19,s,a,n),t.elementType=U,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q:case z:r=10;break e;case M:r=9;break e;case Z:r=11;break e;case $:r=14;break e;case J:r=16,l=null;break e}r=29,s=Error(u(130,t===null?"null":typeof t,"")),l=null}return a=Pt(r,s,a,n),a.elementType=t,a.type=l,a.lanes=i,a}function ps(t,a,s,l){return t=Pt(7,t,l,a),t.lanes=s,t}function Rr(t,a,s){return t=Pt(6,t,null,a),t.lanes=s,t}function kr(t,a,s){return a=Pt(4,t.children!==null?t.children:[],t.key,a),a.lanes=s,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Ws=[],el=0,Yn=null,Qn=0,Qt=[],Vt=0,hs=null,ba=1,ya="";function fs(t,a){Ws[el++]=Qn,Ws[el++]=Yn,Yn=t,Qn=a}function vd(t,a,s){Qt[Vt++]=ba,Qt[Vt++]=ya,Qt[Vt++]=hs,hs=t;var l=ba;t=ya;var n=32-We(l)-1;l&=~(1<<n),s+=1;var i=32-We(a)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,ba=1<<32-We(a)+n|s<<n|l,ya=i+t}else ba=1<<i|s<<n|l,ya=t}function Er(t){t.return!==null&&(fs(t,1),vd(t,1,0))}function zr(t){for(;t===Yn;)Yn=Ws[--el],Ws[el]=null,Qn=Ws[--el],Ws[el]=null;for(;t===hs;)hs=Qt[--Vt],Qt[Vt]=null,ya=Qt[--Vt],Qt[Vt]=null,ba=Qt[--Vt],Qt[Vt]=null}var vt=null,Ve=null,Pe=!1,bs=null,la=!1,Mr=Error(u(519));function ys(t){var a=Error(u(418,""));throw Bl(Ht(a,t)),Mr}function jd(t){var a=t.stateNode,s=t.type,l=t.memoizedProps;switch(a[pt]=t,a[Nt]=l,s){case"dialog":Ee("cancel",a),Ee("close",a);break;case"iframe":case"object":case"embed":Ee("load",a);break;case"video":case"audio":for(s=0;s<un.length;s++)Ee(un[s],a);break;case"source":Ee("error",a);break;case"img":case"image":case"link":Ee("error",a),Ee("load",a);break;case"details":Ee("toggle",a);break;case"input":Ee("invalid",a),$c(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Mn(a);break;case"select":Ee("invalid",a);break;case"textarea":Ee("invalid",a),_c(a,l.value,l.defaultValue,l.children),Mn(a)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||l.suppressHydrationWarning===!0||_u(a.textContent,s)?(l.popover!=null&&(Ee("beforetoggle",a),Ee("toggle",a)),l.onScroll!=null&&Ee("scroll",a),l.onScrollEnd!=null&&Ee("scrollend",a),l.onClick!=null&&(a.onclick=Ci),a=!0):a=!1,a||ys(t)}function Nd(t){for(vt=t.return;vt;)switch(vt.tag){case 5:case 13:la=!1;return;case 27:case 3:la=!0;return;default:vt=vt.return}}function Ll(t){if(t!==vt)return!1;if(!Pe)return Nd(t),Pe=!0,!1;var a=t.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Ko(t.type,t.memoizedProps)),s=!s),s&&Ve&&ys(t),Nd(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));e:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(a===0){Ve=ta(t.nextSibling);break e}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;t=t.nextSibling}Ve=null}}else a===27?(a=Ve,Ja(t.type)?(t=ec,ec=null,Ve=t):Ve=a):Ve=vt?ta(t.stateNode.nextSibling):null;return!0}function Ol(){Ve=vt=null,Pe=!1}function wd(){var t=bs;return t!==null&&(At===null?At=t:At.push.apply(At,t),bs=null),t}function Bl(t){bs===null?bs=[t]:bs.push(t)}var Pr=G(null),vs=null,va=null;function $a(t,a,s){re(Pr,a._currentValue),a._currentValue=s}function ja(t){t._currentValue=Pr.current,K(Pr)}function Ur(t,a,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),t===s)break;t=t.return}}function $r(t,a,s,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var y=0;y<a.length;y++)if(c.context===a[y]){i.lanes|=s,c=i.alternate,c!==null&&(c.lanes|=s),Ur(i.return,s,t),l||(r=null);break e}i=c.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(u(341));r.lanes|=s,i=r.alternate,i!==null&&(i.lanes|=s),Ur(r,s,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Xl(t,a,s,l){t=null;for(var n=a,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var c=n.type;Mt(n.pendingProps.value,r.value)||(t!==null?t.push(c):t=[c])}}else if(n===te.current){if(r=n.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(bn):t=[bn])}n=n.return}t!==null&&$r(a,t,s,l),a.flags|=262144}function Vn(t){for(t=t.firstContext;t!==null;){if(!Mt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function js(t){vs=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ht(t){return Sd(vs,t)}function Zn(t,a){return vs===null&&js(t),Sd(t,a)}function Sd(t,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},va===null){if(t===null)throw Error(u(308));va=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else va=va.next=a;return s}var Rg=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){a.aborted=!0,t.forEach(function(s){return s()})}},kg=d.unstable_scheduleCallback,Eg=d.unstable_NormalPriority,st={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qr(){return{controller:new Rg,data:new Map,refCount:0}}function Il(t){t.refCount--,t.refCount===0&&kg(Eg,function(){t.controller.abort()})}var Gl=null,_r=0,tl=0,al=null;function zg(t,a){if(Gl===null){var s=Gl=[];_r=0,tl=Bo(),al={status:"pending",value:void 0,then:function(l){s.push(l)}}}return _r++,a.then(Dd,Dd),a}function Dd(){if(--_r===0&&Gl!==null){al!==null&&(al.status="fulfilled");var t=Gl;Gl=null,tl=0,al=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Mg(t,a){var s=[],l={status:"pending",value:null,reason:null,then:function(n){s.push(n)}};return t.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<s.length;n++)(0,s[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<s.length;n++)(0,s[n])(void 0)}),l}var Ad=x.S;x.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&zg(t,a),Ad!==null&&Ad(t,a)};var Ns=G(null);function Lr(){var t=Ns.current;return t!==null?t:Ge.pooledCache}function Kn(t,a){a===null?re(Ns,Ns.current):re(Ns,a.pool)}function Cd(){var t=Lr();return t===null?null:{parent:st._currentValue,pool:t}}var Hl=Error(u(460)),Td=Error(u(474)),Jn=Error(u(542)),Or={then:function(){}};function Rd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fn(){}function kd(t,a,s){switch(s=t[s],s===void 0?t.push(a):s!==a&&(a.then(Fn,Fn),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,zd(t),t;default:if(typeof a.status=="string")a.then(Fn,Fn);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(u(482));t=a,t.status="pending",t.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,zd(t),t}throw Yl=a,Hl}}var Yl=null;function Ed(){if(Yl===null)throw Error(u(459));var t=Yl;return Yl=null,t}function zd(t){if(t===Hl||t===Jn)throw Error(u(483))}var qa=!1;function Br(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xr(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,a,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=Gn(t),bd(t,null,s),a}return In(t,l,a,s),Gn(t)}function Ql(t,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var l=a.lanes;l&=t.pendingLanes,s|=l,a.lanes=s,Dc(t,s)}}function Ir(t,a){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var n=null,i=null;if(s=s.firstBaseUpdate,s!==null){do{var r={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,s=s.next}while(s!==null);i===null?n=i=a:i=i.next=a}else n=i=a;s={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=a:t.next=a,s.lastBaseUpdate=a}var Gr=!1;function Vl(){if(Gr){var t=al;if(t!==null)throw t}}function Zl(t,a,s,l){Gr=!1;var n=t.updateQueue;qa=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var y=c,q=y.next;y.next=null,r===null?i=q:r.next=q,r=y;var ee=t.alternate;ee!==null&&(ee=ee.updateQueue,c=ee.lastBaseUpdate,c!==r&&(c===null?ee.firstBaseUpdate=q:c.next=q,ee.lastBaseUpdate=y))}if(i!==null){var ie=n.baseState;r=0,ee=q=y=null,c=i;do{var O=c.lane&-536870913,X=O!==c.lane;if(X?(ze&O)===O:(l&O)===O){O!==0&&O===tl&&(Gr=!0),ee!==null&&(ee=ee.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Ne=t,ye=c;O=a;var Be=s;switch(ye.tag){case 1:if(Ne=ye.payload,typeof Ne=="function"){ie=Ne.call(Be,ie,O);break e}ie=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=ye.payload,O=typeof Ne=="function"?Ne.call(Be,ie,O):Ne,O==null)break e;ie=V({},ie,O);break e;case 2:qa=!0}}O=c.callback,O!==null&&(t.flags|=64,X&&(t.flags|=8192),X=n.callbacks,X===null?n.callbacks=[O]:X.push(O))}else X={lane:O,tag:c.tag,payload:c.payload,callback:c.callback,next:null},ee===null?(q=ee=X,y=ie):ee=ee.next=X,r|=O;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;X=c,c=X.next,X.next=null,n.lastBaseUpdate=X,n.shared.pending=null}}while(!0);ee===null&&(y=ie),n.baseState=y,n.firstBaseUpdate=q,n.lastBaseUpdate=ee,i===null&&(n.shared.lanes=0),Qa|=r,t.lanes=r,t.memoizedState=ie}}function Md(t,a){if(typeof t!="function")throw Error(u(191,t));t.call(a)}function Pd(t,a){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Md(s[t],a)}var sl=G(null),Wn=G(0);function Ud(t,a){t=Ta,re(Wn,t),re(sl,a),Ta=t|a.baseLanes}function Hr(){re(Wn,Ta),re(sl,sl.current)}function Yr(){Ta=Wn.current,K(sl),K(Wn)}var Oa=0,Ce=null,Le=null,et=null,ei=!1,ll=!1,ws=!1,ti=0,Kl=0,nl=null,Pg=0;function Ke(){throw Error(u(321))}function Qr(t,a){if(a===null)return!1;for(var s=0;s<a.length&&s<t.length;s++)if(!Mt(t[s],a[s]))return!1;return!0}function Vr(t,a,s,l,n,i){return Oa=i,Ce=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,x.H=t===null||t.memoizedState===null?bm:ym,ws=!1,i=s(l,n),ws=!1,ll&&(i=qd(a,s,l,n)),$d(t),i}function $d(t){x.H=ri;var a=Le!==null&&Le.next!==null;if(Oa=0,et=Le=Ce=null,ei=!1,Kl=0,nl=null,a)throw Error(u(300));t===null||it||(t=t.dependencies,t!==null&&Vn(t)&&(it=!0))}function qd(t,a,s,l){Ce=t;var n=0;do{if(ll&&(nl=null),Kl=0,ll=!1,25<=n)throw Error(u(301));if(n+=1,et=Le=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=Bg,i=a(s,l)}while(ll);return i}function Ug(){var t=x.H,a=t.useState()[0];return a=typeof a.then=="function"?Jl(a):a,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(Ce.flags|=1024),a}function Zr(){var t=ti!==0;return ti=0,t}function Kr(t,a,s){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~s}function Jr(t){if(ei){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}ei=!1}Oa=0,et=Le=Ce=null,ll=!1,Kl=ti=0,nl=null}function St(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ce.memoizedState=et=t:et=et.next=t,et}function tt(){if(Le===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var a=et===null?Ce.memoizedState:et.next;if(a!==null)et=a,Le=t;else{if(t===null)throw Ce.alternate===null?Error(u(467)):Error(u(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},et===null?Ce.memoizedState=et=t:et=et.next=t}return et}function Fr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jl(t){var a=Kl;return Kl+=1,nl===null&&(nl=[]),t=kd(nl,t,a),a=Ce,(et===null?a.memoizedState:et.next)===null&&(a=a.alternate,x.H=a===null||a.memoizedState===null?bm:ym),t}function ai(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jl(t);if(t.$$typeof===z)return ht(t)}throw Error(u(438,String(t)))}function Wr(t){var a=null,s=Ce.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var l=Ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=Fr(),Ce.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(t),l=0;l<t;l++)s[l]=_;return a.index++,s}function Na(t,a){return typeof a=="function"?a(t):a}function si(t){var a=tt();return eo(a,Le,t)}function eo(t,a,s){var l=t.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=s;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}a.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{a=n.next;var c=r=null,y=null,q=a,ee=!1;do{var ie=q.lane&-536870913;if(ie!==q.lane?(ze&ie)===ie:(Oa&ie)===ie){var O=q.revertLane;if(O===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ie===tl&&(ee=!0);else if((Oa&O)===O){q=q.next,O===tl&&(ee=!0);continue}else ie={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},y===null?(c=y=ie,r=i):y=y.next=ie,Ce.lanes|=O,Qa|=O;ie=q.action,ws&&s(i,ie),i=q.hasEagerState?q.eagerState:s(i,ie)}else O={lane:ie,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},y===null?(c=y=O,r=i):y=y.next=O,Ce.lanes|=ie,Qa|=ie;q=q.next}while(q!==null&&q!==a);if(y===null?r=i:y.next=c,!Mt(i,t.memoizedState)&&(it=!0,ee&&(s=al,s!==null)))throw s;t.memoizedState=i,t.baseState=r,t.baseQueue=y,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function to(t){var a=tt(),s=a.queue;if(s===null)throw Error(u(311));s.lastRenderedReducer=t;var l=s.dispatch,n=s.pending,i=a.memoizedState;if(n!==null){s.pending=null;var r=n=n.next;do i=t(i,r.action),r=r.next;while(r!==n);Mt(i,a.memoizedState)||(it=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),s.lastRenderedState=i}return[i,l]}function _d(t,a,s){var l=Ce,n=tt(),i=Pe;if(i){if(s===void 0)throw Error(u(407));s=s()}else s=a();var r=!Mt((Le||n).memoizedState,s);r&&(n.memoizedState=s,it=!0),n=n.queue;var c=Bd.bind(null,l,n,t);if(Fl(2048,8,c,[t]),n.getSnapshot!==a||r||et!==null&&et.memoizedState.tag&1){if(l.flags|=2048,il(9,li(),Od.bind(null,l,n,s,a),null),Ge===null)throw Error(u(349));i||(Oa&124)!==0||Ld(l,a,s)}return s}function Ld(t,a,s){t.flags|=16384,t={getSnapshot:a,value:s},a=Ce.updateQueue,a===null?(a=Fr(),Ce.updateQueue=a,a.stores=[t]):(s=a.stores,s===null?a.stores=[t]:s.push(t))}function Od(t,a,s,l){a.value=s,a.getSnapshot=l,Xd(a)&&Id(t)}function Bd(t,a,s){return s(function(){Xd(a)&&Id(t)})}function Xd(t){var a=t.getSnapshot;t=t.value;try{var s=a();return!Mt(t,s)}catch{return!0}}function Id(t){var a=Js(t,2);a!==null&&Lt(a,t,2)}function ao(t){var a=St();if(typeof t=="function"){var s=t;if(t=s(),ws){He(!0);try{s()}finally{He(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},a}function Gd(t,a,s,l){return t.baseState=s,eo(t,Le,typeof l=="function"?l:Na)}function $g(t,a,s,l,n){if(ii(t))throw Error(u(485));if(t=a.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};x.T!==null?s(!0):i.isTransition=!1,l(i),s=a.pending,s===null?(i.next=a.pending=i,Hd(a,i)):(i.next=s.next,a.pending=s.next=i)}}function Hd(t,a){var s=a.action,l=a.payload,n=t.state;if(a.isTransition){var i=x.T,r={};x.T=r;try{var c=s(n,l),y=x.S;y!==null&&y(r,c),Yd(t,a,c)}catch(q){so(t,a,q)}finally{x.T=i}}else try{i=s(n,l),Yd(t,a,i)}catch(q){so(t,a,q)}}function Yd(t,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Qd(t,a,l)},function(l){return so(t,a,l)}):Qd(t,a,s)}function Qd(t,a,s){a.status="fulfilled",a.value=s,Vd(a),t.state=s,a=t.pending,a!==null&&(s=a.next,s===a?t.pending=null:(s=s.next,a.next=s,Hd(t,s)))}function so(t,a,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=s,Vd(a),a=a.next;while(a!==l)}t.action=null}function Vd(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Zd(t,a){return a}function Kd(t,a){if(Pe){var s=Ge.formState;if(s!==null){e:{var l=Ce;if(Pe){if(Ve){t:{for(var n=Ve,i=la;n.nodeType!==8;){if(!i){n=null;break t}if(n=ta(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ve=ta(n.nextSibling),l=n.data==="F!";break e}}ys(l)}l=!1}l&&(a=s[0])}}return s=St(),s.memoizedState=s.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zd,lastRenderedState:a},s.queue=l,s=pm.bind(null,Ce,l),l.dispatch=s,l=ao(!1),i=oo.bind(null,Ce,!1,l.queue),l=St(),n={state:a,dispatch:null,action:t,pending:null},l.queue=n,s=$g.bind(null,Ce,n,i,s),n.dispatch=s,l.memoizedState=t,[a,s,!1]}function Jd(t){var a=tt();return Fd(a,Le,t)}function Fd(t,a,s){if(a=eo(t,a,Zd)[0],t=si(Na)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Jl(a)}catch(r){throw r===Hl?Jn:r}else l=a;a=tt();var n=a.queue,i=n.dispatch;return s!==a.memoizedState&&(Ce.flags|=2048,il(9,li(),qg.bind(null,n,s),null)),[l,i,t]}function qg(t,a){t.action=a}function Wd(t){var a=tt(),s=Le;if(s!==null)return Fd(a,s,t);tt(),a=a.memoizedState,s=tt();var l=s.queue.dispatch;return s.memoizedState=t,[a,l,!1]}function il(t,a,s,l){return t={tag:t,create:s,deps:l,inst:a,next:null},a=Ce.updateQueue,a===null&&(a=Fr(),Ce.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,a.lastEffect=t),t}function li(){return{destroy:void 0,resource:void 0}}function em(){return tt().memoizedState}function ni(t,a,s,l){var n=St();l=l===void 0?null:l,Ce.flags|=t,n.memoizedState=il(1|a,li(),s,l)}function Fl(t,a,s,l){var n=tt();l=l===void 0?null:l;var i=n.memoizedState.inst;Le!==null&&l!==null&&Qr(l,Le.memoizedState.deps)?n.memoizedState=il(a,i,s,l):(Ce.flags|=t,n.memoizedState=il(1|a,i,s,l))}function tm(t,a){ni(8390656,8,t,a)}function am(t,a){Fl(2048,8,t,a)}function sm(t,a){return Fl(4,2,t,a)}function lm(t,a){return Fl(4,4,t,a)}function nm(t,a){if(typeof a=="function"){t=t();var s=a(t);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function im(t,a,s){s=s!=null?s.concat([t]):null,Fl(4,4,nm.bind(null,a,t),s)}function lo(){}function rm(t,a){var s=tt();a=a===void 0?null:a;var l=s.memoizedState;return a!==null&&Qr(a,l[1])?l[0]:(s.memoizedState=[t,a],t)}function om(t,a){var s=tt();a=a===void 0?null:a;var l=s.memoizedState;if(a!==null&&Qr(a,l[1]))return l[0];if(l=t(),ws){He(!0);try{t()}finally{He(!1)}}return s.memoizedState=[l,a],l}function no(t,a,s){return s===void 0||(Oa&1073741824)!==0?t.memoizedState=a:(t.memoizedState=s,t=mu(),Ce.lanes|=t,Qa|=t,s)}function cm(t,a,s,l){return Mt(s,a)?s:sl.current!==null?(t=no(t,s,l),Mt(t,a)||(it=!0),t):(Oa&42)===0?(it=!0,t.memoizedState=s):(t=mu(),Ce.lanes|=t,Qa|=t,a)}function dm(t,a,s,l,n){var i=h.p;h.p=i!==0&&8>i?i:8;var r=x.T,c={};x.T=c,oo(t,!1,a,s);try{var y=n(),q=x.S;if(q!==null&&q(c,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var ee=Mg(y,l);Wl(t,a,ee,_t(t))}else Wl(t,a,l,_t(t))}catch(ie){Wl(t,a,{then:function(){},status:"rejected",reason:ie},_t())}finally{h.p=i,x.T=r}}function _g(){}function io(t,a,s,l){if(t.tag!==5)throw Error(u(476));var n=mm(t).queue;dm(t,n,a,Y,s===null?_g:function(){return um(t),s(l)})}function mm(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:Y},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:s},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function um(t){var a=mm(t).next.queue;Wl(t,a,{},_t())}function ro(){return ht(bn)}function xm(){return tt().memoizedState}function gm(){return tt().memoizedState}function Lg(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var s=_t();t=_a(s);var l=La(a,t,s);l!==null&&(Lt(l,a,s),Ql(l,a,s)),a={cache:qr()},t.payload=a;return}a=a.return}}function Og(t,a,s){var l=_t();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ii(t)?hm(a,s):(s=Cr(t,a,s,l),s!==null&&(Lt(s,t,l),fm(s,a,l)))}function pm(t,a,s){var l=_t();Wl(t,a,s,l)}function Wl(t,a,s,l){var n={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ii(t))hm(a,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var r=a.lastRenderedState,c=i(r,s);if(n.hasEagerState=!0,n.eagerState=c,Mt(c,r))return In(t,a,n,0),Ge===null&&Xn(),!1}catch{}finally{}if(s=Cr(t,a,n,l),s!==null)return Lt(s,t,l),fm(s,a,l),!0}return!1}function oo(t,a,s,l){if(l={lane:2,revertLane:Bo(),action:l,hasEagerState:!1,eagerState:null,next:null},ii(t)){if(a)throw Error(u(479))}else a=Cr(t,s,l,2),a!==null&&Lt(a,t,2)}function ii(t){var a=t.alternate;return t===Ce||a!==null&&a===Ce}function hm(t,a){ll=ei=!0;var s=t.pending;s===null?a.next=a:(a.next=s.next,s.next=a),t.pending=a}function fm(t,a,s){if((s&4194048)!==0){var l=a.lanes;l&=t.pendingLanes,s|=l,a.lanes=s,Dc(t,s)}}var ri={readContext:ht,use:ai,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},bm={readContext:ht,use:ai,useCallback:function(t,a){return St().memoizedState=[t,a===void 0?null:a],t},useContext:ht,useEffect:tm,useImperativeHandle:function(t,a,s){s=s!=null?s.concat([t]):null,ni(4194308,4,nm.bind(null,a,t),s)},useLayoutEffect:function(t,a){return ni(4194308,4,t,a)},useInsertionEffect:function(t,a){ni(4,2,t,a)},useMemo:function(t,a){var s=St();a=a===void 0?null:a;var l=t();if(ws){He(!0);try{t()}finally{He(!1)}}return s.memoizedState=[l,a],l},useReducer:function(t,a,s){var l=St();if(s!==void 0){var n=s(a);if(ws){He(!0);try{s(a)}finally{He(!1)}}}else n=a;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Og.bind(null,Ce,t),[l.memoizedState,t]},useRef:function(t){var a=St();return t={current:t},a.memoizedState=t},useState:function(t){t=ao(t);var a=t.queue,s=pm.bind(null,Ce,a);return a.dispatch=s,[t.memoizedState,s]},useDebugValue:lo,useDeferredValue:function(t,a){var s=St();return no(s,t,a)},useTransition:function(){var t=ao(!1);return t=dm.bind(null,Ce,t.queue,!0,!1),St().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,s){var l=Ce,n=St();if(Pe){if(s===void 0)throw Error(u(407));s=s()}else{if(s=a(),Ge===null)throw Error(u(349));(ze&124)!==0||Ld(l,a,s)}n.memoizedState=s;var i={value:s,getSnapshot:a};return n.queue=i,tm(Bd.bind(null,l,i,t),[t]),l.flags|=2048,il(9,li(),Od.bind(null,l,i,s,a),null),s},useId:function(){var t=St(),a=Ge.identifierPrefix;if(Pe){var s=ya,l=ba;s=(l&~(1<<32-We(l)-1)).toString(32)+s,a="«"+a+"R"+s,s=ti++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=Pg++,a="«"+a+"r"+s.toString(32)+"»";return t.memoizedState=a},useHostTransitionStatus:ro,useFormState:Kd,useActionState:Kd,useOptimistic:function(t){var a=St();a.memoizedState=a.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=oo.bind(null,Ce,!0,s),s.dispatch=a,[t,a]},useMemoCache:Wr,useCacheRefresh:function(){return St().memoizedState=Lg.bind(null,Ce)}},ym={readContext:ht,use:ai,useCallback:rm,useContext:ht,useEffect:am,useImperativeHandle:im,useInsertionEffect:sm,useLayoutEffect:lm,useMemo:om,useReducer:si,useRef:em,useState:function(){return si(Na)},useDebugValue:lo,useDeferredValue:function(t,a){var s=tt();return cm(s,Le.memoizedState,t,a)},useTransition:function(){var t=si(Na)[0],a=tt().memoizedState;return[typeof t=="boolean"?t:Jl(t),a]},useSyncExternalStore:_d,useId:xm,useHostTransitionStatus:ro,useFormState:Jd,useActionState:Jd,useOptimistic:function(t,a){var s=tt();return Gd(s,Le,t,a)},useMemoCache:Wr,useCacheRefresh:gm},Bg={readContext:ht,use:ai,useCallback:rm,useContext:ht,useEffect:am,useImperativeHandle:im,useInsertionEffect:sm,useLayoutEffect:lm,useMemo:om,useReducer:to,useRef:em,useState:function(){return to(Na)},useDebugValue:lo,useDeferredValue:function(t,a){var s=tt();return Le===null?no(s,t,a):cm(s,Le.memoizedState,t,a)},useTransition:function(){var t=to(Na)[0],a=tt().memoizedState;return[typeof t=="boolean"?t:Jl(t),a]},useSyncExternalStore:_d,useId:xm,useHostTransitionStatus:ro,useFormState:Wd,useActionState:Wd,useOptimistic:function(t,a){var s=tt();return Le!==null?Gd(s,Le,t,a):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Wr,useCacheRefresh:gm},rl=null,en=0;function oi(t){var a=en;return en+=1,rl===null&&(rl=[]),kd(rl,t,a)}function tn(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function ci(t,a){throw a.$$typeof===b?Error(u(525)):(t=Object.prototype.toString.call(a),Error(u(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function vm(t){var a=t._init;return a(t._payload)}function jm(t){function a(T,D){if(t){var P=T.deletions;P===null?(T.deletions=[D],T.flags|=16):P.push(D)}}function s(T,D){if(!t)return null;for(;D!==null;)a(T,D),D=D.sibling;return null}function l(T){for(var D=new Map;T!==null;)T.key!==null?D.set(T.key,T):D.set(T.index,T),T=T.sibling;return D}function n(T,D){return T=fa(T,D),T.index=0,T.sibling=null,T}function i(T,D,P){return T.index=P,t?(P=T.alternate,P!==null?(P=P.index,P<D?(T.flags|=67108866,D):P):(T.flags|=67108866,D)):(T.flags|=1048576,D)}function r(T){return t&&T.alternate===null&&(T.flags|=67108866),T}function c(T,D,P,le){return D===null||D.tag!==6?(D=Rr(P,T.mode,le),D.return=T,D):(D=n(D,P),D.return=T,D)}function y(T,D,P,le){var ge=P.type;return ge===ne?ee(T,D,P.props.children,le,P.key):D!==null&&(D.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===J&&vm(ge)===D.type)?(D=n(D,P.props),tn(D,P),D.return=T,D):(D=Hn(P.type,P.key,P.props,null,T.mode,le),tn(D,P),D.return=T,D)}function q(T,D,P,le){return D===null||D.tag!==4||D.stateNode.containerInfo!==P.containerInfo||D.stateNode.implementation!==P.implementation?(D=kr(P,T.mode,le),D.return=T,D):(D=n(D,P.children||[]),D.return=T,D)}function ee(T,D,P,le,ge){return D===null||D.tag!==7?(D=ps(P,T.mode,le,ge),D.return=T,D):(D=n(D,P),D.return=T,D)}function ie(T,D,P){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Rr(""+D,T.mode,P),D.return=T,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case E:return P=Hn(D.type,D.key,D.props,null,T.mode,P),tn(P,D),P.return=T,P;case v:return D=kr(D,T.mode,P),D.return=T,D;case J:var le=D._init;return D=le(D._payload),ie(T,D,P)}if(I(D)||k(D))return D=ps(D,T.mode,P,null),D.return=T,D;if(typeof D.then=="function")return ie(T,oi(D),P);if(D.$$typeof===z)return ie(T,Zn(T,D),P);ci(T,D)}return null}function O(T,D,P,le){var ge=D!==null?D.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return ge!==null?null:c(T,D,""+P,le);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case E:return P.key===ge?y(T,D,P,le):null;case v:return P.key===ge?q(T,D,P,le):null;case J:return ge=P._init,P=ge(P._payload),O(T,D,P,le)}if(I(P)||k(P))return ge!==null?null:ee(T,D,P,le,null);if(typeof P.then=="function")return O(T,D,oi(P),le);if(P.$$typeof===z)return O(T,D,Zn(T,P),le);ci(T,P)}return null}function X(T,D,P,le,ge){if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return T=T.get(P)||null,c(D,T,""+le,ge);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case E:return T=T.get(le.key===null?P:le.key)||null,y(D,T,le,ge);case v:return T=T.get(le.key===null?P:le.key)||null,q(D,T,le,ge);case J:var Te=le._init;return le=Te(le._payload),X(T,D,P,le,ge)}if(I(le)||k(le))return T=T.get(P)||null,ee(D,T,le,ge,null);if(typeof le.then=="function")return X(T,D,P,oi(le),ge);if(le.$$typeof===z)return X(T,D,P,Zn(D,le),ge);ci(D,le)}return null}function Ne(T,D,P,le){for(var ge=null,Te=null,he=D,ve=D=0,ot=null;he!==null&&ve<P.length;ve++){he.index>ve?(ot=he,he=null):ot=he.sibling;var Me=O(T,he,P[ve],le);if(Me===null){he===null&&(he=ot);break}t&&he&&Me.alternate===null&&a(T,he),D=i(Me,D,ve),Te===null?ge=Me:Te.sibling=Me,Te=Me,he=ot}if(ve===P.length)return s(T,he),Pe&&fs(T,ve),ge;if(he===null){for(;ve<P.length;ve++)he=ie(T,P[ve],le),he!==null&&(D=i(he,D,ve),Te===null?ge=he:Te.sibling=he,Te=he);return Pe&&fs(T,ve),ge}for(he=l(he);ve<P.length;ve++)ot=X(he,T,ve,P[ve],le),ot!==null&&(t&&ot.alternate!==null&&he.delete(ot.key===null?ve:ot.key),D=i(ot,D,ve),Te===null?ge=ot:Te.sibling=ot,Te=ot);return t&&he.forEach(function(as){return a(T,as)}),Pe&&fs(T,ve),ge}function ye(T,D,P,le){if(P==null)throw Error(u(151));for(var ge=null,Te=null,he=D,ve=D=0,ot=null,Me=P.next();he!==null&&!Me.done;ve++,Me=P.next()){he.index>ve?(ot=he,he=null):ot=he.sibling;var as=O(T,he,Me.value,le);if(as===null){he===null&&(he=ot);break}t&&he&&as.alternate===null&&a(T,he),D=i(as,D,ve),Te===null?ge=as:Te.sibling=as,Te=as,he=ot}if(Me.done)return s(T,he),Pe&&fs(T,ve),ge;if(he===null){for(;!Me.done;ve++,Me=P.next())Me=ie(T,Me.value,le),Me!==null&&(D=i(Me,D,ve),Te===null?ge=Me:Te.sibling=Me,Te=Me);return Pe&&fs(T,ve),ge}for(he=l(he);!Me.done;ve++,Me=P.next())Me=X(he,T,ve,Me.value,le),Me!==null&&(t&&Me.alternate!==null&&he.delete(Me.key===null?ve:Me.key),D=i(Me,D,ve),Te===null?ge=Me:Te.sibling=Me,Te=Me);return t&&he.forEach(function(Xp){return a(T,Xp)}),Pe&&fs(T,ve),ge}function Be(T,D,P,le){if(typeof P=="object"&&P!==null&&P.type===ne&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case E:e:{for(var ge=P.key;D!==null;){if(D.key===ge){if(ge=P.type,ge===ne){if(D.tag===7){s(T,D.sibling),le=n(D,P.props.children),le.return=T,T=le;break e}}else if(D.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===J&&vm(ge)===D.type){s(T,D.sibling),le=n(D,P.props),tn(le,P),le.return=T,T=le;break e}s(T,D);break}else a(T,D);D=D.sibling}P.type===ne?(le=ps(P.props.children,T.mode,le,P.key),le.return=T,T=le):(le=Hn(P.type,P.key,P.props,null,T.mode,le),tn(le,P),le.return=T,T=le)}return r(T);case v:e:{for(ge=P.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===P.containerInfo&&D.stateNode.implementation===P.implementation){s(T,D.sibling),le=n(D,P.children||[]),le.return=T,T=le;break e}else{s(T,D);break}else a(T,D);D=D.sibling}le=kr(P,T.mode,le),le.return=T,T=le}return r(T);case J:return ge=P._init,P=ge(P._payload),Be(T,D,P,le)}if(I(P))return Ne(T,D,P,le);if(k(P)){if(ge=k(P),typeof ge!="function")throw Error(u(150));return P=ge.call(P),ye(T,D,P,le)}if(typeof P.then=="function")return Be(T,D,oi(P),le);if(P.$$typeof===z)return Be(T,D,Zn(T,P),le);ci(T,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,D!==null&&D.tag===6?(s(T,D.sibling),le=n(D,P),le.return=T,T=le):(s(T,D),le=Rr(P,T.mode,le),le.return=T,T=le),r(T)):s(T,D)}return function(T,D,P,le){try{en=0;var ge=Be(T,D,P,le);return rl=null,ge}catch(he){if(he===Hl||he===Jn)throw he;var Te=Pt(29,he,null,T.mode);return Te.lanes=le,Te.return=T,Te}finally{}}}var ol=jm(!0),Nm=jm(!1),Zt=G(null),na=null;function Ba(t){var a=t.alternate;re(lt,lt.current&1),re(Zt,t),na===null&&(a===null||sl.current!==null||a.memoizedState!==null)&&(na=t)}function wm(t){if(t.tag===22){if(re(lt,lt.current),re(Zt,t),na===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&(na=t)}}else Xa()}function Xa(){re(lt,lt.current),re(Zt,Zt.current)}function wa(t){K(Zt),na===t&&(na=null),K(lt)}var lt=G(0);function di(t){for(var a=t;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Wo(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function co(t,a,s,l){a=t.memoizedState,s=s(l,a),s=s==null?a:V({},a,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var mo={enqueueSetState:function(t,a,s){t=t._reactInternals;var l=_t(),n=_a(l);n.payload=a,s!=null&&(n.callback=s),a=La(t,n,l),a!==null&&(Lt(a,t,l),Ql(a,t,l))},enqueueReplaceState:function(t,a,s){t=t._reactInternals;var l=_t(),n=_a(l);n.tag=1,n.payload=a,s!=null&&(n.callback=s),a=La(t,n,l),a!==null&&(Lt(a,t,l),Ql(a,t,l))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var s=_t(),l=_a(s);l.tag=2,a!=null&&(l.callback=a),a=La(t,l,s),a!==null&&(Lt(a,t,s),Ql(a,t,s))}};function Sm(t,a,s,l,n,i,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,r):a.prototype&&a.prototype.isPureReactComponent?!ql(s,l)||!ql(n,i):!0}function Dm(t,a,s,l){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,l),a.state!==t&&mo.enqueueReplaceState(a,a.state,null)}function Ss(t,a){var s=a;if("ref"in a){s={};for(var l in a)l!=="ref"&&(s[l]=a[l])}if(t=t.defaultProps){s===a&&(s=V({},s));for(var n in t)s[n]===void 0&&(s[n]=t[n])}return s}var mi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Am(t){mi(t)}function Cm(t){console.error(t)}function Tm(t){mi(t)}function ui(t,a){try{var s=t.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Rm(t,a,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uo(t,a,s){return s=_a(s),s.tag=3,s.payload={element:null},s.callback=function(){ui(t,a)},s}function km(t){return t=_a(t),t.tag=3,t}function Em(t,a,s,l){var n=s.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Rm(a,s,l)}}var r=s.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Rm(a,s,l),typeof n!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Xg(t,a,s,l,n){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=s.alternate,a!==null&&Xl(a,s,n,!0),s=Zt.current,s!==null){switch(s.tag){case 13:return na===null?$o():s.alternate===null&&Ze===0&&(Ze=3),s.flags&=-257,s.flags|=65536,s.lanes=n,l===Or?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([l]):a.add(l),_o(t,l,n)),!1;case 22:return s.flags|=65536,l===Or?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([l]):s.add(l)),_o(t,l,n)),!1}throw Error(u(435,s.tag))}return _o(t,l,n),$o(),!1}if(Pe)return a=Zt.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==Mr&&(t=Error(u(422),{cause:l}),Bl(Ht(t,s)))):(l!==Mr&&(a=Error(u(423),{cause:l}),Bl(Ht(a,s))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=Ht(l,s),n=uo(t.stateNode,l,n),Ir(t,n),Ze!==4&&(Ze=2)),!1;var i=Error(u(520),{cause:l});if(i=Ht(i,s),cn===null?cn=[i]:cn.push(i),Ze!==4&&(Ze=2),a===null)return!0;l=Ht(l,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,t=n&-n,s.lanes|=t,t=uo(s.stateNode,l,t),Ir(s,t),!1;case 1:if(a=s.type,i=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Va===null||!Va.has(i))))return s.flags|=65536,n&=-n,s.lanes|=n,n=km(n),Em(n,t,s,l),Ir(s,n),!1}s=s.return}while(s!==null);return!1}var zm=Error(u(461)),it=!1;function mt(t,a,s,l){a.child=t===null?Nm(a,null,s,l):ol(a,t.child,s,l)}function Mm(t,a,s,l,n){s=s.render;var i=a.ref;if("ref"in l){var r={};for(var c in l)c!=="ref"&&(r[c]=l[c])}else r=l;return js(a),l=Vr(t,a,s,r,i,n),c=Zr(),t!==null&&!it?(Kr(t,a,n),Sa(t,a,n)):(Pe&&c&&Er(a),a.flags|=1,mt(t,a,l,n),a.child)}function Pm(t,a,s,l,n){if(t===null){var i=s.type;return typeof i=="function"&&!Tr(i)&&i.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=i,Um(t,a,i,l,n)):(t=Hn(s.type,null,l,a,a.mode,n),t.ref=a.ref,t.return=a,a.child=t)}if(i=t.child,!vo(t,n)){var r=i.memoizedProps;if(s=s.compare,s=s!==null?s:ql,s(r,l)&&t.ref===a.ref)return Sa(t,a,n)}return a.flags|=1,t=fa(i,l),t.ref=a.ref,t.return=a,a.child=t}function Um(t,a,s,l,n){if(t!==null){var i=t.memoizedProps;if(ql(i,l)&&t.ref===a.ref)if(it=!1,a.pendingProps=l=i,vo(t,n))(t.flags&131072)!==0&&(it=!0);else return a.lanes=t.lanes,Sa(t,a,n)}return xo(t,a,s,l,n)}function $m(t,a,s){var l=a.pendingProps,n=l.children,i=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=i!==null?i.baseLanes|s:s,t!==null){for(n=a.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;a.childLanes=i&~l}else a.childLanes=0,a.child=null;return qm(t,a,l,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kn(a,i!==null?i.cachePool:null),i!==null?Ud(a,i):Hr(),wm(a);else return a.lanes=a.childLanes=536870912,qm(t,a,i!==null?i.baseLanes|s:s,s)}else i!==null?(Kn(a,i.cachePool),Ud(a,i),Xa(),a.memoizedState=null):(t!==null&&Kn(a,null),Hr(),Xa());return mt(t,a,n,s),a.child}function qm(t,a,s,l){var n=Lr();return n=n===null?null:{parent:st._currentValue,pool:n},a.memoizedState={baseLanes:s,cachePool:n},t!==null&&Kn(a,null),Hr(),wm(a),t!==null&&Xl(t,a,l,!0),null}function xi(t,a){var s=a.ref;if(s===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(u(284));(t===null||t.ref!==s)&&(a.flags|=4194816)}}function xo(t,a,s,l,n){return js(a),s=Vr(t,a,s,l,void 0,n),l=Zr(),t!==null&&!it?(Kr(t,a,n),Sa(t,a,n)):(Pe&&l&&Er(a),a.flags|=1,mt(t,a,s,n),a.child)}function _m(t,a,s,l,n,i){return js(a),a.updateQueue=null,s=qd(a,l,s,n),$d(t),l=Zr(),t!==null&&!it?(Kr(t,a,i),Sa(t,a,i)):(Pe&&l&&Er(a),a.flags|=1,mt(t,a,s,i),a.child)}function Lm(t,a,s,l,n){if(js(a),a.stateNode===null){var i=Fs,r=s.contextType;typeof r=="object"&&r!==null&&(i=ht(r)),i=new s(l,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=mo,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=l,i.state=a.memoizedState,i.refs={},Br(a),r=s.contextType,i.context=typeof r=="object"&&r!==null?ht(r):Fs,i.state=a.memoizedState,r=s.getDerivedStateFromProps,typeof r=="function"&&(co(a,s,r,l),i.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&mo.enqueueReplaceState(i,i.state,null),Zl(a,l,i,n),Vl(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(t===null){i=a.stateNode;var c=a.memoizedProps,y=Ss(s,c);i.props=y;var q=i.context,ee=s.contextType;r=Fs,typeof ee=="object"&&ee!==null&&(r=ht(ee));var ie=s.getDerivedStateFromProps;ee=typeof ie=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=a.pendingProps!==c,ee||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||q!==r)&&Dm(a,i,l,r),qa=!1;var O=a.memoizedState;i.state=O,Zl(a,l,i,n),Vl(),q=a.memoizedState,c||O!==q||qa?(typeof ie=="function"&&(co(a,s,ie,l),q=a.memoizedState),(y=qa||Sm(a,s,y,l,O,q,r))?(ee||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=q),i.props=l,i.state=q,i.context=r,l=y):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{i=a.stateNode,Xr(t,a),r=a.memoizedProps,ee=Ss(s,r),i.props=ee,ie=a.pendingProps,O=i.context,q=s.contextType,y=Fs,typeof q=="object"&&q!==null&&(y=ht(q)),c=s.getDerivedStateFromProps,(q=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==ie||O!==y)&&Dm(a,i,l,y),qa=!1,O=a.memoizedState,i.state=O,Zl(a,l,i,n),Vl();var X=a.memoizedState;r!==ie||O!==X||qa||t!==null&&t.dependencies!==null&&Vn(t.dependencies)?(typeof c=="function"&&(co(a,s,c,l),X=a.memoizedState),(ee=qa||Sm(a,s,ee,l,O,X,y)||t!==null&&t.dependencies!==null&&Vn(t.dependencies))?(q||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,X,y),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,X,y)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&O===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&O===t.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=X),i.props=l,i.state=X,i.context=y,l=ee):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&O===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&O===t.memoizedState||(a.flags|=1024),l=!1)}return i=l,xi(t,a),l=(a.flags&128)!==0,i||l?(i=a.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,t!==null&&l?(a.child=ol(a,t.child,null,n),a.child=ol(a,null,s,n)):mt(t,a,s,n),a.memoizedState=i.state,t=a.child):t=Sa(t,a,n),t}function Om(t,a,s,l){return Ol(),a.flags|=256,mt(t,a,s,l),a.child}var go={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function po(t){return{baseLanes:t,cachePool:Cd()}}function ho(t,a,s){return t=t!==null?t.childLanes&~s:0,a&&(t|=Kt),t}function Bm(t,a,s){var l=a.pendingProps,n=!1,i=(a.flags&128)!==0,r;if((r=i)||(r=t!==null&&t.memoizedState===null?!1:(lt.current&2)!==0),r&&(n=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,t===null){if(Pe){if(n?Ba(a):Xa(),Pe){var c=Ve,y;if(y=c){e:{for(y=c,c=la;y.nodeType!==8;){if(!c){c=null;break e}if(y=ta(y.nextSibling),y===null){c=null;break e}}c=y}c!==null?(a.memoizedState={dehydrated:c,treeContext:hs!==null?{id:ba,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},y=Pt(18,null,null,0),y.stateNode=c,y.return=a,a.child=y,vt=a,Ve=null,y=!0):y=!1}y||ys(a)}if(c=a.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return Wo(c)?a.lanes=32:a.lanes=536870912,null;wa(a)}return c=l.children,l=l.fallback,n?(Xa(),n=a.mode,c=gi({mode:"hidden",children:c},n),l=ps(l,n,s,null),c.return=a,l.return=a,c.sibling=l,a.child=c,n=a.child,n.memoizedState=po(s),n.childLanes=ho(t,r,s),a.memoizedState=go,l):(Ba(a),fo(a,c))}if(y=t.memoizedState,y!==null&&(c=y.dehydrated,c!==null)){if(i)a.flags&256?(Ba(a),a.flags&=-257,a=bo(t,a,s)):a.memoizedState!==null?(Xa(),a.child=t.child,a.flags|=128,a=null):(Xa(),n=l.fallback,c=a.mode,l=gi({mode:"visible",children:l.children},c),n=ps(n,c,s,null),n.flags|=2,l.return=a,n.return=a,l.sibling=n,a.child=l,ol(a,t.child,null,s),l=a.child,l.memoizedState=po(s),l.childLanes=ho(t,r,s),a.memoizedState=go,a=n);else if(Ba(a),Wo(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var q=r.dgst;r=q,l=Error(u(419)),l.stack="",l.digest=r,Bl({value:l,source:null,stack:null}),a=bo(t,a,s)}else if(it||Xl(t,a,s,!1),r=(s&t.childLanes)!==0,it||r){if(r=Ge,r!==null&&(l=s&-s,l=(l&42)!==0?1:Wi(l),l=(l&(r.suspendedLanes|s))!==0?0:l,l!==0&&l!==y.retryLane))throw y.retryLane=l,Js(t,l),Lt(r,t,l),zm;c.data==="$?"||$o(),a=bo(t,a,s)}else c.data==="$?"?(a.flags|=192,a.child=t.child,a=null):(t=y.treeContext,Ve=ta(c.nextSibling),vt=a,Pe=!0,bs=null,la=!1,t!==null&&(Qt[Vt++]=ba,Qt[Vt++]=ya,Qt[Vt++]=hs,ba=t.id,ya=t.overflow,hs=a),a=fo(a,l.children),a.flags|=4096);return a}return n?(Xa(),n=l.fallback,c=a.mode,y=t.child,q=y.sibling,l=fa(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&65011712,q!==null?n=fa(q,n):(n=ps(n,c,s,null),n.flags|=2),n.return=a,l.return=a,l.sibling=n,a.child=l,l=n,n=a.child,c=t.child.memoizedState,c===null?c=po(s):(y=c.cachePool,y!==null?(q=st._currentValue,y=y.parent!==q?{parent:q,pool:q}:y):y=Cd(),c={baseLanes:c.baseLanes|s,cachePool:y}),n.memoizedState=c,n.childLanes=ho(t,r,s),a.memoizedState=go,l):(Ba(a),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:l.children}),s.return=a,s.sibling=null,t!==null&&(r=a.deletions,r===null?(a.deletions=[t],a.flags|=16):r.push(t)),a.child=s,a.memoizedState=null,s)}function fo(t,a){return a=gi({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function gi(t,a){return t=Pt(22,t,null,a),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function bo(t,a,s){return ol(a,t.child,null,s),t=fo(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Xm(t,a,s){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a),Ur(t.return,a,s)}function yo(t,a,s,l,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:n}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=s,i.tailMode=n)}function Im(t,a,s){var l=a.pendingProps,n=l.revealOrder,i=l.tail;if(mt(t,a,l.children,s),l=lt.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xm(t,s,a);else if(t.tag===19)Xm(t,s,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(re(lt,l),n){case"forwards":for(s=a.child,n=null;s!==null;)t=s.alternate,t!==null&&di(t)===null&&(n=s),s=s.sibling;s=n,s===null?(n=a.child,a.child=null):(n=s.sibling,s.sibling=null),yo(a,!1,n,s,i);break;case"backwards":for(s=null,n=a.child,a.child=null;n!==null;){if(t=n.alternate,t!==null&&di(t)===null){a.child=n;break}t=n.sibling,n.sibling=s,s=n,n=t}yo(a,!0,s,null,i);break;case"together":yo(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Sa(t,a,s){if(t!==null&&(a.dependencies=t.dependencies),Qa|=a.lanes,(s&a.childLanes)===0)if(t!==null){if(Xl(t,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(u(153));if(a.child!==null){for(t=a.child,s=fa(t,t.pendingProps),a.child=s,s.return=a;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=a;s.sibling=null}return a.child}function vo(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Vn(t)))}function Ig(t,a,s){switch(a.tag){case 3:g(a,a.stateNode.containerInfo),$a(a,st,t.memoizedState.cache),Ol();break;case 27:case 5:ue(a);break;case 4:g(a,a.stateNode.containerInfo);break;case 10:$a(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Ba(a),a.flags|=128,null):(s&a.child.childLanes)!==0?Bm(t,a,s):(Ba(a),t=Sa(t,a,s),t!==null?t.sibling:null);Ba(a);break;case 19:var n=(t.flags&128)!==0;if(l=(s&a.childLanes)!==0,l||(Xl(t,a,s,!1),l=(s&a.childLanes)!==0),n){if(l)return Im(t,a,s);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),re(lt,lt.current),l)break;return null;case 22:case 23:return a.lanes=0,$m(t,a,s);case 24:$a(a,st,t.memoizedState.cache)}return Sa(t,a,s)}function Gm(t,a,s){if(t!==null)if(t.memoizedProps!==a.pendingProps)it=!0;else{if(!vo(t,s)&&(a.flags&128)===0)return it=!1,Ig(t,a,s);it=(t.flags&131072)!==0}else it=!1,Pe&&(a.flags&1048576)!==0&&vd(a,Qn,a.index);switch(a.lanes=0,a.tag){case 16:e:{t=a.pendingProps;var l=a.elementType,n=l._init;if(l=n(l._payload),a.type=l,typeof l=="function")Tr(l)?(t=Ss(l,t),a.tag=1,a=Lm(null,a,l,t,s)):(a.tag=0,a=xo(null,a,l,t,s));else{if(l!=null){if(n=l.$$typeof,n===Z){a.tag=11,a=Mm(null,a,l,t,s);break e}else if(n===$){a.tag=14,a=Pm(null,a,l,t,s);break e}}throw a=de(l)||l,Error(u(306,a,""))}}return a;case 0:return xo(t,a,a.type,a.pendingProps,s);case 1:return l=a.type,n=Ss(l,a.pendingProps),Lm(t,a,l,n,s);case 3:e:{if(g(a,a.stateNode.containerInfo),t===null)throw Error(u(387));l=a.pendingProps;var i=a.memoizedState;n=i.element,Xr(t,a),Zl(a,l,null,s);var r=a.memoizedState;if(l=r.cache,$a(a,st,l),l!==i.cache&&$r(a,[st],s,!0),Vl(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=Om(t,a,l,s);break e}else if(l!==n){n=Ht(Error(u(424)),a),Bl(n),a=Om(t,a,l,s);break e}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ve=ta(t.firstChild),vt=a,Pe=!0,bs=null,la=!0,s=Nm(a,null,l,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ol(),l===n){a=Sa(t,a,s);break e}mt(t,a,l,s)}a=a.child}return a;case 26:return xi(t,a),t===null?(s=Vu(a.type,null,a.pendingProps,null))?a.memoizedState=s:Pe||(s=a.type,t=a.pendingProps,l=Ti(fe.current).createElement(s),l[pt]=a,l[Nt]=t,xt(l,s,t),nt(l),a.stateNode=l):a.memoizedState=Vu(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return ue(a),t===null&&Pe&&(l=a.stateNode=Hu(a.type,a.pendingProps,fe.current),vt=a,la=!0,n=Ve,Ja(a.type)?(ec=n,Ve=ta(l.firstChild)):Ve=n),mt(t,a,a.pendingProps.children,s),xi(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Pe&&((n=l=Ve)&&(l=fp(l,a.type,a.pendingProps,la),l!==null?(a.stateNode=l,vt=a,Ve=ta(l.firstChild),la=!1,n=!0):n=!1),n||ys(a)),ue(a),n=a.type,i=a.pendingProps,r=t!==null?t.memoizedProps:null,l=i.children,Ko(n,i)?l=null:r!==null&&Ko(n,r)&&(a.flags|=32),a.memoizedState!==null&&(n=Vr(t,a,Ug,null,null,s),bn._currentValue=n),xi(t,a),mt(t,a,l,s),a.child;case 6:return t===null&&Pe&&((t=s=Ve)&&(s=bp(s,a.pendingProps,la),s!==null?(a.stateNode=s,vt=a,Ve=null,t=!0):t=!1),t||ys(a)),null;case 13:return Bm(t,a,s);case 4:return g(a,a.stateNode.containerInfo),l=a.pendingProps,t===null?a.child=ol(a,null,l,s):mt(t,a,l,s),a.child;case 11:return Mm(t,a,a.type,a.pendingProps,s);case 7:return mt(t,a,a.pendingProps,s),a.child;case 8:return mt(t,a,a.pendingProps.children,s),a.child;case 12:return mt(t,a,a.pendingProps.children,s),a.child;case 10:return l=a.pendingProps,$a(a,a.type,l.value),mt(t,a,l.children,s),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,js(a),n=ht(n),l=l(n),a.flags|=1,mt(t,a,l,s),a.child;case 14:return Pm(t,a,a.type,a.pendingProps,s);case 15:return Um(t,a,a.type,a.pendingProps,s);case 19:return Im(t,a,s);case 31:return l=a.pendingProps,s=a.mode,l={mode:l.mode,children:l.children},t===null?(s=gi(l,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=fa(t.child,l),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return $m(t,a,s);case 24:return js(a),l=ht(st),t===null?(n=Lr(),n===null&&(n=Ge,i=qr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=s),n=i),a.memoizedState={parent:l,cache:n},Br(a),$a(a,st,n)):((t.lanes&s)!==0&&(Xr(t,a),Zl(a,null,null,s),Vl()),n=t.memoizedState,i=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),$a(a,st,l)):(l=i.cache,$a(a,st,l),l!==n.cache&&$r(a,[st],s,!0))),mt(t,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function Da(t){t.flags|=4}function Hm(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Wu(a)){if(a=Zt.current,a!==null&&((ze&4194048)===ze?na!==null:(ze&62914560)!==ze&&(ze&536870912)===0||a!==na))throw Yl=Or,Td;t.flags|=8192}}function pi(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?wc():536870912,t.lanes|=a,ul|=a)}function an(t,a){if(!Pe)switch(t.tailMode){case"hidden":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Qe(t){var a=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(a)for(var n=t.child;n!==null;)s|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)s|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=s,a}function Gg(t,a,s){var l=a.pendingProps;switch(zr(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(a),null;case 1:return Qe(a),null;case 3:return s=a.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ja(st),ce(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ll(a)?Da(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,wd())),Qe(a),null;case 26:return s=a.memoizedState,t===null?(Da(a),s!==null?(Qe(a),Hm(a,s)):(Qe(a),a.flags&=-16777217)):s?s!==t.memoizedState?(Da(a),Qe(a),Hm(a,s)):(Qe(a),a.flags&=-16777217):(t.memoizedProps!==l&&Da(a),Qe(a),a.flags&=-16777217),null;case 27:De(a),s=fe.current;var n=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==l&&Da(a);else{if(!l){if(a.stateNode===null)throw Error(u(166));return Qe(a),null}t=me.current,Ll(a)?jd(a):(t=Hu(n,l,s),a.stateNode=t,Da(a))}return Qe(a),null;case 5:if(De(a),s=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==l&&Da(a);else{if(!l){if(a.stateNode===null)throw Error(u(166));return Qe(a),null}if(t=me.current,Ll(a))jd(a);else{switch(n=Ti(fe.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?n.createElement(s,{is:l.is}):n.createElement(s)}}t[pt]=a,t[Nt]=l;e:for(n=a.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}a.stateNode=t;e:switch(xt(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Da(a)}}return Qe(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==l&&Da(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(u(166));if(t=fe.current,Ll(a)){if(t=a.stateNode,s=a.memoizedProps,l=null,n=vt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[pt]=a,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||_u(t.nodeValue,s)),t||ys(a)}else t=Ti(t).createTextNode(l),t[pt]=a,a.stateNode=t}return Qe(a),null;case 13:if(l=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ll(a),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(u(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[pt]=a}else Ol(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Qe(a),n=!1}else n=wd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(wa(a),a):(wa(a),null)}if(wa(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return s!==t&&s&&(a.child.flags|=8192),pi(a,a.updateQueue),Qe(a),null;case 4:return ce(),t===null&&Ho(a.stateNode.containerInfo),Qe(a),null;case 10:return ja(a.type),Qe(a),null;case 19:if(K(lt),n=a.memoizedState,n===null)return Qe(a),null;if(l=(a.flags&128)!==0,i=n.rendering,i===null)if(l)an(n,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(i=di(t),i!==null){for(a.flags|=128,an(n,!1),t=i.updateQueue,a.updateQueue=t,pi(a,t),a.subtreeFlags=0,t=s,s=a.child;s!==null;)yd(s,t),s=s.sibling;return re(lt,lt.current&1|2),a.child}t=t.sibling}n.tail!==null&&Xt()>bi&&(a.flags|=128,l=!0,an(n,!1),a.lanes=4194304)}else{if(!l)if(t=di(i),t!==null){if(a.flags|=128,l=!0,t=t.updateQueue,a.updateQueue=t,pi(a,t),an(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!Pe)return Qe(a),null}else 2*Xt()-n.renderingStartTime>bi&&s!==536870912&&(a.flags|=128,l=!0,an(n,!1),a.lanes=4194304);n.isBackwards?(i.sibling=a.child,a.child=i):(t=n.last,t!==null?t.sibling=i:a.child=i,n.last=i)}return n.tail!==null?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=Xt(),a.sibling=null,t=lt.current,re(lt,l?t&1|2:t&1),a):(Qe(a),null);case 22:case 23:return wa(a),Yr(),l=a.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(s&536870912)!==0&&(a.flags&128)===0&&(Qe(a),a.subtreeFlags&6&&(a.flags|=8192)):Qe(a),s=a.updateQueue,s!==null&&pi(a,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==s&&(a.flags|=2048),t!==null&&K(Ns),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),ja(st),Qe(a),null;case 25:return null;case 30:return null}throw Error(u(156,a.tag))}function Hg(t,a){switch(zr(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return ja(st),ce(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return De(a),null;case 13:if(wa(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(u(340));Ol()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return K(lt),null;case 4:return ce(),null;case 10:return ja(a.type),null;case 22:case 23:return wa(a),Yr(),t!==null&&K(Ns),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return ja(st),null;case 25:return null;default:return null}}function Ym(t,a){switch(zr(a),a.tag){case 3:ja(st),ce();break;case 26:case 27:case 5:De(a);break;case 4:ce();break;case 13:wa(a);break;case 19:K(lt);break;case 10:ja(a.type);break;case 22:case 23:wa(a),Yr(),t!==null&&K(Ns);break;case 24:ja(st)}}function sn(t,a){try{var s=a.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var n=l.next;s=n;do{if((s.tag&t)===t){l=void 0;var i=s.create,r=s.inst;l=i(),r.destroy=l}s=s.next}while(s!==n)}}catch(c){Xe(a,a.return,c)}}function Ia(t,a,s){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var r=l.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,n=a;var y=s,q=c;try{q()}catch(ee){Xe(n,y,ee)}}}l=l.next}while(l!==i)}}catch(ee){Xe(a,a.return,ee)}}function Qm(t){var a=t.updateQueue;if(a!==null){var s=t.stateNode;try{Pd(a,s)}catch(l){Xe(t,t.return,l)}}}function Vm(t,a,s){s.props=Ss(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Xe(t,a,l)}}function ln(t,a){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(n){Xe(t,a,n)}}function ia(t,a){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(n){Xe(t,a,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(n){Xe(t,a,n)}else s.current=null}function Zm(t){var a=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(n){Xe(t,t.return,n)}}function jo(t,a,s){try{var l=t.stateNode;up(l,t.type,s,a),l[Nt]=a}catch(n){Xe(t,t.return,n)}}function Km(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ja(t.type)||t.tag===4}function No(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wo(t,a,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(t),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Ci));else if(l!==4&&(l===27&&Ja(t.type)&&(s=t.stateNode,a=null),t=t.child,t!==null))for(wo(t,a,s),t=t.sibling;t!==null;)wo(t,a,s),t=t.sibling}function hi(t,a,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?s.insertBefore(t,a):s.appendChild(t);else if(l!==4&&(l===27&&Ja(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(hi(t,a,s),t=t.sibling;t!==null;)hi(t,a,s),t=t.sibling}function Jm(t){var a=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);xt(a,l,s),a[pt]=t,a[Nt]=s}catch(i){Xe(t,t.return,i)}}var Aa=!1,Je=!1,So=!1,Fm=typeof WeakSet=="function"?WeakSet:Set,rt=null;function Yg(t,a){if(t=t.containerInfo,Vo=Pi,t=cd(t),jr(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{s.nodeType,i.nodeType}catch{s=null;break e}var r=0,c=-1,y=-1,q=0,ee=0,ie=t,O=null;t:for(;;){for(var X;ie!==s||n!==0&&ie.nodeType!==3||(c=r+n),ie!==i||l!==0&&ie.nodeType!==3||(y=r+l),ie.nodeType===3&&(r+=ie.nodeValue.length),(X=ie.firstChild)!==null;)O=ie,ie=X;for(;;){if(ie===t)break t;if(O===s&&++q===n&&(c=r),O===i&&++ee===l&&(y=r),(X=ie.nextSibling)!==null)break;ie=O,O=ie.parentNode}ie=X}s=c===-1||y===-1?null:{start:c,end:y}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zo={focusedElem:t,selectionRange:s},Pi=!1,rt=a;rt!==null;)if(a=rt,t=a.child,(a.subtreeFlags&1024)!==0&&t!==null)t.return=a,rt=t;else for(;rt!==null;){switch(a=rt,i=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,s=a,n=i.memoizedProps,i=i.memoizedState,l=s.stateNode;try{var Ne=Ss(s.type,n,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(Ne,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(ye){Xe(s,s.return,ye)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,s=t.nodeType,s===9)Fo(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Fo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(u(163))}if(t=a.sibling,t!==null){t.return=a.return,rt=t;break}rt=a.return}}function Wm(t,a,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ga(t,s),l&4&&sn(5,s);break;case 1:if(Ga(t,s),l&4)if(t=s.stateNode,a===null)try{t.componentDidMount()}catch(r){Xe(s,s.return,r)}else{var n=Ss(s.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(n,a,t.__reactInternalSnapshotBeforeUpdate)}catch(r){Xe(s,s.return,r)}}l&64&&Qm(s),l&512&&ln(s,s.return);break;case 3:if(Ga(t,s),l&64&&(t=s.updateQueue,t!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{Pd(t,a)}catch(r){Xe(s,s.return,r)}}break;case 27:a===null&&l&4&&Jm(s);case 26:case 5:Ga(t,s),a===null&&l&4&&Zm(s),l&512&&ln(s,s.return);break;case 12:Ga(t,s);break;case 13:Ga(t,s),l&4&&au(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=tp.bind(null,s),yp(t,s))));break;case 22:if(l=s.memoizedState!==null||Aa,!l){a=a!==null&&a.memoizedState!==null||Je,n=Aa;var i=Je;Aa=l,(Je=a)&&!i?Ha(t,s,(s.subtreeFlags&8772)!==0):Ga(t,s),Aa=n,Je=i}break;case 30:break;default:Ga(t,s)}}function eu(t){var a=t.alternate;a!==null&&(t.alternate=null,eu(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&ar(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Dt=!1;function Ca(t,a,s){for(s=s.child;s!==null;)tu(t,a,s),s=s.sibling}function tu(t,a,s){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(be,s)}catch{}switch(s.tag){case 26:Je||ia(s,a),Ca(t,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Je||ia(s,a);var l=Ye,n=Dt;Ja(s.type)&&(Ye=s.stateNode,Dt=!1),Ca(t,a,s),gn(s.stateNode),Ye=l,Dt=n;break;case 5:Je||ia(s,a);case 6:if(l=Ye,n=Dt,Ye=null,Ca(t,a,s),Ye=l,Dt=n,Ye!==null)if(Dt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(s.stateNode)}catch(i){Xe(s,a,i)}else try{Ye.removeChild(s.stateNode)}catch(i){Xe(s,a,i)}break;case 18:Ye!==null&&(Dt?(t=Ye,Iu(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Nn(t)):Iu(Ye,s.stateNode));break;case 4:l=Ye,n=Dt,Ye=s.stateNode.containerInfo,Dt=!0,Ca(t,a,s),Ye=l,Dt=n;break;case 0:case 11:case 14:case 15:Je||Ia(2,s,a),Je||Ia(4,s,a),Ca(t,a,s);break;case 1:Je||(ia(s,a),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Vm(s,a,l)),Ca(t,a,s);break;case 21:Ca(t,a,s);break;case 22:Je=(l=Je)||s.memoizedState!==null,Ca(t,a,s),Je=l;break;default:Ca(t,a,s)}}function au(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Nn(t)}catch(s){Xe(a,a.return,s)}}function Qg(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new Fm),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new Fm),a;default:throw Error(u(435,t.tag))}}function Do(t,a){var s=Qg(t);a.forEach(function(l){var n=ap.bind(null,t,l);s.has(l)||(s.add(l),l.then(n,n))})}function Ut(t,a){var s=a.deletions;if(s!==null)for(var l=0;l<s.length;l++){var n=s[l],i=t,r=a,c=r;e:for(;c!==null;){switch(c.tag){case 27:if(Ja(c.type)){Ye=c.stateNode,Dt=!1;break e}break;case 5:Ye=c.stateNode,Dt=!1;break e;case 3:case 4:Ye=c.stateNode.containerInfo,Dt=!0;break e}c=c.return}if(Ye===null)throw Error(u(160));tu(i,r,n),Ye=null,Dt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)su(a,t),a=a.sibling}var ea=null;function su(t,a){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ut(a,t),$t(t),l&4&&(Ia(3,t,t.return),sn(3,t),Ia(5,t,t.return));break;case 1:Ut(a,t),$t(t),l&512&&(Je||s===null||ia(s,s.return)),l&64&&Aa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var n=ea;if(Ut(a,t),$t(t),l&512&&(Je||s===null||ia(s,s.return)),l&4){var i=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Tl]||i[pt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),xt(i,l,s),i[pt]=t,nt(i),l=i;break e;case"link":var r=Ju("link","href",n).get(l+(s.href||""));if(r){for(var c=0;c<r.length;c++)if(i=r[c],i.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&i.getAttribute("rel")===(s.rel==null?null:s.rel)&&i.getAttribute("title")===(s.title==null?null:s.title)&&i.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){r.splice(c,1);break t}}i=n.createElement(l),xt(i,l,s),n.head.appendChild(i);break;case"meta":if(r=Ju("meta","content",n).get(l+(s.content||""))){for(c=0;c<r.length;c++)if(i=r[c],i.getAttribute("content")===(s.content==null?null:""+s.content)&&i.getAttribute("name")===(s.name==null?null:s.name)&&i.getAttribute("property")===(s.property==null?null:s.property)&&i.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&i.getAttribute("charset")===(s.charSet==null?null:s.charSet)){r.splice(c,1);break t}}i=n.createElement(l),xt(i,l,s),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[pt]=t,nt(i),l=i}t.stateNode=l}else Fu(n,t.type,t.stateNode);else t.stateNode=Ku(n,l,t.memoizedProps);else i!==l?(i===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):i.count--,l===null?Fu(n,t.type,t.stateNode):Ku(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&jo(t,t.memoizedProps,s.memoizedProps)}break;case 27:Ut(a,t),$t(t),l&512&&(Je||s===null||ia(s,s.return)),s!==null&&l&4&&jo(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Ut(a,t),$t(t),l&512&&(Je||s===null||ia(s,s.return)),t.flags&32){n=t.stateNode;try{Gs(n,"")}catch(X){Xe(t,t.return,X)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,jo(t,n,s!==null?s.memoizedProps:n)),l&1024&&(So=!0);break;case 6:if(Ut(a,t),$t(t),l&4){if(t.stateNode===null)throw Error(u(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(X){Xe(t,t.return,X)}}break;case 3:if(Ei=null,n=ea,ea=Ri(a.containerInfo),Ut(a,t),ea=n,$t(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Nn(a.containerInfo)}catch(X){Xe(t,t.return,X)}So&&(So=!1,lu(t));break;case 4:l=ea,ea=Ri(t.stateNode.containerInfo),Ut(a,t),$t(t),ea=l;break;case 12:Ut(a,t),$t(t);break;case 13:Ut(a,t),$t(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Eo=Xt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Do(t,l)));break;case 22:n=t.memoizedState!==null;var y=s!==null&&s.memoizedState!==null,q=Aa,ee=Je;if(Aa=q||n,Je=ee||y,Ut(a,t),Je=ee,Aa=q,$t(t),l&8192)e:for(a=t.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(s===null||y||Aa||Je||Ds(t)),s=null,a=t;;){if(a.tag===5||a.tag===26){if(s===null){y=s=a;try{if(i=y.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=y.stateNode;var ie=y.memoizedProps.style,O=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;c.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(X){Xe(y,y.return,X)}}}else if(a.tag===6){if(s===null){y=a;try{y.stateNode.nodeValue=n?"":y.memoizedProps}catch(X){Xe(y,y.return,X)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Do(t,s))));break;case 19:Ut(a,t),$t(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Do(t,l)));break;case 30:break;case 21:break;default:Ut(a,t),$t(t)}}function $t(t){var a=t.flags;if(a&2){try{for(var s,l=t.return;l!==null;){if(Km(l)){s=l;break}l=l.return}if(s==null)throw Error(u(160));switch(s.tag){case 27:var n=s.stateNode,i=No(t);hi(t,i,n);break;case 5:var r=s.stateNode;s.flags&32&&(Gs(r,""),s.flags&=-33);var c=No(t);hi(t,c,r);break;case 3:case 4:var y=s.stateNode.containerInfo,q=No(t);wo(t,q,y);break;default:throw Error(u(161))}}catch(ee){Xe(t,t.return,ee)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function lu(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;lu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Ga(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Wm(t,a.alternate,a),a=a.sibling}function Ds(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Ia(4,a,a.return),Ds(a);break;case 1:ia(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Vm(a,a.return,s),Ds(a);break;case 27:gn(a.stateNode);case 26:case 5:ia(a,a.return),Ds(a);break;case 22:a.memoizedState===null&&Ds(a);break;case 30:Ds(a);break;default:Ds(a)}t=t.sibling}}function Ha(t,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=t,i=a,r=i.flags;switch(i.tag){case 0:case 11:case 15:Ha(n,i,s),sn(4,i);break;case 1:if(Ha(n,i,s),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(q){Xe(l,l.return,q)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var y=n.shared.hiddenCallbacks;if(y!==null)for(n.shared.hiddenCallbacks=null,n=0;n<y.length;n++)Md(y[n],c)}catch(q){Xe(l,l.return,q)}}s&&r&64&&Qm(i),ln(i,i.return);break;case 27:Jm(i);case 26:case 5:Ha(n,i,s),s&&l===null&&r&4&&Zm(i),ln(i,i.return);break;case 12:Ha(n,i,s);break;case 13:Ha(n,i,s),s&&r&4&&au(n,i);break;case 22:i.memoizedState===null&&Ha(n,i,s),ln(i,i.return);break;case 30:break;default:Ha(n,i,s)}a=a.sibling}}function Ao(t,a){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Il(s))}function Co(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Il(t))}function ra(t,a,s,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)nu(t,a,s,l),a=a.sibling}function nu(t,a,s,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a,s,l),n&2048&&sn(9,a);break;case 1:ra(t,a,s,l);break;case 3:ra(t,a,s,l),n&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Il(t)));break;case 12:if(n&2048){ra(t,a,s,l),t=a.stateNode;try{var i=a.memoizedProps,r=i.id,c=i.onPostCommit;typeof c=="function"&&c(r,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(y){Xe(a,a.return,y)}}else ra(t,a,s,l);break;case 13:ra(t,a,s,l);break;case 23:break;case 22:i=a.stateNode,r=a.alternate,a.memoizedState!==null?i._visibility&2?ra(t,a,s,l):nn(t,a):i._visibility&2?ra(t,a,s,l):(i._visibility|=2,cl(t,a,s,l,(a.subtreeFlags&10256)!==0)),n&2048&&Ao(r,a);break;case 24:ra(t,a,s,l),n&2048&&Co(a.alternate,a);break;default:ra(t,a,s,l)}}function cl(t,a,s,l,n){for(n=n&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var i=t,r=a,c=s,y=l,q=r.flags;switch(r.tag){case 0:case 11:case 15:cl(i,r,c,y,n),sn(8,r);break;case 23:break;case 22:var ee=r.stateNode;r.memoizedState!==null?ee._visibility&2?cl(i,r,c,y,n):nn(i,r):(ee._visibility|=2,cl(i,r,c,y,n)),n&&q&2048&&Ao(r.alternate,r);break;case 24:cl(i,r,c,y,n),n&&q&2048&&Co(r.alternate,r);break;default:cl(i,r,c,y,n)}a=a.sibling}}function nn(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=t,l=a,n=l.flags;switch(l.tag){case 22:nn(s,l),n&2048&&Ao(l.alternate,l);break;case 24:nn(s,l),n&2048&&Co(l.alternate,l);break;default:nn(s,l)}a=a.sibling}}var rn=8192;function dl(t){if(t.subtreeFlags&rn)for(t=t.child;t!==null;)iu(t),t=t.sibling}function iu(t){switch(t.tag){case 26:dl(t),t.flags&rn&&t.memoizedState!==null&&zp(ea,t.memoizedState,t.memoizedProps);break;case 5:dl(t);break;case 3:case 4:var a=ea;ea=Ri(t.stateNode.containerInfo),dl(t),ea=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=rn,rn=16777216,dl(t),rn=a):dl(t));break;default:dl(t)}}function ru(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function on(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];rt=l,cu(l,t)}ru(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ou(t),t=t.sibling}function ou(t){switch(t.tag){case 0:case 11:case 15:on(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:on(t);break;case 12:on(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,fi(t)):on(t);break;default:on(t)}}function fi(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];rt=l,cu(l,t)}ru(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Ia(8,a,a.return),fi(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,fi(a));break;default:fi(a)}t=t.sibling}}function cu(t,a){for(;rt!==null;){var s=rt;switch(s.tag){case 0:case 11:case 15:Ia(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Il(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,rt=l;else e:for(s=t;rt!==null;){l=rt;var n=l.sibling,i=l.return;if(eu(l),l===s){rt=null;break e}if(n!==null){n.return=i,rt=n;break e}rt=i}}}var Vg={getCacheForType:function(t){var a=ht(st),s=a.data.get(t);return s===void 0&&(s=t(),a.data.set(t,s)),s}},Zg=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ge=null,ke=null,ze=0,$e=0,qt=null,Ya=!1,ml=!1,To=!1,Ta=0,Ze=0,Qa=0,As=0,Ro=0,Kt=0,ul=0,cn=null,At=null,ko=!1,Eo=0,bi=1/0,yi=null,Va=null,ut=0,Za=null,xl=null,gl=0,zo=0,Mo=null,du=null,dn=0,Po=null;function _t(){if((Ue&2)!==0&&ze!==0)return ze&-ze;if(x.T!==null){var t=tl;return t!==0?t:Bo()}return Ac()}function mu(){Kt===0&&(Kt=(ze&536870912)===0||Pe?Nc():536870912);var t=Zt.current;return t!==null&&(t.flags|=32),Kt}function Lt(t,a,s){(t===Ge&&($e===2||$e===9)||t.cancelPendingCommit!==null)&&(pl(t,0),Ka(t,ze,Kt,!1)),Cl(t,s),((Ue&2)===0||t!==Ge)&&(t===Ge&&((Ue&2)===0&&(As|=s),Ze===4&&Ka(t,ze,Kt,!1)),oa(t))}function uu(t,a,s){if((Ue&6)!==0)throw Error(u(327));var l=!s&&(a&124)===0&&(a&t.expiredLanes)===0||Al(t,a),n=l?Fg(t,a):qo(t,a,!0),i=l;do{if(n===0){ml&&!l&&Ka(t,a,0,!1);break}else{if(s=t.current.alternate,i&&!Kg(s)){n=qo(t,a,!1),i=!1;continue}if(n===2){if(i=a,t.errorRecoveryDisabledLanes&i)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;e:{var c=t;n=cn;var y=c.current.memoizedState.isDehydrated;if(y&&(pl(c,r).flags|=256),r=qo(c,r,!1),r!==2){if(To&&!y){c.errorRecoveryDisabledLanes|=i,As|=i,n=4;break e}i=At,At=n,i!==null&&(At===null?At=i:At.push.apply(At,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){pl(t,0),Ka(t,a,0,!0);break}e:{switch(l=t,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a)break;case 6:Ka(l,a,Kt,!Ya);break e;case 2:At=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(n=Eo+300-Xt(),10<n)){if(Ka(l,a,Kt,!Ya),$s(l,0,!0)!==0)break e;l.timeoutHandle=Bu(xu.bind(null,l,s,At,yi,ko,a,Kt,As,ul,Ya,i,2,-0,0),n);break e}xu(l,s,At,yi,ko,a,Kt,As,ul,Ya,i,0,-0,0)}}break}while(!0);oa(t)}function xu(t,a,s,l,n,i,r,c,y,q,ee,ie,O,X){if(t.timeoutHandle=-1,ie=a.subtreeFlags,(ie&8192||(ie&16785408)===16785408)&&(fn={stylesheets:null,count:0,unsuspend:Ep},iu(a),ie=Mp(),ie!==null)){t.cancelPendingCommit=ie(vu.bind(null,t,a,i,s,l,n,r,c,y,ee,1,O,X)),Ka(t,i,r,!q);return}vu(t,a,i,s,l,n,r,c,y)}function Kg(t){for(var a=t;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var n=s[l],i=n.getSnapshot;n=n.value;try{if(!Mt(i(),n))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ka(t,a,s,l){a&=~Ro,a&=~As,t.suspendedLanes|=a,t.pingedLanes&=~a,l&&(t.warmLanes|=a),l=t.expirationTimes;for(var n=a;0<n;){var i=31-We(n),r=1<<i;l[i]=-1,n&=~r}s!==0&&Sc(t,s,a)}function vi(){return(Ue&6)===0?(mn(0),!1):!0}function Uo(){if(ke!==null){if($e===0)var t=ke.return;else t=ke,va=vs=null,Jr(t),rl=null,en=0,t=ke;for(;t!==null;)Ym(t.alternate,t),t=t.return;ke=null}}function pl(t,a){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,gp(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Uo(),Ge=t,ke=s=fa(t.current,null),ze=a,$e=0,qt=null,Ya=!1,ml=Al(t,a),To=!1,ul=Kt=Ro=As=Qa=Ze=0,At=cn=null,ko=!1,(a&8)!==0&&(a|=a&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=a;0<l;){var n=31-We(l),i=1<<n;a|=t[n],l&=~i}return Ta=a,Xn(),s}function gu(t,a){Ce=null,x.H=ri,a===Hl||a===Jn?(a=Ed(),$e=3):a===Td?(a=Ed(),$e=4):$e=a===zm?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,qt=a,ke===null&&(Ze=1,ui(t,Ht(a,t.current)))}function pu(){var t=x.H;return x.H=ri,t===null?ri:t}function hu(){var t=x.A;return x.A=Vg,t}function $o(){Ze=4,Ya||(ze&4194048)!==ze&&Zt.current!==null||(ml=!0),(Qa&134217727)===0&&(As&134217727)===0||Ge===null||Ka(Ge,ze,Kt,!1)}function qo(t,a,s){var l=Ue;Ue|=2;var n=pu(),i=hu();(Ge!==t||ze!==a)&&(yi=null,pl(t,a)),a=!1;var r=Ze;e:do try{if($e!==0&&ke!==null){var c=ke,y=qt;switch($e){case 8:Uo(),r=6;break e;case 3:case 2:case 9:case 6:Zt.current===null&&(a=!0);var q=$e;if($e=0,qt=null,hl(t,c,y,q),s&&ml){r=0;break e}break;default:q=$e,$e=0,qt=null,hl(t,c,y,q)}}Jg(),r=Ze;break}catch(ee){gu(t,ee)}while(!0);return a&&t.shellSuspendCounter++,va=vs=null,Ue=l,x.H=n,x.A=i,ke===null&&(Ge=null,ze=0,Xn()),r}function Jg(){for(;ke!==null;)fu(ke)}function Fg(t,a){var s=Ue;Ue|=2;var l=pu(),n=hu();Ge!==t||ze!==a?(yi=null,bi=Xt()+500,pl(t,a)):ml=Al(t,a);e:do try{if($e!==0&&ke!==null){a=ke;var i=qt;t:switch($e){case 1:$e=0,qt=null,hl(t,a,i,1);break;case 2:case 9:if(Rd(i)){$e=0,qt=null,bu(a);break}a=function(){$e!==2&&$e!==9||Ge!==t||($e=7),oa(t)},i.then(a,a);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:Rd(i)?($e=0,qt=null,bu(a)):($e=0,qt=null,hl(t,a,i,7));break;case 5:var r=null;switch(ke.tag){case 26:r=ke.memoizedState;case 5:case 27:var c=ke;if(!r||Wu(r)){$e=0,qt=null;var y=c.sibling;if(y!==null)ke=y;else{var q=c.return;q!==null?(ke=q,ji(q)):ke=null}break t}}$e=0,qt=null,hl(t,a,i,5);break;case 6:$e=0,qt=null,hl(t,a,i,6);break;case 8:Uo(),Ze=6;break e;default:throw Error(u(462))}}Wg();break}catch(ee){gu(t,ee)}while(!0);return va=vs=null,x.H=l,x.A=n,Ue=s,ke!==null?0:(Ge=null,ze=0,Xn(),Ze)}function Wg(){for(;ke!==null&&!je();)fu(ke)}function fu(t){var a=Gm(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,a===null?ji(t):ke=a}function bu(t){var a=t,s=a.alternate;switch(a.tag){case 15:case 0:a=_m(s,a,a.pendingProps,a.type,void 0,ze);break;case 11:a=_m(s,a,a.pendingProps,a.type.render,a.ref,ze);break;case 5:Jr(a);default:Ym(s,a),a=ke=yd(a,Ta),a=Gm(s,a,Ta)}t.memoizedProps=t.pendingProps,a===null?ji(t):ke=a}function hl(t,a,s,l){va=vs=null,Jr(a),rl=null,en=0;var n=a.return;try{if(Xg(t,n,a,s,ze)){Ze=1,ui(t,Ht(s,t.current)),ke=null;return}}catch(i){if(n!==null)throw ke=n,i;Ze=1,ui(t,Ht(s,t.current)),ke=null;return}a.flags&32768?(Pe||l===1?t=!0:ml||(ze&536870912)!==0?t=!1:(Ya=t=!0,(l===2||l===9||l===3||l===6)&&(l=Zt.current,l!==null&&l.tag===13&&(l.flags|=16384))),yu(a,t)):ji(a)}function ji(t){var a=t;do{if((a.flags&32768)!==0){yu(a,Ya);return}t=a.return;var s=Gg(a.alternate,a,Ta);if(s!==null){ke=s;return}if(a=a.sibling,a!==null){ke=a;return}ke=a=t}while(a!==null);Ze===0&&(Ze=5)}function yu(t,a){do{var s=Hg(t.alternate,t);if(s!==null){s.flags&=32767,ke=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(t=t.sibling,t!==null)){ke=t;return}ke=t=s}while(t!==null);Ze=6,ke=null}function vu(t,a,s,l,n,i,r,c,y){t.cancelPendingCommit=null;do Ni();while(ut!==0);if((Ue&6)!==0)throw Error(u(327));if(a!==null){if(a===t.current)throw Error(u(177));if(i=a.lanes|a.childLanes,i|=Ar,Ex(t,s,i,r,c,y),t===Ge&&(ke=Ge=null,ze=0),xl=a,Za=t,gl=s,zo=i,Mo=n,du=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sp(ga,function(){return Du(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=x.T,x.T=null,n=h.p,h.p=2,r=Ue,Ue|=4;try{Yg(t,a,s)}finally{Ue=r,h.p=n,x.T=l}}ut=1,ju(),Nu(),wu()}}function ju(){if(ut===1){ut=0;var t=Za,a=xl,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=x.T,x.T=null;var l=h.p;h.p=2;var n=Ue;Ue|=4;try{su(a,t);var i=Zo,r=cd(t.containerInfo),c=i.focusedElem,y=i.selectionRange;if(r!==c&&c&&c.ownerDocument&&od(c.ownerDocument.documentElement,c)){if(y!==null&&jr(c)){var q=y.start,ee=y.end;if(ee===void 0&&(ee=q),"selectionStart"in c)c.selectionStart=q,c.selectionEnd=Math.min(ee,c.value.length);else{var ie=c.ownerDocument||document,O=ie&&ie.defaultView||window;if(O.getSelection){var X=O.getSelection(),Ne=c.textContent.length,ye=Math.min(y.start,Ne),Be=y.end===void 0?ye:Math.min(y.end,Ne);!X.extend&&ye>Be&&(r=Be,Be=ye,ye=r);var T=rd(c,ye),D=rd(c,Be);if(T&&D&&(X.rangeCount!==1||X.anchorNode!==T.node||X.anchorOffset!==T.offset||X.focusNode!==D.node||X.focusOffset!==D.offset)){var P=ie.createRange();P.setStart(T.node,T.offset),X.removeAllRanges(),ye>Be?(X.addRange(P),X.extend(D.node,D.offset)):(P.setEnd(D.node,D.offset),X.addRange(P))}}}}for(ie=[],X=c;X=X.parentNode;)X.nodeType===1&&ie.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<ie.length;c++){var le=ie[c];le.element.scrollLeft=le.left,le.element.scrollTop=le.top}}Pi=!!Vo,Zo=Vo=null}finally{Ue=n,h.p=l,x.T=s}}t.current=a,ut=2}}function Nu(){if(ut===2){ut=0;var t=Za,a=xl,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=x.T,x.T=null;var l=h.p;h.p=2;var n=Ue;Ue|=4;try{Wm(t,a.alternate,a)}finally{Ue=n,h.p=l,x.T=s}}ut=3}}function wu(){if(ut===4||ut===3){ut=0,Ms();var t=Za,a=xl,s=gl,l=du;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ut=5:(ut=0,xl=Za=null,Su(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Va=null),er(s),a=a.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(be,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=x.T,n=h.p,h.p=2,x.T=null;try{for(var i=t.onRecoverableError,r=0;r<l.length;r++){var c=l[r];i(c.value,{componentStack:c.stack})}}finally{x.T=a,h.p=n}}(gl&3)!==0&&Ni(),oa(t),n=t.pendingLanes,(s&4194090)!==0&&(n&42)!==0?t===Po?dn++:(dn=0,Po=t):dn=0,mn(0)}}function Su(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Il(a)))}function Ni(t){return ju(),Nu(),wu(),Du()}function Du(){if(ut!==5)return!1;var t=Za,a=zo;zo=0;var s=er(gl),l=x.T,n=h.p;try{h.p=32>s?32:s,x.T=null,s=Mo,Mo=null;var i=Za,r=gl;if(ut=0,xl=Za=null,gl=0,(Ue&6)!==0)throw Error(u(331));var c=Ue;if(Ue|=4,ou(i.current),nu(i,i.current,r,s),Ue=c,mn(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(be,i)}catch{}return!0}finally{h.p=n,x.T=l,Su(t,a)}}function Au(t,a,s){a=Ht(s,a),a=uo(t.stateNode,a,2),t=La(t,a,2),t!==null&&(Cl(t,2),oa(t))}function Xe(t,a,s){if(t.tag===3)Au(t,t,s);else for(;a!==null;){if(a.tag===3){Au(a,t,s);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Va===null||!Va.has(l))){t=Ht(s,t),s=km(2),l=La(a,s,2),l!==null&&(Em(s,l,a,t),Cl(l,2),oa(l));break}}a=a.return}}function _o(t,a,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Zg;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(s)||(To=!0,n.add(s),t=ep.bind(null,t,a,s),a.then(t,t))}function ep(t,a,s){var l=t.pingCache;l!==null&&l.delete(a),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Ge===t&&(ze&s)===s&&(Ze===4||Ze===3&&(ze&62914560)===ze&&300>Xt()-Eo?(Ue&2)===0&&pl(t,0):Ro|=s,ul===ze&&(ul=0)),oa(t)}function Cu(t,a){a===0&&(a=wc()),t=Js(t,a),t!==null&&(Cl(t,a),oa(t))}function tp(t){var a=t.memoizedState,s=0;a!==null&&(s=a.retryLane),Cu(t,s)}function ap(t,a){var s=0;switch(t.tag){case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(s=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(a),Cu(t,s)}function sp(t,a){return _e(t,a)}var wi=null,fl=null,Lo=!1,Si=!1,Oo=!1,Cs=0;function oa(t){t!==fl&&t.next===null&&(fl===null?wi=fl=t:fl=fl.next=t),Si=!0,Lo||(Lo=!0,np())}function mn(t,a){if(!Oo&&Si){Oo=!0;do for(var s=!1,l=wi;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-We(42|t)+1)-1,i&=n&~(r&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(s=!0,Eu(l,i))}else i=ze,i=$s(l,l===Ge?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Al(l,i)||(s=!0,Eu(l,i));l=l.next}while(s);Oo=!1}}function lp(){Tu()}function Tu(){Si=Lo=!1;var t=0;Cs!==0&&(xp()&&(t=Cs),Cs=0);for(var a=Xt(),s=null,l=wi;l!==null;){var n=l.next,i=Ru(l,a);i===0?(l.next=null,s===null?wi=n:s.next=n,n===null&&(fl=s)):(s=l,(t!==0||(i&3)!==0)&&(Si=!0)),l=n}mn(t)}function Ru(t,a){for(var s=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var r=31-We(i),c=1<<r,y=n[r];y===-1?((c&s)===0||(c&l)!==0)&&(n[r]=kx(c,a)):y<=a&&(t.expiredLanes|=c),i&=~c}if(a=Ge,s=ze,s=$s(t,t===a?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===a&&($e===2||$e===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Se(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Al(t,s)){if(a=s&-s,a===t.callbackPriority)return a;switch(l!==null&&Se(l),er(s)){case 2:case 8:s=Rn;break;case 32:s=ga;break;case 268435456:s=kn;break;default:s=ga}return l=ku.bind(null,t),s=_e(s,l),t.callbackPriority=a,t.callbackNode=s,a}return l!==null&&l!==null&&Se(l),t.callbackPriority=2,t.callbackNode=null,2}function ku(t,a){if(ut!==0&&ut!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Ni()&&t.callbackNode!==s)return null;var l=ze;return l=$s(t,t===Ge?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(uu(t,l,a),Ru(t,Xt()),t.callbackNode!=null&&t.callbackNode===s?ku.bind(null,t):null)}function Eu(t,a){if(Ni())return null;uu(t,a,!0)}function np(){pp(function(){(Ue&6)!==0?_e(Tn,lp):Tu()})}function Bo(){return Cs===0&&(Cs=Nc()),Cs}function zu(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Un(""+t)}function Mu(t,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,t.id&&s.setAttribute("form",t.id),a.parentNode.insertBefore(s,a),t=new FormData(t),s.parentNode.removeChild(s),t}function ip(t,a,s,l,n){if(a==="submit"&&s&&s.stateNode===n){var i=zu((n[Nt]||null).action),r=l.submitter;r&&(a=(a=r[Nt]||null)?zu(a.formAction):r.getAttribute("formAction"),a!==null&&(i=a,r=null));var c=new Ln("action","action",null,l,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Cs!==0){var y=r?Mu(n,r):new FormData(n);io(s,{pending:!0,data:y,method:n.method,action:i},null,y)}}else typeof i=="function"&&(c.preventDefault(),y=r?Mu(n,r):new FormData(n),io(s,{pending:!0,data:y,method:n.method,action:i},i,y))},currentTarget:n}]})}}for(var Xo=0;Xo<Dr.length;Xo++){var Io=Dr[Xo],rp=Io.toLowerCase(),op=Io[0].toUpperCase()+Io.slice(1);Wt(rp,"on"+op)}Wt(ud,"onAnimationEnd"),Wt(xd,"onAnimationIteration"),Wt(gd,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(Dg,"onTransitionRun"),Wt(Ag,"onTransitionStart"),Wt(Cg,"onTransitionCancel"),Wt(pd,"onTransitionEnd"),Bs("onMouseEnter",["mouseout","mouseover"]),Bs("onMouseLeave",["mouseout","mouseover"]),Bs("onPointerEnter",["pointerout","pointerover"]),Bs("onPointerLeave",["pointerout","pointerover"]),ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ms("onBeforeInput",["compositionend","keypress","textInput","paste"]),ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(un));function Pu(t,a){a=(a&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],n=l.event;l=l.listeners;e:{var i=void 0;if(a)for(var r=l.length-1;0<=r;r--){var c=l[r],y=c.instance,q=c.currentTarget;if(c=c.listener,y!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=q;try{i(n)}catch(ee){mi(ee)}n.currentTarget=null,i=y}else for(r=0;r<l.length;r++){if(c=l[r],y=c.instance,q=c.currentTarget,c=c.listener,y!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=q;try{i(n)}catch(ee){mi(ee)}n.currentTarget=null,i=y}}}}function Ee(t,a){var s=a[tr];s===void 0&&(s=a[tr]=new Set);var l=t+"__bubble";s.has(l)||(Uu(a,t,2,!1),s.add(l))}function Go(t,a,s){var l=0;a&&(l|=4),Uu(s,t,l,a)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[Di]){t[Di]=!0,Tc.forEach(function(s){s!=="selectionchange"&&(cp.has(s)||Go(s,!1,t),Go(s,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Di]||(a[Di]=!0,Go("selectionchange",!1,a))}}function Uu(t,a,s,l){switch(nx(a)){case 2:var n=$p;break;case 8:n=qp;break;default:n=nc}s=n.bind(null,a,s,t),n=void 0,!ur||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(a,s,{capture:!0,passive:n}):t.addEventListener(a,s,!0):n!==void 0?t.addEventListener(a,s,{passive:n}):t.addEventListener(a,s,!1)}function Yo(t,a,s,l,n){var i=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var c=l.stateNode.containerInfo;if(c===n)break;if(r===4)for(r=l.return;r!==null;){var y=r.tag;if((y===3||y===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;c!==null;){if(r=_s(c),r===null)return;if(y=r.tag,y===5||y===6||y===26||y===27){l=i=r;continue e}c=c.parentNode}}l=l.return}Xc(function(){var q=i,ee=dr(s),ie=[];e:{var O=hd.get(t);if(O!==void 0){var X=Ln,Ne=t;switch(t){case"keypress":if(qn(s)===0)break e;case"keydown":case"keyup":X=sg;break;case"focusin":Ne="focus",X=hr;break;case"focusout":Ne="blur",X=hr;break;case"beforeblur":case"afterblur":X=hr;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=ig;break;case ud:case xd:case gd:X=Vx;break;case pd:X=og;break;case"scroll":case"scrollend":X=Ix;break;case"wheel":X=dg;break;case"copy":case"cut":case"paste":X=Kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Qc;break;case"toggle":case"beforetoggle":X=ug}var ye=(a&4)!==0,Be=!ye&&(t==="scroll"||t==="scrollend"),T=ye?O!==null?O+"Capture":null:O;ye=[];for(var D=q,P;D!==null;){var le=D;if(P=le.stateNode,le=le.tag,le!==5&&le!==26&&le!==27||P===null||T===null||(le=kl(D,T),le!=null&&ye.push(xn(D,le,P))),Be)break;D=D.return}0<ye.length&&(O=new X(O,Ne,null,s,ee),ie.push({event:O,listeners:ye}))}}if((a&7)===0){e:{if(O=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",O&&s!==cr&&(Ne=s.relatedTarget||s.fromElement)&&(_s(Ne)||Ne[qs]))break e;if((X||O)&&(O=ee.window===ee?ee:(O=ee.ownerDocument)?O.defaultView||O.parentWindow:window,X?(Ne=s.relatedTarget||s.toElement,X=q,Ne=Ne?_s(Ne):null,Ne!==null&&(Be=N(Ne),ye=Ne.tag,Ne!==Be||ye!==5&&ye!==27&&ye!==6)&&(Ne=null)):(X=null,Ne=q),X!==Ne)){if(ye=Hc,le="onMouseLeave",T="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(ye=Qc,le="onPointerLeave",T="onPointerEnter",D="pointer"),Be=X==null?O:Rl(X),P=Ne==null?O:Rl(Ne),O=new ye(le,D+"leave",X,s,ee),O.target=Be,O.relatedTarget=P,le=null,_s(ee)===q&&(ye=new ye(T,D+"enter",Ne,s,ee),ye.target=P,ye.relatedTarget=Be,le=ye),Be=le,X&&Ne)t:{for(ye=X,T=Ne,D=0,P=ye;P;P=bl(P))D++;for(P=0,le=T;le;le=bl(le))P++;for(;0<D-P;)ye=bl(ye),D--;for(;0<P-D;)T=bl(T),P--;for(;D--;){if(ye===T||T!==null&&ye===T.alternate)break t;ye=bl(ye),T=bl(T)}ye=null}else ye=null;X!==null&&$u(ie,O,X,ye,!1),Ne!==null&&Be!==null&&$u(ie,Be,Ne,ye,!0)}}e:{if(O=q?Rl(q):window,X=O.nodeName&&O.nodeName.toLowerCase(),X==="select"||X==="input"&&O.type==="file")var ge=td;else if(Wc(O))if(ad)ge=Ng;else{ge=vg;var Te=yg}else X=O.nodeName,!X||X.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?q&&or(q.elementType)&&(ge=td):ge=jg;if(ge&&(ge=ge(t,q))){ed(ie,ge,s,ee);break e}Te&&Te(t,O,q),t==="focusout"&&q&&O.type==="number"&&q.memoizedProps.value!=null&&rr(O,"number",O.value)}switch(Te=q?Rl(q):window,t){case"focusin":(Wc(Te)||Te.contentEditable==="true")&&(Vs=Te,Nr=q,_l=null);break;case"focusout":_l=Nr=Vs=null;break;case"mousedown":wr=!0;break;case"contextmenu":case"mouseup":case"dragend":wr=!1,dd(ie,s,ee);break;case"selectionchange":if(Sg)break;case"keydown":case"keyup":dd(ie,s,ee)}var he;if(br)e:{switch(t){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Qs?Jc(t,s)&&(ve="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(ve="onCompositionStart");ve&&(Vc&&s.locale!=="ko"&&(Qs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Qs&&(he=Ic()):(Ua=ee,xr="value"in Ua?Ua.value:Ua.textContent,Qs=!0)),Te=Ai(q,ve),0<Te.length&&(ve=new Yc(ve,t,null,s,ee),ie.push({event:ve,listeners:Te}),he?ve.data=he:(he=Fc(s),he!==null&&(ve.data=he)))),(he=gg?pg(t,s):hg(t,s))&&(ve=Ai(q,"onBeforeInput"),0<ve.length&&(Te=new Yc("onBeforeInput","beforeinput",null,s,ee),ie.push({event:Te,listeners:ve}),Te.data=he)),ip(ie,t,q,s,ee)}Pu(ie,a)})}function xn(t,a,s){return{instance:t,listener:a,currentTarget:s}}function Ai(t,a){for(var s=a+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=kl(t,s),n!=null&&l.unshift(xn(t,n,i)),n=kl(t,a),n!=null&&l.push(xn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function bl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $u(t,a,s,l,n){for(var i=a._reactName,r=[];s!==null&&s!==l;){var c=s,y=c.alternate,q=c.stateNode;if(c=c.tag,y!==null&&y===l)break;c!==5&&c!==26&&c!==27||q===null||(y=q,n?(q=kl(s,i),q!=null&&r.unshift(xn(s,q,y))):n||(q=kl(s,i),q!=null&&r.push(xn(s,q,y)))),s=s.return}r.length!==0&&t.push({event:a,listeners:r})}var dp=/\r\n?/g,mp=/\u0000|\uFFFD/g;function qu(t){return(typeof t=="string"?t:""+t).replace(dp,`
`).replace(mp,"")}function _u(t,a){return a=qu(a),qu(t)===a}function Ci(){}function Oe(t,a,s,l,n,i){switch(s){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Gs(t,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Gs(t,""+l);break;case"className":zn(t,"class",l);break;case"tabIndex":zn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":zn(t,s,l);break;case"style":Oc(t,l,i);break;case"data":if(a!=="object"){zn(t,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Un(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(s==="formAction"?(a!=="input"&&Oe(t,a,"name",n.name,n,null),Oe(t,a,"formEncType",n.formEncType,n,null),Oe(t,a,"formMethod",n.formMethod,n,null),Oe(t,a,"formTarget",n.formTarget,n,null)):(Oe(t,a,"encType",n.encType,n,null),Oe(t,a,"method",n.method,n,null),Oe(t,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Un(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Ci);break;case"onScroll":l!=null&&Ee("scroll",t);break;case"onScrollEnd":l!=null&&Ee("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(s=l.__html,s!=null){if(n.children!=null)throw Error(u(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Un(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),En(t,"popover",l);break;case"xlinkActuate":pa(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":pa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":pa(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":pa(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":pa(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":pa(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":pa(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":pa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":pa(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":En(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Bx.get(s)||s,En(t,s,l))}}function Qo(t,a,s,l,n,i){switch(s){case"style":Oc(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(s=l.__html,s!=null){if(n.children!=null)throw Error(u(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Gs(t,l):(typeof l=="number"||typeof l=="bigint")&&Gs(t,""+l);break;case"onScroll":l!=null&&Ee("scroll",t);break;case"onScrollEnd":l!=null&&Ee("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ci);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rc.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(n=s.endsWith("Capture"),a=s.slice(2,n?s.length-7:void 0),i=t[Nt]||null,i=i!=null?i[s]:null,typeof i=="function"&&t.removeEventListener(a,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(a,l,n);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):En(t,s,l)}}}function xt(t,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var l=!1,n=!1,i;for(i in s)if(s.hasOwnProperty(i)){var r=s[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Oe(t,a,i,r,s,null)}}n&&Oe(t,a,"srcSet",s.srcSet,s,null),l&&Oe(t,a,"src",s.src,s,null);return;case"input":Ee("invalid",t);var c=i=r=n=null,y=null,q=null;for(l in s)if(s.hasOwnProperty(l)){var ee=s[l];if(ee!=null)switch(l){case"name":n=ee;break;case"type":r=ee;break;case"checked":y=ee;break;case"defaultChecked":q=ee;break;case"value":i=ee;break;case"defaultValue":c=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(u(137,a));break;default:Oe(t,a,l,ee,s,null)}}$c(t,i,c,y,q,r,n,!1),Mn(t);return;case"select":Ee("invalid",t),l=r=i=null;for(n in s)if(s.hasOwnProperty(n)&&(c=s[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":r=c;break;case"multiple":l=c;default:Oe(t,a,n,c,s,null)}a=i,s=r,t.multiple=!!l,a!=null?Is(t,!!l,a,!1):s!=null&&Is(t,!!l,s,!0);return;case"textarea":Ee("invalid",t),i=n=l=null;for(r in s)if(s.hasOwnProperty(r)&&(c=s[r],c!=null))switch(r){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:Oe(t,a,r,c,s,null)}_c(t,l,n,i),Mn(t);return;case"option":for(y in s)if(s.hasOwnProperty(y)&&(l=s[y],l!=null))switch(y){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Oe(t,a,y,l,s,null)}return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(l=0;l<un.length;l++)Ee(un[l],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in s)if(s.hasOwnProperty(q)&&(l=s[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Oe(t,a,q,l,s,null)}return;default:if(or(a)){for(ee in s)s.hasOwnProperty(ee)&&(l=s[ee],l!==void 0&&Qo(t,a,ee,l,s,void 0));return}}for(c in s)s.hasOwnProperty(c)&&(l=s[c],l!=null&&Oe(t,a,c,l,s,null))}function up(t,a,s,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,c=null,y=null,q=null,ee=null;for(X in s){var ie=s[X];if(s.hasOwnProperty(X)&&ie!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":y=ie;default:l.hasOwnProperty(X)||Oe(t,a,X,null,l,ie)}}for(var O in l){var X=l[O];if(ie=s[O],l.hasOwnProperty(O)&&(X!=null||ie!=null))switch(O){case"type":i=X;break;case"name":n=X;break;case"checked":q=X;break;case"defaultChecked":ee=X;break;case"value":r=X;break;case"defaultValue":c=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(u(137,a));break;default:X!==ie&&Oe(t,a,O,X,l,ie)}}ir(t,r,c,y,q,ee,i,n);return;case"select":X=r=c=O=null;for(i in s)if(y=s[i],s.hasOwnProperty(i)&&y!=null)switch(i){case"value":break;case"multiple":X=y;default:l.hasOwnProperty(i)||Oe(t,a,i,null,l,y)}for(n in l)if(i=l[n],y=s[n],l.hasOwnProperty(n)&&(i!=null||y!=null))switch(n){case"value":O=i;break;case"defaultValue":c=i;break;case"multiple":r=i;default:i!==y&&Oe(t,a,n,i,l,y)}a=c,s=r,l=X,O!=null?Is(t,!!s,O,!1):!!l!=!!s&&(a!=null?Is(t,!!s,a,!0):Is(t,!!s,s?[]:"",!1));return;case"textarea":X=O=null;for(c in s)if(n=s[c],s.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Oe(t,a,c,null,l,n)}for(r in l)if(n=l[r],i=s[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":O=n;break;case"defaultValue":X=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&Oe(t,a,r,n,l,i)}qc(t,O,X);return;case"option":for(var Ne in s)if(O=s[Ne],s.hasOwnProperty(Ne)&&O!=null&&!l.hasOwnProperty(Ne))switch(Ne){case"selected":t.selected=!1;break;default:Oe(t,a,Ne,null,l,O)}for(y in l)if(O=l[y],X=s[y],l.hasOwnProperty(y)&&O!==X&&(O!=null||X!=null))switch(y){case"selected":t.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Oe(t,a,y,O,l,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in s)O=s[ye],s.hasOwnProperty(ye)&&O!=null&&!l.hasOwnProperty(ye)&&Oe(t,a,ye,null,l,O);for(q in l)if(O=l[q],X=s[q],l.hasOwnProperty(q)&&O!==X&&(O!=null||X!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,a));break;default:Oe(t,a,q,O,l,X)}return;default:if(or(a)){for(var Be in s)O=s[Be],s.hasOwnProperty(Be)&&O!==void 0&&!l.hasOwnProperty(Be)&&Qo(t,a,Be,void 0,l,O);for(ee in l)O=l[ee],X=s[ee],!l.hasOwnProperty(ee)||O===X||O===void 0&&X===void 0||Qo(t,a,ee,O,l,X);return}}for(var T in s)O=s[T],s.hasOwnProperty(T)&&O!=null&&!l.hasOwnProperty(T)&&Oe(t,a,T,null,l,O);for(ie in l)O=l[ie],X=s[ie],!l.hasOwnProperty(ie)||O===X||O==null&&X==null||Oe(t,a,ie,O,l,X)}var Vo=null,Zo=null;function Ti(t){return t.nodeType===9?t:t.ownerDocument}function Lu(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ou(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Ko(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Jo=null;function xp(){var t=window.event;return t&&t.type==="popstate"?t===Jo?!1:(Jo=t,!0):(Jo=null,!1)}var Bu=typeof setTimeout=="function"?setTimeout:void 0,gp=typeof clearTimeout=="function"?clearTimeout:void 0,Xu=typeof Promise=="function"?Promise:void 0,pp=typeof queueMicrotask=="function"?queueMicrotask:typeof Xu<"u"?function(t){return Xu.resolve(null).then(t).catch(hp)}:Bu;function hp(t){setTimeout(function(){throw t})}function Ja(t){return t==="head"}function Iu(t,a){var s=a,l=0,n=0;do{var i=s.nextSibling;if(t.removeChild(s),i&&i.nodeType===8)if(s=i.data,s==="/$"){if(0<l&&8>l){s=l;var r=t.ownerDocument;if(s&1&&gn(r.documentElement),s&2&&gn(r.body),s&4)for(s=r.head,gn(s),r=s.firstChild;r;){var c=r.nextSibling,y=r.nodeName;r[Tl]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&r.rel.toLowerCase()==="stylesheet"||s.removeChild(r),r=c}}if(n===0){t.removeChild(i),Nn(a);return}n--}else s==="$"||s==="$?"||s==="$!"?n++:l=s.charCodeAt(0)-48;else l=0;s=i}while(s);Nn(a)}function Fo(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Fo(s),ar(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function fp(t,a,s,l){for(;t.nodeType===1;){var n=s;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Tl])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=ta(t.nextSibling),t===null)break}return null}function bp(t,a,s){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=ta(t.nextSibling),t===null))return null;return t}function Wo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function yp(t,a){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")a();else{var l=function(){a(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ta(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}var ec=null;function Gu(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return t;a--}else s==="/$"&&a++}t=t.previousSibling}return null}function Hu(t,a,s){switch(a=Ti(s),t){case"html":if(t=a.documentElement,!t)throw Error(u(452));return t;case"head":if(t=a.head,!t)throw Error(u(453));return t;case"body":if(t=a.body,!t)throw Error(u(454));return t;default:throw Error(u(451))}}function gn(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ar(t)}var Jt=new Map,Yu=new Set;function Ri(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ra=h.d;h.d={f:vp,r:jp,D:Np,C:wp,L:Sp,m:Dp,X:Cp,S:Ap,M:Tp};function vp(){var t=Ra.f(),a=vi();return t||a}function jp(t){var a=Ls(t);a!==null&&a.tag===5&&a.type==="form"?um(a):Ra.r(t)}var yl=typeof document>"u"?null:document;function Qu(t,a,s){var l=yl;if(l&&typeof a=="string"&&a){var n=Gt(a);n='link[rel="'+t+'"][href="'+n+'"]',typeof s=="string"&&(n+='[crossorigin="'+s+'"]'),Yu.has(n)||(Yu.add(n),t={rel:t,crossOrigin:s,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),xt(a,"link",t),nt(a),l.head.appendChild(a)))}}function Np(t){Ra.D(t),Qu("dns-prefetch",t,null)}function wp(t,a){Ra.C(t,a),Qu("preconnect",t,a)}function Sp(t,a,s){Ra.L(t,a,s);var l=yl;if(l&&t&&a){var n='link[rel="preload"][as="'+Gt(a)+'"]';a==="image"&&s&&s.imageSrcSet?(n+='[imagesrcset="'+Gt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(n+='[imagesizes="'+Gt(s.imageSizes)+'"]')):n+='[href="'+Gt(t)+'"]';var i=n;switch(a){case"style":i=vl(t);break;case"script":i=jl(t)}Jt.has(i)||(t=V({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:t,as:a},s),Jt.set(i,t),l.querySelector(n)!==null||a==="style"&&l.querySelector(pn(i))||a==="script"&&l.querySelector(hn(i))||(a=l.createElement("link"),xt(a,"link",t),nt(a),l.head.appendChild(a)))}}function Dp(t,a){Ra.m(t,a);var s=yl;if(s&&t){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+Gt(l)+'"][href="'+Gt(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=jl(t)}if(!Jt.has(i)&&(t=V({rel:"modulepreload",href:t},a),Jt.set(i,t),s.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(hn(i)))return}l=s.createElement("link"),xt(l,"link",t),nt(l),s.head.appendChild(l)}}}function Ap(t,a,s){Ra.S(t,a,s);var l=yl;if(l&&t){var n=Os(l).hoistableStyles,i=vl(t);a=a||"default";var r=n.get(i);if(!r){var c={loading:0,preload:null};if(r=l.querySelector(pn(i)))c.loading=5;else{t=V({rel:"stylesheet",href:t,"data-precedence":a},s),(s=Jt.get(i))&&tc(t,s);var y=r=l.createElement("link");nt(y),xt(y,"link",t),y._p=new Promise(function(q,ee){y.onload=q,y.onerror=ee}),y.addEventListener("load",function(){c.loading|=1}),y.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ki(r,a,l)}r={type:"stylesheet",instance:r,count:1,state:c},n.set(i,r)}}}function Cp(t,a){Ra.X(t,a);var s=yl;if(s&&t){var l=Os(s).hoistableScripts,n=jl(t),i=l.get(n);i||(i=s.querySelector(hn(n)),i||(t=V({src:t,async:!0},a),(a=Jt.get(n))&&ac(t,a),i=s.createElement("script"),nt(i),xt(i,"link",t),s.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Tp(t,a){Ra.M(t,a);var s=yl;if(s&&t){var l=Os(s).hoistableScripts,n=jl(t),i=l.get(n);i||(i=s.querySelector(hn(n)),i||(t=V({src:t,async:!0,type:"module"},a),(a=Jt.get(n))&&ac(t,a),i=s.createElement("script"),nt(i),xt(i,"link",t),s.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Vu(t,a,s,l){var n=(n=fe.current)?Ri(n):null;if(!n)throw Error(u(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=vl(s.href),s=Os(n).hoistableStyles,l=s.get(a),l||(l={type:"style",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=vl(s.href);var i=Os(n).hoistableStyles,r=i.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,r),(i=n.querySelector(pn(t)))&&!i._p&&(r.instance=i,r.state.loading=5),Jt.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Jt.set(t,s),i||Rp(n,t,s,r.state))),a&&l===null)throw Error(u(528,""));return r}if(a&&l!==null)throw Error(u(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=jl(s),s=Os(n).hoistableScripts,l=s.get(a),l||(l={type:"script",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,t))}}function vl(t){return'href="'+Gt(t)+'"'}function pn(t){return'link[rel="stylesheet"]['+t+"]"}function Zu(t){return V({},t,{"data-precedence":t.precedence,precedence:null})}function Rp(t,a,s,l){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=t.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),xt(a,"link",s),nt(a),t.head.appendChild(a))}function jl(t){return'[src="'+Gt(t)+'"]'}function hn(t){return"script[async]"+t}function Ku(t,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var l=t.querySelector('style[data-href~="'+Gt(s.href)+'"]');if(l)return a.instance=l,nt(l),l;var n=V({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),nt(l),xt(l,"style",n),ki(l,s.precedence,t),a.instance=l;case"stylesheet":n=vl(s.href);var i=t.querySelector(pn(n));if(i)return a.state.loading|=4,a.instance=i,nt(i),i;l=Zu(s),(n=Jt.get(n))&&tc(l,n),i=(t.ownerDocument||t).createElement("link"),nt(i);var r=i;return r._p=new Promise(function(c,y){r.onload=c,r.onerror=y}),xt(i,"link",l),a.state.loading|=4,ki(i,s.precedence,t),a.instance=i;case"script":return i=jl(s.src),(n=t.querySelector(hn(i)))?(a.instance=n,nt(n),n):(l=s,(n=Jt.get(i))&&(l=V({},s),ac(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),nt(n),xt(n,"link",l),t.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,ki(l,s.precedence,t));return a.instance}function ki(t,a,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var c=l[r];if(c.dataset.precedence===a)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(t,a.firstChild))}function tc(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function ac(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Ei=null;function Ju(t,a,s){if(Ei===null){var l=new Map,n=Ei=new Map;n.set(s,l)}else n=Ei,l=n.get(s),l||(l=new Map,n.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),n=0;n<s.length;n++){var i=s[n];if(!(i[Tl]||i[pt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(a)||"";r=t+r;var c=l.get(r);c?c.push(i):l.set(r,[i])}}return l}function Fu(t,a,s){t=t.ownerDocument||t,t.head.insertBefore(s,a==="title"?t.querySelector("head > title"):null)}function kp(t,a,s){if(s===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Wu(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var fn=null;function Ep(){}function zp(t,a,s){if(fn===null)throw Error(u(475));var l=fn;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=vl(s.href),i=t.querySelector(pn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=zi.bind(l),t.then(l,l)),a.state.loading|=4,a.instance=i,nt(i);return}i=t.ownerDocument||t,s=Zu(s),(n=Jt.get(n))&&tc(s,n),i=i.createElement("link"),nt(i);var r=i;r._p=new Promise(function(c,y){r.onload=c,r.onerror=y}),xt(i,"link",s),a.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=zi.bind(l),t.addEventListener("load",a),t.addEventListener("error",a))}}function Mp(){if(fn===null)throw Error(u(475));var t=fn;return t.stylesheets&&t.count===0&&sc(t,t.stylesheets),0<t.count?function(a){var s=setTimeout(function(){if(t.stylesheets&&sc(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s)}}:null}function zi(){if(this.count--,this.count===0){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mi=null;function sc(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mi=new Map,a.forEach(Pp,t),Mi=null,zi.call(t))}function Pp(t,a){if(!(a.state.loading&4)){var s=Mi.get(t);if(s)var l=s.get(null);else{s=new Map,Mi.set(t,s);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(s.set(r.dataset.precedence,r),l=r)}l&&s.set(null,l)}n=a.instance,r=n.getAttribute("data-precedence"),i=s.get(r)||l,i===l&&s.set(null,n),s.set(r,n),this.count++,l=zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),a.state.loading|=4}}var bn={$$typeof:z,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Up(t,a,s,l,n,i,r,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.hiddenUpdates=Fi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ex(t,a,s,l,n,i,r,c,y,q,ee,ie){return t=new Up(t,a,s,r,c,y,q,ie),a=1,i===!0&&(a|=24),i=Pt(3,null,null,a),t.current=i,i.stateNode=t,a=qr(),a.refCount++,t.pooledCache=a,a.refCount++,i.memoizedState={element:l,isDehydrated:s,cache:a},Br(i),t}function tx(t){return t?(t=Fs,t):Fs}function ax(t,a,s,l,n,i){n=tx(n),l.context===null?l.context=n:l.pendingContext=n,l=_a(a),l.payload={element:s},i=i===void 0?null:i,i!==null&&(l.callback=i),s=La(t,l,a),s!==null&&(Lt(s,t,a),Ql(s,t,a))}function sx(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<a?s:a}}function lc(t,a){sx(t,a),(t=t.alternate)&&sx(t,a)}function lx(t){if(t.tag===13){var a=Js(t,67108864);a!==null&&Lt(a,t,67108864),lc(t,67108864)}}var Pi=!0;function $p(t,a,s,l){var n=x.T;x.T=null;var i=h.p;try{h.p=2,nc(t,a,s,l)}finally{h.p=i,x.T=n}}function qp(t,a,s,l){var n=x.T;x.T=null;var i=h.p;try{h.p=8,nc(t,a,s,l)}finally{h.p=i,x.T=n}}function nc(t,a,s,l){if(Pi){var n=ic(l);if(n===null)Yo(t,a,l,Ui,s),ix(t,l);else if(Lp(n,t,a,s,l))l.stopPropagation();else if(ix(t,l),a&4&&-1<_p.indexOf(t)){for(;n!==null;){var i=Ls(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=sa(i.pendingLanes);if(r!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var y=1<<31-We(r);c.entanglements[1]|=y,r&=~y}oa(i),(Ue&6)===0&&(bi=Xt()+500,mn(0))}}break;case 13:c=Js(i,2),c!==null&&Lt(c,i,2),vi(),lc(i,2)}if(i=ic(l),i===null&&Yo(t,a,l,Ui,s),i===n)break;n=i}n!==null&&l.stopPropagation()}else Yo(t,a,l,null,s)}}function ic(t){return t=dr(t),rc(t)}var Ui=null;function rc(t){if(Ui=null,t=_s(t),t!==null){var a=N(t);if(a===null)t=null;else{var s=a.tag;if(s===13){if(t=W(a),t!==null)return t;t=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Ui=t,null}function nx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ki()){case Tn:return 2;case Rn:return 8;case ga:case Ps:return 32;case kn:return 268435456;default:return 32}default:return 32}}var oc=!1,Fa=null,Wa=null,es=null,yn=new Map,vn=new Map,ts=[],_p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ix(t,a){switch(t){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":yn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(a.pointerId)}}function jn(t,a,s,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:a,domEventName:s,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},a!==null&&(a=Ls(a),a!==null&&lx(a)),t):(t.eventSystemFlags|=l,a=t.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),t)}function Lp(t,a,s,l,n){switch(a){case"focusin":return Fa=jn(Fa,t,a,s,l,n),!0;case"dragenter":return Wa=jn(Wa,t,a,s,l,n),!0;case"mouseover":return es=jn(es,t,a,s,l,n),!0;case"pointerover":var i=n.pointerId;return yn.set(i,jn(yn.get(i)||null,t,a,s,l,n)),!0;case"gotpointercapture":return i=n.pointerId,vn.set(i,jn(vn.get(i)||null,t,a,s,l,n)),!0}return!1}function rx(t){var a=_s(t.target);if(a!==null){var s=N(a);if(s!==null){if(a=s.tag,a===13){if(a=W(s),a!==null){t.blockedOn=a,zx(t.priority,function(){if(s.tag===13){var l=_t();l=Wi(l);var n=Js(s,l);n!==null&&Lt(n,s,l),lc(s,l)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $i(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var s=ic(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);cr=l,s.target.dispatchEvent(l),cr=null}else return a=Ls(s),a!==null&&lx(a),t.blockedOn=s,!1;a.shift()}return!0}function ox(t,a,s){$i(t)&&s.delete(a)}function Op(){oc=!1,Fa!==null&&$i(Fa)&&(Fa=null),Wa!==null&&$i(Wa)&&(Wa=null),es!==null&&$i(es)&&(es=null),yn.forEach(ox),vn.forEach(ox)}function qi(t,a){t.blockedOn===a&&(t.blockedOn=null,oc||(oc=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Op)))}var _i=null;function cx(t){_i!==t&&(_i=t,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){_i===t&&(_i=null);for(var a=0;a<t.length;a+=3){var s=t[a],l=t[a+1],n=t[a+2];if(typeof l!="function"){if(rc(l||s)===null)continue;break}var i=Ls(s);i!==null&&(t.splice(a,3),a-=3,io(i,{pending:!0,data:n,method:s.method,action:l},l,n))}}))}function Nn(t){function a(y){return qi(y,t)}Fa!==null&&qi(Fa,t),Wa!==null&&qi(Wa,t),es!==null&&qi(es,t),yn.forEach(a),vn.forEach(a);for(var s=0;s<ts.length;s++){var l=ts[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ts.length&&(s=ts[0],s.blockedOn===null);)rx(s),s.blockedOn===null&&ts.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var n=s[l],i=s[l+1],r=n[Nt]||null;if(typeof i=="function")r||cx(s);else if(r){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[Nt]||null)c=r.formAction;else if(rc(n)!==null)continue}else c=r.action;typeof c=="function"?s[l+1]=c:(s.splice(l,3),l-=3),cx(s)}}}function cc(t){this._internalRoot=t}Li.prototype.render=cc.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(u(409));var s=a.current,l=_t();ax(s,l,t,a,null,null)},Li.prototype.unmount=cc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;ax(t.current,2,null,t,null,null),vi(),a[qs]=null}};function Li(t){this._internalRoot=t}Li.prototype.unstable_scheduleHydration=function(t){if(t){var a=Ac();t={blockedOn:null,target:t,priority:a};for(var s=0;s<ts.length&&a!==0&&a<ts[s].priority;s++);ts.splice(s,0,t),s===0&&rx(t)}};var dx=o.version;if(dx!=="19.1.0")throw Error(u(527,dx,"19.1.0"));h.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(u(188)):(t=Object.keys(t).join(","),Error(u(268,t)));return t=H(a),t=t!==null?R(t):null,t=t===null?null:t.stateNode,t};var Bp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{be=Oi.inject(Bp),Re=Oi}catch{}}return Sn.createRoot=function(t,a){if(!j(t))throw Error(u(299));var s=!1,l="",n=Am,i=Cm,r=Tm,c=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(c=a.unstable_transitionCallbacks)),a=ex(t,1,!1,null,null,s,l,n,i,r,c,null),t[qs]=a.current,Ho(t),new cc(a)},Sn.hydrateRoot=function(t,a,s){if(!j(t))throw Error(u(299));var l=!1,n="",i=Am,r=Cm,c=Tm,y=null,q=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(n=s.identifierPrefix),s.onUncaughtError!==void 0&&(i=s.onUncaughtError),s.onCaughtError!==void 0&&(r=s.onCaughtError),s.onRecoverableError!==void 0&&(c=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(y=s.unstable_transitionCallbacks),s.formState!==void 0&&(q=s.formState)),a=ex(t,1,!0,a,s??null,l,n,i,r,c,y,q),a.context=tx(null),s=a.current,l=_t(),l=Wi(l),n=_a(l),n.callback=null,La(s,n,l),s=l,a.current.lanes=s,Cl(a,s),oa(a),t[qs]=a.current,Ho(t),new Li(a)},Sn.version="19.1.0",Sn}var Nx;function g0(){if(Nx)return xc.exports;Nx=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(o){console.error(o)}}return d(),xc.exports=x0(),xc.exports}var p0=g0();const Ae=Vp.create({baseURL:"https://hms-backend-swart.vercel.app/api",withCredentials:!0,headers:{"Content-Type":"application/json"}});Ae.interceptors.request.use(d=>(console.log("API Request:",d.method?.toUpperCase(),d.url),d),d=>(console.error("API Request Error:",d),Promise.reject(d)));Ae.interceptors.response.use(d=>(console.log("API Response:",d.status,d.config.url),d),d=>(console.error("API Response Error:",{status:d.response?.status,url:d.config?.url,message:d.message,cors:d.response?.headers["access-control-allow-origin"]}),Promise.reject(d)));const gt=Dn(d=>({allUsers:[],user:null,singleUser:null,loading:!1,isAuth:!1,isCheckingAuth:!0,checkAuth:async()=>{try{const o=await Ae.get("/user/me");d({isAuth:!0,user:o.data.user})}catch(o){console.log("Error in checkAuth:",o),d({isAuth:!1,user:null})}finally{d({isCheckingAuth:!1})}},getAllUsers:async()=>{try{const o=await Ae.get("/user/getAllUsers");d({allUsers:o.data.users})}catch(o){console.log("Error in checkAuth:",o),d({user:null})}finally{d({isCheckingAuth:!1})}},getUserById:async o=>{try{d({loading:!0});const p=await Ae.get(`/user/${o}`);d({singleUser:p.data.user})}catch(p){xe.error(p?.response?.data?.message||"User not found")}finally{d({loading:!1})}},registerUser:async o=>{try{return d({loading:!0}),await Ae.post("/user/register",o),xe.success("Registration successful! Please verify your email."),!0}catch(p){return xe.error(p?.response?.data?.message),!1}finally{d({loading:!1})}},loginUser:async o=>{try{d({loading:!0});const{data:p}=await Ae.post("/user/login",o);return d({user:p.user,isAuth:!0}),xe.success(p.message),!0}catch(p){return xe.error(p?.response?.data?.message),!1}finally{d({loading:!1})}},verifyUser:async o=>{try{d({loading:!0});const{data:p}=await Ae.post("/user/verifyEmail",o);return d({user:p.user,isAuth:!0}),xe.success("Email verified successfully!"),!0}catch(p){return xe.error(p?.response?.data?.message),!1}finally{d({loading:!1})}},logoutUser:async()=>{try{return d({loading:!0}),await Ae.get("/user/logout"),d({user:null,isAuth:!1}),xe.success("Logged out successfully"),!0}catch(o){return xe.error("Logout failed",o?.response?.data?.message),!1}finally{d({loading:!1})}},forgotPassword:async o=>{try{d({loading:!0});const{data:p}=await Ae.post("/user/forgot",o);return xe.success("Success",p.message),!0}catch(p){return xe.error(p?.response?.data?.message),!1}finally{d({loading:!1})}},verifyForgotCode:async o=>{try{d({loading:!0});const{data:p}=await Ae.post("/user/verifyForgot",o);return xe.success("Success",p.message),!0}catch(p){return xe.error(p?.response?.data?.message),!1}finally{d({loading:!1})}},newPassword:async({password:o,code:p})=>{try{d({loading:!0});const{data:u}=await Ae.post("/user/newPassword",{password:o,code:p});return xe.success(u.message),!0}catch(u){return xe.error(u?.response?.data?.message),!1}finally{d({loading:!1})}},updateProfile:async o=>{try{d({loading:!0});const{data:p}=await Ae.put("/user/update-profile",o);return d({user:p.user}),xe.success(p.message),!0}catch(p){return xe.error(p?.response?.data?.message),!1}finally{d({loading:!1})}}}));function h0(){const{logoutUser:d,user:o}=gt(),p=yt(),[u,j]=A.useState(!0),[N,W]=A.useState(!1),[B,H]=A.useState(!1);A.useEffect(()=>{const v=()=>{H(window.innerWidth<768),window.innerWidth>=768&&W(!1)};v(),window.addEventListener("resize",v);const ne=setTimeout(()=>j(!1),600);return()=>{window.removeEventListener("resize",v),clearTimeout(ne)}},[]);const R=async()=>{await d(),p("/persona-select")},V=()=>{switch(o.role){case"Admin":p("/admin-dashboard");break;case"Reception":p("/reception-dashboard");break;case"Doctor":p("/doctor-dashboard");break;case"Lab":p("/lab-dashboard");break;case"X-Ray":p("/xray-dashboard");break;case"Pharmacy":p("/pharmacy-dashboard",{state:{name:o.name}});break;case"Patient":p("/patient-dashboard");break;default:p("/")}W(!1)},E={Admin:{icon:e.jsx(Sx,{className:"w-5 h-5"}),color:"from-purple-500 to-pink-500"},Reception:{icon:e.jsx(at,{className:"w-5 h-5"}),color:"from-blue-500 to-cyan-500"},Doctor:{icon:e.jsx(da,{className:"w-5 h-5"}),color:"from-green-500 to-teal-500"},Lab:{icon:e.jsx(Fe,{className:"w-5 h-5"}),color:"from-amber-500 to-orange-500"},"X-Ray":{icon:e.jsx(Fe,{className:"w-5 h-5"}),color:"from-amber-500 to-orange-500"},Pharmacy:{icon:e.jsx(Rt,{className:"w-5 h-5"}),color:"from-red-500 to-rose-500"},Patient:{icon:e.jsx(Zi,{className:"w-5 h-5"}),color:"from-green-500 to-emerald-500"}}[o?.role]||{icon:e.jsx(qe,{className:"w-5 h-5"}),color:"from-gray-500 to-slate-500"};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col",children:[e.jsxs("header",{className:"bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-4 py-3 shadow-xl md:px-6 md:py-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[B&&e.jsx("button",{onClick:()=>W(!N),className:"p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors",children:N?e.jsx(Ft,{className:"w-5 h-5"}):e.jsx(ux,{className:"w-5 h-5"})}),e.jsx("h1",{className:"text-lg font-bold md:text-2xl md:tracking-tight",children:"MediCare Hospital"})]}),e.jsx("div",{className:"flex items-center gap-2 md:gap-4",children:B?e.jsx("div",{className:`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${E.color}`,children:mx.cloneElement(E.icon,{className:"w-5 h-5"})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 rounded-full bg-white/20 backdrop-blur-sm",children:[e.jsx("div",{className:`p-2 rounded-full bg-gradient-to-r ${E.color}`,children:E.icon}),e.jsxs("div",{className:"hidden md:block text-white",children:[e.jsx("div",{className:"font-semibold",children:o?.name}),e.jsx("div",{className:"text-sm opacity-80",children:o?.role})]})]}),e.jsxs("button",{onClick:R,className:"hidden md:flex btn btn-sm bg-white/20 hover:bg-white/30 border-0 text-white items-center gap-2 backdrop-blur-sm",children:[e.jsx(hc,{className:"w-4 h-4"})," Logout"]})]})})]}),B&&e.jsxs("div",{className:"mt-3 pt-3 border-t border-white/20 flex justify-between items-center",children:[e.jsxs("div",{className:"text-white",children:[e.jsx("div",{className:"font-semibold text-sm",children:o?.name}),e.jsx("div",{className:"text-xs opacity-80",children:o?.role})]}),e.jsxs("button",{onClick:R,className:"flex items-center gap-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors",children:[e.jsx(hc,{className:"w-4 h-4"})," Logout"]})]})]}),e.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[e.jsxs("aside",{className:`
          ${B?"fixed inset-y-0 left-0 z-50 transform":"relative"}
          ${N?"translate-x-0":"-translate-x-full"}
          transition-transform duration-300 ease-in-out
          w-64 bg-white/95 backdrop-blur-md shadow-xl p-6 flex flex-col gap-6
          border-r border-slate-200 md:translate-x-0 md:relative md:flex
          ${B&&"overflow-y-auto"}
        `,children:[B&&e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-800",children:"Navigation"}),e.jsx("button",{onClick:()=>W(!1),className:"p-2 rounded-lg hover:bg-slate-100 transition-colors",children:e.jsx(Ft,{className:"w-5 h-5 text-slate-600"})})]}),!B&&e.jsx("h2",{className:"text-xl font-bold text-slate-800 mb-4",children:"Navigation"}),e.jsxs("button",{className:"btn btn-lg bg-gradient-to-r from-indigo-500 to-purple-600 border-0 text-white flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 shadow-lg w-full",onClick:V,children:[e.jsx(Bi,{className:"w-5 h-5"})," Go to Dashboard"]}),e.jsxs("button",{className:"btn btn-outline border-slate-300 hover:text-amber-50 text-slate-700 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 w-full",onClick:()=>{p("profile"),W(!1)},children:[e.jsx(dc,{className:"w-5 h-5"})," Profile"]}),!B&&e.jsxs("div",{className:"mt-6 p-4 bg-indigo-50 rounded-lg shadow-inner",children:[e.jsx("h3",{className:"text-sm font-semibold text-indigo-700 mb-2",children:"Quick Info"}),e.jsxs("p",{className:"text-slate-700 text-sm mb-1",children:["Role: ",o?.role]}),e.jsx("p",{className:"text-slate-700 text-sm",children:"Access your dashboard for more details"})]})]}),B&&N&&e.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 md:hidden",onClick:()=>W(!1)}),e.jsx("main",{className:"flex-1 p-4 md:p-8 overflow-auto",children:u?e.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 animate-pulse",children:[e.jsx("div",{className:"h-6 md:h-8 bg-slate-200 rounded w-1/2 md:w-1/3 mb-4"}),e.jsx("div",{className:"h-4 bg-slate-200 rounded w-3/4 md:w-2/3 mb-6"}),e.jsx("div",{className:"h-10 md:h-12 bg-slate-200 rounded w-1/2 md:w-1/4"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border border-white/50 animate-fadeInUp",children:[e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[e.jsx("div",{className:`p-3 rounded-xl bg-gradient-to-r ${E.color} text-white shadow-lg`,children:mx.cloneElement(E.icon,{className:"w-6 h-6 md:w-8 md:h-8"})}),e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl md:text-3xl font-bold text-slate-800",children:["Welcome back, ",e.jsx("span",{className:"text-indigo-700",children:o?.name})]}),e.jsxs("p",{className:"text-slate-600 text-sm md:text-base mt-2",children:["You're logged in as ",e.jsx("span",{className:"font-semibold text-indigo-600",children:o?.role})]})]})]}),e.jsx("p",{className:"text-slate-600 mb-6 text-sm md:text-base",children:"Use the menu to navigate to your dashboard or profile settings."}),B&&e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[e.jsxs("button",{onClick:V,className:"bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow",children:[e.jsx(Bi,{className:"w-5 h-5"})," Dashboard"]}),e.jsxs("button",{onClick:()=>p("profile"),className:"bg-white border border-slate-300 text-slate-700 font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors",children:[e.jsx(dc,{className:"w-5 h-5"})," Profile"]})]}),e.jsxs("button",{onClick:V,className:"btn btn-lg bg-gradient-to-r from-indigo-600 to-purple-700 border-0 text-white w-full md:w-auto px-6 py-4 font-semibold rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300",children:[e.jsx(Bi,{className:"w-5 h-5 mr-2 inline"}),B?"Open Dashboard":"Launch My Dashboard"]})]}),B&&!N&&e.jsx("div",{className:"mt-4 text-center",children:e.jsx("p",{className:"text-sm text-slate-500",children:"Tap the menu button in top-left for more options"})}),e.jsxs("div",{className:"mt-8 text-center text-slate-500 text-xs md:text-sm",children:["MediCare Hospital © ",new Date().getFullYear()," • Secure & Compliant"]})]})})]}),B&&e.jsx("div",{className:"md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-2 shadow-2xl",children:e.jsxs("div",{className:"flex justify-around",children:[e.jsxs("button",{onClick:()=>W(!0),className:"flex flex-col items-center p-2 text-slate-600 hover:text-indigo-600 transition-colors",children:[e.jsx(ux,{className:"w-5 h-5 mb-1"}),e.jsx("span",{className:"text-xs",children:"Menu"})]}),e.jsxs("button",{onClick:V,className:"flex flex-col items-center p-2 text-slate-600 hover:text-indigo-600 transition-colors",children:[e.jsx(Bi,{className:"w-5 h-5 mb-1"}),e.jsx("span",{className:"text-xs",children:"Dashboard"})]}),e.jsxs("button",{onClick:()=>p("profile"),className:"flex flex-col items-center p-2 text-slate-600 hover:text-indigo-600 transition-colors",children:[e.jsx(dc,{className:"w-5 h-5 mb-1"}),e.jsx("span",{className:"text-xs",children:"Profile"})]})]})})]})}function f0(){const d=yt(),{user:o,updateProfile:p,logoutUser:u}=gt(),[j,N]=A.useState(!1),[W,B]=A.useState(!1),[H,R]=A.useState(!1),[V,b]=A.useState({name:"",email:"",phone:"",address:"",emergencyContact:"",bloodGroup:"",allergies:"",SpecialistDoctor:"",ConsultationCharges:"",ConsultationTime:"",ConsultationTimePerPatient:"",TotalAppointments:"",licenseNumber:""}),[E,v]=A.useState("");A.useEffect(()=>{o&&b({name:o.name||"",email:o.email||"",phone:o.phone||"",address:o.address||"",emergencyContact:o.emergencyContact||"",bloodGroup:o.bloodGroup||"",allergies:o.allergies||"",SpecialistDoctor:o.SpecialistDoctor||"",ConsultationCharges:o.ConsultationCharges||"",ConsultationTime:o.ConsultationTime||"",ConsultationTimePerPatient:o.ConsultationTimePerPatient||"",TotalAppointments:o.TotalAppointments||"",licenseNumber:o.licenseNumber||""})},[o]),A.useEffect(()=>{const Z=()=>{B(window.innerWidth<768)};return Z(),window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)},[]);const ne=Z=>{const{name:L,value:U}=Z.target;b($=>({...$,[L]:U}))},w=async()=>{R(!0);try{await p(V),v("Profile updated successfully!"),N(!1),setTimeout(()=>v(""),3e3)}catch(Z){console.error("Error updating profile:",Z)}finally{R(!1)}},ae=async()=>{await u(),d("/persona-select")},Q=()=>{b({name:o.name||"",email:o.email||"",phone:o.phone||"",address:o.address||"",emergencyContact:o.emergencyContact||"",bloodGroup:o.bloodGroup||"",allergies:o.allergies||"",SpecialistDoctor:o.SpecialistDoctor||"",ConsultationCharges:o.ConsultationCharges||"",ConsultationTime:o.ConsultationTime||"",ConsultationTimePerPatient:o.ConsultationTimePerPatient||"",Appointments:o.Appointments||"",TotalAppointments:o.TotalAppointments||"",licenseNumber:o.licenseNumber||""}),N(!1)},M=Z=>{switch(Z){case"Admin":return"bg-purple-100 text-purple-800";case"Doctor":return"bg-blue-100 text-blue-800";case"Reception":return"bg-green-100 text-green-800";case"Patient":return"bg-pink-100 text-pink-800";case"Pharmacy":return"bg-red-100 text-red-800";case"Lab":return"bg-amber-100 text-amber-800";case"X-Ray":return"bg-orange-100 text-orange-800";default:return"bg-gray-100 text-gray-800"}};if(!o)return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"Loading profile..."})]})});const z=Z=>new Date(Z).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"});return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",children:[e.jsx("header",{className:"bg-white shadow-sm border-b border-slate-200",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center py-4",children:[e.jsxs("button",{onClick:()=>d(-1),className:"flex items-center text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-gray-100",children:[e.jsx(rs,{className:"w-5 h-5"}),!W&&e.jsx("span",{className:"ml-2 font-medium",children:"Back"})]}),e.jsx("h1",{className:"text-xl font-bold text-gray-900 md:text-2xl",children:"Profile Settings"}),e.jsx("button",{onClick:()=>N(!j),className:"flex items-center text-indigo-600 hover:text-indigo-700 font-medium p-2 rounded-lg hover:bg-indigo-50 transition-colors",children:j?e.jsxs(e.Fragment,{children:[e.jsx(Ft,{className:"w-5 h-5 mr-1"}),!W&&e.jsx("span",{children:"Cancel Edit"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Kp,{className:"w-5 h-5 mr-1"}),!W&&e.jsx("span",{children:"Edit Profile"})]})})]})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8",children:[E&&e.jsxs("div",{className:"mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center animate-fadeIn",children:[e.jsx(bt,{className:"w-5 h-5 text-green-600 mr-3"}),e.jsx("span",{className:"text-green-700 font-medium",children:E})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 p-6",children:[e.jsxs("div",{className:"relative mx-auto w-32 h-32 md:w-40 md:h-40",children:[e.jsx("div",{className:"w-full h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold",children:o.name?.charAt(0).toUpperCase()||"U"}),j&&e.jsx("button",{className:"absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg border border-slate-200 hover:bg-gray-50 transition-colors",children:e.jsx(Tt,{className:"w-5 h-5 text-gray-600"})})]}),e.jsxs("div",{className:"text-center mt-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:o.name}),e.jsxs("div",{className:`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${M(o.role)}`,children:[e.jsx(Sx,{className:"w-4 h-4 mr-1"}),o.role]}),e.jsxs("p",{className:"text-gray-600 mt-2 flex items-center justify-center",children:[e.jsx(Rs,{className:"w-4 h-4 mr-2"}),o.email]})]}),e.jsxs("div",{className:"mt-8 space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(Jp,{className:"w-5 h-5 text-gray-500 mr-3"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"User ID"}),e.jsx("p",{className:"font-mono text-sm text-black font-medium",children:o?.role})]})]})}),e.jsx("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(os,{className:"w-5 h-5 text-gray-500 mr-3"}),o&&o.createdAt&&e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Member Since"}),e.jsx("p",{className:"text-sm text-black font-medium",children:z(o.createdAt)})]})]})}),e.jsx("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(bt,{className:"w-5 h-5 text-green-500 mr-3"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Account Status"}),e.jsx("p",{className:"text-sm font-medium text-green-600",children:o.verified?"Verified":"Pending Verification"})]})]})})]}),e.jsxs("button",{onClick:ae,className:"w-full mt-8 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg transition-all hover:shadow-lg flex items-center justify-center",children:[e.jsx(hc,{className:"w-5 h-5 mr-2"}),"Logout Account"]})]})}),e.jsxs("div",{className:"lg:col-span-2",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6",children:[e.jsxs("h3",{className:"text-lg font-bold text-gray-900 mb-6 flex items-center",children:[e.jsx(qe,{className:"w-5 h-5 mr-2 text-indigo-600"}),"Personal Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),j?e.jsx("input",{type:"text",name:"name",value:V.name,onChange:ne,className:"w-full px-4 py-2.5 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsx("p",{className:"text-gray-900",children:o.name})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsxs("p",{className:"text-gray-900 flex items-center",children:[e.jsx(Rs,{className:"w-4 h-4 mr-2 text-gray-500"}),o.email]})}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Email cannot be changed"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),j?e.jsx("input",{type:"tel",name:"phone",value:V.phone,onChange:ne,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",placeholder:"+92312345.."}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsxs("p",{className:"text-gray-900 flex items-center",children:[e.jsx(za,{className:"w-4 h-4 mr-2 text-gray-500"}),o?.phone||"Not provided"]})})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Address"}),j?e.jsx("textarea",{name:"address",value:V.address,onChange:ne,rows:"3",className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",placeholder:"Enter your complete address"}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsxs("p",{className:"text-gray-900 flex items-start",children:[e.jsx(Gi,{className:"w-4 h-4 mr-2 text-gray-500 mt-1 flex-shrink-0"}),e.jsx("span",{children:o.address||"Not provided"})]})})]})]})]}),o.role==="Doctor"&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6",children:[e.jsxs("h3",{className:"text-lg font-bold text-gray-900 mb-6 flex items-center",children:[e.jsx(Fp,{className:"w-5 h-5 mr-2 text-green-500"}),"Doctor Consultation Details"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Specialist"}),j?e.jsx("input",{type:"text",name:"SpecialistDoctor",value:V.SpecialistDoctor,onChange:ne,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"e.g. Cardiologist"}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsx("p",{className:"text-gray-900",children:o.SpecialistDoctor||"Not specified"})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Consultation Charges"}),j?e.jsx("input",{type:"number",name:"ConsultationCharges",value:V.ConsultationCharges,onChange:ne,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"PKR"}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsx("p",{className:"text-gray-900",children:o.ConsultationCharges?`PKR ${o.ConsultationCharges}`:"Not set"})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Consultation Time"}),j?e.jsx("input",{type:"text",name:"ConsultationTime",value:V.ConsultationTime,onChange:ne,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"e.g. 10:00 AM - 2:00 PM"}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsx("p",{className:"text-gray-900",children:o.ConsultationTime||"Not scheduled"})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"license No:"}),j?e.jsx("input",{type:"text",name:"licenseNumber",value:V.licenseNumber,onChange:ne,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"e.g. 72726BS727"}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsx("p",{className:"text-gray-900",children:o.licenseNumber||"Not Found"})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Time Per Patient"}),j?e.jsxs("select",{name:"ConsultationTimePerPatient",value:V.ConsultationTimePerPatient,onChange:ne,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",children:[e.jsx("option",{value:"",children:"Select duration"}),e.jsx("option",{value:"5",children:"5 minutes"}),e.jsx("option",{value:"10",children:"10 minutes"}),e.jsx("option",{value:"15",children:"15 minutes"}),e.jsx("option",{value:"20",children:"20 minutes"}),e.jsx("option",{value:"30",children:"30 minutes"}),e.jsx("option",{value:"40",children:"40 minutes"})]}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsx("p",{className:"text-gray-900",children:o.ConsultationTimePerPatient?`${o.ConsultationTimePerPatient} minutes`:"Not defined"})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Total Appointments"}),j?e.jsx("input",{type:"number",min:"0",name:"TotalAppointments",value:V.TotalAppointments,onChange:ne,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",placeholder:"e.g. 50"}):e.jsx("div",{className:"px-4 py-2.5 text-black bg-gray-50 rounded-lg",children:e.jsx("p",{className:"text-gray-900",children:o.TotalAppointments||0})})]})]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6",children:[e.jsxs("h3",{className:"text-lg font-bold text-gray-900 mb-6 flex items-center",children:[e.jsx(ma,{className:"w-5 h-5 mr-2 text-red-600"}),"Medical Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Blood Group"}),j?e.jsxs("select",{name:"bloodGroup",value:V.bloodGroup,onChange:ne,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",children:[e.jsx("option",{value:"",children:"Select Blood Group"}),e.jsx("option",{value:"A+",children:"A+"}),e.jsx("option",{value:"A-",children:"A-"}),e.jsx("option",{value:"B+",children:"B+"}),e.jsx("option",{value:"B-",children:"B-"}),e.jsx("option",{value:"O+",children:"O+"}),e.jsx("option",{value:"O-",children:"O-"}),e.jsx("option",{value:"AB+",children:"AB+"}),e.jsx("option",{value:"AB-",children:"AB-"})]}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsx("p",{className:"text-gray-900",children:o.bloodGroup||"Not provided"})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Emergency Contact"}),j?e.jsx("input",{type:"text",name:"emergencyContact",value:V.emergencyContact,onChange:ne,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",placeholder:"Name - Phone Number"}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsx("p",{className:"text-gray-900",children:o.emergencyContact||"Not provided"})})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Allergies"}),j?e.jsx("textarea",{name:"allergies",value:V.allergies,onChange:ne,rows:"2",className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",placeholder:"List any allergies or medical conditions"}):e.jsx("div",{className:"px-4 py-2.5 bg-gray-50 rounded-lg",children:e.jsx("p",{className:"text-gray-900",children:o.allergies||"None reported"})})]})]})]}),j&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 p-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsx("button",{onClick:w,disabled:H,className:"flex-1 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-medium py-3.5 rounded-lg transition-all hover:shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",children:H?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(yc,{className:"w-5 h-5 mr-2"}),"Save Changes"]})}),e.jsxs("button",{onClick:Q,className:"flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3.5 rounded-lg transition-colors border border-gray-300",children:[e.jsx(Ft,{className:"w-5 h-5 mr-2 inline"}),"Cancel"]})]}),e.jsx("p",{className:"text-sm text-gray-500 mt-4 text-center",children:"Changes will be updated immediately and reflected across the system"})]})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:e.jsxs("p",{className:"text-center text-sm text-gray-500",children:["Last updated: ",z(o.updatedAt||o.createdAt)," • Account ID: ",o._id?.substring(0,8),"..."]})})]})}const Es=({title:d,subtitle:o})=>e.jsx("div",{className:"hidden lg:flex items-center justify-center bg-base-200 p-32 h-[100vh]",children:e.jsxs("div",{className:"max-w-md text-center pt-14",children:[e.jsx("div",{className:"grid grid-cols-3 gap-3 mb-8",children:[...Array(9)].map((p,u)=>e.jsx("div",{className:`aspect-square rounded-2xl bg-primary/10 ${u%2===0?"animate-pulse":""}`},u))}),e.jsx("h2",{className:"text-2xl font-bold mb-4",children:d}),e.jsx("p",{className:"text-base-content/60",children:o})]})});function b0(){const[d,o]=A.useState(!1),p=yt(),j=xa().state?.role,[N,W]=A.useState({name:"",email:"",password:"",uniqueId:"",role:j}),B=E=>{p("/login",{state:{role:E}})},{registerUser:H,loading:R}=gt(),V=()=>N.name.trim()?N.email.trim()?/\S+@\S+\.\S+/.test(N.email)?N.password?N.password.length<6?xe.error("Password must be at least 6 characters"):j?!0:xe.error("Role missing"):xe.error("Password is required"):xe.error("Invalid email format"):xe.error("Email is required"):xe.error("Full name is required"),b=async E=>{if(E.preventDefault(),!V())return;console.log(N),await H(N)&&p("/verify-email")};return e.jsxs("div",{className:"min-h-screen grid lg:grid-cols-2",children:[e.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:e.jsx("div",{className:"w-full max-w-md space-y-8",children:e.jsxs("div",{className:"w-full max-w-md space-y-8",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[e.jsx("div",{className:`size 12 rounded-x1 bg-primary/10 flex items-center justify-center\r
group-hover:bg-primary/20 transition-colors`}),e.jsx(wl,{className:"size-6 text-primary"})]}),e.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Create Account"}),e.jsx("p",{className:"text-base-content/60",children:"Get started with your free account"}),e.jsx("h1",{className:"text-xl font-semibold text-blue-400 underline mt-2",children:j})]}),e.jsxs("form",{onSubmit:b,className:"space-y-6",children:[e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"Full Name"})}),e.jsxs("div",{className:"flex items-center input input-bordered mt-1  gap-2 w-full",children:[e.jsx(qe,{className:"w-5 h-5 text-base-content/40"}),e.jsx("input",{type:"text",required:!0,placeholder:"Full Name",className:"grow bg-transparent focus:outline-none",value:N.name,onChange:E=>W({...N,name:E.target.value})})]})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"Email"})}),e.jsxs("div",{className:"flex items-center input input-bordered gap-2 mt-1 w-full",children:[e.jsx(Rs,{className:"w-5 h-5 text-base-content/40"}),e.jsx("input",{type:"email",required:!0,placeholder:"you@gmail.com",className:"grow bg-transparent focus:outline-none",value:N.email,onChange:E=>W({...N,email:E.target.value})})]})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"Password"})}),e.jsxs("div",{className:"relative w-full mt-1 ",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none z-10",children:e.jsx(Nl,{className:"w-5 h-5 text-base-content/40"})}),e.jsx("input",{type:d?"text":"password",className:"input input-bordered w-full pl-10 pr-10",placeholder:"........",value:N.password,onChange:E=>W({...N,password:E.target.value})}),e.jsx("button",{type:"button",onClick:()=>o(!d),className:"absolute inset-y-0 right-0 pr-3 flex items-center z-10",children:d?e.jsx(Hi,{className:"w-5 h-5 text-base-content/40"}):e.jsx(jt,{className:"w-5 h-5 text-base-content/40"})})]})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"UniqueID"})}),e.jsxs("div",{className:"flex items-center input input-bordered gap-2 mt-1 w-full",children:[e.jsx(Nl,{className:"w-5 h-5 text-base-content/40"}),e.jsx("input",{type:"text",required:!0,placeholder:"........",className:"grow bg-transparent focus:outline-none",value:N.uniqueId,onChange:E=>W({...N,uniqueId:E.target.value})})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:R,children:R?e.jsxs(e.Fragment,{children:[e.jsx(Sl,{className:"size-5 animate-spin"}),"Loading..."]}):"Sign in"})]}),e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"text-base-content/60",children:["Already have an account?"," ",e.jsx("span",{onClick:()=>B(j),className:"link link-primary",children:"Sign in"})]})})]})})}),e.jsx(Es,{title:"Join our community",subtitle:"Connect with friends, share moments, and stay in touch with your loved ones."})]})}function y0(){const[d,o]=A.useState(!1);xa().state?.role;const[u,j]=A.useState({email:"",password:""}),{loginUser:N,loading:W}=gt(),B=H=>{H.preventDefault(),N(u)};return e.jsxs("div",{className:"min-h-screen grid lg:grid-cols-2",children:[e.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:e.jsxs("div",{className:"w-full max-w-md space-y-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[e.jsx("div",{className:`size-12 rounded-xl bg-primary/10 flex items-center justify-center\r
    group-hover:bg-primary/20 transition-colors`,children:e.jsx(wl,{className:"w-6 h-6 text-primary"})}),e.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Welcome Back"}),e.jsx("p",{className:"text-base-content/60",children:"Sign in to continue to your account"})]}),e.jsxs("form",{onSubmit:B,className:"space-y-6",children:[e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"Email"})}),e.jsxs("div",{className:"flex items-center input input-bordered gap-2 mt-1 w-full",children:[e.jsx(Rs,{className:"w-5 h-5 text-base-content/40"}),e.jsx("input",{type:"email",required:!0,placeholder:"you@gmail.com",className:"grow bg-transparent focus:outline-none",value:u.email,onChange:H=>j({...u,email:H.target.value})})]})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"Password"})}),e.jsxs("div",{className:"relative w-full mt-1",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10",children:e.jsx(Nl,{className:"w-5 h-5 text-base-content/40"})}),e.jsx("input",{type:d?"text":"password",className:"input input-bordered w-full pl-10 pr-10",placeholder:"........",value:u.password,onChange:H=>j({...u,password:H.target.value})}),e.jsx("button",{type:"button",onClick:()=>o(!d),className:"absolute inset-y-0 right-0 pr-3 flex items-center z-10",children:d?e.jsx(Hi,{className:"w-5 h-5 text-base-content/40"}):e.jsx(jt,{className:"w-5 h-5 text-base-content/40"})})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:W,children:W?e.jsxs(e.Fragment,{children:[e.jsx(Sl,{className:"size-5 animate-spin"}),"Loading..."]}):"Sign In"})]}),e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"text-base-content/60",children:e.jsx(Ip,{to:"/forgot-password",className:"link link-primary",children:"Forgot Password?"})})})]})}),e.jsx(Es,{title:"Join our community",subtitle:"Connect with friends, share moments, and stay in touch with your loved ones."})]})}function v0(){const[d,o]=A.useState(""),{verifyUser:p,loading:u}=gt(),j=yt(),N=W=>{W.preventDefault(),p({code:d})&&j("/")};return e.jsxs("div",{className:"min-h-screen grid lg:grid-cols-2",children:[e.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:e.jsxs("div",{className:"w-full max-w-md space-y-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[e.jsx("div",{className:`size-12 rounded-xl bg-primary/10 flex items-center justify-center\r
              group-hover:bg-primary/20 transition-colors`,children:e.jsx(wl,{className:"w-6 h-6 text-primary"})}),e.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Verify Your Email"}),e.jsx("p",{className:"text-base-content/60 text-center",children:"Enter your email to receive the verification code and activate your account."})]}),e.jsxs("form",{onSubmit:N,className:"space-y-6",children:[e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"Code"})}),e.jsxs("div",{className:"flex items-center input input-bordered gap-2 mt-1 w-full",children:[e.jsx(Rs,{className:"w-5 h-5 text-base-content/40"}),e.jsx("input",{type:"text",required:!0,placeholder:"******",className:"grow bg-transparent focus:outline-none",value:d,onChange:W=>o(W.target.value)})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:u,children:u?e.jsxs(e.Fragment,{children:[e.jsx(Sl,{className:"size-5 animate-spin mr-2"}),"Sending..."]}):"Verify Email"})]})]})}),e.jsx(Es,{title:"Stay Connected",subtitle:"Verify your email and enjoy full access to our community features."})]})}function j0(){const[d,o]=A.useState(""),{forgotPassword:p,loading:u}=gt(),j=yt(),N=W=>{W.preventDefault(),p({email:d})&&j("/verify-forgot")};return e.jsxs("div",{className:"min-h-screen grid lg:grid-cols-2",children:[e.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:e.jsxs("div",{className:"w-full max-w-md space-y-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[e.jsx("div",{className:`size-12 rounded-xl bg-primary/10 flex items-center justify-center\r
              group-hover:bg-primary/20 transition-colors`,children:e.jsx(wl,{className:"w-6 h-6 text-primary"})}),e.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Forgot Password"}),e.jsx("p",{className:"text-base-content/60 text-center",children:"Enter your email to receive the verification code and activate your account."})]}),e.jsxs("form",{onSubmit:N,className:"space-y-6",children:[e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"Email"})}),e.jsxs("div",{className:"flex items-center input input-bordered gap-2 mt-1 w-full",children:[e.jsx(Rs,{className:"w-5 h-5 text-base-content/40"}),e.jsx("input",{type:"email",required:!0,placeholder:"you@gmail.com",className:"grow bg-transparent focus:outline-none",value:d,onChange:W=>o(W.target.value)})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:u,children:u?e.jsxs(e.Fragment,{children:[e.jsx(Sl,{className:"size-5 animate-spin mr-2"}),"Sending..."]}):"Send Verification Link"})]})]})}),e.jsx(Es,{title:"Stay Connected",subtitle:"Verify your email and enjoy full access to our community features."})]})}function N0(){const d=yt(),o=xa(),{code:p}=o.state||{},{newPassword:u,loading:j}=gt(),[N,W]=A.useState({password:"",confirmPassword:""}),[B,H]=A.useState(!1),[R,V]=A.useState(!1),b=E=>{if(E.preventDefault(),N.password!==N.confirmPassword){alert("Passwords do not match!");return}u({code:p,password:N.password}).then(()=>d("/login")).catch(v=>console.log(v))};return e.jsxs("div",{className:"min-h-screen grid lg:grid-cols-2",children:[e.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:e.jsxs("div",{className:"w-full max-w-md space-y-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[e.jsx("div",{className:`size-12 rounded-xl bg-primary/10 flex items-center justify-center\r
              group-hover:bg-primary/20 transition-colors`,children:e.jsx(Nl,{className:"w-6 h-6 text-primary"})}),e.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Set New Password"}),e.jsx("p",{className:"text-base-content/60 text-center",children:"Enter your new password and confirm it to reset your account password."})]}),e.jsxs("form",{onSubmit:b,className:"space-y-6",children:[e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"New Password"})}),e.jsxs("div",{className:"relative w-full mt-1",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10",children:e.jsx(Nl,{className:"w-5 h-5 text-base-content/40"})}),e.jsx("input",{type:B?"text":"password",className:"input input-bordered w-full pl-10 pr-10",placeholder:"Enter new password",value:N.password,onChange:E=>W({...N,password:E.target.value})}),e.jsx("button",{type:"button",onClick:()=>H(!B),className:"absolute inset-y-0 right-0 pr-3 flex items-center z-10",children:B?e.jsx(Hi,{className:"w-5 h-5 text-base-content/40"}):e.jsx(jt,{className:"w-5 h-5 text-base-content/40"})})]})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"Confirm Password"})}),e.jsxs("div",{className:"relative w-full mt-1",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10",children:e.jsx(Nl,{className:"w-5 h-5 text-base-content/40"})}),e.jsx("input",{type:R?"text":"password",className:"input input-bordered w-full pl-10 pr-10",placeholder:"Confirm password",value:N.confirmPassword,onChange:E=>W({...N,confirmPassword:E.target.value})}),e.jsx("button",{type:"button",onClick:()=>V(!R),className:"absolute inset-y-0 right-0 pr-3 flex items-center z-10",children:R?e.jsx(Hi,{className:"w-5 h-5 text-base-content/40"}):e.jsx(jt,{className:"w-5 h-5 text-base-content/40"})})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:j,children:j?e.jsxs(e.Fragment,{children:[e.jsx(Sl,{className:"size-5 animate-spin mr-2"}),"Updating..."]}):"Set Password"})]})]})}),e.jsx(Es,{title:"Secure Your Account",subtitle:"Set a strong password to protect your account and enjoy all features safely."})]})}function w0(){const[d,o]=A.useState(""),{verifyForgotCode:p,loading:u}=gt(),j=yt(),N=W=>{W.preventDefault(),p({code:d})&&j("/new-password",{state:{code:d}})};return e.jsxs("div",{className:"min-h-screen grid lg:grid-cols-2",children:[e.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:e.jsxs("div",{className:"w-full max-w-md space-y-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[e.jsx("div",{className:`size-12 rounded-xl bg-primary/10 flex items-center justify-center\r
              group-hover:bg-primary/20 transition-colors`,children:e.jsx(wl,{className:"w-6 h-6 text-primary"})}),e.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Verify Your Email"}),e.jsx("p",{className:"text-base-content/60 text-center",children:"Enter your email to receive the verification code and activate your account."})]}),e.jsxs("form",{onSubmit:N,className:"space-y-6",children:[e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text font-medium",children:"Code"})}),e.jsxs("div",{className:"flex items-center input input-bordered gap-2 mt-1 w-full",children:[e.jsx(Rs,{className:"w-5 h-5 text-base-content/40"}),e.jsx("input",{type:"text",required:!0,placeholder:"******",className:"grow bg-transparent focus:outline-none",value:d,onChange:W=>o(W.target.value)})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:u,children:u?e.jsxs(e.Fragment,{children:[e.jsx(Sl,{className:"size-5 animate-spin mr-2"}),"Sending..."]}):"Verify Email"})]})]})}),e.jsx(Es,{title:"Stay Connected",subtitle:"Verify your email and enjoy full access to our community features."})]})}function wx(){const d=yt(),o=[{name:"Admin",icon:qe},{name:"Reception",icon:Wp},{name:"Doctor",icon:da},{name:"Lab",icon:Fe},{name:"X-Ray",icon:Dx},{name:"Pharmacy",icon:Rt},{name:"Patient",icon:Zi}],p=j=>{d("/signup",{state:{role:j}})},u=()=>{d("/login")};return e.jsxs("div",{className:"min-h-screen grid lg:grid-cols-2",children:[e.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:e.jsxs("div",{className:"w-full max-w-md space-y-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[e.jsx("div",{className:`size-12 rounded-xl bg-primary/10 flex items-center justify-center\r
              group-hover:bg-primary/20 transition-colors`,children:e.jsx(qe,{className:"w-6 h-6 text-primary"})}),e.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Welcome to HMS"}),e.jsx("p",{className:"text-base-content/60 text-center",children:"Select your role to continue"})]}),e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"text-base-content/60",children:["Already have an account?"," ",e.jsx("span",{onClick:()=>u(),className:"link link-primary",children:"Sign in"})]})}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mt-1",children:o.map(({name:j,icon:N})=>e.jsxs("button",{onClick:()=>p(j),className:"flex flex-col items-center justify-center gap-2 p-6 border rounded-lg hover:bg-primary/10 transition-colors",children:[e.jsx(N,{className:"w-8 h-8 text-primary"}),e.jsx("span",{className:"font-medium",children:j})]},j))})]})}),e.jsx(Es,{title:"Hospital Management System",subtitle:"Select your role and access your personalized dashboard securely."})]})}const ft=Dn(d=>({patients:[],CompletePresception:[],singlePatient:null,loading:!1,createPatient:async o=>{try{d({loading:!0});const p=await Ae.post("/patient",o);return d(u=>({patients:[...u.patients,p.data.patient]})),xe.success("Patient created successfully"),!0}catch(p){return xe.error(p?.response?.data?.message||"Failed to create patient"),!1}finally{d({loading:!1})}},getAllPatients:async()=>{try{d({loading:!0});const o=await Ae.get("/patient");d({patients:o.data.patients})}catch(o){xe.error(o?.response?.data?.message||"Failed to fetch patients")}finally{d({loading:!1})}},getPatientById:async o=>{try{d({loading:!0});const p=await Ae.get(`/patient/${o}`);d({singlePatient:p.data.patient})}catch(p){xe.error(p?.response?.data?.message||"Patient not found")}finally{d({loading:!1})}},updatePatient:async(o,p)=>{console.log(p);try{d({loading:!0});const u=await Ae.put(`/patient/${o}`,p);return d(j=>({patients:j.patients.map(N=>N._id===o?u.data.patient:N),singlePatient:u.data.patient})),xe.success("Patient updated successfully"),!0}catch(u){return xe.error(u?.response?.data?.message||"Failed to update patient"),!1}finally{d({loading:!1})}},deletePatient:async o=>{try{return d({loading:!0}),await Ae.delete(`/patient/${o}`),d(p=>({patients:p.patients.filter(u=>u._id!==o)})),xe.success("Patient deleted successfully"),!0}catch(p){return xe.error(p?.response?.data?.message||"Failed to delete patient"),!1}finally{d({loading:!1})}},deleteMedicine:async(o,p,u)=>{try{return d({loading:!0}),await Ae.delete(`/patient/${o}/prescription/${p}/medicine/${u}`),d(j=>({singlePatient:{...j.singlePatient,prescriptions:j.singlePatient.prescriptions.map(N=>N._id===p?{...N,medicines:N.medicines.filter(W=>W._id!==u)}:N)}})),xe.success("Medicine deleted successfully"),!0}catch(j){return xe.error(j?.response?.data?.message||"Failed to delete medicine"),!1}finally{d({loading:!1})}},getPatientByUniqueId:async o=>{try{d({loading:!0});const p=await Ae.get(`/patient/unique/${o}`);return d({singlePatient:p.data.patient}),p.data.patient}catch(p){return xe.error(p?.response?.data?.message||"Patient not found"),null}finally{d({loading:!1})}},getCompletePrescriptions:async()=>{try{d({loading:!0});const o=await Ae.get("/patient/data");d({CompletePresception:o.data.prescriptions})}catch(o){xe.error(o?.response?.data?.message||"Failed to fetch prescriptions")}finally{d({loading:!1})}},clearSinglePatient:()=>d({singlePatient:null})}));function S0(){const d=yt(),{patients:o,loading:p,getAllPatients:u,updatePatient:j}=ft(),{user:N,getAllUsers:W,allUsers:B}=gt(),[H,R]=A.useState([]),[V,b]=A.useState(""),[E,v]=A.useState("all"),[ne,w]=A.useState("all"),[ae,Q]=A.useState(1),[M,z]=A.useState(null),[Z,L]=A.useState(!1),[U,$]=A.useState(null),J=10;A.useEffect(()=>{const f=()=>{L(window.innerWidth<768)};return f(),window.addEventListener("resize",f),u(),W(),N&&N.role==="Doctor"&&$(N),()=>window.removeEventListener("resize",f)},[N]),A.useEffect(()=>{if(!U||!o.length){R([]);return}const f=U._id;let G=o.filter(re=>re.doctorAppointment&&re.doctorAppointment.doctorId===f);V&&(G=G.filter(re=>re.name?.toLowerCase().includes(V.toLowerCase())||re.uniqueID?.toLowerCase().includes(V.toLowerCase())||re.phone?.includes(V))),E!=="all"&&(G=G.filter(re=>re.doctorAppointment?.status===E));const K=new Date;K.setHours(0,0,0,0),ne==="today"?G=G.filter(re=>{if(!re.doctorAppointment?.appointmentDate)return!1;const me=new Date(re.doctorAppointment.appointmentDate);return me.setHours(0,0,0,0),me.getTime()===K.getTime()}):ne==="past"&&(G=G.filter(re=>{if(!re.doctorAppointment?.appointmentDate)return!1;const me=new Date(re.doctorAppointment.appointmentDate);return me.setHours(0,0,0,0),me<K})),R(G)},[o,U,V,E,ne]);const m=Math.ceil(H.length/J),_=(ae-1)*J,C=_+J,k=H.slice(_,C),F={totalPatients:o.filter(f=>f.doctorAppointment&&f.doctorAppointment.doctorId===U?._id).length,todayAppointments:o.filter(f=>{if(!f.doctorAppointment||f.doctorAppointment.doctorId!==U?._id)return!1;const G=new Date(f.doctorAppointment.appointmentDate),K=new Date;return G.toDateString()===K.toDateString()}).length,pendingToday:o.filter(f=>{if(!f.doctorAppointment||f.doctorAppointment.doctorId!==U?._id)return!1;const G=new Date(f.doctorAppointment.appointmentDate),K=new Date;return G.toDateString()===K.toDateString()&&f.doctorAppointment.status==="Pending"}).length,completedToday:o.filter(f=>{if(!f.doctorAppointment||f.doctorAppointment.doctorId!==U?._id)return!1;const G=new Date(f.doctorAppointment.appointmentDate),K=new Date;return G.toDateString()===K.toDateString()&&f.doctorAppointment.status==="Completed"}).length,todayTotalEarnings:o.filter(f=>{if(!f.doctorAppointment||f.doctorAppointment.doctorId!==U?._id)return!1;const G=new Date(f.doctorAppointment.appointmentDate),K=new Date;return G.toDateString()===K.toDateString()&&f.doctorAppointment&&f.doctorAppointment.doctorId===U?._id&&f.doctorAppointment.status==="Completed"}).reduce((f,G)=>f+(G.doctorAppointment?.charges||0),0),totalEarnings:o.filter(f=>f.doctorAppointment&&f.doctorAppointment.doctorId===U?._id&&f.doctorAppointment.status==="Completed").reduce((f,G)=>f+(G.doctorAppointment?.charges||0),0)},I=(()=>{const f=new Date;return H.filter(K=>K.doctorAppointment?.appointmentDate?new Date(K.doctorAppointment.appointmentDate).toDateString()===f.toDateString():!1).sort((K,re)=>{const me=K.doctorAppointment?.appointmentNumber||999999,oe=re.doctorAppointment?.appointmentNumber||999999;return Number(me)-Number(oe)})})(),x=async(f,G)=>{const K=o.find(oe=>oe._id===f);if(!K||!K.doctorAppointment)return;const re={doctorAppointment:{...K.doctorAppointment,status:G}};await j(f,re)&&(u(),M&&M._id===f&&z({...M,doctorAppointment:re.doctorAppointment}))},h=f=>{switch(f){case"Completed":return"bg-green-100 text-green-800";case"Cancelled":return"bg-red-100 text-red-800";case"Pending":return"bg-yellow-100 text-yellow-800";default:return"bg-gray-100 text-gray-800"}},Y=f=>{switch(f){case"Completed":return e.jsx(bt,{className:"w-4 h-4"});case"Cancelled":return e.jsx(Ma,{className:"w-4 h-4"});case"Pending":return e.jsx(ma,{className:"w-4 h-4"});default:return e.jsx(os,{className:"w-4 h-4"})}},S=f=>{if(!f){alert("Please select a patient first");return}const G=window.open("","_blank"),K=(te,g="Not specified")=>te!=null&&te!==""?te:g,re={"Patient ID":K(f.uniqueID,f._id?.substring(0,8)),Name:K(f.name),Age:K(f.age),Gender:K(f.gender),Phone:K(f.phone),Address:K(f.address),"Blood Group":K(f.bloodGroup),Weight:K(f.weight?`${f.weight} kg`:"N/A"),"Appointment Date":f.doctorAppointment?.appointmentDate?new Date(f.doctorAppointment.appointmentDate).toLocaleDateString():"N/A",Status:f.doctorAppointment?.status||"N/A",Charges:f.doctorAppointment?.charges||0,Doctor:f.doctorAppointment?.doctorName||"N/A","Appointment Number":f.doctorAppointment?.appointmentNumber||"N/A","Registration Date":f.createdAt?new Date(f.createdAt).toLocaleDateString():"N/A","Last Updated":f.updatedAt?new Date(f.updatedAt).toLocaleDateString():f.createdAt?new Date(f.createdAt).toLocaleDateString():"N/A"},me=B.find(te=>te._id===f.doctorAppointment?.doctorId),oe=me?.licenseNumber||"N/A",fe=me?.SpecialistDoctor||"N/A";G.document.write(`
    <html>
      <head>
        <title>Patient Details - ${re.Name}</title>
        <style>
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            padding: 20px; 
            line-height: 1.6;
            color: #333;
            background: #f8f9fa;
          }
          .header { 
            text-align: center; 
            border-bottom: 3px solid #4f46e5; 
            padding-bottom: 20px; 
            margin-bottom: 30px; 
          }
          .header h1 { 
            color: #4f46e5; 
            margin: 0; 
          }
          .patient-info { 
            margin-bottom: 30px; 
            background: white; 
            padding: 25px; 
            border-radius: 12px; 
            border: 1px solid #e2e8f0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }
          .section-title {
            color: #4f46e5;
            border-bottom: 2px solid #c7d2fe;
            padding-bottom: 8px;
            margin-top: 25px;
            margin-bottom: 15px;
            font-size: 18px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
          }
          .info-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px dashed #e2e8f0;
          }
          .info-label {
            font-weight: 600;
            color: #64748b;
            min-width: 180px;
          }
          .info-value {
            font-weight: 500;
            color: #1e293b;
            text-align: right;
            flex: 1;
          }
          .appointment-section {
            background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
            padding: 25px;
            border-radius: 12px;
            border: 1px solid #fed7aa;
            margin: 25px 0;
            box-shadow: 0 2px 10px rgba(251, 146, 60, 0.1);
          }
          .status-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 10px;
          }
          .status-pending { background: #fef3c7; color: #92400e; }
          .status-completed { background: #d1fae5; color: #065f46; }
          .status-cancelled { background: #fee2e2; color: #991b1b; }
          .status-na { background: #e2e8f0; color: #475569; }
          .footer { 
            margin-top: 50px; 
            border-top: 2px solid #4f46e5; 
            padding-top: 20px; 
            text-align: center;
            color: #64748b;
            font-size: 14px;
          }
          .hospital-info {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
            color: white;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.2);
          }
          .hospital-name {
            font-size: 24px;
            font-weight: bold;
            color: white;
            margin-bottom: 5px;
          }
          .print-date {
            text-align: right;
            color: #64748b;
            font-size: 14px;
            margin-bottom: 20px;
            padding: 10px;
            background: white;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
          }
          .patient-id {
            background: #e0e7ff;
            color: #4f46e5;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: bold;
            display: inline-block;
            margin: 10px 0;
          }
          .no-appointment {
            background: #f1f5f9;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            margin: 25px 0;
            border: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 16px;
          }
          .doctor-details {
            background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
            padding: 15px;
            border-radius: 8px;
            margin-top: 10px;
            border: 1px solid #7dd3fc;
          }
          .doctor-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
          }
          @media print {
            body { 
              padding: 15px; 
              background: white; 
              font-size: 12px;
            }
            .no-print { display: none; }
            .hospital-info {
              background: #4f46e5 !important;
              -webkit-print-color-adjust: exact;
            }
            .appointment-section {
              background: #fff7ed !important;
              -webkit-print-color-adjust: exact;
            }
            .doctor-details {
              background: #e0f2fe !important;
              -webkit-print-color-adjust: exact;
            }
            .info-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        </style>
      </head>
      <body>
        <div class="hospital-info">
          <div class="hospital-name">Hospital Management System</div>
          <div>Patient Medical Record</div>
          <div class="patient-id">Patient ID: ${re["Patient ID"]}</div>
        </div>
        
        <div class="print-date">
          Printed on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
        </div>
        
        <div class="header">
          <h1>PATIENT DETAILS</h1>
        </div>
        
        <div class="patient-info">
          <h2 class="section-title">Personal Information</h2>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Patient Name:</span>
              <span class="info-value">${re.Name}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Age:</span>
              <span class="info-value">${re.Age}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Gender:</span>
              <span class="info-value">${re.Gender}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Weight:</span>
              <span class="info-value">${re.Weight}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Blood Group:</span>
              <span class="info-value">${re["Blood Group"]}</span>
            </div>
          </div>
          
          <h2 class="section-title">Contact Information</h2>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Phone Number:</span>
              <span class="info-value">${re.Phone}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Address:</span>
              <span class="info-value">${re.Address}</span>
            </div>
          </div>
          
          <h2 class="section-title">System Information</h2>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Registration Date:</span>
              <span class="info-value">${re["Registration Date"]}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Last Updated:</span>
              <span class="info-value">${re["Last Updated"]}</span>
            </div>
          </div>
        </div>
        
        ${f.doctorAppointment?.doctorId?`
          <div class="appointment-section">
            <h2 class="section-title">Appointment Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Appointment Number:</span>
                <span class="info-value">${re["Appointment Number"]}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Appointment Date:</span>
                <span class="info-value">${re["Appointment Date"]}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Charges:</span>
                <span class="info-value">PKR ${re.Charges}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Status:</span>
                <span class="info-value">
                  ${re.Status}
                  <span class="status-badge status-${re.Status.toLowerCase().replace(/[^a-z]/g,"")}">
                    ${re.Status.toUpperCase()}
                  </span>
                </span>
              </div>
            </div>
            
            <div class="doctor-details">
              <h3 style="color: #0369a1; margin-top: 0; margin-bottom: 10px;">Doctor Information</h3>
              <div class="doctor-item">
                <span style="font-weight: 600; color: #475569;">Doctor Name:</span>
                <span style="font-weight: 500; color: #1e293b;">${re.Doctor}</span>
              </div>
              <div class="doctor-item">
                <span style="font-weight: 600; color: #475569;">License Number:</span>
                <span style="font-weight: 500; color: #1e293b;">${oe}</span>
              </div>
              <div class="doctor-item">
                <span style="font-weight: 600; color: #475569;">Specialization:</span>
                <span style="font-weight: 500; color: #1e293b;">${fe}</span>
              </div>
            </div>
          </div>
        `:`
          <div class="no-appointment">
            <p>
              <strong style="color: #475569;">No Appointment Scheduled</strong><br>
              This patient does not have any scheduled appointments.
            </p>
          </div>
        `}
        
        <div class="footer">
          <p>This document is computer-generated and does not require a signature.</p>
          <p>Hospital Management System | ${new Date().getFullYear()}</p>
          <p style="font-size: 12px; margin-top: 10px;">Confidential Medical Record - For internal use only</p>
        </div>
        
        <div class="no-print" style="text-align: center; margin-top: 30px;">
          <button onclick="window.print()" style="
            background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
            color: white; 
            border: none; 
            padding: 12px 24px; 
            border-radius: 8px; 
            cursor: pointer; 
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
          ">
            🖨️ Print Document
          </button>
          <p style="color: #64748b; margin-top: 10px; font-size: 14px;">Click above button to print</p>
        </div>
      </body>
    </html>
  `),G.document.close()};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50",children:[e.jsx("header",{className:"bg-white shadow-sm border-b border-gray-200",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-4 sm:space-y-0",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Doctor Dashboard"}),e.jsxs("p",{className:"text-gray-600 text-sm mt-1",children:["Welcome, Dr. ",U?.name||"Doctor"," |",e.jsx("span",{className:"ml-2 px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full",children:U?.SpecialistDoctor||"General Practitioner"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"text-sm font-medium text-gray-900",children:["Consultation: ",U?.ConsultationTime||"Not set"]}),e.jsxs("p",{className:"text-xs text-gray-600",children:["Charges: PKR ",U?.ConsultationCharges||"0"," | Time/Patient: ",U?.ConsultationTimePerPatient||"N/A"," mins"]})]}),e.jsx("div",{className:"p-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg",children:e.jsx(da,{className:"w-6 h-6 text-indigo-600"})})]})]})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6",children:[e.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Total Patients"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:F.totalPatients})]}),e.jsx("div",{className:"p-3 bg-blue-100 rounded-lg",children:e.jsx(Yi,{className:"w-6 h-6 text-blue-600"})})]})}),e.jsxs("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Today's Appointments"}),e.jsx("p",{className:"text-2xl font-bold text-green-700 mt-1",children:F.todayAppointments})]}),e.jsx("div",{className:"p-3 bg-green-100 rounded-lg",children:e.jsx(dt,{className:"w-6 h-6 text-green-600"})})]}),e.jsxs("div",{className:"mt-2 text-xs text-gray-500",children:["Pending: ",F.pendingToday," | Completed: ",F.completedToday]})]}),e.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Pending Today"}),e.jsx("p",{className:"text-2xl font-bold text-yellow-700 mt-1",children:F.pendingToday})]}),e.jsx("div",{className:"p-3 bg-yellow-100 rounded-lg",children:e.jsx(ma,{className:"w-6 h-6 text-yellow-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Todays Earnings"}),e.jsx("p",{className:"text-2xl font-bold text-purple-700 mt-1",children:F.todayTotalEarnings})]}),e.jsx("div",{className:"p-3 bg-purple-100 rounded-lg",children:e.jsx(Fe,{className:"w-6 h-6 text-purple-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Total Earnings"}),e.jsxs("p",{className:"text-2xl font-bold text-emerald-700 mt-1",children:["PKR ",F.totalEarnings]})]}),e.jsx("div",{className:"p-3 bg-emerald-100 rounded-lg",children:e.jsx(Fe,{className:"w-6 h-6 text-emerald-600"})})]})})]}),I.length>0&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(Xi,{className:"w-5 h-5 text-amber-600"}),"Today's Appointments"]}),e.jsx("span",{className:"text-sm text-gray-600",children:new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),e.jsx("div",{className:"space-y-3",children:I.map((f,G)=>e.jsx("div",{className:`p-4 rounded-lg border ${f.doctorAppointment?.status==="Completed"?"bg-green-50 border-green-200":f.doctorAppointment?.status==="Cancelled"?"bg-red-50 border-red-200":"bg-amber-50 border-amber-200"}`,children:e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold",children:f.doctorAppointment?.appo||`${G+1}`}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900",children:f.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Appointment #: ",e.jsx("span",{className:"font-bold",children:f.doctorAppointment?.appointmentNumber||"N/A"})," | ID: ",f.uniqueID||f._id?.substring(0,8)," | Age: ",f.age," | Phone: ",f.phone]})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3",children:[e.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${h(f.doctorAppointment?.status)}`,children:[Y(f.doctorAppointment?.status),f.doctorAppointment?.status||"Pending"]}),e.jsxs("div",{className:"flex gap-2",children:[f.doctorAppointment?.status==="Pending"||f.doctorAppointment?.status==="Come"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>{const K=f.doctorAppointment?.status==="Come"?"Pending":"Come";x(f._id,K)},className:`px-3 py-1 text-white text-xs rounded-lg transition-colors flex items-center gap-1 ${f.doctorAppointment?.status==="Come"?"bg-yellow-600 hover:bg-yellow-700":"bg-cyan-500 hover:bg-cyan-600"}`,children:f.doctorAppointment?.status==="Come"?e.jsxs(e.Fragment,{children:[e.jsx(e0,{className:"w-3 h-3"}),"Silent"]}):e.jsxs(e.Fragment,{children:[e.jsx(Xi,{className:"w-3 h-3"}),"Come"]})}),e.jsx("button",{onClick:()=>x(f._id,"Completed"),className:"px-3 py-1 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition-colors",children:"Mark Complete"}),e.jsx("button",{onClick:()=>x(f._id,"Cancelled"),className:"px-3 py-1 bg-red-600 text-white text-xs rounded-lg hover:bg-red-700 transition-colors",children:"Cancel"})]}):e.jsx("button",{onClick:()=>x(f._id,"Pending"),className:"px-3 py-1 bg-gray-600 text-white text-xs rounded-lg hover:bg-gray-700 transition-colors",children:"Mark as Pending"}),e.jsx("button",{onClick:()=>z(f),className:"px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors",children:"View"})]})]})]})},f._id))})]}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm border text-black border-gray-200 p-4 mb-6",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"relative",children:[e.jsx(kt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsx("input",{type:"text",placeholder:"Search patients by name, ID, or phone...",value:V,onChange:f=>b(f.target.value),className:"w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"})]})}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("select",{value:E,onChange:f=>v(f.target.value),className:"px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",children:[e.jsx("option",{value:"all",children:"All Status"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Completed",children:"Completed"}),e.jsx("option",{value:"Come",children:"Come"}),e.jsx("option",{value:"Cancelled",children:"Cancelled"})]}),e.jsxs("select",{value:ne,onChange:f=>w(f.target.value),className:"px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",children:[e.jsx("option",{value:"all",children:"All Dates"}),e.jsx("option",{value:"today",children:"Today"}),e.jsx("option",{value:"past",children:"Past"})]}),e.jsxs("button",{onClick:()=>u(),className:"px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2",children:[e.jsx(Dl,{className:"w-4 h-4"}),"Refresh"]})]})]})}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Patient"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Contact"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Appointment Date"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:p?e.jsx("tr",{children:e.jsxs("td",{colSpan:"5",className:"px-6 py-12 text-center",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"})}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Loading patients..."})]})}):k.length===0?e.jsx("tr",{children:e.jsxs("td",{colSpan:"5",className:"px-6 py-12 text-center",children:[e.jsx(Yi,{className:"w-12 h-12 text-gray-400 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"No patients found"})]})}):k.map(f=>e.jsxs("tr",{className:"hover:bg-gray-50 transition-colors",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex-shrink-0 h-10 w-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold",children:f.name?.charAt(0).toUpperCase()||"P"}),e.jsxs("div",{className:"ml-4",children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:f.name}),e.jsxs("div",{className:"text-xs text-gray-500",children:["ID: ",f.uniqueID||f._id?.substring(0,8)]}),e.jsxs("div",{className:"text-xs text-gray-500",children:["Age: ",f.age," | Gender: ",f.gender]})]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"text-sm text-gray-900",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(za,{className:"w-4 h-4 text-gray-500"}),e.jsx("span",{children:f.phone||"Not provided"})]}),e.jsx("div",{className:"text-xs text-gray-500",children:f.bloodGroup?`Blood: ${f.bloodGroup}`:"No blood group"})]})}),e.jsx("td",{className:"px-6 py-4",children:f.doctorAppointment?.appointmentDate?e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{className:"font-medium text-gray-900",children:new Date(f.doctorAppointment.appointmentDate).toLocaleDateString()}),e.jsxs("div",{className:"text-xs text-gray-500",children:["Charges: PKR ",f.doctorAppointment.charges||0]})]}):e.jsx("div",{className:"text-sm text-gray-500",children:"No appointment"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("span",{className:`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${h(f.doctorAppointment?.status)}`,children:[Y(f.doctorAppointment?.status),f.doctorAppointment?.status||"No Status"]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>z(f),className:"px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1",children:[e.jsx(jt,{className:"w-4 h-4"}),"View"]}),f.doctorAppointment?.status==="Pending"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>x(f._id,"Completed"),className:"px-3 py-1.5 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition-colors",children:"Complete"}),e.jsx("button",{onClick:()=>x(f._id,"Cancelled"),className:"px-3 py-1.5 bg-red-600 text-white text-xs rounded-lg hover:bg-red-700 transition-colors",children:"Cancel"})]}),e.jsxs("button",{onClick:()=>S(f),className:"px-3 py-1.5 bg-gray-600 text-white text-xs rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-1",children:[e.jsx(cs,{className:"w-4 h-4"}),"Export"]})]})})]},f._id))})]})}),k.length>0&&e.jsx("div",{className:"border-t border-gray-200 px-6 py-4",children:e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-700 mb-4 sm:mb-0",children:["Showing ",e.jsx("span",{className:"font-medium",children:_+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(C,H.length)})," of"," ",e.jsx("span",{className:"font-medium",children:H.length})," patients"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>Q(f=>Math.max(f-1,1)),disabled:ae===1,className:"p-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:e.jsx(rs,{className:"w-5 h-5 "})}),e.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:Math.min(5,m)},(f,G)=>{let K;return m<=5||ae<=3?K=G+1:ae>=m-2?K=m-4+G:K=ae-2+G,e.jsx("button",{onClick:()=>Q(K),className:`w-8 h-8 rounded-lg font-medium transition-colors ${ae===K?"bg-indigo-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:K},K)})}),e.jsx("button",{onClick:()=>Q(f=>Math.min(f+1,m)),disabled:ae===m,className:"p-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:e.jsx(ks,{className:"w-5 h-5"})})]})]})})]})]}),M&&e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:e.jsx("div",{className:"bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-start mb-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Patient Details"}),e.jsx("p",{className:"text-gray-600",children:"Complete patient information and medical history"})]}),e.jsx("button",{onClick:()=>z(null),className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(Ft,{className:"w-5 h-5 text-gray-500"})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-sm",children:[e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md",children:e.jsx("span",{className:"text-white text-2xl font-bold",children:M.name?.charAt(0).toUpperCase()})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-900",children:M.name}),e.jsxs("p",{className:"text-sm text-gray-600 mb-3",children:[e.jsx("span",{className:"font-medium text-gray-800",children:"ID:"})," ",M.uniqueID?.substring(0,12)||"N/A"]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{onClick:()=>d("/medicine",{state:{patientID:M._id,doctorID:U._id}}),className:"px-3 py-1.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 text-sm flex items-center gap-1.5 shadow hover:shadow-md transition-all",children:[e.jsx(Rt,{className:"w-3.5 h-3.5"}),"Medicine"]}),e.jsxs("button",{onClick:()=>d("/recommendTest",{state:{patientID:M._id,doctorID:U._id}}),className:"px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm flex items-center gap-1.5 shadow hover:shadow-md transition-all",children:[e.jsx(Fe,{className:"w-3.5 h-3.5"}),"Lab Test"]}),e.jsxs("button",{onClick:()=>d("/recommendXray",{state:{patientID:M._id,doctorID:U._id}}),className:"px-3 py-1.5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm flex items-center gap-1.5 shadow hover:shadow-md transition-all",children:[e.jsx(Tt,{className:"w-3.5 h-3.5"}),"X-Ray"]}),e.jsxs("button",{onClick:()=>d("/patientDetailsByDoctor",{state:{uniqueId:M.uniqueID}}),className:"px-3 py-1.5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 text-sm flex items-center gap-1.5 shadow hover:shadow-md transition-all",children:[e.jsx(at,{className:"w-3.5 h-3.5"}),"Results"]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-indigo-600"}),"Personal Information"]}),e.jsx(Ct,{label:"Full Name",value:M.name}),e.jsx(Ct,{label:"Gender",value:M.gender||"Not specified"}),e.jsx(Ct,{label:"Age",value:M.age||"Not provided"}),e.jsx(Ct,{label:"Weight",value:M.weight?`${M.weight} kg`:"Not provided"}),e.jsx(Ct,{label:"Blood Group",value:M.bloodGroup||"Not tested"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(za,{className:"w-5 h-5 text-indigo-600"}),"Contact Information"]}),e.jsx(Ct,{label:"Phone",value:M.phone||"Not provided"}),e.jsx(Ct,{label:"Address",value:M.address||"Not provided"}),e.jsx(Ct,{label:"Registration Date",value:new Date(M.createdAt).toLocaleDateString()}),e.jsx(Ct,{label:"Last Updated",value:new Date(M.updatedAt||M.createdAt).toLocaleDateString()})]})]}),M.doctorAppointment&&e.jsxs("div",{className:"bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(dt,{className:"w-5 h-5 text-amber-600"}),"Appointment Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(Ct,{label:"Appointment Number",value:M.doctorAppointment.appointmentNumber||"N/A"}),e.jsx(Ct,{label:"Appointment Date",value:new Date(M.doctorAppointment.appointmentDate).toLocaleDateString()}),e.jsx(Ct,{label:"Status",value:M.doctorAppointment.status||"Pending"}),e.jsx(Ct,{label:"Charges",value:`PKR ${M.doctorAppointment.charges||0}`}),e.jsx(Ct,{label:"Doctor",value:M.doctorAppointment.doctorName||"Dr. Unknown"})]}),e.jsxs("div",{className:"mt-4 pt-4 border-t border-amber-200",children:[e.jsx("h5",{className:"font-medium text-gray-900 mb-2",children:"Update Appointment Status:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[(M.doctorAppointment.status==="Pending"||M.doctorAppointment.status==="Come")&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>{const f=M.doctorAppointment.status==="Come"?"Pending":"Come";x(M._id,f)},className:"px-4 py-2 text-white rounded-lg bg-black transition-colors flex items-center gap-2",children:[M.doctorAppointment.status==="Come"?e.jsxs("div",{className:"relative",children:[e.jsx(Xi,{className:"w-5 h-5 animate-pulse"}),e.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"})]}):e.jsx(Xi,{className:"w-5 h-5"}),e.jsx("span",{children:M.doctorAppointment.status==="Come"?"Silent Bell":"Call Patient"})]}),e.jsx("button",{onClick:()=>{x(M._id,"Completed"),z(null)},className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",children:"Mark as Completed"}),e.jsx("button",{onClick:()=>{x(M._id,"Cancelled"),z(null)},className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",children:"Cancel Appointment"})]}),(M.doctorAppointment.status==="Completed"||M.doctorAppointment.status==="Cancelled")&&e.jsx("button",{onClick:()=>{x(M._id,"Pending"),z(null)},className:"px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors",children:"Mark as Pending"}),e.jsxs("button",{onClick:()=>S(M),className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2",children:[e.jsx(cs,{className:"w-4 h-4"}),"Export Data"]})]})]})]}),e.jsx("div",{className:"flex gap-3 pt-4",children:e.jsx("button",{onClick:()=>z(null),className:"flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-colors",children:"Close"})})]})]})})})]})}const Ct=({label:d,value:o})=>e.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-100 last:border-0",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:[d,":"]}),e.jsx("span",{className:"text-sm font-medium text-gray-900",children:o})]}),jc=Dn(d=>({medicines:[],singleMedicine:null,loading:!1,addPresception:async o=>{console.log("Sending to backend:",o);try{d({loading:!0});const p=await Ae.post("/otherActive",o);return console.log("Backend response:",p.data),p.data.success?(d(u=>({medicines:[p.data.medicine,...u.medicines]})),xe.success(p.data.message||"Pharmacy record added successfully"),{success:!0,data:p.data.medicine}):(xe.error(p.data.message||"Failed to add record"),{success:!1})}catch(p){console.error("Error in addPresception:",p);const u=p?.response?.data?.message||"Failed to add pharmacy record";return xe.error(u),{success:!1,error:u}}finally{d({loading:!1})}},getAllPresception:async()=>{try{d({loading:!0});const o=await Ae.get("/otherActive");o.data.success?d({medicines:o.data.medicine}):xe.error(o.data.message||"Failed to fetch pharmacy records")}catch(o){const p=o?.response?.data?.message||"Failed to fetch pharmacy records";xe.error(p)}finally{d({loading:!1})}},deletePresception:async o=>{try{return d({loading:!0}),await Ae.delete(`/otherActive/${o}`),d(p=>({medicines:p.medicines.filter(u=>u._id!==o)})),xe.success("Medicines deleted successfully"),!0}catch(p){return xe.error(p?.response?.data?.message||"Failed to delete Medicines"),!1}finally{d({loading:!1})}},clearSinglePrescription:()=>d({singlePrescription:null})})),Cn=Dn(d=>({labRecords:[],singleRecord:null,loading:!1,error:null,createLabRecord:async o=>{d({loading:!0,error:null});try{const p={patientId:o.patientId,patientName:o.patientName,patientUniqueId:o.patientUniqueId,age:o.age,gender:o.gender,doctorId:o.doctorId,doctorName:o.doctorName,testName:o.testName,category:o.category,diagnosis:o.diagnosis||"",overallNotes:o.overallNotes||"",instructions:o.instructions||"",parameters:o.parameters,performedBy:o.performedBy||"Lab Technician",performedDate:o.performedDate||new Date().toISOString().split("T")[0],priority:o.priority||"Routine",status:"Completed"},u=await Ae.post("/lab",p);return d(j=>({labRecords:Array.isArray(j.labRecords)?[...j.labRecords,u.data.data]:[u.data.data],loading:!1})),{success:!0,data:u.data}}catch(p){return console.error("Error creating lab record:",p),d({error:p.response?.data?.message||p.message||"Failed to create lab record",loading:!1}),{success:!1,error:p.response?.data?.message||p.message}}},getAllLabRecord:async()=>{try{d({loading:!0});const o=await Ae.get("/lab");d({labRecords:o.data})}catch(o){xe.error(o?.response?.data?.message||"Failed to fetch reports")}finally{d({loading:!1})}},deleteLabRecord:async o=>{try{return d({loading:!0}),await Ae.delete(`/lab/${o}`),d(p=>({labRecords:p.labRecords.filter(u=>u._id!==o)})),xe.success("Report deleted successfully"),!0}catch(p){return console.log(p?.response?.data?.message),!1}finally{d({loading:!1})}},clearSingleRecord:()=>d({singleRecord:null})})),zs=Dn(d=>({xrayRecords:[],singleRecord:null,loading:!1,error:null,createXrayRecord:async o=>{d({loading:!0,error:null});try{const p=await Ae.post("/xray",o,{headers:{"Content-Type":"multipart/form-data"}});return d(u=>({xrayRecords:Array.isArray(u.xrayRecords)?[...u.xrayRecords,p.data.data]:[p.data.data],loading:!1})),xe.success("X-ray record created successfully!"),{success:!0,data:p.data}}catch(p){console.error("Error creating x-ray record:",p);const u=p.response?.data?.message||p.message||"Failed to create x-ray record";return d({error:u,loading:!1}),xe.error(u),{success:!1,error:u}}},createWalkInXrayRecord:async o=>{d({loading:!0,error:null});try{const p=await Ae.post("/xray/walkin",o,{headers:{"Content-Type":"multipart/form-data"}});return d(u=>({xrayRecords:Array.isArray(u.xrayRecords)?[...u.xrayRecords,p.data.data]:[p.data.data],loading:!1})),xe.success("Walk-in X-ray patient registered successfully!"),{success:!0,data:p.data,message:p.data.message||"Patient registered successfully"}}catch(p){console.error("Error creating walk-in x-ray record:",p);const u=p.response?.data?.message||p.message||"Failed to register walk-in patient";return d({error:u,loading:!1}),xe.error(u),{success:!1,error:u}}},getAllWalkInXrayRecords:async(o=1,p=20,u={})=>{try{d({loading:!0,error:null});const j=await Ae.get("/xray/walkin/all",{params:{page:o,limit:p,...u}});return d({loading:!1}),{records:j.data.records||[],pagination:j.data.pagination||{totalPages:1,currentPage:1,totalRecords:0,limit:p}}}catch(j){const N=j?.response?.data?.message||"Failed to fetch walk-in x-ray records";return d({error:N,loading:!1}),xe.error(N),{records:[],pagination:{totalPages:1,currentPage:1,totalRecords:0,limit:p}}}},getWalkInXrayStatistics:async()=>{try{d({loading:!0,error:null});const o=await Ae.get("/xray/walkin/statistics");return d({loading:!1}),o.data.data||o.data}catch(o){const p=o?.response?.data?.message||"Failed to fetch walk-in x-ray statistics";return d({error:p,loading:!1}),{totalRecords:0,todayRecords:0,thisWeekRecords:0,thisMonthRecords:0,categoryStats:[],priorityStats:[],monthlyStats:[],technicianStats:[]}}},getWalkInXrayRecordById:async o=>{try{d({loading:!0,error:null});const p=await Ae.get(`/xray/walkin/${o}`);return d({singleRecord:p.data.data||p.data,loading:!1}),p.data.data||p.data}catch(p){const u=p?.response?.data?.message||"Failed to fetch walk-in x-ray record";return d({error:u,loading:!1}),xe.error(u),null}},searchWalkInXrayRecords:async(o,p={})=>{try{d({loading:!0,error:null});const u=await Ae.get("/xray/walkin/search",{params:{q:o,...p}});return d({loading:!1}),{records:u.data.records||[],pagination:u.data.pagination||{totalPages:1,currentPage:1,totalRecords:0,limit:20}}}catch(u){const j=u?.response?.data?.message||"Failed to search walk-in x-ray records";return d({error:j,loading:!1}),xe.error(j),{records:[],pagination:{totalPages:1,currentPage:1,totalRecords:0,limit:20}}}},updateWalkInXrayRecord:async(o,p)=>{try{d({loading:!0,error:null});const u=await Ae.put(`/xray/walkin/${o}`,p,{headers:{"Content-Type":"multipart/form-data"}});return d({loading:!1}),xe.success("Walk-in X-ray record updated successfully"),{success:!0,data:u.data.data}}catch(u){const j=u?.response?.data?.message||"Failed to update walk-in x-ray record";return d({error:j,loading:!1}),xe.error(j),{success:!1,error:j}}},deleteWalkInXrayRecord:async o=>{try{return d({loading:!0,error:null}),await Ae.delete(`/xray/walkin/${o}`),d({loading:!1}),xe.success("Walk-in X-ray record deleted successfully"),!0}catch(p){const u=p?.response?.data?.message||"Failed to delete walk-in x-ray record";return d({error:u,loading:!1}),xe.error(u),!1}},getAllXrayRecord:async(o=1,p=20)=>{try{d({loading:!0,error:null});const u=await Ae.get("/xray",{params:{page:o,limit:p}});return d({xrayRecords:u.data.records||[],loading:!1}),{records:u.data.records||[],pagination:u.data.pagination||{totalPages:1,currentPage:1,totalRecords:0,limit:p}}}catch(u){const j=u?.response?.data?.message||"Failed to fetch x-ray records";return d({error:j,loading:!1}),xe.error(j),{records:[],pagination:{totalPages:1,currentPage:1,totalRecords:0,limit:p}}}},getXrayRecordById:async o=>{try{d({loading:!0,error:null});const p=await Ae.get(`/xray/${o}`);return d({singleRecord:p.data.data||p.data,loading:!1}),p.data.data||p.data}catch(p){const u=p?.response?.data?.message||"Failed to fetch x-ray record";return d({error:u,loading:!1}),xe.error(u),null}},getXrayStatistics:async()=>{try{d({loading:!0,error:null});const o=await Ae.get("/xray/statistics");return d({loading:!1}),o.data.data||o.data}catch(o){const p=o?.response?.data?.message||"Failed to fetch x-ray statistics";return d({error:p,loading:!1}),{totalXrays:0,pendingXrays:0,completedXrays:0,todayXrays:0}}},deleteXrayRecord:async o=>{try{return d({loading:!0,error:null}),await Ae.delete(`/xray/${o}`),d(p=>({xrayRecords:p.xrayRecords.filter(u=>u._id!==o),loading:!1})),xe.success("X-ray record deleted successfully"),!0}catch(p){const u=p?.response?.data?.message||"Failed to delete x-ray record";return d({error:u,loading:!1}),xe.error(u),!1}},updateXrayRecord:async(o,p)=>{try{d({loading:!0,error:null});const u=await Ae.put(`/xray/${o}`,p);return d(j=>({xrayRecords:j.xrayRecords.map(N=>N._id===o?u.data.data:N),singleRecord:u.data.data,loading:!1})),xe.success("X-ray record updated successfully"),{success:!0,data:u.data.data}}catch(u){const j=u?.response?.data?.message||"Failed to update x-ray record";return d({error:j,loading:!1}),xe.error(j),{success:!1,error:j}}},searchXrayRecords:async(o,p={})=>{try{d({loading:!0,error:null});const u=await Ae.get("/xray/search",{params:{query:o,...p}});return d({xrayRecords:u.data.records||[],loading:!1}),{records:u.data.records||[],pagination:u.data.pagination||{totalPages:1,currentPage:1,totalRecords:0,limit:20}}}catch(u){const j=u?.response?.data?.message||"Failed to search x-ray records";return d({error:j,loading:!1}),xe.error(j),{records:[],pagination:{totalPages:1,currentPage:1,totalRecords:0,limit:20}}}},clearSingleRecord:()=>d({singleRecord:null}),clearError:()=>d({error:null}),resetXrayStore:()=>d({xrayRecords:[],singleRecord:null,loading:!1,error:null})}));function D0(){const{allUsers:d,getAllUsers:o}=gt(),{patients:p,getAllPatients:u}=ft(),{medicines:j,getAllPresception:N}=jc(),{labRecords:W,getAllLabRecord:B}=Cn(),{xrayRecords:H,getAllXrayRecord:R,getAllWalkInXrayRecords:V}=zs(),[b,E]=A.useState("overview"),[v,ne]=A.useState(!0),[w,ae]=A.useState(null),[Q,M]=A.useState("patient"),z=async()=>{ne(!0);try{await Promise.all([o(),u(),N(),B(),R()]);const m=await V();ae(m)}catch(m){console.error("Error fetching data:",m)}finally{ne(!1)}};A.useEffect(()=>{z()},[]);const Z=m=>m?new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A",U=(()=>{const m=p?.length||0,_=d?.filter(h=>h.role==="Doctor")?.length||0,C=d?.filter(h=>h.role!=="Patient"&&h.role!=="Admin")?.length||0,k=j?.length||0;let F=0;p&&p.forEach(h=>{F+=h.prescriptions?.length||0});const de=k+F,I=W?.records?.length||0,x=(H?.length||0)+(w?.records?.length||0);return{totalPatients:m,totalDoctors:_,totalStaff:C,totalWalkinPrescriptions:k,totalPatientPrescriptions:F,totalPrescriptions:de,totalLabTests:I,totalXrays:x}})(),J=(()=>{const m=[];return p&&p.forEach(_=>{_.prescriptions&&_.prescriptions.length>0&&_.prescriptions.forEach(C=>{m.push({...C,patientId:_._id,patientName:_.name,patientPhone:_.phone,patientUniqueId:_.uniqueID,patientAge:_.age,patientGender:_.gender,type:"patient_prescription"})})}),m})();return v?e.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:e.jsx("div",{className:"text-xl font-semibold",children:"Loading hospital data..."})}):e.jsxs("div",{className:"min-h-screen text-black bg-gray-50 p-4 md:p-6",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Hospital Admin Dashboard"}),e.jsx("p",{className:"text-gray-600",children:"Complete overview of hospital activities and operations"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[e.jsx("div",{className:"bg-white rounded-lg shadow p-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-3 bg-blue-100 rounded-lg",children:e.jsx("svg",{className:"w-6 h-6 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.67 3.137a10 10 0 01-.671.463"})})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-700",children:"Total Patients"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:U.totalPatients})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow p-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-3 bg-green-100 rounded-lg",children:e.jsx("svg",{className:"w-6 h-6 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-700",children:"Doctors"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:U.totalDoctors})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow p-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-3 bg-purple-100 rounded-lg",children:e.jsx("svg",{className:"w-6 h-6 text-purple-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-700",children:"Staff Category"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:U.totalStaff})]})]})})]}),e.jsx("div",{className:"bg-white rounded-lg shadow mb-6",children:e.jsx("div",{className:"border-b",children:e.jsxs("nav",{className:"flex flex-wrap -mb-px",children:[e.jsx("button",{onClick:()=>E("overview"),className:`py-3 px-4 font-medium ${b==="overview"?"text-blue-600 border-b-2 border-blue-600":"text-gray-500"}`,children:"Overview"}),e.jsxs("button",{onClick:()=>E("patients"),className:`py-3 px-4 font-medium ${b==="patients"?"text-blue-600 border-b-2 border-blue-600":"text-gray-500"}`,children:["Patients (",p?.length||0,")"]}),e.jsxs("button",{onClick:()=>E("prescriptions"),className:`py-3 px-4 font-medium ${b==="prescriptions"?"text-blue-600 border-b-2 border-blue-600":"text-gray-500"}`,children:["Prescriptions (",U.totalPrescriptions,")"]}),e.jsxs("button",{onClick:()=>E("lab"),className:`py-3 px-4 font-medium ${b==="lab"?"text-blue-600 border-b-2 border-blue-600":"text-gray-500"}`,children:["Lab Tests (",W?.records?.length||0,")"]}),e.jsxs("button",{onClick:()=>E("xray"),className:`py-3 px-4 font-medium ${b==="xray"?"text-blue-600 border-b-2 border-blue-600":"text-gray-500"}`,children:["X-Ray Reports (",U.totalXrays,")"]}),e.jsxs("button",{onClick:()=>E("users"),className:`py-3 px-4 font-medium ${b==="users"?"text-blue-600 border-b-2 border-blue-600":"text-gray-500"}`,children:["Users (",d?.length||0,")"]})]})})}),e.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[b==="overview"&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Recent Activities"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Recent Patients"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"ID"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Name"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Age"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Prescriptions"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:p?.slice(0,5).map(m=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3 text-sm",children:m.uniqueID}),e.jsx("td",{className:"px-4 py-3 text-sm font-medium",children:m.name}),e.jsx("td",{className:"px-4 py-3 text-sm",children:m.age}),e.jsx("td",{className:"px-4 py-3 text-sm",children:e.jsxs("span",{className:`px-2 py-1 rounded-full text-xs ${m.prescriptions?.length>0?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:[m.prescriptions?.length||0," prescriptions"]})}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${m.doctorAppointment?.status==="Completed"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:m.doctorAppointment?.status||"Pending"})})]},m._id))})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Medical Activities"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex justify-between",children:[e.jsx("span",{children:"Patient Prescriptions"}),e.jsx("span",{className:"font-semibold",children:U.totalPatientPrescriptions})]}),e.jsxs("li",{className:"flex justify-between",children:[e.jsx("span",{children:"Walk-in Prescriptions"}),e.jsx("span",{className:"font-semibold",children:U.totalWalkinPrescriptions})]}),e.jsxs("li",{className:"flex justify-between",children:[e.jsx("span",{children:"Lab Tests Completed"}),e.jsx("span",{className:"font-semibold",children:U.totalLabTests})]}),e.jsxs("li",{className:"flex justify-between",children:[e.jsx("span",{children:"X-Ray Reports"}),e.jsx("span",{className:"font-semibold",children:U.totalXrays})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Staff Distribution"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex justify-between",children:[e.jsx("span",{children:"Doctors"}),e.jsx("span",{className:"font-semibold",children:U.totalDoctors})]}),e.jsxs("li",{className:"flex justify-between",children:[e.jsx("span",{children:"Reception"}),e.jsx("span",{className:"font-semibold",children:d?.filter(m=>m.role==="Reception")?.length||0})]}),e.jsxs("li",{className:"flex justify-between",children:[e.jsx("span",{children:"Lab Technicians"}),e.jsx("span",{className:"font-semibold",children:d?.filter(m=>m.role==="Lab")?.length||0})]}),e.jsxs("li",{className:"flex justify-between",children:[e.jsx("span",{children:"Pharmacy Staff"}),e.jsx("span",{className:"font-semibold",children:d?.filter(m=>m.role==="Pharmacy")?.length||0})]})]})]})]})]}),b==="patients"&&e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold mb-4",children:["All Patients (",p?.length||0,")"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Patient ID"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Name"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Age/Gender"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Blood Group"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Prescriptions"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Appointment Date"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:p?.map(m=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3 text-sm font-medium",children:m.uniqueID}),e.jsx("td",{className:"px-4 py-3 text-sm",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:m.name}),e.jsx("div",{className:"text-gray-500 text-xs",children:m.phone})]})}),e.jsxs("td",{className:"px-4 py-3 text-sm",children:[m.age," / ",m.gender]}),e.jsx("td",{className:"px-4 py-3 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs",children:m.bloodGroup})}),e.jsx("td",{className:"px-4 py-3 text-sm",children:e.jsx("span",{className:`px-2 py-1 rounded-full text-xs ${m.prescriptions?.length>0?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:m.prescriptions?.length||0})}),e.jsx("td",{className:"px-4 py-3 text-sm",children:Z(m.doctorAppointment?.appointmentDate)}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${m.doctorAppointment?.status==="Completed"?"bg-green-100 text-green-800":m.doctorAppointment?.status==="Pending"?"bg-yellow-100 text-yellow-800":"bg-blue-100 text-blue-800"}`,children:m.doctorAppointment?.status||"Pending"})})]},m._id))})]})})]}),b==="prescriptions"&&e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold mb-4",children:["All Prescriptions (",U.totalPrescriptions,")"]}),e.jsx("div",{className:"mb-6",children:e.jsxs("div",{className:"flex space-x-4 border-b",children:[e.jsxs("button",{onClick:()=>M("patient"),className:`py-2 px-4 font-medium ${Q==="patient"?"text-blue-600 border-b-2 border-blue-600":"text-gray-500"}`,children:["Patient Prescriptions (",J.length,")"]}),e.jsxs("button",{onClick:()=>M("walkin"),className:`py-2 px-4 font-medium ${Q==="walkin"?"text-blue-600 border-b-2 border-blue-600":"text-gray-500"}`,children:["Walk-in Prescriptions (",j?.length||0,")"]})]})}),Q==="patient"&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Patient Prescriptions"}),J.length>0?e.jsx("div",{className:"space-y-4",children:J.map((m,_)=>e.jsxs("div",{className:"border rounded-lg p-4 hover:bg-gray-50",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"font-semibold text-blue-600",children:["Patient: ",m.patientName||"N/A"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["ID: ",m.patientUniqueId||"N/A"," | Phone: ",m.patientPhone||"N/A"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Age: ",m.patientAge||"N/A"," | Gender: ",m.patientGender||"N/A"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:"text-sm text-gray-500",children:Z(m.prescribedDate||m.createdAt)}),e.jsxs("div",{className:"mt-1",children:[e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mr-2",children:"Patient Prescription"}),e.jsxs("span",{className:"px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full",children:["Total: ",m.charges||0," Rs"]})]})]})]}),e.jsxs("div",{className:"text-sm text-gray-700 mb-2",children:[e.jsx("span",{className:"font-medium",children:"Doctor:"})," ",m.doctorName||"N/A",m.diagnosis&&e.jsxs("span",{className:"ml-4",children:["Diagnosis: ",m.diagnosis]})]}),m.medicines&&m.medicines.length>0?e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-medium",children:"Medicines Prescribed:"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["Dispensed by: ",m.PharmacyPerson||"N/A"]})]}),e.jsx("ul",{className:"space-y-2",children:m.medicines.map((C,k)=>e.jsxs("li",{className:"text-sm bg-white p-2 rounded",children:[e.jsx("div",{className:"font-medium",children:C.medicineName||"Unknown Medicine"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-600 mt-1",children:[C.dosage&&e.jsxs("div",{children:["Dosage: ",C.dosage]}),C.quantity&&e.jsxs("div",{children:["Quantity: ",C.quantity]}),C.duration&&e.jsxs("div",{children:["Duration: ",C.duration]}),C.frequency&&e.jsxs("div",{children:["Frequency: ",C.frequency]}),C.timing&&e.jsxs("div",{children:["Timing: ",C.timing]}),C.notes&&e.jsxs("div",{className:"md:col-span-2",children:["Notes: ",C.notes]})]})]},k))})]}):e.jsx("div",{className:"bg-yellow-50 p-3 rounded",children:e.jsx("p",{className:"text-yellow-700 text-sm",children:"No medicines listed in this prescription"})})]},`patient-${m._id}-${_}`))}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx("p",{className:"text-gray-500",children:"No patient prescriptions found"}),e.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Check if patients have prescriptions in their data"})]})]}),Q==="walkin"&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Walk-in Prescriptions"}),j&&j.length>0?e.jsx("div",{className:"space-y-4",children:j.map(m=>e.jsxs("div",{className:"border rounded-lg p-4 hover:bg-gray-50",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"font-semibold text-green-600",children:["Patient: ",m.patientName||"Walk-in Patient"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Phone: ",m.patientPhone||"N/A"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:"text-sm text-gray-500",children:Z(m.createdAt)}),e.jsx("div",{className:"mt-1",children:e.jsxs("span",{className:"px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full",children:["Total: ",m.charges," Rs"]})})]})]}),e.jsxs("div",{className:"text-sm text-gray-700 mb-2",children:["Dispensed by: ",e.jsx("span",{className:"font-medium",children:m.PharmacyPerson})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Medicines:"}),e.jsx("ul",{className:"space-y-1",children:m.medicines?.map((_,C)=>e.jsxs("li",{className:"text-sm",children:["• ",_.medicineName," - Qty: ",_.quantity," - Charges: ",_.pharmacyCharges," Rs"]},C))})]})]},m._id))}):e.jsx("div",{className:"text-center py-8",children:e.jsx("p",{className:"text-gray-500",children:"No walk-in prescriptions found"})})]})]}),b==="lab"&&e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold mb-4",children:["Laboratory Records (",W?.records?.length||0,")"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Patient"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Test"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Category"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Priority"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Status"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Date"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:W?.records?.map(m=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-sm",children:m.patientName}),e.jsx("div",{className:"text-xs text-gray-500",children:m.patientUniqueId})]})}),e.jsx("td",{className:"px-4 py-3 text-sm",children:m.testName}),e.jsx("td",{className:"px-4 py-3 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs",children:m.category})}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${m.priority==="Urgent"||m.priority==="Emergency"?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"}`,children:m.priority})}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full",children:m.status})}),e.jsx("td",{className:"px-4 py-3 text-sm",children:Z(m.createdAt)})]},m._id))})]})})]}),b==="xray"&&e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold mb-4",children:["X-Ray Reports (",U.totalXrays,")"]}),e.jsxs("div",{className:"mb-8",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["Patient X-Ray Reports (",H?.length||0,")"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Patient"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Test"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Category"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Technician"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:H?.map(m=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-sm",children:m.patientName}),e.jsxs("div",{className:"text-xs text-gray-500",children:["Age: ",m.age]})]})}),e.jsx("td",{className:"px-4 py-3 text-sm",children:m.testName}),e.jsx("td",{className:"px-4 py-3 text-sm",children:m.category}),e.jsx("td",{className:"px-4 py-3 text-sm",children:m.performedBy}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full",children:m.status})})]},m._id))})]})})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["Walk-in X-Ray Reports (",w?.records?.length||0,")"]}),w?.records?.length>0?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Patient Name"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Test"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Age/Gender"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Technician"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Date"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:w.records.map(m=>e.jsxs("tr",{children:[e.jsxs("td",{className:"px-4 py-3",children:[e.jsx("div",{className:"font-medium text-sm",children:m.patientName}),e.jsx("div",{className:"text-xs text-gray-500",children:m.patientUniqueId})]}),e.jsx("td",{className:"px-4 py-3 text-sm",children:m.testName}),e.jsxs("td",{className:"px-4 py-3 text-sm",children:[m.age," / ",m.gender]}),e.jsx("td",{className:"px-4 py-3 text-sm",children:m.performedBy}),e.jsx("td",{className:"px-4 py-3 text-sm",children:Z(m.createdAt)})]},m._id))})]})}):e.jsx("p",{className:"text-gray-500 text-center py-4",children:"No walk-in X-ray records found"})]})]}),b==="users"&&e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold mb-4",children:["All Users (",d?.length||0,")"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:d?.map(m=>e.jsxs("div",{className:"border rounded-lg p-4 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"flex items-start mb-3",children:[e.jsx("div",{className:`p-3 rounded-lg ${m.role==="Doctor"?"bg-blue-100":m.role==="Admin"?"bg-purple-100":m.role==="Reception"?"bg-green-100":m.role==="Lab"?"bg-orange-100":m.role==="X-Ray"?"bg-red-100":"bg-gray-100"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"font-bold text-lg",children:m.name}),e.jsx("p",{className:"text-gray-600",children:m.email}),e.jsx("span",{className:`mt-2 inline-block px-3 py-1 rounded-full text-sm ${m.role==="Doctor"?"bg-blue-100 text-blue-800":m.role==="Admin"?"bg-purple-100 text-purple-800":m.role==="Reception"?"bg-green-100 text-green-800":m.role==="Lab"?"bg-orange-100 text-orange-800":m.role==="X-Ray"?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"}`,children:m.role})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("p",{children:["Phone: ",m.phone]}),e.jsxs("p",{children:["Verified: ",m.verified?"✅ Yes":"❌ No"]}),m.licenseNumber&&e.jsxs("p",{children:["License: ",m.licenseNumber]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["Joined: ",Z(m.createdAt)]})]})]},m._id))})]})]}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsxs("button",{onClick:z,className:"flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:[e.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),"Refresh Data"]})})]})}function A0({onClose:d,onSuccess:o}){const{createPatient:p,loading:u,patients:j}=ft(),{getAllUsers:N,allUsers:W}=gt(),[B,H]=A.useState({name:"",address:"",age:"",weight:"",gender:"",phone:"",bloodGroup:"",doctorId:"",doctorName:"",charges:0,appointmentNumber:""}),[R,V]=A.useState({}),[b,E]=A.useState([]),[v,ne]=A.useState(null),[w,ae]=A.useState([]),Q=new Date().toISOString().split("T")[0];A.useEffect(()=>{(async()=>{await N();const _=W.filter(k=>k.role==="Doctor"&&k.SpecialistDoctor&&k.SpecialistDoctor!=="None");E(_);const C=_.map(k=>{const F=j.filter(x=>x.doctorAppointment&&x.doctorAppointment.doctorId===k._id?new Date(x.doctorAppointment.appointmentDate).toISOString().split("T")[0]===Q:!1),de=k.TotalAppointments?parseInt(k.TotalAppointments):0,I=de===0||F.length<de;return{...k,todayAppointments:F.length,isAvailable:I,remainingSlots:de>0?de-F.length:"∞"}});ae(C)})()},[W.length,j.length]);const M=m=>{if(!m)return 1;const _=new Date().toISOString().split("T")[0],F=j.filter(I=>I.doctorAppointment&&I.doctorAppointment.doctorId===m?new Date(I.doctorAppointment.appointmentDate).toISOString().split("T")[0]===_:!1).sort((I,x)=>{const h=new Date(I.doctorAppointment.appointmentDate),Y=new Date(x.doctorAppointment.appointmentDate);return h-Y}).map(I=>I.doctorAppointment.appointmentNumber||0);return Math.max(0,...F)+1},z=()=>{const m={};return B.name.trim()||(m.name="Name is required"),B.address.trim()||(m.address="Address is required"),B.age||(m.age="Age is required"),B.age&&(B.age<0||B.age>150)&&(m.age="Enter a valid age (0-150)"),B.weight||(m.weight="Weight is required"),B.weight&&(B.weight<0||B.weight>300)&&(m.weight="Enter a valid weight (0-300 kg)"),B.gender||(m.gender="Gender is required"),B.phone&&!/^\d{10,15}$/.test(B.phone.replace(/\D/g,""))&&(m.phone="Enter a valid phone number (10-15 digits)"),V(m),Object.keys(m).length===0},Z=async m=>{if(m.preventDefault(),!z())return;if(B.doctorId&&v){const k=w.find(F=>F._id===B.doctorId);if(k&&!k.isAvailable){alert(`Dr. ${v.name} has reached the daily appointment limit (${k.TotalAppointments}). Please select another doctor.`);return}}const _={name:B.name,address:B.address,age:Number(B.age),weight:Number(B.weight),gender:B.gender,phone:B.phone||"",bloodGroup:B.bloodGroup||"",doctorAppointment:B.doctorId?{doctorId:B.doctorId,doctorName:B.doctorName,charges:Number(B.charges),appointmentNumber:B.appointmentNumber,appointmentDate:new Date,status:"Pending",licenseNumber:B.licenseNumber}:null};await p(_)&&o()},L=m=>{const{name:_,value:C}=m.target;if(_==="age"||_==="weight"?(C===""||/^\d*\.?\d*$/.test(C))&&H(k=>({...k,[_]:C})):H(k=>({...k,[_]:C})),_==="doctorId"){const k=b.find(F=>F._id===C);if(k){const F=M(C);ne(k),H(de=>({...de,doctorId:C,doctorName:k.name,licenseNumber:k.licenseNumber,charges:k.ConsultationCharges?Number(k.ConsultationCharges):0,appointmentNumber:F}))}}R[_]&&V(k=>({...k,[_]:""}))},U=["A+","A-","B+","B-","O+","O-","AB+","AB-","Unknown"],$=["Male","Female","Other"],J=w.reduce((m,_)=>{const C=_.SpecialistDoctor||"General";return m[C]||(m[C]=[]),m[C].push(_),m},{});return e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[e.jsx("div",{className:"sticky top-0 bg-white border-b border-gray-200 px-6 py-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg",children:e.jsx(fc,{className:"w-6 h-6 text-indigo-600"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Register New Patient"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Fill in the required patient details"})]})]}),e.jsx("button",{onClick:d,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(Ft,{className:"w-5 h-5 text-gray-500"})})]})}),e.jsxs("form",{onSubmit:Z,className:"p-6",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-indigo-600"}),"Required Information *"]}),e.jsxs("div",{className:"grid grid-cols-1 text-black md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),e.jsxs("div",{className:"relative",children:[e.jsx(qe,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsx("input",{type:"text",name:"name",value:B.name,onChange:L,className:`w-full pl-10 pr-4 py-2.5 text-black border ${R.name?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`,placeholder:"Enter patient's full name"})]}),R.name&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:R.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Age (Years) *"}),e.jsxs("div",{className:"relative",children:[e.jsx(dt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsx("input",{type:"text",name:"age",value:B.age,onChange:L,className:`w-full pl-10 pr-4 py-2.5 border ${R.age?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`,placeholder:"Enter age in years"})]}),R.age&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:R.age})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Weight (kg) *"}),e.jsxs("div",{className:"relative",children:[e.jsx(Ax,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsx("input",{type:"text",name:"weight",value:B.weight,onChange:L,className:`w-full pl-10 pr-4 py-2.5 border ${R.weight?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`,placeholder:"Enter weight in kg"})]}),R.weight&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:R.weight})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Gender *"}),e.jsxs("select",{name:"gender",value:B.gender,onChange:L,className:`w-full px-4 py-2.5 border ${R.gender?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`,children:[e.jsx("option",{value:"",children:"Select Gender"}),$.map(m=>e.jsx("option",{value:m,children:m},m))]}),R.gender&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:R.gender})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Gi,{className:"w-5 h-5 text-blue-600"}),"Address Information *"]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Complete Address *"}),e.jsxs("div",{className:"relative",children:[e.jsx(Gi,{className:"absolute left-3 top-3 text-gray-400 w-5 h-5"}),e.jsx("textarea",{name:"address",value:B.address,onChange:L,rows:"3",className:`w-full pl-10 pr-4 py-2.5 text-black border ${R.address?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`,placeholder:"Enter complete address including street, city, state, and postal code"})]}),R.address&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:R.address})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(da,{className:"w-5 h-5 text-amber-600"}),"Doctor Appointment (Optional)"]}),e.jsxs("div",{className:"grid grid-cols-1 text-black md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Doctor"}),e.jsxs("div",{className:"relative",children:[e.jsx(da,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsxs("select",{name:"doctorId",value:B.doctorId,onChange:L,className:"w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",children:[e.jsx("option",{value:"",children:"Select a Doctor (Optional)"}),Object.entries(J).map(([m,_])=>e.jsx("optgroup",{label:m,children:_.map(C=>e.jsxs("option",{value:C._id,disabled:!C.isAvailable,className:C.isAvailable?"":"text-gray-400",children:["Dr. ",C.name," - PKR ",C.ConsultationCharges||0,C.isAvailable?C.TotalAppointments?` (Slots: ${C.remainingSlots}/${C.TotalAppointments})`:" (Available)":" (FULL - No Slots Available)"]},C._id))},m))]})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Note: Appointment is optional. You can assign a doctor later."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Consultation Charges"}),e.jsxs("div",{className:"relative",children:[e.jsx(t0,{arSign:!0,className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsx("input",{type:"text",value:v?`PKR ${B.charges}`:"No PKR selected",readOnly:!0,className:`w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg ${v?"bg-gray-50 text-gray-700":"bg-gray-100 text-gray-500"}`})]})]})]}),v&&e.jsxs("div",{className:"mt-4 p-3 text-black bg-white rounded-lg border border-gray-200",children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-2 flex items-center gap-2",children:[e.jsx(da,{className:"w-4 h-4"}),"Selected Doctor Details"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Name:"}),e.jsxs("span",{className:"font-medium ml-2",children:["Dr. ",v.name]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Specialization:"}),e.jsx("span",{className:"font-medium ml-2",children:v.SpecialistDoctor})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"licenseNumber:"}),e.jsx("span",{className:"font-mono ml-2",children:v.licenseNumber})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Phone:"}),e.jsx("span",{className:"font-medium ml-2",children:v.phone||"N/A"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Timing:"}),e.jsx("span",{className:"font-medium ml-2",children:v.ConsultationTime||"N/A"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Charges:"}),e.jsxs("span",{className:"font-medium ml-2",children:["PKR ",v.ConsultationCharges]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Time/Patient:"}),e.jsxs("span",{className:"font-medium ml-2",children:[v.ConsultationTimePerPatient||"N/A"," mins"]})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("span",{className:"text-gray-600",children:"Today's Appointments:"}),e.jsxs("span",{className:`font-medium ml-2 ${w.find(m=>m._id===v._id)?.isAvailable?"text-green-600":"text-red-600"}`,children:[w.find(m=>m._id===v._id)?.todayAppointments||0,v.TotalAppointments?` / ${v.TotalAppointments}`:""]})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("span",{className:"text-gray-600",children:"Your Appointment Number:"}),e.jsx("span",{className:"font-medium ml-2 text-blue-600",children:B.appointmentNumber||"Not assigned yet"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"This is your sequence number for today's appointments with this doctor"})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("h4",{className:"text-sm font-medium text-gray-700 mb-2 flex items-center gap-2",children:[e.jsx(os,{className:"w-4 h-4"}),"Today's Appointment Statistics (",Q,")"]}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:w.slice(0,4).map(m=>e.jsxs("div",{className:`p-2 rounded-lg text-xs ${m.isAvailable?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:[e.jsxs("div",{className:"font-medium truncate",children:["Dr. ",m.name.split(" ")[0]]}),e.jsxs("div",{className:`text-sm font-semibold ${m.isAvailable?"text-green-600":"text-red-600"}`,children:[m.todayAppointments,"/",m.TotalAppointments||"∞"]}),e.jsx("div",{className:"text-xs text-gray-500",children:m.SpecialistDoctor})]},m._id))})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Qi,{className:"w-5 h-5 text-green-600"}),"Additional Information"]}),e.jsxs("div",{className:"grid grid-cols-1 text-black md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),e.jsxs("div",{className:"relative",children:[e.jsx(za,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsx("input",{type:"tel",name:"phone",value:B.phone,onChange:L,className:`w-full pl-10 pr-4 py-2.5 border ${R.phone?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`,placeholder:"Enter phone number"})]}),R.phone&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:R.phone})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Blood Group"}),e.jsxs("div",{className:"relative",children:[e.jsx(Qi,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsxs("select",{name:"bloodGroup",value:B.bloodGroup,onChange:L,className:"w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",children:[e.jsx("option",{value:"",children:"Select Blood Group"}),U.map(m=>e.jsx("option",{value:m,children:m},m))]})]})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-700 mb-2",children:"Summary:"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("li",{children:["• Name: ",B.name||"Not provided"]}),e.jsxs("li",{children:["• Age: ",B.age||"Not provided"," years"]}),e.jsxs("li",{children:["• Weight: ",B.weight||"Not provided"," kg"]}),e.jsxs("li",{children:["• Gender: ",B.gender||"Not selected"]}),e.jsxs("li",{children:["• Address: ",B.address?B.address.length>50?B.address.substring(0,50)+"...":B.address:"Not provided"]}),e.jsxs("li",{children:["• Phone: ",B.phone||"Not provided"]}),e.jsxs("li",{children:["• Blood Group: ",B.bloodGroup||"Not specified"]}),e.jsxs("li",{children:["• Doctor: ",v?`Dr. ${v.name}`:"Not selected"]}),e.jsxs("li",{children:["• Charges: ",v?`PKR ${B.charges}`:"N/A"]}),e.jsxs("li",{children:["• Appointment Number: ",v?`#${B.appointmentNumber||"Calculating..."}`:"N/A"]}),e.jsxs("li",{children:["• Status: ",v?"Pending Appointment":"No Appointment"]})]})]})]}),e.jsxs("div",{className:"sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 mt-6 -mx-6 -mb-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsx("button",{type:"button",onClick:d,className:"flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-colors border border-gray-300",children:"Cancel"}),e.jsx("button",{type:"submit",disabled:u,className:"flex-1 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-medium py-3 rounded-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:u?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),"Creating Patient..."]}):e.jsxs(e.Fragment,{children:[e.jsx(fc,{className:"w-5 h-5"}),v?"Create with Appointment":"Create Patient"]})})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-3 text-center",children:"* Required fields: Name, Address, Age, Weight, Gender"})]})]})]})})}function C0(){const{patients:d,loading:o,getAllPatients:p,updatePatient:u,deletePatient:j}=ft(),{getAllUsers:N,allUsers:W}=gt(),[B,H]=A.useState(""),[R,V]=A.useState("all"),[b,E]=A.useState(1),[v,ne]=A.useState(!1),[w,ae]=A.useState(null),[Q,M]=A.useState(!1),[z,Z]=A.useState(!1),[L,U]=A.useState(!1),[$,J]=A.useState(null),[m,_]=A.useState(!1),[C,k]=A.useState(!1),[F,de]=A.useState({doctorId:"",charges:"",status:"Pending",appointmentDate:"",appointmentNumber:1}),[I,x]=A.useState({name:"",address:"",age:"",weight:"",gender:"",phone:"",bloodGroup:"",doctorAppointment:null}),h=5,Y=async()=>{await N()};A.useEffect(()=>{Y();const se=()=>{_(window.innerWidth<768)};return se(),window.addEventListener("resize",se),p(),()=>window.removeEventListener("resize",se)},[]);const S=d.filter(se=>{const pe=se.name?.toLowerCase().includes(B.toLowerCase())||se.uniqueID?.toLowerCase().includes(B.toLowerCase())||se.phone?.includes(B),be=R==="all"||se.status?.toLowerCase()===R.toLowerCase();return pe&&be}),f=Math.ceil(S.length/h),G=(b-1)*h,K=G+h,re=S.slice(G,K),me=new Date().toDateString(),oe={total:d.length,withAppointment:d.filter(se=>se.doctorAppointment&&se.doctorAppointment.doctorId&&new Date(se.doctorAppointment.appointmentDate).toDateString()===me).length,pendingAppointments:d.filter(se=>se.doctorAppointment&&se.doctorAppointment.status==="Pending"&&new Date(se.doctorAppointment.appointmentDate).toDateString()===me).length,newToday:d.filter(se=>new Date(se.createdAt).toDateString()===me).length},fe=()=>{p(),ne(!1)},te=se=>{ae(se),M(!0)},g=se=>{if(ae(se),se.doctorAppointment){const pe=se.doctorAppointment.doctorId||"",be=Ps().find(Re=>Re._id===pe);de({doctorId:pe,charges:se.doctorAppointment.charges||be?.ConsultationCharges||0,status:se.doctorAppointment.status||"Pending",appointmentDate:se.doctorAppointment.appointmentDate?new Date(se.doctorAppointment.appointmentDate).toISOString().split("T")[0]:new Date().toISOString().split("T")[0]})}else de({doctorId:"",charges:"",status:"Pending",appointmentDate:new Date().toISOString().split("T")[0]});k(!0)},ce=(se,pe,be)=>{if(!se)return 1;const He=new Date(pe).toISOString().split("T")[0],Us=d.filter(zt=>zt.doctorAppointment&&zt.doctorAppointment.doctorId===se?new Date(zt.doctorAppointment.appointmentDate).toISOString().split("T")[0]===He&&zt._id!==be:!1).sort((zt,ds)=>{const sa=zt.doctorAppointment.appointmentNumber||0,$s=ds.doctorAppointment.appointmentNumber||0;return sa-$s}).map(zt=>zt.doctorAppointment.appointmentNumber||0);return Math.max(0,...Us)+1},ue=async se=>{if(se.preventDefault(),!w)return;const pe=Ps().find(He=>He._id===F.doctorId);if(pe&&!pe.isAvailable){alert(`Dr. ${pe.name} has reached the daily appointment limit (${pe.TotalAppointments}). Please select another doctor.`);return}const be={doctorAppointment:{doctorId:F.doctorId,charges:Number(F.charges)||0,status:F.status,appointmentDate:new Date(F.appointmentDate),doctorName:ga(F.doctorId),appointmentNumber:F.appointmentNumber||1}};await u(w._id,be)&&(k(!1),ae(null),p())},De=se=>{const{name:pe,value:be}=se.target;if(pe==="doctorId"){const Re=Ps().find(He=>He._id===be);if(Re){const He=Re.ConsultationCharges||Re.charges||0,We=ce(be,F.appointmentDate||new Date().toISOString().split("T")[0],w?._id);de(aa=>({...aa,doctorId:be,charges:He,appointmentNumber:We}))}else de(He=>({...He,doctorId:be,charges:"",appointmentNumber:1}))}else if(pe==="appointmentDate"){let Re=1;F.doctorId&&(Re=ce(F.doctorId,be,w?._id)),de(He=>({...He,[pe]:be,appointmentNumber:Re}))}else de(Re=>({...Re,[pe]:be}))},we=async()=>{if(!w||!w.doctorAppointment)return;const se={doctorAppointment:null};await u(w._id,se)&&(k(!1),ae(null),p())},_e=se=>{ae(se),x({name:se.name||"",address:se.address||"",age:se.age||"",weight:se.weight||"",gender:se.gender||"",phone:se.phone||"",bloodGroup:se.bloodGroup||"",doctorAppointment:se.doctorAppointment||null}),Z(!0),M(!1)},Se=async se=>{se.preventDefault();const pe={...I,age:Number(I.age),weight:Number(I.weight),doctorAppointment:I.doctorAppointment||void 0};await u(w._id,pe)&&(Z(!1),ae(null),p())},je=se=>{const{name:pe,value:be}=se.target;pe==="age"||pe==="weight"?(be===""||/^\d*\.?\d*$/.test(be))&&x(Re=>({...Re,[pe]:be})):x(Re=>({...Re,[pe]:be}))},Ms=se=>{J(se),U(!0)},Xt=async()=>{$&&await j($._id)&&(U(!1),J(null),p())},Ki=["A+","A-","B+","B-","O+","O-","AB+","AB-","Unknown"],Tn=["Male","Female","Other"],Rn=["Pending","Completed","Cancelled"],ga=se=>{if(!se)return"Not assigned";const pe=W.find(be=>be._id===se);return pe?`Dr. ${pe.name}`:"Unknown Doctor"},Ps=()=>{const se=new Date().toISOString().split("T")[0];return W.filter(pe=>(pe.role==="doctor"||pe.role==="Doctor")&&pe.SpecialistDoctor&&pe.SpecialistDoctor!=="None").map(pe=>{const be=d.filter(aa=>aa.doctorAppointment&&aa.doctorAppointment.doctorId===pe._id?new Date(aa.doctorAppointment.appointmentDate).toISOString().split("T")[0]===se:!1),Re=pe.TotalAppointments?parseInt(pe.TotalAppointments):0,He=Re===0||be.length<Re,We=Re>0?Re-be.length:"∞";return{...pe,ConsultationCharges:pe.ConsultationCharges||pe.charges||0,todayAppointments:be.length,isAvailable:He,remainingSlots:We}})},kn=()=>{if(!w){alert("Please select a patient first");return}const se=window.open("","_blank"),pe=(aa,Us="Not specified")=>aa||Us,be=w.doctorAppointment||{},Re=pe(be.doctorName,ga(be.doctorId)),He=w.doctorAppointment.licenseNumber||{},We=be.appointmentDate?new Date(be.appointmentDate).toLocaleDateString():"Not scheduled";se.document.write(`
      <html>
        <head>
          <title>Patient Details - ${pe(w.name)}</title>
          <style>
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              padding: 20px; 
              line-height: 1.6;
              color: #333;
              background: #f8f9fa;
            }
            .header { 
              text-align: center; 
              border-bottom: 3px solid #4f46e5; 
              padding-bottom: 20px; 
              margin-bottom: 30px; 
            }
            .header h1 { 
              color: #4f46e5; 
              margin: 0; 
            }
            .patient-info { 
              margin-bottom: 30px; 
              background: white; 
              padding: 25px; 
              border-radius: 12px; 
              border: 1px solid #e2e8f0;
              box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            }
            .section-title {
              color: #4f46e5;
              border-bottom: 2px solid #c7d2fe;
              padding-bottom: 8px;
              margin-top: 25px;
              margin-bottom: 15px;
              font-size: 18px;
            }
            .info-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 15px;
              margin-bottom: 20px;
            }
            .info-item {
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
              border-bottom: 1px dashed #e2e8f0;
            }
            .info-label {
              font-weight: 600;
              color: #64748b;
            }
            .info-value {
              font-weight: 500;
              color: #1e293b;
            }
            .appointment-section {
              background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
              padding: 25px;
              border-radius: 12px;
              border: 1px solid #fed7aa;
              margin: 25px 0;
              box-shadow: 0 2px 10px rgba(251, 146, 60, 0.1);
            }
            .status-badge {
              display: inline-block;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              margin-left: 10px;
            }
            .status-pending { background: #fef3c7; color: #92400e; }
            .status-completed { background: #d1fae5; color: #065f46; }
            .status-cancelled { background: #fee2e2; color: #991b1b; }
            .footer { 
              margin-top: 50px; 
              border-top: 2px solid #4f46e5; 
              padding-top: 20px; 
              text-align: center;
              color: #64748b;
              font-size: 14px;
            }
            .hospital-info {
              text-align: center;
              margin-bottom: 30px;
              padding: 20px;
              background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
              color: white;
              border-radius: 12px;
              box-shadow: 0 4px 15px rgba(79, 70, 229, 0.2);
            }
            .hospital-name {
              font-size: 24px;
              font-weight: bold;
              color: white;
              margin-bottom: 5px;
            }
            .print-date {
              text-align: right;
              color: #64748b;
              font-size: 14px;
              margin-bottom: 20px;
              padding: 10px;
              background: white;
              border-radius: 8px;
              border: 1px solid #e2e8f0;
            }
            .patient-id {
              background: #e0e7ff;
              color: #4f46e5;
              padding: 8px 16px;
              border-radius: 20px;
              font-weight: bold;
              display: inline-block;
              margin: 10px 0;
            }
            @media print {
              body { padding: 15px; background: white; }
              .no-print { display: none; }
              .hospital-info {
                background: #4f46e5 !important;
                -webkit-print-color-adjust: exact;
              }
              .appointment-section {
                background: #fff7ed !important;
                -webkit-print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body>
          <div class="hospital-info">
            <div class="hospital-name">Hospital Management System</div>
            <div>Patient Medical Record</div>
            <div class="patient-id">Patient ID: ${pe(w.uniqueID,w._id?.substring(0,8))}</div>
          </div>
          
          <div class="print-date">
            Printed on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
          </div>
          
          <div class="header">
            <h1>PATIENT DETAILS</h1>
          </div>
          
          <div class="patient-info">
            <h2 class="section-title">Personal Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Patient Name:</span>
                <span class="info-value">${pe(w.name)}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Age:</span>
                <span class="info-value">${pe(w.age)} years</span>
              </div>
              <div class="info-item">
                <span class="info-label">Gender:</span>
                <span class="info-value">${pe(w.gender)}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Weight:</span>
                <span class="info-value">${pe(w.weight,"N/A")} kg</span>
              </div>
              <div class="info-item">
                <span class="info-label">Blood Group:</span>
                <span class="info-value">${pe(w.bloodGroup)}</span>
              </div>
            </div>
            
            <h2 class="section-title">Contact Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Phone Number:</span>
                <span class="info-value">${pe(w.phone)}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Address:</span>
                <span class="info-value">${pe(w.address)}</span>
              </div>
            </div>
            
            <h2 class="section-title">System Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Registration Date:</span>
                <span class="info-value">${w.createdAt?new Date(w.createdAt).toLocaleDateString():"N/A"}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Last Updated:</span>
                <span class="info-value">${w.updatedAt?new Date(w.updatedAt).toLocaleDateString():w.createdAt?new Date(w.createdAt).toLocaleDateString():"N/A"}</span>
              </div>
            </div>
          </div>
          
          ${be.doctorId?`
            <div class="appointment-section">
              <h2 class="section-title">Appointment Information</h2>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">Appointment Number:</span>
                  <span class="info-value">${pe(be.appointmentNumber,"N/A")}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Doctor:</span>
                  <span class="info-value">${Re}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">licenseNumber:</span>
                  <span class="info-value">${He}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Appointment Date:</span>
                  <span class="info-value">${We}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Charges:</span>
                  <span class="info-value">PKR ${pe(be.charges,0)}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Status:</span>
                  <span class="info-value">
                    ${pe(be.status,"Pending")}
                    <span class="status-badge status-${(be.status||"Pending").toLowerCase()}">
                      ${(be.status||"Pending").toUpperCase()}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          `:`
            <div style="background: #f1f5f9; padding: 25px; border-radius: 12px; text-align: center; margin: 25px 0; border: 1px solid #e2e8f0;">
              <p style="color: #64748b; margin: 0; font-size: 16px;">
                <strong style="color: #475569;">No Appointment Scheduled</strong><br>
                This patient does not have any scheduled appointments.
              </p>
            </div>
          `}
          
          <div class="footer">
            <p>This document is computer-generated and does not require a signature.</p>
            <p>Hospital Management System | ${new Date().getFullYear()}</p>
            <p style="font-size: 12px; margin-top: 10px;">Confidential Medical Record - For internal use only</p>
          </div>
          
          <div class="no-print" style="text-align: center; margin-top: 30px;">
            <button onclick="window.print()" style="
              background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
              color: white; 
              border: none; 
              padding: 12px 24px; 
              border-radius: 8px; 
              cursor: pointer; 
              font-size: 16px;
              font-weight: 600;
              transition: all 0.3s ease;
              box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
            ">
              🖨️ Print Document
            </button>
            <p style="color: #64748b; margin-top: 10px; font-size: 14px;">Click above button to print</p>
          </div>
        </body>
      </html>
    `),se.document.close()};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50",children:[e.jsx("header",{className:"bg-white shadow-sm border-b border-gray-200",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-4 sm:space-y-0",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Reception Dashboard"}),e.jsx("p",{className:"text-gray-600 text-sm mt-1",children:"Manage patient registrations and information"})]}),e.jsxs("button",{onClick:()=>ne(!0),className:"w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center transition-all hover:shadow-lg",children:[e.jsx(fc,{className:"w-5 h-5 mr-2"}),m?"New Patient":"Register New Patient"]})]})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",children:[e.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Total Patients"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:oe.total})]}),e.jsx("div",{className:"p-3 bg-blue-100 rounded-lg",children:e.jsx(Yi,{className:"w-6 h-6 text-blue-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"With Appointments"}),e.jsx("p",{className:"text-2xl font-bold text-green-700 mt-1",children:oe.withAppointment})]}),e.jsx("div",{className:"p-3 bg-green-100 rounded-lg",children:e.jsx(bt,{className:"w-6 h-6 text-green-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Pending"}),e.jsx("p",{className:"text-2xl font-bold text-yellow-700 mt-1",children:oe.pendingAppointments})]}),e.jsx("div",{className:"p-3 bg-yellow-100 rounded-lg",children:e.jsx(ma,{className:"w-6 h-6 text-yellow-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"New Today"}),e.jsx("p",{className:"text-2xl font-bold text-purple-700 mt-1",children:oe.newToday})]}),e.jsx("div",{className:"p-3 bg-purple-100 rounded-lg",children:e.jsx(dt,{className:"w-6 h-6 text-purple-600"})})]})})]}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm border text-black border-gray-200 p-4 mb-6",children:e.jsx("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"relative",children:[e.jsx(kt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsx("input",{type:"text",placeholder:"Search patients by name, ID, or phone...",value:B,onChange:se=>H(se.target.value),className:"w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"})]})})})}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Patient"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Contact"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Appointment"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Registered"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:o?e.jsx("tr",{children:e.jsxs("td",{colSpan:"5",className:"px-6 py-12 text-center",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"})}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Loading patients..."})]})}):re.length===0?e.jsx("tr",{children:e.jsxs("td",{colSpan:"5",className:"px-6 py-12 text-center",children:[e.jsx(Yi,{className:"w-12 h-12 text-gray-400 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"No patients found"}),e.jsx("button",{onClick:()=>ne(!0),className:"mt-4 text-indigo-600 hover:text-indigo-700 font-medium",children:"Register your first patient"})]})}):re.map(se=>e.jsxs("tr",{className:"hover:bg-gray-50 transition-colors",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex-shrink-0 h-10 w-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold",children:se.name?.charAt(0).toUpperCase()||"P"}),e.jsxs("div",{className:"ml-4",children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:se.name}),e.jsxs("div",{className:"text-xs text-gray-500",children:["ID: ",se.uniqueID||se._id?.substring(0,8)]})]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"text-sm text-gray-900",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(za,{className:"w-4 h-4 text-gray-500"}),e.jsx("span",{children:se.phone||"Not provided"})]}),e.jsx("div",{className:"text-xs text-gray-500",children:se.address?se.address.length>30?se.address.substring(0,30)+"...":se.address:"No address"})]})}),e.jsx("td",{className:"px-6 py-4",children:se.doctorAppointment&&se.doctorAppointment.doctorId?e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{className:"font-medium text-gray-900",children:ga(se.doctorAppointment.doctorId)}),e.jsxs("div",{className:"text-xs text-gray-500",children:["PKR ",se.doctorAppointment.charges||0]}),e.jsx("span",{className:`inline-block px-2 py-1 text-xs rounded-full mt-1 ${se.doctorAppointment.status==="Completed"?"bg-green-100 text-green-800":se.doctorAppointment.status==="Cancelled"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:se.doctorAppointment.status||"Pending"})]}):e.jsx("div",{className:"text-sm text-gray-500",children:"No appointment"})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(dt,{className:"w-4 h-4"}),new Date(se.createdAt).toLocaleDateString()]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>te(se),className:"p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"View Details",children:e.jsx(jt,{className:"w-5 h-5"})}),e.jsx("button",{onClick:()=>_e(se),className:"p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors",title:"Edit",children:e.jsx(Vi,{className:"w-5 h-5"})}),e.jsx("button",{onClick:()=>g(se),className:"p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors",title:"Edit Appointment",children:e.jsx(dt,{className:"w-5 h-5"})}),e.jsx("button",{onClick:()=>Ms(se),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"Delete",children:e.jsx(ua,{className:"w-5 h-5"})})]})})]},se._id))})]})}),re.length>0&&e.jsx("div",{className:"border-t border-gray-200 px-6 py-4",children:e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-700 mb-4 sm:mb-0",children:["Showing ",e.jsx("span",{className:"font-medium",children:G+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(K,S.length)})," of"," ",e.jsx("span",{className:"font-medium",children:S.length})," patients"]}),e.jsxs("div",{className:"flex items-center gap-2 text-black",children:[e.jsx("button",{onClick:()=>E(se=>Math.max(se-1,1)),disabled:b===1,className:"p-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:e.jsx(rs,{className:"w-5 h-5"})}),e.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:Math.min(5,f)},(se,pe)=>{let be;return f<=5||b<=3?be=pe+1:b>=f-2?be=f-4+pe:be=b-2+pe,e.jsx("button",{onClick:()=>E(be),className:`w-8 h-8 rounded-lg font-medium transition-colors ${b===be?"bg-indigo-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:be},be)})}),e.jsx("button",{onClick:()=>E(se=>Math.min(se+1,f)),disabled:b===f,className:"p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:e.jsx(ks,{className:"w-5 h-5"})})]})]})})]})]}),v&&e.jsx(A0,{onClose:()=>ne(!1),onSuccess:fe}),Q&&w&&e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:e.jsx("div",{className:"bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-start mb-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Patient Details"}),e.jsx("p",{className:"text-gray-600",children:"Complete patient information"})]}),e.jsx("button",{onClick:()=>M(!1),className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(Ft,{className:"w-5 h-5 text-gray-500"})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl",children:[e.jsx("div",{className:"w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold",children:w.name?.charAt(0).toUpperCase()}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900",children:w.name}),e.jsx("div",{className:"flex items-center gap-3 mt-2",children:e.jsxs("span",{className:"text-sm text-gray-600",children:[e.jsx("span",{className:"text-black font-bold",children:" ID: "}),w.uniqueID||w._id?.substring(0,8),e.jsxs("div",{children:[e.jsx("span",{className:"text-black font-bold",children:"AppointmentNumber: "}),w.doctorAppointment?.appointmentNumber||"No Appointment"]})]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-indigo-600"}),"Personal Information"]}),e.jsx(Ot,{label:"Full Name",value:w.name}),e.jsx(Ot,{label:"Gender",value:w.gender||"Not specified"}),e.jsx(Ot,{label:"Age",value:w.age||"Not provided"}),e.jsx(Ot,{label:"Weight",value:w.weight?`${w.weight} kg`:"Not provided"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(za,{className:"w-5 h-5 text-indigo-600"}),"Contact Information"]}),e.jsx(Ot,{label:"Phone",value:w.phone||"Not provided"}),e.jsx(Ot,{label:"Address",value:w.address||"Not provided"}),e.jsx(Ot,{label:"Blood Group",value:w.bloodGroup||"Not tested"})]})]}),w.doctorAppointment&&w.doctorAppointment.doctorId?e.jsxs("div",{className:"bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(da,{className:"w-5 h-5 text-amber-600"}),"Appointment Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(Ot,{label:"Doctor Name",value:w.doctorAppointment.doctorName||ga(w.doctorAppointment.doctorId)}),e.jsx(Ot,{label:"Charges",value:`PKR ${w.doctorAppointment.charges||0}`}),e.jsx(Ot,{label:"Appointment Date",value:new Date(w.doctorAppointment.appointmentDate).toLocaleDateString()}),e.jsx(Ot,{label:"Status",value:w.doctorAppointment.status||"Pending"})]})]}):e.jsx("div",{className:"bg-gray-50 p-4 rounded-xl",children:e.jsx("p",{className:"text-gray-600 text-center",children:"No appointment assigned to this patient"})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(os,{className:"w-5 h-5 text-gray-600"}),"System Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(Ot,{label:"Registration Date",value:new Date(w.createdAt).toLocaleDateString()}),e.jsx(Ot,{label:"Last Updated",value:new Date(w.updatedAt||w.createdAt).toLocaleDateString()})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200",children:[e.jsxs("button",{onClick:()=>_e(w),className:"flex-1 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-medium py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2",children:[e.jsx(Vi,{className:"w-5 h-5"}),"Edit Patient"]}),e.jsxs("button",{onClick:()=>g(w),className:"flex-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2",children:[e.jsx(dt,{className:"w-5 h-5"}),w.doctorAppointment?"Edit Appointment":"Add Appointment"]}),e.jsxs("button",{className:"flex-1 bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2",onClick:kn,children:[e.jsx(cs,{className:"w-5 h-5"}),"Export Data"]})]})]})]})})}),C&&w&&e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:e.jsx("div",{className:"bg-white rounded-xl shadow-2xl max-w-md w-full",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900",children:w.doctorAppointment?"Edit Appointment":"Add Appointment"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Patient: ",w.name]})]}),e.jsx("button",{onClick:()=>k(!1),className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(Ft,{className:"w-5 h-5 text-gray-500"})})]}),e.jsx("form",{onSubmit:ue,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Doctor *"}),e.jsxs("select",{name:"doctorId",value:F.doctorId,onChange:De,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",required:!0,children:[e.jsx("option",{value:"",children:"Select Doctor"}),Ps().map(se=>e.jsxs("option",{value:se._id,disabled:!se.isAvailable,className:se.isAvailable?"":"text-gray-400",children:["Dr. ",se.name," - PKR ",se.ConsultationCharges||0,se.isAvailable?se.TotalAppointments?` (Slots: ${se.remainingSlots}/${se.TotalAppointments})`:" (Available)":" (FULL - No Slots Available)"]},se._id))]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Doctors with no available slots are disabled"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Appointment Date *"}),e.jsx("input",{type:"date",name:"appointmentDate",value:F.appointmentDate,onChange:De,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Charges (PKR) *"}),e.jsx("input",{type:"number",name:"charges",value:F.charges,readOnly:!0,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed",placeholder:"Auto-filled from doctor's charges"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Charges are automatically set from selected doctor's consultation fees"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Status *"}),e.jsx("select",{name:"status",value:F.status,onChange:De,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",required:!0,children:Rn.map(se=>e.jsx("option",{value:se,children:se},se))})]}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx("button",{type:"button",onClick:()=>k(!1),className:"flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-colors",children:"Cancel"}),w.doctorAppointment&&e.jsx("button",{type:"button",onClick:we,className:"flex-1 bg-red-100 hover:bg-red-200 text-red-700 font-medium py-3 rounded-lg transition-colors",children:"Remove"}),e.jsx("button",{type:"submit",className:"flex-1 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-medium py-3 rounded-lg transition-all hover:shadow-lg",children:w.doctorAppointment?"Update":"Add Appointment"})]})]})})]})})}),z&&w&&e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:e.jsx("div",{className:"bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-start mb-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Edit Patient"}),e.jsx("p",{className:"text-gray-600",children:"Update patient information"})]}),e.jsx("button",{onClick:()=>Z(!1),className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(Ft,{className:"w-5 h-5 text-gray-500"})})]}),e.jsx("form",{onSubmit:Se,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r  from-indigo-50 to-purple-50 p-4 rounded-xl",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-indigo-600"}),"Personal Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),e.jsx("input",{type:"text",name:"name",value:I.name,onChange:je,className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Age (Years) *"}),e.jsxs("div",{className:"relative",children:[e.jsx(dt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsx("input",{type:"text",name:"age",value:I.age,onChange:je,className:"w-full pl-10 pr-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Weight (kg) *"}),e.jsxs("div",{className:"relative",children:[e.jsx(Ax,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsx("input",{type:"text",name:"weight",value:I.weight,onChange:je,className:"w-full pl-10 pr-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Gender *"}),e.jsxs("select",{name:"gender",value:I.gender,onChange:je,className:"w-full px-4 py-2.5 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",required:!0,children:[e.jsx("option",{value:"",children:"Select Gender"}),Tn.map(se=>e.jsx("option",{value:se,children:se},se))]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Gi,{className:"w-5 h-5 text-blue-600"}),"Address Information *"]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Complete Address *"}),e.jsx("textarea",{name:"address",value:I.address,onChange:je,rows:"3",className:"w-full px-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",required:!0})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Qi,{className:"w-5 h-5 text-green-600"}),"Additional Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),e.jsxs("div",{className:"relative",children:[e.jsx(za,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsx("input",{type:"tel",name:"phone",value:I.phone,onChange:je,className:"w-full pl-10 pr-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Blood Group"}),e.jsxs("div",{className:"relative",children:[e.jsx(Qi,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),e.jsxs("select",{name:"bloodGroup",value:I.bloodGroup,onChange:je,className:"w-full pl-10 pr-4 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",children:[e.jsx("option",{value:"",children:"Select Blood Group"}),Ki.map(se=>e.jsx("option",{value:se,children:se},se))]})]})]})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200",children:[e.jsx("button",{type:"button",onClick:()=>Z(!1),className:"flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-colors border border-gray-300",children:"Cancel"}),e.jsxs("button",{type:"submit",className:"flex-1 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-medium py-3 rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2",children:[e.jsx(yc,{className:"w-5 h-5"}),"Update Patient"]})]})]})})]})})}),L&&$&&e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:e.jsx("div",{className:"bg-white rounded-xl shadow-2xl max-w-md w-full",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"p-2 bg-red-100 rounded-lg",children:e.jsx(ma,{className:"w-6 h-6 text-red-600"})}),e.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Delete Patient"})]}),e.jsxs("p",{className:"text-gray-600 mb-6",children:["Are you sure you want to delete ",e.jsx("span",{className:"font-semibold text-gray-900",children:$.name}),"? This action cannot be undone."]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsx("button",{onClick:()=>{U(!1),J(null)},className:"flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-colors border border-gray-300",children:"Cancel"}),e.jsx("button",{onClick:Xt,className:"flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg transition-all hover:shadow-lg",children:"Delete Patient"})]})]})})})]})}const Ot=({label:d,value:o})=>e.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-100 last:border-0",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:[d,":"]}),e.jsx("span",{className:"text-sm font-medium text-gray-900",children:o})]});function T0(){const{getPatientByUniqueId:d,singlePatient:o}=ft(),{createLabRecord:p}=Cn(),u=xa(),{name:j}=u.state||{},[N,W]=A.useState(""),[B,H]=A.useState(!1),[R,V]=A.useState(!1),[b,E]=A.useState(null),[v,ne]=A.useState(!1),[w,ae]=A.useState([{parameter:"",value:"",normalRange:"",unit:"",flag:"Normal",notes:""}]),[Q,M]=A.useState({testName:"",category:"",overallNotes:"",attachment:null,performedBy:j,performedDate:new Date().toISOString().split("T")[0],parameters:[]}),z=yt(),Z=async()=>{if(!N.trim()){alert("Please enter Patient ID");return}H(!0),V(!1),E(null);try{ft.setState({singlePatient:null});const k=await d(N);if(console.log("Patient data from store:",k),!k||!k._id){alert("Patient not found with this ID");return}V(!0);const F=ft.getState().singlePatient;if(console.log("Patient from store state:",F),!F){alert("Patient data not loaded properly");return}const de=[];F.recommendedTests&&F.recommendedTests.length>0&&F.recommendedTests.forEach(I=>{I.tests&&I.tests.length>0&&I.tests.forEach(x=>{x.status==="Pending"&&!x.xRay&&de.push({...x,doctorId:I.doctorId,doctorName:I.doctorName,specialist:I.specialist,diagnosis:I.diagnosis,recommendedDate:I.recommendedDate})})}),de.length>0?(E(de[0]),M({testName:de[0].testName,category:de[0].category,overallNotes:"",attachment:null,performedBy:j,performedDate:new Date().toISOString().split("T")[0],parameters:[]}),ae([{parameter:de[0].testName,value:"",normalRange:"",unit:"",flag:"Normal",notes:""}])):console.log("No pending tests found for patient")}catch(k){console.error("Error searching patient:",k),alert(`Error: ${k.message||"Failed to search patient"}`)}finally{H(!1)}},L=()=>{console.log("Current store state:",ft.getState()),console.log("Patient found:",R),console.log("Single patient:",o)},U=()=>{ae([...w,{parameter:"",value:"",normalRange:"",unit:"",flag:"Normal",notes:""}])},$=k=>{if(w.length>1){const F=[...w];F.splice(k,1),ae(F)}},J=(k,F,de)=>{const I=[...w];I[k][F]=de,ae(I)},m=async()=>{const k=[];if(w.forEach((F,de)=>{F.parameter?.trim()||k.push(`Parameter ${de+1}: Parameter name is required`),F.value?.trim()||k.push(`Parameter ${de+1}: Value is required`)}),k.length>0){alert(`Please fix the following errors:

${k.join(`
`)}`);return}if(!b){alert("No test selected");return}if(!Q.testName?.trim()&&!b.testName?.trim()){alert("Test name is required");return}if(!Q.category?.trim()&&!b.category?.trim()){alert("Category is required");return}H(!0);try{const F=w.map(x=>({parameter:x.parameter.trim(),value:x.value.trim(),unit:x.unit?.trim()||"",normalRange:x.normalRange?.trim()||"",flag:x.flag||"Normal",notes:x.notes?.trim()||""}));if(!o||!o._id){alert("Patient data not available. Please search patient again.");return}const de={patientId:o._id,patientName:o.name,patientUniqueId:o.uniqueID,age:o.age,gender:o.gender,doctorId:b.doctorId,doctorName:b.doctorName,testName:Q.testName||b.testName,category:Q.category||b.category,parameters:F,overallNotes:Q.overallNotes?.trim()||"",performedBy:j||"Lab Technician",performedDate:Q.performedDate,status:"Completed",priority:b.priority||"Routine",instructions:b.instructions||"",diagnosis:b.diagnosis||""};console.log("Sending lab record data:",de);const I=await p(de);I&&I.success?(alert("Test result saved successfully!"),ne(!1),await d(N),E(null),M({testName:"",category:"",overallNotes:"",attachment:null,performedBy:j,performedDate:new Date().toISOString().split("T")[0],parameters:[]}),ae([{parameter:"",value:"",normalRange:"",unit:"",flag:"Normal",notes:""}])):alert(`Failed to save test result: ${I.error||"Unknown error"}`)}catch(F){console.error("Error saving test result:",F),alert("Error saving test result: "+(F.message||"Unknown error"))}finally{H(!1)}},C=(()=>{const k=[];return o&&o.recommendedTests&&o.recommendedTests.forEach(F=>{F.tests&&F.tests.length>0&&F.tests.filter(de=>!de.xRay).forEach(de=>{k.push({...de,doctorId:F.doctorId,doctorName:F.doctorName,specialist:F.specialist,diagnosis:F.diagnosis,recommendedDate:F.recommendedDate})})}),k})();return e.jsx("div",{className:"min-h-screen bg-gray-50 text-black p-4 md:p-6",children:e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(a0,{className:"w-8 h-8 text-blue-600"}),"Laboratory Management System"]}),e.jsx("p",{className:"text-gray-600 mt-1",children:"Search patient by ID to add test results"})]}),e.jsxs("div",{className:"flex gap-3 mt-4 md:mt-0",children:[e.jsxs("button",{onClick:()=>z("/labTest"),className:"px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2",children:[e.jsx(at,{className:"w-4 h-4"}),"All Lab Records"]}),e.jsxs("button",{onClick:L,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2",children:[e.jsx(Dl,{className:"w-4 h-4"}),"Debug State"]})]})]}),e.jsx("div",{className:"bg-blue-50 p-6 rounded-lg mb-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-end",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Enter Patient ID"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:N,onChange:k=>W(k.target.value.toUpperCase()),onKeyDown:k=>k.key==="Enter"&&Z(),className:"w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-mono",placeholder:"HMS-260113-0003"}),e.jsx(kt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"})]}),e.jsx("div",{className:"text-xs text-gray-500 mt-1",children:"Enter patient ID exactly as shown in their record"})]}),e.jsx("button",{onClick:Z,disabled:B,className:"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:B?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),"Searching..."]}):e.jsxs(e.Fragment,{children:[e.jsx(kt,{className:"w-5 h-5"}),"Search Patient"]})})]})}),R&&o&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-blue-50 p-5 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-blue-600"}),"Patient Information"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(ss,{label:"Name",value:o.name}),e.jsx(ss,{label:"Age",value:o.age}),e.jsx(ss,{label:"Gender",value:o.gender}),e.jsx(ss,{label:"Patient ID",value:o.uniqueID}),e.jsx(ss,{label:"Blood Group",value:o.bloodGroup||"Not specified"})]})]}),e.jsxs("div",{className:"bg-emerald-50 p-5 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(Fe,{className:"w-5 h-5 text-emerald-600"}),"Test Statistics"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(ss,{label:"Total Tests",value:C.length||0}),e.jsx(ss,{label:"Pending Tests",value:C.filter(k=>k.status==="Pending").length||0}),e.jsx(ss,{label:"Completed Tests",value:C.filter(k=>k.status==="Completed").length||0})]})]})]}),C.length>0?e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden mb-8",children:[e.jsx("div",{className:"p-6 border-b border-gray-200 bg-gray-50",children:e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(at,{className:"w-5 h-5 text-blue-600"}),"Patient Tests",e.jsxs("span",{className:"text-sm font-normal text-gray-500",children:["(",C.length," tests)"]})]})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Test Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Category"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Doctor"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Status"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Date"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:C.filter(k=>!k.xRay).map((k,F)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(xx,{className:"w-4 h-4 text-blue-500"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:k.testName}),e.jsx("div",{className:"text-xs text-gray-500 mt-1",children:k.category})]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:k.category})}),e.jsxs("td",{className:"px-6 py-4",children:[e.jsx("div",{className:"text-sm text-gray-900",children:k.doctorName}),e.jsx("div",{className:"text-xs text-gray-500",children:k.specialist})]}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${k.status==="Completed"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:k.status})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:k.recommendedDate?new Date(k.recommendedDate).toLocaleDateString():"N/A"})}),e.jsx("td",{className:"px-6 py-4",children:k.status==="Pending"?e.jsxs("button",{onClick:()=>{E(k),M({testName:k.testName,category:k.category,overallNotes:"",attachment:null,performedBy:j,performedDate:new Date().toISOString().split("T")[0],parameters:[]}),ae([{parameter:k.testName,value:"",normalRange:"",unit:"",flag:"Normal",notes:""}]),ne(!0)},className:"px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 text-sm",children:[e.jsx(Bt,{className:"w-3 h-3"}),"Add Results"]}):e.jsx("div",{className:"flex gap-2",children:(k.result||k.parameters?.length>0)&&e.jsxs("button",{onClick:()=>{k.parameters?.length>0?alert(`Test has ${k.parameters.length} parameters:

${k.parameters.map((de,I)=>`${I+1}. ${de.parameter}: ${de.value} ${de.unit||""}`).join(`
`)}`):alert(`Test Result: ${k.result}`)},className:"px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-1 text-sm",children:[e.jsx(at,{className:"w-3 h-3"}),"View"]})})})]},k._id||F))})]})})]}):e.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center",children:[e.jsx(xx,{className:"w-12 h-12 text-yellow-500 mx-auto mb-3"}),e.jsx("p",{className:"text-gray-700",children:"No tests found for this patient"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"The patient has no lab tests in their record"})]})]}),v&&b&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:e.jsx("div",{className:"bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("h2",{className:"text-xl font-bold text-gray-900 flex items-center gap-2",children:[e.jsx(vc,{className:"w-6 h-6 text-blue-600"}),"Add Test Results"]}),e.jsx("button",{onClick:()=>ne(!1),className:"p-2 hover:bg-gray-100 rounded-full",children:e.jsx(Ma,{className:"w-5 h-5 text-gray-500"})})]}),e.jsxs("div",{className:"mb-6 p-4 bg-blue-50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Test Information"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Test Name:"}),e.jsx("p",{className:"font-medium",children:b.testName})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Category:"}),e.jsx("p",{className:"font-medium",children:b.category})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Doctor:"}),e.jsx("p",{className:"font-medium",children:b.doctorName})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Priority:"}),e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${b.priority==="Urgent"?"bg-red-100 text-red-800":"bg-blue-100 text-blue-800"}`,children:b.priority})]})]}),b.instructions&&e.jsxs("div",{className:"mt-3",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Instructions:"}),e.jsx("p",{className:"text-sm mt-1",children:b.instructions})]})]}),e.jsxs("div",{className:"space-y-4 mb-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:"Test Parameters"}),e.jsxs("button",{onClick:U,type:"button",className:"px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1 text-sm",children:[e.jsx(Bt,{className:"w-3 h-3"}),"Add Parameter"]})]}),w.map((k,F)=>e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4 bg-white",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsxs("h4",{className:"font-medium text-gray-900",children:["Parameter ",F+1]}),w.length>1&&e.jsx("button",{onClick:()=>$(F),type:"button",className:"p-1 text-red-600 hover:text-red-800",children:e.jsx(ua,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-1",children:"Parameter Name *"}),e.jsx("input",{type:"text",value:k.parameter,onChange:de=>J(F,"parameter",de.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",placeholder:"e.g., Blood Glucose",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-1",children:"Value *"}),e.jsx("input",{type:"text",value:k.value,onChange:de=>J(F,"value",de.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",placeholder:"e.g., 120",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-1",children:"Normal Range"}),e.jsx("input",{type:"text",value:k.normalRange,onChange:de=>J(F,"normalRange",de.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",placeholder:"e.g., 70-110"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-1",children:"Unit"}),e.jsx("input",{type:"text",value:k.unit,onChange:de=>J(F,"unit",de.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",placeholder:"e.g., mg/dL"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-1",children:"Flag"}),e.jsxs("select",{value:k.flag,onChange:de=>J(F,"flag",de.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",children:[e.jsx("option",{value:"Normal",children:"Normal"}),e.jsx("option",{value:"High",children:"High"}),e.jsx("option",{value:"Low",children:"Low"}),e.jsx("option",{value:"Critical",children:"Critical"})]})]}),e.jsxs("div",{className:"md:col-span-3",children:[e.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-1",children:"Notes"}),e.jsx("input",{type:"text",value:k.notes,onChange:de=>J(F,"notes",de.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",placeholder:"Additional notes for this parameter"})]})]})]},F))]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Performed Date"}),e.jsx("input",{type:"date",value:Q.performedDate,onChange:k=>M({...Q,performedDate:k.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Performed By"}),e.jsx("input",{type:"text",value:Q.performedBy,readOnly:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Overall Notes"}),e.jsx("textarea",{value:Q.overallNotes,onChange:k=>M({...Q,overallNotes:k.target.value}),rows:"3",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Overall notes for this test..."})]})]}),e.jsxs("div",{className:"flex justify-end gap-3 pt-6 border-t border-gray-200",children:[e.jsx("button",{onClick:()=>ne(!1),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",children:"Cancel"}),e.jsx("button",{onClick:m,disabled:B,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:B?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(bt,{className:"w-4 h-4"}),"Save All Results"]})})]})]})})})]})})})}const ss=({label:d,value:o})=>e.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:[d,":"]}),e.jsx("span",{className:"text-sm font-medium text-gray-900",children:o})]});function R0(){const{getPatientByUniqueId:d,singlePatient:o}=ft(),{createXrayRecord:p}=zs(),u=xa(),{name:j}=u.state||{},[N,W]=A.useState(""),[B,H]=A.useState(!1),[R,V]=A.useState(!1),[b,E]=A.useState(null),[v,ne]=A.useState(!1),[w,ae]=A.useState([{file:null,preview:null,note:""}]),[Q,M]=A.useState({testName:"",category:"",overallNotes:"",performedBy:j,performedDate:new Date().toISOString().split("T")[0],records:[]}),[z,Z]=A.useState(null),L=yt(),U=async()=>{if(!N.trim()){alert("Please enter Patient ID");return}H(!0),V(!1),E(null),ae([{file:null,preview:null,note:""}]),M({testName:"",category:"",overallNotes:"",performedBy:j,performedDate:new Date().toISOString().split("T")[0],records:[]});try{const I=await d(N);if(I){V(!0);const x=[];I.recommendedTests&&I.recommendedTests.length>0&&I.recommendedTests.forEach(h=>{h.tests&&h.tests.length>0&&h.tests.forEach(Y=>{Y.xRay===!0&&Y.status==="Pending"&&x.push({...Y,doctorId:h.doctorId,doctorName:h.doctorName,specialist:h.specialist,diagnosis:h.diagnosis,recommendedDate:h.recommendedDate})})}),x.length>0?(E(x[0]),M({testName:x[0].testName,category:x[0].category,overallNotes:"",performedBy:j,performedDate:new Date().toISOString().split("T")[0],records:[]}),ae([{file:null,preview:null,note:""}])):E(null)}else alert("Patient not found with this ID")}catch(I){alert(`Error searching patient: ${I.message||"Unknown error"}`),V(!1)}finally{H(!1)}},$=()=>{ae([...w,{image:null,note:""}])},J=I=>{if(w.length>1){const x=[...w];x.splice(I,1),ae(x)}},m=(I,x)=>{if(!x)return;if(!["image/jpeg","image/jpg","image/png","image/bmp"].includes(x.type)){alert("Please upload only image files (JPEG, PNG, BMP)");return}if(x.size>10*1024*1024){alert("Image size should be less than 10MB");return}const Y=[...w];Y[I]={...Y[I],file:x,preview:URL.createObjectURL(x),filename:x.name},ae(Y),alert("Image selected successfully")},_=(I,x)=>{const h=[...w];h[I].note=x,ae(h)},C=async()=>{const I=[];if(w.forEach((x,h)=>{x.file||I.push(`Record ${h+1}: X-ray image is required`)}),I.length>0){alert(`Please fix the following errors:

${I.join(`
`)}`);return}H(!0);try{const x=new FormData;w.forEach(S=>{S.file&&x.append("images",S.file)}),x.append("patientId",o._id),x.append("patientName",o.name),x.append("patientUniqueId",o.uniqueID),x.append("age",o.age),x.append("gender",o.gender),x.append("doctorId",b.doctorId),x.append("doctorName",b.doctorName),x.append("testName",Q.testName||b.testName),x.append("category",Q.category||b.category),x.append("diagnosis",b.diagnosis||""),x.append("overallNotes",Q.overallNotes||""),x.append("instructions",b.instructions||""),x.append("performedBy",j||"X-ray Technician"),x.append("performedDate",Q.performedDate),x.append("priority",b.priority||"Routine");const h=w.map(S=>S.note||"");x.append("notes",JSON.stringify(h));const Y=await p(x);Y&&Y.success?(alert("X-ray results saved successfully!"),ne(!1),await d(N),ae([{file:null,preview:null,note:""}]),M({testName:"",category:"",overallNotes:"",performedBy:j,performedDate:new Date().toISOString().split("T")[0]})):alert(`Failed: ${Y.error||"Unknown error"}`)}catch(x){console.error("Error:",x),alert("Error: "+x.message)}finally{H(!1)}},F=(()=>{const I=[];return o&&o.recommendedTests&&o.recommendedTests.forEach(x=>{x.tests&&x.tests.length>0&&x.tests.filter(h=>h.xRay===!0).forEach(h=>{I.push({...h,doctorId:x.doctorId,doctorName:x.doctorName,specialist:x.specialist,diagnosis:x.diagnosis,recommendedDate:x.recommendedDate})})}),I})(),de=I=>{Z(I)};return e.jsx("div",{className:"min-h-screen bg-gray-50 text-black p-4 md:p-6",children:e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-4 md:gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg",children:e.jsx(Ts,{className:"w-8 h-8 text-white"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent",children:"X-ray Management System"}),e.jsx("p",{className:"text-gray-600 text-sm md:text-base mt-1",children:"Advanced imaging and diagnostic management"})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mt-3 md:mt-0 md:ml-6",children:[e.jsx("div",{className:"px-3 py-1.5 bg-blue-50 rounded-full border border-blue-100",children:e.jsxs("span",{className:"text-xs font-medium text-blue-700 flex items-center gap-1",children:[e.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd"})}),"Digital Imaging"]})}),e.jsx("div",{className:"px-3 py-1.5 bg-green-50 rounded-full border border-green-100",children:e.jsxs("span",{className:"text-xs font-medium text-green-700 flex items-center gap-1",children:[e.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Cloud Storage"]})})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mt-4 md:mt-0",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>L("/walkin-registration"),className:"group relative px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"}),e.jsx("div",{className:"p-1.5 bg-white/20 rounded-lg",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"})})}),e.jsx("span",{className:"font-medium text-sm",children:"New Walk-in"})]}),e.jsxs("button",{onClick:()=>L("/walkin-record"),className:"group relative px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"}),e.jsx("div",{className:"p-1.5 bg-white/20 rounded-lg",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("span",{className:"font-medium text-sm",children:"Walk-in Records"})]})]}),e.jsxs("button",{onClick:()=>L("/xrayTest"),className:"group relative px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"}),e.jsx("div",{className:"p-1.5 bg-white/20 rounded-lg",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})}),e.jsx("span",{className:"font-medium text-sm",children:"All Records"})]})]})]}),e.jsx("div",{className:"bg-blue-50 p-6 rounded-lg mb-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-end",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:e.jsxs("h2",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),"Patient Search & Management"]})}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:N,onChange:I=>W(I.target.value.toUpperCase()),onKeyDown:I=>I.key==="Enter"&&U(),className:"w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-mono",placeholder:"HMS-260113-0003"}),e.jsx(kt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"})]})]}),e.jsx("button",{onClick:U,disabled:B,className:"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:B?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),"Searching..."]}):e.jsxs(e.Fragment,{children:[e.jsx(kt,{className:"w-5 h-5"}),"Search Patient"]})})]})}),v&&b&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:e.jsx("div",{className:"bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("h2",{className:"text-xl font-bold text-gray-900 flex items-center gap-2",children:[e.jsx(Tt,{className:"w-6 h-6 text-blue-600"}),"Add X-ray Results"]}),e.jsx("button",{onClick:()=>ne(!1),className:"p-2 hover:bg-gray-100 rounded-full",children:e.jsx(Ma,{className:"w-5 h-5 text-gray-500"})})]}),e.jsxs("div",{className:"mb-6 p-4 bg-blue-50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"X-ray Information"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Test Name:"}),e.jsx("p",{className:"font-medium",children:b.testName})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Category:"}),e.jsx("p",{className:"font-medium",children:b.category})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Doctor:"}),e.jsx("p",{className:"font-medium",children:b.doctorName})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Priority:"}),e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${b.priority==="Urgent"?"bg-red-100 text-red-800":b.priority==="Emergency"?"bg-red-200 text-red-900":"bg-blue-100 text-blue-800"}`,children:b.priority})]})]}),b.instructions&&e.jsxs("div",{className:"mt-3",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Instructions:"}),e.jsx("p",{className:"text-sm mt-1",children:b.instructions})]})]}),e.jsxs("div",{className:"space-y-4 mb-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:"X-ray Images & Notes"}),e.jsxs("button",{onClick:$,type:"button",className:"px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1 text-sm",children:[e.jsx(Bt,{className:"w-3 h-3"}),"Add Another Image"]})]}),w.map((I,x)=>e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4 bg-white",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsxs("h4",{className:"font-medium text-gray-900",children:["X-ray Record ",x+1]}),w.length>1&&e.jsx("button",{onClick:()=>J(x),type:"button",className:"p-1 text-red-600 hover:text-red-800",children:e.jsx(ua,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-2",children:"X-ray Image * (JPEG, PNG, BMP - Max 10MB)"}),e.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors",children:[e.jsx("input",{type:"file",accept:"image/*",onChange:h=>m(x,h.target.files[0]),className:"hidden",id:`xray-file-${x}`}),e.jsxs("label",{htmlFor:`xray-file-${x}`,className:"cursor-pointer flex flex-col items-center justify-center",children:[e.jsx(bc,{className:"w-8 h-8 text-gray-400 mb-2"}),e.jsx("span",{className:"text-sm text-gray-600",children:I.file?"Change Image":"Click to Upload X-ray Image"}),e.jsx("span",{className:"text-xs text-gray-500 mt-1",children:"Max 10MB • JPEG, PNG, BMP"})]})]}),I.preview&&e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"text-xs text-gray-600 mb-1",children:"Preview:"}),e.jsxs("div",{className:"relative w-32 h-32",children:[e.jsx("img",{src:I.preview,alt:`Preview ${x+1}`,className:"w-full h-full object-cover rounded border border-gray-300"}),e.jsx("button",{type:"button",onClick:()=>de(I.preview),className:"absolute top-1 right-1 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70",children:e.jsx(jt,{className:"w-3 h-3"})})]}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[I.filename," • ",(I.file.size/1024/1024).toFixed(2),"MB"]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-1",children:"Notes for this X-ray"}),e.jsx("textarea",{value:I.note,onChange:h=>_(x,h.target.value),rows:"2",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",placeholder:"Add notes about this x-ray image (optional)"})]})]})]},x))]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Performed Date"}),e.jsx("input",{type:"date",value:Q.performedDate,onChange:I=>M({...Q,performedDate:I.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Performed By"}),e.jsx("input",{type:"text",value:Q.performedBy,className:"w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Charges Detail"}),e.jsx("textarea",{value:Q.overallNotes,onChange:I=>M({...Q,overallNotes:I.target.value}),rows:"3",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Charges Detail..."})]})]}),e.jsxs("div",{className:"flex justify-end gap-3 pt-6 border-t border-gray-200",children:[e.jsx("button",{onClick:()=>ne(!1),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",children:"Cancel"}),e.jsx("button",{onClick:C,disabled:B,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:B?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(bt,{className:"w-4 h-4"}),"Save All X-ray Results"]})})]})]})})}),z&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:e.jsxs("div",{className:"bg-white rounded-lg max-w-4xl max-h-[90vh]",children:[e.jsxs("div",{className:"p-4 border-b flex justify-between items-center",children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:"X-ray Image Preview"}),e.jsx("button",{onClick:()=>Z(null),className:"p-1 hover:bg-gray-100 rounded-full",children:e.jsx(Ma,{className:"w-5 h-5 text-gray-500"})})]}),e.jsx("div",{className:"p-4 overflow-auto",children:e.jsx("img",{src:z,alt:"X-ray preview",className:"max-w-full max-h-[70vh] mx-auto"})}),e.jsx("div",{className:"p-4 border-t text-center",children:e.jsx("button",{onClick:()=>Z(null),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300",children:"Close"})})]})}),R&&o&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-blue-50 p-5 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-blue-600"}),"Patient Information"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(ls,{label:"Name",value:o.name}),e.jsx(ls,{label:"Age",value:o.age}),e.jsx(ls,{label:"Gender",value:o.gender}),e.jsx(ls,{label:"Patient ID",value:o.uniqueID}),e.jsx(ls,{label:"Blood Group",value:o.bloodGroup||"Not specified"})]})]}),e.jsxs("div",{className:"bg-emerald-50 p-5 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(Fe,{className:"w-5 h-5 text-emerald-600"}),"X-ray Statistics"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(ls,{label:"Total X-rays",value:F.length||0}),e.jsx(ls,{label:"Pending X-rays",value:F.filter(I=>I.status==="Pending").length||0}),e.jsx(ls,{label:"Completed X-rays",value:F.filter(I=>I.status==="Completed").length||0})]})]})]}),F.length>0&&e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden mb-8",children:[e.jsx("div",{className:"p-6 border-b border-gray-200 bg-gray-50",children:e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(Ts,{className:"w-5 h-5 text-blue-600"}),"Patient X-rays",e.jsxs("span",{className:"text-sm font-normal text-gray-500",children:["(",F.length," x-rays)"]})]})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Test Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Category"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Doctor"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Status"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Date"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:F.map((I,x)=>(I.records,e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ts,{className:"w-4 h-4 text-blue-500"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:I.testName}),e.jsx("div",{className:"text-xs text-gray-500 mt-1",children:I.category})]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:I.category})}),e.jsxs("td",{className:"px-6 py-4",children:[e.jsx("div",{className:"text-sm text-gray-900",children:I.doctorName}),e.jsx("div",{className:"text-xs text-gray-500",children:I.specialist})]}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${I.status==="Completed"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:I.status})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:I.recommendedDate?new Date(I.recommendedDate).toLocaleDateString():"N/A"})}),e.jsx("td",{className:"px-6 py-4",children:I.status==="Pending"?e.jsxs("button",{onClick:()=>{E(I),M({testName:I.testName,category:I.category,overallNotes:"",performedBy:j,performedDate:new Date().toISOString().split("T")[0],records:[]}),ae([{image:null,note:""}]),ne(!0)},className:"px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 text-sm",children:[e.jsx(Bt,{className:"w-3 h-3"}),"Add X-ray Images"]}):e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{className:"px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-1 text-sm",children:"✔️"})})})]},I._id||x)))})]})})]})]})]})})})}const ls=({label:d,value:o})=>e.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:[d,":"]}),e.jsx("span",{className:"text-sm font-medium text-gray-900",children:o})]});function k0(){const{getPatientByUniqueId:d,singlePatient:o,updatePatient:p}=ft(),{addPresception:u}=jc(),j=xa(),{name:N}=j.state||{},[W,B]=A.useState(""),[H,R]=A.useState(!1),[V,b]=A.useState(!1),[E,v]=A.useState(null),[ne,w]=A.useState([]),[ae,Q]=A.useState(0),[M,z]=A.useState(!1),[Z,L]=A.useState(!1),[U,$]=A.useState({patientName:"",patientPhone:"",medicines:[{name:"",quantity:"",price:""}],totalCharges:0}),J=yt(),m=async()=>{if(!W.trim()){alert("Please enter Patient ID");return}R(!0),b(!1);try{const S=await d(W);if(S){b(!0);const f=S.prescriptions?.filter(G=>G.status==="Pending"||G.status==="pending");if(f.length>0){v(f[0]);const G=f[0].medicines.map(K=>({...K,pharmacyCharges:"",dispensed:!1}));w(G),_(G)}}else b(!1),alert("Patient not found with this ID")}catch(S){console.error("Error searching patient:",S),alert("Error searching patient"),b(!1)}finally{R(!1)}},_=S=>{const f=S.reduce((G,K)=>{const re=parseFloat(K.pharmacyCharges)||0,me=parseInt(K.quantity)||1,oe=re*me;return G+oe},0);Q(f)},C=(S,f)=>{const G=[...ne];G[S].pharmacyCharges=f,w(G),_(G)},k=S=>{const f=[...ne];f[S].dispensed=!f[S].dispensed,w(f)},F=()=>{$({...U,medicines:[...U.medicines,{name:"",quantity:"",price:""}]})},de=S=>{const f=U.medicines.filter((G,K)=>K!==S);$({...U,medicines:f})},I=(S,f,G)=>{const K=[...U.medicines];K[S][f]=G;const re=K.reduce((me,oe)=>{const fe=parseFloat(oe.price)||0,te=parseInt(oe.quantity)||1;return me+fe*te},0);$({...U,medicines:K,totalCharges:re})},x=async()=>{if(U.medicines.length===0){alert("Please add at least one medicine");return}if(U.medicines.filter(f=>!f.name.trim()||!f.quantity||!f.price).length>0){alert("Please fill all medicine details");return}try{const f={patientName:U.patientName,patientPhone:U.patientPhone||"N/A",charges:U.totalCharges,PharmacyPerson:N,medicines:U.medicines.map(K=>({medicineName:K.name,quantity:parseInt(K.quantity)||1,pharmacyCharges:parseFloat(K.price)||0,dispensed:!0,dispensedDate:new Date().toISOString()}))},G=await u(f);G&&G.success?($({patientName:"",patientPhone:"",medicines:[{name:"",quantity:"",price:""}],totalCharges:0}),L(!1),alert("Record added successfully!")):alert("Failed to save record. Please try again.")}catch(f){console.error("Error saving record:",f),alert("Error saving record. Please try again.")}},h=async()=>{if(!(!E||!ne.every(f=>f.dispensed)&&!window.confirm("Some medicines are not marked as dispensed. Continue anyway?"))){R(!0);try{const f=ne.reduce((me,oe)=>{const fe=parseFloat(oe.pharmacyCharges)||0,te=parseInt(oe.quantity)||1,g=fe*te;return me+g},0),K={prescriptions:o.prescriptions.map(me=>me._id===E._id?{...me,status:"Completed",completedDate:new Date().toISOString(),charges:f,PharmacyPerson:N,medicines:me.medicines.map((oe,fe)=>({...oe,dispensed:ne[fe]?.dispensed||!1,dispensedDate:ne[fe]?.dispensed?new Date().toISOString():null,pharmacyCharges:parseFloat(ne[fe]?.pharmacyCharges)||0}))}:me)};console.log("Updating prescription:",{prescriptionId:E._id,prescriptionCharges:f,medicineCount:E.medicines.length}),await p(o._id,K)?(alert(`Prescription completed successfully! Total charges: PKR ${f.toFixed(2)}`),await d(W),v(null),w([]),Q(0)):alert("Failed to complete prescription")}catch(f){console.error("Error completing prescription:",f),alert(`Error completing prescription: ${f.message}`)}finally{R(!1)}}},Y=()=>{z(!0);const S=window.open("","_blank"),f=ne.reduce((G,K)=>{const re=parseFloat(K.pharmacyCharges)||0,me=parseInt(K.quantity)||1;return G+re*me},0);S.document.write(`
      <html>
        <head>
          <title>Pharmacy Bill - ${o?.name}</title>
          <style>
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              padding: 20px; 
              line-height: 1.6;
              color: #333;
              background: #f8f9fa;
            }
            .bill-container {
              max-width: 800px;
              margin: 0 auto;
            }
            .header { 
              text-align: center; 
              padding: 30px 40px;
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
              color: white;
              border-radius: 12px;
              margin-bottom: 30px;
            }
            .header h2 { 
              color: white; 
              margin: 0 0 10px 0;
              font-size: 28px;
              font-weight: 700;
            }
            .patient-info { 
              margin-bottom: 30px; 
              background: white; 
              padding: 25px; 
              border-radius: 12px; 
              border: 1px solid #e2e8f0;
              box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            }
            .medicine-table { 
              width: 100%; 
              border-collapse: separate;
              border-spacing: 0;
              margin: 20px 0;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.05);
              background: white;
            }
            .medicine-table thead {
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
            }
            .medicine-table th, 
            .medicine-table td { 
              padding: 14px 16px; 
              text-align: left; 
              border-bottom: 1px solid #e2e8f0;
            }
            .medicine-table th {
              color: white;
              font-weight: 600;
              font-size: 13px;
            }
            .total-section {
              margin-top: 30px;
              padding: 20px;
              background: #f0f9ff;
              border-radius: 12px;
              border: 1px solid #bae6fd;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              color: #64748b;
              font-size: 14px;
              border-top: 2px solid #e2e8f0;
              padding-top: 20px;
            }
            .status-badge {
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
            }
            .status-completed { background: #d1fae5; color: #065f46; }
            .status-pending { background: #fef3c7; color: #92400e; }
            @media print {
              body { padding: 15px; background: white; }
              .no-print { display: none; }
              .header { background: #059669 !important; -webkit-print-color-adjust: exact; }
              .medicine-table thead { background: #059669 !important; -webkit-print-color-adjust: exact; }
            }
          </style>
        </head>
        <body>
          <div class="bill-container">
            <div class="header">
              <h2>Pharmacy Medicine Dispensing Bill</h2>
              <div style="font-size: 15px; opacity: 0.9;">
                Date: ${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
              </div>
            </div>
            
            <div class="patient-info">
              <div style="color: #059669; border-bottom: 2px solid #a7f3d0; padding-bottom: 10px; margin-bottom: 15px; font-size: 18px; font-weight: 600;">
                Patient Information
              </div>
              <p><strong>Patient:</strong> <span style="color: #1e293b; font-weight: 600;">${o?.name}</span></p>
              <p><strong>Patient ID:</strong> <span style="background: #e0e7ff; color: #059669; padding: 4px 10px; border-radius: 6px; font-family: monospace; font-weight: 600;">${o?.uniqueID}</span></p>
              <p><strong>Age:</strong> ${o?.age} | <strong>Gender:</strong> ${o?.gender}</p>
            </div>
            
            ${E?.diagnosis?`
              <div style="background: #fef3c7; padding: 15px; border-radius: 12px; margin: 20px 0; border: 1px solid #fbbf24;">
                <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">Diagnosis</h3>
                <p style="color: #78350f;">${E.diagnosis}</p>
              </div>
            `:""}
            
            <table class="medicine-table">
              <thead>
                <tr>
                  <th>Medicine</th>
                  <th>Dosage</th>
                  <th>Quantity</th>
                  <th>Frequency</th>
                  <th>Price per Unit</th>
                  <th>Total (PKR)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${ne.map(G=>{const K=parseFloat(G.pharmacyCharges)||0,re=parseInt(G.quantity)||1,me=K*re;return`
                  <tr>
                    <td><strong>${G.medicineName}</strong></td>
                    <td>${G.dosage||"-"}</td>
                    <td>${G.quantity}</td>
                    <td>${G.frequency}</td>
                    <td><strong>PKR ${K.toFixed(2)}</strong></td>
                    <td><strong>PKR ${me.toFixed(2)}</strong></td>
                    <td>
                      <span class="status-badge ${G.dispensed?"status-completed":"status-pending"}">
                        ${G.dispensed?"Dispensed":"Pending"}
                      </span>
                    </td>
                  </tr>
                `}).join("")}
              </tbody>
            </table>
            
            <div class="total-section">
              <div style="text-align: right;">
                <div style="font-size: 18px; margin-bottom: 10px;">
                  <span style="color: #64748b;">Total Charges:</span>
                  <span style="font-size: 24px; font-weight: 700; color: #059669; margin-left: 15px;">
                  PKR ${f.toFixed(2)}
                </span>
                </div>
                <div style="color: #64748b; font-size: 14px;">
                  PharmacyPerson: ${N}
                </div>
                </div>
                <div style="color: #64748b; font-size: 14px;">
                  ${E?.prescribedDate?`Prescribed on: ${new Date(E.prescribedDate).toLocaleDateString()}`:""}
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p>Thank you for choosing our pharmacy services</p>
              <p>Hospital Management System © ${new Date().getFullYear()}</p>
            </div>
          </div>
          
          <div class="no-print" style="text-align: center; margin-top: 40px;">
            <button onclick="window.print()" style="
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
              color: white; 
              border: none; 
              padding: 14px 28px; 
              border-radius: 8px; 
              cursor: pointer; 
              font-size: 16px;
              font-weight: 600;
            ">
              🖨️ Print Bill
            </button>
          </div>
          
          <script>
            setTimeout(() => {
              window.print();
            }, 1000);
          <\/script>
        </body>
      </html>
    `),S.document.close(),z(!1)};return e.jsx("div",{className:"min-h-screen bg-gray-50 text-black p-4 md:p-6",children:e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(Rt,{className:"w-8 h-8 text-emerald-600"}),"Pharmacy Dispensing System"]}),e.jsx("p",{className:"text-gray-600 mt-1",children:"Search patient by ID to dispense medicines"})]}),e.jsxs("div",{className:"flex gap-3 mt-4 md:mt-0",children:[e.jsxs("button",{onClick:()=>L(!0),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2",children:[e.jsx(Bt,{className:"w-4 h-4"}),"Add Record (Walk-in)"]}),e.jsxs("button",{onClick:()=>J("/WalkInRecords"),className:"px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2",children:[e.jsx(gx,{className:"w-4 h-4"}),"Walk In Records"]}),e.jsxs("button",{onClick:()=>J("/pharmacyRecords"),className:"px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2",children:[e.jsx(gx,{className:"w-4 h-4"}),"Records"]})]})]}),e.jsx("div",{className:"bg-emerald-50 p-6 rounded-lg mb-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-end",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Enter Patient ID"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:W,onChange:S=>B(S.target.value.toUpperCase()),onKeyDown:S=>S.key==="Enter"&&m(),className:"w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg font-mono",placeholder:"HMS-260113-0002"}),e.jsx(kt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"})]})]}),e.jsx("button",{onClick:m,disabled:H,className:"px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:H?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),"Searching..."]}):e.jsxs(e.Fragment,{children:[e.jsx(kt,{className:"w-5 h-5"}),"Search Patient"]})})]})}),Z&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:e.jsx("div",{className:"bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("h2",{className:"text-xl font-bold text-gray-900 flex items-center gap-2",children:[e.jsx(Bt,{className:"w-6 h-6 text-blue-600"}),"Add Walk-in Patient Record"]}),e.jsx("button",{onClick:()=>L(!1),className:"p-2 hover:bg-gray-100 rounded-full",children:e.jsx(Ma,{className:"w-5 h-5 text-gray-500"})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Patient Name *"}),e.jsx("input",{type:"text",value:U.patientName,onChange:S=>$({...U,patientName:S.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter patient name"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Patient Phone (Optional)"}),e.jsx("input",{type:"text",value:U.patientPhone,onChange:S=>$({...U,patientPhone:S.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter phone number"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Medicines *"}),e.jsxs("button",{type:"button",onClick:F,className:"px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1 text-sm",children:[e.jsx(Bt,{className:"w-4 h-4"}),"Add Medicine"]})]}),U.medicines.map((S,f)=>e.jsxs("div",{className:"grid grid-cols-12 gap-4 mb-4 items-end",children:[e.jsxs("div",{className:"col-span-5",children:[e.jsx("label",{className:"block text-xs text-gray-600 mb-1",children:"Medicine Name *"}),e.jsx("input",{type:"text",value:S.name,onChange:G=>I(f,"name",G.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",placeholder:"Medicine name",required:!0})]}),e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{className:"block text-xs text-gray-600 mb-1",children:"Quantity *"}),e.jsx("input",{type:"number",value:S.quantity,onChange:G=>I(f,"quantity",G.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",placeholder:"Qty",min:"1",required:!0})]}),e.jsxs("div",{className:"col-span-3",children:[e.jsx("label",{className:"block text-xs text-gray-600 mb-1",children:"Price (PKR) *"}),e.jsx("input",{type:"number",value:S.price,onChange:G=>I(f,"price",G.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",placeholder:"Price",min:"0",required:!0})]}),e.jsx("div",{className:"col-span-1",children:U.medicines.length>1&&e.jsx("button",{type:"button",onClick:()=>de(f),className:"w-full p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors",children:e.jsx(Ma,{className:"w-4 h-4 mx-auto"})})})]},f)),e.jsx("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-lg font-semibold text-gray-900",children:"Total Charges:"}),e.jsxs("span",{className:"text-2xl font-bold text-green-700",children:["PKR ",U.totalCharges.toFixed(2)]})]})})]}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-gray-200",children:[e.jsx("button",{onClick:()=>L(!1),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",children:"Cancel"}),e.jsxs("button",{onClick:x,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2",children:[e.jsx(bt,{className:"w-4 h-4"}),"Save Record"]})]})]})})}),V&&o&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-emerald-50 p-5 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-emerald-600"}),"Patient Information"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(ka,{label:"Name",value:o.name}),e.jsx(ka,{label:"Age",value:o.age}),e.jsx(ka,{label:"Gender",value:o.gender}),e.jsx(ka,{label:"Patient ID",value:o.uniqueID}),e.jsx(ka,{label:"Blood Group",value:o.bloodGroup||"Not specified"})]})]}),e.jsxs("div",{className:"bg-blue-50 p-5 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(at,{className:"w-5 h-5 text-blue-600"}),"Prescription Details"]}),E?e.jsxs("div",{className:"space-y-2",children:[e.jsx(ka,{label:"Doctor",value:E.doctorName}),e.jsx(ka,{label:"Specialist",value:E.specialist}),e.jsx(ka,{label:"Prescribed Date",value:new Date(E.prescribedDate).toLocaleDateString()}),e.jsx(ka,{label:"Status",value:e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${E.status==="Completed"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:E.status})})]}):e.jsx("p",{className:"text-gray-500",children:"No pending prescriptions found"})]})]}),E?.diagnosis&&e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-5 mb-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(at,{className:"w-5 h-5 text-blue-600"}),"Diagnosis"]}),e.jsx("p",{className:"text-gray-700",children:E.diagnosis})]}),E&&ne.length>0&&e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden mb-8",children:[e.jsx("div",{className:"p-6 border-b border-gray-200 bg-gray-50",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(Rt,{className:"w-5 h-5 text-emerald-600"}),"Prescribed Medicines",e.jsxs("span",{className:"text-sm font-normal text-gray-500",children:["(",ne.length," medicines)"]})]}),e.jsxs("div",{className:"text-lg font-bold text-emerald-700",children:["Total: PKR ",ae.toFixed(2)]})]})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Medicine"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Dosage"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Qty"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Frequency"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Timing"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Duration"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Price per Unit (PKR)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Total (PKR)"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",children:"Dispensed"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:ne.map((S,f)=>{const G=parseFloat(S.pharmacyCharges)||0,K=parseInt(S.quantity)||1,re=G*K;return e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm font-medium text-gray-900",children:S.medicineName})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:S.dosage||"-"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:S.quantity})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:S.frequency})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:S.timing})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"text-sm text-gray-900",children:[S.duration," days"]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{type:"number",value:S.pharmacyCharges||"",onChange:me=>C(f,me.target.value),className:"w-24 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",min:"0",placeholder:"0"})})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"text-sm font-medium text-emerald-700",children:["PKR ",re.toFixed(2)]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("button",{onClick:()=>k(f),className:`p-2 rounded-full ${S.dispensed?"bg-emerald-100 text-emerald-600":"bg-gray-100 text-gray-400"} hover:opacity-80`,children:S.dispensed?e.jsx(bt,{className:"w-5 h-5"}):e.jsx(Ma,{className:"w-5 h-5"})})})]},S._id||f)})})]})})]}),E&&e.jsxs("div",{className:"flex flex-wrap gap-4 justify-end mt-8",children:[e.jsxs("button",{onClick:Y,disabled:M||ne.length===0,className:"px-5 py-2.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(Et,{className:"w-4 h-4"}),M?"Printing...":"Print Bill"]}),e.jsx("button",{onClick:h,disabled:H||ne.length===0,className:"px-5 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:H?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white"}),"Processing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(bt,{className:"w-4 h-4"}),"Complete Prescription"]})})]})]})]})})})}const ka=({label:d,value:o})=>e.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:[d,":"]}),e.jsx("span",{className:"text-sm font-medium text-gray-900",children:o})]});function E0(){const{user:d}=gt(),{getAllLabRecord:o,labRecords:p}=Cn(),{getAllPatients:u,patients:j}=ft(),{getAllXrayRecord:N,xrayRecords:W}=zs(),[B,H]=A.useState(!0),[R,V]=A.useState(null),[b,E]=A.useState(null),[v,ne]=A.useState(null),[w,ae]=A.useState("overview"),[Q,M]=A.useState(null),z=async()=>{H(!0);try{await Promise.all([o(),u(),N()])}catch($){console.error("Error fetching data:",$),xe.error("Failed to load patient data")}finally{H(!1)}};A.useEffect(()=>{z()},[]),A.useEffect(()=>{if(d?.uniqueId&&j.length>0){const $=j.find(J=>J.uniqueID===d.uniqueId);V($||null)}if(d?.uniqueId&&p?.records){const $=p.records.find(J=>J.patientUniqueId===d.uniqueId);E($||null)}if(d?.uniqueId&&Array.isArray(W)){const $=W.find(J=>J.patientUniqueId===d.uniqueId);ne($||null)}},[d,j,p,W]);const Z=$=>$?new Date($).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"N/A",L=$=>$?new Date($).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A",U=()=>{const $=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Medical Report - ${R?.name||"Patient"}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 30px; }
          .section { margin-bottom: 30px; }
          .section-title { background: #f0f0f0; padding: 10px; font-weight: bold; margin-bottom: 10px; }
          .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .test-result { border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; }
          .status-completed { color: green; }
          .status-pending { color: orange; }
          .xray-images img { max-width: 200px; margin: 5px; }
          @media print { body { padding: 10px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>MEDICAL REPORT</h1>
          <h2>${R?.name||""} - ${R?.uniqueID||""}</h2>
          <p>Generated: ${new Date().toLocaleDateString()}</p>
        </div>
        
        ${R?`
          <div class="section">
            <div class="section-title">Patient Information</div>
            <div class="info-grid">
              <div><strong>Name:</strong> ${R.name}</div>
              <div><strong>Patient ID:</strong> ${R.uniqueID}</div>
              <div><strong>Age:</strong> ${R.age} years</div>
              <div><strong>Gender:</strong> ${R.gender}</div>
              <div><strong>Blood Group:</strong> ${R.bloodGroup}</div>
              <div><strong>Weight:</strong> ${R.weight} kg</div>
              <div><strong>Phone:</strong> ${R.phone}</div>
              <div><strong>Address:</strong> ${R.address}</div>
            </div>
          </div>
        `:""}
        
        ${R?.prescriptions?.length>0?`
          <div class="section">
            <div class="section-title">Prescriptions (${R.prescriptions.length})</div>
            ${R.prescriptions.map(m=>`
              <div class="test-result">
                <p><strong>Date:</strong> ${Z(m.prescribedDate)}</p>
                <p><strong>Doctor:</strong> ${m.doctorName}</p>
                <p><strong>Diagnosis:</strong> ${m.diagnosis}</p>
                <p><strong>Medicines:</strong> ${m.medicines?.length||0}</p>
                <p><strong>Status:</strong> <span class="status-${m.status.toLowerCase()}">${m.status}</span></p>
              </div>
            `).join("")}
          </div>
        `:""}
        
        ${b?`
          <div class="section">
            <div class="section-title">Lab Test Results</div>
            <div class="test-result">
              <p><strong>Test Name:</strong> ${b.testName}</p>
              <p><strong>Category:</strong> ${b.category}</p>
              <p><strong>Doctor:</strong> ${b.doctorName}</p>
              <p><strong>Diagnosis:</strong> ${b.diagnosis}</p>
              <p><strong>Charges Detail:</strong> ${b.overallNotes}</p>
              <p><strong>Status:</strong> <span class="status-${b.status.toLowerCase()}">${b.status}</span></p>
              ${b.parameters?.length>0?`
                <h4>Parameters:</h4>
                ${b.parameters.map(m=>`
                  <div style="margin-left: 20px;">
                    <p><strong>${m.parameter}:</strong> ${m.value} ${m.unit}</p>
                    <p><small>Normal Range: ${m.normalRange} | Flag: ${m.flag}</small></p>
                    ${m.notes?`<p><small>Notes: ${m.notes}</small></p>`:""}
                  </div>
                `).join("")}
              `:""}
            </div>
          </div>
        `:""}
        
        ${v?`
          <div class="section">
            <div class="section-title">X-ray Report</div>
            <div class="test-result">
              <p><strong>Test Name:</strong> ${v.testName}</p>
              <p><strong>Category:</strong> ${v.category}</p>
              <p><strong>Doctor:</strong> ${v.doctorName}</p>
              <p><strong>Diagnosis:</strong> ${v.diagnosis}</p>
              <p><strong>Overall Notes:</strong> ${v.overallNotes}</p>
              <p><strong>Status:</strong> <span class="status-${v.status.toLowerCase()}">${v.status}</span></p>
              <p><strong>Images:</strong> ${v.records?.length||0}</p>
            </div>
          </div>
        `:""}
        
        <div class="footer" style="margin-top: 50px; border-top: 1px solid #000; padding-top: 20px;">
          <p><strong>Hospital Management System</strong></p>
          <p>This is a computer generated report</p>
        </div>
      </body>
      </html>
    `,J=window.open("","_blank","width=800,height=900");J?(J.document.write($),J.document.close(),J.onload=()=>J.focus()):xe.error("Please allow popups to print report")};return B?e.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Loading patient data..."})]})}):R?e.jsxs("div",{className:"min-h-screen text-black bg-gray-50",children:[Q&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4",children:e.jsxs("div",{className:"bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden",children:[e.jsxs("div",{className:"p-4 border-b flex justify-between items-center",children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:"X-ray Image Preview"}),e.jsx("button",{onClick:()=>M(null),className:"p-2 hover:bg-gray-100 rounded-full",children:e.jsx(Ma,{className:"w-5 h-5 text-gray-500"})})]}),e.jsx("div",{className:"p-4 flex items-center justify-center bg-black",children:e.jsx("img",{src:Q,alt:"X-ray Preview",className:"max-w-full max-h-[70vh] object-contain"})}),e.jsxs("div",{className:"p-4 border-t text-center",children:[e.jsx("button",{onClick:()=>window.open(Q,"_blank"),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-2",children:"Open Full Size"}),e.jsx("button",{onClick:()=>M(null),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300",children:"Close"})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto p-4 md:p-6",children:[e.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 mb-6 text-white",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-4 mb-4 md:mb-0",children:[e.jsx("div",{className:"bg-white/20 p-3 rounded-full",children:e.jsx(qe,{className:"w-8 h-8"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold",children:R.name}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-2",children:[e.jsxs("span",{className:"bg-white/20 px-3 py-1 rounded-full text-sm",children:["ID: ",R.uniqueID]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(dt,{className:"w-4 h-4"}),"Age: ",R.age," years"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Fe,{className:"w-4 h-4"}),R.gender]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Zi,{className:"w-4 h-4"}),"Blood: ",R.bloodGroup]})]})]})]}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsxs("button",{onClick:U,className:"px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2",children:[e.jsx(Et,{className:"w-4 h-4"}),"Print Report"]})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm mb-6",children:e.jsx("div",{className:"border-b",children:e.jsx("nav",{className:"flex overflow-x-auto",children:["overview","prescriptions","tests","xrays","appointments"].map($=>e.jsx("button",{onClick:()=>ae($),className:`px-6 py-4 font-medium whitespace-nowrap transition-colors ${w===$?"text-blue-600 border-b-2 border-blue-600":"text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`,children:$.charAt(0).toUpperCase()+$.slice(1)},$))})})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[w==="overview"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Prescriptions"}),e.jsx("p",{className:"text-2xl font-bold mt-1",children:R.prescriptions?.length||0})]}),e.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:e.jsx(Rt,{className:"w-6 h-6 text-blue-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Tests Completed"}),e.jsx("p",{className:"text-2xl font-bold mt-1",children:(b?1:0)+(v?1:0)})]}),e.jsx("div",{className:"p-2 bg-green-100 rounded-lg",children:e.jsx(Fe,{className:"w-6 h-6 text-green-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Appointments"}),e.jsx("p",{className:"text-2xl font-bold mt-1",children:R.doctorAppointment?1:0})]}),e.jsx("div",{className:"p-2 bg-purple-100 rounded-lg",children:e.jsx(dt,{className:"w-6 h-6 text-purple-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"X-ray Images"}),e.jsx("p",{className:"text-2xl font-bold mt-1",children:v?.records?.length||0})]}),e.jsx("div",{className:"p-2 bg-orange-100 rounded-lg",children:e.jsx(Tt,{className:"w-6 h-6 text-orange-600"})})]})})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5"}),"Personal Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Full Name"}),e.jsx("p",{className:"font-medium",children:R.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Patient ID"}),e.jsx("p",{className:"font-mono font-medium",children:R.uniqueID})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Age"}),e.jsxs("p",{className:"font-medium",children:[R.age," years"]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Gender"}),e.jsx("p",{className:"font-medium",children:R.gender})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Blood Group"}),e.jsx("p",{className:"font-medium",children:R.bloodGroup})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Weight"}),e.jsxs("p",{className:"font-medium",children:[R.weight," kg"]})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Phone Number"}),e.jsx("p",{className:"font-medium",children:R.phone})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Address"}),e.jsx("p",{className:"font-medium",children:R.address})]})]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(os,{className:"w-5 h-5"}),"Recent Activity"]}),e.jsxs("div",{className:"space-y-4",children:[R.prescriptions?.map(($,J)=>e.jsxs("div",{className:"border-l-4 border-green-500 pl-4 py-2",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium",children:["Prescription #",J+1]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[$.diagnosis," • ",$.doctorName]})]}),e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full",children:$.status})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:L($.prescribedDate)})]},J)),b&&e.jsxs("div",{className:"border-l-4 border-blue-500 pl-4 py-2",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium",children:["Lab Test: ",b.testName]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[b.category," • ",b.doctorName]})]}),e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full",children:b.status})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:L(b.createdAt)})]}),v&&e.jsxs("div",{className:"border-l-4 border-orange-500 pl-4 py-2",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium",children:["X-ray: ",v.testName]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[v.category," • ",v.doctorName]})]}),e.jsx("span",{className:"px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full",children:v.status})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:L(v.createdAt)})]})]})]})]}),w==="prescriptions"&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-6 flex items-center gap-2",children:[e.jsx(Rt,{className:"w-5 h-5"}),"Prescriptions History"]}),!R.prescriptions||R.prescriptions.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:e.jsx(Rt,{className:"w-8 h-8 text-gray-400"})}),e.jsx("p",{className:"text-gray-600",children:"No prescriptions found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"You don't have any prescriptions yet"})]}):e.jsx("div",{className:"space-y-6",children:R.prescriptions.map(($,J)=>e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-lg text-gray-900",children:["Prescription #",J+1]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-2",children:[e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:$.status}),e.jsx("span",{className:"text-sm text-gray-600",children:Z($.prescribedDate)})]})]}),e.jsx("div",{className:"mt-2 md:mt-0",children:e.jsxs("span",{className:"px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full",children:[$.medicines?.length||0," Medicines"]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Doctor"}),e.jsx("p",{className:"font-medium",children:$.doctorName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Specialist"}),e.jsx("p",{className:"font-medium",children:$.specialist})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Diagnosis"}),e.jsx("p",{className:"font-medium",children:$.diagnosis})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Charges"}),e.jsx("p",{className:"font-medium",children:$.charges})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Pharmacy Person"}),e.jsx("p",{className:"font-medium",children:$.PharmacyPerson})]})]}),$.medicines&&$.medicines.length>0&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-900 mb-3",children:"Medicines"}),e.jsx("div",{className:"space-y-3",children:$.medicines.map((m,_)=>e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:m.medicineName}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Dosage: ",m.dosage," • Frequency: ",m.frequency]})]}),e.jsxs("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full",children:["Quantity: ",m.quantity]})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Duration:"}),e.jsx("span",{className:"ml-2 font-medium",children:m.duration})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Timing:"}),e.jsx("span",{className:"ml-2 font-medium",children:m.timing})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("span",{className:"text-gray-600",children:"Notes:"}),e.jsx("span",{className:"ml-2 font-medium",children:m.notes||"None"})]})]})]},_))})]})]},J))})]}),w==="tests"&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-6 flex items-center gap-2",children:[e.jsx(Fe,{className:"w-5 h-5"}),"Lab Test Results"]}),b?e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-xl text-gray-900",children:b.testName}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-2",children:[e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:b.category}),e.jsx("span",{className:`px-3 py-1 text-sm rounded-full ${b.priority==="Emergency"?"bg-red-100 text-red-800":b.priority==="Urgent"?"bg-orange-100 text-orange-800":"bg-green-100 text-green-800"}`,children:b.priority}),e.jsx("span",{className:"px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full",children:b.status})]})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:Z(b.performedDate)})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Doctor"}),e.jsx("p",{className:"font-medium",children:b.doctorName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Performed By"}),e.jsx("p",{className:"font-medium",children:b.performedBy})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Diagnosis"}),e.jsx("p",{className:"font-medium",children:b.diagnosis})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Charges Details"}),e.jsx("p",{className:"font-medium",children:b.overallNotes})]})]}),b.parameters&&b.parameters.length>0&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-900 mb-4",children:"Test Parameters"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Parameter"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Value"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Normal Range"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Flag"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Notes"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:b.parameters.map(($,J)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3 text-sm font-medium text-gray-900",children:$.parameter}),e.jsxs("td",{className:"px-4 py-3 text-sm",children:[e.jsx("span",{className:"font-medium",children:$.value}),e.jsx("span",{className:"text-gray-600 ml-1",children:$.unit})]}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600",children:$.normalRange}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${$.flag==="High"?"bg-red-100 text-red-800":$.flag==="Low"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:$.flag})}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600",children:$.notes||"-"})]},J))})]})})]})]}):e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:e.jsx(Fe,{className:"w-8 h-8 text-gray-400"})}),e.jsx("p",{className:"text-gray-600",children:"No lab test results found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"You don't have any lab test records yet"})]})]}),w==="xrays"&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-6 flex items-center gap-2",children:[e.jsx(Tt,{className:"w-5 h-5"}),"X-ray Reports & Images"]}),v?e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-xl text-gray-900",children:v.testName}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-2",children:[e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:v.category}),e.jsx("span",{className:`px-3 py-1 text-sm rounded-full ${v.priority==="Emergency"?"bg-red-100 text-red-800":v.priority==="Urgent"?"bg-orange-100 text-orange-800":"bg-green-100 text-green-800"}`,children:v.priority}),e.jsx("span",{className:"px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full",children:v.status})]})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:Z(v.performedDate)})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Doctor"}),e.jsx("p",{className:"font-medium",children:v.doctorName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Performed By"}),e.jsx("p",{className:"font-medium",children:v.performedBy})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Diagnosis"}),e.jsx("p",{className:"font-medium",children:v.diagnosis})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Charges Details"}),e.jsx("p",{className:"font-medium",children:v.overallNotes})]})]}),v.records&&v.records.length>0&&e.jsxs("div",{children:[e.jsxs("h5",{className:"font-medium text-gray-900 mb-4",children:["X-ray Images (",v.records.length,")"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:v.records.map(($,J)=>e.jsxs("div",{className:"border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"aspect-square bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>M($.image),children:e.jsx("img",{src:$.image,alt:`X-ray ${J+1}`,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium text-sm",children:["Image ",J+1]}),e.jsx("p",{className:"text-xs text-gray-500 truncate",children:$.filename})]}),e.jsx("button",{onClick:()=>M($.image),className:"text-blue-600 hover:text-blue-800 text-sm",children:e.jsx(jt,{className:"w-4 h-4"})})]}),$.note&&e.jsx("p",{className:"text-sm text-gray-600",children:$.note})]})]},J))})]})]}):e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:e.jsx(Tt,{className:"w-8 h-8 text-gray-400"})}),e.jsx("p",{className:"text-gray-600",children:"No x-ray reports found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"You don't have any x-ray records yet"})]})]}),w==="appointments"&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-6 flex items-center gap-2",children:[e.jsx(dt,{className:"w-5 h-5"}),"Appointments"]}),R.doctorAppointment?e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-xl text-gray-900",children:["Appointment #",R.doctorAppointment.appointmentNumber]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-2",children:[e.jsx("span",{className:`px-3 py-1 text-sm rounded-full ${R.doctorAppointment.status==="Completed"?"bg-green-100 text-green-800":R.doctorAppointment.status==="Pending"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:R.doctorAppointment.status}),e.jsxs("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:["Charges: Rs ",R.doctorAppointment.charges]})]})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:Z(R.doctorAppointment.appointmentDate)})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Doctor"}),e.jsx("p",{className:"font-medium",children:R.doctorAppointment.doctorName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"License Number"}),e.jsx("p",{className:"font-mono font-medium",children:R.doctorAppointment.licenseNumber})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Appointment Date"}),e.jsx("p",{className:"font-medium",children:L(R.doctorAppointment.appointmentDate)})]})]})]}):e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:e.jsx(dt,{className:"w-8 h-8 text-gray-400"})}),e.jsx("p",{className:"text-gray-600",children:"No appointments found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"You don't have any appointment records"})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(ma,{className:"w-5 h-5 text-red-600"}),"Emergency Contact"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Hospital Phone"}),e.jsx("p",{className:"font-medium",children:"+92 123 4567890"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Emergency"}),e.jsx("p",{className:"font-medium",children:"1122"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Ambulance"}),e.jsx("p",{className:"font-medium",children:"1020"})]})]})]}),R.recommendedTests&&R.recommendedTests.length>0&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(vc,{className:"w-5 h-5 text-blue-600"}),"Recommended Tests"]}),e.jsx("div",{className:"space-y-3",children:R.recommendedTests.map(($,J)=>e.jsx("div",{children:$.tests.map((m,_)=>e.jsxs("div",{className:"mb-3 last:mb-0",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:m.testName}),e.jsx("p",{className:"text-xs text-gray-500",children:m.category})]}),e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${m.status==="Completed"?"bg-green-100 text-green-800":m.status==="Pending"?"bg-yellow-100 text-yellow-800":"bg-blue-100 text-blue-800"}`,children:m.status})]}),m.instructions&&e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:m.instructions})]},_))},J))})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-4",children:"Medical Summary"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Last Visit"}),e.jsx("span",{className:"text-sm font-medium",children:R.doctorAppointment?Z(R.doctorAppointment.appointmentDate):"N/A"})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Last Prescription"}),e.jsx("span",{className:"text-sm font-medium",children:R.prescriptions?.length>0?Z(R.prescriptions[R.prescriptions.length-1].prescribedDate):"N/A"})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Last Test"}),e.jsx("span",{className:"text-sm font-medium",children:b?Z(b.performedDate):v?Z(v.performedDate):"N/A"})]})})]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-4",children:"Quick Actions"}),e.jsx("div",{className:"space-y-3",children:e.jsxs("button",{onClick:U,className:"w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[e.jsx("span",{className:"font-medium",children:"Print Full Report"}),e.jsx(Et,{className:"w-4 h-4 text-gray-400"})]})})]})]})]}),e.jsxs("div",{className:"mt-8 text-center text-sm text-gray-500",children:[e.jsxs("p",{children:["Hospital Management System • Patient Portal • Last updated: ",new Date().toLocaleDateString()]}),e.jsx("p",{className:"mt-1",children:"For emergencies, call 1122 or visit the nearest hospital"})]})]})]}):e.jsx("div",{className:"min-h-screen text-black bg-gray-50 flex items-center justify-center p-4",children:e.jsxs("div",{className:"text-center max-w-md",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4",children:e.jsx(qe,{className:"w-8 h-8 text-red-600"})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Patient Not Found"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"We couldn't find your patient profile. Please contact hospital administration."}),e.jsx("div",{className:"text-sm text-gray-500",children:e.jsxs("p",{children:["Your User ID: ",e.jsx("span",{className:"font-mono",children:d?.uniqueId||"N/A"})]})})]})})}function z0(){const d=xa(),{patientID:o,doctorID:p}=d.state||{},u=yt(),{getPatientById:j,singlePatient:N,updatePatient:W,deleteMedicine:B}=ft(),{getUserById:H,singleUser:R}=gt(),[V,b]=A.useState(null),E=()=>{ae({doctorId:p,doctorName:R?.name||"",specialist:R?.SpecialistDoctor||"",prescribedDate:new Date().toISOString(),diagnosis:"",medicines:[]}),ne(""),M({medicineName:"",dosage:"",quantity:"",frequency:"",timing:"",duration:"",notes:"",calculatedQuantity:0,charges:0,status:"Pending",PharmacyPerson:""}),b(null)},[v,ne]=A.useState(""),[w,ae]=A.useState({doctorId:p,doctorName:"",specialist:"",prescribedDate:new Date().toISOString(),diagnosis:"",medicines:[]}),[Q,M]=A.useState({medicineName:"",dosage:"",quantity:"",frequency:"",timing:"",duration:"",notes:"",calculatedQuantity:0,charges:0,status:"Pending",PharmacyPerson:""}),[z,Z]=A.useState(!1),L=["Once a day","Twice a day","Three times a day","Morning","Morning & Evening","Morning Afternoon Night","Night"],U=["Before Meal","After Meal","With Meal"],$=x=>{switch(x){case"Once a day":case"Morning":case"Night":return 1;case"Twice a day":case"Morning & Evening":return 2;case"Three times a day":case"Morning Afternoon Night":return 3;default:return 0}},J=x=>{if(!x)return 0;const h=x.toLowerCase();if(h.includes("day")){const Y=x.match(/\d+/);return Y?parseInt(Y[0]):0}else if(h.includes("week")){const Y=x.match(/\d+/);return Y?parseInt(Y[0])*7:0}else if(h.includes("month")){const Y=x.match(/\d+/);return Y?parseInt(Y[0])*30:0}else{const Y=x.match(/\d+/);return Y?parseInt(Y[0]):0}},m=(x,h)=>{const Y=$(x),S=J(h);return Y*S};A.useEffect(()=>{if(Q.frequency&&Q.duration){const x=m(Q.frequency,Q.duration);x>0&&M(h=>({...h,calculatedQuantity:x,quantity:x.toString()}))}},[Q.frequency,Q.duration]);const _=async()=>{await j(o)},C=async()=>{await H(p)};A.useEffect(()=>{_(),C()},[]),A.useEffect(()=>{R&&ae(x=>({...x,doctorId:p,doctorName:R.name||"",specialist:R.SpecialistDoctor||""}))},[R,p]),A.useEffect(()=>{if(N&&N.prescriptions&&N.prescriptions.length>0){const x=N.prescriptions[N.prescriptions.length-1];ae(x),ne(x.diagnosis||"")}},[N]);const k=()=>{if(!Q.medicineName.trim())return;const x=Q.quantity||Q.calculatedQuantity,h={...Q,id:Date.now(),quantity:x?parseInt(x):void 0,calculatedQuantity:void 0};delete h.calculatedQuantity;const Y=[...w.medicines,h];ae({...w,medicines:Y}),M({medicineName:"",dosage:"",quantity:"",frequency:"",timing:"",duration:"",notes:"",calculatedQuantity:0,charges:0,status:"Pending",PharmacyPerson:""})},F=async(x,h)=>{try{if(!x){const S=w.medicines.filter(f=>f.id!==h);ae({...w,medicines:S});return}if(await B(o,x,h)){const S=w.medicines.filter(f=>f._id!==h);ae({...w,medicines:S}),await j(o)}}catch(Y){console.error("Error removing medicine:",Y),alert("Failed to remove medicine")}},de=async()=>{if(!N||w.medicines.length===0){alert("Please add at least one medicine");return}Z(!0);try{const x={...w,diagnosis:v,prescribedDate:new Date().toISOString()},h=x.medicines.map(({id:me,calculatedQuantity:oe,...fe})=>fe);x.medicines=h;const S=(await j(o))?.prescriptions||[],f=S.some(me=>{if(me.doctorId!==x.doctorId||me.diagnosis!==x.diagnosis||me.medicines.length!==x.medicines.length)return!1;for(let oe=0;oe<me.medicines.length;oe++){const fe=me.medicines[oe],te=x.medicines[oe];if(fe.medicineName!==te.medicineName||fe.dosage!==te.dosage||fe.frequency!==te.frequency||fe.timing!==te.timing||fe.duration!==te.duration)return!1}return!0});if(f&&!V&&!window.confirm("A prescription with identical medicines already exists. Do you want to save it anyway?")){Z(!1);return}let G;if(V){const me=S.findIndex(oe=>oe._id===V);if(me!==-1){G=[...S];const oe={...x,_id:V};G[me]=oe}else G=[...S,x]}else G=[...S,x];const K={prescriptions:G};console.log("Saving prescription:",{editingPrescriptionId:V,existingCount:S.length,newCount:G.length,isDuplicate:f}),await W(N._id,K)?(alert(V?"Prescription updated successfully!":"Prescription saved successfully!"),await j(o),E(),u("/doctor-dashboard")):alert("Failed to save prescription")}catch(x){console.error("Error saving prescription:",x),alert(`Failed to save prescription: ${x.message}`)}finally{Z(!1)}},I=()=>{const x=window.open("","_blank");x.document.write(`
    <html>
      <head>
        <title>Prescription - ${N?.name}</title>
        <style>
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            padding: 20px; 
            line-height: 1.6;
            color: #333;
            background: #f8f9fa;
          }
          .prescription-container {
            max-width: 1000px;
            margin: 0 auto;
          }
          .header { 
            text-align: center; 
            padding: 40px 50px 30px;
            background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
            color: white;
            border-radius: 12px;
            margin-bottom: 30px;
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.2);
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            width: 200px;
            height: 200px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
          }
          .header h2 { 
            color: white; 
            margin: 0 0 10px 0;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          .header-subtitle {
            font-size: 16px;
            opacity: 0.9;
            margin: 5px 0;
          }
          .date-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: 500;
            backdrop-filter: blur(10px);
            margin-top: 10px;
          }
          .prescription-id {
            position: absolute;
            top: 30px;
            right: 30px;
            background: rgba(255, 255, 255, 0.2);
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 14px;
            backdrop-filter: blur(10px);
          }
          .patient-info { 
            margin-bottom: 30px; 
            background: white; 
            padding: 30px; 
            border-radius: 12px; 
            border: 1px solid #e2e8f0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }
          .patient-info p {
            font-size: 16px;
            margin: 12px 0;
            padding: 12px 20px;
            background: #f8fafc;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
          }
          .patient-info strong {
            color: #4f46e5;
            font-weight: 600;
            margin-right: 8px;
          }
          .section-title {
            color: #4f46e5;
            border-bottom: 2px solid #c7d2fe;
            padding-bottom: 10px;
            margin: 30px 0 20px 0;
            font-size: 20px;
            font-weight: 600;
          }
          .medicine-table { 
            width: 100%; 
            border-collapse: separate;
            border-spacing: 0;
            margin: 20px 0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            background: white;
          }
          .medicine-table thead {
            background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
          }
          .medicine-table th, 
          .medicine-table td { 
            padding: 16px 20px; 
            text-align: left; 
            border-bottom: 1px solid #e2e8f0;
          }
          .medicine-table th {
            color: white;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .medicine-table tbody tr {
            transition: all 0.2s ease;
          }
          .medicine-table tbody tr:hover {
            background: #f5f3ff;
          }
          .medicine-table tbody tr:nth-child(even) {
            background: #f8fafc;
          }
          .medicine-table td {
            color: #374151;
            font-size: 14px;
          }
          .medicine-table td:first-child {
            font-weight: 600;
            color: #4f46e5;
          }
          .footer { 
            margin-top: 50px; 
            border-top: 2px solid #e2e8f0; 
            padding-top: 30px; 
            background: #f8fafc;
            border-radius: 12px;
            padding: 30px;
          }
          .signature { 
            float: right; 
            text-align: center;
            padding: 25px 35px;
            background: white;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            min-width: 280px;
          }
          .signature p:first-child {
            margin: 20px auto 15px;
            width: 200px;
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #4f46e5 50%, transparent 100%);
            position: relative;
          }
          .signature p:first-child::before {
            content: '';
            position: absolute;
            top: -6px;
            left: 50%;
            transform: translateX(-50%);
            width: 12px;
            height: 12px;
            background: #4f46e5;
            border-radius: 50%;
          }
          .signature strong {
            font-size: 18px;
            color: #4f46e5;
            display: block;
            margin: 10px 0 5px;
          }
          .signature p:not(:first-child) {
            margin: 6px 0;
            color: #64748b;
          }
          .diagnosis { 
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); 
            padding: 25px 30px; 
            border-radius: 12px; 
            margin: 25px 0;
            border: 1px solid #fbbf24;
            box-shadow: 0 2px 10px rgba(251, 191, 36, 0.1);
          }
          .diagnosis h3 {
            color: #92400e;
            margin: 0 0 15px 0;
            font-size: 18px;
            font-weight: 600;
          }
          .diagnosis p {
            color: #78350f;
            font-size: 16px;
            line-height: 1.6;
            margin: 0;
          }
          .print-date {
            text-align: right;
            color: #64748b;
            font-size: 14px;
            margin-bottom: 20px;
            padding: 10px 15px;
            background: white;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            display: inline-block;
          }
          .no-print { 
            text-align: center; 
            margin-top: 30px;
            padding: 30px;
          }
          @media print {
            body { 
              padding: 15px; 
              background: white; 
            }
            .no-print { 
              display: none; 
            }
            .header {
              background: #4f46e5 !important;
              -webkit-print-color-adjust: exact;
            }
            .medicine-table thead {
              background: #4f46e5 !important;
              -webkit-print-color-adjust: exact;
            }
            .diagnosis {
              background: #fef3c7 !important;
              -webkit-print-color-adjust: exact;
            }
          }
          @media (max-width: 768px) {
            body {
              padding: 15px;
            }
            .header,
            .patient-info,
            .footer {
              padding: 20px;
            }
            .medicine-table {
              display: block;
              overflow-x: auto;
            }
            .signature {
              float: none;
              margin: 0 auto;
              width: 100%;
            }
          }
        </style>
      </head>
      <body>
        <div class="prescription-container">
          <div class="header">
            <div class="prescription-id">
              Prescription #${w._id?.substring(0,8).toUpperCase()||"RX-"+Date.now().toString().slice(-6)}
            </div>
            <h2>Medical Prescription</h2>
            <div class="header-subtitle">Hospital Management System</div>
            <div class="date-badge">
              Date: ${new Date(w.prescribedDate).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
            </div>
          </div>
          
          <div class="print-date">
            Printed on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
          </div>
          
          <div class="patient-info">
            <div style="color: #4f46e5; border-bottom: 2px solid #c7d2fe; padding-bottom: 10px; margin-bottom: 20px; font-size: 18px; font-weight: 600;">
              Patient Information
            </div>
            <p><strong>Patient:</strong> <span style="color: #1e293b; font-weight: 600;">${N?.name}</span></p>
            <p><strong>Age:</strong> ${N?.age} | <strong>Gender:</strong> ${N?.gender}</p>
            <p><strong>Patient ID:</strong> <span style="background: #e0e7ff; color: #4f46e5; padding: 4px 10px; border-radius: 6px; font-family: monospace; font-weight: 600;">${N?.uniqueID}</span></p>
            <p><strong>Blood Group:</strong> <span style="color: #dc2626; font-weight: 600; background: #fee2e2; padding: 4px 12px; border-radius: 6px;">${N?.bloodGroup||"Not specified"}</span></p>
          </div>
          
          ${v?`
            <div class="diagnosis">
              <h3>Diagnosis</h3>
              <p>${v}</p>
            </div>
          `:""}
          
          <div class="section-title">Prescribed Medicines</div>
          <table class="medicine-table">
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Dosage</th>
                <th>Quantity</th>
                <th>Frequency</th>
                <th>Timing</th>
                <th>Duration</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              ${w.medicines.map(h=>`
                <tr>
                  <td>${h.medicineName}</td>
                  <td><span style="background: #e0e7ff; color: #4f46e5; padding: 4px 10px; border-radius: 6px; font-weight: 500;">${h.dosage||"-"}</span></td>
                  <td>${h.quantity||"-"}</td>
                  <td>${h.frequency||"-"}</td>
                  <td>${h.timing||"-"}</td>
                  <td>${h.duration||"-"}</td>
                  <td><small style="color: #64748b;">${h.notes||"-"}</small></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          
          <div class="footer">
            <div class="signature">
              <p>_______________________</p>
              <p><strong>Dr. ${w.doctorName||"Doctor"}</strong></p>
              <p>${w.specialist||"General Practitioner"}</p>
              <p style="font-size: 14px; color: #94a3b8;">License: ${R?.licenseNumber||"Not specified"}</p>
            </div>
          </div>
        </div>
        
        <div class="no-print">
          <button onclick="window.print()" style="
            background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
            color: white; 
            border: none; 
            padding: 14px 28px; 
            border-radius: 8px; 
            cursor: pointer; 
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
          ">
            🖨️ Print Prescription
          </button>
          <p style="color: #64748b; margin-top: 10px; font-size: 14px;">Click above button to print this prescription</p>
        </div>
        
        <script>
          setTimeout(() => {
            window.print();
          }, 1000);
        <\/script>
      </body>
    </html>
  `),x.document.close()};return N?e.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6",children:e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(Rt,{className:"w-8 h-8 text-indigo-600"}),"Medicine Prescription"]})}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4 md:mt-0",children:[e.jsxs("button",{onClick:I,disabled:w.medicines.length===0,className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(Et,{className:"w-4 h-4"}),"Print"]}),e.jsx("button",{onClick:de,disabled:z||w.medicines.length===0,className:"px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:z?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white"}),V?"Updating...":"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(at,{className:"w-4 h-4"}),V?"Update":"Save"," Prescription"]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-indigo-50 p-4 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-indigo-600"}),"Patient Information"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(Ea,{label:"Name",value:N.name}),e.jsx(Ea,{label:"Age",value:N.age}),e.jsx(Ea,{label:"Gender",value:N.gender}),e.jsx(Ea,{label:"Patient ID",value:N.uniqueID}),e.jsx(Ea,{label:"Blood Group",value:N.bloodGroup||"Not specified"})]})]}),e.jsxs("div",{className:"bg-amber-50 p-4 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(da,{className:"w-5 h-5 text-amber-600"}),"Doctor Information"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(Ea,{label:"Doctor Name",value:R?.name||"Loading..."}),e.jsx(Ea,{label:"Specialization",value:R?.SpecialistDoctor||"Not specified"}),e.jsx(Ea,{label:"License No",value:R?.licenseNumber||"Not specified"}),e.jsx(Ea,{label:"Contact",value:R?.phone||"Not specified"})]})]})]}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 mb-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(at,{className:"w-5 h-5 text-blue-600"}),"Diagnosis"]}),e.jsx("textarea",{value:v,onChange:x=>ne(x.target.value),className:"w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"Enter patient diagnosis (e.g., Fever, Infection, etc.)",rows:"3"})]}),e.jsxs("div",{className:"bg-white border text-black border-gray-200 rounded-lg p-6 mb-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Bt,{className:"w-5 h-5 text-green-600"}),"Add New Medicine"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Medicine Name *"}),e.jsx("input",{type:"text",value:Q.medicineName,onChange:x=>M({...Q,medicineName:x.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"e.g., Paracetamol",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Dosage"}),e.jsx("input",{type:"text",value:Q.dosage,onChange:x=>M({...Q,dosage:x.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"e.g., 500mg"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Frequency *"}),e.jsxs("select",{value:Q.frequency,onChange:x=>{if(M({...Q,frequency:x.target.value}),Q.duration){const h=m(x.target.value,Q.duration);h>0&&M(Y=>({...Y,frequency:x.target.value,quantity:h.toString(),calculatedQuantity:h}))}},className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",required:!0,children:[e.jsx("option",{value:"",children:"Select Frequency"}),L.map(x=>e.jsx("option",{value:x,children:x},x))]}),Q.frequency&&e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[$(Q.frequency)," times per day"]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Duration *"}),e.jsx("input",{type:"text",value:Q.duration,onChange:x=>{if(M({...Q,duration:x.target.value}),Q.frequency){const h=m(Q.frequency,x.target.value);h>0&&M(Y=>({...Y,duration:x.target.value,quantity:h.toString(),calculatedQuantity:h}))}},className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"e.g., 5 days, 1 week, 10 days",required:!0}),Q.duration&&e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[J(Q.duration)," days total"]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Timing *"}),e.jsxs("select",{value:Q.timing,onChange:x=>M({...Q,timing:x.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",required:!0,children:[e.jsx("option",{value:"",children:"Select Timing"}),U.map(x=>e.jsx("option",{value:x,children:x},x))]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Quantity *"}),e.jsx("input",{type:"number",value:Q.quantity,onChange:x=>M({...Q,quantity:x.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"Auto-calculated",min:"1",required:!0}),Q.calculatedQuantity>0&&e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Calculated: ",Q.calculatedQuantity," units (",$(Q.frequency),"× daily × ",J(Q.duration)," days)"]})]}),e.jsxs("div",{className:"lg:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Notes"}),e.jsx("input",{type:"text",value:Q.notes,onChange:x=>M({...Q,notes:x.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"e.g., Avoid cold water, Take with milk"})]})]}),Q.frequency&&Q.duration&&e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(s0,{className:"w-4 h-4 text-blue-600"}),e.jsx("span",{className:"text-sm font-medium text-blue-800",children:"Quantity Calculation"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Frequency:"})," ",e.jsx("span",{className:"font-medium",children:Q.frequency})," = ",$(Q.frequency),"× daily"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Duration:"})," ",e.jsx("span",{className:"font-medium",children:Q.duration})," = ",J(Q.duration)," days"]}),e.jsxs("div",{className:"md:text-right",children:[e.jsx("span",{className:"text-gray-600",children:"Total Quantity:"})," ",e.jsxs("span",{className:"font-bold text-lg text-green-700",children:[Q.calculatedQuantity," units"]})]})]})]}),e.jsxs("button",{onClick:k,disabled:!Q.medicineName.trim()||!Q.frequency||!Q.timing||!Q.duration||!Q.quantity,className:"mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(Bt,{className:"w-4 h-4"}),"Add Medicine"]})]}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(Rt,{className:"w-5 h-5 text-indigo-600"}),"Prescribed Medicines (",w.medicines.length,")"]}),e.jsx("span",{children:N.prescriptions&&N.prescriptions.length>0&&e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${N.prescriptions[N.prescriptions.length-1].status==="Completed"?"bg-green-100 text-green-800":N.prescriptions[N.prescriptions.length-1].status==="Pending"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"}`,children:N.prescriptions[N.prescriptions.length-1].status})}),v&&e.jsxs("div",{className:"text-sm text-gray-700 bg-blue-50 px-3 py-1 rounded",children:[e.jsx("span",{className:"font-medium",children:"Diagnosis:"})," ",v]})]})}),w.medicines.length===0?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx(Rt,{className:"w-16 h-16 text-gray-300 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"No medicines prescribed yet"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Add medicines using the form above"})]}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Medicine Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Dosage"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Quantity"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Frequency"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Timing"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Duration"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Notes"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Action"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:w.medicines.map((x,h)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm font-medium text-gray-900",children:x.medicineName})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:x.dosage||"-"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"text-sm text-gray-900",children:[x.quantity||"-",x.calculatedQuantity&&e.jsx("span",{className:"text-xs text-gray-500 ml-1",children:"(calculated)"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:x.frequency||"-"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:x.timing||"-"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:x.duration||"-"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:x.notes||"-"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("button",{onClick:()=>F(w._id||null,x._id||x.id),className:"p-1 text-red-600 hover:bg-red-50 rounded transition-colors",children:e.jsx(ua,{className:"w-4 h-4"})})})]},x.id||h))})]})})]})]})})}):e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Loading patient data..."})]})})}const Ea=({label:d,value:o})=>e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:[d,":"]}),e.jsx("span",{className:"text-sm font-medium text-gray-900",children:o})]});function M0(){const d=xa(),o=yt(),{patientID:p,doctorID:u}=d.state||{},{getPatientById:j,singlePatient:N,updatePatient:W}=ft(),{getUserById:B,singleUser:H}=gt(),[R,V]=A.useState(""),[b,E]=A.useState({doctorId:u,doctorName:"",specialist:"",licenseNumber:"",recommendedDate:new Date().toISOString(),diagnosis:"",tests:[]}),[v,ne]=A.useState({testName:"",category:"",priority:"Normal",instructions:"",notes:"",status:"Pending"}),[w,ae]=A.useState(!1),[Q,M]=A.useState(null),[z,Z]=A.useState(null),[L,U]=A.useState(!0),$=["Blood Test","Urine Test","Hematology","Biochemistry","Microbiology","Immunology","Endocrinology","Pathology","Imaging","Cardiology","Neurology","Blood Bank","Histopathology","Culture & Sensitivity","Hormone Test","Genetic Test","Other"],J=[{value:"Normal",label:"Normal",color:"bg-green-100 text-green-800"},{value:"Urgent",label:"Urgent",color:"bg-yellow-100 text-yellow-800"},{value:"Emergency",label:"Emergency",color:"bg-red-100 text-red-800"}],m=async()=>{await j(p)},_=async()=>{await B(u)};A.useEffect(()=>{p&&u?(m(),_()):o("/doctor-dashboard")},[p,u]),A.useEffect(()=>{H&&E(S=>({...S,doctorId:u,doctorName:H.name||"",specialist:H.SpecialistDoctor||"",licenseNumber:H.licenseNumber||""}))},[H,u]),A.useEffect(()=>{if(N&&N.recommendedTests&&N.recommendedTests.length>0&&L&&z===null){const S=N.recommendedTests[N.recommendedTests.length-1];b.tests.length===0&&(E(S),V(S.diagnosis||""))}},[N]);const C=()=>{if(!v.testName.trim()||!v.category.trim()){alert("Please enter test name and category");return}const S={...v,id:Date.now()},f=[...b.tests,S];E({...b,tests:f}),ne({testName:"",category:"",priority:"Normal",instructions:"",notes:"",status:"Pending"})},k=S=>{M(S),ne(b.tests[S])},F=()=>{if(Q===null)return;const S=[...b.tests];S[Q]={...v,id:Date.now()},E({...b,tests:S}),M(null),ne({testName:"",category:"",priority:"Normal",instructions:"",notes:"",status:"Pending"})},de=S=>{const f=b.tests.filter((G,K)=>K!==S);E({...b,tests:f})},I=async()=>{if(!N||b.tests.length===0){alert("Please add at least one test");return}ae(!0);try{const S={...b,diagnosis:R,recommendedDate:new Date().toISOString()},f=S.tests.map(({id:oe,...fe})=>fe);if(S.tests=f,!z&&N?.recommendedTests?.some(fe=>x(fe,S))&&!window.confirm("A similar recommendation already exists. Do you want to save it anyway?")){ae(!1);return}const K=(await j(p))?.recommendedTests||[];let re,me=!1;if(z){const oe=K.findIndex(fe=>fe._id===z);if(oe!==-1){const fe=K[oe];if(JSON.stringify({...S,_id:void 0,__v:void 0,recommendedDate:void 0})===JSON.stringify({...fe,_id:void 0,__v:void 0,recommendedDate:void 0})){me=!0,alert("No changes detected. The recommendation is already saved."),ae(!1);return}re=[...K];const g={...S,_id:z,__v:fe.__v};re[oe]=g}else{const fe=K.findIndex(te=>te.doctorId===S.doctorId&&te.diagnosis===S.diagnosis&&JSON.stringify(te.tests)===JSON.stringify(S.tests));if(fe!==-1){me=!0,alert("A similar recommendation already exists. You are now editing it."),Z(K[fe]._id),E(K[fe]),ae(!1);return}re=[...K,S]}}else{const oe=K.find(fe=>fe.doctorId===S.doctorId&&fe.diagnosis===S.diagnosis&&JSON.stringify(fe.tests)===JSON.stringify(S.tests));if(oe){me=!0,alert("This recommendation already exists. You are now editing it."),Z(oe._id),E(oe),ae(!1);return}re=[...K,S]}if(!me){const oe={recommendedTests:re};await W(N._id,oe)?(alert(`Test recommendations ${z?"updated":"saved"} successfully!`),await j(p),h(),o("/recommendTest")):alert("Failed to save recommendations")}}catch(S){console.error("Error saving test recommendations:",S),alert(`Failed to save test recommendations: ${S.message}`)}finally{ae(!1)}},x=(S,f)=>["doctorId","doctorName","specialist","diagnosis","tests"].every(K=>K==="tests"?JSON.stringify(S[K])===JSON.stringify(f[K]):S[K]===f[K]),h=()=>{E({doctorId:u,doctorName:H?.name||"",specialist:H?.SpecialistDoctor||"",licenseNumber:H?.licenseNumber||"",recommendedDate:new Date().toISOString(),diagnosis:"",tests:[]}),V(""),ne({testName:"",category:"",priority:"Normal",instructions:"",notes:"",status:"Pending"}),M(null),Z(null),U(!0)},Y=()=>{const S=window.open("","_blank");S.document.write(`
      <html>
        <head>
          <title>Test Recommendations - ${N?.name}</title>
          <style>
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              padding: 20px; 
              line-height: 1.6;
              color: #333;
              background: #f8f9fa;
            }
            .report-container {
              max-width: 1000px;
              margin: 0 auto;
            }
            .header { 
              text-align: center; 
              padding: 40px 50px 30px;
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
              color: white;
              border-radius: 12px;
              margin-bottom: 30px;
              box-shadow: 0 4px 15px rgba(5, 150, 105, 0.2);
            }
            .header h2 { 
              color: white; 
              margin: 0 0 10px 0;
              font-size: 32px;
              font-weight: 700;
            }
            .patient-info { 
              margin-bottom: 30px; 
              background: white; 
              padding: 30px; 
              border-radius: 12px; 
              border: 1px solid #e2e8f0;
              box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            }
            .test-table { 
              width: 100%; 
              border-collapse: separate;
              border-spacing: 0;
              margin: 20px 0;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.05);
              background: white;
            }
            .test-table thead {
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
            }
            .test-table th, 
            .test-table td { 
              padding: 16px 20px; 
              text-align: left; 
              border-bottom: 1px solid #e2e8f0;
            }
            .test-table th {
              color: white;
              font-weight: 600;
              font-size: 14px;
            }
            .priority-badge {
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
            }
            .priority-normal { background: #d1fae5; color: #065f46; }
            .priority-urgent { background: #fef3c7; color: #92400e; }
            .priority-emergency { background: #fee2e2; color: #991b1b; }
          </style>
        </head>
        <body>
          <div class="report-container">
            <div class="header">
              <h2>Laboratory Test Recommendations</h2>
              <div style="font-size: 16px; opacity: 0.9;">
                Date: ${new Date(b.recommendedDate).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
              </div>
            </div>
            
            <div class="patient-info">
              <div style="color: #059669; border-bottom: 2px solid #a7f3d0; padding-bottom: 10px; margin-bottom: 20px; font-size: 18px; font-weight: 600;">
                Patient Information
              </div>
              <p><strong>Patient:</strong> <span style="color: #1e293b; font-weight: 600;">${N?.name}</span></p>
              <p><strong>Age:</strong> ${N?.age} | <strong>Gender:</strong> ${N?.gender}</p>
              <p><strong>Patient ID:</strong> ${N?.uniqueID}</p>
            </div>
            
            ${R?`
              <div style="background: #f0f9ff; padding: 20px; border-radius: 12px; margin: 25px 0; border: 1px solid #bae6fd;">
                <h3 style="color: #0369a1; margin: 0 0 10px 0;">Clinical Diagnosis</h3>
                <p style="color: #0c4a6e;">${R}</p>
              </div>
            `:""}
            
            <table class="test-table">
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                ${b.tests.filter(f=>!f.xRay).map(f=>`
                  <tr>
                    <td><strong>${f.testName}</strong></td>
                    <td>${f.category}</td>
                    <td>
                      <span class="priority-badge priority-${f.priority.toLowerCase()}">
                        ${f.priority}
                      </span>
                    </td>
                    <td><small>${f.notes||"-"}</small></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
            
            <div style="margin-top: 20px; border-top: 2px solid #e2e8f0; padding-top: 30px;">
              <div style="float: right; text-align: center;">
                <p style="border-top: 2px solid #059669; padding-top: 10px; width: 200px; margin: 0 auto 10px;"></p>
                <p><strong>Dr. ${b.doctorName||"Doctor"}</strong></p>
                <p>${b.specialist||"General Practitioner"}</p>
                <p>License: ${H?.licenseNumber||"Not specified"}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 40px;">
            <button onclick="window.print()" style="
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
              color: white; 
              border: none; 
              padding: 14px 28px; 
              border-radius: 8px; 
              cursor: pointer; 
              font-size: 16px;
              font-weight: 600;
            ">
              🖨️ Print Report
            </button>
          </div>
          
          <script>
            setTimeout(() => {
              window.print();
            }, 1000);
          <\/script>
        </body>
      </html>
    `),S.document.close()};return N?e.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6",children:e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(Fe,{className:"w-8 h-8 text-emerald-600"}),"Laboratory Test Recommendations"]})}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4 md:mt-0",children:[e.jsxs("button",{onClick:Y,disabled:b.tests.length===0,className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(Et,{className:"w-4 h-4"}),"Print"]}),e.jsx("button",{onClick:I,disabled:w||b.tests.length===0,className:"px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:w?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white"}),z?"Updating...":"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(at,{className:"w-4 h-4"}),z?"Update":"Save"," Recommendations"]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-emerald-50 p-4 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-emerald-600"}),"Patient Information"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(ns,{label:"Name",value:N.name}),e.jsx(ns,{label:"Age",value:N.age}),e.jsx(ns,{label:"Gender",value:N.gender}),e.jsx(ns,{label:"Patient ID",value:N.uniqueID}),e.jsx(ns,{label:"Blood Group",value:N.bloodGroup||"Not specified"})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(da,{className:"w-5 h-5 text-blue-600"}),"Doctor Information"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(ns,{label:"Doctor Name",value:H?.name||"Loading..."}),e.jsx(ns,{label:"Specialization",value:H?.SpecialistDoctor||"Not specified"}),e.jsx(ns,{label:"License No",value:H?.licenseNumber||"Not specified"})]})]})]}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 mb-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(at,{className:"w-5 h-5 text-blue-600"}),"Clinical Diagnosis & Reason for Tests"]}),e.jsx("textarea",{value:R,onChange:S=>V(S.target.value),className:"w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",placeholder:"Enter clinical diagnosis and reason for recommending these tests...",rows:"3"})]}),e.jsxs("div",{className:"bg-white border text-black border-gray-200 rounded-lg p-6 mb-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Bt,{className:"w-5 h-5 text-emerald-600"}),Q!==null?"Edit Test":"Add New Test"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Test Name *"}),e.jsx("input",{type:"text",value:v.testName,onChange:S=>ne({...v,testName:S.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",placeholder:"e.g., Complete Blood Count",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Category *"}),e.jsxs("select",{value:v.category,onChange:S=>ne({...v,category:S.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",required:!0,children:[e.jsx("option",{value:"",children:"Select Category"}),$.map(S=>e.jsx("option",{value:S,children:S},S))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Priority"}),e.jsx("select",{value:v.priority,onChange:S=>ne({...v,priority:S.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",children:J.map(S=>e.jsx("option",{value:S.value,children:S.label},S.value))})]}),e.jsxs("div",{className:"lg:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Instructions To Lab Attendant"}),e.jsx("input",{type:"text",value:v.instructions,onChange:S=>ne({...v,instructions:S.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",placeholder:"e.g., Fasting required"})]}),e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Notes For Patient"}),e.jsx("textarea",{value:v.notes,onChange:S=>ne({...v,notes:S.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",placeholder:"Additional notes or comments...",rows:"2"})]})]}),e.jsx("div",{className:"flex gap-3",children:Q!==null?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:F,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Update Test"}),e.jsx("button",{onClick:()=>{M(null),ne({testName:"",category:"",priority:"Normal",instructions:"",notes:"",status:"Pending"})},className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors",children:"Cancel Edit"})]}):e.jsxs("button",{onClick:C,disabled:!v.testName.trim()||!v.category.trim(),className:"px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(Bt,{className:"w-4 h-4"}),"Add Test"]})})]}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(Fe,{className:"w-5 h-5 text-emerald-600"}),"Recommended Tests (",b.tests.length,")",z&&e.jsxs("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2",children:["ID: ",z.substring(0,8),"..."]})]}),R&&e.jsxs("div",{className:"text-sm text-gray-700 bg-blue-50 px-3 py-1 rounded",children:[e.jsx("span",{className:"font-medium",children:"Diagnosis:"})," ",R]})]})}),b.tests.length===0?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx(Fe,{className:"w-16 h-16 text-gray-300 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"No tests recommended yet"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Add tests using the form above"})]}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Test Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Category"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Priority"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Instructions"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Notes"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:b.tests.filter(S=>!S.xRay).map((S,f)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm font-medium text-gray-900",children:S.testName})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:S.category})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${S.priority==="Emergency"?"bg-red-100 text-red-800":S.priority==="Urgent"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:S.priority})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:S.instructions||"-"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900 max-w-xs truncate",children:S.notes||"-"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>k(f),className:"p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors",title:"Edit",children:e.jsx(Vi,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>de(f),className:"p-1 text-red-600 hover:bg-red-50 rounded transition-colors",title:"Delete",children:e.jsx(ua,{className:"w-4 h-4"})})]})})]},S.id||f))})]})})]})]})})}):e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Loading patient data..."})]})})}const ns=({label:d,value:o})=>e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:[d,":"]}),e.jsx("span",{className:"text-sm font-medium text-gray-900",children:o})]});function P0(){const d=xa(),o=yt(),{patientID:p,doctorID:u}=d.state||{},{getPatientById:j,singlePatient:N,updatePatient:W}=ft(),{getUserById:B,singleUser:H}=gt(),[R,V]=A.useState(""),[b,E]=A.useState({doctorId:u,doctorName:"",specialist:"",licenseNumber:"",recommendedDate:new Date().toISOString(),diagnosis:"",tests:[]}),[v,ne]=A.useState({testName:"",category:"",priority:"Normal",instructions:"",notes:"",status:"Pending",xRay:!0}),[w,ae]=A.useState(!1),[Q,M]=A.useState(null),[z,Z]=A.useState(null),[L,U]=A.useState(!0),[$,J]=A.useState([]),m=["PA Chest X-Ray (Posteroanterior)","AP Chest X-Ray (Anteroposterior)","Lateral Chest View","Decubitus Chest View","Portable Chest X-Ray","AP/Lateral Extremity","AP/Lateral Joint View","Oblique View","Stress View","Weight-bearing View","AP/Lateral Cervical Spine","AP/Lateral Thoracic Spine","AP/Lateral Lumbar Spine","Lumbosacral View","Scoliosis Series","AP Abdomen (KUB)","Erect Abdomen","Decubitus Abdomen","Supine Abdomen","AP/Lateral Skull","Waters View (Occipitomental)","Caldwell View (Occipitofrontal)","Submentovertex View","Towne View","PA Waters View (Sinus)","Caldwell View (Sinus)","Lateral Sinus View","AP Pelvis","Frog-leg Lateral (Hip)","Judet View (Acetabulum)","Inlet/Outlet View (Pelvis)","Swimmer's View (Thoracolumbar Junction)","Oblique Rib View","Clavicle View","Scapula Y-View","Shoulder Internal/External Rotation","Pediatric Chest Series","Pediatric Abdominal Series","C-spine Trauma Series","Trauma Chest View","Pelvic Trauma Series","Contrast Study (Barium/IVP)","Fluoroscopy-guided Procedure","Tomography","Other/Consult Radiologist"],[_,C]=A.useState(""),[k,F]=A.useState(m),[de,I]=A.useState(!1),x=[{value:"Normal",label:"Normal",color:"bg-green-100 text-green-800"},{value:"Urgent",label:"Urgent",color:"bg-yellow-100 text-yellow-800"},{value:"Emergency",label:"Emergency",color:"bg-red-100 text-red-800"}],h=async()=>{await j(p)},Y=async()=>{await B(u)};A.useEffect(()=>{p&&u?(h(),Y()):o("/doctor-dashboard")},[p,u]),A.useEffect(()=>{H&&E(te=>({...te,doctorId:u,doctorName:H.name||"",specialist:H.SpecialistDoctor||"",licenseNumber:H.licenseNumber||""}))},[H,u]),A.useEffect(()=>{if(N&&N.recommendedTests&&N.recommendedTests.length>0&&L&&z===null){const te=N.recommendedTests[N.recommendedTests.length-1];b.tests.length===0&&(E(te),V(te.diagnosis||""))}},[N]);const S=()=>{if(!v.testName.trim()||$.length===0){alert("Please enter target anatomy and select at least one radiographic study");return}const g={...{...v,category:$.join(", ")},id:Date.now()},ce=[...b.tests,g];E({...b,tests:ce}),ne({testName:"",category:"",priority:"Normal",instructions:"",notes:"",status:"Pending",xRay:!0}),J([]),C(""),I(!1)},f=te=>{M(te);const g=b.tests[te];if(ne(g),g.category){const ce=g.category.split(",").map(ue=>ue.trim());J(ce)}else J([])},G=()=>{if(Q===null)return;const te={...v,category:$.length>0?$.join(", "):v.category},g=[...b.tests];g[Q]={...te,id:Date.now()},E({...b,tests:g}),M(null),ne({testName:"",category:"",priority:"Normal",instructions:"",notes:"",status:"Pending",xRay:!0}),J([]),C(""),I(!1)},K=te=>{const g=b.tests.filter((ce,ue)=>ue!==te);E({...b,tests:g})},re=async()=>{if(!N||b.tests.length===0){alert("Please add at least one test");return}ae(!0);try{const te={...b,diagnosis:R,recommendedDate:new Date().toISOString()},g=te.tests.map(({id:_e,...Se})=>Se);if(te.tests=g,!z&&N?.recommendedTests?.some(Se=>me(Se,te))&&!window.confirm("A similar recommendation already exists. Do you want to save it anyway?")){ae(!1);return}const ue=(await j(p))?.recommendedTests||[];let De,we=!1;if(z){const _e=ue.findIndex(Se=>Se._id===z);if(_e!==-1){const Se=ue[_e];if(JSON.stringify({...te,_id:void 0,__v:void 0,recommendedDate:void 0})===JSON.stringify({...Se,_id:void 0,__v:void 0,recommendedDate:void 0})){we=!0,alert("No changes detected. The recommendation is already saved."),ae(!1);return}De=[...ue];const Ms={...te,_id:z,__v:Se.__v};De[_e]=Ms}else{const Se=ue.findIndex(je=>je.doctorId===te.doctorId&&je.diagnosis===te.diagnosis&&JSON.stringify(je.tests)===JSON.stringify(te.tests));if(Se!==-1){we=!0,alert("A similar recommendation already exists. You are now editing it."),Z(ue[Se]._id),E(ue[Se]),ae(!1);return}De=[...ue,te]}}else{const _e=ue.find(Se=>Se.doctorId===te.doctorId&&Se.diagnosis===te.diagnosis&&JSON.stringify(Se.tests)===JSON.stringify(te.tests));if(_e){we=!0,alert("This recommendation already exists. You are now editing it."),Z(_e._id),E(_e),ae(!1);return}De=[...ue,te]}if(!we){const _e={recommendedTests:De};await W(N._id,_e)?(alert(`Test recommendations ${z?"updated":"saved"} successfully!`),await j(p),oe()):alert("Failed to save recommendations")}}catch(te){console.error("Error saving test recommendations:",te),alert(`Failed to save test recommendations: ${te.message}`)}finally{ae(!1)}},me=(te,g)=>["doctorId","doctorName","specialist","diagnosis","tests"].every(ue=>ue==="tests"?JSON.stringify(te[ue])===JSON.stringify(g[ue]):te[ue]===g[ue]),oe=()=>{E({doctorId:u,doctorName:H?.name||"",specialist:H?.SpecialistDoctor||"",licenseNumber:H?.licenseNumber||"",recommendedDate:new Date().toISOString(),diagnosis:"",tests:[]}),V(""),ne({testName:"",category:"",priority:"Normal",instructions:"",notes:"",status:"Pending",xRay:!0}),M(null),Z(null),U(!0)},fe=()=>{const te=window.open("","_blank");te.document.write(`
      <html>
        <head>
          <title>Test Recommendations - ${N?.name}</title>
          <style>
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              padding: 20px; 
              line-height: 1.6;
              color: #333;
              background: #f8f9fa;
            }
            .report-container {
              max-width: 1000px;
              margin: 0 auto;
            }
            .header { 
              text-align: center; 
              padding: 40px 50px 30px;
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
              color: white;
              border-radius: 12px;
              margin-bottom: 30px;
              box-shadow: 0 4px 15px rgba(5, 150, 105, 0.2);
            }
            .header h2 { 
              color: white; 
              margin: 0 0 10px 0;
              font-size: 32px;
              font-weight: 700;
            }
            .patient-info { 
              margin-bottom: 30px; 
              background: white; 
              padding: 30px; 
              border-radius: 12px; 
              border: 1px solid #e2e8f0;
              box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            }
            .test-table { 
              width: 100%; 
              border-collapse: separate;
              border-spacing: 0;
              margin: 20px 0;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.05);
              background: white;
            }
            .test-table thead {
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
            }
            .test-table th, 
            .test-table td { 
              padding: 16px 20px; 
              text-align: left; 
              border-bottom: 1px solid #e2e8f0;
            }
            .test-table th {
              color: white;
              font-weight: 600;
              font-size: 14px;
            }
            .priority-badge {
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
            }
            .priority-normal { background: #d1fae5; color: #065f46; }
            .priority-urgent { background: #fef3c7; color: #92400e; }
            .priority-emergency { background: #fee2e2; color: #991b1b; }
          </style>
        </head>
        <body>
          <div class="report-container">
            <div class="header">
              <h2>Laboratory Test Recommendations</h2>
              <div style="font-size: 16px; opacity: 0.9;">
                Date: ${new Date(b.recommendedDate).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
              </div>
            </div>
            
            <div class="patient-info">
              <div style="color: #059669; border-bottom: 2px solid #a7f3d0; padding-bottom: 10px; margin-bottom: 20px; font-size: 18px; font-weight: 600;">
                Patient Information
              </div>
              <p><strong>Patient:</strong> <span style="color: #1e293b; font-weight: 600;">${N?.name}</span></p>
              <p><strong>Age:</strong> ${N?.age} | <strong>Gender:</strong> ${N?.gender}</p>
              <p><strong>Patient ID:</strong> ${N?.uniqueID}</p>
            </div>
            
            ${R?`
              <div style="background: #f0f9ff; padding: 20px; border-radius: 12px; margin: 25px 0; border: 1px solid #bae6fd;">
                <h3 style="color: #0369a1; margin: 0 0 10px 0;">Clinical Diagnosis</h3>
                <p style="color: #0c4a6e;">${R}</p>
              </div>
            `:""}
            
            <table class="test-table">
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                ${b.tests.filter(g=>g.xRay===!0).map(g=>`
                  <tr>
                    <td><strong>${g.testName}</strong></td>
                    <td>${g.category}</td>
                    <td>
                      <span class="priority-badge priority-${g.priority.toLowerCase()}">
                        ${g.priority}
                      </span>
                    </td>
                    <td><small>${g.notes||"-"}</small></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
            
            <div style="margin-top: 20px; border-top: 2px solid #e2e8f0; padding-top: 30px;">
              <div style="float: right; text-align: center;">
                <p style="border-top: 2px solid #059669; padding-top: 10px; width: 200px; margin: 0 auto 10px;"></p>
                <p><strong>Dr. ${b.doctorName||"Doctor"}</strong></p>
                <p>${b.specialist||"General Practitioner"}</p>
                <p>License: ${H?.licenseNumber||"Not specified"}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 40px;">
            <button onclick="window.print()" style="
              background: linear-gradient(135deg, #059669 0%, #10b981 100%);
              color: white; 
              border: none; 
              padding: 14px 28px; 
              border-radius: 8px; 
              cursor: pointer; 
              font-size: 16px;
              font-weight: 600;
            ">
              🖨️ Print Report
            </button>
          </div>
          
          <script>
            setTimeout(() => {
              window.print();
            }, 1000);
          <\/script>
        </body>
      </html>
    `),te.document.close()};return N?e.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6",children:e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(Dx,{className:"w-8 h-8 text-emerald-600"}),"X-Ray Test Recommendations"]})}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4 md:mt-0",children:[e.jsxs("button",{onClick:fe,disabled:b.tests.length===0,className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(Et,{className:"w-4 h-4"}),"Print"]}),e.jsx("button",{onClick:re,disabled:w||b.tests.length===0,className:"px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:w?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white"}),z?"Updating...":"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(at,{className:"w-4 h-4"}),z?"Update":"Save"," Recommendations"]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-emerald-50 p-4 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-emerald-600"}),"Patient Information"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(is,{label:"Name",value:N.name}),e.jsx(is,{label:"Age",value:N.age}),e.jsx(is,{label:"Gender",value:N.gender}),e.jsx(is,{label:"Patient ID",value:N.uniqueID}),e.jsx(is,{label:"Blood Group",value:N.bloodGroup||"Not specified"})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[e.jsx(da,{className:"w-5 h-5 text-blue-600"}),"Doctor Information"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(is,{label:"Doctor Name",value:H?.name||"Loading..."}),e.jsx(is,{label:"Specialization",value:H?.SpecialistDoctor||"Not specified"}),e.jsx(is,{label:"License No",value:H?.licenseNumber||"Not specified"})]})]})]}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 mb-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(at,{className:"w-5 h-5 text-blue-600"}),"Clinical Diagnosis & Reason for X-Ray"]}),e.jsx("textarea",{value:R,onChange:te=>V(te.target.value),className:"w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",placeholder:"Enter clinical diagnosis and reason for recommending these tests...",rows:"3"})]}),e.jsxs("div",{className:"bg-white border text-black border-gray-200 rounded-lg p-6 mb-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Bt,{className:"w-5 h-5 text-emerald-600"}),Q!==null?"Edit Test":"Add New Test"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Target Anatomy *"}),e.jsx("input",{type:"text",value:v.testName,onChange:te=>ne({...v,testName:te.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",placeholder:"e.g., Femur, Humerus, Chest, Lumbar Spine",required:!0}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Specify the anatomical structure for imaging"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Radiographic Studies *"}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-3 min-h-[40px] p-2 border border-gray-200 rounded-lg bg-gray-50",children:[$.map((te,g)=>e.jsxs("span",{className:"inline-flex items-center gap-1 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium",children:[te,e.jsx("button",{type:"button",onClick:()=>{J($.filter(ce=>ce!==te))},className:"text-white hover:text-gray-200 ml-1",children:"×"})]},g)),$.length===0&&e.jsx("span",{className:"text-gray-400 text-sm italic",children:"No studies selected yet"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:_,onChange:te=>{const g=te.target.value;if(C(g),g.trim()){const ce=m.filter(ue=>ue.toLowerCase().includes(g.toLowerCase()));F(ce),I(!0)}else F(m),I(!1)},onFocus:()=>{_.trim()&&I(!0)},onKeyDown:te=>{te.key==="Enter"&&_.trim()&&(te.preventDefault(),$.includes(_.trim())||J([...$,_.trim()]),C(""),I(!1))},className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900",placeholder:"Type study name or select from dropdown..."}),_&&e.jsx("button",{type:"button",onClick:()=>{C(""),I(!1)},className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:"×"}),de&&k.length>0&&e.jsx("div",{className:"absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",children:k.map((te,g)=>e.jsx("div",{className:`px-4 py-3 hover:bg-emerald-50 cursor-pointer border-b border-gray-100 last:border-b-0 ${$.includes(te)?"bg-emerald-50 text-emerald-700":"text-gray-700"}`,onClick:()=>{$.includes(te)||J([...$,te]),C(""),I(!1)},children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-medium",children:te}),$.includes(te)?e.jsx("span",{className:"text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded",children:"Added"}):e.jsx("span",{className:"text-xs text-gray-500",children:"Click to add"})]})},g))}),de&&_.trim()&&k.length===0&&e.jsx("div",{className:"absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg",children:e.jsxs("div",{className:"px-4 py-4 text-center",children:[e.jsx("div",{className:"text-gray-500 mb-3",children:"No matching studies found"}),e.jsxs("button",{type:"button",onClick:()=>{$.includes(_.trim())||J([...$,_.trim()]),C(""),I(!1)},className:"px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors",children:['Add "',_,'" as custom study']})]})})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Quick add common studies:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["Chest PA","KUB Abdomen","Extremity X-Ray","Spine Series","Pelvis AP","Skull Series"].map(te=>e.jsxs("button",{type:"button",onClick:()=>{$.includes(te)||J([...$,te])},className:"px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-200",children:["+ ",te]},te))})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Type to search, select from dropdown, or press Enter to add custom study"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Priority"}),e.jsx("select",{value:v.priority,onChange:te=>ne({...v,priority:te.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",children:x.map(te=>e.jsx("option",{value:te.value,children:te.label},te.value))})]}),e.jsxs("div",{className:"lg:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Instructions for X-Ray Technician"}),e.jsx("input",{type:"text",value:v.instructions,onChange:te=>ne({...v,instructions:te.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",placeholder:"e.g., Fasting required"})]}),e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Notes For Patient"}),e.jsx("textarea",{value:v.notes,onChange:te=>ne({...v,notes:te.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",placeholder:"Additional notes or comments...",rows:"2"})]})]}),e.jsx("div",{className:"flex gap-3",children:Q!==null?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:G,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Update Test"}),e.jsx("button",{onClick:()=>{M(null),ne({testName:"",category:"",priority:"Normal",instructions:"",notes:"",status:"Pending"})},className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors",children:"Cancel Edit"})]}):e.jsxs("button",{onClick:S,disabled:!v.testName.trim()||$.length===0,className:"px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(Bt,{className:"w-4 h-4"}),"Add Test"]})})]}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(Fe,{className:"w-5 h-5 text-emerald-600"}),"Recommended Tests (",b.tests.length,")",z&&e.jsxs("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2",children:["ID: ",z.substring(0,8),"..."]})]}),R&&e.jsxs("div",{className:"text-sm text-gray-700 bg-blue-50 px-3 py-1 rounded",children:[e.jsx("span",{className:"font-medium",children:"Diagnosis:"})," ",R]})]})}),b.tests.length===0?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx(Fe,{className:"w-16 h-16 text-gray-300 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"No tests recommended yet"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Add tests using the form above"})]}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Test Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Category"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Priority"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Instructions"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Notes"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:b.tests.filter(te=>te.xRay===!0).map((te,g)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm font-medium text-gray-900",children:te.testName})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:te.category})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${te.priority==="Emergency"?"bg-red-100 text-red-800":te.priority==="Urgent"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:te.priority})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:te.instructions||"-"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${te.status==="Completed"?"bg-green-100 text-green-800":te.status==="In Progress"?"bg-blue-100 text-blue-800":te.status==="Cancelled"?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"}`,children:te.status})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900 max-w-xs truncate",children:te.notes||"-"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>f(g),className:"p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors",title:"Edit",children:e.jsx(Vi,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>K(g),className:"p-1 text-red-600 hover:bg-red-50 rounded transition-colors",title:"Delete",children:e.jsx(ua,{className:"w-4 h-4"})})]})})]},te.id||g))})]})})]})]})})}):e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Loading patient data..."})]})})}const is=({label:d,value:o})=>e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm text-gray-600",children:[d,":"]}),e.jsx("span",{className:"text-sm font-medium text-gray-900",children:o})]});function U0(){const{getCompletePrescriptions:d,CompletePresception:o}=ft(),[p,u]=A.useState(!1),[j,N]=A.useState([]),[W,B]=A.useState([]),[H,R]=A.useState(""),[V,b]=A.useState("");console.log(W);const[E,v]=A.useState({totalToday:0,totalAllTime:0,revenueToday:0,revenueAllTime:0,patientsToday:0,patientsAllTime:0}),ne=async()=>{u(!0);try{await d()}catch(M){console.error("Error fetching prescriptions:",M)}finally{u(!1)}};A.useEffect(()=>{ne()},[]),A.useEffect(()=>{if(!Array.isArray(o))return;const M=new Date().toISOString().split("T")[0];let z=0,Z=0,L=0;const U=new Set,$=new Set,J=o.map(m=>{const _=m.prescription||{},C=m.doctorAppointment||{},k=Number(_.charges)||Number(C.charges)||0,F=_.updatedAt||_.prescribedDate;return L+=k,$.add(m.patientId),F?.startsWith(M)&&(z++,Z+=k,U.add(m.patientId)),{_id:_._id,patientId:m.patientId,patientName:m.patientName,patientUniqueId:m.uniqueID,patientAge:m.patientAge||"N/A",patientGender:m.patientGender||"N/A",patientPhone:m.patientPhone||"N/A",doctorName:C.doctorName||_.doctorName,specialist:C.specialist||_.specialist||"General",diagnosis:_.diagnosis||"No diagnosis",charges:k,completedDate:F,PharmacyPerson:_.PharmacyPerson||"Unknown",medicines:_.medicines||[],status:_.status||"Completed"}});N(J),v({totalToday:z,totalAllTime:J.length,revenueToday:Z,revenueAllTime:L,patientsToday:U.size,patientsAllTime:$.size})},[o]),A.useEffect(()=>{let M=[...j];if(H&&(M=M.filter(z=>z.completedDate?.startsWith(H))),V.trim()){const z=V.toLowerCase();M=M.filter(Z=>Z.patientName.toLowerCase().includes(z)||Z.patientUniqueId.toLowerCase().includes(z)||Z.doctorName.toLowerCase().includes(z)||Z.diagnosis&&Z.diagnosis.toLowerCase().includes(z))}B(M)},[j,H,V]);const w=M=>{alert(`💊 Walk-in Pharmacy Record

📋 Record Information:
Record ID: ${M?.patientUniqueId}

👤 Customer Information:
Name: ${M.patientName}
Doctor: ${M.doctorName}
Diagnosis: ${M.diagnosis}

💰 Financial Information:
Charges: PKR ${M.charges}

💊 Medicines: ${M.medicines.length} items`)},ae=M=>{try{const z=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Pharmacy Prescription Receipt - ${M.patientUniqueId}</title>
        <style>
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            padding: 20px; 
            line-height: 1.6;
            color: #333;
            background: #f8f9fa;
          }
          .receipt-container {
            max-width: 600px;
            margin: 0 auto;
          }
          .header { 
            text-align: center; 
            padding: 20px;
            background: linear-gradient(135deg, #059669 0%, #10b981 100%);
            color: white;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .header h2 { 
            color: white; 
            margin: 0 0 10px 0;
            font-size: 24px;
          }
          .info-section {
            background: white;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
            border: 1px solid #e2e8f0;
          }
          .medicine-item {
            padding: 8px 0;
            border-bottom: 1px dashed #e2e8f0;
          }
          .total {
            font-size: 18px;
            font-weight: bold;
            color: #059669;
            text-align: right;
            margin-top: 20px;
            padding-top: 10px;
            border-top: 2px solid #e2e8f0;
          }
          .footer {
            text-align: center;
            color: #64748b;
            font-size: 12px;
            margin-top: 30px;
            padding-top: 10px;
            border-top: 1px solid #e2e8f0;
          }
          @media print {
            body { padding: 10px; background: white; }
            .no-print { display: none; }
            .header { background: #059669 !important; -webkit-print-color-adjust: exact; }
          }
        </style>
      </head>
      <body>
        <div class="receipt-container">
          <div class="header">
            <h2>PHARMACY PRESCRIPTION RECEIPT</h2>
            <div>Receipt #${M.patientUniqueId}</div>
          </div>
          
          <div class="info-section">
            <h3 style="color: #059669; margin-top: 0;">Patient Information</h3>
            <p><strong>Name:</strong> ${M.patientName}</p>
            <p><strong>Patient ID:</strong> ${M.patientUniqueId}</p>
          </div>
          
          <div class="info-section">
            <h3 style="color: #059669; margin-top: 0;">Medical Information</h3>
            <p><strong>Doctor:</strong> ${M.doctorName}</p>
            <p><strong>Specialist:</strong> ${M.specialist}</p>
            <p><strong>Diagnosis:</strong> ${M.diagnosis||"N/A"}</p>
          </div>
          
          <div class="info-section">
            <h3 style="color: #059669; margin-top: 0;">Pharmacy Information</h3>
            <p><strong>Dispensed By:</strong> ${M.PharmacyPerson||"Unknown"}</p>
            <p><strong>Completed Date:</strong> ${M.completedDate?new Date(M.completedDate).toLocaleString():"N/A"}</p>
          </div>
          
          <div class="info-section">
            <h3 style="color: #059669; margin-top: 0;">Medicines Dispensed</h3>
            ${(M.medicines||[]).map(L=>{const U=Number(L.quantity)||0;return`
                <div class="medicine-item">
                  <div><strong>${L.medicineName||"N/A"}</strong></div>
                  <small>Quantity: ${U} | Dosage: ${L.dosage||"N/A"} | Frequency: ${L.frequency||"N/A"}</small><br>
                  <small>Duration: ${L.duration||0} days | Timing: ${L.timing||"N/A"}</small><br>
                  <small>Total: PKR ${M.charges?M.charges.toLocaleString():"0"}</small>
                </div>
              `}).join("")}
          </div>
          
          <div class="total">
            Total Amount: PKR ${M.charges?M.charges.toLocaleString():"0"}
          </div>
          
          <div class="footer">
            <p>Hospital Management System - Pharmacy Department</p>
            <p>Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</p>
          </div>
        </div>
        
        <div class="no-print" style="text-align: center; margin-top: 40px;">
          <button onclick="window.print()" style="
            background: linear-gradient(135deg, #059669 0%, #10b981 100%);
            color: white; 
            border: none; 
            padding: 10px 20px; 
            border-radius: 5px; 
            cursor: pointer;
            margin-right: 10px;
          ">
            Print Receipt
          </button>
          <button onclick="window.close()" style="
            background: #dc2626;
            color: white; 
            border: none; 
            padding: 10px 20px; 
            border-radius: 5px; 
            cursor: pointer;
          ">
            Close
          </button>
        </div>
        
        <script>
          setTimeout(() => {
            window.focus();
          }, 500);
        <\/script>
      </body>
      </html>
    `,Z=window.open("","_blank","width=800,height=900");if(!Z){alert("Please allow popups to print receipt");return}Z.document.write(z),Z.document.close(),Z.onload=function(){Z.focus()}}catch(z){console.error("Error printing receipt:",z),alert("Error printing receipt")}},Q=()=>{if(W.length===0){alert("No data available to print");return}const M=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),z=`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Pharmacy Records Report - ${M}</title>
      <style>
        @page {
          size: A4;
          margin: 0.5in;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 20px;
          color: #333;
          background: #fff;
          line-height: 1.4;
        }
        
        .print-container {
          max-width: 100%;
        }
        
        /* Header Styles */
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #059669;
        }
        
        .header h1 {
          color: #059669;
          margin: 0 0 10px 0;
          font-size: 24px;
          font-weight: 700;
        }
        
        .header .subtitle {
          color: #64748b;
          font-size: 14px;
          margin-bottom: 5px;
        }
        
        /* Report Summary */
        .summary-section {
          background: #f8fafc;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 25px;
          border: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        
        .summary-item {
          text-align: center;
        }
        
        .summary-label {
          font-size: 12px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        
        .summary-value {
          font-size: 18px;
          font-weight: 700;
          color: #059669;
        }
        
        /* Filters Info */
        .filters-info {
          background: #fef3c7;
          padding: 12px 15px;
          border-radius: 6px;
          margin-bottom: 20px;
          font-size: 13px;
          color: #92400e;
          border: 1px solid #fbbf24;
        }
        
        /* Table Styles */
        .records-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-size: 12px;
        }
        
        .records-table thead {
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
        }
        
        .records-table th {
          padding: 10px 8px;
          text-align: left;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 11px;
          border: 1px solid #059669;
        }
        
        .records-table td {
          padding: 8px;
          border: 1px solid #e2e8f0;
          vertical-align: top;
        }
        
        .records-table tbody tr:nth-child(even) {
          background-color: #f8fafc;
        }
        
        .records-table tbody tr:hover {
          background-color: #f0f9ff;
        }
        
        .patient-info {
          font-weight: 600;
          color: #1e293b;
        }
        
        .patient-id {
          font-size: 11px;
          color: #64748b;
          font-family: monospace;
          background: #f1f5f9;
          padding: 2px 6px;
          border-radius: 3px;
          display: inline-block;
        }
        
        .amount-cell {
          font-weight: 700;
          color: #059669;
          text-align: right;
        }
        
        .doctor-cell {
          color: #475569;
          font-size: 11px;
        }
        
        /* Medicines List in Table */
        .medicines-list {
          margin: 0;
          padding-left: 15px;
          font-size: 11px;
          color: #475569;
        }
        
        .medicine-item {
          margin-bottom: 2px;
        }
        
        /* Total Section */
        .total-section {
          margin-top: 30px;
          padding: 15px;
          background: #f0f9ff;
          border-radius: 8px;
          border: 1px solid #bae6fd;
        }
        
        .total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 0;
        }
        
        .total-label {
          font-weight: 600;
          color: #334155;
        }
        
        .total-value {
          font-size: 18px;
          font-weight: 700;
          color: #059669;
        }
        
        /* Footer */
        .footer {
          margin-top: 40px;
          text-align: center;
          color: #64748b;
          font-size: 12px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }
        
        .footer p {
          margin: 5px 0;
        }
        
        /* Print Specific Styles */
        @media print {
          body {
            padding: 15px;
            font-size: 12px;
          }
          
          .header {
            border-bottom: 2px solid #000;
          }
          
          .no-print {
            display: none;
          }
          
          .records-table thead {
            background: #000 !important;
            color: white !important;
            -webkit-print-color-adjust: exact;
          }
          
          .records-table th {
            border: 1px solid #000;
          }
          
          .summary-section {
            border: 1px solid #ccc;
          }
          
          .total-section {
            border: 1px solid #999;
          }
        }
      </style>
    </head>
    <body>
      <div class="print-container">
        <!-- Header -->
        <div class="header">
          <h1>Pharmacy Records Report</h1>
          <div class="subtitle">Hospital Management System - Pharmacy Department</div>
          <div class="subtitle">Generated on: ${M}</div>
        </div>
        
        <!-- Report Summary -->
        <div class="summary-section">
          <div class="summary-item">
            <div class="summary-label">Total Records</div>
            <div class="summary-value">${W.length}</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Total Revenue</div>
            <div class="summary-value">PKR ${W.reduce((L,U)=>L+(U.charges||0),0).toLocaleString()}</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Date Range</div>
            <div class="summary-value">${H||"All Dates"}</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Search Filter</div>
            <div class="summary-value">${V||"None"}</div>
          </div>
        </div>
        
        <!-- Filters Information -->
        ${H||V?`
          <div class="filters-info">
            <strong>Applied Filters:</strong>
            ${H?`<br>• Date: ${H}`:""}
            ${V?`<br>• Search: "${V}"`:""}
          </div>
        `:""}
        
        <!-- Records Table -->
        <table class="records-table">
          <thead>
            <tr>
              <th style="width: 25%">Patient Information</th>
              <th style="width: 20%">Doctor & Diagnosis</th>
              <th style="width: 20%">Medicines</th>
              <th style="width: 10%">Amount (PKR)</th>
              <th style="width: 15%">Date & Time</th>
              <th style="width: 10%">Dispensed By</th>
            </tr>
          </thead>
          <tbody>
            ${W.map((L,U)=>{const $=L.completedDate?new Date(L.completedDate):new Date,J=$.toLocaleDateString("en-GB"),m=$.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`
                <tr>
                  <td>
                    <div class="patient-info">${L.patientName}</div>
                    <div class="patient-id">ID: ${L.patientUniqueId||"N/A"}</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 3px;">
                      ${L.patientPhone&&L.patientPhone!=="N/A"?`Phone: ${L.patientPhone}`:""}
                    </div>
                  </td>
                  <td>
                    <div style="font-weight: 600; color: #1e293b;">Dr. ${L.doctorName}</div>
                    <div class="doctor-cell">${L.specialist||"General"}</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 4px;">
                      ${L.diagnosis&&L.diagnosis!=="No diagnosis"?`Dx: ${L.diagnosis}`:""}
                    </div>
                  </td>
                  <td>
                    ${L.medicines&&L.medicines.length>0?`
                      <ul class="medicines-list">
                        ${L.medicines.slice(0,3).map(_=>`
                          <li class="medicine-item">
                            <strong>${_.medicineName}</strong> (${_.quantity})
                          </li>
                        `).join("")}
                        ${L.medicines.length>3?`
                          <li class="medicine-item" style="color: #94a3b8; font-style: italic;">
                            + ${L.medicines.length-3} more medicines
                          </li>
                        `:""}
                      </ul>
                    `:'<span style="color: #94a3b8;">No medicines listed</span>'}
                  </td>
                  <td class="amount-cell">
                    PKR ${L.charges?L.charges.toLocaleString():"0"}
                  </td>
                  <td>
                    <div>${J}</div>
                    <div style="font-size: 11px; color: #64748b;">${m}</div>
                  </td>
                  <td>
                    <div style="font-size: 11px; color: #475569;">
                      ${L.PharmacyPerson||"Unknown"}
                    </div>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
        
        <!-- Total Summary -->
        <div class="total-section">
          <div class="total-row">
            <span class="total-label">Total Records:</span>
            <span style="font-weight: 700;">${W.length}</span>
          </div>
          <div class="total-row">
            <span class="total-label">Total Revenue:</span>
            <span class="total-value">
              PKR ${W.reduce((L,U)=>L+(U.charges||0),0).toLocaleString()}
            </span>
          </div>
          ${H?`
            <div class="total-row">
              <span class="total-label">Selected Date:</span>
              <span>${H}</span>
            </div>
          `:""}
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <p>This report contains ${W.length} pharmacy records</p>
          <p>Report generated by: Hospital Management System</p>
          <p>Page 1 of 1 | Generated at: ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</p>
        </div>
      </div>
      
      <!-- Print Controls (Visible only on screen) -->
      <div class="no-print" style="text-align: center; margin-top: 40px; padding: 20px; border-top: 2px solid #e2e8f0;">
        <button onclick="window.print()" style="
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          margin-right: 10px;
        ">
          🖨️ Print Report
        </button>
        <button onclick="window.close()" style="
          background: #dc2626;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
        ">
          ❌ Close Window
        </button>
      </div>
      
      <script>
        // Auto focus and print after loading
        window.onload = function() {
          window.focus();
          
          // Auto-print if needed (uncomment the line below)
          // setTimeout(() => { window.print(); }, 1000);
        };
      <\/script>
    </body>
    </html>
  `,Z=window.open("","_blank","width=1200,height=800,scrollbars=yes");if(!Z){alert("Please allow popups to generate report");return}Z.document.write(z),Z.document.close(),Z.onload=function(){Z.focus()}};return e.jsx("div",{className:"min-h-screen bg-gray-50 text-black p-4 md:p-6",children:e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(at,{className:"w-8 h-8 text-emerald-600"}),"Pharmacy Records & History"]}),e.jsx("p",{className:"text-gray-600 mt-1",children:"View all completed prescriptions and pharmacy transactions"})]}),e.jsxs("div",{className:"flex gap-3 mt-4 md:mt-0",children:[e.jsxs("button",{onClick:ne,disabled:p,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 disabled:opacity-50",children:[e.jsx(Dl,{className:`w-4 h-4 ${p?"animate-spin":""}`}),"Refresh"]}),e.jsxs("button",{onClick:Q,disabled:W.length===0,className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-50",children:[e.jsx(cs,{className:"w-4 h-4"}),"Export"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-blue-500 text-white",children:e.jsx(at,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:E.totalAllTime}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Prescriptions"})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:["Today: ",E.totalToday]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-green-500 text-white",children:e.jsx(Cx,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"text-2xl font-bold text-gray-900",children:["PKR ",E.revenueAllTime.toLocaleString()]}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Revenue"})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:["Today: PKR ",E.revenueToday.toLocaleString()]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-purple-500 text-white",children:e.jsx(qe,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:E.patientsAllTime}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Patients"})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:["Today: ",E.patientsToday]})]})]}),e.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 mb-6",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2 mb-2",children:[e.jsx(An,{className:"w-5 h-5 text-gray-600"}),"Filter Records"]}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Search and filter pharmacy records"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 w-full md:w-auto",children:[e.jsxs("div",{className:"relative flex-1 md:w-64",children:[e.jsx("input",{type:"text",value:V,onChange:M=>b(M.target.value),className:"w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",placeholder:"Search patient, doctor, ID..."}),e.jsx(kt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("input",{type:"date",value:H,onChange:M=>R(M.target.value),className:"px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"}),e.jsx("button",{onClick:()=>R(""),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",children:"All Dates"})]})]})]})}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(bt,{className:"w-5 h-5 text-emerald-600"}),"Completed Prescriptions",e.jsxs("span",{className:"text-sm font-normal text-gray-500 ml-2",children:["(",W.length," records)"]})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["Last updated: ",new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})}),p?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Loading pharmacy records..."})]}):W.length===0?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx(at,{className:"w-16 h-16 text-gray-300 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"No pharmacy records found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:H?`for ${H}`:V?`matching "${V}"`:""})]}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Patient Information"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Doctor & Diagnosis"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:W.map((M,z)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:M.patientName}),e.jsxs("div",{className:"text-sm text-gray-500",children:["ID: ",M.patientUniqueId]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"text-sm font-medium text-gray-900",children:["Dr. ",M.doctorName]}),e.jsx("div",{className:"text-sm text-gray-500",children:M.specialist})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"text-lg font-bold text-emerald-700",children:["PKR ",M.charges.toLocaleString()]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"text-sm text-gray-900",children:M.completedDate?new Date(M.completedDate).toLocaleDateString():"N/A"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>w(M),className:"px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1",children:e.jsx(jt,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>ae(M),className:"px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1",children:e.jsx(Et,{className:"w-4 h-4"})})]})})]},M._id||z))})]})}),W.length>0&&!p&&e.jsx("div",{className:"px-6 py-4 bg-gray-50 border-t border-gray-200",children:e.jsxs("div",{className:"text-sm text-gray-600",children:["Showing ",W.length," of ",j.length," total records"]})})]})]})})})}function $0(){const{medicines:d,getAllPresception:o,deletePresception:p,loading:u}=jc(),[j,N]=A.useState([]),[W,B]=A.useState([]),[H,R]=A.useState(""),[V,b]=A.useState("");console.log(j);const[E,v]=A.useState({totalToday:0,totalAllTime:0,revenueToday:0,revenueAllTime:0,medicinesToday:0,medicinesAllTime:0}),ne=async()=>{try{await o()}catch(z){console.error("Error fetching walk-in records:",z)}};A.useEffect(()=>{ne()},[]),A.useEffect(()=>{if(!Array.isArray(d))return;const z=new Date().toISOString().split("T")[0];let Z=0,L=0,U=0,$=0,J=0;const m=d.map(_=>{const C=Number(_.charges)||0,k=_.medicines?.length||0,F=_.createdAt,de=F?.startsWith(z);return U+=C,J+=k,de&&(Z++,L+=C,$+=k),{_id:_._id,recordId:`WALK-${_._id?.substring(0,8).toUpperCase()||"0000"}`,patientName:_.patientName||"Walk-in Customer",patientPhone:_.patientPhone||"N/A",PharmacyPerson:_.PharmacyPerson||"Unknown Staff",charges:C,totalMedicines:k,createdAt:F,updatedAt:_.updatedAt,medicines:_.medicines||[]}});N(m),v({totalToday:Z,totalAllTime:m.length,revenueToday:L,revenueAllTime:U,medicinesToday:$,medicinesAllTime:J})},[d]),A.useEffect(()=>{if(j.length===0){B([]);return}let z=[...j];if(H&&(z=z.filter(Z=>Z.createdAt?.startsWith(H))),V.trim()){const Z=V.toLowerCase();z=z.filter(L=>L.patientName.toLowerCase().includes(Z)||L.recordId.toLowerCase().includes(Z)||L.PharmacyPerson.toLowerCase().includes(Z)||L.patientPhone.toLowerCase().includes(Z))}B(z)},[j,H,V]);const w=z=>{const Z=z.medicines.map(L=>`${L.medicineName} - Qty: ${L.quantity} - Charges: PKR ${L.pharmacyCharges||0}`).join(`
`);alert(`💊 Walk-in Pharmacy Record

📋 Record Information:
Record ID: ${z.recordId}
Date: ${new Date(z.createdAt).toLocaleString()}

👤 Customer Information:
Name: ${z.patientName}
Phone: ${z.patientPhone}

👨‍⚕️ Pharmacy Information:
Handled By: ${z.PharmacyPerson}

💰 Financial Information:
Total Charges: PKR ${z.charges.toLocaleString()}

💊 Medicines Dispensed (${z.totalMedicines}):
${Z||"No medicines listed"}`)},ae=z=>{try{const Z=`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Walk-in Pharmacy Receipt - ${z.recordId}</title>
          <style>
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              padding: 20px; 
              line-height: 1.6;
              color: #333;
              background: #f8f9fa;
            }
            .receipt-container {
              max-width: 600px;
              margin: 0 auto;
            }
            .header { 
              text-align: center; 
              padding: 20px;
              background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
              color: white;
              border-radius: 8px;
              margin-bottom: 20px;
            }
            .header h2 { 
              color: white; 
              margin: 0 0 10px 0;
              font-size: 24px;
            }
            .info-section {
              background: white;
              padding: 15px;
              border-radius: 8px;
              margin-bottom: 15px;
              border: 1px solid #e2e8f0;
            }
            .medicine-item {
              padding: 8px 0;
              border-bottom: 1px dashed #e2e8f0;
            }
            .total {
              font-size: 18px;
              font-weight: bold;
              color: #3b82f6;
              text-align: right;
              margin-top: 20px;
              padding-top: 10px;
              border-top: 2px solid #e2e8f0;
            }
            .footer {
              text-align: center;
              color: #64748b;
              font-size: 12px;
              margin-top: 30px;
              padding-top: 10px;
              border-top: 1px solid #e2e8f0;
            }
            @media print {
              body { padding: 10px; background: white; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="header">
              <h2>WALK-IN PHARMACY RECEIPT</h2>
              <div>Receipt #${z.recordId}</div>
            </div>
            
            <div class="info-section">
              <h3 style="color: #3b82f6; margin-top: 0;">Customer Information</h3>
              <p><strong>Name:</strong> ${z.patientName}</p>
              <p><strong>Phone:</strong> ${z.patientPhone}</p>
              <p><strong>Date & Time:</strong> ${new Date(z.createdAt).toLocaleString()}</p>
            </div>
            
            <div class="info-section">
              <h3 style="color: #3b82f6; margin-top: 0;">Pharmacy Information</h3>
              <p><strong>Handled By:</strong> ${z.PharmacyPerson}</p>
            </div>
            
            <div class="info-section">
              <h3 style="color: #3b82f6; margin-top: 0;">Medicines Dispensed</h3>
              ${(z.medicines||[]).map(U=>`
                <div class="medicine-item">
                  <div><strong>${U.medicineName||"N/A"}</strong></div>
                  <small>Quantity: ${U.quantity||0} | Unit Charges: PKR ${U.pharmacyCharges||0}</small><br>
                  <small>Total: PKR ${(Number(U.quantity)*Number(U.pharmacyCharges)).toLocaleString()}</small>
                </div>
              `).join("")}
            </div>
            
            <div class="total">
              Total Amount: PKR ${z.charges.toLocaleString()}
            </div>
            
            <div class="footer">
              <p>Hospital Management System - Walk-in Pharmacy</p>
              <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</p>
            </div>
          </div>
          
          <div class="no-print" style="text-align: center; margin-top: 40px;">
            <button onclick="window.print()" style="
              background: #3b82f6;
              color: white; 
              border: none; 
              padding: 10px 20px; 
              border-radius: 5px; 
              cursor: pointer;
              margin-right: 10px;
            ">
              Print Receipt
            </button>
            <button onclick="window.close()" style="
              background: #dc2626;
              color: white; 
              border: none; 
              padding: 10px 20px; 
              border-radius: 5px; 
              cursor: pointer;
            ">
              Close
            </button>
          </div>
          
          <script>
            setTimeout(() => {
              window.focus();
            }, 500);
          <\/script>
        </body>
        </html>
      `,L=window.open("","_blank","width=800,height=900");if(!L){alert("Please allow popups to print receipt");return}L.document.write(Z),L.document.close(),L.onload=function(){L.focus()}}catch(Z){console.error("Error printing receipt:",Z),alert("Error printing receipt")}},Q=async z=>{window.confirm("Are you sure you want to delete this walk-in record?")&&await p(z)&&ne()},M=()=>{if(j.length===0){alert("No walk-in pharmacy records available to export");return}const z=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),Z=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=j.reduce((C,k)=>C+(k.charges||0),0),U=j.reduce((C,k)=>C+(k.totalMedicines||0),0),$=new Set(j.map(C=>C.patientName)).size,J={};j.forEach(C=>{const k=C.createdAt?new Date(C.createdAt).toLocaleDateString("en-GB"):"Unknown Date";J[k]||(J[k]={count:0,revenue:0,medicines:0}),J[k].count++,J[k].revenue+=C.charges||0,J[k].medicines+=C.totalMedicines||0});const m=`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Walk-in Pharmacy Records Report - ${z}</title>
      <style>
        @page {
          size: A4;
          margin: 0.5in;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 20px;
          color: #333;
          background: #fff;
          line-height: 1.4;
        }
        
        .report-container {
          max-width: 100%;
        }
        
        /* Header Styles */
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 3px solid #3b82f6;
        }
        
        .header h1 {
          color: #3b82f6;
          margin: 0 0 10px 0;
          font-size: 28px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .header .subtitle {
          color: #64748b;
          font-size: 14px;
          margin: 5px 0;
        }
        
        /* Summary Section */
        .summary-section {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 25px;
          border: 1px solid #cbd5e1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        @media (min-width: 768px) {
          .summary-section {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .summary-item {
          text-align: center;
          padding: 15px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
        }
        
        .summary-label {
          font-size: 12px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        
        .summary-value {
          font-size: 20px;
          font-weight: 700;
          color: #1e40af;
        }
        
        .summary-value.revenue {
          color: #059669;
        }
        
        /* Report Information */
        .report-info {
          background: #dbeafe;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 13px;
          color: #1e40af;
          border: 1px solid #93c5fd;
        }
        
        /* Daily Breakdown */
        .daily-section {
          margin-bottom: 25px;
        }
        
        .section-title {
          color: #3b82f6;
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 15px 0;
          padding-bottom: 8px;
          border-bottom: 2px solid #dbeafe;
        }
        
        .daily-table {
          width: 100%;
          border-collapse: collapse;
          margin: 10px 0;
          font-size: 12px;
        }
        
        .daily-table thead {
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          color: white;
        }
        
        .daily-table th {
          padding: 10px 8px;
          text-align: left;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 11px;
          border: 1px solid #3b82f6;
        }
        
        .daily-table td {
          padding: 8px;
          border: 1px solid #e2e8f0;
          vertical-align: top;
        }
        
        .daily-table tbody tr:nth-child(even) {
          background-color: #f8fafc;
        }
        
        /* Records Table */
        .records-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-size: 11px;
        }
        
        .records-table thead {
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          color: white;
        }
        
        .records-table th {
          padding: 10px 6px;
          text-align: left;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 10px;
          border: 1px solid #3b82f6;
        }
        
        .records-table td {
          padding: 8px 6px;
          border: 1px solid #e2e8f0;
          vertical-align: top;
        }
        
        .records-table tbody tr:hover {
          background-color: #f0f9ff;
        }
        
        .record-id {
          font-family: 'Courier New', monospace;
          font-weight: 600;
          color: #1e40af;
          font-size: 10px;
        }
        
        .customer-name {
          font-weight: 600;
          color: #1e293b;
        }
        
        .amount-cell {
          font-weight: 700;
          color: #059669;
          text-align: right;
        }
        
        .date-cell {
          color: #475569;
          font-size: 10px;
        }
        
        /* Medicines List in Records */
        .medicines-mini {
          margin: 0;
          padding-left: 12px;
          font-size: 9px;
          color: #475569;
        }
        
        .medicine-mini-item {
          margin-bottom: 1px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 150px;
        }
        
        /* Total Summary */
        .total-section {
          margin-top: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-radius: 10px;
          border: 2px solid #93c5fd;
        }
        
        .total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
        }
        
        .total-label {
          font-weight: 600;
          color: #334155;
          font-size: 14px;
        }
        
        .total-value {
          font-size: 18px;
          font-weight: 700;
          color: #1e40af;
        }
        
        .total-value.revenue {
          color: #059669;
        }
        
        /* Footer */
        .footer {
          margin-top: 40px;
          text-align: center;
          color: #64748b;
          font-size: 12px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }
        
        .footer p {
          margin: 5px 0;
        }
        
        /* Print Specific Styles */
        @media print {
          body {
            padding: 15px;
            font-size: 12px;
          }
          
          .header {
            border-bottom: 3px solid #000;
          }
          
          .no-print {
            display: none;
          }
          
          .records-table thead,
          .daily-table thead {
            background: #3b82f6 !important;
            color: white !important;
            -webkit-print-color-adjust: exact;
          }
          
          .summary-item {
            border: 1px solid #ccc;
          }
          
          .total-section {
            border: 2px solid #999;
          }
        }
      </style>
    </head>
    <body>
      <div class="report-container">
        <!-- Header -->
        <div class="header">
          <h1>WALK-IN PHARMACY RECORDS REPORT</h1>
          <div class="subtitle">Hospital Management System - Pharmacy Department</div>
          <div class="subtitle">Report Period: Complete History</div>
          <div class="subtitle">Generated on: ${z} at ${Z}</div>
        </div>
        
        <!-- Report Information -->
        <div class="report-info">
          <strong>Report Summary:</strong> This report contains ${j.length} walk-in pharmacy transactions from ${Object.keys(J).length} different days.
        </div>
        
        <!-- Summary Statistics -->
        <div class="summary-section">
          <div class="summary-item">
            <div class="summary-label">Total Records</div>
            <div class="summary-value">${j.length}</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Total Revenue</div>
            <div class="summary-value revenue">PKR ${L.toLocaleString()}</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Total Medicines</div>
            <div class="summary-value">${U}</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Unique Customers</div>
            <div class="summary-value">${$}</div>
          </div>
        </div>
        
        <!-- Daily Breakdown -->
        <div class="daily-section">
          <div class="section-title">DAILY BREAKDOWN</div>
          <table class="daily-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Records</th>
                <th>Revenue (PKR)</th>
                <th>Medicines</th>
                <th>Avg. per Record</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(J).sort(([C],[k])=>new Date(k)-new Date(C)).map(([C,k])=>`
                <tr>
                  <td>${C}</td>
                  <td>${k.count}</td>
                  <td>PKR ${k.revenue.toLocaleString()}</td>
                  <td>${k.medicines}</td>
                  <td>PKR ${Math.round(k.revenue/k.count).toLocaleString()}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        
        <!-- All Records Table -->
        <div class="daily-section">
          <div class="section-title">ALL WALK-IN PHARMACY RECORDS (${j.length})</div>
          <table class="records-table">
            <thead>
              <tr>
                <th style="width: 15%">Record ID</th>
                <th style="width: 20%">Customer</th>
                <th style="width: 25%">Medicines</th>
                <th style="width: 15%">Amount (PKR)</th>
                <th style="width: 15%">Date</th>
                <th style="width: 10%">Staff</th>
              </tr>
            </thead>
            <tbody>
              ${j.sort((C,k)=>new Date(k.createdAt)-new Date(C.createdAt)).map((C,k)=>{const F=C.createdAt?new Date(C.createdAt):new Date,de=F.toLocaleDateString("en-GB"),I=F.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`
                  <tr>
                    <td>
                      <div class="record-id">${C.recordId||`WALK-${C._id?.substring(0,8).toUpperCase()||"REC"}`}</div>
                    </td>
                    <td>
                      <div class="customer-name">${C.patientName}</div>
                      <div style="font-size: 9px; color: #64748b;">
                        ${C.patientPhone&&C.patientPhone!=="N/A"?C.patientPhone:"No Phone"}
                      </div>
                    </td>
                    <td>
                      ${C.medicines&&C.medicines.length>0?`
                        <ul class="medicines-mini">
                          ${C.medicines.slice(0,2).map(x=>`
                            <li class="medicine-mini-item" title="${x.medicineName} - Qty: ${x.quantity}">
                              ${x.medicineName} (${x.quantity} × PKR ${x.pharmacyCharges||0})
                            </li>
                          `).join("")}
                          ${C.medicines.length>2?`
                            <li class="medicine-mini-item" style="color: #94a3b8; font-style: italic;">
                              + ${C.medicines.length-2} more
                            </li>
                          `:""}
                        </ul>
                      `:'<span style="color: #94a3b8; font-size: 9px;">No details</span>'}
                    </td>
                    <td class="amount-cell">
                      PKR ${C.charges?C.charges.toLocaleString():"0"}
                    </td>
                    <td class="date-cell">
                      <div>${de}</div>
                      <div>${I}</div>
                    </td>
                    <td>
                      <div style="font-size: 10px; color: #475569;">
                        ${C.PharmacyPerson||"Unknown"}
                      </div>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
        
        <!-- Total Summary -->
        <div class="total-section">
          <div class="total-row">
            <span class="total-label">Total Records:</span>
            <span class="total-value">${j.length}</span>
          </div>
          <div class="total-row">
            <span class="total-label">Total Revenue:</span>
            <span class="total-value revenue">PKR ${L.toLocaleString()}</span>
          </div>
          <div class="total-row">
            <span class="total-label">Report Period:</span>
            <span>From ${Object.keys(J).sort()[0]||"N/A"} to ${Object.keys(J).sort().reverse()[0]||"N/A"}</span>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <p>This report contains ${j.length} walk-in pharmacy records with total revenue of PKR ${L.toLocaleString()}</p>
          <p>Hospital Management System - Walk-in Pharmacy Department</p>
          <p>Page 1 of 1 | Generated at: ${Z}</p>
          <p>© ${new Date().getFullYear()} - Confidential Report</p>
        </div>
      </div>
      
      <!-- Print Controls -->
      <div class="no-print" style="text-align: center; margin-top: 40px; padding: 20px; border-top: 2px solid #e2e8f0;">
        <button onclick="window.print()" style="
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          margin-right: 10px;
        ">
          🖨️ Print Report
        </button>
        <button onclick="window.close()" style="
          background: #dc2626;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
        ">
          ❌ Close Window
        </button>
      </div>
      
      <script>
        // Auto focus and optionally auto-print
        window.onload = function() {
          window.focus();
          
          // Optional: Auto-print after 1 second (uncomment if needed)
          // setTimeout(() => { window.print(); }, 1000);
        };
      <\/script>
    </body>
    </html>
  `,_=window.open("","_blank","width=1200,height=800,scrollbars=yes");if(!_){alert("Please allow popups to generate report");return}_.document.write(m),_.document.close(),_.onload=function(){_.focus()}};return e.jsx("div",{className:"min-h-screen bg-gray-50 text-black p-4 md:p-6",children:e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(mc,{className:"w-8 h-8 text-blue-600"}),"Walk-in Pharmacy Records"]}),e.jsx("p",{className:"text-gray-600 mt-1",children:"View all walk-in customer pharmacy transactions"})]}),e.jsxs("div",{className:"flex gap-3 mt-4 md:mt-0",children:[e.jsxs("button",{onClick:ne,disabled:u,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 disabled:opacity-50",children:[e.jsx(Dl,{className:`w-4 h-4 ${u?"animate-spin":""}`}),"Refresh"]}),e.jsxs("button",{onClick:()=>{M()},disabled:W.length===0,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50",children:[e.jsx(cs,{className:"w-4 h-4"}),"Export"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-blue-500 text-white",children:e.jsx(at,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:E.totalAllTime}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Records"})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:["Today: ",E.totalToday]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-green-500 text-white",children:e.jsx(Cx,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"text-2xl font-bold text-gray-900",children:["PKR ",E.revenueAllTime.toLocaleString()]}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Revenue"})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:["Today: PKR ",E.revenueToday.toLocaleString()]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-purple-500 text-white",children:e.jsx(mc,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:E.medicinesAllTime}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Medicines"})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:["Today: ",E.medicinesToday]})]})]}),e.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 mb-6",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2 mb-2",children:[e.jsx(An,{className:"w-5 h-5 text-gray-600"}),"Filter Records"]}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Search and filter walk-in pharmacy records"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 w-full md:w-auto",children:[e.jsxs("div",{className:"relative flex-1 md:w-64",children:[e.jsx("input",{type:"text",value:V,onChange:z=>b(z.target.value),className:"w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Search customer, phone, ID..."}),e.jsx(kt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("input",{type:"date",value:H,onChange:z=>R(z.target.value),className:"px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),e.jsx("button",{onClick:()=>R(new Date().toISOString().split("T")[0]),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",children:"Today"}),e.jsx("button",{onClick:()=>R(""),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",children:"All Dates"})]})]})]})}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(bt,{className:"w-5 h-5 text-blue-600"}),"Walk-in Pharmacy Records",e.jsxs("span",{className:"text-sm font-normal text-gray-500 ml-2",children:["(",W.length," records)"]})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["Last updated: ",new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})}),u?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Loading walk-in pharmacy records..."})]}):W.length===0?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx(mc,{className:"w-16 h-16 text-gray-300 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"No walk-in pharmacy records found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:H?`for ${H}`:V?`matching "${V}"`:""})]}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Record Information"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Customer Details"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Medicines & Charges"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date & Staff"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:W.map((z,Z)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:z.recordId}),e.jsxs("div",{className:"text-sm text-gray-500",children:["ID: ",z._id?.substring(0,8)]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:z.patientName}),e.jsxs("div",{className:"text-sm text-gray-500",children:["📞 ",z.patientPhone]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"text-lg font-bold text-blue-700",children:["PKR ",z.charges.toLocaleString()]}),e.jsxs("div",{className:"text-sm text-gray-600 mt-1",children:[z.totalMedicines," medicines"]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-900",children:z.createdAt?new Date(z.createdAt).toLocaleDateString():"N/A"}),e.jsx("div",{className:"text-xs text-gray-500",children:z.createdAt?new Date(z.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}),e.jsxs("div",{className:"text-sm text-gray-600 mt-2",children:["Staff: ",z.PharmacyPerson]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:()=>w(z),className:"px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center gap-1 text-sm",title:"View Details",children:[e.jsx(jt,{className:"w-3 h-3"}),"Details"]}),e.jsxs("button",{onClick:()=>ae(z),className:"px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1 text-sm",title:"Print Receipt",children:[e.jsx(Et,{className:"w-3 h-3"}),"Receipt"]}),e.jsx("button",{onClick:()=>Q(z._id),className:"px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center gap-1 text-sm",title:"Delete Record",children:"🗑️ Delete"})]})})]},z._id||Z))})]})}),W.length>0&&!u&&e.jsx("div",{className:"px-6 py-4 bg-gray-50 border-t border-gray-200",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["Showing ",W.length," of ",d?.length||0," total records",H&&` for ${H}`]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["Total Revenue: PKR ",W.reduce((z,Z)=>z+Z.charges,0).toLocaleString()," | Total Medicines: ",W.reduce((z,Z)=>z+Z.totalMedicines,0)]})]})})]})]})})})}function q0(){const{getAllLabRecord:d,labRecords:o,deleteLabRecord:p}=Cn(),[u,j]=A.useState(!1),[N,W]=A.useState([]),[B,H]=A.useState([]),[R,V]=A.useState(""),[b,E]=A.useState(""),[v,ne]=A.useState(1),[w,ae]=A.useState(1),[Q,M]=A.useState(0),[z,Z]=A.useState(10),[L,U]=A.useState({totalPages:1,currentPage:1,totalRecords:0,limit:20}),[$,J]=A.useState({totalToday:0,totalAllTime:0,pendingTests:0,completedTests:0,patientsToday:0,patientsAllTime:0}),m=async(h=1,Y=z)=>{j(!0);try{await d(h,Y)}catch(S){console.error("Error fetching lab records:",S)}finally{j(!1)}};A.useEffect(()=>{m()},[]),A.useEffect(()=>{if(!o||!o.records||!Array.isArray(o.records)){console.log("No valid lab records found:",o),W([]),H([]);return}const h=new Date().toISOString().split("T")[0],Y=o.records;o.pagination&&(U(o.pagination),ne(o.pagination.currentPage),ae(o.pagination.totalPages),M(o.pagination.totalRecords));let S=0,f=0,G=0;const K=new Set,re=new Set,me=[];Y.forEach(oe=>{(oe.performedDate?.startsWith(h)||oe.createdAt?.startsWith(h))&&(S++,oe.patientUniqueId&&K.add(oe.patientUniqueId)),(oe.status==="Pending"||oe.status==="pending")&&f++,(oe.status==="Completed"||oe.status==="completed")&&G++,oe.patientUniqueId&&re.add(oe.patientUniqueId),me.push({_id:oe._id,patientId:oe.patientId,patientName:oe.patientName,patientUniqueId:oe.patientUniqueId,patientAge:oe.age,patientGender:oe.gender,doctorId:oe.doctorId,doctorName:oe.doctorName,diagnosis:oe.diagnosis,overallNotes:oe.overallNotes,testName:oe.testName,testCategory:oe.category,priority:oe.priority,instructions:oe.instructions,parameters:oe.parameters||[],status:oe.status,performedBy:oe.performedBy,performedDate:oe.performedDate,recommendedDate:oe.createdAt,completedDate:oe.updatedAt,createdAt:oe.createdAt})}),W(me),H(me),J({totalToday:S,totalAllTime:L.totalRecords||me.length,pendingTests:f,completedTests:G,patientsToday:K.size,patientsAllTime:re.size})},[o]),A.useEffect(()=>{let h=[...N];if(R&&(h=h.filter(Y=>Y.performedDate&&Y.performedDate.startsWith(R)||Y.createdAt&&Y.createdAt.startsWith(R))),b.trim()){const Y=b.toLowerCase();h=h.filter(S=>S.patientName&&S.patientName.toLowerCase().includes(Y)||S.patientUniqueId&&S.patientUniqueId.toLowerCase().includes(Y)||S.doctorName&&S.doctorName.toLowerCase().includes(Y)||S.testName&&S.testName.toLowerCase().includes(Y)||S.diagnosis&&S.diagnosis.toLowerCase().includes(Y))}H(h)},[N,R,b]);const _=h=>{h<1||h>w||(ne(h),m(h,z))},C=()=>{const h=(v-1)*z,Y=h+z;return B.slice(h,Y)},k=B.length>0?B.length<=Q?C():N:[],F=h=>{const Y=h.parameters&&h.parameters.length>0?h.parameters.map((S,f)=>`
      Parameter ${f+1}: ${S.parameter}
      Value: ${S.value} ${S.unit}
      Normal Range: ${S.normalRange}
      Flag: ${S.flag}
      Notes: ${S.notes||"None"}
    `).join(`
`):"No parameters available";alert(`🔬 Lab Test Record

📋 Record Information:
Patient ID: ${h.patientUniqueId}
Status: ${h.status}

👤 Patient Information:
Name: ${h.patientName}
Age: ${h.patientAge}
Gender: ${h.patientGender}

🩺 Medical Information:
Doctor: ${h.doctorName}
Diagnosis: ${h.diagnosis||"N/A"}
Charges Details: ${h.overallNotes||"None"}

🧪 Test Details:
Test: ${h.testName}
Category: ${h.testCategory}
Priority: ${h.priority}
Instructions: ${h.instructions||"None"}

📊 Test Parameters:
${Y}

📅 Timeline:
Performed Date: ${h.performedDate?new Date(h.performedDate).toLocaleDateString():"N/A"}
Completed: ${h.completedDate?new Date(h.completedDate).toLocaleDateString():"Pending"}

🧑‍🔬 Lab Information:
Technician: ${h.performedBy||"N/A"}`)},de=async h=>{if(window.confirm("Are you sure you want to delete this lab record? This action cannot be undone."))try{j(!0),await p(h),m(v,z),xe.success("Lab record deleted successfully!")}catch(Y){console.error("Error deleting lab record:",Y),xe.error("Error deleting lab record. Please try again.")}finally{j(!1)}},I=h=>{try{const Y=h.parameters&&h.parameters.length>0?h.parameters.map(G=>`
        <div style="border-bottom: 1px solid #e5e7eb; padding: 10px 0;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <strong>${G.parameter||"N/A"}</strong>
            <span style="color: ${G.flag==="Critical"?"#dc2626":G.flag==="High"?"#ea580c":G.flag==="Low"?"#3b82f6":"#059669"}">
              ${G.flag||"Normal"}
            </span>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 14px;">
            <span>Value: ${G.value||"N/A"} ${G.unit||""}</span>
            <span>Range: ${G.normalRange||"N/A"}</span>
          </div>
          ${G.notes?`<div style="font-size: 13px; color: #6b7280; margin-top: 5px;">Notes: ${G.notes}</div>`:""}
        </div>
      `).join(""):'<div style="padding: 10px 0; color: #666;">No parameters available</div>',S=`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Lab Test Report - ${h.patientUniqueId}</title>
          <style>
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              padding: 20px; 
              line-height: 1.6;
              color: #333;
              background: #f8f9fa;
            }
            .report-container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 20px rgba(0,0,0,0.1);
            }
            .header { 
              text-align: center; 
              padding: 20px;
              background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
              color: white;
              border-radius: 8px;
              margin-bottom: 20px;
            }
            .header h2 { 
              color: white; 
              margin: 0 0 10px 0;
              font-size: 24px;
            }
            .info-section {
              background: #f8fafc;
              padding: 15px;
              border-radius: 8px;
              margin-bottom: 15px;
              border: 1px solid #e2e8f0;
            }
            .test-details {
              background: #fff7ed;
              border: 1px solid #fed7aa;
            }
            .result-section {
              background: #f0f9ff;
              border: 1px solid #bae6fd;
            }
            .parameters-table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 10px;
            }
            .parameters-table th {
              background: #3b82f6;
              color: white;
              padding: 8px;
              text-align: left;
            }
            .parameters-table td {
              padding: 8px;
              border-bottom: 1px solid #e5e7eb;
            }
            .flag-critical { color: #dc2626; font-weight: bold; }
            .flag-high { color: #ea580c; }
            .flag-low { color: #3b82f6; }
            .flag-normal { color: #059669; }
            .footer {
              text-align: center;
              color: #64748b;
              font-size: 12px;
              margin-top: 30px;
              padding-top: 10px;
              border-top: 1px solid #e2e8f0;
            }
            @media print {
              body { padding: 10px; background: white; }
              .no-print { display: none; }
              .header { background: #3b82f6 !important; -webkit-print-color-adjust: exact; }
            }
          </style>
        </head>
        <body>
          <div class="report-container">
            <div class="header">
              <h2>LABORATORY TEST REPORT</h2>
              <div>Report #${h._id}</div>
            </div>
            
            <div class="info-section">
              <h3 style="color: #3b82f6; margin-top: 0;">Patient Information</h3>
              <p><strong>Name:</strong> ${h.patientName}</p>
              <p><strong>Patient ID:</strong> ${h.patientUniqueId}</p>
              <p><strong>Age:</strong> ${h.patientAge} | <strong>Gender:</strong> ${h.patientGender}</p>
            </div>
            
            <div class="info-section">
              <h3 style="color: #3b82f6; margin-top: 0;">Referring Physician</h3>
              <p><strong>Doctor:</strong> Dr. ${h.doctorName}</p>
              <p><strong>Diagnosis:</strong> ${h.diagnosis||"N/A"}</p>
              <p><strong>Charges Detail:</strong> ${h.overallNotes||"None"}</p>
            </div>
            
            <div class="info-section test-details">
              <h3 style="color: #ea580c; margin-top: 0;">Test Details</h3>
              <p><strong>Test Name:</strong> ${h.testName}</p>
              <p><strong>Category:</strong> ${h.testCategory}</p>
              <p><strong>Priority:</strong> <span style="color: ${h.priority==="Emergency"?"#dc2626":h.priority==="Urgent"?"#ea580c":"#3b82f6"}">${h.priority}</span></p>
              <p><strong>Instructions:</strong> ${h.instructions||"None"}</p>
            </div>
            
            <div class="info-section result-section">
              <h3 style="color: #059669; margin-top: 0;">Test Results</h3>
              <p><strong>Status:</strong> <span style="color: ${h.status==="Completed"?"#059669":"#ea580c"}">${h.status}</span></p>
              
              <h4 style="margin-top: 15px; margin-bottom: 10px; color: #4b5563;">Parameters:</h4>
              ${Y}
              
              <div style="margin-top: 15px;">
                <p><strong>Lab Technician:</strong> ${h.performedBy||"N/A"}</p>
                <p><strong>Performed Date:</strong> ${h.performedDate?new Date(h.performedDate).toLocaleString():"N/A"}</p>
                <p><strong>Report Date:</strong> ${h.completedDate?new Date(h.completedDate).toLocaleString():new Date().toLocaleString()}</p>
              </div>
            </div>
            
            <div class="footer">
              <p>Hospital Management System - Laboratory Department</p>
              <p>Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</p>
              <p style="font-size: 10px; color: #94a3b8;">This is a computer generated report</p>
            </div>
          </div>
          
          <div class="no-print" style="text-align: center; margin-top: 40px;">
            <button onclick="window.print()" style="
              background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
              color: white; 
              border: none; 
              padding: 10px 20px; 
              border-radius: 5px; 
              cursor: pointer;
              margin-right: 10px;
            ">
              Print Report
            </button>
            <button onclick="window.close()" style="
              background: #dc2626;
              color: white; 
              border: none; 
              padding: 10px 20px; 
              border-radius: 5px; 
              cursor: pointer;
            ">
              Close
            </button>
          </div>
        </body>
        </html>
      `,f=window.open("","_blank","width=800,height=900");if(!f){alert("Please allow popups to print report");return}f.document.write(S),f.document.close(),f.onload=function(){f.focus()}}catch(Y){console.error("Error printing report:",Y),alert("Error printing report")}},x=()=>{const h=B.length>0?B:N;if(h.length===0){alert("No data available to export");return}const Y=[["Patient Name","Patient ID","Test Name","Category","Doctor","Diagnosis","Priority","Status","Performed By","Performed Date","Report Date"],...h.map(G=>[G.patientName||"",G.patientUniqueId||"",G.testName||"",G.testCategory||"",G.doctorName||"",G.diagnosis||"",G.priority||"",G.status||"",G.performedBy||"",G.performedDate?new Date(G.performedDate).toLocaleDateString():"N/A",G.completedDate?new Date(G.completedDate).toLocaleDateString():"N/A"])].map(G=>G.join(",")).join(`
`),S=new Blob([Y],{type:"text/csv"}),f=document.createElement("a");f.href=URL.createObjectURL(S),f.download=`lab_records_${new Date().toISOString().split("T")[0]}.csv`,f.click()};return e.jsx("div",{className:"min-h-screen bg-gray-50 text-black p-4 md:p-6",children:e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(Ii,{className:"w-8 h-8 text-blue-600"}),"Laboratory Records & Test History"]}),e.jsx("p",{className:"text-gray-600 mt-1",children:"View all recommended and completed laboratory tests"})]}),e.jsxs("div",{className:"flex gap-3 mt-4 md:mt-0",children:[e.jsxs("button",{onClick:()=>m(v,z),disabled:u,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 disabled:opacity-50",children:[e.jsx(Dl,{className:`w-4 h-4 ${u?"animate-spin":""}`}),"Refresh"]}),e.jsxs("button",{onClick:x,disabled:N.length===0,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50",children:[e.jsx(cs,{className:"w-4 h-4"}),"Export CSV"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-blue-500 text-white",children:e.jsx(Ii,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:L.totalRecords||0}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Tests"})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:["Today: ",$.totalToday]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-green-500 text-white",children:e.jsx(bt,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:$.completedTests}),e.jsx("div",{className:"text-sm text-gray-600",children:"Completed Tests"})]})]}),e.jsx("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:"Ready for review"})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-purple-500 text-white",children:e.jsx(qe,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:$.patientsAllTime}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Patients"})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:["Today: ",$.patientsToday]})]})]}),e.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 mb-6",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2 mb-2",children:[e.jsx(An,{className:"w-5 h-5 text-gray-600"}),"Filter Lab Records"]}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Search and filter laboratory test records"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 w-full md:w-auto",children:[e.jsxs("div",{className:"relative flex-1 md:w-64",children:[e.jsx("input",{type:"text",value:b,onChange:h=>E(h.target.value),className:"w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Search patient, test, doctor..."}),e.jsx(kt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("input",{type:"date",value:R,onChange:h=>V(h.target.value),className:"px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),e.jsx("button",{onClick:()=>V(""),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",children:"All Dates"})]})]})]})}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(Ii,{className:"w-5 h-5 text-blue-600"}),"Laboratory Test Records",e.jsxs("span",{className:"text-sm font-normal text-gray-500 ml-2",children:["(",B.length," records)"]})]}),e.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Page ",v," of ",w," • Total: ",Q," records"]})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"text-sm text-gray-600",children:["Updated: ",new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})})]})}),u?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Loading laboratory records..."})]}):k.length===0?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx(Ii,{className:"w-16 h-16 text-gray-300 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"No laboratory records found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:R?`for ${R}`:b?`matching "${b}"`:""})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Patient Information"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Test Details"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Doctor"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:k.map((h,Y)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:h.patientName}),e.jsxs("div",{className:"text-sm text-gray-500",children:["ID: ",h.patientUniqueId]}),e.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:[h.patientAge," yrs • ",h.patientGender]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:h.testName}),e.jsx("div",{className:"text-sm text-gray-500",children:h.testCategory}),e.jsx("div",{className:`text-xs px-2 py-1 rounded-full mt-1 inline-block ${h.priority==="Emergency"?"bg-red-100 text-red-800":h.priority==="Urgent"?"bg-orange-100 text-orange-800":"bg-blue-100 text-blue-800"}`,children:h.priority})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"text-sm font-medium text-gray-900",children:["Dr. ",h.doctorName]}),e.jsx("div",{className:"text-sm text-gray-500 truncate max-w-xs",children:h.diagnosis||"N/A"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:`px-3 py-1 rounded-full text-xs font-medium inline-block ${h.status==="Completed"||h.status==="completed"?"bg-green-100 text-green-800":h.status==="In Progress"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:h.status})}),e.jsxs("td",{className:"px-6 py-4",children:[e.jsx("div",{className:"text-sm text-gray-900",children:h.performedDate?new Date(h.performedDate).toLocaleDateString():"N/A"}),e.jsxs("div",{className:"text-xs text-gray-500",children:[h.parameters?.length||0," parameters"]})]}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>F(h),className:"px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1",children:e.jsx(jt,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>I(h),disabled:h.status!=="Completed"&&h.status!=="completed",className:"px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed",title:h.status!=="Completed"?"Only completed tests can be printed":"Print report",children:e.jsx(Et,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>de(h._id),disabled:u,className:"px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed",title:"Delete Record",children:e.jsx(ua,{className:"w-4 h-4"})})]})})]},h._id||Y))})]})}),e.jsx("div",{className:"px-6 py-4 bg-gray-50 border-t border-gray-200",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["Showing ",Math.min(k.length,z)," of ",B.length," records",B.length>0&&B.length!==N.length&&" (filtered)"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>_(1),disabled:v===1,className:"p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",children:e.jsx(Tx,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>_(v-1),disabled:v===1,className:"p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",children:e.jsx(rs,{className:"w-4 h-4"})}),e.jsx("div",{className:"flex gap-1",children:Array.from({length:Math.min(5,w)},(h,Y)=>{let S;return w<=5||v<=3?S=Y+1:v>=w-2?S=w-4+Y:S=v-2+Y,e.jsx("button",{onClick:()=>_(S),className:`px-3 py-1 rounded-lg ${v===S?"bg-blue-600 text-white":"border border-gray-300 hover:bg-gray-100"}`,children:S},S)})}),e.jsx("button",{onClick:()=>_(v+1),disabled:v>=w,className:"p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",children:e.jsx(ks,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>_(w),disabled:v>=w,className:"p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",children:e.jsx(Rx,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["Page ",v," of ",w]})]})})]})]})]})})})}function _0(){const{getAllXrayRecord:d,xrayRecords:o,deleteXrayRecord:p}=zs(),[u,j]=A.useState(!1),[N,W]=A.useState([]),[B,H]=A.useState([]),[R,V]=A.useState(""),[b,E]=A.useState(""),[v,ne]=A.useState(1),[w,ae]=A.useState(1),[Q,M]=A.useState(0),[z,Z]=A.useState(10),[L,U]=A.useState({totalPages:1,currentPage:1,totalRecords:0,limit:20}),[$,J]=A.useState({totalToday:0,totalAllTime:0,patientsToday:0,patientsAllTime:0,totalImages:0}),[m,_]=A.useState(null),[C,k]=A.useState(null),[F,de]=A.useState(0),I=async(g=1,ce=z)=>{j(!0);try{const ue=await d(g,ce);console.log("Fetched x-ray records:",ue)}catch(ue){console.error("Error fetching x-ray records:",ue),xe.error("Failed to fetch x-ray records")}finally{j(!1)}};A.useEffect(()=>{I()},[]),A.useEffect(()=>{if(console.log("xrayRecords from store:",o),!o||!Array.isArray(o.records)||o.records.length===0){if(Array.isArray(o)&&o.length>0){console.log("xrayRecords is direct array"),x(o);return}console.log("No valid x-ray records found:",o),W([]),H([]);return}o.records&&o.pagination&&(x(o.records),U(o.pagination),ne(o.pagination.currentPage),ae(o.pagination.totalPages),M(o.pagination.totalRecords))},[o]);const x=g=>{const ce=new Date().toISOString().split("T")[0];let ue=0,De=0;const we=new Set,_e=new Set,Se=[];g.forEach(je=>{(je.performedDate?.startsWith(ce)||je.createdAt?.startsWith(ce))&&(ue++,je.patientUniqueId&&we.add(je.patientUniqueId)),je.records&&Array.isArray(je.records)&&(De+=je.records.length),je.patientUniqueId&&_e.add(je.patientUniqueId),Se.push({_id:je._id,patientId:je.patientId,patientName:je.patientName,patientUniqueId:je.patientUniqueId,patientAge:je.age,patientGender:je.gender,doctorId:je.doctorId,doctorName:je.doctorName,diagnosis:je.diagnosis,overallNotes:je.overallNotes,testName:je.testName,testCategory:je.category,priority:je.priority,instructions:je.instructions,records:je.records||[],status:je.status,performedBy:je.performedBy,performedDate:je.performedDate,recommendedDate:je.createdAt,completedDate:je.updatedAt,createdAt:je.createdAt})}),W(Se),H(Se),J({totalToday:ue,totalAllTime:Se.length,patientsToday:we.size,patientsAllTime:_e.size,totalImages:De})};A.useEffect(()=>{let g=[...N];if(R&&(g=g.filter(ce=>ce.performedDate&&ce.performedDate.startsWith(R)||ce.createdAt&&ce.createdAt.startsWith(R))),b.trim()){const ce=b.toLowerCase();g=g.filter(ue=>ue.patientName&&ue.patientName.toLowerCase().includes(ce)||ue.patientUniqueId&&ue.patientUniqueId.toLowerCase().includes(ce)||ue.doctorName&&ue.doctorName.toLowerCase().includes(ce)||ue.testName&&ue.testName.toLowerCase().includes(ce)||ue.diagnosis&&ue.diagnosis.toLowerCase().includes(ce))}H(g)},[N,R,b]);const h=g=>{g<1||g>w||(ne(g),I(g,z))},Y=g=>{const ce=parseInt(g.target.value);Z(ce),ne(1),I(1,ce)},S=()=>{const g=(v-1)*z,ce=g+z;return B.slice(g,ce)},f=B.length>0?S():[],G=g=>{k(g);const ce=g.records&&g.records.length>0?g.records.map((ue,De)=>`
      Image ${De+1}: 
      Note: ${ue.note||"No note"}
      ${ue.image.startsWith("data:image")?"Base64 Image":`File: ${ue.image}`}
    `).join(`
`):"No images available";alert(`📷 X-ray Record

📋 Record Information:
Patient ID: ${g.patientUniqueId}
Status: ${g.status}

👤 Patient Information:
Name: ${g.patientName}
Age: ${g.patientAge}
Gender: ${g.patientGender}

🩺 Medical Information:
Doctor: ${g.doctorName}
Diagnosis: ${g.diagnosis||"N/A"}
Charges Details: ${g.overallNotes||"None"}

📸 X-ray Images:
${g.records?`${g.records.length} image(s)`:"0 images"}

${ce}

📅 Timeline:
Performed Date: ${g.performedDate?new Date(g.performedDate).toLocaleDateString():"N/A"}
Completed: ${g.completedDate?new Date(g.completedDate).toLocaleDateString():"Pending"}

🧑‍🔬 X-ray Technician:
${g.performedBy||"N/A"}`)},K=g=>{k(g),g.records&&g.records.length>0?(_(g.records[0].image),de(0)):alert("No images available for this x-ray record")},re=()=>{if(!C||!C.records)return;const g=(F+1)%C.records.length;de(g),_(C.records[g].image)},me=()=>{if(!C||!C.records)return;const g=F===0?C.records.length-1:F-1;de(g),_(C.records[g].image)},oe=async g=>{if(window.confirm("Are you sure you want to delete this x-ray record? This action cannot be undone."))try{j(!0),await p(g),I(v,z),xe.success("X-ray record deleted successfully!")}catch(ce){console.error("Error deleting x-ray record:",ce),xe.error("Error deleting x-ray record. Please try again.")}finally{j(!1)}},fe=g=>{try{const ce=g.records&&g.records.length>0?g.records.map((we,_e)=>`
        <div style="border-bottom: 1px solid #e5e7eb; padding: 10px 0; margin-bottom: 10px;">
          <h4 style="color: #3b82f6; margin-bottom: 5px;">Image ${_e+1}</h4>
          ${we.note?`<p style="margin-bottom: 8px;"><strong>Note:</strong> ${we.note}</p>`:""}
          ${we.image.startsWith("data:image")?`<div style="background: #f3f4f6; padding: 10px; border-radius: 5px; margin-top: 5px;">
              <p style="color: #6b7280; font-size: 14px;">Base64 Image (Embedded)</p>
            </div>`:`<div style="text-align: center; margin: 15px 0;">
              <img 
                src="${we.image}" 
                alt="X-ray Image ${_e+1}" 
                style="max-width: 100%; max-height: 300px; border: 1px solid #e5e7eb; border-radius: 5px;"
                onerror="this.style.display='none'; this.parentElement.innerHTML='<p style=\\'color: #dc2626\\'>Image not available</p>';"
              />
              ${we.filename?`<p style="font-size: 12px; color: #6b7280; margin-top: 5px;">${we.filename}</p>`:""}
            </div>`}
        </div>
      `).join(""):'<div style="padding: 10px 0; color: #666;">No x-ray images available</div>',ue=`
        <!DOCTYPE html>
        <html>
        <head>
          <title>X-ray Report - ${g.patientUniqueId}</title>
          <style>
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              padding: 20px; 
              line-height: 1.6;
              color: #333;
              background: #f8f9fa;
            }
            .report-container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 20px rgba(0,0,0,0.1);
            }
            .header { 
              text-align: center; 
              padding: 20px;
              background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
              color: white;
              border-radius: 8px;
              margin-bottom: 20px;
            }
            .header h2 { 
              color: white; 
              margin: 0 0 10px 0;
              font-size: 24px;
            }
            .info-section {
              background: #f8fafc;
              padding: 15px;
              border-radius: 8px;
              margin-bottom: 15px;
              border: 1px solid #e2e8f0;
            }
            .xray-images {
              background: #f0f9ff;
              border: 1px solid #bae6fd;
              margin-top: 20px;
            }
            .image-item {
              padding: 10px;
              border-bottom: 1px solid #e5e7eb;
            }
            .image-item:last-child {
              border-bottom: none;
            }
            .footer {
              text-align: center;
              color: #64748b;
              font-size: 12px;
              margin-top: 30px;
              padding-top: 10px;
              border-top: 1px solid #e2e8f0;
            }
            @media print {
              body { padding: 10px; background: white; }
              .no-print { display: none; }
              .header { background: #3b82f6 !important; -webkit-print-color-adjust: exact; }
              img { max-width: 100% !important; page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="report-container">
            <div class="header">
              <h2>X-RAY REPORT</h2>
              <div>Report #${g._id}</div>
            </div>
            
            <div class="info-section">
              <h3 style="color: #3b82f6; margin-top: 0;">Patient Information</h3>
              <p><strong>Name:</strong> ${g.patientName}</p>
              <p><strong>Patient ID:</strong> ${g.patientUniqueId}</p>
              <p><strong>Age:</strong> ${g.patientAge} | <strong>Gender:</strong> ${g.patientGender}</p>
            </div>
            
            <div class="info-section">
              <h3 style="color: #3b82f6; margin-top: 0;">Referring Physician</h3>
              <p><strong>Doctor:</strong> ${g.doctorName}</p>
              <p><strong>Diagnosis:</strong> ${g.diagnosis||"N/A"}</p>
              <p><strong>Charges:</strong> ${g.overallNotes||"None"}</p>
            </div>
            
            <div class="info-section">
              <h3 style="color: #3b82f6; margin-top: 0;">X-ray Details</h3>
              <p><strong>Test Name:</strong> ${g.testName}</p>
              <p><strong>Category:</strong> ${g.testCategory}</p>
              <p><strong>Priority:</strong> <span style="color: ${g.priority==="Emergency"?"#dc2626":g.priority==="Urgent"?"#ea580c":"#3b82f6"}">${g.priority}</span></p>
              <p><strong>Instructions:</strong> ${g.instructions||"None"}</p>
            </div>
            
            <div class="info-section xray-images">
              <h3 style="color: #059669; margin-top: 0;">X-ray Images</h3>
              <p><strong>Total Images:</strong> ${g.records?g.records.length:0}</p>
              <p><strong>Status:</strong> <span style="color: ${g.status==="Completed"?"#059669":"#ea580c"}">${g.status}</span></p>
              
              <div style="margin-top: 15px;">
                <h4 style="color: #4b5563; margin-bottom: 10px;">Images:</h4>
                ${ce}
              </div>
              
              <div style="margin-top: 15px;">
                <p><strong>X-ray Technician:</strong> ${g.performedBy||"N/A"}</p>
                <p><strong>Performed Date:</strong> ${g.performedDate?new Date(g.performedDate).toLocaleString():"N/A"}</p>
                <p><strong>Report Date:</strong> ${g.completedDate?new Date(g.completedDate).toLocaleString():new Date().toLocaleString()}</p>
              </div>
            </div>
            
            <div class="footer">
              <p>Hospital Management System - Radiology Department</p>
              <p>Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</p>
              <p style="font-size: 10px; color: #94a3b8;">This is a computer generated x-ray report</p>
            </div>
          </div>
          
          <div class="no-print" style="text-align: center; margin-top: 40px;">
            <button onclick="window.print()" style="
              background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
              color: white; 
              border: none; 
              padding: 10px 20px; 
              border-radius: 5px; 
              cursor: pointer;
              margin-right: 10px;
            ">
              Print Report
            </button>
            <button onclick="window.close()" style="
              background: #dc2626;
              color: white; 
              border: none; 
              padding: 10px 20px; 
              border-radius: 5px; 
              cursor: pointer;
            ">
              Close
            </button>
          </div>
        </body>
        </html>
      `,De=window.open("","_blank","width=800,height=900");if(!De){alert("Please allow popups to print report");return}De.document.write(ue),De.document.close(),De.onload=function(){De.focus()}}catch(ce){console.error("Error printing report:",ce),alert("Error printing report")}},te=()=>{const g=B.length>0?B:N;if(g.length===0){alert("No data available to export");return}const ce=[["Patient Name","Patient ID","Test Name","Category","Doctor","Diagnosis","Priority","Status","X-ray Technician","Images Count","Performed Date","Report Date"],...g.map(we=>[we.patientName||"",we.patientUniqueId||"",we.testName||"",we.testCategory||"",we.doctorName||"",we.diagnosis||"",we.priority||"",we.status||"",we.performedBy||"",we.records?we.records.length:0,we.performedDate?new Date(we.performedDate).toLocaleDateString():"N/A",we.completedDate?new Date(we.completedDate).toLocaleDateString():"N/A"])].map(we=>we.join(",")).join(`
`),ue=new Blob([ce],{type:"text/csv"}),De=document.createElement("a");De.href=URL.createObjectURL(ue),De.download=`xray_records_${new Date().toISOString().split("T")[0]}.csv`,De.click()};return e.jsxs("div",{className:"min-h-screen bg-gray-50 text-black p-4 md:p-6",children:[m&&C&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50",children:e.jsxs("div",{className:"bg-white rounded-lg max-w-6xl max-h-[90vh] w-full flex flex-col",children:[e.jsxs("div",{className:"p-4 border-b flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"font-semibold text-gray-900 text-lg",children:["X-ray Images - ",C.patientName," (",C.testName,")"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Image ",F+1," of ",C.records.length,C.records[F].note&&` - ${C.records[F].note}`]})]}),e.jsx("button",{onClick:()=>{_(null),k(null),de(0)},className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(Ft,{className:"w-6 h-6 text-gray-500"})})]}),e.jsxs("div",{className:"flex-1 flex flex-col md:flex-row p-4 overflow-hidden",children:[e.jsx("div",{className:"md:w-1/5 mb-4 md:mb-0 md:mr-4",children:e.jsx("div",{className:"space-y-2 max-h-[60vh] overflow-y-auto pr-2",children:C.records.map((g,ce)=>e.jsxs("button",{onClick:()=>{de(ce),_(g.image)},className:`w-full p-3 rounded-lg border text-left transition-all ${F===ce?"border-blue-500 bg-blue-50":"border-gray-200 hover:bg-gray-50"}`,children:[e.jsxs("div",{className:"font-medium text-sm mb-1",children:["Image ",ce+1]}),g.filename&&e.jsx("div",{className:"text-xs text-gray-500 truncate mb-1",children:g.filename}),g.note&&e.jsx("div",{className:"text-xs text-gray-600 truncate",children:g.note})]},ce))})}),e.jsxs("div",{className:"md:w-4/5 flex flex-col",children:[e.jsx("div",{className:"flex-1 bg-black rounded-lg overflow-hidden flex items-center justify-center",children:e.jsx("img",{src:m,alt:`X-ray Image ${F+1}`,className:"max-w-full max-h-[60vh] object-contain",onError:g=>{g.target.onerror=null,g.target.src="https://via.placeholder.com/600x400?text=Image+Not+Available"}})}),e.jsxs("div",{className:"flex justify-between items-center mt-4",children:[e.jsxs("button",{onClick:me,disabled:C.records.length<=1,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(rs,{className:"w-4 h-4"}),"Previous"]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-sm text-gray-600",children:C.records[F].filename||`Image ${F+1}`}),e.jsxs("div",{className:"text-xs text-gray-500",children:[C.records.length," total images"]})]}),e.jsxs("button",{onClick:re,disabled:C.records.length<=1,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:["Next",e.jsx(ks,{className:"w-4 h-4"})]})]})]})]}),e.jsxs("div",{className:"p-4 border-t flex justify-between items-center",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Patient:"})," ",C.patientName," (",C.patientUniqueId,")"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," ",C.testName," • ",e.jsx("strong",{children:"Priority:"})," ",C.priority]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>window.open(m,"_blank"),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Open Full Size"}),e.jsx("button",{onClick:()=>{_(null),k(null),de(0)},className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",children:"Close"})]})]})]})}),e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(Tt,{className:"w-8 h-8 text-blue-600"}),"X-ray Records & History"]}),e.jsx("p",{className:"text-gray-600 mt-1",children:"View all x-ray imaging records"})]}),e.jsxs("div",{className:"flex gap-3 mt-4 md:mt-0",children:[e.jsxs("button",{onClick:()=>I(v,z),disabled:u,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 disabled:opacity-50",children:[e.jsx(Dl,{className:`w-4 h-4 ${u?"animate-spin":""}`}),"Refresh"]}),e.jsxs("button",{onClick:te,disabled:N.length===0,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50",children:[e.jsx(cs,{className:"w-4 h-4"}),"Export CSV"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-blue-500 text-white",children:e.jsx(Tt,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:$.totalToday}),e.jsx("div",{className:"text-sm text-gray-600",children:"Today's X-rays"})]})]}),e.jsx("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:new Date().toLocaleDateString()})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-green-500 text-white",children:e.jsx(Ts,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:$.totalImages}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Images"})]})]}),e.jsx("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:"Across all x-rays"})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-purple-500 text-white",children:e.jsx(bt,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:$.patientsAllTime}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Patients"})]})]}),e.jsxs("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:["Today: ",$.patientsToday]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-orange-500 text-white",children:e.jsx(at,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:$.totalAllTime}),e.jsx("div",{className:"text-sm text-gray-600",children:"Total Records"})]})]}),e.jsx("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:"All time records"})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-red-500 text-white",children:e.jsx(qe,{className:"w-6 h-6"})}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900",children:$.patientsToday}),e.jsx("div",{className:"text-sm text-gray-600",children:"Patients Today"})]})]}),e.jsx("div",{className:"text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2",children:"Seen today"})]})]}),e.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 mb-6",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2 mb-2",children:[e.jsx(An,{className:"w-5 h-5 text-gray-600"}),"Filter X-ray Records"]}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Search and filter x-ray imaging records"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 w-full md:w-auto",children:[e.jsxs("div",{className:"relative flex-1 md:w-64",children:[e.jsx("input",{type:"text",value:b,onChange:g=>E(g.target.value),className:"w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Search patient, test, doctor..."}),e.jsx(kt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("input",{type:"date",value:R,onChange:g=>V(g.target.value),className:"px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),e.jsx("button",{onClick:()=>V(""),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",children:"All Dates"})]})]})]})}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[e.jsx("div",{children:e.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(Tt,{className:"w-5 h-5 text-blue-600"}),"X-ray Records",e.jsxs("span",{className:"text-sm font-normal text-gray-500 ml-2",children:["(",B.length," records)"]})]})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Show:"}),e.jsxs("select",{value:z,onChange:Y,className:"px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"}),e.jsx("option",{value:50,children:"50"})]}),e.jsx("span",{className:"text-sm text-gray-600",children:"per page"})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["Updated: ",new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})]})}),u?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Loading x-ray records..."})]}):f.length===0?e.jsxs("div",{className:"p-12 text-center",children:[e.jsx(Tt,{className:"w-16 h-16 text-gray-300 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"No x-ray records found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:R?`for ${R}`:b?`matching "${b}"`:""})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Patient Information"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"X-ray Details"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Doctor"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Images"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:f.map((g,ce)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:g.patientName}),e.jsxs("div",{className:"text-sm text-gray-500",children:["ID: ",g.patientUniqueId]}),e.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:[g.patientAge," yrs • ",g.patientGender]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:g.testName}),e.jsx("div",{className:"text-sm text-gray-500",children:g.testCategory}),e.jsx("div",{className:`text-xs px-2 py-1 rounded-full mt-1 inline-block ${g.priority==="Emergency"?"bg-red-100 text-red-800":g.priority==="Urgent"?"bg-orange-100 text-orange-800":"bg-blue-100 text-blue-800"}`,children:g.priority})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:g.doctorName}),e.jsx("div",{className:"text-sm text-gray-500 truncate max-w-xs",children:g.diagnosis||"N/A"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("span",{className:"text-sm font-medium text-gray-900",children:[g.records?g.records.length:0," images"]}),g.records&&g.records.length>0&&e.jsxs("button",{onClick:()=>K(g),className:"text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1",children:[e.jsx(jt,{className:"w-3 h-3"}),"View images"]})]})}),e.jsxs("td",{className:"px-6 py-4",children:[e.jsx("div",{className:"text-sm text-gray-900",children:g.performedDate?new Date(g.performedDate).toLocaleDateString():"N/A"}),e.jsx("div",{className:"text-xs text-gray-500",children:g.performedDate?new Date(g.performedDate).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""})]}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>G(g),className:"px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1",title:"View Details",children:e.jsx(jt,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>fe(g),className:"px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1",title:"Print Report",children:e.jsx(Et,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>oe(g._id),disabled:u,className:"px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed",title:"Delete Record",children:e.jsx(ua,{className:"w-4 h-4"})})]})})]},g._id||ce))})]})}),e.jsx("div",{className:"px-6 py-4 bg-gray-50 border-t border-gray-200",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["Showing ",Math.min(f.length,z)," of ",B.length," records",B.length>0&&B.length!==N.length&&" (filtered)"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>h(1),disabled:v===1,className:"p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",children:e.jsx(Tx,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>h(v-1),disabled:v===1,className:"p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",children:e.jsx(rs,{className:"w-4 h-4"})}),e.jsx("div",{className:"flex gap-1",children:Array.from({length:Math.min(5,w)},(g,ce)=>{let ue;return w<=5||v<=3?ue=ce+1:v>=w-2?ue=w-4+ce:ue=v-2+ce,e.jsx("button",{onClick:()=>h(ue),className:`px-3 py-1 rounded-lg ${v===ue?"bg-blue-600 text-white":"border border-gray-300 hover:bg-gray-100"}`,children:ue},ue)})}),e.jsx("button",{onClick:()=>h(v+1),disabled:v>=w,className:"p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",children:e.jsx(ks,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>h(w),disabled:v>=w,className:"p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",children:e.jsx(Rx,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:["Page ",v," of ",w]})]})})]})]})]})})]})}function L0(){const d=xa(),{uniqueId:o}=d.state||{},p=o,{getAllLabRecord:u,labRecords:j}=Cn(),{getAllPatients:N,patients:W}=ft(),{getAllXrayRecord:B,xrayRecords:H}=zs(),[R,V]=A.useState(!0),[b,E]=A.useState(null),[v,ne]=A.useState(null),[w,ae]=A.useState(null),[Q,M]=A.useState("overview"),[z,Z]=A.useState(null),L=async()=>{V(!0);try{await Promise.all([u(),N(),B()])}catch(m){console.error("Error fetching data:",m),xe.error("Failed to load patient data")}finally{V(!1)}};A.useEffect(()=>{L()},[]),A.useEffect(()=>{if(W&&Array.isArray(W)){const m=W.find(_=>_.uniqueID===p);E(m||null)}if(j){let m=null;Array.isArray(j)?m=j.find(_=>_.patientUniqueId===p):j.records&&Array.isArray(j.records)?m=j.records.find(_=>_.patientUniqueId===p):j.data&&Array.isArray(j.data)&&(m=j.data.find(_=>_.patientUniqueId===p)),ne(m||null)}if(H&&Array.isArray(H)){const m=H.find(_=>_.patientUniqueId===p);ae(m||null)}else if(H&&H.records&&Array.isArray(H.records)){const m=H.records.find(_=>_.patientUniqueId===p);ae(m||null)}},[p,W,j,H]);const U=m=>m?new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"N/A",$=m=>m?new Date(m).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A",J=()=>{const m=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Medical Report - ${b?.name||"Patient"}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 30px; }
          .section { margin-bottom: 30px; }
          .section-title { background: #f0f0f0; padding: 10px; font-weight: bold; margin-bottom: 10px; }
          .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .test-result { border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; }
          .status-completed { color: green; }
          .status-pending { color: orange; }
          .xray-images img { max-width: 200px; margin: 5px; }
          @media print { body { padding: 10px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>MEDICAL REPORT</h1>
          <h2>${b?.name||""} - ${b?.uniqueID||""}</h2>
          <p>Generated: ${new Date().toLocaleDateString()}</p>
        </div>
        
        ${b?`
          <div class="section">
            <div class="section-title">Patient Information</div>
            <div class="info-grid">
              <div><strong>Name:</strong> ${b.name}</div>
              <div><strong>Patient ID:</strong> ${b.uniqueID}</div>
              <div><strong>Age:</strong> ${b.age} years</div>
              <div><strong>Gender:</strong> ${b.gender}</div>
              <div><strong>Blood Group:</strong> ${b.bloodGroup}</div>
              <div><strong>Weight:</strong> ${b.weight} kg</div>
              <div><strong>Phone:</strong> ${b.phone}</div>
              <div><strong>Address:</strong> ${b.address}</div>
            </div>
          </div>
        `:""}
        
        ${b?.prescriptions?.length>0?`
          <div class="section">
            <div class="section-title">Prescriptions (${b.prescriptions.length})</div>
            ${b.prescriptions.map(C=>`
              <div class="test-result">
                <p><strong>Date:</strong> ${U(C.prescribedDate)}</p>
                <p><strong>Doctor:</strong> ${C.doctorName}</p>
                <p><strong>Diagnosis:</strong> ${C.diagnosis}</p>
                <p><strong>Medicines:</strong> ${C.medicines?.length||0}</p>
                <p><strong>Status:</strong> <span class="status-${C.status.toLowerCase()}">${C.status}</span></p>
              </div>
            `).join("")}
          </div>
        `:""}
        
        ${v?`
          <div class="section">
            <div class="section-title">Lab Test Results</div>
            <div class="test-result">
              <p><strong>Test Name:</strong> ${v.testName}</p>
              <p><strong>Category:</strong> ${v.category}</p>
              <p><strong>Doctor:</strong> ${v.doctorName}</p>
              <p><strong>Diagnosis:</strong> ${v.diagnosis}</p>
              <p><strong>Charges Detail:</strong> ${v.overallNotes}</p>
              <p><strong>Status:</strong> <span class="status-${v.status.toLowerCase()}">${v.status}</span></p>
              ${v.parameters?.length>0?`
                <h4>Parameters:</h4>
                ${v.parameters.map(C=>`
                  <div style="margin-left: 20px;">
                    <p><strong>${C.parameter}:</strong> ${C.value} ${C.unit}</p>
                    <p><small>Normal Range: ${C.normalRange} | Flag: ${C.flag}</small></p>
                    ${C.notes?`<p><small>Notes: ${C.notes}</small></p>`:""}
                  </div>
                `).join("")}
              `:""}
            </div>
          </div>
        `:""}
        
        ${w?`
          <div class="section">
            <div class="section-title">X-ray Report</div>
            <div class="test-result">
              <p><strong>Test Name:</strong> ${w.testName}</p>
              <p><strong>Category:</strong> ${w.category}</p>
              <p><strong>Doctor:</strong> ${w.doctorName}</p>
              <p><strong>Diagnosis:</strong> ${w.diagnosis}</p>
              <p><strong>Overall Notes:</strong> ${w.overallNotes}</p>
              <p><strong>Status:</strong> <span class="status-${w.status.toLowerCase()}">${w.status}</span></p>
              <p><strong>Images:</strong> ${w.records?.length||0}</p>
            </div>
          </div>
        `:""}
        
        <div class="footer" style="margin-top: 50px; border-top: 1px solid #000; padding-top: 20px;">
          <p><strong>Hospital Management System</strong></p>
          <p>This is a computer generated report</p>
        </div>
      </body>
      </html>
    `,_=window.open("","_blank","width=800,height=900");_?(_.document.write(m),_.document.close(),_.onload=()=>_.focus()):xe.error("Please allow popups to print report")};return R?e.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Loading patient data..."})]})}):b?e.jsxs("div",{className:"min-h-screen text-black bg-gray-50",children:[z&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4",children:e.jsxs("div",{className:"bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden",children:[e.jsxs("div",{className:"p-4 border-b flex justify-between items-center",children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:"X-ray Image Preview"}),e.jsx("button",{onClick:()=>Z(null),className:"p-2 hover:bg-gray-100 rounded-full",children:e.jsx(Ma,{className:"w-5 h-5 text-gray-500"})})]}),e.jsx("div",{className:"p-4 flex items-center justify-center bg-black",children:e.jsx("img",{src:z,alt:"X-ray Preview",className:"max-w-full max-h-[70vh] object-contain"})}),e.jsxs("div",{className:"p-4 border-t text-center",children:[e.jsx("button",{onClick:()=>window.open(z,"_blank"),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-2",children:"Open Full Size"}),e.jsx("button",{onClick:()=>Z(null),className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300",children:"Close"})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto p-4 md:p-6",children:[e.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 mb-6 text-white",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-4 mb-4 md:mb-0",children:[e.jsx("div",{className:"bg-white/20 p-3 rounded-full",children:e.jsx(qe,{className:"w-8 h-8"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold",children:b.name}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-2",children:[e.jsxs("span",{className:"bg-white/20 px-3 py-1 rounded-full text-sm",children:["ID: ",b.uniqueID]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(dt,{className:"w-4 h-4"}),"Age: ",b.age," years"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Fe,{className:"w-4 h-4"}),b.gender]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Zi,{className:"w-4 h-4"}),"Blood: ",b.bloodGroup]})]})]})]}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsxs("button",{onClick:J,className:"px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2",children:[e.jsx(Et,{className:"w-4 h-4"}),"Print Report"]})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm mb-6",children:e.jsx("div",{className:"border-b",children:e.jsx("nav",{className:"flex overflow-x-auto",children:["overview","prescriptions","tests","xrays","appointments"].map(m=>e.jsx("button",{onClick:()=>M(m),className:`px-6 py-4 font-medium whitespace-nowrap transition-colors ${Q===m?"text-blue-600 border-b-2 border-blue-600":"text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[Q==="overview"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Prescriptions"}),e.jsx("p",{className:"text-2xl font-bold mt-1",children:b.prescriptions?.length||0})]}),e.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:e.jsx(Rt,{className:"w-6 h-6 text-blue-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Tests Completed"}),e.jsx("p",{className:"text-2xl font-bold mt-1",children:(v?1:0)+(w?1:0)})]}),e.jsx("div",{className:"p-2 bg-green-100 rounded-lg",children:e.jsx(Fe,{className:"w-6 h-6 text-green-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Appointments"}),e.jsx("p",{className:"text-2xl font-bold mt-1",children:b.doctorAppointment?1:0})]}),e.jsx("div",{className:"p-2 bg-purple-100 rounded-lg",children:e.jsx(dt,{className:"w-6 h-6 text-purple-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"X-ray Images"}),e.jsx("p",{className:"text-2xl font-bold mt-1",children:w?.records?.length||0})]}),e.jsx("div",{className:"p-2 bg-orange-100 rounded-lg",children:e.jsx(Tt,{className:"w-6 h-6 text-orange-600"})})]})})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5"}),"Personal Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Full Name"}),e.jsx("p",{className:"font-medium",children:b.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Patient ID"}),e.jsx("p",{className:"font-mono font-medium",children:b.uniqueID})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Age"}),e.jsxs("p",{className:"font-medium",children:[b.age," years"]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Gender"}),e.jsx("p",{className:"font-medium",children:b.gender})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Blood Group"}),e.jsx("p",{className:"font-medium",children:b.bloodGroup})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Weight"}),e.jsxs("p",{className:"font-medium",children:[b.weight," kg"]})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Phone Number"}),e.jsx("p",{className:"font-medium",children:b.phone})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Address"}),e.jsx("p",{className:"font-medium",children:b.address})]})]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(os,{className:"w-5 h-5"}),"Recent Activity"]}),e.jsxs("div",{className:"space-y-4",children:[b.prescriptions?.map((m,_)=>e.jsxs("div",{className:"border-l-4 border-green-500 pl-4 py-2",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium",children:["Prescription #",_+1]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[m.diagnosis," • ",m.doctorName]})]}),e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full",children:m.status})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:$(m.prescribedDate)})]},_)),v&&e.jsxs("div",{className:"border-l-4 border-blue-500 pl-4 py-2",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium",children:["Lab Test: ",v.testName]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[v.category," • ",v.doctorName]})]}),e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full",children:v.status})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:$(v.createdAt)})]}),w&&e.jsxs("div",{className:"border-l-4 border-orange-500 pl-4 py-2",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium",children:["X-ray: ",w.testName]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[w.category," • ",w.doctorName]})]}),e.jsx("span",{className:"px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full",children:w.status})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:$(w.createdAt)})]})]})]})]}),Q==="prescriptions"&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-6 flex items-center gap-2",children:[e.jsx(Rt,{className:"w-5 h-5"}),"Prescriptions History"]}),!b.prescriptions||b.prescriptions.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:e.jsx(Rt,{className:"w-8 h-8 text-gray-400"})}),e.jsx("p",{className:"text-gray-600",children:"No prescriptions found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"You don't have any prescriptions yet"})]}):e.jsx("div",{className:"space-y-6",children:b.prescriptions.map((m,_)=>e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-lg text-gray-900",children:["Prescription #",_+1]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-2",children:[e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:m.status}),e.jsx("span",{className:"text-sm text-gray-600",children:U(m.prescribedDate)})]})]}),e.jsx("div",{className:"mt-2 md:mt-0",children:e.jsxs("span",{className:"px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full",children:[m.medicines?.length||0," Medicines"]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Doctor"}),e.jsx("p",{className:"font-medium",children:m.doctorName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Specialist"}),e.jsx("p",{className:"font-medium",children:m.specialist})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Diagnosis"}),e.jsx("p",{className:"font-medium",children:m.diagnosis})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Charges"}),e.jsx("p",{className:"font-medium",children:m.charges})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Pharmacy Person"}),e.jsx("p",{className:"font-medium",children:m.PharmacyPerson})]})]}),m.medicines&&m.medicines.length>0&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-900 mb-3",children:"Medicines"}),e.jsx("div",{className:"space-y-3",children:m.medicines.map((C,k)=>e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:C.medicineName}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Dosage: ",C.dosage," • Frequency: ",C.frequency]})]}),e.jsxs("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full",children:["Quantity: ",C.quantity]})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Duration:"}),e.jsx("span",{className:"ml-2 font-medium",children:C.duration})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Timing:"}),e.jsx("span",{className:"ml-2 font-medium",children:C.timing})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("span",{className:"text-gray-600",children:"Notes:"}),e.jsx("span",{className:"ml-2 font-medium",children:C.notes||"None"})]})]})]},k))})]})]},_))})]}),Q==="tests"&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-6 flex items-center gap-2",children:[e.jsx(Fe,{className:"w-5 h-5"}),"Lab Test Results"]}),v?e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-xl text-gray-900",children:v.testName}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-2",children:[e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:v.category}),e.jsx("span",{className:`px-3 py-1 text-sm rounded-full ${v.priority==="Emergency"?"bg-red-100 text-red-800":v.priority==="Urgent"?"bg-orange-100 text-orange-800":"bg-green-100 text-green-800"}`,children:v.priority}),e.jsx("span",{className:"px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full",children:v.status})]})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:U(v.performedDate)})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Doctor"}),e.jsx("p",{className:"font-medium",children:v.doctorName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Performed By"}),e.jsx("p",{className:"font-medium",children:v.performedBy})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Diagnosis"}),e.jsx("p",{className:"font-medium",children:v.diagnosis})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Instructions"}),e.jsx("p",{className:"font-medium",children:v.instructions})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Charges Details"}),e.jsx("p",{className:"font-medium",children:v.overallNotes})]})]}),v.parameters&&v.parameters.length>0&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-gray-900 mb-4",children:"Test Parameters"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Parameter"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Value"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Normal Range"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Flag"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Notes"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:v.parameters.map((m,_)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3 text-sm font-medium text-gray-900",children:m.parameter}),e.jsxs("td",{className:"px-4 py-3 text-sm",children:[e.jsx("span",{className:"font-medium",children:m.value}),e.jsx("span",{className:"text-gray-600 ml-1",children:m.unit})]}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600",children:m.normalRange}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${m.flag==="High"?"bg-red-100 text-red-800":m.flag==="Low"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:m.flag})}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600",children:m.notes||"-"})]},_))})]})})]})]}):e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:e.jsx(Fe,{className:"w-8 h-8 text-gray-400"})}),e.jsx("p",{className:"text-gray-600",children:"No lab test results found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"You don't have any lab test records yet"})]})]}),Q==="xrays"&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-6 flex items-center gap-2",children:[e.jsx(Tt,{className:"w-5 h-5"}),"X-ray Reports & Images"]}),w?e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-xl text-gray-900",children:w.testName}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-2",children:[e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:w.category}),e.jsx("span",{className:`px-3 py-1 text-sm rounded-full ${w.priority==="Emergency"?"bg-red-100 text-red-800":w.priority==="Urgent"?"bg-orange-100 text-orange-800":"bg-green-100 text-green-800"}`,children:w.priority}),e.jsx("span",{className:"px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full",children:w.status})]})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:U(w.performedDate)})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Doctor"}),e.jsx("p",{className:"font-medium",children:w.doctorName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Performed By"}),e.jsx("p",{className:"font-medium",children:w.performedBy})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Diagnosis"}),e.jsx("p",{className:"font-medium",children:w.diagnosis})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Instructions"}),e.jsx("p",{className:"font-medium",children:w.instructions})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Charges Details"}),e.jsx("p",{className:"font-medium",children:w.overallNotes})]})]}),w.records&&w.records.length>0&&e.jsxs("div",{children:[e.jsxs("h5",{className:"font-medium text-gray-900 mb-4",children:["X-ray Images (",w.records.length,")"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:w.records.map((m,_)=>e.jsxs("div",{className:"border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"aspect-square bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>Z(m.image),children:e.jsx("img",{src:m.image,alt:`X-ray ${_+1}`,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium text-sm",children:["Image ",_+1]}),e.jsx("p",{className:"text-xs text-gray-500 truncate",children:m.filename})]}),e.jsx("button",{onClick:()=>Z(m.image),className:"text-blue-600 hover:text-blue-800 text-sm",children:e.jsx(jt,{className:"w-4 h-4"})})]}),m.note&&e.jsx("p",{className:"text-sm text-gray-600",children:m.note})]})]},_))})]})]}):e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:e.jsx(Tt,{className:"w-8 h-8 text-gray-400"})}),e.jsx("p",{className:"text-gray-600",children:"No x-ray reports found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"You don't have any x-ray records yet"})]})]}),Q==="appointments"&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-6 flex items-center gap-2",children:[e.jsx(dt,{className:"w-5 h-5"}),"Appointments"]}),b.doctorAppointment?e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-xl text-gray-900",children:["Appointment #",b.doctorAppointment.appointmentNumber]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-2",children:[e.jsx("span",{className:`px-3 py-1 text-sm rounded-full ${b.doctorAppointment.status==="Completed"?"bg-green-100 text-green-800":b.doctorAppointment.status==="Pending"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:b.doctorAppointment.status}),e.jsxs("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:["Charges: Rs ",b.doctorAppointment.charges]})]})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:U(b.doctorAppointment.appointmentDate)})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Doctor"}),e.jsx("p",{className:"font-medium",children:b.doctorAppointment.doctorName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"License Number"}),e.jsx("p",{className:"font-mono font-medium",children:b.doctorAppointment.licenseNumber})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Appointment Date"}),e.jsx("p",{className:"font-medium",children:$(b.doctorAppointment.appointmentDate)})]})]})]}):e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:e.jsx(dt,{className:"w-8 h-8 text-gray-400"})}),e.jsx("p",{className:"text-gray-600",children:"No appointments found"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"You don't have any appointment records"})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(ma,{className:"w-5 h-5 text-red-600"}),"Emergency Contact"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Hospital Phone"}),e.jsx("p",{className:"font-medium",children:"+92 123 4567890"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Emergency"}),e.jsx("p",{className:"font-medium",children:"1122"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"Ambulance"}),e.jsx("p",{className:"font-medium",children:"1020"})]})]})]}),b.recommendedTests&&b.recommendedTests.length>0&&e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(vc,{className:"w-5 h-5 text-blue-600"}),"Recommended Tests"]}),e.jsx("div",{className:"space-y-3",children:b.recommendedTests.map((m,_)=>e.jsx("div",{children:m.tests.map((C,k)=>e.jsxs("div",{className:"mb-3 last:mb-0",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:C.testName}),e.jsx("p",{className:"text-xs text-gray-500",children:C.category})]}),e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${C.status==="Completed"?"bg-green-100 text-green-800":C.status==="Pending"?"bg-yellow-100 text-yellow-800":"bg-blue-100 text-blue-800"}`,children:C.status})]}),C.instructions&&e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:C.instructions})]},k))},_))})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-4",children:"Medical Summary"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Last Visit"}),e.jsx("span",{className:"text-sm font-medium",children:b.doctorAppointment?U(b.doctorAppointment.appointmentDate):"N/A"})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Last Prescription"}),e.jsx("span",{className:"text-sm font-medium",children:b.prescriptions?.length>0?U(b.prescriptions[b.prescriptions.length-1].prescribedDate):"N/A"})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Last Test"}),e.jsx("span",{className:"text-sm font-medium",children:v?U(v.performedDate):w?U(w.performedDate):"N/A"})]})})]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-4",children:"Quick Actions"}),e.jsx("div",{className:"space-y-3",children:e.jsxs("button",{onClick:J,className:"w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[e.jsx("span",{className:"font-medium",children:"Print Full Report"}),e.jsx(Et,{className:"w-4 h-4 text-gray-400"})]})})]})]})]}),e.jsxs("div",{className:"mt-8 text-center text-sm text-gray-500",children:[e.jsxs("p",{children:["Hospital Management System • Patient Portal • Last updated: ",new Date().toLocaleDateString()]}),e.jsx("p",{className:"mt-1",children:"For emergencies, call 1122 or visit the nearest hospital"})]})]})]}):e.jsx("div",{className:"min-h-screen text-black bg-gray-50 flex items-center justify-center p-4",children:e.jsxs("div",{className:"text-center max-w-md",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4",children:e.jsx(qe,{className:"w-8 h-8 text-red-600"})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Patient Not Found"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"We couldn't find your patient profile. Please contact hospital administration."}),e.jsx("div",{className:"text-sm text-gray-500",children:e.jsxs("p",{children:["Your User ID: ",e.jsx("span",{className:"font-mono",children:user?.uniqueId||"N/A"})]})})]})})}function O0(){const d=yt(),{createWalkInXrayRecord:o}=zs(),[p,u]=A.useState({name:"",gender:"male",age:"",phone:"",testName:"",category:"chest",priority:"routine",instructions:"",overallNotes:"",performedBy:"",performedDate:new Date().toISOString().split("T")[0]}),[j,N]=A.useState([{file:null,preview:null,filename:"",note:""}]),[W,B]=A.useState(!1),[H,R]=A.useState(null),V=[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"other",label:"Other"}],b=[{value:"chest",label:"Chest X-ray"},{value:"abdomen",label:"Abdomen X-ray"},{value:"spine",label:"Spine X-ray"},{value:"skull",label:"Skull X-ray"},{value:"extremities",label:"Extremities X-ray"},{value:"dental",label:"Dental X-ray"},{value:"mammography",label:"Mammography"},{value:"other",label:"Other"}],E=[{value:"emergency",label:"Emergency",color:"text-red-600 bg-red-50"},{value:"urgent",label:"Urgent",color:"text-orange-600 bg-orange-50"},{value:"routine",label:"Routine",color:"text-green-600 bg-green-50"}],v=L=>{const{name:U,value:$}=L.target;u(J=>({...J,[U]:$}))},ne=()=>{N([...j,{file:null,preview:null,filename:"",note:""}])},w=L=>{if(j.length>1){const U=[...j];U.splice(L,1),N(U)}},ae=(L,U)=>{if(!U)return;if(!["image/jpeg","image/jpg","image/png","image/bmp","image/dicom"].includes(U.type.toLowerCase())){alert("Please upload only image files (JPEG, PNG, BMP, DICOM)");return}if(U.size>10*1024*1024){alert("Image size should be less than 10MB");return}const J=[...j];J[L]={...J[L],file:U,preview:URL.createObjectURL(U),filename:U.name},N(J)},Q=(L,U)=>{const $=[...j];$[L].note=U,N($)},M=L=>{R(L)},z=()=>{const L=[];return p.name.trim()||L.push("Patient name is required"),p.age||L.push("Age is required"),p.testName.trim()||L.push("X-ray test name is required"),p.performedBy.trim()||L.push("Performed by (Technician name) is required"),j.some($=>$.file)||L.push("At least one X-ray image is required"),L},Z=async()=>{const L=z();if(L.length>0){alert(`Please fix the following errors:

${L.join(`
`)}`);return}B(!0);try{const U=new FormData;U.append("name",p.name),U.append("gender",p.gender),U.append("age",p.age),U.append("phone",p.phone||""),U.append("testName",p.testName),U.append("category",p.category),U.append("priority",p.priority),U.append("instructions",p.instructions),U.append("overallNotes",p.overallNotes),U.append("performedBy",p.performedBy),U.append("performedDate",p.performedDate),U.append("walkIn","true"),j.forEach((m,_)=>{m.file&&U.append("images",m.file)});const $=j.map(m=>m.note||"");U.append("notes",JSON.stringify($));const J=await o(U);J&&J.success?(alert("✅ Walk-in X-ray patient registered successfully!"),u({name:"",gender:"male",age:"",phone:"",testName:"",category:"chest",priority:"routine",instructions:"",overallNotes:"",performedBy:"",performedDate:new Date().toISOString().split("T")[0]}),N([{file:null,preview:null,filename:"",note:""}])):alert(`❌ Failed: ${J.error||"Unknown error"}`)}catch(U){console.error("🚨 Error registering walk-in patient:",U),alert(`Error: ${U.message||"Failed to register patient"}`)}finally{B(!1)}};return e.jsxs("div",{className:"min-h-screen bg-gray-50 text-black p-4 md:p-6",children:[e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>d(-1),className:"flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4",children:[e.jsx(px,{className:"w-5 h-5"}),"Back"]}),e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(Tt,{className:"w-8 h-8 text-blue-600"}),"Walk-in X-ray Patient Registration"]}),e.jsx("p",{className:"text-gray-600 mt-1",children:"Register new walk-in patients for X-ray tests"})]}),e.jsx("div",{className:"flex gap-3 mt-4 md:mt-0",children:e.jsxs("button",{onClick:()=>d("/xray"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2",children:[e.jsx(px,{className:"w-4 h-4"}),"Back to X-ray"]})})]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("h2",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-blue-600"}),"Patient Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Patient Name *"}),e.jsx("input",{type:"text",name:"name",value:p.name,onChange:v,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter patient full name",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Gender *"}),e.jsx("div",{className:"flex gap-4",children:V.map(L=>e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"gender",value:L.value,checked:p.gender===L.value,onChange:v,className:"w-4 h-4 text-blue-600"}),e.jsx("span",{className:"text-sm text-gray-700",children:L.label})]},L.value))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Age *"}),e.jsx("input",{type:"number",name:"age",value:p.age,onChange:v,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter age",min:"0",max:"120",required:!0})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[e.jsx(za,{className:"w-4 h-4 inline mr-1"}),"Phone Number (Optional)"]}),e.jsx("input",{type:"tel",name:"phone",value:p.phone,onChange:v,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"+92 300 1234567"})]})]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[e.jsxs("h2",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(l0,{className:"w-5 h-5 text-blue-600"}),"X-ray Test Details"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"X-ray Test Name *"}),e.jsx("input",{type:"text",name:"testName",value:p.testName,onChange:v,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"e.g., Chest PA View, Lumbar Spine X-ray",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Category *"}),e.jsx("select",{name:"category",value:p.category,onChange:v,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:b.map(L=>e.jsx("option",{value:L.value,children:L.label},L.value))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Priority *"}),e.jsx("div",{className:"flex gap-3",children:E.map(L=>e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"priority",value:L.value,checked:p.priority===L.value,onChange:v,className:"w-4 h-4"}),e.jsx("span",{className:`text-sm px-3 py-1 rounded-full ${L.color}`,children:L.label})]},L.value))})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[e.jsx(dt,{className:"w-4 h-4 inline mr-1"}),"Performed Date *"]}),e.jsx("input",{type:"date",name:"performedDate",value:p.performedDate,onChange:v,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Performed By (Technician) *"}),e.jsx("input",{type:"text",name:"performedBy",value:p.performedBy,onChange:v,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter technician name",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Instructions"}),e.jsx("textarea",{name:"instructions",value:p.instructions,onChange:v,rows:"3",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Any special instructions..."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Charges details"}),e.jsx("textarea",{name:"overallNotes",value:p.overallNotes,onChange:v,rows:"3",required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Charges details..."})]})]})]})]}),e.jsx("div",{className:"lg:col-span-1",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 sticky top-6",children:[e.jsxs("h2",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Ts,{className:"w-5 h-5 text-blue-600"}),"X-ray Images"]}),e.jsxs("div",{className:"space-y-4",children:[j.map((L,U)=>e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsxs("span",{className:"text-sm font-medium text-gray-700",children:["Image ",U+1]}),j.length>1&&e.jsx("button",{onClick:()=>w(U),className:"text-red-600 hover:text-red-800 text-sm",children:"Remove"})]}),L.preview?e.jsxs("div",{className:"mb-3",children:[e.jsx("div",{className:"w-full h-48 bg-gray-100 rounded-lg overflow-hidden cursor-pointer",onClick:()=>M(L.preview),children:e.jsx("img",{src:L.preview,alt:`X-ray ${U+1}`,className:"w-full h-full object-contain"})}),e.jsx("p",{className:"text-xs text-gray-500 mt-1 truncate",children:L.filename})]}):e.jsx("div",{className:"mb-3",children:e.jsxs("label",{className:"flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[e.jsx(bc,{className:"w-8 h-8 text-gray-400 mb-2"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Click to upload X-ray image"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"JPEG, PNG, BMP, DICOM (Max 10MB)"})]}),e.jsx("input",{type:"file",className:"hidden",accept:".jpg,.jpeg,.png,.bmp,.dcm",onChange:$=>ae(U,$.target.files[0])})]})}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Image Note (Optional)"}),e.jsx("textarea",{value:L.note,onChange:$=>Q(U,$.target.value),rows:"2",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",placeholder:"Note for this image..."})]})]},U)),e.jsxs("button",{onClick:ne,className:"w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors flex items-center justify-center gap-2",children:[e.jsx(bc,{className:"w-5 h-5"}),"Add Another Image"]})]}),e.jsx("button",{onClick:Z,disabled:W,className:"w-full mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:W?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),"Registering Patient..."]}):e.jsxs(e.Fragment,{children:[e.jsx(yc,{className:"w-5 h-5"}),"Register Walk-in Patient"]})}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 rounded-lg",children:e.jsxs("p",{className:"text-sm text-blue-700",children:[e.jsx("strong",{children:"Note:"})," Walk-in patients will be assigned a temporary ID and can be searched later using their phone number or assigned ID."]})})]})})]})]}),H&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",children:e.jsxs("div",{className:"bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden",children:[e.jsxs("div",{className:"flex justify-between items-center p-4 border-b",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"X-ray Image Preview"}),e.jsx("button",{onClick:()=>R(null),className:"text-gray-500 hover:text-gray-700",children:"✕"})]}),e.jsx("div",{className:"p-4 flex justify-center items-center h-[70vh]",children:e.jsx("img",{src:H,alt:"X-ray Preview",className:"max-w-full max-h-full object-contain"})})]})})]})}function B0(){const{getAllWalkInXrayRecords:d,deleteWalkInXrayRecord:o,searchWalkInXrayRecords:p,getWalkInXrayStatistics:u}=zs(),[j,N]=A.useState([]),[W,B]=A.useState(!1),[H,R]=A.useState(""),[V,b]=A.useState({dateFrom:"",dateTo:"",category:"",priority:""}),[E,v]=A.useState({currentPage:1,totalPages:1,totalRecords:0,limit:15}),[ne,w]=A.useState({totalWalkInXrays:0,todayWalkInXrays:0,monthlyStats:[],categories:[]}),[ae,Q]=A.useState(null),[M,z]=A.useState(!1),[Z,L]=A.useState(null),[U,$]=A.useState(!1),[J,m]=A.useState(null),[_,C]=A.useState(0);A.useEffect(()=>{k(),F()},[E.currentPage]);const k=async()=>{B(!0);try{const g=await d(E.currentPage,E.limit,{search:H,...V});g.records&&(N(g.records),v(g.pagination))}catch(g){console.error("Error fetching walk-in records:",g),xe.error("Failed to fetch records")}finally{B(!1)}},F=async()=>{try{const g=await u();console.log("Statistics API Response:",g),g&&g.data?w({totalWalkInXrays:g.data.totalRecords||0,todayWalkInXrays:g.data.todayRecords||0,monthlyStats:g.data.monthlyStats||[],categories:g.data.categoryStats||[]}):g&&w({totalWalkInXrays:g.totalRecords||0,todayWalkInXrays:g.todayRecords||0,monthlyStats:g.monthlyStats||[],categories:g.categoryStats||[]})}catch(g){console.error("Error fetching statistics:",g),w({totalWalkInXrays:0,todayWalkInXrays:0,monthlyStats:[],categories:[]})}},de=async()=>{B(!0),v(g=>({...g,currentPage:1}));try{const g=await p(H,{...V,page:1});g.records&&(N(g.records),v(g.pagination))}catch(g){console.error("Error searching records:",g),xe.error("Search failed")}finally{B(!1)}},I=()=>{R(""),b({dateFrom:"",dateTo:"",category:"",priority:""}),v(g=>({...g,currentPage:1})),k()},x=g=>{L(g),z(!0)},h=async()=>{Z&&await o(Z._id)&&(k(),F()),z(!1),L(null)},Y=g=>{Q(g)},S=(g,ce)=>{m(g),C(ce),$(!0)},f=()=>{if(ae&&ae.images){const g=(_+1)%ae.images.length;m(ae.images[g]),C(g)}},G=()=>{if(ae&&ae.images){const g=(_-1+ae.images.length)%ae.images.length;m(ae.images[g]),C(g)}},K=g=>new Date(g).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),re=g=>{switch(g){case"emergency":return e.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800",children:[e.jsx(ma,{className:"w-3 h-3 mr-1"}),"Emergency"]});case"urgent":return e.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800",children:[e.jsx(os,{className:"w-3 h-3 mr-1"}),"Urgent"]});default:return e.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",children:[e.jsx(bt,{className:"w-3 h-3 mr-1"}),"Routine"]})}},me=g=>{const ce={chest:"bg-blue-100 text-blue-800",abdomen:"bg-purple-100 text-purple-800",spine:"bg-amber-100 text-amber-800",skull:"bg-gray-100 text-gray-800",extremities:"bg-indigo-100 text-indigo-800",dental:"bg-cyan-100 text-cyan-800",mammography:"bg-pink-100 text-pink-800",other:"bg-gray-100 text-gray-800"};return ce[g]||ce.other},oe=g=>{navigator.clipboard.writeText(g),xe.success("Copied to clipboard!",{duration:2e3,position:"top-right"})},fe=()=>{const g=["ID","Name","Age","Gender","Phone","Test Name","Category","Priority","Date","Technician"],ce=j.map(Se=>[Se.patientUniqueId,Se.patientName,Se.age,Se.gender,Se.phone||"N/A",Se.testName,Se.category,Se.priority,K(Se.createdAt),Se.performedBy]),ue=[g.join(","),...ce.map(Se=>Se.map(je=>`"${je}"`).join(","))].join(`
`),De=new Blob([ue],{type:"text/csv"}),we=window.URL.createObjectURL(De),_e=document.createElement("a");_e.href=we,_e.download=`walkin-xray-records-${new Date().toISOString().split("T")[0]}.csv`,_e.click()},te=g=>{const ce=window.open("","_blank"),ue=g.images.map((De,we)=>`
    <div class="image-container" style="page-break-inside: avoid; margin-bottom: 20px;">
      <div class="image-info" style="margin-bottom: 10px;">
        <h4 style="margin: 0 0 5px 0;">Image ${we+1} - ${De.filename}</h4>
        ${De.note?`<p style="margin: 0; font-style: italic; color: #666;">Note: ${De.note}</p>`:""}
      </div>
      <img 
        src="${De.image}" 
        alt="X-ray Image ${we+1}" 
        style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 4px;"
        onload="this.classList.add('loaded')"
        onerror="this.style.display='none'; this.parentElement.innerHTML+='<p style=color:red>Image failed to load</p>'"
      />
      <p style="margin-top: 5px; font-size: 11px; color: #777;">
        Cloudinary ID: ${De.cloudinary_id} | Size: ${(De.size||0).toLocaleString()} bytes
      </p>
    </div>
  `).join("");ce.document.write(`
    <html>
      <head>
        <title>X-ray Report - ${g.patientName}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            padding: 30px;
            max-width: 1200px;
            margin: 0 auto;
            background: #fff;
          }
          
          /* Header Styles */
          .header {
            text-align: center;
            padding-bottom: 20px;
            margin-bottom: 30px;
            border-bottom: 3px solid #2563eb;
            position: relative;
          }
          
          .header h1 {
            color: #1e40af;
            font-size: 28px;
            margin-bottom: 10px;
            font-weight: 700;
          }
          
          .header .hospital-name {
            color: #2563eb;
            font-size: 18px;
            font-weight: 600;
          }
          
          .header .report-id {
            position: absolute;
            top: 0;
            right: 0;
            background: #f8fafc;
            padding: 8px 15px;
            border-radius: 6px;
            font-size: 14px;
            color: #475569;
            border: 1px solid #e2e8f0;
          }
          
          /* Section Styles */
          .section {
            margin-bottom: 30px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
          }
          
          .section h2 {
            color: #1e40af;
            font-size: 20px;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e2e8f0;
          }
          
          /* Grid Layout for Patient Info */
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 15px;
          }
          
          .info-item {
            padding: 10px;
            background: white;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
          }
          
          .info-item .label {
            font-weight: 600;
            color: #475569;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
          }
          
          .info-item .value {
            color: #1e293b;
            font-size: 16px;
            font-weight: 500;
          }
          
          /* Badge Styles */
          .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .badge-emergency {
            background: #fee2e2;
            color: #dc2626;
            border: 1px solid #fecaca;
          }
          
          .badge-urgent {
            background: #ffedd5;
            color: #ea580c;
            border: 1px solid #fed7aa;
          }
          
          .badge-routine {
            background: #dcfce7;
            color: #16a34a;
            border: 1px solid #bbf7d0;
          }
          
          /* Images Section */
          .images-section {
            page-break-inside: avoid;
          }
          
          .image-container {
            margin-bottom: 25px;
            padding: 15px;
            background: white;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          }
          
          .image-container img {
            max-width: 100%;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 6px;
            display: block;
            margin: 10px auto;
            max-height: 500px;
            object-fit: contain;
          }
          
          .image-info {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px dashed #e2e8f0;
          }
          
          .image-info h4 {
            color: #1e40af;
            margin-bottom: 5px;
          }
          
          /* Table Styles */
          .summary-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          }
          
          .summary-table th {
            background: #f1f5f9;
            color: #475569;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.5px;
            padding: 12px 15px;
            text-align: left;
            border-bottom: 2px solid #e2e8f0;
          }
          
          .summary-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #e2e8f0;
            color: #334155;
          }
          
          .summary-table tr:last-child td {
            border-bottom: none;
          }
          
          /* Footer */
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e2e8f0;
            text-align: center;
            color: #64748b;
            font-size: 13px;
          }
          
          .footer .disclaimer {
            font-style: italic;
            margin-bottom: 10px;
            color: #94a3b8;
          }
          
          .signature-section {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            padding-top: 20px;
            border-top: 1px dashed #e2e8f0;
          }
          
          .signature-box {
            text-align: center;
            min-width: 200px;
          }
          
          .signature-line {
            margin-top: 60px;
            border-top: 1px solid #000;
            width: 200px;
            display: inline-block;
          }
          
          /* Print-specific styles */
          @media print {
            body {
              padding: 20px;
            }
            
            .section {
              page-break-inside: avoid;
            }
            
            .image-container {
              page-break-inside: avoid;
              break-inside: avoid;
            }
            
            img {
              max-height: 400px !important;
            }
            
            .no-print {
              display: none;
            }
            
            .header {
              border-color: #000;
            }
          }
          
          /* Loading state for images */
          img:not(.loaded) {
            opacity: 0;
            height: 0;
          }
          
          .image-loading {
            text-align: center;
            padding: 20px;
            color: #64748b;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <!-- Header -->
        <div class="header">
          <div class="report-id">
            Report ID: ${g.patientUniqueId}
          </div>
          <h1>X-RAY DIAGNOSTIC REPORT</h1>
          <p class="hospital-name">HOSPITAL MANAGEMENT SYSTEM</p>
          <p style="color: #64748b; margin-top: 5px;">Medical Imaging Department</p>
        </div>
        
        <!-- Patient Information -->
        <div class="section">
          <h2>📋 PATIENT INFORMATION</h2>
          <div class="info-grid">
            <div class="info-item">
              <div class="label">Full Name</div>
              <div class="value">${g.patientName}</div>
            </div>
            <div class="info-item">
              <div class="label">Patient ID</div>
              <div class="value">${g.patientUniqueId}</div>
            </div>
            <div class="info-item">
              <div class="label">Age & Gender</div>
              <div class="value">${g.age} years, ${g.gender}</div>
            </div>
            ${g.phone?`
            <div class="info-item">
              <div class="label">Contact Number</div>
              <div class="value">${g.phone}</div>
            </div>
            `:""}
          </div>
        </div>
        
        <!-- Test Information -->
        <div class="section">
          <h2>🔬 TEST DETAILS</h2>
          <div class="info-grid">
            <div class="info-item">
              <div class="label">Test Name</div>
              <div class="value">${g.testName}</div>
            </div>
            <div class="info-item">
              <div class="label">Category</div>
              <div class="value" style="text-transform: capitalize;">${g.category}</div>
            </div>
            <div class="info-item">
              <div class="label">Priority</div>
              <div class="value">
                <span class="badge badge-${g.priority}">
                  ${g.priority}
                </span>
              </div>
            </div>
            <div class="info-item">
              <div class="label">Performed Date</div>
              <div class="value">${K(g.performedDate)}</div>
            </div>
          </div>
          
          ${g.instructions?`
          <div style="margin-top: 15px;">
            <div class="label" style="margin-bottom: 5px;">Special Instructions</div>
            <div class="value">${g.instructions}</div>
          </div>
          `:""}
          
          ${g.overallNotes?`
          <div style="margin-top: 15px;">
            <div class="label" style="margin-bottom: 5px;">Notes & Charges</div>
            <div class="value">${g.overallNotes}</div>
          </div>
          `:""}
        </div>
        
        <!-- X-ray Images Section -->
        <div class="section images-section">
          <h2>📷 X-RAY IMAGES (${g.images.length})</h2>
          <p style="color: #64748b; margin-bottom: 20px;">
            Below are the digital X-ray images captured during the procedure.
          </p>
          
          ${g.images.length>0?ue:`
          <div style="text-align: center; padding: 30px; background: #f8fafc; border-radius: 6px;">
            <p style="color: #64748b; font-style: italic;">No images available for this record.</p>
          </div>
          `}
          
          <!-- Images Summary Table -->
          <table class="summary-table">
            <thead>
              <tr>
                <th>Image #</th>
                <th>Filename</th>
                <th>Note</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${g.images.map((De,we)=>`
                <tr>
                  <td>${we+1}</td>
                  <td>${De.filename}</td>
                  <td>${De.note||"No note provided"}</td>
                  <td>
                    <span style="color: #16a34a; font-weight: 500;">✓ Available</span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        
        <!-- Technician & Metadata -->
        <div class="section">
          <h2>👨‍⚕️ TECHNICIAN INFORMATION</h2>
          <div class="info-grid">
            <div class="info-item">
              <div class="label">Performed By</div>
              <div class="value">${g.performedBy}</div>
            </div>
            <div class="info-item">
              <div class="label">Report Status</div>
              <div class="value">
                <span style="color: #16a34a; font-weight: 500;">${g.status}</span>
              </div>
            </div>
            <div class="info-item">
              <div class="label">Report Generated</div>
              <div class="value">${K(g.createdAt)}</div>
            </div>
            <div class="info-item">
              <div class="label">Report Printed</div>
              <div class="value">${new Date().toLocaleString()}</div>
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <p class="disclaimer">
            This is a computer-generated report. For digital verification, reference ID: ${g._id}
          </p>
          
          <div class="signature-section">
            <div class="signature-box">
              <p>________________________</p>
              <p>X-ray Technician</p>
              <p>${g.performedBy}</p>
            </div>
            
            <div class="signature-box">
              <p>________________________</p>
              <p>Hospital Stamp & Seal</p>
              <p>Medical Imaging Department</p>
            </div>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
            Report ID: ${g._id} | Generated by Hospital Management System v1.0
          </p>
          <p style="font-size: 11px; color: #cbd5e1;">
            This document contains confidential medical information. Unauthorized distribution is prohibited.
          </p>
        </div>
        
        <script>
          // Wait for all images to load before printing
          window.onload = function() {
            const images = document.querySelectorAll('img');
            let loadedCount = 0;
            const totalImages = images.length;
            
            if (totalImages === 0) {
              window.print();
              setTimeout(() => window.close(), 1500);
              return;
            }
            
            images.forEach(img => {
              if (img.complete) {
                img.classList.add('loaded');
                loadedCount++;
              } else {
                img.onload = function() {
                  this.classList.add('loaded');
                  loadedCount++;
                  checkAllLoaded();
                };
                img.onerror = function() {
                  loadedCount++;
                  this.parentElement.innerHTML += '<p style="color: #dc2626; font-style: italic;">Image failed to load</p>';
                  checkAllLoaded();
                };
              }
            });
            
            function checkAllLoaded() {
              if (loadedCount === totalImages) {
                // Small delay to ensure images are rendered
                setTimeout(() => {
                  window.print();
                  setTimeout(() => {
                    window.close();
                  }, 1500);
                }, 500);
              }
            }
            
            // Fallback timeout
            setTimeout(() => {
              window.print();
              setTimeout(() => window.close(), 1500);
            }, 5000);
          }
        <\/script>
      </body>
    </html>
  `),ce.document.close()};return e.jsxs("div",{className:"min-h-screen bg-gray-50 text-gray-900",children:[e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold text-gray-900 flex items-center gap-3",children:[e.jsx(qe,{className:"w-8 h-8 text-blue-600"}),"Walk-in X-ray Records Management"]}),e.jsx("p",{className:"text-gray-600 mt-2",children:"Manage all walk-in X-ray patient records, view reports, and handle operations"})]}),e.jsx("div",{className:"flex items-center gap-4 mt-4 md:mt-0",children:e.jsxs("button",{onClick:fe,className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2",children:[e.jsx(cs,{className:"w-4 h-4"}),"Export CSV"]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:[e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-6",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Total Records"}),e.jsx("p",{className:"text-3xl font-bold text-gray-900",children:ne.totalWalkInXrays})]}),e.jsx("div",{className:"p-3 bg-blue-100 rounded-lg",children:e.jsx(at,{className:"w-6 h-6 text-blue-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-6",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Today's Records"}),e.jsx("p",{className:"text-3xl font-bold text-gray-900",children:ne.todayWalkInXrays})]}),e.jsx("div",{className:"p-3 bg-green-100 rounded-lg",children:e.jsx(dt,{className:"w-6 h-6 text-green-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-6",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Categories"}),e.jsx("p",{className:"text-3xl font-bold text-gray-900",children:ne.categories?.length||0})]}),e.jsx("div",{className:"p-3 bg-purple-100 rounded-lg",children:e.jsx(n0,{className:"w-6 h-6 text-purple-600"})})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-sm p-6",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Last Updated"}),e.jsx("p",{className:"text-lg font-semibold text-gray-900",children:new Date().toLocaleDateString()})]}),e.jsx("div",{className:"p-3 bg-amber-100 rounded-lg",children:e.jsx(os,{className:"w-6 h-6 text-amber-600"})})]})})]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-8",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(An,{className:"w-5 h-5 text-gray-500"}),"Search & Filter Records"]}),e.jsxs("div",{className:"flex items-center gap-2 mt-4 md:mt-0",children:[e.jsxs("button",{onClick:de,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2",children:[e.jsx(kt,{className:"w-4 h-4"}),"Search"]}),e.jsx("button",{onClick:I,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300",children:"Reset"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Quick Search"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:H,onChange:g=>R(g.target.value),placeholder:"Name, ID, Phone, Test...",className:"w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),e.jsx(kt,{className:"absolute left-3 top-2.5 w-4 h-4 text-gray-400"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"From Date"}),e.jsx("input",{type:"date",value:V.dateFrom,onChange:g=>b({...V,dateFrom:g.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"To Date"}),e.jsx("input",{type:"date",value:V.dateTo,onChange:g=>b({...V,dateTo:g.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Category"}),e.jsxs("select",{value:V.category,onChange:g=>b({...V,category:g.target.value}),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"",children:"All Categories"}),e.jsx("option",{value:"chest",children:"Chest"}),e.jsx("option",{value:"abdomen",children:"Abdomen"}),e.jsx("option",{value:"spine",children:"Spine"}),e.jsx("option",{value:"skull",children:"Skull"}),e.jsx("option",{value:"extremities",children:"Extremities"}),e.jsx("option",{value:"dental",children:"Dental"}),e.jsx("option",{value:"mammography",children:"Mammography"}),e.jsx("option",{value:"other",children:"Other"})]})]})]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:[e.jsxs("div",{className:"px-6 py-4 border-b border-gray-200 flex items-center justify-between",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:["Walk-in X-ray Records (",E.totalRecords,")"]}),e.jsxs("div",{className:"text-sm text-gray-500",children:["Page ",E.currentPage," of ",E.totalPages]})]}),W?e.jsxs("div",{className:"p-8 text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"Loading records..."})]}):j.length===0?e.jsxs("div",{className:"p-8 text-center",children:[e.jsx(ma,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600 mb-2",children:"No walk-in X-ray records found"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Try adjusting your search or filters"})]}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Patient Details"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Test Information"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Images"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date & Status"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:j.map(g=>e.jsxs("tr",{className:"hover:bg-gray-50 transition-colors",children:[e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("p",{className:"font-semibold text-gray-900",children:g.patientName}),e.jsx("button",{onClick:()=>oe(g.patientUniqueId),className:"text-gray-400 hover:text-gray-600",title:"Copy ID",children:e.jsx(hx,{className:"w-3 h-3"})})]}),e.jsx("p",{className:"text-xs text-gray-500 mb-2 flex items-center gap-1",children:e.jsx("span",{className:"px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs",children:g.patientUniqueId})}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"text-sm text-gray-600",children:[e.jsx("span",{className:"font-medium",children:"Age:"})," ",g.age," years"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[e.jsx("span",{className:"font-medium",children:"Gender:"})," ",g.gender]}),g.phone&&e.jsxs("p",{className:"text-sm text-gray-600 flex items-center gap-1",children:[e.jsx(za,{className:"w-3 h-3"}),g.phone]})]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900 mb-1",children:g.testName}),e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${me(g.category)}`,children:g.category}),re(g.priority)]}),e.jsxs("div",{className:"space-y-1",children:[g.overallNotes&&e.jsxs("p",{className:"text-sm text-gray-600",children:[e.jsx("span",{className:"font-medium",children:"Charges:"})," ",g.overallNotes]}),g.instructions&&e.jsxs("p",{className:"text-sm text-gray-600",children:[e.jsx("span",{className:"font-medium",children:"Instructions:"})," ",g.instructions]})]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(Ts,{className:"w-4 h-4 text-gray-500"}),e.jsxs("span",{className:"text-sm font-medium text-gray-700",children:[g.images?.length||0," Images"]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[g.images?.slice(0,3).map((ce,ue)=>e.jsxs("button",{onClick:()=>{Q(g),S(ce,ue)},className:"relative group",children:[e.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-lg overflow-hidden border border-gray-300",children:e.jsx("img",{src:ce.image,alt:`X-ray ${ue+1}`,className:"w-full h-full object-cover"})}),e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center",children:e.jsx(i0,{className:"w-4 h-4 text-white opacity-0 group-hover:opacity-100"})})]},ue)),g.images?.length>3&&e.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center",children:e.jsxs("span",{className:"text-sm text-gray-600",children:["+",g.images.length-3]})})]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:"Performed Date"}),e.jsx("p",{className:"text-sm text-gray-600",children:K(g.performedDate)})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:"Technician"}),e.jsx("p",{className:"text-sm text-gray-600",children:g.performedBy})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:"Created"}),e.jsx("p",{className:"text-sm text-gray-600",children:K(g.createdAt)})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(bt,{className:"w-4 h-4 text-green-500"}),e.jsx("span",{className:"text-sm text-green-600 font-medium",children:g.status})]})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:()=>Y(g),className:"px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 text-sm font-medium flex items-center justify-center gap-2",children:[e.jsx(jt,{className:"w-4 h-4"}),"View Details"]}),e.jsxs("button",{onClick:()=>te(g),className:"px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 text-sm font-medium flex items-center justify-center gap-2",children:[e.jsx(Et,{className:"w-4 h-4"}),"Print Report"]}),e.jsxs("button",{onClick:()=>x(g),className:"px-3 py-1.5 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 text-sm font-medium flex items-center justify-center gap-2",children:[e.jsx(ua,{className:"w-4 h-4"}),"Delete"]})]})})]},g._id))})]})}),j.length>0&&e.jsx("div",{className:"px-6 py-4 border-t border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",(E.currentPage-1)*E.limit+1," to"," ",Math.min(E.currentPage*E.limit,E.totalRecords)," of"," ",E.totalRecords," records"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>v({...E,currentPage:E.currentPage-1}),disabled:E.currentPage===1,className:"px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 flex items-center gap-2",children:[e.jsx(rs,{className:"w-4 h-4"}),"Previous"]}),e.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:Math.min(5,E.totalPages)},(g,ce)=>{let ue;return E.totalPages<=5||E.currentPage<=3?ue=ce+1:E.currentPage>=E.totalPages-2?ue=E.totalPages-4+ce:ue=E.currentPage-2+ce,e.jsx("button",{onClick:()=>v({...E,currentPage:ue}),className:`px-3 py-2 rounded-lg ${E.currentPage===ue?"bg-blue-600 text-white":"border border-gray-300 text-gray-700 hover:bg-gray-50"}`,children:ue},ue)})}),e.jsxs("button",{onClick:()=>v({...E,currentPage:E.currentPage+1}),disabled:E.currentPage===E.totalPages,className:"px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 flex items-center gap-2",children:["Next",e.jsx(ks,{className:"w-4 h-4"})]})]})]})})]})]}),M&&Z&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:e.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full p-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"p-2 bg-red-100 rounded-lg",children:e.jsx(ma,{className:"w-6 h-6 text-red-600"})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Delete Record"})]}),e.jsxs("p",{className:"text-gray-600 mb-6",children:["Are you sure you want to delete the record for"," ",e.jsx("span",{className:"font-semibold",children:Z.patientName}),"?",e.jsx("br",{}),e.jsx("span",{className:"text-sm text-gray-500",children:"This will also delete all associated X-ray images."})]}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx("button",{onClick:()=>z(!1),className:"px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50",children:"Cancel"}),e.jsxs("button",{onClick:h,className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2",children:[e.jsx(ua,{className:"w-4 h-4"}),"Delete Record"]})]})]})}),U&&J&&ae&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4",children:e.jsxs("div",{className:"bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:["X-ray Image ",_+1," of ",ae.images.length]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[ae.patientName," - ",J.filename]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[J.note&&e.jsx("div",{className:"bg-blue-50 px-3 py-1 rounded-lg",children:e.jsxs("p",{className:"text-sm text-blue-700 flex items-center gap-1",children:[e.jsx(wl,{className:"w-3 h-3"}),J.note]})}),e.jsx("button",{onClick:()=>$(!1),className:"p-2 hover:bg-gray-100 rounded-lg",children:e.jsx(Ft,{className:"w-5 h-5 text-gray-500"})})]})]}),e.jsxs("div",{className:"relative p-4 flex items-center justify-center min-h-[60vh]",children:[e.jsx("button",{onClick:G,className:"absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70",children:e.jsx(rs,{className:"w-6 h-6"})}),e.jsx("div",{className:"max-w-full max-h-[60vh] overflow-auto",children:e.jsx("img",{src:J.image,alt:`X-ray ${_+1}`,className:"max-w-full max-h-full object-contain"})}),e.jsx("button",{onClick:f,className:"absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70",children:e.jsx(ks,{className:"w-6 h-6"})})]}),e.jsx("div",{className:"p-4 border-t",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsxs("p",{children:["Cloudinary ID: ",e.jsx("span",{className:"font-mono text-xs",children:J.cloudinary_id})]}),e.jsxs("p",{children:["Size: ",(J.size||0).toLocaleString()," bytes"]})]}),e.jsxs("button",{onClick:()=>window.open(J.image,"_blank"),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2",children:[e.jsx(r0,{className:"w-4 h-4"}),"Open in New Tab"]})]})})]})}),ae&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:e.jsxs("div",{className:"bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",children:[e.jsxs("div",{className:"sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Record Details"}),e.jsx("button",{onClick:()=>Q(null),className:"p-2 hover:bg-gray-100 rounded-lg",children:e.jsx(Ft,{className:"w-5 h-5 text-gray-500"})})]}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"bg-gray-50 rounded-xl p-6 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-blue-600"}),"Patient Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Full Name"}),e.jsx("p",{className:"font-medium text-gray-900",children:ae.patientName})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Walk-in ID"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:"font-medium text-gray-900 font-mono",children:ae.patientUniqueId}),e.jsx("button",{onClick:()=>oe(ae.patientUniqueId),className:"text-gray-400 hover:text-gray-600",children:e.jsx(hx,{className:"w-4 h-4"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Age & Gender"}),e.jsxs("p",{className:"font-medium text-gray-900",children:[ae.age," years, ",ae.gender]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Phone Number"}),e.jsx("p",{className:"font-medium text-gray-900",children:ae.phone||"Not provided"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 rounded-xl p-6 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(at,{className:"w-5 h-5 text-green-600"}),"Test Information"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Test Name"}),e.jsx("p",{className:"font-medium text-gray-900",children:ae.testName})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Category"}),e.jsx("span",{className:`inline-flex px-3 py-1 rounded-full text-sm ${me(ae.category)}`,children:ae.category})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Priority"}),re(ae.priority)]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Performed Date"}),e.jsx("p",{className:"font-medium text-gray-900",children:K(ae.performedDate)})]}),ae.instructions&&e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Instructions"}),e.jsx("p",{className:"font-medium text-gray-900",children:ae.instructions})]}),ae.overallNotes&&e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Charges Details"}),e.jsx("p",{className:"font-medium text-gray-900",children:ae.overallNotes})]})]})]}),e.jsxs("div",{className:"bg-gray-50 rounded-xl p-6 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Ts,{className:"w-5 h-5 text-purple-600"}),"X-ray Images (",ae.images?.length||0,")"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:ae.images?.map((g,ce)=>e.jsxs("div",{className:"border rounded-lg overflow-hidden bg-white",children:[e.jsx("div",{className:"h-48 cursor-pointer",onClick:()=>{m(g),C(ce),$(!0)},children:e.jsx("img",{src:g.image,alt:`X-ray ${ce+1}`,className:"w-full h-full object-cover hover:scale-105 transition-transform"})}),e.jsxs("div",{className:"p-3",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:g.filename}),g.note&&e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:g.note})]})]},ce))})]}),e.jsxs("div",{className:"bg-gray-50 rounded-xl p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(qe,{className:"w-5 h-5 text-amber-600"}),"Technician & Metadata"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Performed By"}),e.jsx("p",{className:"font-medium text-gray-900",children:ae.performedBy})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Status"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(bt,{className:"w-4 h-4 text-green-500"}),e.jsx("span",{className:"font-medium text-green-600",children:ae.status})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Record Created"}),e.jsx("p",{className:"font-medium text-gray-900",children:K(ae.createdAt)})]})]})]}),e.jsxs("div",{className:"mt-6 flex gap-3",children:[e.jsxs("button",{onClick:()=>te(ae),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2",children:[e.jsx(Et,{className:"w-4 h-4"}),"Print Full Report"]}),e.jsx("button",{onClick:()=>Q(null),className:"px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50",children:"Close"})]})]})]})})]})}const ct=({isAuth:d,userRole:o,allowedRoles:p,children:u})=>d?p.includes(o)?u:e.jsx(ca,{to:"/"}):e.jsx(ca,{to:"/"});function X0(){const{isAuth:d,checkAuth:o,isCheckingAuth:p,user:u}=gt();return A.useEffect(()=>{o()},[o]),p&&!d?e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsx(o0,{className:"size-10 animate-spin"})}):e.jsxs("div",{"data-theme":"retro",children:[e.jsxs(Gp,{children:[e.jsx(Ie,{path:"/",element:d?e.jsx(h0,{}):e.jsx(wx,{})}),e.jsx(Ie,{path:"/signup",element:d?e.jsx(ca,{to:"/"}):e.jsx(b0,{})}),e.jsx(Ie,{path:"/login",element:d?e.jsx(ca,{to:"/"}):e.jsx(y0,{})}),e.jsx(Ie,{path:"/verify-email",element:d?e.jsx(ca,{to:"/"}):e.jsx(v0,{})}),e.jsx(Ie,{path:"/forgot-password",element:d?e.jsx(ca,{to:"/"}):e.jsx(j0,{})}),e.jsx(Ie,{path:"/verify-forgot",element:d?e.jsx(ca,{to:"/"}):e.jsx(w0,{})}),e.jsx(Ie,{path:"/new-password",element:d?e.jsx(ca,{to:"/"}):e.jsx(N0,{})}),e.jsx(Ie,{path:"/persona-select",element:d?e.jsx(ca,{to:"/"}):e.jsx(wx,{})}),e.jsx(Ie,{path:"/profile",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Admin","Reception","Doctor","Lab","X-Ray","Pharmacy","Patient"],children:e.jsx(f0,{})})}),e.jsx(Ie,{path:"/admin-dashboard",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Admin"],children:e.jsx(D0,{})})}),e.jsx(Ie,{path:"/reception-dashboard",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Reception"],children:e.jsx(C0,{})})}),e.jsx(Ie,{path:"/doctor-dashboard",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Doctor"],children:e.jsx(S0,{})})}),e.jsx(Ie,{path:"/medicine",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Doctor"],children:e.jsx(z0,{})})}),e.jsx(Ie,{path:"/recommendTest",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Doctor"],children:e.jsx(M0,{})})}),e.jsx(Ie,{path:"/recommendXray",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Doctor"],children:e.jsx(P0,{})})}),e.jsx(Ie,{path:"/pharmacyRecords",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Pharmacy"],children:e.jsx(U0,{})})}),e.jsx(Ie,{path:"/WalkInRecords",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Pharmacy"],children:e.jsx($0,{})})}),e.jsx(Ie,{path:"/labTest",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Lab"],children:e.jsx(q0,{})})}),e.jsx(Ie,{path:"/xrayTest",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["X-Ray"],children:e.jsx(_0,{})})}),e.jsx(Ie,{path:"/patientDetailsByDoctor",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Doctor"],children:e.jsx(L0,{})})}),e.jsx(Ie,{path:"/walkin-registration",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["X-Ray"],children:e.jsx(O0,{})})}),e.jsx(Ie,{path:"/walkin-record",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["X-Ray"],children:e.jsx(B0,{})})}),e.jsx(Ie,{path:"/lab-dashboard",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Lab"],children:e.jsx(T0,{})})}),e.jsx(Ie,{path:"/xray-dashboard",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["X-Ray"],children:e.jsx(R0,{})})}),e.jsx(Ie,{path:"/pharmacy-dashboard",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Pharmacy"],children:e.jsx(k0,{})})}),e.jsx(Ie,{path:"/patient-dashboard",element:e.jsx(ct,{isAuth:d,userRole:u?.role,allowedRoles:["Patient"],children:e.jsx(E0,{})})}),e.jsx(Ie,{path:"*",element:e.jsx(ca,{to:"/"})})]}),e.jsx(Zp,{})]})}p0.createRoot(document.getElementById("root")).render(e.jsx(Hp,{children:e.jsx(A.StrictMode,{children:e.jsx(X0,{})})}));
