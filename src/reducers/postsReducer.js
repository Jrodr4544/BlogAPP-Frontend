export default (state = [], action) => {
    let idx;
    switch (action.type) {
        case "SET_POSTS":
        debugger
        console.log('SETTING POSTS')
        console.log(action)
            return action
        
        default:
            return state
    }
}