var myApp = angular.module('myApp', ["firebase"]);




myApp.controller("MyCtrl", ["$scope", '$firebaseObject', '$firebaseArray', '$firebase', function ($scope, $firebaseObject, $firebaseArray, $firebase) {
        // connect to firebase 
        var ref = new Firebase("https://blazing-inferno-9122.firebaseio.com/ttt");


        // download the data into a local object
        $scope.d = $firebaseArray(ref);


        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!



        $scope.data = [
            [{
                id: 0
    }, {
                id: 0
    }, {
                id: 0
    }],
            [{
                id: 0
    }, {
                id: 0
    }, {
                id: 0
    }],
            [{
                id: 0
    }, {
                id: 0
    }, {
                id: 0
    }]
           ];

        $scope.step = 0;




        $scope.move = function (col, row) {



            if ($scope.data[row][col].id == 0) {
                if ($scope.swtch == 1) {
                    $scope.data[row][col].id = 1;
                    $scope.swtch = 2;
                    $scope.step += 1;
                } else {
                    $scope.data[row][col].id = 2;
                    $scope.swtch = 1;
                    $scope.step += 1;
                }
            }

            console.log("__");
            console.log($scope.data[col][row].id);
            console.log("__");
            ref.child(row.toString()).child(col.toString()).update({
                id: $scope.data[row][col].id
            });

            if ($scope.step > 4) {
                $scope.checkWinner(col, row);
            }

        };

        $scope.checkWinner = function (col, row) {
            /*how? stoping if in first loop winner finded */
            console.log($scope.data[col][row].id);
            for (var i = 0; i < 3; i++) {
                if ($scope.data[i][0].id == $scope.data[i][1].id && $scope.data[i][1].id == $scope.data[i][2].id && $scope.data[i][1].id != 0) {
                    $scope.winner($scope.data[i][1].id);
                    console.log($scope.data[i][0].id);
                    console.log($scope.data[i][1].id);
                    console.log($scope.data[i][2].id);
                    console.log($scope.data[i][0].id == $scope.data[i][1].id);
                    console.log('loop1');
                }
            }

            for (var i = 0; i < 3; i++) {
                if ($scope.data[0][i].id == $scope.data[1][i].id && $scope.data[1][i].id == $scope.data[2][i].id && $scope.data[0][i].id != 0) {
                    $scope.winner($scope.data[1][i].id);
                    console.log('loop2');
                }
            }

            if ($scope.data[0][0].id == $scope.data[1][1].id && $scope.data[1][1].id == $scope.data[2][2].id && $scope.data[0][0].id != 0 && $scope.data[1][1].id != 0 && $scope.data[2][2].id != 0) {
                $scope.winner($scope.data[1][1].id);
                console.log('loop3');
            }

            if ($scope.data[0][2].id == $scope.data[1][1].id && $scope.data[1][1].id == $scope.data[2][0].id && $scope.data[0][2].id != 0 && $scope.data[1][1].id != 0 && $scope.data[2][0].id != 0) {
                $scope.winner($scope.data[1][1].id);
                console.log('loop4');
                console.log('0:2 ' + $scope.data[0][2].id);
                console.log('2:2 ' + $scope.data[2][2].id);
                console.log('1:1 ' + $scope.data[1][2].id);
            }

        }

        $scope.winner = function (id) {

            if (id == 1) {
                alert("Winner 1 p");
            }
            if (id == 2) {
                alert("Winner 2 p");
            }
        }
}
])
