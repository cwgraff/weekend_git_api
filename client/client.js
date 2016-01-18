/**
 * Created by cwgraff on 1/17/16.
 */

//console.log('client JS has safely arrived!');
var userName = 'cwgraff';
var app = angular.module('gitApp', []);
app.controller('gitController', ['$scope', '$http', 'GitData', function($scope, $http, GitData){
    //$scope.test = 'Angular seems to be working....for now!';
    $scope.data = GitData.data;
    $scope.user = userName;
    GitData.aquireData();

} ]);

app.factory('GitData', ['$http', function($http){

    var data = {};

    var aquireData = function(){
        $http.jsonp('https://api.github.com/users/' + userName + '/events?callback=JSON_CALLBACK').then(function(response){
            data.data = response.data.data;
            console.log(data);
        })
    };

    return {
        aquireData: aquireData,
        data: data
    }
}]);