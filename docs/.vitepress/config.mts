/*
 * @Author: HuWJ
 * @Date: 2024-04-26 14:02:52
 * @LastEditors: HuWJ
 * @LastEditTime: 2024-04-28 15:51:35
 * @FilePath: \notesf:\Github\vitePress\docs\.vitepress\config.mts
 * @Description:
 */
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点级选项
  title: "小胡猩球",
  base: '/base/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 主题级选项
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});