import React, { Component } from 'react'
import axios from 'axios';
 class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             error: ''
        }
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({posts:response.data});
                console.log(response);
        })
        .catch(error => {
            this.setState({error:'URL ERROR'})
            console.log(error);
        })
    }


    render() {
        const {posts,error}=this.state
        return (
            <div>
               List post data 
               {
                   posts.length ?
                   posts.map(post => <div key={post.id}>{post.body}</div>):null
               }
               {
                   error ? <div> {error} </div>:null
               }
            </div>
        )
    }
}

export default PostList

