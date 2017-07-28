var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {

  it('should generate search text action', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
      };
      var result = actions.setSearchText(action.searchText);

      expect(result).toEqual(action);
  });

  it('should generate addTodo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Some text'
    };
    var result = actions.addTodo(action.text);

    expect(result).toEqual(action);
  });

  it('should generate addTodos action object', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 9002
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var result = actions.addTodos(action.todos);

    expect(result).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var result = actions.toggleShowCompleted();

    expect(result).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 9001
    };
    var result = actions.toggleTodo(action.id);

    expect(result).toEqual(action);
  });
});
