#linux环境下搭建jenkins1-环境搭建#
项目发布环境的需要。就动手搭建了jenkins，在此把个人的搭建过程以及搭建中碰到的问题一起总结一下。

1. 准备环境。
首先，需要jdk是必须要安装好的。本人使用的linux是centos，直接使用yum安装。
```
    // 先找到合适的版本：
    yum search java | grep jdk
    // 然后运行安装(我安装的jsk1.8的)：
    yum install java-1.8-openjdk.x86_64
    // 安装maven
    yum install maven
    // 安装git
    yum install git
```


2. 安装jenkins
	安装jenkins就很简单了,根据官网手册一步步操作就好了.此处有一个小插曲,同步镜像源的时候一直没有成功,猜想是官方手册上的地址不通,换上我这就好啦
```

    //获取jenkins源文件
    sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo
    //导入jenkins公钥
    sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
    //安装
    yum install -y jenkins
```



3. 启动jenkins(整理了操作jenkins的常用命令)
	
	> 1.jenkins启动
		-命令: service jenkins start
	2.jenkins停止
		-命令: service jenkins stop
	3.查询jenkins状态
		-命令: service jenkins status
	4.重启jenkins
		-命令: service jenkins restart



4.访问
	http://{IP地址}:8080
	这里遇到了访问不通的问题,大致整理分为三类:
	
> 
1. 端口占用
2. 防火墙
	查看防火墙状态: service iptables status  
	停止防火墙: service iptables stop  
	启动防火墙: service iptables start  
	重启防火墙: service iptables restart  
	永久关闭防火墙: chkconfig iptables off  
	永久关闭后重启: chkconfig iptables on　
3. 因为我的服务器是阿里云的,所以需要在控制台 -> 安全组 -> 配置规则 -> 添加安全组配置规则 添加访问配置


5.卸载
这个我也没用过,慎用
```
卸载jenkins：rpm -e jenkins
删除缓存文件: find / -iname jenkins | xargs -n 1000 rm -rf
```
