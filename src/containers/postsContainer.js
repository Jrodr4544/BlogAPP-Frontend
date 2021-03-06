import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'
import Posts from '../components/Posts'
import { Route, Switch } from 'react-router-dom';
import PostShowContainer from './postShowContainer';

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
        const {match, posts} = this.props;

        return (
            <div>
                {/* Posts Page Container */}
                POSTS PAGE CONTAINER
                <Switch>
                    <Route exact path={`${match.url}/:postId`} render={(match) => <PostShowContainer match={match} />} />
                    <Route path={match.url} render={() => (
                        <h3>Select a post from the list.</h3>
                    )} />
                </Switch>
                <Posts posts={posts}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    debugger
    return {
        posts: state.posts.posts 
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsContainer);