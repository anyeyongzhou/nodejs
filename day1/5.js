const fs=require('fs');
/* fs.readFile('./files/2.txt','utf8',(err,dataStr)=>{
    if(err){
        return console.log('文件读取失败'+err.message);
    }
    return console.log('读取文件成功'+dataStr);
}); */

/* fs.readFile(__dirname+'/files/2.txt','utf8',(err,dataStr)=>{
    if(err){
        return console.log('文件读取失败'+err.message);
    }
    return console.log('读取文件成功'+dataStr+__filename);
}); */
// fs.existsSync(__dirname+'/files/1.txt');
// console.log(fs.existsSync(__dirname+'/files/3.txt'));
fs.stat('./files/2.txt',(err,dataStr)=>{
    if(err){
        return console.log('文件读取失败'+err.message);
    }
    return console.log('读取文件成功'+dataStr.isFile());
});

