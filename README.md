# eslint-config-laybrid
个人使用的eslint配置，集成了Prettier,配合vscode Prettier-code formatter插件达到完美开发体验

## Usage
```
npm install --save-dev eslint-config-laybrid
```

然后在`package.json`或者`.eslintrc.js`中去拓展

```
.eslintrc.js
module.exports = {
  extends: ['eslint-config-laybrid']
}

package.json
  "eslintConfig": {
    "extends": ["eslint-config-laybrid"],
    "rules": {}
  },
```
还需要在vscode中下载`Prettier-code formatter`插件,并将Prettier设置为默认的格式化工具,这样你就可以通过vscode快捷键shift alt f完成一键格式化

## 插件配置
由于插件本身自带一套默认的配置，所以我们需要在编辑器对插件做一个简单的配置，目的是告诉插件我们的配置文件的位置
```
 编辑器设置里搜索 prettier config path
 ./node_modules/eslint-config-laybrid/prettier.cjs 
```
 将上述路径填入即可。这一步很重要不然项目开发的时候包和插件用的配置文件不一样会报错。
## Tips
```
依赖版本
    "@typescript-eslint/eslint-plugin": ">=5.0.0",
    "@typescript-eslint/parser": ">=5.0.0",
    "@vue/eslint-config-typescript": "^9.0.0",
    "eslint": ">=8.0.0",
    "eslint-plugin-vue": ">=8.0.0"
```

