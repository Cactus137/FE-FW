window.DetailController = function ($scope, $location, $http, $routeParams) {
  const apiProduct = `http://localhost:3000/products/${$routeParams.id}`;

  $scope.render = function () {
    $http.get(apiProduct).then((res) => {
      $scope.inputValue = res.data;
    });
  };

  $scope.render();
};
