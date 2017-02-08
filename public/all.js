(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var tasks = function tasks(state, action) {

    switch (action.type) {
        case 'ADD_TASK':
            var newTask = { name: action.data, id: +new Date() };
            return state.concat([newTask]);
        default:
            return state || [];
    }
};

var store = Redux.createStore(Redux.combineReducers({
    tasks: tasks
}));

store.subscribe(function () {
    console.log(store.getState());
});

var obj = {
    type: 'ADD_TASK',
    data: 'Task 1'
};

store.dispatch(obj);

var App = function App(props) {
    return React.createElement(
        'div',
        { className: 'app' },
        props.children
    );
};

var TaskList = React.createClass({
    displayName: 'TaskList',
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'TaskList'
            )
        );
    }
});

ReactDOM.render(React.createElement(
    App,
    null,
    React.createElement(TaskList, null)
), document.getElementById('root'));

},{}]},{},[1]);
