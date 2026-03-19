import { createServer } from 'http';

createServer(function(req,res){
   
        res.write("hello world welik carlos ");
        return res.end();

}

).listen(8080);