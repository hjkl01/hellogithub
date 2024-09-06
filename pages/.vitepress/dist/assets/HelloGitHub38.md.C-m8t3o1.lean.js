import{_ as i,c as a,a2 as t,o as e}from"./chunks/framework.Gf1jShja.js";const c=JSON.parse('{"title":"《HelloGitHub》第 38 期","description":"","frontmatter":{},"headers":[],"relativePath":"HelloGitHub38.md","filePath":"HelloGitHub38.md"}'),n={name:"HelloGitHub38.md"};function l(h,s,r,p,k,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="《hellogithub》第-38-期" tabindex="-1">《HelloGitHub》第 38 期 <a class="header-anchor" href="#《hellogithub》第-38-期" aria-label="Permalink to &quot;《HelloGitHub》第 38 期&quot;">​</a></h1><blockquote><p>兴趣是最好的老师，<strong>HelloGitHub</strong> 让你对编程感兴趣！</p></blockquote><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/cover.jpg" style="max-width:100%;"></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>点击右上角的 <strong>「目录」</strong> 图标打开目录，获得更好的阅读体验。</p><p><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/catalog.png" alt=""></p><p><strong>Tips</strong>：如果遇到图片刷不出来的情况，<a href="https://hellogithub.com/periodical/volume/38" target="_blank" rel="noreferrer">点击</a> 换一种浏览方式。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/weixin.png" style="max-width:30%;"><br> 关注「HelloGitHub」公众号，第一时间收到推送 </p><h2 id="内容" tabindex="-1">内容 <a class="header-anchor" href="#内容" aria-label="Permalink to &quot;内容&quot;">​</a></h2><blockquote><p><strong>以下为本期内容</strong>｜每个月 <strong>28</strong> 号更新</p></blockquote><h3 id="c-项目" tabindex="-1">C++ 项目 <a class="header-anchor" href="#c-项目" aria-label="Permalink to &quot;C++ 项目&quot;">​</a></h3><p>1、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/microsoft/terminal" target="_blank" rel="noreferrer">terminal</a>：微软开源的一个全新、现代、功能丰富、高效的 Windows 终端应用程序。它支持 Windows 命令行社区最常用的许多命令，还支持选项卡、富文本、全球化、可配置性、主题和样式等功能。一直以来 Windows 不被开发者青睐的原因之一就是终端不好用，现在有了这个我都想买个 Windows 系统的电脑了（确定不是打游戏？）</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/100060912.png" style="max-width:80%;"></p><h3 id="go-项目" tabindex="-1">Go 项目 <a class="header-anchor" href="#go-项目" aria-label="Permalink to &quot;Go 项目&quot;">​</a></h3><p>2、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/CovenantSQL/CovenantSQL" target="_blank" rel="noreferrer">CovenantSQL</a>：具有区块链特性的去中心化 SQL 关系型数据库。可以提供 DBaaS 服务，去中心化存储保证用户隐私。<a href="https://developers.covenantsql.io/docs/zh-CN/intro" target="_blank" rel="noreferrer">中文文档</a>，MacOS 系统可以通过 <code>brew install cql</code> 直接安装</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/129072319.png" style="max-width:80%;"></p><p>3、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/vicanso/diving" target="_blank" rel="noreferrer">diving</a>：基于 <a href="https://github.com/wagoodman/dive" target="_blank" rel="noreferrer">dive</a> 分析 docker 镜像，界面化展示了镜像每层的变动（增加、修改、删除等）、用户层数据大小等信息。便捷获取镜像信息和每层镜像内容的文件树，可以方便地浏览镜像信息。对于需要优化镜像体积时非常方便</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/168781242.gif" style="max-width:80%;"></p><p>4、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/HFO4/gameboy.live" target="_blank" rel="noreferrer">gameboy.live</a>：Gameboy 模拟器，还可以通过 socket 远程玩</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 下载</span></span>
<span class="line"><span>git clone https://github.com/HFO4/gameboy.live.git</span></span>
<span class="line"><span># 运行</span></span>
<span class="line"><span>cd gameboy.live</span></span>
<span class="line"><span>go build -o gbdotlive main.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 命令说明</span></span>
<span class="line"><span>Usage of gbdotlive:</span></span>
<span class="line"><span>  -G    Play specific game in Fyne GUI mode  # 用 Fyne GUI 模式玩游戏，会弹出一个窗口</span></span>
<span class="line"><span>  -c config # 配置文件路径</span></span>
<span class="line"><span>        Set the game option list config file path</span></span>
<span class="line"><span>  -d    Use Debugger in GUI mode # GUI 的 debug 模式</span></span>
<span class="line"><span>  -f FPS</span></span>
<span class="line"><span>        Set the FPS in GUI mode (default 60) # FPS 设定</span></span>
<span class="line"><span>  -g    Play specific game in GUI mode (default true) # 是否默认启动 GUI</span></span>
<span class="line"><span>  -h    This help # 显示帮助</span></span>
<span class="line"><span>  -m    Turn on sound in GUI mode (default true) # GUI 模式下是否有声音</span></span>
<span class="line"><span>  -p port</span></span>
<span class="line"><span>        Set the port for the cloud-gaming server (default 1989) # 默认监听端口，可以用 Telnet 玩</span></span>
<span class="line"><span>  -r ROM # 游戏 ROM 的路径</span></span>
<span class="line"><span>        Set ROM file path to be played in GUI mode</span></span>
<span class="line"><span>  -s    Start a cloud-gaming server # 启动服务器，用 Telnet 玩</span></span></code></pre></div><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/182409579.png" style="max-width:80%;"></p><p>5、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/darius-khll/golang-developer-roadmap" target="_blank" rel="noreferrer">golang-developer-roadmap</a>：成为 Go 开发者的学习路线图，<a href="https://github.com/Alikhll/golang-developer-roadmap/blob/master/i18n/ReadMe-zh-CN.md" target="_blank" rel="noreferrer">中文版</a></p><p>6、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/EddieIvan01/nic" target="_blank" rel="noreferrer">nic</a>：一个易用的 HTTP Request 包。它封装了 Go 的 HTTP 标准库，提供了简洁优雅的 API。可以更轻松的发送HTTP 请求，解决了 Go 标准库自定义 HTTP 请求，操作 headers、cookies 时繁琐的步骤。类似于 Python 的 Requests 和 urllib 的区别。示例代码：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resp, err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nic.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Fatal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(resp.Text)</span></span></code></pre></div><p>7、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/mylxsw/redis-tui" target="_blank" rel="noreferrer">redis-tui</a>：炫酷的 redis 命令行图形界面工具</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/182524195.gif" style="max-width:80%;"></p><p>8、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/prprprus/scheduler" target="_blank" rel="noreferrer">scheduler</a>：Go 语言实现的作业调度工具包。适用于需要任务调度的场景，能够让初学者学到 time、reflect 等标准库的用法，<a href="https://github.com/prprprus/scheduler/blob/master/README-zh.md" target="_blank" rel="noreferrer">中文文档</a></p><h3 id="java-项目" tabindex="-1">Java 项目 <a class="header-anchor" href="#java-项目" aria-label="Permalink to &quot;Java 项目&quot;">​</a></h3><p>9、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/aicareles/Android-BLE" target="_blank" rel="noreferrer">Android-BLE</a>：Android 蓝牙框架，包括扫描、连接、设置通知、发送数据、读取、接收数据和 OTA 升级等。近乎一行代码植入项目，可扩展、配置蓝牙相关操作，适用于 Android-BLE4.0 蓝牙。即便是 BLE 方面的小白也可以在短短几分钟内接入并运用到项目中</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/75049680.gif" style="max-width:80%;"></p><p>10、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/jhipster/generator-jhipster" target="_blank" rel="noreferrer">generator-jhipster</a>：用于在几秒钟内创建 Spring Boot + Angular/React 项目的开源应用程序生成器（脚手架）。它可以自动化生成一个完整 Web 应用或微服务架构，加快项目的开发效率。特点和技术栈：</p><ul><li>基于 Spring Boot 框架的服务端，具备高性能和高可用的 Java 技术栈</li><li>基于 Angular、React、Bootstrap 的时尚、现代、移动优先的前端</li><li>基于 JHipster Registry、Netflix OSS、ELK 堆栈和 Docker 的强大的微服务架构</li><li>使用 Yeoman、Webpack 和 Maven/Gradle 构建应用程序的强大工作流程</li></ul><p>11、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/luckybilly/Gloading" target="_blank" rel="noreferrer">Gloading</a>：深度解耦的 Android 加载组件，特点：</p><ul><li>深度解耦 App 中全局加载中、加载失败及空数据视图</li><li>分离全局加载状态视图的实现和使用</li><li>不需要在每个页面的布局文件中额外添加加载状态视图</li><li>可用于 Activity，也可用于为某个 View 显示加载状态等</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Gloading.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GlobalAdapter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Gloading.Holder holder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Gloading.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(activity).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withRetry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(retryTask);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Gloading.Holder holder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Gloading.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(view).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withRetry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(retryTask);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//显示加载中的UI状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">holder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//显示加载成功的UI状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">holder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showLoadSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//显示加载失败的UI状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">holder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showFailed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//显示加载成功，但数据未空的UI状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">holder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/176971716.gif" style="max-width:80%;"></p><p>12、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/momosecurity/rhizobia_J" target="_blank" rel="noreferrer">rhizobia_J</a>：陌陌开源的 Java 安全编码规范和 SDK</p><h3 id="javascript-项目" tabindex="-1">JavaScript 项目 <a class="header-anchor" href="#javascript-项目" aria-label="Permalink to &quot;JavaScript 项目&quot;">​</a></h3><p>13、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/trazyn/ieaseMusic" target="_blank" rel="noreferrer">ieaseMusic</a>：基于网易云音乐 API 开发的第三方客户端，支持 Linux、Mac OS 系统。成熟的 JS 桌面应用产品，颜值很高，音乐资源丰富</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/104079562.gif" style="max-width:80%;"></p><p>14、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/mintsweet/practice" target="_blank" rel="noreferrer">practice</a>：使用当下流行的多种不同前端技术栈，实现不同项目的详细教程，教你如何快速上手这些技术。虽然项目名称叫做 <code>Practice</code> 但是内容为当前前端最火的框架实践，而且符合生产环境下的开发流程规范，推荐学习</p><p>15、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/ddzy/ts-utility-plugins" target="_blank" rel="noreferrer">ts-utility-plugins</a>：使用原生 TS 构建特效、插件、业务的实践教程项目。脱离各种框架实现原生的特效以及插件</p><h3 id="php-项目" tabindex="-1">PHP 项目 <a class="header-anchor" href="#php-项目" aria-label="Permalink to &quot;PHP 项目&quot;">​</a></h3><p>16、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/colinlet/PHP-Interview-QA" target="_blank" rel="noreferrer">PHP-Interview-QA</a>：《PHP 面试问答》结合实际 PHP 面试经验，系统地汇总面试中的各类的问题，并尝试提供简洁准确的答案，为你面试 PHP 相关岗位提供“秘籍”。包含：网络协议、数据结构与算法、PHP基础、Web、MySQL、Redis、自我介绍、离职原因、职业规划等部分</p><p>17、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/mylxsw/wizard" target="_blank" rel="noreferrer">wizard</a>：一款基于 Laravel 开发框架的开源文档管理系统。目前已经在多家公司部署使用，支持：Markdown、Swagger 文档管理，公司内部的统一身份认证系统（LDAP）等功能</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/98536285.jpeg" style="max-width:80%;"></p><h3 id="python-项目" tabindex="-1">Python 项目 <a class="header-anchor" href="#python-项目" aria-label="Permalink to &quot;Python 项目&quot;">​</a></h3><p>18、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/antct/city-vein" target="_blank" rel="noreferrer">city-vein</a>：用公交路线数据，还原城市结构。通过数据可视化手段，还原了 30 多个城市的城市结构。该项目中有数据获取和处理的脚本，而且该项目充分体现了数据可视化带来的便利和效果，易于激发学习编程的热情。<a href="https://96486d9b.github.io/city-vein/" target="_blank" rel="noreferrer">在线浏览</a></p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/131034378.gif" style="max-width:80%;"></p><p>19、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/cool-RR/PySnooper" target="_blank" rel="noreferrer">PySnooper</a>：Python 的第三方调试库。让你通过装饰器方法，方便的知道每一行程序运行后的结果，而不需要再手动增加 <code>print</code> 展示过程数据、调试程序。示例代码：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pysnooper</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@pysnooper.snoop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> number_to_bits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(number):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        bits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            number, remainder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> divmod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(number, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            bits.insert(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, remainder)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bits</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number_to_bits(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出如下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Starting var:.. number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11.327032</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> call         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> number_to_bits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(number):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11.327032</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> line         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11.327032</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> line         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         bits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">New var:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. bits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11.327032</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> line         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11.327032</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> line         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             number, remainder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> divmod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(number, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">New var:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. remainder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Modified var:.. number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span></code></pre></div><p>20、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/jackfrued/Python-100-Days" target="_blank" rel="noreferrer">Python-100-Days</a>：《Python 100 天从新手到大师》—— Python 的入门学习资料，学习曲线低。非专业人士也能上手学习，适合新手入门</p><p>21、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/5A59/Zvm" target="_blank" rel="noreferrer">Zvm</a>：一款用 Python 实现的简易 JVM。实现功能如下：class 文件解析、类加载、运行时数据区、指令解释器、基本指令集、简易 GC、简易线程、简易 JDK 库，可以运行基本的 Java class 文件。代码量少，模块清晰，适合用来学习 JVM 的基本结构和实现</p><h3 id="ruby-项目" tabindex="-1">Ruby 项目 <a class="header-anchor" href="#ruby-项目" aria-label="Permalink to &quot;Ruby 项目&quot;">​</a></h3><p>22、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/huginn/huginn" target="_blank" rel="noreferrer">huginn</a>：基于 Ruby 开发的自动化处理任务工具。可以监控事物然后根据编写好的逻辑进行处理（IFTTT），比如：监控天气然后通过微信提醒你带伞、追的小说或者动漫更新通知、聚合信息发送等。它框架稳定、生态活跃，有了它从而让你的生活更加有效率，快去试试吧</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/8681349.png" style="max-width:80%;"></p><h3 id="swift-项目" tabindex="-1">Swift 项目 <a class="header-anchor" href="#swift-项目" aria-label="Permalink to &quot;Swift 项目&quot;">​</a></h3><p>23、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/pedrommcarrasco/Brooklyn" target="_blank" rel="noreferrer">Brooklyn</a>：炫酷的苹果电脑屏幕保护程序</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/155397367.gif" style="max-width:80%;"></p><p>24、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/CaliCastle/PopMenu" target="_blank" rel="noreferrer">PopMenu</a>：一款简单、漂亮、方便、灵活自定义的弹出菜单组件。如果你的 App 需要一款灵活好看的弹出菜单的话，那么 PopMenu 值得你一试</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/129322624.gif" style="max-width:80%;"></p><h3 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h3><p>25、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/lettier/3d-game-shaders-for-beginners" target="_blank" rel="noreferrer">3d-game-shaders-for-beginners</a>：有关如何为 3D 游戏实施 SSAO、景深、照明、法线贴图等效果的教程。包含示例代码（C++）与 Demo，更便于理解和学习</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/186309296.gif" style="max-width:80%;"></p><p>26、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/wangzheng0822/algo" target="_blank" rel="noreferrer">algo</a>：必知必会的数据结构和算法代码答案（多种编程语言）</p><p>27、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/RomuloOliveira/commit-messages-guide" target="_blank" rel="noreferrer">commit-messages-guide</a>：Git 提交描述（commit）的编写指南，<a href="https://github.com/RomuloOliveira/commit-messages-guide/blob/master/README_zh-CN.md" target="_blank" rel="noreferrer">中文</a></p><p>28、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/dwmkerr/hacker-laws" target="_blank" rel="noreferrer">hacker-laws</a>：程序员工作中可能使用到的定律、原则的讲解，这些原则多应用于我们的开发和设计中，开卷有益</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/118858739.png" style="max-width:80%;"></p><p>29、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/editor-bootstrap/vim-bootstrap" target="_blank" rel="noreferrer">vim-bootstrap</a>：一个简单、易用的 <code>.vimrc</code> 配置文件生成工具，也可通过<a href="https://vim-bootstrap.com/" target="_blank" rel="noreferrer">网站</a>点选生成。支持 Vim、NeoVim、NeoVim-Qt、MacVim 和 GVim。特点：</p><ul><li>轻量：包含少且必要的插件</li><li>易用：适合在vim中成功存活的入门者</li><li>易于定制：只需选择使用的语言,即可获得对应配置</li><li>先进的插件管理器：使用 Vim-Plug 管理插件，简单易用、速度快</li><li>支持多种编程语言</li></ul><p>30、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/microsoft/vscode-extension-samples" target="_blank" rel="noreferrer">vscode-extension-samples</a>：官方 VS Code 开发扩展插件的代码实例集合</p><p>31、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/aliyunfe/weekly" target="_blank" rel="noreferrer">weekly</a>：《阿里云前端技术周刊》</p><h3 id="机器学习" tabindex="-1">机器学习 <a class="header-anchor" href="#机器学习" aria-label="Permalink to &quot;机器学习&quot;">​</a></h3><p>32、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/bentoml/BentoML" target="_blank" rel="noreferrer">BentoML</a>：一个机器学习工具用来打包和发布模型。帮助数据科学家用不到 5 分钟把在 ipython notebook 里的模型发布到生产环境</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">writefile iris_classifier.py</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bentoml </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BentoService, api, env, artifacts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bentoml.artifact </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PickleArtifact</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bentoml.handlers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataframeHandler</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You can also import your own python module here and BentoML will automatically</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># figure out the dependency chain and package all those python modules</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@artifacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([PickleArtifact(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;model&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)])</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">conda_pip_dependencies</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scikit-learn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IrisClassifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BentoService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @api</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(DataframeHandler)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> predict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, df):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # arbitrary preprocessing or feature fetching code can be placed here </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.artifacts.model.predict(df)</span></span></code></pre></div><p>33、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/fengdu78/lihang-code" target="_blank" rel="noreferrer">lihang-code</a>：机器学习领域经典书籍《统计学习方法》的课件和代码。这个项目提供了课件、代码资源，叙述从具体问题或实例入手，由浅入深，阐明思路，给出必要的数学推导，便于读者掌握统计学习方法的实质，学会运用</p><p>34、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/facebookresearch/maskrcnn-benchmark" target="_blank" rel="noreferrer">maskrcnn-benchmark</a>：Facebook 开源的 PyTorch 版本的 Mask-RCNN。研究人员可以按照教程、示例代码逐步进行实现</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/38/154542095.png" style="max-width:80%;"></p><p>35、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/Yorko/mlcourse.ai" target="_blank" rel="noreferrer">mlcourse.ai</a>：一套机器学习课程。课程全面细致，同时带有 demo 以及进阶的 Kaggle 比赛的样例，非常适合初学者逐步的深入学习</p><p>36、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/afshinea/stanford-cs-229-machine-learning" target="_blank" rel="noreferrer">stanford-cs-229-machine-learning</a>：斯坦福 CS229 教程讲义文档，该文档内容细致、条理清晰，方便入门者作为读书笔记学习。<a href="https://github.com/afshinea/stanford-cs-229-machine-learning/tree/master/zh" target="_blank" rel="noreferrer">中文版</a></p><p align="center"><a href="https://github.com/521xueweihan/HelloGitHub/blob/master/content/HelloGitHub37.md">『上一期』</a> | <a href="https://github.com/521xueweihan/HelloGitHub/issues/899">反馈和建议</a> | <a href="https://github.com/521xueweihan/HelloGitHub/blob/master/content/HelloGitHub39.md">『下一期』</a></p><hr><p align="center"> 👉 <a href="https://hellogithub.com/periodical">来！推荐开源项目</a> 👈<br> 微信中搜：<strong>HelloGitHub</strong> 关注公众号<br> 不仅能第一时间收到推送，还有回馈粉丝的活动<br> 如果文中的图刷不出来，可以点击 <a href="https://hellogithub.com/periodical/volume/38">这里</a>。 </p><h2 id="赞助" tabindex="-1">赞助 <a class="header-anchor" href="#赞助" aria-label="Permalink to &quot;赞助&quot;">​</a></h2><table><thead><tr><th align="center" style="width:80px;"><a href="https://www.ucloud.cn/site/active/kuaijiesale.html?utm_term=logo&amp;utm_campaign=hellogithub&amp;utm_source=otherdsp&amp;utm_medium=display&amp;ytag=github_hellogithub_otherdsp_display"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/ucloud.png" width="60px"><br><sub>UCloud</sub><br><sub>超值的全球云服务</sub></a></th><th align="center" style="width:80px;"><a href="https://www.upyun.com/"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/upyun.png" width="60px"><br><sub>CDN</sub><br><sub>开启全网加速</sub></a></th><th align="center" style="width:80px;"><a href="https://github.com/OpenIMSDK/Open-IM-Server"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/im.png" width="60px"><br><sub>OpenIM</sub><br><sub>开源IM力争No.1</sub></a></th><th align="center" style="width:80px;"><a href="https://apifox.cn/a103hello"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/apifox.png" width="60px"><br><sub>Apifox</sub><br><sub>比 Postman 更强大</sub></a></th></tr></thead></table><h2 id="声明" tabindex="-1">声明 <a class="header-anchor" href="#声明" aria-label="Permalink to &quot;声明&quot;">​</a></h2><p><a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"><img alt="知识共享许可协议" style="border-width:0;" src="https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png"></a><br>本作品采用 <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">署名-非商业性使用-禁止演绎 4.0 国际</a> 进行许可。</p>`,87)]))}const d=i(n,[["render",l]]);export{c as __pageData,d as default};
