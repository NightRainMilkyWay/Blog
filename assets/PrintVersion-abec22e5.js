import{g as t,l as o,r as a,o as l,M as r,N as c,a as p}from"./app-66271dca.js";import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";const u="mo7-blog",d="1.4.4",_="墨七的个人博客",v="MIT",m="module",h={build:"vuepress build src",dev:"vuepress dev src --clean-cache",preview:"go run ./_shell/main.go ",update:"pnpm dlx vp-update",sync:"./_shell/GitSync.sh",deploy:"./_shell/Deploy.sh",open:"./_shell/Open.sh",weekly:"node ./_shell/weekly.js"},y={"@types/store":"^2.0.4","@vue/repl":"^2.6.1","@vuepress/client":"2.0.0-beta.67","@waline/client":"^2.15.8",aplayer:"^1.10.1","art-template":"^4.13.2",axios:"^1.6.0",dayjs:"^1.11.10","mathjax-full":"^3.2.2","reveal.js":"^4.6.1",store:"^2.0.12",vue:"^3.3.7","vue-router":"^4.2.5",vuepress:"2.0.0-beta.67","vuepress-plugin-search-pro":"2.0.0-beta.242","vuepress-theme-hope":"2.0.0-beta.242"},f={name:u,version:d,description:_,license:v,type:m,scripts:h,devDependencies:y},g=p("div",{class:"none"},"版本打印",-1),x=`   
███╗   ███╗ ██████╗ ███████╗
████╗ ████║██╔═══██╗╚════██║
██╔████╔██║██║   ██║    ██╔╝
██║╚██╔╝██║██║   ██║   ██╔╝ 
██║ ╚═╝ ██║╚██████╔╝   ██║  
╚═╝     ╚═╝ ╚═════╝    ╚═╝`,b=t({__name:"PrintVersion",setup(k){const e=()=>{console.info(x+f.version)};return o(()=>{e()}),(s,P)=>{const n=a("ClientOnly");return l(),r(n,null,{default:c(()=>[g]),_:1})}}}),D=i(b,[["__file","PrintVersion.vue"]]);export{D as default};
