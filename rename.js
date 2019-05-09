const http = require('http');
const fs = require('file-system');

try{
	//fs.rename('./a.txt','rename.txt');
	fs.unlink('./a.txt');
	console.log("File is renamed");
}
catch(err){
	if(err){
		console.log("File not found r can't be renamed");
	}
}