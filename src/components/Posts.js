import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Posts = ({ posts }) => {
    debugger
    const renderPosts = posts.map( post => 
        <Card>
        <Card.Header>{ post.title }</Card.Header>
        <Card.Body>
            <Card.Title>{ post.summary }</Card.Title>
            <Card.Text>
                { post.body }
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    );
    return (
        <div>POSTS COMPONENT
            {renderPosts}
        </div>
    )
}

export default Posts;