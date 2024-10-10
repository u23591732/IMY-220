document.addEventListener("DOMContentLoaded", () => {
      
const socket = io('http://localhost:3000'); //possible to require host address



socket.on('updateCount', votes => {
  
  console.log(`Votes have been updated \n Pebble : ${votes[0].numVotes} Sunflower : ${votes[1].numVotes}  Miso: ${votes[2].numVotes}   Panko: ${votes[3].numVotes}  Snowball : ${votes[4].numVotes}`);
  

document.getElementById('pId').innerText = votes[0].numVotes;
document.getElementById('sId').innerText = votes[1].numVotes ;
document.getElementById('mId').innerText = votes[2].numVotes;
document.getElementById('paId').innerText = votes[3].numVotes;
document.getElementById('snId').innerText = votes[4].numVotes;
  
});

socket.on('connection', (socketID) => {

  
    console.log(`I connected with ID : ${socketID}`);

    let voteButt = document.getElementById('voteButt');

   voteButt.addEventListener('click',doVote);
    

  });

  socket.on('liveLog',(petName,iD) => 
   {
    let myHead = document.getElementById('myHead');

    
    myHead.textContent = `${iD} voted for the name : ${petName}`;

   });


  
  let voteButt = document.getElementById('voteButt');
  async function doVote()
    {
      
      let pebble = document.getElementById('pebble');
      let sun = document.getElementById('sun');
      let miso = document.getElementById('miso');
    let panko = document.getElementById('panko');
    let snowball = document.getElementById('snowball');


       if(pebble.checked == true) 
       {
          
          socket.emit('vote','Pebbles',socket.id);
          
       }
  
  
       if(sun.checked == true)
        {
          socket.emit('vote','Sunflower',socket.id);
        }
  
        if(miso.checked == true)
          {
            socket.emit('vote','Miso',socket.id);
          }
  
          if(panko.checked == true)
            {
              socket.emit('vote','Panko',socket.id);
            }
  
            if(snowball.checked == true)
              {
                socket.emit('vote','Snowball',socket.id);
              }
  
    }
 
  
  voteButt.addEventListener('click',doVote);

  
   

    console.log("DOM fully loaded and parsed");
 });


  