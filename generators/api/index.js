// const fs = require('fs')

module.exports = {
  description: 'api 配置文件 ',
  prompts: [
    {
      type: 'input',
      name: 'dir',
      message: '请输入文件夹名称'
    },
    {
      type: 'input',
      name: 'file',
      message: '请输入文件名称'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/api/{{camelCase dir}}/{{camelCase file}}.js',
      templateFile: './api/api.hbs'
    }
  ]
}
