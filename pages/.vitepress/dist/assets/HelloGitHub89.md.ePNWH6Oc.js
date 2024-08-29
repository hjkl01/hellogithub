import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.DpC1ZpOZ.js";const d=JSON.parse('{"title":"《HelloGitHub》第 89 期","description":"","frontmatter":{},"headers":[],"relativePath":"HelloGitHub89.md","filePath":"HelloGitHub89.md"}'),e={name:"HelloGitHub89.md"},n=t(`<h1 id="《hellogithub》第-89-期" tabindex="-1">《HelloGitHub》第 89 期 <a class="header-anchor" href="#《hellogithub》第-89-期" aria-label="Permalink to &quot;《HelloGitHub》第 89 期&quot;">​</a></h1><blockquote><p>兴趣是最好的老师，<strong>HelloGitHub</strong> 让你对编程感兴趣！</p></blockquote><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/cover.jpg" style="max-width:100%;"></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>点击右上角的 <strong>「目录」</strong> 图标打开目录，获得更好的阅读体验。</p><p><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/catalog.png" alt=""></p><p><strong>Tips</strong>：如果遇到图片刷不出来的情况，<a href="https://hellogithub.com/periodical/volume/89" target="_blank" rel="noreferrer">点击</a> 换一种浏览方式。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/weixin.png" style="max-width:30%;"><br> 关注「HelloGitHub」公众号，第一时间收到推送 </p><h2 id="内容" tabindex="-1">内容 <a class="header-anchor" href="#内容" aria-label="Permalink to &quot;内容&quot;">​</a></h2><blockquote><p><strong>以下为本期内容</strong>｜每个月 <strong>28</strong> 号更新</p></blockquote><h3 id="c-项目" tabindex="-1">C 项目 <a class="header-anchor" href="#c-项目" aria-label="Permalink to &quot;C 项目&quot;">​</a></h3><p>1、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/lucavallin/barco" target="_blank" rel="noreferrer">barco</a>：用 C 语言从头写一个 Linux 容器。该项目仅依赖底层的 Linux 功能，用 C 语言实现的一个 Linux 容器，可用来了解更多关于 Linux 容器和内核的技术细节。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo ./bin/barco -u 0 -m / -c /bin/sh -a . [-v]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>22:08:41 INFO  ./src/barco.c:96: initializing socket pair...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/barco.c:103: setting socket flags...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/barco.c:112: initializing container stack...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/barco.c:120: initializing container...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/barco.c:131: initializing cgroups...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/cgroups.c:73: setting memory.max to 1G...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/cgroups.c:73: setting cpu.weight to 256...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/cgroups.c:73: setting pids.max to 64...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/cgroups.c:73: setting cgroup.procs to 1458...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/barco.c:139: configuring user namespace...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/barco.c:147: waiting for container to exit...</span></span>
<span class="line"><span>22:08:41 INFO  ./src/container.c:43: ### BARCONTAINER STARTING - type &#39;exit&#39; to quit ###</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ls</span></span>
<span class="line"><span>bin         home                lib32       media       root        sys         vmlinuz</span></span>
<span class="line"><span>boot        initrd.img          lib64       mnt         run         tmp         vmlinuz.old</span></span>
<span class="line"><span>dev         initrd.img.old      libx32      opt         sbin        usr</span></span>
<span class="line"><span>etc         lib                 lost+found  proc        srv         var</span></span>
<span class="line"><span># echo &quot;i am a container&quot;</span></span>
<span class="line"><span>i am a container</span></span></code></pre></div><p>2、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/id-Software/quake2-rerelease-dll" target="_blank" rel="noreferrer">quake2-rerelease-dll</a>：《雷神之锤 2》官方重制版源码。《雷神之锤 2》是 id Software 在 1997 年发布的一款第一人称射击游戏，被许多玩家视为经典。该项目是官方 2023 年重新发布的 《雷神之锤 2》游戏源码。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/675738701.jpg" style="max-width:80%;"></p><p>3、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/curl/trurl" target="_blank" rel="noreferrer">trurl</a>：解析和操作 URL 的命令行工具。该项目是 cURL 作者的新作，可用来解析 URL、替换/提取/设置 URL 中的参数。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/621725724.jpg" style="max-width:80%;"></p><h3 id="c-项目-1" tabindex="-1">C# 项目 <a class="header-anchor" href="#c-项目-1" aria-label="Permalink to &quot;C# 项目&quot;">​</a></h3><p>4、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/BookerLiu/GeekDesk" target="_blank" rel="noreferrer">GeekDesk</a>：小巧的 Windows 桌面启动工具。这款名为极客桌面的免费工具，拥有极简的界面，支持搜索全盘文件、一键呼出、自定义壁纸、定时提醒等功能。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/357072316.gif" style="max-width:80%;"></p><p>5、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/Scighost/Starward" target="_blank" rel="noreferrer">Starward</a>：一款开源的 miHoYo 游戏启动器。这是一款支持米哈游旗下所有桌面端游戏的启动器，支持下载游戏、记录游戏时间、切换账号、保存抽卡记录、米游社工具箱等功能，可运行在 Windows 10 及以上的操作系统。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/636565625.gif" style="max-width:80%;"></p><h3 id="c-项目-2" tabindex="-1">C++ 项目 <a class="header-anchor" href="#c-项目-2" aria-label="Permalink to &quot;C++ 项目&quot;">​</a></h3><p>6、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/epezent/implot" target="_blank" rel="noreferrer">implot</a>：实时绘图的 GUI 库。该项目可根据用户交互和数据更新，实时更新图像的 Dear ImGui 绘图库，支持 GPU 加速、多种绘图类型、混合绘图等功能。仅需少量的代码，就能集成实时数据可视化的功能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int   bar_data[11] = ...;</span></span>
<span class="line"><span>float x_data[1000] = ...;</span></span>
<span class="line"><span>float y_data[1000] = ...;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ImGui::Begin(&quot;My Window&quot;);</span></span>
<span class="line"><span>if (ImPlot::BeginPlot(&quot;My Plot&quot;)) {</span></span>
<span class="line"><span>    ImPlot::PlotBars(&quot;My Bar Plot&quot;, bar_data, 11);</span></span>
<span class="line"><span>    ImPlot::PlotLine(&quot;My Line Plot&quot;, x_data, y_data, 1000);</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    ImPlot::EndPlot();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>ImGui::End();</span></span></code></pre></div><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/257596449.gif" style="max-width:80%;"></p><p>7、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/microsoft/wslg" target="_blank" rel="noreferrer">wslg</a>：在 Windows 上运行 Linux 图形化应用的工具。该项目是微软开源的支持在 Windows 操作系统上，运行 Linux GUI 应用的工具。提供了原生和自然的 Linux GUI 应用使用体验，比如跨 Windows 和 Linux 应用的剪切粘贴等功能。WSLg 已内置在 Windows 10 及以上的系统中，可直接通过 wsl 命令启动。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/346871538.png" style="max-width:80%;"></p><h3 id="go-项目" tabindex="-1">Go 项目 <a class="header-anchor" href="#go-项目" aria-label="Permalink to &quot;Go 项目&quot;">​</a></h3><p>8、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/beevik/etree" target="_blank" rel="noreferrer">etree</a>：更好用的轻量级 Go 语言 XML 库。虽然 Go 语言内置了处理 XML 的库，但在使用时必须按照嵌套层级定义结构体非常繁琐。这个项目的设计灵感来源于 Python 语言的 ElementTree 库，可以在无需定义结构体的情况下灵活的读取、生成 XML 文档。来自 <a href="https://hellogithub.com/user/5dGtvaZ6H3L4QMY" target="_blank" rel="noreferrer">@两双筷子sqldc</a> 的分享</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">doc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> etree.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NewDocument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">doc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateProcInst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">doc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateProcInst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xml-stylesheet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`type=&quot;text/xsl&quot; href=&quot;style.xsl&quot;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">people </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> doc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;People&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">people.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateComment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;These are all known people&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> people.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Person&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jon.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateAttr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Jon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sally </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> people.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Person&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sally.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateAttr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Sally&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">doc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Indent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">doc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(os.Stdout)</span></span></code></pre></div><p>9、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/senghoo/golang-design-pattern" target="_blank" rel="noreferrer">golang-design-pattern</a>：Go 语言设计模式的实例代码。该项目是作者阅读《研磨设计模式》一书的读书笔记，并用 Go 语言实现了书中涉及的 23 个设计模式。</p><p>10、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/loeffel-io/ls-lint" target="_blank" rel="noreferrer">ls-lint</a>：检查目录和文件命名风格的工具。这是一款 Go 编写的目录和文件名 Lint 工具，它依赖少、速度快，可通过 yml 配置文件自定义检测规则和忽略目录，适用于 Git Hooks、GitHub Action、Docker Image 等多种场景。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ls:</span></span>
<span class="line"><span>  .js: snake_case</span></span>
<span class="line"><span>  .ts: snake_case | camelCase</span></span>
<span class="line"><span>  .d.ts: PascalCase</span></span>
<span class="line"><span>  .html: regex:[a-z0-9]+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ignore:</span></span>
<span class="line"><span>  - node_modules</span></span></code></pre></div><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/240896563.gif" style="max-width:80%;"></p><p>11、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/webp-sh/webp_server_go" target="_blank" rel="noreferrer">webp_server_go</a>：一款开箱即用的 WebP 服务器。WebP 是谷歌开发的一种为了提升图像加载速度的图片格式，该项目是用 Go 写的 WebP 服务，无需二次开发就能实现将 JPG、PNG、BMP、SVG 等格式的图片，转化成 WebP 格式的服务，能够有效地减小图片体积、节省带宽、提升图片加载速度。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/239239351.png" style="max-width:80%;"></p><h3 id="java-项目" tabindex="-1">Java 项目 <a class="header-anchor" href="#java-项目" aria-label="Permalink to &quot;Java 项目&quot;">​</a></h3><p>12、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/Wisser/Jailer" target="_blank" rel="noreferrer">Jailer</a>：一款强大的数据库提取数据工具。用于数据库子集和关系数据浏览的工具，支持按照表之间关系浏览数据库、生成 DML 拓扑关系等功能。可用来从生产数据库中提取出，支持测试一条完整业务线所需的数据库表和数据。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/1923665.png" style="max-width:80%;"></p><p>13、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/LouBii/OneAccount" target="_blank" rel="noreferrer">OneAccount</a>：一款简约的 Android 记账应用。这是一款支持自定义支出/收入分类、定时提醒、预算设置、花费统计等功能的记账 APP。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/148282280.jpg" style="max-width:80%;"></p><p>14、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/triplea-game/triplea" target="_blank" rel="noreferrer">triplea</a>：一款 Java 的回合制战争游戏。这是一款免费、开源的战争棋盘类游戏，玩家可以在游戏中模拟第二次世界大战、拿破仑战争等经典战役，支持 Windows、Linux 和 macOS 操作系统。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/39766308.png" style="max-width:80%;"></p><h3 id="javascript-项目" tabindex="-1">JavaScript 项目 <a class="header-anchor" href="#javascript-项目" aria-label="Permalink to &quot;JavaScript 项目&quot;">​</a></h3><p>15、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/ill-inc/biomes-game" target="_blank" rel="noreferrer">biomes-game</a>：一款开源沙盒 MMORPG 游戏。这是由已被 OpenAI 收购的 Global Illumination 公司，采用 React+Next.js+TypeScript 和 WebAssembly 等技术，构建的大型多人在线角色扮演游戏。玩家可以在游戏里探索世界、建造房子、交易、社交等，无需下载打开浏览器就可以玩。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/677467268.gif" style="max-width:80%;"></p><p>16、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/docsifyjs/docsify" target="_blank" rel="noreferrer">docsify</a>：开箱即用的文档网站生成器。该项目可以帮你快速生成文档网站，开箱即用无需构建，写完文档即可发布。支持全文搜索、自定义主题、丰富的 API、Emoji 等实用功能。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/74260508.png" style="max-width:80%;"></p><p>17、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/palxiao/poster-design" target="_blank" rel="noreferrer">poster-design</a>：一款强大的在线设计图片工具。采用 Vue3+Vite2+Vuex+ElementPlus 技术实现的在线海报图片设计工具，可用于生成电商分享图、文章长图、视频/公众号封面等。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/454264265.gif" style="max-width:80%;"></p><p>18、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/olistic/warriorjs" target="_blank" rel="noreferrer">warriorjs</a>：一个有趣的 JavaScript 编程 RPG 游戏。在游戏中你将通过 JavaScript 语法指挥战士与敌人战斗、营救俘虏，一步步走向塔顶，获得传说中的 JavaScript 之剑。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/34798315.gif" style="max-width:80%;"></p><p>19、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/sav7ng/WeHalo" target="_blank" rel="noreferrer">WeHalo</a>：清爽的微信小程序版博客。该项目是基于 Halo 博客后端的微信小程序，可以轻松地将博客内容搬到微信小程序上，支持个人名片、博文展示、评论、搜索文章、自定义导航栏等功能。来自 <a href="https://hellogithub.com/user/a0L3Omilqk8zNQY" target="_blank" rel="noreferrer">@umail.com</a> 的分享</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/158522838.png" style="max-width:80%;"></p><h3 id="python-项目" tabindex="-1">Python 项目 <a class="header-anchor" href="#python-项目" aria-label="Permalink to &quot;Python 项目&quot;">​</a></h3><p>20、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/g1879/DrissionPage" target="_blank" rel="noreferrer">DrissionPage</a>：类似 selenuium 的网页自动化工具。这是一个基于 Python 的网页自动化工具，支持 Chromium 内核浏览器。它将控制浏览器和收发请求两大功能合二为一，并提供了统一、简洁的接口。来自 <a href="https://hellogithub.com/user/MdXgAyzJSFbTeHh" target="_blank" rel="noreferrer">@马小六</a> 的分享</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载星巴克产品图</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DrissionPage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SessionPage</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> search</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以s模式创建页面对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">page </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SessionPage()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 访问目标网页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">page.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.starbucks.com.cn/menu/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取所有class属性为preview circle的元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">divs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> page.eles(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.preview circle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 遍历这些元素</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> div </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> divs:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 用相对定位获取当前div元素后一个兄弟元素，并获取其文本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> div.next().text</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在div元素的style属性中提取图片网址并进行拼接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    img_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> div.attr(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;style&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    img_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> search(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">(.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, img_url).group(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    img_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.starbucks.com.cn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">img_url</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 执行下载</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    page.download(img_url, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\i</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">mgs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">rename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name)</span></span></code></pre></div><p>21、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/spandanb/learndb-py" target="_blank" rel="noreferrer">learndb-py</a>：从头用 Python 写一个数据库。该项目是用 Python 从零实现一个关系型数据库，从而更好地了解数据的内部构造，此数据库仅可作为学习和练手项目，无法应用在生产环境。</p><p>22、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/XuehaiPan/nvitop" target="_blank" rel="noreferrer">nvitop</a>：用 top 命令的方式查看 NVIDIA GPU 和进程状态。这是一款 NVIDIA 设备和进程监控工具，拥有多彩高亮的界面，实时更新的进程和设备信息，支持过滤进程、鼠标控制、发送信号等功能。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/332736941.png" style="max-width:80%;"></p><p>23、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/eliasdorneles/upiano" target="_blank" rel="noreferrer">upiano</a>：运行在命令行里的电子琴。这是一个小型的电子琴命令行应用，它安装简单、运行方便，支持鼠标和键盘两种操作方式。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/98796916.png" style="max-width:80%;"></p><p>24、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/nedbat/watchgha" target="_blank" rel="noreferrer">watchgha</a>：在本地查看 GitHub Action 运行状态的工具。仅需一条命令就可以实时显示当前分支，在 GitHub Action 上运行状态的命令行工具。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/613355435.gif" style="max-width:80%;"></p><h3 id="ruby-项目" tabindex="-1">Ruby 项目 <a class="header-anchor" href="#ruby-项目" aria-label="Permalink to &quot;Ruby 项目&quot;">​</a></h3><p>25、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/openfarmcc/OpenFarm" target="_blank" rel="noreferrer">OpenFarm</a>：一个教你如何种植农作物的网站。这是一个关于种植农作物的知识库，你可以在里面找到如何种植西红柿、土豆、草莓等植物的步骤，这一切都是免费的。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/13895958.png" style="max-width:80%;"></p><h3 id="rust-项目" tabindex="-1">Rust 项目 <a class="header-anchor" href="#rust-项目" aria-label="Permalink to &quot;Rust 项目&quot;">​</a></h3><p>26、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/andreabergia/rjvm" target="_blank" rel="noreferrer">rjvm</a>：用 Rust 写一个迷你 JVM 的学习项目。这是一个用 Rust 写 JVM7 的练手项目，已实现 Java 基础类型、异常处理、堆栈跟踪、垃圾回收、解析 .class 文件等功能。</p><p>27、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/starship/starship" target="_blank" rel="noreferrer">starship</a>：轻量、速度超快的高颜值终端。这是一个 Rust 写的高颜值、适用于各种 Shell 的终端，它开箱即用，可定制各式各样的提示符，适用于 Windows、Linux、Android 和 macOS 系统。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/178991158.gif" style="max-width:80%;"></p><h3 id="swift-项目" tabindex="-1">Swift 项目 <a class="header-anchor" href="#swift-项目" aria-label="Permalink to &quot;Swift 项目&quot;">​</a></h3><p>28、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/ninxsoft/Mist" target="_blank" rel="noreferrer">Mist</a>：自动下载 macOS 系统固件的工具。这款工具可以列出所有可供下载的 macOS 固件/安装程序的信息，包括名称、版本号、发布日期和大小。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/509050256.png" style="max-width:80%;"></p><p>29、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/Juanpe/SkeletonView" target="_blank" rel="noreferrer">SkeletonView</a>：一款优雅的 Swift 骨架屏库。骨架屏是在页面展示所需的数据还未加载完成时，先展示出页面大致结构的一项技术。这个 Swift 骨架屏库容易上手、接口友好，支持所有 UIView、自定义动画等功能。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/109878485.gif" style="max-width:80%;"></p><h3 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h3><p>30、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/beeper/beepy" target="_blank" rel="noreferrer">beepy</a>：一款全键盘便携式的 Linux 计算机。这是一个结合了黑莓键盘、400*200 LCD 显示屏、2000mAh 电池的板子，售价 79 美元。插上树莓派 Zero W，立马变成了一个黑莓版的 Linux 游乐场。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/532730834.jpg" style="max-width:80%;"></p><p>31、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/AlDanial/cloc" target="_blank" rel="noreferrer">cloc</a>：计算代码行数的工具。这是一款可以统计源码中空白行、注释、不同编程语言代码行数的工具。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/42029482.png" style="max-width:80%;"></p><p>32、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/imthenachoman/How-To-Secure-A-Linux-Server" target="_blank" rel="noreferrer">How-To-Secure-A-Linux-Server</a>：一份 Linux 服务器安全指南。这是一份专注于保护非企业场景下的 Linux 服务器安全的操作指南，它虽然不够专业但对于个人来说足够了。</p><p>33、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/dunwu/linux-tutorial" target="_blank" rel="noreferrer">linux-tutorial</a>：一份实用的 Linux 教程。不同于大而全的 Linux 教程，该项目的内容主要侧重于实用性，内容包括 Linux 常用命令、Linux 系统运维、软件运维、常用 shell 脚本等。来自 <a href="https://hellogithub.com/user/i1wAIyo6P3NXkxm" target="_blank" rel="noreferrer">@孤胆枪手</a> 的分享</p><p>34、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/ljinkai/weekly" target="_blank" rel="noreferrer">weekly</a>：独立开发产品变现周刊。关于独立开发者、产品变现相关内容的周刊。</p><h3 id="开源书籍" tabindex="-1">开源书籍 <a class="header-anchor" href="#开源书籍" aria-label="Permalink to &quot;开源书籍&quot;">​</a></h3><p>35、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/easychen/lean-side-bussiness" target="_blank" rel="noreferrer">lean-side-bussiness</a>：《精益副业：程序员如何优雅地做副业》。该书扩展了《程序员如何优雅地挣零花钱》的内容，引入了精益创业流程，将其优化为副业专用精益副业流程，并增添了独立开发变现和网课变现实践的内容。</p><p>36、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/hackclub/putting-the-you-in-cpu" target="_blank" rel="noreferrer">putting-the-you-in-cpu</a>：当你运行程序时发生了什么？这是一份关于程序是如何跑起来的迷你书，内容涉及计算机基础、操作系统、Linux 如何加载可执行文件等。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/648351143.png" style="max-width:80%;"></p><p>37、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/isno/theByteBook" target="_blank" rel="noreferrer">theByteBook</a>：《深入架构原理与实践》。随着云计算的兴起，技术架构的关注点也从集群可用性治理，发展到云原生和 FinOps 成本管理。该书涵盖了网络、容器、网关、微服务与分布式、云原生、质量监测和成本管理方面的内容，帮助读者快速理清云时代下的技术架构体系。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/547677901.jpg" style="max-width:80%;"></p><p>38、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/wangdoc/typescript-tutorial" target="_blank" rel="noreferrer">typescript-tutorial</a>：阮一峰的 TypeScript 教程。这是一份面向初学者的 TypeScript 开源教程，内容涵盖 TypeScript 的基本概念和用法。</p><h3 id="机器学习" tabindex="-1">机器学习 <a class="header-anchor" href="#机器学习" aria-label="Permalink to &quot;机器学习&quot;">​</a></h3><p>39、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/facebookresearch/audiocraft" target="_blank" rel="noreferrer">audiocraft</a>：Meta 开源的文本生成音乐的库。该项目可根据文本提示词生成高质量、高保真的音频和音乐，比如吹着风吹口哨、一段适合海滩场景的流行舞曲，生成效果十分惊艳。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/650945129.png" style="max-width:80%;"></p><p>40、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/lllyasviel/Fooocus" target="_blank" rel="noreferrer">Fooocus</a>：一款开箱即用的图片生成软件。该项目在设计时吸收了 Stable Diffusion 和 Midjourney 的优点，它安装简单、操作方便，省去了复杂的参数调节步骤。用户只需要输入提示词，就可以生成与 Midjourney 水平相当的图片。支持本地部署、离线使用，最低配置要求 8GB 内存和 4GB 的 Nvidia 显卡。来自 <a href="https://hellogithub.com/user/VhrXCAs7cMxL08W" target="_blank" rel="noreferrer">@刘三非</a> 的分享</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/676676006.png" style="max-width:80%;"></p><p>41、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/roboticcam/machine-learning-notes" target="_blank" rel="noreferrer">machine-learning-notes</a>：徐亦达的机器学习课程。该项目是香港浸会大学（HKBU）徐亦达教授开源的关于机器学习、概率模型、深度学习的讲义和视频课程链接。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img3/master/hellogithub/89/121647248.jpg" style="max-width:80%;"></p><p align="center"><a href="https://github.com/521xueweihan/HelloGitHub/blob/master/content/HelloGitHub88.md">『上一期』</a> | <a href="https://github.com/521xueweihan/HelloGitHub/issues/899">反馈和建议</a> | <a href="https://github.com/521xueweihan/HelloGitHub/blob/master/content/HelloGitHub90.md">『下一期』</a></p><hr><p align="center"> 👉 <a href="https://hellogithub.com/periodical">来！推荐开源项目</a> 👈<br> 微信中搜：<strong>HelloGitHub</strong> 关注公众号<br> 不仅能第一时间收到推送，还有回馈粉丝的活动<br> 如果文中的图刷不出来，可以点击 <a href="https://hellogithub.com/periodical/volume/89">这里</a>。 </p><h2 id="赞助" tabindex="-1">赞助 <a class="header-anchor" href="#赞助" aria-label="Permalink to &quot;赞助&quot;">​</a></h2><table><thead><tr><th align="center" style="width:80px;"><a href="https://www.ucloud.cn/site/active/kuaijiesale.html?utm_term=logo&amp;utm_campaign=hellogithub&amp;utm_source=otherdsp&amp;utm_medium=display&amp;ytag=github_hellogithub_otherdsp_display"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/ucloud.png" width="60px"><br><sub>UCloud</sub><br><sub>超值的全球云服务</sub></a></th><th align="center" style="width:80px;"><a href="https://www.upyun.com/"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/upyun.png" width="60px"><br><sub>CDN</sub><br><sub>开启全网加速</sub></a></th><th align="center" style="width:80px;"><a href="https://github.com/OpenIMSDK/Open-IM-Server"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/im.png" width="60px"><br><sub>OpenIM</sub><br><sub>开源IM力争No.1</sub></a></th><th align="center" style="width:80px;"><a href="https://apifox.cn/a103hello"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/apifox.png" width="60px"><br><sub>Apifox</sub><br><sub>比 Postman 更强大</sub></a></th></tr></thead></table><h2 id="声明" tabindex="-1">声明 <a class="header-anchor" href="#声明" aria-label="Permalink to &quot;声明&quot;">​</a></h2><p><a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"><img alt="知识共享许可协议" style="border-width:0;" src="https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png"></a><br>本作品采用 <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">署名-非商业性使用-禁止演绎 4.0 国际</a> 进行许可。</p>`,106),l=[n];function h(r,p,o,c,g,k){return a(),i("div",null,l)}const m=s(e,[["render",h]]);export{d as __pageData,m as default};
