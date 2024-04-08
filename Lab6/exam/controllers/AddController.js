window.AddController = function ($scope, $http, $location) {
  $scope.title = "Add Customer";

  const apiUrl = "http://localhost:3000/customers";

  $scope.check = {
    name: false,
    age: false,
    address: false,
    phone: false,
  };

  $scope.add = function () {
    let flag = true;
    if (!$scope.inputValue || !$scope.inputValue.name) {
      $scope.check.name = true;
      flag = false;
    } else {
      $scope.check.name = false;
      flag = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.age) {
      $scope.check.age = true;
      flag = false;
    } else {
      $scope.check.age = false;
      flag = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.address) {
      $scope.check.address = true;
      flag = false;
    } else {
      $scope.check.address = false;
      flag = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.phone) {
      $scope.check.phone = true;
      flag = false;
    } else {
      $scope.check.phone = false;
      flag = true;
    }

    if (flag) {
      const dataAdd = { ...$scope.inputValue };
      $http.post(apiUrl, dataAdd).then(function (res) {
        if (res.status == 201) {
          alert("Add Customer successfully!");
          $location.path("/");
        }
      });
    }
  };
};
