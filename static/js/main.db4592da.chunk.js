(this["webpackJsonpredux-todo"]=this["webpackJsonpredux-todo"]||[]).push([[0],{17:function(t,e,o){},19:function(t,e,o){},20:function(t,e,o){},27:function(t,e,o){"use strict";o.r(e);var n=o(0),c=o.n(n),d=o(5),r=o.n(d),a=(o(17),o(1)),i=function(t){var e=t.title;return Object(a.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(a.jsx)("h4",{className:"app-heading mt-2",children:e})})},l=o(12),s=(o(19),o(20),o(2)),u=Object(s.b)((function(t){return{todos:t.todos}}),{removeItem:function(t){return{type:"REMOVE_TODO",payload:t}},toggleTodoStatus:function(t){return{type:"TOGGLE_TODO_STATUS",payload:t}}})((function(t){return Object(a.jsx)("div",{className:"todo-item mt-2 mb-2",children:Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("span",{className:"".concat(t.todo.completed?"completed":""," "),children:t.todo.text},"spn-".concat(t.todo.id)),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)("button",{type:"button",onClick:function(){return t.toggleTodoStatus(t.todo)},className:"btn btn-info button-align mr-5",children:"Completed"},"toggle-".concat(t.todo.id)),Object(a.jsx)("button",{type:"button",onClick:function(){return t.removeItem(t.todo)},className:"btn btn-danger button-align",children:"Delete"},"del-".concat(t.todo.id))]},"wrapper-".concat(t.todo.id))]},t.todo.id)},"item-".concat(t.todo.id))})),b=Object(s.b)((function(t){return{todos:t.todos,filteredTodos:t.reducedTodos}}),{addItem:function(t){return{type:"ADD_TODO",payload:t}},filterTodo:function(t,e){return{type:t,payload:e}}})((function(t){var e=Object(n.useState)(""),o=Object(l.a)(e,2),c=o[0],d=o[1],r=Object(n.useRef)();Object(n.useEffect)((function(){t.filterTodo(r.current.value,t.todos)}),[t.todos]);return Object(a.jsxs)("div",{className:"container mt-4",children:[Object(a.jsx)("h2",{children:"ADD LISTS"}),Object(a.jsxs)("div",{className:"d-flex list-section mt-4",children:[Object(a.jsx)("input",{value:c,onChange:function(t){return d(t.target.value)},type:"text",className:"form-control w-25"}),Object(a.jsx)("button",{type:"submit",onClick:function(){t.addItem({text:c,id:1e4*Math.random(),completed:!1}),d("")},className:"btn btn-primary ml-3 mb-2",children:" Submit "}),Object(a.jsxs)("select",{ref:r,onChange:function(e){t.filterTodo(e.target.value,t.todos)},name:"todos",className:"filter-todo selectOption",children:[Object(a.jsx)("option",{value:"All",children:"All"}),Object(a.jsx)("option",{value:"Completed",children:"Completed"}),Object(a.jsx)("option",{value:"Incomplete",children:"Incomplete"})]})]}),Object(a.jsx)("div",{className:"todo-item-section",children:t.filteredTodos.map((function(t){return Object(a.jsx)(u,{todo:t},"form-".concat(t.id))}))})]})})),j=o(7),m=o(3),p=o(8),O=Object(j.a)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return[].concat(Object(p.a)(t),[e.payload]);case"REMOVE_TODO":return t.filter((function(t){return t.id!==e.payload.id}));case"TOGGLE_TODO_STATUS":return t.map((function(t){return t.id===e.payload.id?Object(m.a)(Object(m.a)({},t),{},{completed:!t.completed}):t}));default:return t}},reducedTodos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"All":return Object(p.a)(e.payload);case"Completed":return e.payload.filter((function(t){return t.completed}));case"Incomplete":return e.payload.filter((function(t){return!t.completed}));default:return t}}});r.a.render(Object(a.jsxs)(c.a.StrictMode,{children:[Object(a.jsx)(i,{title:"TODO-REDUX"}),Object(a.jsx)(s.a,{store:Object(j.b)(O),children:Object(a.jsx)(b,{})})]}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.db4592da.chunk.js.map