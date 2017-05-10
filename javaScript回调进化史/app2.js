//2.回调地狱案例
var fs = require("fs");

fs.readFile("./data/1.txt",function(err,data){
	console.log(data.toString());
		//第二层
		fs.readFile("./data/2.txt",function(err,data){
				console.log(data.toString());
					//第三层
					fs.readFile("./data/3.txt",function(err,data){
						console.log(data.toString());
					});
			});
});			
//输出结果: 1.txt,2.txt,3.txt(按顺序输出)

	