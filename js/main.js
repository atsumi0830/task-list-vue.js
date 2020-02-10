(function() {
   'use strict';

   var vm = new Vue({
      el: '#app',
      data: {
          newItem: '',
          todos: [{
              title: 'task 1',
              isDone: false
          }, {
              title: 'task 2',
              isDone: false
          }, {
              title: 'task 3',
              isDone: true
          }],
      },
      watch: {
          todos: {
              handler: function () {
                  localStorage.setItem('todos', JSON.stringify(this.todos));
              },
              deep: true
          }
      },
      methods: {
          addItem: function () {
              var item = {
                title: this.newItem,
                isDone: false
              };
              this.todos.push(item);
              this.newItem = '';
          },
          deleteItem: function (index) {
              if(confirm('削除しますが、よろしいですか？')) {
                  this.todos.splice(index, 1);
              }
          },
          butchDelete: function () {
              if(!confirm('完了済のタスクを削除しても良いですか？')) {
                  return;
              }
              this.todos = this.remaining;
          }
      },
       computed: {
          remaining: function() {
              return this.todos.filter(function (todo) {
                  return !todo.isDone;
              });
          }
       }

   });
})();