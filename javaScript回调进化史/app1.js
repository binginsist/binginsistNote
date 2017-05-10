//1.I/O操作案例(用读取文件的方式模拟)
var fs = require("fs");

fs.readFile("./data/1.txt",function(err,data){
	console.log(data.toString());
});

fs.readFile("./data/2.txt",function(err,data){
	console.log(data.toString());
});

fs.readFile("./data/3.txt",function(err,data){
	console.log(data.toString());
});

console.log("虽然我在最后,但是我第一个输出,不信你瞧")

//输出结果: 虽然我在最后,但是我第一个输出,不信你瞧,2.txt,1.txt,3.txt(不按顺序输出所以结果不一定)

	