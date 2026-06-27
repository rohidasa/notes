import{r as i,u as v,j as e,L as p,N as u,z as k,S as _}from"./index-BrlMnA7C.js";import{c as h}from"./utils-DaT-yT0k.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(...s)=>s.filter((t,l,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===l).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,l,a)=>a?a.toUpperCase():l.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=s=>{const t=M(s);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=i.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:x="",children:c,iconNode:d,...o},m)=>i.createElement("svg",{ref:m,...S,width:t,height:t,stroke:s,strokeWidth:a?Number(l)*24/Number(t):l,className:b("lucide",x),...!c&&!A(o)&&{"aria-hidden":"true"},...o},[...d.map(([N,y])=>i.createElement(N,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=(s,t)=>{const l=i.forwardRef(({className:a,...x},c)=>i.createElement($,{ref:c,iconNode:t,className:b(`lucide-${C(f(s))}`,`lucide-${s}`,a),...x}));return l.displayName=f(s),l};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],H=r("clock",L);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],E=r("facebook",B);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],I=r("instagram",z);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],P=r("mail",T);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],R=r("map-pin",W);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],q=r("menu",K);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],U=r("message-circle",D);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],w=r("phone",Y);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],O=r("send",F);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],j=r("waves",G);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],V=r("x",Q);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],J=r("youtube",Z),n={phone:"+919448252401",phoneHref:"tel:+919448252401",whatsapp:"919448252401",email:"drrafik8@gmail.com",address:"Hoode - Kodi Bengre, Delta Beach Road, Post Hoode, Thonse West, Karnataka, India",hours:"Mon - Sun  · 24 Hours",social:{instagram:"https://instagram.com",facebook:"https://facebook.com",youtube:"https://youtube.com"}},g=[{label:"Home",to:"/"},{label:"Therapies",to:"/therapies"},{label:"Rooms",to:"/rooms"},{label:"About",to:"/about"},{label:"CMO",to:"/cmo"},{label:"Gallery",to:"/gallery"},{label:"Testimonials",to:"/testimonials"},{label:"Blog",to:"/blog"},{label:"Contact",to:"/contact"}];function X(s){const t=`https://wa.me/${n.whatsapp}`;return s?`${t}?text=${encodeURIComponent(s)}`:t}function ee(){const[s,t]=i.useState(!1),[l,a]=i.useState(!1),x=v();i.useEffect(()=>{const o=()=>t(window.scrollY>24);return o(),window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),i.useEffect(()=>{a(!1)},[x.pathname]);const c=x.pathname==="/",d=s||!c||l;return e.jsxs("header",{className:h("fixed inset-x-0 top-0 z-40 transition-all duration-500",d?"bg-coconut/95 shadow-[0_8px_30px_rgba(11,92,107,0.07)] backdrop-blur-md":"bg-transparent"),children:[e.jsxs("nav",{className:"mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8",children:[e.jsxs(p,{to:"/",className:"flex items-center gap-2.5",children:[e.jsx("span",{className:h("flex h-10 w-10 items-center justify-center rounded-full transition-colors",d?"gradient-ocean text-white":"bg-white/15 text-white backdrop-blur"),children:e.jsx(j,{className:"h-5 w-5"})}),e.jsxs("span",{className:"leading-tight",children:[e.jsx("span",{className:h("block font-display text-lg font-semibold tracking-tight transition-colors",d?"text-ocean":"text-white"),children:"Beach Healing Home"}),e.jsx("span",{className:h("block text-[10px] font-medium uppercase tracking-[0.2em] transition-colors",d?"text-seagreen":"text-white/80"),children:"Naturopathy Retreat"})]})]}),e.jsx("div",{className:"hidden items-center gap-7 lg:flex",children:g.map(o=>e.jsx(u,{to:o.to,className:({isActive:m})=>h("relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gold after:transition-all hover:after:w-full",d?m?"text-ocean after:w-full":"text-ink/80 hover:text-ocean":m?"text-white after:w-full":"text-white/90 hover:text-white"),children:o.label},o.to))}),e.jsx("div",{className:"hidden items-center gap-4 lg:flex",children:e.jsxs("a",{href:n.phoneHref,className:h("flex items-center gap-2 text-sm font-semibold transition-colors",d?"text-ocean hover:text-seagreen":"text-white hover:text-gold-soft"),children:[e.jsx(w,{className:"h-4 w-4"}),n.phone]})}),e.jsx("button",{onClick:()=>a(o=>!o),"aria-label":"Toggle menu",className:h("flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",d?"text-ocean hover:bg-sand-soft":"text-white hover:bg-white/10"),children:l?e.jsx(V,{className:"h-6 w-6"}):e.jsx(q,{className:"h-6 w-6"})})]}),e.jsx("div",{className:h("overflow-hidden border-t border-sand bg-coconut transition-all duration-300 lg:hidden",l?"max-h-[28rem]":"max-h-0"),children:e.jsxs("div",{className:"flex flex-col gap-1 px-5 py-4",children:[g.map(o=>e.jsx(u,{to:o.to,className:({isActive:m})=>h("rounded-xl px-4 py-3 text-sm font-medium transition-colors",m?"bg-sand-soft text-ocean":"text-ink/80 hover:bg-sand-soft"),children:o.label},o.to)),e.jsx(p,{to:"/contact",className:"mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ocean-deep",children:"Book Consultation"})]})})]})}const te=[{label:"Therapies",to:"/therapies"},{label:"Wellness Programs",to:"/therapies"},{label:"Rooms & Booking",to:"/rooms"},{label:"About Us",to:"/about"},{label:"Testimonials",to:"/testimonials"},{label:"Blog",to:"/blog"},{label:"Contact",to:"/contact"}];function se(){const[s,t]=i.useState(""),l=a=>{a.preventDefault(),s.trim()&&(k.success("Thank you for subscribing to our wellness journal."),t(""))};return e.jsx("footer",{className:"gradient-ocean-deep text-coconut/90",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-5 py-16 lg:px-8",children:[e.jsxs("div",{className:"grid gap-12 md:grid-cols-2 lg:grid-cols-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-white/10",children:e.jsx(j,{className:"h-5 w-5 text-gold"})}),e.jsx("span",{className:"font-display text-xl font-semibold text-white",children:"Nature Cure"})]}),e.jsx("p",{className:"mt-4 text-sm leading-relaxed text-coconut/70",children:"A beachfront sanctuary for natural healing — where the ocean, Ayurveda and naturopathy restore the balance of body, mind and spirit."}),e.jsx("div",{className:"mt-6 flex gap-3",children:[{icon:I,href:n.social.instagram},{icon:E,href:n.social.facebook},{icon:J,href:n.social.youtube}].map(({icon:a,href:x},c)=>e.jsx("a",{href:x,target:"_blank",rel:"noopener noreferrer",className:"flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-coconut/80 transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-ocean-deep",children:e.jsx(a,{className:"h-4 w-4"})},c))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-display text-lg font-semibold text-white",children:"Quick Links"}),e.jsx("ul",{className:"mt-5 space-y-3 text-sm",children:te.map(a=>e.jsx("li",{children:e.jsx(p,{to:a.to,className:"text-coconut/70 transition-colors hover:text-gold",children:a.label})},a.label))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-display text-lg font-semibold text-white",children:"Get in Touch"}),e.jsxs("ul",{className:"mt-5 space-y-4 text-sm text-coconut/70",children:[e.jsxs("li",{className:"flex gap-3",children:[e.jsx(R,{className:"mt-0.5 h-4 w-4 shrink-0 text-gold"}),e.jsx("span",{children:n.address})]}),e.jsxs("li",{className:"flex gap-3",children:[e.jsx(w,{className:"mt-0.5 h-4 w-4 shrink-0 text-gold"}),e.jsx("a",{href:n.phoneHref,className:"hover:text-gold",children:n.phone})]}),e.jsxs("li",{className:"flex gap-3",children:[e.jsx(P,{className:"mt-0.5 h-4 w-4 shrink-0 text-gold"}),e.jsx("a",{href:`mailto:${n.email}`,className:"hover:text-gold",children:n.email})]}),e.jsxs("li",{className:"flex gap-3",children:[e.jsx(H,{className:"mt-0.5 h-4 w-4 shrink-0 text-gold"}),e.jsx("span",{children:n.hours})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-display text-lg font-semibold text-white",children:"Wellness Journal"}),e.jsx("p",{className:"mt-5 text-sm text-coconut/70",children:"Subscribe for seasonal detox tips, recipes and healing insights."}),e.jsx("form",{onSubmit:l,className:"mt-4",children:e.jsxs("div",{className:"flex overflow-hidden rounded-full bg-white/10 p-1 ring-1 ring-white/15 focus-within:ring-gold",children:[e.jsx("input",{type:"email",required:!0,value:s,onChange:a=>t(a.target.value),placeholder:"Your email",className:"w-full bg-transparent px-4 text-sm text-white placeholder:text-coconut/50 focus:outline-none"}),e.jsx("button",{type:"submit","aria-label":"Subscribe",className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-ocean-deep transition-colors hover:bg-gold-soft",children:e.jsx(O,{className:"h-4 w-4"})})]})})]})]}),e.jsxs("div",{className:"mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-coconut/60 sm:flex-row",children:[e.jsxs("p",{children:["© ",new Date().getFullYear()," Beach Healing Home. All rights reserved."]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx(p,{to:"/terms",className:"hover:text-gold",children:"Privacy Policy"}),e.jsx(p,{to:"/terms",className:"hover:text-gold",children:"Terms & Conditions"})]})]})]})})}function ae(){return e.jsxs("a",{href:X("Hello Beach Healing Home, I would like to know more about your wellness programs."),target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with us on WhatsApp",className:"group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-xl shadow-[#25D366]/30 transition-all hover:pr-5 animate-float",children:[e.jsx(U,{className:"h-6 w-6 shrink-0",fill:"currentColor"}),e.jsx("span",{className:"max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100",children:"Chat with us"})]})}function ne({children:s,seo:t}){return e.jsxs("div",{className:"flex min-h-screen flex-col overflow-x-hidden bg-coconut",children:[e.jsx(_,{...t}),e.jsx(ee,{}),e.jsx("main",{className:"flex-1",children:s}),e.jsx(se,{}),e.jsx(ae,{})]})}export{R as M,g as N,w as P,ne as S,j as W,P as a,r as c};
