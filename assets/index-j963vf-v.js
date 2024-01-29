(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();/**
* @vue/shared v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ql(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const ct={},br=[],on=()=>{},Em=()=>!1,Ys=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ec=t=>t.startsWith("onUpdate:"),Dt=Object.assign,tc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Mm=Object.prototype.hasOwnProperty,Qe=(t,e)=>Mm.call(t,e),ze=Array.isArray,Tr=t=>$s(t)==="[object Map]",Vd=t=>$s(t)==="[object Set]",We=t=>typeof t=="function",St=t=>typeof t=="string",Gr=t=>typeof t=="symbol",ut=t=>t!==null&&typeof t=="object",Wd=t=>(ut(t)||We(t))&&We(t.then)&&We(t.catch),Xd=Object.prototype.toString,$s=t=>Xd.call(t),bm=t=>$s(t).slice(8,-1),Yd=t=>$s(t)==="[object Object]",nc=t=>St(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ss=Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),js=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Tm=/-(\w)/g,wn=js(t=>t.replace(Tm,(e,n)=>n?n.toUpperCase():"")),Am=/\B([A-Z])/g,Vr=js(t=>t.replace(Am,"-$1").toLowerCase()),qs=js(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mo=js(t=>t?`on${qs(t)}`:""),mi=(t,e)=>!Object.is(t,e),bo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Rs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wm=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zc;const $d=()=>Zc||(Zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ic(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=St(i)?Lm(i):ic(i);if(r)for(const a in r)e[a]=r[a]}return e}else if(St(t)||ut(t))return t}const Rm=/;(?![^(]*\))/g,Cm=/:([^]+)/,Pm=/\/\*[^]*?\*\//g;function Lm(t){const e={};return t.replace(Pm,"").split(Rm).forEach(n=>{if(n){const i=n.split(Cm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wr(t){let e="";if(St(t))e=t;else if(ze(t))for(let n=0;n<t.length;n++){const i=Wr(t[n]);i&&(e+=i+" ")}else if(ut(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Dm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Im=Ql(Dm);function jd(t){return!!t||t===""}const Fn=t=>St(t)?t:t==null?"":ze(t)||ut(t)&&(t.toString===Xd||!We(t.toString))?JSON.stringify(t,qd,2):String(t),qd=(t,e)=>e&&e.__v_isRef?qd(t,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],a)=>(n[To(i,a)+" =>"]=r,n),{})}:Vd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>To(n))}:Gr(e)?To(e):ut(e)&&!ze(e)&&!Yd(e)?String(e):e,To=(t,e="")=>{var n;return Gr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fn;class Um{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=fn;try{return fn=this,e()}finally{fn=n}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Nm(t,e=fn){e&&e.active&&e.effects.push(t)}function Om(){return fn}let Ni;class rc{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Nm(this,r)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,ji();for(const e of this.deps)if(e.computed&&(Fm(e.computed),this._dirtyLevel>=2))break;qi(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ui,n=Ni;try{return ui=!0,Ni=this,this._runnings++,Jc(this),this.fn()}finally{Qc(this),this._runnings--,Ni=n,ui=e}}stop(){var e;this.active&&(Jc(this),Qc(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Fm(t){return t.value}function Jc(t){t._trackId++,t._depsLength=0}function Qc(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Kd(t.deps[e],t);t.deps.length=t._depsLength}}function Kd(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ui=!0,gl=0;const Zd=[];function ji(){Zd.push(ui),ui=!1}function qi(){const t=Zd.pop();ui=t===void 0?!0:t}function ac(){gl++}function sc(){for(gl--;!gl&&_l.length;)_l.shift()()}function Jd(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Kd(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const _l=[];function Qd(t,e,n){ac();for(const i of t.keys())if(!(!i.allowRecurse&&i._runnings)&&i._dirtyLevel<e&&(!i._runnings||e!==2)){const r=i._dirtyLevel;i._dirtyLevel=e,r===0&&(!i._queryings||e!==2)&&(i.trigger(),i.scheduler&&_l.push(i.scheduler))}sc()}const eh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},vl=new WeakMap,Oi=Symbol(""),xl=Symbol("");function jt(t,e,n){if(ui&&Ni){let i=vl.get(t);i||vl.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=eh(()=>i.delete(n))),Jd(Ni,r)}}function Hn(t,e,n,i,r,a){const o=vl.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&ze(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Gr(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":ze(t)?nc(n)&&s.push(o.get("length")):(s.push(o.get(Oi)),Tr(t)&&s.push(o.get(xl)));break;case"delete":ze(t)||(s.push(o.get(Oi)),Tr(t)&&s.push(o.get(xl)));break;case"set":Tr(t)&&s.push(o.get(Oi));break}ac();for(const l of s)l&&Qd(l,3);sc()}const Bm=Ql("__proto__,__v_isRef,__isVue"),th=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gr)),eu=km();function km(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=tt(this);for(let a=0,o=this.length;a<o;a++)jt(i,"get",a+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(tt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ji(),ac();const i=tt(this)[e].apply(this,n);return sc(),qi(),i}}),t}function zm(t){const e=tt(this);return jt(e,"has",t),e.hasOwnProperty(t)}class nh{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const r=this._isReadonly,a=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return a;if(n==="__v_raw")return i===(r?a?Qm:sh:a?ah:rh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!r){if(o&&Qe(eu,n))return Reflect.get(eu,n,i);if(n==="hasOwnProperty")return zm}const s=Reflect.get(e,n,i);return(Gr(n)?th.has(n):Bm(n))||(r||jt(e,"get",n),a)?s:qt(s)?o&&nc(n)?s:s.value:ut(s)?r?lh(s):Zs(s):s}}class ih extends nh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let a=e[n];if(!this._shallow){const l=Dr(a);if(!Cs(i)&&!Dr(i)&&(a=tt(a),i=tt(i)),!ze(e)&&qt(a)&&!qt(i))return l?!1:(a.value=i,!0)}const o=ze(e)&&nc(n)?Number(n)<e.length:Qe(e,n),s=Reflect.set(e,n,i,r);return e===tt(r)&&(o?mi(i,a)&&Hn(e,"set",n,i):Hn(e,"add",n,i)),s}deleteProperty(e,n){const i=Qe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Hn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Gr(n)||!th.has(n))&&jt(e,"has",n),i}ownKeys(e){return jt(e,"iterate",ze(e)?"length":Oi),Reflect.ownKeys(e)}}class Hm extends nh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gm=new ih,Vm=new Hm,Wm=new ih(!0),oc=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function Oa(t,e,n=!1,i=!1){t=t.__v_raw;const r=tt(t),a=tt(e);n||(mi(e,a)&&jt(r,"get",e),jt(r,"get",a));const{has:o}=Ks(r),s=i?oc:n?uc:ma;if(o.call(r,e))return s(t.get(e));if(o.call(r,a))return s(t.get(a));t!==r&&t.get(e)}function Fa(t,e=!1){const n=this.__v_raw,i=tt(n),r=tt(t);return e||(mi(t,r)&&jt(i,"has",t),jt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ba(t,e=!1){return t=t.__v_raw,!e&&jt(tt(t),"iterate",Oi),Reflect.get(t,"size",t)}function tu(t){t=tt(t);const e=tt(this);return Ks(e).has.call(e,t)||(e.add(t),Hn(e,"add",t,t)),this}function nu(t,e){e=tt(e);const n=tt(this),{has:i,get:r}=Ks(n);let a=i.call(n,t);a||(t=tt(t),a=i.call(n,t));const o=r.call(n,t);return n.set(t,e),a?mi(e,o)&&Hn(n,"set",t,e):Hn(n,"add",t,e),this}function iu(t){const e=tt(this),{has:n,get:i}=Ks(e);let r=n.call(e,t);r||(t=tt(t),r=n.call(e,t)),i&&i.call(e,t);const a=e.delete(t);return r&&Hn(e,"delete",t,void 0),a}function ru(){const t=tt(this),e=t.size!==0,n=t.clear();return e&&Hn(t,"clear",void 0,void 0),n}function ka(t,e){return function(i,r){const a=this,o=a.__v_raw,s=tt(o),l=e?oc:t?uc:ma;return!t&&jt(s,"iterate",Oi),o.forEach((c,u)=>i.call(r,l(c),l(u),a))}}function za(t,e,n){return function(...i){const r=this.__v_raw,a=tt(r),o=Tr(a),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?oc:e?uc:ma;return!e&&jt(a,"iterate",l?xl:Oi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:s?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function qn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xm(){const t={get(a){return Oa(this,a)},get size(){return Ba(this)},has:Fa,add:tu,set:nu,delete:iu,clear:ru,forEach:ka(!1,!1)},e={get(a){return Oa(this,a,!1,!0)},get size(){return Ba(this)},has:Fa,add:tu,set:nu,delete:iu,clear:ru,forEach:ka(!1,!0)},n={get(a){return Oa(this,a,!0)},get size(){return Ba(this,!0)},has(a){return Fa.call(this,a,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:ka(!0,!1)},i={get(a){return Oa(this,a,!0,!0)},get size(){return Ba(this,!0)},has(a){return Fa.call(this,a,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:ka(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=za(a,!1,!1),n[a]=za(a,!0,!1),e[a]=za(a,!1,!0),i[a]=za(a,!0,!0)}),[t,n,e,i]}const[Ym,$m,jm,qm]=Xm();function lc(t,e){const n=e?t?qm:jm:t?$m:Ym;return(i,r,a)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Qe(n,r)&&r in i?n:i,r,a)}const Km={get:lc(!1,!1)},Zm={get:lc(!1,!0)},Jm={get:lc(!0,!1)},rh=new WeakMap,ah=new WeakMap,sh=new WeakMap,Qm=new WeakMap;function eg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tg(t){return t.__v_skip||!Object.isExtensible(t)?0:eg(bm(t))}function Zs(t){return Dr(t)?t:cc(t,!1,Gm,Km,rh)}function oh(t){return cc(t,!1,Wm,Zm,ah)}function lh(t){return cc(t,!0,Vm,Jm,sh)}function cc(t,e,n,i,r){if(!ut(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=r.get(t);if(a)return a;const o=tg(t);if(o===0)return t;const s=new Proxy(t,o===2?i:n);return r.set(t,s),s}function Ar(t){return Dr(t)?Ar(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function Cs(t){return!!(t&&t.__v_isShallow)}function ch(t){return Ar(t)||Dr(t)}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function uh(t){return Rs(t,"__v_skip",!0),t}const ma=t=>ut(t)?Zs(t):t,uc=t=>ut(t)?lh(t):t;class fh{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new rc(()=>e(this._value),()=>yl(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=tt(this);return dh(e),(!e._cacheable||e.effect.dirty)&&mi(e._value,e._value=e.effect.run())&&yl(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ng(t,e,n=!1){let i,r;const a=We(t);return a?(i=t,r=on):(i=t.get,r=t.set),new fh(i,r,a||!r,n)}function dh(t){ui&&Ni&&(t=tt(t),Jd(Ni,t.dep||(t.dep=eh(()=>t.dep=void 0,t instanceof fh?t:void 0))))}function yl(t,e=3,n){t=tt(t);const i=t.dep;i&&Qd(i,e)}function qt(t){return!!(t&&t.__v_isRef===!0)}function ig(t){return hh(t,!1)}function rg(t){return hh(t,!0)}function hh(t,e){return qt(t)?t:new ag(t,e)}class ag{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:tt(e),this._value=n?e:ma(e)}get value(){return dh(this),this._value}set value(e){const n=this.__v_isShallow||Cs(e)||Dr(e);e=n?e:tt(e),mi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ma(e),yl(this,3))}}function wr(t){return qt(t)?t.value:t}const sg={get:(t,e,n)=>wr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return qt(r)&&!qt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function ph(t){return Ar(t)?t:new Proxy(t,sg)}/**
* @vue/runtime-core v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(a){Js(a,e,n)}return r}function _n(t,e,n,i){if(We(t)){const a=fi(t,e,n,i);return a&&Wd(a)&&a.catch(o=>{Js(o,e,n)}),a}const r=[];for(let a=0;a<t.length;a++)r.push(_n(t[a],e,n,i));return r}function Js(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let a=e.parent;const o=e.proxy,s=`https://vuejs.org/errors/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}a=a.parent}const l=e.appContext.config.errorHandler;if(l){fi(l,null,10,[t,o,s]);return}}og(t,n,r,i)}function og(t,e,n,i=!0){console.error(t)}let ga=!1,Sl=!1;const Ft=[];let Mn=0;const Rr=[];let ii=null,Ci=0;const mh=Promise.resolve();let fc=null;function gh(t){const e=fc||mh;return t?e.then(this?t.bind(this):t):e}function lg(t){let e=Mn+1,n=Ft.length;for(;e<n;){const i=e+n>>>1,r=Ft[i],a=_a(r);a<t||a===t&&r.pre?e=i+1:n=i}return e}function dc(t){(!Ft.length||!Ft.includes(t,ga&&t.allowRecurse?Mn+1:Mn))&&(t.id==null?Ft.push(t):Ft.splice(lg(t.id),0,t),_h())}function _h(){!ga&&!Sl&&(Sl=!0,fc=mh.then(xh))}function cg(t){const e=Ft.indexOf(t);e>Mn&&Ft.splice(e,1)}function ug(t){ze(t)?Rr.push(...t):(!ii||!ii.includes(t,t.allowRecurse?Ci+1:Ci))&&Rr.push(t),_h()}function au(t,e,n=ga?Mn+1:0){for(;n<Ft.length;n++){const i=Ft[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Ft.splice(n,1),n--,i()}}}function vh(t){if(Rr.length){const e=[...new Set(Rr)].sort((n,i)=>_a(n)-_a(i));if(Rr.length=0,ii){ii.push(...e);return}for(ii=e,Ci=0;Ci<ii.length;Ci++)ii[Ci]();ii=null,Ci=0}}const _a=t=>t.id==null?1/0:t.id,fg=(t,e)=>{const n=_a(t)-_a(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function xh(t){Sl=!1,ga=!0,Ft.sort(fg);try{for(Mn=0;Mn<Ft.length;Mn++){const e=Ft[Mn];e&&e.active!==!1&&fi(e,null,14)}}finally{Mn=0,Ft.length=0,vh(),ga=!1,fc=null,(Ft.length||Rr.length)&&xh()}}function dg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ct;let r=n;const a=e.startsWith("update:"),o=a&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||ct;d&&(r=n.map(p=>St(p)?p.trim():p)),f&&(r=n.map(wm))}let s,l=i[s=Mo(e)]||i[s=Mo(wn(e))];!l&&a&&(l=i[s=Mo(Vr(e))]),l&&_n(l,t,6,r);const c=i[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,_n(c,t,6,r)}}function yh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const a=t.emits;let o={},s=!1;if(!We(t)){const l=c=>{const u=yh(c,e,!0);u&&(s=!0,Dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!a&&!s?(ut(t)&&i.set(t,null),null):(ze(a)?a.forEach(l=>o[l]=null):Dt(o,a),ut(t)&&i.set(t,o),o)}function Qs(t,e){return!t||!Ys(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(t,e[0].toLowerCase()+e.slice(1))||Qe(t,Vr(e))||Qe(t,e))}let Vt=null,eo=null;function Ps(t){const e=Vt;return Vt=t,eo=t&&t.type.__scopeId||null,e}function to(t){eo=t}function no(){eo=null}function hc(t,e=Vt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&gu(-1);const a=Ps(e);let o;try{o=t(...r)}finally{Ps(a),i._d&&gu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ao(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:a,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:_,inheritAttrs:v}=t;let m,h;const S=Ps(t);try{if(n.shapeFlag&4){const A=r||i,I=A;m=Sn(u.call(I,A,f,a,p,d,_)),h=l}else{const A=e;m=Sn(A.length>1?A(a,{attrs:l,slots:s,emit:c}):A(a,null)),h=e.props?l:hg(l)}}catch(A){oa.length=0,Js(A,t,1),m=yt(Ir)}let y=m;if(h&&v!==!1){const A=Object.keys(h),{shapeFlag:I}=y;A.length&&I&7&&(o&&A.some(ec)&&(h=pg(h,o)),y=Ur(y,h))}return n.dirs&&(y=Ur(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),m=y,Ps(S),m}const hg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ys(n))&&((e||(e={}))[n]=t[n]);return e},pg=(t,e)=>{const n={};for(const i in t)(!ec(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function mg(t,e,n){const{props:i,children:r,component:a}=t,{props:o,children:s,patchFlag:l}=e,c=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?su(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Qs(c,d))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:i===o?!1:i?o?su(i,o,c):!0:!!o;return!1}function su(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const a=i[r];if(e[a]!==t[a]&&!Qs(n,a))return!0}return!1}function gg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Sh="components";function Pi(t,e){return vg(Sh,t,!0,e)||t}const _g=Symbol.for("v-ndc");function vg(t,e,n=!0,i=!1){const r=Vt||Bt;if(r){const a=r.type;if(t===Sh){const s=d_(a,!1);if(s&&(s===e||s===wn(e)||s===qs(wn(e))))return a}const o=ou(r[t]||a[t],e)||ou(r.appContext[t],e);return!o&&i?a:o}}function ou(t,e){return t&&(t[e]||t[wn(e)]||t[qs(wn(e))])}const xg=t=>t.__isSuspense;function yg(t,e){e&&e.pendingBranch?ze(t)?e.effects.push(...t):e.effects.push(t):ug(t)}const Sg=Symbol.for("v-scx"),Eg=()=>Gn(Sg),Ha={};function ra(t,e,n){return Eh(t,e,n)}function Eh(t,e,{immediate:n,deep:i,flush:r,once:a,onTrack:o,onTrigger:s}=ct){if(e&&a){const C=e;e=(...P)=>{C(...P),I()}}const l=Bt,c=C=>i===!0?C:xr(C,i===!1?1:void 0);let u,f=!1,d=!1;if(qt(t)?(u=()=>t.value,f=Cs(t)):Ar(t)?(u=()=>c(t),f=!0):ze(t)?(d=!0,f=t.some(C=>Ar(C)||Cs(C)),u=()=>t.map(C=>{if(qt(C))return C.value;if(Ar(C))return c(C);if(We(C))return fi(C,l,2)})):We(t)?e?u=()=>fi(t,l,2):u=()=>(p&&p(),_n(t,l,3,[_])):u=on,e&&i){const C=u;u=()=>xr(C())}let p,_=C=>{p=y.onStop=()=>{fi(C,l,4),p=y.onStop=void 0}},v;if(so)if(_=on,e?n&&_n(e,l,3,[u(),d?[]:void 0,_]):u(),r==="sync"){const C=Eg();v=C.__watcherHandles||(C.__watcherHandles=[])}else return on;let m=d?new Array(t.length).fill(Ha):Ha;const h=()=>{if(!(!y.active||!y.dirty))if(e){const C=y.run();(i||f||(d?C.some((P,se)=>mi(P,m[se])):mi(C,m)))&&(p&&p(),_n(e,l,3,[C,m===Ha?void 0:d&&m[0]===Ha?[]:m,_]),m=C)}else y.run()};h.allowRecurse=!!e;let S;r==="sync"?S=h:r==="post"?S=()=>Xt(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),S=()=>dc(h));const y=new rc(u,on,S),A=Om(),I=()=>{y.stop(),A&&tc(A.effects,y)};return e?n?h():m=y.run():r==="post"?Xt(y.run.bind(y),l&&l.suspense):y.run(),v&&v.push(I),I}function Mg(t,e,n){const i=this.proxy,r=St(t)?t.includes(".")?Mh(i,t):()=>i[t]:t.bind(i,i);let a;We(e)?a=e:(a=e.handler,n=e);const o=Ca(this),s=Eh(r,a.bind(i),n);return o(),s}function Mh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function xr(t,e,n=0,i){if(!ut(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),qt(t))xr(t.value,e,n,i);else if(ze(t))for(let r=0;r<t.length;r++)xr(t[r],e,n,i);else if(Vd(t)||Tr(t))t.forEach(r=>{xr(r,e,n,i)});else if(Yd(t))for(const r in t)xr(t[r],e,n,i);return t}function Ei(t,e,n,i){const r=t.dirs,a=e&&e.dirs;for(let o=0;o<r.length;o++){const s=r[o];a&&(s.oldValue=a[o].value);let l=s.dir[i];l&&(ji(),_n(l,n,8,[t.el,s,t,e]),qi())}}/*! #__NO_SIDE_EFFECTS__ */function pc(t,e){return We(t)?Dt({name:t.name},e,{setup:t}):t}const aa=t=>!!t.type.__asyncLoader,bh=t=>t.type.__isKeepAlive;function bg(t,e){Th(t,"a",e)}function Tg(t,e){Th(t,"da",e)}function Th(t,e,n=Bt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(io(e,i,n),n){let r=n.parent;for(;r&&r.parent;)bh(r.parent.vnode)&&Ag(i,e,n,r),r=r.parent}}function Ag(t,e,n,i){const r=io(e,t,i,!0);Ah(()=>{tc(i[e],r)},n)}function io(t,e,n=Bt,i=!1){if(n){const r=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ji();const s=Ca(n),l=_n(e,n,t,o);return s(),qi(),l});return i?r.unshift(a):r.push(a),a}}const $n=t=>(e,n=Bt)=>(!so||t==="sp")&&io(t,(...i)=>e(...i),n),wg=$n("bm"),Rg=$n("m"),Cg=$n("bu"),Pg=$n("u"),Lg=$n("bum"),Ah=$n("um"),Dg=$n("sp"),Ig=$n("rtg"),Ug=$n("rtc");function Ng(t,e=Bt){io("ec",t,e)}function Hi(t,e,n,i){let r;const a=n&&n[i];if(ze(t)||St(t)){r=new Array(t.length);for(let o=0,s=t.length;o<s;o++)r[o]=e(t[o],o,void 0,a&&a[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,a&&a[o])}else if(ut(t))if(t[Symbol.iterator])r=Array.from(t,(o,s)=>e(o,s,void 0,a&&a[s]));else{const o=Object.keys(t);r=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];r[s]=e(t[c],c,s,a&&a[s])}}else r=[];return n&&(n[i]=r),r}function wh(t,e,n={},i,r){if(Vt.isCE||Vt.parent&&aa(Vt.parent)&&Vt.parent.isCE)return e!=="default"&&(n.name=e),yt("slot",n,i&&i());let a=t[e];a&&a._c&&(a._d=!1),ot();const o=a&&Rh(a(n)),s=_c(wt,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),a&&a._c&&(a._d=!0),s}function Rh(t){return t.some(e=>Is(e)?!(e.type===Ir||e.type===wt&&!Rh(e.children)):!0)?t:null}const El=t=>t?zh(t)?xc(t)||t.proxy:El(t.parent):null,sa=Dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>El(t.parent),$root:t=>El(t.root),$emit:t=>t.emit,$options:t=>mc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,dc(t.update)}),$nextTick:t=>t.n||(t.n=gh.bind(t.proxy)),$watch:t=>Mg.bind(t)}),wo=(t,e)=>t!==ct&&!t.__isScriptSetup&&Qe(t,e),Og={get({_:t},e){const{ctx:n,setupState:i,data:r,props:a,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return a[e]}else{if(wo(i,e))return o[e]=1,i[e];if(r!==ct&&Qe(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Qe(c,e))return o[e]=3,a[e];if(n!==ct&&Qe(n,e))return o[e]=4,n[e];Ml&&(o[e]=0)}}const u=sa[e];let f,d;if(u)return e==="$attrs"&&jt(t,"get",e),u(t);if((f=s.__cssModules)&&(f=f[e]))return f;if(n!==ct&&Qe(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Qe(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:a}=t;return wo(r,e)?(r[e]=n,!0):i!==ct&&Qe(i,e)?(i[e]=n,!0):Qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:a}},o){let s;return!!n[o]||t!==ct&&Qe(t,o)||wo(e,o)||(s=a[0])&&Qe(s,o)||Qe(i,o)||Qe(sa,o)||Qe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lu(t){return ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ml=!0;function Fg(t){const e=mc(t),n=t.proxy,i=t.ctx;Ml=!1,e.beforeCreate&&cu(e.beforeCreate,t,"bc");const{data:r,computed:a,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:S,destroyed:y,unmounted:A,render:I,renderTracked:C,renderTriggered:P,errorCaptured:se,serverPrefetch:E,expose:R,inheritAttrs:Q,components:ne,directives:_e,filters:O}=e;if(c&&Bg(c,i,null),o)for(const J in o){const q=o[J];We(q)&&(i[J]=q.bind(n))}if(r){const J=r.call(n,n);ut(J)&&(t.data=Zs(J))}if(Ml=!0,a)for(const J in a){const q=a[J],ae=We(q)?q.bind(n,n):We(q.get)?q.get.bind(n,n):on,le=!We(q)&&We(q.set)?q.set.bind(n):on,me=Ct({get:ae,set:le});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>me.value,set:pe=>me.value=pe})}if(s)for(const J in s)Ch(s[J],i,n,J);if(l){const J=We(l)?l.call(n):l;Reflect.ownKeys(J).forEach(q=>{Es(q,J[q])})}u&&cu(u,t,"c");function X(J,q){ze(q)?q.forEach(ae=>J(ae.bind(n))):q&&J(q.bind(n))}if(X(wg,f),X(Rg,d),X(Cg,p),X(Pg,_),X(bg,v),X(Tg,m),X(Ng,se),X(Ug,C),X(Ig,P),X(Lg,S),X(Ah,A),X(Dg,E),ze(R))if(R.length){const J=t.exposed||(t.exposed={});R.forEach(q=>{Object.defineProperty(J,q,{get:()=>n[q],set:ae=>n[q]=ae})})}else t.exposed||(t.exposed={});I&&t.render===on&&(t.render=I),Q!=null&&(t.inheritAttrs=Q),ne&&(t.components=ne),_e&&(t.directives=_e)}function Bg(t,e,n=on){ze(t)&&(t=bl(t));for(const i in t){const r=t[i];let a;ut(r)?"default"in r?a=Gn(r.from||i,r.default,!0):a=Gn(r.from||i):a=Gn(r),qt(a)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[i]=a}}function cu(t,e,n){_n(ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ch(t,e,n,i){const r=i.includes(".")?Mh(n,i):()=>n[i];if(St(t)){const a=e[t];We(a)&&ra(r,a)}else if(We(t))ra(r,t.bind(n));else if(ut(t))if(ze(t))t.forEach(a=>Ch(a,e,n,i));else{const a=We(t.handler)?t.handler.bind(n):e[t.handler];We(a)&&ra(r,a,t)}}function mc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:a,config:{optionMergeStrategies:o}}=t.appContext,s=a.get(e);let l;return s?l=s:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ls(l,c,o,!0)),Ls(l,e,o)),ut(e)&&a.set(e,l),l}function Ls(t,e,n,i=!1){const{mixins:r,extends:a}=e;a&&Ls(t,a,n,!0),r&&r.forEach(o=>Ls(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const s=kg[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const kg={data:uu,props:fu,emits:fu,methods:na,computed:na,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:na,directives:na,watch:Hg,provide:uu,inject:zg};function uu(t,e){return e?t?function(){return Dt(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function zg(t,e){return na(bl(t),bl(e))}function bl(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function na(t,e){return t?Dt(Object.create(null),t,e):e}function fu(t,e){return t?ze(t)&&ze(e)?[...new Set([...t,...e])]:Dt(Object.create(null),lu(t),lu(e??{})):e}function Hg(t,e){if(!t)return e;if(!e)return t;const n=Dt(Object.create(null),t);for(const i in e)n[i]=kt(t[i],e[i]);return n}function Ph(){return{app:null,config:{isNativeTag:Em,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gg=0;function Vg(t,e){return function(i,r=null){We(i)||(i=Dt({},i)),r!=null&&!ut(r)&&(r=null);const a=Ph(),o=new WeakSet;let s=!1;const l=a.app={_uid:Gg++,_component:i,_props:r,_container:null,_context:a,_instance:null,version:p_,get config(){return a.config},set config(c){},use(c,...u){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(l,...u)):We(c)&&(o.add(c),c(l,...u))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,u){return u?(a.components[c]=u,l):a.components[c]},directive(c,u){return u?(a.directives[c]=u,l):a.directives[c]},mount(c,u,f){if(!s){const d=yt(i,r);return d.appContext=a,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):t(d,c,f),s=!0,l._container=c,c.__vue_app__=l,xc(d.component)||d.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return a.provides[c]=u,l},runWithContext(c){Ds=l;try{return c()}finally{Ds=null}}};return l}}let Ds=null;function Es(t,e){if(Bt){let n=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===n&&(n=Bt.provides=Object.create(i)),n[t]=e}}function Gn(t,e,n=!1){const i=Bt||Vt;if(i||Ds){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ds._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}function Wg(t,e,n,i=!1){const r={},a={};Rs(a,ao,1),t.propsDefaults=Object.create(null),Lh(t,e,r,a);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:oh(r):t.type.props?t.props=r:t.props=a,t.attrs=a}function Xg(t,e,n,i){const{props:r,attrs:a,vnode:{patchFlag:o}}=t,s=tt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Qs(t.emitsOptions,d))continue;const p=e[d];if(l)if(Qe(a,d))p!==a[d]&&(a[d]=p,c=!0);else{const _=wn(d);r[_]=Tl(l,s,_,p,t,!1)}else p!==a[d]&&(a[d]=p,c=!0)}}}else{Lh(t,e,r,a)&&(c=!0);let u;for(const f in s)(!e||!Qe(e,f)&&((u=Vr(f))===f||!Qe(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Tl(l,s,f,void 0,t,!0)):delete r[f]);if(a!==s)for(const f in a)(!e||!Qe(e,f))&&(delete a[f],c=!0)}c&&Hn(t,"set","$attrs")}function Lh(t,e,n,i){const[r,a]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(Ss(l))continue;const c=e[l];let u;r&&Qe(r,u=wn(l))?!a||!a.includes(u)?n[u]=c:(s||(s={}))[u]=c:Qs(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(a){const l=tt(n),c=s||ct;for(let u=0;u<a.length;u++){const f=a[u];n[f]=Tl(r,l,f,c[f],t,!Qe(c,f))}}return o}function Tl(t,e,n,i,r,a){const o=t[n];if(o!=null){const s=Qe(o,"default");if(s&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Ca(r);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(a&&!s?i=!1:o[1]&&(i===""||i===Vr(n))&&(i=!0))}return i}function Dh(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const a=t.props,o={},s=[];let l=!1;if(!We(t)){const u=f=>{l=!0;const[d,p]=Dh(f,e,!0);Dt(o,d),p&&s.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!a&&!l)return ut(t)&&i.set(t,br),br;if(ze(a))for(let u=0;u<a.length;u++){const f=wn(a[u]);du(f)&&(o[f]=ct)}else if(a)for(const u in a){const f=wn(u);if(du(f)){const d=a[u],p=o[f]=ze(d)||We(d)?{type:d}:Dt({},d);if(p){const _=mu(Boolean,p.type),v=mu(String,p.type);p[0]=_>-1,p[1]=v<0||_<v,(_>-1||Qe(p,"default"))&&s.push(f)}}}const c=[o,s];return ut(t)&&i.set(t,c),c}function du(t){return t[0]!=="$"}function hu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function pu(t,e){return hu(t)===hu(e)}function mu(t,e){return ze(e)?e.findIndex(n=>pu(n,t)):We(e)&&pu(e,t)?0:-1}const Ih=t=>t[0]==="_"||t==="$stable",gc=t=>ze(t)?t.map(Sn):[Sn(t)],Yg=(t,e,n)=>{if(e._n)return e;const i=hc((...r)=>gc(e(...r)),n);return i._c=!1,i},Uh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Ih(r))continue;const a=t[r];if(We(a))e[r]=Yg(r,a,i);else if(a!=null){const o=gc(a);e[r]=()=>o}}},Nh=(t,e)=>{const n=gc(e);t.slots.default=()=>n},$g=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=tt(e),Rs(e,"_",n)):Uh(e,t.slots={})}else t.slots={},e&&Nh(t,e);Rs(t.slots,ao,1)},jg=(t,e,n)=>{const{vnode:i,slots:r}=t;let a=!0,o=ct;if(i.shapeFlag&32){const s=e._;s?n&&s===1?a=!1:(Dt(r,e),!n&&s===1&&delete r._):(a=!e.$stable,Uh(e,r)),o=e}else e&&(Nh(t,e),o={default:1});if(a)for(const s in r)!Ih(s)&&o[s]==null&&delete r[s]};function Al(t,e,n,i,r=!1){if(ze(t)){t.forEach((d,p)=>Al(d,e&&(ze(e)?e[p]:e),n,i,r));return}if(aa(i)&&!r)return;const a=i.shapeFlag&4?xc(i.component)||i.component.proxy:i.el,o=r?null:a,{i:s,r:l}=t,c=e&&e.r,u=s.refs===ct?s.refs={}:s.refs,f=s.setupState;if(c!=null&&c!==l&&(St(c)?(u[c]=null,Qe(f,c)&&(f[c]=null)):qt(c)&&(c.value=null)),We(l))fi(l,s,12,[o,u]);else{const d=St(l),p=qt(l);if(d||p){const _=()=>{if(t.f){const v=d?Qe(f,l)?f[l]:u[l]:l.value;r?ze(v)&&tc(v,a):ze(v)?v.includes(a)||v.push(a):d?(u[l]=[a],Qe(f,l)&&(f[l]=u[l])):(l.value=[a],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Qe(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Xt(_,n)):_()}}}const Xt=yg;function qg(t){return Kg(t)}function Kg(t,e){const n=$d();n.__VUE__=!0;const{insert:i,remove:r,patchProp:a,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=on,insertStaticContent:_}=t,v=(b,T,U,k=null,Y=null,ee=null,x=void 0,g=null,L=!!T.dynamicChildren)=>{if(b===T)return;b&&!Kr(b,T)&&(k=F(b),pe(b,Y,ee,!0),b=null),T.patchFlag===-2&&(L=!1,T.dynamicChildren=null);const{type:N,ref:z,shapeFlag:V}=T;switch(N){case ro:m(b,T,U,k);break;case Ir:h(b,T,U,k);break;case Ms:b==null&&S(T,U,k,x);break;case wt:ne(b,T,U,k,Y,ee,x,g,L);break;default:V&1?I(b,T,U,k,Y,ee,x,g,L):V&6?_e(b,T,U,k,Y,ee,x,g,L):(V&64||V&128)&&N.process(b,T,U,k,Y,ee,x,g,L,ue)}z!=null&&Y&&Al(z,b&&b.ref,ee,T||b,!T)},m=(b,T,U,k)=>{if(b==null)i(T.el=s(T.children),U,k);else{const Y=T.el=b.el;T.children!==b.children&&c(Y,T.children)}},h=(b,T,U,k)=>{b==null?i(T.el=l(T.children||""),U,k):T.el=b.el},S=(b,T,U,k)=>{[b.el,b.anchor]=_(b.children,T,U,k,b.el,b.anchor)},y=({el:b,anchor:T},U,k)=>{let Y;for(;b&&b!==T;)Y=d(b),i(b,U,k),b=Y;i(T,U,k)},A=({el:b,anchor:T})=>{let U;for(;b&&b!==T;)U=d(b),r(b),b=U;r(T)},I=(b,T,U,k,Y,ee,x,g,L)=>{T.type==="svg"?x="svg":T.type==="math"&&(x="mathml"),b==null?C(T,U,k,Y,ee,x,g,L):E(b,T,Y,ee,x,g,L)},C=(b,T,U,k,Y,ee,x,g)=>{let L,N;const{props:z,shapeFlag:V,transition:oe,dirs:te}=b;if(L=b.el=o(b.type,ee,z&&z.is,z),V&8?u(L,b.children):V&16&&se(b.children,L,null,k,Y,Ro(b,ee),x,g),te&&Ei(b,null,k,"created"),P(L,b,b.scopeId,x,k),z){for(const xe in z)xe!=="value"&&!Ss(xe)&&a(L,xe,null,z[xe],ee,b.children,k,Y,Me);"value"in z&&a(L,"value",null,z.value,ee),(N=z.onVnodeBeforeMount)&&yn(N,k,b)}te&&Ei(b,null,k,"beforeMount");const de=Zg(Y,oe);de&&oe.beforeEnter(L),i(L,T,U),((N=z&&z.onVnodeMounted)||de||te)&&Xt(()=>{N&&yn(N,k,b),de&&oe.enter(L),te&&Ei(b,null,k,"mounted")},Y)},P=(b,T,U,k,Y)=>{if(U&&p(b,U),k)for(let ee=0;ee<k.length;ee++)p(b,k[ee]);if(Y){let ee=Y.subTree;if(T===ee){const x=Y.vnode;P(b,x,x.scopeId,x.slotScopeIds,Y.parent)}}},se=(b,T,U,k,Y,ee,x,g,L=0)=>{for(let N=L;N<b.length;N++){const z=b[N]=g?ri(b[N]):Sn(b[N]);v(null,z,T,U,k,Y,ee,x,g)}},E=(b,T,U,k,Y,ee,x)=>{const g=T.el=b.el;let{patchFlag:L,dynamicChildren:N,dirs:z}=T;L|=b.patchFlag&16;const V=b.props||ct,oe=T.props||ct;let te;if(U&&Mi(U,!1),(te=oe.onVnodeBeforeUpdate)&&yn(te,U,T,b),z&&Ei(T,b,U,"beforeUpdate"),U&&Mi(U,!0),N?R(b.dynamicChildren,N,g,U,k,Ro(T,Y),ee):x||q(b,T,g,null,U,k,Ro(T,Y),ee,!1),L>0){if(L&16)Q(g,T,V,oe,U,k,Y);else if(L&2&&V.class!==oe.class&&a(g,"class",null,oe.class,Y),L&4&&a(g,"style",V.style,oe.style,Y),L&8){const de=T.dynamicProps;for(let xe=0;xe<de.length;xe++){const Re=de[xe],re=V[Re],He=oe[Re];(He!==re||Re==="value")&&a(g,Re,re,He,Y,b.children,U,k,Me)}}L&1&&b.children!==T.children&&u(g,T.children)}else!x&&N==null&&Q(g,T,V,oe,U,k,Y);((te=oe.onVnodeUpdated)||z)&&Xt(()=>{te&&yn(te,U,T,b),z&&Ei(T,b,U,"updated")},k)},R=(b,T,U,k,Y,ee,x)=>{for(let g=0;g<T.length;g++){const L=b[g],N=T[g],z=L.el&&(L.type===wt||!Kr(L,N)||L.shapeFlag&70)?f(L.el):U;v(L,N,z,null,k,Y,ee,x,!0)}},Q=(b,T,U,k,Y,ee,x)=>{if(U!==k){if(U!==ct)for(const g in U)!Ss(g)&&!(g in k)&&a(b,g,U[g],null,x,T.children,Y,ee,Me);for(const g in k){if(Ss(g))continue;const L=k[g],N=U[g];L!==N&&g!=="value"&&a(b,g,N,L,x,T.children,Y,ee,Me)}"value"in k&&a(b,"value",U.value,k.value,x)}},ne=(b,T,U,k,Y,ee,x,g,L)=>{const N=T.el=b?b.el:s(""),z=T.anchor=b?b.anchor:s("");let{patchFlag:V,dynamicChildren:oe,slotScopeIds:te}=T;te&&(g=g?g.concat(te):te),b==null?(i(N,U,k),i(z,U,k),se(T.children||[],U,z,Y,ee,x,g,L)):V>0&&V&64&&oe&&b.dynamicChildren?(R(b.dynamicChildren,oe,U,Y,ee,x,g),(T.key!=null||Y&&T===Y.subTree)&&Oh(b,T,!0)):q(b,T,U,z,Y,ee,x,g,L)},_e=(b,T,U,k,Y,ee,x,g,L)=>{T.slotScopeIds=g,b==null?T.shapeFlag&512?Y.ctx.activate(T,U,k,x,L):O(T,U,k,Y,ee,x,L):W(b,T,L)},O=(b,T,U,k,Y,ee,x)=>{const g=b.component=o_(b,k,Y);if(bh(b)&&(g.ctx.renderer=ue),l_(g),g.asyncDep){if(Y&&Y.registerDep(g,X),!b.el){const L=g.subTree=yt(Ir);h(null,L,T,U)}}else X(g,b,T,U,Y,ee,x)},W=(b,T,U)=>{const k=T.component=b.component;if(mg(b,T,U))if(k.asyncDep&&!k.asyncResolved){J(k,T,U);return}else k.next=T,cg(k.update),k.effect.dirty=!0,k.update();else T.el=b.el,k.vnode=T},X=(b,T,U,k,Y,ee,x)=>{const g=()=>{if(b.isMounted){let{next:z,bu:V,u:oe,parent:te,vnode:de}=b;{const Be=Fh(b);if(Be){z&&(z.el=de.el,J(b,z,x)),Be.asyncDep.then(()=>{b.isUnmounted||g()});return}}let xe=z,Re;Mi(b,!1),z?(z.el=de.el,J(b,z,x)):z=de,V&&bo(V),(Re=z.props&&z.props.onVnodeBeforeUpdate)&&yn(Re,te,z,de),Mi(b,!0);const re=Ao(b),He=b.subTree;b.subTree=re,v(He,re,f(He.el),F(He),b,Y,ee),z.el=re.el,xe===null&&gg(b,re.el),oe&&Xt(oe,Y),(Re=z.props&&z.props.onVnodeUpdated)&&Xt(()=>yn(Re,te,z,de),Y)}else{let z;const{el:V,props:oe}=T,{bm:te,m:de,parent:xe}=b,Re=aa(T);if(Mi(b,!1),te&&bo(te),!Re&&(z=oe&&oe.onVnodeBeforeMount)&&yn(z,xe,T),Mi(b,!0),V&&B){const re=()=>{b.subTree=Ao(b),B(V,b.subTree,b,Y,null)};Re?T.type.__asyncLoader().then(()=>!b.isUnmounted&&re()):re()}else{const re=b.subTree=Ao(b);v(null,re,U,k,b,Y,ee),T.el=re.el}if(de&&Xt(de,Y),!Re&&(z=oe&&oe.onVnodeMounted)){const re=T;Xt(()=>yn(z,xe,re),Y)}(T.shapeFlag&256||xe&&aa(xe.vnode)&&xe.vnode.shapeFlag&256)&&b.a&&Xt(b.a,Y),b.isMounted=!0,T=U=k=null}},L=b.effect=new rc(g,on,()=>dc(N),b.scope),N=b.update=()=>{L.dirty&&L.run()};N.id=b.uid,Mi(b,!0),N()},J=(b,T,U)=>{T.component=b;const k=b.vnode.props;b.vnode=T,b.next=null,Xg(b,T.props,k,U),jg(b,T.children,U),ji(),au(b),qi()},q=(b,T,U,k,Y,ee,x,g,L=!1)=>{const N=b&&b.children,z=b?b.shapeFlag:0,V=T.children,{patchFlag:oe,shapeFlag:te}=T;if(oe>0){if(oe&128){le(N,V,U,k,Y,ee,x,g,L);return}else if(oe&256){ae(N,V,U,k,Y,ee,x,g,L);return}}te&8?(z&16&&Me(N,Y,ee),V!==N&&u(U,V)):z&16?te&16?le(N,V,U,k,Y,ee,x,g,L):Me(N,Y,ee,!0):(z&8&&u(U,""),te&16&&se(V,U,k,Y,ee,x,g,L))},ae=(b,T,U,k,Y,ee,x,g,L)=>{b=b||br,T=T||br;const N=b.length,z=T.length,V=Math.min(N,z);let oe;for(oe=0;oe<V;oe++){const te=T[oe]=L?ri(T[oe]):Sn(T[oe]);v(b[oe],te,U,null,Y,ee,x,g,L)}N>z?Me(b,Y,ee,!0,!1,V):se(T,U,k,Y,ee,x,g,L,V)},le=(b,T,U,k,Y,ee,x,g,L)=>{let N=0;const z=T.length;let V=b.length-1,oe=z-1;for(;N<=V&&N<=oe;){const te=b[N],de=T[N]=L?ri(T[N]):Sn(T[N]);if(Kr(te,de))v(te,de,U,null,Y,ee,x,g,L);else break;N++}for(;N<=V&&N<=oe;){const te=b[V],de=T[oe]=L?ri(T[oe]):Sn(T[oe]);if(Kr(te,de))v(te,de,U,null,Y,ee,x,g,L);else break;V--,oe--}if(N>V){if(N<=oe){const te=oe+1,de=te<z?T[te].el:k;for(;N<=oe;)v(null,T[N]=L?ri(T[N]):Sn(T[N]),U,de,Y,ee,x,g,L),N++}}else if(N>oe)for(;N<=V;)pe(b[N],Y,ee,!0),N++;else{const te=N,de=N,xe=new Map;for(N=de;N<=oe;N++){const w=T[N]=L?ri(T[N]):Sn(T[N]);w.key!=null&&xe.set(w.key,N)}let Re,re=0;const He=oe-de+1;let Be=!1,Ne=0;const Pe=new Array(He);for(N=0;N<He;N++)Pe[N]=0;for(N=te;N<=V;N++){const w=b[N];if(re>=He){pe(w,Y,ee,!0);continue}let he;if(w.key!=null)he=xe.get(w.key);else for(Re=de;Re<=oe;Re++)if(Pe[Re-de]===0&&Kr(w,T[Re])){he=Re;break}he===void 0?pe(w,Y,ee,!0):(Pe[he-de]=N+1,he>=Ne?Ne=he:Be=!0,v(w,T[he],U,null,Y,ee,x,g,L),re++)}const be=Be?Jg(Pe):br;for(Re=be.length-1,N=He-1;N>=0;N--){const w=de+N,he=T[w],De=w+1<z?T[w+1].el:k;Pe[N]===0?v(null,he,U,De,Y,ee,x,g,L):Be&&(Re<0||N!==be[Re]?me(he,U,De,2):Re--)}}},me=(b,T,U,k,Y=null)=>{const{el:ee,type:x,transition:g,children:L,shapeFlag:N}=b;if(N&6){me(b.component.subTree,T,U,k);return}if(N&128){b.suspense.move(T,U,k);return}if(N&64){x.move(b,T,U,ue);return}if(x===wt){i(ee,T,U);for(let V=0;V<L.length;V++)me(L[V],T,U,k);i(b.anchor,T,U);return}if(x===Ms){y(b,T,U);return}if(k!==2&&N&1&&g)if(k===0)g.beforeEnter(ee),i(ee,T,U),Xt(()=>g.enter(ee),Y);else{const{leave:V,delayLeave:oe,afterLeave:te}=g,de=()=>i(ee,T,U),xe=()=>{V(ee,()=>{de(),te&&te()})};oe?oe(ee,de,xe):xe()}else i(ee,T,U)},pe=(b,T,U,k=!1,Y=!1)=>{const{type:ee,props:x,ref:g,children:L,dynamicChildren:N,shapeFlag:z,patchFlag:V,dirs:oe}=b;if(g!=null&&Al(g,null,U,b,!0),z&256){T.ctx.deactivate(b);return}const te=z&1&&oe,de=!aa(b);let xe;if(de&&(xe=x&&x.onVnodeBeforeUnmount)&&yn(xe,T,b),z&6)Se(b.component,U,k);else{if(z&128){b.suspense.unmount(U,k);return}te&&Ei(b,null,T,"beforeUnmount"),z&64?b.type.remove(b,T,U,Y,ue,k):N&&(ee!==wt||V>0&&V&64)?Me(N,T,U,!1,!0):(ee===wt&&V&384||!Y&&z&16)&&Me(L,T,U),k&&Z(b)}(de&&(xe=x&&x.onVnodeUnmounted)||te)&&Xt(()=>{xe&&yn(xe,T,b),te&&Ei(b,null,T,"unmounted")},U)},Z=b=>{const{type:T,el:U,anchor:k,transition:Y}=b;if(T===wt){fe(U,k);return}if(T===Ms){A(b);return}const ee=()=>{r(U),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(b.shapeFlag&1&&Y&&!Y.persisted){const{leave:x,delayLeave:g}=Y,L=()=>x(U,ee);g?g(b.el,ee,L):L()}else ee()},fe=(b,T)=>{let U;for(;b!==T;)U=d(b),r(b),b=U;r(T)},Se=(b,T,U)=>{const{bum:k,scope:Y,update:ee,subTree:x,um:g}=b;k&&bo(k),Y.stop(),ee&&(ee.active=!1,pe(x,b,T,U)),g&&Xt(g,T),Xt(()=>{b.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Me=(b,T,U,k=!1,Y=!1,ee=0)=>{for(let x=ee;x<b.length;x++)pe(b[x],T,U,k,Y)},F=b=>b.shapeFlag&6?F(b.component.subTree):b.shapeFlag&128?b.suspense.next():d(b.anchor||b.el);let ce=!1;const ie=(b,T,U)=>{b==null?T._vnode&&pe(T._vnode,null,null,!0):v(T._vnode||null,b,T,null,null,null,U),ce||(ce=!0,au(),vh(),ce=!1),T._vnode=b},ue={p:v,um:pe,m:me,r:Z,mt:O,mc:se,pc:q,pbc:R,n:F,o:t};let Te,B;return e&&([Te,B]=e(ue)),{render:ie,hydrate:Te,createApp:Vg(ie,Te)}}function Ro({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Oh(t,e,n=!1){const i=t.children,r=e.children;if(ze(i)&&ze(r))for(let a=0;a<i.length;a++){const o=i[a];let s=r[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[a]=ri(r[a]),s.el=o.el),n||Oh(o,s)),s.type===ro&&(s.el=o.el)}}function Jg(t){const e=t.slice(),n=[0];let i,r,a,o,s;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,t[n[s]]<c?a=s+1:o=s;c<t[n[a]]&&(a>0&&(e[i]=n[a-1]),n[a]=i)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=e[o];return n}function Fh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fh(e)}const Qg=t=>t.__isTeleport,wt=Symbol.for("v-fgt"),ro=Symbol.for("v-txt"),Ir=Symbol.for("v-cmt"),Ms=Symbol.for("v-stc"),oa=[];let mn=null;function ot(t=!1){oa.push(mn=t?null:[])}function e_(){oa.pop(),mn=oa[oa.length-1]||null}let va=1;function gu(t){va+=t}function Bh(t){return t.dynamicChildren=va>0?mn||br:null,e_(),va>0&&mn&&mn.push(t),t}function mt(t,e,n,i,r,a){return Bh(Ke(t,e,n,i,r,a,!0))}function _c(t,e,n,i,r){return Bh(yt(t,e,n,i,r,!0))}function Is(t){return t?t.__v_isVNode===!0:!1}function Kr(t,e){return t.type===e.type&&t.key===e.key}const ao="__vInternal",kh=({key:t})=>t??null,bs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?St(t)||qt(t)||We(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function Ke(t,e=null,n=null,i=0,r=null,a=t===wt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kh(e),ref:e&&bs(e),scopeId:eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vt};return s?(vc(l,n),a&128&&t.normalize(l)):n&&(l.shapeFlag|=St(n)?8:16),va>0&&!o&&mn&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&mn.push(l),l}const yt=t_;function t_(t,e=null,n=null,i=0,r=null,a=!1){if((!t||t===_g)&&(t=Ir),Is(t)){const s=Ur(t,e,!0);return n&&vc(s,n),va>0&&!a&&mn&&(s.shapeFlag&6?mn[mn.indexOf(t)]=s:mn.push(s)),s.patchFlag|=-2,s}if(h_(t)&&(t=t.__vccOpts),e){e=n_(e);let{class:s,style:l}=e;s&&!St(s)&&(e.class=Wr(s)),ut(l)&&(ch(l)&&!ze(l)&&(l=Dt({},l)),e.style=ic(l))}const o=St(t)?1:xg(t)?128:Qg(t)?64:ut(t)?4:We(t)?2:0;return Ke(t,e,n,i,r,o,a,!0)}function n_(t){return t?ch(t)||ao in t?Dt({},t):t:null}function Ur(t,e,n=!1){const{props:i,ref:r,patchFlag:a,children:o}=t,s=e?r_(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&kh(s),ref:e&&e.ref?n&&r?ze(r)?r.concat(bs(e)):[r,bs(e)]:bs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ur(t.ssContent),ssFallback:t.ssFallback&&Ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Gi(t=" ",e=0){return yt(ro,null,t,e)}function i_(t,e){const n=yt(Ms,null,t);return n.staticCount=e,n}function Sn(t){return t==null||typeof t=="boolean"?yt(Ir):ze(t)?yt(wt,null,t.slice()):typeof t=="object"?ri(t):yt(ro,null,String(t))}function ri(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ur(t)}function vc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ze(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),vc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ao in e)?e._ctx=Vt:r===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),i&64?(n=16,e=[Gi(e)]):n=8);t.children=e,t.shapeFlag|=n}function r_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Wr([e.class,i.class]));else if(r==="style")e.style=ic([e.style,i.style]);else if(Ys(r)){const a=e[r],o=i[r];o&&a!==o&&!(ze(a)&&a.includes(o))&&(e[r]=a?[].concat(a,o):o)}else r!==""&&(e[r]=i[r])}return e}function yn(t,e,n,i=null){_n(t,e,7,[n,i])}const a_=Ph();let s_=0;function o_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||a_,a={uid:s_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Um(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dh(i,r),emitsOptions:yh(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=dg.bind(null,a),t.ce&&t.ce(a),a}let Bt=null,Us,wl;{const t=$d(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),a=>{r.length>1?r.forEach(o=>o(a)):r[0](a)}};Us=e("__VUE_INSTANCE_SETTERS__",n=>Bt=n),wl=e("__VUE_SSR_SETTERS__",n=>so=n)}const Ca=t=>{const e=Bt;return Us(t),t.scope.on(),()=>{t.scope.off(),Us(e)}},_u=()=>{Bt&&Bt.scope.off(),Us(null)};function zh(t){return t.vnode.shapeFlag&4}let so=!1;function l_(t,e=!1){e&&wl(e);const{props:n,children:i}=t.vnode,r=zh(t);Wg(t,n,r,e),$g(t,i);const a=r?c_(t,e):void 0;return e&&wl(!1),a}function c_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=uh(new Proxy(t.ctx,Og));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?f_(t):null,a=Ca(t);ji();const o=fi(i,t,0,[t.props,r]);if(qi(),a(),Wd(o)){if(o.then(_u,_u),e)return o.then(s=>{vu(t,s,e)}).catch(s=>{Js(s,t,0)});t.asyncDep=o}else vu(t,o,e)}else Hh(t,e)}function vu(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ut(e)&&(t.setupState=ph(e)),Hh(t,n)}let xu;function Hh(t,e,n){const i=t.type;if(!t.render){if(!e&&xu&&!i.render){const r=i.template||mc(t).template;if(r){const{isCustomElement:a,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=i,c=Dt(Dt({isCustomElement:a,delimiters:s},o),l);i.render=xu(r,c)}}t.render=i.render||on}{const r=Ca(t);ji();try{Fg(t)}finally{qi(),r()}}}function u_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return jt(t,"get","$attrs"),e[n]}}))}function f_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return u_(t)},slots:t.slots,emit:t.emit,expose:e}}function xc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ph(uh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sa)return sa[n](t)},has(e,n){return n in e||n in sa}}))}function d_(t,e=!0){return We(t)?t.displayName||t.name:t.name||e&&t.__name}function h_(t){return We(t)&&"__vccOpts"in t}const Ct=(t,e)=>ng(t,e,so);function yc(t,e,n){const i=arguments.length;return i===2?ut(e)&&!ze(e)?Is(e)?yt(t,null,[e]):yt(t,e):yt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Is(n)&&(n=[n]),yt(t,e,n))}const p_="3.4.10";/**
* @vue/runtime-dom v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const m_="http://www.w3.org/2000/svg",g_="http://www.w3.org/1998/Math/MathML",ai=typeof document<"u"?document:null,yu=ai&&ai.createElement("template"),__={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ai.createElementNS(m_,t):e==="mathml"?ai.createElementNS(g_,t):ai.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ai.createTextNode(t),createComment:t=>ai.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ai.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,a){const o=n?n.previousSibling:e.lastChild;if(r&&(r===a||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===a||!(r=r.nextSibling)););else{yu.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const s=yu.content;if(i==="svg"||i==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},v_=Symbol("_vtc");function x_(t,e,n){const i=t[v_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const y_=Symbol("_vod"),S_=Symbol("");function E_(t,e,n){const i=t.style,r=i.display,a=St(n);if(n&&!a){if(e&&!St(e))for(const o in e)n[o]==null&&Rl(i,o,"");for(const o in n)Rl(i,o,n[o])}else if(a){if(e!==n){const o=i[S_];o&&(n+=";"+o),i.cssText=n}}else e&&t.removeAttribute("style");y_ in t&&(i.display=r)}const Su=/\s*!important$/;function Rl(t,e,n){if(ze(n))n.forEach(i=>Rl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=M_(t,e);Su.test(n)?t.setProperty(Vr(i),n.replace(Su,""),"important"):t[i]=n}}const Eu=["Webkit","Moz","ms"],Co={};function M_(t,e){const n=Co[e];if(n)return n;let i=wn(e);if(i!=="filter"&&i in t)return Co[e]=i;i=qs(i);for(let r=0;r<Eu.length;r++){const a=Eu[r]+i;if(a in t)return Co[e]=a}return e}const Mu="http://www.w3.org/1999/xlink";function b_(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mu,e.slice(6,e.length)):t.setAttributeNS(Mu,e,n);else{const a=Im(e);n==null||a&&!jd(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function T_(t,e,n,i,r,a,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,a),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=jd(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function A_(t,e,n,i){t.addEventListener(e,n,i)}function w_(t,e,n,i){t.removeEventListener(e,n,i)}const bu=Symbol("_vei");function R_(t,e,n,i,r=null){const a=t[bu]||(t[bu]={}),o=a[e];if(i&&o)o.value=i;else{const[s,l]=C_(e);if(i){const c=a[e]=D_(i,r);A_(t,s,c,l)}else o&&(w_(t,s,o,l),a[e]=void 0)}}const Tu=/(?:Once|Passive|Capture)$/;function C_(t){let e;if(Tu.test(t)){e={};let i;for(;i=t.match(Tu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vr(t.slice(2)),e]}let Po=0;const P_=Promise.resolve(),L_=()=>Po||(P_.then(()=>Po=0),Po=Date.now());function D_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;_n(I_(i,n.value),e,5,[i])};return n.value=t,n.attached=L_(),n}function I_(t,e){if(ze(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Au=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,U_=(t,e,n,i,r,a,o,s,l)=>{const c=r==="svg";e==="class"?x_(t,i,c):e==="style"?E_(t,n,i):Ys(e)?ec(e)||R_(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):N_(t,e,i,c))?T_(t,e,i,a,o,s,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),b_(t,e,i,c))};function N_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Au(e)&&We(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Au(e)&&St(n)?!1:e in t}const O_=Dt({patchProp:U_},__);let wu;function F_(){return wu||(wu=qg(O_))}const B_=(...t)=>{const e=F_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=z_(i);if(!r)return;const a=e._component;!We(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,k_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function k_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function z_(t){return St(t)?document.querySelector(t):t}const Rn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},H_={name:"IconButton",props:{type:{type:String,default:"circle"}}};function G_(t,e,n,i,r,a){return ot(),mt("button",{class:Wr(["btn",n.type]),onClick:e[0]||(e[0]=o=>t.$emit("onClick"))},[wh(t.$slots,"default",{},void 0,!0)],2)}const Gh=Rn(H_,[["render",G_],["__scopeId","data-v-950f70db"]]),V_={name:"Header",components:{IconButton:Gh},computed:{navigationList(){return[{name:"Обо мне",path:""},{name:"Опыт",path:"experience"},{name:"Навыки",path:"work"},{name:"Контакты",path:"contact"}]},currentPath(){const{hash:t}=this.$route;return t.length?t.substring(1,t.length):t}},methods:{menuHandler(){console.log("Click menu btn")}}},W_={class:"container"},X_={class:"navigation-list"},Y_=["href"];function $_(t,e,n,i,r,a){return ot(),mt("header",null,[Ke("div",W_,[Ke("div",X_,[(ot(!0),mt(wt,null,Hi(a.navigationList,(o,s)=>(ot(),mt("a",{href:`#${o.path}`,class:Wr({active:a.currentPath===o.path})},[Ke("span",null,"0"+Fn(s+1)+".",1),Gi(Fn(o.name),1)],10,Y_))),256))])])])}const j_=Rn(V_,[["render",$_]]),q_={name:"Footer",data(){return{socialLinks:[{icon:"fa-brands fa-linkedin-in",path:"https://www.linkedin.com/in/nuradil-adiletov-8132121b3/"},{icon:"fa-brands fa-telegram",path:"https://t.me/adiletov_adil"},{icon:"fa-regular fa-envelope",path:"mailto:nrdl777@gmail.com"}]}},components:{IconButton:Gh},methods:{redirectTo(t){window.open(t,"_blank")}}},Vh=t=>(to("data-v-a85f098c"),t=t(),no(),t),K_={class:"container"},Z_=Vh(()=>Ke("h2",null,"Свяжитесь со мной",-1)),J_=Vh(()=>Ke("p",null,"Любым удобным для вас способом",-1)),Q_={class:"social_btns"};function ev(t,e,n,i,r,a){const o=Pi("icon-button");return ot(),mt("footer",null,[Ke("div",K_,[Z_,J_,Ke("div",Q_,[(ot(!0),mt(wt,null,Hi(r.socialLinks,s=>(ot(),_c(o,{key:s.path,onOnClick:l=>a.redirectTo(s.path)},{default:hc(()=>[Ke("i",{class:Wr(s.icon)},null,2)]),_:2},1032,["onOnClick"]))),128))])])])}const tv=Rn(q_,[["render",ev],["__scopeId","data-v-a85f098c"]]),nv={name:"MainLayout",components:{Header:j_,Footer:tv}},iv={class:"layout"};function rv(t,e,n,i,r,a){const o=Pi("Header");return ot(),mt("div",iv,[yt(o),wh(t.$slots,"default")])}const av=Rn(nv,[["render",rv]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="160",Qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sv=0,Ru=1,ov=2,Wh=1,lv=2,On=3,gi=0,Yt=1,Bn=2,di=0,Cr=1,Cu=2,Pu=3,Lu=4,cv=5,Li=100,uv=101,fv=102,Du=103,Iu=104,dv=200,hv=201,pv=202,mv=203,Cl=204,Pl=205,gv=206,_v=207,vv=208,xv=209,yv=210,Sv=211,Ev=212,Mv=213,bv=214,Tv=0,Av=1,wv=2,Ns=3,Rv=4,Cv=5,Pv=6,Lv=7,Xh=0,Dv=1,Iv=2,hi=0,Uv=1,Nv=2,Ov=3,Fv=4,Bv=5,kv=6,Yh=300,Nr=301,Or=302,Ll=303,Dl=304,oo=306,Il=1e3,hn=1001,Ul=1002,Gt=1003,Uu=1004,Lo=1005,an=1006,zv=1007,xa=1008,pi=1009,Hv=1010,Gv=1011,Ec=1012,$h=1013,li=1014,ci=1015,ya=1016,jh=1017,qh=1018,Fi=1020,Vv=1021,pn=1023,Wv=1024,Xv=1025,Bi=1026,Fr=1027,Yv=1028,Kh=1029,$v=1030,Zh=1031,Jh=1033,Do=33776,Io=33777,Uo=33778,No=33779,Nu=35840,Ou=35841,Fu=35842,Bu=35843,Qh=36196,ku=37492,zu=37496,Hu=37808,Gu=37809,Vu=37810,Wu=37811,Xu=37812,Yu=37813,$u=37814,ju=37815,qu=37816,Ku=37817,Zu=37818,Ju=37819,Qu=37820,ef=37821,Oo=36492,tf=36494,nf=36495,jv=36283,rf=36284,af=36285,sf=36286,ep=3e3,ki=3001,qv=3200,Kv=3201,Zv=0,Jv=1,sn="",Rt="srgb",Vn="srgb-linear",Mc="display-p3",lo="display-p3-linear",Os="linear",at="srgb",Fs="rec709",Bs="p3",tr=7680,of=519,Qv=512,e0=513,t0=514,tp=515,n0=516,i0=517,r0=518,a0=519,lf=35044,cf="300 es",Nl=1035,zn=2e3,ks=2001;class Ki{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uf=1234567;const la=Math.PI/180,Sa=180/Math.PI;function Xr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Ot(t,e,n){return Math.max(e,Math.min(n,t))}function bc(t,e){return(t%e+e)%e}function s0(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function o0(t,e,n){return t!==e?(n-t)/(e-t):0}function ca(t,e,n){return(1-n)*t+n*e}function l0(t,e,n,i){return ca(t,e,1-Math.exp(-n*i))}function c0(t,e=1){return e-Math.abs(bc(t,e*2)-e)}function u0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function f0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function d0(t,e){return t+Math.floor(Math.random()*(e-t+1))}function h0(t,e){return t+Math.random()*(e-t)}function p0(t){return t*(.5-Math.random())}function m0(t){t!==void 0&&(uf=t);let e=uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g0(t){return t*la}function _0(t){return t*Sa}function Ol(t){return(t&t-1)===0&&t!==0}function v0(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function zs(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function x0(t,e,n,i,r){const a=Math.cos,o=Math.sin,s=a(n/2),l=o(n/2),c=a((e+i)/2),u=o((e+i)/2),f=a((e-i)/2),d=o((e-i)/2),p=a((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(s*u,l*f,l*d,s*c);break;case"YZY":t.set(l*d,s*u,l*f,s*c);break;case"ZXZ":t.set(l*f,l*d,s*u,s*c);break;case"XZX":t.set(s*u,l*_,l*p,s*c);break;case"YXY":t.set(l*p,s*u,l*_,s*c);break;case"ZYZ":t.set(l*_,l*p,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _r(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const y0={DEG2RAD:la,RAD2DEG:Sa,generateUUID:Xr,clamp:Ot,euclideanModulo:bc,mapLinear:s0,inverseLerp:o0,lerp:ca,damp:l0,pingpong:c0,smoothstep:u0,smootherstep:f0,randInt:d0,randFloat:h0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:_0,isPowerOfTwo:Ol,ceilPowerOfTwo:v0,floorPowerOfTwo:zs,setQuaternionFromProperEuler:x0,normalize:zt,denormalize:_r};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,a,o,s,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c)}set(e,n,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],S=r[1],y=r[4],A=r[7],I=r[2],C=r[5],P=r[8];return a[0]=o*v+s*S+l*I,a[3]=o*m+s*y+l*C,a[6]=o*h+s*A+l*P,a[1]=c*v+u*S+f*I,a[4]=c*m+u*y+f*C,a[7]=c*h+u*A+f*P,a[2]=d*v+p*S+_*I,a[5]=d*m+p*y+_*C,a[8]=d*h+p*A+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,d=s*l-u*a,p=c*a-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(s*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*a-s*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*a)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(Fo.makeScale(e,n)),this}rotate(e){return this.premultiply(Fo.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new qe;function np(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ea(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function S0(){const t=Ea("canvas");return t.style.display="block",t}const ff={};function ua(t){t in ff||(ff[t]=!0,console.warn(t))}const df=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hf=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ga={[Vn]:{transfer:Os,primaries:Fs,toReference:t=>t,fromReference:t=>t},[Rt]:{transfer:at,primaries:Fs,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[lo]:{transfer:Os,primaries:Bs,toReference:t=>t.applyMatrix3(hf),fromReference:t=>t.applyMatrix3(df)},[Mc]:{transfer:at,primaries:Bs,toReference:t=>t.convertSRGBToLinear().applyMatrix3(hf),fromReference:t=>t.applyMatrix3(df).convertLinearToSRGB()}},E0=new Set([Vn,lo]),it={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!E0.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ga[e].toReference,r=Ga[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ga[t].primaries},getTransfer:function(t){return t===sn?Os:Ga[t].transfer}};function Pr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let nr;class ip{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nr===void 0&&(nr=Ea("canvas")),nr.width=e.width,nr.height=e.height;const i=nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=nr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ea("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Pr(a[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pr(n[i]/255)*255):n[i]=Pr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M0=0;class rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Xr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(ko(r[o].image)):a.push(ko(r[o]))}else a=ko(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function ko(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ip.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b0=0;class $t extends Ki{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=hn,r=hn,a=an,o=xa,s=pn,l=pi,c=$t.DEFAULT_ANISOTROPY,u=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Xr(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ki?Rt:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Il:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Il:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?ki:ep}set encoding(e){ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ki?Rt:sn}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Yh;$t.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,A=(p+1)/2,I=(h+1)/2,C=(u+d)/4,P=(f+v)/4,se=(_+m)/4;return y>A&&y>I?y<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(y),r=C/i,a=P/i):A>I?A<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),i=C/r,a=se/r):I<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(I),i=P/a,r=se/a),this.set(i,r,a,n),this}let S=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T0 extends Ki{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ua("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ki?Rt:sn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new rp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends T0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ap extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class A0 extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=a[o+0],p=a[o+1],_=a[o+2],v=a[o+3];if(s===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(s===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==_){let m=1-s;const h=l*d+c*p+u*_+f*v,S=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const I=Math.sqrt(y),C=Math.atan2(I,h*S);m=Math.sin(m*C)/I,s=Math.sin(s*C)/I}const A=s*S;if(l=l*m+d*A,c=c*m+p*A,u=u*m+_*A,f=f*m+v*A,m===1-s){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[o],d=a[o+1],p=a[o+2],_=a[o+3];return e[n]=s*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-s*p,e[n+2]=c*_+u*p+s*d-l*f,e[n+3]=u*_-s*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),f=s(a/2),d=l(i/2),p=l(r/2),_=l(a/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],o=n[1],s=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+s+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(o-r)*p}else if(i>s&&i>f){const p=2*Math.sqrt(1+i-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(a+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-i-f);this._w=(a-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-s);this._w=(o-r)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,o=e._w,s=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),u=2*(s*n-a*r),f=2*(a*i-o*n);return this.x=n+l*c+o*f-s*u,this.y=i+l*u+s*c-a*f,this.z=r+l*f+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new G,pf=new Wi;class Pa{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(a,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Wa.subVectors(this.max,Zr),ir.subVectors(e.a,Zr),rr.subVectors(e.b,Zr),ar.subVectors(e.c,Zr),Kn.subVectors(rr,ir),Zn.subVectors(ar,rr),bi.subVectors(ir,ar);let n=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-bi.z,bi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,bi.z,0,-bi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-bi.y,bi.x,0];return!Ho(n,ir,rr,ar,Wa)||(n=[1,0,0,0,1,0,0,0,1],!Ho(n,ir,rr,ar,Wa))?!1:(Xa.crossVectors(Kn,Zn),n=[Xa.x,Xa.y,Xa.z],Ho(n,ir,rr,ar,Wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new G,new G,new G,new G,new G,new G,new G,new G],ln=new G,Va=new Pa,ir=new G,rr=new G,ar=new G,Kn=new G,Zn=new G,bi=new G,Zr=new G,Wa=new G,Xa=new G,Ti=new G;function Ho(t,e,n,i,r){for(let a=0,o=t.length-3;a<=o;a+=3){Ti.fromArray(t,a);const s=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),c=n.dot(Ti),u=i.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const w0=new Pa,Jr=new G,Go=new G;class Tc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):w0.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const n=Jr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Go)),this.expandByPoint(Jr.copy(e.center).sub(Go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new G,Vo=new G,Ya=new G,Jn=new G,Wo=new G,$a=new G,Xo=new G;class sp{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ln.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,n),Ln.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Vo.copy(e).add(n).multiplyScalar(.5),Ya.copy(n).sub(e).normalize(),Jn.copy(this.origin).sub(Vo);const a=e.distanceTo(n)*.5,o=-this.direction.dot(Ya),s=Jn.dot(this.direction),l=-Jn.dot(Ya),c=Jn.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-s,d=o*s-l,_=a*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*s)+d*(o*f+d+2*l)+c}else d=a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*a+s)),d=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(f=Math.max(0,-(o*a+s)),d=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c);else d=o>0?-a:a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Vo).addScaledVector(Ya,d),p}intersectSphere(e,n){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,n,i,r,a){Wo.subVectors(n,e),$a.subVectors(i,e),Xo.crossVectors(Wo,$a);let o=this.direction.dot(Xo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=s*this.direction.dot($a.crossVectors(Jn,$a));if(l<0)return null;const c=s*this.direction.dot(Wo.cross(Jn));if(c<0||l+c>o)return null;const u=-s*Jn.dot(Xo);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,a,o,s,l,c,u,f,d,p,_,v,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c,u,f,d,p,_,v,m)}set(e,n,i,r,a,o,s,l,c,u,f,d,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),a=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=o*u,p=o*f,_=s*u,v=s*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-v*c,n[9]=-s*l,n[2]=v-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d+v*s,n[4]=_*s-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-s,n[2]=p*s-_,n[6]=v+d*s,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d-v*s,n[4]=-o*f,n[8]=_+p*s,n[1]=p+_*s,n[5]=o*u,n[9]=v-d*s,n[2]=-o*c,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=s*u,v=s*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-_,n[2]=-c,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=s*l,v=s*c;n[0]=l*u,n[4]=v-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-s*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=s*l,v=s*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=s*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,C0)}lookAt(e,n,i){const r=this.elements;return Zt.subVectors(e,n),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Qn.crossVectors(i,Zt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Qn.crossVectors(i,Zt)),Qn.normalize(),ja.crossVectors(Zt,Qn),r[0]=Qn.x,r[4]=ja.x,r[8]=Zt.x,r[1]=Qn.y,r[5]=ja.y,r[9]=Zt.y,r[2]=Qn.z,r[6]=ja.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],S=i[3],y=i[7],A=i[11],I=i[15],C=r[0],P=r[4],se=r[8],E=r[12],R=r[1],Q=r[5],ne=r[9],_e=r[13],O=r[2],W=r[6],X=r[10],J=r[14],q=r[3],ae=r[7],le=r[11],me=r[15];return a[0]=o*C+s*R+l*O+c*q,a[4]=o*P+s*Q+l*W+c*ae,a[8]=o*se+s*ne+l*X+c*le,a[12]=o*E+s*_e+l*J+c*me,a[1]=u*C+f*R+d*O+p*q,a[5]=u*P+f*Q+d*W+p*ae,a[9]=u*se+f*ne+d*X+p*le,a[13]=u*E+f*_e+d*J+p*me,a[2]=_*C+v*R+m*O+h*q,a[6]=_*P+v*Q+m*W+h*ae,a[10]=_*se+v*ne+m*X+h*le,a[14]=_*E+v*_e+m*J+h*me,a[3]=S*C+y*R+A*O+I*q,a[7]=S*P+y*Q+A*W+I*ae,a[11]=S*se+y*ne+A*X+I*le,a[15]=S*E+y*_e+A*J+I*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return _*(+a*l*f-r*c*f-a*s*d+i*c*d+r*s*p-i*l*p)+v*(+n*l*p-n*c*d+a*o*d-r*o*p+r*c*u-a*l*u)+m*(+n*c*f-n*s*p-a*o*f+i*o*p+a*s*u-i*c*u)+h*(-r*s*u-n*l*f+n*s*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],S=f*m*c-v*d*c+v*l*p-s*m*p-f*l*h+s*d*h,y=_*d*c-u*m*c-_*l*p+o*m*p+u*l*h-o*d*h,A=u*v*c-_*f*c+_*s*p-o*v*p-u*s*h+o*f*h,I=_*f*l-u*v*l-_*s*d+o*v*d+u*s*m-o*f*m,C=n*S+i*y+r*A+a*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=S*P,e[1]=(v*d*a-f*m*a-v*r*p+i*m*p+f*r*h-i*d*h)*P,e[2]=(s*m*a-v*l*a+v*r*c-i*m*c-s*r*h+i*l*h)*P,e[3]=(f*l*a-s*d*a-f*r*c+i*d*c+s*r*p-i*l*p)*P,e[4]=y*P,e[5]=(u*m*a-_*d*a+_*r*p-n*m*p-u*r*h+n*d*h)*P,e[6]=(_*l*a-o*m*a-_*r*c+n*m*c+o*r*h-n*l*h)*P,e[7]=(o*d*a-u*l*a+u*r*c-n*d*c-o*r*p+n*l*p)*P,e[8]=A*P,e[9]=(_*f*a-u*v*a-_*i*p+n*v*p+u*i*h-n*f*h)*P,e[10]=(o*v*a-_*s*a+_*i*c-n*v*c-o*i*h+n*s*h)*P,e[11]=(u*s*a-o*f*a-u*i*c+n*f*c+o*i*p-n*s*p)*P,e[12]=I*P,e[13]=(u*v*r-_*f*r+_*i*d-n*v*d-u*i*m+n*f*m)*P,e[14]=(_*s*r-o*v*r-_*i*l+n*v*l+o*i*m-n*s*m)*P,e[15]=(o*f*r-u*s*r+u*i*l-n*f*l-o*i*d+n*s*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,c=a+a,u=o+o,f=s+s,d=a*c,p=a*u,_=a*f,v=o*u,m=o*f,h=s*f,S=l*c,y=l*u,A=l*f,I=i.x,C=i.y,P=i.z;return r[0]=(1-(v+h))*I,r[1]=(p+A)*I,r[2]=(_-y)*I,r[3]=0,r[4]=(p-A)*C,r[5]=(1-(d+h))*C,r[6]=(m+S)*C,r[7]=0,r[8]=(_+y)*P,r[9]=(m-S)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),s=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const c=1/a,u=1/o,f=1/s;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,n.setFromRotationMatrix(cn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,n,i,r,a,o,s=zn){const l=this.elements,c=2*a/(n-e),u=2*a/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(s===zn)p=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===ks)p=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,o,s=zn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-a),d=(n+e)*c,p=(i+r)*u;let _,v;if(s===zn)_=(o+a)*f,v=-2*f;else if(s===ks)_=a*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const sr=new G,cn=new Lt,R0=new G(0,0,0),C0=new G(1,1,1),Qn=new G,ja=new G,Zt=new G,mf=new Lt,gf=new Wi;class co{constructor(e=0,n=0,i=0,r=co.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}co.DEFAULT_ORDER="XYZ";let op=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},P0=0;const _f=new G,or=new Wi,Dn=new Lt,qa=new G,Qr=new G,L0=new G,D0=new Wi,vf=new G(1,0,0),xf=new G(0,1,0),yf=new G(0,0,1),I0={type:"added"},U0={type:"removed"};class en extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new G,n=new co,i=new Wi,r=new G(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new qe}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return or.setFromAxisAngle(e,n),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,n){return or.setFromAxisAngle(e,n),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,n){return _f.copy(e).applyQuaternion(this.quaternion),this.position.add(_f.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qa.copy(e):qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Qr,qa,this.up):Dn.lookAt(qa,Qr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(Dn),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(I0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(U0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new G(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new G,In=new G,Yo=new G,Un=new G,lr=new G,cr=new G,Sf=new G,$o=new G,jo=new G,qo=new G;let Ka=!1;class dn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),un.subVectors(e,n),r.cross(un);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){un.subVectors(r,n),In.subVectors(i,n),Yo.subVectors(e,n);const o=un.dot(un),s=un.dot(In),l=un.dot(Yo),c=In.dot(In),u=In.dot(Yo),f=o*c-s*s;if(f===0)return a.set(0,0,0),null;const d=1/f,p=(c*l-s*u)*d,_=(o*u-s*l)*d;return a.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,n,i,r,a,o,s,l){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),this.getInterpolation(e,n,i,r,a,o,s,l)}static getInterpolation(e,n,i,r,a,o,s,l){return this.getBarycoord(e,n,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(s,Un.z),l)}static isFrontFacing(e,n,i,r){return un.subVectors(i,n),In.subVectors(e,n),un.cross(In).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return dn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}getInterpolation(e,n,i,r,a){return dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let o,s;lr.subVectors(r,i),cr.subVectors(a,i),$o.subVectors(e,i);const l=lr.dot($o),c=cr.dot($o);if(l<=0&&c<=0)return n.copy(i);jo.subVectors(e,r);const u=lr.dot(jo),f=cr.dot(jo);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(lr,o);qo.subVectors(e,a);const p=lr.dot(qo),_=cr.dot(qo);if(_>=0&&p<=_)return n.copy(a);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return s=c/(c-_),n.copy(i).addScaledVector(cr,s);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Sf.subVectors(a,r),s=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(Sf,s);const h=1/(m+v+d);return o=v*h,s=d*h,n.copy(i).addScaledVector(lr,o).addScaledVector(cr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Ko(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=bc(e,1),n=Ot(n,0,1),i=Ot(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,o=2*i-a;this.r=Ko(o,a,e+1/3),this.g=Ko(o,a,e),this.b=Ko(o,a,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Rt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rt){const i=lp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return it.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Ot(Nt.r*255,0,255))*65536+Math.round(Ot(Nt.g*255,0,255))*256+Math.round(Ot(Nt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Nt.copy(this),n);const i=Nt.r,r=Nt.g,a=Nt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Nt.copy(this),n),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Rt){it.fromWorkingColorSpace(Nt.copy(this),e);const n=Nt.r,i=Nt.g,r=Nt.b;return e!==Rt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+n,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ei),e.getHSL(Za);const i=ca(ei.h,Za.h,n),r=ca(ei.s,Za.s,n),a=ca(ei.l,Za.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new rt;rt.NAMES=lp;let N0=0;class uo extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Cr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==of&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fo extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new G,Ja=new $e;class An{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=lf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ja.fromBufferAttribute(this,n),Ja.applyMatrix3(e),this.setXY(n,Ja.x,Ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_r(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_r(n,this.array)),n}setX(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_r(n,this.array)),n}setY(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_r(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_r(n,this.array)),n}setW(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array),a=zt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lf&&(e.usage=this.usage),e}}class cp extends An{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class up extends An{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zi extends An{constructor(e,n,i){super(new Float32Array(e),n,i)}}let O0=0;const rn=new Lt,Zo=new en,ur=new G,Jt=new Pa,ea=new Pa,At=new G;class Zi extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(np(e)?up:cp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new qe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,n,i){return rn.makeTranslation(e,n,i),this.applyMatrix4(rn),this}scale(e,n,i){return rn.makeScale(e,n,i),this.applyMatrix4(rn),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new zi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];Jt.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];ea.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(Jt.min,ea.min),Jt.expandByPoint(At),At.addVectors(Jt.max,ea.max),Jt.expandByPoint(At)):(Jt.expandByPoint(ea.min),Jt.expandByPoint(ea.max))}Jt.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)At.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(At));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)At.fromBufferAttribute(s,c),l&&(ur.fromBufferAttribute(e,c),At.add(ur)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,o=n.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<s;R++)c[R]=new G,u[R]=new G;const f=new G,d=new G,p=new G,_=new $e,v=new $e,m=new $e,h=new G,S=new G;function y(R,Q,ne){f.fromArray(r,R*3),d.fromArray(r,Q*3),p.fromArray(r,ne*3),_.fromArray(o,R*2),v.fromArray(o,Q*2),m.fromArray(o,ne*2),d.sub(f),p.sub(f),v.sub(_),m.sub(_);const _e=1/(v.x*m.y-m.x*v.y);isFinite(_e)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(_e),S.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(_e),c[R].add(h),c[Q].add(h),c[ne].add(h),u[R].add(S),u[Q].add(S),u[ne].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let R=0,Q=A.length;R<Q;++R){const ne=A[R],_e=ne.start,O=ne.count;for(let W=_e,X=_e+O;W<X;W+=3)y(i[W+0],i[W+1],i[W+2])}const I=new G,C=new G,P=new G,se=new G;function E(R){P.fromArray(a,R*3),se.copy(P);const Q=c[R];I.copy(Q),I.sub(P.multiplyScalar(P.dot(Q))).normalize(),C.crossVectors(se,Q);const _e=C.dot(u[R])<0?-1:1;l[R*4]=I.x,l[R*4+1]=I.y,l[R*4+2]=I.z,l[R*4+3]=_e}for(let R=0,Q=A.length;R<Q;++R){const ne=A[R],_e=ne.start,O=ne.count;for(let W=_e,X=_e+O;W<X;W+=3)E(i[W+0]),E(i[W+1]),E(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new G,a=new G,o=new G,s=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),a.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){s.isInterleavedBufferAttribute?p=l[v]*s.data.stride+s.offset:p=l[v]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new An(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zi,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);n.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ef=new Lt,Ai=new sp,Qa=new Tc,Mf=new G,fr=new G,dr=new G,hr=new G,Jo=new G,es=new G,ts=new $e,ns=new $e,is=new $e,bf=new G,Tf=new G,Af=new G,rs=new G,as=new G;class bn extends en{constructor(e=new Zi,n=new fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){es.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(Jo.fromBufferAttribute(f,e),o?es.addScaledVector(Jo,u):es.addScaledVector(Jo.sub(n),u))}n.add(es)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(a),Ai.copy(e.ray).recast(e.near),!(Qa.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Qa,Mf)===null||Ai.origin.distanceToSquared(Mf)>(e.far-e.near)**2))&&(Ef.copy(a).invert(),Ai.copy(e.ray).applyMatrix4(Ef),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ai)))}_computeIntersections(e,n,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let A=S,I=y;A<I;A+=3){const C=s.getX(A),P=s.getX(A+1),se=s.getX(A+2);r=ss(this,h,e,i,c,u,f,C,P,se),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(s.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const S=s.getX(m),y=s.getX(m+1),A=s.getX(m+2);r=ss(this,o,e,i,c,u,f,S,y,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=S,I=y;A<I;A+=3){const C=A,P=A+1,se=A+2;r=ss(this,h,e,i,c,u,f,C,P,se),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const S=m,y=m+1,A=m+2;r=ss(this,o,e,i,c,u,f,S,y,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function F0(t,e,n,i,r,a,o,s){let l;if(e.side===Yt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===gi,s),l===null)return null;as.copy(s),as.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(as);return c<n.near||c>n.far?null:{distance:c,point:as.clone(),object:t}}function ss(t,e,n,i,r,a,o,s,l,c){t.getVertexPosition(s,fr),t.getVertexPosition(l,dr),t.getVertexPosition(c,hr);const u=F0(t,e,n,i,fr,dr,hr,rs);if(u){r&&(ts.fromBufferAttribute(r,s),ns.fromBufferAttribute(r,l),is.fromBufferAttribute(r,c),u.uv=dn.getInterpolation(rs,fr,dr,hr,ts,ns,is,new $e)),a&&(ts.fromBufferAttribute(a,s),ns.fromBufferAttribute(a,l),is.fromBufferAttribute(a,c),u.uv1=dn.getInterpolation(rs,fr,dr,hr,ts,ns,is,new $e),u.uv2=u.uv1),o&&(bf.fromBufferAttribute(o,s),Tf.fromBufferAttribute(o,l),Af.fromBufferAttribute(o,c),u.normal=dn.getInterpolation(rs,fr,dr,hr,bf,Tf,Af,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new G,materialIndex:0};dn.getNormal(fr,dr,hr,f.normal),u.face=f}return u}class Ji extends Zi{constructor(e=1,n=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,a,0),_("z","y","x",1,-1,i,n,-e,o,a,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,a,4),_("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new zi(c,3)),this.setAttribute("normal",new zi(u,3)),this.setAttribute("uv",new zi(f,2));function _(v,m,h,S,y,A,I,C,P,se,E){const R=A/P,Q=I/se,ne=A/2,_e=I/2,O=C/2,W=P+1,X=se+1;let J=0,q=0;const ae=new G;for(let le=0;le<X;le++){const me=le*Q-_e;for(let pe=0;pe<W;pe++){const Z=pe*R-ne;ae[v]=Z*S,ae[m]=me*y,ae[h]=O,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[h]=C>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(pe/P),f.push(1-le/se),J+=1}}for(let le=0;le<se;le++)for(let me=0;me<P;me++){const pe=d+me+W*le,Z=d+me+W*(le+1),fe=d+(me+1)+W*(le+1),Se=d+(me+1)+W*le;l.push(pe,Z,Se),l.push(Z,fe,Se),q+=6}s.addGroup(p,q,E),p+=q,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=Br(t[n]);for(const r in i)e[r]=i[r]}return e}function B0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fp(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const k0={clone:Br,merge:Ht};var z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=B0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class dp extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=zn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends dp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const pr=-90,mr=1;class G0 extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(pr,mr,e,n);r.layers=this.layers,this.add(r);const a=new Qt(pr,mr,e,n);a.layers=this.layers,this.add(a);const o=new Qt(pr,mr,e,n);o.layers=this.layers,this.add(o);const s=new Qt(pr,mr,e,n);s.layers=this.layers,this.add(s);const l=new Qt(pr,mr,e,n);l.layers=this.layers,this.add(l);const c=new Qt(pr,mr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,o,s,l]=n;for(const c of n)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class hp extends $t{constructor(e,n,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Nr,super(e,n,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V0 extends Vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ua("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ki?Rt:sn),this.texture=new hp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:an}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ji(5,5,5),a=new Xi({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:di});a.uniforms.tEquirect.value=n;const o=new bn(r,a),s=n.minFilter;return n.minFilter===xa&&(n.minFilter=an),new G0(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(a)}}const Qo=new G,W0=new G,X0=new qe;class si{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qo.subVectors(i,n).cross(W0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||X0.getNormalMatrix(e),r=this.coplanarPoint(Qo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Tc,os=new G;class pp{constructor(e=new si,n=new si,i=new si,r=new si,a=new si,o=new si){this.planes=[e,n,i,r,a,o]}set(e,n,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zn){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],v=r[10],m=r[11],h=r[12],S=r[13],y=r[14],A=r[15];if(i[0].setComponents(l-a,d-c,m-p,A-h).normalize(),i[1].setComponents(l+a,d+c,m+p,A+h).normalize(),i[2].setComponents(l+o,d+u,m+_,A+S).normalize(),i[3].setComponents(l-o,d-u,m-_,A-S).normalize(),i[4].setComponents(l-s,d-f,m-v,A-y).normalize(),n===zn)i[5].setComponents(l+s,d+f,m+v,A+y).normalize();else if(n===ks)i[5].setComponents(s,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(os.x=r.normal.x>0?e.max.x:e.min.x,os.y=r.normal.y>0?e.max.y:e.min.y,os.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(os)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mp(){let t=null,e=!1,n=null,i=null;function r(a,o){n(a,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function Y0(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=f.byteLength,_=t.createBuffer();t.bindBuffer(u,_),t.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=t.SHORT;else if(f instanceof Uint32Array)v=t.UNSIGNED_INT;else if(f instanceof Int32Array)v=t.INT;else if(f instanceof Int8Array)v=t.BYTE;else if(f instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function a(c,u,f){const d=u.array,p=u._updateRange,_=u.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&_.length===0&&t.bufferSubData(f,0,d),_.length!==0){for(let v=0,m=_.length;v<m;v++){const h=_[v];n?t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,c,u),f.version=c.version}}return{get:o,remove:s,update:l}}class Ac extends Zi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,o=n/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,f=e/s,d=n/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const S=h*d-o;for(let y=0;y<c;y++){const A=y*f-a;_.push(A,-S,0),v.push(0,0,1),m.push(y/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<s;S++){const y=S+c*h,A=S+c*(h+1),I=S+1+c*(h+1),C=S+1+c*h;p.push(y,A,C),p.push(A,I,C)}this.setIndex(p),this.setAttribute("position",new zi(_,3)),this.setAttribute("normal",new zi(v,3)),this.setAttribute("uv",new zi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ax=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ox=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",bx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$x=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ly=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,my=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,My=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ly=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,By=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ky=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_S=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ES=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:$0,alphahash_pars_fragment:j0,alphamap_fragment:q0,alphamap_pars_fragment:K0,alphatest_fragment:Z0,alphatest_pars_fragment:J0,aomap_fragment:Q0,aomap_pars_fragment:ex,batching_pars_vertex:tx,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:rx,bsdfs:ax,iridescence_fragment:sx,bumpmap_pars_fragment:ox,clipping_planes_fragment:lx,clipping_planes_pars_fragment:cx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:fx,color_fragment:dx,color_pars_fragment:hx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:vx,displacementmap_pars_vertex:xx,displacementmap_vertex:yx,emissivemap_fragment:Sx,emissivemap_pars_fragment:Ex,colorspace_fragment:Mx,colorspace_pars_fragment:bx,envmap_fragment:Tx,envmap_common_pars_fragment:Ax,envmap_pars_fragment:wx,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:zx,envmap_vertex:Cx,fog_vertex:Px,fog_pars_vertex:Lx,fog_fragment:Dx,fog_pars_fragment:Ix,gradientmap_pars_fragment:Ux,lightmap_fragment:Nx,lightmap_pars_fragment:Ox,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:Bx,lights_pars_begin:kx,lights_toon_fragment:Hx,lights_toon_pars_fragment:Gx,lights_phong_fragment:Vx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:Yx,lights_fragment_begin:$x,lights_fragment_maps:jx,lights_fragment_end:qx,logdepthbuf_fragment:Kx,logdepthbuf_pars_fragment:Zx,logdepthbuf_pars_vertex:Jx,logdepthbuf_vertex:Qx,map_fragment:ey,map_pars_fragment:ty,map_particle_fragment:ny,map_particle_pars_fragment:iy,metalnessmap_fragment:ry,metalnessmap_pars_fragment:ay,morphcolor_vertex:sy,morphnormal_vertex:oy,morphtarget_pars_vertex:ly,morphtarget_vertex:cy,normal_fragment_begin:uy,normal_fragment_maps:fy,normal_pars_fragment:dy,normal_pars_vertex:hy,normal_vertex:py,normalmap_pars_fragment:my,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:vy,iridescence_pars_fragment:xy,opaque_fragment:yy,packing:Sy,premultiplied_alpha_fragment:Ey,project_vertex:My,dithering_fragment:by,dithering_pars_fragment:Ty,roughnessmap_fragment:Ay,roughnessmap_pars_fragment:wy,shadowmap_pars_fragment:Ry,shadowmap_pars_vertex:Cy,shadowmap_vertex:Py,shadowmask_pars_fragment:Ly,skinbase_vertex:Dy,skinning_pars_vertex:Iy,skinning_vertex:Uy,skinnormal_vertex:Ny,specularmap_fragment:Oy,specularmap_pars_fragment:Fy,tonemapping_fragment:By,tonemapping_pars_fragment:ky,transmission_fragment:zy,transmission_pars_fragment:Hy,uv_pars_fragment:Gy,uv_pars_vertex:Vy,uv_vertex:Wy,worldpos_vertex:Xy,background_vert:Yy,background_frag:$y,backgroundCube_vert:jy,backgroundCube_frag:qy,cube_vert:Ky,cube_frag:Zy,depth_vert:Jy,depth_frag:Qy,distanceRGBA_vert:eS,distanceRGBA_frag:tS,equirect_vert:nS,equirect_frag:iS,linedashed_vert:rS,linedashed_frag:aS,meshbasic_vert:sS,meshbasic_frag:oS,meshlambert_vert:lS,meshlambert_frag:cS,meshmatcap_vert:uS,meshmatcap_frag:fS,meshnormal_vert:dS,meshnormal_frag:hS,meshphong_vert:pS,meshphong_frag:mS,meshphysical_vert:gS,meshphysical_frag:_S,meshtoon_vert:vS,meshtoon_frag:xS,points_vert:yS,points_frag:SS,shadow_vert:ES,shadow_frag:MS,sprite_vert:bS,sprite_frag:TS},ye={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},En={basic:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new rt(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ht([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ht([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new rt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ht([ye.points,ye.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ht([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ht([ye.common,ye.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ht([ye.sprite,ye.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ht([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ht([ye.lights,ye.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};En.physical={uniforms:Ht([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ls={r:0,b:0,g:0};function AS(t,e,n,i,r,a,o){const s=new rt(0);let l=a===!0?0:1,c,u,f=null,d=0,p=null;function _(m,h){let S=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?n:e).get(y)),y===null?v(s,l):y&&y.isColor&&(v(y,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===oo)?(u===void 0&&(u=new bn(new Ji(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Br(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=it.getTransfer(y.colorSpace)!==at,(f!==y||d!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new bn(new Ac(2,2),new Xi({name:"BackgroundMaterial",uniforms:Br(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,h){m.getRGB(ls,fp(t)),i.buffers.color.setClear(ls.r,ls.g,ls.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(m,h=1){s.set(m),l=h,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(s,l)},render:_}}function wS(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let c=l,u=!1;function f(O,W,X,J,q){let ae=!1;if(o){const le=v(J,X,W);c!==le&&(c=le,p(c.object)),ae=h(O,J,X,q),ae&&S(O,J,X,q)}else{const le=W.wireframe===!0;(c.geometry!==J.id||c.program!==X.id||c.wireframe!==le)&&(c.geometry=J.id,c.program=X.id,c.wireframe=le,ae=!0)}q!==null&&n.update(q,t.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,se(O,W,X,J),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function d(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(O){return i.isWebGL2?t.bindVertexArray(O):a.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?t.deleteVertexArray(O):a.deleteVertexArrayOES(O)}function v(O,W,X){const J=X.wireframe===!0;let q=s[O.id];q===void 0&&(q={},s[O.id]=q);let ae=q[W.id];ae===void 0&&(ae={},q[W.id]=ae);let le=ae[J];return le===void 0&&(le=m(d()),ae[J]=le),le}function m(O){const W=[],X=[],J=[];for(let q=0;q<r;q++)W[q]=0,X[q]=0,J[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:X,attributeDivisors:J,object:O,attributes:{},index:null}}function h(O,W,X,J){const q=c.attributes,ae=W.attributes;let le=0;const me=X.getAttributes();for(const pe in me)if(me[pe].location>=0){const fe=q[pe];let Se=ae[pe];if(Se===void 0&&(pe==="instanceMatrix"&&O.instanceMatrix&&(Se=O.instanceMatrix),pe==="instanceColor"&&O.instanceColor&&(Se=O.instanceColor)),fe===void 0||fe.attribute!==Se||Se&&fe.data!==Se.data)return!0;le++}return c.attributesNum!==le||c.index!==J}function S(O,W,X,J){const q={},ae=W.attributes;let le=0;const me=X.getAttributes();for(const pe in me)if(me[pe].location>=0){let fe=ae[pe];fe===void 0&&(pe==="instanceMatrix"&&O.instanceMatrix&&(fe=O.instanceMatrix),pe==="instanceColor"&&O.instanceColor&&(fe=O.instanceColor));const Se={};Se.attribute=fe,fe&&fe.data&&(Se.data=fe.data),q[pe]=Se,le++}c.attributes=q,c.attributesNum=le,c.index=J}function y(){const O=c.newAttributes;for(let W=0,X=O.length;W<X;W++)O[W]=0}function A(O){I(O,0)}function I(O,W){const X=c.newAttributes,J=c.enabledAttributes,q=c.attributeDivisors;X[O]=1,J[O]===0&&(t.enableVertexAttribArray(O),J[O]=1),q[O]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,W),q[O]=W)}function C(){const O=c.newAttributes,W=c.enabledAttributes;for(let X=0,J=W.length;X<J;X++)W[X]!==O[X]&&(t.disableVertexAttribArray(X),W[X]=0)}function P(O,W,X,J,q,ae,le){le===!0?t.vertexAttribIPointer(O,W,X,q,ae):t.vertexAttribPointer(O,W,X,J,q,ae)}function se(O,W,X,J){if(i.isWebGL2===!1&&(O.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const q=J.attributes,ae=X.getAttributes(),le=W.defaultAttributeValues;for(const me in ae){const pe=ae[me];if(pe.location>=0){let Z=q[me];if(Z===void 0&&(me==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),me==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor)),Z!==void 0){const fe=Z.normalized,Se=Z.itemSize,Me=n.get(Z);if(Me===void 0)continue;const F=Me.buffer,ce=Me.type,ie=Me.bytesPerElement,ue=i.isWebGL2===!0&&(ce===t.INT||ce===t.UNSIGNED_INT||Z.gpuType===$h);if(Z.isInterleavedBufferAttribute){const Te=Z.data,B=Te.stride,b=Z.offset;if(Te.isInstancedInterleavedBuffer){for(let T=0;T<pe.locationSize;T++)I(pe.location+T,Te.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let T=0;T<pe.locationSize;T++)A(pe.location+T);t.bindBuffer(t.ARRAY_BUFFER,F);for(let T=0;T<pe.locationSize;T++)P(pe.location+T,Se/pe.locationSize,ce,fe,B*ie,(b+Se/pe.locationSize*T)*ie,ue)}else{if(Z.isInstancedBufferAttribute){for(let Te=0;Te<pe.locationSize;Te++)I(pe.location+Te,Z.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Te=0;Te<pe.locationSize;Te++)A(pe.location+Te);t.bindBuffer(t.ARRAY_BUFFER,F);for(let Te=0;Te<pe.locationSize;Te++)P(pe.location+Te,Se/pe.locationSize,ce,fe,Se*ie,Se/pe.locationSize*Te*ie,ue)}}else if(le!==void 0){const fe=le[me];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(pe.location,fe);break;case 3:t.vertexAttrib3fv(pe.location,fe);break;case 4:t.vertexAttrib4fv(pe.location,fe);break;default:t.vertexAttrib1fv(pe.location,fe)}}}}C()}function E(){ne();for(const O in s){const W=s[O];for(const X in W){const J=W[X];for(const q in J)_(J[q].object),delete J[q];delete W[X]}delete s[O]}}function R(O){if(s[O.id]===void 0)return;const W=s[O.id];for(const X in W){const J=W[X];for(const q in J)_(J[q].object),delete J[q];delete W[X]}delete s[O.id]}function Q(O){for(const W in s){const X=s[W];if(X[O.id]===void 0)continue;const J=X[O.id];for(const q in J)_(J[q].object),delete J[q];delete X[O.id]}}function ne(){_e(),u=!0,c!==l&&(c=l,p(c.object))}function _e(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:_e,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:Q,initAttributes:y,enableAttribute:A,disableUnusedAttributes:C}}function RS(t,e,n,i){const r=i.isWebGL2;let a;function o(u){a=u}function s(u,f){t.drawArrays(a,u,f),n.update(f,a,1)}function l(u,f,d){if(d===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](a,u,f,d),n.update(f,a,d)}function c(u,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(u[_],f[_]);else{p.multiDrawArraysWEBGL(a,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=f[v];n.update(_,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function CS(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,A=o||e.has("OES_texture_float"),I=y&&A,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:C}}function PS(t){const e=this;let n=null,i=0,r=!1,a=!1;const o=new si,s=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||a&&!m)a?u(null):c();else{const S=a?0:i,y=S*4;let A=h.clippingState||null;l.value=A,A=u(_,d,y,p);for(let I=0;I!==y;++I)A[I]=n[I];h.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,S=d.matrixWorldInverse;s.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,A=p;y!==v;++y,A+=4)o.copy(f[y]).applyMatrix4(S,s),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function LS(t){let e=new WeakMap;function n(o,s){return s===Ll?o.mapping=Nr:s===Dl&&(o.mapping=Or),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===Ll||s===Dl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new V0(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class DS extends dp{constructor(e=-1,n=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const yr=4,wf=[.125,.215,.35,.446,.526,.582],Di=20,el=new DS,Rf=new rt;let tl=null,nl=0,il=0;const Ri=(1+Math.sqrt(5))/2,gr=1/Ri,Cf=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Ri,gr),new G(0,Ri,-gr),new G(gr,0,Ri),new G(-gr,0,Ri),new G(Ri,gr,0),new G(-Ri,gr,0)];class Pf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tl,nl,il),e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Nr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:ya,format:pn,colorSpace:Vn,depthBuffer:!1},r=Lf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lf(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IS(a)),this._blurMaterial=US(a,e,n)}return r}_compileMaterial(e){const n=new bn(this._lodPlanes[0],e);this._renderer.compile(n,el)}_sceneToCubeUV(e,n,i,r){const s=new Qt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Rf),u.toneMapping=hi,u.autoClear=!1;const p=new fo({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new bn(new Ji,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Rf),v=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):S===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const y=this._cubeSize;cs(r,S*y,h>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Nr||e.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;cs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,el)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cf[(r-1)%Cf.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new bn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Di-1),v=a/_,m=isFinite(a)?1+Math.floor(u*v):Di;m>Di&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const h=[];let S=0;for(let P=0;P<Di;++P){const se=P/v,E=Math.exp(-se*se/2);h.push(E),P===0?S+=E:P<m&&(S+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const A=this._sizeLods[r],I=3*A*(r>y-yr?r-y+yr:0),C=4*(this._cubeSize-A);cs(n,I,C,3*A,2*A),l.setRenderTarget(n),l.render(f,el)}}function IS(t){const e=[],n=[],i=[];let r=t;const a=t-yr+1+wf.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let l=1/s;o>t-yr?l=wf[o-t+yr-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,h=1,S=new Float32Array(v*_*p),y=new Float32Array(m*_*p),A=new Float32Array(h*_*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,se=C>2?0:-1,E=[P,se,0,P+2/3,se,0,P+2/3,se+1,0,P,se,0,P+2/3,se+1,0,P,se+1,0];S.set(E,v*_*C),y.set(d,m*_*C);const R=[C,C,C,C,C,C];A.set(R,h*_*C)}const I=new Zi;I.setAttribute("position",new An(S,v)),I.setAttribute("uv",new An(y,m)),I.setAttribute("faceIndex",new An(A,h)),e.push(I),r>yr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lf(t,e,n){const i=new Vi(t,e,n);return i.texture.mapping=oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function US(t,e,n){const i=new Float32Array(Di),r=new G(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Df(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function If(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NS(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Ll||l===Dl,u=l===Nr||l===Or;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return n===null&&(n=new Pf(t)),f=c?n.fromEquirectangular(s,f):n.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Pf(t));const d=c?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function OS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FS(t,e,n,i){const r={},a=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function s(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,h=v.length;m<h;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let y=0,A=S.length;y<A;y+=3){const I=S[y+0],C=S[y+1],P=S[y+2];d.push(I,C,C,P,P,I)}}else if(_!==void 0){const S=_.array;v=_.version;for(let y=0,A=S.length/3-1;y<A;y+=3){const I=y+0,C=y+1,P=y+2;d.push(I,C,C,P,P,I)}}else return;const m=new(np(d)?up:cp)(d,1);m.version=v;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function u(f){const d=a.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function BS(t,e,n,i){const r=i.isWebGL2;let a;function o(p){a=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function u(p,_){t.drawElements(a,_,s,p*l),n.update(_,a,1)}function f(p,_,v){if(v===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](a,_,s,p*l,v),n.update(_,a,v)}function d(p,_,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<v;h++)this.render(p[h]/l,_[h]);else{m.multiDrawElementsWEBGL(a,_,0,s,p,0,v);let h=0;for(let S=0;S<v;S++)h+=_[S];n.update(h,a,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function kS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zS(t,e){return t[0]-e[0]}function HS(t,e){return Math.abs(e[1])-Math.abs(t[1])}function GS(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,o=new Pt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0;let m=a.get(u);if(m===void 0||m.count!==v){let W=function(){_e.dispose(),a.delete(u),u.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],se=u.morphAttributes.color||[];let E=0;y===!0&&(E=1),A===!0&&(E=2),I===!0&&(E=3);let R=u.attributes.position.count*E,Q=1;R>e.maxTextureSize&&(Q=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ne=new Float32Array(R*Q*4*v),_e=new ap(ne,R,Q,v);_e.type=ci,_e.needsUpdate=!0;const O=E*4;for(let X=0;X<v;X++){const J=C[X],q=P[X],ae=se[X],le=R*Q*4*X;for(let me=0;me<J.count;me++){const pe=me*O;y===!0&&(o.fromBufferAttribute(J,me),ne[le+pe+0]=o.x,ne[le+pe+1]=o.y,ne[le+pe+2]=o.z,ne[le+pe+3]=0),A===!0&&(o.fromBufferAttribute(q,me),ne[le+pe+4]=o.x,ne[le+pe+5]=o.y,ne[le+pe+6]=o.z,ne[le+pe+7]=0),I===!0&&(o.fromBufferAttribute(ae,me),ne[le+pe+8]=o.x,ne[le+pe+9]=o.y,ne[le+pe+10]=o.z,ne[le+pe+11]=ae.itemSize===4?o.w:1)}}m={count:v,texture:_e,size:new $e(R,Q)},a.set(u,m),u.addEventListener("dispose",W)}let h=0;for(let y=0;y<d.length;y++)h+=d[y];const S=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",S),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==_){v=[];for(let A=0;A<_;A++)v[A]=[A,0];i[u.id]=v}for(let A=0;A<_;A++){const I=v[A];I[0]=A,I[1]=d[A]}v.sort(HS);for(let A=0;A<8;A++)A<_&&v[A][1]?(s[A][0]=v[A][0],s[A][1]=v[A][1]):(s[A][0]=Number.MAX_SAFE_INTEGER,s[A][1]=0);s.sort(zS);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let S=0;for(let A=0;A<8;A++){const I=s[A],C=I[0],P=I[1];C!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+A)!==m[C]&&u.setAttribute("morphTarget"+A,m[C]),h&&u.getAttribute("morphNormal"+A)!==h[C]&&u.setAttribute("morphNormal"+A,h[C]),r[A]=P,S+=P):(m&&u.hasAttribute("morphTarget"+A)===!0&&u.deleteAttribute("morphTarget"+A),h&&u.hasAttribute("morphNormal"+A)===!0&&u.deleteAttribute("morphNormal"+A),r[A]=0)}const y=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(t,"morphTargetBaseInfluence",y),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function VS(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:o}}class gp extends $t{constructor(e,n,i,r,a,o,s,l,c,u){if(u=u!==void 0?u:Bi,u!==Bi&&u!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Bi&&(i=li),i===void 0&&u===Fr&&(i=Fi),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const _p=new $t,vp=new gp(1,1);vp.compareFunction=tp;const xp=new ap,yp=new A0,Sp=new hp,Uf=[],Nf=[],Of=new Float32Array(16),Ff=new Float32Array(9),Bf=new Float32Array(4);function Yr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=Uf[r];if(a===void 0&&(a=new Float32Array(r),Uf[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ho(t,e){let n=Nf[e];n===void 0&&(n=new Int32Array(e),Nf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function WS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function XS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function YS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function $S(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function jS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(Et(n,i))return;Bf.set(i),t.uniformMatrix2fv(this.addr,!1,Bf),Mt(n,i)}}function qS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(Et(n,i))return;Ff.set(i),t.uniformMatrix3fv(this.addr,!1,Ff),Mt(n,i)}}function KS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(Et(n,i))return;Of.set(i),t.uniformMatrix4fv(this.addr,!1,Of),Mt(n,i)}}function ZS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function JS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function QS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function eE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function tE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function iE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function rE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function aE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const a=this.type===t.SAMPLER_2D_SHADOW?vp:_p;n.setTexture2D(e||a,r)}function sE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yp,r)}function oE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Sp,r)}function lE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xp,r)}function cE(t){switch(t){case 5126:return WS;case 35664:return XS;case 35665:return YS;case 35666:return $S;case 35674:return jS;case 35675:return qS;case 35676:return KS;case 5124:case 35670:return ZS;case 35667:case 35671:return JS;case 35668:case 35672:return QS;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return lE}}function uE(t,e){t.uniform1fv(this.addr,e)}function fE(t,e){const n=Yr(e,this.size,2);t.uniform2fv(this.addr,n)}function dE(t,e){const n=Yr(e,this.size,3);t.uniform3fv(this.addr,n)}function hE(t,e){const n=Yr(e,this.size,4);t.uniform4fv(this.addr,n)}function pE(t,e){const n=Yr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mE(t,e){const n=Yr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gE(t,e){const n=Yr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _E(t,e){t.uniform1iv(this.addr,e)}function vE(t,e){t.uniform2iv(this.addr,e)}function xE(t,e){t.uniform3iv(this.addr,e)}function yE(t,e){t.uniform4iv(this.addr,e)}function SE(t,e){t.uniform1uiv(this.addr,e)}function EE(t,e){t.uniform2uiv(this.addr,e)}function ME(t,e){t.uniform3uiv(this.addr,e)}function bE(t,e){t.uniform4uiv(this.addr,e)}function TE(t,e,n){const i=this.cache,r=e.length,a=ho(n,r);Et(i,a)||(t.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||_p,a[o])}function AE(t,e,n){const i=this.cache,r=e.length,a=ho(n,r);Et(i,a)||(t.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||yp,a[o])}function wE(t,e,n){const i=this.cache,r=e.length,a=ho(n,r);Et(i,a)||(t.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Sp,a[o])}function RE(t,e,n){const i=this.cache,r=e.length,a=ho(n,r);Et(i,a)||(t.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||xp,a[o])}function CE(t){switch(t){case 5126:return uE;case 35664:return fE;case 35665:return dE;case 35666:return hE;case 35674:return pE;case 35675:return mE;case 35676:return gE;case 5124:case 35670:return _E;case 35667:case 35671:return vE;case 35668:case 35672:return xE;case 35669:case 35673:return yE;case 5125:return SE;case 36294:return EE;case 36295:return ME;case 36296:return bE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return AE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return RE}}class PE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cE(n.type)}}class LE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CE(n.type)}}class DE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,n[s.id],i)}}}const rl=/(\w+)(\])?(\[|\.)?/g;function kf(t,e){t.seq.push(e),t.map[e.id]=e}function IE(t,e,n){const i=t.name,r=i.length;for(rl.lastIndex=0;;){const a=rl.exec(i),o=rl.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){kf(n,c===void 0?new PE(s,t,e):new LE(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new DE(s),kf(n,f)),n=f}}}class Ts{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),o=e.getUniformLocation(n,a.name);IE(a,o,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function zf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UE=37297;let NE=0;function OE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}function FE(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Bs&&n===Fs?i="LinearDisplayP3ToLinearSRGB":e===Fs&&n===Bs&&(i="LinearSRGBToLinearDisplayP3"),t){case Vn:case lo:return[i,"LinearTransferOETF"];case Rt:case Mc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Hf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+OE(t.getShaderSource(e),o)}else return r}function BE(t,e){const n=FE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function kE(t,e){let n;switch(e){case Uv:n="Linear";break;case Nv:n="Reinhard";break;case Ov:n="OptimizedCineon";break;case Fv:n="ACESFilmic";break;case kv:n="AgX";break;case Bv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function zE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function HE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Sr).join(`
`)}function GE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function Sr(t){return t!==""}function Gf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(t){return t.replace(WE,YE)}const XE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YE(t,e){let n=Xe[e];if(n===void 0){const i=XE.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fl(n)}const $E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(t){return t.replace($E,jE)}function jE(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Xf(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===lv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function KE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Nr:case Or:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function JE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xh:e="ENVMAP_BLENDING_MULTIPLY";break;case Dv:e="ENVMAP_BLENDING_MIX";break;case Iv:e="ENVMAP_BLENDING_ADD";break}return e}function QE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function eM(t,e,n,i){const r=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=qE(n),c=KE(n),u=ZE(n),f=JE(n),d=QE(n),p=n.isWebGL2?"":zE(n),_=HE(n),v=GE(a),m=r.createProgram();let h,S,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Sr).join(`
`),h.length>0&&(h+=`
`),S=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Sr).join(`
`),S.length>0&&(S+=`
`)):(h=[Xf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),S=[p,Xf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==hi?kE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,BE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sr).join(`
`)),o=Fl(o),o=Gf(o,n),o=Vf(o,n),s=Fl(s),s=Gf(s,n),s=Vf(s,n),o=Wf(o),s=Wf(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,S=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const A=y+h+o,I=y+S+s,C=zf(r,r.VERTEX_SHADER,A),P=zf(r,r.FRAGMENT_SHADER,I);r.attachShader(m,C),r.attachShader(m,P),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function se(ne){if(t.debug.checkShaderErrors){const _e=r.getProgramInfoLog(m).trim(),O=r.getShaderInfoLog(C).trim(),W=r.getShaderInfoLog(P).trim();let X=!0,J=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,P);else{const q=Hf(r,C,"vertex"),ae=Hf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+_e+`
`+q+`
`+ae)}else _e!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_e):(O===""||W==="")&&(J=!1);J&&(ne.diagnostics={runnable:X,programLog:_e,vertexShader:{log:O,prefix:h},fragmentShader:{log:W,prefix:S}})}r.deleteShader(C),r.deleteShader(P),E=new Ts(r,m),R=VE(r,m)}let E;this.getUniforms=function(){return E===void 0&&se(this),E};let R;this.getAttributes=function(){return R===void 0&&se(this),R};let Q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=r.getProgramParameter(m,UE)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=P,this}let tM=0;class nM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iM(e),n.set(e,i)),i}}class iM{constructor(e){this.id=tM++,this.code=e,this.usedTimes=0}}function rM(t,e,n,i,r,a,o){const s=new op,l=new nM,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function m(E,R,Q,ne,_e){const O=ne.fog,W=_e.geometry,X=E.isMeshStandardMaterial?ne.environment:null,J=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),q=J&&J.mapping===oo?J.image.height:null,ae=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=le!==void 0?le.length:0;let pe=0;W.morphAttributes.position!==void 0&&(pe=1),W.morphAttributes.normal!==void 0&&(pe=2),W.morphAttributes.color!==void 0&&(pe=3);let Z,fe,Se,Me;if(ae){const gt=En[ae];Z=gt.vertexShader,fe=gt.fragmentShader}else Z=E.vertexShader,fe=E.fragmentShader,l.update(E),Se=l.getVertexShaderID(E),Me=l.getFragmentShaderID(E);const F=t.getRenderTarget(),ce=_e.isInstancedMesh===!0,ie=_e.isBatchedMesh===!0,ue=!!E.map,Te=!!E.matcap,B=!!J,b=!!E.aoMap,T=!!E.lightMap,U=!!E.bumpMap,k=!!E.normalMap,Y=!!E.displacementMap,ee=!!E.emissiveMap,x=!!E.metalnessMap,g=!!E.roughnessMap,L=E.anisotropy>0,N=E.clearcoat>0,z=E.iridescence>0,V=E.sheen>0,oe=E.transmission>0,te=L&&!!E.anisotropyMap,de=N&&!!E.clearcoatMap,xe=N&&!!E.clearcoatNormalMap,Re=N&&!!E.clearcoatRoughnessMap,re=z&&!!E.iridescenceMap,He=z&&!!E.iridescenceThicknessMap,Be=V&&!!E.sheenColorMap,Ne=V&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,be=!!E.specularColorMap,w=!!E.specularIntensityMap,he=oe&&!!E.transmissionMap,De=oe&&!!E.thicknessMap,Ce=!!E.gradientMap,ge=!!E.alphaMap,D=E.alphaTest>0,ve=!!E.alphaHash,Ee=!!E.extensions,Oe=!!W.attributes.uv1,Ue=!!W.attributes.uv2,Ze=!!W.attributes.uv3;let Je=hi;return E.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Je=t.toneMapping),{isWebGL2:u,shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:Z,fragmentShader:fe,defines:E.defines,customVertexShaderID:Se,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ie,instancing:ce,instancingColor:ce&&_e.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:F===null?t.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Vn,map:ue,matcap:Te,envMap:B,envMapMode:B&&J.mapping,envMapCubeUVHeight:q,aoMap:b,lightMap:T,bumpMap:U,normalMap:k,displacementMap:d&&Y,emissiveMap:ee,normalMapObjectSpace:k&&E.normalMapType===Jv,normalMapTangentSpace:k&&E.normalMapType===Zv,metalnessMap:x,roughnessMap:g,anisotropy:L,anisotropyMap:te,clearcoat:N,clearcoatMap:de,clearcoatNormalMap:xe,clearcoatRoughnessMap:Re,iridescence:z,iridescenceMap:re,iridescenceThicknessMap:He,sheen:V,sheenColorMap:Be,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:be,specularIntensityMap:w,transmission:oe,transmissionMap:he,thicknessMap:De,gradientMap:Ce,opaque:E.transparent===!1&&E.blending===Cr,alphaMap:ge,alphaTest:D,alphaHash:ve,combine:E.combine,mapUv:ue&&v(E.map.channel),aoMapUv:b&&v(E.aoMap.channel),lightMapUv:T&&v(E.lightMap.channel),bumpMapUv:U&&v(E.bumpMap.channel),normalMapUv:k&&v(E.normalMap.channel),displacementMapUv:Y&&v(E.displacementMap.channel),emissiveMapUv:ee&&v(E.emissiveMap.channel),metalnessMapUv:x&&v(E.metalnessMap.channel),roughnessMapUv:g&&v(E.roughnessMap.channel),anisotropyMapUv:te&&v(E.anisotropyMap.channel),clearcoatMapUv:de&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:He&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(E.sheenRoughnessMap.channel),specularMapUv:Pe&&v(E.specularMap.channel),specularColorMapUv:be&&v(E.specularColorMap.channel),specularIntensityMapUv:w&&v(E.specularIntensityMap.channel),transmissionMapUv:he&&v(E.transmissionMap.channel),thicknessMapUv:De&&v(E.thicknessMap.channel),alphaMapUv:ge&&v(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(k||L),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ue,vertexUv3s:Ze,pointsUvs:_e.isPoints===!0&&!!W.attributes.uv&&(ue||ge),fog:!!O,useFog:E.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:_e.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:Je,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ue&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Bn,flipSided:E.side===Yt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ee&&E.extensions.derivatives===!0,extensionFragDepth:Ee&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Q in E.defines)R.push(Q),R.push(E.defines[Q]);return E.isRawShaderMaterial===!1&&(S(R,E),y(R,E),R.push(t.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function S(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function y(E,R){s.disableAll(),R.isWebGL2&&s.enable(0),R.supportsVertexTextures&&s.enable(1),R.instancing&&s.enable(2),R.instancingColor&&s.enable(3),R.matcap&&s.enable(4),R.envMap&&s.enable(5),R.normalMapObjectSpace&&s.enable(6),R.normalMapTangentSpace&&s.enable(7),R.clearcoat&&s.enable(8),R.iridescence&&s.enable(9),R.alphaTest&&s.enable(10),R.vertexColors&&s.enable(11),R.vertexAlphas&&s.enable(12),R.vertexUv1s&&s.enable(13),R.vertexUv2s&&s.enable(14),R.vertexUv3s&&s.enable(15),R.vertexTangents&&s.enable(16),R.anisotropy&&s.enable(17),R.alphaHash&&s.enable(18),R.batching&&s.enable(19),E.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.skinning&&s.enable(4),R.morphTargets&&s.enable(5),R.morphNormals&&s.enable(6),R.morphColors&&s.enable(7),R.premultipliedAlpha&&s.enable(8),R.shadowMapEnabled&&s.enable(9),R.useLegacyLights&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),E.push(s.mask)}function A(E){const R=_[E.type];let Q;if(R){const ne=En[R];Q=k0.clone(ne.uniforms)}else Q=E.uniforms;return Q}function I(E,R){let Q;for(let ne=0,_e=c.length;ne<_e;ne++){const O=c[ne];if(O.cacheKey===R){Q=O,++Q.usedTimes;break}}return Q===void 0&&(Q=new eM(t,R,E,a),c.push(Q)),Q}function C(E){if(--E.usedTimes===0){const R=c.indexOf(E);c[R]=c[c.length-1],c.pop(),E.destroy()}}function P(E){l.remove(E)}function se(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:A,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:se}}function aM(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function sM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $f(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function s(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||sM),i.length>1&&i.sort(d||Yf),r.length>1&&r.sort(d||Yf)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function oM(){let t=new WeakMap;function e(i,r){const a=t.get(i);let o;return a===void 0?(o=new $f,t.set(i,[o])):r>=a.length?(o=new $f,a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function lM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new rt};break;case"SpotLight":n={position:new G,direction:new G,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function cM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uM=0;function fM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dM(t,e){const n=new lM,i=cM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new G);const a=new G,o=new Lt,s=new Lt;function l(u,f){let d=0,p=0,_=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let v=0,m=0,h=0,S=0,y=0,A=0,I=0,C=0,P=0,se=0,E=0;u.sort(fM);const R=f===!0?Math.PI:1;for(let ne=0,_e=u.length;ne<_e;ne++){const O=u[ne],W=O.color,X=O.intensity,J=O.distance,q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=W.r*X*R,p+=W.g*X*R,_+=W.b*X*R;else if(O.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(O.sh.coefficients[ae],X);E++}else if(O.isDirectionalLight){const ae=n.get(O);if(ae.color.copy(O.color).multiplyScalar(O.intensity*R),O.castShadow){const le=O.shadow,me=i.get(O);me.shadowBias=le.bias,me.shadowNormalBias=le.normalBias,me.shadowRadius=le.radius,me.shadowMapSize=le.mapSize,r.directionalShadow[v]=me,r.directionalShadowMap[v]=q,r.directionalShadowMatrix[v]=O.shadow.matrix,A++}r.directional[v]=ae,v++}else if(O.isSpotLight){const ae=n.get(O);ae.position.setFromMatrixPosition(O.matrixWorld),ae.color.copy(W).multiplyScalar(X*R),ae.distance=J,ae.coneCos=Math.cos(O.angle),ae.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ae.decay=O.decay,r.spot[h]=ae;const le=O.shadow;if(O.map&&(r.spotLightMap[P]=O.map,P++,le.updateMatrices(O),O.castShadow&&se++),r.spotLightMatrix[h]=le.matrix,O.castShadow){const me=i.get(O);me.shadowBias=le.bias,me.shadowNormalBias=le.normalBias,me.shadowRadius=le.radius,me.shadowMapSize=le.mapSize,r.spotShadow[h]=me,r.spotShadowMap[h]=q,C++}h++}else if(O.isRectAreaLight){const ae=n.get(O);ae.color.copy(W).multiplyScalar(X),ae.halfWidth.set(O.width*.5,0,0),ae.halfHeight.set(0,O.height*.5,0),r.rectArea[S]=ae,S++}else if(O.isPointLight){const ae=n.get(O);if(ae.color.copy(O.color).multiplyScalar(O.intensity*R),ae.distance=O.distance,ae.decay=O.decay,O.castShadow){const le=O.shadow,me=i.get(O);me.shadowBias=le.bias,me.shadowNormalBias=le.normalBias,me.shadowRadius=le.radius,me.shadowMapSize=le.mapSize,me.shadowCameraNear=le.camera.near,me.shadowCameraFar=le.camera.far,r.pointShadow[m]=me,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=O.shadow.matrix,I++}r.point[m]=ae,m++}else if(O.isHemisphereLight){const ae=n.get(O);ae.skyColor.copy(O.color).multiplyScalar(X*R),ae.groundColor.copy(O.groundColor).multiplyScalar(X*R),r.hemi[y]=ae,y++}}S>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const Q=r.hash;(Q.directionalLength!==v||Q.pointLength!==m||Q.spotLength!==h||Q.rectAreaLength!==S||Q.hemiLength!==y||Q.numDirectionalShadows!==A||Q.numPointShadows!==I||Q.numSpotShadows!==C||Q.numSpotMaps!==P||Q.numLightProbes!==E)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=S,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=C+P-se,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=se,r.numLightProbes=E,Q.directionalLength=v,Q.pointLength=m,Q.spotLength=h,Q.rectAreaLength=S,Q.hemiLength=y,Q.numDirectionalShadows=A,Q.numPointShadows=I,Q.numSpotShadows=C,Q.numSpotMaps=P,Q.numLightProbes=E,r.version=uM++)}function c(u,f){let d=0,p=0,_=0,v=0,m=0;const h=f.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const A=u[S];if(A.isDirectionalLight){const I=r.directional[d];I.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(h),d++}else if(A.isSpotLight){const I=r.spot[_];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(h),I.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(h),_++}else if(A.isRectAreaLight){const I=r.rectArea[v];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(h),s.identity(),o.copy(A.matrixWorld),o.premultiply(h),s.extractRotation(o),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(s),I.halfHeight.applyMatrix4(s),v++}else if(A.isPointLight){const I=r.point[p];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(h),p++}else if(A.isHemisphereLight){const I=r.hemi[m];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function jf(t,e){const n=new dM(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function hM(t,e){let n=new WeakMap;function i(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new jf(t,e),n.set(a,[l])):o>=s.length?(l=new jf(t,e),s.push(l)):l=s[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class pM extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mM extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vM(t,e,n){let i=new pp;const r=new $e,a=new $e,o=new Pt,s=new pM({depthPacking:Kv}),l=new mM,c={},u=n.maxTextureSize,f={[gi]:Yt,[Yt]:gi,[Bn]:Bn},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:gM,fragmentShader:_M}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Zi;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let h=this.type;this.render=function(C,P,se){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),R=t.getActiveCubeFace(),Q=t.getActiveMipmapLevel(),ne=t.state;ne.setBlending(di),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const _e=h!==On&&this.type===On,O=h===On&&this.type!==On;for(let W=0,X=C.length;W<X;W++){const J=C[W],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ae=q.getFrameExtents();if(r.multiply(ae),a.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ae.x),r.x=a.x*ae.x,q.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ae.y),r.y=a.y*ae.y,q.mapSize.y=a.y)),q.map===null||_e===!0||O===!0){const me=this.type!==On?{minFilter:Gt,magFilter:Gt}:{};q.map!==null&&q.map.dispose(),q.map=new Vi(r.x,r.y,me),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const le=q.getViewportCount();for(let me=0;me<le;me++){const pe=q.getViewport(me);o.set(a.x*pe.x,a.y*pe.y,a.x*pe.z,a.y*pe.w),ne.viewport(o),q.updateMatrices(J,me),i=q.getFrustum(),A(P,se,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===On&&S(q,se),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(E,R,Q)};function S(C,P){const se=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Vi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(P,null,se,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(P,null,se,p,v,null)}function y(C,P,se,E){let R=null;const Q=se.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Q!==void 0)R=Q;else if(R=se.isPointLight===!0?l:s,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ne=R.uuid,_e=P.uuid;let O=c[ne];O===void 0&&(O={},c[ne]=O);let W=O[_e];W===void 0&&(W=R.clone(),O[_e]=W,P.addEventListener("dispose",I)),R=W}if(R.visible=P.visible,R.wireframe=P.wireframe,E===On?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:f[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,se.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ne=t.properties.get(R);ne.light=se}return R}function A(C,P,se,E,R){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&R===On)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld);const _e=e.update(C),O=C.material;if(Array.isArray(O)){const W=_e.groups;for(let X=0,J=W.length;X<J;X++){const q=W[X],ae=O[q.materialIndex];if(ae&&ae.visible){const le=y(C,ae,E,R);C.onBeforeShadow(t,C,P,se,_e,le,q),t.renderBufferDirect(se,null,_e,le,C,q),C.onAfterShadow(t,C,P,se,_e,le,q)}}}else if(O.visible){const W=y(C,O,E,R);C.onBeforeShadow(t,C,P,se,_e,W,null),t.renderBufferDirect(se,null,_e,W,C,null),C.onAfterShadow(t,C,P,se,_e,W,null)}}const ne=C.children;for(let _e=0,O=ne.length;_e<O;_e++)A(ne[_e],P,se,E,R)}function I(C){C.target.removeEventListener("dispose",I);for(const se in c){const E=c[se],R=C.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function xM(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const ve=new Pt;let Ee=null;const Oe=new Pt(0,0,0,0);return{setMask:function(Ue){Ee!==Ue&&!D&&(t.colorMask(Ue,Ue,Ue,Ue),Ee=Ue)},setLocked:function(Ue){D=Ue},setClear:function(Ue,Ze,Je,dt,gt){gt===!0&&(Ue*=dt,Ze*=dt,Je*=dt),ve.set(Ue,Ze,Je,dt),Oe.equals(ve)===!1&&(t.clearColor(Ue,Ze,Je,dt),Oe.copy(ve))},reset:function(){D=!1,Ee=null,Oe.set(-1,0,0,0)}}}function a(){let D=!1,ve=null,Ee=null,Oe=null;return{setTest:function(Ue){Ue?ie(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Ue){ve!==Ue&&!D&&(t.depthMask(Ue),ve=Ue)},setFunc:function(Ue){if(Ee!==Ue){switch(Ue){case Tv:t.depthFunc(t.NEVER);break;case Av:t.depthFunc(t.ALWAYS);break;case wv:t.depthFunc(t.LESS);break;case Ns:t.depthFunc(t.LEQUAL);break;case Rv:t.depthFunc(t.EQUAL);break;case Cv:t.depthFunc(t.GEQUAL);break;case Pv:t.depthFunc(t.GREATER);break;case Lv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=Ue}},setLocked:function(Ue){D=Ue},setClear:function(Ue){Oe!==Ue&&(t.clearDepth(Ue),Oe=Ue)},reset:function(){D=!1,ve=null,Ee=null,Oe=null}}}function o(){let D=!1,ve=null,Ee=null,Oe=null,Ue=null,Ze=null,Je=null,dt=null,gt=null;return{setTest:function(et){D||(et?ie(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(et){ve!==et&&!D&&(t.stencilMask(et),ve=et)},setFunc:function(et,vt,xn){(Ee!==et||Oe!==vt||Ue!==xn)&&(t.stencilFunc(et,vt,xn),Ee=et,Oe=vt,Ue=xn)},setOp:function(et,vt,xn){(Ze!==et||Je!==vt||dt!==xn)&&(t.stencilOp(et,vt,xn),Ze=et,Je=vt,dt=xn)},setLocked:function(et){D=et},setClear:function(et){gt!==et&&(t.clearStencil(et),gt=et)},reset:function(){D=!1,ve=null,Ee=null,Oe=null,Ue=null,Ze=null,Je=null,dt=null,gt=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,v=[],m=null,h=!1,S=null,y=null,A=null,I=null,C=null,P=null,se=null,E=new rt(0,0,0),R=0,Q=!1,ne=null,_e=null,O=null,W=null,X=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ae=0;const le=t.getParameter(t.VERSION);le.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(le)[1]),q=ae>=1):le.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),q=ae>=2);let me=null,pe={};const Z=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),Se=new Pt().fromArray(Z),Me=new Pt().fromArray(fe);function F(D,ve,Ee,Oe){const Ue=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(D,Ze),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<Ee;Je++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(ve,0,t.RGBA,1,1,Oe,0,t.RGBA,t.UNSIGNED_BYTE,Ue):t.texImage2D(ve+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ue);return Ze}const ce={};ce[t.TEXTURE_2D]=F(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=F(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ce[t.TEXTURE_2D_ARRAY]=F(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=F(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ie(t.DEPTH_TEST),l.setFunc(Ns),ee(!1),x(Ru),ie(t.CULL_FACE),k(di);function ie(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function ue(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Te(D,ve){return p[D]!==ve?(t.bindFramebuffer(D,ve),p[D]=ve,i&&(D===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ve),D===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ve)),!0):!1}function B(D,ve){let Ee=v,Oe=!1;if(D)if(Ee=_.get(ve),Ee===void 0&&(Ee=[],_.set(ve,Ee)),D.isWebGLMultipleRenderTargets){const Ue=D.texture;if(Ee.length!==Ue.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,Je=Ue.length;Ze<Je;Ze++)Ee[Ze]=t.COLOR_ATTACHMENT0+Ze;Ee.length=Ue.length,Oe=!0}}else Ee[0]!==t.COLOR_ATTACHMENT0&&(Ee[0]=t.COLOR_ATTACHMENT0,Oe=!0);else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Oe=!0);Oe&&(n.isWebGL2?t.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function b(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const T={[Li]:t.FUNC_ADD,[uv]:t.FUNC_SUBTRACT,[fv]:t.FUNC_REVERSE_SUBTRACT};if(i)T[Du]=t.MIN,T[Iu]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(T[Du]=D.MIN_EXT,T[Iu]=D.MAX_EXT)}const U={[dv]:t.ZERO,[hv]:t.ONE,[pv]:t.SRC_COLOR,[Cl]:t.SRC_ALPHA,[yv]:t.SRC_ALPHA_SATURATE,[vv]:t.DST_COLOR,[gv]:t.DST_ALPHA,[mv]:t.ONE_MINUS_SRC_COLOR,[Pl]:t.ONE_MINUS_SRC_ALPHA,[xv]:t.ONE_MINUS_DST_COLOR,[_v]:t.ONE_MINUS_DST_ALPHA,[Sv]:t.CONSTANT_COLOR,[Ev]:t.ONE_MINUS_CONSTANT_COLOR,[Mv]:t.CONSTANT_ALPHA,[bv]:t.ONE_MINUS_CONSTANT_ALPHA};function k(D,ve,Ee,Oe,Ue,Ze,Je,dt,gt,et){if(D===di){h===!0&&(ue(t.BLEND),h=!1);return}if(h===!1&&(ie(t.BLEND),h=!0),D!==cv){if(D!==S||et!==Q){if((y!==Li||C!==Li)&&(t.blendEquation(t.FUNC_ADD),y=Li,C=Li),et)switch(D){case Cr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cu:t.blendFunc(t.ONE,t.ONE);break;case Pu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Cr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Pu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,I=null,P=null,se=null,E.set(0,0,0),R=0,S=D,Q=et}return}Ue=Ue||ve,Ze=Ze||Ee,Je=Je||Oe,(ve!==y||Ue!==C)&&(t.blendEquationSeparate(T[ve],T[Ue]),y=ve,C=Ue),(Ee!==A||Oe!==I||Ze!==P||Je!==se)&&(t.blendFuncSeparate(U[Ee],U[Oe],U[Ze],U[Je]),A=Ee,I=Oe,P=Ze,se=Je),(dt.equals(E)===!1||gt!==R)&&(t.blendColor(dt.r,dt.g,dt.b,gt),E.copy(dt),R=gt),S=D,Q=!1}function Y(D,ve){D.side===Bn?ue(t.CULL_FACE):ie(t.CULL_FACE);let Ee=D.side===Yt;ve&&(Ee=!Ee),ee(Ee),D.blending===Cr&&D.transparent===!1?k(di):k(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const Oe=D.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),L(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){ne!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),ne=D)}function x(D){D!==sv?(ie(t.CULL_FACE),D!==_e&&(D===Ru?t.cullFace(t.BACK):D===ov?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),_e=D}function g(D){D!==O&&(q&&t.lineWidth(D),O=D)}function L(D,ve,Ee){D?(ie(t.POLYGON_OFFSET_FILL),(W!==ve||X!==Ee)&&(t.polygonOffset(ve,Ee),W=ve,X=Ee)):ue(t.POLYGON_OFFSET_FILL)}function N(D){D?ie(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function z(D){D===void 0&&(D=t.TEXTURE0+J-1),me!==D&&(t.activeTexture(D),me=D)}function V(D,ve,Ee){Ee===void 0&&(me===null?Ee=t.TEXTURE0+J-1:Ee=me);let Oe=pe[Ee];Oe===void 0&&(Oe={type:void 0,texture:void 0},pe[Ee]=Oe),(Oe.type!==D||Oe.texture!==ve)&&(me!==Ee&&(t.activeTexture(Ee),me=Ee),t.bindTexture(D,ve||ce[D]),Oe.type=D,Oe.texture=ve)}function oe(){const D=pe[me];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function w(D){Se.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Se.copy(D))}function he(D){Me.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Me.copy(D))}function De(D,ve){let Ee=f.get(ve);Ee===void 0&&(Ee=new WeakMap,f.set(ve,Ee));let Oe=Ee.get(D);Oe===void 0&&(Oe=t.getUniformBlockIndex(ve,D.name),Ee.set(D,Oe))}function Ce(D,ve){const Oe=f.get(ve).get(D);u.get(ve)!==Oe&&(t.uniformBlockBinding(ve,Oe,D.__bindingPointIndex),u.set(ve,Oe))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},me=null,pe={},p={},_=new WeakMap,v=[],m=null,h=!1,S=null,y=null,A=null,I=null,C=null,P=null,se=null,E=new rt(0,0,0),R=0,Q=!1,ne=null,_e=null,O=null,W=null,X=null,Se.set(0,0,t.canvas.width,t.canvas.height),Me.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:ie,disable:ue,bindFramebuffer:Te,drawBuffers:B,useProgram:b,setBlending:k,setMaterial:Y,setFlipSided:ee,setCullFace:x,setLineWidth:g,setPolygonOffset:L,setScissorTest:N,activeTexture:z,bindTexture:V,unbindTexture:oe,compressedTexImage2D:te,compressedTexImage3D:de,texImage2D:Pe,texImage3D:be,updateUBOMapping:De,uniformBlockBinding:Ce,texStorage2D:Be,texStorage3D:Ne,texSubImage2D:xe,texSubImage3D:Re,compressedTexSubImage2D:re,compressedTexSubImage3D:He,scissor:w,viewport:he,reset:ge}}function yM(t,e,n,i,r,a,o){const s=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,g){return p?new OffscreenCanvas(x,g):Ea("canvas")}function v(x,g,L,N){let z=1;if((x.width>N||x.height>N)&&(z=N/Math.max(x.width,x.height)),z<1||g===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const V=g?zs:Math.floor,oe=V(z*x.width),te=V(z*x.height);f===void 0&&(f=_(oe,te));const de=L?_(oe,te):f;return de.width=oe,de.height=te,de.getContext("2d").drawImage(x,0,0,oe,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+oe+"x"+te+")."),de}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function m(x){return Ol(x.width)&&Ol(x.height)}function h(x){return s?!1:x.wrapS!==hn||x.wrapT!==hn||x.minFilter!==Gt&&x.minFilter!==an}function S(x,g){return x.generateMipmaps&&g&&x.minFilter!==Gt&&x.minFilter!==an}function y(x){t.generateMipmap(x)}function A(x,g,L,N,z=!1){if(s===!1)return g;if(x!==null){if(t[x]!==void 0)return t[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V=g;if(g===t.RED&&(L===t.FLOAT&&(V=t.R32F),L===t.HALF_FLOAT&&(V=t.R16F),L===t.UNSIGNED_BYTE&&(V=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(V=t.R8UI),L===t.UNSIGNED_SHORT&&(V=t.R16UI),L===t.UNSIGNED_INT&&(V=t.R32UI),L===t.BYTE&&(V=t.R8I),L===t.SHORT&&(V=t.R16I),L===t.INT&&(V=t.R32I)),g===t.RG&&(L===t.FLOAT&&(V=t.RG32F),L===t.HALF_FLOAT&&(V=t.RG16F),L===t.UNSIGNED_BYTE&&(V=t.RG8)),g===t.RGBA){const oe=z?Os:it.getTransfer(N);L===t.FLOAT&&(V=t.RGBA32F),L===t.HALF_FLOAT&&(V=t.RGBA16F),L===t.UNSIGNED_BYTE&&(V=oe===at?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function I(x,g,L){return S(x,L)===!0||x.isFramebufferTexture&&x.minFilter!==Gt&&x.minFilter!==an?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function C(x){return x===Gt||x===Uu||x===Lo?t.NEAREST:t.LINEAR}function P(x){const g=x.target;g.removeEventListener("dispose",P),E(g),g.isVideoTexture&&u.delete(g)}function se(x){const g=x.target;g.removeEventListener("dispose",se),Q(g)}function E(x){const g=i.get(x);if(g.__webglInit===void 0)return;const L=x.source,N=d.get(L);if(N){const z=N[g.__cacheKey];z.usedTimes--,z.usedTimes===0&&R(x),Object.keys(N).length===0&&d.delete(L)}i.remove(x)}function R(x){const g=i.get(x);t.deleteTexture(g.__webglTexture);const L=x.source,N=d.get(L);delete N[g.__cacheKey],o.memory.textures--}function Q(x){const g=x.texture,L=i.get(x),N=i.get(g);if(N.__webglTexture!==void 0&&(t.deleteTexture(N.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(L.__webglFramebuffer[z]))for(let V=0;V<L.__webglFramebuffer[z].length;V++)t.deleteFramebuffer(L.__webglFramebuffer[z][V]);else t.deleteFramebuffer(L.__webglFramebuffer[z]);L.__webglDepthbuffer&&t.deleteRenderbuffer(L.__webglDepthbuffer[z])}else{if(Array.isArray(L.__webglFramebuffer))for(let z=0;z<L.__webglFramebuffer.length;z++)t.deleteFramebuffer(L.__webglFramebuffer[z]);else t.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&t.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&t.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let z=0;z<L.__webglColorRenderbuffer.length;z++)L.__webglColorRenderbuffer[z]&&t.deleteRenderbuffer(L.__webglColorRenderbuffer[z]);L.__webglDepthRenderbuffer&&t.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let z=0,V=g.length;z<V;z++){const oe=i.get(g[z]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(g[z])}i.remove(g),i.remove(x)}let ne=0;function _e(){ne=0}function O(){const x=ne;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),ne+=1,x}function W(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function X(x,g){const L=i.get(x);if(x.isVideoTexture&&Y(x),x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){const N=x.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(L,x,g);return}}n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function J(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){Se(L,x,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function q(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){Se(L,x,g);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function ae(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){Me(L,x,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}const le={[Il]:t.REPEAT,[hn]:t.CLAMP_TO_EDGE,[Ul]:t.MIRRORED_REPEAT},me={[Gt]:t.NEAREST,[Uu]:t.NEAREST_MIPMAP_NEAREST,[Lo]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[zv]:t.LINEAR_MIPMAP_NEAREST,[xa]:t.LINEAR_MIPMAP_LINEAR},pe={[Qv]:t.NEVER,[a0]:t.ALWAYS,[e0]:t.LESS,[tp]:t.LEQUAL,[t0]:t.EQUAL,[r0]:t.GEQUAL,[n0]:t.GREATER,[i0]:t.NOTEQUAL};function Z(x,g,L){if(L?(t.texParameteri(x,t.TEXTURE_WRAP_S,le[g.wrapS]),t.texParameteri(x,t.TEXTURE_WRAP_T,le[g.wrapT]),(x===t.TEXTURE_3D||x===t.TEXTURE_2D_ARRAY)&&t.texParameteri(x,t.TEXTURE_WRAP_R,le[g.wrapR]),t.texParameteri(x,t.TEXTURE_MAG_FILTER,me[g.magFilter]),t.texParameteri(x,t.TEXTURE_MIN_FILTER,me[g.minFilter])):(t.texParameteri(x,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(x,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(x===t.TEXTURE_3D||x===t.TEXTURE_2D_ARRAY)&&t.texParameteri(x,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(g.wrapS!==hn||g.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(x,t.TEXTURE_MAG_FILTER,C(g.magFilter)),t.texParameteri(x,t.TEXTURE_MIN_FILTER,C(g.minFilter)),g.minFilter!==Gt&&g.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(t.texParameteri(x,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(x,t.TEXTURE_COMPARE_FUNC,pe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Gt||g.minFilter!==Lo&&g.minFilter!==xa||g.type===ci&&e.has("OES_texture_float_linear")===!1||s===!1&&g.type===ya&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(t.texParameterf(x,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function fe(x,g){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",P));const N=g.source;let z=d.get(N);z===void 0&&(z={},d.set(N,z));const V=W(g);if(V!==x.__cacheKey){z[V]===void 0&&(z[V]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),z[V].usedTimes++;const oe=z[x.__cacheKey];oe!==void 0&&(z[x.__cacheKey].usedTimes--,oe.usedTimes===0&&R(g)),x.__cacheKey=V,x.__webglTexture=z[V].texture}return L}function Se(x,g,L){let N=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(N=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(N=t.TEXTURE_3D);const z=fe(x,g),V=g.source;n.bindTexture(N,x.__webglTexture,t.TEXTURE0+L);const oe=i.get(V);if(V.version!==oe.__version||z===!0){n.activeTexture(t.TEXTURE0+L);const te=it.getPrimaries(it.workingColorSpace),de=g.colorSpace===sn?null:it.getPrimaries(g.colorSpace),xe=g.colorSpace===sn||te===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=h(g)&&m(g.image)===!1;let re=v(g.image,Re,!1,r.maxTextureSize);re=ee(g,re);const He=m(re)||s,Be=a.convert(g.format,g.colorSpace);let Ne=a.convert(g.type),Pe=A(g.internalFormat,Be,Ne,g.colorSpace,g.isVideoTexture);Z(N,g,He);let be;const w=g.mipmaps,he=s&&g.isVideoTexture!==!0&&Pe!==Qh,De=oe.__version===void 0||z===!0,Ce=I(g,re,He);if(g.isDepthTexture)Pe=t.DEPTH_COMPONENT,s?g.type===ci?Pe=t.DEPTH_COMPONENT32F:g.type===li?Pe=t.DEPTH_COMPONENT24:g.type===Fi?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:g.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Bi&&Pe===t.DEPTH_COMPONENT&&g.type!==Ec&&g.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=li,Ne=a.convert(g.type)),g.format===Fr&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,g.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Fi,Ne=a.convert(g.type))),De&&(he?n.texStorage2D(t.TEXTURE_2D,1,Pe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,Be,Ne,null));else if(g.isDataTexture)if(w.length>0&&He){he&&De&&n.texStorage2D(t.TEXTURE_2D,Ce,Pe,w[0].width,w[0].height);for(let ge=0,D=w.length;ge<D;ge++)be=w[ge],he?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,be.width,be.height,Be,Ne,be.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,be.width,be.height,0,Be,Ne,be.data);g.generateMipmaps=!1}else he?(De&&n.texStorage2D(t.TEXTURE_2D,Ce,Pe,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,Be,Ne,re.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,Be,Ne,re.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){he&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,Pe,w[0].width,w[0].height,re.depth);for(let ge=0,D=w.length;ge<D;ge++)be=w[ge],g.format!==pn?Be!==null?he?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,re.depth,Be,be.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,be.width,be.height,re.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,re.depth,Be,Ne,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,be.width,be.height,re.depth,0,Be,Ne,be.data)}else{he&&De&&n.texStorage2D(t.TEXTURE_2D,Ce,Pe,w[0].width,w[0].height);for(let ge=0,D=w.length;ge<D;ge++)be=w[ge],g.format!==pn?Be!==null?he?n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,be.width,be.height,Be,be.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,be.width,be.height,Be,Ne,be.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,be.width,be.height,0,Be,Ne,be.data)}else if(g.isDataArrayTexture)he?(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,Pe,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Be,Ne,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,Be,Ne,re.data);else if(g.isData3DTexture)he?(De&&n.texStorage3D(t.TEXTURE_3D,Ce,Pe,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Be,Ne,re.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,Be,Ne,re.data);else if(g.isFramebufferTexture){if(De)if(he)n.texStorage2D(t.TEXTURE_2D,Ce,Pe,re.width,re.height);else{let ge=re.width,D=re.height;for(let ve=0;ve<Ce;ve++)n.texImage2D(t.TEXTURE_2D,ve,Pe,ge,D,0,Be,Ne,null),ge>>=1,D>>=1}}else if(w.length>0&&He){he&&De&&n.texStorage2D(t.TEXTURE_2D,Ce,Pe,w[0].width,w[0].height);for(let ge=0,D=w.length;ge<D;ge++)be=w[ge],he?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Be,Ne,be):n.texImage2D(t.TEXTURE_2D,ge,Pe,Be,Ne,be);g.generateMipmaps=!1}else he?(De&&n.texStorage2D(t.TEXTURE_2D,Ce,Pe,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Be,Ne,re)):n.texImage2D(t.TEXTURE_2D,0,Pe,Be,Ne,re);S(g,He)&&y(N),oe.__version=V.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Me(x,g,L){if(g.image.length!==6)return;const N=fe(x,g),z=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,x.__webglTexture,t.TEXTURE0+L);const V=i.get(z);if(z.version!==V.__version||N===!0){n.activeTexture(t.TEXTURE0+L);const oe=it.getPrimaries(it.workingColorSpace),te=g.colorSpace===sn?null:it.getPrimaries(g.colorSpace),de=g.colorSpace===sn||oe===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,Re=g.image[0]&&g.image[0].isDataTexture,re=[];for(let ge=0;ge<6;ge++)!xe&&!Re?re[ge]=v(g.image[ge],!1,!0,r.maxCubemapSize):re[ge]=Re?g.image[ge].image:g.image[ge],re[ge]=ee(g,re[ge]);const He=re[0],Be=m(He)||s,Ne=a.convert(g.format,g.colorSpace),Pe=a.convert(g.type),be=A(g.internalFormat,Ne,Pe,g.colorSpace),w=s&&g.isVideoTexture!==!0,he=V.__version===void 0||N===!0;let De=I(g,He,Be);Z(t.TEXTURE_CUBE_MAP,g,Be);let Ce;if(xe){w&&he&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,be,He.width,He.height);for(let ge=0;ge<6;ge++){Ce=re[ge].mipmaps;for(let D=0;D<Ce.length;D++){const ve=Ce[D];g.format!==pn?Ne!==null?w?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,0,0,ve.width,ve.height,Ne,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,0,0,ve.width,ve.height,Ne,Pe,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,be,ve.width,ve.height,0,Ne,Pe,ve.data)}}}else{Ce=g.mipmaps,w&&he&&(Ce.length>0&&De++,n.texStorage2D(t.TEXTURE_CUBE_MAP,De,be,re[0].width,re[0].height));for(let ge=0;ge<6;ge++)if(Re){w?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,re[ge].width,re[ge].height,Ne,Pe,re[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,be,re[ge].width,re[ge].height,0,Ne,Pe,re[ge].data);for(let D=0;D<Ce.length;D++){const Ee=Ce[D].image[ge].image;w?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,0,0,Ee.width,Ee.height,Ne,Pe,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,be,Ee.width,Ee.height,0,Ne,Pe,Ee.data)}}else{w?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ne,Pe,re[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,be,Ne,Pe,re[ge]);for(let D=0;D<Ce.length;D++){const ve=Ce[D];w?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,0,0,Ne,Pe,ve.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,be,Ne,Pe,ve.image[ge])}}}S(g,Be)&&y(t.TEXTURE_CUBE_MAP),V.__version=z.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function F(x,g,L,N,z,V){const oe=a.convert(L.format,L.colorSpace),te=a.convert(L.type),de=A(L.internalFormat,oe,te,L.colorSpace);if(!i.get(g).__hasExternalTextures){const Re=Math.max(1,g.width>>V),re=Math.max(1,g.height>>V);z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?n.texImage3D(z,V,de,Re,re,g.depth,0,oe,te,null):n.texImage2D(z,V,de,Re,re,0,oe,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,x),k(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,N,z,i.get(L).__webglTexture,0,U(g)):(z===t.TEXTURE_2D||z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,N,z,i.get(L).__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(x,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,x),g.depthBuffer&&!g.stencilBuffer){let N=s===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(L||k(g)){const z=g.depthTexture;z&&z.isDepthTexture&&(z.type===ci?N=t.DEPTH_COMPONENT32F:z.type===li&&(N=t.DEPTH_COMPONENT24));const V=U(g);k(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,V,N,g.width,g.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,V,N,g.width,g.height)}else t.renderbufferStorage(t.RENDERBUFFER,N,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,x)}else if(g.depthBuffer&&g.stencilBuffer){const N=U(g);L&&k(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,N,t.DEPTH24_STENCIL8,g.width,g.height):k(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N,t.DEPTH24_STENCIL8,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,x)}else{const N=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let z=0;z<N.length;z++){const V=N[z],oe=a.convert(V.format,V.colorSpace),te=a.convert(V.type),de=A(V.internalFormat,oe,te,V.colorSpace),xe=U(g);L&&k(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,de,g.width,g.height):k(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,de,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,de,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ie(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);const N=i.get(g.depthTexture).__webglTexture,z=U(g);if(g.depthTexture.format===Bi)k(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,N,0,z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,N,0);else if(g.depthTexture.format===Fr)k(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,N,0,z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function ue(x){const g=i.get(x),L=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");ie(g.__webglFramebuffer,x)}else if(L){g.__webglDepthbuffer=[];for(let N=0;N<6;N++)n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[N]),g.__webglDepthbuffer[N]=t.createRenderbuffer(),ce(g.__webglDepthbuffer[N],x,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=t.createRenderbuffer(),ce(g.__webglDepthbuffer,x,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(x,g,L){const N=i.get(x);g!==void 0&&F(N.__webglFramebuffer,x,x.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&ue(x)}function B(x){const g=x.texture,L=i.get(x),N=i.get(g);x.addEventListener("dispose",se),x.isWebGLMultipleRenderTargets!==!0&&(N.__webglTexture===void 0&&(N.__webglTexture=t.createTexture()),N.__version=g.version,o.memory.textures++);const z=x.isWebGLCubeRenderTarget===!0,V=x.isWebGLMultipleRenderTargets===!0,oe=m(x)||s;if(z){L.__webglFramebuffer=[];for(let te=0;te<6;te++)if(s&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[te]=[];for(let de=0;de<g.mipmaps.length;de++)L.__webglFramebuffer[te][de]=t.createFramebuffer()}else L.__webglFramebuffer[te]=t.createFramebuffer()}else{if(s&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let te=0;te<g.mipmaps.length;te++)L.__webglFramebuffer[te]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(V)if(r.drawBuffers){const te=x.texture;for(let de=0,xe=te.length;de<xe;de++){const Re=i.get(te[de]);Re.__webglTexture===void 0&&(Re.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&x.samples>0&&k(x)===!1){const te=V?g:[g];L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const xe=te[de];L.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[de]);const Re=a.convert(xe.format,xe.colorSpace),re=a.convert(xe.type),He=A(xe.internalFormat,Re,re,xe.colorSpace,x.isXRRenderTarget===!0),Be=U(x);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,He,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,L.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(L.__webglDepthRenderbuffer,x,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(z){n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture),Z(t.TEXTURE_CUBE_MAP,g,oe);for(let te=0;te<6;te++)if(s&&g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)F(L.__webglFramebuffer[te][de],x,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de);else F(L.__webglFramebuffer[te],x,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);S(g,oe)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(V){const te=x.texture;for(let de=0,xe=te.length;de<xe;de++){const Re=te[de],re=i.get(Re);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),Z(t.TEXTURE_2D,Re,oe),F(L.__webglFramebuffer,x,Re,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),S(Re,oe)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(s?te=x.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(te,N.__webglTexture),Z(te,g,oe),s&&g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)F(L.__webglFramebuffer[de],x,g,t.COLOR_ATTACHMENT0,te,de);else F(L.__webglFramebuffer,x,g,t.COLOR_ATTACHMENT0,te,0);S(g,oe)&&y(te),n.unbindTexture()}x.depthBuffer&&ue(x)}function b(x){const g=m(x)||s,L=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let N=0,z=L.length;N<z;N++){const V=L[N];if(S(V,g)){const oe=x.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,te=i.get(V).__webglTexture;n.bindTexture(oe,te),y(oe),n.unbindTexture()}}}function T(x){if(s&&x.samples>0&&k(x)===!1){const g=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],L=x.width,N=x.height;let z=t.COLOR_BUFFER_BIT;const V=[],oe=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=i.get(x),de=x.isWebGLMultipleRenderTargets===!0;if(de)for(let xe=0;xe<g.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){V.push(t.COLOR_ATTACHMENT0+xe),x.depthBuffer&&V.push(oe);const Re=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(Re===!1&&(x.depthBuffer&&(z|=t.DEPTH_BUFFER_BIT),x.stencilBuffer&&(z|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,te.__webglColorRenderbuffer[xe]),Re===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[oe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[oe])),de){const re=i.get(g[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,L,N,0,0,L,N,z,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,V)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<g.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,te.__webglColorRenderbuffer[xe]);const Re=i.get(g[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function U(x){return Math.min(r.maxSamples,x.samples)}function k(x){const g=i.get(x);return s&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Y(x){const g=o.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function ee(x,g){const L=x.colorSpace,N=x.format,z=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Nl||L!==Vn&&L!==sn&&(it.getTransfer(L)===at?s===!1?e.has("EXT_sRGB")===!0&&N===pn?(x.format=Nl,x.minFilter=an,x.generateMipmaps=!1):g=ip.sRGBToLinear(g):(N!==pn||z!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}this.allocateTextureUnit=O,this.resetTextureUnits=_e,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=q,this.setTextureCube=ae,this.rebindTextures=Te,this.setupRenderTarget=B,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=F,this.useMultisampledRTT=k}function SM(t,e,n){const i=n.isWebGL2;function r(a,o=sn){let s;const l=it.getTransfer(o);if(a===pi)return t.UNSIGNED_BYTE;if(a===jh)return t.UNSIGNED_SHORT_4_4_4_4;if(a===qh)return t.UNSIGNED_SHORT_5_5_5_1;if(a===Hv)return t.BYTE;if(a===Gv)return t.SHORT;if(a===Ec)return t.UNSIGNED_SHORT;if(a===$h)return t.INT;if(a===li)return t.UNSIGNED_INT;if(a===ci)return t.FLOAT;if(a===ya)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Vv)return t.ALPHA;if(a===pn)return t.RGBA;if(a===Wv)return t.LUMINANCE;if(a===Xv)return t.LUMINANCE_ALPHA;if(a===Bi)return t.DEPTH_COMPONENT;if(a===Fr)return t.DEPTH_STENCIL;if(a===Nl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Yv)return t.RED;if(a===Kh)return t.RED_INTEGER;if(a===$v)return t.RG;if(a===Zh)return t.RG_INTEGER;if(a===Jh)return t.RGBA_INTEGER;if(a===Do||a===Io||a===Uo||a===No)if(l===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Do)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Do)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===No)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Nu||a===Ou||a===Fu||a===Bu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ou)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Fu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Bu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Qh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ku||a===zu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===ku)return l===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===zu)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Hu||a===Gu||a===Vu||a===Wu||a===Xu||a===Yu||a===$u||a===ju||a===qu||a===Ku||a===Zu||a===Ju||a===Qu||a===ef)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Hu)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Gu)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Vu)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Wu)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Xu)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Yu)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===$u)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ju)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===qu)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ku)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Zu)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ju)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Qu)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ef)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Oo||a===tf||a===nf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Oo)return l===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===tf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===nf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===jv||a===rf||a===af||a===sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Oo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===rf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===af)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Fi?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class EM extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class us extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MM={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class bM extends Ki{constructor(e,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const v=n.getContextAttributes();let m=null,h=null;const S=[],y=[],A=new $e;let I=null;const C=new Qt;C.layers.enable(1),C.viewport=new Pt;const P=new Qt;P.layers.enable(2),P.viewport=new Pt;const se=[C,P],E=new EM;E.layers.enable(1),E.layers.enable(2);let R=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=S[Z];return fe===void 0&&(fe=new al,S[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=S[Z];return fe===void 0&&(fe=new al,S[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=S[Z];return fe===void 0&&(fe=new al,S[Z]=fe),fe.getHandSpace()};function ne(Z){const fe=y.indexOf(Z.inputSource);if(fe===-1)return;const Se=S[fe];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,c||o),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function _e(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",_e),r.removeEventListener("inputsourceschange",O);for(let Z=0;Z<S.length;Z++){const fe=y[Z];fe!==null&&(y[Z]=null,S[Z].disconnect(fe))}R=null,Q=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",_e),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Vi(p.framebufferWidth,p.framebufferHeight,{format:pn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,Se=null,Me=null;v.depth&&(Me=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=v.stencil?Fr:Bi,Se=v.stencil?Fi:li);const F={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:a};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(F),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new Vi(d.textureWidth,d.textureHeight,{format:pn,type:pi,depthTexture:new gp(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ce=e.properties.get(h);ce.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(Z){for(let fe=0;fe<Z.removed.length;fe++){const Se=Z.removed[fe],Me=y.indexOf(Se);Me>=0&&(y[Me]=null,S[Me].disconnect(Se))}for(let fe=0;fe<Z.added.length;fe++){const Se=Z.added[fe];let Me=y.indexOf(Se);if(Me===-1){for(let ce=0;ce<S.length;ce++)if(ce>=y.length){y.push(Se),Me=ce;break}else if(y[ce]===null){y[ce]=Se,Me=ce;break}if(Me===-1)break}const F=S[Me];F&&F.connect(Se)}}const W=new G,X=new G;function J(Z,fe,Se){W.setFromMatrixPosition(fe.matrixWorld),X.setFromMatrixPosition(Se.matrixWorld);const Me=W.distanceTo(X),F=fe.projectionMatrix.elements,ce=Se.projectionMatrix.elements,ie=F[14]/(F[10]-1),ue=F[14]/(F[10]+1),Te=(F[9]+1)/F[5],B=(F[9]-1)/F[5],b=(F[8]-1)/F[0],T=(ce[8]+1)/ce[0],U=ie*b,k=ie*T,Y=Me/(-b+T),ee=Y*-b;fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ee),Z.translateZ(Y),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const x=ie+Y,g=ue+Y,L=U-ee,N=k+(Me-ee),z=Te*ue/g*x,V=B*ue/g*x;Z.projectionMatrix.makePerspective(L,N,z,V,x,g),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function q(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;E.near=P.near=C.near=Z.near,E.far=P.far=C.far=Z.far,(R!==E.near||Q!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,Q=E.far);const fe=Z.parent,Se=E.cameras;q(E,fe);for(let Me=0;Me<Se.length;Me++)q(Se[Me],fe);Se.length===2?J(E,C,P):E.projectionMatrix.copy(C.projectionMatrix),ae(Z,E,fe)};function ae(Z,fe,Se){Se===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Sa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)};let le=null;function me(Z,fe){if(u=fe.getViewerPose(c||o),_=fe,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let Me=!1;Se.length!==E.cameras.length&&(E.cameras.length=0,Me=!0);for(let F=0;F<Se.length;F++){const ce=Se[F];let ie=null;if(p!==null)ie=p.getViewport(ce);else{const Te=f.getViewSubImage(d,ce);ie=Te.viewport,F===0&&(e.setRenderTargetTextures(h,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(h))}let ue=se[F];ue===void 0&&(ue=new Qt,ue.layers.enable(F),ue.viewport=new Pt,se[F]=ue),ue.matrix.fromArray(ce.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ce.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(ie.x,ie.y,ie.width,ie.height),F===0&&(E.matrix.copy(ue.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Me===!0&&E.cameras.push(ue)}}for(let Se=0;Se<S.length;Se++){const Me=y[Se],F=S[Se];Me!==null&&F!==void 0&&F.update(Me,fe,c||o)}le&&le(Z,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const pe=new mp;pe.setAnimationLoop(me),this.setAnimationLoop=function(Z){le=Z},this.dispose=function(){}}}function TM(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,fp(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,S,y,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,A)):h.isMeshMatcapMaterial?(a(m,h),_(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),v(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,S,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Yt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Yt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const y=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*y,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Yt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AM(t,e,n,i){let r={},a={},o=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const A=y.program;i.uniformBlockBinding(S,A)}function c(S,y){let A=r[S.id];A===void 0&&(_(S),A=u(S),r[S.id]=A,S.addEventListener("dispose",m));const I=y.program;i.updateUBOMapping(S,I);const C=e.render.frame;a[S.id]!==C&&(d(S),a[S.id]=C)}function u(S){const y=f();S.__bindingPointIndex=y;const A=t.createBuffer(),I=S.__size,C=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,I,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,A),A}function f(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=r[S.id],A=S.uniforms,I=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,P=A.length;C<P;C++){const se=Array.isArray(A[C])?A[C]:[A[C]];for(let E=0,R=se.length;E<R;E++){const Q=se[E];if(p(Q,C,E,I)===!0){const ne=Q.__offset,_e=Array.isArray(Q.value)?Q.value:[Q.value];let O=0;for(let W=0;W<_e.length;W++){const X=_e[W],J=v(X);typeof X=="number"||typeof X=="boolean"?(Q.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,ne+O,Q.__data)):X.isMatrix3?(Q.__data[0]=X.elements[0],Q.__data[1]=X.elements[1],Q.__data[2]=X.elements[2],Q.__data[3]=0,Q.__data[4]=X.elements[3],Q.__data[5]=X.elements[4],Q.__data[6]=X.elements[5],Q.__data[7]=0,Q.__data[8]=X.elements[6],Q.__data[9]=X.elements[7],Q.__data[10]=X.elements[8],Q.__data[11]=0):(X.toArray(Q.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ne,Q.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,y,A,I){const C=S.value,P=y+"_"+A;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const se=I[P];if(typeof C=="number"||typeof C=="boolean"){if(se!==C)return I[P]=C,!0}else if(se.equals(C)===!1)return se.copy(C),!0}return!1}function _(S){const y=S.uniforms;let A=0;const I=16;for(let P=0,se=y.length;P<se;P++){const E=Array.isArray(y[P])?y[P]:[y[P]];for(let R=0,Q=E.length;R<Q;R++){const ne=E[R],_e=Array.isArray(ne.value)?ne.value:[ne.value];for(let O=0,W=_e.length;O<W;O++){const X=_e[O],J=v(X),q=A%I;q!==0&&I-q<J.boundary&&(A+=I-q),ne.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=A,A+=J.storage}}}const C=A%I;return C>0&&(A+=I-C),S.__size=A,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function h(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},a={}}return{bind:l,update:c,dispose:h}}class Rc{constructor(e={}){const{canvas:n=S0(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const h=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const y=this;let A=!1,I=0,C=0,P=null,se=-1,E=null;const R=new Pt,Q=new Pt;let ne=null;const _e=new rt(0);let O=0,W=n.width,X=n.height,J=1,q=null,ae=null;const le=new Pt(0,0,W,X),me=new Pt(0,0,W,X);let pe=!1;const Z=new pp;let fe=!1,Se=!1,Me=null;const F=new Lt,ce=new $e,ie=new G,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return P===null?J:1}let B=i;function b(M,H){for(let j=0;j<M.length;j++){const K=M[j],$=n.getContext(K,H);if($!==null)return $}return null}try{const M={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sc}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",ve,!1),B===null){const H=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&H.shift(),B=b(H,M),B===null)throw b(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let T,U,k,Y,ee,x,g,L,N,z,V,oe,te,de,xe,Re,re,He,Be,Ne,Pe,be,w,he;function De(){T=new OS(B),U=new CS(B,T,e),T.init(U),be=new SM(B,T,U),k=new xM(B,T,U),Y=new kS(B),ee=new aM,x=new yM(B,T,k,ee,U,be,Y),g=new LS(y),L=new NS(y),N=new Y0(B,U),w=new wS(B,T,N,U),z=new FS(B,N,Y,w),V=new VS(B,z,N,Y),Be=new GS(B,U,x),Re=new PS(ee),oe=new rM(y,g,L,T,U,w,Re),te=new TM(y,ee),de=new oM,xe=new hM(T,U),He=new AS(y,g,L,k,V,d,l),re=new vM(y,V,U),he=new AM(B,Y,U,k),Ne=new RS(B,T,Y,U),Pe=new BS(B,T,Y,U),Y.programs=oe.programs,y.capabilities=U,y.extensions=T,y.properties=ee,y.renderLists=de,y.shadowMap=re,y.state=k,y.info=Y}De();const Ce=new bM(y,B);this.xr=Ce,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const M=T.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=T.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(W,X,!1))},this.getSize=function(M){return M.set(W,X)},this.setSize=function(M,H,j=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,X=H,n.width=Math.floor(M*J),n.height=Math.floor(H*J),j===!0&&(n.style.width=M+"px",n.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(W*J,X*J).floor()},this.setDrawingBufferSize=function(M,H,j){W=M,X=H,J=j,n.width=Math.floor(M*j),n.height=Math.floor(H*j),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,H,j,K){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,H,j,K),k.viewport(R.copy(le).multiplyScalar(J).floor())},this.getScissor=function(M){return M.copy(me)},this.setScissor=function(M,H,j,K){M.isVector4?me.set(M.x,M.y,M.z,M.w):me.set(M,H,j,K),k.scissor(Q.copy(me).multiplyScalar(J).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){k.setScissorTest(pe=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){ae=M},this.getClearColor=function(M){return M.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(M=!0,H=!0,j=!0){let K=0;if(M){let $=!1;if(P!==null){const Ae=P.texture.format;$=Ae===Jh||Ae===Zh||Ae===Kh}if($){const Ae=P.texture.type,Ie=Ae===pi||Ae===li||Ae===Ec||Ae===Fi||Ae===jh||Ae===qh,Fe=He.getClearColor(),ke=He.getClearAlpha(),Ye=Fe.r,Ge=Fe.g,Ve=Fe.b;Ie?(p[0]=Ye,p[1]=Ge,p[2]=Ve,p[3]=ke,B.clearBufferuiv(B.COLOR,0,p)):(_[0]=Ye,_[1]=Ge,_[2]=Ve,_[3]=ke,B.clearBufferiv(B.COLOR,0,_))}else K|=B.COLOR_BUFFER_BIT}H&&(K|=B.DEPTH_BUFFER_BIT),j&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),de.dispose(),xe.dispose(),ee.dispose(),g.dispose(),L.dispose(),V.dispose(),w.dispose(),he.dispose(),oe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",gt),Ce.removeEventListener("sessionend",et),Me&&(Me.dispose(),Me=null),vt.stop()};function ge(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=Y.autoReset,H=re.enabled,j=re.autoUpdate,K=re.needsUpdate,$=re.type;De(),Y.autoReset=M,re.enabled=H,re.autoUpdate=j,re.needsUpdate=K,re.type=$}function ve(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ee(M){const H=M.target;H.removeEventListener("dispose",Ee),Oe(H)}function Oe(M){Ue(M),ee.remove(M)}function Ue(M){const H=ee.get(M).programs;H!==void 0&&(H.forEach(function(j){oe.releaseProgram(j)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,j,K,$,Ae){H===null&&(H=ue);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,Fe=vm(M,H,j,K,$);k.setMaterial(K,Ie);let ke=j.index,Ye=1;if(K.wireframe===!0){if(ke=z.getWireframeAttribute(j),ke===void 0)return;Ye=2}const Ge=j.drawRange,Ve=j.attributes.position;let _t=Ge.start*Ye,Kt=(Ge.start+Ge.count)*Ye;Ae!==null&&(_t=Math.max(_t,Ae.start*Ye),Kt=Math.min(Kt,(Ae.start+Ae.count)*Ye)),ke!==null?(_t=Math.max(_t,0),Kt=Math.min(Kt,ke.count)):Ve!=null&&(_t=Math.max(_t,0),Kt=Math.min(Kt,Ve.count));const Tt=Kt-_t;if(Tt<0||Tt===1/0)return;w.setup($,K,Fe,j,ke);let Cn,ft=Ne;if(ke!==null&&(Cn=N.get(ke),ft=Pe,ft.setIndex(Cn)),$.isMesh)K.wireframe===!0?(k.setLineWidth(K.wireframeLinewidth*Te()),ft.setMode(B.LINES)):ft.setMode(B.TRIANGLES);else if($.isLine){let je=K.linewidth;je===void 0&&(je=1),k.setLineWidth(je*Te()),$.isLineSegments?ft.setMode(B.LINES):$.isLineLoop?ft.setMode(B.LINE_LOOP):ft.setMode(B.LINE_STRIP)}else $.isPoints?ft.setMode(B.POINTS):$.isSprite&&ft.setMode(B.TRIANGLES);if($.isBatchedMesh)ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)ft.renderInstances(_t,Tt,$.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,xo=Math.min(j.instanceCount,je);ft.renderInstances(_t,Tt,xo)}else ft.render(_t,Tt)};function Ze(M,H,j){M.transparent===!0&&M.side===Bn&&M.forceSinglePass===!1?(M.side=Yt,M.needsUpdate=!0,Na(M,H,j),M.side=gi,M.needsUpdate=!0,Na(M,H,j),M.side=Bn):Na(M,H,j)}this.compile=function(M,H,j=null){j===null&&(j=M),m=xe.get(j),m.init(),S.push(m),j.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),M!==j&&M.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(y._useLegacyLights);const K=new Set;return M.traverse(function($){const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){const Fe=Ae[Ie];Ze(Fe,j,$),K.add(Fe)}else Ze(Ae,j,$),K.add(Ae)}),S.pop(),m=null,K},this.compileAsync=function(M,H,j=null){const K=this.compile(M,H,j);return new Promise($=>{function Ae(){if(K.forEach(function(Ie){ee.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){$(M);return}setTimeout(Ae,10)}T.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Je=null;function dt(M){Je&&Je(M)}function gt(){vt.stop()}function et(){vt.start()}const vt=new mp;vt.setAnimationLoop(dt),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(M){Je=M,Ce.setAnimationLoop(M),M===null?vt.stop():vt.start()},Ce.addEventListener("sessionstart",gt),Ce.addEventListener("sessionend",et),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(H),H=Ce.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,H,P),m=xe.get(M,S.length),m.init(),S.push(m),F.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Z.setFromProjectionMatrix(F),Se=this.localClippingEnabled,fe=Re.init(this.clippingPlanes,Se),v=de.get(M,h.length),v.init(),h.push(v),xn(M,H,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(q,ae),this.info.render.frame++,fe===!0&&Re.beginShadows();const j=m.state.shadowsArray;if(re.render(j,M,H),fe===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(v,M),m.setupLights(y._useLegacyLights),H.isArrayCamera){const K=H.cameras;for(let $=0,Ae=K.length;$<Ae;$++){const Ie=K[$];Xc(v,M,Ie,Ie.viewport)}}else Xc(v,M,H);P!==null&&(x.updateMultisampleRenderTarget(P),x.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,H),w.resetDefaultState(),se=-1,E=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function xn(M,H,j,K){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){K&&ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(F);const Ie=V.update(M),Fe=M.material;Fe.visible&&v.push(M,Ie,Fe,j,ie.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Z.intersectsObject(M))){const Ie=V.update(M),Fe=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ie.copy(M.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ie.copy(Ie.boundingSphere.center)),ie.applyMatrix4(M.matrixWorld).applyMatrix4(F)),Array.isArray(Fe)){const ke=Ie.groups;for(let Ye=0,Ge=ke.length;Ye<Ge;Ye++){const Ve=ke[Ye],_t=Fe[Ve.materialIndex];_t&&_t.visible&&v.push(M,Ie,_t,j,ie.z,Ve)}}else Fe.visible&&v.push(M,Ie,Fe,j,ie.z,null)}}const Ae=M.children;for(let Ie=0,Fe=Ae.length;Ie<Fe;Ie++)xn(Ae[Ie],H,j,K)}function Xc(M,H,j,K){const $=M.opaque,Ae=M.transmissive,Ie=M.transparent;m.setupLightsView(j),fe===!0&&Re.setGlobalState(y.clippingPlanes,j),Ae.length>0&&_m($,Ae,H,j),K&&k.viewport(R.copy(K)),$.length>0&&Ua($,H,j),Ae.length>0&&Ua(Ae,H,j),Ie.length>0&&Ua(Ie,H,j),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function _m(M,H,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Ae=U.isWebGL2;Me===null&&(Me=new Vi(1,1,{generateMipmaps:!0,type:T.has("EXT_color_buffer_half_float")?ya:pi,minFilter:xa,samples:Ae?4:0})),y.getDrawingBufferSize(ce),Ae?Me.setSize(ce.x,ce.y):Me.setSize(zs(ce.x),zs(ce.y));const Ie=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(_e),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear();const Fe=y.toneMapping;y.toneMapping=hi,Ua(M,j,K),x.updateMultisampleRenderTarget(Me),x.updateRenderTargetMipmap(Me);let ke=!1;for(let Ye=0,Ge=H.length;Ye<Ge;Ye++){const Ve=H[Ye],_t=Ve.object,Kt=Ve.geometry,Tt=Ve.material,Cn=Ve.group;if(Tt.side===Bn&&_t.layers.test(K.layers)){const ft=Tt.side;Tt.side=Yt,Tt.needsUpdate=!0,Yc(_t,j,K,Kt,Tt,Cn),Tt.side=ft,Tt.needsUpdate=!0,ke=!0}}ke===!0&&(x.updateMultisampleRenderTarget(Me),x.updateRenderTargetMipmap(Me)),y.setRenderTarget(Ie),y.setClearColor(_e,O),y.toneMapping=Fe}function Ua(M,H,j){const K=H.isScene===!0?H.overrideMaterial:null;for(let $=0,Ae=M.length;$<Ae;$++){const Ie=M[$],Fe=Ie.object,ke=Ie.geometry,Ye=K===null?Ie.material:K,Ge=Ie.group;Fe.layers.test(j.layers)&&Yc(Fe,H,j,ke,Ye,Ge)}}function Yc(M,H,j,K,$,Ae){M.onBeforeRender(y,H,j,K,$,Ae),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(y,H,j,K,M,Ae),$.transparent===!0&&$.side===Bn&&$.forceSinglePass===!1?($.side=Yt,$.needsUpdate=!0,y.renderBufferDirect(j,H,K,$,M,Ae),$.side=gi,$.needsUpdate=!0,y.renderBufferDirect(j,H,K,$,M,Ae),$.side=Bn):y.renderBufferDirect(j,H,K,$,M,Ae),M.onAfterRender(y,H,j,K,$,Ae)}function Na(M,H,j){H.isScene!==!0&&(H=ue);const K=ee.get(M),$=m.state.lights,Ae=m.state.shadowsArray,Ie=$.state.version,Fe=oe.getParameters(M,$.state,Ae,H,j),ke=oe.getProgramCacheKey(Fe);let Ye=K.programs;K.environment=M.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(M.isMeshStandardMaterial?L:g).get(M.envMap||K.environment),Ye===void 0&&(M.addEventListener("dispose",Ee),Ye=new Map,K.programs=Ye);let Ge=Ye.get(ke);if(Ge!==void 0){if(K.currentProgram===Ge&&K.lightsStateVersion===Ie)return jc(M,Fe),Ge}else Fe.uniforms=oe.getUniforms(M),M.onBuild(j,Fe,y),M.onBeforeCompile(Fe,y),Ge=oe.acquireProgram(Fe,ke),Ye.set(ke,Ge),K.uniforms=Fe.uniforms;const Ve=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ve.clippingPlanes=Re.uniform),jc(M,Fe),K.needsLights=ym(M),K.lightsStateVersion=Ie,K.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=Ge,K.uniformsList=null,Ge}function $c(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=Ts.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function jc(M,H){const j=ee.get(M);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function vm(M,H,j,K,$){H.isScene!==!0&&(H=ue),x.resetTextureUnits();const Ae=H.fog,Ie=K.isMeshStandardMaterial?H.environment:null,Fe=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Vn,ke=(K.isMeshStandardMaterial?L:g).get(K.envMap||Ie),Ye=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ge=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!j.morphAttributes.position,_t=!!j.morphAttributes.normal,Kt=!!j.morphAttributes.color;let Tt=hi;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Tt=y.toneMapping);const Cn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=Cn!==void 0?Cn.length:0,je=ee.get(K),xo=m.state.lights;if(fe===!0&&(Se===!0||M!==E)){const nn=M===E&&K.id===se;Re.setState(K,M,nn)}let ht=!1;K.version===je.__version?(je.needsLights&&je.lightsStateVersion!==xo.state.version||je.outputColorSpace!==Fe||$.isBatchedMesh&&je.batching===!1||!$.isBatchedMesh&&je.batching===!0||$.isInstancedMesh&&je.instancing===!1||!$.isInstancedMesh&&je.instancing===!0||$.isSkinnedMesh&&je.skinning===!1||!$.isSkinnedMesh&&je.skinning===!0||$.isInstancedMesh&&je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&je.instancingColor===!1&&$.instanceColor!==null||je.envMap!==ke||K.fog===!0&&je.fog!==Ae||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Re.numPlanes||je.numIntersection!==Re.numIntersection)||je.vertexAlphas!==Ye||je.vertexTangents!==Ge||je.morphTargets!==Ve||je.morphNormals!==_t||je.morphColors!==Kt||je.toneMapping!==Tt||U.isWebGL2===!0&&je.morphTargetsCount!==ft)&&(ht=!0):(ht=!0,je.__version=K.version);let yi=je.currentProgram;ht===!0&&(yi=Na(K,H,$));let qc=!1,qr=!1,yo=!1;const It=yi.getUniforms(),Si=je.uniforms;if(k.useProgram(yi.program)&&(qc=!0,qr=!0,yo=!0),K.id!==se&&(se=K.id,qr=!0),qc||E!==M){It.setValue(B,"projectionMatrix",M.projectionMatrix),It.setValue(B,"viewMatrix",M.matrixWorldInverse);const nn=It.map.cameraPosition;nn!==void 0&&nn.setValue(B,ie.setFromMatrixPosition(M.matrixWorld)),U.logarithmicDepthBuffer&&It.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&It.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,qr=!0,yo=!0)}if($.isSkinnedMesh){It.setOptional(B,$,"bindMatrix"),It.setOptional(B,$,"bindMatrixInverse");const nn=$.skeleton;nn&&(U.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),It.setValue(B,"boneTexture",nn.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(It.setOptional(B,$,"batchingTexture"),It.setValue(B,"batchingTexture",$._matricesTexture,x));const So=j.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0&&U.isWebGL2===!0)&&Be.update($,j,yi),(qr||je.receiveShadow!==$.receiveShadow)&&(je.receiveShadow=$.receiveShadow,It.setValue(B,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Si.envMap.value=ke,Si.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),qr&&(It.setValue(B,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&xm(Si,yo),Ae&&K.fog===!0&&te.refreshFogUniforms(Si,Ae),te.refreshMaterialUniforms(Si,K,J,X,Me),Ts.upload(B,$c(je),Si,x)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ts.upload(B,$c(je),Si,x),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&It.setValue(B,"center",$.center),It.setValue(B,"modelViewMatrix",$.modelViewMatrix),It.setValue(B,"normalMatrix",$.normalMatrix),It.setValue(B,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const nn=K.uniformsGroups;for(let Eo=0,Sm=nn.length;Eo<Sm;Eo++)if(U.isWebGL2){const Kc=nn[Eo];he.update(Kc,yi),he.bind(Kc,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function xm(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function ym(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,H,j){ee.get(M.texture).__webglTexture=H,ee.get(M.depthTexture).__webglTexture=j;const K=ee.get(M);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||T.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,H){const j=ee.get(M);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,j=0){P=M,I=H,C=j;let K=!0,$=null,Ae=!1,Ie=!1;if(M){const ke=ee.get(M);ke.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(B.FRAMEBUFFER,null),K=!1):ke.__webglFramebuffer===void 0?x.setupRenderTarget(M):ke.__hasExternalTextures&&x.rebindTextures(M,ee.get(M.texture).__webglTexture,ee.get(M.depthTexture).__webglTexture);const Ye=M.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ie=!0);const Ge=ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ge[H])?$=Ge[H][j]:$=Ge[H],Ae=!0):U.isWebGL2&&M.samples>0&&x.useMultisampledRTT(M)===!1?$=ee.get(M).__webglMultisampledFramebuffer:Array.isArray(Ge)?$=Ge[j]:$=Ge,R.copy(M.viewport),Q.copy(M.scissor),ne=M.scissorTest}else R.copy(le).multiplyScalar(J).floor(),Q.copy(me).multiplyScalar(J).floor(),ne=pe;if(k.bindFramebuffer(B.FRAMEBUFFER,$)&&U.drawBuffers&&K&&k.drawBuffers(M,$),k.viewport(R),k.scissor(Q),k.setScissorTest(ne),Ae){const ke=ee.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke.__webglTexture,j)}else if(Ie){const ke=ee.get(M.texture),Ye=H||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,j||0,Ye)}se=-1},this.readRenderTargetPixels=function(M,H,j,K,$,Ae,Ie){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){k.bindFramebuffer(B.FRAMEBUFFER,Fe);try{const ke=M.texture,Ye=ke.format,Ge=ke.type;if(Ye!==pn&&be.convert(Ye)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===ya&&(T.has("EXT_color_buffer_half_float")||U.isWebGL2&&T.has("EXT_color_buffer_float"));if(Ge!==pi&&be.convert(Ge)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ci&&(U.isWebGL2||T.has("OES_texture_float")||T.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-K&&j>=0&&j<=M.height-$&&B.readPixels(H,j,K,$,be.convert(Ye),be.convert(Ge),Ae)}finally{const ke=P!==null?ee.get(P).__webglFramebuffer:null;k.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(M,H,j=0){const K=Math.pow(2,-j),$=Math.floor(H.image.width*K),Ae=Math.floor(H.image.height*K);x.setTexture2D(H,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,M.x,M.y,$,Ae),k.unbindTexture()},this.copyTextureToTexture=function(M,H,j,K=0){const $=H.image.width,Ae=H.image.height,Ie=be.convert(j.format),Fe=be.convert(j.type);x.setTexture2D(j,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment),H.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,K,M.x,M.y,$,Ae,Ie,Fe,H.image.data):H.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,K,M.x,M.y,H.mipmaps[0].width,H.mipmaps[0].height,Ie,H.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,K,M.x,M.y,Ie,Fe,H.image),K===0&&j.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(M,H,j,K,$=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=M.max.x-M.min.x+1,Ie=M.max.y-M.min.y+1,Fe=M.max.z-M.min.z+1,ke=be.convert(K.format),Ye=be.convert(K.type);let Ge;if(K.isData3DTexture)x.setTexture3D(K,0),Ge=B.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)x.setTexture2DArray(K,0),Ge=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const Ve=B.getParameter(B.UNPACK_ROW_LENGTH),_t=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Kt=B.getParameter(B.UNPACK_SKIP_PIXELS),Tt=B.getParameter(B.UNPACK_SKIP_ROWS),Cn=B.getParameter(B.UNPACK_SKIP_IMAGES),ft=j.isCompressedTexture?j.mipmaps[$]:j.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ft.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,M.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,M.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,M.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D(Ge,$,H.x,H.y,H.z,Ae,Ie,Fe,ke,Ye,ft.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ge,$,H.x,H.y,H.z,Ae,Ie,Fe,ke,ft.data)):B.texSubImage3D(Ge,$,H.x,H.y,H.z,Ae,Ie,Fe,ke,Ye,ft),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ve),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Cn),$===0&&K.generateMipmaps&&B.generateMipmap(Ge),k.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?x.setTextureCube(M,0):M.isData3DTexture?x.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?x.setTexture2DArray(M,0):x.setTexture2D(M,0),k.unbindTexture()},this.resetState=function(){I=0,C=0,P=null,k.reset(),w.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Mc?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===lo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?ki:ep}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ki?Rt:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wM extends Rc{}wM.prototype.isWebGL1Renderer=!0;class Ep extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}const qf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class RM{constructor(e,n,i){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const CM=new RM;class Cc{constructor(e){this.manager=e!==void 0?e:CM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,a){i.load(e,r,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cc.DEFAULT_MATERIAL_NAME="__DEFAULT";class PM extends Cc{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=qf.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){n&&n(o),a.manager.itemEnd(e)},0),o;const s=Ea("img");function l(){u(),qf.add(e,this),n&&n(this),a.manager.itemEnd(e)}function c(f){u(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class Mp extends Cc{constructor(e){super(e)}load(e,n,i,r){const a=new $t,o=new PM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,n!==void 0&&n(a)},i,r),a}}class Kf{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const Zf={type:"change"},sl={type:"start"},Jf={type:"end"},fs=new sp,Qf=new si,LM=Math.cos(70*y0.DEG2RAD);class bp extends Ki{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:er.ROTATE,TWO:er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",xe),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Zf),i.update(),a=r.NONE},this.update=function(){const w=new G,he=new Wi().setFromUnitVectors(e.up,new G(0,1,0)),De=he.clone().invert(),Ce=new G,ge=new Wi,D=new G,ve=2*Math.PI;return function(Oe=null){const Ue=i.object.position;w.copy(Ue).sub(i.target),w.applyQuaternion(he),s.setFromVector3(w),i.autoRotate&&a===r.NONE&&ne(R(Oe)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Ze=i.minAzimuthAngle,Je=i.maxAzimuthAngle;isFinite(Ze)&&isFinite(Je)&&(Ze<-Math.PI?Ze+=ve:Ze>Math.PI&&(Ze-=ve),Je<-Math.PI?Je+=ve:Je>Math.PI&&(Je-=ve),Ze<=Je?s.theta=Math.max(Ze,Math.min(Je,s.theta)):s.theta=s.theta>(Ze+Je)/2?Math.max(Ze,s.theta):Math.min(Je,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?s.radius=le(s.radius):s.radius=le(s.radius*c),w.setFromSpherical(s),w.applyQuaternion(De),Ue.copy(i.target).add(w),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let dt=!1;if(i.zoomToCursor&&C){let gt=null;if(i.object.isPerspectiveCamera){const et=w.length();gt=le(et*c);const vt=et-gt;i.object.position.addScaledVector(A,vt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const et=new G(I.x,I.y,0);et.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),dt=!0;const vt=new G(I.x,I.y,0);vt.unproject(i.object),i.object.position.sub(vt).add(et),i.object.updateMatrixWorld(),gt=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;gt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(gt).add(i.object.position):(fs.origin.copy(i.object.position),fs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(fs.direction))<LM?e.lookAt(i.target):(Qf.setFromNormalAndCoplanarPoint(i.object.up,i.target),fs.intersectPlane(Qf,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),dt=!0);return c=1,C=!1,dt||Ce.distanceToSquared(i.object.position)>o||8*(1-ge.dot(i.object.quaternion))>o||D.distanceToSquared(i.target)>0?(i.dispatchEvent(Zf),Ce.copy(i.object.position),ge.copy(i.object.quaternion),D.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",He),i.domElement.removeEventListener("pointerdown",x),i.domElement.removeEventListener("pointercancel",L),i.domElement.removeEventListener("wheel",V),i.domElement.removeEventListener("pointermove",g),i.domElement.removeEventListener("pointerup",L),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",xe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new Kf,l=new Kf;let c=1;const u=new G,f=new $e,d=new $e,p=new $e,_=new $e,v=new $e,m=new $e,h=new $e,S=new $e,y=new $e,A=new G,I=new $e;let C=!1;const P=[],se={};let E=!1;function R(w){return w!==null?2*Math.PI/60*i.autoRotateSpeed*w:2*Math.PI/60/60*i.autoRotateSpeed}function Q(w){const he=Math.abs(w*.01);return Math.pow(.95,i.zoomSpeed*he)}function ne(w){l.theta-=w}function _e(w){l.phi-=w}const O=function(){const w=new G;return function(De,Ce){w.setFromMatrixColumn(Ce,0),w.multiplyScalar(-De),u.add(w)}}(),W=function(){const w=new G;return function(De,Ce){i.screenSpacePanning===!0?w.setFromMatrixColumn(Ce,1):(w.setFromMatrixColumn(Ce,0),w.crossVectors(i.object.up,w)),w.multiplyScalar(De),u.add(w)}}(),X=function(){const w=new G;return function(De,Ce){const ge=i.domElement;if(i.object.isPerspectiveCamera){const D=i.object.position;w.copy(D).sub(i.target);let ve=w.length();ve*=Math.tan(i.object.fov/2*Math.PI/180),O(2*De*ve/ge.clientHeight,i.object.matrix),W(2*Ce*ve/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(De*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),W(Ce*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ae(w,he){if(!i.zoomToCursor)return;C=!0;const De=i.domElement.getBoundingClientRect(),Ce=w-De.left,ge=he-De.top,D=De.width,ve=De.height;I.x=Ce/D*2-1,I.y=-(ge/ve)*2+1,A.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function le(w){return Math.max(i.minDistance,Math.min(i.maxDistance,w))}function me(w){f.set(w.clientX,w.clientY)}function pe(w){ae(w.clientX,w.clientX),h.set(w.clientX,w.clientY)}function Z(w){_.set(w.clientX,w.clientY)}function fe(w){d.set(w.clientX,w.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const he=i.domElement;ne(2*Math.PI*p.x/he.clientHeight),_e(2*Math.PI*p.y/he.clientHeight),f.copy(d),i.update()}function Se(w){S.set(w.clientX,w.clientY),y.subVectors(S,h),y.y>0?J(Q(y.y)):y.y<0&&q(Q(y.y)),h.copy(S),i.update()}function Me(w){v.set(w.clientX,w.clientY),m.subVectors(v,_).multiplyScalar(i.panSpeed),X(m.x,m.y),_.copy(v),i.update()}function F(w){ae(w.clientX,w.clientY),w.deltaY<0?q(Q(w.deltaY)):w.deltaY>0&&J(Q(w.deltaY)),i.update()}function ce(w){let he=!1;switch(w.code){case i.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?_e(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?_e(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?ne(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?ne(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),he=!0;break}he&&(w.preventDefault(),i.update())}function ie(w){if(P.length===1)f.set(w.pageX,w.pageY);else{const he=be(w),De=.5*(w.pageX+he.x),Ce=.5*(w.pageY+he.y);f.set(De,Ce)}}function ue(w){if(P.length===1)_.set(w.pageX,w.pageY);else{const he=be(w),De=.5*(w.pageX+he.x),Ce=.5*(w.pageY+he.y);_.set(De,Ce)}}function Te(w){const he=be(w),De=w.pageX-he.x,Ce=w.pageY-he.y,ge=Math.sqrt(De*De+Ce*Ce);h.set(0,ge)}function B(w){i.enableZoom&&Te(w),i.enablePan&&ue(w)}function b(w){i.enableZoom&&Te(w),i.enableRotate&&ie(w)}function T(w){if(P.length==1)d.set(w.pageX,w.pageY);else{const De=be(w),Ce=.5*(w.pageX+De.x),ge=.5*(w.pageY+De.y);d.set(Ce,ge)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const he=i.domElement;ne(2*Math.PI*p.x/he.clientHeight),_e(2*Math.PI*p.y/he.clientHeight),f.copy(d)}function U(w){if(P.length===1)v.set(w.pageX,w.pageY);else{const he=be(w),De=.5*(w.pageX+he.x),Ce=.5*(w.pageY+he.y);v.set(De,Ce)}m.subVectors(v,_).multiplyScalar(i.panSpeed),X(m.x,m.y),_.copy(v)}function k(w){const he=be(w),De=w.pageX-he.x,Ce=w.pageY-he.y,ge=Math.sqrt(De*De+Ce*Ce);S.set(0,ge),y.set(0,Math.pow(S.y/h.y,i.zoomSpeed)),J(y.y),h.copy(S);const D=(w.pageX+he.x)*.5,ve=(w.pageY+he.y)*.5;ae(D,ve)}function Y(w){i.enableZoom&&k(w),i.enablePan&&U(w)}function ee(w){i.enableZoom&&k(w),i.enableRotate&&T(w)}function x(w){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(w.pointerId),i.domElement.addEventListener("pointermove",g),i.domElement.addEventListener("pointerup",L)),Be(w),w.pointerType==="touch"?Re(w):N(w))}function g(w){i.enabled!==!1&&(w.pointerType==="touch"?re(w):z(w))}function L(w){Ne(w),P.length===0&&(i.domElement.releasePointerCapture(w.pointerId),i.domElement.removeEventListener("pointermove",g),i.domElement.removeEventListener("pointerup",L)),i.dispatchEvent(Jf),a=r.NONE}function N(w){let he;switch(w.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Qi.DOLLY:if(i.enableZoom===!1)return;pe(w),a=r.DOLLY;break;case Qi.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enablePan===!1)return;Z(w),a=r.PAN}else{if(i.enableRotate===!1)return;me(w),a=r.ROTATE}break;case Qi.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enableRotate===!1)return;me(w),a=r.ROTATE}else{if(i.enablePan===!1)return;Z(w),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(sl)}function z(w){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;fe(w);break;case r.DOLLY:if(i.enableZoom===!1)return;Se(w);break;case r.PAN:if(i.enablePan===!1)return;Me(w);break}}function V(w){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(w.preventDefault(),i.dispatchEvent(sl),F(oe(w)),i.dispatchEvent(Jf))}function oe(w){const he=w.deltaMode,De={clientX:w.clientX,clientY:w.clientY,deltaY:w.deltaY};switch(he){case 1:De.deltaY*=16;break;case 2:De.deltaY*=100;break}return w.ctrlKey&&!E&&(De.deltaY*=10),De}function te(w){w.key==="Control"&&(E=!0,document.addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(w){w.key==="Control"&&(E=!1,document.removeEventListener("keyup",de,{passive:!0,capture:!0}))}function xe(w){i.enabled===!1||i.enablePan===!1||ce(w)}function Re(w){switch(Pe(w),P.length){case 1:switch(i.touches.ONE){case er.ROTATE:if(i.enableRotate===!1)return;ie(w),a=r.TOUCH_ROTATE;break;case er.PAN:if(i.enablePan===!1)return;ue(w),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case er.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(w),a=r.TOUCH_DOLLY_PAN;break;case er.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;b(w),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(sl)}function re(w){switch(Pe(w),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;T(w),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;U(w),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Y(w),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ee(w),i.update();break;default:a=r.NONE}}function He(w){i.enabled!==!1&&w.preventDefault()}function Be(w){P.push(w.pointerId)}function Ne(w){delete se[w.pointerId];for(let he=0;he<P.length;he++)if(P[he]==w.pointerId){P.splice(he,1);return}}function Pe(w){let he=se[w.pointerId];he===void 0&&(he=new $e,se[w.pointerId]=he),he.set(w.pageX,w.pageY)}function be(w){const he=w.pointerId===P[0]?P[1]:P[0];return se[he]}i.domElement.addEventListener("contextmenu",He),i.domElement.addEventListener("pointerdown",x),i.domElement.addEventListener("pointercancel",L),i.domElement.addEventListener("wheel",V,{passive:!1}),document.addEventListener("keydown",te,{passive:!0,capture:!0}),this.update()}}const DM={name:"ExperienceContent",methods:{initThreeJs(){const t=this.$refs.containerThree,e=new Ep;new Mp;const n=new Qt(75,window.innerWidth/window.innerHeight,.1,1e3),i=new Rc;i.setSize(t.clientWidth,800),i.setClearColor(0,0),t.appendChild(i.domElement);const r=new Ji(12,12,12),a=new fo({color:65280}),o=new bn(r,a);e.add(o),new bp(n,i.domElement),n.position.z=12;function s(){requestAnimationFrame(s),i.render(e,n)}s()}},mounted(){this.initThreeJs()}},IM={class:"section",ref:"containerThree"};function UM(t,e,n,i,r,a){return ot(),mt("div",IM,null,512)}const NM=Rn(DM,[["render",UM],["__scopeId","data-v-c646ec30"]]),OM={name:"MainPage",components:{ImageSection:NM}},FM={class:"container page",id:"about"},BM=i_('<div class="page-title" data-v-33f7e9a2><h2 data-v-33f7e9a2><span data-v-33f7e9a2>01.</span>Обо мне</h2><div class="content" data-v-33f7e9a2><p data-v-33f7e9a2>Привет! Меня зовут <span class="light-color" data-v-33f7e9a2>Нурадил Адилетов</span>, и я <span class="light-color" data-v-33f7e9a2>фронтенд-разработчик</span>, родившийся в 1994 году. С 2020 года я увлеченно занимаюсь созданием веб-приложений и веб-сайтов. Мое разностороннее образование в сфере веб-разработки включает завершение курсов <span class="light-color" data-v-33f7e9a2>Full Stack Developer</span> в <a class="light-color" href="https://attractor-school.com/courses/javascript/" target="_blank" data-v-33f7e9a2>itAttractor</a> в 2019 году.</p><p data-v-33f7e9a2>С момента начала моей карьеры, я приобрел более трех лет коммерческого опыта, участвуя в создании более 15 проектов. Моя страсть к технологиям и стремление к самосовершенствованию побуждают меня постоянно изучать новые техники и инструменты в области фронтенд-разработки.</p><p data-v-33f7e9a2>В свободное время я не только фокусируюсь на кодинге, но также уделяю внимание своему физическому состоянию, занимаясь фитнесом. Кроме того, иногда я предаюсь увлекательным сражениям в мире Dota, наслаждаясь виртуальными приключениями.</p><p data-v-33f7e9a2>Моя миссия - создавать визуально привлекательные и функциональные веб-проекты, объединяя свои навыки и креативный подход. Если у вас есть интересные идеи или проекты, <span class="light-color" data-v-33f7e9a2>буду рад обсудить с вами возможное сотрудничество!</span></p></div></div>',1),kM=[BM];function zM(t,e,n,i,r,a){return ot(),mt("div",FM,kM)}const Tp=Rn(OM,[["render",zM],["__scopeId","data-v-33f7e9a2"]]),HM={name:"Experience",components:{},computed:{companyList(){return[{companyName:"CodeBright",position:"Фронтенд / Мобильный разработчик",period:"Ноябрь 2021 — Декабрь 2023 (2 года 1 месяц)",experience:"Работа с одностраничными и серверными веб-приложениями.",technologies:["JavaScript","React (Redux, Redux Toolkit, Redux Saga)","Next.js","Vue 2/3 (Vuex)","Angular (применение в проектах, в том числе фиксы и добавление новых функций).","React Native"]},{companyName:"Softlex",position:"Фронтенд Разработчик",period:"Сентябрь 2021 — ноябрь 2021 (3 месяца)",experience:"Работа над одностраничными и серверными веб-приложениями.",technologies:["JavaScript","Typescript","React (Redux, Redux Toolkit, Redux Saga)","Vue 2 (Vuex)"]},{companyName:"Yorc",position:"Фронтенд Разработчик",period:"Июнь 2020 — август 2021 (1 год 3 месяца)",experience:"Работа с одностраничными и серверными веб-приложениями.",technologies:["JavaScript","Typescript","jQuery","Next.js","React, Redux"]}]}}},$r=t=>(to("data-v-9e3d0f0f"),t=t(),no(),t),GM={class:"container page",id:"experience"},VM=$r(()=>Ke("div",{class:"page-title"},[Ke("h2",null,[Ke("span",null,"02."),Gi("Опыт")])],-1)),WM={class:"content"},XM=$r(()=>Ke("h2",null,"Профессиональный путь разработчика в течение 3 лет:",-1)),YM={class:"experience-card"},$M={class:"light-color fs-22 fb-500"},jM={class:"fs-20"},qM={class:"fs-18"},KM=$r(()=>Ke("span",{class:"text-color"},"Период:",-1)),ZM={class:"fs-18"},JM=$r(()=>Ke("span",{class:"text-color"},"Опыт:",-1)),QM=$r(()=>Ke("p",{class:"fs-20 text-color"},"Технологии:",-1)),eb={class:"fs-18",style:{"margin-bottom":"10px"}},tb=$r(()=>Ke("p",{class:"fs-20"},"Этот мой профессиональный путь включает разнообразные технологии и фреймворки в сфере фронтенд-разработки, а также опыт в создании как SPA, так и SSR приложений, включая мобильные приложения на React Native. Мой опыт также включает в себя работу в различных командах и с разнообразными проектами. ",-1));function nb(t,e,n,i,r,a){return ot(),mt("div",GM,[VM,Ke("div",WM,[XM,(ot(!0),mt(wt,null,Hi(a.companyList,o=>(ot(),mt("div",YM,[Ke("p",$M,Fn(o.companyName),1),Ke("p",jM,Fn(o.position),1),Ke("p",qM,[KM,Gi(" "+Fn(o.period),1)]),Ke("p",ZM,[JM,Gi(" "+Fn(o.experience),1)]),QM,Ke("ol",null,[(ot(!0),mt(wt,null,Hi(o.technologies,s=>(ot(),mt("li",eb,Fn(s),1))),256))])]))),256)),tb])])}const Ap=Rn(HM,[["render",nb],["__scopeId","data-v-9e3d0f0f"]]),ol=[{id:"js",imgSrc:"js.png"},{id:"ts",imgSrc:"ts.png"},{id:"node",imgSrc:"node.webp"},{id:"react",imgSrc:"react.png"},{id:"vue",imgSrc:"vue.png"},{id:"rn",imgSrc:"rn.png"},{id:"dart",imgSrc:"dart.png"},{id:"flutter",imgSrc:"flutter.png"},{id:"angular",imgSrc:"angular.png"}],ib={name:"Work",data(){return{renderers:{}}},computed:{skills(){return ol.reduce((e,n,i)=>{if(e.length)if(e[e.length-1].length<3)e[e.length-1].push(n);else{const r=[n];e.push(r)}else{const r=[n];e.push(r)}return e},[])}},methods:{initThreeJs(){const t=new Mp;ol.forEach(({id:e,imgSrc:n})=>{const i=document.getElementById(e),r=new Ep,a=t.load(`../assets/${n}`),o=new Qt(40,1,.1,1e3),s=new Rc;s.setSize(i.clientWidth,i.clientHeight),s.setClearColor(0,0),i.appendChild(s.domElement);const l=new Ji(1,1,1),c=new fo({map:a,transparent:!0}),u=new bn(l,c);r.add(u);const f=new bp(o,s.domElement);let d=!0;f.addEventListener("start",function(_){d=!d}),o.position.z=5;function p(){requestAnimationFrame(p),f.update(),d?(u.rotateZ(.01),u.rotateX(.01),u.rotateY(.01)):u.rotation.set(0,0,0),s.render(r,o)}p(),this.renderers[e]=s})},disposeRenderer(t,e){const n=t.domElement;t.dispose(),e&&n.parentNode&&n.parentNode.removeChild(n)}},beforeUnmount(){ol.forEach(({id:t})=>{const e=document.getElementById(t),n=this.renderers[t];e&&n&&this.disposeRenderer(n,e)})},mounted(){this.initThreeJs()}},rb=t=>(to("data-v-0707a91e"),t=t(),no(),t),ab={class:"container page",id:"work"},sb=rb(()=>Ke("div",{class:"page-title"},[Ke("h2",null,[Ke("span",null,"03."),Gi("Навыки")])],-1)),ob={class:"content"},lb={class:"skills"},cb=["id"];function ub(t,e,n,i,r,a){return ot(),mt("div",ab,[sb,Ke("div",ob,[Ke("table",lb,[Ke("tbody",null,[(ot(!0),mt(wt,null,Hi(a.skills,o=>(ot(),mt("tr",null,[(ot(!0),mt(wt,null,Hi(o,s=>(ot(),mt("td",null,[Ke("div",{class:"canvas-container",id:s.id},null,8,cb)]))),256))]))),256))])])])])}const wp=Rn(ib,[["render",ub],["__scopeId","data-v-0707a91e"]]),fb={name:"Contact",computed:{contacts(){return[{label:"Tel:",value:"+996707009090",path:"tel:+996707009090"},{label:"Gmail:",value:"nrdl777@gmail.com",path:"mailto:nrdl777@gmail.com"},{label:"Telegramm:",value:"@adiletov_adil",path:"https://t.me/adiletov_adil"},{label:"Linkedin:",value:"nuradil-adiletov",path:"https://www.linkedin.com/in/nuradil-adiletov-8132121b3/"}]}}},db=t=>(to("data-v-7a016008"),t=t(),no(),t),hb={class:"container page",id:"contact"},pb=db(()=>Ke("div",{class:"page-title"},[Ke("h2",null,[Ke("span",null,"04."),Gi("Контакты")])],-1)),mb={class:"content"},gb={class:"text-color"},_b=["href"];function vb(t,e,n,i,r,a){return ot(),mt("div",hb,[pb,Ke("div",mb,[Ke("ul",null,[(ot(!0),mt(wt,null,Hi(a.contacts,o=>(ot(),mt("li",null,[Ke("span",gb,Fn(o.label),1),Ke("a",{href:o.path,target:"_blank",class:"light-color"},Fn(o.value),9,_b)]))),256))])])])}const Rp=Rn(fb,[["render",vb],["__scopeId","data-v-7a016008"]]),xb={name:"App",components:{MainLayout:av,MainPage:Tp,Experience:Ap,Work:wp,Contact:Rp}};function yb(t,e,n,i,r,a){const o=Pi("MainPage"),s=Pi("Experience"),l=Pi("Work"),c=Pi("Contact"),u=Pi("MainLayout");return ot(),_c(u,null,{default:hc(()=>[yt(o),yt(s),yt(l),yt(c)]),_:1})}const Sb=Rn(xb,[["render",yb]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vr=typeof window<"u";function Eb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const nt=Object.assign;function ll(t,e){const n={};for(const i in e){const r=e[i];n[i]=vn(r)?r.map(t):t(r)}return n}const fa=()=>{},vn=Array.isArray,Mb=/\/$/,bb=t=>t.replace(Mb,"");function cl(t,e,n="/"){let i,r={},a="",o="";const s=e.indexOf("#");let l=e.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(i=e.slice(0,l),a=e.slice(l+1,s>-1?s:e.length),r=t(a)),s>-1&&(i=i||e.slice(0,s),o=e.slice(s,e.length)),i=Rb(i??e,n),{fullPath:i+(a&&"?")+a+o,path:i,query:r,hash:o}}function Tb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ed(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ab(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&kr(e.matched[i],n.matched[r])&&Cp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function kr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wb(t[n],e[n]))return!1;return!0}function wb(t,e){return vn(t)?td(t,e):vn(e)?td(e,t):t===e}function td(t,e){return vn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Rb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let a=n.length-1,o,s;for(o=0;o<i.length;o++)if(s=i[o],s!==".")if(s==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Ma;(function(t){t.pop="pop",t.push="push"})(Ma||(Ma={}));var da;(function(t){t.back="back",t.forward="forward",t.unknown=""})(da||(da={}));function Cb(t){if(!t)if(vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bb(t)}const Pb=/^[^#]+#/;function Lb(t,e){return t.replace(Pb,"#")+e}function Db(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const po=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ib(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Db(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function nd(t,e){return(history.state?history.state.position-e:-1)+t}const Bl=new Map;function Ub(t,e){Bl.set(t,e)}function Nb(t){const e=Bl.get(t);return Bl.delete(t),e}let Ob=()=>location.protocol+"//"+location.host;function Pp(t,e){const{pathname:n,search:i,hash:r}=e,a=t.indexOf("#");if(a>-1){let s=r.includes(t.slice(a))?t.slice(a).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),ed(l,"")}return ed(n,t)+i+r}function Fb(t,e,n,i){let r=[],a=[],o=null;const s=({state:d})=>{const p=Pp(t,location),_=n.value,v=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}m=v?d.position-v.position:0}else i(p);r.forEach(h=>{h(n.value,_,{delta:m,type:Ma.pop,direction:m?m>0?da.forward:da.back:da.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return a.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(nt({},d.state,{scroll:po()}),"")}function f(){for(const d of a)d();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function id(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?po():null}}function Bb(t){const{history:e,location:n}=window,i={value:Pp(t,n)},r={value:e.state};r.value||a(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function a(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Ob()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=nt({},e.state,id(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});a(l,u,!0),i.value=l}function s(l,c){const u=nt({},r.value,e.state,{forward:l,scroll:po()});a(u.current,u,!0);const f=nt({},id(i.value,l,null),{position:u.position+1},c);a(l,f,!1),i.value=l}return{location:i,state:r,push:s,replace:o}}function kb(t){t=Cb(t);const e=Bb(t),n=Fb(t,e.state,e.location,e.replace);function i(a,o=!0){o||n.pauseListeners(),history.go(a)}const r=nt({location:"",base:t,go:i,createHref:Lb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function zb(t){return typeof t=="string"||t&&typeof t=="object"}function Lp(t){return typeof t=="string"||typeof t=="symbol"}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Dp=Symbol("");var rd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rd||(rd={}));function zr(t,e){return nt(new Error,{type:t,[Dp]:!0},e)}function Nn(t,e){return t instanceof Error&&Dp in t&&(e==null||!!(t.type&e))}const ad="[^/]+?",Hb={sensitive:!1,strict:!1,start:!0,end:!0},Gb=/[.+*?^${}()[\]/\\]/g;function Vb(t,e){const n=nt({},Hb,e),i=[];let r=n.start?"^":"";const a=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(Gb,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:v,optional:m,regexp:h}=d;a.push({name:_,repeatable:v,optional:m});const S=h||ad;if(S!==ad){p+=10;try{new RegExp(`(${S})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+A.message)}}let y=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,p+=20,m&&(p+=-8),v&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function s(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=a[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,h=_ in c?c[_]:"";if(vn(h)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=vn(h)?h.join("/"):h;if(!S)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:a,parse:s,stringify:l}}function Wb(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Xb(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const a=Wb(i[n],r[n]);if(a)return a;n++}if(Math.abs(r.length-i.length)===1){if(sd(i))return 1;if(sd(r))return-1}return r.length-i.length}function sd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Yb={type:0,value:""},$b=/[a-zA-Z0-9_]/;function jb(t){if(!t)return[[]];if(t==="/")return[[Yb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let a;function o(){a&&r.push(a),a=[]}let s=0,l,c="",u="";function f(){c&&(n===0?a.push({type:0,value:c}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;s<t.length;){if(l=t[s++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:$b.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function qb(t,e,n){const i=Vb(jb(t.path),n),r=nt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Kb(t,e){const n=[],i=new Map;e=cd({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function a(u,f,d){const p=!d,_=Zb(u);_.aliasOf=d&&d.record;const v=cd(e,u),m=[_];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of y)m.push(nt({},_,{components:d?d.record.components:_.components,path:A,aliasOf:d?d.record:_}))}let h,S;for(const y of m){const{path:A}=y;if(f&&A[0]!=="/"){const I=f.record.path,C=I[I.length-1]==="/"?"":"/";y.path=f.record.path+(A&&C+A)}if(h=qb(y,f,v),d?d.alias.push(h):(S=S||h,S!==h&&S.alias.push(h),p&&u.name&&!ld(h)&&o(u.name)),_.children){const I=_.children;for(let C=0;C<I.length;C++)a(I[C],h,d&&d.children[C])}d=d||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&l(h)}return S?()=>{o(S)}:fa}function o(u){if(Lp(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function s(){return n}function l(u){let f=0;for(;f<n.length&&Xb(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Ip(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!ld(u)&&i.set(u.record.name,u)}function c(u,f){let d,p={},_,v;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw zr(1,{location:u});v=d.record.name,p=nt(od(f.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&od(u.params,d.keys.map(S=>S.name))),_=d.stringify(p)}else if("path"in u)_=u.path,d=n.find(S=>S.re.test(_)),d&&(p=d.parse(_),v=d.record.name);else{if(d=f.name?i.get(f.name):n.find(S=>S.re.test(f.path)),!d)throw zr(1,{location:u,currentLocation:f});v=d.record.name,p=nt({},f.params,u.params),_=d.stringify(p)}const m=[];let h=d;for(;h;)m.unshift(h.record),h=h.parent;return{name:v,path:_,params:p,matched:m,meta:Qb(m)}}return t.forEach(u=>a(u)),{addRoute:a,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:r}}function od(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Zb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Jb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Jb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function ld(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qb(t){return t.reduce((e,n)=>nt(e,n.meta),{})}function cd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Ip(t,e){return e.children.some(n=>n===t||Ip(t,n))}const Up=/#/g,eT=/&/g,tT=/\//g,nT=/=/g,iT=/\?/g,Np=/\+/g,rT=/%5B/g,aT=/%5D/g,Op=/%5E/g,sT=/%60/g,Fp=/%7B/g,oT=/%7C/g,Bp=/%7D/g,lT=/%20/g;function Pc(t){return encodeURI(""+t).replace(oT,"|").replace(rT,"[").replace(aT,"]")}function cT(t){return Pc(t).replace(Fp,"{").replace(Bp,"}").replace(Op,"^")}function kl(t){return Pc(t).replace(Np,"%2B").replace(lT,"+").replace(Up,"%23").replace(eT,"%26").replace(sT,"`").replace(Fp,"{").replace(Bp,"}").replace(Op,"^")}function uT(t){return kl(t).replace(nT,"%3D")}function fT(t){return Pc(t).replace(Up,"%23").replace(iT,"%3F")}function dT(t){return t==null?"":fT(t).replace(tT,"%2F")}function Hs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function hT(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const a=i[r].replace(Np," "),o=a.indexOf("="),s=Hs(o<0?a:a.slice(0,o)),l=o<0?null:Hs(a.slice(o+1));if(s in e){let c=e[s];vn(c)||(c=e[s]=[c]),c.push(l)}else e[s]=l}return e}function ud(t){let e="";for(let n in t){const i=t[n];if(n=uT(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(i)?i.map(a=>a&&kl(a)):[i&&kl(i)]).forEach(a=>{a!==void 0&&(e+=(e.length?"&":"")+n,a!=null&&(e+="="+a))})}return e}function pT(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=vn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const mT=Symbol(""),fd=Symbol(""),Lc=Symbol(""),kp=Symbol(""),zl=Symbol("");function ta(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function oi(t,e,n,i,r){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,s)=>{const l=f=>{f===!1?s(zr(4,{from:n,to:e})):f instanceof Error?s(f):zb(f)?s(zr(2,{from:e,to:f})):(a&&i.enterCallbacks[r]===a&&typeof f=="function"&&a.push(f),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>s(f))})}function ul(t,e,n,i){const r=[];for(const a of t)for(const o in a.components){let s=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(gT(s)){const c=(s.__vccOpts||s)[e];c&&r.push(oi(c,n,i,a,o))}else{let l=s();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const u=Eb(c)?c.default:c;a.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&oi(d,n,i,a,o)()}))}}return r}function gT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function dd(t){const e=Gn(Lc),n=Gn(kp),i=Ct(()=>e.resolve(wr(t.to))),r=Ct(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(kr.bind(null,u));if(d>-1)return d;const p=hd(l[c-2]);return c>1&&hd(u)===p&&f[f.length-1].path!==p?f.findIndex(kr.bind(null,l[c-2])):d}),a=Ct(()=>r.value>-1&&yT(n.params,i.value.params)),o=Ct(()=>r.value>-1&&r.value===n.matched.length-1&&Cp(n.params,i.value.params));function s(l={}){return xT(l)?e[wr(t.replace)?"replace":"push"](wr(t.to)).catch(fa):Promise.resolve()}return{route:i,href:Ct(()=>i.value.href),isActive:a,isExactActive:o,navigate:s}}const _T=pc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dd,setup(t,{slots:e}){const n=Zs(dd(t)),{options:i}=Gn(Lc),r=Ct(()=>({[pd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[pd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=e.default&&e.default(n);return t.custom?a:yc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},a)}}}),vT=_T;function xT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yT(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!vn(r)||r.length!==i.length||i.some((a,o)=>a!==r[o]))return!1}return!0}function hd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pd=(t,e,n)=>t??e??n,ST=pc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Gn(zl),r=Ct(()=>t.route||i.value),a=Gn(fd,0),o=Ct(()=>{let c=wr(a);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),s=Ct(()=>r.value.matched[o.value]);Es(fd,Ct(()=>o.value+1)),Es(mT,s),Es(zl,r);const l=ig();return ra(()=>[l.value,s.value,t.name],([c,u,f],[d,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!kr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=s.value,d=f&&f.components[u];if(!d)return md(n.default,{Component:d,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=yc(d,nt({},_,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return md(n.default,{Component:m,route:c})||m}}});function md(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ET=ST;function MT(t){const e=Kb(t.routes,t),n=t.parseQuery||hT,i=t.stringifyQuery||ud,r=t.history,a=ta(),o=ta(),s=ta(),l=rg(ti);let c=ti;vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ll.bind(null,F=>""+F),f=ll.bind(null,dT),d=ll.bind(null,Hs);function p(F,ce){let ie,ue;return Lp(F)?(ie=e.getRecordMatcher(F),ue=ce):ue=F,e.addRoute(ue,ie)}function _(F){const ce=e.getRecordMatcher(F);ce&&e.removeRoute(ce)}function v(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function h(F,ce){if(ce=nt({},ce||l.value),typeof F=="string"){const T=cl(n,F,ce.path),U=e.resolve({path:T.path},ce),k=r.createHref(T.fullPath);return nt(T,U,{params:d(U.params),hash:Hs(T.hash),redirectedFrom:void 0,href:k})}let ie;if("path"in F)ie=nt({},F,{path:cl(n,F.path,ce.path).path});else{const T=nt({},F.params);for(const U in T)T[U]==null&&delete T[U];ie=nt({},F,{params:f(T)}),ce.params=f(ce.params)}const ue=e.resolve(ie,ce),Te=F.hash||"";ue.params=u(d(ue.params));const B=Tb(i,nt({},F,{hash:cT(Te),path:ue.path})),b=r.createHref(B);return nt({fullPath:B,hash:Te,query:i===ud?pT(F.query):F.query||{}},ue,{redirectedFrom:void 0,href:b})}function S(F){return typeof F=="string"?cl(n,F,l.value.path):nt({},F)}function y(F,ce){if(c!==F)return zr(8,{from:ce,to:F})}function A(F){return P(F)}function I(F){return A(nt(S(F),{replace:!0}))}function C(F){const ce=F.matched[F.matched.length-1];if(ce&&ce.redirect){const{redirect:ie}=ce;let ue=typeof ie=="function"?ie(F):ie;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=S(ue):{path:ue},ue.params={}),nt({query:F.query,hash:F.hash,params:"path"in ue?{}:F.params},ue)}}function P(F,ce){const ie=c=h(F),ue=l.value,Te=F.state,B=F.force,b=F.replace===!0,T=C(ie);if(T)return P(nt(S(T),{state:typeof T=="object"?nt({},Te,T.state):Te,force:B,replace:b}),ce||ie);const U=ie;U.redirectedFrom=ce;let k;return!B&&Ab(i,ue,ie)&&(k=zr(16,{to:U,from:ue}),me(ue,ue,!0,!1)),(k?Promise.resolve(k):R(U,ue)).catch(Y=>Nn(Y)?Nn(Y,2)?Y:le(Y):q(Y,U,ue)).then(Y=>{if(Y){if(Nn(Y,2))return P(nt({replace:b},S(Y.to),{state:typeof Y.to=="object"?nt({},Te,Y.to.state):Te,force:B}),ce||U)}else Y=ne(U,ue,!0,b,Te);return Q(U,ue,Y),Y})}function se(F,ce){const ie=y(F,ce);return ie?Promise.reject(ie):Promise.resolve()}function E(F){const ce=fe.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(F):F()}function R(F,ce){let ie;const[ue,Te,B]=bT(F,ce);ie=ul(ue.reverse(),"beforeRouteLeave",F,ce);for(const T of ue)T.leaveGuards.forEach(U=>{ie.push(oi(U,F,ce))});const b=se.bind(null,F,ce);return ie.push(b),Me(ie).then(()=>{ie=[];for(const T of a.list())ie.push(oi(T,F,ce));return ie.push(b),Me(ie)}).then(()=>{ie=ul(Te,"beforeRouteUpdate",F,ce);for(const T of Te)T.updateGuards.forEach(U=>{ie.push(oi(U,F,ce))});return ie.push(b),Me(ie)}).then(()=>{ie=[];for(const T of B)if(T.beforeEnter)if(vn(T.beforeEnter))for(const U of T.beforeEnter)ie.push(oi(U,F,ce));else ie.push(oi(T.beforeEnter,F,ce));return ie.push(b),Me(ie)}).then(()=>(F.matched.forEach(T=>T.enterCallbacks={}),ie=ul(B,"beforeRouteEnter",F,ce),ie.push(b),Me(ie))).then(()=>{ie=[];for(const T of o.list())ie.push(oi(T,F,ce));return ie.push(b),Me(ie)}).catch(T=>Nn(T,8)?T:Promise.reject(T))}function Q(F,ce,ie){s.list().forEach(ue=>E(()=>ue(F,ce,ie)))}function ne(F,ce,ie,ue,Te){const B=y(F,ce);if(B)return B;const b=ce===ti,T=vr?history.state:{};ie&&(ue||b?r.replace(F.fullPath,nt({scroll:b&&T&&T.scroll},Te)):r.push(F.fullPath,Te)),l.value=F,me(F,ce,ie,b),le()}let _e;function O(){_e||(_e=r.listen((F,ce,ie)=>{if(!Se.listening)return;const ue=h(F),Te=C(ue);if(Te){P(nt(Te,{replace:!0}),ue).catch(fa);return}c=ue;const B=l.value;vr&&Ub(nd(B.fullPath,ie.delta),po()),R(ue,B).catch(b=>Nn(b,12)?b:Nn(b,2)?(P(b.to,ue).then(T=>{Nn(T,20)&&!ie.delta&&ie.type===Ma.pop&&r.go(-1,!1)}).catch(fa),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),q(b,ue,B))).then(b=>{b=b||ne(ue,B,!1),b&&(ie.delta&&!Nn(b,8)?r.go(-ie.delta,!1):ie.type===Ma.pop&&Nn(b,20)&&r.go(-1,!1)),Q(ue,B,b)}).catch(fa)}))}let W=ta(),X=ta(),J;function q(F,ce,ie){le(F);const ue=X.list();return ue.length?ue.forEach(Te=>Te(F,ce,ie)):console.error(F),Promise.reject(F)}function ae(){return J&&l.value!==ti?Promise.resolve():new Promise((F,ce)=>{W.add([F,ce])})}function le(F){return J||(J=!F,O(),W.list().forEach(([ce,ie])=>F?ie(F):ce()),W.reset()),F}function me(F,ce,ie,ue){const{scrollBehavior:Te}=t;if(!vr||!Te)return Promise.resolve();const B=!ie&&Nb(nd(F.fullPath,0))||(ue||!ie)&&history.state&&history.state.scroll||null;return gh().then(()=>Te(F,ce,B)).then(b=>b&&Ib(b)).catch(b=>q(b,F,ce))}const pe=F=>r.go(F);let Z;const fe=new Set,Se={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:m,getRoutes:v,resolve:h,options:t,push:A,replace:I,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:X.add,isReady:ae,install(F){const ce=this;F.component("RouterLink",vT),F.component("RouterView",ET),F.config.globalProperties.$router=ce,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>wr(l)}),vr&&!Z&&l.value===ti&&(Z=!0,A(r.location).catch(Te=>{}));const ie={};for(const Te in ti)Object.defineProperty(ie,Te,{get:()=>l.value[Te],enumerable:!0});F.provide(Lc,ce),F.provide(kp,oh(ie)),F.provide(zl,l);const ue=F.unmount;fe.add(F),F.unmount=function(){fe.delete(F),fe.size<1&&(c=ti,_e&&_e(),_e=null,l.value=ti,Z=!1,J=!1),ue()}}};function Me(F){return F.reduce((ce,ie)=>ce.then(()=>E(ie)),Promise.resolve())}return Se}function bT(t,e){const n=[],i=[],r=[],a=Math.max(e.matched.length,t.matched.length);for(let o=0;o<a;o++){const s=e.matched[o];s&&(t.matched.find(c=>kr(c,s))?i.push(s):n.push(s));const l=t.matched[o];l&&(e.matched.find(c=>kr(c,l))||r.push(l))}return[n,i,r]}const TT=[{path:"/",component:Tp,name:"About Me",meta:{number:1}},{path:"/experience",component:Ap,name:"Experience",meta:{number:2}},{path:"/work",component:wp,name:"Work",meta:{number:3}},{path:"/contact",component:Rp,name:"Contact",meta:{number:4}}],AT=MT({history:kb(),routes:TT});function gd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function we(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gd(Object(n),!0).forEach(function(i){bt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gd(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Gs(t){"@babel/helpers - typeof";return Gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gs(t)}function wT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function RT(t,e,n){return e&&_d(t.prototype,e),n&&_d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Dc(t,e){return PT(t)||DT(t,e)||zp(t,e)||UT()}function La(t){return CT(t)||LT(t)||zp(t)||IT()}function CT(t){if(Array.isArray(t))return Hl(t)}function PT(t){if(Array.isArray(t))return t}function LT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function DT(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw s}}return i}}function zp(t,e){if(t){if(typeof t=="string")return Hl(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hl(t,e)}}function Hl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function IT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vd=function(){},Ic={},Hp={},Gp=null,Vp={mark:vd,measure:vd};try{typeof window<"u"&&(Ic=window),typeof document<"u"&&(Hp=document),typeof MutationObserver<"u"&&(Gp=MutationObserver),typeof performance<"u"&&(Vp=performance)}catch{}var NT=Ic.navigator||{},xd=NT.userAgent,yd=xd===void 0?"":xd,_i=Ic,lt=Hp,Sd=Gp,ds=Vp;_i.document;var jn=!!lt.documentElement&&!!lt.head&&typeof lt.addEventListener=="function"&&typeof lt.createElement=="function",Wp=~yd.indexOf("MSIE")||~yd.indexOf("Trident/"),hs,ps,ms,gs,_s,Wn="___FONT_AWESOME___",Gl=16,Xp="fa",Yp="svg-inline--fa",Yi="data-fa-i2svg",Vl="data-fa-pseudo-element",OT="data-fa-pseudo-element-pending",Uc="data-prefix",Nc="data-icon",Ed="fontawesome-i2svg",FT="async",BT=["HTML","HEAD","STYLE","SCRIPT"],$p=function(){try{return!0}catch{return!1}}(),st="classic",pt="sharp",Oc=[st,pt];function Da(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[st]}})}var ba=Da((hs={},bt(hs,st,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),bt(hs,pt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),hs)),Ta=Da((ps={},bt(ps,st,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),bt(ps,pt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ps)),Aa=Da((ms={},bt(ms,st,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),bt(ms,pt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ms)),kT=Da((gs={},bt(gs,st,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),bt(gs,pt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),gs)),zT=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,jp="fa-layers-text",HT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,GT=Da((_s={},bt(_s,st,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),bt(_s,pt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),_s)),qp=[1,2,3,4,5,6,7,8,9,10],VT=qp.concat([11,12,13,14,15,16,17,18,19,20]),WT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ii={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wa=new Set;Object.keys(Ta[st]).map(wa.add.bind(wa));Object.keys(Ta[pt]).map(wa.add.bind(wa));var XT=[].concat(Oc,La(wa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ii.GROUP,Ii.SWAP_OPACITY,Ii.PRIMARY,Ii.SECONDARY]).concat(qp.map(function(t){return"".concat(t,"x")})).concat(VT.map(function(t){return"w-".concat(t)})),ha=_i.FontAwesomeConfig||{};function YT(t){var e=lt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function $T(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(lt&&typeof lt.querySelector=="function"){var jT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jT.forEach(function(t){var e=Dc(t,2),n=e[0],i=e[1],r=$T(YT(n));r!=null&&(ha[i]=r)})}var Kp={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xp,replacementClass:Yp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ha.familyPrefix&&(ha.cssPrefix=ha.familyPrefix);var Hr=we(we({},Kp),ha);Hr.autoReplaceSvg||(Hr.observeMutations=!1);var Le={};Object.keys(Kp).forEach(function(t){Object.defineProperty(Le,t,{enumerable:!0,set:function(n){Hr[t]=n,pa.forEach(function(i){return i(Le)})},get:function(){return Hr[t]}})});Object.defineProperty(Le,"familyPrefix",{enumerable:!0,set:function(e){Hr.cssPrefix=e,pa.forEach(function(n){return n(Le)})},get:function(){return Hr.cssPrefix}});_i.FontAwesomeConfig=Le;var pa=[];function qT(t){return pa.push(t),function(){pa.splice(pa.indexOf(t),1)}}var ni=Gl,Tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function KT(t){if(!(!t||!jn)){var e=lt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=lt.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return lt.head.insertBefore(e,i),t}}var ZT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ra(){for(var t=12,e="";t-- >0;)e+=ZT[Math.random()*62|0];return e}function jr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Fc(t){return t.classList?jr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Zp(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function JT(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Zp(t[n]),'" ')},"").trim()}function mo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Bc(t){return t.size!==Tn.size||t.x!==Tn.x||t.y!==Tn.y||t.rotate!==Tn.rotate||t.flipX||t.flipY}function QT(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function eA(t){var e=t.transform,n=t.width,i=n===void 0?Gl:n,r=t.height,a=r===void 0?Gl:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Wp?l+="translate(".concat(e.x/ni-i/2,"em, ").concat(e.y/ni-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/ni,"em), calc(-50% + ").concat(e.y/ni,"em)) "):l+="translate(".concat(e.x/ni,"em, ").concat(e.y/ni,"em) "),l+="scale(".concat(e.size/ni*(e.flipX?-1:1),", ").concat(e.size/ni*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var tA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Jp(){var t=Xp,e=Yp,n=Le.cssPrefix,i=Le.replacementClass,r=tA;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var Md=!1;function fl(){Le.autoAddCss&&!Md&&(KT(Jp()),Md=!0)}var nA={mixout:function(){return{dom:{css:Jp,insertCss:fl}}},hooks:function(){return{beforeDOMElementCreation:function(){fl()},beforeI2svg:function(){fl()}}}},Xn=_i||{};Xn[Wn]||(Xn[Wn]={});Xn[Wn].styles||(Xn[Wn].styles={});Xn[Wn].hooks||(Xn[Wn].hooks={});Xn[Wn].shims||(Xn[Wn].shims=[]);var gn=Xn[Wn],Qp=[],iA=function t(){lt.removeEventListener("DOMContentLoaded",t),Vs=1,Qp.map(function(e){return e()})},Vs=!1;jn&&(Vs=(lt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(lt.readyState),Vs||lt.addEventListener("DOMContentLoaded",iA));function rA(t){jn&&(Vs?setTimeout(t,0):Qp.push(t))}function Ia(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,a=r===void 0?[]:r;return typeof t=="string"?Zp(t):"<".concat(e," ").concat(JT(i),">").concat(a.map(Ia).join(""),"</").concat(e,">")}function bd(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var aA=function(e,n){return function(i,r,a,o){return e.call(n,i,r,a,o)}},dl=function(e,n,i,r){var a=Object.keys(e),o=a.length,s=r!==void 0?aA(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[a[0]]):(l=0,u=i);l<o;l++)c=a[l],u=s(u,e[c],c,e);return u};function sA(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Wl(t){var e=sA(t);return e.length===1?e[0].toString(16):null}function oA(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Td(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Xl(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,a=Td(e);typeof gn.hooks.addPack=="function"&&!r?gn.hooks.addPack(t,Td(e)):gn.styles[t]=we(we({},gn.styles[t]||{}),a),t==="fas"&&Xl("fa",e)}var vs,xs,ys,Er=gn.styles,lA=gn.shims,cA=(vs={},bt(vs,st,Object.values(Aa[st])),bt(vs,pt,Object.values(Aa[pt])),vs),kc=null,em={},tm={},nm={},im={},rm={},uA=(xs={},bt(xs,st,Object.keys(ba[st])),bt(xs,pt,Object.keys(ba[pt])),xs);function fA(t){return~XT.indexOf(t)}function dA(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!fA(r)?r:null}var am=function(){var e=function(a){return dl(Er,function(o,s,l){return o[l]=dl(s,a,{}),o},{})};em=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),tm=e(function(r,a,o){if(r[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),rm=e(function(r,a,o){var s=a[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in Er||Le.autoFetchSvg,i=dl(lA,function(r,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});nm=i.names,im=i.unicodes,kc=go(Le.styleDefault,{family:Le.familyDefault})};qT(function(t){kc=go(t.styleDefault,{family:Le.familyDefault})});am();function zc(t,e){return(em[t]||{})[e]}function hA(t,e){return(tm[t]||{})[e]}function Ui(t,e){return(rm[t]||{})[e]}function sm(t){return nm[t]||{prefix:null,iconName:null}}function pA(t){var e=im[t],n=zc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vi(){return kc}var Hc=function(){return{prefix:null,iconName:null,rest:[]}};function go(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?st:n,r=ba[i][t],a=Ta[i][t]||Ta[i][r],o=t in gn.styles?t:null;return a||o||null}var Ad=(ys={},bt(ys,st,Object.keys(Aa[st])),bt(ys,pt,Object.keys(Aa[pt])),ys);function _o(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,a=(e={},bt(e,st,"".concat(Le.cssPrefix,"-").concat(st)),bt(e,pt,"".concat(Le.cssPrefix,"-").concat(pt)),e),o=null,s=st;(t.includes(a[st])||t.some(function(c){return Ad[st].includes(c)}))&&(s=st),(t.includes(a[pt])||t.some(function(c){return Ad[pt].includes(c)}))&&(s=pt);var l=t.reduce(function(c,u){var f=dA(Le.cssPrefix,u);if(Er[u]?(u=cA[s].includes(u)?kT[s][u]:u,o=u,c.prefix=u):uA[s].indexOf(u)>-1?(o=u,c.prefix=go(u,{family:s})):f?c.iconName=f:u!==Le.replacementClass&&u!==a[st]&&u!==a[pt]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var d=o==="fa"?sm(c.iconName):{},p=Ui(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Er.far&&Er.fas&&!Le.autoFetchSvg&&(c.prefix="fas")}return c},Hc());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===pt&&(Er.fass||Le.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ui(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=vi()||"fas"),l}var mA=function(){function t(){wT(this,t),this.definitions={}}return RT(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=we(we({},n.definitions[s]||{}),o[s]),Xl(s,o[s]);var l=Aa[st][s];l&&Xl(l,o[s]),am()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=c)}),n[s][l]=c}),n}}]),t}(),wd=[],Mr={},Lr={},gA=Object.keys(Lr);function _A(t,e){var n=e.mixoutsTo;return wd=t,Mr={},Object.keys(Lr).forEach(function(i){gA.indexOf(i)===-1&&delete Lr[i]}),wd.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Gs(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){Mr[o]||(Mr[o]=[]),Mr[o].push(a[o])})}i.provides&&i.provides(Lr)}),n}function Yl(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=Mr[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function $i(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Mr[t]||[];r.forEach(function(a){a.apply(null,n)})}function Yn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Lr[t]?Lr[t].apply(null,e):void 0}function $l(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||vi();if(e)return e=Ui(n,e)||e,bd(om.definitions,n,e)||bd(gn.styles,n,e)}var om=new mA,vA=function(){Le.autoReplaceSvg=!1,Le.observeMutations=!1,$i("noAuto")},xA={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jn?($i("beforeI2svg",e),Yn("pseudoElements2svg",e),Yn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Le.autoReplaceSvg===!1&&(Le.autoReplaceSvg=!0),Le.observeMutations=!0,rA(function(){SA({autoReplaceSvgRoot:n}),$i("watch",e)})}},yA={icon:function(e){if(e===null)return null;if(Gs(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ui(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=go(e[0]);return{prefix:i,iconName:Ui(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Le.cssPrefix,"-"))>-1||e.match(zT))){var r=_o(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||vi(),iconName:Ui(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=vi();return{prefix:a,iconName:Ui(a,e)||e}}}},tn={noAuto:vA,config:Le,dom:xA,parse:yA,library:om,findIconDefinition:$l,toHtml:Ia},SA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?lt:n;(Object.keys(gn.styles).length>0||Le.autoFetchSvg)&&jn&&Le.autoReplaceSvg&&tn.dom.i2svg({node:i})};function vo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Ia(i)})}}),Object.defineProperty(t,"node",{get:function(){if(jn){var i=lt.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function EA(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,o=t.transform;if(Bc(o)&&n.found&&!i.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=mo(we(we({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function MA(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(Le.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:we(we({},r),{},{id:o}),children:i}]}]}function Gc(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,_=i.found?i:n,v=_.width,m=_.height,h=r==="fak",S=[Le.replacementClass,a?"".concat(Le.cssPrefix,"-").concat(a):""].filter(function(E){return f.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(f.classes).join(" "),y={children:[],attributes:we(we({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:S,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(m)})},A=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/m*16*.0625,"em")}:{};p&&(y.attributes[Yi]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(u||Ra())},children:[l]}),delete y.attributes.title);var I=we(we({},y),{},{prefix:r,iconName:a,main:n,mask:i,maskId:c,transform:o,symbol:s,styles:we(we({},A),f.styles)}),C=i.found&&n.found?Yn("generateAbstractMask",I)||{children:[],attributes:{}}:Yn("generateAbstractIcon",I)||{children:[],attributes:{}},P=C.children,se=C.attributes;return I.children=P,I.attributes=se,s?MA(I):EA(I)}function Rd(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=we(we(we({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[Yi]="");var u=we({},o.styles);Bc(r)&&(u.transform=eA({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=mo(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function bA(t){var e=t.content,n=t.title,i=t.extra,r=we(we(we({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=mo(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hl=gn.styles;function jl(t){var e=t[0],n=t[1],i=t.slice(4),r=Dc(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(Le.cssPrefix,"-").concat(Ii.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Le.cssPrefix,"-").concat(Ii.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(Le.cssPrefix,"-").concat(Ii.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var TA={found:!1,width:512,height:512};function AA(t,e){!$p&&!Le.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ql(t,e){var n=e;return e==="fa"&&Le.styleDefault!==null&&(e=vi()),new Promise(function(i,r){if(Yn("missingIconAbstract"),n==="fa"){var a=sm(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&hl[e]&&hl[e][t]){var o=hl[e][t];return i(jl(o))}AA(t,e),i(we(we({},TA),{},{icon:Le.showMissingIcons&&t?Yn("missingIconAbstract")||{}:{}}))})}var Cd=function(){},Kl=Le.measurePerformance&&ds&&ds.mark&&ds.measure?ds:{mark:Cd,measure:Cd},ia='FA "6.5.1"',wA=function(e){return Kl.mark("".concat(ia," ").concat(e," begins")),function(){return lm(e)}},lm=function(e){Kl.mark("".concat(ia," ").concat(e," ends")),Kl.measure("".concat(ia," ").concat(e),"".concat(ia," ").concat(e," begins"),"".concat(ia," ").concat(e," ends"))},Vc={begin:wA,end:lm},As=function(){};function Pd(t){var e=t.getAttribute?t.getAttribute(Yi):null;return typeof e=="string"}function RA(t){var e=t.getAttribute?t.getAttribute(Uc):null,n=t.getAttribute?t.getAttribute(Nc):null;return e&&n}function CA(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Le.replacementClass)}function PA(){if(Le.autoReplaceSvg===!0)return ws.replace;var t=ws[Le.autoReplaceSvg];return t||ws.replace}function LA(t){return lt.createElementNS("http://www.w3.org/2000/svg",t)}function DA(t){return lt.createElement(t)}function cm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?LA:DA:n;if(typeof t=="string")return lt.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){r.appendChild(cm(o,{ceFn:i}))}),r}function IA(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ws={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(cm(r),n)}),n.getAttribute(Yi)===null&&Le.keepOriginalSource){var i=lt.createComment(IA(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Fc(n).indexOf(Le.replacementClass))return ws.replace(e);var r=new RegExp("".concat(Le.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(s,l){return l===Le.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(s){return Ia(s)}).join(`
`);n.setAttribute(Yi,""),n.innerHTML=o}};function Ld(t){t()}function um(t,e){var n=typeof e=="function"?e:As;if(t.length===0)n();else{var i=Ld;Le.mutateApproach===FT&&(i=_i.requestAnimationFrame||Ld),i(function(){var r=PA(),a=Vc.begin("mutate");t.map(r),a(),n()})}}var Wc=!1;function fm(){Wc=!0}function Zl(){Wc=!1}var Ws=null;function Dd(t){if(Sd&&Le.observeMutations){var e=t.treeCallback,n=e===void 0?As:e,i=t.nodeCallback,r=i===void 0?As:i,a=t.pseudoElementsCallback,o=a===void 0?As:a,s=t.observeMutationsRoot,l=s===void 0?lt:s;Ws=new Sd(function(c){if(!Wc){var u=vi();jr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Pd(f.addedNodes[0])&&(Le.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&Le.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Pd(f.target)&&~WT.indexOf(f.attributeName))if(f.attributeName==="class"&&RA(f.target)){var d=_o(Fc(f.target)),p=d.prefix,_=d.iconName;f.target.setAttribute(Uc,p||u),_&&f.target.setAttribute(Nc,_)}else CA(f.target)&&r(f.target)})}}),jn&&Ws.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function UA(){Ws&&Ws.disconnect()}function NA(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),n}function OA(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=_o(Fc(t));return r.prefix||(r.prefix=vi()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=hA(r.prefix,t.innerText)||zc(r.prefix,Wl(t.innerText))),!r.iconName&&Le.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function FA(t){var e=jr(t.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Le.autoA11y&&(n?e["aria-labelledby"]="".concat(Le.replacementClass,"-title-").concat(i||Ra()):(e["aria-hidden"]="true",e.focusable="false")),e}function BA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Id(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=OA(t),i=n.iconName,r=n.prefix,a=n.rest,o=FA(t),s=Yl("parseNodeAttributes",{},t),l=e.styleParser?NA(t):[];return we({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var kA=gn.styles;function dm(t){var e=Le.autoReplaceSvg==="nest"?Id(t,{styleParser:!1}):Id(t);return~e.extra.classes.indexOf(jp)?Yn("generateLayersText",t,e):Yn("generateSvgReplacementMutation",t,e)}var xi=new Set;Oc.map(function(t){xi.add("fa-".concat(t))});Object.keys(ba[st]).map(xi.add.bind(xi));Object.keys(ba[pt]).map(xi.add.bind(xi));xi=La(xi);function Ud(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jn)return Promise.resolve();var n=lt.documentElement.classList,i=function(f){return n.add("".concat(Ed,"-").concat(f))},r=function(f){return n.remove("".concat(Ed,"-").concat(f))},a=Le.autoFetchSvg?xi:Oc.map(function(u){return"fa-".concat(u)}).concat(Object.keys(kA));a.includes("fa")||a.push("fa");var o=[".".concat(jp,":not([").concat(Yi,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(Yi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=jr(t.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Vc.begin("onTree"),c=s.reduce(function(u,f){try{var d=dm(f);d&&u.push(d)}catch(p){$p||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){um(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function zA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dm(t).then(function(n){n&&um([n],e)})}function HA(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:$l(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:$l(r||{})),t(i,we(we({},n),{},{mask:r}))}}var GA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Tn:i,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,p=n.titleId,_=p===void 0?null:p,v=n.classes,m=v===void 0?[]:v,h=n.attributes,S=h===void 0?{}:h,y=n.styles,A=y===void 0?{}:y;if(e){var I=e.prefix,C=e.iconName,P=e.icon;return vo(we({type:"icon"},e),function(){return $i("beforeDOMElementCreation",{iconDefinition:e,params:n}),Le.autoA11y&&(d?S["aria-labelledby"]="".concat(Le.replacementClass,"-title-").concat(_||Ra()):(S["aria-hidden"]="true",S.focusable="false")),Gc({icons:{main:jl(P),mask:l?jl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:C,transform:we(we({},Tn),r),symbol:o,title:d,maskId:u,titleId:_,extra:{attributes:S,styles:A,classes:m}})})}},VA={mixout:function(){return{icon:HA(GA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ud,n.nodeCallback=zA,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?lt:i,a=n.callback,o=a===void 0?function(){}:a;return Ud(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,a=i.title,o=i.titleId,s=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(p,_){Promise.all([ql(r,s),u.iconName?ql(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var m=Dc(v,2),h=m[0],S=m[1];p([n,Gc({icons:{main:h,mask:S},prefix:s,iconName:r,transform:l,symbol:c,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.transform,s=n.styles,l=mo(s);l.length>0&&(r.style=l);var c;return Bc(o)&&(c=Yn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(c||a.icon),{children:i,attributes:r}}}},WA={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return vo({type:"layer"},function(){$i("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(Le.cssPrefix,"-layers")].concat(La(a)).join(" ")},children:o}]})}}}},XA={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,s=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return vo({type:"counter",content:n},function(){return $i("beforeDOMElementCreation",{content:n,params:i}),bA({content:n.toString(),title:a,extra:{attributes:c,styles:f,classes:["".concat(Le.cssPrefix,"-layers-counter")].concat(La(s))}})})}}}},YA={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?Tn:r,o=i.title,s=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,d=i.styles,p=d===void 0?{}:d;return vo({type:"text",content:n},function(){return $i("beforeDOMElementCreation",{content:n,params:i}),Rd({content:n,transform:we(we({},Tn),a),title:s,extra:{attributes:f,styles:p,classes:["".concat(Le.cssPrefix,"-layers-text")].concat(La(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,a=i.transform,o=i.extra,s=null,l=null;if(Wp){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return Le.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Rd({content:n.innerHTML,width:s,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},$A=new RegExp('"',"ug"),Nd=[1105920,1112319];function jA(t){var e=t.replace($A,""),n=oA(e,0),i=n>=Nd[0]&&n<=Nd[1],r=e.length===2?e[0]===e[1]:!1;return{value:Wl(r?e[0]:e),isSecondary:i||r}}function Od(t,e){var n="".concat(OT).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var a=jr(t.children),o=a.filter(function(P){return P.getAttribute(Vl)===e})[0],s=_i.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(HT),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?pt:st,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ta[d][l[2].toLowerCase()]:GT[d][c],_=jA(f),v=_.value,m=_.isSecondary,h=l[0].startsWith("FontAwesome"),S=zc(p,v),y=S;if(h){var A=pA(v);A.iconName&&A.prefix&&(S=A.iconName,p=A.prefix)}if(S&&!m&&(!o||o.getAttribute(Uc)!==p||o.getAttribute(Nc)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var I=BA(),C=I.extra;C.attributes[Vl]=e,ql(S,p).then(function(P){var se=Gc(we(we({},I),{},{icons:{main:P,mask:Hc()},prefix:p,iconName:y,extra:C,watchable:!0})),E=lt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=se.map(function(R){return Ia(R)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function qA(t){return Promise.all([Od(t,"::before"),Od(t,"::after")])}function KA(t){return t.parentNode!==document.head&&!~BT.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vl)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fd(t){if(jn)return new Promise(function(e,n){var i=jr(t.querySelectorAll("*")).filter(KA).map(qA),r=Vc.begin("searchPseudoElements");fm(),Promise.all(i).then(function(){r(),Zl(),e()}).catch(function(){r(),Zl(),n()})})}var ZA={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fd,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?lt:i;Le.searchPseudoElements&&Fd(r)}}},Bd=!1,JA={mixout:function(){return{dom:{unwatch:function(){fm(),Bd=!0}}}},hooks:function(){return{bootstrap:function(){Dd(Yl("mutationObserverCallbacks",{}))},noAuto:function(){UA()},watch:function(n){var i=n.observeMutationsRoot;Bd?Zl():Dd(Yl("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},kd=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return i.flipX=!0,i;if(o&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(o){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},QA={mixout:function(){return{parse:{transform:function(n){return kd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=kd(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:d};return{tag:"g",attributes:we({},p.outer),children:[{tag:"g",attributes:we({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:we(we({},i.icon.attributes),p.path)}]}]}}}},pl={x:0,y:0,width:"100%",height:"100%"};function zd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function e1(t){return t.tag==="g"?t.children:[t]}var t1={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),a=r?_o(r.split(" ").map(function(o){return o.trim()})):Hc();return a.prefix||(a.prefix=vi()),n.mask=a,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,f=o.width,d=o.icon,p=QT({transform:l,containerWidth:f,iconWidth:c}),_={tag:"rect",attributes:we(we({},pl),{},{fill:"white"})},v=u.children?{children:u.children.map(zd)}:{},m={tag:"g",attributes:we({},p.inner),children:[zd(we({tag:u.tag,attributes:we(we({},u.attributes),p.path)},v))]},h={tag:"g",attributes:we({},p.outer),children:[m]},S="mask-".concat(s||Ra()),y="clip-".concat(s||Ra()),A={tag:"mask",attributes:we(we({},pl),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,h]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:e1(d)},A]};return i.push(I,{tag:"rect",attributes:we({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(S,")")},pl)}),{children:i,attributes:r}}}},n1={provides:function(e){var n=!1;_i.matchMedia&&(n=_i.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:we(we({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=we(we({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:we(we({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:we(we({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:we(we({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:we(we({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:we(we({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:we(we({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:we(we({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},i1={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},r1=[nA,VA,WA,XA,YA,ZA,JA,QA,t1,n1,i1];_A(r1,{mixoutsTo:tn});tn.noAuto;tn.config;tn.library;tn.dom;var Jl=tn.parse;tn.findIconDefinition;tn.toHtml;var a1=tn.icon;tn.layer;tn.text;tn.counter;function Hd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function kn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hd(Object(n),!0).forEach(function(i){Wt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hd(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Xs(t){"@babel/helpers - typeof";return Xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xs(t)}function Wt(t,e,n){return e=c1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s1(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function o1(t,e){if(t==null)return{};var n=s1(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function l1(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function c1(t){var e=l1(t,"string");return typeof e=="symbol"?e:String(e)}var u1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hm={exports:{}};(function(t){(function(e){var n=function(h,S,y){if(!c(S)||f(S)||d(S)||p(S)||l(S))return S;var A,I=0,C=0;if(u(S))for(A=[],C=S.length;I<C;I++)A.push(n(h,S[I],y));else{A={};for(var P in S)Object.prototype.hasOwnProperty.call(S,P)&&(A[h(P,y)]=n(h,S[P],y))}return A},i=function(h,S){S=S||{};var y=S.separator||"_",A=S.split||/(?=[A-Z])/;return h.split(A).join(y)},r=function(h){return _(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(S,y){return y?y.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},a=function(h){var S=r(h);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(h,S){return i(h,S).toLowerCase()},s=Object.prototype.toString,l=function(h){return typeof h=="function"},c=function(h){return h===Object(h)},u=function(h){return s.call(h)=="[object Array]"},f=function(h){return s.call(h)=="[object Date]"},d=function(h){return s.call(h)=="[object RegExp]"},p=function(h){return s.call(h)=="[object Boolean]"},_=function(h){return h=h-0,h===h},v=function(h,S){var y=S&&"process"in S?S.process:S;return typeof y!="function"?h:function(A,I){return y(A,h,I)}},m={camelize:r,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(h,S){return n(v(r,S),h)},decamelizeKeys:function(h,S){return n(v(o,S),h,S)},pascalizeKeys:function(h,S){return n(v(a,S),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(u1)})(hm);var f1=hm.exports,d1=["class","style"];function h1(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=f1.camelize(n.slice(0,i)),a=n.slice(i+1).trim();return e[r]=a,e},{})}function p1(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function pm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return pm(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=p1(u);break;case"style":l.style=h1(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=o1(n,d1);return yc(t.tag,kn(kn(kn({},e),{},{class:r.class,style:kn(kn({},r.style),o)},r.attrs),s),i)}var mm=!1;try{mm=!0}catch{}function m1(){if(!mm&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ml(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Wt({},t,e):{}}function g1(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Wt(e,"fa-".concat(t.size),t.size!==null),Wt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Wt(e,"fa-pull-".concat(t.pull),t.pull!==null),Wt(e,"fa-swap-opacity",t.swapOpacity),Wt(e,"fa-bounce",t.bounce),Wt(e,"fa-shake",t.shake),Wt(e,"fa-beat",t.beat),Wt(e,"fa-fade",t.fade),Wt(e,"fa-beat-fade",t.beatFade),Wt(e,"fa-flash",t.flash),Wt(e,"fa-spin-pulse",t.spinPulse),Wt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Gd(t){if(t&&Xs(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Jl.icon)return Jl.icon(t);if(t===null)return null;if(Xs(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var _1=pc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Ct(function(){return Gd(e.icon)}),a=Ct(function(){return ml("classes",g1(e))}),o=Ct(function(){return ml("transform",typeof e.transform=="string"?Jl.transform(e.transform):e.transform)}),s=Ct(function(){return ml("mask",Gd(e.mask))}),l=Ct(function(){return a1(r.value,kn(kn(kn(kn({},a.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});ra(l,function(u){if(!u)return m1("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=Ct(function(){return l.value?pm(l.value.abstract[0],{},i):null});return function(){return c.value}}});const gm=B_(Sb);gm.use(AT).component("font-awesome-icon",_1);gm.mount("#app");
