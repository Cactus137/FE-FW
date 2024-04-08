window.DetailController = function ($scope, $http, $location, $routeParams) {
  const apiUrl = `http://localhost:3000/flights/${$routeParams.id}`; 
 
  $scope.render = function () {
    $http.get(apiUrl).then(function (res) {
      $scope.inputValue = res.data; 
    }); 
  }; 
  $scope.render();
};
