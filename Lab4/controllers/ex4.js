const app = angular.module("myApp", []);

app.controller("main", ($scope) => {
  $scope.dienTich = 0;
  $scope.chuVi = 0;
  $scope.submit = () => {
    $scope.dienTich = parseFloat($scope.a) * parseFloat($scope.b);
    $scope.chuVi = (parseFloat($scope.a) + parseFloat($scope.b)) * 2;
  };
});
