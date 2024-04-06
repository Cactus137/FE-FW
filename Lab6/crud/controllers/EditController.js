window.EditController = function ($scope, $routeParams, $http, $location) {
  $scope.title = "Edit Product";
  const apiProduct = `http://localhost:3000/products/${$routeParams.id}`;

  $scope.render = function () {
    $http.get(apiProduct).then(function (res) {
      $scope.inputValue = res.data
    });
  };

  $scope.render();

  $scope.check = {
    name: false,
    price: false,
  };

  $scope.edit = function () {
    let flag = false;
    if (!$scope.inputValue || !$scope.inputValue.name) {
      $scope.check.name = true;
      flag = true;
    } else {
      $scope.check.name = false;
      flag = false;
    }
    if (!$scope.inputValue || !$scope.inputValue.price) {
      $scope.check.price = true;
      flag = true;
    } else {
      $scope.check.price = false;
      flag = false;
    }

    if (flag == false) {
      const dataEdit = { ...$scope.inputValue };
      $http.put(apiProduct, dataEdit).then(function (res) {
        if (res.status == 200) {
          alert("Edit Product successfully!");
          $location.path("/list");
        }
      });
    }
  };
};
