import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Posts = ({ posts }) => {
    debugger
    const renderPosts = posts.map( post => 
       <div>
            <Card>
                <Card.Header>{ post.title }</Card.Header>
                <Card.Body>
                <Card.Title>{ post.summary }</Card.Title>
                <Card.Text>
                    { post.body }
                </Card.Text>
                <Button variant="dark" >
                    <NavLink to={`/posts/${post.id}`}>Go to Post</NavLink>
                </Button>
            </Card.Body>
            </Card>
            <br></br>
        </div>
    );

    return (
        <div>POSTS COMPONENT
            {renderPosts}
        </div>
    )
}

export default Posts;