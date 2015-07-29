angular.module('todoapp', ['firebase'])

function ToDoCtrl($scope, angularFire) {
    var fireData = new Firebase('https://blazing-inferno-9122.firebaseio.com/todo ');
    angularFire(fireData, $scope, 'todos')
    $scope.todos = [];
    //Add new todo
    $scope.addTodo = function () {
        var newTodo = {
            done: false,
            text: $scope.todoText
        };
        $scope.todos.push(newTodo);
        $scope.todoText = "";
    };
    //delete todo
    $scope.removeTodo = function (start) {
            $scope.todos.splice(start, 1);
        }
        //move down
    $scope.move = function (index, direction) {
        if (direction === 'up') {
            if (index === 0) {
                return;
            }
            index = index - 1;

        }
        if (direction === 'down') {
            if (index === $scope.todos.length - 1) {
                return;
            }
        }

        var todo = $scope.todos[index];
        $scope.todos.splice(index + 2, 0, todo);
        $scope.todos.splice(index, 1);
    }
}
