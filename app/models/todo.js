var Backbone = require('backbone'),

    ToDo = Backbone.Model.extend({
      defaults: {
        assignee: '',
        task: ''
      },

      validate: function(attrs) {
        var errors = {},
            hasError = false;

        if(!attrs.assignee) {
          errors.assignee = 'assignee must be set';
          hasError = true;
        }

        if(!attrs.task) {
          errors.task = 'task must be set';
          hasError = true;
        }

        if(hasError) {
          return errors;
        }
      }
    });


module.exports = ToDo;

