window.EditController = function ($http, $location, $scope, $routeParams) {
  const AURL = `http://localhost:3000/products/${$routeParams.id}`;

  $scope.render = function () {
    $http.get(AURL).then((res) => {
      $scope.inputValue = res.data;
      console.log($scope.inputValue);
    });
  };

  $scope.render();

  $scope.check = {
    id: false,
    name: false,
    brand: false,
    price: false,
  };

  $scope.edit = function () {
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
      const dataEdit = { ...$scope.inputValue };
      $http.put(AURL, dataEdit).then((res) => {
        if ((res.status = 200)) {
          alert("Sua dien thoai thanh cong");
          $location.path("/list-phone");
        }
      });
    }
  };
};
