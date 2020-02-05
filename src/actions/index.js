// define actions below
// one for fetching posts
// one for creating posts
// one for submitting comments
export const fetchPosts = () => {
debugger
  return async dispatch => {
    function onSuccess(posts) {
    //   let comments = {};

    //   assign comments to post unless they are nested.
    //   debugger
      dispatch({ type: 'FETCH_POSTS', posts });
    //   dispatch({ type: 'SET_COMMENTS', comments })
    //    debugger 
      return posts;
    }

    function onError(error) {
      dispatch({ type: 'FETCH_ERROR_GENERATED', error });
      return error;
    }

    try {
      dispatch({ type: 'LOADING_POSTS' })
        debugger
    //   const request = await fetch('/api/posts');
      const request = await fetch('http://localhost:3001/api/posts');
      const posts = await request.json();

      return onSuccess(posts);
    } catch (error) {
      return onError(error);
    }
  }

}

export const createPost = () => {

}

export const submitComment = () => {

}