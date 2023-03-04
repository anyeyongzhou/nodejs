const fs = require('fs');
fs.writeFile('./files/2.txt', 'abc', err => {
    if (err) {
        console.log('写入失败' + err.message);
    } else {
        console.log('写入成功');
    }
})