const {listFiles,createDirectory,ReadFileContent,WritetoFile} =require("./fileSystemModule")

listFiles(__dirname);

createDirectory("DUMMY2.txt");

ReadFileContent("reading.txt");


WritetoFile("data.txt","My name is Vansh");