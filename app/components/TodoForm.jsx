var React = require('react');

var TodoForm = React.createClass({
  propTypes: {
    onHandleAddTodo: React.PropTypes.func.isRequired
  },
  onSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value.trim();

    if (todoText.length > 0) {
      this.props.onHandleAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="Add todo" />
          <button type="submit" className="button">Add</button>
        </form>
      </div>
    )
  }
});

module.exports = TodoForm;
