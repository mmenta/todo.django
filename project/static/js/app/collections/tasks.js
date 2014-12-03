define(function(require, exports, module) {

var Backbone = require('backbone');
var Task = require('app/models/task').Task;

var Tasks = Backbone.Collection.extend({

    model: Task,

    url: '/api/v1/todo/',

    parse: function(data){
        return data.objects;
    },

    getCompleted: function() {
        return this.filter(this._isCompleted);
    },

    getActive: function() {
        return this.reject(this._isCompleted);
    },

    _isCompleted: function(todo) {
        return todo.isCompleted();
    },

    clearCompleted: function(completed) {
        completed.forEach(function destroy(todo) {
            todo.destroy();
        });
    }

});

exports.Tasks = Tasks;

});