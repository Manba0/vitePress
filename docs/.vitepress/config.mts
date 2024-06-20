/*
 * @Author: HuWJ
 * @Date: 2024-04-26 14:02:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-20 18:17:49
 * @FilePath: \vitePress\docs\.vitepress\config.mts
 * @Description:
 */
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点级选项
  title: "源计划-猿劲华",
  base: "/vitePress/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 主题级选项
    nav: [
      { text: "主页", link: "/" },
      { text: "Javascript系列", link: "/javascript-series/in-depth-series/01" },
    ],
    // 多侧边栏 根据页面路径显示不同的侧边栏
    sidebar: {
      "/javascript-series/": [
        {
          text: "深入系列",
          collapsed: false,
          items: [
            {
              text: "从原型到原型链",
              link: "/javascript-series/in-depth-series/01",
            },
          ],
        },
        {
          text: "专题系列",
          collapsed: false,
          items: [
            {
              text: "跟着underscore学防抖",
              link: "/javascript-series/special-topics-series/01",
            },
          ],
        },
        {
          text: "underscore 系列",
          collapsed: false,
          items: [
            {
              text: "如何写自己的 underscore",
              link: "/javascript-series/underscore-series/01",
            },
          ],
        },
        {
          text: "ES6 系列",
          collapsed: false,
          items: [
            {
              text: "如何写自己的 underscore",
              link: "/javascript-series/es6-series/01",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
