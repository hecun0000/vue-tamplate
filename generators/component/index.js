// const fs = require('fs')

module.exports = {
  description: 'component 组件',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入 component 名称'
    },
    {
      type: 'confirm',
      name: 'hasIndex',
      default: true,
      message: '是否包含 index.js 文件?'
    }

  ],

  actions: data => {
    const { hasIndex } = data
    const actions = []

    if (hasIndex) {
      actions.push({
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.vue',
        templateFile: './component/components.hbs'
      })
      actions.push({
        type: 'add',
        path: '../src/components/{{properCase name}}/index.js',
        templateFile: './component/index.hbs'
      })
    } else {
      actions.push({
        type: 'add',
        path: '../src/components/{{properCase name}}.vue',
        templateFile: './component/components.hbs'
      })
    }

    return actions
  }
}
