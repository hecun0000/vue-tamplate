const chalk = require('chalk')
const path = require('path')
const fs = require('fs')

exports.generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

exports.dotExistDirectoryCreate = (directory) => {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve(true)
    })
  })
}

// 递归创建目录
function mkdirs (directory, callback) {
  var exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), function () {
      fs.mkdirSync(directory)
      callback()
    })
  }
}

exports.resolve = (...file) => path.resolve(__dirname, ...file)
exports.log = message => console.log(chalk.green(`${message}`))
exports.successLog = message => console.log(chalk.blue(`${message}`))
exports.errorLog = error => console.log(chalk.red(`${error}`))