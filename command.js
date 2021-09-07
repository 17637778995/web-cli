#! /usr/bin/env node



const program = require('commander');
const create = require('./src/create');


program 
.command('create <nmae>')
.description('创建一个web项目')
.action(create)

program.parse(process.argv)