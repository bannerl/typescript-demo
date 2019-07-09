module.exports = {

  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: ['plugin:@typescript-eslint/recommended'], //定义文件继承的子规范
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  env: { //指定代码的运行环境
    browser: true,
    node: true,
  },
  "rules": {
    "semi": "error",
    "eqeqeq": "error",
    "no-extra-semi": 2, // 禁止不必要的分号
    "no-irregular-whitespace": "error",
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    // "init-declarations": "error",
    "no-trailing-spaces": 0,
    "@typescript-eslint/indent": [2, 2],
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-explicit-any": 0 // 关闭禁用any
  },
  "overrides": [ // 在某些文件禁用规则
    {
      "files": ["*-test.js", "*.spec.js"],
      "rules": {
        "no-unused-expressions": "error"
      }
    }
  ]
}