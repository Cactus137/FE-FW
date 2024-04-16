window.AddController = function ($http, $location, $scope) {
  const apiUrl = "http://localhost:3000/foods";

  $scope.check = {
    ma_sp: false,
    ten: false,
    loai: false,
    han_su_dung: false,
    gia: false,
  };
  $scope.add = function () {
    let flag = false;

    if (!$scope.inputValue || !$scope.inputValue.ma_sp) {
      $scope.check.ma_sp = true;
    } else {
      $scope.check.ma_sp = false;
    }

    if (!$scope.inputValue || !$scope.inputValue.ten) {
      $scope.check.ten = true;
    } else {
      $scope.check.ten = false;
    }

    if (!$scope.inputValue || !$scope.inputValue.loai) {
      $scope.check.loai = true;
    } else {
      $scope.check.loai = false;
    }

    if (!$scope.inputValue || !$scope.inputValue.han_su_dung) {
      $scope.check.han_su_dung = true;
    } else {
      $scope.check.han_su_dung = false;
    }

    if (
      !$scope.inputValue ||
      !$scope.inputValue.gia ||
      isNaN($scope.inputValue.gia) ||
      $scope.inputValue.gia < 100
    ) {
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
          alert("Thêm đồ ăn thành công");
          $location.path("/list-foods");
        }
      });
    }
  };
};
