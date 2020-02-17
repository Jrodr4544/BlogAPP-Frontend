import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { deletePost } from '../actions/index'

class PostShowContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleDelete = ( event ) => {
       debugger
       event.preventDefault()
       let postId = event.target.id
       this.props.deletePost(postId)
    }

    render() {
        debugger
        const { post } = this.props
        console.log(this.props)

        return(
            <div>POSTSHOWCONTAINER
                <Card bg="dark" text="white">
                <Card.Header>{ post.title }</Card.Header>
                    <Card.Body>
                    <Card.Title>{ post.summary }</Card.Title>
                        <Card.Text>
                            { post.body }
                        </Card.Text>
                        <footer className="blockquote-footer">
                            By: { post.author }
                        </footer>
                    </Card.Body>

                    <Button id={ post.id } variant="dark" type="button" onClick={ this.handleDelete } block>Delete</Button>
                    {/* <Button></Button> */}
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    debugger
    console.log(ownProps)
    let post = state.posts.posts.filter(post => post.id === parseInt(ownProps.match.match.params.postId))[0]

    return {
        post
    }
}

export default connect(mapStateToProps, { deletePost })(PostShowContainer);