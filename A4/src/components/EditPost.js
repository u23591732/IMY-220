import React from 'react'

export class EditPost extends React.Component{

    constructor(props)
    {
        super(props);
        this.edit = this.edit.bind(this);
        this.postTitle = React.createRef();
        this.postDescription = React.createRef();
        
    }

    edit(e)
    {
        e.preventDefault();
        let title = this.postTitle.current.value;
        let desc = this.postDescription.current.value;
        this.props.editUserPost(title,desc);
        this.props.show();
        
    }

    render()
    {
        return(

            <div>
                <label>Post Title : </label>
                <br/>
                <input type='text' ref={this.postTitle} style={{width:'150px',height : '20px'}} defaultValue={this.props.title}></input>
                <br/>
                <label>Post Description : </label>
                <br/>
                <textarea ref={this.postDescription}  rows="4" cols="30" defaultValue={this.props.desc}></textarea>
                <br/>
                <br/>
                <button onClick={this.edit}>Save</button>
            </div>


        )
    }
}