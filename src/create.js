const fs = require('fs');
const inquirer = require('inquirer')

const promptList = [
    {
        type: 'input',
        message: '测试一下输入框',
        name: 'name',
        default: 'test_user'
    },
    {
        type: 'confirm',
        message: '你的项目不需要使用gulp作为构建工具',
        name: 'cli'
    }
] 


const create = (name) => {
    inquirer.prompt(promptList).then((answers) => {
        console.log(answers)
        const dirPath = fs.mkdirSync(process.cwd() + '/' + name, {recursive: true})
        console.log(dirPath);
    })
}


module.exports = create