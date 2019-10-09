## 🆙

[TOC]



### 🔹e.g [AppleScript]

🔹mono->Fiddler

```livescript
on run {input, parameters}	
	tell application "Terminal"
		do script "mono32 /Users/Meridian/Documents/fiddler-mac/Fiddler.exe"
	end tell
	return input
end run
```



## 📣多条命令执行👉🏻区别 `&&` 和 `;`

我们知道使用分号隔开可以执行多条命令，例如：

```ruby
$ cd /temp/log/;rm -rf *
```

但是如果当前目录是/目录，并且/temp/log目录不存在，那么就会发生激动人心的一幕：

```ruby
bash: cd: /temp/log: No such file or directory
（突然陷入沉默）
```

> **因为`;`可以执行多条命令，但是不会因为前一条命令失败，而导致后面的不会执行**

如果解决呢？很简单，使用`&&`，例如:

```ruby
$ cd /temp/log/&&rm -rf *
```

这样就会确保前一条命令执行成功，才会执行后面一条。





## 📣快速查找你需要的命令👉🏻`man`

我们都知道man可以查看命令的帮助手册，但是如果我们想要某个功能却不知道使用哪个命令呢？别着急，还是可以使用man：

```ruby
$ man -k "copy files"
cp (1)               - copy files and directories
cpio (1)             - copy files to and from archives
git-checkout-index (1) - Copy files from the index to the working tree
gvfs-copy (1)        - Copy files
gvfs-move (1)        - Copy files
install (1)          - copy files and set attributes
```

使用-k参数，使得与copy files相关的帮助手册都显示出来了。





## 📣光标移动👉🏻快捷键修改命令

> 这里有很多快捷键可以帮我们修正自己的命令。
>
> 接下来使用光标二字代替光标的位置。

<span style="color:#1ecf99;font-size:21px;font-weight:500;">👉🏻删除从<u>开头到光标</u>处的命令文本</span>

```ruby
$ cd /proc/tty;ls -al光标
```

如果此时使用ctrl + u快捷键，那么该条命令都会被清除，而不需要长按backspace键。

<span style="color:#1ecf99;font-size:21px;font-weight:500;">👉🏻删除从<u>光标到结尾</u>处的命令文本</span>

```ruby
$ cd /proc/tty光标;ls -al
```

如果此时使用`ctrl + k`快捷键，那么从光标开始处到结尾的命令文本将会被删除。

还有其他的操作，不再举例，例如：

- `ctrl + a`:光标移动到命令开头
- `ctrl + e`：光标移动到命令结尾 
- `alt +f` :光标向前移动一个单词
- `alt + b`：光标向前移动一个单词
- `ctrl + w`：删除一个词（以空格隔开的字符串）





## 📣搜索包含某个字符串的文件

例如，要在当前目录下查找包含test字符串的文件：

```ruby
$ grep -rn "test"
test2.txt:1:test
```

它便可以找到该字符串在哪个文件的第几行。



## 📣屏幕冻结

程序运行时，终端可能输出大量的日志，你想简单查看一下，又不想记录日志文件，此时可以使用`ctrl+s`键，冻结屏幕，使得日志不再继续输出，而如果想要恢复，可使用`ctrl+q`退出冻结。





## 📣查看正在使用的服务和端口

您可以通过执行 `netstat -tunlp`，`netstat -antup`，`lsof -i:PORT` 命令进行查看。



## 📣查看服务器进程信息

您可以通过执行 `ps auxww|grep PID`，`ps -ef`，`lsof -p PID`，`top -p PID` 命令进行查看。



## 📣如何停止进程？

您可以通过执行 `kill -9 PID`（PID 表示进程号），`killall 程序名`（例如 killall cron）来停止进程。
如果需要停止僵尸进程，则需要杀掉进程的父进程，执行的命令为： `kill -9 ppid`（ppid 为父进程 ID 号，可以通过 `ps -o ppid PID` 命令进行查找，例如 ps -o ppid 32535）。**



## 📣查找僵尸进程

