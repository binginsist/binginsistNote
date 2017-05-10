//4.Promise.all案例
var fs = require("fs");

function readText(text) {
	//用Promise包装读取文件的方法,并返回Promise对象
    return new Promise(function(resolve, reject) {
        fs.readFile("./data/"+text,function(err,data){
        	dataTwo=data.toString();
        	//将本次函数执行后的结果dataTwo通过resolve抛出
			resolve(dataTwo);
		});
    });
}

let arr = [];
//并发处理读取文件的操作
arr.push(readText("1.txt"));
arr.push(readText("2.txt"));
arr.push(readText("3.txt"));

Promise.all(arr).then(function (datas) {
    // 最终处理，datas 是所有返回结果的数组
    console.log("返回数据为", datas);
});

//输出结果:[ '1.txt', '2.txt', '3.txt' ]


	