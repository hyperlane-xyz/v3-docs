# 网站

该网站使用现代静态网站生成器[Docusaurus 3](https://docusaurus.io/)制作。

## 生成的内容

`static`目录包含生成的内容。如果需要更新此内容，请询问 @yorhodes 寻求帮助。

其中大部分来自 `@hyperlane-xyz` NPM 包的序列化内容（请参见`devDependencies`）。最终，这将成为构建过程的一部分。

### 安装

```
$ yarn
```

### 本地开发

```
$ yarn start
```

该命令启动本地开发服务器并打开浏览器窗口。大多数更改都会实时反映，而无需重启服务器。

### 构建

```
$ yarn build
```

该命令可在 `build` 目录中生成静态内容，并可使用任何静态内容托管服务进行托管。 

### 部署

使用 Vercel Github Action 来部署网站。该操作在每次推送到`main`分支时触发。

