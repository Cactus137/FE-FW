window.AddController = function ($scope, $http, $location) {
  $scope.title = "Add Product";

  // $scope.inputValue.name = ""
  // $scope.inputValue.price = ""
  const apiBrand = "http://localhost:3000/brands";
  $http.get(apiBrand).then(function (res) {
    $scope.brands = res.data;
  });

  const apiUrl = "http://localhost:3000/products";

  $scope.check = {
    name: false,
    price: false,
  };

  $scope.add = function () {
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
      const dataAdd = { ...$scope.inputValue };
      $http.post(apiUrl, dataAdd).then(function (res) {
        if (res.status == 201) {
          alert("Add Product successfully!");
          $location.path("/list");
        }
      });
    }
  };
};
