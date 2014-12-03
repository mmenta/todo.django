define(function(require, exports, module) {

var Backbone = require('backbone');

var Task = Backbone.Model.extend({

    defaults : {
        title : null,
        completed: false
    },

    isCompleted: function() {
        return this.get('completed');
    },

    _setCompleted: function(completed) {
        this.save({ completed: completed });
    },

    toggleCompleted: function(isChecked) {
        if(isChecked) {
            this._setCompleted(true);
        } else {
            this._setCompleted(false);
        }
    }

});

exports.Task = Task;

});