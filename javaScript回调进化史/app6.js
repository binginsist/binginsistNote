//6.async案例
var fs = require("fs");

function readText(text) {
    return new Promise(function(resolve, reject) {
        fs.readFile("./data/"+text,function(err,data){
        	dataTwo=data.toString();
			    resolve(dataTwo);
		  });
    });
}


async function run() {
  let text1 = await readText("1.txt");
  let text2 = await readText("2.txt");
  let text3 = await readText("3.txt");
  console.log(text1, text2, text3);
}

run();

//输出结果: 1.txt 2.txt 3.txt


	