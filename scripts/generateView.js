// generateView.js
const path = require('path')
const fs = require('fs')
const { resolve, log, successLog, errorLog, generateFile, dotExistDirectoryCreate } = require('./utils')
const { vueTemplate } = require('./template')

log('请输入要生成的页面组件名称、会生成在 views/目录下')
let componentName = ''
process.stdin.on('data', async chunk => {
  const inputName = String(chunk).trim().toString()
  if (inputName.includes('/')) {
    const inputArr = inputName.split('/')
    componentName = inputArr[inputArr.length - 1]
  } else {
    componentName = inputName
  }
  /**
   * Vue页面组件路径
   */
  let componentVueName = resolve('../src/views', inputName)
  // 如果不是以 .vue 结尾的话，自动加上
  if (!componentVueName.endsWith('.vue')) {
    componentVueName += '.vue'
  }
  /**
   * vue组件目录路径
   */
  const componentDirectory = path.dirname(componentVueName)

  const hasComponentExists = fs.existsSync(componentVueName)
  if (hasComponentExists) {
    errorLog(`${inputName}页面组件已存在，请重新输入`)
    return
  } else {
    log(`正在生成 component 目录 ${componentDirectory}`)
    await dotExistDirectoryCreate(componentDirectory)
  }
  try {
    log(`正在生成 vue 文件 ${componentVueName}`)
    await generateFile(componentVueName, vueTemplate(componentName))
    successLog('生成成功')
  } catch (e) {
    errorLog(e.message)
  }

  process.stdin.emit('end')
})
process.stdin.on('end', () => {
  log('exit')
  process.exit()
})
