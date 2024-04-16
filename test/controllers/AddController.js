window.AddController = function ($http, $location, $scope) {
  const AURL = "http://localhost:3000/products";

  $scope.check = {
    id: false,
    name: false,
    brand: false,
    price: false,
  };

  $scope.add = function () {
    let flag = false;

    if (!$scope.inputValue || !$scope.inputValue.id) {
      $scope.check.id = true;
    } else {
      $scope.check.id = false;
    }
    if (!$scope.inputValue || !$scope.inputValue.name) {
      $scope.check.name = true;
    } else {
      $scope.check.name = false;
    }
    if (!$scope.inputValue || !$scope.inputValue.brand) {
      $scope.check.brand = true;
    } else {
      $scope.check.brand = false;
    }
    if (
      !$scope.inputValue ||
      !$scope.inputValue.price ||
      isNaN($scope.inputValue.price || $scope.inputValue.price < 300)
    ) {
      $scope.check.price = true;
    } else {
      $scope.check.price = false;
    }

    for (const key in $scope.check) {
      if ($scope.check[key] == true) {
        flag = true;
      }
    }

    if (flag == false) {
      const dataAdd = { ...$scope.inputValue };
      $http.post(AURL, dataAdd).then((res) => {
        if ((res.status = 201)) {
            alert('Them dien thoai thanh cong')
            $location.path('/list-phone')
        }
      });
    }
  };
}; 