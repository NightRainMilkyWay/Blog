import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as d,a as e,b as n,d as s,w as u,e as i}from"./app-669aaa3e.js";const c={},v=i('<h1 id="关于本站" tabindex="-1"><a class="header-anchor" href="#关于本站" aria-hidden="true">#</a> 关于本站</h1><div class="hint-container info"><p class="hint-container-title">✨📒</p><p>详细记录一下此次建站过程</p></div><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>',3),p=e("br",null,null,-1),m=e("code",null,"vue3",-1),h=e("code",null,"typescript",-1),_=e("code",null,"vite",-1),b=e("br",null,null,-1),g={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"markdown增强",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown增强","aria-hidden":"true"},"#"),n(" Markdown增强")],-1),k=i(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── .github
│   ├── ISSUE_TEMPLATE <span class="token comment"># issus 模版</span>
│   │   └── bug-report.yml
│   └── workflows
│       └── deploy-docs.yml <span class="token comment"># 推送脚本</span>
├── CNAME
├── LICENSE
├── README.md
├── api
│   └── proxy.js <span class="token comment"># 跨域代理</span>
├── env.d.ts
├── package.json
├── pnpm-lock.yaml
├── script
│   ├── requirements.txt 
│   └── submit.py <span class="token comment"># Github Actions 推送URL使用脚本</span>
├── src
│   ├── .vuepress
│   │   ├── client.ts <span class="token comment"># 客户端配置文件</span>
│   │   ├── components
│   │   │   ├── MyCoverLink.vue <span class="token comment"># 友链组件</span>
│   │   │   └── Mylink.vue <span class="token comment"># 卡片组件</span>
│   │   ├── config.ts <span class="token comment"># vuepress配置文件</span>
│   │   ├── data <span class="token comment"># 数据</span>
│   │   ├── navbar
│   │   ├── plugins
│   │   │   ├── vuepress-plugin-canvas
│   │   │   ├── vuepress-plugin-gradient-cover
│   │   │   ├── vuepress-plugin-hitokoto
│   │   │   ├── vuepress-plugin-live2DAssist
│   │   │   └── vuepress-plugin-popper
│   │   ├── public
│   │   │   ├── assets <span class="token comment"># 资源</span>
│   │   ├── sidebar
│   │   ├── styles
│   │   ├── theme
│   │   │   ├── api
│   │   │   │   └── bing.ts <span class="token comment"># bing 每日壁纸</span>
│   │   │   ├── components <span class="token comment">#自定义组件</span>
│   │   │   ├── index.ts
│   │   │   ├── layouts <span class="token comment"># 自定义布局</span>
│   │   │   └── utils
│   │   │       ├── busuanzi.pure.js <span class="token comment"># 不蒜子统计</span>
│   │   │       └── time.ts <span class="token comment">#运行时间</span>
│   │   └── theme.ts <span class="token comment"># 主题配置文件</span>
│   └── README.md
├── tsconfig.json
└── vercel.json <span class="token comment"># vercel 配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="框架支持" tabindex="-1"><a class="header-anchor" href="#框架支持" aria-hidden="true">#</a> 框架支持</h2>`,3),y={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"主题支持",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主题支持","aria-hidden":"true"},"#"),n(" 主题支持")],-1),w={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"自定义内容",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义内容","aria-hidden":"true"},"#"),n(" 自定义内容")],-1),E=e("p",null,"基于原主题进行了继承，个性化内容如下，主要自定义内容分为",-1),L=i("<li><p><strong>自定义布局</strong></p><ul><li>NotFound.vue</li><li>Layout.vue(增加打赏组件)</li><li>News.vue(说说列表布局)</li></ul></li><li><p><strong>自定义组件</strong></p><ul><li>BlogHero.vue</li><li>PageFooter.vue</li><li>Sponsor.vue（打赏组件）</li><li>NewsList.vue （说说列表）</li><li>NewsItem.vue （说说item）</li></ul></li>",2),N=e("p",null,[e("strong",null,"本地插件开发")],-1),A=e("li",null,"vuepress-plugin-canvas（支持彩虹背景和动态几何图形两种）",-1),M=e("li",null,"vuepress-plugin-gradient-cover （遮罩背景）",-1),S=e("li",null,"vuepress-plugin-hitokoto （一言插件）",-1),C=e("li",null,"vuepress-plugin-live2DAssist （看板娘辅助，由于子页有sidebar，看板娘会挡住，所以写了一个子页隐藏的小东西）",-1),z={href:"https://github.com/moefyit/moefy-canvas",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,[e("strong",null,"引用外部内容")],-1),I={href:"https://github.com/oh-my-live2d/vuepress-plugin-oh-my-live2d",target:"_blank",rel:"noopener noreferrer"},R=e("li",null,[e("p",null,"不蒜子统计")],-1),D={href:"https://github.com/moefyit/moefy-canvas",target:"_blank",rel:"noopener noreferrer"},G={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/google-analytics.html",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,[e("strong",null,"配置内容")],-1),P=e("li",null,"navbar",-1),T=e("li",null,"sidebar",-1),U={href:"https://waline.js.org/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.algolia.com/developers/?utm_content=powered_by&utm_source=localhost&utm_medium=referral&utm_campaign=docsearch",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,"启用 copyright 版权信息插件",-1),H=e("li",null,"feed rss插件",-1),W=e("li",null,"增加文章类型-说说，为说说markdown图片添加预览选择器",-1),J=e("li",null,[e("p",null,[e("strong",null,"零碎")]),e("ul",null,[e("li",null,"运行时间统计"),e("li",null,"CSS 样式美化"),e("li",null,"引入字体，品如手写体，夏行楷体"),e("li",null,"wanlie 增加自定义emoji，并修改展示样式"),e("li",null,"个性log"),e("li",null,[n("自动推送新文章url到搜索引擎（百度、Bing、Google）👉"),e("a",{href:"/platform/github/github-action"},"详细配置")])])],-1),K=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),n(" 总结")],-1),O=e("blockquote",null,[e("p",null,"未完待续，持续优化中")],-1),Q=e("p",null,"本地插件，喜欢自取，源码公开，点击右上角，github图标即可，当然不要忘记点个✨哦",-1);function X(Y,Z){const l=a("ExternalLinkIcon"),t=a("RouterLink");return r(),d("div",null,[v,e("p",null,[n("之前的博客是基于jekyll打造的，要添加和定制化的东西都只能基于html+js+css完成，有些麻烦，所以一直有想更换引擎的想法"),p,n(" 直到偶然间发现vuepress，首先是被"),m,n("+"),h,n("+"),_,n("吸引，然后看到默认主题属实有点不合符我的期待，自己动手成本又太高，也没有太急着去折腾，直到无意中发现了"),b,e("a",g,[n("vuepress-theme-hope"),s(l)]),n("，漂亮的外观一下子就吸引到我了，然后去官网深入研究了一番，发现二次开发的成本并不高，对于我来说比较友好，基本都是基于选项的配置型，和一小部分的定制开发，也可以基于vue来写，这让我觉得很合适。所以，一步步折腾了起来……")]),f,e("p",null,[n("hope主题的markdown效果是出乎意料的好，而且支持了很多普通markdown不支持的东西，如自定义容器、带tab的代码块，最方便的是可以直接写流程图了，可选高亮主题（本站代码高亮基于shikiPlugin,虽不如默认的prismjs轻量高效，但能提供更准确的语法高亮）具体效果看这里☞"),s(t,{to:"/demo/markdown.html"},{default:u(()=>[n("Markdown展示")]),_:1})]),k,e("p",null,[e("a",y,[n("vuepress2.x"),s(l)])]),x,e("p",null,[e("a",w,[n("vuepress-theme-hope"),s(l)])]),j,E,e("ol",null,[L,e("li",null,[N,e("ul",null,[A,M,S,C,e("li",null,[n("vuepress-plugin-popper （鼠标特效，基于"),e("a",z,[n("@moefy-canvas/theme-popper"),s(l)]),n("）")])])]),e("li",null,[B,e("ul",null,[e("li",null,[e("p",null,[e("a",I,[n("vuepress-plugin-oh-my-live2d"),s(l)]),n(" 看板娘插件")])]),R,e("li",null,[e("p",null,[e("a",D,[n("@moefy-canvas/theme-popper"),s(l)]),n("原有插件只支持vuepress1.x，自己基于moefy-canvas进行了支持vuepress2.x的本地化插件开发")])]),e("li",null,[e("p",null,[e("a",G,[n("@vuepress/plugin-google-analytics"),s(l)]),n(" 支持Google Analytics 4 正好看到通知原来的UA也要被强制转换了，所以更换了G4")])])])]),e("li",null,[V,e("ul",null,[P,T,e("li",null,[n("评论基于 "),e("a",U,[n("Waline"),s(l)])]),e("li",null,[n("搜索基于"),e("a",q,[n("algolia"),s(l)])]),F,H,W])]),J]),K,O,Q])}const ne=o(c,[["render",X],["__file","about.html.vue"]]);export{ne as default};
