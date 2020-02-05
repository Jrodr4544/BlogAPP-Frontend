export default (state = { loading: false, posts: [] }, action) => {
    let idx;
    switch (action.type) {
        case "SET_POSTS":
        debugger
        console.log('SETTING POSTS')
        console.log(action)
            return action
        
        case "LOADING_POSTS":
        debugger
        console.log("LOADING POSTS")
        console.log(action)
            return { ...state, loading: true }

        case "FETCH_POSTS":
        // debugger
        console.log('FETCHING_POSTS')
        console.log(action)
        console.log('POSTS FETCHED')
            return { ...state, posts: action.posts }
        
        case "FETCH_ERROR_GENERATED":
        debugger
        console.log('FETCH_ERROR_GENERATED')
        console.log(action)
            return { ...state, loading: action } 

        default:
            return state
    }
}