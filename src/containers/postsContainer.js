import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'
import Posts from '../components/Posts'

class PostsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
           posts: []
        }
    }

    componentDidMount() {
        // fetch posts here and set state
        console.log('PostsContainer class component mounted')

        this.props.fetchPosts().then(posts => {
            console.log(posts)
            console.log('Posts Fetched. Setting State')

            this.setState({
                posts: posts
            })
        })
    }

    render() {
        debugger
        console.log(this.props)
        const {match} = this.props;

        return (
            <div>
                {/* Posts Page Container */}
                {/* will need a component for postInput in order to create blogs */}
                {/* will need a posts component to display the posts */}
                POSTS PAGE CONTAINER
                <Posts posts={this.state.posts}/>
            </div>
        )
    }


}

const mapStateToProps = state => {
    // debugger
    return {
        posts: state.posts.posts 
    }
}
// Include with the action function below after it is imported.
export default connect(mapStateToProps, {fetchPosts})(PostsContainer);