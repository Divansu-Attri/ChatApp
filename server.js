const io = require("socket.io")(8000,{
    cors:"http://127.0.0.1:5500/View/index.html"
})
const users = {}

io.on("connect",(socket)=>{
    
    socket.on("user-joined",(name)=>{
        users[socket.id] = name
        socket.broadcast.emit("new-user-joined",name)
        console.log(users)
    }) 

    socket.on("send",(message)=>{
        socket.broadcast.emit("receive",({name:users[socket.id],message}))
    })
    socket.on("disconnect",()=>{
        let name = users[socket.id]
        socket.broadcast.emit("user-left",name)
    })
})