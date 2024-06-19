import{J as A,Q as k,R as M,S as P,N as H,M as p,T as F,H as y,U,V as W,W as Y}from"./index-4XztEnW9.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const D=new WeakMap,T=(e,s,t,o=0,i=!1)=>{D.has(e)!==t&&(t?q(e,s,o,i):G(e,s))},$=e=>e===e.getRootNode().activeElement,q=(e,s,t,o=!1)=>{const i=s.parentNode,r=s.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),i.appendChild(r),D.set(e,r);const a=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",s.style.transform="translate3d(".concat(a,"px,").concat(t,"px,0) scale(0)")},G=(e,s)=>{const t=D.get(e);t&&(D.delete(e),t.remove()),e.style.pointerEvents="",s.style.transform=""},O=50,z=(e,s,t)=>{if(!t||!s)return()=>{};const o=a=>{$(s)&&T(e,s,a)},i=()=>T(e,s,!1),r=()=>o(!0),c=()=>o(!1);return M(t,"ionScrollStart",r),M(t,"ionScrollEnd",c),s.addEventListener("blur",i),()=>{P(t,"ionScrollStart",r),P(t,"ionScrollEnd",c),s.removeEventListener("blur",i)}},I="input, textarea, [no-blur], [contenteditable]",j=()=>{let e=!0,s=!1;const t=document,o=()=>{s=!0},i=()=>{e=!0},r=c=>{if(s){s=!1;return}const a=t.activeElement;if(!a||a.matches(I))return;const f=c.target;f!==a&&(f.matches(I)||f.closest(I)||(e=!1,setTimeout(()=>{e||a.blur()},50)))};return M(t,"ionScrollStart",o),t.addEventListener("focusin",i,!0),t.addEventListener("touchend",r,!1),()=>{P(t,"ionScrollStart",o,!0),t.removeEventListener("focusin",i,!0),t.removeEventListener("touchend",r,!1)}},J=.3,Q=(e,s,t,o)=>{var i;const r=(i=e.closest("ion-item,[ion-item]"))!==null&&i!==void 0?i:e;return V(r.getBoundingClientRect(),s.getBoundingClientRect(),t,o)},V=(e,s,t,o)=>{const i=e.top,r=e.bottom,c=s.top,a=Math.min(s.bottom,o-t),f=c+15,l=a-O-r,d=f-i,S=Math.round(l<0?-l:d>0?-d:0),v=Math.min(S,i-c),n=Math.abs(v)/J,h=Math.min(400,Math.max(150,n));return{scrollAmount:v,scrollDuration:h,scrollPadding:t,inputSafeY:-(i-f)+4}},x="$ionPaddingTimer",B=(e,s,t)=>{const o=e[x];o&&clearTimeout(o),s>0?e.style.setProperty("--keyboard-offset","".concat(s,"px")):e[x]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},N=(e,s,t)=>{const o=()=>{s&&B(s,0,t)};e.addEventListener("focusout",o,{once:!0})};let g=0;const K="data-ionic-skip-scroll-assist",X=(e,s,t,o,i,r,c,a=!1)=>{const f=r&&(c===void 0||c.mode===F.None);let u=!1;const l=y!==void 0?y.innerHeight:0,d=w=>{if(u===!1){u=!0;return}_(e,s,t,o,w.detail.keyboardHeight,f,a,l,!1)},S=()=>{u=!1,y===null||y===void 0||y.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",S)},v=async()=>{if(s.hasAttribute(K)){s.removeAttribute(K);return}_(e,s,t,o,i,f,a,l),y===null||y===void 0||y.addEventListener("ionKeyboardDidShow",d),e.addEventListener("focusout",S)};return e.addEventListener("focusin",v),()=>{e.removeEventListener("focusin",v),y===null||y===void 0||y.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",S)}},C=e=>{document.activeElement!==e&&(e.setAttribute(K,"true"),e.focus())},_=async(e,s,t,o,i,r,c=!1,a=0,f=!0)=>{if(!t&&!o)return;const u=Q(e,t||o,i,a);if(t&&Math.abs(u.scrollAmount)<4){C(s),r&&t!==null&&(B(t,g),N(s,t,()=>g=0));return}if(T(e,s,!0,u.inputSafeY,c),C(s),U(()=>e.click()),r&&t&&(g=u.scrollPadding,B(t,g)),typeof window<"u"){let l;const d=async()=>{l!==void 0&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",S),window.removeEventListener("ionKeyboardDidShow",d),t&&await Y(t,0,u.scrollAmount,u.scrollDuration),T(e,s,!1,u.inputSafeY),C(s),r&&N(s,t,()=>g=0)},S=()=>{window.removeEventListener("ionKeyboardDidShow",S),window.addEventListener("ionKeyboardDidShow",d)};if(t){const v=await W(t),w=v.scrollHeight-v.clientHeight;if(f&&u.scrollAmount>w-v.scrollTop){s.type==="password"?(u.scrollAmount+=O,window.addEventListener("ionKeyboardDidShow",S)):window.addEventListener("ionKeyboardDidShow",d),l=setTimeout(d,1e3);return}}d()}},Z=!0,te=async(e,s)=>{if(A===void 0)return;const t=s==="ios",o=s==="android",i=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",t),a=e.getBoolean("inputBlurring",!1),f=e.getBoolean("scrollPadding",!0),u=Array.from(A.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,d=new WeakMap,S=await k.getResizeMode(),v=async n=>{await new Promise(m=>H(n,m));const h=n.shadowRoot||n,L=h.querySelector("input")||h.querySelector("textarea"),b=p(n),R=b?null:n.closest("ion-footer");if(!L)return;if(b&&c&&!l.has(n)){const m=z(n,L,b);l.set(n,m)}if(!(L.type==="date"||L.type==="datetime-local")&&(b||R)&&r&&!d.has(n)){const m=X(n,L,b,R,i,f,S,o);d.set(n,m)}},w=n=>{if(c){const h=l.get(n);h&&h(),l.delete(n)}if(r){const h=d.get(n);h&&h(),d.delete(n)}};a&&Z&&j();for(const n of u)v(n);A.addEventListener("ionInputDidLoad",n=>{v(n.detail)}),A.addEventListener("ionInputDidUnload",n=>{w(n.detail)})};export{te as startInputShims};
