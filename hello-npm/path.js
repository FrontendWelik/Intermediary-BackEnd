import { basename, dirname } from "path";

let nomeArquivo = basename('./teste.txt');
let filename = basename('/teste/something');

let dir = dirname('/teste/something');
let diretorio = dirname('/test/something/file.txt');

console.log('Nome do arquivo '+ nomeArquivo);
console.log('filename = '+ filename);
console.log('dir = '+ dir);
console.log('diretorio =  '+ diretorio);