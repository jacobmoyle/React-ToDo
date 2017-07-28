var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoForm = React.createClass({
  propTypes: {
    onHandleAddTodo: React.PropTypes.func.isRequired
  },
  onSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value.trim();

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
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

export default connect()(TodoForm);
