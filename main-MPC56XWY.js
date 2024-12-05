var ag=Object.defineProperty,lg=Object.defineProperties;var ug=Object.getOwnPropertyDescriptors;var G5=Object.getOwnPropertySymbols;var fg=Object.prototype.hasOwnProperty,dg=Object.prototype.propertyIsEnumerable;var W5=(t,e,n)=>e in t?ag(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,V=(t,e)=>{for(var n in e||={})fg.call(e,n)&&W5(t,n,e[n]);if(G5)for(var n of G5(e))dg.call(e,n)&&W5(t,n,e[n]);return t},He=(t,e)=>lg(t,ug(e));var Z2=(t,e,n)=>new Promise((i,s)=>{var r=a=>{try{c(n.next(a))}catch(l){s(l)}},o=a=>{try{c(n.throw(a))}catch(l){s(l)}},c=a=>a.done?i(a.value):Promise.resolve(a.value).then(r,o);c((n=n.apply(t,e)).next())});var j5=null;var T4=1,$5=Symbol("SIGNAL");function dt(t){let e=j5;return j5=t,e}var q5={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function hg(t){if(!(N4(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===T4)){if(!t.producerMustRecompute(t)&&!D4(t)){t.dirty=!1,t.lastCleanEpoch=T4;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=T4}}function X5(t){return t&&(t.nextProducerIndex=0),dt(t)}function Y5(t,e){if(dt(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(N4(t))for(let n=t.nextProducerIndex;n<t.producerNode.length;n++)I4(t.producerNode[n],t.producerIndexOfThis[n]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function D4(t){$0(t);for(let e=0;e<t.producerNode.length;e++){let n=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==n.version||(hg(n),i!==n.version))return!0}return!1}function Z5(t){if($0(t),N4(t))for(let e=0;e<t.producerNode.length;e++)I4(t.producerNode[e],t.producerIndexOfThis[e]);t.producerNode.length=t.producerLastReadVersion.length=t.producerIndexOfThis.length=0,t.liveConsumerNode&&(t.liveConsumerNode.length=t.liveConsumerIndexOfThis.length=0)}function I4(t,e){if(pg(t),$0(t),t.liveConsumerNode.length===1)for(let i=0;i<t.producerNode.length;i++)I4(t.producerNode[i],t.producerIndexOfThis[i]);let n=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[n],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[n],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){let i=t.liveConsumerIndexOfThis[e],s=t.liveConsumerNode[e];$0(s),s.producerIndexOfThis[i]=e}}function N4(t){return t.consumerIsAlwaysLive||(t?.liveConsumerNode?.length??0)>0}function $0(t){t.producerNode??=[],t.producerIndexOfThis??=[],t.producerLastReadVersion??=[]}function pg(t){t.liveConsumerNode??=[],t.liveConsumerIndexOfThis??=[]}function mg(){throw new Error}var gg=mg;function J5(t){gg=t}function Ue(t){return typeof t=="function"}function qi(t){let n=t(i=>{Error.call(i),i.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var q0=qi(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((i,s)=>`${s+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function sr(t,e){if(t){let n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Bt=class t{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let r of n)r.remove(this);else n.remove(this);let{initialTeardown:i}=this;if(Ue(i))try{i()}catch(r){e=r instanceof q0?r.errors:[r]}let{_finalizers:s}=this;if(s){this._finalizers=null;for(let r of s)try{K5(r)}catch(o){e=e??[],o instanceof q0?e=[...e,...o.errors]:e.push(o)}}if(e)throw new q0(e)}}add(e){var n;if(e&&e!==this)if(this.closed)K5(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}}_hasParent(e){let{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){let{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&sr(n,e)}remove(e){let{_finalizers:n}=this;n&&sr(n,e),e instanceof t&&e._removeParent(this)}};Bt.EMPTY=(()=>{let t=new Bt;return t.closed=!0,t})();var R4=Bt.EMPTY;function X0(t){return t instanceof Bt||t&&"closed"in t&&Ue(t.remove)&&Ue(t.add)&&Ue(t.unsubscribe)}function K5(t){Ue(t)?t():t.unsubscribe()}var Xn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Xi={setTimeout(t,e,...n){let{delegate:i}=Xi;return i?.setTimeout?i.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){let{delegate:e}=Xi;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Y0(t){Xi.setTimeout(()=>{let{onUnhandledError:e}=Xn;if(e)e(t);else throw t})}function rr(){}var Q5=P4("C",void 0,void 0);function eu(t){return P4("E",void 0,t)}function tu(t){return P4("N",t,void 0)}function P4(t,e,n){return{kind:t,value:e,error:n}}var J2=null;function Yi(t){if(Xn.useDeprecatedSynchronousErrorHandling){let e=!J2;if(e&&(J2={errorThrown:!1,error:null}),t(),e){let{errorThrown:n,error:i}=J2;if(J2=null,n)throw i}}else t()}function nu(t){Xn.useDeprecatedSynchronousErrorHandling&&J2&&(J2.errorThrown=!0,J2.error=t)}var K2=class extends Bt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,X0(e)&&e.add(this)):this.destination=yg}static create(e,n,i){return new Zi(e,n,i)}next(e){this.isStopped?F4(tu(e),this):this._next(e)}error(e){this.isStopped?F4(eu(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?F4(Q5,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Mg=Function.prototype.bind;function O4(t,e){return Mg.call(t,e)}var k4=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(i){Z0(i)}}error(e){let{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(i){Z0(i)}else Z0(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){Z0(n)}}},Zi=class extends K2{constructor(e,n,i){super();let s;if(Ue(e)||!e)s={next:e??void 0,error:n??void 0,complete:i??void 0};else{let r;this&&Xn.useDeprecatedNextContext?(r=Object.create(e),r.unsubscribe=()=>this.unsubscribe(),s={next:e.next&&O4(e.next,r),error:e.error&&O4(e.error,r),complete:e.complete&&O4(e.complete,r)}):s=e}this.destination=new k4(s)}};function Z0(t){Xn.useDeprecatedSynchronousErrorHandling?nu(t):Y0(t)}function vg(t){throw t}function F4(t,e){let{onStoppedNotification:n}=Xn;n&&Xi.setTimeout(()=>n(t,e))}var yg={closed:!0,next:rr,error:vg,complete:rr};var Ji=typeof Symbol=="function"&&Symbol.observable||"@@observable";function gn(t){return t}function U4(...t){return B4(t)}function B4(t){return t.length===0?gn:t.length===1?t[0]:function(n){return t.reduce((i,s)=>s(i),n)}}var vt=(()=>{class t{constructor(n){n&&(this._subscribe=n)}lift(n){let i=new t;return i.source=this,i.operator=n,i}subscribe(n,i,s){let r=Cg(n)?n:new Zi(n,i,s);return Yi(()=>{let{operator:o,source:c}=this;r.add(o?o.call(r,c):c?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(n){try{return this._subscribe(n)}catch(i){n.error(i)}}forEach(n,i){return i=iu(i),new i((s,r)=>{let o=new Zi({next:c=>{try{n(c)}catch(a){r(a),o.unsubscribe()}},error:r,complete:s});this.subscribe(o)})}_subscribe(n){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(n)}[Ji](){return this}pipe(...n){return B4(n)(this)}toPromise(n){return n=iu(n),new n((i,s)=>{let r;this.subscribe(o=>r=o,o=>s(o),()=>i(r))})}}return t.create=e=>new t(e),t})();function iu(t){var e;return(e=t??Xn.Promise)!==null&&e!==void 0?e:Promise}function xg(t){return t&&Ue(t.next)&&Ue(t.error)&&Ue(t.complete)}function Cg(t){return t&&t instanceof K2||xg(t)&&X0(t)}function V4(t){return Ue(t?.lift)}function it(t){return e=>{if(V4(e))return e.lift(function(n){try{return t(n,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function st(t,e,n,i,s){return new H4(t,e,n,i,s)}var H4=class extends K2{constructor(e,n,i,s,r,o){super(e),this.onFinalize=r,this.shouldUnsubscribe=o,this._next=n?function(c){try{n(c)}catch(a){e.error(a)}}:super._next,this._error=s?function(c){try{s(c)}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Ki(){return it((t,e)=>{let n=null;t._refCount++;let i=st(e,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){n=null;return}let s=t._connection,r=n;n=null,s&&(!r||s===r)&&s.unsubscribe(),e.unsubscribe()});t.subscribe(i),i.closed||(n=t.connect())})}var Qi=class extends vt{constructor(e,n){super(),this.source=e,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,V4(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Bt;let n=this.getSubject();e.add(this.source.subscribe(st(n,void 0,()=>{this._teardown(),n.complete()},i=>{this._teardown(),n.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Bt.EMPTY)}return e}refCount(){return Ki()(this)}};var su=qi(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var cn=(()=>{class t extends vt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let i=new J0(this,this);return i.operator=n,i}_throwIfClosed(){if(this.closed)throw new su}next(n){Yi(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(n)}})}error(n){Yi(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:i}=this;for(;i.length;)i.shift().error(n)}})}complete(){Yi(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:i,isStopped:s,observers:r}=this;return i||s?R4:(this.currentObservers=null,r.push(n),new Bt(()=>{this.currentObservers=null,sr(r,n)}))}_checkFinalizedStatuses(n){let{hasError:i,thrownError:s,isStopped:r}=this;i?n.error(s):r&&n.complete()}asObservable(){let n=new vt;return n.source=this,n}}return t.create=(e,n)=>new J0(e,n),t})(),J0=class extends cn{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,e)}error(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,e)}complete(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)}_subscribe(e){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&i!==void 0?i:R4}};var Xt=class extends cn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let n=super._subscribe(e);return!n.closed&&e.next(this._value),n}getValue(){let{hasError:e,thrownError:n,_value:i}=this;if(e)throw n;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Mn=new vt(t=>t.complete());function ru(t){return t&&Ue(t.schedule)}function ou(t){return t[t.length-1]}function cu(t){return Ue(ou(t))?t.pop():void 0}function a2(t){return ru(ou(t))?t.pop():void 0}function lu(t,e,n,i){function s(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function c(u){try{l(i.next(u))}catch(f){o(f)}}function a(u){try{l(i.throw(u))}catch(f){o(f)}}function l(u){u.done?r(u.value):s(u.value).then(c,a)}l((i=i.apply(t,e||[])).next())})}function au(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Q2(t){return this instanceof Q2?(this.v=t,this):new Q2(t)}function uu(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=n.apply(t,e||[]),s,r=[];return s={},c("next"),c("throw"),c("return",o),s[Symbol.asyncIterator]=function(){return this},s;function o(p){return function(g){return Promise.resolve(g).then(p,f)}}function c(p,g){i[p]&&(s[p]=function(v){return new Promise(function(m,h){r.push([p,v,m,h])>1||a(p,v)})},g&&(s[p]=g(s[p])))}function a(p,g){try{l(i[p](g))}catch(v){d(r[0][3],v)}}function l(p){p.value instanceof Q2?Promise.resolve(p.value.v).then(u,f):d(r[0][2],p)}function u(p){a("next",p)}function f(p){a("throw",p)}function d(p,g){p(g),r.shift(),r.length&&a(r[0][0],r[0][1])}}function fu(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof au=="function"?au(t):t[Symbol.iterator](),n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n);function i(r){n[r]=t[r]&&function(o){return new Promise(function(c,a){o=t[r](o),s(c,a,o.done,o.value)})}}function s(r,o,c,a){Promise.resolve(a).then(function(l){r({value:l,done:c})},o)}}var K0=t=>t&&typeof t.length=="number"&&typeof t!="function";function Q0(t){return Ue(t?.then)}function eo(t){return Ue(t[Ji])}function to(t){return Symbol.asyncIterator&&Ue(t?.[Symbol.asyncIterator])}function no(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function _g(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var io=_g();function so(t){return Ue(t?.[io])}function ro(t){return uu(this,arguments,function*(){let n=t.getReader();try{for(;;){let{value:i,done:s}=yield Q2(n.read());if(s)return yield Q2(void 0);yield yield Q2(i)}}finally{n.releaseLock()}})}function oo(t){return Ue(t?.getReader)}function Wt(t){if(t instanceof vt)return t;if(t!=null){if(eo(t))return Lg(t);if(K0(t))return bg(t);if(Q0(t))return Sg(t);if(to(t))return du(t);if(so(t))return wg(t);if(oo(t))return Eg(t)}throw no(t)}function Lg(t){return new vt(e=>{let n=t[Ji]();if(Ue(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function bg(t){return new vt(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Sg(t){return new vt(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,Y0)})}function wg(t){return new vt(e=>{for(let n of t)if(e.next(n),e.closed)return;e.complete()})}function du(t){return new vt(e=>{zg(t,e).catch(n=>e.error(n))})}function Eg(t){return du(ro(t))}function zg(t,e){var n,i,s,r;return lu(this,void 0,void 0,function*(){try{for(n=fu(t);i=yield n.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){s={error:o}}finally{try{i&&!i.done&&(r=n.return)&&(yield r.call(n))}finally{if(s)throw s.error}}e.complete()})}function fn(t,e,n,i=0,s=!1){let r=e.schedule(function(){n(),s?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(r),!s)return r}function co(t,e=0){return it((n,i)=>{n.subscribe(st(i,s=>fn(i,t,()=>i.next(s),e),()=>fn(i,t,()=>i.complete(),e),s=>fn(i,t,()=>i.error(s),e)))})}function ao(t,e=0){return it((n,i)=>{i.add(t.schedule(()=>n.subscribe(i),e))})}function hu(t,e){return Wt(t).pipe(ao(e),co(e))}function pu(t,e){return Wt(t).pipe(ao(e),co(e))}function mu(t,e){return new vt(n=>{let i=0;return e.schedule(function(){i===t.length?n.complete():(n.next(t[i++]),n.closed||this.schedule())})})}function gu(t,e){return new vt(n=>{let i;return fn(n,e,()=>{i=t[io](),fn(n,e,()=>{let s,r;try{({value:s,done:r}=i.next())}catch(o){n.error(o);return}r?n.complete():n.next(s)},0,!0)}),()=>Ue(i?.return)&&i.return()})}function lo(t,e){if(!t)throw new Error("Iterable cannot be null");return new vt(n=>{fn(n,e,()=>{let i=t[Symbol.asyncIterator]();fn(n,e,()=>{i.next().then(s=>{s.done?n.complete():n.next(s.value)})},0,!0)})})}function Mu(t,e){return lo(ro(t),e)}function vu(t,e){if(t!=null){if(eo(t))return hu(t,e);if(K0(t))return mu(t,e);if(Q0(t))return pu(t,e);if(to(t))return lo(t,e);if(so(t))return gu(t,e);if(oo(t))return Mu(t,e)}throw no(t)}function Pt(t,e){return e?vu(t,e):Wt(t)}function Pe(...t){let e=a2(t);return Pt(t,e)}function es(t,e){let n=Ue(t)?t:()=>t,i=s=>s.error(n());return new vt(e?s=>e.schedule(i,0,s):i)}function G4(t){return!!t&&(t instanceof vt||Ue(t.lift)&&Ue(t.subscribe))}var D1=qi(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function rt(t,e){return it((n,i)=>{let s=0;n.subscribe(st(i,r=>{i.next(t.call(e,r,s++))}))})}var{isArray:Ag}=Array;function Tg(t,e){return Ag(e)?t(...e):t(e)}function yu(t){return rt(e=>Tg(t,e))}var{isArray:Dg}=Array,{getPrototypeOf:Ig,prototype:Ng,keys:Rg}=Object;function xu(t){if(t.length===1){let e=t[0];if(Dg(e))return{args:e,keys:null};if(Pg(e)){let n=Rg(e);return{args:n.map(i=>e[i]),keys:n}}}return{args:t,keys:null}}function Pg(t){return t&&typeof t=="object"&&Ig(t)===Ng}function Cu(t,e){return t.reduce((n,i,s)=>(n[i]=e[s],n),{})}function or(...t){let e=a2(t),n=cu(t),{args:i,keys:s}=xu(t);if(i.length===0)return Pt([],e);let r=new vt(Og(i,e,s?o=>Cu(s,o):gn));return n?r.pipe(yu(n)):r}function Og(t,e,n=gn){return i=>{_u(e,()=>{let{length:s}=t,r=new Array(s),o=s,c=s;for(let a=0;a<s;a++)_u(e,()=>{let l=Pt(t[a],e),u=!1;l.subscribe(st(i,f=>{r[a]=f,u||(u=!0,c--),c||i.next(n(r.slice()))},()=>{--o||i.complete()}))},i)},i)}}function _u(t,e,n){t?fn(n,t,e):e()}function Lu(t,e,n,i,s,r,o,c){let a=[],l=0,u=0,f=!1,d=()=>{f&&!a.length&&!l&&e.complete()},p=v=>l<i?g(v):a.push(v),g=v=>{r&&e.next(v),l++;let m=!1;Wt(n(v,u++)).subscribe(st(e,h=>{s?.(h),r?p(h):e.next(h)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;a.length&&l<i;){let h=a.shift();o?fn(e,o,()=>g(h)):g(h)}d()}catch(h){e.error(h)}}))};return t.subscribe(st(e,p,()=>{f=!0,d()})),()=>{c?.()}}function Ft(t,e,n=1/0){return Ue(e)?Ft((i,s)=>rt((r,o)=>e(i,r,s,o))(Wt(t(i,s))),n):(typeof e=="number"&&(n=e),it((i,s)=>Lu(i,s,t,n)))}function ts(t=1/0){return Ft(gn,t)}function bu(){return ts(1)}function ns(...t){return bu()(Pt(t,a2(t)))}function uo(t){return new vt(e=>{Wt(t()).subscribe(e)})}function On(t,e){return it((n,i)=>{let s=0;n.subscribe(st(i,r=>t.call(e,r,s++)&&i.next(r)))})}function l2(t){return it((e,n)=>{let i=null,s=!1,r;i=e.subscribe(st(n,void 0,void 0,o=>{r=Wt(t(o,l2(t)(e))),i?(i.unsubscribe(),i=null,r.subscribe(n)):s=!0})),s&&(i.unsubscribe(),i=null,r.subscribe(n))})}function Su(t,e,n,i,s){return(r,o)=>{let c=n,a=e,l=0;r.subscribe(st(o,u=>{let f=l++;a=c?t(a,u,f):(c=!0,u),i&&o.next(a)},s&&(()=>{c&&o.next(a),o.complete()})))}}function ei(t,e){return Ue(e)?Ft(t,e,1):Ft(t,1)}function u2(t){return it((e,n)=>{let i=!1;e.subscribe(st(n,s=>{i=!0,n.next(s)},()=>{i||n.next(t),n.complete()}))})}function I1(t){return t<=0?()=>Mn:it((e,n)=>{let i=0;e.subscribe(st(n,s=>{++i<=t&&(n.next(s),t<=i&&n.complete())}))})}function W4(t){return rt(()=>t)}function fo(t=Fg){return it((e,n)=>{let i=!1;e.subscribe(st(n,s=>{i=!0,n.next(s)},()=>i?n.complete():n.error(t())))})}function Fg(){return new D1}function cr(t){return it((e,n)=>{try{e.subscribe(n)}finally{n.add(t)}})}function a1(t,e){let n=arguments.length>=2;return i=>i.pipe(t?On((s,r)=>t(s,r,i)):gn,I1(1),n?u2(e):fo(()=>new D1))}function is(t){return t<=0?()=>Mn:it((e,n)=>{let i=[];e.subscribe(st(n,s=>{i.push(s),t<i.length&&i.shift()},()=>{for(let s of i)n.next(s);n.complete()},void 0,()=>{i=null}))})}function j4(t,e){let n=arguments.length>=2;return i=>i.pipe(t?On((s,r)=>t(s,r,i)):gn,is(1),n?u2(e):fo(()=>new D1))}function $4(t,e){return it(Su(t,e,arguments.length>=2,!0))}function q4(...t){let e=a2(t);return it((n,i)=>{(e?ns(t,n,e):ns(t,n)).subscribe(i)})}function Fn(t,e){return it((n,i)=>{let s=null,r=0,o=!1,c=()=>o&&!s&&i.complete();n.subscribe(st(i,a=>{s?.unsubscribe();let l=0,u=r++;Wt(t(a,u)).subscribe(s=st(i,f=>i.next(e?e(a,f,u,l++):f),()=>{s=null,c()}))},()=>{o=!0,c()}))})}function X4(t){return it((e,n)=>{Wt(t).subscribe(st(n,()=>n.complete(),rr)),!n.closed&&e.subscribe(n)})}function Yt(t,e,n){let i=Ue(t)||e||n?{next:t,error:e,complete:n}:t;return i?it((s,r)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let c=!0;s.subscribe(st(r,a=>{var l;(l=i.next)===null||l===void 0||l.call(i,a),r.next(a)},()=>{var a;c=!1,(a=i.complete)===null||a===void 0||a.call(i),r.complete()},a=>{var l;c=!1,(l=i.error)===null||l===void 0||l.call(i,a),r.error(a)},()=>{var a,l;c&&((a=i.unsubscribe)===null||a===void 0||a.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):gn}var hf="https://g.co/ng/security#xss",Ee=class extends Error{constructor(e,n){super(Ka(e,n)),this.code=e}};function Ka(t,e){return`${`NG0${Math.abs(t)}`}${e?": "+e:""}`}function _r(t){return{toString:t}.toString()}var ho="__parameters__";function kg(t){return function(...n){if(t){let i=t(...n);for(let s in i)this[s]=i[s]}}}function pf(t,e,n){return _r(()=>{let i=kg(e);function s(...r){if(this instanceof s)return i.apply(this,r),this;let o=new s(...r);return c.annotation=o,c;function c(a,l,u){let f=a.hasOwnProperty(ho)?a[ho]:Object.defineProperty(a,ho,{value:[]})[ho];for(;f.length<=u;)f.push(null);return(f[u]=f[u]||[]).push(o),a}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s})}var Zt=globalThis;function Ct(t){for(let e in t)if(t[e]===Ct)return e;throw Error("Could not find renamed property on target object.")}function vn(t){if(typeof t=="string")return t;if(Array.isArray(t))return"["+t.map(vn).join(", ")+"]";if(t==null)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;let e=t.toString();if(e==null)return""+e;let n=e.indexOf(`
`);return n===-1?e:e.substring(0,n)}function wu(t,e){return t==null||t===""?e===null?"":e:e==null||e===""?t:t+" "+e}var Ug=Ct({__forward_ref__:Ct});function mf(t){return t.__forward_ref__=mf,t.toString=function(){return vn(this())},t}function Un(t){return gf(t)?t():t}function gf(t){return typeof t=="function"&&t.hasOwnProperty(Ug)&&t.__forward_ref__===mf}function Le(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function xn(t){return{providers:t.providers||[],imports:t.imports||[]}}function Bo(t){return Eu(t,vf)||Eu(t,yf)}function Mf(t){return Bo(t)!==null}function Eu(t,e){return t.hasOwnProperty(e)?t[e]:null}function Bg(t){let e=t&&(t[vf]||t[yf]);return e||null}function zu(t){return t&&(t.hasOwnProperty(Au)||t.hasOwnProperty(Vg))?t[Au]:null}var vf=Ct({\u0275prov:Ct}),Au=Ct({\u0275inj:Ct}),yf=Ct({ngInjectableDef:Ct}),Vg=Ct({ngInjectorDef:Ct}),Be=class{constructor(e,n){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=Le({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function xf(t){return t&&!!t.\u0275providers}var Hg=Ct({\u0275cmp:Ct}),Gg=Ct({\u0275dir:Ct}),Wg=Ct({\u0275pipe:Ct}),jg=Ct({\u0275mod:Ct}),bo=Ct({\u0275fac:Ct}),ar=Ct({__NG_ELEMENT_ID__:Ct}),Tu=Ct({__NG_ENV_ID__:Ct});function Qa(t){return typeof t=="string"?t:t==null?"":String(t)}function $g(t){return typeof t=="function"?t.name||t.toString():typeof t=="object"&&t!=null&&typeof t.type=="function"?t.type.name||t.type.toString():Qa(t)}function qg(t,e){let n=e?`. Dependency path: ${e.join(" > ")} > ${t}`:"";throw new Ee(-200,t)}function el(t,e){throw new Ee(-201,!1)}var Xe=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}(Xe||{}),sa;function Cf(){return sa}function kn(t){let e=sa;return sa=t,e}function _f(t,e,n){let i=Bo(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(n&Xe.Optional)return null;if(e!==void 0)return e;el(t,"Injector")}var Xg={},ur=Xg,ra="__NG_DI_FLAG__",So="ngTempTokenPath",Yg="ngTokenPath",Zg=/\n/gm,Jg="\u0275",Du="__source",as;function Kg(){return as}function f2(t){let e=as;return as=t,e}function Qg(t,e=Xe.Default){if(as===void 0)throw new Ee(-203,!1);return as===null?_f(t,void 0,e):as.get(t,e&Xe.Optional?null:void 0,e)}function Te(t,e=Xe.Default){return(Cf()||Qg)(Un(t),e)}function re(t,e=Xe.Default){return Te(t,Vo(e))}function Vo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function oa(t){let e=[];for(let n=0;n<t.length;n++){let i=Un(t[n]);if(Array.isArray(i)){if(i.length===0)throw new Ee(900,!1);let s,r=Xe.Default;for(let o=0;o<i.length;o++){let c=i[o],a=eM(c);typeof a=="number"?a===-1?s=c.token:r|=a:s=c}e.push(Te(s,r))}else e.push(Te(i))}return e}function Lf(t,e){return t[ra]=e,t.prototype[ra]=e,t}function eM(t){return t[ra]}function tM(t,e,n,i){let s=t[So];throw e[Du]&&s.unshift(e[Du]),t.message=nM(`
`+t.message,s,n,i),t[Yg]=s,t[So]=null,t}function nM(t,e,n,i=null){t=t&&t.charAt(0)===`
`&&t.charAt(1)==Jg?t.slice(2):t;let s=vn(e);if(Array.isArray(e))s=e.map(vn).join(" -> ");else if(typeof e=="object"){let r=[];for(let o in e)if(e.hasOwnProperty(o)){let c=e[o];r.push(o+":"+(typeof c=="string"?JSON.stringify(c):vn(c)))}s=`{${r.join(", ")}}`}return`${n}${i?"("+i+")":""}[${s}]: ${t.replace(Zg,`
  `)}`}var tl=Lf(pf("Optional"),8);var bf=Lf(pf("SkipSelf"),4);function us(t,e){let n=t.hasOwnProperty(bo);return n?t[bo]:null}function iM(t,e,n){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++){let s=t[i],r=e[i];if(n&&(s=n(s),r=n(r)),r!==s)return!1}return!0}function sM(t){return t.flat(Number.POSITIVE_INFINITY)}function nl(t,e){t.forEach(n=>Array.isArray(n)?nl(n,e):e(n))}function Sf(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function wo(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function rM(t,e){let n=[];for(let i=0;i<t;i++)n.push(e);return n}var fr={},l1=[],fs=new Be(""),wf=new Be("",-1),Ef=new Be(""),Eo=class{get(e,n=ur){if(n===ur){let i=new Error(`NullInjectorError: No provider for ${vn(e)}!`);throw i.name="NullInjectorError",i}return n}},zf=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}(zf||{}),d1=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}(d1||{}),Jn=function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t}(Jn||{});function oM(t,e,n){let i=t.length;for(;;){let s=t.indexOf(e,n);if(s===-1)return s;if(s===0||t.charCodeAt(s-1)<=32){let r=e.length;if(s+r===i||t.charCodeAt(s+r)<=32)return s}n=s+1}}function ca(t,e,n){let i=0;for(;i<n.length;){let s=n[i];if(typeof s=="number"){if(s!==0)break;i++;let r=n[i++],o=n[i++],c=n[i++];t.setAttribute(e,o,c,r)}else{let r=s,o=n[++i];aM(r)?t.setProperty(e,r,o):t.setAttribute(e,r,o),i++}}return i}function cM(t){return t===3||t===4||t===6}function aM(t){return t.charCodeAt(0)===64}function il(t,e){if(!(e===null||e.length===0))if(t===null||t.length===0)t=e.slice();else{let n=-1;for(let i=0;i<e.length;i++){let s=e[i];typeof s=="number"?n=s:n===0||(n===-1||n===2?Iu(t,n,s,null,e[++i]):Iu(t,n,s,null,null))}}return t}function Iu(t,e,n,i,s){let r=0,o=t.length;if(e===-1)o=-1;else for(;r<t.length;){let c=t[r++];if(typeof c=="number"){if(c===e){o=-1;break}else if(c>e){o=r-1;break}}}for(;r<t.length;){let c=t[r];if(typeof c=="number")break;if(c===n){if(i===null){s!==null&&(t[r+1]=s);return}else if(i===t[r+1]){t[r+2]=s;return}}r++,i!==null&&r++,s!==null&&r++}o!==-1&&(t.splice(o,0,e),r=o+1),t.splice(r++,0,n),i!==null&&t.splice(r++,0,i),s!==null&&t.splice(r++,0,s)}var Af="ng-template";function lM(t,e,n,i){let s=0;if(i){for(;s<e.length&&typeof e[s]=="string";s+=2)if(e[s]==="class"&&oM(e[s+1].toLowerCase(),n,0)!==-1)return!0}else if(sl(t))return!1;if(s=e.indexOf(1,s),s>-1){let r;for(;++s<e.length&&typeof(r=e[s])=="string";)if(r.toLowerCase()===n)return!0}return!1}function sl(t){return t.type===4&&t.value!==Af}function uM(t,e,n){let i=t.type===4&&!n?Af:t.value;return e===i}function fM(t,e,n){let i=4,s=t.attrs,r=s!==null?pM(s):0,o=!1;for(let c=0;c<e.length;c++){let a=e[c];if(typeof a=="number"){if(!o&&!Yn(i)&&!Yn(a))return!1;if(o&&Yn(a))continue;o=!1,i=a|i&1;continue}if(!o)if(i&4){if(i=2|i&1,a!==""&&!uM(t,a,n)||a===""&&e.length===1){if(Yn(i))return!1;o=!0}}else if(i&8){if(s===null||!lM(t,s,a,n)){if(Yn(i))return!1;o=!0}}else{let l=e[++c],u=dM(a,s,sl(t),n);if(u===-1){if(Yn(i))return!1;o=!0;continue}if(l!==""){let f;if(u>r?f="":f=s[u+1].toLowerCase(),i&2&&l!==f){if(Yn(i))return!1;o=!0}}}}return Yn(i)||o}function Yn(t){return(t&1)===0}function dM(t,e,n,i){if(e===null)return-1;let s=0;if(i||!n){let r=!1;for(;s<e.length;){let o=e[s];if(o===t)return s;if(o===3||o===6)r=!0;else if(o===1||o===2){let c=e[++s];for(;typeof c=="string";)c=e[++s];continue}else{if(o===4)break;if(o===0){s+=4;continue}}s+=r?1:2}return-1}else return mM(e,t)}function Tf(t,e,n=!1){for(let i=0;i<e.length;i++)if(fM(t,e[i],n))return!0;return!1}function hM(t){let e=t.attrs;if(e!=null){let n=e.indexOf(5);if(!(n&1))return e[n+1]}return null}function pM(t){for(let e=0;e<t.length;e++){let n=t[e];if(cM(n))return e}return t.length}function mM(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){let i=t[n];if(typeof i=="number")return-1;if(i===e)return n;n++}return-1}function gM(t,e){e:for(let n=0;n<e.length;n++){let i=e[n];if(t.length===i.length){for(let s=0;s<t.length;s++)if(t[s]!==i[s])continue e;return!0}}return!1}function Nu(t,e){return t?":not("+e.trim()+")":e}function MM(t){let e=t[0],n=1,i=2,s="",r=!1;for(;n<t.length;){let o=t[n];if(typeof o=="string")if(i&2){let c=t[++n];s+="["+o+(c.length>0?'="'+c+'"':"")+"]"}else i&8?s+="."+o:i&4&&(s+=" "+o);else s!==""&&!Yn(o)&&(e+=Nu(r,s),s=""),i=o,r=r||!Yn(i);n++}return s!==""&&(e+=Nu(r,s)),e}function vM(t){return t.map(MM).join(",")}function yM(t){let e=[],n=[],i=1,s=2;for(;i<t.length;){let r=t[i];if(typeof r=="string")s===2?r!==""&&e.push(r,t[++i]):s===8&&n.push(r);else{if(!Yn(s))break;s=r}i++}return{attrs:e,classes:n}}function Vt(t){return _r(()=>{let e=Pf(t),n=He(V({},e),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===zf.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&t.dependencies||null,getStandaloneInjector:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||d1.Emulated,styles:t.styles||l1,_:null,schemas:t.schemas||null,tView:null,id:""});Of(n);let i=t.dependencies;return n.directiveDefs=Pu(i,!1),n.pipeDefs=Pu(i,!0),n.id=_M(n),n})}function xM(t){return h2(t)||Df(t)}function CM(t){return t!==null}function Cn(t){return _r(()=>({type:t.type,bootstrap:t.bootstrap||l1,declarations:t.declarations||l1,imports:t.imports||l1,exports:t.exports||l1,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function Ru(t,e){if(t==null)return fr;let n={};for(let i in t)if(t.hasOwnProperty(i)){let s=t[i],r,o,c=Jn.None;Array.isArray(s)?(c=s[0],r=s[1],o=s[2]??r):(r=s,o=s),e?(n[r]=c!==Jn.None?[i,c]:i,e[r]=o):n[r]=i}return n}function Lr(t){return _r(()=>{let e=Pf(t);return Of(e),e})}function h2(t){return t[Hg]||null}function Df(t){return t[Gg]||null}function If(t){return t[Wg]||null}function Nf(t){let e=h2(t)||Df(t)||If(t);return e!==null?e.standalone:!1}function Rf(t,e){let n=t[jg]||null;if(!n&&e===!0)throw new Error(`Type ${vn(t)} does not have '\u0275mod' property.`);return n}function Pf(t){let e={};return{type:t.type,providersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:t.inputs||fr,exportAs:t.exportAs||null,standalone:t.standalone===!0,signals:t.signals===!0,selectors:t.selectors||l1,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Ru(t.inputs,e),outputs:Ru(t.outputs),debugInfo:null}}function Of(t){t.features?.forEach(e=>e(t))}function Pu(t,e){if(!t)return null;let n=e?If:xM;return()=>(typeof t=="function"?t():t).map(i=>n(i)).filter(CM)}function _M(t){let e=0,n=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,t.consts,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery].join("|");for(let s of n)e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function LM(...t){return{\u0275providers:Ff(!0,t),\u0275fromNgModule:!0}}function Ff(t,...e){let n=[],i=new Set,s,r=o=>{n.push(o)};return nl(e,o=>{let c=o;aa(c,r,[],i)&&(s||=[],s.push(c))}),s!==void 0&&kf(s,r),n}function kf(t,e){for(let n=0;n<t.length;n++){let{ngModule:i,providers:s}=t[n];rl(s,r=>{e(r,i)})}}function aa(t,e,n,i){if(t=Un(t),!t)return!1;let s=null,r=zu(t),o=!r&&h2(t);if(!r&&!o){let a=t.ngModule;if(r=zu(a),r)s=a;else return!1}else{if(o&&!o.standalone)return!1;s=t}let c=i.has(s);if(o){if(c)return!1;if(i.add(s),o.dependencies){let a=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of a)aa(l,e,n,i)}}else if(r){if(r.imports!=null&&!c){i.add(s);let l;try{nl(r.imports,u=>{aa(u,e,n,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&kf(l,e)}if(!c){let l=us(s)||(()=>new s);e({provide:s,useFactory:l,deps:l1},s),e({provide:Ef,useValue:s,multi:!0},s),e({provide:fs,useValue:()=>Te(s),multi:!0},s)}let a=r.providers;if(a!=null&&!c){let l=t;rl(a,u=>{e(u,l)})}}else return!1;return s!==t&&t.providers!==void 0}function rl(t,e){for(let n of t)xf(n)&&(n=n.\u0275providers),Array.isArray(n)?rl(n,e):e(n)}var bM=Ct({provide:String,useValue:Ct});function Uf(t){return t!==null&&typeof t=="object"&&bM in t}function SM(t){return!!(t&&t.useExisting)}function wM(t){return!!(t&&t.useFactory)}function la(t){return typeof t=="function"}var Ho=new Be(""),vo={},EM={},Y4;function ol(){return Y4===void 0&&(Y4=new Eo),Y4}var dn=class{},dr=class extends dn{get destroyed(){return this._destroyed}constructor(e,n,i,s){super(),this.parent=n,this.source=i,this.scopes=s,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,fa(e,o=>this.processProvider(o)),this.records.set(wf,ss(void 0,this)),s.has("environment")&&this.records.set(dn,ss(void 0,this));let r=this.records.get(Ho);r!=null&&typeof r.value=="string"&&this.scopes.add(r.value),this.injectorDefTypes=new Set(this.get(Ef,l1,Xe.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=dt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of n)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),dt(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let n=f2(this),i=kn(void 0),s;try{return e()}finally{f2(n),kn(i)}}get(e,n=ur,i=Xe.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Tu))return e[Tu](this);i=Vo(i);let s,r=f2(this),o=kn(void 0);try{if(!(i&Xe.SkipSelf)){let a=this.records.get(e);if(a===void 0){let l=NM(e)&&Bo(e);l&&this.injectableDefInScope(l)?a=ss(ua(e),vo):a=null,this.records.set(e,a)}if(a!=null)return this.hydrate(e,a)}let c=i&Xe.Self?ol():this.parent;return n=i&Xe.Optional&&n===ur?null:n,c.get(e,n)}catch(c){if(c.name==="NullInjectorError"){if((c[So]=c[So]||[]).unshift(vn(e)),r)throw c;return tM(c,e,"R3InjectorError",this.source)}else throw c}finally{kn(o),f2(r)}}resolveInjectorInitializers(){let e=dt(null),n=f2(this),i=kn(void 0),s;try{let r=this.get(fs,l1,Xe.Self);for(let o of r)o()}finally{f2(n),kn(i),dt(e)}}toString(){let e=[],n=this.records;for(let i of n.keys())e.push(vn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Ee(205,!1)}processProvider(e){e=Un(e);let n=la(e)?e:Un(e&&e.provide),i=AM(e);if(!la(e)&&e.multi===!0){let s=this.records.get(n);s||(s=ss(void 0,vo,!0),s.factory=()=>oa(s.multi),this.records.set(n,s)),n=e,s.multi.push(e)}this.records.set(n,i)}hydrate(e,n){let i=dt(null);try{return n.value===vo&&(n.value=EM,n.value=n.factory()),typeof n.value=="object"&&n.value&&IM(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{dt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let n=Un(e.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(e){let n=this._onDestroyHooks.indexOf(e);n!==-1&&this._onDestroyHooks.splice(n,1)}};function ua(t){let e=Bo(t),n=e!==null?e.factory:us(t);if(n!==null)return n;if(t instanceof Be)throw new Ee(204,!1);if(t instanceof Function)return zM(t);throw new Ee(204,!1)}function zM(t){if(t.length>0)throw new Ee(204,!1);let n=Bg(t);return n!==null?()=>n.factory(t):()=>new t}function AM(t){if(Uf(t))return ss(void 0,t.useValue);{let e=TM(t);return ss(e,vo)}}function TM(t,e,n){let i;if(la(t)){let s=Un(t);return us(s)||ua(s)}else if(Uf(t))i=()=>Un(t.useValue);else if(wM(t))i=()=>t.useFactory(...oa(t.deps||[]));else if(SM(t))i=()=>Te(Un(t.useExisting));else{let s=Un(t&&(t.useClass||t.provide));if(DM(t))i=()=>new s(...oa(t.deps));else return us(s)||ua(s)}return i}function ss(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function DM(t){return!!t.deps}function IM(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function NM(t){return typeof t=="function"||typeof t=="object"&&t instanceof Be}function fa(t,e){for(let n of t)Array.isArray(n)?fa(n,e):n&&xf(n)?fa(n.\u0275providers,e):e(n)}function O1(t,e){t instanceof dr&&t.assertNotDestroyed();let n,i=f2(t),s=kn(void 0);try{return e()}finally{f2(i),kn(s)}}function Bf(){return Cf()!==void 0||Kg()!=null}function RM(t){if(!Bf())throw new Ee(-203,!1)}function PM(t){let e=Zt.ng;if(e&&e.\u0275compilerFacade)return e.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function OM(t){return typeof t=="function"}var F1=0,Ye=1,Re=2,Jt=3,Zn=4,_n=5,hr=6,pr=7,h1=8,ds=9,Kn=10,en=11,mr=12,Ou=13,br=14,Qn=15,Sr=16,rs=17,N1=18,Go=19,Vf=20,d2=21,Z4=22,ii=23,p2=25,Hf=1;var si=7,zo=8,hs=9,yn=10,cl=function(t){return t[t.None=0]="None",t[t.HasTransplantedViews=2]="HasTransplantedViews",t}(cl||{});function ti(t){return Array.isArray(t)&&typeof t[Hf]=="object"}function k1(t){return Array.isArray(t)&&t[Hf]===!0}function Gf(t){return(t.flags&4)!==0}function Wo(t){return t.componentOffset>-1}function Wf(t){return(t.flags&1)===1}function wr(t){return!!t.template}function FM(t){return(t[Re]&512)!==0}var da=class{constructor(e,n,i){this.previousValue=e,this.currentValue=n,this.firstChange=i}isFirstChange(){return this.firstChange}};function jf(t,e,n,i){e!==null?e.applyValueToInputSignal(e,i):t[n]=i}function g2(){return $f}function $f(t){return t.type.prototype.ngOnChanges&&(t.setInput=UM),kM}g2.ngInherit=!0;function kM(){let t=Xf(this),e=t?.current;if(e){let n=t.previous;if(n===fr)t.previous=e;else for(let i in e)n[i]=e[i];t.current=null,this.ngOnChanges(e)}}function UM(t,e,n,i,s){let r=this.declaredInputs[i],o=Xf(t)||BM(t,{previous:fr,current:null}),c=o.current||(o.current={}),a=o.previous,l=a[r];c[r]=new da(l&&l.currentValue,n,a===fr),jf(t,e,s,n)}var qf="__ngSimpleChanges__";function Xf(t){return t[qf]||null}function BM(t,e){return t[qf]=e}var Fu=null;var u1=function(t,e,n){Fu?.(t,e,n)},Yf="svg",VM="math",HM=!1;function GM(){return HM}function R1(t){for(;Array.isArray(t);)t=t[F1];return t}function Bn(t,e){return R1(e[t.index])}function Zf(t,e){return t.data[e]}function M2(t,e){let n=e[t];return ti(n)?n:n[F1]}function WM(t){return(t[Re]&4)===4}function al(t){return(t[Re]&128)===128}function jM(t){return k1(t[Jt])}function ku(t,e){return e==null?null:t[e]}function Jf(t){t[rs]=0}function $M(t){t[Re]&1024||(t[Re]|=1024,al(t)&&gr(t))}function ll(t){return!!(t[Re]&9216||t[ii]?.dirty)}function ha(t){t[Kn].changeDetectionScheduler?.notify(1),ll(t)?gr(t):t[Re]&64&&(GM()?(t[Re]|=1024,gr(t)):t[Kn].changeDetectionScheduler?.notify())}function gr(t){t[Kn].changeDetectionScheduler?.notify();let e=Mr(t);for(;e!==null&&!(e[Re]&8192||(e[Re]|=8192,!al(e)));)e=Mr(e)}function Kf(t,e){if((t[Re]&256)===256)throw new Ee(911,!1);t[d2]===null&&(t[d2]=[]),t[d2].push(e)}function qM(t,e){if(t[d2]===null)return;let n=t[d2].indexOf(e);n!==-1&&t[d2].splice(n,1)}function Mr(t){let e=t[Jt];return k1(e)?e[Jt]:e}var Ke={lFrame:c7(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function XM(){return Ke.lFrame.elementDepthCount}function YM(){Ke.lFrame.elementDepthCount++}function ZM(){Ke.lFrame.elementDepthCount--}function Qf(){return Ke.bindingsEnabled}function e7(){return Ke.skipHydrationRootTNode!==null}function JM(t){return Ke.skipHydrationRootTNode===t}function KM(){Ke.skipHydrationRootTNode=null}function St(){return Ke.lFrame.lView}function e1(){return Ke.lFrame.tView}function ci(t){return Ke.lFrame.contextLView=t,t[h1]}function ai(t){return Ke.lFrame.contextLView=null,t}function t1(){let t=t7();for(;t!==null&&t.type===64;)t=t.parent;return t}function t7(){return Ke.lFrame.currentTNode}function QM(){let t=Ke.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function jo(t,e){let n=Ke.lFrame;n.currentTNode=t,n.isParent=e}function n7(){return Ke.lFrame.isParent}function i7(){Ke.lFrame.isParent=!1}function ev(t){return Ke.lFrame.bindingIndex=t}function ul(){return Ke.lFrame.bindingIndex++}function tv(){return Ke.lFrame.inI18n}function nv(t,e){let n=Ke.lFrame;n.bindingIndex=n.bindingRootIndex=t,pa(e)}function iv(){return Ke.lFrame.currentDirectiveIndex}function pa(t){Ke.lFrame.currentDirectiveIndex=t}function s7(){return Ke.lFrame.currentQueryIndex}function fl(t){Ke.lFrame.currentQueryIndex=t}function sv(t){let e=t[Ye];return e.type===2?e.declTNode:e.type===1?t[_n]:null}function r7(t,e,n){if(n&Xe.SkipSelf){let s=e,r=t;for(;s=s.parent,s===null&&!(n&Xe.Host);)if(s=sv(r),s===null||(r=r[br],s.type&10))break;if(s===null)return!1;e=s,t=r}let i=Ke.lFrame=o7();return i.currentTNode=e,i.lView=t,!0}function dl(t){let e=o7(),n=t[Ye];Ke.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function o7(){let t=Ke.lFrame,e=t===null?null:t.child;return e===null?c7(t):e}function c7(t){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=e),e}function a7(){let t=Ke.lFrame;return Ke.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var l7=a7;function hl(){let t=a7();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function u7(){return Ke.lFrame.selectedIndex}function ri(t){Ke.lFrame.selectedIndex=t}function pl(){let t=Ke.lFrame;return Zf(t.tView,t.selectedIndex)}function v2(){Ke.lFrame.currentNamespace=Yf}function y2(){rv()}function rv(){Ke.lFrame.currentNamespace=null}function ov(){return Ke.lFrame.currentNamespace}var f7=!0;function d7(){return f7}function h7(t){f7=t}function cv(t,e,n){let{ngOnChanges:i,ngOnInit:s,ngDoCheck:r}=e.type.prototype;if(i){let o=$f(e);(n.preOrderHooks??=[]).push(t,o),(n.preOrderCheckHooks??=[]).push(t,o)}s&&(n.preOrderHooks??=[]).push(0-t,s),r&&((n.preOrderHooks??=[]).push(t,r),(n.preOrderCheckHooks??=[]).push(t,r))}function p7(t,e){for(let n=e.directiveStart,i=e.directiveEnd;n<i;n++){let r=t.data[n].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:c,ngAfterViewInit:a,ngAfterViewChecked:l,ngOnDestroy:u}=r;o&&(t.contentHooks??=[]).push(-n,o),c&&((t.contentHooks??=[]).push(n,c),(t.contentCheckHooks??=[]).push(n,c)),a&&(t.viewHooks??=[]).push(-n,a),l&&((t.viewHooks??=[]).push(n,l),(t.viewCheckHooks??=[]).push(n,l)),u!=null&&(t.destroyHooks??=[]).push(n,u)}}function yo(t,e,n){m7(t,e,3,n)}function xo(t,e,n,i){(t[Re]&3)===n&&m7(t,e,n,i)}function J4(t,e){let n=t[Re];(n&3)===e&&(n&=16383,n+=1,t[Re]=n)}function m7(t,e,n,i){let s=i!==void 0?t[rs]&65535:0,r=i??-1,o=e.length-1,c=0;for(let a=s;a<o;a++)if(typeof e[a+1]=="number"){if(c=e[a],i!=null&&c>=i)break}else e[a]<0&&(t[rs]+=65536),(c<r||r==-1)&&(av(t,n,e,a),t[rs]=(t[rs]&4294901760)+a+2),a++}function Uu(t,e){u1(4,t,e);let n=dt(null);try{e.call(t)}finally{dt(n),u1(5,t,e)}}function av(t,e,n,i){let s=n[i]<0,r=n[i+1],o=s?-n[i]:n[i],c=t[o];s?t[Re]>>14<t[rs]>>16&&(t[Re]&3)===e&&(t[Re]+=16384,Uu(c,r)):Uu(c,r)}var ls=-1,vr=class{constructor(e,n,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=i}};function lv(t){return t instanceof vr}function uv(t){return(t.flags&8)!==0}function fv(t){return(t.flags&16)!==0}function g7(t){return t!==ls}function Ao(t){return t&32767}function dv(t){return t>>16}function To(t,e){let n=dv(t),i=e;for(;n>0;)i=i[br],n--;return i}var ma=!0;function Bu(t){let e=ma;return ma=t,e}var hv=256,M7=hv-1,v7=5,pv=0,f1={};function mv(t,e,n){let i;typeof n=="string"?i=n.charCodeAt(0)||0:n.hasOwnProperty(ar)&&(i=n[ar]),i==null&&(i=n[ar]=pv++);let s=i&M7,r=1<<s;e.data[t+(s>>v7)]|=r}function y7(t,e){let n=x7(t,e);if(n!==-1)return n;let i=e[Ye];i.firstCreatePass&&(t.injectorIndex=e.length,K4(i.data,t),K4(e,null),K4(i.blueprint,null));let s=ml(t,e),r=t.injectorIndex;if(g7(s)){let o=Ao(s),c=To(s,e),a=c[Ye].data;for(let l=0;l<8;l++)e[r+l]=c[o+l]|a[o+l]}return e[r+8]=s,r}function K4(t,e){t.push(0,0,0,0,0,0,0,0,e)}function x7(t,e){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||e[t.injectorIndex+8]===null?-1:t.injectorIndex}function ml(t,e){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let n=0,i=null,s=e;for(;s!==null;){if(i=S7(s),i===null)return ls;if(n++,s=s[br],i.injectorIndex!==-1)return i.injectorIndex|n<<16}return ls}function gv(t,e,n){mv(t,e,n)}function C7(t,e,n){if(n&Xe.Optional||t!==void 0)return t;el(e,"NodeInjector")}function _7(t,e,n,i){if(n&Xe.Optional&&i===void 0&&(i=null),!(n&(Xe.Self|Xe.Host))){let s=t[ds],r=kn(void 0);try{return s?s.get(e,i,n&Xe.Optional):_f(e,i,n&Xe.Optional)}finally{kn(r)}}return C7(i,e,n)}function L7(t,e,n,i=Xe.Default,s){if(t!==null){if(e[Re]&2048&&!(i&Xe.Self)){let o=xv(t,e,n,i,f1);if(o!==f1)return o}let r=b7(t,e,n,i,f1);if(r!==f1)return r}return _7(e,n,i,s)}function b7(t,e,n,i,s){let r=vv(n);if(typeof r=="function"){if(!r7(e,t,i))return i&Xe.Host?C7(s,n,i):_7(e,n,i,s);try{let o;if(o=r(i),o==null&&!(i&Xe.Optional))el(n);else return o}finally{l7()}}else if(typeof r=="number"){let o=null,c=x7(t,e),a=ls,l=i&Xe.Host?e[Qn][_n]:null;for((c===-1||i&Xe.SkipSelf)&&(a=c===-1?ml(t,e):e[c+8],a===ls||!Hu(i,!1)?c=-1:(o=e[Ye],c=Ao(a),e=To(a,e)));c!==-1;){let u=e[Ye];if(Vu(r,c,u.data)){let f=Mv(c,e,n,o,i,l);if(f!==f1)return f}a=e[c+8],a!==ls&&Hu(i,e[Ye].data[c+8]===l)&&Vu(r,c,e)?(o=u,c=Ao(a),e=To(a,e)):c=-1}}return s}function Mv(t,e,n,i,s,r){let o=e[Ye],c=o.data[t+8],a=i==null?Wo(c)&&ma:i!=o&&(c.type&3)!==0,l=s&Xe.Host&&r===c,u=Co(c,o,n,a,l);return u!==null?ps(e,o,u,c):f1}function Co(t,e,n,i,s){let r=t.providerIndexes,o=e.data,c=r&1048575,a=t.directiveStart,l=t.directiveEnd,u=r>>20,f=i?c:c+u,d=s?c+u:l;for(let p=f;p<d;p++){let g=o[p];if(p<a&&n===g||p>=a&&g.type===n)return p}if(s){let p=o[a];if(p&&wr(p)&&p.type===n)return a}return null}function ps(t,e,n,i){let s=t[n],r=e.data;if(lv(s)){let o=s;o.resolving&&qg($g(r[n]));let c=Bu(o.canSeeViewProviders);o.resolving=!0;let a,l=o.injectImpl?kn(o.injectImpl):null,u=r7(t,i,Xe.Default);try{s=t[n]=o.factory(void 0,r,t,i),e.firstCreatePass&&n>=i.directiveStart&&cv(n,r[n],e)}finally{l!==null&&kn(l),Bu(c),o.resolving=!1,l7()}}return s}function vv(t){if(typeof t=="string")return t.charCodeAt(0)||0;let e=t.hasOwnProperty(ar)?t[ar]:void 0;return typeof e=="number"?e>=0?e&M7:yv:e}function Vu(t,e,n){let i=1<<t;return!!(n[e+(t>>v7)]&i)}function Hu(t,e){return!(t&Xe.Self)&&!(t&Xe.Host&&e)}var ni=class{constructor(e,n){this._tNode=e,this._lView=n}get(e,n,i){return L7(this._tNode,this._lView,e,Vo(i),n)}};function yv(){return new ni(t1(),St())}function $o(t){return _r(()=>{let e=t.prototype.constructor,n=e[bo]||ga(e),i=Object.prototype,s=Object.getPrototypeOf(t.prototype).constructor;for(;s&&s!==i;){let r=s[bo]||ga(s);if(r&&r!==n)return r;s=Object.getPrototypeOf(s)}return r=>new r})}function ga(t){return gf(t)?()=>{let e=ga(Un(t));return e&&e()}:us(t)}function xv(t,e,n,i,s){let r=t,o=e;for(;r!==null&&o!==null&&o[Re]&2048&&!(o[Re]&512);){let c=b7(r,o,n,i|Xe.Self,f1);if(c!==f1)return c;let a=r.parent;if(!a){let l=o[Vf];if(l){let u=l.get(n,f1,i);if(u!==f1)return u}a=S7(o),o=o[br]}r=a}return s}function S7(t){let e=t[Ye],n=e.type;return n===2?e.declTNode:n===1?t[_n]:null}function Gu(t,e=null,n=null,i){let s=w7(t,e,n,i);return s.resolveInjectorInitializers(),s}function w7(t,e=null,n=null,i,s=new Set){let r=[n||l1,LM(t)];return i=i||(typeof t=="object"?void 0:vn(t)),new dr(r,e||ol(),i||null,s)}var m1=(()=>{let e=class e{static create(i,s){if(Array.isArray(i))return Gu({name:""},s,i,"");{let r=i.name??"";return Gu({name:r},i.parent,i.providers,r)}}};e.THROW_IF_NOT_FOUND=ur,e.NULL=new Eo,e.\u0275prov=Le({token:e,providedIn:"any",factory:()=>Te(wf)}),e.__NG_ELEMENT_ID__=-1;let t=e;return t})();var Cv="ngOriginalError";function Q4(t){return t[Cv]}var p1=class{constructor(){this._console=console}handleError(e){let n=this._findOriginalError(e);this._console.error("ERROR",e),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(e){let n=e&&Q4(e);for(;n&&Q4(n);)n=Q4(n);return n||null}},E7=new Be("",{providedIn:"root",factory:()=>re(p1).handleError.bind(void 0)}),gl=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=_v,e.__NG_ENV_ID__=i=>i;let t=e;return t})(),Ma=class extends gl{constructor(e){super(),this._lView=e}onDestroy(e){return Kf(this._lView,e),()=>qM(this._lView,e)}};function _v(){return new Ma(St())}function Lv(){return Ms(t1(),St())}function Ms(t,e){return new U1(Bn(t,e))}var U1=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=Lv;let t=e;return t})();function bv(t){return t instanceof U1?t.nativeElement:t}var va=class extends cn{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,Bf()&&(this.destroyRef=re(gl,{optional:!0})??void 0)}emit(e){let n=dt(null);try{super.next(e)}finally{dt(n)}}subscribe(e,n,i){let s=e,r=n||(()=>null),o=i;if(e&&typeof e=="object"){let a=e;s=a.next?.bind(a),r=a.error?.bind(a),o=a.complete?.bind(a)}this.__isAsync&&(r=ea(r),s&&(s=ea(s)),o&&(o=ea(o)));let c=super.subscribe({next:s,error:r,complete:o});return e instanceof Bt&&e.add(c),c}};function ea(t){return e=>{setTimeout(t,void 0,e)}}var Qt=va;function Sv(){return this._results[Symbol.iterator]()}var ya=class t{get changes(){return this._changes??=new Qt}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let n=t.prototype;n[Symbol.iterator]||(n[Symbol.iterator]=Sv)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,n){return this._results.reduce(e,n)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,n){this.dirty=!1;let i=sM(e);(this._changesDetected=!iM(this._results,i,n))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function z7(t){return(t.flags&128)===128}var A7=new Map,wv=0;function Ev(){return wv++}function zv(t){A7.set(t[Go],t)}function Av(t){A7.delete(t[Go])}var Wu="__ngContext__";function ms(t,e){ti(e)?(t[Wu]=e[Go],zv(e)):t[Wu]=e}function T7(t){return I7(t[mr])}function D7(t){return I7(t[Zn])}function I7(t){for(;t!==null&&!k1(t);)t=t[Zn];return t}var xa;function N7(t){xa=t}function R7(){if(xa!==void 0)return xa;if(typeof document<"u")return document;throw new Ee(210,!1)}var qo=new Be("",{providedIn:"root",factory:()=>Tv}),Tv="ng",Ml=new Be(""),x2=new Be("",{providedIn:"platform",factory:()=>"unknown"});var vl=new Be("",{providedIn:"root",factory:()=>R7().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Dv="h",Iv="b";var Nv=()=>null;function yl(t,e,n=!1){return Nv(t,e,n)}var P7=!1,Rv=new Be("",{providedIn:"root",factory:()=>P7});var po;function O7(){if(po===void 0&&(po=null,Zt.trustedTypes))try{po=Zt.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return po}function Xo(t){return O7()?.createHTML(t)||t}function Pv(t){return O7()?.createScriptURL(t)||t}var mo;function Ov(){if(mo===void 0&&(mo=null,Zt.trustedTypes))try{mo=Zt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return mo}function ju(t){return Ov()?.createHTML(t)||t}var P1=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${hf})`}},Ca=class extends P1{getTypeName(){return"HTML"}},_a=class extends P1{getTypeName(){return"Style"}},La=class extends P1{getTypeName(){return"Script"}},ba=class extends P1{getTypeName(){return"URL"}},Sa=class extends P1{getTypeName(){return"ResourceURL"}};function C2(t){return t instanceof P1?t.changingThisBreaksApplicationSecurity:t}function li(t,e){let n=Fv(t);if(n!=null&&n!==e){if(n==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${n} (see ${hf})`)}return n===e}function Fv(t){return t instanceof P1&&t.getTypeName()||null}function F7(t){return new Ca(t)}function k7(t){return new _a(t)}function U7(t){return new La(t)}function B7(t){return new ba(t)}function V7(t){return new Sa(t)}function kv(t){let e=new Ea(t);return Uv()?new wa(e):e}var wa=class{constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let n=new window.DOMParser().parseFromString(Xo(e),"text/html").body;return n===null?this.inertDocumentHelper.getInertBodyElement(e):(n.removeChild(n.firstChild),n)}catch{return null}}},Ea=class{constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let n=this.inertDocument.createElement("template");return n.innerHTML=Xo(e),n}};function Uv(){try{return!!new window.DOMParser().parseFromString(Xo(""),"text/html")}catch{return!1}}var Bv=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function xl(t){return t=String(t),t.match(Bv)?t:"unsafe:"+t}function B1(t){let e={};for(let n of t.split(","))e[n]=!0;return e}function Er(...t){let e={};for(let n of t)for(let i in n)n.hasOwnProperty(i)&&(e[i]=!0);return e}var H7=B1("area,br,col,hr,img,wbr"),G7=B1("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),W7=B1("rp,rt"),Vv=Er(W7,G7),Hv=Er(G7,B1("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Gv=Er(W7,B1("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),$u=Er(H7,Hv,Gv,Vv),j7=B1("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Wv=B1("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),jv=B1("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),$v=Er(j7,Wv,jv),qv=B1("script,style,template"),za=class{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let n=e.firstChild,i=!0,s=[];for(;n;){if(n.nodeType===Node.ELEMENT_NODE?i=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,i&&n.firstChild){s.push(n),n=Zv(n);continue}for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let r=Yv(n);if(r){n=r;break}n=s.pop()}}return this.buf.join("")}startElement(e){let n=qu(e).toLowerCase();if(!$u.hasOwnProperty(n))return this.sanitizedSomething=!0,!qv.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);let i=e.attributes;for(let s=0;s<i.length;s++){let r=i.item(s),o=r.name,c=o.toLowerCase();if(!$v.hasOwnProperty(c)){this.sanitizedSomething=!0;continue}let a=r.value;j7[c]&&(a=xl(a)),this.buf.push(" ",o,'="',Xu(a),'"')}return this.buf.push(">"),!0}endElement(e){let n=qu(e).toLowerCase();$u.hasOwnProperty(n)&&!H7.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(e){this.buf.push(Xu(e))}};function Xv(t,e){return(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function Yv(t){let e=t.nextSibling;if(e&&t!==e.previousSibling)throw $7(e);return e}function Zv(t){let e=t.firstChild;if(e&&Xv(t,e))throw $7(e);return e}function qu(t){let e=t.nodeName;return typeof e=="string"?e:"FORM"}function $7(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var Jv=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Kv=/([^\#-~ |!])/g;function Xu(t){return t.replace(/&/g,"&amp;").replace(Jv,function(e){let n=e.charCodeAt(0),i=e.charCodeAt(1);return"&#"+((n-55296)*1024+(i-56320)+65536)+";"}).replace(Kv,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var go;function Cl(t,e){let n=null;try{go=go||kv(t);let i=e?String(e):"";n=go.getInertBodyElement(i);let s=5,r=i;do{if(s===0)throw new Error("Failed to sanitize html because the input is unstable");s--,i=r,r=n.innerHTML,n=go.getInertBodyElement(i)}while(i!==r);let c=new za().sanitizeChildren(Yu(n)||n);return Xo(c)}finally{if(n){let i=Yu(n)||n;for(;i.firstChild;)i.removeChild(i.firstChild)}}}function Yu(t){return"content"in t&&Qv(t)?t.content:null}function Qv(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var V1=function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t}(V1||{});function q7(t){let e=ey();return e?ju(e.sanitize(V1.HTML,t)||""):li(t,"HTML")?ju(C2(t)):Cl(R7(),Qa(t))}function X7(t){return Pv(t[0])}function ey(){let t=St();return t&&t[Kn].sanitizer}function Y7(t){return t instanceof Function?t():t}function ty(t){return(t??re(m1)).get(x2)==="browser"}var ui=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}(ui||{}),ny;function _l(t,e){return ny(t,e)}function os(t,e,n,i,s){if(i!=null){let r,o=!1;k1(i)?r=i:ti(i)&&(o=!0,i=i[F1]);let c=R1(i);t===0&&n!==null?s==null?td(e,n,c):Do(e,n,c,s||null,!0):t===1&&n!==null?Do(e,n,c,s||null,!0):t===2?gy(e,c,o):t===3&&e.destroyNode(c),r!=null&&vy(e,t,r,n,s)}}function iy(t,e){return t.createText(e)}function Z7(t,e,n){return t.createElement(e,n)}function sy(t,e){J7(t,e),e[F1]=null,e[_n]=null}function ry(t,e,n,i,s,r){i[F1]=s,i[_n]=e,Yo(t,i,n,1,s,r)}function J7(t,e){e[Kn].changeDetectionScheduler?.notify(1),Yo(t,e,e[en],2,null,null)}function oy(t){let e=t[mr];if(!e)return ta(t[Ye],t);for(;e;){let n=null;if(ti(e))n=e[mr];else{let i=e[yn];i&&(n=i)}if(!n){for(;e&&!e[Zn]&&e!==t;)ti(e)&&ta(e[Ye],e),e=e[Jt];e===null&&(e=t),ti(e)&&ta(e[Ye],e),n=e&&e[Zn]}e=n}}function cy(t,e,n,i){let s=yn+i,r=n.length;i>0&&(n[s-1][Zn]=e),i<r-yn?(e[Zn]=n[s],Sf(n,yn+i,e)):(n.push(e),e[Zn]=null),e[Jt]=n;let o=e[Sr];o!==null&&n!==o&&ay(o,e);let c=e[N1];c!==null&&c.insertView(t),ha(e),e[Re]|=128}function ay(t,e){let n=t[hs],s=e[Jt][Jt][Qn];e[Qn]!==s&&(t[Re]|=cl.HasTransplantedViews),n===null?t[hs]=[e]:n.push(e)}function K7(t,e){let n=t[hs],i=n.indexOf(e);n.splice(i,1)}function Aa(t,e){if(t.length<=yn)return;let n=yn+e,i=t[n];if(i){let s=i[Sr];s!==null&&s!==t&&K7(s,i),e>0&&(t[n-1][Zn]=i[Zn]);let r=wo(t,yn+e);sy(i[Ye],i);let o=r[N1];o!==null&&o.detachView(r[Ye]),i[Jt]=null,i[Zn]=null,i[Re]&=-129}return i}function Q7(t,e){if(!(e[Re]&256)){let n=e[en];n.destroyNode&&Yo(t,e,n,3,null,null),oy(e)}}function ta(t,e){if(e[Re]&256)return;let n=dt(null);try{e[Re]&=-129,e[Re]|=256,e[ii]&&Z5(e[ii]),uy(t,e),ly(t,e),e[Ye].type===1&&e[en].destroy();let i=e[Sr];if(i!==null&&k1(e[Jt])){i!==e[Jt]&&K7(i,e);let s=e[N1];s!==null&&s.detachView(t)}Av(e)}finally{dt(n)}}function ly(t,e){let n=t.cleanup,i=e[pr];if(n!==null)for(let r=0;r<n.length-1;r+=2)if(typeof n[r]=="string"){let o=n[r+3];o>=0?i[o]():i[-o].unsubscribe(),r+=2}else{let o=i[n[r+1]];n[r].call(o)}i!==null&&(e[pr]=null);let s=e[d2];if(s!==null){e[d2]=null;for(let r=0;r<s.length;r++){let o=s[r];o()}}}function uy(t,e){let n;if(t!=null&&(n=t.destroyHooks)!=null)for(let i=0;i<n.length;i+=2){let s=e[n[i]];if(!(s instanceof vr)){let r=n[i+1];if(Array.isArray(r))for(let o=0;o<r.length;o+=2){let c=s[r[o]],a=r[o+1];u1(4,c,a);try{a.call(c)}finally{u1(5,c,a)}}else{u1(4,s,r);try{r.call(s)}finally{u1(5,s,r)}}}}}function ed(t,e,n){return fy(t,e.parent,n)}function fy(t,e,n){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return n[F1];{let{componentOffset:s}=i;if(s>-1){let{encapsulation:r}=t.data[i.directiveStart+s];if(r===d1.None||r===d1.Emulated)return null}return Bn(i,n)}}function Do(t,e,n,i,s){t.insertBefore(e,n,i,s)}function td(t,e,n){t.appendChild(e,n)}function Zu(t,e,n,i,s){i!==null?Do(t,e,n,i,s):td(t,e,n)}function dy(t,e,n,i){t.removeChild(e,n,i)}function Ll(t,e){return t.parentNode(e)}function hy(t,e){return t.nextSibling(e)}function nd(t,e,n){return my(t,e,n)}function py(t,e,n){return t.type&40?Bn(t,n):null}var my=py,Ju;function id(t,e,n,i){let s=ed(t,i,e),r=e[en],o=i.parent||e[_n],c=nd(o,i,e);if(s!=null)if(Array.isArray(n))for(let a=0;a<n.length;a++)Zu(r,s,n[a],c,!1);else Zu(r,s,n,c,!1);Ju!==void 0&&Ju(r,i,e,n,s)}function _o(t,e){if(e!==null){let n=e.type;if(n&3)return Bn(e,t);if(n&4)return Ta(-1,t[e.index]);if(n&8){let i=e.child;if(i!==null)return _o(t,i);{let s=t[e.index];return k1(s)?Ta(-1,s):R1(s)}}else{if(n&32)return _l(e,t)()||R1(t[e.index]);{let i=sd(t,e);if(i!==null){if(Array.isArray(i))return i[0];let s=Mr(t[Qn]);return _o(s,i)}else return _o(t,e.next)}}}return null}function sd(t,e){if(e!==null){let i=t[Qn][_n],s=e.projection;return i.projection[s]}return null}function Ta(t,e){let n=yn+t+1;if(n<e.length){let i=e[n],s=i[Ye].firstChild;if(s!==null)return _o(i,s)}return e[si]}function gy(t,e,n){let i=Ll(t,e);i&&dy(t,i,e,n)}function bl(t,e,n,i,s,r,o){for(;n!=null;){let c=i[n.index],a=n.type;if(o&&e===0&&(c&&ms(R1(c),i),n.flags|=2),(n.flags&32)!==32)if(a&8)bl(t,e,n.child,i,s,r,!1),os(e,t,s,c,r);else if(a&32){let l=_l(n,i),u;for(;u=l();)os(e,t,s,u,r);os(e,t,s,c,r)}else a&16?rd(t,e,i,n,s,r):os(e,t,s,c,r);n=o?n.projectionNext:n.next}}function Yo(t,e,n,i,s,r){bl(n,i,t.firstChild,e,s,r,!1)}function My(t,e,n){let i=e[en],s=ed(t,n,e),r=n.parent||e[_n],o=nd(r,n,e);rd(i,0,e,n,s,o)}function rd(t,e,n,i,s,r){let o=n[Qn],a=o[_n].projection[i.projection];if(Array.isArray(a))for(let l=0;l<a.length;l++){let u=a[l];os(e,t,s,u,r)}else{let l=a,u=o[Jt];z7(i)&&(l.flags|=128),bl(t,e,l,u,s,r,!0)}}function vy(t,e,n,i,s){let r=n[si],o=R1(n);r!==o&&os(e,t,i,r,s);for(let c=yn;c<n.length;c++){let a=n[c];Yo(a[Ye],a,t,e,i,r)}}function yy(t,e,n){t.setAttribute(e,"style",n)}function od(t,e,n){n===""?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n)}function cd(t,e,n){let{mergedAttrs:i,classes:s,styles:r}=n;i!==null&&ca(t,e,i),s!==null&&od(t,e,s),r!==null&&yy(t,e,r)}var ad={};function _2(t=1){ld(e1(),St(),u7()+t,!1)}function ld(t,e,n,i){if(!i)if((e[Re]&3)===3){let r=t.preOrderCheckHooks;r!==null&&yo(e,r,n)}else{let r=t.preOrderHooks;r!==null&&xo(e,r,0,n)}ri(n)}function n1(t,e=Xe.Default){let n=St();if(n===null)return Te(t,e);let i=t1();return L7(i,n,Un(t),e)}function ud(){let t="invalid";throw new Error(t)}function fd(t,e,n,i,s,r){let o=dt(null);try{let c=null;s&Jn.SignalBased&&(c=e[i][$5]),c!==null&&c.transformFn!==void 0&&(r=c.transformFn(r)),s&Jn.HasDecoratorInputTransform&&(r=t.inputTransforms[i].call(e,r)),t.setInput!==null?t.setInput(e,c,r,n,i):jf(e,c,i,r)}finally{dt(o)}}function xy(t,e){let n=t.hostBindingOpCodes;if(n!==null)try{for(let i=0;i<n.length;i++){let s=n[i];if(s<0)ri(~s);else{let r=s,o=n[++i],c=n[++i];nv(o,r);let a=e[r];c(2,a)}}}finally{ri(-1)}}function Zo(t,e,n,i,s,r,o,c,a,l,u){let f=e.blueprint.slice();return f[F1]=s,f[Re]=i|4|128|8|64,(l!==null||t&&t[Re]&2048)&&(f[Re]|=2048),Jf(f),f[Jt]=f[br]=t,f[h1]=n,f[Kn]=o||t&&t[Kn],f[en]=c||t&&t[en],f[ds]=a||t&&t[ds]||null,f[_n]=r,f[Go]=Ev(),f[hr]=u,f[Vf]=l,f[Qn]=e.type==2?t[Qn]:f,f}function Jo(t,e,n,i,s){let r=t.data[e];if(r===null)r=Cy(t,e,n,i,s),tv()&&(r.flags|=32);else if(r.type&64){r.type=n,r.value=i,r.attrs=s;let o=QM();r.injectorIndex=o===null?-1:o.injectorIndex}return jo(r,!0),r}function Cy(t,e,n,i,s){let r=t7(),o=n7(),c=o?r:r&&r.parent,a=t.data[e]=Ay(t,c,n,e,i,s);return t.firstChild===null&&(t.firstChild=a),r!==null&&(o?r.child==null&&a.parent!==null&&(r.child=a):r.next===null&&(r.next=a,a.prev=r)),a}function dd(t,e,n,i){if(n===0)return-1;let s=e.length;for(let r=0;r<n;r++)e.push(i),t.blueprint.push(i),t.data.push(null);return s}function hd(t,e,n,i,s){let r=u7(),o=i&2;try{ri(-1),o&&e.length>p2&&ld(t,e,p2,!1),u1(o?2:0,s),n(i,s)}finally{ri(r),u1(o?3:1,s)}}function pd(t,e,n){if(Gf(e)){let i=dt(null);try{let s=e.directiveStart,r=e.directiveEnd;for(let o=s;o<r;o++){let c=t.data[o];if(c.contentQueries){let a=n[o];c.contentQueries(1,a,o)}}}finally{dt(i)}}}function _y(t,e,n){Qf()&&(Oy(t,e,n,Bn(n,e)),(n.flags&64)===64&&yd(t,e,n))}function Ly(t,e,n=Bn){let i=e.localNames;if(i!==null){let s=e.index+1;for(let r=0;r<i.length;r+=2){let o=i[r+1],c=o===-1?n(e,t):t[o];t[s++]=c}}}function md(t){let e=t.tView;return e===null||e.incompleteFirstPass?t.tView=gd(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):e}function gd(t,e,n,i,s,r,o,c,a,l,u){let f=p2+i,d=f+s,p=by(f,d),g=typeof l=="function"?l():l;return p[Ye]={type:t,blueprint:p,template:n,queries:null,viewQuery:c,declTNode:e,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof r=="function"?r():r,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:a,consts:g,incompleteFirstPass:!1,ssrId:u}}function by(t,e){let n=[];for(let i=0;i<e;i++)n.push(i<t?null:ad);return n}function Sy(t,e,n,i){let r=i.get(Rv,P7)||n===d1.ShadowDom,o=t.selectRootElement(e,r);return wy(o),o}function wy(t){Ey(t)}var Ey=()=>null;function zy(t,e,n,i){let s=Cd(e);s.push(n),t.firstCreatePass&&_d(t).push(i,s.length-1)}function Ay(t,e,n,i,s,r){let o=e?e.injectorIndex:-1,c=0;return e7()&&(c|=128),{type:n,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:c,providerIndexes:0,value:s,attrs:r,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Ku(t,e,n,i,s){for(let r in e){if(!e.hasOwnProperty(r))continue;let o=e[r];if(o===void 0)continue;i??={};let c,a=Jn.None;Array.isArray(o)?(c=o[0],a=o[1]):c=o;let l=r;if(s!==null){if(!s.hasOwnProperty(r))continue;l=s[r]}t===0?Qu(i,n,l,c,a):Qu(i,n,l,c)}return i}function Qu(t,e,n,i,s){let r;t.hasOwnProperty(n)?(r=t[n]).push(e,i):r=t[n]=[e,i],s!==void 0&&r.push(s)}function Ty(t,e,n){let i=e.directiveStart,s=e.directiveEnd,r=t.data,o=e.attrs,c=[],a=null,l=null;for(let u=i;u<s;u++){let f=r[u],d=n?n.get(f):null,p=d?d.inputs:null,g=d?d.outputs:null;a=Ku(0,f.inputs,u,a,p),l=Ku(1,f.outputs,u,l,g);let v=a!==null&&o!==null&&!sl(e)?qy(a,u,o):null;c.push(v)}a!==null&&(a.hasOwnProperty("class")&&(e.flags|=8),a.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=c,e.inputs=a,e.outputs=l}function Dy(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function Md(t,e,n,i,s,r,o,c){let a=Bn(e,n),l=e.inputs,u;!c&&l!=null&&(u=l[i])?(wl(t,n,u,i,s),Wo(e)&&Iy(n,e.index)):e.type&3?(i=Dy(i),s=o!=null?o(s,e.value||"",i):s,r.setProperty(a,i,s)):e.type&12}function Iy(t,e){let n=M2(e,t);n[Re]&16||(n[Re]|=64)}function Ny(t,e,n,i){if(Qf()){let s=i===null?null:{"":-1},r=ky(t,n),o,c;r===null?o=c=null:[o,c]=r,o!==null&&vd(t,e,n,o,s,c),s&&Uy(n,i,s)}n.mergedAttrs=il(n.mergedAttrs,n.attrs)}function vd(t,e,n,i,s,r){for(let l=0;l<i.length;l++)gv(y7(n,e),t,i[l].type);Vy(n,t.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,c=!1,a=dd(t,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];n.mergedAttrs=il(n.mergedAttrs,u.hostAttrs),Hy(t,n,e,a,u),By(a,u,s),u.contentQueries!==null&&(n.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(n.flags|=64);let f=u.type.prototype;!o&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((t.preOrderHooks??=[]).push(n.index),o=!0),!c&&(f.ngOnChanges||f.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(n.index),c=!0),a++}Ty(t,n,r)}function Ry(t,e,n,i,s){let r=s.hostBindings;if(r){let o=t.hostBindingOpCodes;o===null&&(o=t.hostBindingOpCodes=[]);let c=~e.index;Py(o)!=c&&o.push(c),o.push(n,i,r)}}function Py(t){let e=t.length;for(;e>0;){let n=t[--e];if(typeof n=="number"&&n<0)return n}return 0}function Oy(t,e,n,i){let s=n.directiveStart,r=n.directiveEnd;Wo(n)&&Gy(e,n,t.data[s+n.componentOffset]),t.firstCreatePass||y7(n,e),ms(i,e);let o=n.initialInputs;for(let c=s;c<r;c++){let a=t.data[c],l=ps(e,t,c,n);if(ms(l,e),o!==null&&$y(e,c-s,l,a,n,o),wr(a)){let u=M2(n.index,e);u[h1]=ps(e,t,c,n)}}}function yd(t,e,n){let i=n.directiveStart,s=n.directiveEnd,r=n.index,o=iv();try{ri(r);for(let c=i;c<s;c++){let a=t.data[c],l=e[c];pa(c),(a.hostBindings!==null||a.hostVars!==0||a.hostAttrs!==null)&&Fy(a,l)}}finally{ri(-1),pa(o)}}function Fy(t,e){t.hostBindings!==null&&t.hostBindings(1,e)}function ky(t,e){let n=t.directiveRegistry,i=null,s=null;if(n)for(let r=0;r<n.length;r++){let o=n[r];if(Tf(e,o.selectors,!1))if(i||(i=[]),wr(o))if(o.findHostDirectiveDefs!==null){let c=[];s=s||new Map,o.findHostDirectiveDefs(o,c,s),i.unshift(...c,o);let a=c.length;Da(t,e,a)}else i.unshift(o),Da(t,e,0);else s=s||new Map,o.findHostDirectiveDefs?.(o,i,s),i.push(o)}return i===null?null:[i,s]}function Da(t,e,n){e.componentOffset=n,(t.components??=[]).push(e.index)}function Uy(t,e,n){if(e){let i=t.localNames=[];for(let s=0;s<e.length;s+=2){let r=n[e[s+1]];if(r==null)throw new Ee(-301,!1);i.push(e[s],r)}}}function By(t,e,n){if(n){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)n[e.exportAs[i]]=t;wr(e)&&(n[""]=t)}}function Vy(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Hy(t,e,n,i,s){t.data[i]=s;let r=s.factory||(s.factory=us(s.type,!0)),o=new vr(r,wr(s),n1);t.blueprint[i]=o,n[i]=o,Ry(t,e,i,dd(t,n,s.hostVars,ad),s)}function Gy(t,e,n){let i=Bn(e,t),s=md(n),r=t[Kn].rendererFactory,o=16;n.signals?o=4096:n.onPush&&(o=64);let c=Sl(t,Zo(t,s,null,o,i,e,null,r.createRenderer(i,n),null,null,null));t[e.index]=c}function Wy(t,e,n,i,s,r){let o=Bn(t,e);jy(e[en],o,r,t.value,n,i,s)}function jy(t,e,n,i,s,r,o){if(r==null)t.removeAttribute(e,s,n);else{let c=o==null?Qa(r):o(r,i||"",s);t.setAttribute(e,s,c,n)}}function $y(t,e,n,i,s,r){let o=r[e];if(o!==null)for(let c=0;c<o.length;){let a=o[c++],l=o[c++],u=o[c++],f=o[c++];fd(i,n,a,l,u,f)}}function qy(t,e,n){let i=null,s=0;for(;s<n.length;){let r=n[s];if(r===0){s+=4;continue}else if(r===5){s+=2;continue}if(typeof r=="number")break;if(t.hasOwnProperty(r)){i===null&&(i=[]);let o=t[r];for(let c=0;c<o.length;c+=3)if(o[c]===e){i.push(r,o[c+1],o[c+2],n[s+1]);break}}s+=2}return i}function Xy(t,e,n,i){return[t,!0,0,e,null,i,null,n,null,null]}function xd(t,e){let n=t.contentQueries;if(n!==null){let i=dt(null);try{for(let s=0;s<n.length;s+=2){let r=n[s],o=n[s+1];if(o!==-1){let c=t.data[o];fl(r),c.contentQueries(2,e[o],o)}}}finally{dt(i)}}}function Sl(t,e){return t[mr]?t[Ou][Zn]=e:t[mr]=e,t[Ou]=e,e}function Ia(t,e,n){fl(0);let i=dt(null);try{e(t,n)}finally{dt(i)}}function Cd(t){return t[pr]||(t[pr]=[])}function _d(t){return t.cleanup||(t.cleanup=[])}function Ld(t,e){let n=t[ds],i=n?n.get(p1,null):null;i&&i.handleError(e)}function wl(t,e,n,i,s){for(let r=0;r<n.length;){let o=n[r++],c=n[r++],a=n[r++],l=e[o],u=t.data[o];fd(u,l,i,c,a,s)}}function Yy(t,e){let n=M2(e,t),i=n[Ye];Zy(i,n);let s=n[F1];s!==null&&n[hr]===null&&(n[hr]=yl(s,n[ds])),El(i,n,n[h1])}function Zy(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}function El(t,e,n){dl(e);try{let i=t.viewQuery;i!==null&&Ia(1,i,n);let s=t.template;s!==null&&hd(t,e,s,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),e[N1]?.finishViewCreation(t),t.staticContentQueries&&xd(t,e),t.staticViewQueries&&Ia(2,t.viewQuery,n);let r=t.components;r!==null&&Jy(e,r)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{e[Re]&=-5,hl()}}function Jy(t,e){for(let n=0;n<e.length;n++)Yy(t,e[n])}function Ky(t,e,n,i){let s=dt(null);try{let r=e.tView,c=t[Re]&4096?4096:16,a=Zo(t,r,n,c,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[e.index];a[Sr]=l;let u=t[N1];return u!==null&&(a[N1]=u.createEmbeddedView(r)),El(r,a,n),a}finally{dt(s)}}function ef(t,e){return!e||e.firstChild===null||z7(t)}function Qy(t,e,n,i=!0){let s=e[Ye];if(cy(s,e,t,n),i){let o=Ta(n,t),c=e[en],a=Ll(c,t[si]);a!==null&&ry(s,t[_n],c,e,a,o)}let r=e[hr];r!==null&&r.firstChild!==null&&(r.firstChild=null)}function Io(t,e,n,i,s=!1){for(;n!==null;){let r=e[n.index];r!==null&&i.push(R1(r)),k1(r)&&ex(r,i);let o=n.type;if(o&8)Io(t,e,n.child,i);else if(o&32){let c=_l(n,e),a;for(;a=c();)i.push(a)}else if(o&16){let c=sd(e,n);if(Array.isArray(c))i.push(...c);else{let a=Mr(e[Qn]);Io(a[Ye],a,c,i,!0)}}n=s?n.projectionNext:n.next}return i}function ex(t,e){for(let n=yn;n<t.length;n++){let i=t[n],s=i[Ye].firstChild;s!==null&&Io(i[Ye],i,s,e)}t[si]!==t[F1]&&e.push(t[si])}var bd=[];function tx(t){return t[ii]??nx(t)}function nx(t){let e=bd.pop()??Object.create(sx);return e.lView=t,e}function ix(t){t.lView[ii]!==t&&(t.lView=null,bd.push(t))}var sx=He(V({},q5),{consumerIsAlwaysLive:!0,consumerMarkedDirty:t=>{gr(t.lView)},consumerOnSignalRead(){this.lView[ii]=this}}),Sd=100;function wd(t,e=!0,n=0){let i=t[Kn],s=i.rendererFactory,r=!1;r||s.begin?.();try{rx(t,n)}catch(o){throw e&&Ld(t,o),o}finally{r||(s.end?.(),i.inlineEffectRunner?.flush())}}function rx(t,e){Na(t,e);let n=0;for(;ll(t);){if(n===Sd)throw new Ee(103,!1);n++,Na(t,1)}}function ox(t,e,n,i){let s=e[Re];if((s&256)===256)return;let r=!1;!r&&e[Kn].inlineEffectRunner?.flush(),dl(e);let o=null,c=null;!r&&cx(t)&&(c=tx(e),o=X5(c));try{Jf(e),ev(t.bindingStartIndex),n!==null&&hd(t,e,n,2,i);let a=(s&3)===3;if(!r)if(a){let f=t.preOrderCheckHooks;f!==null&&yo(e,f,null)}else{let f=t.preOrderHooks;f!==null&&xo(e,f,0,null),J4(e,0)}if(ax(e),Ed(e,0),t.contentQueries!==null&&xd(t,e),!r)if(a){let f=t.contentCheckHooks;f!==null&&yo(e,f)}else{let f=t.contentHooks;f!==null&&xo(e,f,1),J4(e,1)}xy(t,e);let l=t.components;l!==null&&Ad(e,l,0);let u=t.viewQuery;if(u!==null&&Ia(2,u,i),!r)if(a){let f=t.viewCheckHooks;f!==null&&yo(e,f)}else{let f=t.viewHooks;f!==null&&xo(e,f,2),J4(e,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),e[Z4]){for(let f of e[Z4])f();e[Z4]=null}r||(e[Re]&=-73)}catch(a){throw gr(e),a}finally{c!==null&&(Y5(c,o),ix(c)),hl()}}function cx(t){return t.type!==2}function Ed(t,e){for(let n=T7(t);n!==null;n=D7(n))for(let i=yn;i<n.length;i++){let s=n[i];zd(s,e)}}function ax(t){for(let e=T7(t);e!==null;e=D7(e)){if(!(e[Re]&cl.HasTransplantedViews))continue;let n=e[hs];for(let i=0;i<n.length;i++){let s=n[i],r=s[Jt];$M(s)}}}function lx(t,e,n){let i=M2(e,t);zd(i,n)}function zd(t,e){al(t)&&Na(t,e)}function Na(t,e){let i=t[Ye],s=t[Re],r=t[ii],o=!!(e===0&&s&16);if(o||=!!(s&64&&e===0),o||=!!(s&1024),o||=!!(r?.dirty&&D4(r)),r&&(r.dirty=!1),t[Re]&=-9217,o)ox(i,t,i.template,t[h1]);else if(s&8192){Ed(t,1);let c=i.components;c!==null&&Ad(t,c,1)}}function Ad(t,e,n){for(let i=0;i<e.length;i++)lx(t,e[i],n)}function zl(t){for(t[Kn].changeDetectionScheduler?.notify();t;){t[Re]|=64;let e=Mr(t);if(FM(t)&&!e)return t;t=e}return null}var oi=class{get rootNodes(){let e=this._lView,n=e[Ye];return Io(n,e,n.firstChild,[])}constructor(e,n,i=!0){this._lView=e,this._cdRefInjectingView=n,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[h1]}set context(e){this._lView[h1]=e}get destroyed(){return(this._lView[Re]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Jt];if(k1(e)){let n=e[zo],i=n?n.indexOf(this):-1;i>-1&&(Aa(e,i),wo(n,i))}this._attachedToViewContainer=!1}Q7(this._lView[Ye],this._lView)}onDestroy(e){Kf(this._lView,e)}markForCheck(){zl(this._cdRefInjectingView||this._lView)}detach(){this._lView[Re]&=-129}reattach(){ha(this._lView),this._lView[Re]|=128}detectChanges(){this._lView[Re]|=1024,wd(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ee(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,J7(this._lView[Ye],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ee(902,!1);this._appRef=e,ha(this._lView)}},yr=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=dx;let t=e;return t})(),ux=yr,fx=class extends ux{constructor(e,n,i){super(),this._declarationLView=e,this._declarationTContainer=n,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,n){return this.createEmbeddedViewImpl(e,n)}createEmbeddedViewImpl(e,n,i){let s=Ky(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:n,dehydratedView:i});return new oi(s)}};function dx(){return Al(t1(),St())}function Al(t,e){return t.type&4?new fx(e,t,Ms(t,e)):null}var cF=new RegExp(`^(\\d+)*(${Iv}|${Dv})*(.*)`);var hx=()=>null;function tf(t,e){return hx(t,e)}var No=class{},Ra=class{},Ro=class{};function px(t){let e=Error(`No component factory found for ${vn(t)}.`);return e[mx]=t,e}var mx="ngComponent";var Pa=class{resolveComponentFactory(e){throw px(e)}},Ko=(()=>{let e=class e{};e.NULL=new Pa;let t=e;return t})(),xr=class{},zr=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>gx();let t=e;return t})();function gx(){let t=St(),e=t1(),n=M2(e.index,t);return(ti(n)?n:t)[en]}var Mx=(()=>{let e=class e{};e.\u0275prov=Le({token:e,providedIn:"root",factory:()=>null});let t=e;return t})(),na={};var nf=new Set;function Tl(t){nf.has(t)||(nf.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}function sf(...t){}function vx(){let t=typeof Zt.requestAnimationFrame=="function",e=Zt[t?"requestAnimationFrame":"setTimeout"],n=Zt[t?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&n){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let s=n[Zone.__symbol__("OriginalDelegate")];s&&(n=s)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:n}}var Lt=class t{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Qt(!1),this.onMicrotaskEmpty=new Qt(!1),this.onStable=new Qt(!1),this.onError=new Qt(!1),typeof Zone>"u")throw new Ee(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&n,s.shouldCoalesceRunChangeDetection=i,s.lastRequestAnimationFrameId=-1,s.nativeRequestAnimationFrame=vx().nativeRequestAnimationFrame,Cx(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new Ee(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new Ee(909,!1)}run(e,n,i){return this._inner.run(e,n,i)}runTask(e,n,i,s){let r=this._inner,o=r.scheduleEventTask("NgZoneEvent: "+s,e,yx,sf,sf);try{return r.runTask(o,n,i)}finally{r.cancelTask(o)}}runGuarded(e,n,i){return this._inner.runGuarded(e,n,i)}runOutsideAngular(e){return this._outer.run(e)}},yx={};function Dl(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function xx(t){t.isCheckStableRunning||t.lastRequestAnimationFrameId!==-1||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(Zt,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,Oa(t),t.isCheckStableRunning=!0,Dl(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),Oa(t))}function Cx(t){let e=()=>{xx(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,i,s,r,o,c)=>{if(_x(c))return n.invokeTask(s,r,o,c);try{return rf(t),n.invokeTask(s,r,o,c)}finally{(t.shouldCoalesceEventChangeDetection&&r.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&e(),of(t)}},onInvoke:(n,i,s,r,o,c,a)=>{try{return rf(t),n.invoke(s,r,o,c,a)}finally{t.shouldCoalesceRunChangeDetection&&e(),of(t)}},onHasTask:(n,i,s,r)=>{n.hasTask(s,r),i===s&&(r.change=="microTask"?(t._hasPendingMicrotasks=r.microTask,Oa(t),Dl(t)):r.change=="macroTask"&&(t.hasPendingMacrotasks=r.macroTask))},onHandleError:(n,i,s,r)=>(n.handleError(s,r),t.runOutsideAngular(()=>t.onError.emit(r)),!1)})}function Oa(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.lastRequestAnimationFrameId!==-1?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function rf(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function of(t){t._nesting--,Dl(t)}var Fa=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Qt,this.onMicrotaskEmpty=new Qt,this.onStable=new Qt,this.onError=new Qt}run(e,n,i){return e.apply(n,i)}runGuarded(e,n,i){return e.apply(n,i)}runOutsideAngular(e){return e()}runTask(e,n,i,s){return e.apply(n,i)}};function _x(t){return!Array.isArray(t)||t.length!==1?!1:t[0].data?.__ignore_ng_zone__===!0}function Lx(t="zone.js",e){return t==="noop"?new Fa:t==="zone.js"?new Lt(e):t}var cs=function(t){return t[t.EarlyRead=0]="EarlyRead",t[t.Write=1]="Write",t[t.MixedReadWrite=2]="MixedReadWrite",t[t.Read=3]="Read",t}(cs||{}),bx={destroy(){}};function Qo(t,e){!e&&RM(Qo);let n=e?.injector??re(m1);if(!ty(n))return bx;Tl("NgAfterNextRender");let i=n.get(Il),s=i.handler??=new Ua,r=e?.phase??cs.MixedReadWrite,o=()=>{s.unregister(a),c()},c=n.get(gl).onDestroy(o),a=O1(n,()=>new ka(r,()=>{o(),t()}));return s.register(a),{destroy:o}}var ka=class{constructor(e,n){this.phase=e,this.callbackFn=n,this.zone=re(Lt),this.errorHandler=re(p1,{optional:!0}),re(No,{optional:!0})?.notify(1)}invoke(){try{this.zone.runOutsideAngular(this.callbackFn)}catch(e){this.errorHandler?.handleError(e)}}},Ua=class{constructor(){this.executingCallbacks=!1,this.buckets={[cs.EarlyRead]:new Set,[cs.Write]:new Set,[cs.MixedReadWrite]:new Set,[cs.Read]:new Set},this.deferredCallbacks=new Set}register(e){(this.executingCallbacks?this.deferredCallbacks:this.buckets[e.phase]).add(e)}unregister(e){this.buckets[e.phase].delete(e),this.deferredCallbacks.delete(e)}execute(){this.executingCallbacks=!0;for(let e of Object.values(this.buckets))for(let n of e)n.invoke();this.executingCallbacks=!1;for(let e of this.deferredCallbacks)this.buckets[e.phase].add(e);this.deferredCallbacks.clear()}destroy(){for(let e of Object.values(this.buckets))e.clear();this.deferredCallbacks.clear()}},Il=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let s of i)s()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Le({token:e,providedIn:"root",factory:()=>new e});let t=e;return t})();function Ba(t,e,n){let i=n?t.styles:null,s=n?t.classes:null,r=0;if(e!==null)for(let o=0;o<e.length;o++){let c=e[o];if(typeof c=="number")r=c;else if(r==1)s=wu(s,c);else if(r==2){let a=c,l=e[++o];i=wu(i,a+": "+l+";")}}n?t.styles=i:t.stylesWithoutHost=i,n?t.classes=s:t.classesWithoutHost=s}var Po=class extends Ko{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let n=h2(e);return new gs(n,this.ngModule)}};function cf(t){let e=[];for(let n in t){if(!t.hasOwnProperty(n))continue;let i=t[n];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:n})}return e}function Sx(t){let e=t.toLowerCase();return e==="svg"?Yf:e==="math"?VM:null}var Va=class{constructor(e,n){this.injector=e,this.parentInjector=n}get(e,n,i){i=Vo(i);let s=this.injector.get(e,na,i);return s!==na||n===na?s:this.parentInjector.get(e,n,i)}},gs=class extends Ro{get inputs(){let e=this.componentDef,n=e.inputTransforms,i=cf(e.inputs);if(n!==null)for(let s of i)n.hasOwnProperty(s.propName)&&(s.transform=n[s.propName]);return i}get outputs(){return cf(this.componentDef.outputs)}constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=vM(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!n}create(e,n,i,s){let r=dt(null);try{s=s||this.ngModule;let o=s instanceof dn?s:s?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let c=o?new Va(e,o):e,a=c.get(xr,null);if(a===null)throw new Ee(407,!1);let l=c.get(Mx,null),u=c.get(Il,null),f=c.get(No,null),d={rendererFactory:a,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:f},p=a.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",v=i?Sy(p,i,this.componentDef.encapsulation,c):Z7(p,g,Sx(g)),m=512;this.componentDef.signals?m|=4096:this.componentDef.onPush||(m|=16);let h=null;v!==null&&(h=yl(v,c,!0));let S=gd(0,null,null,1,0,null,null,null,null,null,null),b=Zo(null,S,null,m,null,null,d,p,c,null,h);dl(b);let C,D;try{let z=this.componentDef,w,R=null;z.findHostDirectiveDefs?(w=[],R=new Map,z.findHostDirectiveDefs(z,w,R),w.push(z)):w=[z];let _=wx(b,v),x=Ex(_,v,z,w,b,d,p);D=Zf(S,p2),v&&Tx(p,z,v,i),n!==void 0&&Dx(D,this.ngContentSelectors,n),C=Ax(x,z,w,R,b,[Ix]),El(S,b,null)}finally{hl()}return new Ha(this.componentType,C,Ms(D,b),b,D)}finally{dt(r)}}},Ha=class extends Ra{constructor(e,n,i,s,r){super(),this.location=i,this._rootLView=s,this._tNode=r,this.previousInputValues=null,this.instance=n,this.hostView=this.changeDetectorRef=new oi(s,void 0,!1),this.componentType=e}setInput(e,n){let i=this._tNode.inputs,s;if(i!==null&&(s=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),n))return;let r=this._rootLView;wl(r[Ye],r,s,e,n),this.previousInputValues.set(e,n);let o=M2(this._tNode.index,r);zl(o)}}get injector(){return new ni(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function wx(t,e){let n=t[Ye],i=p2;return t[i]=e,Jo(n,i,2,"#host",null)}function Ex(t,e,n,i,s,r,o){let c=s[Ye];zx(i,t,e,o);let a=null;e!==null&&(a=yl(e,s[ds]));let l=r.rendererFactory.createRenderer(e,n),u=16;n.signals?u=4096:n.onPush&&(u=64);let f=Zo(s,md(n),null,u,s[t.index],t,r,l,null,null,a);return c.firstCreatePass&&Da(c,t,i.length-1),Sl(s,f),s[t.index]=f}function zx(t,e,n,i){for(let s of t)e.mergedAttrs=il(e.mergedAttrs,s.hostAttrs);e.mergedAttrs!==null&&(Ba(e,e.mergedAttrs,!0),n!==null&&cd(i,n,e))}function Ax(t,e,n,i,s,r){let o=t1(),c=s[Ye],a=Bn(o,s);vd(c,s,o,n,null,i);for(let u=0;u<n.length;u++){let f=o.directiveStart+u,d=ps(s,c,f,o);ms(d,s)}yd(c,s,o),a&&ms(a,s);let l=ps(s,c,o.directiveStart+o.componentOffset,o);if(t[h1]=s[h1]=l,r!==null)for(let u of r)u(l,e);return pd(c,o,s),l}function Tx(t,e,n,i){if(i)ca(t,n,["ng-version","17.3.12"]);else{let{attrs:s,classes:r}=yM(e.selectors[0]);s&&ca(t,n,s),r&&r.length>0&&od(t,n,r.join(" "))}}function Dx(t,e,n){let i=t.projection=[];for(let s=0;s<e.length;s++){let r=n[s];i.push(r!=null?Array.from(r):null)}}function Ix(){let t=t1();p7(St()[Ye],t)}var vs=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=Nx;let t=e;return t})();function Nx(){let t=t1();return Dd(t,St())}var Rx=vs,Td=class extends Rx{constructor(e,n,i){super(),this._lContainer=e,this._hostTNode=n,this._hostLView=i}get element(){return Ms(this._hostTNode,this._hostLView)}get injector(){return new ni(this._hostTNode,this._hostLView)}get parentInjector(){let e=ml(this._hostTNode,this._hostLView);if(g7(e)){let n=To(e,this._hostLView),i=Ao(e),s=n[Ye].data[i+8];return new ni(s,n)}else return new ni(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let n=af(this._lContainer);return n!==null&&n[e]||null}get length(){return this._lContainer.length-yn}createEmbeddedView(e,n,i){let s,r;typeof i=="number"?s=i:i!=null&&(s=i.index,r=i.injector);let o=tf(this._lContainer,e.ssrId),c=e.createEmbeddedViewImpl(n||{},r,o);return this.insertImpl(c,s,ef(this._hostTNode,o)),c}createComponent(e,n,i,s,r){let o=e&&!OM(e),c;if(o)c=n;else{let g=n||{};c=g.index,i=g.injector,s=g.projectableNodes,r=g.environmentInjector||g.ngModuleRef}let a=o?e:new gs(h2(e)),l=i||this.parentInjector;if(!r&&a.ngModule==null){let v=(o?l:this.parentInjector).get(dn,null);v&&(r=v)}let u=h2(a.componentType??{}),f=tf(this._lContainer,u?.id??null),d=f?.firstChild??null,p=a.create(l,s,d,r);return this.insertImpl(p.hostView,c,ef(this._hostTNode,f)),p}insert(e,n){return this.insertImpl(e,n,!0)}insertImpl(e,n,i){let s=e._lView;if(jM(s)){let c=this.indexOf(e);if(c!==-1)this.detach(c);else{let a=s[Jt],l=new Td(a,a[_n],a[Jt]);l.detach(l.indexOf(e))}}let r=this._adjustIndex(n),o=this._lContainer;return Qy(o,s,r,i),e.attachToViewContainerRef(),Sf(ia(o),r,e),e}move(e,n){return this.insert(e,n)}indexOf(e){let n=af(this._lContainer);return n!==null?n.indexOf(e):-1}remove(e){let n=this._adjustIndex(e,-1),i=Aa(this._lContainer,n);i&&(wo(ia(this._lContainer),n),Q7(i[Ye],i))}detach(e){let n=this._adjustIndex(e,-1),i=Aa(this._lContainer,n);return i&&wo(ia(this._lContainer),n)!=null?new oi(i):null}_adjustIndex(e,n=0){return e??this.length+n}};function af(t){return t[zo]}function ia(t){return t[zo]||(t[zo]=[])}function Dd(t,e){let n,i=e[t.index];return k1(i)?n=i:(n=Xy(i,e,null,t),e[t.index]=n,Sl(e,n)),Ox(n,e,t,i),new Td(n,t,e)}function Px(t,e){let n=t[en],i=n.createComment(""),s=Bn(e,t),r=Ll(n,s);return Do(n,r,i,hy(n,s),!1),i}var Ox=Fx;function Fx(t,e,n,i){if(t[si])return;let s;n.type&8?s=R1(i):s=Px(e,n),t[si]=s}var Ga=class t{constructor(e){this.queryList=e,this.matches=null}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Wa=class t{constructor(e=[]){this.queries=e}createEmbeddedView(e){let n=e.queries;if(n!==null){let i=e.contentQueries!==null?e.contentQueries[0]:n.length,s=[];for(let r=0;r<i;r++){let o=n.getByIndex(r),c=this.queries[o.indexInDeclarationView];s.push(c.clone())}return new t(s)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let n=0;n<this.queries.length;n++)Nl(e,n).matches!==null&&this.queries[n].setDirty()}},ja=class{constructor(e,n,i=null){this.flags=n,this.read=i,typeof e=="string"?this.predicate=jx(e):this.predicate=e}},$a=class t{constructor(e=[]){this.queries=e}elementStart(e,n){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,n)}elementEnd(e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(e)}embeddedTView(e){let n=null;for(let i=0;i<this.length;i++){let s=n!==null?n.length:0,r=this.getByIndex(i).embeddedTView(e,s);r&&(r.indexInDeclarationView=i,n!==null?n.push(r):n=[r])}return n!==null?new t(n):null}template(e,n){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,n)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},qa=class t{constructor(e,n=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(e,n){this.isApplyingToNode(n)&&this.matchTNode(e,n)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,n){this.elementStart(e,n)}embeddedTView(e,n){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,n),new t(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let n=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==n;)i=i.parent;return n===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,n){let i=this.metadata.predicate;if(Array.isArray(i))for(let s=0;s<i.length;s++){let r=i[s];this.matchTNodeWithReadOption(e,n,kx(n,r)),this.matchTNodeWithReadOption(e,n,Co(n,e,r,!1,!1))}else i===yr?n.type&4&&this.matchTNodeWithReadOption(e,n,-1):this.matchTNodeWithReadOption(e,n,Co(n,e,i,!1,!1))}matchTNodeWithReadOption(e,n,i){if(i!==null){let s=this.metadata.read;if(s!==null)if(s===U1||s===vs||s===yr&&n.type&4)this.addMatch(n.index,-2);else{let r=Co(n,e,s,!1,!1);r!==null&&this.addMatch(n.index,r)}else this.addMatch(n.index,i)}}addMatch(e,n){this.matches===null?this.matches=[e,n]:this.matches.push(e,n)}};function kx(t,e){let n=t.localNames;if(n!==null){for(let i=0;i<n.length;i+=2)if(n[i]===e)return n[i+1]}return null}function Ux(t,e){return t.type&11?Ms(t,e):t.type&4?Al(t,e):null}function Bx(t,e,n,i){return n===-1?Ux(e,t):n===-2?Vx(t,e,i):ps(t,t[Ye],n,e)}function Vx(t,e,n){if(n===U1)return Ms(e,t);if(n===yr)return Al(e,t);if(n===vs)return Dd(e,t)}function Id(t,e,n,i){let s=e[N1].queries[i];if(s.matches===null){let r=t.data,o=n.matches,c=[];for(let a=0;o!==null&&a<o.length;a+=2){let l=o[a];if(l<0)c.push(null);else{let u=r[l];c.push(Bx(e,u,o[a+1],n.metadata.read))}}s.matches=c}return s.matches}function Xa(t,e,n,i){let s=t.queries.getByIndex(n),r=s.matches;if(r!==null){let o=Id(t,e,s,n);for(let c=0;c<r.length;c+=2){let a=r[c];if(a>0)i.push(o[c/2]);else{let l=r[c+1],u=e[-a];for(let f=yn;f<u.length;f++){let d=u[f];d[Sr]===d[Jt]&&Xa(d[Ye],d,l,i)}if(u[hs]!==null){let f=u[hs];for(let d=0;d<f.length;d++){let p=f[d];Xa(p[Ye],p,l,i)}}}}}return i}function Hx(t,e){return t[N1].queries[e].queryList}function Gx(t,e,n){let i=new ya((n&4)===4);return zy(t,e,i,i.destroy),(e[N1]??=new Wa).queries.push(new Ga(i))-1}function Wx(t,e,n){let i=e1();return i.firstCreatePass&&($x(i,new ja(t,e,n),-1),(e&2)===2&&(i.staticViewQueries=!0)),Gx(i,St(),e)}function jx(t){return t.split(",").map(e=>e.trim())}function $x(t,e,n){t.queries===null&&(t.queries=new $a),t.queries.track(new qa(e,n))}function Nl(t,e){return t.queries.getByIndex(e)}function qx(t,e){let n=t[Ye],i=Nl(n,e);return i.crossesNgTemplate?Xa(n,t,e,[]):Id(n,t,i,e)}function Xx(t){let e=[],n=new Map;function i(s){let r=n.get(s);if(!r){let o=t(s);n.set(s,r=o.then(Kx))}return r}return Oo.forEach((s,r)=>{let o=[];s.templateUrl&&o.push(i(s.templateUrl).then(l=>{s.template=l}));let c=typeof s.styles=="string"?[s.styles]:s.styles||[];if(s.styles=c,s.styleUrl&&s.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");if(s.styleUrls?.length){let l=s.styles.length,u=s.styleUrls;s.styleUrls.forEach((f,d)=>{c.push(""),o.push(i(f).then(p=>{c[l+d]=p,u.splice(u.indexOf(f),1),u.length==0&&(s.styleUrls=void 0)}))})}else s.styleUrl&&o.push(i(s.styleUrl).then(l=>{c.push(l),s.styleUrl=void 0}));let a=Promise.all(o).then(()=>Qx(r));e.push(a)}),Zx(),Promise.all(e).then(()=>{})}var Oo=new Map,Yx=new Set;function Zx(){let t=Oo;return Oo=new Map,t}function Jx(){return Oo.size===0}function Kx(t){return typeof t=="string"?t:t.text()}function Qx(t){Yx.delete(t)}var m2=class{},Cr=class{};var Fo=class extends m2{constructor(e,n,i){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Po(this);let s=Rf(e);this._bootstrapComponents=Y7(s.bootstrap),this._r3Injector=w7(e,n,[{provide:m2,useValue:this},{provide:Ko,useValue:this.componentFactoryResolver},...i],vn(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},ko=class extends Cr{constructor(e){super(),this.moduleType=e}create(e){return new Fo(this.moduleType,e,[])}};function eC(t,e,n){return new Fo(t,e,n)}var Ya=class extends m2{constructor(e){super(),this.componentFactoryResolver=new Po(this),this.instance=null;let n=new dr([...e.providers,{provide:m2,useValue:this},{provide:Ko,useValue:this.componentFactoryResolver}],e.parent||ol(),e.debugName,new Set(["environment"]));this.injector=n,e.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function ec(t,e,n=null){return new Ya({providers:t,parent:e,debugName:n,runEnvironmentInitializers:!0}).injector}var tc=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Xt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Rl(t,e,n){let i=t[e];return Object.is(i,n)?!1:(t[e]=n,!0)}function tC(t){return(t.flags&32)===32}function nc(t,e,n,i){let s=St(),r=ul();if(Rl(s,r,e)){let o=e1(),c=pl();Wy(c,s,t,e,n,i)}return nc}function H1(t,e,n){let i=St(),s=ul();if(Rl(i,s,e)){let r=e1(),o=pl();Md(r,o,i,t,e,i[en],n,!1)}return H1}function lf(t,e,n,i,s){let r=e.inputs,o=s?"class":"style";wl(t,n,r[o],o,i)}function nC(t,e,n,i,s,r){let o=e.consts,c=ku(o,s),a=Jo(e,t,2,i,c);return Ny(e,n,a,ku(o,r)),a.attrs!==null&&Ba(a,a.attrs,!1),a.mergedAttrs!==null&&Ba(a,a.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,a),a}function ee(t,e,n,i){let s=St(),r=e1(),o=p2+t,c=s[en],a=r.firstCreatePass?nC(o,r,s,e,n,i):r.data[o],l=iC(r,s,a,c,e,t);s[o]=l;let u=Wf(a);return jo(a,!0),cd(c,l,a),!tC(a)&&d7()&&id(r,s,l,a),XM()===0&&ms(l,s),YM(),u&&(_y(r,s,a),pd(r,a,s)),i!==null&&Ly(s,a),ee}function ie(){let t=t1();n7()?i7():(t=t.parent,jo(t,!1));let e=t;JM(e)&&KM(),ZM();let n=e1();return n.firstCreatePass&&(p7(n,t),Gf(t)&&n.queries.elementEnd(t)),e.classesWithoutHost!=null&&uv(e)&&lf(n,e,St(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&fv(e)&&lf(n,e,St(),e.stylesWithoutHost,!1),ie}function _e(t,e,n,i){return ee(t,e,n,i),ie(),_e}var iC=(t,e,n,i,s,r)=>(h7(!0),Z7(i,s,ov()));function Nd(){return St()}function Pl(t,e,n){let i=St(),s=ul();if(Rl(i,s,e)){let r=e1(),o=pl();Md(r,o,i,t,e,i[en],n,!0)}return Pl}var Uo="en-US";var sC=Uo;function rC(t){typeof t=="string"&&(sC=t.toLowerCase().replace(/_/g,"-"))}function G1(t,e,n,i){let s=St(),r=e1(),o=t1();return cC(r,s,s[en],o,t,e,i),G1}function oC(t,e,n,i){let s=t.cleanup;if(s!=null)for(let r=0;r<s.length-1;r+=2){let o=s[r];if(o===n&&s[r+1]===i){let c=e[pr],a=s[r+2];return c.length>a?c[a]:null}typeof o=="string"&&(r+=2)}return null}function cC(t,e,n,i,s,r,o){let c=Wf(i),l=t.firstCreatePass&&_d(t),u=e[h1],f=Cd(e),d=!0;if(i.type&3||o){let v=Bn(i,e),m=o?o(v):v,h=f.length,S=o?C=>o(R1(C[i.index])):i.index,b=null;if(!o&&c&&(b=oC(t,e,s,i.index)),b!==null){let C=b.__ngLastListenerFn__||b;C.__ngNextListenerFn__=r,b.__ngLastListenerFn__=r,d=!1}else{r=ff(i,e,u,r,!1);let C=n.listen(m,s,r);f.push(r,C),l&&l.push(s,S,h,h+1)}}else r=ff(i,e,u,r,!1);let p=i.outputs,g;if(d&&p!==null&&(g=p[s])){let v=g.length;if(v)for(let m=0;m<v;m+=2){let h=g[m],S=g[m+1],D=e[h][S].subscribe(r),z=f.length;f.push(r,D),l&&l.push(s,i.index,z,-(z+1))}}}function uf(t,e,n,i){let s=dt(null);try{return u1(6,e,n),n(i)!==!1}catch(r){return Ld(t,r),!1}finally{u1(7,e,n),dt(s)}}function ff(t,e,n,i,s){return function r(o){if(o===Function)return i;let c=t.componentOffset>-1?M2(t.index,e):e;zl(c);let a=uf(e,n,i,o),l=r.__ngNextListenerFn__;for(;l;)a=uf(e,n,l,o)&&a,l=l.__ngNextListenerFn__;return s&&a===!1&&o.preventDefault(),a}}function aC(t,e){let n=null,i=hM(t);for(let s=0;s<e.length;s++){let r=e[s];if(r==="*"){n=s;continue}if(i===null?Tf(t,r,!0):gM(i,r))return s}return n}function Rd(t){let e=St()[Qn][_n];if(!e.projection){let n=t?t.length:1,i=e.projection=rM(n,null),s=i.slice(),r=e.child;for(;r!==null;){let o=t?aC(r,t):0;o!==null&&(s[o]?s[o].projectionNext=r:i[o]=r,s[o]=r),r=r.next}}}function Pd(t,e=0,n){let i=St(),s=e1(),r=Jo(s,p2+t,16,null,n||null);r.projection===null&&(r.projection=e),i7(),(!i[hr]||e7())&&(r.flags&32)!==32&&My(s,i,r)}function ic(t,e,n){Wx(t,e,n)}function Ar(t){let e=St(),n=e1(),i=s7();fl(i+1);let s=Nl(n,i);if(t.dirty&&WM(e)===((s.metadata.flags&2)===2)){if(s.matches===null)t.reset([]);else{let r=qx(e,i);t.reset(r,bv),t.notifyOnChanges()}return!0}return!1}function Tr(){return Hx(St(),s7())}function Ie(t,e=""){let n=St(),i=e1(),s=t+p2,r=i.firstCreatePass?Jo(i,s,1,e,null):i.data[s],o=lC(i,n,r,e,t);n[s]=o,d7()&&id(i,n,o,r),jo(r,!1)}var lC=(t,e,n,i,s)=>(h7(!0),iy(e[en],i));var uC=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let s=Ff(!1,i.type),r=s.length>0?ec([s],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,r)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Le({token:e,providedIn:"environment",factory:()=>new e(Te(dn))});let t=e;return t})();function Dr(t){Tl("NgStandalone"),t.getStandaloneInjector=e=>e.get(uC).getOrCreateStandaloneInjector(t)}var Mo=null;function fC(t){Mo!==null&&(t.defaultEncapsulation!==Mo.defaultEncapsulation||t.preserveWhitespaces!==Mo.preserveWhitespaces)||(Mo=t)}var sc=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"platform"});let t=e;return t})();var Ol=new Be(""),Ir=new Be(""),rc=(()=>{let e=class e{constructor(i,s,r){this._ngZone=i,this.registry=s,this._pendingCount=0,this._isZoneStable=!0,this._callbacks=[],this.taskTrackingZone=null,Fl||(dC(r),r.addToWindow(s)),this._watchAngularEvents(),i.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Lt.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&this._pendingCount===0&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let i=this._callbacks.pop();clearTimeout(i.timeoutId),i.doneCb()}});else{let i=this.getPendingTasks();this._callbacks=this._callbacks.filter(s=>s.updateCb&&s.updateCb(i)?(clearTimeout(s.timeoutId),!1):!0)}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(i=>({source:i.source,creationLocation:i.creationLocation,data:i.data})):[]}addCallback(i,s,r){let o=-1;s&&s>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(c=>c.timeoutId!==o),i()},s)),this._callbacks.push({doneCb:i,timeoutId:o,updateCb:r})}whenStable(i,s,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(i,s,r),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(i){this.registry.registerApplication(i,this)}unregisterApplication(i){this.registry.unregisterApplication(i)}findProviders(i,s,r){return[]}};e.\u0275fac=function(s){return new(s||e)(Te(Lt),Te(oc),Te(Ir))},e.\u0275prov=Le({token:e,factory:e.\u0275fac});let t=e;return t})(),oc=(()=>{let e=class e{constructor(){this._applications=new Map}registerApplication(i,s){this._applications.set(i,s)}unregisterApplication(i){this._applications.delete(i)}unregisterAllApplications(){this._applications.clear()}getTestability(i){return this._applications.get(i)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(i,s=!0){return Fl?.findTestabilityInTree(this,i,s)??null}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"platform"});let t=e;return t})();function dC(t){Fl=t}var Fl;function Nr(t){return!!t&&typeof t.then=="function"}function Od(t){return!!t&&typeof t.subscribe=="function"}var cc=new Be(""),Fd=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,s)=>{this.resolve=i,this.reject=s}),this.appInits=re(cc,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let r of this.appInits){let o=r();if(Nr(o))i.push(o);else if(Od(o)){let c=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});i.push(c)}}let s=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{s()}).catch(r=>{this.reject(r)}),i.length===0&&s(),this.initialized=!0}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),kl=new Be("");function hC(){J5(()=>{throw new Ee(600,!1)})}function pC(t){return t.isBoundToModule}function mC(t,e,n){try{let i=n();return Nr(i)?i.catch(s=>{throw e.runOutsideAngular(()=>t.handleError(s)),s}):i}catch(i){throw e.runOutsideAngular(()=>t.handleError(i)),i}}function kd(t,e){return Array.isArray(e)?e.reduce(kd,t):V(V({},t),e)}var ys=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=re(E7),this.afterRenderEffectManager=re(Il),this.externalTestViews=new Set,this.beforeRender=new cn,this.afterTick=new cn,this.componentTypes=[],this.components=[],this.isStable=re(tc).hasPendingTasks.pipe(rt(i=>!i)),this._injector=re(dn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,s){let r=i instanceof Ro;if(!this._injector.get(Fd).done){let p=!r&&Nf(i),g=!1;throw new Ee(405,g)}let c;r?c=i:c=this._injector.get(Ko).resolveComponentFactory(i),this.componentTypes.push(c.componentType);let a=pC(c)?void 0:this._injector.get(m2),l=s||c.selector,u=c.create(m1.NULL,[],l,a),f=u.location.nativeElement,d=u.injector.get(Ol,null);return d?.registerApplication(f),u.onDestroy(()=>{this.detachView(u.hostView),Lo(this.components,u),d?.unregisterApplication(f)}),this._loadComponent(u),u}tick(){this._tick(!0)}_tick(i){if(this._runningTick)throw new Ee(101,!1);let s=dt(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(i)}catch(r){this.internalErrorHandler(r)}finally{this.afterTick.next(),this._runningTick=!1,dt(s)}}detectChangesInAttachedViews(i){let s=0,r=this.afterRenderEffectManager;for(;;){if(s===Sd)throw new Ee(103,!1);if(i){let o=s===0;this.beforeRender.next(o);for(let{_lView:c,notifyErrorHandler:a}of this._views)gC(c,o,a)}if(s++,r.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>Za(o))&&(r.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>Za(o))))break}}attachView(i){let s=i;this._views.push(s),s.attachToAppRef(this)}detachView(i){let s=i;Lo(this._views,s),s.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let s=this._injector.get(kl,[]);[...this._bootstrapListeners,...s].forEach(r=>r(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Lo(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new Ee(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Lo(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function gC(t,e,n){!e&&!Za(t)||MC(t,n,e)}function Za(t){return ll(t)}function MC(t,e,n){let i;n?(i=0,t[Re]|=1024):t[Re]&64?i=0:i=1,wd(t,e,i)}var Ja=class{constructor(e,n){this.ngModuleFactory=e,this.componentFactories=n}},ac=(()=>{let e=class e{compileModuleSync(i){return new ko(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let s=this.compileModuleSync(i),r=Rf(i),o=Y7(r.declarations).reduce((c,a)=>{let l=h2(a);return l&&c.push(new gs(l)),c},[]);return new Ja(s,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),vC=new Be("");function yC(t,e,n){let i=new ko(n);return Promise.resolve(i)}function df(t){for(let e=t.length-1;e>=0;e--)if(t[e]!==void 0)return t[e]}var xC=(()=>{let e=class e{constructor(){this.zone=re(Lt),this.applicationRef=re(ys)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function CC(t){return[{provide:Lt,useFactory:t},{provide:fs,multi:!0,useFactory:()=>{let e=re(xC,{optional:!0});return()=>e.initialize()}},{provide:fs,multi:!0,useFactory:()=>{let e=re(bC);return()=>{e.initialize()}}},{provide:E7,useFactory:_C}]}function _C(){let t=re(Lt),e=re(p1);return n=>t.runOutsideAngular(()=>e.handleError(n))}function LC(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var bC=(()=>{let e=class e{constructor(){this.subscription=new Bt,this.initialized=!1,this.zone=re(Lt),this.pendingTasks=re(tc)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Lt.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Lt.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function SC(){return typeof $localize<"u"&&$localize.locale||Uo}var Ul=new Be("",{providedIn:"root",factory:()=>re(Ul,Xe.Optional|Xe.SkipSelf)||SC()});var Ud=new Be(""),Bd=(()=>{let e=class e{constructor(i){this._injector=i,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(i,s){let r=Lx(s?.ngZone,LC({eventCoalescing:s?.ngZoneEventCoalescing,runCoalescing:s?.ngZoneRunCoalescing}));return r.run(()=>{let o=eC(i.moduleType,this.injector,CC(()=>r)),c=o.injector.get(p1,null);return r.runOutsideAngular(()=>{let a=r.onError.subscribe({next:l=>{c.handleError(l)}});o.onDestroy(()=>{Lo(this._modules,o),a.unsubscribe()})}),mC(c,r,()=>{let a=o.injector.get(Fd);return a.runInitializers(),a.donePromise.then(()=>{let l=o.injector.get(Ul,Uo);return rC(l||Uo),this._moduleDoBootstrap(o),o})})})}bootstrapModule(i,s=[]){let r=kd({},s);return yC(this.injector,r,i).then(o=>this.bootstrapModuleFactory(o,r))}_moduleDoBootstrap(i){let s=i.injector.get(ys);if(i._bootstrapComponents.length>0)i._bootstrapComponents.forEach(r=>s.bootstrap(r));else if(i.instance.ngDoBootstrap)i.instance.ngDoBootstrap(s);else throw new Ee(-403,!1);this._modules.push(i)}onDestroy(i){this._destroyListeners.push(i)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Ee(404,!1);this._modules.slice().forEach(s=>s.destroy()),this._destroyListeners.forEach(s=>s());let i=this._injector.get(Ud,null);i&&(i.forEach(s=>s()),i.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}};e.\u0275fac=function(s){return new(s||e)(Te(m1))},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"platform"});let t=e;return t})(),lr=null,Vd=new Be("");function wC(t){if(lr&&!lr.get(Vd,!1))throw new Ee(400,!1);hC(),lr=t;let e=t.get(Bd);return AC(t),e}function Bl(t,e,n=[]){let i=`Platform: ${e}`,s=new Be(i);return(r=[])=>{let o=Hd();if(!o||o.injector.get(Vd,!1)){let c=[...n,...r,{provide:s,useValue:!0}];t?t(c):wC(EC(c,i))}return zC(s)}}function EC(t=[],e){return m1.create({name:e,providers:[{provide:Ho,useValue:"platform"},{provide:Ud,useValue:new Set([()=>lr=null])},...t]})}function zC(t){let e=Hd();if(!e)throw new Ee(401,!1);return e}function Hd(){return lr?.get(Bd)??null}function AC(t){t.get(Ml,null)?.forEach(n=>n())}var Rr=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=TC;let t=e;return t})();function TC(t){return DC(t1(),St(),(t&16)===16)}function DC(t,e,n){if(Wo(t)&&!n){let i=M2(t.index,e);return new oi(i,i)}else if(t.type&47){let i=e[Qn];return new oi(i,e)}return null}var Gd=Bl(null,"core",[]),Wd=(()=>{let e=class e{constructor(i){}};e.\u0275fac=function(s){return new(s||e)(Te(ys))},e.\u0275mod=Cn({type:e}),e.\u0275inj=xn({});let t=e;return t})();function jd(t){let e=h2(t);if(!e)return null;let n=new gs(e);return{get selector(){return n.selector},get type(){return n.componentType},get inputs(){return n.inputs},get outputs(){return n.outputs},get ngContentSelectors(){return n.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var Yd=null;function fi(){return Yd}function Zd(t){Yd??=t}var lc=class{};var an=new Be(""),Gl=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:()=>re(PC),providedIn:"platform"});let t=e;return t})(),Jd=new Be(""),PC=(()=>{let e=class e extends Gl{constructor(){super(),this._doc=re(an),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return fi().getBaseHref(this._doc)}onPopState(i){let s=fi().getGlobalEventTarget(this._doc,"window");return s.addEventListener("popstate",i,!1),()=>s.removeEventListener("popstate",i)}onHashChange(i){let s=fi().getGlobalEventTarget(this._doc,"window");return s.addEventListener("hashchange",i,!1),()=>s.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,s,r){this._history.pushState(i,s,r)}replaceState(i,s,r){this._history.replaceState(i,s,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function Wl(t,e){if(t.length==0)return e;if(e.length==0)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,n==2?t+e.substring(1):n==1?t+e:t+"/"+e}function $d(t){let e=t.match(/#|\?|$/),n=e&&e.index||t.length,i=n-(t[n-1]==="/"?1:0);return t.slice(0,i)+t.slice(n)}function W1(t){return t&&t[0]!=="?"?"?"+t:t}var di=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:()=>re(jl),providedIn:"root"});let t=e;return t})(),Kd=new Be(""),jl=(()=>{let e=class e extends di{constructor(i,s){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=s??this._platformLocation.getBaseHrefFromDOM()??re(an).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return Wl(this._baseHref,i)}path(i=!1){let s=this._platformLocation.pathname+W1(this._platformLocation.search),r=this._platformLocation.hash;return r&&i?`${s}${r}`:s}pushState(i,s,r,o){let c=this.prepareExternalUrl(r+W1(o));this._platformLocation.pushState(i,s,c)}replaceState(i,s,r,o){let c=this.prepareExternalUrl(r+W1(o));this._platformLocation.replaceState(i,s,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(s){return new(s||e)(Te(Gl),Te(Kd,8))},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Qd=(()=>{let e=class e extends di{constructor(i,s){super(),this._platformLocation=i,this._baseHref="",this._removeListenerFns=[],s!=null&&(this._baseHref=s)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}path(i=!1){let s=this._platformLocation.hash??"#";return s.length>0?s.substring(1):s}prepareExternalUrl(i){let s=Wl(this._baseHref,i);return s.length>0?"#"+s:s}pushState(i,s,r,o){let c=this.prepareExternalUrl(r+W1(o));c.length==0&&(c=this._platformLocation.pathname),this._platformLocation.pushState(i,s,c)}replaceState(i,s,r,o){let c=this.prepareExternalUrl(r+W1(o));c.length==0&&(c=this._platformLocation.pathname),this._platformLocation.replaceState(i,s,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(s){return new(s||e)(Te(Gl),Te(Kd,8))},e.\u0275prov=Le({token:e,factory:e.\u0275fac});let t=e;return t})(),xs=(()=>{let e=class e{constructor(i){this._subject=new Qt,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let s=this._locationStrategy.getBaseHref();this._basePath=kC($d(qd(s))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,s=""){return this.path()==this.normalize(i+W1(s))}normalize(i){return e.stripTrailingSlash(FC(this._basePath,qd(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,s="",r=null){this._locationStrategy.pushState(r,"",i,s),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+W1(s)),r)}replaceState(i,s="",r=null){this._locationStrategy.replaceState(r,"",i,s),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+W1(s)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(s=>{this._notifyUrlChangeListeners(s.url,s.state)}),()=>{let s=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(s,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",s){this._urlChangeListeners.forEach(r=>r(i,s))}subscribe(i,s,r){return this._subject.subscribe({next:i,error:s,complete:r})}};e.normalizeQueryParams=W1,e.joinWithSlash=Wl,e.stripTrailingSlash=$d,e.\u0275fac=function(s){return new(s||e)(Te(di))},e.\u0275prov=Le({token:e,factory:()=>OC(),providedIn:"root"});let t=e;return t})();function OC(){return new xs(Te(di))}function FC(t,e){if(!t||!e.startsWith(t))return e;let n=e.substring(t.length);return n===""||["/",";","?","#"].includes(n[0])?n:e}function qd(t){return t.replace(/\/index.html$/,"")}function kC(t){if(new RegExp("^(https?:)?//").test(t)){let[,n]=t.split(/\/\/[^\/]+/);return n}return t}function eh(t,e){e=encodeURIComponent(e);for(let n of t.split(";")){let i=n.indexOf("="),[s,r]=i==-1?[n,""]:[n.slice(0,i),n.slice(i+1)];if(s.trim()===e)return decodeURIComponent(r)}return null}var th=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=Cn({type:e}),e.\u0275inj=xn({});let t=e;return t})(),$l="browser",UC="server";function BC(t){return t===$l}function ql(t){return t===UC}var nh=(()=>{let e=class e{};e.\u0275prov=Le({token:e,providedIn:"root",factory:()=>BC(re(x2))?new Vl(re(an),window):new Hl});let t=e;return t})(),Vl=class{constructor(e,n){this.document=e,this.window=n,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let n=VC(this.document,e);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let n=e.getBoundingClientRect(),i=n.left+this.window.pageXOffset,s=n.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(i-r[0],s-r[1])}};function VC(t,e){let n=t.getElementById(e)||t.getElementsByName(e)[0];if(n)return n;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),s=i.currentNode;for(;s;){let r=s.shadowRoot;if(r){let o=r.getElementById(e)||r.querySelector(`[name="${e}"]`);if(o)return o}s=i.nextNode()}}return null}var Hl=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},uc=class{};var Zl=class extends lc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Jl=class t extends Zl{static makeCurrent(){Zd(new t)}onAndCancel(e,n,i){return e.addEventListener(n,i),()=>{e.removeEventListener(n,i)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,n){return n=n||this.getDefaultDocument(),n.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return n==="window"?window:n==="document"?e:n==="body"?e.body:null}getBaseHref(e){let n=GC();return n==null?null:WC(n)}resetBaseElement(){Pr=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return eh(document.cookie,e)}},Pr=null;function GC(){return Pr=Pr||document.querySelector("base"),Pr?Pr.getAttribute("href"):null}function WC(t){return new URL(t,document.baseURI).pathname}var Kl=class{addToWindow(e){Zt.getAngularTestability=(i,s=!0)=>{let r=e.findTestabilityInTree(i,s);if(r==null)throw new Ee(5103,!1);return r},Zt.getAllAngularTestabilities=()=>e.getAllTestabilities(),Zt.getAllAngularRootElements=()=>e.getAllRootElements();let n=i=>{let s=Zt.getAllAngularTestabilities(),r=s.length,o=function(){r--,r==0&&i()};s.forEach(c=>{c.whenStable(o)})};Zt.frameworkStabilizers||(Zt.frameworkStabilizers=[]),Zt.frameworkStabilizers.push(n)}findTestabilityInTree(e,n,i){if(n==null)return null;let s=e.getTestability(n);return s??(i?fi().isShadowRoot(n)?this.findTestabilityInTree(e,n.host,!0):this.findTestabilityInTree(e,n.parentElement,!0):null)}},jC=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac});let t=e;return t})(),Ql=new Be(""),oh=(()=>{let e=class e{constructor(i,s){this._zone=s,this._eventNameToPlugin=new Map,i.forEach(r=>{r.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,s,r){return this._findPluginFor(s).addEventListener(i,s,r)}getZone(){return this._zone}_findPluginFor(i){let s=this._eventNameToPlugin.get(i);if(s)return s;if(s=this._plugins.find(o=>o.supports(i)),!s)throw new Ee(5101,!1);return this._eventNameToPlugin.set(i,s),s}};e.\u0275fac=function(s){return new(s||e)(Te(Ql),Te(Lt))},e.\u0275prov=Le({token:e,factory:e.\u0275fac});let t=e;return t})(),fc=class{constructor(e){this._doc=e}},Xl="ng-app-id",ch=(()=>{let e=class e{constructor(i,s,r,o={}){this.doc=i,this.appId=s,this.nonce=r,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=ql(o),this.resetHostNodes()}addStyles(i){for(let s of i)this.changeUsageCount(s,1)===1&&this.onStyleAdded(s)}removeStyles(i){for(let s of i)this.changeUsageCount(s,-1)<=0&&this.onStyleRemoved(s)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(s=>s.remove()),i.clear());for(let s of this.getAllStyles())this.onStyleRemoved(s);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let s of this.getAllStyles())this.addStyleToHost(i,s)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let s of this.hostNodes)this.addStyleToHost(s,i)}onStyleRemoved(i){let s=this.styleRef;s.get(i)?.elements?.forEach(r=>r.remove()),s.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${Xl}="${this.appId}"]`);if(i?.length){let s=new Map;return i.forEach(r=>{r.textContent!=null&&s.set(r.textContent,r)}),s}return null}changeUsageCount(i,s){let r=this.styleRef;if(r.has(i)){let o=r.get(i);return o.usage+=s,o.usage}return r.set(i,{usage:s,elements:[]}),s}getStyleElement(i,s){let r=this.styleNodesInDOM,o=r?.get(s);if(o?.parentNode===i)return r.delete(s),o.removeAttribute(Xl),o;{let c=this.doc.createElement("style");return this.nonce&&c.setAttribute("nonce",this.nonce),c.textContent=s,this.platformIsServer&&c.setAttribute(Xl,this.appId),i.appendChild(c),c}}addStyleToHost(i,s){let r=this.getStyleElement(i,s),o=this.styleRef,c=o.get(s)?.elements;c?c.push(r):o.set(s,{elements:[r],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(s){return new(s||e)(Te(an),Te(qo),Te(vl,8),Te(x2))},e.\u0275prov=Le({token:e,factory:e.\u0275fac});let t=e;return t})(),Yl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},t6=/%COMP%/g,ah="%COMP%",$C=`_nghost-${ah}`,qC=`_ngcontent-${ah}`,XC=!0,YC=new Be("",{providedIn:"root",factory:()=>XC});function ZC(t){return qC.replace(t6,t)}function JC(t){return $C.replace(t6,t)}function lh(t,e){return e.map(n=>n.replace(t6,t))}var ih=(()=>{let e=class e{constructor(i,s,r,o,c,a,l,u=null){this.eventManager=i,this.sharedStylesHost=s,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=c,this.platformId=a,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=ql(a),this.defaultRenderer=new Or(i,c,l,this.platformIsServer)}createRenderer(i,s){if(!i||!s)return this.defaultRenderer;this.platformIsServer&&s.encapsulation===d1.ShadowDom&&(s=He(V({},s),{encapsulation:d1.Emulated}));let r=this.getOrCreateRenderer(i,s);return r instanceof dc?r.applyToHost(i):r instanceof Fr&&r.applyStyles(),r}getOrCreateRenderer(i,s){let r=this.rendererByCompId,o=r.get(s.id);if(!o){let c=this.doc,a=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(s.encapsulation){case d1.Emulated:o=new dc(l,u,s,this.appId,f,c,a,d);break;case d1.ShadowDom:return new e6(l,u,i,s,c,a,this.nonce,d);default:o=new Fr(l,u,s,f,c,a,d);break}r.set(s.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(s){return new(s||e)(Te(oh),Te(ch),Te(qo),Te(YC),Te(an),Te(x2),Te(Lt),Te(vl))},e.\u0275prov=Le({token:e,factory:e.\u0275fac});let t=e;return t})(),Or=class{constructor(e,n,i,s){this.eventManager=e,this.doc=n,this.ngZone=i,this.platformIsServer=s,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,n){return n?this.doc.createElementNS(Yl[n]||n,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,n){(sh(e)?e.content:e).appendChild(n)}insertBefore(e,n,i){e&&(sh(e)?e.content:e).insertBefore(n,i)}removeChild(e,n){e&&e.removeChild(n)}selectRootElement(e,n){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ee(-5104,!1);return n||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,i,s){if(s){n=s+":"+n;let r=Yl[s];r?e.setAttributeNS(r,n,i):e.setAttribute(n,i)}else e.setAttribute(n,i)}removeAttribute(e,n,i){if(i){let s=Yl[i];s?e.removeAttributeNS(s,n):e.removeAttribute(`${i}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,i,s){s&(ui.DashCase|ui.Important)?e.style.setProperty(n,i,s&ui.Important?"important":""):e.style[n]=i}removeStyle(e,n,i){i&ui.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,i){e!=null&&(e[n]=i)}setValue(e,n){e.nodeValue=n}listen(e,n,i){if(typeof e=="string"&&(e=fi().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${n}`);return this.eventManager.addEventListener(e,n,this.decoratePreventDefault(i))}decoratePreventDefault(e){return n=>{if(n==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(n)):e(n))===!1&&n.preventDefault()}}};function sh(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var e6=class extends Or{constructor(e,n,i,s,r,o,c,a){super(e,r,o,a),this.sharedStylesHost=n,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=lh(s.id,s.styles);for(let u of l){let f=document.createElement("style");c&&f.setAttribute("nonce",c),f.textContent=u,this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,i){return super.insertBefore(this.nodeOrShadowRoot(e),n,i)}removeChild(e,n){return super.removeChild(this.nodeOrShadowRoot(e),n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Fr=class extends Or{constructor(e,n,i,s,r,o,c,a){super(e,r,o,c),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=s,this.styles=a?lh(a,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},dc=class extends Fr{constructor(e,n,i,s,r,o,c,a){let l=s+"-"+i.id;super(e,n,i,r,o,c,a,l),this.contentAttr=ZC(l),this.hostAttr=JC(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,n){let i=super.createElement(e,n);return super.setAttribute(i,this.contentAttr,""),i}},KC=(()=>{let e=class e extends fc{constructor(i){super(i)}supports(i){return!0}addEventListener(i,s,r){return i.addEventListener(s,r,!1),()=>this.removeEventListener(i,s,r)}removeEventListener(i,s,r){return i.removeEventListener(s,r)}};e.\u0275fac=function(s){return new(s||e)(Te(an))},e.\u0275prov=Le({token:e,factory:e.\u0275fac});let t=e;return t})(),rh=["alt","control","meta","shift"],QC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},e_={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},t_=(()=>{let e=class e extends fc{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,s,r){let o=e.parseEventName(s),c=e.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>fi().onAndCancel(i,o.domEventName,c))}static parseEventName(i){let s=i.toLowerCase().split("."),r=s.shift();if(s.length===0||!(r==="keydown"||r==="keyup"))return null;let o=e._normalizeKey(s.pop()),c="",a=s.indexOf("code");if(a>-1&&(s.splice(a,1),c="code."),rh.forEach(u=>{let f=s.indexOf(u);f>-1&&(s.splice(f,1),c+=u+".")}),c+=o,s.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=c,l}static matchEventFullKeyCode(i,s){let r=QC[i.key]||i.key,o="";return s.indexOf("code.")>-1&&(r=i.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),rh.forEach(c=>{if(c!==r){let a=e_[c];a(i)&&(o+=c+".")}}),o+=r,o===s)}static eventCallback(i,s,r){return o=>{e.matchEventFullKeyCode(o,i)&&r.runGuarded(()=>s(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(s){return new(s||e)(Te(an))},e.\u0275prov=Le({token:e,factory:e.\u0275fac});let t=e;return t})();function n_(){Jl.makeCurrent()}function i_(){return new p1}function s_(){return N7(document),document}var r_=[{provide:x2,useValue:$l},{provide:Ml,useValue:n_,multi:!0},{provide:an,useFactory:s_,deps:[]}],uh=Bl(Gd,"browser",r_),o_=new Be(""),c_=[{provide:Ir,useClass:Kl,deps:[]},{provide:Ol,useClass:rc,deps:[Lt,oc,Ir]},{provide:rc,useClass:rc,deps:[Lt,oc,Ir]}],a_=[{provide:Ho,useValue:"root"},{provide:p1,useFactory:i_,deps:[]},{provide:Ql,useClass:KC,multi:!0,deps:[an,Lt,x2]},{provide:Ql,useClass:t_,multi:!0,deps:[an]},ih,ch,oh,{provide:xr,useExisting:ih},{provide:uc,useClass:jC,deps:[]},[]],fh=(()=>{let e=class e{constructor(i){}static withServerTransition(i){return{ngModule:e,providers:[{provide:qo,useValue:i.appId}]}}};e.\u0275fac=function(s){return new(s||e)(Te(o_,12))},e.\u0275mod=Cn({type:e}),e.\u0275inj=xn({providers:[...a_,...c_],imports:[th,Wd]});let t=e;return t})();var dh=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(s){return new(s||e)(Te(an))},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var n6=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:function(s){let r=null;return s?r=new(s||e):r=Te(l_),r},providedIn:"root"});let t=e;return t})(),l_=(()=>{let e=class e extends n6{constructor(i){super(),this._doc=i}sanitize(i,s){if(s==null)return null;switch(i){case V1.NONE:return s;case V1.HTML:return li(s,"HTML")?C2(s):Cl(this._doc,String(s)).toString();case V1.STYLE:return li(s,"Style")?C2(s):s;case V1.SCRIPT:if(li(s,"Script"))return C2(s);throw new Ee(5200,!1);case V1.URL:return li(s,"URL")?C2(s):xl(String(s));case V1.RESOURCE_URL:if(li(s,"ResourceURL"))return C2(s);throw new Ee(5201,!1);default:throw new Ee(5202,!1)}}bypassSecurityTrustHtml(i){return F7(i)}bypassSecurityTrustStyle(i){return k7(i)}bypassSecurityTrustScript(i){return U7(i)}bypassSecurityTrustUrl(i){return B7(i)}bypassSecurityTrustResourceUrl(i){return V7(i)}};e.\u0275fac=function(s){return new(s||e)(Te(an))},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var je="primary",Kr=Symbol("RouteTitle"),a6=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let n=this.params[e];return Array.isArray(n)?n[0]:n}return null}getAll(e){if(this.has(e)){let n=this.params[e];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function Ss(t){return new a6(t)}function u_(t,e,n){let i=n.path.split("/");if(i.length>t.length||n.pathMatch==="full"&&(e.hasChildren()||i.length<t.length))return null;let s={};for(let r=0;r<i.length;r++){let o=i[r],c=t[r];if(o.startsWith(":"))s[o.substring(1)]=c;else if(o!==c.path)return null}return{consumed:t.slice(0,i.length),posParams:s}}function f_(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!g1(t[n],e[n]))return!1;return!0}function g1(t,e){let n=t?l6(t):void 0,i=e?l6(e):void 0;if(!n||!i||n.length!=i.length)return!1;let s;for(let r=0;r<n.length;r++)if(s=n[r],!Ch(t[s],e[s]))return!1;return!0}function l6(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ch(t,e){if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;let n=[...t].sort(),i=[...e].sort();return n.every((s,r)=>i[r]===s)}else return t===e}function _h(t){return t.length>0?t[t.length-1]:null}function w2(t){return G4(t)?t:Nr(t)?Pt(Promise.resolve(t)):Pe(t)}var d_={exact:bh,subset:Sh},Lh={exact:h_,subset:p_,ignored:()=>!0};function hh(t,e,n){return d_[n.paths](t.root,e.root,n.matrixParams)&&Lh[n.queryParams](t.queryParams,e.queryParams)&&!(n.fragment==="exact"&&t.fragment!==e.fragment)}function h_(t,e){return g1(t,e)}function bh(t,e,n){if(!pi(t.segments,e.segments)||!mc(t.segments,e.segments,n)||t.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!t.children[i]||!bh(t.children[i],e.children[i],n))return!1;return!0}function p_(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(n=>Ch(t[n],e[n]))}function Sh(t,e,n){return wh(t,e,e.segments,n)}function wh(t,e,n,i){if(t.segments.length>n.length){let s=t.segments.slice(0,n.length);return!(!pi(s,n)||e.hasChildren()||!mc(s,n,i))}else if(t.segments.length===n.length){if(!pi(t.segments,n)||!mc(t.segments,n,i))return!1;for(let s in e.children)if(!t.children[s]||!Sh(t.children[s],e.children[s],i))return!1;return!0}else{let s=n.slice(0,t.segments.length),r=n.slice(t.segments.length);return!pi(t.segments,s)||!mc(t.segments,s,i)||!t.children[je]?!1:wh(t.children[je],e,r,i)}}function mc(t,e,n){return e.every((i,s)=>Lh[n](t[s].parameters,i.parameters))}var L2=class{constructor(e=new mt([],{}),n={},i=null){this.root=e,this.queryParams=n,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Ss(this.queryParams),this._queryParamMap}toString(){return M_.serialize(this)}},mt=class{constructor(e,n){this.segments=e,this.children=n,this.parent=null,Object.values(n).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return gc(this)}},hi=class{constructor(e,n){this.path=e,this.parameters=n}get parameterMap(){return this._parameterMap??=Ss(this.parameters),this._parameterMap}toString(){return zh(this)}};function m_(t,e){return pi(t,e)&&t.every((n,i)=>g1(n.parameters,e[i].parameters))}function pi(t,e){return t.length!==e.length?!1:t.every((n,i)=>n.path===e[i].path)}function g_(t,e){let n=[];return Object.entries(t.children).forEach(([i,s])=>{i===je&&(n=n.concat(e(s,i)))}),Object.entries(t.children).forEach(([i,s])=>{i!==je&&(n=n.concat(e(s,i)))}),n}var Qr=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:()=>new Wr,providedIn:"root"});let t=e;return t})(),Wr=class{parse(e){let n=new f6(e);return new L2(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(e){let n=`/${kr(e.root,!0)}`,i=x_(e.queryParams),s=typeof e.fragment=="string"?`#${v_(e.fragment)}`:"";return`${n}${i}${s}`}},M_=new Wr;function gc(t){return t.segments.map(e=>zh(e)).join("/")}function kr(t,e){if(!t.hasChildren())return gc(t);if(e){let n=t.children[je]?kr(t.children[je],!1):"",i=[];return Object.entries(t.children).forEach(([s,r])=>{s!==je&&i.push(`${s}:${kr(r,!1)}`)}),i.length>0?`${n}(${i.join("//")})`:n}else{let n=g_(t,(i,s)=>s===je?[kr(t.children[je],!1)]:[`${s}:${kr(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[je]!=null?`${gc(t)}/${n[0]}`:`${gc(t)}/(${n.join("//")})`}}function Eh(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function hc(t){return Eh(t).replace(/%3B/gi,";")}function v_(t){return encodeURI(t)}function u6(t){return Eh(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Mc(t){return decodeURIComponent(t)}function ph(t){return Mc(t.replace(/\+/g,"%20"))}function zh(t){return`${u6(t.path)}${y_(t.parameters)}`}function y_(t){return Object.entries(t).map(([e,n])=>`;${u6(e)}=${u6(n)}`).join("")}function x_(t){let e=Object.entries(t).map(([n,i])=>Array.isArray(i)?i.map(s=>`${hc(n)}=${hc(s)}`).join("&"):`${hc(n)}=${hc(i)}`).filter(n=>n);return e.length?`?${e.join("&")}`:""}var C_=/^[^\/()?;#]+/;function s6(t){let e=t.match(C_);return e?e[0]:""}var __=/^[^\/()?;=#]+/;function L_(t){let e=t.match(__);return e?e[0]:""}var b_=/^[^=?&#]+/;function S_(t){let e=t.match(b_);return e?e[0]:""}var w_=/^[^&#]+/;function E_(t){let e=t.match(w_);return e?e[0]:""}var f6=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new mt([],{}):new mt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(n).length>0)&&(i[je]=new mt(e,n)),i}parseSegment(){let e=s6(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ee(4009,!1);return this.capture(e),new hi(Mc(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let n=L_(this.remaining);if(!n)return;this.capture(n);let i="";if(this.consumeOptional("=")){let s=s6(this.remaining);s&&(i=s,this.capture(i))}e[Mc(n)]=Mc(i)}parseQueryParam(e){let n=S_(this.remaining);if(!n)return;this.capture(n);let i="";if(this.consumeOptional("=")){let o=E_(this.remaining);o&&(i=o,this.capture(i))}let s=ph(n),r=ph(i);if(e.hasOwnProperty(s)){let o=e[s];Array.isArray(o)||(o=[o],e[s]=o),o.push(r)}else e[s]=r}parseParens(e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=s6(this.remaining),s=this.remaining[i.length];if(s!=="/"&&s!==")"&&s!==";")throw new Ee(4010,!1);let r;i.indexOf(":")>-1?(r=i.slice(0,i.indexOf(":")),this.capture(r),this.capture(":")):e&&(r=je);let o=this.parseChildren();n[r]=Object.keys(o).length===1?o[je]:new mt([],o),this.consumeOptional("//")}return n}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ee(4011,!1)}};function Ah(t){return t.segments.length>0?new mt([],{[je]:t}):t}function Th(t){let e={};for(let[i,s]of Object.entries(t.children)){let r=Th(s);if(i===je&&r.segments.length===0&&r.hasChildren())for(let[o,c]of Object.entries(r.children))e[o]=c;else(r.segments.length>0||r.hasChildren())&&(e[i]=r)}let n=new mt(t.segments,e);return z_(n)}function z_(t){if(t.numberOfChildren===1&&t.children[je]){let e=t.children[je];return new mt(t.segments.concat(e.segments),e.children)}return t}function ws(t){return t instanceof L2}function A_(t,e,n=null,i=null){let s=Dh(t);return Ih(s,e,n,i)}function Dh(t){let e;function n(r){let o={};for(let a of r.children){let l=n(a);o[a.outlet]=l}let c=new mt(r.url,o);return r===t&&(e=c),c}let i=n(t.root),s=Ah(i);return e??s}function Ih(t,e,n,i){let s=t;for(;s.parent;)s=s.parent;if(e.length===0)return r6(s,s,s,n,i);let r=T_(e);if(r.toRoot())return r6(s,s,new mt([],{}),n,i);let o=D_(r,s,t),c=o.processChildren?Vr(o.segmentGroup,o.index,r.commands):Rh(o.segmentGroup,o.index,r.commands);return r6(s,o.segmentGroup,c,n,i)}function vc(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function jr(t){return typeof t=="object"&&t!=null&&t.outlets}function r6(t,e,n,i,s){let r={};i&&Object.entries(i).forEach(([a,l])=>{r[a]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;t===e?o=n:o=Nh(t,e,n);let c=Ah(Th(o));return new L2(c,r,s)}function Nh(t,e,n){let i={};return Object.entries(t.children).forEach(([s,r])=>{r===e?i[s]=n:i[s]=Nh(r,e,n)}),new mt(t.segments,i)}var yc=class{constructor(e,n,i){if(this.isAbsolute=e,this.numberOfDoubleDots=n,this.commands=i,e&&i.length>0&&vc(i[0]))throw new Ee(4003,!1);let s=i.find(jr);if(s&&s!==_h(i))throw new Ee(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function T_(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new yc(!0,0,t);let e=0,n=!1,i=t.reduce((s,r,o)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let c={};return Object.entries(r.outlets).forEach(([a,l])=>{c[a]=typeof l=="string"?l.split("/"):l}),[...s,{outlets:c}]}if(r.segmentPath)return[...s,r.segmentPath]}return typeof r!="string"?[...s,r]:o===0?(r.split("/").forEach((c,a)=>{a==0&&c==="."||(a==0&&c===""?n=!0:c===".."?e++:c!=""&&s.push(c))}),s):[...s,r]},[]);return new yc(n,e,i)}var Ls=class{constructor(e,n,i){this.segmentGroup=e,this.processChildren=n,this.index=i}};function D_(t,e,n){if(t.isAbsolute)return new Ls(e,!0,0);if(!n)return new Ls(e,!1,NaN);if(n.parent===null)return new Ls(n,!0,0);let i=vc(t.commands[0])?0:1,s=n.segments.length-1+i;return I_(n,s,t.numberOfDoubleDots)}function I_(t,e,n){let i=t,s=e,r=n;for(;r>s;){if(r-=s,i=i.parent,!i)throw new Ee(4005,!1);s=i.segments.length}return new Ls(i,!1,s-r)}function N_(t){return jr(t[0])?t[0].outlets:{[je]:t}}function Rh(t,e,n){if(t??=new mt([],{}),t.segments.length===0&&t.hasChildren())return Vr(t,e,n);let i=R_(t,e,n),s=n.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let r=new mt(t.segments.slice(0,i.pathIndex),{});return r.children[je]=new mt(t.segments.slice(i.pathIndex),t.children),Vr(r,0,s)}else return i.match&&s.length===0?new mt(t.segments,{}):i.match&&!t.hasChildren()?d6(t,e,n):i.match?Vr(t,0,s):d6(t,e,n)}function Vr(t,e,n){if(n.length===0)return new mt(t.segments,{});{let i=N_(n),s={};if(Object.keys(i).some(r=>r!==je)&&t.children[je]&&t.numberOfChildren===1&&t.children[je].segments.length===0){let r=Vr(t.children[je],e,n);return new mt(t.segments,r.children)}return Object.entries(i).forEach(([r,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(s[r]=Rh(t.children[r],e,o))}),Object.entries(t.children).forEach(([r,o])=>{i[r]===void 0&&(s[r]=o)}),new mt(t.segments,s)}}function R_(t,e,n){let i=0,s=e,r={match:!1,pathIndex:0,commandIndex:0};for(;s<t.segments.length;){if(i>=n.length)return r;let o=t.segments[s],c=n[i];if(jr(c))break;let a=`${c}`,l=i<n.length-1?n[i+1]:null;if(s>0&&a===void 0)break;if(a&&l&&typeof l=="object"&&l.outlets===void 0){if(!gh(a,l,o))return r;i+=2}else{if(!gh(a,{},o))return r;i++}s++}return{match:!0,pathIndex:s,commandIndex:i}}function d6(t,e,n){let i=t.segments.slice(0,e),s=0;for(;s<n.length;){let r=n[s];if(jr(r)){let a=P_(r.outlets);return new mt(i,a)}if(s===0&&vc(n[0])){let a=t.segments[e];i.push(new hi(a.path,mh(n[0]))),s++;continue}let o=jr(r)?r.outlets[je]:`${r}`,c=s<n.length-1?n[s+1]:null;o&&c&&vc(c)?(i.push(new hi(o,mh(c))),s+=2):(i.push(new hi(o,{})),s++)}return new mt(i,{})}function P_(t){let e={};return Object.entries(t).forEach(([n,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[n]=d6(new mt([],{}),0,i))}),e}function mh(t){let e={};return Object.entries(t).forEach(([n,i])=>e[n]=`${i}`),e}function gh(t,e,n){return t==n.path&&g1(e,n.parameters)}var Hr="imperative",jt=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(jt||{}),Vn=class{constructor(e,n){this.id=e,this.url=n}},Es=class extends Vn{constructor(e,n,i="imperative",s=null){super(e,n),this.type=jt.NavigationStart,this.navigationTrigger=i,this.restoredState=s}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},j1=class extends Vn{constructor(e,n,i){super(e,n),this.urlAfterRedirects=i,this.type=jt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Sn=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(Sn||{}),xc=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(xc||{}),b2=class extends Vn{constructor(e,n,i,s){super(e,n),this.reason=i,this.code=s,this.type=jt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},S2=class extends Vn{constructor(e,n,i,s){super(e,n),this.reason=i,this.code=s,this.type=jt.NavigationSkipped}},$r=class extends Vn{constructor(e,n,i,s){super(e,n),this.error=i,this.target=s,this.type=jt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Cc=class extends Vn{constructor(e,n,i,s){super(e,n),this.urlAfterRedirects=i,this.state=s,this.type=jt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},h6=class extends Vn{constructor(e,n,i,s){super(e,n),this.urlAfterRedirects=i,this.state=s,this.type=jt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},p6=class extends Vn{constructor(e,n,i,s,r){super(e,n),this.urlAfterRedirects=i,this.state=s,this.shouldActivate=r,this.type=jt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},m6=class extends Vn{constructor(e,n,i,s){super(e,n),this.urlAfterRedirects=i,this.state=s,this.type=jt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},g6=class extends Vn{constructor(e,n,i,s){super(e,n),this.urlAfterRedirects=i,this.state=s,this.type=jt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},M6=class{constructor(e){this.route=e,this.type=jt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},v6=class{constructor(e){this.route=e,this.type=jt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},y6=class{constructor(e){this.snapshot=e,this.type=jt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},x6=class{constructor(e){this.snapshot=e,this.type=jt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},C6=class{constructor(e){this.snapshot=e,this.type=jt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_6=class{constructor(e){this.snapshot=e,this.type=jt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_c=class{constructor(e,n,i){this.routerEvent=e,this.position=n,this.anchor=i,this.type=jt.Scroll}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},qr=class{},Xr=class{constructor(e){this.url=e}};var L6=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new e0,this.attachRef=null}},e0=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,s){let r=this.getOrCreateContext(i);r.outlet=s,this.contexts.set(i,r)}onChildOutletDestroyed(i){let s=this.getContext(i);s&&(s.outlet=null,s.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let s=this.getContext(i);return s||(s=new L6,this.contexts.set(i,s)),s}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Lc=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let n=this.pathFromRoot(e);return n.length>1?n[n.length-2]:null}children(e){let n=b6(e,this._root);return n?n.children.map(i=>i.value):[]}firstChild(e){let n=b6(e,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(e){let n=S6(e,this._root);return n.length<2?[]:n[n.length-2].children.map(s=>s.value).filter(s=>s!==e)}pathFromRoot(e){return S6(e,this._root).map(n=>n.value)}};function b6(t,e){if(t===e.value)return e;for(let n of e.children){let i=b6(t,n);if(i)return i}return null}function S6(t,e){if(t===e.value)return[e];for(let n of e.children){let i=S6(t,n);if(i.length)return i.unshift(e),i}return[]}var bn=class{constructor(e,n){this.value=e,this.children=n}toString(){return`TreeNode(${this.value})`}};function _s(t){let e={};return t&&t.children.forEach(n=>e[n.value.outlet]=n),e}var bc=class extends Lc{constructor(e,n){super(e),this.snapshot=n,P6(this,e)}toString(){return this.snapshot.toString()}};function Ph(t){let e=O_(t),n=new Xt([new hi("",{})]),i=new Xt({}),s=new Xt({}),r=new Xt({}),o=new Xt(""),c=new zs(n,i,r,o,s,je,t,e.root);return c.snapshot=e.root,new bc(new bn(c,[]),e)}function O_(t){let e={},n={},i={},s="",r=new Yr([],e,i,s,n,je,t,null,{});return new Sc("",new bn(r,[]))}var zs=class{constructor(e,n,i,s,r,o,c,a){this.urlSubject=e,this.paramsSubject=n,this.queryParamsSubject=i,this.fragmentSubject=s,this.dataSubject=r,this.outlet=o,this.component=c,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(rt(l=>l[Kr]))??Pe(void 0),this.url=e,this.params=n,this.queryParams=i,this.fragment=s,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(rt(e=>Ss(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(rt(e=>Ss(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function R6(t,e,n="emptyOnly"){let i,{routeConfig:s}=t;return e!==null&&(n==="always"||s?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:V(V({},e.params),t.params),data:V(V({},e.data),t.data),resolve:V(V(V(V({},t.data),e.data),s?.data),t._resolvedData)}:i={params:V({},t.params),data:V({},t.data),resolve:V(V({},t.data),t._resolvedData??{})},s&&Fh(s)&&(i.resolve[Kr]=s.title),i}var Yr=class{get title(){return this.data?.[Kr]}constructor(e,n,i,s,r,o,c,a,l){this.url=e,this.params=n,this.queryParams=i,this.fragment=s,this.data=r,this.outlet=o,this.component=c,this.routeConfig=a,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ss(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ss(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${n}')`}},Sc=class extends Lc{constructor(e,n){super(n),this.url=e,P6(this,n)}toString(){return Oh(this._root)}};function P6(t,e){e.value._routerState=t,e.children.forEach(n=>P6(t,n))}function Oh(t){let e=t.children.length>0?` { ${t.children.map(Oh).join(", ")} } `:"";return`${t.value}${e}`}function o6(t){if(t.snapshot){let e=t.snapshot,n=t._futureSnapshot;t.snapshot=n,g1(e.queryParams,n.queryParams)||t.queryParamsSubject.next(n.queryParams),e.fragment!==n.fragment&&t.fragmentSubject.next(n.fragment),g1(e.params,n.params)||t.paramsSubject.next(n.params),f_(e.url,n.url)||t.urlSubject.next(n.url),g1(e.data,n.data)||t.dataSubject.next(n.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function w6(t,e){let n=g1(t.params,e.params)&&m_(t.url,e.url),i=!t.parent!=!e.parent;return n&&!i&&(!t.parent||w6(t.parent,e.parent))}function Fh(t){return typeof t.title=="string"||t.title===null}var F_=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=je,this.activateEvents=new Qt,this.deactivateEvents=new Qt,this.attachEvents=new Qt,this.detachEvents=new Qt,this.parentContexts=re(e0),this.location=re(vs),this.changeDetector=re(Rr),this.environmentInjector=re(dn),this.inputBinder=re(Tc,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:s,previousValue:r}=i.name;if(s)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ee(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ee(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ee(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,s){this.activated=i,this._activatedRoute=s,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,s){if(this.isActivated)throw new Ee(4013,!1);this._activatedRoute=i;let r=this.location,c=i.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new E6(i,a,r.injector);this.activated=r.createComponent(c,{index:r.length,injector:l,environmentInjector:s??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275dir=Lr({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[g2]});let t=e;return t})(),E6=class t{__ngOutletInjector(e){return new t(this.route,this.childContexts,e)}constructor(e,n,i){this.route=e,this.childContexts=n,this.parent=i}get(e,n){return e===zs?this.route:e===e0?this.childContexts:this.parent.get(e,n)}},Tc=new Be(""),Mh=(()=>{let e=class e{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(i){this.unsubscribeFromRouteData(i),this.subscribeToRouteData(i)}unsubscribeFromRouteData(i){this.outletDataSubscriptions.get(i)?.unsubscribe(),this.outletDataSubscriptions.delete(i)}subscribeToRouteData(i){let{activatedRoute:s}=i,r=or([s.queryParams,s.params,s.data]).pipe(Fn(([o,c,a],l)=>(a=V(V(V({},o),c),a),l===0?Pe(a):Promise.resolve(a)))).subscribe(o=>{if(!i.isActivated||!i.activatedComponentRef||i.activatedRoute!==s||s.component===null){this.unsubscribeFromRouteData(i);return}let c=jd(s.component);if(!c){this.unsubscribeFromRouteData(i);return}for(let{templateName:a}of c.inputs)i.activatedComponentRef.setInput(a,o[a])});this.outletDataSubscriptions.set(i,r)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac});let t=e;return t})();function k_(t,e,n){let i=Zr(t,e._root,n?n._root:void 0);return new bc(i,e)}function Zr(t,e,n){if(n&&t.shouldReuseRoute(e.value,n.value.snapshot)){let i=n.value;i._futureSnapshot=e.value;let s=U_(t,e,n);return new bn(i,s)}else{if(t.shouldAttach(e.value)){let r=t.retrieve(e.value);if(r!==null){let o=r.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(c=>Zr(t,c)),o}}let i=B_(e.value),s=e.children.map(r=>Zr(t,r));return new bn(i,s)}}function U_(t,e,n){return e.children.map(i=>{for(let s of n.children)if(t.shouldReuseRoute(i.value,s.value.snapshot))return Zr(t,i,s);return Zr(t,i)})}function B_(t){return new zs(new Xt(t.url),new Xt(t.params),new Xt(t.queryParams),new Xt(t.fragment),new Xt(t.data),t.outlet,t.component,t)}var kh="ngNavigationCancelingError";function Uh(t,e){let{redirectTo:n,navigationBehaviorOptions:i}=ws(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,s=Bh(!1,Sn.Redirect);return s.url=n,s.navigationBehaviorOptions=i,s}function Bh(t,e){let n=new Error(`NavigationCancelingError: ${t||""}`);return n[kh]=!0,n.cancellationCode=e,n}function V_(t){return Vh(t)&&ws(t.url)}function Vh(t){return!!t&&t[kh]}var H_=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=Vt({type:e,selectors:[["ng-component"]],standalone:!0,features:[Dr],decls:1,vars:0,template:function(s,r){s&1&&_e(0,"router-outlet")},dependencies:[F_],encapsulation:2});let t=e;return t})();function G_(t,e){return t.providers&&!t._injector&&(t._injector=ec(t.providers,e,`Route: ${t.path}`)),t._injector??e}function O6(t){let e=t.children&&t.children.map(O6),n=e?He(V({},t),{children:e}):V({},t);return!n.component&&!n.loadComponent&&(e||n.loadChildren)&&n.outlet&&n.outlet!==je&&(n.component=H_),n}function M1(t){return t.outlet||je}function W_(t,e){let n=t.filter(i=>M1(i)===e);return n.push(...t.filter(i=>M1(i)!==e)),n}function t0(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let e=t.parent;e;e=e.parent){let n=e.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var j_=(t,e,n,i)=>rt(s=>(new z6(e,s.targetRouterState,s.currentRouterState,n,i).activate(t),s)),z6=class{constructor(e,n,i,s,r){this.routeReuseStrategy=e,this.futureState=n,this.currState=i,this.forwardEvent=s,this.inputBindingEnabled=r}activate(e){let n=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,i,e),o6(this.futureState.root),this.activateChildRoutes(n,i,e)}deactivateChildRoutes(e,n,i){let s=_s(n);e.children.forEach(r=>{let o=r.value.outlet;this.deactivateRoutes(r,s[o],i),delete s[o]}),Object.values(s).forEach(r=>{this.deactivateRouteAndItsChildren(r,i)})}deactivateRoutes(e,n,i){let s=e.value,r=n?n.value:null;if(s===r)if(s.component){let o=i.getContext(s.outlet);o&&this.deactivateChildRoutes(e,n,o.children)}else this.deactivateChildRoutes(e,n,i);else r&&this.deactivateRouteAndItsChildren(n,i)}deactivateRouteAndItsChildren(e,n){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,n):this.deactivateRouteAndOutlet(e,n)}detachAndStoreRouteSubtree(e,n){let i=n.getContext(e.value.outlet),s=i&&e.value.component?i.children:n,r=_s(e);for(let o of Object.values(r))this.deactivateRouteAndItsChildren(o,s);if(i&&i.outlet){let o=i.outlet.detach(),c=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:c})}}deactivateRouteAndOutlet(e,n){let i=n.getContext(e.value.outlet),s=i&&e.value.component?i.children:n,r=_s(e);for(let o of Object.values(r))this.deactivateRouteAndItsChildren(o,s);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,n,i){let s=_s(n);e.children.forEach(r=>{this.activateRoutes(r,s[r.value.outlet],i),this.forwardEvent(new _6(r.value.snapshot))}),e.children.length&&this.forwardEvent(new x6(e.value.snapshot))}activateRoutes(e,n,i){let s=e.value,r=n?n.value:null;if(o6(s),s===r)if(s.component){let o=i.getOrCreateContext(s.outlet);this.activateChildRoutes(e,n,o.children)}else this.activateChildRoutes(e,n,i);else if(s.component){let o=i.getOrCreateContext(s.outlet);if(this.routeReuseStrategy.shouldAttach(s.snapshot)){let c=this.routeReuseStrategy.retrieve(s.snapshot);this.routeReuseStrategy.store(s.snapshot,null),o.children.onOutletReAttached(c.contexts),o.attachRef=c.componentRef,o.route=c.route.value,o.outlet&&o.outlet.attach(c.componentRef,c.route.value),o6(c.route.value),this.activateChildRoutes(e,null,o.children)}else{let c=t0(s.snapshot);o.attachRef=null,o.route=s,o.injector=c,o.outlet&&o.outlet.activateWith(s,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},wc=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},bs=class{constructor(e,n){this.component=e,this.route=n}};function $_(t,e,n){let i=t._root,s=e?e._root:null;return Ur(i,s,n,[i.value])}function q_(t){let e=t.routeConfig?t.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:t,guards:e}}function Ts(t,e){let n=Symbol(),i=e.get(t,n);return i===n?typeof t=="function"&&!Mf(t)?t:e.get(t):i}function Ur(t,e,n,i,s={canDeactivateChecks:[],canActivateChecks:[]}){let r=_s(e);return t.children.forEach(o=>{X_(o,r[o.value.outlet],n,i.concat([o.value]),s),delete r[o.value.outlet]}),Object.entries(r).forEach(([o,c])=>Gr(c,n.getContext(o),s)),s}function X_(t,e,n,i,s={canDeactivateChecks:[],canActivateChecks:[]}){let r=t.value,o=e?e.value:null,c=n?n.getContext(t.value.outlet):null;if(o&&r.routeConfig===o.routeConfig){let a=Y_(o,r,r.routeConfig.runGuardsAndResolvers);a?s.canActivateChecks.push(new wc(i)):(r.data=o.data,r._resolvedData=o._resolvedData),r.component?Ur(t,e,c?c.children:null,i,s):Ur(t,e,n,i,s),a&&c&&c.outlet&&c.outlet.isActivated&&s.canDeactivateChecks.push(new bs(c.outlet.component,o))}else o&&Gr(e,c,s),s.canActivateChecks.push(new wc(i)),r.component?Ur(t,null,c?c.children:null,i,s):Ur(t,null,n,i,s);return s}function Y_(t,e,n){if(typeof n=="function")return n(t,e);switch(n){case"pathParamsChange":return!pi(t.url,e.url);case"pathParamsOrQueryParamsChange":return!pi(t.url,e.url)||!g1(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!w6(t,e)||!g1(t.queryParams,e.queryParams);case"paramsChange":default:return!w6(t,e)}}function Gr(t,e,n){let i=_s(t),s=t.value;Object.entries(i).forEach(([r,o])=>{s.component?e?Gr(o,e.children.getContext(r),n):Gr(o,null,n):Gr(o,e,n)}),s.component?e&&e.outlet&&e.outlet.isActivated?n.canDeactivateChecks.push(new bs(e.outlet.component,s)):n.canDeactivateChecks.push(new bs(null,s)):n.canDeactivateChecks.push(new bs(null,s))}function n0(t){return typeof t=="function"}function Z_(t){return typeof t=="boolean"}function J_(t){return t&&n0(t.canLoad)}function K_(t){return t&&n0(t.canActivate)}function Q_(t){return t&&n0(t.canActivateChild)}function eL(t){return t&&n0(t.canDeactivate)}function tL(t){return t&&n0(t.canMatch)}function Hh(t){return t instanceof D1||t?.name==="EmptyError"}var pc=Symbol("INITIAL_VALUE");function As(){return Fn(t=>or(t.map(e=>e.pipe(I1(1),q4(pc)))).pipe(rt(e=>{for(let n of e)if(n!==!0){if(n===pc)return pc;if(n===!1||n instanceof L2)return n}return!0}),On(e=>e!==pc),I1(1)))}function nL(t,e){return Ft(n=>{let{targetSnapshot:i,currentSnapshot:s,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Pe(He(V({},n),{guardsResult:!0})):iL(o,i,s,t).pipe(Ft(c=>c&&Z_(c)?sL(i,r,t,e):Pe(c)),rt(c=>He(V({},n),{guardsResult:c})))})}function iL(t,e,n,i){return Pt(t).pipe(Ft(s=>lL(s.component,s.route,n,e,i)),a1(s=>s!==!0,!0))}function sL(t,e,n,i){return Pt(e).pipe(ei(s=>ns(oL(s.route.parent,i),rL(s.route,i),aL(t,s.path,n),cL(t,s.route,n))),a1(s=>s!==!0,!0))}function rL(t,e){return t!==null&&e&&e(new C6(t)),Pe(!0)}function oL(t,e){return t!==null&&e&&e(new y6(t)),Pe(!0)}function cL(t,e,n){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Pe(!0);let s=i.map(r=>uo(()=>{let o=t0(e)??n,c=Ts(r,o),a=K_(c)?c.canActivate(e,t):O1(o,()=>c(e,t));return w2(a).pipe(a1())}));return Pe(s).pipe(As())}function aL(t,e,n){let i=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(o=>q_(o)).filter(o=>o!==null).map(o=>uo(()=>{let c=o.guards.map(a=>{let l=t0(o.node)??n,u=Ts(a,l),f=Q_(u)?u.canActivateChild(i,t):O1(l,()=>u(i,t));return w2(f).pipe(a1())});return Pe(c).pipe(As())}));return Pe(r).pipe(As())}function lL(t,e,n,i,s){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return Pe(!0);let o=r.map(c=>{let a=t0(e)??s,l=Ts(c,a),u=eL(l)?l.canDeactivate(t,e,n,i):O1(a,()=>l(t,e,n,i));return w2(u).pipe(a1())});return Pe(o).pipe(As())}function uL(t,e,n,i){let s=e.canLoad;if(s===void 0||s.length===0)return Pe(!0);let r=s.map(o=>{let c=Ts(o,t),a=J_(c)?c.canLoad(e,n):O1(t,()=>c(e,n));return w2(a)});return Pe(r).pipe(As(),Gh(i))}function Gh(t){return U4(Yt(e=>{if(ws(e))throw Uh(t,e)}),rt(e=>e===!0))}function fL(t,e,n,i){let s=e.canMatch;if(!s||s.length===0)return Pe(!0);let r=s.map(o=>{let c=Ts(o,t),a=tL(c)?c.canMatch(e,n):O1(t,()=>c(e,n));return w2(a)});return Pe(r).pipe(As(),Gh(i))}var Jr=class{constructor(e){this.segmentGroup=e||null}},Ec=class extends Error{constructor(e){super(),this.urlTree=e}};function Cs(t){return es(new Jr(t))}function dL(t){return es(new Ee(4e3,!1))}function hL(t){return es(Bh(!1,Sn.GuardRejected))}var A6=class{constructor(e,n){this.urlSerializer=e,this.urlTree=n}lineralizeSegments(e,n){let i=[],s=n.root;for(;;){if(i=i.concat(s.segments),s.numberOfChildren===0)return Pe(i);if(s.numberOfChildren>1||!s.children[je])return dL(e.redirectTo);s=s.children[je]}}applyRedirectCommands(e,n,i){let s=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),e,i);if(n.startsWith("/"))throw new Ec(s);return s}applyRedirectCreateUrlTree(e,n,i,s){let r=this.createSegmentGroup(e,n.root,i,s);return new L2(r,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(e,n){let i={};return Object.entries(e).forEach(([s,r])=>{if(typeof r=="string"&&r.startsWith(":")){let c=r.substring(1);i[s]=n[c]}else i[s]=r}),i}createSegmentGroup(e,n,i,s){let r=this.createSegments(e,n.segments,i,s),o={};return Object.entries(n.children).forEach(([c,a])=>{o[c]=this.createSegmentGroup(e,a,i,s)}),new mt(r,o)}createSegments(e,n,i,s){return n.map(r=>r.path.startsWith(":")?this.findPosParam(e,r,s):this.findOrReturn(r,i))}findPosParam(e,n,i){let s=i[n.path.substring(1)];if(!s)throw new Ee(4001,!1);return s}findOrReturn(e,n){let i=0;for(let s of n){if(s.path===e.path)return n.splice(i),s;i++}return e}},T6={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function pL(t,e,n,i,s){let r=F6(t,e,n);return r.matched?(i=G_(e,i),fL(i,e,n,s).pipe(rt(o=>o===!0?r:V({},T6)))):Pe(r)}function F6(t,e,n){if(e.path==="**")return mL(n);if(e.path==="")return e.pathMatch==="full"&&(t.hasChildren()||n.length>0)?V({},T6):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let s=(e.matcher||u_)(n,t,e);if(!s)return V({},T6);let r={};Object.entries(s.posParams??{}).forEach(([c,a])=>{r[c]=a.path});let o=s.consumed.length>0?V(V({},r),s.consumed[s.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:s.consumed,remainingSegments:n.slice(s.consumed.length),parameters:o,positionalParamSegments:s.posParams??{}}}function mL(t){return{matched:!0,parameters:t.length>0?_h(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function vh(t,e,n,i){return n.length>0&&vL(t,n,i)?{segmentGroup:new mt(e,ML(i,new mt(n,t.children))),slicedSegments:[]}:n.length===0&&yL(t,n,i)?{segmentGroup:new mt(t.segments,gL(t,n,i,t.children)),slicedSegments:n}:{segmentGroup:new mt(t.segments,t.children),slicedSegments:n}}function gL(t,e,n,i){let s={};for(let r of n)if(Dc(t,e,r)&&!i[M1(r)]){let o=new mt([],{});s[M1(r)]=o}return V(V({},i),s)}function ML(t,e){let n={};n[je]=e;for(let i of t)if(i.path===""&&M1(i)!==je){let s=new mt([],{});n[M1(i)]=s}return n}function vL(t,e,n){return n.some(i=>Dc(t,e,i)&&M1(i)!==je)}function yL(t,e,n){return n.some(i=>Dc(t,e,i))}function Dc(t,e,n){return(t.hasChildren()||e.length>0)&&n.pathMatch==="full"?!1:n.path===""}function xL(t,e,n,i){return M1(t)!==i&&(i===je||!Dc(e,n,t))?!1:F6(e,t,n).matched}function CL(t,e,n){return e.length===0&&!t.children[n]}var D6=class{};function _L(t,e,n,i,s,r,o="emptyOnly"){return new I6(t,e,n,i,s,o,r).recognize()}var LL=31,I6=class{constructor(e,n,i,s,r,o,c){this.injector=e,this.configLoader=n,this.rootComponentType=i,this.config=s,this.urlTree=r,this.paramsInheritanceStrategy=o,this.urlSerializer=c,this.applyRedirects=new A6(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new Ee(4002,`'${e.segmentGroup}'`)}recognize(){let e=vh(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(rt(n=>{let i=new Yr([],Object.freeze({}),Object.freeze(V({},this.urlTree.queryParams)),this.urlTree.fragment,{},je,this.rootComponentType,null,{}),s=new bn(i,n),r=new Sc("",s),o=A_(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(r._root,null),{state:r,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,je).pipe(l2(i=>{if(i instanceof Ec)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Jr?this.noMatchError(i):i}))}inheritParamsAndData(e,n){let i=e.value,s=R6(i,n,this.paramsInheritanceStrategy);i.params=Object.freeze(s.params),i.data=Object.freeze(s.data),e.children.forEach(r=>this.inheritParamsAndData(r,i))}processSegmentGroup(e,n,i,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,n,i):this.processSegment(e,n,i,i.segments,s,!0).pipe(rt(r=>r instanceof bn?[r]:[]))}processChildren(e,n,i){let s=[];for(let r of Object.keys(i.children))r==="primary"?s.unshift(r):s.push(r);return Pt(s).pipe(ei(r=>{let o=i.children[r],c=W_(n,r);return this.processSegmentGroup(e,c,o,r)}),$4((r,o)=>(r.push(...o),r)),u2(null),j4(),Ft(r=>{if(r===null)return Cs(i);let o=Wh(r);return bL(o),Pe(o)}))}processSegment(e,n,i,s,r,o){return Pt(n).pipe(ei(c=>this.processSegmentAgainstRoute(c._injector??e,n,c,i,s,r,o).pipe(l2(a=>{if(a instanceof Jr)return Pe(null);throw a}))),a1(c=>!!c),l2(c=>{if(Hh(c))return CL(i,s,r)?Pe(new D6):Cs(i);throw c}))}processSegmentAgainstRoute(e,n,i,s,r,o,c){return xL(i,s,r,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,s,i,r,o):this.allowRedirects&&c?this.expandSegmentAgainstRouteUsingRedirect(e,s,n,i,r,o):Cs(s):Cs(s)}expandSegmentAgainstRouteUsingRedirect(e,n,i,s,r,o){let{matched:c,consumedSegments:a,positionalParamSegments:l,remainingSegments:u}=F6(n,s,r);if(!c)return Cs(n);s.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>LL&&(this.allowRedirects=!1));let f=this.applyRedirects.applyRedirectCommands(a,s.redirectTo,l);return this.applyRedirects.lineralizeSegments(s,f).pipe(Ft(d=>this.processSegment(e,i,n,d.concat(u),o,!1)))}matchSegmentAgainstRoute(e,n,i,s,r){let o=pL(n,i,s,e,this.urlSerializer);return i.path==="**"&&(n.children={}),o.pipe(Fn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,s).pipe(Fn(({routes:a})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:f,parameters:d}=c,p=new Yr(u,d,Object.freeze(V({},this.urlTree.queryParams)),this.urlTree.fragment,wL(i),M1(i),i.component??i._loadedComponent??null,i,EL(i)),{segmentGroup:g,slicedSegments:v}=vh(n,u,f,a);if(v.length===0&&g.hasChildren())return this.processChildren(l,a,g).pipe(rt(h=>h===null?null:new bn(p,h)));if(a.length===0&&v.length===0)return Pe(new bn(p,[]));let m=M1(i)===r;return this.processSegment(l,a,g,v,m?je:r,!0).pipe(rt(h=>new bn(p,h instanceof bn?[h]:[])))}))):Cs(n)))}getChildConfig(e,n,i){return n.children?Pe({routes:n.children,injector:e}):n.loadChildren?n._loadedRoutes!==void 0?Pe({routes:n._loadedRoutes,injector:n._loadedInjector}):uL(e,n,i,this.urlSerializer).pipe(Ft(s=>s?this.configLoader.loadChildren(e,n).pipe(Yt(r=>{n._loadedRoutes=r.routes,n._loadedInjector=r.injector})):hL(n))):Pe({routes:[],injector:e})}};function bL(t){t.sort((e,n)=>e.value.outlet===je?-1:n.value.outlet===je?1:e.value.outlet.localeCompare(n.value.outlet))}function SL(t){let e=t.value.routeConfig;return e&&e.path===""}function Wh(t){let e=[],n=new Set;for(let i of t){if(!SL(i)){e.push(i);continue}let s=e.find(r=>i.value.routeConfig===r.value.routeConfig);s!==void 0?(s.children.push(...i.children),n.add(s)):e.push(i)}for(let i of n){let s=Wh(i.children);e.push(new bn(i.value,s))}return e.filter(i=>!n.has(i))}function wL(t){return t.data||{}}function EL(t){return t.resolve||{}}function zL(t,e,n,i,s,r){return Ft(o=>_L(t,e,n,i,o.extractedUrl,s,r).pipe(rt(({state:c,tree:a})=>He(V({},o),{targetSnapshot:c,urlAfterRedirects:a}))))}function AL(t,e){return Ft(n=>{let{targetSnapshot:i,guards:{canActivateChecks:s}}=n;if(!s.length)return Pe(n);let r=new Set(s.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of jh(a))o.add(l);let c=0;return Pt(o).pipe(ei(a=>r.has(a)?TL(a,i,t,e):(a.data=R6(a,a.parent,t).resolve,Pe(void 0))),Yt(()=>c++),is(1),Ft(a=>c===o.size?Pe(n):Mn))})}function jh(t){let e=t.children.map(n=>jh(n)).flat();return[t,...e]}function TL(t,e,n,i){let s=t.routeConfig,r=t._resolve;return s?.title!==void 0&&!Fh(s)&&(r[Kr]=s.title),DL(r,t,e,i).pipe(rt(o=>(t._resolvedData=o,t.data=R6(t,t.parent,n).resolve,null)))}function DL(t,e,n,i){let s=l6(t);if(s.length===0)return Pe({});let r={};return Pt(s).pipe(Ft(o=>IL(t[o],e,n,i).pipe(a1(),Yt(c=>{r[o]=c}))),is(1),W4(r),l2(o=>Hh(o)?Mn:es(o)))}function IL(t,e,n,i){let s=t0(e)??i,r=Ts(t,s),o=r.resolve?r.resolve(e,n):O1(s,()=>r(e,n));return w2(o)}function c6(t){return Fn(e=>{let n=t(e);return n?Pt(n).pipe(rt(()=>e)):Pe(e)})}var $h=(()=>{let e=class e{buildTitle(i){let s,r=i.root;for(;r!==void 0;)s=this.getResolvedTitleForRoute(r)??s,r=r.children.find(o=>o.outlet===je);return s}getResolvedTitleForRoute(i){return i.data[Kr]}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:()=>re(NL),providedIn:"root"});let t=e;return t})(),NL=(()=>{let e=class e extends $h{constructor(i){super(),this.title=i}updateTitle(i){let s=this.buildTitle(i);s!==void 0&&this.title.setTitle(s)}};e.\u0275fac=function(s){return new(s||e)(Te(dh))},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),i0=new Be("",{providedIn:"root",factory:()=>({})}),zc=new Be(""),k6=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=re(ac)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Pe(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let s=w2(i.loadComponent()).pipe(rt(qh),Yt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),cr(()=>{this.componentLoaders.delete(i)})),r=new Qi(s,()=>new cn).pipe(Ki());return this.componentLoaders.set(i,r),r}loadChildren(i,s){if(this.childrenLoaders.get(s))return this.childrenLoaders.get(s);if(s._loadedRoutes)return Pe({routes:s._loadedRoutes,injector:s._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(s);let o=RL(s,this.compiler,i,this.onLoadEndListener).pipe(cr(()=>{this.childrenLoaders.delete(s)})),c=new Qi(o,()=>new cn).pipe(Ki());return this.childrenLoaders.set(s,c),c}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function RL(t,e,n,i){return w2(t.loadChildren()).pipe(rt(qh),Ft(s=>s instanceof Cr||Array.isArray(s)?Pe(s):Pt(e.compileModuleAsync(s))),rt(s=>{i&&i(t);let r,o,c=!1;return Array.isArray(s)?(o=s,c=!0):(r=s.create(n).injector,o=r.get(zc,[],{optional:!0,self:!0}).flat()),{routes:o.map(O6),injector:r}}))}function PL(t){return t&&typeof t=="object"&&"default"in t}function qh(t){return PL(t)?t.default:t}var U6=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:()=>re(OL),providedIn:"root"});let t=e;return t})(),OL=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,s){return i}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Xh=new Be(""),Yh=new Be("");function FL(t,e,n){let i=t.get(Yh),s=t.get(an);return t.get(Lt).runOutsideAngular(()=>{if(!s.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let r,o=new Promise(l=>{r=l}),c=s.startViewTransition(()=>(r(),kL(t))),{onViewTransitionCreated:a}=i;return a&&O1(t,()=>a({transition:c,from:e,to:n})),o})}function kL(t){return new Promise(e=>{Qo(e,{injector:t})})}var B6=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new cn,this.transitionAbortSubject=new cn,this.configLoader=re(k6),this.environmentInjector=re(dn),this.urlSerializer=re(Qr),this.rootContexts=re(e0),this.location=re(xs),this.inputBindingEnabled=re(Tc,{optional:!0})!==null,this.titleStrategy=re($h),this.options=re(i0,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=re(U6),this.createViewTransition=re(Xh,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Pe(void 0),this.rootComponentType=null;let i=r=>this.events.next(new M6(r)),s=r=>this.events.next(new v6(r));this.configLoader.onLoadEndListener=s,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let s=++this.navigationId;this.transitions?.next(He(V(V({},this.transitions.value),i),{id:s}))}setupNavigations(i,s,r){return this.transitions=new Xt({id:0,currentUrlTree:s,currentRawUrl:s,extractedUrl:this.urlHandlingStrategy.extract(s),urlAfterRedirects:this.urlHandlingStrategy.extract(s),rawUrl:s,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Hr,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(On(o=>o.id!==0),rt(o=>He(V({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),Fn(o=>{let c=!1,a=!1;return Pe(o).pipe(Fn(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",Sn.SupersededByNewNavigation),Mn;this.currentTransition=o,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?He(V({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&f!=="reload"){let d="";return this.events.next(new S2(l.id,this.urlSerializer.serialize(l.rawUrl),d,xc.IgnoredSameUrlNavigation)),l.resolve(null),Mn}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Pe(l).pipe(Fn(d=>{let p=this.transitions?.getValue();return this.events.next(new Es(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),p!==this.transitions?.getValue()?Mn:Promise.resolve(d)}),zL(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Yt(d=>{o.targetSnapshot=d.targetSnapshot,o.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=He(V({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let p=new Cc(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(p)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:d,extractedUrl:p,source:g,restoredState:v,extras:m}=l,h=new Es(d,this.urlSerializer.serialize(p),g,v);this.events.next(h);let S=Ph(this.rootComponentType).snapshot;return this.currentTransition=o=He(V({},l),{targetSnapshot:S,urlAfterRedirects:p,extras:He(V({},m),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=p,Pe(o)}else{let d="";return this.events.next(new S2(l.id,this.urlSerializer.serialize(l.extractedUrl),d,xc.IgnoredByUrlHandlingStrategy)),l.resolve(null),Mn}}),Yt(l=>{let u=new h6(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),rt(l=>(this.currentTransition=o=He(V({},l),{guards:$_(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),nL(this.environmentInjector,l=>this.events.next(l)),Yt(l=>{if(o.guardsResult=l.guardsResult,ws(l.guardsResult))throw Uh(this.urlSerializer,l.guardsResult);let u=new p6(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),On(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Sn.GuardRejected),!1)),c6(l=>{if(l.guards.canActivateChecks.length)return Pe(l).pipe(Yt(u=>{let f=new m6(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(f)}),Fn(u=>{let f=!1;return Pe(u).pipe(AL(this.paramsInheritanceStrategy,this.environmentInjector),Yt({next:()=>f=!0,complete:()=>{f||this.cancelNavigationTransition(u,"",Sn.NoDataFromResolver)}}))}),Yt(u=>{let f=new g6(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(f)}))}),c6(l=>{let u=f=>{let d=[];f.routeConfig?.loadComponent&&!f.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(f.routeConfig).pipe(Yt(p=>{f.component=p}),rt(()=>{})));for(let p of f.children)d.push(...u(p));return d};return or(u(l.targetSnapshot.root)).pipe(u2(null),I1(1))}),c6(()=>this.afterPreactivation()),Fn(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,f=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return f?Pt(f).pipe(rt(()=>o)):Pe(o)}),rt(l=>{let u=k_(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=He(V({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Yt(()=>{this.events.next(new qr)}),j_(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),I1(1),Yt({next:l=>{c=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new j1(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{c=!0}}),X4(this.transitionAbortSubject.pipe(Yt(l=>{throw l}))),cr(()=>{!c&&!a&&this.cancelNavigationTransition(o,"",Sn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),l2(l=>{if(a=!0,Vh(l))this.events.next(new b2(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),V_(l)?this.events.next(new Xr(l.url)):o.resolve(!1);else{this.events.next(new $r(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return Mn}))}))}cancelNavigationTransition(i,s,r){let o=new b2(i.id,this.urlSerializer.serialize(i.extractedUrl),s,r);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function UL(t){return t!==Hr}var BL=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:()=>re(VL),providedIn:"root"});let t=e;return t})(),N6=class{shouldDetach(e){return!1}store(e,n){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,n){return e.routeConfig===n.routeConfig}},VL=(()=>{let e=class e extends N6{};e.\u0275fac=(()=>{let i;return function(r){return(i||(i=$o(e)))(r||e)}})(),e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Zh=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:()=>re(HL),providedIn:"root"});let t=e;return t})(),HL=(()=>{let e=class e extends Zh{constructor(){super(...arguments),this.location=re(xs),this.urlSerializer=re(Qr),this.options=re(i0,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=re(U6),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new L2,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Ph(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(s=>{s.type==="popstate"&&i(s.url,s.state)})}handleRouterEvent(i,s){if(i instanceof Es)this.stateMemento=this.createStateMemento();else if(i instanceof S2)this.rawUrlTree=s.initialUrl;else if(i instanceof Cc){if(this.urlUpdateStrategy==="eager"&&!s.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(s.finalUrl,s.initialUrl);this.setBrowserUrl(r,s)}}else i instanceof qr?(this.currentUrlTree=s.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(s.finalUrl,s.initialUrl),this.routerState=s.targetRouterState,this.urlUpdateStrategy==="deferred"&&(s.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,s))):i instanceof b2&&(i.code===Sn.GuardRejected||i.code===Sn.NoDataFromResolver)?this.restoreHistory(s):i instanceof $r?this.restoreHistory(s,!0):i instanceof j1&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,s){let r=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(r)||s.extras.replaceUrl){let o=this.browserPageId,c=V(V({},s.extras.state),this.generateNgRouterState(s.id,o));this.location.replaceState(r,"",c)}else{let o=V(V({},s.extras.state),this.generateNgRouterState(s.id,this.browserPageId+1));this.location.go(r,"",o)}}restoreHistory(i,s=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(s&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,s){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:s}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(r){return(i||(i=$o(e)))(r||e)}})(),e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Br=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(Br||{});function Jh(t,e){t.events.pipe(On(n=>n instanceof j1||n instanceof b2||n instanceof $r||n instanceof S2),rt(n=>n instanceof j1||n instanceof S2?Br.COMPLETE:(n instanceof b2?n.code===Sn.Redirect||n.code===Sn.SupersededByNewNavigation:!1)?Br.REDIRECTING:Br.FAILED),On(n=>n!==Br.REDIRECTING),I1(1)).subscribe(()=>{e()})}function GL(t){throw t}var WL={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},jL={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},mi=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=re(sc),this.stateManager=re(Zh),this.options=re(i0,{optional:!0})||{},this.pendingTasks=re(tc),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=re(B6),this.urlSerializer=re(Qr),this.location=re(xs),this.urlHandlingStrategy=re(U6),this._events=new cn,this.errorHandler=this.options.errorHandler||GL,this.navigated=!1,this.routeReuseStrategy=re(BL),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=re(zc,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!re(Tc,{optional:!0}),this.eventsSubscription=new Bt,this.isNgZoneEnabled=re(Lt)instanceof Lt&&Lt.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(s=>{try{let r=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(s,o),s instanceof b2&&s.code!==Sn.Redirect&&s.code!==Sn.SupersededByNewNavigation)this.navigated=!0;else if(s instanceof j1)this.navigated=!0;else if(s instanceof Xr){let c=this.urlHandlingStrategy.merge(s.url,r.currentRawUrl),a={info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||UL(r.source)};this.scheduleNavigation(c,Hr,null,a,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}qL(s)&&this._events.next(s)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Hr,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,s)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",s)},0)})}navigateToSyncWithBrowser(i,s,r){let o={replaceUrl:!0},c=r?.navigationId?r:null;if(r){let l=V({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let a=this.parseUrl(i);this.scheduleNavigation(a,s,c,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(O6),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,s={}){let{relativeTo:r,queryParams:o,fragment:c,queryParamsHandling:a,preserveFragment:l}=s,u=l?this.currentUrlTree.fragment:c,f=null;switch(a){case"merge":f=V(V({},this.currentUrlTree.queryParams),o);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=o||null}f!==null&&(f=this.removeEmptyProps(f));let d;try{let p=r?r.snapshot:this.routerState.snapshot.root;d=Dh(p)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),d=this.currentUrlTree.root}return Ih(d,i,f,u??null)}navigateByUrl(i,s={skipLocationChange:!1}){let r=ws(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Hr,null,s)}navigate(i,s={skipLocationChange:!1}){return $L(i),this.navigateByUrl(this.createUrlTree(i,s),s)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,s){let r;if(s===!0?r=V({},WL):s===!1?r=V({},jL):r=s,ws(i))return hh(this.currentUrlTree,i,r);let o=this.parseUrl(i);return hh(this.currentUrlTree,o,r)}removeEmptyProps(i){return Object.entries(i).reduce((s,[r,o])=>(o!=null&&(s[r]=o),s),{})}scheduleNavigation(i,s,r,o,c){if(this.disposed)return Promise.resolve(!1);let a,l,u;c?(a=c.resolve,l=c.reject,u=c.promise):u=new Promise((d,p)=>{a=d,l=p});let f=this.pendingTasks.add();return Jh(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:s,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:a,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(d=>Promise.reject(d))}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function $L(t){for(let e=0;e<t.length;e++)if(t[e]==null)throw new Ee(4008,!1)}function qL(t){return!(t instanceof qr)&&!(t instanceof Xr)}var Ac=class{};var XL=(()=>{let e=class e{constructor(i,s,r,o,c){this.router=i,this.injector=r,this.preloadingStrategy=o,this.loader=c}setUpPreloading(){this.subscription=this.router.events.pipe(On(i=>i instanceof j1),ei(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(i,s){let r=[];for(let o of s){o.providers&&!o._injector&&(o._injector=ec(o.providers,i,`Route: ${o.path}`));let c=o._injector??i,a=o._loadedInjector??c;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(c,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return Pt(r).pipe(ts())}preloadConfig(i,s){return this.preloadingStrategy.preload(s,()=>{let r;s.loadChildren&&s.canLoad===void 0?r=this.loader.loadChildren(i,s):r=Pe(null);let o=r.pipe(Ft(c=>c===null?Pe(void 0):(s._loadedRoutes=c.routes,s._loadedInjector=c.injector,this.processRoutes(c.injector??i,c.routes))));if(s.loadComponent&&!s._loadedComponent){let c=this.loader.loadComponent(s);return Pt([o,c]).pipe(ts())}else return o})}};e.\u0275fac=function(s){return new(s||e)(Te(mi),Te(ac),Te(dn),Te(Ac),Te(k6))},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Kh=new Be(""),YL=(()=>{let e=class e{constructor(i,s,r,o,c={}){this.urlSerializer=i,this.transitions=s,this.viewportScroller=r,this.zone=o,this.options=c,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},this.environmentInjector=re(dn),c.scrollPositionRestoration||="disabled",c.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(i=>{i instanceof Es?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=i.navigationTrigger,this.restoredId=i.restoredState?i.restoredState.navigationId:0):i instanceof j1?(this.lastId=i.id,this.scheduleScrollEvent(i,this.urlSerializer.parse(i.urlAfterRedirects).fragment)):i instanceof S2&&i.code===xc.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(i,this.urlSerializer.parse(i.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(i=>{i instanceof _c&&(i.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(i.position):i.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(i.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(i,s){this.zone.runOutsideAngular(()=>Z2(this,null,function*(){yield new Promise(r=>{setTimeout(()=>{r()}),Qo(()=>{r()},{injector:this.environmentInjector})}),this.zone.run(()=>{this.transitions.events.next(new _c(i,this.lastSource==="popstate"?this.store[this.restoredId]:null,s))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}};e.\u0275fac=function(s){ud()},e.\u0275prov=Le({token:e,factory:e.\u0275fac});let t=e;return t})();function ZL(t){return t.routerState.root}function s0(t,e){return{\u0275kind:t,\u0275providers:e}}function JL(){let t=re(m1);return e=>{let n=t.get(ys);if(e!==n.components[0])return;let i=t.get(mi),s=t.get(Qh);t.get(V6)===1&&i.initialNavigation(),t.get(e9,null,Xe.Optional)?.setUpPreloading(),t.get(Kh,null,Xe.Optional)?.init(),i.resetRootComponentType(n.componentTypes[0]),s.closed||(s.next(),s.complete(),s.unsubscribe())}}var Qh=new Be("",{factory:()=>new cn}),V6=new Be("",{providedIn:"root",factory:()=>1});function KL(){return s0(2,[{provide:V6,useValue:0},{provide:cc,multi:!0,deps:[m1],useFactory:e=>{let n=e.get(Jd,Promise.resolve());return()=>n.then(()=>new Promise(i=>{let s=e.get(mi),r=e.get(Qh);Jh(s,()=>{i(!0)}),e.get(B6).afterPreactivation=()=>(i(!0),r.closed?Pe(void 0):r),s.initialNavigation()}))}}])}function QL(){return s0(3,[{provide:cc,multi:!0,useFactory:()=>{let e=re(mi);return()=>{e.setUpLocationChangeListener()}}},{provide:V6,useValue:2}])}var e9=new Be("");function eb(t){return s0(0,[{provide:e9,useExisting:XL},{provide:Ac,useExisting:t}])}function tb(){return s0(8,[Mh,{provide:Tc,useExisting:Mh}])}function nb(t){let e=[{provide:Xh,useValue:FL},{provide:Yh,useValue:V({skipNextTransition:!!t?.skipInitialTransition},t)}];return s0(9,e)}var yh=new Be("ROUTER_FORROOT_GUARD"),ib=[xs,{provide:Qr,useClass:Wr},mi,e0,{provide:zs,useFactory:ZL,deps:[mi]},k6,[]],H6=(()=>{let e=class e{constructor(i){}static forRoot(i,s){return{ngModule:e,providers:[ib,[],{provide:zc,multi:!0,useValue:i},{provide:yh,useFactory:cb,deps:[[mi,new tl,new bf]]},{provide:i0,useValue:s||{}},s?.useHash?rb():ob(),sb(),s?.preloadingStrategy?eb(s.preloadingStrategy).\u0275providers:[],s?.initialNavigation?ab(s):[],s?.bindToComponentInputs?tb().\u0275providers:[],s?.enableViewTransitions?nb().\u0275providers:[],lb()]}}static forChild(i){return{ngModule:e,providers:[{provide:zc,multi:!0,useValue:i}]}}};e.\u0275fac=function(s){return new(s||e)(Te(yh,8))},e.\u0275mod=Cn({type:e}),e.\u0275inj=xn({});let t=e;return t})();function sb(){return{provide:Kh,useFactory:()=>{let t=re(nh),e=re(Lt),n=re(i0),i=re(B6),s=re(Qr);return n.scrollOffset&&t.setOffset(n.scrollOffset),new YL(s,i,t,e,n)}}}function rb(){return{provide:di,useClass:Qd}}function ob(){return{provide:di,useClass:jl}}function cb(t){return"guarded"}function ab(t){return[t.initialNavigation==="disabled"?QL().\u0275providers:[],t.initialNavigation==="enabledBlocking"?KL().\u0275providers:[]]}var xh=new Be("");function lb(){return[{provide:xh,useFactory:JL},{provide:kl,multi:!0,useExisting:xh}]}var ub=[],t9=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=Cn({type:e}),e.\u0275inj=xn({imports:[H6.forRoot(ub),H6]});let t=e;return t})();var G6={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};var n9={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var Ic={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};var i9={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var s9=()=>{},u8={},z9={},A9=null,T9={mark:s9,measure:s9};try{typeof window<"u"&&(u8=window),typeof document<"u"&&(z9=document),typeof MutationObserver<"u"&&(A9=MutationObserver),typeof performance<"u"&&(T9=performance)}catch{}var{userAgent:r9=""}=u8.navigator||{},A2=u8,wt=z9,o9=A9,Nc=T9,yk=!!A2.document,X1=!!wt.documentElement&&!!wt.head&&typeof wt.addEventListener=="function"&&typeof wt.createElement=="function",D9=~r9.indexOf("MSIE")||~r9.indexOf("Trident/"),zt="classic",I9="duotone",wn="sharp",En="sharp-duotone",fb=[zt,I9,wn,En],db={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},c9={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},hb=["kit"],pb=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,mb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,gb={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Mb={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},vb={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},yb={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},xb={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Cb={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},N9={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},_b=["solid","regular","light","thin","duotone","brands"],R9=[1,2,3,4,5,6,7,8,9,10],Lb=R9.concat([11,12,13,14,15,16,17,18,19,20]),r0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bb=[...Object.keys(yb),..._b,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",r0.GROUP,r0.SWAP_OPACITY,r0.PRIMARY,r0.SECONDARY].concat(R9.map(t=>"".concat(t,"x"))).concat(Lb.map(t=>"w-".concat(t))),Sb={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},wb={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Eb={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},a9={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$1="___FONT_AWESOME___",Y6=16,P9="fa",O9="svg-inline--fa",yi="data-fa-i2svg",Z6="data-fa-pseudo-element",zb="data-fa-pseudo-element-pending",f8="data-prefix",d8="data-icon",l9="fontawesome-i2svg",Ab="async",Tb=["HTML","HEAD","STYLE","SCRIPT"],F9=(()=>{try{return!0}catch{return!1}})(),k9=[zt,wn,En];function f0(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[zt]}})}var U9=V({},N9);U9[zt]=V(V(V({},N9[zt]),c9.kit),c9["kit-duotone"]);var Mi=f0(U9),J6=V({},Cb);J6[zt]=V(V(V({},J6[zt]),a9.kit),a9["kit-duotone"]);var l0=f0(J6),K6=V({},xb);K6[zt]=V(V({},K6[zt]),Eb.kit);var vi=f0(K6),Q6=V({},vb);Q6[zt]=V(V({},Q6[zt]),wb.kit);var Db=f0(Q6),Ib=pb,B9="fa-layers-text",Nb=mb,Rb=V({},db),xk=f0(Rb),Pb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W6=r0,Ns=new Set;Object.keys(l0[zt]).map(Ns.add.bind(Ns));Object.keys(l0[wn]).map(Ns.add.bind(Ns));Object.keys(l0[En]).map(Ns.add.bind(Ns));var Ob=[...hb,...bb],c0=A2.FontAwesomeConfig||{};function Fb(t){var e=wt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function kb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}wt&&typeof wt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e,s=kb(Fb(n));s!=null&&(c0[i]=s)});var V9={styleDefault:"solid",familyDefault:"classic",cssPrefix:P9,replacementClass:O9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};c0.familyPrefix&&(c0.cssPrefix=c0.familyPrefix);var Rs=V(V({},V9),c0);Rs.autoReplaceSvg||(Rs.observeMutations=!1);var ve={};Object.keys(V9).forEach(t=>{Object.defineProperty(ve,t,{enumerable:!0,set:function(e){Rs[t]=e,a0.forEach(n=>n(ve))},get:function(){return Rs[t]}})});Object.defineProperty(ve,"familyPrefix",{enumerable:!0,set:function(t){Rs.cssPrefix=t,a0.forEach(e=>e(ve))},get:function(){return Rs.cssPrefix}});A2.FontAwesomeConfig=ve;var a0=[];function Ub(t){return a0.push(t),()=>{a0.splice(a0.indexOf(t),1)}}var E2=Y6,v1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bb(t){if(!t||!X1)return;let e=wt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let n=wt.head.childNodes,i=null;for(let s=n.length-1;s>-1;s--){let r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return wt.head.insertBefore(e,i),t}var Vb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function u0(){let t=12,e="";for(;t-- >0;)e+=Vb[Math.random()*62|0];return e}function Ps(t){let e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function h8(t){return t.classList?Ps(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function H9(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hb(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(H9(t[n]),'" '),"").trim()}function kc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function p8(t){return t.size!==v1.size||t.x!==v1.x||t.y!==v1.y||t.rotate!==v1.rotate||t.flipX||t.flipY}function Gb(t){let{transform:e,containerWidth:n,iconWidth:i}=t,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),a={transform:"".concat(r," ").concat(o," ").concat(c)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:a,path:l}}function Wb(t){let{transform:e,width:n=Y6,height:i=Y6,startCentered:s=!1}=t,r="";return s&&D9?r+="translate(".concat(e.x/E2-n/2,"em, ").concat(e.y/E2-i/2,"em) "):s?r+="translate(calc(-50% + ".concat(e.x/E2,"em), calc(-50% + ").concat(e.y/E2,"em)) "):r+="translate(".concat(e.x/E2,"em, ").concat(e.y/E2,"em) "),r+="scale(".concat(e.size/E2*(e.flipX?-1:1),", ").concat(e.size/E2*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var jb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function G9(){let t=P9,e=O9,n=ve.cssPrefix,i=ve.replacementClass,s=jb;if(n!==t||i!==e){let r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(i))}return s}var u9=!1;function j6(){ve.autoAddCss&&!u9&&(Bb(G9()),u9=!0)}var $b={mixout(){return{dom:{css:G9,insertCss:j6}}},hooks(){return{beforeDOMElementCreation(){j6()},beforeI2svg(){j6()}}}},q1=A2||{};q1[$1]||(q1[$1]={});q1[$1].styles||(q1[$1].styles={});q1[$1].hooks||(q1[$1].hooks={});q1[$1].shims||(q1[$1].shims=[]);var y1=q1[$1],W9=[],j9=function(){wt.removeEventListener("DOMContentLoaded",j9),Oc=1,W9.map(t=>t())},Oc=!1;X1&&(Oc=(wt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(wt.readyState),Oc||wt.addEventListener("DOMContentLoaded",j9));function qb(t){X1&&(Oc?setTimeout(t,0):W9.push(t))}function d0(t){let{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?H9(t):"<".concat(e," ").concat(Hb(n),">").concat(i.map(d0).join(""),"</").concat(e,">")}function f9(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xb=function(e,n){return function(i,s,r,o){return e.call(n,i,s,r,o)}},$6=function(e,n,i,s){var r=Object.keys(e),o=r.length,c=s!==void 0?Xb(n,s):n,a,l,u;for(i===void 0?(a=1,u=e[r[0]]):(a=0,u=i);a<o;a++)l=r[a],u=c(u,e[l],l,e);return u};function Yb(t){let e=[],n=0,i=t.length;for(;n<i;){let s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){let r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function e8(t){let e=Yb(t);return e.length===1?e[0].toString(16):null}function Zb(t,e){let n=t.length,i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function d9(t){return Object.keys(t).reduce((e,n)=>{let i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function t8(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:i=!1}=n,s=d9(e);typeof y1.hooks.addPack=="function"&&!i?y1.hooks.addPack(t,d9(e)):y1.styles[t]=V(V({},y1.styles[t]||{}),s),t==="fas"&&t8("fa",e)}var{styles:gi,shims:Jb}=y1,Kb={[zt]:Object.values(vi[zt]),[wn]:Object.values(vi[wn]),[En]:Object.values(vi[En])},m8=null,$9={},q9={},X9={},Y9={},Z9={},Qb={[zt]:Object.keys(Mi[zt]),[wn]:Object.keys(Mi[wn]),[En]:Object.keys(Mi[En])};function eS(t){return~Ob.indexOf(t)}function tS(t,e){let n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!eS(s)?s:null}var J9=()=>{let t=i=>$6(gi,(s,r,o)=>(s[o]=$6(r,i,{}),s),{});$9=t((i,s,r)=>(s[3]&&(i[s[3]]=r),s[2]&&s[2].filter(c=>typeof c=="number").forEach(c=>{i[c.toString(16)]=r}),i)),q9=t((i,s,r)=>(i[r]=r,s[2]&&s[2].filter(c=>typeof c=="string").forEach(c=>{i[c]=r}),i)),Z9=t((i,s,r)=>{let o=s[2];return i[r]=r,o.forEach(c=>{i[c]=r}),i});let e="far"in gi||ve.autoFetchSvg,n=$6(Jb,(i,s)=>{let r=s[0],o=s[1],c=s[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(i.names[r]={prefix:o,iconName:c}),typeof r=="number"&&(i.unicodes[r.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});X9=n.names,Y9=n.unicodes,m8=Uc(ve.styleDefault,{family:ve.familyDefault})};Ub(t=>{m8=Uc(t.styleDefault,{family:ve.familyDefault})});J9();function g8(t,e){return($9[t]||{})[e]}function nS(t,e){return(q9[t]||{})[e]}function z2(t,e){return(Z9[t]||{})[e]}function K9(t){return X9[t]||{prefix:null,iconName:null}}function iS(t){let e=Y9[t],n=g8("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function T2(){return m8}var M8=()=>({prefix:null,iconName:null,rest:[]});function Uc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=zt}=e,i=Mi[n][t],s=l0[n][t]||l0[n][i],r=t in y1.styles?t:null;return s||r||null}var sS={[zt]:Object.keys(vi[zt]),[wn]:Object.keys(vi[wn]),[En]:Object.keys(vi[En])};function Bc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,i={[zt]:"".concat(ve.cssPrefix,"-").concat(zt),[wn]:"".concat(ve.cssPrefix,"-").concat(wn),[En]:"".concat(ve.cssPrefix,"-").concat(En)},s=null,r=zt,o=fb.filter(a=>a!==I9);o.forEach(a=>{(t.includes(i[a])||t.some(l=>sS[a].includes(l)))&&(r=a)});let c=t.reduce((a,l)=>{let u=tS(ve.cssPrefix,l);if(gi[l]?(l=Kb[r].includes(l)?Db[r][l]:l,s=l,a.prefix=l):Qb[r].indexOf(l)>-1?(s=l,a.prefix=Uc(l,{family:r})):u?a.iconName=u:l!==ve.replacementClass&&!o.some(f=>l===i[f])&&a.rest.push(l),!n&&a.prefix&&a.iconName){let f=s==="fa"?K9(a.iconName):{},d=z2(a.prefix,a.iconName);f.prefix&&(s=null),a.iconName=f.iconName||d||a.iconName,a.prefix=f.prefix||a.prefix,a.prefix==="far"&&!gi.far&&gi.fas&&!ve.autoFetchSvg&&(a.prefix="fas")}return a},M8());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&r===wn&&(gi.fass||ve.autoFetchSvg)&&(c.prefix="fass",c.iconName=z2(c.prefix,c.iconName)||c.iconName),!c.prefix&&r===En&&(gi.fasds||ve.autoFetchSvg)&&(c.prefix="fasds",c.iconName=z2(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=T2()||"fas"),c}var n8=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];let s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(r=>{this.definitions[r]=V(V({},this.definitions[r]||{}),s[r]),t8(r,s[r]);let o=vi[zt][r];o&&t8(o,s[r]),J9()})}reset(){this.definitions={}}_pullDefinitions(e,n){let i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(s=>{let{prefix:r,iconName:o,icon:c}=i[s],a=c[2];e[r]||(e[r]={}),a.length>0&&a.forEach(l=>{typeof l=="string"&&(e[r][l]=c)}),e[r][o]=c}),e}},h9=[],Ds={},Is={},rS=Object.keys(Is);function oS(t,e){let{mixoutsTo:n}=e;return h9=t,Ds={},Object.keys(Is).forEach(i=>{rS.indexOf(i)===-1&&delete Is[i]}),h9.forEach(i=>{let s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(r=>{typeof s[r]=="function"&&(n[r]=s[r]),typeof s[r]=="object"&&Object.keys(s[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=s[r][o]})}),i.hooks){let r=i.hooks();Object.keys(r).forEach(o=>{Ds[o]||(Ds[o]=[]),Ds[o].push(r[o])})}i.provides&&i.provides(Is)}),n}function i8(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];return(Ds[t]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function xi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(Ds[t]||[]).forEach(r=>{r.apply(null,n)})}function D2(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Is[t]?Is[t].apply(null,e):void 0}function s8(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,n=t.prefix||T2();if(e)return e=z2(n,e)||e,f9(Q9.definitions,n,e)||f9(y1.styles,n,e)}var Q9=new n8,cS=()=>{ve.autoReplaceSvg=!1,ve.observeMutations=!1,xi("noAuto")},aS={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X1?(xi("beforeI2svg",t),D2("pseudoElements2svg",t),D2("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;ve.autoReplaceSvg===!1&&(ve.autoReplaceSvg=!0),ve.observeMutations=!0,qb(()=>{uS({autoReplaceSvgRoot:e}),xi("watch",t)})}},lS={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z2(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Uc(t[0]);return{prefix:n,iconName:z2(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ve.cssPrefix,"-"))>-1||t.match(Ib))){let e=Bc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||T2(),iconName:z2(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=T2();return{prefix:e,iconName:z2(e,t)||t}}}},zn={noAuto:cS,config:ve,dom:aS,parse:lS,library:Q9,findIconDefinition:s8,toHtml:d0},uS=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=wt}=t;(Object.keys(y1.styles).length>0||ve.autoFetchSvg)&&X1&&ve.autoReplaceSvg&&zn.dom.i2svg({node:e})};function Vc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>d0(n))}}),Object.defineProperty(t,"node",{get:function(){if(!X1)return;let n=wt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function fS(t){let{children:e,main:n,mask:i,attributes:s,styles:r,transform:o}=t;if(p8(o)&&n.found&&!i.found){let{width:c,height:a}=n,l={x:c/a/2,y:.5};s.style=kc(He(V({},r),{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function dS(t){let{prefix:e,iconName:n,children:i,attributes:s,symbol:r}=t,o=r===!0?"".concat(e,"-").concat(ve.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:He(V({},s),{id:o}),children:i}]}]}function v8(t){let{icons:{main:e,mask:n},prefix:i,iconName:s,transform:r,symbol:o,title:c,maskId:a,titleId:l,extra:u,watchable:f=!1}=t,{width:d,height:p}=n.found?n:e,g=i==="fak",v=[ve.replacementClass,s?"".concat(ve.cssPrefix,"-").concat(s):""].filter(D=>u.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(u.classes).join(" "),m={children:[],attributes:He(V({},u.attributes),{"data-prefix":i,"data-icon":s,class:v,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)})},h=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};f&&(m.attributes[yi]=""),c&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(l||u0())},children:[c]}),delete m.attributes.title);let S=He(V({},m),{prefix:i,iconName:s,main:e,mask:n,maskId:a,transform:r,symbol:o,styles:V(V({},h),u.styles)}),{children:b,attributes:C}=n.found&&e.found?D2("generateAbstractMask",S)||{children:[],attributes:{}}:D2("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=b,S.attributes=C,o?dS(S):fS(S)}function p9(t){let{content:e,width:n,height:i,transform:s,title:r,extra:o,watchable:c=!1}=t,a=He(V(V({},o.attributes),r?{title:r}:{}),{class:o.classes.join(" ")});c&&(a[yi]="");let l=V({},o.styles);p8(s)&&(l.transform=Wb({transform:s,startCentered:!0,width:n,height:i}),l["-webkit-transform"]=l.transform);let u=kc(l);u.length>0&&(a.style=u);let f=[];return f.push({tag:"span",attributes:a,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function hS(t){let{content:e,title:n,extra:i}=t,s=He(V(V({},i.attributes),n?{title:n}:{}),{class:i.classes.join(" ")}),r=kc(i.styles);r.length>0&&(s.style=r);let o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:q6}=y1;function r8(t){let e=t[0],n=t[1],[i]=t.slice(4),s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(ve.cssPrefix,"-").concat(W6.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ve.cssPrefix,"-").concat(W6.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(ve.cssPrefix,"-").concat(W6.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}var pS={found:!1,width:512,height:512};function mS(t,e){!F9&&!ve.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function o8(t,e){let n=e;return e==="fa"&&ve.styleDefault!==null&&(e=T2()),new Promise((i,s)=>{if(n==="fa"){let r=K9(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&q6[e]&&q6[e][t]){let r=q6[e][t];return i(r8(r))}mS(t,e),i(He(V({},pS),{icon:ve.showMissingIcons&&t?D2("missingIconAbstract")||{}:{}}))})}var m9=()=>{},c8=ve.measurePerformance&&Nc&&Nc.mark&&Nc.measure?Nc:{mark:m9,measure:m9},o0='FA "6.6.0"',gS=t=>(c8.mark("".concat(o0," ").concat(t," begins")),()=>ep(t)),ep=t=>{c8.mark("".concat(o0," ").concat(t," ends")),c8.measure("".concat(o0," ").concat(t),"".concat(o0," ").concat(t," begins"),"".concat(o0," ").concat(t," ends"))},y8={begin:gS,end:ep},Rc=()=>{};function g9(t){return typeof(t.getAttribute?t.getAttribute(yi):null)=="string"}function MS(t){let e=t.getAttribute?t.getAttribute(f8):null,n=t.getAttribute?t.getAttribute(d8):null;return e&&n}function vS(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ve.replacementClass)}function yS(){return ve.autoReplaceSvg===!0?Pc.replace:Pc[ve.autoReplaceSvg]||Pc.replace}function xS(t){return wt.createElementNS("http://www.w3.org/2000/svg",t)}function CS(t){return wt.createElement(t)}function tp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=t.tag==="svg"?xS:CS}=e;if(typeof t=="string")return wt.createTextNode(t);let i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){i.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){i.appendChild(tp(r,{ceFn:n}))}),i}function _S(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pc={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(tp(n),e)}),e.getAttribute(yi)===null&&ve.keepOriginalSource){let n=wt.createComment(_S(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){let e=t[0],n=t[1];if(~h8(e).indexOf(ve.replacementClass))return Pc.replace(t);let i=new RegExp("".concat(ve.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let r=n[0].attributes.class.split(" ").reduce((o,c)=>(c===ve.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}let s=n.map(r=>d0(r)).join(`
`);e.setAttribute(yi,""),e.innerHTML=s}};function M9(t){t()}function np(t,e){let n=typeof e=="function"?e:Rc;if(t.length===0)n();else{let i=M9;ve.mutateApproach===Ab&&(i=A2.requestAnimationFrame||M9),i(()=>{let s=yS(),r=y8.begin("mutate");t.map(s),r(),n()})}}var x8=!1;function ip(){x8=!0}function a8(){x8=!1}var Fc=null;function v9(t){if(!o9||!ve.observeMutations)return;let{treeCallback:e=Rc,nodeCallback:n=Rc,pseudoElementsCallback:i=Rc,observeMutationsRoot:s=wt}=t;Fc=new o9(r=>{if(x8)return;let o=T2();Ps(r).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!g9(c.addedNodes[0])&&(ve.searchPseudoElements&&i(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&ve.searchPseudoElements&&i(c.target.parentNode),c.type==="attributes"&&g9(c.target)&&~Pb.indexOf(c.attributeName))if(c.attributeName==="class"&&MS(c.target)){let{prefix:a,iconName:l}=Bc(h8(c.target));c.target.setAttribute(f8,a||o),l&&c.target.setAttribute(d8,l)}else vS(c.target)&&n(c.target)})}),X1&&Fc.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function LS(){Fc&&Fc.disconnect()}function bS(t){let e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((i,s)=>{let r=s.split(":"),o=r[0],c=r.slice(1);return o&&c.length>0&&(i[o]=c.join(":").trim()),i},{})),n}function SS(t){let e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=Bc(h8(t));return s.prefix||(s.prefix=T2()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=nS(s.prefix,t.innerText)||g8(s.prefix,e8(t.innerText))),!s.iconName&&ve.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function wS(t){let e=Ps(t.attributes).reduce((s,r)=>(s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return ve.autoA11y&&(n?e["aria-labelledby"]="".concat(ve.replacementClass,"-title-").concat(i||u0()):(e["aria-hidden"]="true",e.focusable="false")),e}function ES(){return{iconName:null,title:null,titleId:null,prefix:null,transform:v1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function y9(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:i,rest:s}=SS(t),r=wS(t),o=i8("parseNodeAttributes",{},t),c=e.styleParser?bS(t):[];return V({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:v1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:r}},o)}var{styles:zS}=y1;function sp(t){let e=ve.autoReplaceSvg==="nest"?y9(t,{styleParser:!1}):y9(t);return~e.extra.classes.indexOf(B9)?D2("generateLayersText",t,e):D2("generateSvgReplacementMutation",t,e)}var x1=new Set;k9.map(t=>{x1.add("fa-".concat(t))});Object.keys(Mi[zt]).map(x1.add.bind(x1));Object.keys(Mi[wn]).map(x1.add.bind(x1));Object.keys(Mi[En]).map(x1.add.bind(x1));x1=[...x1];function x9(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X1)return Promise.resolve();let n=wt.documentElement.classList,i=u=>n.add("".concat(l9,"-").concat(u)),s=u=>n.remove("".concat(l9,"-").concat(u)),r=ve.autoFetchSvg?x1:k9.map(u=>"fa-".concat(u)).concat(Object.keys(zS));r.includes("fa")||r.push("fa");let o=[".".concat(B9,":not([").concat(yi,"])")].concat(r.map(u=>".".concat(u,":not([").concat(yi,"])"))).join(", ");if(o.length===0)return Promise.resolve();let c=[];try{c=Ps(t.querySelectorAll(o))}catch{}if(c.length>0)i("pending"),s("complete");else return Promise.resolve();let a=y8.begin("onTree"),l=c.reduce((u,f)=>{try{let d=sp(f);d&&u.push(d)}catch(d){F9||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(l).then(d=>{np(d,()=>{i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),a(),u()})}).catch(d=>{a(),f(d)})})}function AS(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sp(t).then(n=>{n&&np([n],e)})}function TS(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:s8(e||{}),{mask:s}=n;return s&&(s=(s||{}).icon?s:s8(s||{})),t(i,He(V({},n),{mask:s}))}}var DS=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=v1,symbol:i=!1,mask:s=null,maskId:r=null,title:o=null,titleId:c=null,classes:a=[],attributes:l={},styles:u={}}=e;if(!t)return;let{prefix:f,iconName:d,icon:p}=t;return Vc(V({type:"icon"},t),()=>(xi("beforeDOMElementCreation",{iconDefinition:t,params:e}),ve.autoA11y&&(o?l["aria-labelledby"]="".concat(ve.replacementClass,"-title-").concat(c||u0()):(l["aria-hidden"]="true",l.focusable="false")),v8({icons:{main:r8(p),mask:s?r8(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:V(V({},v1),n),symbol:i,title:o,maskId:r,titleId:c,extra:{attributes:l,styles:u,classes:a}})))},IS={mixout(){return{icon:TS(DS)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=x9,t.nodeCallback=AS,t}}},provides(t){t.i2svg=function(e){let{node:n=wt,callback:i=()=>{}}=e;return x9(n,i)},t.generateSvgReplacementMutation=function(e,n){let{iconName:i,title:s,titleId:r,prefix:o,transform:c,symbol:a,mask:l,maskId:u,extra:f}=n;return new Promise((d,p)=>{Promise.all([o8(i,o),l.iconName?o8(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[v,m]=g;d([e,v8({icons:{main:v,mask:m},prefix:o,iconName:i,transform:c,symbol:a,maskId:u,title:s,titleId:r,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:s,transform:r,styles:o}=e,c=kc(o);c.length>0&&(i.style=c);let a;return p8(r)&&(a=D2("generateAbstractTransformGrouping",{main:s,transform:r,containerWidth:s.width,iconWidth:s.width})),n.push(a||s.icon),{children:n,attributes:i}}}},NS={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return Vc({type:"layer"},()=>{xi("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(s=>{Array.isArray(s)?s.map(r=>{i=i.concat(r.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ve.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},RS={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:i=[],attributes:s={},styles:r={}}=e;return Vc({type:"counter",content:t},()=>(xi("beforeDOMElementCreation",{content:t,params:e}),hS({content:t.toString(),title:n,extra:{attributes:s,styles:r,classes:["".concat(ve.cssPrefix,"-layers-counter"),...i]}})))}}}},PS={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=v1,title:i=null,classes:s=[],attributes:r={},styles:o={}}=e;return Vc({type:"text",content:t},()=>(xi("beforeDOMElementCreation",{content:t,params:e}),p9({content:t,transform:V(V({},v1),n),title:i,extra:{attributes:r,styles:o,classes:["".concat(ve.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){let{title:i,transform:s,extra:r}=n,o=null,c=null;if(D9){let a=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();o=l.width/a,c=l.height/a}return ve.autoA11y&&!i&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,p9({content:e.innerHTML,width:o,height:c,transform:s,title:i,extra:r,watchable:!0})])}}},OS=new RegExp('"',"ug"),C9=[1105920,1112319],_9=V(V(V({FontAwesome:{normal:"fas",400:"fas"}},Mb),gb),Sb),l8=Object.keys(_9).reduce((t,e)=>(t[e.toLowerCase()]=_9[e],t),{}),FS=Object.keys(l8).reduce((t,e)=>{let n=l8[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function kS(t){let e=t.replace(OS,""),n=Zb(e,0),i=n>=C9[0]&&n<=C9[1],s=e.length===2?e[0]===e[1]:!1;return{value:e8(s?e[0]:e),isSecondary:i||s}}function US(t,e){let n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),s=isNaN(i)?"normal":i;return(l8[n]||{})[s]||FS[n]}function L9(t,e){let n="".concat(zb).concat(e.replace(":","-"));return new Promise((i,s)=>{if(t.getAttribute(n)!==null)return i();let o=Ps(t.children).filter(d=>d.getAttribute(Z6)===e)[0],c=A2.getComputedStyle(t,e),a=c.getPropertyValue("font-family"),l=a.match(Nb),u=c.getPropertyValue("font-weight"),f=c.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&f!=="none"&&f!==""){let d=c.getPropertyValue("content"),p=US(a,u),{value:g,isSecondary:v}=kS(d),m=l[0].startsWith("FontAwesome"),h=g8(p,g),S=h;if(m){let b=iS(g);b.iconName&&b.prefix&&(h=b.iconName,p=b.prefix)}if(h&&!v&&(!o||o.getAttribute(f8)!==p||o.getAttribute(d8)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);let b=ES(),{extra:C}=b;C.attributes[Z6]=e,o8(h,p).then(D=>{let z=v8(He(V({},b),{icons:{main:D,mask:M8()},prefix:p,iconName:S,extra:C,watchable:!0})),w=wt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=z.map(R=>d0(R)).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function BS(t){return Promise.all([L9(t,"::before"),L9(t,"::after")])}function VS(t){return t.parentNode!==document.head&&!~Tb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Z6)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function b9(t){if(X1)return new Promise((e,n)=>{let i=Ps(t.querySelectorAll("*")).filter(VS).map(BS),s=y8.begin("searchPseudoElements");ip(),Promise.all(i).then(()=>{s(),a8(),e()}).catch(()=>{s(),a8(),n()})})}var HS={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=b9,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:n=wt}=e;ve.searchPseudoElements&&b9(n)}}},S9=!1,GS={mixout(){return{dom:{unwatch(){ip(),S9=!0}}}},hooks(){return{bootstrap(){v9(i8("mutationObserverCallbacks",{}))},noAuto(){LS()},watch(t){let{observeMutationsRoot:e}=t;S9?a8():v9(i8("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},w9=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{let s=i.toLowerCase().split("-"),r=s[0],o=s.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},WS={mixout(){return{parse:{transform:t=>w9(t)}}},hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-transform");return n&&(t.transform=w9(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:s,iconWidth:r}=e,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),a="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(c," ").concat(a," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")},d={outer:o,inner:u,path:f};return{tag:"g",attributes:V({},d.outer),children:[{tag:"g",attributes:V({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:V(V({},n.icon.attributes),d.path)}]}]}}}},X6={x:0,y:0,width:"100%",height:"100%"};function E9(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jS(t){return t.tag==="g"?t.children:[t]}var $S={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-mask"),i=n?Bc(n.split(" ").map(s=>s.trim())):M8();return i.prefix||(i.prefix=T2()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:s,mask:r,maskId:o,transform:c}=e,{width:a,icon:l}=s,{width:u,icon:f}=r,d=Gb({transform:c,containerWidth:u,iconWidth:a}),p={tag:"rect",attributes:He(V({},X6),{fill:"white"})},g=l.children?{children:l.children.map(E9)}:{},v={tag:"g",attributes:V({},d.inner),children:[E9(V({tag:l.tag,attributes:V(V({},l.attributes),d.path)},g))]},m={tag:"g",attributes:V({},d.outer),children:[v]},h="mask-".concat(o||u0()),S="clip-".concat(o||u0()),b={tag:"mask",attributes:He(V({},X6),{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:jS(f)},b]};return n.push(C,{tag:"rect",attributes:V({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(h,")")},X6)}),{children:n,attributes:i}}}},qS={provides(t){let e=!1;A2.matchMedia&&(e=A2.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let n=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:He(V({},i),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=He(V({},s),{attributeName:"opacity"}),o={tag:"circle",attributes:He(V({},i),{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:He(V({},s),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:He(V({},r),{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:He(V({},i),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:He(V({},r),{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:He(V({},i),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:He(V({},r),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},XS={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},YS=[$b,IS,NS,RS,PS,HS,GS,WS,$S,qS,XS];oS(YS,{mixoutsTo:zn});var Ck=zn.noAuto,_k=zn.config,Lk=zn.library,bk=zn.dom,rp=zn.parse,Sk=zn.findIconDefinition,wk=zn.toHtml,op=zn.icon,Ek=zn.layer,ZS=zn.text,JS=zn.counter;var KS=["*"],QS=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},ew=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},tw=t=>{let e={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:t.rotate!==null,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n)},nw=t=>t.prefix!==void 0&&t.iconName!==void 0,iw=(t,e)=>nw(t)?t:typeof t=="string"?{prefix:e,iconName:t}:{prefix:t[0],iconName:t[1]},sw=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),rw=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...i){for(let s of i){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let r of s.icon[2])typeof r=="string"&&(this.definitions[s.prefix][r]=s)}}addIconPacks(...i){for(let s of i){let r=Object.keys(s).map(o=>s[o]);this.addIcons(...r)}}getIconDefinition(i,s){return i in this.definitions&&s in this.definitions[i]?this.definitions[i][s]:null}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=Le({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ow=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(i){if("size"in i)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(s){return new(s||e)},e.\u0275dir=Lr({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[g2]});let t=e;return t})(),cw=(()=>{let e=class e{constructor(i,s){this.renderer=i,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(i){"size"in i&&(i.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${i.size.currentValue}`),i.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${i.size.previousValue}`))}};e.\u0275fac=function(s){return new(s||e)(n1(zr),n1(U1))},e.\u0275cmp=Vt({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[g2,Dr],ngContentSelectors:KS,decls:1,vars:0,template:function(s,r){s&1&&(Rd(),Pd(0))},encapsulation:2});let t=e;return t})(),Hc=(()=>{let e=class e{set spin(i){this.animation=i?"spin":void 0}set pulse(i){this.animation=i?"spin-pulse":void 0}constructor(i,s,r,o,c){this.sanitizer=i,this.config=s,this.iconLibrary=r,this.stackItem=o,this.classes=[],c!=null&&o==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(i){if(this.icon==null&&this.config.fallbackIcon==null){ew();return}if(i){let s=this.icon!=null?this.icon:this.config.fallbackIcon,r=this.findIconDefinition(s);if(r!=null){let o=this.buildParams();this.renderIcon(r,o)}}}render(){this.ngOnChanges({})}findIconDefinition(i){let s=iw(i,this.config.defaultPrefix);if("icon"in s)return s;let r=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return r??(QS(s),null)}buildParams(){let i={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?rp.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:[...tw(i),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(i,s){let r=op(i,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}};e.\u0275fac=function(s){return new(s||e)(n1(n6),n1(sw),n1(rw),n1(ow,8),n1(cw,8))},e.\u0275cmp=Vt({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,r){s&2&&(Pl("innerHTML",r.renderedIconHTML,q7),nc("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[g2,Dr],decls:0,vars:0,template:function(s,r){},encapsulation:2});let t=e;return t})();var cp=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=Cn({type:e}),e.\u0275inj=xn({});let t=e;return t})();var aw=["ulElement"],lp=(()=>{let e=class e{constructor(){this.isMenuOpen=!1,this.faBars=G6,this.faXmark=i9,this.menuIcon=G6,this.faLocationDot=Ic}toggleFunc(){console.log("hello"),this.isMenuOpen=!this.isMenuOpen,this.isMenuOpen?(this.menuIcon=this.faXmark,this.ulElement.nativeElement.classList.add("showDropDown"),console.log(this.ulElement.nativeElement)):(this.menuIcon=this.faBars,this.ulElement.nativeElement.classList.remove("showDropDown"),console.log(this.ulElement.nativeElement))}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=Vt({type:e,selectors:[["app-navigation-bar"]],viewQuery:function(s,r){if(s&1&&ic(aw,5),s&2){let o;Ar(o=Tr())&&(r.ulElement=o.first)}},decls:30,vars:2,consts:[["ulElement",""],[1,"navbar"],[1,"logo"],["href","#"],[1,"links"],["href","#home",1,"act",3,"click"],["href","#Products",3,"click"],["href","#services",3,"click"],["href","#contact",3,"click"],[1,"locli"],["href","https://maps.app.goo.gl/REYegu4jEJEBAE7K9","target","_blank",3,"click"],[1,"loc_link"],[1,"button",2,"--clr","#000000"],[1,"button-decor"],[1,"button-content"],[1,"button__icon"],["id","locsvg"],[1,"locIcon","text-white",3,"icon"],[1,"button__text"],[1,"menuIcon",3,"click","icon"]],template:function(s,r){if(s&1){let o=Nd();ee(0,"div",1)(1,"div",2)(2,"a",3),Ie(3,"LeepWood Furniture"),ie()(),ee(4,"ul",4,0)(6,"li")(7,"a",5),G1("click",function(){return ci(o),ai(r.toggleFunc())}),Ie(8,"Home"),ie()(),ee(9,"li")(10,"a",6),G1("click",function(){return ci(o),ai(r.toggleFunc())}),Ie(11,"Products"),ie()(),ee(12,"li")(13,"a",7),G1("click",function(){return ci(o),ai(r.toggleFunc())}),Ie(14,"Services"),ie()(),ee(15,"li")(16,"a",8),G1("click",function(){return ci(o),ai(r.toggleFunc())}),Ie(17,"ContactUs"),ie()(),ee(18,"li",9)(19,"a",10),G1("click",function(){return ci(o),ai(r.toggleFunc())}),ee(20,"div",11)(21,"button",12),_e(22,"span",13),ee(23,"div",14)(24,"div",15)(25,"span",16),_e(26,"fa-icon",17),ie()(),ee(27,"span",18),Ie(28,"Visit Now"),ie()()()()()()(),ee(29,"fa-icon",19),G1("click",function(){return ci(o),ai(r.toggleFunc())}),ie()()}s&2&&(_2(26),H1("icon",r.faLocationDot),_2(3),H1("icon",r.menuIcon))},dependencies:[Hc],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Open Sans,sans-serif}.navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;background-color:#090332;color:#fff;height:10vh}.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;transition:height 1s ease,opacity 1s ease}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin-inline:30px;color:#fff;font-size:18px;margin-right:11px}.logo[_ngcontent-%COMP%]{margin:auto auto auto 12px;font-size:18px;white-space:nowrap}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .act[_ngcontent-%COMP%]{color:#f7ffea;border-bottom:2px solid #c7efff}.menuIcon[_ngcontent-%COMP%]{align-items:center;font-size:30px;margin-right:12px;display:none}#locsvg[_ngcontent-%COMP%]{margin-left:4px;margin-bottom:5px}#loctext[_ngcontent-%COMP%]{font-size:18px}.locIcon[_ngcontent-%COMP%]{font-size:20px;margin-right:5px;margin-bottom:20px}.locMenuli[_ngcontent-%COMP%]{background-color:#fff;height:33px;border-bottom-right-radius:6px;border-top-left-radius:6px;margin-right:6px}#locMenu[_ngcontent-%COMP%]{background-color:#f36944;font-family:Manrope,sans-serif;font-weight:600;height:30px;color:#000;margin-right:3px}#locMenu[_ngcontent-%COMP%]:hover{border-right:4px solid black;border-bottom:4px solid black}a[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{text-decoration:none;line-height:1;border-radius:1.5rem;overflow:hidden;position:relative;box-shadow:10px 10px 20px #0000000d;background-color:#fff;color:#121212;border:none;cursor:pointer;width:100%;margin:auto;box-shadow:12px 17px 51px #00000038}.button-decor[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#f55555;transform:translate(-100%);transition:transform .5s;z-index:0}.button-content[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:600;position:relative;overflow:hidden}.button__icon[_ngcontent-%COMP%]{width:48px;height:40px;background-color:#ff5132;display:grid;place-items:center;border-right:2px solid black}.button__text[_ngcontent-%COMP%]{display:inline-block;transition:color .2s;padding:2px 1.5rem 2px .75rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:150px}.button[_ngcontent-%COMP%]:hover   .button__text[_ngcontent-%COMP%]{color:#fff}.button[_ngcontent-%COMP%]:hover   .button-decor[_ngcontent-%COMP%]{transform:translate(0)}@media (max-width: 820px){.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;opacity:0;height:0;visibility:hidden;overflow:hidden;transition:height 1s ease,opacity 5s ease-out 2s ease-in,visibility 1s ease}.navbar[_ngcontent-%COMP%]   ul.showDropDown[_ngcontent-%COMP%]{opacity:1;visibility:visible;display:flex;flex-direction:column;color:#fff;justify-content:center;align-items:center;position:absolute;top:60px;background-color:#090332;width:100%;text-align:center;padding:0;gap:22px;height:300px;margin:0}.menuIcon[_ngcontent-%COMP%]{opacity:100;transform:scale(1);transition:opacity .5s ease,transform .5s ease}.menuIcon[_ngcontent-%COMP%]{display:flex}.locMenu[_ngcontent-%COMP%]{margin-top:0}.locli[_ngcontent-%COMP%]{height:30px;margin:-25px 0 0}}"]});let t=e;return t})();var up=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=Vt({type:e,selectors:[["app-home"]],decls:7,vars:0,consts:[[1,"home-content","ml-auto","mr-auto","mt-0","mb-0","text-black"],[1,"mx-auto","my-0","lg:pt-6","lg:pb-4"],[1,"heading-text","text-center","w-[80vw]","md:w-[720px]","text-3xl","mx-auto","font-bold","pt-10"],[1,"heading-text","text-center","text-wrap","mx-auto","w-[80vw]","md:w-[700px]"],["src","assets/Sofa1-removebg-croped.png",1,"mx-auto","w-[80vw]","mt-5","sm:mt-0","sm:w-[60vw]","sm:h-[30vh]","md:h-[40vh]","md:w-[70vw]","lg:w-[45vw]"]],template:function(s,r){s&1&&(ee(0,"div",0)(1,"div",1)(2,"h1",2),Ie(3,"A New Way To Design Your Home"),ie(),ee(4,"p",3),Ie(5,"Our crafted furniture pieces, from sofa beds to elegant dining tables, are designed to transform your living space into a haven of comfort and sophistication. "),ie()(),_e(6,"img",4),ie())},styles:['.sofa-img[_ngcontent-%COMP%]{background-image:url("./media/Sofa1-removebg-GLQPZGZ3.png");background-size:cover;background-position:center}.home-content[_ngcontent-%COMP%]{background-color:#c7efff;border-bottom-left-radius:7px;border-bottom-right-radius:7px;border-bottom:1px solid gray}.heading-text[_ngcontent-%COMP%]{font-family:Manrope,sans-serif;font-optical-sizing:auto;font-weight:500;font-style:normal}']});let t=e;return t})();var fp=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=Vt({type:e,selectors:[["app-products"]],decls:118,vars:0,consts:[["id","Products",1,"bg-gradient-to-b","bg-slate-100","pb-5","lg:pb-7"],[1,"font-sans","pt-4","text-center","from-neutral-950","text-5xl"],[1,"flex","flex-col","gap-4","justify-center","mt-6","items-center","lg:flex-row","2xl:gap-10","lg:flex-wrap"],[1,"flex","flex-col","md:flex-row","gap-4","2xl:gap-10"],[1,"card","relative","pb-4","flex","flex-col","text-gray-700","bg-white","shadow-lg","bg-clip-border","rounded-xl","my-4","md:my-0","w-[80vw]","md:w-[40vw]","lg:w-[270px]","2xl:w-[300px]"],[1,"relative","mx-4","mt-4","overflow-hidden","text-gray-700","bg-white","bg-clip-border","rounded-xl","h-[auto]"],["src","assets/products1_jhula.webp","alt","card-image",1,"object-cover","w-[80vw]","md:w-[40vw]","lg:w-[270px]","2xl:w-[300px]","h-[200px]"],[1,"p-6"],[1,"flex","items-center","justify-between","mb-2"],[1,"block","font-sans","text-base","antialiased","font-medium","leading-relaxed","text-blue-gray-900"],[1,"block","font-sans","text-sm","antialiased","font-normal","leading-normal","text-gray-700","opacity-75"],["href","https://wa.me/6354373660?text=Hi,%20I'm%20interested%20in%20the%20Jhulas%20(swings)%20from%20LeepWood%20Furniture.%20Could%20you%20share%20more%20information%20and%20photos%20of%20the%20different%20types%20available%20at%20your%20store%20in%20Sector%2011,%20Gandhinagar?%20Looking%20forward%20to%20your%20response!",1,"whatsapp_msg_link"],[1,"button",2,"--clr","#00ad54"],[1,"button-decor"],[1,"button-content"],[1,"button__icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","25","viewBox","0 0 1219.547 1225.016","id","whatsapp"],["fill","#E0E0E0","d","M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"],["id","a","x1","609.77","x2","609.77","y1","1190.114","y2","21.084","gradientUnits","userSpaceOnUse"],["offset","0","stop-color","#20b038"],["offset","1","stop-color","#60d66a"],["fill","url(#a)","d","M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"],["fill","#FFF","fill-rule","evenodd","d","M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z","clip-rule","evenodd"],["fill","#FFF","d","M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"],[1,"button__text"],[1,"card","relative","pb-4","flex","flex-col","text-gray-700","bg-white","shadow-lg","bg-clip-border","rounded-xl","w-[80vw]","my-4","md:my-0","md:w-[40vw]","lg:w-[270px]","2xl:w-[300px]"],["src","assets/products1_bed.jpg","alt","card-image",1,"object-cover","w-[80vw]","md:w-[40vw]","lg:w-[270px]","2xl:w-[300px]","h-[200px]"],["href","https://wa.me/6354373660?text=Hello,%20I\u2019m%20looking%20for%20a%20new%20bed%20and%20I\u2019m%20interested%20in%20what%20LeepWood%20Furniture%20offers.%20Can%20you%20send%20me%20more%20information%20and%20images%20of%20the%20available%20beds?%20I'd%20appreciate%20your%20help!",1,"whatsapp_msg_link"],["src","assets/products1_Sofa.jpg","alt","card-image",1,"object-cover","w-[80vw]","md:w-[40vw]","lg:w-[270px]","2xl:w-[300px]","h-[200px]"],["href","https://wa.me/6354373660?text=Hello,%20I'm%20interested%20in%20the%20sofas%20available%20at%20LeepWood%20Furniture.%20Could%20you%20please%20provide%20more%20details%20and%20pictures%20of%20the%20different%20styles%20and%20designs%20you%20have%20in%20stock?%20Thank%20you!",1,"whatsapp_msg_link"],["src","assets/products1_otherFurniture.jpg","alt","card-image",1,"object-cover","w-[80vw]","md:w-[40vw]","lg:w-[270px]","2xl:w-[300px]","h-[200px]"],["href","https://wa.me/6354373660?text=Hi,%20I\u2019m%20interested%20in%20your%20collection%20of%20dining%20tables,%20wardrobes,%20and%20other%20furniture.%20Could%20you%20please%20provide%20more%20details%20and%20share%20pictures%20of%20what%20you%20have%20in%20stock%20at%20LeepWood%20Furniture?%20Thanks!",1,"whatsapp_msg_link"]],template:function(s,r){s&1&&(ee(0,"div",0)(1,"h1",1),Ie(2,"Products"),ie(),ee(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),_e(7,"img",6),ie(),ee(8,"div",7)(9,"div",8)(10,"p",9),Ie(11," Jhulas "),ie(),ee(12,"p",9)(13,"small"),Ie(14,"Starting From"),ie(),Ie(15," \u20B922,000 "),ie()(),ee(16,"p",10),Ie(17," Add a traditional touch with our stylish Jhulas, perfect for both indoor and outdoor relaxation. "),ie()(),ee(18,"a",11)(19,"button",12),_e(20,"span",13),ee(21,"div",14)(22,"div",15),v2(),ee(23,"svg",16),_e(24,"path",17),ee(25,"linearGradient",18),_e(26,"stop",19)(27,"stop",20),ie(),_e(28,"path",21)(29,"path",22)(30,"path",23),ie()(),y2(),ee(31,"span",24),Ie(32,"Inquire Now"),ie()()()()(),ee(33,"div",25)(34,"div",5),_e(35,"img",26),ie(),ee(36,"div",7)(37,"div",8)(38,"p",9),Ie(39," Beds "),ie(),ee(40,"p",9)(41,"small"),Ie(42,"Starting From"),ie(),Ie(43," \u20B914,500 "),ie()(),ee(44,"p",10),Ie(45," Discover comfortable and stylish Beds crafted for restful nights and modern bedroom decor. "),ie()(),ee(46,"a",27)(47,"button",12),_e(48,"span",13),ee(49,"div",14)(50,"div",15),v2(),ee(51,"svg",16),_e(52,"path",17),ee(53,"linearGradient",18),_e(54,"stop",19)(55,"stop",20),ie(),_e(56,"path",21)(57,"path",22)(58,"path",23),ie()(),y2(),ee(59,"span",24),Ie(60,"Inquire Now"),ie()()()()()(),ee(61,"div",3)(62,"div",4)(63,"div",5),_e(64,"img",28),ie(),ee(65,"div",7)(66,"div",8)(67,"p",9),Ie(68," Sofas "),ie(),ee(69,"p",9)(70,"small"),Ie(71,"Starting From"),ie(),Ie(72," \u20B912,000 "),ie()(),ee(73,"p",10),Ie(74," Enhance your living space with elegant Sofas, offering both comfort and style for any room. "),ie()(),ee(75,"a",29)(76,"button",12),_e(77,"span",13),ee(78,"div",14)(79,"div",15),v2(),ee(80,"svg",16),_e(81,"path",17),ee(82,"linearGradient",18),_e(83,"stop",19)(84,"stop",20),ie(),_e(85,"path",21)(86,"path",22)(87,"path",23),ie()(),y2(),ee(88,"span",24),Ie(89,"Inquire Now"),ie()()()()(),ee(90,"div",4)(91,"div",5),_e(92,"img",30),ie(),ee(93,"div",7)(94,"div",8)(95,"p",9),Ie(96," Other "),ie(),ee(97,"p",9)(98,"small"),Ie(99,"Starting From"),ie(),Ie(100," \u20B99000 "),ie()(),ee(101,"p",10),Ie(102," Elevate your home with functional Dining Tables, spacious Wardrobes, and furnitures for organized living. "),ie()(),ee(103,"a",31)(104,"button",12),_e(105,"span",13),ee(106,"div",14)(107,"div",15),v2(),ee(108,"svg",16),_e(109,"path",17),ee(110,"linearGradient",18),_e(111,"stop",19)(112,"stop",20),ie(),_e(113,"path",21)(114,"path",22)(115,"path",23),ie()(),y2(),ee(116,"span",24),Ie(117,"Inquire Now"),ie()()()()()()()())},styles:[".card[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.card[_ngcontent-%COMP%]:active{transform:scale(.95) rotate(1.7deg)}.card[_ngcontent-%COMP%]{box-shadow:12px 17px 51px #00000038;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);transition:all .5s}.whatsapp_msg_link[_ngcontent-%COMP%]{margin:auto}a[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{text-decoration:none;line-height:1;border-radius:1.5rem;overflow:hidden;position:relative;box-shadow:10px 10px 20px #0000000d;background-color:#fff;color:#121212;border:none;cursor:pointer;width:100%;margin:auto;box-shadow:12px 17px 51px #00000038}.button-decor[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:var(--clr);transform:translate(-100%);transition:transform .5s;z-index:0}.button-content[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:600;position:relative;overflow:hidden}.button__icon[_ngcontent-%COMP%]{width:48px;height:40px;background-color:var(--clr);display:grid;place-items:center}.button__text[_ngcontent-%COMP%]{display:inline-block;transition:color .2s;padding:2px 1.5rem 2px .75rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:150px}.button[_ngcontent-%COMP%]:hover   .button__text[_ngcontent-%COMP%]{color:#fff}.button[_ngcontent-%COMP%]:hover   .button-decor[_ngcontent-%COMP%]{transform:translate(0)}"]});let t=e;return t})();var dp=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=Vt({type:e,selectors:[["app-services"]],decls:28,vars:0,consts:[["id","services",1,"bg-gradient-to-b","from-[#c7efff]","to-[#e6f2f8]"],[1,"font-sans","pt-4","text-center","text-neutral-950","text-5xl"],[1,"container","flex","flex-col","md:flex-row","overflow-x-scroll","gap-3","2xl:gap-8","w-[80vw]","md:overflow-x-visible","px-0"],[1,"card","overflow-hidden","md:overflow-x-visible","my-4"],[1,"card__image"],["src","assets/Service_photo1.jpg","alt","card-image",1,"object-cover","w-[90%]","h-[200px]","mx-[auto]","mt-4","lg:mt-6"],[1,"card__content","text-black"],[1,"card__title"],[1,"card__describe"],[1,"card","my-4"],["src","assets/Service_photo2.jpg","alt","card-image",1,"object-cover","w-[90%]","h-[200px]","mx-[auto]","mt-4","lg:mt-6"],[1,"card__content"],["src","assets/service_photo3.png","alt","card-image",1,"object-cover","w-[90%]","h-[200px]","mx-[auto]","mt-4","lg:mt-6"]],template:function(s,r){s&1&&(ee(0,"div",0)(1,"h1",1),Ie(2,"Services"),ie(),ee(3,"div",2)(4,"div",3)(5,"div",4),_e(6,"img",5),ie(),ee(7,"div",6)(8,"div",7),Ie(9,"Custom"),ie(),ee(10,"p",8),Ie(11," Handcrafted, made-to-order furniture tailored to your unique design and functional needs. "),ie()()(),ee(12,"div",9)(13,"div",4),_e(14,"img",10),ie(),ee(15,"div",11)(16,"span",7),Ie(17,"At-Home"),ie(),ee(18,"p",8),Ie(19," Skilled furniture crafting and assembly at your home for ease and perfect results. "),ie()()(),ee(20,"div",9)(21,"div",4),_e(22,"img",12),ie(),ee(23,"div",11)(24,"span",7),Ie(25,"Repair"),ie(),ee(26,"p",8),Ie(27," Restore and repair your cherished furniture pieces to their original beauty and functionality. "),ie()()()()())},styles:["#services[_ngcontent-%COMP%]{border-top-left-radius:7px;border-top-right-radius:7px;border-top:1px solid gray}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:12px;gap:20px;margin:auto}.card[_ngcontent-%COMP%]{background-color:#fff;color:#000;border-radius:8px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);transition:all .5s}.card[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.card[_ngcontent-%COMP%]:active{transform:scale(.95) rotate(1.7deg)}img[_ngcontent-%COMP%]{border-radius:8px}.card[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]{border-top-left-radius:8px;border-top-right-radius:8px}.card[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:20px}.card[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__title[_ngcontent-%COMP%]{font-size:25px;text-transform:capitalize}.card[_ngcontent-%COMP%]   .card__content[_ngcontent-%COMP%]   .card__describe[_ngcontent-%COMP%]{font-size:16px}"]});let t=e;return t})();var hp=(()=>{let e=class e{constructor(){this.faLocationDot=Ic,this.faPhone=n9}ngOnInit(){}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=Vt({type:e,selectors:[["app-contact-us"]],decls:67,vars:4,consts:[[1,"h-[auto]","lg:h-[70vh]"],[1,"font-sans","pt-4","text-center","from-neutral-950","text-5xl"],[1,"flex","justify-center","items-center","mt-6","flex-col","lg:flex-row"],[1,"flex","flex-col","md:flex-row","gap-4","flex-wrap"],[1,"card","relative","pb-4","flex","flex-col","text-gray-700","bg-white","shadow-lg","bg-clip-border","rounded-xl","my-4","md:my-0","w-[80vw]","md:w-[40vw]","lg:w-[200px]","2xl:w-[300px]"],[1,"relative","mx-4","mt-4","overflow-hidden","text-gray-700","bg-white","bg-clip-border","rounded-xl","h-[auto]","text-center"],["id","locsvg"],[1,"locIcon","text-black","text-4xl",3,"icon"],[1,"p-6"],[1,"block","font-sans","text-sm","antialiased","font-normal","leading-normal","text-gray-700","opacity-75"],["target","_blank","href","https://maps.app.goo.gl/REYegu4jEJEBAE7K9",1,"whatsapp_msg_link"],[1,"button",2,"--clr","#000000"],[1,"button-decor"],[1,"button-content"],[1,"button__icon"],[1,"locIcon","text-white",3,"icon"],[1,"button__text"],[1,"card","relative","pb-4","flex","flex-col","text-gray-700","bg-white","shadow-lg","bg-clip-border","rounded-xl","my-4","md:my-0","w-[80vw]","md:w-[40vw]","lg:w-[200px]","2xl:w-[300px]","text-center"],["xmlns","http://www.w3.org/2000/svg","width","36","height","36","viewBox","0 0 1219.547 1225.016","id","whatsapp",1,"mx-auto"],["fill","#E0E0E0","d","M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"],["id","a","x1","609.77","x2","609.77","y1","1190.114","y2","21.084","gradientUnits","userSpaceOnUse"],["offset","0","stop-color","#20b038"],["offset","1","stop-color","#60d66a"],["fill","url(#a)","d","M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"],["fill","#FFF","fill-rule","evenodd","d","M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z","clip-rule","evenodd"],["fill","#FFF","d","M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"],[1,"block","font-sans","text-sm","antialiased","font-normal","leading-normal","text-gray-700","opacity-75","h-[84px]"],["href","https://wa.me/6354373660?text=Hello,%20I\u2019m%20looking%20for%20a%20new%20bed%20and%20I\u2019m%20interested%20in%20what%20LeepWood%20Furniture%20offers.%20Can%20you%20send%20me%20more%20information%20and%20images%20of%20the%20available%20beds?%20I'd%20appreciate%20your%20help!",1,"whatsapp_msg_link"],[1,"button",2,"--clr","#00ad54"],["xmlns","http://www.w3.org/2000/svg","width","24","height","25","viewBox","0 0 1219.547 1225.016","id","whatsapp"],["target","_blank","href","tel:6354373660",1,"whatsapp_msg_link"],[1,""],["src",X7`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4196.0803317998325!2d72.64987146335741!3d23.213745540630523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bc17c67ed89%3A0x4bce8ab144960ecc!2sCroma%20-%20Gandhinagar!5e1!3m2!1sen!2sin!4v1728131684002!5m2!1sen!2sin`,"width","600","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",1,"w-[80vw]","md:w-[30vw]","h-[300px]","md:ml-20",2,"border","0"]],template:function(s,r){s&1&&(ee(0,"section",0)(1,"h1",1),Ie(2,"ContactUs"),ie(),ee(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"span",6),_e(8,"fa-icon",7),ie()(),ee(9,"div",8)(10,"p",9),Ie(11," Shagun 11, opposite Ram Katha Medan, Sector 11, Gandhinagar, Gujarat 382011 "),ie()(),ee(12,"a",10)(13,"button",11),_e(14,"span",12),ee(15,"div",13)(16,"div",14)(17,"span",6),_e(18,"fa-icon",15),ie()(),ee(19,"span",16),Ie(20,"Visit Now"),ie()()()()(),ee(21,"div",17)(22,"div",5),v2(),ee(23,"svg",18),_e(24,"path",19),ee(25,"linearGradient",20),_e(26,"stop",21)(27,"stop",22),ie(),_e(28,"path",23)(29,"path",24)(30,"path",25),ie()(),y2(),ee(31,"div",8)(32,"p",26),Ie(33," Message Us Now! "),ie()(),ee(34,"a",27)(35,"button",28),_e(36,"span",12),ee(37,"div",13)(38,"div",14),v2(),ee(39,"svg",29),_e(40,"path",19),ee(41,"linearGradient",20),_e(42,"stop",21)(43,"stop",22),ie(),_e(44,"path",23)(45,"path",24)(46,"path",25),ie()(),y2(),ee(47,"span",16),Ie(48,"Inquire Now"),ie()()()()(),ee(49,"div",17)(50,"div",5)(51,"span",6),_e(52,"fa-icon",7),ie()(),ee(53,"div",8)(54,"p",26),Ie(55," +91 63543 73660 Call Us Now! "),ie()(),ee(56,"a",30)(57,"button",11),_e(58,"span",12),ee(59,"div",13)(60,"div",14)(61,"span",6),_e(62,"fa-icon",15),ie()(),ee(63,"span",16),Ie(64,"Call Now"),ie()()()()(),_e(65,"div",31),ie(),_e(66,"iframe",32),ie()()),s&2&&(_2(8),H1("icon",r.faLocationDot),_2(10),H1("icon",r.faLocationDot),_2(34),H1("icon",r.faPhone),_2(10),H1("icon",r.faPhone))},dependencies:[Hc],styles:[".whatsapp_msg_link[_ngcontent-%COMP%]{margin:auto}a[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{text-decoration:none;line-height:1;border-radius:1.5rem;overflow:hidden;position:relative;box-shadow:10px 10px 20px #0000000d;background-color:#fff;color:#121212;border:none;cursor:pointer;width:100%;margin:auto;box-shadow:12px 17px 51px #00000038}.button-decor[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:var(--clr);transform:translate(-100%);transition:transform .5s;z-index:0}.button-content[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:600;position:relative;overflow:hidden}.button__icon[_ngcontent-%COMP%]{width:48px;height:40px;background-color:var(--clr);display:grid;place-items:center}.button__text[_ngcontent-%COMP%]{display:inline-block;transition:color .2s;padding:2px 1.5rem 2px .75rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:150px}.button[_ngcontent-%COMP%]:hover   .button__text[_ngcontent-%COMP%]{color:#fff}.button[_ngcontent-%COMP%]:hover   .button-decor[_ngcontent-%COMP%]{transform:translate(0)}"]});let t=e;return t})();var N3="171";var Dp=0,J8=1,Ip=2;var K8=1,Np=2,S1=3,t2=0,ln=1,w1=2,s2=0,Ei=1,Q8=2,e5=3,t5=4,Rp=5,B2=100,Pp=101,Op=102,Fp=103,kp=104,Up=200,Bp=201,Vp=202,Hp=203,a3=204,l3=205,Gp=206,Wp=207,jp=208,$p=209,qp=210,Xp=211,Yp=212,Zp=213,Jp=214,R3=0,P3=1,O3=2,zi=3,F3=4,k3=5,U3=6,B3=7,n5=0,Kp=1,Qp=2,r2=0,em=1,tm=2,nm=3,im=4,sm=5,rm=6,om=7;var G8=300,Oi=301,Fi=302,V3=303,H3=304,R0=306,u3=1e3,U2=1001,f3=1002,Gn=1003,cm=1004;var P0=1005;var o1=1006,G3=1007;var $2=1008;var E1=1009,i5=1010,s5=1011,Js=1012,W3=1013,q2=1014,z1=1015,Ks=1016,j3=1017,$3=1018,ki=1020,r5=35902,o5=1021,c5=1022,jn=1023,a5=1024,l5=1025,wi=1026,Ai=1027,u5=1028,q3=1029,f5=1030,X3=1031;var Y3=1033,O0=33776,F0=33777,k0=33778,U0=33779,Z3=35840,J3=35841,K3=35842,Q3=35843,e4=36196,t4=37492,n4=37496,i4=37808,s4=37809,r4=37810,o4=37811,c4=37812,a4=37813,l4=37814,u4=37815,f4=37816,d4=37817,h4=37818,p4=37819,m4=37820,g4=37821,B0=36492,M4=36494,v4=36495,d5=36283,y4=36284,x4=36285,C4=36286;var v0=2300,d3=2301,c3=2302,W8=2400,j8=2401,$8=2402;var am=3200,lm=3201;var um=0,fm=1,o2="",Dn="srgb",Ti="srgb-linear",y0="linear",Mt="srgb";var Si=7680;var q8=519,dm=512,hm=513,pm=514,h5=515,mm=516,gm=517,Mm=518,vm=519,X8=35044;var p5="300 es",_1=2e3,x0=2001,n2=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var C8=Math.PI/180,h3=180/Math.PI;function V0(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function pw(t,e){return(t%e+e)%e}function _8(t,e,n){return(1-n)*t+n*e}function h0(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var yt=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class t{constructor(e,n,i,s,r,o,c,a,l){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,c,a,l)}set(e,n,i,s,r,o,c,a,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=c,u[3]=n,u[4]=r,u[5]=a,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],c=i[3],a=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],h=s[6],S=s[1],b=s[4],C=s[7],D=s[2],z=s[5],w=s[8];return r[0]=o*v+c*S+a*D,r[3]=o*m+c*b+a*z,r[6]=o*h+c*C+a*w,r[1]=l*v+u*S+f*D,r[4]=l*m+u*b+f*z,r[7]=l*h+u*C+f*w,r[2]=d*v+p*S+g*D,r[5]=d*m+p*b+g*z,r[8]=d*h+p*C+g*w,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],c=e[5],a=e[6],l=e[7],u=e[8];return n*o*u-n*c*l-i*r*u+i*c*a+s*r*l-s*o*a}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],c=e[5],a=e[6],l=e[7],u=e[8],f=u*o-c*l,d=c*a-u*r,p=l*r-o*a,g=n*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*l-u*i)*v,e[2]=(c*i-s*o)*v,e[3]=d*v,e[4]=(u*n-s*a)*v,e[5]=(s*r-c*n)*v,e[6]=p*v,e[7]=(i*a-l*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,c){let a=Math.cos(r),l=Math.sin(r);return this.set(i*a,i*l,-i*(a*o+l*c)+o+e,-s*l,s*a,-s*(-l*o+a*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(L8.makeScale(e,n)),this}rotate(e){return this.premultiply(L8.makeRotation(-e)),this}translate(e,n){return this.premultiply(L8.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},L8=new Ge;function m5(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ys(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ym(){let t=Ys("canvas");return t.style.display="block",t}var pp={};function Ui(t){t in pp||(pp[t]=!0,console.warn(t))}function xm(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function Cm(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _m(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var mp=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gp=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mw(){let t={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Mt&&(s.r=e2(s.r),s.g=e2(s.g),s.b=e2(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===o2?y0:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ti]:{primaries:e,whitePoint:i,transfer:y0,toXYZ:mp,fromXYZ:gp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:mp,fromXYZ:gp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}var lt=mw();function e2(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Os,p3=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Os===void 0&&(Os=Ys("canvas")),Os.width=e.width,Os.height=e.height;let i=Os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Ys("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=e2(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(e2(n[i]/255)*255):n[i]=e2(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gw=0,C0=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gw++}),this.uuid=V0(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(b8(s[o].image)):r.push(b8(s[o]))}else r=b8(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function b8(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?p3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mw=0,c2=(()=>{class t extends n2{constructor(n=t.DEFAULT_IMAGE,i=t.DEFAULT_MAPPING,s=U2,r=U2,o=o1,c=$2,a=jn,l=E1,u=t.DEFAULT_ANISOTROPY,f=o2){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=V0(),this.name="",this.source=new C0(n),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){let i=n===void 0||typeof n=="string";if(!i&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];let s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==G8)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case u3:n.x=n.x-Math.floor(n.x);break;case U2:n.x=n.x<0?0:1;break;case f3:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case u3:n.y=n.y-Math.floor(n.y);break;case U2:n.y=n.y<0?0:1;break;case f3:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}return t.DEFAULT_IMAGE=null,t.DEFAULT_MAPPING=G8,t.DEFAULT_ANISOTROPY=1,t})(),Nt=class t{constructor(e=0,n=0,i=0,s=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,a=e.elements,l=a[0],u=a[4],f=a[8],d=a[1],p=a[5],g=a[9],v=a[2],m=a[6],h=a[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let b=(l+1)/2,C=(p+1)/2,D=(h+1)/2,z=(u+d)/4,w=(f+v)/4,R=(g+m)/4;return b>C&&b>D?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=z/i,r=w/i):C>D?C<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),i=z/s,r=R/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=w/r,s=R/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},m3=class extends n2{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);let s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o1,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new c2(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new C0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},b1=class extends m3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},_0=class extends c2{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=U2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var g3=class extends c2{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=U2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var i2=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,c){let a=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(c===0){e[n+0]=a,e[n+1]=l,e[n+2]=u,e[n+3]=f;return}if(c===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(f!==v||a!==d||l!==p||u!==g){let m=1-c,h=a*d+l*p+u*g+f*v,S=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){let D=Math.sqrt(b),z=Math.atan2(D,h*S);m=Math.sin(m*z)/D,c=Math.sin(c*z)/D}let C=c*S;if(a=a*m+d*C,l=l*m+p*C,u=u*m+g*C,f=f*m+v*C,m===1-c){let D=1/Math.sqrt(a*a+l*l+u*u+f*f);a*=D,l*=D,u*=D,f*=D}}e[n]=a,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){let c=i[s],a=i[s+1],l=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[n]=c*g+u*f+a*p-l*d,e[n+1]=a*g+u*d+l*f-c*p,e[n+2]=l*g+u*p+c*d-a*f,e[n+3]=u*g-c*f-a*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,c=Math.cos,a=Math.sin,l=c(i/2),u=c(s/2),f=c(r/2),d=a(i/2),p=a(s/2),g=a(r/2);switch(o){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],c=n[5],a=n[9],l=n[2],u=n[6],f=n[10],d=i+c+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-a)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>c&&i>f){let p=2*Math.sqrt(1+i-c-f);this._w=(u-a)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(c>f){let p=2*Math.sqrt(1+c-i-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(a+u)/p}else{let p=2*Math.sqrt(1+f-i-c);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(a+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,c=n._x,a=n._y,l=n._z,u=n._w;return this._x=i*u+o*c+s*l-r*a,this._y=s*u+o*a+r*c-i*l,this._z=r*u+o*l+i*a-s*c,this._w=o*u-i*c-s*a-r*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,c=o*e._w+i*e._x+s*e._y+r*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let a=1-c*c;if(a<=Number.EPSILON){let p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}let l=Math.sqrt(a),u=Math.atan2(l,c),f=Math.sin((1-n)*u)/l,d=Math.sin(n*u)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mp.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,c=e.z,a=e.w,l=2*(o*s-c*i),u=2*(c*n-r*s),f=2*(r*i-o*n);return this.x=n+a*l+o*f-c*u,this.y=i+a*u+c*l-r*f,this.z=s+a*f+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,c=n.y,a=n.z;return this.x=s*a-r*c,this.y=r*o-i*a,this.z=i*c-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return S8.copy(this).projectOnVector(e),this.sub(S8)}reflect(e){return this.sub(S8.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},S8=new k,Mp=new i2,V2=class{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(i1.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(i1.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=i1.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,i1):i1.fromBufferAttribute(r,o),i1.applyMatrix4(e.matrixWorld),this.expandByPoint(i1);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gc.copy(i.boundingBox)),Gc.applyMatrix4(e.matrixWorld),this.union(Gc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,i1),i1.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(p0),Wc.subVectors(this.max,p0),Fs.subVectors(e.a,p0),ks.subVectors(e.b,p0),Us.subVectors(e.c,p0),I2.subVectors(ks,Fs),N2.subVectors(Us,ks),Ci.subVectors(Fs,Us);let n=[0,-I2.z,I2.y,0,-N2.z,N2.y,0,-Ci.z,Ci.y,I2.z,0,-I2.x,N2.z,0,-N2.x,Ci.z,0,-Ci.x,-I2.y,I2.x,0,-N2.y,N2.x,0,-Ci.y,Ci.x,0];return!w8(n,Fs,ks,Us,Wc)||(n=[1,0,0,0,1,0,0,0,1],!w8(n,Fs,ks,Us,Wc))?!1:(jc.crossVectors(I2,N2),n=[jc.x,jc.y,jc.z],w8(n,Fs,ks,Us,Wc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,i1).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(i1).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Y1[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Y1[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Y1[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Y1[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Y1[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Y1[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Y1[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Y1[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Y1),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Y1=[new k,new k,new k,new k,new k,new k,new k,new k],i1=new k,Gc=new V2,Fs=new k,ks=new k,Us=new k,I2=new k,N2=new k,Ci=new k,p0=new k,Wc=new k,jc=new k,_i=new k;function w8(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){_i.fromArray(t,r);let c=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),a=e.dot(_i),l=n.dot(_i),u=i.dot(_i);if(Math.max(-Math.max(a,l,u),Math.min(a,l,u))>c)return!1}return!0}var vw=new V2,m0=new k,E8=new k,Zs=class{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):vw.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;m0.subVectors(e,this.center);let n=m0.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(m0,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(E8.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(m0.copy(e.center).add(E8)),this.expandByPoint(m0.copy(e.center).sub(E8))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Z1=new k,z8=new k,$c=new k,R2=new k,A8=new k,qc=new k,T8=new k,M3=class{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Z1)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Z1.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Z1.copy(this.origin).addScaledVector(this.direction,n),Z1.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){z8.copy(e).add(n).multiplyScalar(.5),$c.copy(n).sub(e).normalize(),R2.copy(this.origin).sub(z8);let r=e.distanceTo(n)*.5,o=-this.direction.dot($c),c=R2.dot(this.direction),a=-R2.dot($c),l=R2.lengthSq(),u=Math.abs(1-o*o),f,d,p,g;if(u>0)if(f=o*a-c,d=o*c-a,g=r*u,f>=0)if(d>=-g)if(d<=g){let v=1/u;f*=v,d*=v,p=f*(f+o*d+2*c)+d*(o*f+d+2*a)+l}else d=r,f=Math.max(0,-(o*d+c)),p=-f*f+d*(d+2*a)+l;else d=-r,f=Math.max(0,-(o*d+c)),p=-f*f+d*(d+2*a)+l;else d<=-g?(f=Math.max(0,-(-o*r+c)),d=f>0?-r:Math.min(Math.max(-r,-a),r),p=-f*f+d*(d+2*a)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-a),r),p=d*(d+2*a)+l):(f=Math.max(0,-(o*r+c)),d=f>0?r:Math.min(Math.max(-r,-a),r),p=-f*f+d*(d+2*a)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+c)),p=-f*f+d*(d+2*a)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(z8).addScaledVector($c,d),p}intersectSphere(e,n){Z1.subVectors(e.center,this.origin);let i=Z1.dot(this.direction),s=Z1.dot(Z1)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=i-o,a=i+o;return a<0?null:c<0?this.at(a,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,c,a,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(c=(e.min.z-d.z)*f,a=(e.max.z-d.z)*f):(c=(e.max.z-d.z)*f,a=(e.min.z-d.z)*f),i>a||c>s)||((c>i||i!==i)&&(i=c),(a<s||s!==s)&&(s=a),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Z1)!==null}intersectTriangle(e,n,i,s,r){A8.subVectors(n,e),qc.subVectors(i,e),T8.crossVectors(A8,qc);let o=this.direction.dot(T8),c;if(o>0){if(s)return null;c=1}else if(o<0)c=-1,o=-o;else return null;R2.subVectors(this.origin,e);let a=c*this.direction.dot(qc.crossVectors(R2,qc));if(a<0)return null;let l=c*this.direction.dot(A8.cross(R2));if(l<0||a+l>o)return null;let u=-c*R2.dot(T8);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class t{constructor(e,n,i,s,r,o,c,a,l,u,f,d,p,g,v,m){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,c,a,l,u,f,d,p,g,v,m)}set(e,n,i,s,r,o,c,a,l,u,f,d,p,g,v,m){let h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=c,h[13]=a,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),c=Math.sin(i),a=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*u,p=o*f,g=c*u,v=c*f;n[0]=a*u,n[4]=-a*f,n[8]=l,n[1]=p+g*l,n[5]=d-v*l,n[9]=-c*a,n[2]=v-d*l,n[6]=g+p*l,n[10]=o*a}else if(e.order==="YXZ"){let d=a*u,p=a*f,g=l*u,v=l*f;n[0]=d+v*c,n[4]=g*c-p,n[8]=o*l,n[1]=o*f,n[5]=o*u,n[9]=-c,n[2]=p*c-g,n[6]=v+d*c,n[10]=o*a}else if(e.order==="ZXY"){let d=a*u,p=a*f,g=l*u,v=l*f;n[0]=d-v*c,n[4]=-o*f,n[8]=g+p*c,n[1]=p+g*c,n[5]=o*u,n[9]=v-d*c,n[2]=-o*l,n[6]=c,n[10]=o*a}else if(e.order==="ZYX"){let d=o*u,p=o*f,g=c*u,v=c*f;n[0]=a*u,n[4]=g*l-p,n[8]=d*l+v,n[1]=a*f,n[5]=v*l+d,n[9]=p*l-g,n[2]=-l,n[6]=c*a,n[10]=o*a}else if(e.order==="YZX"){let d=o*a,p=o*l,g=c*a,v=c*l;n[0]=a*u,n[4]=v-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-c*u,n[2]=-l*u,n[6]=p*f+g,n[10]=d-v*f}else if(e.order==="XZY"){let d=o*a,p=o*l,g=c*a,v=c*l;n[0]=a*u,n[4]=-f,n[8]=l*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=c*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yw,e,xw)}lookAt(e,n,i){let s=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),P2.crossVectors(i,An),P2.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),P2.crossVectors(i,An)),P2.normalize(),Xc.crossVectors(An,P2),s[0]=P2.x,s[4]=Xc.x,s[8]=An.x,s[1]=P2.y,s[5]=Xc.y,s[9]=An.y,s[2]=P2.z,s[6]=Xc.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],c=i[4],a=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],S=i[3],b=i[7],C=i[11],D=i[15],z=s[0],w=s[4],R=s[8],_=s[12],x=s[1],A=s[5],W=s[9],U=s[13],Y=s[2],Z=s[6],$=s[10],K=s[14],H=s[3],ae=s[7],pe=s[11],be=s[15];return r[0]=o*z+c*x+a*Y+l*H,r[4]=o*w+c*A+a*Z+l*ae,r[8]=o*R+c*W+a*$+l*pe,r[12]=o*_+c*U+a*K+l*be,r[1]=u*z+f*x+d*Y+p*H,r[5]=u*w+f*A+d*Z+p*ae,r[9]=u*R+f*W+d*$+p*pe,r[13]=u*_+f*U+d*K+p*be,r[2]=g*z+v*x+m*Y+h*H,r[6]=g*w+v*A+m*Z+h*ae,r[10]=g*R+v*W+m*$+h*pe,r[14]=g*_+v*U+m*K+h*be,r[3]=S*z+b*x+C*Y+D*H,r[7]=S*w+b*A+C*Z+D*ae,r[11]=S*R+b*W+C*$+D*pe,r[15]=S*_+b*U+C*K+D*be,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],c=e[5],a=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+r*a*f-s*l*f-r*c*d+i*l*d+s*c*p-i*a*p)+v*(+n*a*p-n*l*d+r*o*d-s*o*p+s*l*u-r*a*u)+m*(+n*l*f-n*c*p-r*o*f+i*o*p+r*c*u-i*l*u)+h*(-s*c*u-n*a*f+n*c*d+s*o*f-i*o*d+i*a*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],c=e[5],a=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],S=f*m*l-v*d*l+v*a*p-c*m*p-f*a*h+c*d*h,b=g*d*l-u*m*l-g*a*p+o*m*p+u*a*h-o*d*h,C=u*v*l-g*f*l+g*c*p-o*v*p-u*c*h+o*f*h,D=g*f*a-u*v*a-g*c*d+o*v*d+u*c*m-o*f*m,z=n*S+i*b+s*C+r*D;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/z;return e[0]=S*w,e[1]=(v*d*r-f*m*r-v*s*p+i*m*p+f*s*h-i*d*h)*w,e[2]=(c*m*r-v*a*r+v*s*l-i*m*l-c*s*h+i*a*h)*w,e[3]=(f*a*r-c*d*r-f*s*l+i*d*l+c*s*p-i*a*p)*w,e[4]=b*w,e[5]=(u*m*r-g*d*r+g*s*p-n*m*p-u*s*h+n*d*h)*w,e[6]=(g*a*r-o*m*r-g*s*l+n*m*l+o*s*h-n*a*h)*w,e[7]=(o*d*r-u*a*r+u*s*l-n*d*l-o*s*p+n*a*p)*w,e[8]=C*w,e[9]=(g*f*r-u*v*r-g*i*p+n*v*p+u*i*h-n*f*h)*w,e[10]=(o*v*r-g*c*r+g*i*l-n*v*l-o*i*h+n*c*h)*w,e[11]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*p-n*c*p)*w,e[12]=D*w,e[13]=(u*v*s-g*f*s+g*i*d-n*v*d-u*i*m+n*f*m)*w,e[14]=(g*c*s-o*v*s-g*i*a+n*v*a+o*i*m-n*c*m)*w,e[15]=(o*f*s-u*c*s+u*i*a-n*f*a-o*i*d+n*c*d)*w,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,c=e.y,a=e.z,l=r*o,u=r*c;return this.set(l*o+i,l*c-s*a,l*a+s*c,0,l*c+s*a,u*c+i,u*a-s*o,0,l*a-s*c,u*a+s*o,r*a*a+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,c=n._z,a=n._w,l=r+r,u=o+o,f=c+c,d=r*l,p=r*u,g=r*f,v=o*u,m=o*f,h=c*f,S=a*l,b=a*u,C=a*f,D=i.x,z=i.y,w=i.z;return s[0]=(1-(v+h))*D,s[1]=(p+C)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(p-C)*z,s[5]=(1-(d+h))*z,s[6]=(m+S)*z,s[7]=0,s[8]=(g+b)*w,s[9]=(m-S)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements,r=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),c=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],s1.copy(this);let l=1/r,u=1/o,f=1/c;return s1.elements[0]*=l,s1.elements[1]*=l,s1.elements[2]*=l,s1.elements[4]*=u,s1.elements[5]*=u,s1.elements[6]*=u,s1.elements[8]*=f,s1.elements[9]*=f,s1.elements[10]*=f,n.setFromRotationMatrix(s1),i.x=r,i.y=o,i.z=c,this}makePerspective(e,n,i,s,r,o,c=_1){let a=this.elements,l=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),d=(i+s)/(i-s),p,g;if(c===_1)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(c===x0)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,s,r,o,c=_1){let a=this.elements,l=1/(n-e),u=1/(i-s),f=1/(o-r),d=(n+e)*l,p=(i+s)*u,g,v;if(c===_1)g=(o+r)*f,v=-2*f;else if(c===x0)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-p,a[2]=0,a[6]=0,a[10]=v,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Bs=new k,s1=new Ut,yw=new k(0,0,0),xw=new k(1,1,1),P2=new k,Xc=new k,An=new k,vp=new Ut,yp=new i2,Di=(()=>{class t{constructor(n=0,i=0,s=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=i,this._z=s,this._order=r}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,i,s,r=this._order){return this._x=n,this._y=i,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,i=this._order,s=!0){let r=n.elements,o=r[0],c=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],p=r[6],g=r[10];switch(i){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-c,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-c,u));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,i,s){return vp.makeRotationFromQuaternion(n),this.setFromRotationMatrix(vp,i,s)}setFromVector3(n,i=this._order){return this.set(n.x,n.y,n.z,i)}reorder(n){return yp.setFromEuler(this),this.setFromQuaternion(yp,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],i=0){return n[i]=this._x,n[i+1]=this._y,n[i+2]=this._z,n[i+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return t.DEFAULT_ORDER="XYZ",t})(),L0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cw=0,xp=new k,Vs=new i2,J1=new Ut,Yc=new k,g0=new k,_w=new k,Lw=new i2,Cp=new k(1,0,0),_p=new k(0,1,0),Lp=new k(0,0,1),bp={type:"added"},bw={type:"removed"},Hs={type:"childadded",child:null},D8={type:"childremoved",child:null},Bi=(()=>{class t extends n2{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=V0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let n=new k,i=new Di,s=new i2,r=new k(1,1,1);function o(){s.setFromEuler(i,!1)}function c(){i.setFromQuaternion(s,void 0,!1)}i._onChange(o),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ge}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,i){this.quaternion.setFromAxisAngle(n,i)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,i){return Vs.setFromAxisAngle(n,i),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(n,i){return Vs.setFromAxisAngle(n,i),this.quaternion.premultiply(Vs),this}rotateX(n){return this.rotateOnAxis(Cp,n)}rotateY(n){return this.rotateOnAxis(_p,n)}rotateZ(n){return this.rotateOnAxis(Lp,n)}translateOnAxis(n,i){return xp.copy(n).applyQuaternion(this.quaternion),this.position.add(xp.multiplyScalar(i)),this}translateX(n){return this.translateOnAxis(Cp,n)}translateY(n){return this.translateOnAxis(_p,n)}translateZ(n){return this.translateOnAxis(Lp,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(J1.copy(this.matrixWorld).invert())}lookAt(n,i,s){n.isVector3?Yc.copy(n):Yc.set(n,i,s);let r=this.parent;this.updateWorldMatrix(!0,!1),g0.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?J1.lookAt(g0,Yc,this.up):J1.lookAt(Yc,g0,this.up),this.quaternion.setFromRotationMatrix(J1),r&&(J1.extractRotation(r.matrixWorld),Vs.setFromRotationMatrix(J1),this.quaternion.premultiply(Vs.invert()))}add(n){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(bp),Hs.child=n,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let i=this.children.indexOf(n);return i!==-1&&(n.parent=null,this.children.splice(i,1),n.dispatchEvent(bw),D8.child=n,this.dispatchEvent(D8),D8.child=null),this}removeFromParent(){let n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),J1.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),J1.multiply(n.parent.matrixWorld)),n.applyMatrix4(J1),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(bp),Hs.child=n,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,i){if(this[n]===i)return this;for(let s=0,r=this.children.length;s<r;s++){let c=this.children[s].getObjectByProperty(n,i);if(c!==void 0)return c}}getObjectsByProperty(n,i,s=[]){this[n]===i&&s.push(this);let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].getObjectsByProperty(n,i,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(g0,n,_w),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(g0,Lw,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return n.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(n){n(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].traverseVisible(n)}traverseAncestors(n){let i=this.parent;i!==null&&(n(i),i.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateMatrixWorld(n)}updateWorldMatrix(n,i){let s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(n){let i=n===void 0||typeof n=="string",s={};i&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(n),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(n)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(n.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){let d=l[u];o(n.shapes,d)}else o(n.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(n.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(n.materials,this.material[l]));r.material=a}else r.material=o(n.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(n).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(n.animations,l))}}if(i){let a=c(n.geometries),l=c(n.materials),u=c(n.textures),f=c(n.images),d=c(n.shapes),p=c(n.skeletons),g=c(n.animations),v=c(n.nodes);a.length>0&&(s.geometries=a),l.length>0&&(s.materials=l),u.length>0&&(s.textures=u),f.length>0&&(s.images=f),d.length>0&&(s.shapes=d),p.length>0&&(s.skeletons=p),g.length>0&&(s.animations=g),v.length>0&&(s.nodes=v)}return s.object=r,s;function c(a){let l=[];for(let u in a){let f=a[u];delete f.metadata,l.push(f)}return l}}clone(n){return new this.constructor().copy(this,n)}copy(n,i=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),i===!0)for(let s=0;s<n.children.length;s++){let r=n.children[s];this.add(r.clone())}return this}}return t.DEFAULT_UP=new k(0,1,0),t.DEFAULT_MATRIX_AUTO_UPDATE=!0,t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,t})(),r1=new k,K1=new k,I8=new k,Q1=new k,Gs=new k,Ws=new k,Sp=new k,N8=new k,R8=new k,P8=new k,O8=new Nt,F8=new Nt,k8=new Nt,k2=class t{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),r1.subVectors(e,n),s.cross(r1);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){r1.subVectors(s,n),K1.subVectors(i,n),I8.subVectors(e,n);let o=r1.dot(r1),c=r1.dot(K1),a=r1.dot(I8),l=K1.dot(K1),u=K1.dot(I8),f=o*l-c*c;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(l*a-c*u)*d,g=(o*u-c*a)*d;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Q1)===null?!1:Q1.x>=0&&Q1.y>=0&&Q1.x+Q1.y<=1}static getInterpolation(e,n,i,s,r,o,c,a){return this.getBarycoord(e,n,i,s,Q1)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,Q1.x),a.addScaledVector(o,Q1.y),a.addScaledVector(c,Q1.z),a)}static getInterpolatedAttribute(e,n,i,s,r,o){return O8.setScalar(0),F8.setScalar(0),k8.setScalar(0),O8.fromBufferAttribute(e,n),F8.fromBufferAttribute(e,i),k8.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(O8,r.x),o.addScaledVector(F8,r.y),o.addScaledVector(k8,r.z),o}static isFrontFacing(e,n,i,s){return r1.subVectors(i,n),K1.subVectors(e,n),r1.cross(K1).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return r1.subVectors(this.c,this.b),K1.subVectors(this.a,this.b),r1.cross(K1).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,c;Gs.subVectors(s,i),Ws.subVectors(r,i),N8.subVectors(e,i);let a=Gs.dot(N8),l=Ws.dot(N8);if(a<=0&&l<=0)return n.copy(i);R8.subVectors(e,s);let u=Gs.dot(R8),f=Ws.dot(R8);if(u>=0&&f<=u)return n.copy(s);let d=a*f-u*l;if(d<=0&&a>=0&&u<=0)return o=a/(a-u),n.copy(i).addScaledVector(Gs,o);P8.subVectors(e,r);let p=Gs.dot(P8),g=Ws.dot(P8);if(g>=0&&p<=g)return n.copy(r);let v=p*l-a*g;if(v<=0&&l>=0&&g<=0)return c=l/(l-g),n.copy(i).addScaledVector(Ws,c);let m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Sp.subVectors(r,s),c=(f-u)/(f-u+(p-g)),n.copy(s).addScaledVector(Sp,c);let h=1/(m+v+d);return o=v*h,c=d*h,n.copy(i).addScaledVector(Gs,o).addScaledVector(Ws,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},O2={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function U8(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var ut=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=lt.workingColorSpace){if(e=pw(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=U8(o,r,e+1/3),this.g=U8(o,r,e),this.b=U8(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,n=Dn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){let i=Lm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=e2(e.r),this.g=e2(e.g),this.b=e2(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return lt.fromWorkingColorSpace(nn.copy(this),e),Math.round(Qe(nn.r*255,0,255))*65536+Math.round(Qe(nn.g*255,0,255))*256+Math.round(Qe(nn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(nn.copy(this),n);let i=nn.r,s=nn.g,r=nn.b,o=Math.max(i,s,r),c=Math.min(i,s,r),a,l,u=(c+o)/2;if(c===o)a=0,l=0;else{let f=o-c;switch(l=u<=.5?f/(o+c):f/(2-o-c),o){case i:a=(s-r)/f+(s<r?6:0);break;case s:a=(r-i)/f+2;break;case r:a=(i-s)/f+4;break}a/=6}return e.h=a,e.s=l,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Dn){lt.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,i=nn.g,s=nn.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(O2),this.setHSL(O2.h+e,O2.s+n,O2.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(O2),e.getHSL(Zc);let i=_8(O2.h,Zc.h,n),s=_8(O2.s,Zc.s,n),r=_8(O2.l,Zc.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new ut;ut.NAMES=Lm;var Sw=0,Ii=class extends n2{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=V0(),this.name="",this.type="Material",this.blending=Ei,this.side=t2,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=a3,this.blendDst=l3,this.blendEquation=B2,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q8,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==t2&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==a3&&(i.blendSrc=this.blendSrc),this.blendDst!==l3&&(i.blendDst=this.blendDst),this.blendEquation!==B2&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q8&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let c in r){let a=r[c];delete a.metadata,o.push(a)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ni=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=n5,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new k,Jc=new yt,In=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=X8,this.updateRanges=[],this.gpuType=z1,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jc.fromBufferAttribute(this,n),Jc.applyMatrix3(e),this.setXY(n,Jc.x,Jc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=h0(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=h0(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=h0(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=h0(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=h0(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==X8&&(e.usage=this.usage),e}};var b0=class extends In{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var S0=class extends In{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var L1=class extends In{constructor(e,n,i){super(new Float32Array(e),n,i)}},ww=0,Hn=new Ut,B8=new Bi,js=new k,Tn=new V2,M0=new V2,$t=new k,H2=class t extends n2{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=V0(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m5(e)?S0:b0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return B8.lookAt(e),B8.updateMatrix(),this.applyMatrix4(B8.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new L1(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new V2);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let c=n[r];M0.setFromBufferAttribute(c),this.morphTargetsRelative?($t.addVectors(Tn.min,M0.min),Tn.expandByPoint($t),$t.addVectors(Tn.max,M0.max),Tn.expandByPoint($t)):(Tn.expandByPoint(M0.min),Tn.expandByPoint(M0.max))}Tn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(n)for(let r=0,o=n.length;r<o;r++){let c=n[r],a=this.morphTargetsRelative;for(let l=0,u=c.count;l<u;l++)$t.fromBufferAttribute(c,l),a&&(js.fromBufferAttribute(e,l),$t.add(js)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),c=[],a=[];for(let R=0;R<i.count;R++)c[R]=new k,a[R]=new k;let l=new k,u=new k,f=new k,d=new yt,p=new yt,g=new yt,v=new k,m=new k;function h(R,_,x){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,_),f.fromBufferAttribute(i,x),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,x),u.sub(l),f.sub(l),p.sub(d),g.sub(d);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(A),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),c[R].add(v),c[_].add(v),c[x].add(v),a[R].add(m),a[_].add(m),a[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,_=S.length;R<_;++R){let x=S[R],A=x.start,W=x.count;for(let U=A,Y=A+W;U<Y;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new k,C=new k,D=new k,z=new k;function w(R){D.fromBufferAttribute(s,R),z.copy(D);let _=c[R];b.copy(_),b.sub(D.multiplyScalar(D.dot(_))).normalize(),C.crossVectors(z,_);let A=C.dot(a[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,A)}for(let R=0,_=S.length;R<_;++R){let x=S[R],A=x.start,W=x.count;for(let U=A,Y=A+W;U<Y;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,c=new k,a=new k,l=new k,u=new k,f=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),c.fromBufferAttribute(i,g),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),c.add(u),a.add(u),l.add(u),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(c,a){let l=c.array,u=c.itemSize,f=c.normalized,d=new l.constructor(a.length*u),p=0,g=0;for(let v=0,m=a.length;v<m;v++){c.isInterleavedBufferAttribute?p=a[v]*c.data.stride+c.offset:p=a[v]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new In(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let c in s){let a=s[c],l=e(a,i);n.setAttribute(c,l)}let r=this.morphAttributes;for(let c in r){let a=[],l=r[c];for(let u=0,f=l.length;u<f;u++){let d=l[u],p=e(d,i);a.push(p)}n.morphAttributes[c]=a}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,a=o.length;c<a;c++){let l=o[c];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let s={},r=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],u=[];for(let f=0,d=l.length;f<d;f++){let p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(s[a]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(n))}let r=e.morphAttributes;for(let l in r){let u=[],f=r[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wp=new Ut,Li=new M3,Kc=new Zs,Ep=new k,Qc=new k,e3=new k,t3=new k,V8=new k,n3=new k,zp=new k,i3=new k,pn=class extends Bi{constructor(e=new H2,n=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let c=this.morphTargetInfluences;if(r&&c){n3.set(0,0,0);for(let a=0,l=r.length;a<l;a++){let u=c[a],f=r[a];u!==0&&(V8.fromBufferAttribute(f,e),o?n3.addScaledVector(V8,u):n3.addScaledVector(V8.sub(n),u))}n.add(n3)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kc.copy(i.boundingSphere),Kc.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Kc.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Kc,Ep)===null||Li.origin.distanceToSquared(Ep)>(e.far-e.near)**2))&&(wp.copy(r).invert(),Li.copy(e.ray).applyMatrix4(wp),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Li)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,c=r.index,a=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(c!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],h=o[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let C=S,D=b;C<D;C+=3){let z=c.getX(C),w=c.getX(C+1),R=c.getX(C+2);s=s3(this,h,e,i,l,u,f,z,w,R),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){let S=c.getX(m),b=c.getX(m+1),C=c.getX(m+2);s=s3(this,o,e,i,l,u,f,S,b,C),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],h=o[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let C=S,D=b;C<D;C+=3){let z=C,w=C+1,R=C+2;s=s3(this,h,e,i,l,u,f,z,w,R),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){let S=m,b=m+1,C=m+2;s=s3(this,o,e,i,l,u,f,S,b,C),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function Ew(t,e,n,i,s,r,o,c){let a;if(e.side===ln?a=i.intersectTriangle(o,r,s,!0,c):a=i.intersectTriangle(s,r,o,e.side===t2,c),a===null)return null;i3.copy(c),i3.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(i3);return l<n.near||l>n.far?null:{distance:l,point:i3.clone(),object:t}}function s3(t,e,n,i,s,r,o,c,a,l){t.getVertexPosition(c,Qc),t.getVertexPosition(a,e3),t.getVertexPosition(l,t3);let u=Ew(t,e,n,i,Qc,e3,t3,zp);if(u){let f=new k;k2.getBarycoord(zp,Qc,e3,t3,f),s&&(u.uv=k2.getInterpolatedAttribute(s,c,a,l,f,new yt)),r&&(u.uv1=k2.getInterpolatedAttribute(r,c,a,l,f,new yt)),o&&(u.normal=k2.getInterpolatedAttribute(o,c,a,l,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:c,b:a,c:l,normal:new k,materialIndex:0};k2.getNormal(Qc,e3,t3,d.normal),u.face=d,u.barycoord=f}return u}var G2=class t extends H2{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let a=[],l=[],u=[],f=[],d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(a),this.setAttribute("position",new L1(l,3)),this.setAttribute("normal",new L1(u,3)),this.setAttribute("uv",new L1(f,2));function g(v,m,h,S,b,C,D,z,w,R,_){let x=C/w,A=D/R,W=C/2,U=D/2,Y=z/2,Z=w+1,$=R+1,K=0,H=0,ae=new k;for(let pe=0;pe<$;pe++){let be=pe*A-U;for(let Ze=0;Ze<Z;Ze++){let xt=Ze*x-W;ae[v]=xt*S,ae[m]=be*b,ae[h]=Y,l.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[h]=z>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(Ze/w),f.push(1-pe/R),K+=1}}for(let pe=0;pe<R;pe++)for(let be=0;be<w;be++){let Ze=d+be+Z*pe,xt=d+be+Z*(pe+1),j=d+(be+1)+Z*(pe+1),ne=d+(be+1)+Z*pe;a.push(Ze,xt,ne),a.push(xt,j,ne),H+=6}c.addGroup(p,H,_),p+=H,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function rn(t){let e={};for(let n=0;n<t.length;n++){let i=Vi(t[n]);for(let s in i)e[s]=i[s]}return e}function zw(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function g5(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var bm={clone:Vi,merge:rn},Aw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,c1=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Aw,this.fragmentShader=Tw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=zw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},w0=class extends Bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=_1}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},F2=new k,Ap=new yt,Tp=new yt,sn=class extends w0{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=h3*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(C8*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return h3*2*Math.atan(Math.tan(C8*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){F2.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(F2.x,F2.y).multiplyScalar(-e/F2.z),F2.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(F2.x,F2.y).multiplyScalar(-e/F2.z)}getViewSize(e,n){return this.getViewBounds(e,Ap,Tp),n.subVectors(Tp,Ap)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(C8*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/a,n-=o.offsetY*i/l,s*=o.width/a,i*=o.height/l}let c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},$s=-90,qs=1,v3=class extends Bi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn($s,qs,e,n);s.layers=this.layers,this.add(s);let r=new sn($s,qs,e,n);r.layers=this.layers,this.add(r);let o=new sn($s,qs,e,n);o.layers=this.layers,this.add(o);let c=new sn($s,qs,e,n);c.layers=this.layers,this.add(c);let a=new sn($s,qs,e,n);a.layers=this.layers,this.add(a);let l=new sn($s,qs,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,c,a]=n;for(let l of n)this.remove(l);if(e===_1)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===x0)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,a,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,c),e.setRenderTarget(i,3,s),e.render(n,a),e.setRenderTarget(i,4,s),e.render(n,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},E0=class extends c2{constructor(e,n,i,s,r,o,c,a,l,u){e=e!==void 0?e:[],n=n!==void 0?n:Oi,super(e,n,i,s,r,o,c,a,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},y3=class extends b1{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new E0(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:o1}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new G2(5,5,5),r=new c1({name:"CubemapFromEquirect",uniforms:Vi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:s2});r.uniforms.tEquirect.value=n;let o=new pn(s,r),c=n.minFilter;return n.minFilter===$2&&(n.minFilter=o1),new v3(1,10,this).update(e,o),n.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}};var z0=class extends Bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var H8=new k,Dw=new k,Iw=new Ge,C1=class{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=H8.subVectors(i,n).cross(Dw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(H8),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Iw.getNormalMatrix(e),s=this.coplanarPoint(H8).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bi=new Zs,r3=new k,A0=class{constructor(e=new C1,n=new C1,i=new C1,s=new C1,r=new C1,o=new C1){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(i),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_1){let i=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],a=s[3],l=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],h=s[12],S=s[13],b=s[14],C=s[15];if(i[0].setComponents(a-r,d-l,m-p,C-h).normalize(),i[1].setComponents(a+r,d+l,m+p,C+h).normalize(),i[2].setComponents(a+o,d+u,m+g,C+S).normalize(),i[3].setComponents(a-o,d-u,m-g,C-S).normalize(),i[4].setComponents(a-c,d-f,m-v,C-b).normalize(),n===_1)i[5].setComponents(a+c,d+f,m+v,C+b).normalize();else if(n===x0)i[5].setComponents(c,f,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),bi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(r3.x=s.normal.x>0?e.max.x:e.min.x,r3.y=s.normal.y>0?e.max.y:e.min.y,r3.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(r3)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ri=class extends Bi{constructor(){super(),this.isGroup=!0,this.type="Group"}};var T0=class extends c2{constructor(e,n,i,s,r,o,c,a,l,u=wi){if(u!==wi&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===wi&&(i=q2),i===void 0&&u===Ai&&(i=ki),super(null,s,r,o,c,a,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:Gn,this.minFilter=a!==void 0?a:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}};var D0=class t extends H2{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,c=Math.floor(i),a=Math.floor(s),l=c+1,u=a+1,f=e/c,d=n/a,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){let S=h*d-o;for(let b=0;b<l;b++){let C=b*f-r;g.push(C,-S,0),v.push(0,0,1),m.push(b/c),m.push(1-h/a)}}for(let h=0;h<a;h++)for(let S=0;S<c;S++){let b=S+l*h,C=S+l*(h+1),D=S+1+l*(h+1),z=S+1+l*h;p.push(b,C,z),p.push(C,D,z)}this.setIndex(p),this.setAttribute("position",new L1(g,3)),this.setAttribute("normal",new L1(v,3)),this.setAttribute("uv",new L1(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var x3=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},C3=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function o3(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Nw(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Pi=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let c=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(r=s,s=n[++i],e<s)break t}o=n.length;break n}if(!(e>=r)){let c=n[1];e<c&&(i=2,r=c);for(let a=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(s=r,r=n[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let c=i+o>>>1;e<n[c]?o=c:i=c+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_3=class extends Pi{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:W8,endingEnd:W8}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,c=s[r],a=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case j8:r=e,c=2*n-i;break;case $8:r=s.length-2,c=n+s[r]-s[r+1];break;default:r=e,c=i}if(a===void 0)switch(this.getSettings_().endingEnd){case j8:o=e,a=2*i-n;break;case $8:o=1,a=i+s[1]-s[0];break;default:o=e-1,a=n}let l=(i-n)*.5,u=this.valueSize;this._weightPrev=l/(n-c),this._weightNext=l/(a-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=e*c,l=a-c,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),v=g*g,m=v*g,h=-d*m+2*d*v-d*g,S=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,C=p*m-p*v;for(let D=0;D!==c;++D)r[D]=h*o[u+D]+S*o[l+D]+b*o[a+D]+C*o[f+D];return r}},L3=class extends Pi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=e*c,l=a-c,u=(i-n)/(s-n),f=1-u;for(let d=0;d!==c;++d)r[d]=o[l+d]*f+o[a+d]*u;return r}},b3=class extends Pi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=o3(n,this.TimeBufferType),this.values=o3(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:o3(e.times,Array),values:o3(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new b3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new L3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _3(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case v0:n=this.InterpolantFactoryMethodDiscrete;break;case d3:n=this.InterpolantFactoryMethodLinear;break;case c3:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return v0;case this.InterpolantFactoryMethodLinear:return d3;case this.InterpolantFactoryMethodSmooth:return c3}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==r;c++){let a=i[c];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,a),e=!1;break}if(o!==null&&o>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,a,o),e=!1;break}o=a}if(s!==void 0&&Nw(s))for(let c=0,a=s.length;c!==a;++c){let l=s[c];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===c3,r=e.length-1,o=1;for(let c=1;c<r;++c){let a=!1,l=e[c],u=e[c+1];if(l!==u&&(c!==1||l!==e[0]))if(s)a=!0;else{let f=c*i,d=f-i,p=f+i;for(let g=0;g!==i;++g){let v=n[f+g];if(v!==n[d+g]||v!==n[p+g]){a=!0;break}}}if(a){if(c!==o){e[o]=e[c];let f=c*i,d=o*i;for(let p=0;p!==i;++p)n[d+p]=n[f+p]}++o}}if(r>0){e[o]=e[r];for(let c=r*i,a=o*i,l=0;l!==i;++l)n[a+l]=n[c+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=d3;var W2=class extends Wn{constructor(e,n,i){super(e,n,i)}};W2.prototype.ValueTypeName="bool";W2.prototype.ValueBufferType=Array;W2.prototype.DefaultInterpolation=v0;W2.prototype.InterpolantFactoryMethodLinear=void 0;W2.prototype.InterpolantFactoryMethodSmooth=void 0;var S3=class extends Wn{};S3.prototype.ValueTypeName="color";var w3=class extends Wn{};w3.prototype.ValueTypeName="number";var E3=class extends Pi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=(i-n)/(s-n),l=e*c;for(let u=l+c;l!==u;l+=4)i2.slerpFlat(r,0,o,l-c,o,l,a);return r}},I0=class extends Wn{InterpolantFactoryMethodLinear(e){return new E3(this.times,this.values,this.getValueSize(),e)}};I0.prototype.ValueTypeName="quaternion";I0.prototype.InterpolantFactoryMethodSmooth=void 0;var j2=class extends Wn{constructor(e,n,i){super(e,n,i)}};j2.prototype.ValueTypeName="string";j2.prototype.ValueBufferType=Array;j2.prototype.DefaultInterpolation=v0;j2.prototype.InterpolantFactoryMethodLinear=void 0;j2.prototype.InterpolantFactoryMethodSmooth=void 0;var z3=class extends Wn{};z3.prototype.ValueTypeName="vector";var Y8={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}},A3=class{constructor(e,n,i){let s=this,r=!1,o=0,c=0,a,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){c++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,c),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return a?a(u):u},this.setURLModifier=function(u){return a=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){let p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Sm=new A3,M5=(()=>{class t{constructor(n){this.manager=n!==void 0?n:Sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(n,i){let s=this;return new Promise(function(r,o){s.load(n,r,i,o)})}parse(){}setCrossOrigin(n){return this.crossOrigin=n,this}setWithCredentials(n){return this.withCredentials=n,this}setPath(n){return this.path=n,this}setResourcePath(n){return this.resourcePath=n,this}setRequestHeader(n){return this.requestHeader=n,this}}return t.DEFAULT_MATERIAL_NAME="__DEFAULT",t})();var T3=class extends M5{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Y8.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0),o;let c=Ys("img");function a(){u(),Y8.add(e,this),n&&n(this),r.manager.itemEnd(e)}function l(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){c.removeEventListener("load",a,!1),c.removeEventListener("error",l,!1)}return c.addEventListener("load",a,!1),c.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),r.manager.itemStart(e),c.src=e,c}};var N0=class extends M5{constructor(e){super(e)}load(e,n,i,s){let r=new c2,o=new T3(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){r.image=c,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}};var D3=class extends w0{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,c=s+n,a=s-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,c-=u*this.view.offsetY,a=c-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var I3=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var v5="\\[\\]\\.:\\/",Rw=new RegExp("["+v5+"]","g"),y5="[^"+v5+"]",Pw="[^"+v5.replace("\\.","")+"]",Ow=/((?:WC+[\/:])*)/.source.replace("WC",y5),Fw=/(WCOD+)?/.source.replace("WCOD",Pw),kw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",y5),Uw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",y5),Bw=new RegExp("^"+Ow+Fw+kw+Uw+"$"),Vw=["material","materials","bones","map"],Z8=class{constructor(e,n,i){let s=i||It.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},It=(()=>{class t{constructor(n,i,s){this.path=i,this.parsedPath=s||t.parseTrackName(i),this.node=t.findNode(n,this.parsedPath.nodeName),this.rootNode=n,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(n,i,s){return n&&n.isAnimationObjectGroup?new t.Composite(n,i,s):new t(n,i,s)}static sanitizeNodeName(n){return n.replace(/\s/g,"_").replace(Rw,"")}static parseTrackName(n){let i=Bw.exec(n);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+n);let s={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=s.nodeName.substring(r+1);Vw.indexOf(o)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=o)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+n);return s}static findNode(n,i){if(i===void 0||i===""||i==="."||i===-1||i===n.name||i===n.uuid)return n;if(n.skeleton){let s=n.skeleton.getBoneByName(i);if(s!==void 0)return s}if(n.children){let s=function(o){for(let c=0;c<o.length;c++){let a=o[c];if(a.name===i||a.uuid===i)return a;let l=s(a.children);if(l)return l}return null},r=s(n.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(n,i){n[i]=this.targetObject[this.propertyName]}_getValue_array(n,i){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)n[i++]=s[r]}_getValue_arrayElement(n,i){n[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(n,i){this.resolvedProperty.toArray(n,i)}_setValue_direct(n,i){this.targetObject[this.propertyName]=n[i]}_setValue_direct_setNeedsUpdate(n,i){this.targetObject[this.propertyName]=n[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(n,i){this.targetObject[this.propertyName]=n[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(n,i){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=n[i++]}_setValue_array_setNeedsUpdate(n,i){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=n[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(n,i){let s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=n[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(n,i){this.resolvedProperty[this.propertyIndex]=n[i]}_setValue_arrayElement_setNeedsUpdate(n,i){this.resolvedProperty[this.propertyIndex]=n[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(n,i){this.resolvedProperty[this.propertyIndex]=n[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(n,i){this.resolvedProperty.fromArray(n,i)}_setValue_fromArray_setNeedsUpdate(n,i){this.resolvedProperty.fromArray(n,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(n,i){this.resolvedProperty.fromArray(n,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(n,i){this.bind(),this.getValue(n,i)}_setValue_unbound(n,i){this.bind(),this.setValue(n,i)}bind(){let n=this.node,i=this.parsedPath,s=i.objectName,r=i.propertyName,o=i.propertyIndex;if(n||(n=t.findNode(this.rootNode,i.nodeName),this.node=n),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!n){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let u=i.objectIndex;switch(s){case"materials":if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}n=n.material.materials;break;case"bones":if(!n.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}n=n.skeleton.bones;for(let f=0;f<n.length;f++)if(n[f].name===u){u=f;break}break;case"map":if("map"in n){n=n.map;break}if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}n=n.material.map;break;default:if(n[s]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}n=n[s]}if(u!==void 0){if(n[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,n);return}n=n[u]}}let c=n[r];if(c===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",n);return}let a=this.Versioning.None;this.targetObject=n,n.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:n.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!n.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!n.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}n.morphTargetDictionary[o]!==void 0&&(o=n.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(l=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return t.Composite=Z8,t})();It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pk=new Float32Array(1);function x5(t,e,n,i){let s=Hw(i);switch(n){case o5:return t*e;case a5:return t*e;case l5:return t*e*2;case u5:return t*e/s.components*s.byteLength;case q3:return t*e/s.components*s.byteLength;case f5:return t*e*2/s.components*s.byteLength;case X3:return t*e*2/s.components*s.byteLength;case c5:return t*e*3/s.components*s.byteLength;case jn:return t*e*4/s.components*s.byteLength;case Y3:return t*e*4/s.components*s.byteLength;case O0:case F0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case k0:case U0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case J3:case Q3:return Math.max(t,16)*Math.max(e,8)/4;case Z3:case K3:return Math.max(t,8)*Math.max(e,8)/2;case e4:case t4:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case n4:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case i4:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case s4:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case r4:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case o4:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case c4:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case a4:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case l4:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case u4:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case f4:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case d4:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case h4:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case p4:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case m4:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case g4:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case B0:case M4:case v4:return Math.ceil(t/4)*Math.ceil(e/4)*16;case d5:case y4:return Math.ceil(t/4)*Math.ceil(e/4)*8;case x4:case C4:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hw(t){switch(t){case E1:case i5:return{byteLength:1,components:1};case Js:case s5:case Ks:return{byteLength:2,components:1};case j3:case $3:return{byteLength:2,components:4};case q2:case W3:case z1:return{byteLength:4,components:1};case r5:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:N3}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=N3);function Ym(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Gw(t){let e=new WeakMap;function n(c,a){let l=c.array,u=c.usage,f=l.byteLength,d=t.createBuffer();t.bindBuffer(a,d),t.bufferData(a,l,u),c.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:f}}function i(c,a,l){let u=a.array,f=a.updateRanges;if(t.bindBuffer(l,c),f.length===0)t.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let v=f[p];t.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let a=e.get(c);a&&(t.deleteBuffer(a.buffer),e.delete(c))}function o(c,a){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let u=e.get(c);(!u||u.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let l=e.get(c);if(l===void 0)e.set(c,n(c,a));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,c,a),l.version=c.version}}return{get:s,remove:r,update:o}}var Ww=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jw=`#ifdef USE_ALPHAHASH
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
#endif`,$w=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zw=`#ifdef USE_AOMAP
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
#endif`,Jw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iE=`#ifdef USE_IRIDESCENCE
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
#endif`,sE=`#ifdef USE_BUMPMAP
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
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hE=`#define PI 3.141592653589793
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
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mE=`vec3 transformedNormal = objectNormal;
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
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_E=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,LE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bE=`#ifdef USE_ENVMAP
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
#endif`,SE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DE=`#ifdef USE_GRADIENTMAP
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
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,OE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,FE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VE=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,HE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,GE=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,WE=`#if defined( RE_IndirectDiffuse )
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
#endif`,jE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$E=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QE=`#if defined( USE_POINTS_UV )
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
#endif`,ez=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tz=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nz=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iz=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sz=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rz=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oz=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cz=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,az=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lz=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uz=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fz=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dz=`#ifdef USE_NORMALMAP
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
#endif`,hz=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pz=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mz=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gz=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mz=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vz=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,yz=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xz=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cz=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_z=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lz=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bz=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sz=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wz=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ez=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zz=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Az=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tz=`#ifdef USE_SKINNING
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
#endif`,Dz=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iz=`#ifdef USE_SKINNING
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
#endif`,Nz=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rz=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pz=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oz=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fz=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kz=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hz=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gz=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wz=`uniform sampler2D t2D;
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
}`,jz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$z=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xz=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yz=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Zz=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jz=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Kz=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iA=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,sA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rA=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,oA=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cA=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,aA=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lA=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,uA=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fA=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,dA=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hA=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,pA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mA=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,gA=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,MA=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,vA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,yA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,xA=`uniform vec3 color;
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
}`,CA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_A=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,qe={alphahash_fragment:Ww,alphahash_pars_fragment:jw,alphamap_fragment:$w,alphamap_pars_fragment:qw,alphatest_fragment:Xw,alphatest_pars_fragment:Yw,aomap_fragment:Zw,aomap_pars_fragment:Jw,batching_pars_vertex:Kw,batching_vertex:Qw,begin_vertex:eE,beginnormal_vertex:tE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:sE,clipping_planes_fragment:rE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:cE,clipping_planes_vertex:aE,color_fragment:lE,color_pars_fragment:uE,color_pars_vertex:fE,color_vertex:dE,common:hE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:ME,emissivemap_fragment:vE,emissivemap_pars_fragment:yE,colorspace_fragment:xE,colorspace_pars_fragment:CE,envmap_fragment:_E,envmap_common_pars_fragment:LE,envmap_pars_fragment:bE,envmap_pars_vertex:SE,envmap_physical_pars_fragment:OE,envmap_vertex:wE,fog_vertex:EE,fog_pars_vertex:zE,fog_fragment:AE,fog_pars_fragment:TE,gradientmap_pars_fragment:DE,lightmap_pars_fragment:IE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:RE,lights_pars_begin:PE,lights_toon_fragment:FE,lights_toon_pars_fragment:kE,lights_phong_fragment:UE,lights_phong_pars_fragment:BE,lights_physical_fragment:VE,lights_physical_pars_fragment:HE,lights_fragment_begin:GE,lights_fragment_maps:WE,lights_fragment_end:jE,logdepthbuf_fragment:$E,logdepthbuf_pars_fragment:qE,logdepthbuf_pars_vertex:XE,logdepthbuf_vertex:YE,map_fragment:ZE,map_pars_fragment:JE,map_particle_fragment:KE,map_particle_pars_fragment:QE,metalnessmap_fragment:ez,metalnessmap_pars_fragment:tz,morphinstance_vertex:nz,morphcolor_vertex:iz,morphnormal_vertex:sz,morphtarget_pars_vertex:rz,morphtarget_vertex:oz,normal_fragment_begin:cz,normal_fragment_maps:az,normal_pars_fragment:lz,normal_pars_vertex:uz,normal_vertex:fz,normalmap_pars_fragment:dz,clearcoat_normal_fragment_begin:hz,clearcoat_normal_fragment_maps:pz,clearcoat_pars_fragment:mz,iridescence_pars_fragment:gz,opaque_fragment:Mz,packing:vz,premultiplied_alpha_fragment:yz,project_vertex:xz,dithering_fragment:Cz,dithering_pars_fragment:_z,roughnessmap_fragment:Lz,roughnessmap_pars_fragment:bz,shadowmap_pars_fragment:Sz,shadowmap_pars_vertex:wz,shadowmap_vertex:Ez,shadowmask_pars_fragment:zz,skinbase_vertex:Az,skinning_pars_vertex:Tz,skinning_vertex:Dz,skinnormal_vertex:Iz,specularmap_fragment:Nz,specularmap_pars_fragment:Rz,tonemapping_fragment:Pz,tonemapping_pars_fragment:Oz,transmission_fragment:Fz,transmission_pars_fragment:kz,uv_pars_fragment:Uz,uv_pars_vertex:Bz,uv_vertex:Vz,worldpos_vertex:Hz,background_vert:Gz,background_frag:Wz,backgroundCube_vert:jz,backgroundCube_frag:$z,cube_vert:qz,cube_frag:Xz,depth_vert:Yz,depth_frag:Zz,distanceRGBA_vert:Jz,distanceRGBA_frag:Kz,equirect_vert:Qz,equirect_frag:eA,linedashed_vert:tA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:sA,meshlambert_vert:rA,meshlambert_frag:oA,meshmatcap_vert:cA,meshmatcap_frag:aA,meshnormal_vert:lA,meshnormal_frag:uA,meshphong_vert:fA,meshphong_frag:dA,meshphysical_vert:hA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:gA,points_vert:MA,points_frag:vA,shadow_vert:yA,shadow_frag:xA,sprite_vert:CA,sprite_frag:_A},se={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},A1={basic:{uniforms:rn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:rn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ut(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:rn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:rn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:rn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ut(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:rn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:rn([se.points,se.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:rn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:rn([se.common,se.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:rn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:rn([se.sprite,se.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:rn([se.common,se.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:rn([se.lights,se.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};A1.physical={uniforms:rn([A1.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var _4={r:0,b:0,g:0},Hi=new Di,LA=new Ut;function bA(t,e,n,i,s,r,o){let c=new ut(0),a=r===!0?0:1,l,u,f=null,d=0,p=null;function g(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?n:e).get(C)),C}function v(b){let C=!1,D=g(b);D===null?h(c,a):D&&D.isColor&&(h(D,1),C=!0);let z=t.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(b,C){let D=g(C);D&&(D.isCubeTexture||D.mapping===R0)?(u===void 0&&(u=new pn(new G2(1,1,1),new c1({name:"BackgroundCubeMaterial",uniforms:Vi(A1.backgroundCube.uniforms),vertexShader:A1.backgroundCube.vertexShader,fragmentShader:A1.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Hi.copy(C.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LA.makeRotationFromEuler(Hi)),u.material.toneMapped=lt.getTransfer(D.colorSpace)!==Mt,(f!==D||d!==D.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=D,d=D.version,p=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new pn(new D0(2,2),new c1({name:"BackgroundMaterial",uniforms:Vi(A1.background.uniforms),vertexShader:A1.background.vertexShader,fragmentShader:A1.background.fragmentShader,side:t2,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=lt.getTransfer(D.colorSpace)!==Mt,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||d!==D.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,f=D,d=D.version,p=t.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,C){b.getRGB(_4,g5(t)),i.buffers.color.setClear(_4.r,_4.g,_4.b,C,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(b,C=1){c.set(b),a=C,h(c,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,h(c,a)},render:v,addToRenderList:m,dispose:S}}function SA(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function c(x,A,W,U,Y){let Z=!1,$=f(U,W,A);r!==$&&(r=$,l(r.object)),Z=p(x,U,W,Y),Z&&g(x,U,W,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,C(x,A,W,U),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function a(){return t.createVertexArray()}function l(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function f(x,A,W){let U=W.wireframe===!0,Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let Z=Y[A.id];Z===void 0&&(Z={},Y[A.id]=Z);let $=Z[U];return $===void 0&&($=d(a()),Z[U]=$),$}function d(x){let A=[],W=[],U=[];for(let Y=0;Y<n;Y++)A[Y]=0,W[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:W,attributeDivisors:U,object:x,attributes:{},index:null}}function p(x,A,W,U){let Y=r.attributes,Z=A.attributes,$=0,K=W.getAttributes();for(let H in K)if(K[H].location>=0){let pe=Y[H],be=Z[H];if(be===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(be=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(be=x.instanceColor)),pe===void 0||pe.attribute!==be||be&&pe.data!==be.data)return!0;$++}return r.attributesNum!==$||r.index!==U}function g(x,A,W,U){let Y={},Z=A.attributes,$=0,K=W.getAttributes();for(let H in K)if(K[H].location>=0){let pe=Z[H];pe===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor));let be={};be.attribute=pe,pe&&pe.data&&(be.data=pe.data),Y[H]=be,$++}r.attributes=Y,r.attributesNum=$,r.index=U}function v(){let x=r.newAttributes;for(let A=0,W=x.length;A<W;A++)x[A]=0}function m(x){h(x,0)}function h(x,A){let W=r.newAttributes,U=r.enabledAttributes,Y=r.attributeDivisors;W[x]=1,U[x]===0&&(t.enableVertexAttribArray(x),U[x]=1),Y[x]!==A&&(t.vertexAttribDivisor(x,A),Y[x]=A)}function S(){let x=r.newAttributes,A=r.enabledAttributes;for(let W=0,U=A.length;W<U;W++)A[W]!==x[W]&&(t.disableVertexAttribArray(W),A[W]=0)}function b(x,A,W,U,Y,Z,$){$===!0?t.vertexAttribIPointer(x,A,W,Y,Z):t.vertexAttribPointer(x,A,W,U,Y,Z)}function C(x,A,W,U){v();let Y=U.attributes,Z=W.getAttributes(),$=A.defaultAttributeValues;for(let K in Z){let H=Z[K];if(H.location>=0){let ae=Y[K];if(ae===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){let pe=ae.normalized,be=ae.itemSize,Ze=e.get(ae);if(Ze===void 0)continue;let xt=Ze.buffer,j=Ze.type,ne=Ze.bytesPerElement,xe=j===t.INT||j===t.UNSIGNED_INT||ae.gpuType===W3;if(ae.isInterleavedBufferAttribute){let le=ae.data,Ne=le.stride,Ve=ae.offset;if(le.isInstancedInterleavedBuffer){for(let Je=0;Je<H.locationSize;Je++)h(H.location+Je,le.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Je=0;Je<H.locationSize;Je++)m(H.location+Je);t.bindBuffer(t.ARRAY_BUFFER,xt);for(let Je=0;Je<H.locationSize;Je++)b(H.location+Je,be/H.locationSize,j,pe,Ne*ne,(Ve+be/H.locationSize*Je)*ne,xe)}else{if(ae.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)h(H.location+le,ae.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let le=0;le<H.locationSize;le++)m(H.location+le);t.bindBuffer(t.ARRAY_BUFFER,xt);for(let le=0;le<H.locationSize;le++)b(H.location+le,be/H.locationSize,j,pe,be*ne,be/H.locationSize*le*ne,xe)}}else if($!==void 0){let pe=$[K];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(H.location,pe);break;case 3:t.vertexAttrib3fv(H.location,pe);break;case 4:t.vertexAttrib4fv(H.location,pe);break;default:t.vertexAttrib1fv(H.location,pe)}}}}S()}function D(){R();for(let x in i){let A=i[x];for(let W in A){let U=A[W];for(let Y in U)u(U[Y].object),delete U[Y];delete A[W]}delete i[x]}}function z(x){if(i[x.id]===void 0)return;let A=i[x.id];for(let W in A){let U=A[W];for(let Y in U)u(U[Y].object),delete U[Y];delete A[W]}delete i[x.id]}function w(x){for(let A in i){let W=i[A];if(W[x.id]===void 0)continue;let U=W[x.id];for(let Y in U)u(U[Y].object),delete U[Y];delete W[x.id]}}function R(){_(),o=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:R,resetDefaultState:_,dispose:D,releaseStatesOfGeometry:z,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function wA(t,e,n){let i;function s(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function c(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function a(l,u,f,d){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=a}function EA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==jn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(w){let R=w===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==E1&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==z1&&!R)}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp",u=a(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),C=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,z=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:D,maxSamples:z}}function zA(t){let e=this,n=null,i=0,s=!1,r=!1,o=new C1,c=new Ge,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let S=r?0:i,b=S*4,C=h.clippingState||null;a.value=C,C=u(g,d,b,p);for(let D=0;D!==b;++D)C[D]=n[D];h.clippingState=C,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){a.value!==n&&(a.value=n,a.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=a.value,g!==!0||m===null){let h=p+v*4,S=d.matrixWorldInverse;c.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,C=p;b!==v;++b,C+=4)o.copy(f[b]).applyMatrix4(S,c),o.normal.toArray(m,C),m[C+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function AA(t){let e=new WeakMap;function n(o,c){return c===V3?o.mapping=Oi:c===H3&&(o.mapping=Fi),o}function i(o){if(o&&o.isTexture){let c=o.mapping;if(c===V3||c===H3)if(e.has(o)){let a=e.get(o).texture;return n(a,o.mapping)}else{let a=o.image;if(a&&a.height>0){let l=new y3(a.height);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let a=e.get(c);a!==void 0&&(e.delete(c),a.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var er=4,wm=[.125,.215,.35,.446,.526,.582],ji=20,C5=new D3,Em=new ut,_5=null,L5=0,b5=0,S5=!1,Wi=(1+Math.sqrt(5))/2,Qs=1/Wi,zm=[new k(-Wi,Qs,0),new k(Wi,Qs,0),new k(-Qs,0,Wi),new k(Qs,0,Wi),new k(0,Wi,-Qs),new k(0,Wi,Qs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],S4=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){_5=this._renderer.getRenderTarget(),L5=this._renderer.getActiveCubeFace(),b5=this._renderer.getActiveMipmapLevel(),S5=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_5,L5,b5),this._renderer.xr.enabled=S5,e.scissorTest=!1,L4(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Oi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_5=this._renderer.getRenderTarget(),L5=this._renderer.getActiveCubeFace(),b5=this._renderer.getActiveMipmapLevel(),S5=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:o1,minFilter:o1,generateMipmaps:!1,type:Ks,format:jn,colorSpace:Ti,depthBuffer:!1},s=Am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TA(r)),this._blurMaterial=DA(r,e,n)}return s}_compileMaterial(e){let n=new pn(this._lodPlanes[0],e);this._renderer.compile(n,C5)}_sceneToCubeUV(e,n,i,s){let c=new sn(90,1,n,i),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Em),u.toneMapping=r2,u.autoClear=!1;let p=new Ni({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new pn(new G2,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Em),v=!0);for(let h=0;h<6;h++){let S=h%3;S===0?(c.up.set(0,a[h],0),c.lookAt(l[h],0,0)):S===1?(c.up.set(0,0,a[h]),c.lookAt(0,l[h],0)):(c.up.set(0,a[h],0),c.lookAt(0,0,l[h]));let b=this._cubeSize;L4(s,S*b,h>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===Oi||e.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pn(this._lodPlanes[0],r),c=r.uniforms;c.envMap.value=e;let a=this._cubeSize;L4(n,0,0,3*a,2*a),i.setRenderTarget(n),i.render(o,C5)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=zm[(s-r-1)%zm.length];this._blur(e,r-1,r,o,c)}n.autoClear=i}_blur(e,n,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,c){let a=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new pn(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ji-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);let h=[],S=0;for(let w=0;w<ji;++w){let R=w/v,_=Math.exp(-R*R/2);h.push(_),w===0?S+=_:w<m&&(S+=2*_)}for(let w=0;w<h.length;w++)h[w]=h[w]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",c&&(d.poleAxis.value=c);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let C=this._sizeLods[s],D=3*C*(s>b-er?s-b+er:0),z=4*(this._cubeSize-C);L4(n,D,z,3*C,2*C),a.setRenderTarget(n),a.render(f,C5)}};function TA(t){let e=[],n=[],i=[],s=t,r=t-er+1+wm.length;for(let o=0;o<r;o++){let c=Math.pow(2,s);n.push(c);let a=1/c;o>t-er?a=wm[o-t+er-1]:o===0&&(a=0),i.push(a);let l=1/(c-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,S=new Float32Array(v*g*p),b=new Float32Array(m*g*p),C=new Float32Array(h*g*p);for(let z=0;z<p;z++){let w=z%3*2/3-1,R=z>2?0:-1,_=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(_,v*g*z),b.set(d,m*g*z);let x=[z,z,z,z,z,z];C.set(x,h*g*z)}let D=new H2;D.setAttribute("position",new In(S,v)),D.setAttribute("uv",new In(b,m)),D.setAttribute("faceIndex",new In(C,h)),e.push(D),s>er&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Am(t,e,n){let i=new b1(t,e,n);return i.texture.mapping=R0,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function L4(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function DA(t,e,n){let i=new Float32Array(ji),s=new k(0,1,0);return new c1({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:P5(),fragmentShader:`

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
		`,blending:s2,depthTest:!1,depthWrite:!1})}function Tm(){return new c1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:P5(),fragmentShader:`

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
		`,blending:s2,depthTest:!1,depthWrite:!1})}function Dm(){return new c1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:P5(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:s2,depthTest:!1,depthWrite:!1})}function P5(){return`

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
	`}function IA(t){let e=new WeakMap,n=null;function i(c){if(c&&c.isTexture){let a=c.mapping,l=a===V3||a===H3,u=a===Oi||a===Fi;if(l||u){let f=e.get(c),d=f!==void 0?f.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return n===null&&(n=new S4(t)),f=l?n.fromEquirectangular(c,f):n.fromCubemap(c,f),f.texture.pmremVersion=c.pmremVersion,e.set(c,f),f.texture;if(f!==void 0)return f.texture;{let p=c.image;return l&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new S4(t)),f=l?n.fromEquirectangular(c):n.fromCubemap(c),f.texture.pmremVersion=c.pmremVersion,e.set(c,f),c.addEventListener("dispose",r),f.texture):null}}}return c}function s(c){let a=0,l=6;for(let u=0;u<l;u++)c[u]!==void 0&&a++;return a===l}function r(c){let a=c.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function NA(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ui("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function RA(t,e,n,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function c(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function a(f){let d=f.attributes;for(let p in d)e.update(d[p],t.ARRAY_BUFFER)}function l(f){let d=[],p=f.index,g=f.attributes.position,v=0;if(p!==null){let S=p.array;v=p.version;for(let b=0,C=S.length;b<C;b+=3){let D=S[b+0],z=S[b+1],w=S[b+2];d.push(D,z,z,w,w,D)}}else if(g!==void 0){let S=g.array;v=g.version;for(let b=0,C=S.length/3-1;b<C;b+=3){let D=b+0,z=b+1,w=b+2;d.push(D,z,z,w,w,D)}}else return;let m=new(m5(d)?S0:b0)(d,1);m.version=v;let h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:c,update:a,getWireframeAttribute:u}}function PA(t,e,n){let i;function s(d){i=d}let r,o;function c(d){r=d.type,o=d.bytesPerElement}function a(d,p){t.drawElements(i,p,r,d*o),n.update(p,i,1)}function l(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,r,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let h=0;for(let S=0;S<g;S++)h+=p[S]*v[S];n.update(h,i,1)}}this.setMode=s,this.setIndex=c,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function OA(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,c){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=c*(r/3);break;case t.LINES:n.lines+=c*(r/2);break;case t.LINE_STRIP:n.lines+=c*(r-1);break;case t.LINE_LOOP:n.lines+=c*r;break;case t.POINTS:n.points+=c*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function FA(t,e,n){let i=new WeakMap,s=new Nt;function r(o,c,a){let l=o.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(c);if(d===void 0||d.count!==f){let x=function(){R.dispose(),i.delete(c),c.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();let g=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,m=c.morphAttributes.color!==void 0,h=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],b=c.morphAttributes.color||[],C=0;g===!0&&(C=1),v===!0&&(C=2),m===!0&&(C=3);let D=c.attributes.position.count*C,z=1;D>e.maxTextureSize&&(z=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let w=new Float32Array(D*z*4*f),R=new _0(w,D,z,f);R.type=z1,R.needsUpdate=!0;let _=C*4;for(let A=0;A<f;A++){let W=h[A],U=S[A],Y=b[A],Z=D*z*4*A;for(let $=0;$<W.count;$++){let K=$*_;g===!0&&(s.fromBufferAttribute(W,$),w[Z+K+0]=s.x,w[Z+K+1]=s.y,w[Z+K+2]=s.z,w[Z+K+3]=0),v===!0&&(s.fromBufferAttribute(U,$),w[Z+K+4]=s.x,w[Z+K+5]=s.y,w[Z+K+6]=s.z,w[Z+K+7]=0),m===!0&&(s.fromBufferAttribute(Y,$),w[Z+K+8]=s.x,w[Z+K+9]=s.y,w[Z+K+10]=s.z,w[Z+K+11]=Y.itemSize===4?s.w:1)}}d={count:f,texture:R,size:new yt(D,z)},i.set(c,d),c.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let v=c.morphTargetsRelative?1:1-g;a.getUniforms().setValue(t,"morphTargetBaseInfluence",v),a.getUniforms().setValue(t,"morphTargetInfluences",l)}a.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),a.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function kA(t,e,n,i){let s=new WeakMap;function r(a){let l=i.render.frame,u=a.geometry,f=e.get(a,u);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),s.get(a)!==l&&(n.update(a.instanceMatrix,t.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,t.ARRAY_BUFFER),s.set(a,l))),a.isSkinnedMesh){let d=a.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function c(a){let l=a.target;l.removeEventListener("dispose",c),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:o}}var Zm=new c2,Im=new T0(1,1),Jm=new _0,Km=new g3,Qm=new E0,Nm=[],Rm=[],Pm=new Float32Array(16),Om=new Float32Array(9),Fm=new Float32Array(4);function nr(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Nm[s];if(r===void 0&&(r=new Float32Array(s),Nm[s]=r),e!==0){i.toArray(r,0);for(let o=1,c=0;o!==e;++o)c+=n,t[o].toArray(r,c)}return r}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function E4(t,e){let n=Rm[e];n===void 0&&(n=new Int32Array(e),Rm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function UA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function BA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function VA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function HA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function GA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Fm.set(i),t.uniformMatrix2fv(this.addr,!1,Fm),Gt(n,i)}}function WA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Om.set(i),t.uniformMatrix3fv(this.addr,!1,Om),Gt(n,i)}}function jA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Pm.set(i),t.uniformMatrix4fv(this.addr,!1,Pm),Gt(n,i)}}function $A(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function XA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function YA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function ZA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function KA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function QA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function eT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Im.compareFunction=h5,r=Im):r=Zm,n.setTexture2D(e||r,s)}function tT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Km,s)}function nT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Qm,s)}function iT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Jm,s)}function sT(t){switch(t){case 5126:return UA;case 35664:return BA;case 35665:return VA;case 35666:return HA;case 35674:return GA;case 35675:return WA;case 35676:return jA;case 5124:case 35670:return $A;case 35667:case 35671:return qA;case 35668:case 35672:return XA;case 35669:case 35673:return YA;case 5125:return ZA;case 36294:return JA;case 36295:return KA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}function rT(t,e){t.uniform1fv(this.addr,e)}function oT(t,e){let n=nr(e,this.size,2);t.uniform2fv(this.addr,n)}function cT(t,e){let n=nr(e,this.size,3);t.uniform3fv(this.addr,n)}function aT(t,e){let n=nr(e,this.size,4);t.uniform4fv(this.addr,n)}function lT(t,e){let n=nr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uT(t,e){let n=nr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fT(t,e){let n=nr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dT(t,e){t.uniform1iv(this.addr,e)}function hT(t,e){t.uniform2iv(this.addr,e)}function pT(t,e){t.uniform3iv(this.addr,e)}function mT(t,e){t.uniform4iv(this.addr,e)}function gT(t,e){t.uniform1uiv(this.addr,e)}function MT(t,e){t.uniform2uiv(this.addr,e)}function vT(t,e){t.uniform3uiv(this.addr,e)}function yT(t,e){t.uniform4uiv(this.addr,e)}function xT(t,e,n){let i=this.cache,s=e.length,r=E4(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||Zm,r[o])}function CT(t,e,n){let i=this.cache,s=e.length,r=E4(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Km,r[o])}function _T(t,e,n){let i=this.cache,s=e.length,r=E4(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Qm,r[o])}function LT(t,e,n){let i=this.cache,s=e.length,r=E4(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Jm,r[o])}function bT(t){switch(t){case 5126:return rT;case 35664:return oT;case 35665:return cT;case 35666:return aT;case 35674:return lT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return MT;case 36295:return vT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return LT}}var E5=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sT(n.type)}},z5=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bT(n.type)}},A5=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(e,n[c.id],i)}}},w5=/(\w+)(\])?(\[|\.)?/g;function km(t,e){t.seq.push(e),t.map[e.id]=e}function ST(t,e,n){let i=t.name,s=i.length;for(w5.lastIndex=0;;){let r=w5.exec(i),o=w5.lastIndex,c=r[1],a=r[2]==="]",l=r[3];if(a&&(c=c|0),l===void 0||l==="["&&o+2===s){km(n,l===void 0?new E5(c,t,e):new z5(c,t,e));break}else{let f=n.map[c];f===void 0&&(f=new A5(c),km(n,f)),n=f}}}var tr=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);ST(r,o,this)}}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let c=n[r],a=i[c.id];a.needsUpdate!==!1&&c.setValue(e,a.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function Um(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var wT=37297,ET=0;function zT(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let c=o+1;i.push(`${c===e?">":" "} ${c}: ${n[o]}`)}return i.join(`
`)}var Bm=new Ge;function AT(t){lt._getMatrix(Bm,lt.workingColorSpace,t);let e=`mat3( ${Bm.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case y0:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Vm(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+zT(t.getShaderSource(e),o)}else return s}function TT(t,e){let n=AT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function DT(t,e){let n;switch(e){case em:n="Linear";break;case tm:n="Reinhard";break;case nm:n="Cineon";break;case im:n="ACESFilmic";break;case rm:n="AgX";break;case om:n="Neutral";break;case sm:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var b4=new k;function IT(){lt.getLuminanceCoefficients(b4);let t=b4.x.toFixed(4),e=b4.y.toFixed(4),n=b4.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(H0).join(`
`)}function RT(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PT(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,c=1;r.type===t.FLOAT_MAT2&&(c=2),r.type===t.FLOAT_MAT3&&(c=3),r.type===t.FLOAT_MAT4&&(c=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:c}}return n}function H0(t){return t!==""}function Hm(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var OT=/^[ \t]*#include +<([\w\d./]+)>/gm;function T5(t){return t.replace(OT,kT)}var FT=new Map;function kT(t,e){let n=qe[e];if(n===void 0){let i=FT.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return T5(n)}var UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(t){return t.replace(UT,BT)}function BT(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===K8?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Np?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===S1&&(e="SHADOWMAP_TYPE_VSM"),e}function HT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Oi:case Fi:e="ENVMAP_TYPE_CUBE";break;case R0:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function WT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case n5:e="ENVMAP_BLENDING_MULTIPLY";break;case Kp:e="ENVMAP_BLENDING_MIX";break;case Qp:e="ENVMAP_BLENDING_ADD";break}return e}function jT(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $T(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,c=n.fragmentShader,a=VT(n),l=HT(n),u=GT(n),f=WT(n),d=jT(n),p=NT(n),g=RT(r),v=s.createProgram(),m,h,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(H0).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(H0).join(`
`),h.length>0&&(h+=`
`)):(m=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+a:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(H0).join(`
`),h=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+a:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==r2?"#define TONE_MAPPING":"",n.toneMapping!==r2?qe.tonemapping_pars_fragment:"",n.toneMapping!==r2?DT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,TT("linearToOutputTexel",n.outputColorSpace),IT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(H0).join(`
`)),o=T5(o),o=Hm(o,n),o=Gm(o,n),c=T5(c),c=Hm(c,n),c=Gm(c,n),o=Wm(o),c=Wm(c),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===p5?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===p5?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let b=S+m+o,C=S+h+c,D=Um(s,s.VERTEX_SHADER,b),z=Um(s,s.FRAGMENT_SHADER,C);s.attachShader(v,D),s.attachShader(v,z),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(A){if(t.debug.checkShaderErrors){let W=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(z).trim(),Z=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,D,z);else{let K=Vm(s,D,"vertex"),H=Vm(s,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+W+`
`+K+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(U===""||Y==="")&&($=!1);$&&(A.diagnostics={runnable:Z,programLog:W,vertexShader:{log:U,prefix:m},fragmentShader:{log:Y,prefix:h}})}s.deleteShader(D),s.deleteShader(z),R=new tr(s,v),_=PT(s,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,wT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ET++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=z,this}var qT=0,D5=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new I5(e),n.set(e,i)),i}},I5=class{constructor(e){this.id=qT++,this.code=e,this.usedTimes=0}};function XT(t,e,n,i,s,r,o){let c=new L0,a=new D5,l=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,x,A,W,U){let Y=W.fog,Z=U.geometry,$=_.isMeshStandardMaterial?W.environment:null,K=(_.isMeshStandardMaterial?n:e).get(_.envMap||$),H=K&&K.mapping===R0?K.image.height:null,ae=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let pe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,be=pe!==void 0?pe.length:0,Ze=0;Z.morphAttributes.position!==void 0&&(Ze=1),Z.morphAttributes.normal!==void 0&&(Ze=2),Z.morphAttributes.color!==void 0&&(Ze=3);let xt,j,ne,xe;if(ae){let gt=A1[ae];xt=gt.vertexShader,j=gt.fragmentShader}else xt=_.vertexShader,j=_.fragmentShader,a.update(_),ne=a.getVertexShaderID(_),xe=a.getFragmentShaderID(_);let le=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Ve=U.isInstancedMesh===!0,Je=U.isBatchedMesh===!0,At=!!_.map,ot=!!_.matcap,Rt=!!K,E=!!_.aoMap,Nn=!!_.lightMap,et=!!_.bumpMap,tt=!!_.normalMap,Se=!!_.displacementMap,bt=!!_.emissiveMap,we=!!_.metalnessMap,L=!!_.roughnessMap,M=_.anisotropy>0,P=_.clearcoat>0,q=_.dispersion>0,J=_.iridescence>0,G=_.sheen>0,Ce=_.transmission>0,ue=M&&!!_.anisotropyMap,me=P&&!!_.clearcoatMap,ct=P&&!!_.clearcoatNormalMap,te=P&&!!_.clearcoatRoughnessMap,ge=J&&!!_.iridescenceMap,De=J&&!!_.iridescenceThicknessMap,Oe=G&&!!_.sheenColorMap,Me=G&&!!_.sheenRoughnessMap,nt=!!_.specularMap,$e=!!_.specularColorMap,_t=!!_.specularIntensityMap,T=Ce&&!!_.transmissionMap,oe=Ce&&!!_.thicknessMap,B=!!_.gradientMap,X=!!_.alphaMap,de=_.alphaTest>0,fe=!!_.alphaHash,We=!!_.extensions,Tt=r2;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Tt=t.toneMapping);let Kt={shaderID:ae,shaderType:_.type,shaderName:_.name,vertexShader:xt,fragmentShader:j,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Je,batchingColor:Je&&U._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&U.instanceColor!==null,instancingMorph:Ve&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ti,alphaToCoverage:!!_.alphaToCoverage,map:At,matcap:ot,envMap:Rt,envMapMode:Rt&&K.mapping,envMapCubeUVHeight:H,aoMap:E,lightMap:Nn,bumpMap:et,normalMap:tt,displacementMap:d&&Se,emissiveMap:bt,normalMapObjectSpace:tt&&_.normalMapType===fm,normalMapTangentSpace:tt&&_.normalMapType===um,metalnessMap:we,roughnessMap:L,anisotropy:M,anisotropyMap:ue,clearcoat:P,clearcoatMap:me,clearcoatNormalMap:ct,clearcoatRoughnessMap:te,dispersion:q,iridescence:J,iridescenceMap:ge,iridescenceThicknessMap:De,sheen:G,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:nt,specularColorMap:$e,specularIntensityMap:_t,transmission:Ce,transmissionMap:T,thicknessMap:oe,gradientMap:B,opaque:_.transparent===!1&&_.blending===Ei&&_.alphaToCoverage===!1,alphaMap:X,alphaTest:de,alphaHash:fe,combine:_.combine,mapUv:At&&v(_.map.channel),aoMapUv:E&&v(_.aoMap.channel),lightMapUv:Nn&&v(_.lightMap.channel),bumpMapUv:et&&v(_.bumpMap.channel),normalMapUv:tt&&v(_.normalMap.channel),displacementMapUv:Se&&v(_.displacementMap.channel),emissiveMapUv:bt&&v(_.emissiveMap.channel),metalnessMapUv:we&&v(_.metalnessMap.channel),roughnessMapUv:L&&v(_.roughnessMap.channel),anisotropyMapUv:ue&&v(_.anisotropyMap.channel),clearcoatMapUv:me&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(_.sheenRoughnessMap.channel),specularMapUv:nt&&v(_.specularMap.channel),specularColorMapUv:$e&&v(_.specularColorMap.channel),specularIntensityMapUv:_t&&v(_.specularIntensityMap.channel),transmissionMapUv:T&&v(_.transmissionMap.channel),thicknessMapUv:oe&&v(_.thicknessMap.channel),alphaMapUv:X&&v(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(tt||M),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Z.attributes.uv&&(At||X),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ne,skinning:U.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:At&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===Mt,decodeVideoTextureEmissive:bt&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===Mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===w1,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:We&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&_.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function h(_){let x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)x.push(A),x.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(S(x,_),b(x,_),x.push(t.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function S(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function b(_,x){c.disableAll(),x.supportsVertexTextures&&c.enable(0),x.instancing&&c.enable(1),x.instancingColor&&c.enable(2),x.instancingMorph&&c.enable(3),x.matcap&&c.enable(4),x.envMap&&c.enable(5),x.normalMapObjectSpace&&c.enable(6),x.normalMapTangentSpace&&c.enable(7),x.clearcoat&&c.enable(8),x.iridescence&&c.enable(9),x.alphaTest&&c.enable(10),x.vertexColors&&c.enable(11),x.vertexAlphas&&c.enable(12),x.vertexUv1s&&c.enable(13),x.vertexUv2s&&c.enable(14),x.vertexUv3s&&c.enable(15),x.vertexTangents&&c.enable(16),x.anisotropy&&c.enable(17),x.alphaHash&&c.enable(18),x.batching&&c.enable(19),x.dispersion&&c.enable(20),x.batchingColor&&c.enable(21),_.push(c.mask),c.disableAll(),x.fog&&c.enable(0),x.useFog&&c.enable(1),x.flatShading&&c.enable(2),x.logarithmicDepthBuffer&&c.enable(3),x.reverseDepthBuffer&&c.enable(4),x.skinning&&c.enable(5),x.morphTargets&&c.enable(6),x.morphNormals&&c.enable(7),x.morphColors&&c.enable(8),x.premultipliedAlpha&&c.enable(9),x.shadowMapEnabled&&c.enable(10),x.doubleSided&&c.enable(11),x.flipSided&&c.enable(12),x.useDepthPacking&&c.enable(13),x.dithering&&c.enable(14),x.transmission&&c.enable(15),x.sheen&&c.enable(16),x.opaque&&c.enable(17),x.pointsUvs&&c.enable(18),x.decodeVideoTexture&&c.enable(19),x.decodeVideoTextureEmissive&&c.enable(20),x.alphaToCoverage&&c.enable(21),_.push(c.mask)}function C(_){let x=g[_.type],A;if(x){let W=A1[x];A=bm.clone(W.uniforms)}else A=_.uniforms;return A}function D(_,x){let A;for(let W=0,U=u.length;W<U;W++){let Y=u[W];if(Y.cacheKey===x){A=Y,++A.usedTimes;break}}return A===void 0&&(A=new $T(t,x,_,r),u.push(A)),A}function z(_){if(--_.usedTimes===0){let x=u.indexOf(_);u[x]=u[u.length-1],u.pop(),_.destroy()}}function w(_){a.remove(_)}function R(){a.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:C,acquireProgram:D,releaseProgram:z,releaseShaderCache:w,programs:u,dispose:R}}function YT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let c=t.get(o);return c===void 0&&(c={},t.set(o,c)),c}function i(o){t.delete(o)}function s(o,c,a){t.get(o)[c]=a}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function ZT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $m(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qm(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,d,p,g,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function c(f,d,p,g,v,m){let h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):n.push(h)}function a(f,d,p,g,v,m){let h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):n.unshift(h)}function l(f,d){n.length>1&&n.sort(f||ZT),i.length>1&&i.sort(d||$m),s.length>1&&s.sort(d||$m)}function u(){for(let f=e,d=t.length;f<d;f++){let p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:a,finish:u,sort:l}}function JT(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new qm,t.set(i,[o])):s>=r.length?(o=new qm,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function KT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new ut};break;case"SpotLight":n={position:new k,direction:new k,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":n={color:new ut,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function QT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var eD=0;function tD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nD(t){let e=new KT,n=QT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let s=new k,r=new Ut,o=new Ut;function c(l){let u=0,f=0,d=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,S=0,b=0,C=0,D=0,z=0,w=0;l.sort(tD);for(let _=0,x=l.length;_<x;_++){let A=l[_],W=A.color,U=A.intensity,Y=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=W.r*U,f+=W.g*U,d+=W.b*U;else if(A.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(A.sh.coefficients[$],U);w++}else if(A.isDirectionalLight){let $=e.get(A);if($.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,H=n.get(A);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=A.shadow.matrix,S++}i.directional[p]=$,p++}else if(A.isSpotLight){let $=e.get(A);$.position.setFromMatrixPosition(A.matrixWorld),$.color.copy(W).multiplyScalar(U),$.distance=Y,$.coneCos=Math.cos(A.angle),$.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),$.decay=A.decay,i.spot[v]=$;let K=A.shadow;if(A.map&&(i.spotLightMap[D]=A.map,D++,K.updateMatrices(A),A.castShadow&&z++),i.spotLightMatrix[v]=K.matrix,A.castShadow){let H=n.get(A);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=Z,C++}v++}else if(A.isRectAreaLight){let $=e.get(A);$.color.copy(W).multiplyScalar(U),$.halfWidth.set(A.width*.5,0,0),$.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=$,m++}else if(A.isPointLight){let $=e.get(A);if($.color.copy(A.color).multiplyScalar(A.intensity),$.distance=A.distance,$.decay=A.decay,A.castShadow){let K=A.shadow,H=n.get(A);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=A.shadow.matrix,b++}i.point[g]=$,g++}else if(A.isHemisphereLight){let $=e.get(A);$.skyColor.copy(A.color).multiplyScalar(U),$.groundColor.copy(A.groundColor).multiplyScalar(U),i.hemi[h]=$,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==S||R.numPointShadows!==b||R.numSpotShadows!==C||R.numSpotMaps!==D||R.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=C+D-z,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=S,R.numPointShadows=b,R.numSpotShadows=C,R.numSpotMaps=D,R.numLightProbes=w,i.version=eD++)}function a(l,u){let f=0,d=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let h=0,S=l.length;h<S;h++){let b=l[h];if(b.isDirectionalLight){let C=i.directional[f];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),f++}else if(b.isSpotLight){let C=i.spot[p];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let C=i.rectArea[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let C=i.point[d];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let C=i.hemi[v];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(m),v++}}}return{setup:c,setupView:a,state:i}}function Xm(t){let e=new nD(t),n=[],i=[];function s(u){l.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function c(){e.setup(n)}function a(u){e.setupView(n,u)}let l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:c,setupLightsView:a,pushLight:r,pushShadow:o}}function iD(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),c;return o===void 0?(c=new Xm(t),e.set(s,[c])):r>=o.length?(c=new Xm(t),o.push(c)):c=o[r],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var sD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rD=`uniform sampler2D shadow_pass;
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
}`;function oD(t,e,n){let i=new A0,s=new yt,r=new yt,o=new Nt,c=new x3({depthPacking:lm}),a=new C3,l={},u=n.maxTextureSize,f={[t2]:ln,[ln]:t2,[w1]:w1},d=new c1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:sD,fragmentShader:rD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new H2;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=K8;let h=this.type;this.render=function(z,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||z.length===0)return;let _=t.getRenderTarget(),x=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),W=t.state;W.setBlending(s2),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let U=h!==S1&&this.type===S1,Y=h===S1&&this.type!==S1;for(let Z=0,$=z.length;Z<$;Z++){let K=z[Z],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ae=H.getFrameExtents();if(s.multiply(ae),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,H.mapSize.y=r.y)),H.map===null||U===!0||Y===!0){let be=this.type!==S1?{minFilter:Gn,magFilter:Gn}:{};H.map!==null&&H.map.dispose(),H.map=new b1(s.x,s.y,be),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();let pe=H.getViewportCount();for(let be=0;be<pe;be++){let Ze=H.getViewport(be);o.set(r.x*Ze.x,r.y*Ze.y,r.x*Ze.z,r.y*Ze.w),W.viewport(o),H.updateMatrices(K,be),i=H.getFrustum(),C(w,R,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===S1&&S(H,R),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(_,x,A)};function S(z,w){let R=e.update(v);d.defines.VSM_SAMPLES!==z.blurSamples&&(d.defines.VSM_SAMPLES=z.blurSamples,p.defines.VSM_SAMPLES=z.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new b1(s.x,s.y)),d.uniforms.shadow_pass.value=z.map.texture,d.uniforms.resolution.value=z.mapSize,d.uniforms.radius.value=z.radius,t.setRenderTarget(z.mapPass),t.clear(),t.renderBufferDirect(w,null,R,d,v,null),p.uniforms.shadow_pass.value=z.mapPass.texture,p.uniforms.resolution.value=z.mapSize,p.uniforms.radius.value=z.radius,t.setRenderTarget(z.map),t.clear(),t.renderBufferDirect(w,null,R,p,v,null)}function b(z,w,R,_){let x=null,A=R.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(A!==void 0)x=A;else if(x=R.isPointLight===!0?a:c,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let W=x.uuid,U=w.uuid,Y=l[W];Y===void 0&&(Y={},l[W]=Y);let Z=Y[U];Z===void 0&&(Z=x.clone(),Y[U]=Z,w.addEventListener("dispose",D)),x=Z}if(x.visible=w.visible,x.wireframe=w.wireframe,_===S1?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let W=t.properties.get(x);W.light=R}return x}function C(z,w,R,_,x){if(z.visible===!1)return;if(z.layers.test(w.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&x===S1)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,z.matrixWorld);let U=e.update(z),Y=z.material;if(Array.isArray(Y)){let Z=U.groups;for(let $=0,K=Z.length;$<K;$++){let H=Z[$],ae=Y[H.materialIndex];if(ae&&ae.visible){let pe=b(z,ae,_,x);z.onBeforeShadow(t,z,w,R,U,pe,H),t.renderBufferDirect(R,null,U,pe,z,H),z.onAfterShadow(t,z,w,R,U,pe,H)}}}else if(Y.visible){let Z=b(z,Y,_,x);z.onBeforeShadow(t,z,w,R,U,Z,null),t.renderBufferDirect(R,null,U,Z,z,null),z.onAfterShadow(t,z,w,R,U,Z,null)}}let W=z.children;for(let U=0,Y=W.length;U<Y;U++)C(W[U],w,R,_,x)}function D(z){z.target.removeEventListener("dispose",D);for(let R in l){let _=l[R],x=z.target.uuid;x in _&&(_[x].dispose(),delete _[x])}}}var cD={[R3]:P3,[O3]:U3,[F3]:B3,[zi]:k3,[P3]:R3,[U3]:O3,[B3]:F3,[k3]:zi};function aD(t,e){function n(){let T=!1,oe=new Nt,B=null,X=new Nt(0,0,0,0);return{setMask:function(de){B!==de&&!T&&(t.colorMask(de,de,de,de),B=de)},setLocked:function(de){T=de},setClear:function(de,fe,We,Tt,Kt){Kt===!0&&(de*=Tt,fe*=Tt,We*=Tt),oe.set(de,fe,We,Tt),X.equals(oe)===!1&&(t.clearColor(de,fe,We,Tt),X.copy(oe))},reset:function(){T=!1,B=null,X.set(-1,0,0,0)}}}function i(){let T=!1,oe=!1,B=null,X=null,de=null;return{setReversed:function(fe){if(oe!==fe){let We=e.get("EXT_clip_control");oe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);let Tt=de;de=null,this.setClear(Tt)}oe=fe},getReversed:function(){return oe},setTest:function(fe){fe?le(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(fe){B!==fe&&!T&&(t.depthMask(fe),B=fe)},setFunc:function(fe){if(oe&&(fe=cD[fe]),X!==fe){switch(fe){case R3:t.depthFunc(t.NEVER);break;case P3:t.depthFunc(t.ALWAYS);break;case O3:t.depthFunc(t.LESS);break;case zi:t.depthFunc(t.LEQUAL);break;case F3:t.depthFunc(t.EQUAL);break;case k3:t.depthFunc(t.GEQUAL);break;case U3:t.depthFunc(t.GREATER);break;case B3:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=fe}},setLocked:function(fe){T=fe},setClear:function(fe){de!==fe&&(oe&&(fe=1-fe),t.clearDepth(fe),de=fe)},reset:function(){T=!1,B=null,X=null,de=null,oe=!1}}}function s(){let T=!1,oe=null,B=null,X=null,de=null,fe=null,We=null,Tt=null,Kt=null;return{setTest:function(gt){T||(gt?le(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(gt){oe!==gt&&!T&&(t.stencilMask(gt),oe=gt)},setFunc:function(gt,$n,T1){(B!==gt||X!==$n||de!==T1)&&(t.stencilFunc(gt,$n,T1),B=gt,X=$n,de=T1)},setOp:function(gt,$n,T1){(fe!==gt||We!==$n||Tt!==T1)&&(t.stencilOp(gt,$n,T1),fe=gt,We=$n,Tt=T1)},setLocked:function(gt){T=gt},setClear:function(gt){Kt!==gt&&(t.clearStencil(gt),Kt=gt)},reset:function(){T=!1,oe=null,B=null,X=null,de=null,fe=null,We=null,Tt=null,Kt=null}}}let r=new n,o=new i,c=new s,a=new WeakMap,l=new WeakMap,u={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,S=null,b=null,C=null,D=null,z=null,w=new ut(0,0,0),R=0,_=!1,x=null,A=null,W=null,U=null,Y=null,Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,K=0,H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=K>=2);let ae=null,pe={},be=t.getParameter(t.SCISSOR_BOX),Ze=t.getParameter(t.VIEWPORT),xt=new Nt().fromArray(be),j=new Nt().fromArray(Ze);function ne(T,oe,B,X){let de=new Uint8Array(4),fe=t.createTexture();t.bindTexture(T,fe),t.texParameteri(T,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(T,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<B;We++)T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(oe+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return fe}let xe={};xe[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),le(t.DEPTH_TEST),o.setFunc(zi),et(!1),tt(J8),le(t.CULL_FACE),E(s2);function le(T){u[T]!==!0&&(t.enable(T),u[T]=!0)}function Ne(T){u[T]!==!1&&(t.disable(T),u[T]=!1)}function Ve(T,oe){return f[T]!==oe?(t.bindFramebuffer(T,oe),f[T]=oe,T===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=oe),T===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Je(T,oe){let B=p,X=!1;if(T){B=d.get(oe),B===void 0&&(B=[],d.set(oe,B));let de=T.textures;if(B.length!==de.length||B[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,We=de.length;fe<We;fe++)B[fe]=t.COLOR_ATTACHMENT0+fe;B.length=de.length,X=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,X=!0);X&&t.drawBuffers(B)}function At(T){return g!==T?(t.useProgram(T),g=T,!0):!1}let ot={[B2]:t.FUNC_ADD,[Pp]:t.FUNC_SUBTRACT,[Op]:t.FUNC_REVERSE_SUBTRACT};ot[Fp]=t.MIN,ot[kp]=t.MAX;let Rt={[Up]:t.ZERO,[Bp]:t.ONE,[Vp]:t.SRC_COLOR,[a3]:t.SRC_ALPHA,[qp]:t.SRC_ALPHA_SATURATE,[jp]:t.DST_COLOR,[Gp]:t.DST_ALPHA,[Hp]:t.ONE_MINUS_SRC_COLOR,[l3]:t.ONE_MINUS_SRC_ALPHA,[$p]:t.ONE_MINUS_DST_COLOR,[Wp]:t.ONE_MINUS_DST_ALPHA,[Xp]:t.CONSTANT_COLOR,[Yp]:t.ONE_MINUS_CONSTANT_COLOR,[Zp]:t.CONSTANT_ALPHA,[Jp]:t.ONE_MINUS_CONSTANT_ALPHA};function E(T,oe,B,X,de,fe,We,Tt,Kt,gt){if(T===s2){v===!0&&(Ne(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),T!==Rp){if(T!==m||gt!==_){if((h!==B2||C!==B2)&&(t.blendEquation(t.FUNC_ADD),h=B2,C=B2),gt)switch(T){case Ei:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Q8:t.blendFunc(t.ONE,t.ONE);break;case e5:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case t5:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Ei:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Q8:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case e5:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case t5:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}S=null,b=null,D=null,z=null,w.set(0,0,0),R=0,m=T,_=gt}return}de=de||oe,fe=fe||B,We=We||X,(oe!==h||de!==C)&&(t.blendEquationSeparate(ot[oe],ot[de]),h=oe,C=de),(B!==S||X!==b||fe!==D||We!==z)&&(t.blendFuncSeparate(Rt[B],Rt[X],Rt[fe],Rt[We]),S=B,b=X,D=fe,z=We),(Tt.equals(w)===!1||Kt!==R)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Kt),w.copy(Tt),R=Kt),m=T,_=!1}function Nn(T,oe){T.side===w1?Ne(t.CULL_FACE):le(t.CULL_FACE);let B=T.side===ln;oe&&(B=!B),et(B),T.blending===Ei&&T.transparent===!1?E(s2):E(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),r.setMask(T.colorWrite);let X=T.stencilWrite;c.setTest(X),X&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),bt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(T){x!==T&&(T?t.frontFace(t.CW):t.frontFace(t.CCW),x=T)}function tt(T){T!==Dp?(le(t.CULL_FACE),T!==A&&(T===J8?t.cullFace(t.BACK):T===Ip?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),A=T}function Se(T){T!==W&&($&&t.lineWidth(T),W=T)}function bt(T,oe,B){T?(le(t.POLYGON_OFFSET_FILL),(U!==oe||Y!==B)&&(t.polygonOffset(oe,B),U=oe,Y=B)):Ne(t.POLYGON_OFFSET_FILL)}function we(T){T?le(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function L(T){T===void 0&&(T=t.TEXTURE0+Z-1),ae!==T&&(t.activeTexture(T),ae=T)}function M(T,oe,B){B===void 0&&(ae===null?B=t.TEXTURE0+Z-1:B=ae);let X=pe[B];X===void 0&&(X={type:void 0,texture:void 0},pe[B]=X),(X.type!==T||X.texture!==oe)&&(ae!==B&&(t.activeTexture(B),ae=B),t.bindTexture(T,oe||xe[T]),X.type=T,X.texture=oe)}function P(){let T=pe[ae];T!==void 0&&T.type!==void 0&&(t.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function G(){try{t.texSubImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ct(){try{t.texStorage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{t.texStorage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Oe(T){xt.equals(T)===!1&&(t.scissor(T.x,T.y,T.z,T.w),xt.copy(T))}function Me(T){j.equals(T)===!1&&(t.viewport(T.x,T.y,T.z,T.w),j.copy(T))}function nt(T,oe){let B=l.get(oe);B===void 0&&(B=new WeakMap,l.set(oe,B));let X=B.get(T);X===void 0&&(X=t.getUniformBlockIndex(oe,T.name),B.set(T,X))}function $e(T,oe){let X=l.get(oe).get(T);a.get(oe)!==X&&(t.uniformBlockBinding(oe,X,T.__bindingPointIndex),a.set(oe,X))}function _t(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ae=null,pe={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,S=null,b=null,C=null,D=null,z=null,w=new ut(0,0,0),R=0,_=!1,x=null,A=null,W=null,U=null,Y=null,xt.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:le,disable:Ne,bindFramebuffer:Ve,drawBuffers:Je,useProgram:At,setBlending:E,setMaterial:Nn,setFlipSided:et,setCullFace:tt,setLineWidth:Se,setPolygonOffset:bt,setScissorTest:we,activeTexture:L,bindTexture:M,unbindTexture:P,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:ge,texImage3D:De,updateUBOMapping:nt,uniformBlockBinding:$e,texStorage2D:ct,texStorage3D:te,texSubImage2D:G,texSubImage3D:Ce,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:Oe,viewport:Me,reset:_t}}function lD(t,e,n,i,s,r,o){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,u=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,M){return p?new OffscreenCanvas(L,M):Ys("canvas")}function v(L,M,P){let q=1,J=we(L);if((J.width>P||J.height>P)&&(q=P/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let G=Math.floor(q*J.width),Ce=Math.floor(q*J.height);f===void 0&&(f=g(G,Ce));let ue=M?g(G,Ce):f;return ue.width=G,ue.height=Ce,ue.getContext("2d").drawImage(L,0,0,G,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+Ce+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function m(L){return L.generateMipmaps}function h(L){t.generateMipmap(L)}function S(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(L,M,P,q,J=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let G=M;if(M===t.RED&&(P===t.FLOAT&&(G=t.R32F),P===t.HALF_FLOAT&&(G=t.R16F),P===t.UNSIGNED_BYTE&&(G=t.R8)),M===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(G=t.R8UI),P===t.UNSIGNED_SHORT&&(G=t.R16UI),P===t.UNSIGNED_INT&&(G=t.R32UI),P===t.BYTE&&(G=t.R8I),P===t.SHORT&&(G=t.R16I),P===t.INT&&(G=t.R32I)),M===t.RG&&(P===t.FLOAT&&(G=t.RG32F),P===t.HALF_FLOAT&&(G=t.RG16F),P===t.UNSIGNED_BYTE&&(G=t.RG8)),M===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&(G=t.RG8UI),P===t.UNSIGNED_SHORT&&(G=t.RG16UI),P===t.UNSIGNED_INT&&(G=t.RG32UI),P===t.BYTE&&(G=t.RG8I),P===t.SHORT&&(G=t.RG16I),P===t.INT&&(G=t.RG32I)),M===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&(G=t.RGB8UI),P===t.UNSIGNED_SHORT&&(G=t.RGB16UI),P===t.UNSIGNED_INT&&(G=t.RGB32UI),P===t.BYTE&&(G=t.RGB8I),P===t.SHORT&&(G=t.RGB16I),P===t.INT&&(G=t.RGB32I)),M===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),P===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),P===t.UNSIGNED_INT&&(G=t.RGBA32UI),P===t.BYTE&&(G=t.RGBA8I),P===t.SHORT&&(G=t.RGBA16I),P===t.INT&&(G=t.RGBA32I)),M===t.RGB&&P===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),M===t.RGBA){let Ce=J?y0:lt.getTransfer(q);P===t.FLOAT&&(G=t.RGBA32F),P===t.HALF_FLOAT&&(G=t.RGBA16F),P===t.UNSIGNED_BYTE&&(G=Ce===Mt?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function C(L,M){let P;return L?M===null||M===q2||M===ki?P=t.DEPTH24_STENCIL8:M===z1?P=t.DEPTH32F_STENCIL8:M===Js&&(P=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===q2||M===ki?P=t.DEPTH_COMPONENT24:M===z1?P=t.DEPTH_COMPONENT32F:M===Js&&(P=t.DEPTH_COMPONENT16),P}function D(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Gn&&L.minFilter!==o1?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function z(L){let M=L.target;M.removeEventListener("dispose",z),R(M),M.isVideoTexture&&u.delete(M)}function w(L){let M=L.target;M.removeEventListener("dispose",w),x(M)}function R(L){let M=i.get(L);if(M.__webglInit===void 0)return;let P=L.source,q=d.get(P);if(q){let J=q[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(L),Object.keys(q).length===0&&d.delete(P)}i.remove(L)}function _(L){let M=i.get(L);t.deleteTexture(M.__webglTexture);let P=L.source,q=d.get(P);delete q[M.__cacheKey],o.memory.textures--}function x(L){let M=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let J=0;J<M.__webglFramebuffer[q].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[q][J]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let P=L.textures;for(let q=0,J=P.length;q<J;q++){let G=i.get(P[q]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(P[q])}i.remove(L)}let A=0;function W(){A=0}function U(){let L=A;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),A+=1,L}function Y(L){let M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function Z(L,M){let P=i.get(L);if(L.isVideoTexture&&Se(L),L.isRenderTargetTexture===!1&&L.version>0&&P.__version!==L.version){let q=L.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(P,L,M);return}}n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+M)}function $(L,M){let P=i.get(L);if(L.version>0&&P.__version!==L.version){j(P,L,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+M)}function K(L,M){let P=i.get(L);if(L.version>0&&P.__version!==L.version){j(P,L,M);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+M)}function H(L,M){let P=i.get(L);if(L.version>0&&P.__version!==L.version){ne(P,L,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+M)}let ae={[u3]:t.REPEAT,[U2]:t.CLAMP_TO_EDGE,[f3]:t.MIRRORED_REPEAT},pe={[Gn]:t.NEAREST,[cm]:t.NEAREST_MIPMAP_NEAREST,[P0]:t.NEAREST_MIPMAP_LINEAR,[o1]:t.LINEAR,[G3]:t.LINEAR_MIPMAP_NEAREST,[$2]:t.LINEAR_MIPMAP_LINEAR},be={[dm]:t.NEVER,[vm]:t.ALWAYS,[hm]:t.LESS,[h5]:t.LEQUAL,[pm]:t.EQUAL,[Mm]:t.GEQUAL,[mm]:t.GREATER,[gm]:t.NOTEQUAL};function Ze(L,M){if(M.type===z1&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===o1||M.magFilter===G3||M.magFilter===P0||M.magFilter===$2||M.minFilter===o1||M.minFilter===G3||M.minFilter===P0||M.minFilter===$2)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,ae[M.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,ae[M.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,ae[M.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,pe[M.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gn||M.minFilter!==P0&&M.minFilter!==$2||M.type===z1&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function xt(L,M){let P=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",z));let q=M.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let G=Y(M);if(G!==L.__cacheKey){J[G]===void 0&&(J[G]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,P=!0),J[G].usedTimes++;let Ce=J[L.__cacheKey];Ce!==void 0&&(J[L.__cacheKey].usedTimes--,Ce.usedTimes===0&&_(M)),L.__cacheKey=G,L.__webglTexture=J[G].texture}return P}function j(L,M,P){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);let J=xt(L,M),G=M.source;n.bindTexture(q,L.__webglTexture,t.TEXTURE0+P);let Ce=i.get(G);if(G.version!==Ce.__version||J===!0){n.activeTexture(t.TEXTURE0+P);let ue=lt.getPrimaries(lt.workingColorSpace),me=M.colorSpace===o2?null:lt.getPrimaries(M.colorSpace),ct=M.colorSpace===o2||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let te=v(M.image,!1,s.maxTextureSize);te=bt(M,te);let ge=r.convert(M.format,M.colorSpace),De=r.convert(M.type),Oe=b(M.internalFormat,ge,De,M.colorSpace,M.isVideoTexture);Ze(q,M);let Me,nt=M.mipmaps,$e=M.isVideoTexture!==!0,_t=Ce.__version===void 0||J===!0,T=G.dataReady,oe=D(M,te);if(M.isDepthTexture)Oe=C(M.format===Ai,M.type),_t&&($e?n.texStorage2D(t.TEXTURE_2D,1,Oe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Oe,te.width,te.height,0,ge,De,null));else if(M.isDataTexture)if(nt.length>0){$e&&_t&&n.texStorage2D(t.TEXTURE_2D,oe,Oe,nt[0].width,nt[0].height);for(let B=0,X=nt.length;B<X;B++)Me=nt[B],$e?T&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,Me.width,Me.height,ge,De,Me.data):n.texImage2D(t.TEXTURE_2D,B,Oe,Me.width,Me.height,0,ge,De,Me.data);M.generateMipmaps=!1}else $e?(_t&&n.texStorage2D(t.TEXTURE_2D,oe,Oe,te.width,te.height),T&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,ge,De,te.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,te.width,te.height,0,ge,De,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Oe,nt[0].width,nt[0].height,te.depth);for(let B=0,X=nt.length;B<X;B++)if(Me=nt[B],M.format!==jn)if(ge!==null)if($e){if(T)if(M.layerUpdates.size>0){let de=x5(Me.width,Me.height,M.format,M.type);for(let fe of M.layerUpdates){let We=Me.data.subarray(fe*de/Me.data.BYTES_PER_ELEMENT,(fe+1)*de/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,fe,Me.width,Me.height,1,ge,We)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,Me.width,Me.height,te.depth,ge,Me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,Oe,Me.width,Me.height,te.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?T&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,Me.width,Me.height,te.depth,ge,De,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,Oe,Me.width,Me.height,te.depth,0,ge,De,Me.data)}else{$e&&_t&&n.texStorage2D(t.TEXTURE_2D,oe,Oe,nt[0].width,nt[0].height);for(let B=0,X=nt.length;B<X;B++)Me=nt[B],M.format!==jn?ge!==null?$e?T&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,Me.width,Me.height,ge,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,B,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?T&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,Me.width,Me.height,ge,De,Me.data):n.texImage2D(t.TEXTURE_2D,B,Oe,Me.width,Me.height,0,ge,De,Me.data)}else if(M.isDataArrayTexture)if($e){if(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Oe,te.width,te.height,te.depth),T)if(M.layerUpdates.size>0){let B=x5(te.width,te.height,M.format,M.type);for(let X of M.layerUpdates){let de=te.data.subarray(X*B/te.data.BYTES_PER_ELEMENT,(X+1)*B/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,X,te.width,te.height,1,ge,De,de)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,De,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,te.width,te.height,te.depth,0,ge,De,te.data);else if(M.isData3DTexture)$e?(_t&&n.texStorage3D(t.TEXTURE_3D,oe,Oe,te.width,te.height,te.depth),T&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,De,te.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,te.width,te.height,te.depth,0,ge,De,te.data);else if(M.isFramebufferTexture){if(_t)if($e)n.texStorage2D(t.TEXTURE_2D,oe,Oe,te.width,te.height);else{let B=te.width,X=te.height;for(let de=0;de<oe;de++)n.texImage2D(t.TEXTURE_2D,de,Oe,B,X,0,ge,De,null),B>>=1,X>>=1}}else if(nt.length>0){if($e&&_t){let B=we(nt[0]);n.texStorage2D(t.TEXTURE_2D,oe,Oe,B.width,B.height)}for(let B=0,X=nt.length;B<X;B++)Me=nt[B],$e?T&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ge,De,Me):n.texImage2D(t.TEXTURE_2D,B,Oe,ge,De,Me);M.generateMipmaps=!1}else if($e){if(_t){let B=we(te);n.texStorage2D(t.TEXTURE_2D,oe,Oe,B.width,B.height)}T&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,De,te)}else n.texImage2D(t.TEXTURE_2D,0,Oe,ge,De,te);m(M)&&h(q),Ce.__version=G.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ne(L,M,P){if(M.image.length!==6)return;let q=xt(L,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+P);let G=i.get(J);if(J.version!==G.__version||q===!0){n.activeTexture(t.TEXTURE0+P);let Ce=lt.getPrimaries(lt.workingColorSpace),ue=M.colorSpace===o2?null:lt.getPrimaries(M.colorSpace),me=M.colorSpace===o2||Ce===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let ct=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let X=0;X<6;X++)!ct&&!te?ge[X]=v(M.image[X],!0,s.maxCubemapSize):ge[X]=te?M.image[X].image:M.image[X],ge[X]=bt(M,ge[X]);let De=ge[0],Oe=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),nt=b(M.internalFormat,Oe,Me,M.colorSpace),$e=M.isVideoTexture!==!0,_t=G.__version===void 0||q===!0,T=J.dataReady,oe=D(M,De);Ze(t.TEXTURE_CUBE_MAP,M);let B;if(ct){$e&&_t&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,nt,De.width,De.height);for(let X=0;X<6;X++){B=ge[X].mipmaps;for(let de=0;de<B.length;de++){let fe=B[de];M.format!==jn?Oe!==null?$e?T&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,0,0,fe.width,fe.height,Oe,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,nt,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,0,0,fe.width,fe.height,Oe,Me,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,nt,fe.width,fe.height,0,Oe,Me,fe.data)}}}else{if(B=M.mipmaps,$e&&_t){B.length>0&&oe++;let X=we(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,nt,X.width,X.height)}for(let X=0;X<6;X++)if(te){$e?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ge[X].width,ge[X].height,Oe,Me,ge[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,nt,ge[X].width,ge[X].height,0,Oe,Me,ge[X].data);for(let de=0;de<B.length;de++){let We=B[de].image[X].image;$e?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,0,0,We.width,We.height,Oe,Me,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,nt,We.width,We.height,0,Oe,Me,We.data)}}else{$e?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Oe,Me,ge[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,nt,Oe,Me,ge[X]);for(let de=0;de<B.length;de++){let fe=B[de];$e?T&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,0,0,Oe,Me,fe.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,nt,Oe,Me,fe.image[X])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),G.__version=J.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function xe(L,M,P,q,J,G){let Ce=r.convert(P.format,P.colorSpace),ue=r.convert(P.type),me=b(P.internalFormat,Ce,ue,P.colorSpace),ct=i.get(M),te=i.get(P);if(te.__renderTarget=M,!ct.__hasExternalTextures){let ge=Math.max(1,M.width>>G),De=Math.max(1,M.height>>G);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,G,me,ge,De,M.depth,0,Ce,ue,null):n.texImage2D(J,G,me,ge,De,0,Ce,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),tt(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,J,te.__webglTexture,0,et(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,J,te.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(L,M,P){if(t.bindRenderbuffer(t.RENDERBUFFER,L),M.depthBuffer){let q=M.depthTexture,J=q&&q.isDepthTexture?q.type:null,G=C(M.stencilBuffer,J),Ce=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=et(M);tt(M)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,G,M.width,M.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,G,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,G,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,L)}else{let q=M.textures;for(let J=0;J<q.length;J++){let G=q[J],Ce=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),me=b(G.internalFormat,Ce,ue,G.colorSpace),ct=et(M);P&&tt(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ct,me,M.width,M.height):tt(M)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);let J=q.__webglTexture,G=et(M);if(M.depthTexture.format===wi)tt(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(M.depthTexture.format===Ai)tt(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ve(L){let M=i.get(L),P=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){let q=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=q}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,L)}else if(P){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),le(M.__webglDepthbuffer[q],L,!1);else{let J=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,G)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),le(M.__webglDepthbuffer,L,!1);else{let q=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(L,M,P){let q=i.get(L);M!==void 0&&xe(q.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&Ve(L)}function At(L){let M=L.texture,P=i.get(L),q=i.get(M);L.addEventListener("dispose",w);let J=L.textures,G=L.isWebGLCubeRenderTarget===!0,Ce=J.length>1;if(Ce||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),G){P.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){P.__webglFramebuffer[ue]=[];for(let me=0;me<M.mipmaps.length;me++)P.__webglFramebuffer[ue][me]=t.createFramebuffer()}else P.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){P.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)P.__webglFramebuffer[ue]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let ue=0,me=J.length;ue<me;ue++){let ct=i.get(J[ue]);ct.__webglTexture===void 0&&(ct.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&tt(L)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){let me=J[ue];P.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[ue]);let ct=r.convert(me.format,me.colorSpace),te=r.convert(me.type),ge=b(me.internalFormat,ct,te,me.colorSpace,L.isXRRenderTarget===!0),De=et(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ge,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,P.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),le(P.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ze(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)xe(P.__webglFramebuffer[ue][me],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else xe(P.__webglFramebuffer[ue],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let ue=0,me=J.length;ue<me;ue++){let ct=J[ue],te=i.get(ct);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),Ze(t.TEXTURE_2D,ct),xe(P.__webglFramebuffer,L,ct,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(ct)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,q.__webglTexture),Ze(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)xe(P.__webglFramebuffer[me],L,M,t.COLOR_ATTACHMENT0,ue,me);else xe(P.__webglFramebuffer,L,M,t.COLOR_ATTACHMENT0,ue,0);m(M)&&h(ue),n.unbindTexture()}L.depthBuffer&&Ve(L)}function ot(L){let M=L.textures;for(let P=0,q=M.length;P<q;P++){let J=M[P];if(m(J)){let G=S(L),Ce=i.get(J).__webglTexture;n.bindTexture(G,Ce),h(G),n.unbindTexture()}}}let Rt=[],E=[];function Nn(L){if(L.samples>0){if(tt(L)===!1){let M=L.textures,P=L.width,q=L.height,J=t.COLOR_BUFFER_BIT,G=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(L),ue=M.length>1;if(ue)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let me=0;me<M.length;me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[me]);let ct=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ct,0)}t.blitFramebuffer(0,0,P,q,0,0,P,q,J,t.NEAREST),a===!0&&(Rt.length=0,E.length=0,Rt.push(t.COLOR_ATTACHMENT0+me),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Rt.push(G),E.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,E)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[me]);let ct=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,ct,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&a){let M=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function et(L){return Math.min(s.maxSamples,L.samples)}function tt(L){let M=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Se(L){let M=o.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function bt(L,M){let P=L.colorSpace,q=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||P!==Ti&&P!==o2&&(lt.getTransfer(P)===Mt?(q!==jn||J!==E1)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),M}function we(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Je,this.setupRenderTarget=At,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Nn,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=tt}function uD(t,e){function n(i,s=o2){let r,o=lt.getTransfer(s);if(i===E1)return t.UNSIGNED_BYTE;if(i===j3)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$3)return t.UNSIGNED_SHORT_5_5_5_1;if(i===r5)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===i5)return t.BYTE;if(i===s5)return t.SHORT;if(i===Js)return t.UNSIGNED_SHORT;if(i===W3)return t.INT;if(i===q2)return t.UNSIGNED_INT;if(i===z1)return t.FLOAT;if(i===Ks)return t.HALF_FLOAT;if(i===o5)return t.ALPHA;if(i===c5)return t.RGB;if(i===jn)return t.RGBA;if(i===a5)return t.LUMINANCE;if(i===l5)return t.LUMINANCE_ALPHA;if(i===wi)return t.DEPTH_COMPONENT;if(i===Ai)return t.DEPTH_STENCIL;if(i===u5)return t.RED;if(i===q3)return t.RED_INTEGER;if(i===f5)return t.RG;if(i===X3)return t.RG_INTEGER;if(i===Y3)return t.RGBA_INTEGER;if(i===O0||i===F0||i===k0||i===U0)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===O0)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===F0)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===k0)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===U0)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===O0)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===F0)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===k0)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===U0)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Z3||i===J3||i===K3||i===Q3)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Z3)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===J3)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===K3)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Q3)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===e4||i===t4||i===n4)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===e4||i===t4)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===n4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===i4||i===s4||i===r4||i===o4||i===c4||i===a4||i===l4||i===u4||i===f4||i===d4||i===h4||i===p4||i===m4||i===g4)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===i4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===s4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===r4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===o4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===c4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===a4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===l4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===u4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===f4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===d4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===h4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===p4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===m4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===g4)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===B0||i===M4||i===v4)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===B0)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===M4)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===v4)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===d5||i===y4||i===x4||i===C4)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===B0)return r.COMPRESSED_RED_RGTC1_EXT;if(i===y4)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===x4)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===C4)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ki?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var fD={type:"move"},G0=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,c=this._targetRay,a=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=n.getJointPose(v,i),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1));c!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(fD)))}return c!==null&&(c.visible=s!==null),a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Ri;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},dD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,N5=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let s=new c2,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new c1({vertexShader:dD,fragmentShader:hD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pn(new D0(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},R5=class extends n2{constructor(e,n){super();let i=this,s=null,r=1,o=null,c="local-floor",a=1,l=null,u=null,f=null,d=null,p=null,g=null,v=new N5,m=n.getContextAttributes(),h=null,S=null,b=[],C=[],D=new yt,z=null,w=new sn;w.viewport=new Nt;let R=new sn;R.viewport=new Nt;let _=[w,R],x=new I3,A=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=b[j];return ne===void 0&&(ne=new G0,b[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=b[j];return ne===void 0&&(ne=new G0,b[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=b[j];return ne===void 0&&(ne=new G0,b[j]=ne),ne.getHandSpace()};function U(j){let ne=C.indexOf(j.inputSource);if(ne===-1)return;let xe=b[ne];xe!==void 0&&(xe.update(j.inputSource,j.frame,l||o),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<b.length;j++){let ne=C[j];ne!==null&&(C[j]=null,b[j].disconnect(ne))}A=null,W=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,s=null,S=null,xt.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){c=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=function(j){return Z2(this,null,function*(){if(s=j,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&(yield n.makeXRCompatible()),z=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new b1(p.framebufferWidth,p.framebufferHeight,{format:jn,type:E1,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,xe=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Ai:wi,xe=m.stencil?ki:q2);let Ne={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:r};f=new XRWebGLBinding(s,n),d=f.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new b1(d.textureWidth,d.textureHeight,{format:jn,type:E1,depthTexture:new T0(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(a),l=null,o=yield s.requestReferenceSpace(c),xt.setContext(s),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(j){for(let ne=0;ne<j.removed.length;ne++){let xe=j.removed[ne],le=C.indexOf(xe);le>=0&&(C[le]=null,b[le].disconnect(xe))}for(let ne=0;ne<j.added.length;ne++){let xe=j.added[ne],le=C.indexOf(xe);if(le===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=C.length){C.push(xe),le=Ve;break}else if(C[Ve]===null){C[Ve]=xe,le=Ve;break}if(le===-1)break}let Ne=b[le];Ne&&Ne.connect(xe)}}let $=new k,K=new k;function H(j,ne,xe){$.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);let le=$.distanceTo(K),Ne=ne.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,Je=Ne[14]/(Ne[10]-1),At=Ne[14]/(Ne[10]+1),ot=(Ne[9]+1)/Ne[5],Rt=(Ne[9]-1)/Ne[5],E=(Ne[8]-1)/Ne[0],Nn=(Ve[8]+1)/Ve[0],et=Je*E,tt=Je*Nn,Se=le/(-E+Nn),bt=Se*-E;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(bt),j.translateZ(Se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ne[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let we=Je+Se,L=At+Se,M=et-bt,P=tt+(le-bt),q=ot*At/L*we,J=Rt*At/L*we;j.projectionMatrix.makePerspective(M,P,q,J,we,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ae(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ne=j.near,xe=j.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),x.near=R.near=w.near=ne,x.far=R.far=w.far=xe,(A!==x.near||W!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,W=x.far),w.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,x.layers.mask=w.layers.mask|R.layers.mask;let le=j.parent,Ne=x.cameras;ae(x,le);for(let Ve=0;Ve<Ne.length;Ve++)ae(Ne[Ve],le);Ne.length===2?H(x,w,R):x.projectionMatrix.copy(w.projectionMatrix),pe(j,x,le)};function pe(j,ne,xe){xe===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=h3*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return a},this.setFoveation=function(j){a=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let be=null;function Ze(j,ne){if(u=ne.getViewerPose(l||o),g=ne,u!==null){let xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let le=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let Ve=0;Ve<xe.length;Ve++){let Je=xe[Ve],At=null;if(p!==null)At=p.getViewport(Je);else{let Rt=f.getViewSubImage(d,Je);At=Rt.viewport,Ve===0&&(e.setRenderTargetTextures(S,Rt.colorTexture,d.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(S))}let ot=_[Ve];ot===void 0&&(ot=new sn,ot.layers.enable(Ve),ot.viewport=new Nt,_[Ve]=ot),ot.matrix.fromArray(Je.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Je.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(At.x,At.y,At.width,At.height),Ve===0&&(x.matrix.copy(ot.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(ot)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){let Ve=f.getDepthInformation(xe[0]);Ve&&Ve.isValid&&Ve.texture&&v.init(e,Ve,s.renderState)}}for(let xe=0;xe<b.length;xe++){let le=C[xe],Ne=b[xe];le!==null&&Ne!==void 0&&Ne.update(le,ne,l||o)}be&&be(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let xt=new Ym;xt.setAnimationLoop(Ze),this.setAnimationLoop=function(j){be=j},this.dispose=function(){}}},Gi=new Di,pD=new Ut;function mD(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,g5(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,S,b,C){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,C)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&c(m,h)):h.isPointsMaterial?a(m,h,S,b):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let S=e.get(h),b=S.envMap,C=S.envMapRotation;b&&(m.envMap.value=b,Gi.copy(C),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(pD.makeRotationFromEuler(Gi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function c(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function a(m,h,S,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=b*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){let S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gD(t,e,n,i){let s={},r={},o=[],c=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function a(S,b){let C=b.program;i.uniformBlockBinding(S,C)}function l(S,b){let C=s[S.id];C===void 0&&(g(S),C=u(S),s[S.id]=C,S.addEventListener("dispose",m));let D=b.program;i.updateUBOMapping(S,D);let z=e.render.frame;r[S.id]!==z&&(d(S),r[S.id]=z)}function u(S){let b=f();S.__bindingPointIndex=b;let C=t.createBuffer(),D=S.__size,z=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,C),t.bufferData(t.UNIFORM_BUFFER,D,z),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,C),C}function f(){for(let S=0;S<c;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let b=s[S.id],C=S.uniforms,D=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let z=0,w=C.length;z<w;z++){let R=Array.isArray(C[z])?C[z]:[C[z]];for(let _=0,x=R.length;_<x;_++){let A=R[_];if(p(A,z,_,D)===!0){let W=A.__offset,U=Array.isArray(A.value)?A.value:[A.value],Y=0;for(let Z=0;Z<U.length;Z++){let $=U[Z],K=v($);typeof $=="number"||typeof $=="boolean"?(A.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,W+Y,A.__data)):$.isMatrix3?(A.__data[0]=$.elements[0],A.__data[1]=$.elements[1],A.__data[2]=$.elements[2],A.__data[3]=0,A.__data[4]=$.elements[3],A.__data[5]=$.elements[4],A.__data[6]=$.elements[5],A.__data[7]=0,A.__data[8]=$.elements[6],A.__data[9]=$.elements[7],A.__data[10]=$.elements[8],A.__data[11]=0):($.toArray(A.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,b,C,D){let z=S.value,w=b+"_"+C;if(D[w]===void 0)return typeof z=="number"||typeof z=="boolean"?D[w]=z:D[w]=z.clone(),!0;{let R=D[w];if(typeof z=="number"||typeof z=="boolean"){if(R!==z)return D[w]=z,!0}else if(R.equals(z)===!1)return R.copy(z),!0}return!1}function g(S){let b=S.uniforms,C=0,D=16;for(let w=0,R=b.length;w<R;w++){let _=Array.isArray(b[w])?b[w]:[b[w]];for(let x=0,A=_.length;x<A;x++){let W=_[x],U=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,Z=U.length;Y<Z;Y++){let $=U[Y],K=v($),H=C%D,ae=H%K.boundary,pe=H+ae;C+=ae,pe!==0&&D-pe<K.storage&&(C+=D-pe),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=C,C+=K.storage}}}let z=C%D;return z>0&&(C+=D-z),S.__size=C,S.__cache={},this}function v(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let C=o.indexOf(b.__bindingPointIndex);o.splice(C,1),t.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(let S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:a,update:l,dispose:h}}var w4=class{constructor(e={}){let{canvas:n=ym(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,h=null,S=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=r2,this.toneMappingExposure=1;let C=this,D=!1,z=0,w=0,R=null,_=-1,x=null,A=new Nt,W=new Nt,U=null,Y=new ut(0),Z=0,$=n.width,K=n.height,H=1,ae=null,pe=null,be=new Nt(0,0,$,K),Ze=new Nt(0,0,$,K),xt=!1,j=new A0,ne=!1,xe=!1,le=new Ut,Ne=new Ut,Ve=new k,Je=new Nt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function Rt(){return R===null?H:1}let E=i;function Nn(y,I){return n.getContext(y,I)}try{let y={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${N3}`),n.addEventListener("webglcontextlost",X,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",fe,!1),E===null){let I="webgl2";if(E=Nn(I,y),E===null)throw Nn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let et,tt,Se,bt,we,L,M,P,q,J,G,Ce,ue,me,ct,te,ge,De,Oe,Me,nt,$e,_t,T;function oe(){et=new NA(E),et.init(),$e=new uD(E,et),tt=new EA(E,et,e,$e),Se=new aD(E,et),tt.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),bt=new OA(E),we=new YT,L=new lD(E,et,Se,we,tt,$e,bt),M=new AA(C),P=new IA(C),q=new Gw(E),_t=new SA(E,q),J=new RA(E,q,bt,_t),G=new kA(E,J,q,bt),Oe=new FA(E,tt,L),te=new zA(we),Ce=new XT(C,M,P,et,tt,_t,te),ue=new mD(C,we),me=new JT,ct=new iD(et),De=new bA(C,M,P,Se,G,p,a),ge=new oD(C,G,tt),T=new gD(E,bt,tt,Se),Me=new wA(E,et,bt),nt=new PA(E,et,bt),bt.programs=Ce.programs,C.capabilities=tt,C.extensions=et,C.properties=we,C.renderLists=me,C.shadowMap=ge,C.state=Se,C.info=bt}oe();let B=new R5(C,E);this.xr=B,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let y=et.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=et.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize($,K,!1))},this.getSize=function(y){return y.set($,K)},this.setSize=function(y,I,O=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,K=I,n.width=Math.floor(y*H),n.height=Math.floor(I*H),O===!0&&(n.style.width=y+"px",n.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set($*H,K*H).floor()},this.setDrawingBufferSize=function(y,I,O){$=y,K=I,H=O,n.width=Math.floor(y*O),n.height=Math.floor(I*O),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(be)},this.setViewport=function(y,I,O,F){y.isVector4?be.set(y.x,y.y,y.z,y.w):be.set(y,I,O,F),Se.viewport(A.copy(be).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Ze)},this.setScissor=function(y,I,O,F){y.isVector4?Ze.set(y.x,y.y,y.z,y.w):Ze.set(y,I,O,F),Se.scissor(W.copy(Ze).multiplyScalar(H).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(y){Se.setScissorTest(xt=y)},this.setOpaqueSort=function(y){ae=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(y=!0,I=!0,O=!0){let F=0;if(y){let N=!1;if(R!==null){let Q=R.texture.format;N=Q===Y3||Q===X3||Q===q3}if(N){let Q=R.texture.type,ce=Q===E1||Q===q2||Q===Js||Q===ki||Q===j3||Q===$3,he=De.getClearColor(),ye=De.getClearAlpha(),Fe=he.r,ke=he.g,ze=he.b;ce?(g[0]=Fe,g[1]=ke,g[2]=ze,g[3]=ye,E.clearBufferuiv(E.COLOR,0,g)):(v[0]=Fe,v[1]=ke,v[2]=ze,v[3]=ye,E.clearBufferiv(E.COLOR,0,v))}else F|=E.COLOR_BUFFER_BIT}I&&(F|=E.DEPTH_BUFFER_BIT),O&&(F|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",X,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),De.dispose(),me.dispose(),ct.dispose(),we.dispose(),M.dispose(),P.dispose(),G.dispose(),_t.dispose(),T.dispose(),Ce.dispose(),B.dispose(),B.removeEventListener("sessionstart",O5),B.removeEventListener("sessionend",F5),X2.stop()};function X(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let y=bt.autoReset,I=ge.enabled,O=ge.autoUpdate,F=ge.needsUpdate,N=ge.type;oe(),bt.autoReset=y,ge.enabled=I,ge.autoUpdate=O,ge.needsUpdate=F,ge.type=N}function fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function We(y){let I=y.target;I.removeEventListener("dispose",We),Tt(I)}function Tt(y){Kt(y),we.remove(y)}function Kt(y){let I=we.get(y).programs;I!==void 0&&(I.forEach(function(O){Ce.releaseProgram(O)}),y.isShaderMaterial&&Ce.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,O,F,N,Q){I===null&&(I=At);let ce=N.isMesh&&N.matrixWorld.determinant()<0,he=ig(y,I,O,F,N);Se.setMaterial(F,ce);let ye=O.index,Fe=1;if(F.wireframe===!0){if(ye=J.getWireframeAttribute(O),ye===void 0)return;Fe=2}let ke=O.drawRange,ze=O.attributes.position,at=ke.start*Fe,ht=(ke.start+ke.count)*Fe;Q!==null&&(at=Math.max(at,Q.start*Fe),ht=Math.min(ht,(Q.start+Q.count)*Fe)),ye!==null?(at=Math.max(at,0),ht=Math.min(ht,ye.count)):ze!=null&&(at=Math.max(at,0),ht=Math.min(ht,ze.count));let Ot=ht-at;if(Ot<0||Ot===1/0)return;_t.setup(N,F,he,O,ye);let Dt,ft=Me;if(ye!==null&&(Dt=q.get(ye),ft=nt,ft.setIndex(Dt)),N.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*Rt()),ft.setMode(E.LINES)):ft.setMode(E.TRIANGLES);else if(N.isLine){let Ae=F.linewidth;Ae===void 0&&(Ae=1),Se.setLineWidth(Ae*Rt()),N.isLineSegments?ft.setMode(E.LINES):N.isLineLoop?ft.setMode(E.LINE_LOOP):ft.setMode(E.LINE_STRIP)}else N.isPoints?ft.setMode(E.POINTS):N.isSprite&&ft.setMode(E.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ft.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ft.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ae=N._multiDrawStarts,qt=N._multiDrawCounts,pt=N._multiDrawCount,qn=ye?q.get(ye).bytesPerElement:1,$i=we.get(F).currentProgram.getUniforms();for(let mn=0;mn<pt;mn++)$i.setValue(E,"_gl_DrawID",mn),ft.render(Ae[mn]/qn,qt[mn])}else if(N.isInstancedMesh)ft.renderInstances(at,Ot,N.count);else if(O.isInstancedBufferGeometry){let Ae=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,qt=Math.min(O.instanceCount,Ae);ft.renderInstances(at,Ot,qt)}else ft.render(at,Ot)};function gt(y,I,O){y.transparent===!0&&y.side===w1&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,j0(y,I,O),y.side=t2,y.needsUpdate=!0,j0(y,I,O),y.side=w1):j0(y,I,O)}this.compile=function(y,I,O=null){O===null&&(O=y),h=ct.get(O),h.init(I),b.push(h),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();let F=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let Q=N.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){let he=Q[ce];gt(he,O,N),F.add(he)}else gt(Q,O,N),F.add(Q)}),b.pop(),h=null,F},this.compileAsync=function(y,I,O=null){let F=this.compile(y,I,O);return new Promise(N=>{function Q(){if(F.forEach(function(ce){we.get(ce).currentProgram.isReady()&&F.delete(ce)}),F.size===0){N(y);return}setTimeout(Q,10)}et.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let $n=null;function T1(y){$n&&$n(y)}function O5(){X2.stop()}function F5(){X2.start()}let X2=new Ym;X2.setAnimationLoop(T1),typeof self<"u"&&X2.setContext(self),this.setAnimationLoop=function(y){$n=y,B.setAnimationLoop(y),y===null?X2.stop():X2.start()},B.addEventListener("sessionstart",O5),B.addEventListener("sessionend",F5),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(I),I=B.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,I,R),h=ct.get(y,b.length),h.init(I),b.push(h),Ne.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),j.setFromProjectionMatrix(Ne),xe=this.localClippingEnabled,ne=te.init(this.clippingPlanes,xe),m=me.get(y,S.length),m.init(),S.push(m),B.enabled===!0&&B.isPresenting===!0){let Q=C.xr.getDepthSensingMesh();Q!==null&&z4(Q,I,-1/0,C.sortObjects)}z4(y,I,0,C.sortObjects),m.finish(),C.sortObjects===!0&&m.sort(ae,pe),ot=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ot&&De.addToRenderList(m,y),this.info.render.frame++,ne===!0&&te.beginShadows();let O=h.state.shadowsArray;ge.render(O,y,I),ne===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=m.opaque,N=m.transmissive;if(h.setupLights(),I.isArrayCamera){let Q=I.cameras;if(N.length>0)for(let ce=0,he=Q.length;ce<he;ce++){let ye=Q[ce];U5(F,N,y,ye)}ot&&De.render(y);for(let ce=0,he=Q.length;ce<he;ce++){let ye=Q[ce];k5(m,y,ye,ye.viewport)}}else N.length>0&&U5(F,N,y,I),ot&&De.render(y),k5(m,y,I);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(C,y,I),_t.resetDefaultState(),_=-1,x=null,b.pop(),b.length>0?(h=b[b.length-1],ne===!0&&te.setGlobalState(C.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function z4(y,I,O,F){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){F&&Je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ne);let ce=G.update(y),he=y.material;he.visible&&m.push(y,ce,he,O,Je.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){let ce=G.update(y),he=y.material;if(F&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Je.copy(y.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Je.copy(ce.boundingSphere.center)),Je.applyMatrix4(y.matrixWorld).applyMatrix4(Ne)),Array.isArray(he)){let ye=ce.groups;for(let Fe=0,ke=ye.length;Fe<ke;Fe++){let ze=ye[Fe],at=he[ze.materialIndex];at&&at.visible&&m.push(y,ce,at,O,Je.z,ze)}}else he.visible&&m.push(y,ce,he,O,Je.z,null)}}let Q=y.children;for(let ce=0,he=Q.length;ce<he;ce++)z4(Q[ce],I,O,F)}function k5(y,I,O,F){let N=y.opaque,Q=y.transmissive,ce=y.transparent;h.setupLightsView(O),ne===!0&&te.setGlobalState(C.clippingPlanes,O),F&&Se.viewport(A.copy(F)),N.length>0&&W0(N,I,O),Q.length>0&&W0(Q,I,O),ce.length>0&&W0(ce,I,O),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function U5(y,I,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[F.id]===void 0&&(h.state.transmissionRenderTarget[F.id]=new b1(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ks:E1,minFilter:$2,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let Q=h.state.transmissionRenderTarget[F.id],ce=F.viewport||A;Q.setSize(ce.z,ce.w);let he=C.getRenderTarget();C.setRenderTarget(Q),C.getClearColor(Y),Z=C.getClearAlpha(),Z<1&&C.setClearColor(16777215,.5),C.clear(),ot&&De.render(O);let ye=C.toneMapping;C.toneMapping=r2;let Fe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),h.setupLightsView(F),ne===!0&&te.setGlobalState(C.clippingPlanes,F),W0(y,O,F),L.updateMultisampleRenderTarget(Q),L.updateRenderTargetMipmap(Q),et.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let ze=0,at=I.length;ze<at;ze++){let ht=I[ze],Ot=ht.object,Dt=ht.geometry,ft=ht.material,Ae=ht.group;if(ft.side===w1&&Ot.layers.test(F.layers)){let qt=ft.side;ft.side=ln,ft.needsUpdate=!0,B5(Ot,O,F,Dt,ft,Ae),ft.side=qt,ft.needsUpdate=!0,ke=!0}}ke===!0&&(L.updateMultisampleRenderTarget(Q),L.updateRenderTargetMipmap(Q))}C.setRenderTarget(he),C.setClearColor(Y,Z),Fe!==void 0&&(F.viewport=Fe),C.toneMapping=ye}function W0(y,I,O){let F=I.isScene===!0?I.overrideMaterial:null;for(let N=0,Q=y.length;N<Q;N++){let ce=y[N],he=ce.object,ye=ce.geometry,Fe=F===null?ce.material:F,ke=ce.group;he.layers.test(O.layers)&&B5(he,I,O,ye,Fe,ke)}}function B5(y,I,O,F,N,Q){y.onBeforeRender(C,I,O,F,N,Q),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(C,I,O,F,y,Q),N.transparent===!0&&N.side===w1&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,C.renderBufferDirect(O,I,F,N,y,Q),N.side=t2,N.needsUpdate=!0,C.renderBufferDirect(O,I,F,N,y,Q),N.side=w1):C.renderBufferDirect(O,I,F,N,y,Q),y.onAfterRender(C,I,O,F,N,Q)}function j0(y,I,O){I.isScene!==!0&&(I=At);let F=we.get(y),N=h.state.lights,Q=h.state.shadowsArray,ce=N.state.version,he=Ce.getParameters(y,N.state,Q,I,O),ye=Ce.getProgramCacheKey(he),Fe=F.programs;F.environment=y.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(y.isMeshStandardMaterial?P:M).get(y.envMap||F.environment),F.envMapRotation=F.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Fe===void 0&&(y.addEventListener("dispose",We),Fe=new Map,F.programs=Fe);let ke=Fe.get(ye);if(ke!==void 0){if(F.currentProgram===ke&&F.lightsStateVersion===ce)return H5(y,he),ke}else he.uniforms=Ce.getUniforms(y),y.onBeforeCompile(he,C),ke=Ce.acquireProgram(he,ye),Fe.set(ye,ke),F.uniforms=he.uniforms;let ze=F.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ze.clippingPlanes=te.uniform),H5(y,he),F.needsLights=rg(y),F.lightsStateVersion=ce,F.needsLights&&(ze.ambientLightColor.value=N.state.ambient,ze.lightProbe.value=N.state.probe,ze.directionalLights.value=N.state.directional,ze.directionalLightShadows.value=N.state.directionalShadow,ze.spotLights.value=N.state.spot,ze.spotLightShadows.value=N.state.spotShadow,ze.rectAreaLights.value=N.state.rectArea,ze.ltc_1.value=N.state.rectAreaLTC1,ze.ltc_2.value=N.state.rectAreaLTC2,ze.pointLights.value=N.state.point,ze.pointLightShadows.value=N.state.pointShadow,ze.hemisphereLights.value=N.state.hemi,ze.directionalShadowMap.value=N.state.directionalShadowMap,ze.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ze.spotShadowMap.value=N.state.spotShadowMap,ze.spotLightMatrix.value=N.state.spotLightMatrix,ze.spotLightMap.value=N.state.spotLightMap,ze.pointShadowMap.value=N.state.pointShadowMap,ze.pointShadowMatrix.value=N.state.pointShadowMatrix),F.currentProgram=ke,F.uniformsList=null,ke}function V5(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=tr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function H5(y,I){let O=we.get(y);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function ig(y,I,O,F,N){I.isScene!==!0&&(I=At),L.resetTextureUnits();let Q=I.fog,ce=F.isMeshStandardMaterial?I.environment:null,he=R===null?C.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ti,ye=(F.isMeshStandardMaterial?P:M).get(F.envMap||ce),Fe=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,ke=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ze=!!O.morphAttributes.position,at=!!O.morphAttributes.normal,ht=!!O.morphAttributes.color,Ot=r2;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ot=C.toneMapping);let Dt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ft=Dt!==void 0?Dt.length:0,Ae=we.get(F),qt=h.state.lights;if(ne===!0&&(xe===!0||y!==x)){let on=y===x&&F.id===_;te.setState(F,y,on)}let pt=!1;F.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==qt.state.version||Ae.outputColorSpace!==he||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==ye||F.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==te.numPlanes||Ae.numIntersection!==te.numIntersection)||Ae.vertexAlphas!==Fe||Ae.vertexTangents!==ke||Ae.morphTargets!==ze||Ae.morphNormals!==at||Ae.morphColors!==ht||Ae.toneMapping!==Ot||Ae.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,Ae.__version=F.version);let qn=Ae.currentProgram;pt===!0&&(qn=j0(F,I,N));let $i=!1,mn=!1,ir=!1,Et=qn.getUniforms(),Rn=Ae.uniforms;if(Se.useProgram(qn.program)&&($i=!0,mn=!0,ir=!0),F.id!==_&&(_=F.id,mn=!0),$i||x!==y){Se.buffers.depth.getReversed()?(le.copy(y.projectionMatrix),Cm(le),_m(le),Et.setValue(E,"projectionMatrix",le)):Et.setValue(E,"projectionMatrix",y.projectionMatrix),Et.setValue(E,"viewMatrix",y.matrixWorldInverse);let un=Et.map.cameraPosition;un!==void 0&&un.setValue(E,Ve.setFromMatrixPosition(y.matrixWorld)),tt.logarithmicDepthBuffer&&Et.setValue(E,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Et.setValue(E,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,mn=!0,ir=!0)}if(N.isSkinnedMesh){Et.setOptional(E,N,"bindMatrix"),Et.setOptional(E,N,"bindMatrixInverse");let on=N.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Et.setValue(E,"boneTexture",on.boneTexture,L))}N.isBatchedMesh&&(Et.setOptional(E,N,"batchingTexture"),Et.setValue(E,"batchingTexture",N._matricesTexture,L),Et.setOptional(E,N,"batchingIdTexture"),Et.setValue(E,"batchingIdTexture",N._indirectTexture,L),Et.setOptional(E,N,"batchingColorTexture"),N._colorsTexture!==null&&Et.setValue(E,"batchingColorTexture",N._colorsTexture,L));let Pn=O.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Oe.update(N,O,qn),(mn||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,Et.setValue(E,"receiveShadow",N.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Rn.envMap.value=ye,Rn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&I.environment!==null&&(Rn.envMapIntensity.value=I.environmentIntensity),mn&&(Et.setValue(E,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&sg(Rn,ir),Q&&F.fog===!0&&ue.refreshFogUniforms(Rn,Q),ue.refreshMaterialUniforms(Rn,F,H,K,h.state.transmissionRenderTarget[y.id]),tr.upload(E,V5(Ae),Rn,L)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(tr.upload(E,V5(Ae),Rn,L),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Et.setValue(E,"center",N.center),Et.setValue(E,"modelViewMatrix",N.modelViewMatrix),Et.setValue(E,"normalMatrix",N.normalMatrix),Et.setValue(E,"modelMatrix",N.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let on=F.uniformsGroups;for(let un=0,A4=on.length;un<A4;un++){let Y2=on[un];T.update(Y2,qn),T.bind(Y2,qn)}}return qn}function sg(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function rg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,I,O){we.get(y.texture).__webglTexture=I,we.get(y.depthTexture).__webglTexture=O;let F=we.get(y);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){let O=we.get(y);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,O=0){R=y,z=I,w=O;let F=!0,N=null,Q=!1,ce=!1;if(y){let ye=we.get(y);if(ye.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(E.FRAMEBUFFER,null),F=!1;else if(ye.__webglFramebuffer===void 0)L.setupRenderTarget(y);else if(ye.__hasExternalTextures)L.rebindTextures(y,we.get(y.texture).__webglTexture,we.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ze=y.depthTexture;if(ye.__boundDepthTexture!==ze){if(ze!==null&&we.has(ze)&&(y.width!==ze.image.width||y.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(y)}}let Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ce=!0);let ke=we.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[I])?N=ke[I][O]:N=ke[I],Q=!0):y.samples>0&&L.useMultisampledRTT(y)===!1?N=we.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[O]:N=ke,A.copy(y.viewport),W.copy(y.scissor),U=y.scissorTest}else A.copy(be).multiplyScalar(H).floor(),W.copy(Ze).multiplyScalar(H).floor(),U=xt;if(Se.bindFramebuffer(E.FRAMEBUFFER,N)&&F&&Se.drawBuffers(y,N),Se.viewport(A),Se.scissor(W),Se.setScissorTest(U),Q){let ye=we.get(y.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,O)}else if(ce){let ye=we.get(y.texture),Fe=I||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,Fe)}_=-1},this.readRenderTargetPixels=function(y,I,O,F,N,Q,ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he){Se.bindFramebuffer(E.FRAMEBUFFER,he);try{let ye=y.texture,Fe=ye.format,ke=ye.type;if(!tt.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-F&&O>=0&&O<=y.height-N&&E.readPixels(I,O,F,N,$e.convert(Fe),$e.convert(ke),Q)}finally{let ye=R!==null?we.get(R).__webglFramebuffer:null;Se.bindFramebuffer(E.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=function(y,I,O,F,N,Q,ce){return Z2(this,null,function*(){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he){let ye=y.texture,Fe=ye.format,ke=ye.type;if(!tt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-F&&O>=0&&O<=y.height-N){Se.bindFramebuffer(E.FRAMEBUFFER,he);let ze=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ze),E.bufferData(E.PIXEL_PACK_BUFFER,Q.byteLength,E.STREAM_READ),E.readPixels(I,O,F,N,$e.convert(Fe),$e.convert(ke),0);let at=R!==null?we.get(R).__webglFramebuffer:null;Se.bindFramebuffer(E.FRAMEBUFFER,at);let ht=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),yield xm(E,ht,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ze),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Q),E.deleteBuffer(ze),E.deleteSync(ht),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(y,I=null,O=0){y.isTexture!==!0&&(Ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);let F=Math.pow(2,-O),N=Math.floor(y.image.width*F),Q=Math.floor(y.image.height*F),ce=I!==null?I.x:0,he=I!==null?I.y:0;L.setTexture2D(y,0),E.copyTexSubImage2D(E.TEXTURE_2D,O,0,0,ce,he,N,Q),Se.unbindTexture()};let og=E.createFramebuffer(),cg=E.createFramebuffer();this.copyTextureToTexture=function(y,I,O=null,F=null,N=0,Q=null){y.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1],I=arguments[2],Q=arguments[3]||0,O=null),Q===null&&(N!==0?(Ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let ce,he,ye,Fe,ke,ze,at,ht,Ot,Dt=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(O!==null)ce=O.max.x-O.min.x,he=O.max.y-O.min.y,ye=O.isBox3?O.max.z-O.min.z:1,Fe=O.min.x,ke=O.min.y,ze=O.isBox3?O.min.z:0;else{let Pn=Math.pow(2,-N);ce=Math.floor(Dt.width*Pn),he=Math.floor(Dt.height*Pn),y.isDataArrayTexture?ye=Dt.depth:y.isData3DTexture?ye=Math.floor(Dt.depth*Pn):ye=1,Fe=0,ke=0,ze=0}F!==null?(at=F.x,ht=F.y,Ot=F.z):(at=0,ht=0,Ot=0);let ft=$e.convert(I.format),Ae=$e.convert(I.type),qt;I.isData3DTexture?(L.setTexture3D(I,0),qt=E.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(L.setTexture2DArray(I,0),qt=E.TEXTURE_2D_ARRAY):(L.setTexture2D(I,0),qt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,I.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,I.unpackAlignment);let pt=E.getParameter(E.UNPACK_ROW_LENGTH),qn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),$i=E.getParameter(E.UNPACK_SKIP_PIXELS),mn=E.getParameter(E.UNPACK_SKIP_ROWS),ir=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Dt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Dt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Fe),E.pixelStorei(E.UNPACK_SKIP_ROWS,ke),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ze);let Et=y.isDataArrayTexture||y.isData3DTexture,Rn=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let Pn=we.get(y),on=we.get(I),un=we.get(Pn.__renderTarget),A4=we.get(on.__renderTarget);Se.bindFramebuffer(E.READ_FRAMEBUFFER,un.__webglFramebuffer),Se.bindFramebuffer(E.DRAW_FRAMEBUFFER,A4.__webglFramebuffer);for(let Y2=0;Y2<ye;Y2++)Et&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,we.get(y).__webglTexture,N,ze+Y2),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,we.get(I).__webglTexture,Q,Ot+Y2)),E.blitFramebuffer(Fe,ke,ce,he,at,ht,ce,he,E.DEPTH_BUFFER_BIT,E.NEAREST);Se.bindFramebuffer(E.READ_FRAMEBUFFER,null),Se.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||we.has(y)){let Pn=we.get(y),on=we.get(I);Se.bindFramebuffer(E.READ_FRAMEBUFFER,og),Se.bindFramebuffer(E.DRAW_FRAMEBUFFER,cg);for(let un=0;un<ye;un++)Et?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Pn.__webglTexture,N,ze+un):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Pn.__webglTexture,N),Rn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,on.__webglTexture,Q,Ot+un):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,on.__webglTexture,Q),N!==0?E.blitFramebuffer(Fe,ke,ce,he,at,ht,ce,he,E.COLOR_BUFFER_BIT,E.NEAREST):Rn?E.copyTexSubImage3D(qt,Q,at,ht,Ot+un,Fe,ke,ce,he):E.copyTexSubImage2D(qt,Q,at,ht,Fe,ke,ce,he);Se.bindFramebuffer(E.READ_FRAMEBUFFER,null),Se.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Rn?y.isDataTexture||y.isData3DTexture?E.texSubImage3D(qt,Q,at,ht,Ot,ce,he,ye,ft,Ae,Dt.data):I.isCompressedArrayTexture?E.compressedTexSubImage3D(qt,Q,at,ht,Ot,ce,he,ye,ft,Dt.data):E.texSubImage3D(qt,Q,at,ht,Ot,ce,he,ye,ft,Ae,Dt):y.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Q,at,ht,ce,he,ft,Ae,Dt.data):y.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Q,at,ht,Dt.width,Dt.height,ft,Dt.data):E.texSubImage2D(E.TEXTURE_2D,Q,at,ht,ce,he,ft,Ae,Dt);E.pixelStorei(E.UNPACK_ROW_LENGTH,pt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,qn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,$i),E.pixelStorei(E.UNPACK_SKIP_ROWS,mn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ir),Q===0&&I.generateMipmaps&&E.generateMipmap(qt),Se.unbindTexture()},this.copyTextureToTexture3D=function(y,I,O=null,F=null,N=0){return y.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,F=arguments[1]||null,y=arguments[2],I=arguments[3],N=arguments[4]||0),Ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,O,F,N)},this.initRenderTarget=function(y){we.get(y).__webglFramebuffer===void 0&&L.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?L.setTextureCube(y,0):y.isData3DTexture?L.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?L.setTexture2DArray(y,0):L.setTexture2D(y,0),Se.unbindTexture()},this.resetState=function(){z=0,w=0,R=null,Se.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _1}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}};var vD=["canvas"],eg=(()=>{let e=class e{constructor(){this.rotationSpeedX=.005,this.rotationSpeedY=.005,this.size=.05,this.texture="/assets/6qRmm.jpg",this.cameraZ=400,this.fieldOfView=1,this.nearClippingPlane=1,this.farClippingPlane=1e3,this.loader=new N0,this.geometry=new G2(1,1,1),this.material=new Ni({map:this.loader.load(this.texture)}),this.cube=new pn(this.geometry)}get canvas(){return this.canvasRef.nativeElement}createScene(){this.scene=new z0,this.scene.background=new ut(0),this.scene.add(this.cube);let i=this.getAspectRatio();this.camera=new sn(this.fieldOfView,i,this.nearClippingPlane,this.farClippingPlane),this.camera.position.z=this.cameraZ}getAspectRatio(){return this.canvas.clientWidth/this.canvas.clientHeight}animateCube(){this.cube.rotation.x+=this.rotationSpeedX,this.cube.rotation.y+=this.rotationSpeedY}startRenderingLoop(){this.renderer=new w4({canvas:this.canvas}),this.renderer.setPixelRatio(devicePixelRatio),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight);let i=this;(function s(){requestAnimationFrame(s),i.animateCube(),i.renderer.render(i.scene,i.camera)})()}ngAfterViewInit(){this.createScene(),this.startRenderingLoop()}ngOnInit(){}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=Vt({type:e,selectors:[["app-three-d"]],viewQuery:function(s,r){if(s&1&&ic(vD,5),s&2){let o;Ar(o=Tr())&&(r.canvasRef=o.first)}},inputs:{rotationSpeedX:"rotationSpeedX",rotationSpeedY:"rotationSpeedY",size:"size",texture:"texture",cameraZ:"cameraZ",fieldOfView:"fieldOfView",nearClippingPlane:[Jn.None,"nearClipping","nearClippingPlane"],farClippingPlane:[Jn.None,"farClipping","farClippingPlane"]},decls:2,vars:0,consts:[["canvas",""],["id","canvas",2,"height","100vh","width","90vw","align-items","center"]],template:function(s,r){s&1&&_e(0,"canvas",1,0)}});let t=e;return t})();var tg=(()=>{let e=class e{constructor(){this.title="Furniture_Frontend_Angular"}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=Vt({type:e,selectors:[["app-root"]],decls:8,vars:0,consts:[[1,"flex","items-center","content-center"],[1,"bg-black","h-12","block"]],template:function(s,r){s&1&&(_e(0,"app-navigation-bar")(1,"app-home")(2,"app-products")(3,"app-services")(4,"app-contact-us"),ee(5,"div",0),_e(6,"app-three-d"),ie(),_e(7,"div",1))},dependencies:[lp,up,fp,dp,hp,eg]});let t=e;return t})();var ng=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=Cn({type:e,bootstrap:[tg]}),e.\u0275inj=xn({imports:[fh,t9,cp]});let t=e;return t})();uh().bootstrapModule(ng).catch(t=>console.error(t));
