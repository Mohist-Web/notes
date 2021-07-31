
<div id="export_content"><div class="output_wrapper" id="output_wrapper_id"><h2 id="hspampa"><span>单页应用(SPA)和多页应用(MPA)的区别</span></h2>
<h3 id="hspa"><span>SPA</span></h3>
<blockquote>
  <p>SPA (Single-page Application) 顾名思义在 Web 设计上使用单一页面，利用 JavaScript 操作 Dom 的技术实现各种应用，现今在介面上算是非常受欢迎的设计，只有一个WEB主页面的应用，公共资源(js、css等)仅需加载一次，所有的内容都包含在主页面，对每一个功能模块组件化，搭配 AJAX 使得整体界面反应速度相当迅速，并且能够实现各种丰富的使用者介面。单页应用跳转，就是切换相关组件，仅刷新局部资源。缺点是学习门槛高，而 JavaScript 又有跨浏览器的问题，此外在不  Reload 页面的状况下，记忆体控制也变得更复杂与重要。</p>
</blockquote>
<h3 id="hmpa"><span>MPA</span></h3>
<blockquote>
  <p>MPA (Multi-page Application) 多页面应用指的就是最传统的 HTML 网页设计，早期的网站都是这样的设计，所以称为「网页设计」。有多个独立的页面的应用，每个公共资源(js、css等)需选择性重新加载，多页面跳转会刷新所有资源。如果使用这样的设计在 Web App 中，使用者体验比较差，整体流畅度扣分。但进入门槛低，简单套个 jQuery 就可以完成。</p>
</blockquote>
<h3 id="hspampa-1"><span>SPA和MPA的比较</span></h3>
<table>
<thead>
<tr>
<th style="text-align:left;">对比</th>
<th style="text-align:left;">多页面应用模式(MPA)</th>
<th style="text-align:left;">单页面应用模式(SPA)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">应用组成</td>
<td style="text-align:left;">由多个完整页面构成</td>
<td style="text-align:left;">由一个外壳页面和多个页面片段构成</td>
</tr>
<tr>
<td style="text-align:left;">跳转方式</td>
<td style="text-align:left;">页面之间的跳转是从一个页面跳转到另一个页面</td>
<td style="text-align:left;">页面片段之间的跳转是把一个页面片段删除或隐藏,加载另一个页面片段并显示出来。这是片段之间的模拟跳转,并没有离开主页面</td>
</tr>
<tr>
<td style="text-align:left;">刷新方式</td>
<td style="text-align:left;">整页刷新</td>
<td style="text-align:left;">页面片段局部刷新</td>
</tr>
<tr>
<td style="text-align:left;">跳转后公共资源是否重新加载</td>
<td style="text-align:left;">是</td>
<td style="text-align:left;">否</td>
</tr>
<tr>
<td style="text-align:left;">URL模式</td>
<td style="text-align:left;">http://xxx.page1.html <br> http://xxx.page2.html</td>
<td style="text-align:left;">http://xxx.shell.html#page1 <br> http://xxx.shell.html#page2</td>
</tr>
<tr>
<td style="text-align:left;">用户体验</td>
<td style="text-align:left;">页面间切换加载慢,不流畅,用户体验差,特别是在移动设备上</td>
<td style="text-align:left;">页面片段间的切换快,用户体验好,包括在移动设备上</td>
</tr>
<tr>
<td style="text-align:left;">能否实现转场动画</td>
<td style="text-align:left;">无法实现</td>
<td style="text-align:left;">容易实现</td>
</tr>
<tr>
<td style="text-align:left;">页面间传递数据</td>
<td style="text-align:left;">依赖URL、cookie或者localstorage实现麻烦</td>
<td style="text-align:left;">因为在一个页面内,页面片段间传递数据很容易实现</td>
</tr>
<tr>
<td style="text-align:left;">搜索引擎优化(SEO)</td>
<td style="text-align:left;">可以直接做</td>
<td style="text-align:left;">不利于 SEO（可借助 SSR 优化 SEO）</td>
</tr>
<tr>
<td style="text-align:left;">特别适用范围</td>
<td style="text-align:left;">需要对搜索引擎友好的网站</td>
<td style="text-align:left;">对体验要求高的应用,特别是移动应用</td>
</tr>
<tr>
<td style="text-align:left;">开发难度</td>
<td style="text-align:left;">低一些,框架选择容易</td>
<td style="text-align:left;">高一些,需要专门的框架来降低这种模式的开发难度</td>
</tr>
<tr>
<td style="text-align:left;">结论</td>
<td style="text-align:left;">前期开发成本较高，后期维护较为容易</td>
<td style="text-align:left;">前期开发成本低，后期维护就比较麻烦，因为可能一个功能需要改很多地方</td>
</tr>
</tbody>
</table>
<h3 id="h"><span>单页应用项目过大首页加载慢如何解决</span></h3>
<blockquote>
  <p>1.使用CDN资源,减小服务器带宽压力<br>2.路由懒加载<br>3.将一些静态js css放到其他地方（如OSS），减小服务器压力<br>4.按需加载三方资源，如iview,建议按需引入iview中的组件<br>5.使用nginx开启gzip减小网络传输的流量大小<br>6.webpack开启gzip压缩<br>7.若首屏为登录页，可以做成多入口，登录页单独分离为一个入口<br>8.SSR渲染</p>
</blockquote></div></div>
