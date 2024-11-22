import React from 'react';
import {SongList} from './SongList';
import {ShortList} from './ShortList';




export class Home extends React.Component{
    constructor(props)
{
    super(props);
    this.state = {feedNow: 'song'};
    this.showFeed = this.showFeed.bind(this);
}

showFeed(view)
{
this.setState({feedNow : view});

var playHead = document.getElementById('play');
var songHead = document.getElementById('song');

if(view == 'song')
{
    playHead.style.color = "#2B5451";
    songHead.style.color = "white";

}
else if(view == 'play')
    {
        songHead.style.color = "#2B5451";
        playHead.style.color = "white";
    
    }


    
}

    render()
    {
        const { feedNow } = this.state;
        {
            
 
        
        }
        return(

            
            <div style={{backgroundColor:'#3F6751',padding:'25px'}}>
                <button onClick={() => this.showFeed('song')} style={{background:'none',border:'none'}} ><h1 id='song' style={{color:'white'}}>Song Feed</h1></button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                 <button onClick={() =>  this.showFeed('play')} style={{background:'none',border:'none'}}> <h1 id='play'  style={{color:'#2B5451'}}>Playlist Feed</h1></button>
                <br/>
                <br/>
                
                <br/>
                <br/>
                
                <div id='feed' style={{width:'800px'}}>
                  {feedNow === 'song' && <SongList userId= {this.props.userId}/>}
                  {feedNow === 'play' && <div style={{textAlign : 'center'}}><ShortList userId= {this.props.userId}/></div>}
                   
                </div>
                
            </div>

           
        )
        
    }
}