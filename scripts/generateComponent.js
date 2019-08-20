const fs = require('fs')
const { resolve, log, successLog, errorLog, generateFile, dotExistDirectoryCreate } = require('./utils')
const { vueTemplate, entryTemplate } = require('./template')

log('请输入要生成的组件名称、如需生成全局组件，请加 global/ 前缀')
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
   * 组件目录路径
   */
  const componentDirectory = resolve('../src/components', inputName)
  /**
   * vue组件路径
   */
  const componentVueName = resolve(componentDirectory, componentName + '.vue')
  /**
   * 入口文件路径
   */
  const entryComponentName = resolve(componentDirectory, 'index.js')
  
  const hasComponentDirectory = fs.existsSync(componentDirectory)
  if (hasComponentDirectory) {
    errorLog(`${inputName}组件目录已存在，请重新输入`)
    return
  } else {
    log(`正在生成 component 目录 ${componentDirectory}`)
    await dotExistDirectoryCreate(componentDirectory)
    // fs.mkdirSync(componentDirectory);
  }
  try {
    log(`正在生成 vue 文件 ${componentVueName}`)
    await generateFile(componentVueName, vueTemplate(componentName))
    log(`正在生成 entry 文件 ${entryComponentName}`)
    await generateFile(entryComponentName, entryTemplate(componentName))
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
