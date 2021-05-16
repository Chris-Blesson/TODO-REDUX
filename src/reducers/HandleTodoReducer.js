export default (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'REMOVE_TODO':
            return state.filter((item) => item.id !== action.payload.id)
        case 'TOGGLE_TODO_STATUS':
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, completed: !(item.completed) }
                }
                else {
                    return item;
                }
            })
        default:
            return state;
    }
}