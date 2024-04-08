window.ListController = function ($scope, $location, $http) {
  const apiUrl = "http://localhost:3000/products";

  $scope.render = function () {
    $http.get(apiUrl).then((res) => {
      $scope.products = res.data;
    });
  };

  $scope.render();
};
