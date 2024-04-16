window.DetailController = function ($http, $location, $scope, $routeParams) {
  const apiUrl = `http://localhost:3000/foods/${$routeParams.id}`;

  $scope.render = function () {
    $http.get(apiUrl).then((res) => {
      $scope.inputValue = res.data;
    });
  };

  $scope.render();
};
