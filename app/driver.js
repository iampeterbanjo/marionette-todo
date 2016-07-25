var Marionette = require('backbone.marionette'),
    TodoView = require('./views/layout.js'),

    initialData = [
      {assignee: 'Peter', task: 'Get the milk'},
      {assignee: 'Maggie', task: 'Watch Netflix'}
    ],

    app = new Marionette.Application({
      onStart: function(options) {
        var todo = new TodoView({
          collection: new Backbone.Collection(options.initialData),
          model: new TodoModel()
        });

        todo.render();
        todo.triggerMethod('show');
      }
    });

app.start({initialData: initialData});