const http=require("http")


function requestController(){

    
   

//logica de la función
console.log("Hola mundo||||||||||")

}
//configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)

