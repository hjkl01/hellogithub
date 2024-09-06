import{_ as i,c as a,a2 as t,o as e}from"./chunks/framework.Gf1jShja.js";const g=JSON.parse('{"title":"《HelloGitHub》第 19 期","description":"","frontmatter":{},"headers":[],"relativePath":"HelloGitHub19.md","filePath":"HelloGitHub19.md"}'),l={name:"HelloGitHub19.md"};function h(n,s,r,p,o,k){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="《hellogithub》第-19-期" tabindex="-1">《HelloGitHub》第 19 期 <a class="header-anchor" href="#《hellogithub》第-19-期" aria-label="Permalink to &quot;《HelloGitHub》第 19 期&quot;">​</a></h1><blockquote><p>兴趣是最好的老师，<strong>HelloGitHub</strong> 让你对编程感兴趣！</p></blockquote><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/cover.jpg" style="max-width:100%;"></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>点击右上角的 <strong>「目录」</strong> 图标打开目录，获得更好的阅读体验。</p><p><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/catalog.png" alt=""></p><p><strong>Tips</strong>：如果遇到图片刷不出来的情况，<a href="https://hellogithub.com/periodical/volume/19" target="_blank" rel="noreferrer">点击</a> 换一种浏览方式。</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/weixin.png" style="max-width:30%;"><br> 关注「HelloGitHub」公众号，第一时间收到推送 </p><h2 id="内容" tabindex="-1">内容 <a class="header-anchor" href="#内容" aria-label="Permalink to &quot;内容&quot;">​</a></h2><blockquote><p><strong>以下为本期内容</strong>｜每个月 <strong>28</strong> 号更新</p></blockquote><h3 id="go-项目" tabindex="-1">Go 项目 <a class="header-anchor" href="#go-项目" aria-label="Permalink to &quot;Go 项目&quot;">​</a></h3><p>1、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/bcicen/ctop" target="_blank" rel="noreferrer">ctop</a>：实现了类 top 命令展示效果的 docker 容器监控工具</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/19/77419377.gif" style="max-width:80%;"></p><h3 id="java-项目" tabindex="-1">Java 项目 <a class="header-anchor" href="#java-项目" aria-label="Permalink to &quot;Java 项目&quot;">​</a></h3><p>2、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/hankcs/HanLP" target="_blank" rel="noreferrer">HanLP</a>：一系列模型与算法组成的 NLP 工具包，目标是普及自然语言处理在生产环境中的应用。具备功能完善、性能高效、架构清晰、语料时新、可自定义的特点，功能包括：中文分词、词性标注、命名实体识别、关键词提取等。示例代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] testCase </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;北川景子参演了林诣彬导演的《速度与激情3》&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;林志玲亮相网友:确定不是波多野结衣？&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Segment segment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HanLP.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newSegment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enableJapaneseNameRecognize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (String sentence </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> testCase)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    List termList </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> segment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">seg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sentence);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(termList);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>3、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/JessYanCoding/MVPArt" target="_blank" rel="noreferrer">MVPArt</a>：一个新的 MVP 架构，此框架旨在解决传统 MVP 类和接口太多、并且 Presenter 和 View 通过接口通信过于繁琐、重用 Presenter 代价太大等问题。架构图如下：</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/19/83117984.png" style="max-width:80%;"></p><p>4、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/alibaba/p3c" target="_blank" rel="noreferrer">p3c</a>：阿里云栖大会发布的 Java 代码规约扫描插件，支持多种 IDE。代码规范对于编程来说是非常重要的，随着代码量的增多会更加意识到其重要性。赶快拿去使用吧，<a href="https://github.com/alibaba/p3c/blob/master/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4Java%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%EF%BC%88%E7%BB%88%E6%9E%81%E7%89%88%EF%BC%89.pdf" target="_blank" rel="noreferrer">阿里巴巴 Java 开发手册</a></p><h3 id="javascript-项目" tabindex="-1">JavaScript 项目 <a class="header-anchor" href="#javascript-项目" aria-label="Permalink to &quot;JavaScript 项目&quot;">​</a></h3><p>5、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/gee1k/emoji" target="_blank" rel="noreferrer">emoji</a>：方便快速查找获取 emoji 表情、名称，并且可以复制到任何文本中，另外支持中文搜索 💯 <a href="http://emoji.svend.cc/" target="_blank" rel="noreferrer">网站地址</a></p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/19/104567903.gif" style="max-width:80%;"></p><p>6、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/answershuto/H5" target="_blank" rel="noreferrer">H5</a>：这是作者的个人项目，功能是可视化编辑、生成手机 H5 页面的单页应用 WebApp。该项目是一个全栈项目，具有前后端完整服务。并且项目结构清晰。后端服务具有控制器，模型，路由，前端服务具有组件，并且使用 Vuex 做状态管理，麻雀虽小五脏俱全</p><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/19/76468697.gif" style="max-width:80%;"></p><p>7、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/elsewhencode/project-guidelines" target="_blank" rel="noreferrer">project-guidelines</a>：JavaScript 项目规范，<a href="https://github.com/wearehive/project-guidelines/blob/master/README-zh.md" target="_blank" rel="noreferrer">中文</a></p><p>8、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/TerryZ/SelectMenu" target="_blank" rel="noreferrer">SelectMenu</a>：基于 jQuery 1.x 库的多样化的下拉菜单插件，源码具有中文注释，对于学习 jQuery 插件有帮助。示例代码如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {id:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ,name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Chicago Bulls&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,desc:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;芝加哥公牛&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {id:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ,name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Cleveland Cavaliers&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,desc:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;克里夫兰骑士&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {id:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ,name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Detroit Pistons&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,desc:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;底特律活塞&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {id:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ,name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Indiana Pacers&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,desc:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;印第安纳步行者&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//initialize selectmenu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#btnDemo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">selectMenu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    showField : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;desc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    keyField : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data : data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p align="center"><img src="https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/19/106082125.png" style="max-width:80%;"></p><h3 id="kotlin-项目" tabindex="-1">Kotlin 项目 <a class="header-anchor" href="#kotlin-项目" aria-label="Permalink to &quot;Kotlin 项目&quot;">​</a></h3><p>9、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/Kotlin/kotlin-examples" target="_blank" rel="noreferrer">kotlin-examples</a>：JetBrains 开源的 Kotlin 语言 Web 示例项目</p><h3 id="php-项目" tabindex="-1">PHP 项目 <a class="header-anchor" href="#php-项目" aria-label="Permalink to &quot;PHP 项目&quot;">​</a></h3><p>10、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/Tencent/Biny" target="_blank" rel="noreferrer">Biny</a>：腾讯开源的一款高性能的超轻量级PHP框架，用于快速开发现代 Web 应用程序。代码简洁优雅，对应用层，数据层，模板渲染层的封装简单易懂，能够快速上手使用，<a href="http://www.billge.cc/" target="_blank" rel="noreferrer">文档</a>齐全。高性能，框架响应时间在 1ms 以内，单机 qps 轻松上3000。</p><ul><li>支持跨库连表，条件复合筛选，查询PK缓存等</li><li>同步异步请求分离，类的自动化加载管理</li><li>支持Form表单验证，支持事件触发机制</li><li>支持浏览器端调试，快速定位程序问题和性能瓶颈</li><li>具有sql防注入，html自动防xss等特性</li></ul><h3 id="python-项目" tabindex="-1">Python 项目 <a class="header-anchor" href="#python-项目" aria-label="Permalink to &quot;Python 项目&quot;">​</a></h3><p>11、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/danfengcao/binlog2sql" target="_blank" rel="noreferrer">binlog2sql</a>：从 MySQL binlog 解析出你要的 SQL。根据不同选项，提供如下功能</p><ul><li>数据快速回滚，<a href="https://github.com/danfengcao/binlog2sql/blob/master/example/mysql-flashback-priciple-and-practice.md" target="_blank" rel="noreferrer">闪回原理与实践</a></li><li>主从切换后新 master 丢数据的修复</li><li>从 binlog 生成标准SQL，带来的衍生功能</li></ul><p>12、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/hangsz/pandas-tutorial" target="_blank" rel="noreferrer">pandas-tutorial</a>：这套 pandas 教程包含从初级到进阶的内容，适合初学者和希望进阶建立知识体系的数据科学从业者阅读。作者还在持续更新高级内容，你值得拥有</p><p>13、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/crazyguitar/pysheeet" target="_blank" rel="noreferrer">pysheeet</a>：Python 速查表，<a href="https://www.pythonsheets.com/" target="_blank" rel="noreferrer">在线阅读</a></p><p>14、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/jmcarp/robobrowser" target="_blank" rel="noreferrer">robobrowser</a>：提供多种模拟操作网页的库，比如获得网页内容、访问链接、点击按钮、填充并提交表单、上传文件。使用简单、API 友好。适用于想要通过脚本流程化操作，某些未提供这些操作接口的场景，示例代码如下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 上传文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> robobrowser </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RoboBrowser</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Browse to a page with an upload form</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">browser </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RoboBrowser()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">browser.open(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://cgi-lib.berkeley.edu/ex/fup.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Find the form</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upload_form </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> browser.get_form()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upload_form                     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &lt;RoboForm upfile=, note=&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Choose a file to upload</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upload_form[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;upfile&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &lt;robobrowser.forms.fields.FileInput...&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upload_form[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;upfile&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;path/to/file.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;r&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Submit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">browser.submit(upload_form)</span></span></code></pre></div><h3 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h3><p>15、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/chinese-poetry/chinese-poetry" target="_blank" rel="noreferrer">chinese-poetry</a>：中华古典文集数据集，包含 5.5 万首唐诗、26 万首宋诗和 2.1 万首宋词。唐宋两朝近 1.4 万古诗人和两宋时期1500 词人。以 json 文件、数据库方式存储，<a href="https://jackeygao.io/words/crawl-ci.html" target="_blank" rel="noreferrer">爬取过程及分析</a></p><p>16、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/leecade/ios-dev-flow" target="_blank" rel="noreferrer">ios-dev-flow</a>：iOS 开发流程，记录了 iOS 程序上架需要的方方面面</p><p>17、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/greatghoul/remote-working" target="_blank" rel="noreferrer">remote-working</a>：收集整理国内远程工作相关的项目</p><h3 id="开源书籍" tabindex="-1">开源书籍 <a class="header-anchor" href="#开源书籍" aria-label="Permalink to &quot;开源书籍&quot;">​</a></h3><p>18、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/rootsongjc/kubernetes-handbook" target="_blank" rel="noreferrer">kubernetes-handbook</a>：Kubernetes 中文指南／实践手册，<a href="https://jimmysong.io/kubernetes-handbook/" target="_blank" rel="noreferrer">在线阅读</a></p><p>19、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/DocsHome/microservices" target="_blank" rel="noreferrer">microservices</a>：《微服务：从设计到部署》中文版，<a href="http://oopsguy.com/books/microservices/index.html" target="_blank" rel="noreferrer">在线阅读</a></p><p>20、<a href="https://hellogithub.com/periodical/statistics/click?target=https://github.com/meetbill/op_practice_book" target="_blank" rel="noreferrer">op_practice_book</a>：《运维实践指南》</p><p align="center"><a href="https://github.com/521xueweihan/HelloGitHub/blob/master/content/HelloGitHub18.md">『上一期』</a> | <a href="https://github.com/521xueweihan/HelloGitHub/issues/899">反馈和建议</a> | <a href="https://github.com/521xueweihan/HelloGitHub/blob/master/content/HelloGitHub20.md">『下一期』</a></p><hr><p align="center"> 👉 <a href="https://hellogithub.com/periodical">来！推荐开源项目</a> 👈<br> 微信中搜：<strong>HelloGitHub</strong> 关注公众号<br> 不仅能第一时间收到推送，还有回馈粉丝的活动<br> 如果文中的图刷不出来，可以点击 <a href="https://hellogithub.com/periodical/volume/19">这里</a>。 </p><h2 id="赞助" tabindex="-1">赞助 <a class="header-anchor" href="#赞助" aria-label="Permalink to &quot;赞助&quot;">​</a></h2><table><thead><tr><th align="center" style="width:80px;"><a href="https://www.ucloud.cn/site/active/kuaijiesale.html?utm_term=logo&amp;utm_campaign=hellogithub&amp;utm_source=otherdsp&amp;utm_medium=display&amp;ytag=github_hellogithub_otherdsp_display"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/ucloud.png" width="60px"><br><sub>UCloud</sub><br><sub>超值的全球云服务</sub></a></th><th align="center" style="width:80px;"><a href="https://www.upyun.com/"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/upyun.png" width="60px"><br><sub>CDN</sub><br><sub>开启全网加速</sub></a></th><th align="center" style="width:80px;"><a href="https://github.com/OpenIMSDK/Open-IM-Server"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/im.png" width="60px"><br><sub>OpenIM</sub><br><sub>开源IM力争No.1</sub></a></th><th align="center" style="width:80px;"><a href="https://apifox.cn/a103hello"><img src="https://raw.githubusercontent.com/521xueweihan/img_logo/master/logo/apifox.png" width="60px"><br><sub>Apifox</sub><br><sub>比 Postman 更强大</sub></a></th></tr></thead></table><h2 id="声明" tabindex="-1">声明 <a class="header-anchor" href="#声明" aria-label="Permalink to &quot;声明&quot;">​</a></h2><p><a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"><img alt="知识共享许可协议" style="border-width:0;" src="https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png"></a><br>本作品采用 <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">署名-非商业性使用-禁止演绎 4.0 国际</a> 进行许可。</p>`,55)]))}const d=i(l,[["render",h]]);export{g as __pageData,d as default};
