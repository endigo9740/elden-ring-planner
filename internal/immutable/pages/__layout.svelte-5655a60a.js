import{F as Ke,S as De,i as Ge,s as Je,e as _,k as z,t as $,c as y,a as x,d as f,m as E,h as M,b as w,g as T,G as s,H as Ee,I as F,j as me,J as ge,K as Ne,l as J,L as we,M as Se,N as ee,O as te,P as Qe,q as Q,n as We,o as oe,p as Xe,Q as Ce,R as Ye,T as Ze,w as et,U as tt,x as rt,y as ot,V as at,W as lt,X as it,B as nt,v as st,Y as ct}from"../chunks/index-e23af36e.js";import{b as Oe,m as re,e as je}from"../chunks/source-60a23232.js";import"../chunks/index-ebaf6c6c.js";function dt(l){const e=l-1;return e*e*e+1}function Te(l,{delay:e=0,duration:t=400,easing:o=Ke}={}){const r=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:o,css:i=>`opacity: ${i*r}`}}function Ie(l,{delay:e=0,duration:t=400,easing:o=dt,x:r=0,y:i=0,opacity:n=0}={}){const a=getComputedStyle(l),c=+a.opacity,p=a.transform==="none"?"":a.transform,b=c*(1-n);return{delay:e,duration:t,easing:o,css:(h,d)=>`
			transform: ${p} translate(${(1-h)*r}px, ${(1-h)*i}px);
			opacity: ${c-b*d}`}}function Le(l,e,t){const o=l.slice();return o[14]=e[t][0],o[15]=e[t][1],o}function qe(l,e,t){const o=l.slice();return o[18]=e[t],o}function Ae(l,e,t){const o=l.slice();return o[14]=e[t][0],o[15]=e[t][1],o}function $e(l){let e,t,o,r,i,n,a=l[3].label+"",c,p,b,h,d,g,u,j,k,N,L,I,le=Object.entries(l[3].source).length>1,W,P,K,ie,ne,q,se,A,ce,X,de,pe,fe,B,U,H,V,ue,be,S=le&&Me(l),D=Object.entries(l[3].source),C=[];for(let m=0;m<D.length;m+=1)C[m]=Fe(Le(l,D,m));return{c(){e=_("div"),t=_("div"),o=z(),r=_("div"),i=_("header"),n=_("h2"),c=$(a),p=z(),b=_("div"),h=_("button"),d=$("Unequip"),g=z(),u=_("button"),j=$("Close \u2715"),k=z(),N=_("hr"),L=z(),I=_("section"),S&&S.c(),W=z(),P=_("label"),K=_("span"),ie=$("Search"),ne=z(),q=_("input"),se=z(),A=_("button"),ce=$("Clear"),de=z(),pe=_("hr"),fe=z(),B=_("section");for(let m=0;m<C.length;m+=1)C[m].c();this.h()},l(m){e=y(m,"DIV",{class:!0});var O=x(e);t=y(O,"DIV",{class:!0}),x(t).forEach(f),o=E(O),r=y(O,"DIV",{class:!0});var v=x(r);i=y(v,"HEADER",{class:!0});var R=x(i);n=y(R,"H2",{class:!0});var ve=x(n);c=M(ve,a),ve.forEach(f),p=E(R),b=y(R,"DIV",{class:!0});var Y=x(b);h=y(Y,"BUTTON",{type:!0});var _e=x(h);d=M(_e,"Unequip"),_e.forEach(f),g=E(Y),u=y(Y,"BUTTON",{type:!0,class:!0});var ye=x(u);j=M(ye,"Close \u2715"),ye.forEach(f),Y.forEach(f),R.forEach(f),k=E(v),N=y(v,"HR",{}),L=E(v),I=y(v,"SECTION",{class:!0});var G=x(I);S&&S.l(G),W=E(G),P=y(G,"LABEL",{});var Z=x(P);K=y(Z,"SPAN",{});var xe=x(K);ie=M(xe,"Search"),xe.forEach(f),ne=E(Z),q=y(Z,"INPUT",{class:!0,type:!0,placeholder:!0}),Z.forEach(f),se=E(G),A=y(G,"BUTTON",{type:!0});var ke=x(A);ce=M(ke,"Clear"),ke.forEach(f),G.forEach(f),de=E(v),pe=y(v,"HR",{}),fe=E(v),B=y(v,"SECTION",{class:!0});var ze=x(B);for(let he=0;he<C.length;he+=1)C[he].l(ze);ze.forEach(f),v.forEach(f),O.forEach(f),this.h()},h(){w(t,"class","flex-auto"),w(n,"class","capitalize"),w(h,"type","button"),w(u,"type","button"),w(u,"class","px-4"),w(b,"class","flex items-center space-x-4"),w(i,"class","flex-none flex justify-between p-4"),w(q,"class","flex-[60%]"),w(q,"type","search"),w(q,"placeholder","Search..."),w(A,"type","button"),A.disabled=X=!l[1]&&!l[0],w(I,"class","p-4 flex items-end space-x-4"),w(B,"class","p-4 flex-auto space-y-4 overflow-y-auto"),w(r,"class","bg-gold-bg w-[90%] md:w-[75%] lg:w-[40%] flex flex-col"),w(e,"class","fixed z-50 w-full h-full flex bg-gold-md/50")},m(m,O){T(m,e,O),s(e,t),s(e,o),s(e,r),s(r,i),s(i,n),s(n,c),s(i,p),s(i,b),s(b,h),s(h,d),s(b,g),s(b,u),s(u,j),s(r,k),s(r,N),s(r,L),s(r,I),S&&S.m(I,null),s(I,W),s(I,P),s(P,K),s(K,ie),s(P,ne),s(P,q),Ee(q,l[1]),s(I,se),s(I,A),s(A,ce),s(r,de),s(r,pe),s(r,fe),s(r,B);for(let v=0;v<C.length;v+=1)C[v].m(B,null);V=!0,ue||(be=[F(t,"click",l[8]),F(h,"click",l[7]),F(u,"click",l[8]),F(q,"input",l[10]),F(A,"click",l[4])],ue=!0)},p(m,O){if((!V||O&8)&&a!==(a=m[3].label+"")&&me(c,a),O&8&&(le=Object.entries(m[3].source).length>1),le?S?S.p(m,O):(S=Me(m),S.c(),S.m(I,W)):S&&(S.d(1),S=null),O&2&&Ee(q,m[1]),(!V||O&11&&X!==(X=!m[1]&&!m[0]))&&(A.disabled=X),O&108){D=Object.entries(m[3].source);let v;for(v=0;v<D.length;v+=1){const R=Le(m,D,v);C[v]?C[v].p(R,O):(C[v]=Fe(R),C[v].c(),C[v].m(B,null))}for(;v<C.length;v+=1)C[v].d(1);C.length=D.length}},i(m){V||(ge(()=>{U||(U=te(r,Ie,{x:400,duration:200},!0)),U.run(1)}),ge(()=>{H||(H=te(e,Te,{duration:100},!0)),H.run(1)}),V=!0)},o(m){U||(U=te(r,Ie,{x:400,duration:200},!1)),U.run(0),H||(H=te(e,Te,{duration:100},!1)),H.run(0),V=!1},d(m){m&&f(e),S&&S.d(),we(C,m),m&&U&&U.end(),m&&H&&H.end(),ue=!1,Qe(be)}}}function Me(l){let e,t,o,r,i,n,a,c,p,b=Object.entries(l[3].source),h=[];for(let d=0;d<b.length;d+=1)h[d]=He(Ae(l,b,d));return{c(){e=_("label"),t=_("span"),o=$("Category"),r=z(),i=_("select"),n=_("option"),a=$("- None -");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){e=y(d,"LABEL",{});var g=x(e);t=y(g,"SPAN",{});var u=x(t);o=M(u,"Category"),u.forEach(f),r=E(g),i=y(g,"SELECT",{class:!0});var j=x(i);n=y(j,"OPTION",{});var k=x(n);a=M(k,"- None -"),k.forEach(f);for(let N=0;N<h.length;N+=1)h[N].l(j);j.forEach(f),g.forEach(f),this.h()},h(){n.__value="",n.value=n.__value,w(i,"class","flex-[40%] list-none grid grid-cols-3 gap-4"),l[0]===void 0&&ge(()=>l[9].call(i))},m(d,g){T(d,e,g),s(e,t),s(t,o),s(e,r),s(e,i),s(i,n),s(n,a);for(let u=0;u<h.length;u+=1)h[u].m(i,null);Ne(i,l[0]),c||(p=F(i,"change",l[9]),c=!0)},p(d,g){if(g&8){b=Object.entries(d[3].source);let u;for(u=0;u<b.length;u+=1){const j=Ae(d,b,u);h[u]?h[u].p(j,g):(h[u]=He(j),h[u].c(),h[u].m(i,null))}for(;u<h.length;u+=1)h[u].d(1);h.length=b.length}g&9&&Ne(i,d[0])},d(d){d&&f(e),we(h,d),c=!1,p()}}}function Ue(l){let e,t=ae(l[14])+"",o,r,i;return{c(){e=_("option"),o=$(t),r=z(),this.h()},l(n){e=y(n,"OPTION",{class:!0});var a=x(e);o=M(a,t),r=E(a),a.forEach(f),this.h()},h(){e.__value=i=l[14],e.value=e.__value,w(e,"class","border border-gold-md bg-gold-md/20 p-2 rounded-xl hover:bg-gold-lt cursor-pointer")},m(n,a){T(n,e,a),s(e,o),s(e,r)},p(n,a){a&8&&t!==(t=ae(n[14])+"")&&me(o,t),a&8&&i!==(i=n[14])&&(e.__value=i,e.value=e.__value)},d(n){n&&f(e)}}}function He(l){let e,t=l[14]!=="_"&&Ue(l);return{c(){t&&t.c(),e=J()},l(o){t&&t.l(o),e=J()},m(o,r){t&&t.m(o,r),T(o,e,r)},p(o,r){o[14]!=="_"?t?t.p(o,r):(t=Ue(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(o){t&&t.d(o),o&&f(e)}}}function Pe(l){let e,t,o,r=l[14]!=="_"&&Be(l),i=l[2](l[15]),n=[];for(let a=0;a<i.length;a+=1)n[a]=Re(qe(l,i,a));return{c(){r&&r.c(),e=z(),t=_("nav");for(let a=0;a<n.length;a+=1)n[a].c();o=z(),this.h()},l(a){r&&r.l(a),e=E(a),t=y(a,"NAV",{class:!0});var c=x(t);for(let p=0;p<n.length;p+=1)n[p].l(c);o=E(c),c.forEach(f),this.h()},h(){w(t,"class","list-none grid grid-cols-3 gap-4")},m(a,c){r&&r.m(a,c),T(a,e,c),T(a,t,c);for(let p=0;p<n.length;p+=1)n[p].m(t,null);s(t,o)},p(a,c){if(a[14]!=="_"?r?r.p(a,c):(r=Be(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),c&108){i=a[2](a[15]);let p;for(p=0;p<i.length;p+=1){const b=qe(a,i,p);n[p]?n[p].p(b,c):(n[p]=Re(b),n[p].c(),n[p].m(t,o))}for(;p<n.length;p+=1)n[p].d(1);n.length=i.length}},d(a){r&&r.d(a),a&&f(e),a&&f(t),we(n,a)}}}function Be(l){let e,t=ae(l[14])+"",o;return{c(){e=_("h3"),o=$(t),this.h()},l(r){e=y(r,"H3",{class:!0});var i=x(e);o=M(i,t),i.forEach(f),this.h()},h(){w(e,"class","capitalize")},m(r,i){T(r,e,i),s(e,o)},p(r,i){i&8&&t!==(t=ae(r[14])+"")&&me(o,t)},d(r){r&&f(e)}}}function Re(l){let e,t,o,r,i,n,a,c=(l[18].name?l[18].name:"...")+"",p,b;function h(){return l[11](l[18])}return{c(){e=_("li"),t=_("img"),n=z(),a=_("p"),this.h()},l(d){e=y(d,"LI",{class:!0});var g=x(e);t=y(g,"IMG",{class:!0,src:!0,title:!0,alt:!0,loading:!0}),n=E(g),a=y(g,"P",{class:!0});var u=x(a);u.forEach(f),g.forEach(f),this.h()},h(){w(t,"class","w-full aspect-square"),Se(t.src,o=Oe+"/"+l[18].path)||w(t,"src",o),w(t,"title",r=l[18].name),w(t,"alt",i=l[18].name),w(t,"loading","lazy"),w(a,"class","text-[10px] lg:text-xs text-center text-ellipsis overflow-hidden mt-3"),w(e,"class","border border-gold-md bg-gold-md/20 p-2 rounded-xl hover:bg-gold-lt cursor-pointer"),ee(e,"bg-gold-md",l[5](l[18])),ee(e,"opacity-30",l[18].unavailable===!0)},m(d,g){T(d,e,g),s(e,t),s(e,n),s(e,a),a.innerHTML=c,p||(b=F(e,"click",h),p=!0)},p(d,g){l=d,g&12&&!Se(t.src,o=Oe+"/"+l[18].path)&&w(t,"src",o),g&12&&r!==(r=l[18].name)&&w(t,"title",r),g&12&&i!==(i=l[18].name)&&w(t,"alt",i),g&12&&c!==(c=(l[18].name?l[18].name:"...")+"")&&(a.innerHTML=c),g&44&&ee(e,"bg-gold-md",l[5](l[18])),g&12&&ee(e,"opacity-30",l[18].unavailable===!0)},d(d){d&&f(e),p=!1,b()}}}function Fe(l){let e=l[2](l[15]).length,t,o=e&&Pe(l);return{c(){o&&o.c(),t=J()},l(r){o&&o.l(r),t=J()},m(r,i){o&&o.m(r,i),T(r,t,i)},p(r,i){i&12&&(e=r[2](r[15]).length),e?o?o.p(r,i):(o=Pe(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(r){o&&o.d(r),r&&f(t)}}}function pt(l){let e,t,o=l[3]&&$e(l);return{c(){o&&o.c(),e=J()},l(r){o&&o.l(r),e=J()},m(r,i){o&&o.m(r,i),T(r,e,i),t=!0},p(r,[i]){r[3]?o?(o.p(r,i),i&8&&Q(o,1)):(o=$e(r),o.c(),Q(o,1),o.m(e.parentNode,e)):o&&(We(),oe(o,1,1,()=>{o=null}),Xe())},i(r){t||(Q(o),t=!0)},o(r){oe(o),t=!1},d(r){o&&o.d(r),r&&f(e)}}}function ae(l){return l.replaceAll("_"," ")}function ft(l,e,t){let o,r,i;Ce(l,re,k=>t(3,r=k)),Ce(l,je,k=>t(12,i=k));let n="",a="";function c(){t(0,n=""),t(1,a="")}function p(k){return i[r.slot]?k.path===i[r.slot].path:!1}function b(k){const N=i;N[r.slot]=k,je.set(N),d()}function h(){b(null)}function d(){re.set(void 0)}re.subscribe(k=>{t(0,n="")});function g(){n=Ye(this),t(0,n)}function u(){a=this.value,t(1,a)}const j=k=>{b(k)};return l.$$.update=()=>{l.$$.dirty&3&&t(2,o=k=>{let N=Array.from(k);return N=N.filter(L=>n?(console.log(L.path,`/${n}/`),L.path.includes(`/${n}/`)):L),N=N.filter(L=>JSON.stringify(L).toLowerCase().includes(a.toLowerCase())),N})},[n,a,o,r,c,p,b,h,d,g,u,j]}class ut extends De{constructor(e){super(),Ge(this,e,ft,pt,Je,{})}}const{document:Ve}=ct;function ht(l){let e,t,o,r;t=new ut({});const i=l[1].default,n=Ze(i,l,l[0],null);return{c(){e=z(),et(t.$$.fragment),o=z(),n&&n.c(),this.h()},l(a){tt('[data-svelte="svelte-42o5x9"]',Ve.head).forEach(f),e=E(a),rt(t.$$.fragment,a),o=E(a),n&&n.l(a),this.h()},h(){Ve.title="Elden Ring - Fashion Planner"},m(a,c){T(a,e,c),ot(t,a,c),T(a,o,c),n&&n.m(a,c),r=!0},p(a,[c]){n&&n.p&&(!r||c&1)&&at(n,i,a,a[0],r?it(i,a[0],c,null):lt(a[0]),null)},i(a){r||(Q(t.$$.fragment,a),Q(n,a),r=!0)},o(a){oe(t.$$.fragment,a),oe(n,a),r=!1},d(a){a&&f(e),nt(t,a),a&&f(o),n&&n.d(a)}}}function gt(l,e,t){let{$$slots:o={},$$scope:r}=e;return st(()=>{re.subscribe(i=>{const n="overflow-hidden";i!==void 0?document.body.classList.add(n):document.body.classList.remove(n)})}),l.$$set=i=>{"$$scope"in i&&t(0,r=i.$$scope)},[r,o]}class vt extends De{constructor(e){super(),Ge(this,e,gt,ht,Je,{})}}export{vt as default};
