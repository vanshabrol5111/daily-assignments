const {listFiles,createDirectory,ReadFileContent,WritetoFile} =require("./fileSystemModule")

listFiles(__dirname);

createDirectory("DUMMY.txt");

ReadFileContent("reading.txt");


WritetoFile("data.txt","My name is Vansh");