import React from 'react';
import './TodoList.styles.css';
import { removeItem, toggleTodoStatus } from '../actions/index';
import { connect } from 'react-redux';
const TodoList = (props) => {

    return (
        <div className="todo-item mt-2 mb-2" key={`item-${props.todo.id}`}>
            <li className="list-group-item" key={props.todo.id}>
                <span
                    className={`${props.todo.completed ? 'completed' : ''} `}
                    key={`spn-${props.todo.id}`}>{props.todo.text}
                </span>
                <div className="wrapper" key={`wrapper-${props.todo.id}`}>
                    <button type="button"
                        onClick={() => props.toggleTodoStatus(props.todo)}
                        key={`toggle-${props.todo.id}`} className="btn btn-info button-align mr-5">
                        Completed
                    </button>
                    <button
                        type="button"
                        onClick={() => props.removeItem(props.todo)}
                        key={`del-${props.todo.id}`}
                        className="btn btn-danger button-align">
                        Delete
                    </button>
                </div>
            </li>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { todos: state.todos }
}
export default connect(mapStateToProps, {
    removeItem,
    toggleTodoStatus
})(TodoList);