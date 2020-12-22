angular.module('shcart', []).controller('myController',function ($scope) {
    $scope.count=0;
    $scope.add=function(){
        $scope.count++;
    };
});
