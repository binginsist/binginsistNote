//5.Generator案例
var fs = require("fs");

function readText(text) {
    return new Promise(function(resolve, reject) {
        fs.readFile("./data/"+text,function(err,data){
        	dataTwo=data.toString();
			resolve(dataTwo);
		});
    });
}

//5.Generator函数
function* gen() {
  let text1 = yield readText("1.txt");
  let text2 = yield readText("2.txt");
  let text3 = yield readText("3.txt");
  console.log(text1, text2, text3);
}

//Generator函数启动器
function run(gen) {
  var g = gen();

  function next(d) {
    var r = g.next(d);
    r.done || r.value.then(function(d){ next(d) }); // 这个是关键，把值传回传
  }

  next();
}

//运行启动器
run(gen);

//输出结果: 1.txt 2.txt 3.txt


	