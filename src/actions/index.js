export const addItem = (item) => {
    return {
        type: 'ADD_TODO',
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: 'REMOVE_TODO',
        payload: item
    }
}

export const toggleTodoStatus = (item) => {
    return {
        type: 'TOGGLE_TODO_STATUS',
        payload: item
    }
}

export const filterTodo = (filterType, todoList) => {
    return {
        type: filterType,
        payload: todoList

    }
}