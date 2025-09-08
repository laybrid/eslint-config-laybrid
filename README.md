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
     extends: ['eslint-config-laybrid']
  },
```
还需要在vscode中下载`Prettier-code formatter`插件,并将Prettier设置为默认的格式化工具,这样你就可以通过vscode快捷键shift alt f完成一键格式化
## Tips
```
依赖版本
    "@typescript-eslint/eslint-plugin": ">=5.0.0",
    "@typescript-eslint/parser": ">=5.0.0",
    "@vue/eslint-config-typescript": "^9.0.0",
    "eslint": ">=8.0.0",
    "eslint-plugin-vue": ">=8.0.0"
```

