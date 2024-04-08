window.AddController = function ($scope, $location, $http) {
  const apiUrl = "http://localhost:3000/products";
  $scope.check = {
    id: false,
    ten: false,
    gia: false,
  };

  $scope.add = function () {
    let flag = false;

    if (!$scope.inputValue || !$scope.inputValue.id) {
      $scope.check.id = true;
    } else {
      $scope.check.id = false;
    }
    if (!$scope.inputValue || !$scope.inputValue.ten) {
      $scope.check.ten = true;
    } else {
      $scope.check.ten = false;
    }
    if (!$scope.inputValue || !$scope.inputValue.gia || isNaN($scope.inputValue.gia) || $scope.inputValue.gia < 300) {
      $scope.check.gia = true;
    } else {
      $scope.check.gia = false;
    }

    for (const key in $scope.check) {
      if ($scope.check[key] == true) {
        flag = true;
      }
    }

    if (flag == false) {
      const dataAdd = { ...$scope.inputValue };
      $http.post(apiUrl, dataAdd).then(function (res) {
        if (res.status == 201) {
          alert("Thêm điện thoại thành công");
          $location.path("/list-phone");
        }
      });
    }
  };
};
