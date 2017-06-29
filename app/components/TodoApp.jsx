var React = require('react');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Scoop poop'
        },
        {
          id: 3,
          text: 'Feed myself'
        },
        {
          id: 4,
          text: 'Shred cheese'
        }
      ]
    }
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <TodoForm onHandleAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
