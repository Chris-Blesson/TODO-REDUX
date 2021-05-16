import React, { useState, useRef, useEffect } from 'react';
import './Form.styles.css';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addItem, filterTodo } from '../actions';
const Form = (props) => {
    const [currentText, setCurrentText] = useState("");
    const selectRef = useRef();
    const submitHandler = () => {
        props.addItem({ text: currentText, id: Math.random() * 10000, completed: false });
        setCurrentText("");
    }

    useEffect(() => {
        props.filterTodo(selectRef.current.value, props.todos)
    }, [props.todos])
    
    const filterHandler = (e) => {
        props.filterTodo(e.target.value, props.todos)
    }

    return (
        <div className="container mt-4">
            <h2>ADD LISTS</h2>
            <div className="d-flex list-section mt-4">
                <input value={currentText} onChange={(e) => setCurrentText(e.target.value)} type="text" className="form-control w-25" />
                <button type="submit" onClick={submitHandler} className="btn btn-primary ml-3 mb-2"> Submit </button>
                <select ref={selectRef} onChange={filterHandler} name="todos" className="filter-todo selectOption">
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
            </div>
            <div className="todo-item-section">
                {
                    props.filteredTodos.map((item) => {
                        return <TodoList key={`form-${item.id}`} todo={item} />

                    })
                }
            </div>

        </div>
    )

}

const mapStateToProps = (state) => {
    return { todos: state.todos, filteredTodos: state.reducedTodos }
}

export default connect(mapStateToProps, {
    addItem,
    filterTodo
})(Form)
