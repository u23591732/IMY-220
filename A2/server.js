//Position 3 u23591732
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const poll = require('./poll');

const io = new Server(server, { cors: { origin: "http://localhost:3000" }});

pets = [
    {name:"Pebbles",numVotes:0},
    {name:"Sunflower",numVotes:0},
    {name:"Miso",numVotes:0},
    {name:"Panko",numVotes:0},
    {name:"Snowball",numVotes:0}
    
];
   petPoll = new poll(pets);




server.listen(3000, () => {
    

    console.log('Listening on http://localhost:3000');
});




app.get('/',(req,res) =>
    {
        const filePath = path.join(__dirname,'./index.html');
        
        res.sendFile(filePath,(err) => { //,ethod display file 
            if(err)
            {
                console.log("Error serving file");
                res.status(500).send(err);
            }        
        })
    })




//server is going to make a request to index.js bevasue it is a listed client
app.get('/index.js', (req, res) => {
    const filePath = path.join(__dirname,'./index.js');
    res.setHeader('Content-Type','application/javascript');
    res.sendFile(filePath);
});


app.use(express.static(__dirname));

io.on('connection', (socket) => { //socket - parameter that makes the connection

    //on the connection of  a  client, execute the following emits

    //emit an event named updateCount which will also pass along the number of votes as an argument
    socket.emit('updateCount', petPoll.getVotes());

    
    socket.emit('connection',(socket.id));

    

  console.log(`A user connected with ID : ${socket.id}`);



  socket.on('vote', (name,iD) => {
    if(name == "Pebbles")
    {
        petPoll.vote('Pebbles');
        console.log(`${iD} voted : Pebbles`);
        
        
        
    }


    if(name == "Sunflower")
        {
                    petPoll.vote('Sunflower');
                    
                    console.log(`${iD} voted : Sunflower`);
        }


    if(name == "Miso")
    {
        petPoll.vote('Miso');
            
            console.log(`${iD} voted : Miso`);
            
    }

  
            
    if(name == "Panko")
                
    {
                    petPoll.vote('Panko');
                    console.log(`${iD} voted : Panko`);
                   
    }
                
    if(name == "Snowball")
    {
                        petPoll.vote('Snowball');
                        console.log(`${iD} voted : Snowball`);
                        
    }

   
    io.emit('updateCount',petPoll.getVotes()); 
    io.emit('liveLog', name,iD);
  });


  socket.on('disconnect',() => {
    console.log(`A user disconnected`);
  })

});


