export default (state = [], action) => {
    switch (action.type) {
        case 'All':
            return [...action.payload]
        case 'Completed':
            return action.payload.filter((item) => (item.completed))
        case 'Incomplete':
            return action.payload.filter((item) => !(item.completed))
        default:
            return state;
    }
}