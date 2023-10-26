const http=require("http")
const exportsFromAnother = require("./another")//accediendo
console.log({exportsFromAnother})
function requestController(){

    const companies =[
        {name: "carlos", isOnline: true},
        {name: "Spa Relax", isOnline: false}
    ]
   

//logica de la función
console.log("recibimos una nueva request")

}
//configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)

