// const fs = require('fs');
import { fs } from 'fs';
let tt = "hello "+process.argv[2]
console.log('您要更新的文字是：'+tt);

fs.appendFile('hello.txt',tt+'\n',function(){
    console.log('hello.txt 更新成功!')
});