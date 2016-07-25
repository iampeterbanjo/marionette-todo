var Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),

    Todo = Marionette.LayoutView.extend({
      tagName: 'li',
      template: require('./templates/todoitem.html')
    }),

    TodoList = Marionette.CompositeView.extend({
      el: '#app-hook',
      template: require('./templates/todolist.html'),

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

      onAddTodoItem: function() {
        this.collection.add({
          assignee: this.ui.assignee.val(),
          task: this.ui.task.val()
        });
      },

      itemAdded: function() {
        this.ui.assignee.val('');
        this.ui.task.val('');
      }
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