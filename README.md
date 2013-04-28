```
Bootstraped是在Bootstrap v2.3.1版本的基础上对中文排版的改进和对组件的增强。
```

#目前的修改包括：#

*  去除Glyphicons图标，改用Font Awesome图标字体（使用时需要针对IE7单独引入一个CSS文件）。
*  对中文字，尤其是H1-H6标题字体使用微软雅黑等非衬线中文字体，并去除BS默认的Bold Font Weight。
*  对`.lead`使用非衬线中文字体，去掉Bold Font Weight。（字号大的宋体显示效果很差）。
*  采用Gruntjs编译，编译后的文件存放于build目录。

#使用说明：#

##生产环境##

build目录下面包含了所有用于生产环境的css、js、font文件，直接引入页面中即可，使用方式和原版Bootstrap一致：

```
注意：针对IE7需要加入以下代码，让Font Awesome兼容IE7

`
<!--[if IE 7]>
      <link rel="stylesheet" href="css/font-awesome-ie7.min.css">
<![endif]-->
`
```

##编译##

目前的编译方式完全迁移到了Gruntjs，在编译前需要准备以下环境：

###安装[Node.js](http://nodejs.org/download/)###

请针对不同环境下载（或采用相应环境下的安装方式）安装即可。

###安装 node CLI###

**如果你以前将Grunt安装在了全局环境下（安装时使用了 -g 参数），就需要先将其删除：**

```shell
npm uninstall -g grunt
```

然后将Grunt命令行（CLI）安装到全局环境中。安装时可能需要使用sudo（针对OSX、*nix、BSD等系统中）权限或者作为管理员（对于Windows环境）来执行以下命令。

```shell
npm install -g grunt-cli
```

上述命令执行完后，`grunt` 命令就被加入到你的系统路径中了，以后就可以在任何目录下执行此命令了。

注意，安装`grunt-cli`并不等于安装了grunt！grunt CLI的任务很简单：调用与`Gruntfile`在同一目录中grunt。这样带来的好处是，允许你在同一个系统上同时安装多个版本的grunt。


###编译方式###

在命令行下将当前目录转移到Bootstraped源码目录，即Gruntfile.js所在目录，执行：

```shell
grunt
```
即可重建build目录，并拷贝font、编译并压缩less、合并并压缩js文件。

另外，还可以执行

```shell
grunt doc
```
重建docs文档。

```shell
grunt server
```
启动一个简易的web server，专门用于在浏览器中查看本地文档。地址是：

```
http://localhost:9001
```


* [中文文档 ](http://www.bootcss.com)
* [英文文档](http://getbootstrap.com)




<a href="http://getbootstrap.com">
  <img src="http://twitter.github.com/bootstrap/assets/img/bootstrap-docs-readme.png" width="100px">
</a>

# [Bootstrap v2.3.1](http://twitter.github.com/bootstrap) [![Build Status](https://secure.travis-ci.org/twitter/bootstrap.png)](http://travis-ci.org/twitter/bootstrap)

Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created and maintained by [Mark Otto](http://twitter.com/mdo) and [Jacob Thornton](http://twitter.com/fat).

To get started, checkout [http://getbootstrap.com](http://getbootstrap.com)!



## Quick start

Three quick start options are available:

* [Download the latest release](https://github.com/twitter/bootstrap/zipball/master).
* Clone the repo: `git clone git://github.com/twitter/bootstrap.git`.
* Install with Twitter's [Bower](http://twitter.github.com/bower): `bower install bootstrap`.



## Versioning

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, Bootstrap will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit [http://semver.org/](http://semver.org/).



## Bug tracker

Have a bug or a feature request? [Please open a new issue](https://github.com/twitter/bootstrap/issues). Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines), written by [Nicolas Gallagher](https://github.com/necolas/).



## Community

Keep track of development and community news.

* Follow [@twbootstrap on Twitter](http://twitter.com/twbootstrap).
* Read and subscribe to the [The Official Twitter Bootstrap Blog](http://blog.getbootstrap.com).
* Have a question that's not a feature request or bug report? [Ask on the mailing list.](http://groups.google.com/group/twitter-bootstrap)
* Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##twitter-bootstrap` channel.



## Compiling CSS and JavaScript

Bootstrap includes a [makefile](Makefile) with convenient methods for working with the framework. Before getting started, be sure to install [the necessary local dependencies](package.json):

```
$ npm install
```

When completed, you'll be able to run the various make commands provided:

#### build - `make`
Runs the recess compiler to rebuild the `/less` files and compiles the docs. Requires recess and uglify-js.

#### test - `make test`
Runs jshint and qunit tests headlessly in [phantomjs](http://code.google.com/p/phantomjs/) (used for ci). Depends on having phantomjs installed.

#### watch - `make watch`
This is a convenience method for watching just Less files and automatically building them whenever you save. Requires the Watchr gem.

Should you encounter problems with installing dependencies or running the makefile commands, be sure to first uninstall any previous versions (global and local) you may have installed, and then rerun `npm install`.



## Contributing

Please submit all pull requests against *-wip branches. If your pull request contains JavaScript patches or features, you must include relevant unit tests. All HTML and CSS should conform to the [Code Guide](http://github.com/mdo/code-guide), maintained by [Mark Otto](http://github.com/mdo).

Thanks!



## Authors

**Mark Otto**

+ [http://twitter.com/mdo](http://twitter.com/mdo)
+ [http://github.com/mdo](http://github.com/mdo)

**Jacob Thornton**

+ [http://twitter.com/fat](http://twitter.com/fat)
+ [http://github.com/fat](http://github.com/fat)



## Copyright and license

Copyright 2012 Twitter, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

  [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
