// generate-config.js
const fs = require("fs");
const path = require("path");

let md_dir = "pages";
const files = fs
  .readdirSync(md_dir)
  .filter((file) => file.startsWith("HelloGitHub"));
// .filter((file) => file.startsWith("HelloGithub") && file.endsWith(".md"));

let config = `
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'HelloGithub', link: '/HelloGitHub100.html' },
      { text: 'Home', link: '/HelloGitHub100' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],
    sidebar: [
      {
        text: 'HelloGithub',
        items: [
`;

files.forEach((file) => {
  let temp = `          { text: '${file.replace("HelloGitHub", "").replace(".md", "")}', link: '/${file.replace(".md", "")}' },\n`;
  // console.log(temp);
  config += temp;
});

config += `
      ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    }
  }
})
`;

fs.writeFileSync(
  path.join(__dirname, md_dir + "/.vitepress/" + "config.mts"),
  config,
);
// pages/.vitepress/config.mts
