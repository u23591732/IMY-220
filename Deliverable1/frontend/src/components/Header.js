import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component{

    constructor(props)
    {
        super(props);

    }
    render()
    {
        return(
            <div style={{backgroundColor:'#24392F', overflow: 'hidden',padding: '20px 10px', display: 'flex',alignItems: 'center',justifyContent: 'start',gap: '30px'}} >

                <img style={{height:'50px',width : '100px',paddingRight:'30px',borderStyle:'none'}} src='./assets/images/loop.png'></img>
                <Link to="/"><img style={{height:'40px',width : '100px',paddingRight:'30px',borderStyle:'none'}} src='./assets/images/s.png'></img></Link> &nbsp; &nbsp; &nbsp; 
                <Link to="/profile"><img style={{height:'40px',width : '100px',paddingRight:'30px',borderStyle:'none'}} src='./assets/images/p.png'></img></Link>
                <Link to="/search"><img style={{height:'40px',width : '100px',paddingRight:'30px',borderStyle:'none'}} src='./assets/images/h.png'></img></Link>
                <Link to="/logout"><img style={{height:'40px',width : '100px',paddingRight:'30px',borderStyle:'none'}} src='./assets/images/l.png'></img></Link>

                
            </div>
        )
    }
}