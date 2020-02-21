
export const fetchPosts = () => {
debugger
  return async dispatch => {
    function onSuccess(posts) {

      dispatch({ type: 'FETCH_POSTS', posts });
      
      return posts;
    }

    function onError(error) {
      dispatch({ type: 'FETCH_ERROR_GENERATED', error });
      return error;
    }

    try {
      dispatch({ type: 'LOADING_POSTS' })

      const request = await fetch('http://localhost:3001/api/posts');
      const posts = await request.json();

      return onSuccess(posts);
    } catch (error) {
      return onError(error);
    }
  }

}

export const createPost = (post) => {
  return async dispatch => {
    function onSuccess(post) {
    
      dispatch({ type: 'CREATE_POST', post });

      return post;
    }

    function onError(error) {
      dispatch({ type: 'POST_ERROR_GENERATED', error });
      return error;
    }

    try {
      dispatch({ type: 'LOADING_POSTS' })

      const request = await fetch('http://localhost:3001/api/posts', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(post),
      });
      
      const posts = await request.json();

      return onSuccess(posts);
    } catch (error) {
      return onError(error);
    }

  }
}

export const submitComment = () => { 
}

export const deletePost = (postId) => {
    return async dispatch => {
      function onSuccess(updatedPosts) {
      
        dispatch({ type: 'DELETED_POST', updatedPosts });

        return updatedPosts;
      }
  
      function onError(error) {
        dispatch({ type: 'POST_ERROR_GENERATED', error });
        return error;
      }
  
      try {
        dispatch({ type: 'LOADING_POSTS' })

        const request = await fetch('http://localhost:3001/api/posts/'+ postId, {
          method: 'DELETE',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
              body: JSON.stringify({post_id: postId})
        });
        
        const posts = await request.json();

        return onSuccess(posts);
      } catch (error) {
        return onError(error);
      }
  
    }
}