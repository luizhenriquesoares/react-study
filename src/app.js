const tasks = (state, action) => {
    
    switch (action.type) {
        case 'ADD_TASK':
            let newTask = {name: action.data, id: +new Date};
            return state.concat([newTask]);
        default:
            return state || [];
    }
};

const store = Redux.createStore(Redux.combineReducers({
    tasks
}));


store.subscribe(() => {
    console.log(store.getState());
});

var obj = {
    type: 'ADD_TASK',
    data: 'Task 1'
}

store.dispatch(obj);

const App = (props) => {
    return (
        <div className="app">{props.children}</div>
    );
}

const TaskList = React.createClass({
    render() {
        return (<div><h1>TaskList</h1></div>);
    }
});


ReactDOM.render((<App><TaskList /></App>), document.getElementById('root'));