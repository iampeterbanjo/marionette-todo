var Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),
    Todo = Marionette.LayoutView.extend({
      tagName: 'li',
      template: require('./templates/todoitem.html')
    }),
    TodoList = Marionette.CollectionView.extend({
      el: '#app-hook',
      tagName: 'ul',
      childView: Todo
    }),
    todo = new TodoList({
      collection: new Backbone.Collection(
        [
          {assignee: 'Targaryen', task: 'Blood and Fire'},
          {assignee: 'Baratheon', task: 'Ours is the fury'}
        ]
      )
    });

todo.render();