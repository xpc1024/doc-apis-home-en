const head = require('./config/head.js'); // 广告插件检测
const themeConfig = require('./config/themeConfig.js');
const plugins = require('./config/plugins.js');

module.exports = {
  theme: 'vdoing', // 使用依赖包主题
  title: "doc-apis",
  description: 'Zero-code Zero-intrusion Interface Documentation Auto-generation Framework',
  base: "/",
  head,
  themeConfig,
  plugins,

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  head: [
    // 添加 window.difyChatbotConfig 脚本
    [
      'script',
      {},
      `
      window.difyChatbotConfig = {
        token: 'jzIaF7lvgho5YFaG'
      }
      `
    ],
    // 添加 dify embed 脚本
    [
      'script',
      {
        src: "https://udify.app/embed.min.js",
        id: "4dk8oM4z8aXmV0B7",
        defer: true
      }
    ],
    // 添加自定义样式
    [
      'style',
      {},
      `
      #dify-chatbot-bubble-button {
        background-color: #25c37d !important;
        width:35px !important; 
        height:35px !important; 
      }
      `,

    ]
  ],

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/head.js',
    '.vuepress/config/nav.js',
    '.vuepress/config/htmlModules.js',
    '.vuepress/config/plugins.js',
    '.vuepress/config/themeConfig.js',
  ]
}
