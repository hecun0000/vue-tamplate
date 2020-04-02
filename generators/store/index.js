module.exports = {
  description: 'vuex modules ',
  prompts: [
    {
      type: 'input',
      name: 'modules',
      message: '请输入模块名称'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/store/modules/{{kebabCase modules}}.js',
      templateFile: './store/modules.hbs'
    }
  ]
}
