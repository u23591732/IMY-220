import React from 'react'
import { EditPost } from './EditPost';
export class Post extends React.Component{

    constructor(props)
    {
        super(props);
        this.showHide = this.showHide.bind(this);
        this.state = {show : true,title : this.props.title,desc : this.props.description};
        this.update = this.update.bind(this);
        
    }

    showHide()
    {
        console.log("innit");
        this.setState({show : !this.state.show});
        let el = document.getElementById(this.props.myKey);
        if(this.state.show == true)
        {
            el.style.display = 'block';
            console.log(`Showing Edit form for : ${this.state.title} with the description : ${this.state.desc}`);
        }
        else{

            el.style.display = 'none';
        }
    }

    update(title,desc)
    {
        this.setState({title : title, desc : desc});
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.title}</h1>
                <br/>
                <h3>{this.props.author}</h3>
                <br/>
                <hr className="solid"/>
                <br/>
                <h3>{this.state.desc}</h3>
                <br/>
                <br/>
                <button onClick={this.showHide}>Edit Post</button>
               
                <div id={this.props.myKey} style={{display:'none',textAlign:'center'}}>
                    <EditPost title={this.state.title} desc={this.state.desc} editUserPost={this.update} show={this.showHide}/>
                </div>


            </div>
        )
    }
}