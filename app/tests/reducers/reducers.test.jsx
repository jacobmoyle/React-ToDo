var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var response = reducers.searchTextReducer(df(''), df(action));

      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should update showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var response = reducers.showCompletedReducer(df(false), df(action));

      expect(response).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'New text'
      };
      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var todos = [{
          id: 1,
          text: 'hello from todo',
          completed: true,
          completedAt: 123,
          createdAt: 125
        }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var response = reducers.todosReducer(df(todos), df(action));

      expect(response[0].completed).toBe(false);
      expect(response[0].completedAt).toNotExist();
    });

    it('should add existing todos', () => {
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
      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(todos[0])
    });
  });
});
