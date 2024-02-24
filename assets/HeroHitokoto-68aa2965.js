import{a as p}from"./axios-a342f982.js";import{g as v,l as x,L as _,n as g,r as k,o as y,M as E,N as H,a as T}from"./app-66271dca.js";import{_ as B}from"./plugin-vue_export-helper-c27b6911.js";const I=T("div",{class:"none"},"一言插件",-1),w=v({__name:"HeroHitokoto",setup(C){const f=o=>{const t=window;clearInterval(t.Timer);const n=document.getElementsByClassName("vp-blog-hero-description");if(n.length>0){const d=n[0];d.id="hotWord"}const m=document.getElementById("hotWord");if(!m)return;m.innerHTML=`
<div class="word">
  <div class="left">『</div>
    <span id="hitokoto_text"></span>
  <div class="right">』</div>
</div>
<div class="author" id="hitokoto_author"> ——「${o.from}」</div>
  `;const l=document.getElementById("hitokoto_author"),u=document.getElementById("hitokoto_text");if(!u||!l)return;l.style.opacity="0";const c=o.hitokoto.split("");let e=0,i=0,h=60,r=!1,s="";t.Timer=setInterval(()=>{const d=c[e];if(s.length<4?l.style.opacity="0":l.style.opacity="1",i!=0){i--,s.length==0&&i==0&&(clearInterval(t.Timer),a());return}r?s=s.slice(0,e):s+=d,r?e--:e++,e>=c.length&&(r=!0,e=c.length,i=h),e<0&&(r=!1,e=0,i=h),u.innerHTML=s},200)},a=o=>{let t=window.location.pathname;o&&(t=o),t=="/"&&p({method:"get",url:"https://v1.hitokoto.cn",params:{}}).then(n=>{f(n.data)})};return x(()=>{_(()=>{a()}),g().beforeEach(t=>{_(()=>{a(t.fullPath)})})}),(o,t)=>{const n=k("ClientOnly");return y(),E(n,null,{default:H(()=>[I]),_:1})}}});const L=B(w,[["__file","HeroHitokoto.vue"]]);export{L as default};
