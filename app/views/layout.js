var Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),

    TodoModel = require('../models/todo'),

    Todo = Marionette.LayoutView.extend({
      tagName: 'li',
      template: require('../templates/todoitem.html')
    }),

    TodoList = Marionette.CompositeView.extend({
      el: '#app-hook',
      template: require('../templates/todolist.html'),

      childView: Todo,
      childViewContainer: 'ul',

      ui: {
        assignee: '#id_assignee',
        form: 'form',
        task: '#id_task'
      },

      triggers: {
        'submit @ui.form': 'add:todo:item'
      },

      collectionEvents: {
        add: 'itemAdded'
      },

      modelEvents: {
        change: 'render'
      },

      onAddTodoItem: function() {
        this.model.set({
          assignee: this.ui.assignee.val(),
          task: this.ui.task.val()
        }, {validate: true});

        var items = this.model.pick('assignee', 'task');
        this.collection.add(items);
      },

      itemAdded: function() {
        this.model.set({
          assignee: '',
          text: ''
        })
      }
    });

module.exports = TodoList;