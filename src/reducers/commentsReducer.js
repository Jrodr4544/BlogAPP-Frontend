export default (state = [], action) => {
    let idx;
    switch (action.type) {
        case "SET_COMMENTS":
        debugger
        console.log('SETTING COMMENTS')
        console.log(action)
            return action
        
        default:
            return state
    }
}