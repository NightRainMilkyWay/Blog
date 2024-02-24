import { hopeTheme } from 'vuepress-theme-hope';
import { zhNavbar } from './navbar/index.js';
import { zhSidebar } from './sidebar/index.js';
import path from 'path';

const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img src="//file.mo7.cc/static/img/beian.png">
  陕ICP备2022011574号
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/about/website.html">关于本站</a>`;

export default hopeTheme({
  hostname: 'https://NightRainMilkyWay.cn',
  author: {
    name: '夜雨 星河',
    url: 'https://NightRainMilkyWay.cn',
  },
  iconAssets: '//at.alicdn.com/t/c/font_3855310_u33584v4jsc.css',
  logo: '/logo.png',
  docsDir: 'src',
  editLink: false,
  fullscreen: true,
  navbarAutoHide: 'always',
  footer: footerICP_HTML,
  pageInfo: [
    'Author',
    'Category',
    'Date',
    'Original',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView',
    //..
  ],

  blog: {
    avatar: '/logo.png',
    roundAvatar: true,
    medias: {
      Gmail: 'mailto: NightRainMilkyWay@gamil.com',
      GitHub: 'https://github.com/NightRainMilkyWay',
      Gitee: 'https://gitee.com/NightRainMilkyWay', 
    },
  },

  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Outlook'],
  },

  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      blog: {
        name: '夜雨 星河',
        description: '简单快乐，理应如此。',
        intro: '/about/me.html',
        timeline: '美好的事情即将发生',
      },
    },
  },

  encrypt: {
    config: {
      '/en/demo/encrypt.html': ['1234'],
    },
  },

  plugins: {
    blog: true,

    comment: {
      provider: 'Waline',
      serverURL: 'https://NightRainMilkyWay.cn',
      copyright: false,
      reaction: true,
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,

      // install chart.js before enabling it
      // chart: true,

      codetabs: true,
      demo: true,

      // install echarts before enabling it
      // echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: {
        resolvePath: (file) => {
          // if (file.startsWith('@')) {
          //   return file.replace('@', path.resolve(__dirname, '../../'));
          // }
          return file;
        },
      },

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ['ts', 'vue'],
      },

      // install reveal.js before enabling it
      revealJs: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },

      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install @vue/repl before enabling it
      vuePlayground: true,
    },

    pwa: {
      favicon: '/favicon.png',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/pwa/144.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/pwa/144.png',
        color: '#000',
      },
      manifest: {
        icons: [
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'NightRainMilkyWay',
            short_name: 'NightRainMilkyWay',
            url: '/',
            icons: [
              {
                src: '/pwa/192.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },
  },
});
