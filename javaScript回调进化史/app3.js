//3.Promise案例
var fs = require("fs");

function readText(text) {
	//用Promise包装读取文件的方法,return回Promise对象
    return new Promise(function(resolve, reject) {
        fs.readFile("./data/"+text,function(err,data){
        	dataTwo=data.toString();
        	//将本次函数执行后的结果dataTwo通过resolve抛出
			resolve(dataTwo);
		});
    });
}

//调用readText函数
readText("1.txt").then(function(data){
	//data接收resolve抛出的结果
	console.log("第1次读取文件的结果"+data);
	//执行一些操作后,调用第二个函数并return回
	return readText("2.txt");
}).then(function(data){
	//data接收到第二个函数resolve抛出的结果
	console.log("第2次读取文件的结果"+data);
	//执行一些操作后,调用第三个函数并return回
	return readText("3.txt");
}).then(function(data){
	//data接收到第三个函数resolve抛出的结果
	console.log("第3次读取文件的结果"+data);
	//再执行其他方法
})


//输出结果:
// 第1次读取文件的结果1.txt
// 第2次读取文件的结果2.txt
// 第3次读取文件的结果3.txt

	