您可以通过执行 `top` 命令查看僵尸进程（zombie）的总数，通过执行 `ps -ef | grep defunct | grep -v grep` 查找具体僵尸进程的信息。

虽然zombies（僵尸进程）不是一个命令，但它在Linux系统上却根深蒂固。zombies基本上是没有被完全清除的死亡进程的残骸。进程不应该以这种方式运行——任由死亡进程逗留，而不是仅仅让它们死亡、进入数字天堂，所以zombies的存在表明了留下它们的进程存在某种缺陷。检查你的系统是否有僵尸进程残留下来，一个简单的方法就是查看top命令的标题行。

```ruby
$ top
top - 18:50:38 up 6 days, 6:36, 2 users, load average: 0.00, 0.00, 0.00
Tasks: 171 total, 1 running, 167 sleeping, 0 stopped, 3 zombie <==
%Cpu(s): 0.0 us, 0.0 sy, 0.0 ni, 99.9 id, 0.1 wa, 0.0 hi, 0.0 si, 0.0 st
KiB Mem : 2003388 total, 250840 free, 545832 used, 1206716 buff/cache
KiB Swap: 9765884 total, 9765764 free, 120 used. 1156536 avail Mem
```

好吓人！上面显示有三个僵尸进程。



## 📣为什么启动不了服务器端口？

服务器端口的启动监听，需要从操作系统本身以及应用程序查看。
Linux 操作系统1024以下的端口只能由 root 用户启动，即需要先运行 `sudo su –` 获取 root 权限后再启用服务端口。
应用程序问题，建议通过应用程序启动日志来排查失败原因，例如端口冲突（腾讯服务器系统使用端口36000不能占用），配置问题等。



## 📣常用的 Linux 服务器性能查看命令有哪些？

> | **命令名称** | **说明**                                                     |
> | :----------- | :----------------------------------------------------------- |
> | top          | 进程监控命令，用来监控系统的整体性能。 可以显示系统负载，进程，CPU，内存，分页等信息，常用 `shift+m` 和 `shift+p` 来按 memory 和 CPU 使用对进程进行排序。 |
> | vmstat       | 系统监控命令，重点侧重于虚拟内存，也可以监控 CPU，进程，内存分页以及 IO 的状态信息。<br/> - 例如，vmstat 3 10，每隔3秒输出结果，执行10次。 |
> | iostat       | 用于输出 CPU 状态和 IO 状态的工具，可以详细展示系统的 IO 信息。 <br/> - 例如 `iostat -dxmt 10`，每10秒以 MB 的格式输出 IO 的详细信息。 |
> | df           | 用来检查系统的磁盘空间占用状况。<br> - 例如：`df -m`，以 MB 为单位展现磁盘使用状况。 |
> | lsof         | 列举系统中被打开的文件，由于 Linux 是以文件系统为基础，此命令在系统管理中很有帮助。<br> - 例如： `lsof -i：36000`，显示使用36000端口的进程 ;`lsof -u root`，显示以 root 运行的程序 ; `lsof -c php-fpm`，显示 php-fpm 进程打开的文件 ; `lsof php.ini`，显示打开 php.ini 的进程。 |
> | ps           | 进程查看命令，可以用来显示进程的详细信息。 常用命令参数组合为`ps -ef`，`ps aux`，推荐使用 `ps -A -o` 来自定义输出字段。 <br/> - 例如： `ps -A -o pid,stat,uname,%cpu,%mem,rss,args,lstart,etime |sort -k6,6 -rn`按所列字段输出并以第六个字段进行排序 ; `ps -A -o comm |sort -k1 |uniq -c|sort -k1 -rn|head`列出运行实例最多的进程。 |

其他常用的命令和文件：`free -m` ， `du` ， `uptime` ， `w` ， `/proc/stat` ， `/proc/cpuinfo` ， `/proc/meminfo` 。 



## 📣如何设置云服务器开机任务？

Linux 内核启动顺序为：

