import React from 'react'
import { Post } from '../components/Post';
import { EditPost } from '../components/EditPost';
import { Link } from 'react-router-dom';

export class Posts extends React.Component{

    constructor(props)
    {
        super(props);
        this.postsArr = [
            {
            title: "Growing Your First Vegetable Garden",
            author: "Emma Stone",
            description:
            "A beginner's guide to planting and harvesting your own vegetables.",
            },
            {
            title: "Indoor Plant Care Tips",
            author: "James Miller",
            description: "How to keep your indoor plants thriving with minimal effort.",
            },
            {
            title: "Composting for Beginners",
            author: "Sarah Brown",
            description: "Learn how to create nutrient-rich compost for your garden.",
            },
            {
            title: "Creating a Pollinator-Friendly Garden",
            author: "Michael Green",
            description:
            "Tips on attracting bees, butterflies, and other pollinators to your garden.",
            },
            {
            title: "Seasonal Flower Gardening",
            author: "Linda Johnson",
            description:
            "A guide to planting flowers that bloom beautifully throughout the year.",
            },
            ];
       
    }

   
    render()
    {
        return(
            <div>
                
                <h1 style={{textAlign : 'center'}}>Hello Posts Page!</h1>
                
                <br/>
                <br/>
                <Link to="/">Home</Link> &nbsp; &nbsp; &nbsp; <Link to="/posts">Posts</Link>
                <br/>
                <br/>
                <ul style={{listStyleType:'none'}}>

                        {this.postsArr.map((post,i) =>
                        (
                            <li key= {i} ><Post key= {i} myKey= {i} author={post.author} title={post.title} description={post.description} /></li>
                        ))}
                     
                    
                </ul>
                


            </div>
        )
    }
}