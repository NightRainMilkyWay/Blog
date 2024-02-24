import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "博客相关",
      icon: "blog",
      prefix: "blog/",
      link: "blog/",
    },
    {
      text: "关于",
      icon: "info",
      prefix: "about/",
      link: "about",
    },
  ],
  "/Arch Linux/": "structure",
  "/Cu/": "structure",
});
