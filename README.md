## osc oppnys-server-cli (别名： opsc)

提供下载指定的仓库模板，并自动安装依赖，以及启动项目

startup

```shell
npm i oppnys-server-cli -g
```

执行一下命令

```shell
opsc create app-demo https://github.com/oppnys/oppnys-server-template.git
```

即可在命令运行位置根据模板创建一个 项目，并自动安装依赖运行。

```shell
Usage: osc [options] [command]

Options:
  -V --version                                 output the version number
  -d --dest <dest>                             a destination folder
  -p, --port <number>                          port number
  -h, --help                                   display help for command

Commands:
  create <peoject> <templateRepo> [others...]  clone repository into folder
```