var Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),

    FormView = Marionette.LayoutView.extend({
      tagName: 'form',
      template: require('../templates/form.html'),

      ui: {
        assignee: '#id_assignee',
        task: '#id_task'
      },

      triggers: {
        'submit @ui.form': 'add:todo:item'
      },

      modelEvents: {
        change: 'render'
      }
    });

module.exports = FormView;