window.ListController = function ($http, $scope, $location, $routeParams) {
    $scope.render = function () {
        $http.get("http://localhost:3000/customers").then(res => {
            $scope.customers = res.data;
        })
    }
    $scope.render();
}