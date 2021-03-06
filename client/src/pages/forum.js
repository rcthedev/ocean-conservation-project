import React, { useState, Component } from "react";
//import { FormGroup } from "react-bootstrap";
import API from "../utils/api";
import "./../App.scss";
//import axios from "axios";


class Event extends Component {
    constructor(props) {
        super(props);
        let today = new Date();
        this.state = {
            title: "",
            description: "",
            date: today,
            posts: []

        };
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    // onChangeDate(e) {
    //     this.setState({
    //         date:e.target.date
    //     });
    // }

    onSubmit(e) {
        //e.preventDefault();
        const post = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.today

        }
        this.setState(post);
        console.log(post)
        API.forumadd(this.state)
            .then(res => {
                this.getBlogPost();
                console.log(res.data);
                //check if login was successful, if user info comes back
                //if successful rout to to logedin state!!
                //pass hello user 
                //else throw err
            });


    }

    displayBlogPost = (posts) => {
        if (!posts.length) return null;

        //console.log(posts);
        posts.map(post => {
            console.log(post);

        })

    };
    componentDidMount = () => {
        this.getBlogPost();

    };

    getBlogPost = () => {
        API.forum('/Event')
            .then((response) => {
                this.displayBlogPost(response.data);
                //console.log(response);
                const data = response.data;
                //console.log(data);
                //e.preventDefault()
                this.setState({ posts: data });

                //   console.log('Event');

            })
            .catch(() => {
                console.log('error something happened');
                //
            });



    }
    render() {
        return (

            <div className="forum">
                <p className="forum__title">Community Message Board</p>

                <form onSubmit={this.onSubmit}>
                    <div className="form">
                       <p className="forum__title">Enter your Title</p>
                        <input className="form-control" type="text" placeholder="Title" name="event" require onChange={this.onChangeTitle} />
                        <div  className="form">
                            <p className="forum__title">What do you want to say?</p>
                            <input className="form-control" type="text" placeholder="Event" name="event" require onChange={this.onChangeDescription} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>

                        
                    </div>



                </form>
                <div>
                            {this.state.posts.map(post => {
                                return (
                                    <div className="post" id={post.id}>
                                        <h3 className="post__title">{post.title}</h3>
                                        
                                        <p className="post__body">{post.description} {post.date}</p>
                                        
                                    </div>
                                    
                                );
                            })}
                        </div>

                    );
               })}

            </div>

        );
    }
}

export default Event;