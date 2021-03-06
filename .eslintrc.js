// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 空格标准这里是2个空格为标准 可以写4,tab
        indent: ['error', 4],
        // 关闭语句强制分号结尾
        "semi": [0],
        // 函数定义时括号前面要不要有空格
        "space-before-function-paren": [0, "always"],
        //定义数组或对象最后多余的逗号
		"comma-dangle": [0, "never"],
    }
};
