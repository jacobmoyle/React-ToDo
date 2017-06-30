var React = require('react');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');
var TodoSearch = require('TodoSearch')
var uuid = require('node-uuid')

// Yo bro. I hear you like heavily coupled god objects.
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Scoop poop',
          completed: true
        },
        {
          id: uuid(),
          text: 'Feed myself',
          completed: true
        },
        {
          id: uuid(),
          text: 'Shred cheese',
          completed: false
        }
      ]
    }
  },
  handleToggle: function (id) {
    // lolwut
    var updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updateTodos})
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <TodoForm onHandleAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
