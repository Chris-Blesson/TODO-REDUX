import { combineReducers } from 'redux';

import HandleTodoReducer from './HandleTodoReducer';
import filteredTodos from './FilterReducers';

export default combineReducers({
    todos: HandleTodoReducer,
    reducedTodos: filteredTodos
})