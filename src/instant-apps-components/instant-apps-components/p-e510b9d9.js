let e,t,n=!1,l=!1;const s="undefined"!=typeof window?window:{},o=s.document||{head:{}},r={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},i=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),a=new WeakMap,u=e=>"sc-"+e.o,f={},h=e=>"object"==(e=typeof e)||"function"===e,p=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!h(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?$(null,l):l),o=s)};if(i(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const c=$(e,null);return c.u=t,r.length>0&&(c.h=r),c},$=(e,t)=>({t:0,p:e,i:t,$:null,h:null,u:null}),d={},y=(e,t,n,l,o,i)=>{if(n!==l){let c=z(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=m(n),o=m(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("ref"===t)l&&l(e);else if(c||"o"!==t[0]||"n"!==t[1]){const s=h(l);if((c||s&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&i||o)&&!s&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):z(s,a)?a.slice(2):a[2]+t.slice(3),n&&r.rel(e,t,n,!1),l&&r.ael(e,t,l,!1)}},w=/\s/,m=e=>e?e.split(w):[],b=(e,t,n,l)=>{const s=11===t.$.nodeType&&t.$.host?t.$.host:t.$,o=e&&e.u||f,r=t.u||f;for(l in o)l in r||y(s,l,o[l],void 0,n,t.t);for(l in r)y(s,l,o[l],r[l],n,t.t)},g=(t,l,s)=>{let r,i,c=l.h[s],a=0;if(null!==c.i)r=c.$=o.createTextNode(c.i);else{if(n||(n="svg"===c.p),r=c.$=o.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",c.p),n&&"foreignObject"===c.p&&(n=!1),b(null,c,n),null!=e&&r["s-si"]!==e&&r.classList.add(r["s-si"]=e),c.h)for(a=0;a<c.h.length;++a)i=g(t,c,a),i&&r.appendChild(i);"svg"===c.p?n=!1:"foreignObject"===r.tagName&&(n=!0)}return r},v=(e,n,l,s,o,r)=>{let i,c=e;for(c.shadowRoot&&c.tagName===t&&(c=c.shadowRoot);o<=r;++o)s[o]&&(i=g(null,l,o),i&&(s[o].$=i,c.insertBefore(i,n)))},S=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.$,M(l),s.remove())},j=(e,t)=>e.p===t.p,O=(e,t)=>{const l=t.$=e.$,s=e.h,o=t.h,r=t.p,i=t.i;null===i?(n="svg"===r||"foreignObject"!==r&&n,"slot"===r||b(e,t,n),null!==s&&null!==o?((e,t,n,l)=>{let s,o=0,r=0,i=t.length-1,c=t[0],a=t[i],u=l.length-1,f=l[0],h=l[u];for(;o<=i&&r<=u;)null==c?c=t[++o]:null==a?a=t[--i]:null==f?f=l[++r]:null==h?h=l[--u]:j(c,f)?(O(c,f),c=t[++o],f=l[++r]):j(a,h)?(O(a,h),a=t[--i],h=l[--u]):j(c,h)?(O(c,h),e.insertBefore(c.$,a.$.nextSibling),c=t[++o],h=l[--u]):j(a,f)?(O(a,f),e.insertBefore(a.$,c.$),a=t[--i],f=l[++r]):(s=g(t&&t[r],n,r),f=l[++r],s&&c.$.parentNode.insertBefore(s,c.$));o>i?v(e,null==l[u+1]?null:l[u+1].$,n,l,r,u):r>u&&S(t,o,i)})(l,s,t,o):null!==o?(null!==e.i&&(l.textContent=""),v(l,null,t,o,0,o.length-1)):null!==s&&S(s,0,s.length-1),n&&"svg"===r&&(n=!1)):e.i!==i&&(l.data=i)},M=e=>{e.u&&e.u.ref&&e.u.ref(null),e.h&&e.h.map(M)},k=e=>N(e).m,C=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},x=(e,t)=>{if(e.t|=16,!(4&e.t))return C(e,e.v),te((()=>L(e,t)));e.t|=512},L=(e,t)=>{const n=e.S;return A(void 0,(()=>P(e,n,t)))},P=async(e,t,n)=>{const l=e.m,s=l["s-rc"];n&&(e=>{const t=e.j,n=e.m,l=t.t,s=((e,t)=>{let n=u(t),l=J.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=a.get(e=e.head||e);s||a.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);E(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>R(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},E=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.m,o=n.j,r=n.O||$(null,null),i=(e=>e&&e.p===d)(l)?l:p(null,null,l);t=s.tagName,o.M&&(i.u=i.u||{},o.M.map((([e,t])=>i.u[t]=s[e]))),i.p=null,i.t|=4,n.O=i,i.$=r.$=s.shadowRoot||s,e=s["s-sc"],O(r,i)})(n,l)}catch(e){B(e,n.m)}return null},R=e=>{const t=e.m,n=e.S,l=e.v;64&e.t||(e.t|=64,H(t),U(n,"componentDidLoad"),e.k(t),l||T()),e.g&&(e.g(),e.g=void 0),512&e.t&&ee((()=>x(e,!1))),e.t&=-517},T=()=>{H(o.documentElement),ee((()=>(e=>{const t=r.ce("appload",{detail:{namespace:"instant-apps-components"}});return e.dispatchEvent(t),t})(s)))},U=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){B(e)}},A=(e,t)=>e&&e.then?e.then(t):t(),H=e=>e.classList.add("hydrated"),W=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>N(this).L.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=N(e),o=s.L.get(t),r=s.t,i=s.S;n=((e,t)=>null==e||h(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.C[t][0]),8&r&&void 0!==o||n===o||(s.L.set(t,n),i&&2==(18&r)&&x(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){r.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.M.push([e,s]),s}))}}return e},q=(e,t={})=>{const n=[],l=t.exclude||[],i=s.customElements,a=o.head,f=a.querySelector("meta[charset]"),h=o.createElement("style"),p=[];let $,d=!0;Object.assign(r,t),r.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],o:t[1],C:t[2],P:t[3]};s.C=t[2],s.M=[];const o=s.o,a=class extends HTMLElement{constructor(e){super(e),_(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){$&&(clearTimeout($),$=null),d?p.push(this):r.jmp((()=>(e=>{if(0==(1&r.t)){const t=N(e),n=t.j,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){C(t,t.v=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=I(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(W(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){B(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=u(n);if(!J.has(t)){const l=()=>{};((e,t,n)=>{let l=J.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,J.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.v,r=()=>x(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){r.jmp((()=>(()=>{0==(1&r.t)&&U(N(this).S,"disconnectedCallback")})()))}componentOnReady(){return N(this).R}};s.T=e[0],l.includes(o)||i.get(o)||(n.push(o),i.define(o,W(a,s,1)))}))})),h.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),a.insertBefore(h,f?f.nextSibling:a.firstChild),d=!1,p.length?p.map((e=>e.connectedCallback())):r.jmp((()=>$=setTimeout(T,30)))},D=e=>{const t=new URL(e,r.l);return t.origin!==s.location.origin?t.href:t.pathname},F=new WeakMap,N=e=>F.get(e),V=(e,t)=>F.set(t.S=e,t),_=(e,t)=>{const n={t:0,m:e,j:t,L:new Map};return n.R=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],F.set(e,n)},z=(e,t)=>t in e,B=(e,t)=>(0,console.error)(e,t),G=new Map,I=e=>{const t=e.o.replace(/-/g,"_"),n=e.T,l=G.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(G.set(n,e),e[t])),B)},J=new Map,K=[],Q=[],X=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&r.t?ee(Z):r.raf(Z))},Y=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){B(e)}e.length=0},Z=()=>{Y(K),Y(Q),(l=K.length>0)&&r.raf(Z)},ee=e=>i().then(e),te=X(Q,!0);export{d as H,k as a,q as b,D as g,p as h,i as p,V as r}