window.ListController = function ($scope, $http, $location) {
  $scope.title = "List Product";
  const apiUrl = "http://localhost:3000/products";
  $scope.render = function () {
    $http.get(apiUrl).then(function (res) {
      $scope.products = res.data;
    });
  };
  
  $scope.delete = function (id) {
      $http.delete(`${apiUrl}/${id}`).then((res) => {
          alert("Delete Product successfully!");
          $location.path('/list')
        });
    };
    $scope.render();
};
