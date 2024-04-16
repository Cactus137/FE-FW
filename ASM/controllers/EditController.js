window.EditController = function ($http, $location, $scope, $routeParams) {
  const apiUrl = `http://localhost:3000/foods/${$routeParams.id}`;

  $scope.Date = function (arg) {
    return new Date(arg);
  };

  $scope.render = function () {
    $http.get(apiUrl).then((res) => {
      $scope.inputValue = res.data;
      $scope.inputValue.han_su_dung = new Date($scope.inputValue.han_su_dung);
    });
  };

  $scope.render();

  $scope.edit = function () {
    const dataEdit = { ...$scope.inputValue };
    $http.put(apiUrl, dataEdit).then(function (res) {
      if (res.status == 200) {
        alert("Chỉnh sửa đồ ăn thành công");
        $location.path("/list-foods");
      }
    });
  };
};
