const fs=require('fs');
fs.readFile('./files/1.txt','utf8',(err,dataStr)=>{
    console.log(err);
    console.log('---------');
    console.log(dataStr);
});