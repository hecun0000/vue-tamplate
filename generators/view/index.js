const exec = require('child_process').exec
const componentExist = require('../utils/index')

module.exports = {
  description: 'views 页面',
  prompts: [
    {
      type: 'input',
      name: 'dir',
      default: 'container',
      message: '请输入 views 所在文件夹名称!',
      validate: value => {
        if ((/.+/).test(value)) {
          return componentExist(value) ? '组件名 或 views名已经存在' : true
        }
        return '请输入views 所在文件夹名称'
      }
    },
    {
      type: 'input',
      name: 'name',
      default: 'page',
      message: '请输入 views 名称!'
    },
    {
      type: 'confirm',
      name: 'hasDialog',
      default: true,
      message: '是否需要 编辑弹窗 组件?'
    },
    {
      type: 'confirm',
      name: 'hasApi',
      default: true,
      message: '是否添加 api 配置文件?'
    },
    {
      type: 'confirm',
      name: 'hasVuex',
      default: true,
      message: '是否添加 vuex moudule 文件?'
    }
  ],

  actions: data => {
    const { hasDialog, hasApi, hasVuex, name, dir } = data
    const actions = []

    actions.push({
      type: 'add',
      path: '../src/views/{{kebabCase name}}/{{properCase name}}.vue',
      templateFile: './view/view.hbs'
    })

    if (hasDialog) {
      actions.push({
        type: 'add',
        path: '../src/views/{{kebabCase name}}/components/{{properCase name}}Dialog.vue',
        templateFile: './view/dialog.hbs'
      })
      actions.push({
        type: 'add',
        path: '../src/views/{{kebabCase name}}/components/index.js',
        templateFile: './view/components.hbs'
      })
    }
    if (hasApi) {
      actions.push(data => {
        const { name } = data
        const cmd = `npm run g api ${dir} ${name}`
        exec(cmd, (err, res, stderr) => {
          if (err || stderr) return err || stderr
          process.stdout.write(res)
        })
        return '已添加 api 配置文件'
      })
    }
    if (hasVuex) {
      actions.push(_ => {
        const cmd = `npm run g vuex ${name}`
        exec(cmd, (err, res, stderr) => {
          if (err || stderr) {
            return err || stderr
          }
          process.stdout.write(res)
        })
        return '已添加 vuex modules 配置文件'
      })
    }

    return actions
  }
}
