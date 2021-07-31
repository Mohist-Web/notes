## Nginx 基础 ##
### 反向代理 ###
> 当我们有一个服务器集群，并且服务器集群中的每台服务器的内容一样的时候，同样我们要直接从个人电脑访问到服务器集群服务器的时候无法访问，必须通过第三方服务器才能访问集群。
这个时候，我们通过第三方服务器访问服务器集群的内容，但是我们并不知道是哪一台服务器提供的内容，此种代理方式称为反向代理。
Nginx在做反向代理时，提供性能稳定，并且能够提供配置灵活的转发功能。Nginx可以根据不同的正则匹配，采取不同的转发策略，比如图片文件结尾的走文件服务器，动态页面走web服务器，只要你正则写的没问题，又有相对应的服务器解决方案，你就可以随心所欲的玩。并且Nginx对返回结果进行错误页跳转，异常判断等。如果被分发的服务器存在异常，他可以将请求重新转发给另外一台服务器，然后自动去除异常服务器。


### 负载均衡  ###
> 公司会建立很多的服务器，这些服务器组成了服务器集群，然后，当用户访问网站的时候，先访问一个中间服务器，再让这个中间服务器在服务器集群中选择一个压力较小的服务器，然后将该访问请求引入选择的服务器。
所以，用户每次访问，都会保证服务器集群中的每个服务器压力趋于平衡，分担了服务器压力，避免了服务器崩溃的情况。
一句话：nginx会给你分配服务器压力小的去访问。Nginx提供的负载均衡策略有2种：内置策略和扩展策略。内置策略为轮询，加权轮询，Ip hash。扩展策略，就天马行空，只有你想不到的没有他做不到的啦。



### nginx常用命令  ###
1. 启动nginx 
-命令:  nginx
2. 关闭nginx
-命令:  nginx -s stop
3. 重启nginx
-命令:  nginx -s reload
-问题:  重启的时候遇到过报错的问题
-解决: 键入“.\nginx”即可
```
nginx : 无法将“nginx”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正
确，然后再试一次。
所在位置 行:1 字符: 1
+ nginx -s reload
+ ~~~~~
    + CategoryInfo          : ObjectNotFound: (nginx:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

```


### nginx配置  ###
```
#user  nobody; #配置用户或者组，默认为nobody nobody

worker_processes  1; #允许生成的进程数，默认为1

#error_log  logs/error.log; #制定日志路径，级别。这个设置可以放入全局块，http块，server块，级别以此为：debug|info|notice|warn|error|crit|alert|emerg

#pid        logs/nginx.pid; #指定nginx进程运行文件存放地址

#events块: 配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等
events {
    accept_mutex on;   #设置网路连接序列化，防止惊群现象发生，默认为on
    multi_accept on;  #设置一个进程是否同时接受多个网络连接，默认为off
    #use epoll;      #事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport
    worker_connections  1024;    #最大连接数，默认为512
}

#http块: 可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。
http {
    include       mime.types;   #文件扩展名与文件类型映射表
    default_type  application/octet-stream; #默认文件类型，默认为text/plain
    #access_log off; #取消服务日志    
    log_format myFormat '$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for'; #自定义格式
    access_log log/access.log myFormat;  #combined为日志格式的默认值
    sendfile on;   #允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。
    sendfile_max_chunk 100k;  #每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。
    keepalive_timeout 65;  #连接超时时间，默认为75s，可以在http，server，location块。
    error_page 404 D:\WorkBook\QianKun\serve\dist\404.html; #错误页

    #server块: 配置虚拟主机的相关参数，一个http中可以有多个server。
    server {
        keepalive_requests 120; #单连接请求上限次数。
        listen       4545;   #监听端口
        server_name  127.0.0.1;   #监听地址      

        #location块: 配置请求的路由，以及各种页面的处理情况。
        location  ~*^.+$ {       #请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。
            #root path;  #根目录
            #index vv.txt;  #设置默认页
            proxy_pass  http://mysvr;  #请求转向mysvr 定义的服务器列表
            deny 127.0.0.1;  #拒绝的ip
            allow 172.18.5.54; #允许的ip           
        } 
    }
}

```



