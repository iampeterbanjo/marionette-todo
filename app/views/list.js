var Marionette = require('backbone.marionette'),

    Todo = Marionette.LayoutView.extend({
      tagName: 'li',
      template: require('../templates/todoitem.html')
    }),

    TodoList = Marionette.CollectionViem.extend({
      tagName: 'ul',
      childView: Todo
    });

module.exports = TodoList;