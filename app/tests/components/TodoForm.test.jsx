var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoForm = require('TodoForm')

describe('TodoForm', () => {
  it('should exist', () => {
    expect(TodoForm).toExist();
  });

  it('should call onHandleAddTodo if text valid is entered', () => {
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onHandleAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoText.value = 'Roll out of bed';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Roll out of bed');

  });

  it('should not be call onHandleAddTodo if invalid text is entered', () => {
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onHandleAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoText.value = ' ';
    TestUtils.Simulate.submit($el.find('form')[0]);

    todoForm.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });

});
