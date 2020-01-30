import React, { Component } from 'react';
import { connect } from 'react-redux';



class PostsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    componentDidMount() {
        // fetch posts here and set state
        console.log('PostsContainer class component mounted')
    }

    render() {
        const {match} = this.props;

        return (
            <div>
                {/* Posts Page Container */}
                POSTS PAGE CONTAINER
            </div>
        )
    }


}

const mapStateToProps = state => {
    debugger
    return {
        posts: null
    }
}
// Include with the action function below after it is imported.
export default connect(mapStateToProps)(PostsContainer);