window.AddController = function ($scope, $http, $location) {
  $scope.title = "Add Customer";

  // $scope.inputValue.name = ""
  // $scope.inputValue.price = ""

  const apiUrl = "http://localhost:3000/customers";

  $scope.add = function () {
    const dataAdd = { ...$scope.inputValue };
    $http.post(apiUrl, dataAdd).then(function (res) {
      if (res.status == 201) {
        alert("Add Customer successfully!");
        $location.path("/");
      }
    });
  };
};
