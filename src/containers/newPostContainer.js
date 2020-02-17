import React, { Component } from 'react';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

class NewPostContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            summary: '',
            body: ''
        }
    }

    handleInputChange = event => {
        // debugger
      this.setState({
        ...this.state,
        [event.target.id]: event.target.value
      })
    }
    
    handlePostSubmission = ( event ) => {
      event.preventDefault()
      debugger
      console.log("POST SUBMISSION")
      debugger
      this.props.createPost(this.state)
      this.setState({
        title: '',
        author: '',
        summary: '',
        body: ''
      })
      debugger
    }

    render() {
        return (
            <div>New Post Container
                <Form onSubmit={this.handlePostSubmission}>
                    <Form.Group controlId="title">
                        <Form.Label>Post Title</Form.Label>
                        <Form.Control value={this.state.title} onChange={this.handleInputChange} type="text" placeholder="Title" />
                    </Form.Group>
                    <Form.Group controlId="summary">
                        <Form.Label>Post Summary</Form.Label>
                        <Form.Control value={this.state.summary} onChange={this.handleInputChange} type="text" placeholder="Summary" />
                    </Form.Group>
                    <Form.Group controlId="author">
                        <Form.Label>Post Author</Form.Label>
                        <Form.Control value={this.state.author} onChange={this.handleInputChange} type="text" placeholder="Author" />
                    </Form.Group>
                    <Form.Group controlId="body">
                        <Form.Label>Post Body</Form.Label>
                        <Form.Control value={this.state.body} onChange={this.handleInputChange} as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="dark" type="submit" block>Submit Post</Button>
                </Form>
            </div>
        )
    } 
}


// Include with the action function below after it is imported.
export default connect(null, {createPost})(NewPostContainer);