1. 启动 `/sbin/init` 进程。
2. 依次执行 init 初始脚本。
3. 运行级别脚本 `/etc/rc.d/rc\*.d`，*号值等于运行模式。您可以在 `/etc/inittab` 中查看。
4. 执行 `/etc/rc.d/rc.local`。

> 说明：
>
> 如果需要配置开机任务，您可以在 `/etc/rc.d/rc\*.d` 中的 `S\*\*rclocal` 文件配置，也可以在 `/etc/rc.d/rc.local` 中配置。





## 📣终止进程的命令👉🏻kill

还有kill命令——当然这并不是指谋杀，而是指我们用来终止进程的命令，终止的方式有多强硬取决于需要什么来适当地终止它们。当然，Linux并不就此止步。相反，它有各种各样的kill命令来用于你的命令行。我们有`kill`、`pkill`、`killall`、`killpg`、`rfkill`、`skill`（参阅`es-kill`）、`tgkill`、`tkill`和`xkill`。

```ruby
$ killall runme
[1] Terminated ./runme
[2] Terminated ./runme
[3]- Terminated ./runme
[4]+ Terminated ./runme
```



## 📣加密 / 隐藏文件

###  👉🏻crypt

好吧，我们一直都有crypt。顾名思义，crypt不是存放垃圾文件的地宫或墓坑，而是加密文件内容的命令。如今，“crypt”通常作为一个脚本而实现：通过调用一个名为mcrypt的二进制程序，模拟较旧的crypt命令，从而发挥其功用。直接使用mycrypt命令是一种更好的选择。

```ruby
$ mcrypt x
Enter the passphrase (maximum of 512 characters)
Please use a combination of upper and lower case letters and numbers.
Enter passphrase:
Enter passphrase:
File x was encrypted.
```

请注意：mcrypt命令会创建第二个文件，其扩展名是“.nc”。它并不覆盖你在加密的文件。

mcrypt命令有密钥大小和加密算法方面的选项。你还可以指定密钥作为一个选项，不过mcrypt命令不鼓励这么做。

### 👉🏻shred

Linux系统还支持一种名为shred的命令。shred命令覆盖文件以隐藏以前的内容，并确保无法使用硬盘恢复工具来恢复它们。请记住：rm命令基本上只是删除目录文件中的文件引用，但不一定从磁盘上擦除内容或覆盖内容。shred命令才是覆盖文件的内容。

```ruby
$ shred dupes.txt
$ more dupes.txt
```

▒oΛ▒▒9▒lm▒▒▒▒▒o▒1־▒▒f▒f▒▒▒i▒▒h^}&▒▒▒{▒▒





## 📣一次性计划任务（cron）

### 👉🏻at midnight

据说万圣节晚上，死人的灵魂会从日落一直游荡到深夜。Linux让用户可以借助“at midnight”命令跟踪是否已离开。at用来安排下一次指定时间到来时就运行的任务，工作方式类似一次性计划任务（cron）。

```ruby
$ at midnight
warning: commands will be executed using /bin/sh
at> echo 'the spirits of the dead have left'
at>
job 3 at Thu Oct 31 00:00:00 2017
```

### 👉🏻daemons

Linux系统还高度依赖**守护进程（daemon）——这种进程在后台运行**，提供了系统的许多功能。许多守护进程的名称以“d”结尾。这个“d”代表“daemon”，它表明该进程一直运行，支持某种重要功能。另一些守护进程则将“daemon”这个单词拼出来。

```ruby
$ ps -ef | grep sshd
root 1142 1 0 Oct19 ? 00:00:00 /usr/sbin/sshd -D
root 25342 1142 0 18:34 ? 00:00:00 sshd: shs [priv]
$ ps -ef | grep daemon | grep -v grep
message+ 790 1 0 Oct19 ? 00:00:01 /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation
root 836 1 0 Oct19 ? 00:00:02 /usr/lib/accountsservice/accounts-daemon
```

## 参考链接

+ [这些linux技巧大大提高你的工作效率](https://cloud.tencent.com/developer/article/1497227)

+ [Linux 常用操作及命令](https://cloud.tencent.com/document/product/213/2150)