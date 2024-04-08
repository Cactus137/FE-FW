window.EditController = function ($scope, $location, $http, $routeParams) {
  const apiProduct = `http://localhost:3000/products/${$routeParams.id}`;

  $scope.render = function () {
    $http.get(apiProduct).then((res) => {
      $scope.inputValue = res.data;
    });
  };
  $scope.render();

  $scope.check = {
    id: false,
    ten: false,
    gia: false,
  };

  $scope.edit = function () {
    let flag = false;

    if (!$scope.inputValue || !$scope.inputValue.ten) {
      $scope.check.ten = true;
      flag = true;
    } else {
      $scope.check.ten = false;
      flag = false;
    }
    
    if (
      !$scope.inputValue ||
      !$scope.inputValue.gia ||
      isNaN($scope.inputValue.gia) ||
      $scope.inputValue.gia < 300
    ) {
      $scope.check.gia = true;
      flag = true;
    } else {
      $scope.check.gia = false;
      flag = false;
    }

    if (flag == false) {
      const dataEdit = { ...$scope.inputValue };
      $http.put(apiProduct, dataEdit).then(function (res) {
        if (res.status == 200) {
          alert("Sửa điện thoại thành công");
          $location.path("/list-phone");
        }
      });
    }
  };
};
