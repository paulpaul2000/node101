const fs = require('fs')
const moment = require('moment')

const todoList = [
{
    field: 'value1'
},
{
    field: 'value2'
},
{
    field: 'value3'
},
]

const json =JSON.stringify(todoList)
fs.writeFileSync('todo.json', json)