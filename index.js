 require("dotenv").config()
//dontenv.config()

const http=require("http")


function requestController(){
   

//logica de la función
console.log("Hola mundo")

}
//configurar nuestro servidor
const server = http.createServer(requestController)
const PORT =process.env.PORT
server.listen(PORT, function(){
    console.log("aplicacion corriendo en puerto "+PORT)
})

