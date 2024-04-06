window.ListController = function ($scope, $http, $location) {
  const apiUrl = "http://localhost:3000/flights";
  $scope.render = function () {
    $http.get(apiUrl).then(function (res) {
      $scope.flights = res.data;
    });
  };

  // $scope.delete = function (id) {
  //     $http.delete(`${apiUrl}/${id}`).then((res) => {
  //         alert("Delete Product successfully!");
  //         $location.path('/list')
  //       });
  //   };
  $scope.render();
};
