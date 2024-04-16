window.DetailController = function ($http, $scope, $location, $routeParams) {
  const AURL = `http://localhost:3000/products/${$routeParams.id}`;

  $scope.render = function () {
    $http.get(AURL).then((res) => {
      $scope.inputValue = res.data;
    });
  };

  $scope.render();
};
