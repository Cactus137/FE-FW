window.ListController = function ($http, $scope, $location) {
  const AURL = "http://localhost:3000/products";

  $scope.render = function () {
    $http.get(AURL).then(res => {
        $scope.products = res.data 
    })
  };

  $scope.render();
};
