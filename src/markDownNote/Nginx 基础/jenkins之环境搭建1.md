<div id="export_content"><div class="output_wrapper" id="output_wrapper_id"><h1 id="hlinuxjenkins1"><span>linux环境下搭建jenkins1-环境搭建</span></h1>
<p>项目发布环境的需要。就动手搭建了jenkins，在此把个人的搭建过程以及搭建中碰到的问题一起总结一下。</p>
<ol>
<li>准备环境。<br>首先，需要jdk是必须要安装好的。本人使用的linux是centos，直接使用yum安装。</li>
</ol>
<pre><code class="hljs cpp"><span class="linenum hljs-number">1</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">//&nbsp;先找到合适的版本：</span><br><span class="linenum hljs-number">2</span>&nbsp;&nbsp;&nbsp;&nbsp;yum&nbsp;search&nbsp;java&nbsp;|&nbsp;grep&nbsp;jdk<br><span class="linenum hljs-number">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">//&nbsp;然后运行安装(我安装的jsk1.8的)：</span><br><span class="linenum hljs-number">4</span>&nbsp;&nbsp;&nbsp;&nbsp;yum&nbsp;install&nbsp;java<span class="hljs-number">-1.8</span>-openjdk.x86_64<br><span class="linenum hljs-number">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">//&nbsp;安装maven</span><br><span class="linenum hljs-number">6</span>&nbsp;&nbsp;&nbsp;&nbsp;yum&nbsp;install&nbsp;maven<br><span class="linenum hljs-number">7</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">//&nbsp;安装git</span><br><span class="linenum hljs-number">8</span>&nbsp;&nbsp;&nbsp;&nbsp;yum&nbsp;install&nbsp;git<br></code></pre>
<ol start="2">
<li>安装jenkins<br>安装jenkins就很简单了,根据官网手册一步步操作就好了.此处有一个小插曲,同步镜像源的时候一直没有成功,猜想是官方手册上的地址不通,换上我这就好啦</li>
</ol>
<pre><code class="hljs cpp"><span class="linenum hljs-number">1</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">//获取jenkins源文件</span><br><span class="linenum hljs-number">2</span>&nbsp;&nbsp;&nbsp;&nbsp;sudo&nbsp;wget&nbsp;-O&nbsp;/etc/yum.repos.d/jenkins.repo&nbsp;http:<span class="hljs-comment">//pkg.jenkins-ci.org/redhat/jenkins.repo</span><br><span class="linenum hljs-number">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">//导入jenkins公钥</span><br><span class="linenum hljs-number">4</span>&nbsp;&nbsp;&nbsp;&nbsp;sudo&nbsp;rpm&nbsp;--<span class="hljs-keyword">import</span>&nbsp;https:<span class="hljs-comment">//pkg.jenkins.io/redhat-stable/jenkins.io.key</span><br><span class="linenum hljs-number">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">//安装</span><br><span class="linenum hljs-number">6</span>&nbsp;&nbsp;&nbsp;&nbsp;yum&nbsp;install&nbsp;-y&nbsp;jenkins<br></code></pre>
<ol start="3">
<li><p>启动jenkins(整理了操作jenkins的常用命令)</p>
<blockquote>
  <p>1.jenkins启动<br>    -命令: service jenkins start<br>2.jenkins停止<br>    -命令: service jenkins stop<br>3.查询jenkins状态<br>    -命令: service jenkins status<br>4.重启jenkins<br>    -命令: service jenkins restart</p>
</blockquote></li>
</ol>
<p>4.访问<br>    http://{IP地址}:8080<br>    这里遇到了访问不通的问题,大致整理分为三类:</p>
<blockquote>
  <ol>
  <li><span>端口占用</span></li>
  <li>防火墙<br>查看防火墙状态: service iptables status  <br>停止防火墙: service iptables stop  <br>启动防火墙: service iptables start  <br>重启防火墙: service iptables restart  <br>永久关闭防火墙: chkconfig iptables off  <br>永久关闭后重启: chkconfig iptables on　</li>
  <li><span>因为我的服务器是阿里云的,所以需要在控制台 -&gt; 安全组 -&gt; 配置规则 -&gt; 添加安全组配置规则 添加访问配置</span></li>
  </ol>
</blockquote>
<p>5.卸载<br>这个我也没用过,慎用</p>
<pre><code class="hljs makefile"><span class="linenum hljs-number">1</span>卸载jenkins：rpm&nbsp;-e&nbsp;jenkins<br><span class="linenum hljs-number">2</span><span class="hljs-section">删除缓存文件:&nbsp;find&nbsp;/&nbsp;-iname&nbsp;jenkins&nbsp;|&nbsp;xargs&nbsp;-n&nbsp;1000&nbsp;rm&nbsp;-rf</span><br></code></pre></div></div>