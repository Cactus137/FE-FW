const app = angular.module("myApp", []);

app.controller("footer", ($scope) => {
  $scope.hotline = "0382606012";
  $scope.email = "Blackwhilee04@gmail.com";
  $scope.address =
    "7, Lane 14/126, Me Tri Ha Ward, Nam Tu Liem District, Hanoi City";
  $scope.copyright = "Copyright © 2024 C-Plane. All rights reserved.";
});
