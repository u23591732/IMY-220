import React from 'react'
import { Link } from 'react-router-dom'
import { Posts } from './Posts';

export class Home extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <h1 style={{textAlign : 'center'}}>Hello Home Page!</h1>
                <br/>
                <br/>
                <Link to="/">Home</Link> &nbsp; &nbsp; &nbsp; <Link to="/posts">Posts</Link>
            </div>
        )
    }
}
